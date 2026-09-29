import * as THREE from 'three';
import { World } from '@/world/World';
import { NavGrid } from './NavGrid';
import { SquadManager } from './Squad';
import { canPerceiveTarget, canHear } from './Perception';
import { chooseCover } from './Cover';
import { ARCHETYPES, ArchetypeDef } from './EnemyDefs';
import { WEAPONS } from '@/weapons/WeaponDefs';
import { WeaponSystem, FireContext } from '@/weapons/WeaponSystem';
import { CombatantRegistry, Combatant, HitPart } from '@/combat/Combatant';
import { EffectsSystem } from '@/combat/Effects';
import { ThrowableSystem } from '@/weapons/Throwables';
import { EventBus } from '@/core/EventBus';
import { GameEvents } from '@/core/Events';
import { buildCharacterModel, updateCharacterPose, CharacterParts } from '@/characters/CharacterModel';
import { buildWeaponMesh } from '@/weapons/WeaponModels';
import { clamp, clamp01, angleDiff, damp } from '@/utils/MathUtils';
import { PlayerController } from '@/player/PlayerController';
import { PlayerHealth } from '@/player/PlayerHealth';

export type EnemyState =
  | 'idle'
  | 'patrol'
  | 'investigate'
  | 'search'
  | 'combat'
  | 'takeCover'
  | 'flank'
  | 'retreat'
  | 'dead';

export interface EnemyDeps {
  world: World;
  navGrid: NavGrid;
  squad: SquadManager;
  registry: CombatantRegistry;
  effects: EffectsSystem;
  throwables: ThrowableSystem;
  bus: EventBus<GameEvents>;
  player: PlayerController;
  playerHealth: PlayerHealth;
  playerCombatant: Combatant;
}

let enemyCounter = 0;

export class EnemyController implements Combatant {
  id: string;
  team: 'enemy' = 'enemy';
  archetype: ArchetypeDef;
  squadId: string;
  position = new THREE.Vector3();
  yaw = 0;
  health: number;
  maxHealth: number;
  weapon: WeaponSystem;
  state: EnemyState = 'idle';
  private stateTimer = 0;
  private velocity = new THREE.Vector3();
  private path: Array<[number, number]> = [];
  private pathIndex = 0;
  private pathRecalcTimer = Math.random() * 1.2;
  private perceptionTimer = Math.random() * 0.3;
  private aimTimer = 0;
  private burstCount = 0;
  private burstTarget = 0;
  private burstPauseTimer = 0;
  private spawnPoint: THREE.Vector3;
  private patrolTarget: THREE.Vector3 | null = null;
  private wasVisible = false;
  private deadT = 0;
  private isMoving = false;
  private moveSpeed01 = 0;
  private aiming = false;
  private firingVisual = 0;
  private coverPos: [number, number] | null = null;
  private flankTarget: [number, number] | null = null;
  private hitFlashTimer = 0;
  private alive = true;
  private group: THREE.Group;
  private modelParts: CharacterParts;
  private weaponMesh: ReturnType<typeof buildWeaponMesh>;
  private deps: EnemyDeps;
  private debugName: string;

  constructor(deps: EnemyDeps, archetypeId: keyof typeof ARCHETYPES, squadId: string, spawn: THREE.Vector3) {
    this.deps = deps;
    this.archetype = ARCHETYPES[archetypeId];
    this.squadId = squadId;
    this.id = `enemy-${enemyCounter++}`;
    this.debugName = `${this.archetype.name}#${this.id}`;
    this.health = this.archetype.health;
    this.maxHealth = this.archetype.health;
    this.spawnPoint = spawn.clone();
    this.position.copy(spawn);

    this.weapon = new WeaponSystem(WEAPONS[this.archetype.weaponId], WEAPONS[this.archetype.weaponId].reserveMax);

    this.modelParts = buildCharacterModel({
      uniform: this.archetype.color,
      uniformDark: this.archetype.colorDark,
      skin: 0xc9a37b,
      helmet: this.archetype.helmetLevel > 0 ? 0x2b2b26 : undefined,
      vest: this.archetype.vestLevel > 0 ? 0x33352c : undefined,
    });
    this.group = this.modelParts.root;
    this.weaponMesh = buildWeaponMesh(this.archetype.weaponId);
    this.modelParts.weaponSocket.add(this.weaponMesh.group);
    deps.world.scene.add(this.group);

    deps.registry.register(this, [
      { mesh: this.modelParts.headMesh, part: 'head' },
      { mesh: this.modelParts.torsoMesh, part: 'torso' },
    ]);
    this.modelParts.root.traverse((o) => {
      if (o.name === 'hit-limb') deps.registry.register(this, [{ mesh: o, part: 'limb' }]);
    });

    deps.squad.getOrCreate(squadId).members.add(this.id);
  }

