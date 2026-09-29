import * as THREE from 'three';
import { WeaponDef } from './WeaponDefs';
import { EffectsSystem, SurfaceKind } from '@/combat/Effects';
import { CombatantRegistry, HitPart } from '@/combat/Combatant';
import { EventBus } from '@/core/EventBus';
import { GameEvents } from '@/core/Events';

export interface FireContext {
  origin: THREE.Vector3;
  direction: THREE.Vector3;
  muzzleWorldPos: THREE.Vector3;
  environmentTargets: THREE.Object3D[];
  registry: CombatantRegistry;
  effects: EffectsSystem;
  bus: EventBus<GameEvents>;
  excludeCombatantId: string;
  isPlayerShooter: boolean;
  movingSpreadFactor: number; // 0 = still, 1 = full moving penalty
  sprinting: boolean;
  aiming: boolean;
}

function surfaceFromObject(obj: THREE.Object3D): SurfaceKind {
  const name = obj.name || obj.parent?.name || '';
  if (name === 'terrain') return 'terrain';
  if (name.includes('rock') || name.includes('veg')) return 'rock';
  return 'concrete';
}

const raycaster = new THREE.Raycaster();

/** Where a weapon's reserve ammo comes from. AI carries a private pool; the player pulls from the shared Inventory pool. */
export interface AmmoSource {
  get(type: WeaponDef['ammoType']): number;
  consume(type: WeaponDef['ammoType'], amount: number): number;
  add(type: WeaponDef['ammoType'], amount: number): void;
}

class SelfPoolAmmoSource implements AmmoSource {
  private pool: Record<string, number> = {};
  constructor(
    private type: WeaponDef['ammoType'],
    initial: number,
  ) {
    this.pool[type] = initial;
  }
  get(type: WeaponDef['ammoType']): number {
    return type === this.type ? (this.pool[type] ?? 0) : 0;
  }
  consume(type: WeaponDef['ammoType'], amount: number): number {
    if (type !== this.type) return 0;
    const take = Math.min(amount, this.pool[type] ?? 0);
    this.pool[type] -= take;
    return take;
  }
  add(type: WeaponDef['ammoType'], amount: number): void {
    if (type === this.type) this.pool[type] = (this.pool[type] ?? 0) + amount;
  }
}

export class WeaponSystem {
  def: WeaponDef;
  magAmmo: number;
  reloading = false;
  private ammoSource: AmmoSource;
  private reloadTimer = 0;
  private lastFireAt = -999;
  private fireHeld = false;
  onReloadComplete: (() => void) | null = null;

  constructor(def: WeaponDef, startingReserve: number, ammoSource?: AmmoSource) {
    this.def = def;
    this.magAmmo = def.magSize;
    this.ammoSource = ammoSource ?? new SelfPoolAmmoSource(def.ammoType, startingReserve);
  }

  get reserveAmmo(): number {
    return this.ammoSource.get(this.def.ammoType);
  }

  get canReload(): boolean {
    return !this.reloading && this.magAmmo < this.def.magSize && this.reserveAmmo > 0;
  }

  get isDry(): boolean {
    return this.magAmmo === 0 && this.reserveAmmo === 0;
  }

  get reloadProgress01(): number {
    if (!this.reloading) return 0;
    return 1 - this.reloadTimer / this.def.reloadTime;
  }

  startReload(): boolean {
    if (!this.canReload) return false;
    this.reloading = true;
    this.reloadTimer = this.def.reloadTime;
    return true;
  }

  cancelReload(): void {
    this.reloading = false;
  }

  addReserve(amount: number): void {
    this.ammoSource.add(this.def.ammoType, amount);
  }

  update(dt: number): void {
    if (this.reloading) {
      this.reloadTimer -= dt;
      if (this.reloadTimer <= 0) {
        const needed = this.def.magSize - this.magAmmo;
        const take = this.ammoSource.consume(this.def.ammoType, needed);
        this.magAmmo += take;
        this.reloading = false;
        this.onReloadComplete?.();
      }
    }
  }

  canFire(now: number): boolean {
    if (this.reloading) return false;
    if (this.magAmmo <= 0) return false;
    return now - this.lastFireAt >= this.def.fireInterval;
  }

  setTriggerHeld(held: boolean): void {
    this.fireHeld = held;
  }

