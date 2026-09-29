import * as THREE from 'three';
import { InputManager } from '@/core/InputManager';
import { PlayerController } from './PlayerController';
import { PlayerCamera } from './PlayerCamera';
import { PlayerHealth } from './PlayerHealth';
import { Inventory } from '@/loot/Inventory';
import { World } from '@/world/World';
import { CombatantRegistry } from '@/combat/Combatant';
import { EffectsSystem } from '@/combat/Effects';
import { ThrowableSystem } from '@/weapons/Throwables';
import { EventBus } from '@/core/EventBus';
import { GameEvents } from '@/core/Events';
import { PlayerCombatant } from './PlayerCombatant';
import { buildCharacterModel, updateCharacterPose, CharacterParts } from '@/characters/CharacterModel';
import { buildWeaponMesh, WeaponMesh } from '@/weapons/WeaponModels';
import { FireContext } from '@/weapons/WeaponSystem';

export interface PlayerWeaponDeps {
  world: World;
  input: InputManager;
  player: PlayerController;
  camera: PlayerCamera;
  health: PlayerHealth;
  inventory: Inventory;
  registry: CombatantRegistry;
  effects: EffectsSystem;
  throwables: ThrowableSystem;
  bus: EventBus<GameEvents>;
  combatant: PlayerCombatant;
}

export class PlayerWeaponController {
  modelParts: CharacterParts;
  private weaponMesh: WeaponMesh | null = null;
  private currentWeaponId: string | null = null;
  private deps: PlayerWeaponDeps;
  shotsFired = 0;
  shotsHit = 0;
  damageDealt = 0;

  constructor(deps: PlayerWeaponDeps) {
    this.deps = deps;
    this.modelParts = buildCharacterModel({
      uniform: 0x50543c,
      uniformDark: 0x373a29,
      skin: 0xc9a37b,
      helmet: undefined,
      vest: undefined,
    });
    deps.world.scene.add(this.modelParts.root);
    deps.registry.register(deps.combatant, [
      { mesh: this.modelParts.headMesh, part: 'head' },
      { mesh: this.modelParts.torsoMesh, part: 'torso' },
    ]);
    this.modelParts.root.traverse((o) => {
      if (o.name === 'hit-limb') deps.registry.register(deps.combatant, [{ mesh: o, part: 'limb' }]);
    });

    deps.bus.on('damage', (e) => {
      if (e.sourceId === 'player' && !e.isPlayer) {
        this.shotsHit++;
        this.damageDealt += e.amount;
      }
    });
  }

  /** Aiming/armor/slot-switch state that must be resolved before PlayerController.update() runs. */
  preMovementUpdate(): void {
    const input = this.deps.input;
    const player = this.deps.player;
    const inv = this.deps.inventory;

    if (!input.enabled) return;

    player.aiming = input.isMouseDown(2) && !player.sprinting;
    const lookSensitivity = player.aiming ? input.settings.aimSensitivity : input.settings.sensitivity;
    player.setLookDelta(input.mouseDX, input.mouseDY, lookSensitivity, input.settings.invertY);

    this.deps.health.vestLevel = inv.state.vestLevel;
    this.deps.health.helmetLevel = inv.state.helmetLevel;

    if (input.wasPressed('Digit1')) inv.selectSlot('primary1');
    if (input.wasPressed('Digit2')) inv.selectSlot('primary2');
    if (input.wasPressed('Digit3')) inv.selectSlot('sidearm');

    this.syncWeaponMesh();
  }

  private syncWeaponMesh(): void {
    const active = this.deps.inventory.getActiveWeapon();
    const id = active?.def.id ?? null;
    if (id === this.currentWeaponId) return;
    this.currentWeaponId = id;
    if (this.weaponMesh) {
      this.modelParts.weaponSocket.remove(this.weaponMesh.group);
      this.weaponMesh = null;
    }
    if (id) {
      this.weaponMesh = buildWeaponMesh(id);
      this.modelParts.weaponSocket.add(this.weaponMesh.group);
    }
  }

  /** Fire/reload/throw/heal + pose sync — runs after PlayerController.update() has moved the player this frame. */
  postMovementUpdate(dt: number, now: number): void {
    const input = this.deps.input;
    const player = this.deps.player;
    const inv = this.deps.inventory;
    const health = this.deps.health;

    this.modelParts.root.position.copy(player.position);
    this.modelParts.root.rotation.y = player.yaw;
    this.modelParts.root.updateMatrixWorld(true);

    const weapon = inv.getActiveWeapon();
    let firing = false;

    if (input.enabled && weapon) {
      if (input.wasPressed('KeyR')) {
        if (weapon.startReload()) {
          this.deps.bus.emit('weapon:reload', { weaponId: weapon.def.id, isPlayer: true, position: player.position.clone() });
          health.cancelHeal();
        }
      }

      const triggerActive = weapon.def.automatic ? input.isMouseDown(0) : input.wasMousePressed(0);
      if (triggerActive && !health.isHealing) {
        const muzzleWorld = this.weaponMesh ? this.weaponMesh.muzzle.getWorldPosition(new THREE.Vector3()) : player.eyePosition;
        const ray = this.deps.camera.getAimRay(player);
        const ctx: FireContext = {
          origin: ray.origin,
          direction: ray.direction,
          muzzleWorldPos: muzzleWorld,
          environmentTargets: this.deps.world.colliders.raycastMeshes,
          registry: this.deps.registry,
          effects: this.deps.effects,
          bus: this.deps.bus,
          excludeCombatantId: 'player',
          isPlayerShooter: true,
          movingSpreadFactor: player.speedFraction,
          sprinting: player.sprinting,
          aiming: player.aiming,
        };
        const result = weapon.tryFire(now, ctx);
        if (result) {
          this.shotsFired++;
          firing = true;
          this.deps.camera.addRecoil(result.recoilPitch, result.recoilYaw);
          this.deps.camera.addShake(0.02, 0.05);
        }
      }

      if (input.wasPressed('KeyG')) {
        const kind = inv.state.frags > 0 ? 'frag' : inv.state.smokes > 0 ? 'smoke' : null;
        if (kind && inv.useThrowable(kind)) {
          const dir = this.deps.camera.getAimRay(player).direction;
          this.deps.throwables.throw(kind, player.eyePosition, dir, 'player');
        }
      }

      if (input.wasPressed('Digit4')) {
        const preferMedkit = health.health <= 40 && inv.state.medkits > 0;
        const kind: 'bandage' | 'medkit' | null = preferMedkit
          ? 'medkit'
          : inv.state.bandages > 0
            ? 'bandage'
            : inv.state.medkits > 0
              ? 'medkit'
              : null;
        if (kind && inv.useHeal(kind)) health.startHeal(kind);
      }
    }

    weapon?.update(dt);

    const aimPitch = player.pitch;
    updateCharacterPose(
      this.modelParts,
      {
        moveSpeed01: player.speedFraction,
        aiming: player.aiming,
        crouching: player.stance === 'crouch',
        aimPitch,
        moving: player.speedFraction > 0.05,
        firing,
        deadT: health.alive ? 0 : 1,
      },
      dt,
    );
  }

  get activeWeaponLabel(): string {
    return this.deps.inventory.getActiveWeapon()?.def.name ?? '—';
  }
}