  isAlive(): boolean {
    return this.alive;
  }

  getPosition(): THREE.Vector3 {
    return this.position.clone();
  }

  getHeadPosition(): THREE.Vector3 {
    return this.modelParts.headMesh.getWorldPosition(new THREE.Vector3());
  }

  getTorsoPosition(): THREE.Vector3 {
    return this.modelParts.torsoMesh.getWorldPosition(new THREE.Vector3());
  }

  applyDamage(amount: number, fromDirection: THREE.Vector3, part: HitPart, _sourceId: string): void {
    if (!this.alive) return;
    const reduction = part === 'head' ? this.archetype.helmetLevel * 0.16 : this.archetype.vestLevel * 0.12;
    const finalAmount = Math.max(1, amount * (1 - reduction));
    this.health = Math.max(0, this.health - finalAmount);
    this.hitFlashTimer = 0.15;

    const bb = this.deps.squad.getOrCreate(this.squadId);
    bb.lastKnownPlayerPos = this.deps.player.position.clone();
    bb.lastKnownPlayerTime = this.deps.world.elapsed;
    bb.alertLevel = 2;

    if (this.health <= 0) {
      this.alive = false;
      this.state = 'dead';
      this.deps.bus.emit('kill', { targetId: this.id, isPlayer: false, weaponId: '', headshot: part === 'head' });
    }
  }

  onHitReaction(): void {
    // Immediate alert handled in applyDamage; reserved for future flinch animation hook.
  }

  private setPath(waypoints: Array<[number, number]> | null): void {
    this.path = waypoints ?? [];
    this.pathIndex = 0;
  }

  private moveToward(target: THREE.Vector3, dt: number, speed: number): void {
    const dx = target.x - this.position.x;
    const dz = target.z - this.position.z;
    const dist = Math.hypot(dx, dz);
    this.isMoving = dist > 0.3;
    this.moveSpeed01 = clamp01(speed / this.archetype.sprintSpeed);
    if (dist < 0.05) return;
    const dirX = dx / dist;
    const dirZ = dz / dist;
    const desiredVX = dirX * speed;
    const desiredVZ = dirZ * speed;
    this.velocity.x = damp(this.velocity.x, desiredVX, 10, dt);
    this.velocity.z = damp(this.velocity.z, desiredVZ, 10, dt);

    let nx = this.position.x + this.velocity.x * dt;
    let nz = this.position.z + this.velocity.z * dt;
    [nx, nz] = this.deps.world.colliders.resolve(nx, nz, this.position.y, 0.4, 1.7);
    [nx, nz] = this.deps.world.clampToBounds(nx, nz);
    this.position.x = nx;
    this.position.z = nz;
    this.position.y = this.deps.world.heightAt(nx, nz);

    if (!this.aiming) {
      const desiredYaw = Math.atan2(dirX, dirZ);
      this.yaw += angleDiff(this.yaw, desiredYaw) * Math.min(1, dt * 8);
    }
  }

  private followPath(dt: number, speed: number): boolean {
    if (this.path.length === 0) return false;
    if (this.pathIndex >= this.path.length) return true;
    const [wx, wz] = this.path[this.pathIndex];
    const target = new THREE.Vector3(wx, 0, wz);
    const dist = Math.hypot(wx - this.position.x, wz - this.position.z);
    if (dist < 1.2) {
      this.pathIndex++;
      if (this.pathIndex >= this.path.length) return true;
    }
    this.moveToward(target, dt, speed);
    return false;
  }

  private requestPathTo(x: number, z: number): void {
    const wp = this.deps.navGrid.findPath(this.position.x, this.position.z, x, z);
    this.setPath(wp);
  }

  private facePoint(x: number, z: number, dt: number, turnSpeed = 6): void {
    const dx = x - this.position.x;
    const dz = z - this.position.z;
    const desiredYaw = Math.atan2(dx, dz);
    this.yaw += angleDiff(this.yaw, desiredYaw) * Math.min(1, dt * turnSpeed);
  }

