import * as THREE from 'three';
import { ThrowableDef, THROWABLES } from './WeaponDefs';
import { World } from '@/world/World';
import { CombatantRegistry } from '@/combat/Combatant';
import { EffectsSystem } from '@/combat/Effects';
import { EventBus } from '@/core/EventBus';
import { GameEvents } from '@/core/Events';

function makeSmokeTexture(): THREE.Texture {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, 'rgba(220,215,205,0.9)');
  grad.addColorStop(0.5, 'rgba(190,185,175,0.5)');
  grad.addColorStop(1, 'rgba(190,185,175,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  return tex;
}

let smokeTexture: THREE.Texture | null = null;

interface ActiveThrowable {
  def: ThrowableDef;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  fuse: number;
  mesh: THREE.Mesh;
  sourceId: string;
  exploded: boolean;
}

export interface SmokeVolume {
  position: THREE.Vector3;
  radius: number;
  life: number;
  maxLife: number;
  sprites: THREE.Sprite[];
}

/** Frag and smoke throwables: simple ballistic arc with ground bounce, fuse-timed detonation. */
export class ThrowableSystem {
  private active: ActiveThrowable[] = [];
  smokeVolumes: SmokeVolume[] = [];
  private world: World;
  private registry: CombatantRegistry;
  private effects: EffectsSystem;
  private bus: EventBus<GameEvents>;
  private fragMat = new THREE.MeshStandardMaterial({ color: 0x2e2e28, roughness: 0.5, metalness: 0.6 });
  private smokeMat = new THREE.MeshStandardMaterial({ color: 0x555349, roughness: 0.5, metalness: 0.6 });

  constructor(world: World, registry: CombatantRegistry, effects: EffectsSystem, bus: EventBus<GameEvents>) {
    this.world = world;
    this.registry = registry;
    this.effects = effects;
    this.bus = bus;
    if (!smokeTexture) smokeTexture = makeSmokeTexture();
  }

  throw(kind: 'frag' | 'smoke', origin: THREE.Vector3, direction: THREE.Vector3, sourceId: string): void {
    const def = THROWABLES[kind];
    const geo = new THREE.SphereGeometry(0.08, 8, 6);
    const mesh = new THREE.Mesh(geo, kind === 'frag' ? this.fragMat : this.smokeMat);
    mesh.castShadow = true;
    mesh.position.copy(origin);
    this.world.scene.add(mesh);

    this.active.push({
      def,
      position: origin.clone(),
      velocity: direction.clone().normalize().multiplyScalar(def.throwSpeed).add(new THREE.Vector3(0, 2.2, 0)),
      fuse: def.fuseTime,
      mesh,
      sourceId,
      exploded: false,
    });
  }

  update(dt: number): void {
    for (let i = this.active.length - 1; i >= 0; i--) {
      const t = this.active[i];
      t.velocity.y -= 16 * dt;
      const next = t.position.clone().addScaledVector(t.velocity, dt);
      const groundY = this.world.heightAt(next.x, next.z);
      if (next.y <= groundY + 0.08) {
        next.y = groundY + 0.08;
        if (t.velocity.y < 0) {
          t.velocity.y *= -0.4;
          t.velocity.x *= 0.6;
          t.velocity.z *= 0.6;
        }
      }
      t.position.copy(next);
      t.mesh.position.copy(next);
      t.fuse -= dt;
      if (t.fuse <= 0 && !t.exploded) {
        t.exploded = true;
        this.detonate(t);
        this.world.scene.remove(t.mesh);
        this.active.splice(i, 1);
      }
    }

    for (let i = this.smokeVolumes.length - 1; i >= 0; i--) {
      const s = this.smokeVolumes[i];
      s.life -= dt;
      const growT = Math.min(1, (s.maxLife - s.life) / 1.2);
      const fadeT = s.life < 2 ? Math.max(0, s.life / 2) : 1;
      for (const sprite of s.sprites) {
        const scale = s.radius * (0.5 + growT * 0.7);
        sprite.scale.set(scale, scale, 1);
        (sprite.material as THREE.SpriteMaterial).opacity = 0.55 * fadeT;
      }
      if (s.life <= 0) {
        for (const sprite of s.sprites) this.world.scene.remove(sprite);
        this.smokeVolumes.splice(i, 1);
      }
    }
  }

  private detonate(t: ActiveThrowable): void {
    if (t.def.id === 'frag') {
      this.bus.emit('grenade:explode', { position: t.position.clone(), radius: t.def.radius });
      this.effects.spawnImpact(t.position, new THREE.Vector3(0, 1, 0), 'terrain');
      for (const c of this.registry.getAll()) {
        if (!c.isAlive()) continue;
        const dist = c.getPosition().distanceTo(t.position);
        if (dist > t.def.radius) continue;
        const falloff = 1 - dist / t.def.radius;
        const dmg = t.def.damage * falloff * falloff;
        const dir = c.getPosition().clone().sub(t.position).normalize();
        c.applyDamage(dmg, dir, 'torso', t.sourceId);
      }
    } else {
      this.bus.emit('smoke:deployed', { position: t.position.clone(), radius: t.def.radius });
      const sprites: THREE.Sprite[] = [];
      for (let i = 0; i < 10; i++) {
        const mat = new THREE.SpriteMaterial({ map: smokeTexture, transparent: true, opacity: 0.05, depthWrite: false });
        const sprite = new THREE.Sprite(mat);
        const off = new THREE.Vector3((Math.random() - 0.5) * 3, Math.random() * 2, (Math.random() - 0.5) * 3);
        sprite.position.copy(t.position).add(off).setY(t.position.y + 1 + Math.random() * 1.5);
        sprite.scale.set(0.1, 0.1, 1);
        this.world.scene.add(sprite);
        sprites.push(sprite);
      }
      this.smokeVolumes.push({ position: t.position.clone(), radius: t.def.radius, life: 9, maxLife: 9, sprites });
    }
  }

  /** True if a straight segment between two points passes through any active smoke sphere (blocks AI vision). */
  segmentBlockedBySmoke(a: THREE.Vector3, b: THREE.Vector3): boolean {
    for (const s of this.smokeVolumes) {
      const closest = closestPointOnSegment(a, b, s.position);
      if (closest.distanceTo(s.position) < s.radius) return true;
    }
    return false;
  }
}

function closestPointOnSegment(a: THREE.Vector3, b: THREE.Vector3, p: THREE.Vector3): THREE.Vector3 {
  const ab = b.clone().sub(a);
  const t = THREE.MathUtils.clamp(p.clone().sub(a).dot(ab) / ab.lengthSq(), 0, 1);
  return a.clone().addScaledVector(ab, t);
}