  /** Attempts to fire once (caller handles full-auto repetition via held state + canFire timing). Returns recoil kick applied, or null if it didn't fire. */
  tryFire(now: number, ctx: FireContext): { recoilPitch: number; recoilYaw: number } | null {
    if (!this.canFire(now)) {
      if (this.magAmmo <= 0 && !this.reloading) {
        ctx.bus.emit('weapon:empty', { weaponId: this.def.id, isPlayer: ctx.isPlayerShooter });
      }
      return null;
    }
    this.lastFireAt = now;
    this.magAmmo--;

    ctx.bus.emit('weapon:fire', { weaponId: this.def.id, position: ctx.muzzleWorldPos.clone(), isPlayer: ctx.isPlayerShooter });
    ctx.effects.spawnMuzzleFlash(ctx.muzzleWorldPos, this.def.muzzleFlashSize);

    let spreadBase = ctx.aiming ? this.def.aimSpread : this.def.hipSpread;
    spreadBase *= 1 + ctx.movingSpreadFactor * (this.def.movingSpreadMult - 1);
    if (ctx.sprinting) spreadBase *= this.def.sprintSpreadMult;

    const pellets = Math.max(1, this.def.pellets);
    for (let i = 0; i < pellets; i++) {
      this.firePellet(ctx, spreadBase);
    }

    const jitter = (Math.random() - 0.5) * this.def.recoilHorizontal;
    return { recoilPitch: this.def.recoilVertical, recoilYaw: jitter };
  }

  private firePellet(ctx: FireContext, spread: number): void {
    const dir = ctx.direction.clone();
    if (spread > 0.0001) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.sqrt(Math.random()) * spread;
      const up = Math.abs(dir.y) < 0.99 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
      const right = new THREE.Vector3().crossVectors(dir, up).normalize();
      const trueUp = new THREE.Vector3().crossVectors(right, dir).normalize();
      dir.addScaledVector(right, Math.cos(angle) * radius).addScaledVector(trueUp, Math.sin(angle) * radius).normalize();
    }

    raycaster.set(ctx.origin, dir);
    raycaster.far = this.def.rangeEnd + 20;
    const targets = ctx.environmentTargets.concat(ctx.registry.hitMeshes);
    const hits = raycaster.intersectObjects(targets, false);

    let hitPoint: THREE.Vector3 | null = null;
    for (const hit of hits) {
      const entry = ctx.registry.resolve(hit.object);
      if (entry && entry.combatant.id === ctx.excludeCombatantId) continue;
      hitPoint = hit.point;
      const dist = hit.distance;
      const falloff = this.damageFalloff(dist);
      if (entry) {
        const part: HitPart = entry.part;
        const mult = part === 'head' ? this.def.headshotMultiplier : 1;
        const amount = this.def.damage * falloff * mult;
        const dirToTarget = dir.clone();
        entry.combatant.applyDamage(amount, dirToTarget, part, ctx.excludeCombatantId);
        entry.combatant.onHitReaction?.(dirToTarget, part);
        ctx.effects.spawnImpact(hit.point, hit.face?.normal ?? new THREE.Vector3(0, 1, 0), 'body');
        ctx.bus.emit('damage', {
          targetId: entry.combatant.id,
          amount,
          isPlayer: entry.combatant.team === 'player',
          isHeadshot: part === 'head',
          killed: !entry.combatant.isAlive(),
          position: hit.point.clone(),
          sourceId: ctx.excludeCombatantId,
        });
      } else {
        const normal = hit.face ? hit.face.normal.clone().transformDirection(hit.object.matrixWorld) : new THREE.Vector3(0, 1, 0);
        ctx.effects.spawnImpact(hit.point, normal, surfaceFromObject(hit.object));
      }
      break;
    }

    const tracerEnd = hitPoint ?? ctx.origin.clone().addScaledVector(dir, this.def.rangeEnd);
    ctx.effects.spawnTracer(ctx.muzzleWorldPos, tracerEnd, this.def.bulletSpeed);
  }

  private damageFalloff(distance: number): number {
    if (distance <= this.def.rangeStart) return 1;
    if (distance >= this.def.rangeEnd) return this.def.minDamageMult;
    const t = (distance - this.def.rangeStart) / (this.def.rangeEnd - this.def.rangeStart);
    return THREE.MathUtils.lerp(1, this.def.minDamageMult, t);
  }
}