  private perceivePlayer(now: number): boolean {
    if (!this.deps.playerHealth.alive) return false;
    const eyePos = this.position.clone().add(new THREE.Vector3(0, 1.55, 0));
    const targetPos = this.deps.player.position.clone().add(new THREE.Vector3(0, this.deps.player.eyeHeight * 0.7, 0));
    const visible = canPerceiveTarget({
      eyePos,
      forwardYaw: this.yaw,
      fov: this.archetype.visionFOV,
      range: this.archetype.visionRange,
      targetPos,
      colliders: this.deps.world.colliders,
      throwables: this.deps.throwables,
    });
    if (visible) {
      this.deps.squad.reportSighting(this.squadId, this.deps.player.position, now);
    }
    return visible;
  }

  private tryHearPlayer(now: number): void {
    void now;
  }

  update(dt: number, now: number): void {
    if (this.state === 'dead') {
      this.deadT = Math.min(1, this.deadT + dt * 1.5);
      updateCharacterPose(this.modelParts, {
        moveSpeed01: 0,
        aiming: false,
        crouching: false,
        aimPitch: 0,
        moving: false,
        firing: false,
        deadT: this.deadT,
      }, dt);
      this.syncTransform();
      return;
    }

    this.hitFlashTimer = Math.max(0, this.hitFlashTimer - dt);
    this.weapon.update(dt);
    this.stateTimer += dt;

    const bb = this.deps.squad.getOrCreate(this.squadId);
    this.deps.squad.decay(this.squadId, now);

    this.perceptionTimer -= dt;
    let seesPlayer = false;
    if (this.perceptionTimer <= 0) {
      this.perceptionTimer = 0.15 + Math.random() * 0.1;
      seesPlayer = this.perceivePlayer(now);
      this.wasVisible = seesPlayer;
    } else {
      seesPlayer = this.wasVisible;
    }
    this.tryHearPlayer(now);

    this.decideState(seesPlayer, bb, now);
    this.act(dt, now, seesPlayer, bb);

    this.aiming = this.state === 'combat' || this.state === 'takeCover' || this.state === 'flank';
    const aimPitch = this.aiming ? this.computeAimPitch() : 0;
    updateCharacterPose(
      this.modelParts,
      {
        moveSpeed01: this.moveSpeed01,
        aiming: this.aiming,
        crouching: this.state === 'takeCover',
        aimPitch,
        moving: this.isMoving,
        firing: this.firingVisual > 0,
        deadT: 0,
      },
      dt,
    );
    this.firingVisual = Math.max(0, this.firingVisual - dt);
    this.syncTransform();
  }

  private computeAimPitch(): number {
    const headPos = this.deps.player.position.clone().add(new THREE.Vector3(0, this.deps.player.eyeHeight * 0.6, 0));
    const dy = headPos.y - (this.position.y + 1.5);
    const dist = Math.hypot(headPos.x - this.position.x, headPos.z - this.position.z) || 1;
    return clamp(Math.atan2(dy, dist), -1.1, 1.1);
  }

  private decideState(seesPlayer: boolean, bb: ReturnType<SquadManager['getOrCreate']>, now: number): void {
    if (this.state === 'retreat') {
      if (this.stateTimer > 5 && this.health > this.maxHealth * 0.4) this.setState('combat', now);
      return;
    }

    if (this.health < this.maxHealth * this.archetype.fleeHealthFrac) {
      this.setState('retreat', now);
      return;
    }

    if (seesPlayer || bb.alertLevel === 2) {
      if (this.state !== 'combat' && this.state !== 'takeCover' && this.state !== 'flank') {
        this.setState('combat', now);
      }
    } else if (bb.alertLevel === 1) {
      if (this.state !== 'investigate' && this.state !== 'search') this.setState('investigate', now);
    } else {
      if (this.state !== 'patrol' && this.state !== 'idle') this.setState('patrol', now);
    }

    if (this.state === 'combat' && !seesPlayer && bb.lastKnownPlayerTime > 0 && now - bb.lastKnownPlayerTime > 4) {
      this.setState('search', now);
    }

    if (this.state === 'combat' && this.stateTimer > 3.5 + Math.random() * 3) {
      if (this.deps.squad.claimFlanker(this.squadId, this.id) && Math.random() < 0.5) {
        this.setState('flank', now);
      } else if (Math.random() < 0.4) {
        this.setState('takeCover', now);
      }
    }
  }

  private setState(next: EnemyState, now: number): void {
    if (this.state === next) return;
    if (this.state === 'flank') this.deps.squad.releaseFlanker(this.squadId, this.id);
    if (this.state === 'takeCover') this.deps.squad.releaseCover(this.squadId, this.id);
    this.state = next;
    this.stateTimer = 0;
    this.path = [];
    this.pathIndex = 0;
    if (next === 'combat') {
      this.aimTimer = this.archetype.reactionTime + this.archetype.aimTime;
      this.burstCount = 0;
      this.burstTarget = 0;
      this.burstPauseTimer = 0;
    }
    void now;
  }

  private act(dt: number, now: number, seesPlayer: boolean, bb: ReturnType<SquadManager['getOrCreate']>): void {
    switch (this.state) {
      case 'idle':
        this.isMoving = false;
        this.moveSpeed01 = 0;
        if (this.stateTimer > 2 + Math.random() * 3) this.setState('patrol', now);
        break;

      case 'patrol': {
        if (!this.patrolTarget || this.position.distanceTo(this.patrolTarget) < 2) {
          const a = Math.random() * Math.PI * 2;
          const r = 8 + Math.random() * 22;
          this.patrolTarget = new THREE.Vector3(this.spawnPoint.x + Math.cos(a) * r, 0, this.spawnPoint.z + Math.sin(a) * r);
          this.requestPathTo(this.patrolTarget.x, this.patrolTarget.z);
        }
        const reached = this.followPath(dt, this.archetype.moveSpeed * 0.55);
        if (reached) this.patrolTarget = null;
        break;
      }

      case 'investigate': {
        const target = bb.lastKnownPlayerPos ?? this.spawnPoint;
        this.pathRecalcTimer -= dt;
        if (this.pathRecalcTimer <= 0) {
          this.pathRecalcTimer = 1 + Math.random() * 0.5;
          this.requestPathTo(target.x, target.z);
        }
        const arrived = this.followPath(dt, this.archetype.moveSpeed * 0.85);
        if (arrived) this.setState('search', now);
        break;
      }

      case 'search': {
        this.isMoving = false;
        this.moveSpeed01 = 0.1;
        this.facePoint(this.position.x + Math.sin(now * 0.7) * 5, this.position.z + Math.cos(now * 0.7) * 5, dt, 1.5);
        if (this.stateTimer > 6 + Math.random() * 4) {
          bb.alertLevel = 0;
          this.setState('patrol', now);
        }
        break;
      }

      case 'combat':
        this.handleCombat(dt, now, seesPlayer, bb, this.position.x, this.position.z);
        break;

      case 'takeCover': {
        if (!this.coverPos) {
          const c = chooseCover(
            this.deps.world.colliders,
            this.deps.squad,
            this.squadId,
            this.id,
            this.position.x,
            this.position.z,
            bb.lastKnownPlayerPos?.x ?? this.position.x,
            bb.lastKnownPlayerPos?.z ?? this.position.z,
          );
          if (c) {
            this.coverPos = [c.standX, c.standZ];
            this.requestPathTo(c.standX, c.standZ);
          } else {
            this.setState('combat', now);
            break;
          }
        }
        const [cx, cz] = this.coverPos;
        const arrived = this.followPath(dt, this.archetype.sprintSpeed);
        if (arrived || this.position.distanceTo(new THREE.Vector3(cx, 0, cz)) < 2.5) {
          this.isMoving = false;
          this.moveSpeed01 = 0;
          this.handleCombat(dt, now, seesPlayer, bb, cx, cz);
        }
        if (this.stateTimer > 6) {
          this.deps.squad.releaseCover(this.squadId, this.id);
          this.coverPos = null;
          this.setState('combat', now);
        }
        break;
      }

      case 'flank': {
        if (!this.flankTarget) {
          const threat = bb.lastKnownPlayerPos ?? this.position;
          const angleToSelf = Math.atan2(this.position.x - threat.x, this.position.z - threat.z);
          const side = Math.random() < 0.5 ? 1 : -1;
          const flankAngle = angleToSelf + side * (Math.PI / 2 + Math.random() * 0.4);
          const r = 16 + Math.random() * 10;
          this.flankTarget = [threat.x + Math.sin(flankAngle) * r, threat.z + Math.cos(flankAngle) * r];
          this.requestPathTo(this.flankTarget[0], this.flankTarget[1]);
        }
        const reached = this.followPath(dt, this.archetype.sprintSpeed);
        if (reached) {
          this.deps.squad.releaseFlanker(this.squadId, this.id);
          this.flankTarget = null;
          this.setState('combat', now);
        }
        if (this.stateTimer > 7) {
          this.deps.squad.releaseFlanker(this.squadId, this.id);
          this.flankTarget = null;
          this.setState('combat', now);
        }
        break;
      }

      case 'retreat': {
        const away = this.position.clone().sub(this.deps.player.position).normalize();
        const target = this.spawnPoint.clone().addScaledVector(away, 5);
        this.pathRecalcTimer -= dt;
        if (this.pathRecalcTimer <= 0 || this.path.length === 0) {
          this.pathRecalcTimer = 1.5;
          this.requestPathTo(target.x, target.z);
        }
        this.followPath(dt, this.archetype.sprintSpeed);
        break;
      }
    }
  }

  private handleCombat(
    dt: number,
    now: number,
    seesPlayer: boolean,
    bb: ReturnType<SquadManager['getOrCreate']>,
    anchorX: number,
    anchorZ: number,
  ): void {
    const targetPos = bb.lastKnownPlayerPos ?? this.deps.player.position;
    this.facePoint(targetPos.x, targetPos.z, dt, 5);

    const distToAnchor = Math.hypot(this.position.x - anchorX, this.position.z - anchorZ);
    if (this.state === 'combat' && distToAnchor > 1.5) {
      const distToTarget = this.position.distanceTo(targetPos);
      const wantRetreatStep = distToTarget < this.archetype.preferredRange * 0.6;
      const moveDir = wantRetreatStep
        ? this.position.clone().sub(targetPos).normalize()
        : distToTarget > this.archetype.preferredRange * 1.4
          ? targetPos.clone().sub(this.position).normalize()
          : null;
      if (moveDir) {
        this.moveToward(this.position.clone().addScaledVector(moveDir, 4), dt, this.archetype.moveSpeed);
      } else {
        this.isMoving = false;
        this.moveSpeed01 = 0;
      }
    } else {
      this.isMoving = false;
      this.moveSpeed01 = 0;
    }

    if (!seesPlayer) return;

    if (this.aimTimer > 0) {
      this.aimTimer -= dt;
      return;
    }

    if (this.burstPauseTimer > 0) {
      this.burstPauseTimer -= dt;
      return;
    }

    if (this.weapon.isDry) {
      if (this.weapon.startReload()) return;
    }
    if (this.weapon.reloading) return;

    if (this.burstCount >= this.burstTarget) {
      this.burstCount = 0;
      this.burstTarget = this.archetype.fireBurstMin + Math.floor(Math.random() * (this.archetype.fireBurstMax - this.archetype.fireBurstMin + 1));
      this.burstPauseTimer = this.archetype.burstPause * (0.7 + Math.random() * 0.6);
      return;
    }

    const muzzlePos = this.weaponMesh.muzzle.getWorldPosition(new THREE.Vector3());
    const eyePos = this.position.clone().add(new THREE.Vector3(0, 1.55, 0));
    const headAim = this.deps.player.position.clone().add(new THREE.Vector3(0, this.deps.player.eyeHeight * 0.85, 0));
    const dir = headAim.clone().sub(eyePos).normalize();

    const distance = eyePos.distanceTo(headAim);
    const movePenalty = this.deps.player.sprinting ? 0.35 : this.deps.player.speedFraction > 0.1 ? 0.15 : 0;
    const rangePenalty = clamp01((distance - this.archetype.preferredRange) / (this.archetype.visionRange - this.archetype.preferredRange)) * 0.35;
    const accuracy = clamp01(this.archetype.baseAccuracy - movePenalty - rangePenalty);
    const errorAngle = (1 - accuracy) * 0.09;

    if (errorAngle > 0.0005) {
      const rand = new THREE.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2);
      const perp = rand.sub(dir.clone().multiplyScalar(rand.dot(dir))).normalize();
      const angle = Math.random() * errorAngle;
      dir.applyAxisAngle(perp, angle).normalize();
    }

    const ctx: FireContext = {
      origin: eyePos,
      direction: dir,
      muzzleWorldPos: muzzlePos,
      environmentTargets: this.deps.world.colliders.raycastMeshes,
      registry: this.deps.registry,
      effects: this.deps.effects,
      bus: this.deps.bus,
      excludeCombatantId: this.id,
      isPlayerShooter: false,
      movingSpreadFactor: 0,
      sprinting: false,
      aiming: true,
    };
    const result = this.weapon.tryFire(now, ctx);
    if (result) {
      this.burstCount++;
      this.firingVisual = 0.08;
    }
  }

  private syncTransform(): void {
    this.group.position.copy(this.position);
    this.group.rotation.y = this.yaw;
  }

  dispose(): void {
    this.deps.world.scene.remove(this.group);
    this.deps.registry.unregister(this);
  }
}
