import * as THREE from 'three';
import { Pool } from '@/utils/Pool';

export type SurfaceKind = 'terrain' | 'concrete' | 'metal' | 'wood' | 'body' | 'rock';

const SURFACE_COLOR: Record<SurfaceKind, number> = {
  terrain: 0x6b5a3a,
  concrete: 0xc9c4b8,
  metal: 0xffcf7a,
  wood: 0x8a6438,
  body: 0xb33228,
  rock: 0x9a958a,
};

interface Particle {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  life: number;
  maxLife: number;
  active: boolean;
}

interface Decal {
  mesh: THREE.Mesh;
  life: number;
}

interface Tracer {
  mesh: THREE.Mesh;
  start: THREE.Vector3;
  end: THREE.Vector3;
  speed: number;
  t: number;
  active: boolean;
}

const MAX_PARTICLES = 220;
const MAX_DECALS = 90;
const MAX_TRACERS = 40;

/** Central home for every pooled visual effect: impacts, decals, tracers, muzzle flashes. One update() per frame. */
export class EffectsSystem {
  private scene: THREE.Scene;
  private particlePool: Pool<Particle>;
  private decalPool: Pool<Decal>;
  private tracerPool: Pool<Tracer>;
  private particleGeo = new THREE.PlaneGeometry(0.08, 0.08);
  private decalGeo = new THREE.PlaneGeometry(0.18, 0.18);
  private tracerGeo = new THREE.CylinderGeometry(0.012, 0.012, 1, 5);
  private muzzleLight: THREE.PointLight;
  private muzzleLightTimer = 0;
  qualityScale = 1.0;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    this.particlePool = new Pool<Particle>(
      () => {
        const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, depthWrite: false });
        const mesh = new THREE.Mesh(this.particleGeo, mat);
        mesh.visible = false;
        scene.add(mesh);
        return { mesh, velocity: new THREE.Vector3(), life: 0, maxLife: 1, active: false };
      },
      (p) => {
        p.mesh.visible = false;
        p.active = false;
      },
      MAX_PARTICLES,
    );

    this.decalPool = new Pool<Decal>(
      () => {
        const mat = new THREE.MeshBasicMaterial({
          color: 0x000000,
          transparent: true,
          opacity: 0.5,
          depthWrite: false,
          polygonOffset: true,
          polygonOffsetFactor: -2,
        });
        const mesh = new THREE.Mesh(this.decalGeo, mat);
        mesh.visible = false;
        scene.add(mesh);
        return { mesh, life: 0 };
      },
      (d) => {
        d.mesh.visible = false;
      },
      MAX_DECALS,
    );

    this.tracerPool = new Pool<Tracer>(
      () => {
        const mat = new THREE.MeshBasicMaterial({ color: 0xffe9b0, transparent: true, opacity: 0.9 });
        const mesh = new THREE.Mesh(this.tracerGeo, mat);
        mesh.visible = false;
        scene.add(mesh);
        return { mesh, start: new THREE.Vector3(), end: new THREE.Vector3(), speed: 300, t: 0, active: false };
      },
      (t) => {
        t.mesh.visible = false;
        t.active = false;
      },
      MAX_TRACERS,
    );

    this.muzzleLight = new THREE.PointLight(0xffb066, 0, 6, 2);
    scene.add(this.muzzleLight);
  }

  spawnMuzzleFlash(position: THREE.Vector3, size: number): void {
    this.muzzleLight.position.copy(position);
    this.muzzleLight.intensity = 6 * size;
    this.muzzleLightTimer = 0.045;
  }

  spawnTracer(start: THREE.Vector3, end: THREE.Vector3, speed: number): void {
    if (this.qualityScale < 0.5 && Math.random() > 0.5) return;
    const tr = this.tracerPool.acquire();
    tr.start.copy(start);
    tr.end.copy(end);
    tr.speed = speed;
    tr.t = 0;
    tr.active = true;
    tr.mesh.visible = true;
    const dist = start.distanceTo(end);
    const len = Math.min(2.4, dist * 0.12);
    tr.mesh.scale.set(1, len, 1);
  }

  spawnImpact(position: THREE.Vector3, normal: THREE.Vector3, surface: SurfaceKind): void {
    const count = Math.round((surface === 'body' ? 5 : 8) * this.qualityScale);
    const color = SURFACE_COLOR[surface];
    for (let i = 0; i < count; i++) {
      const p = this.particlePool.acquire();
      p.active = true;
      p.mesh.visible = true;
      (p.mesh.material as THREE.MeshBasicMaterial).color.setHex(color);
      (p.mesh.material as THREE.MeshBasicMaterial).opacity = 1;
      p.mesh.position.copy(position);
      const spread = 2.4;
      p.velocity.set(
        normal.x * 2 + (Math.random() - 0.5) * spread,
        Math.abs(normal.y) * 2 + Math.random() * 2,
        normal.z * 2 + (Math.random() - 0.5) * spread,
      );
      p.life = 0;
      p.maxLife = 0.35 + Math.random() * 0.3;
    }

    if (surface !== 'body' && this.qualityScale > 0.4) {
      const d = this.decalPool.acquire();
      d.mesh.visible = true;
      d.mesh.position.copy(position).addScaledVector(normal, 0.02);
      d.mesh.lookAt(position.clone().add(normal));
      d.life = 12;
      (d.mesh.material as THREE.MeshBasicMaterial).color.setHex(surface === 'concrete' || surface === 'rock' ? 0x111111 : 0x1a0f05);
    }
  }

  update(dt: number): void {
    if (this.muzzleLightTimer > 0) {
      this.muzzleLightTimer -= dt;
      if (this.muzzleLightTimer <= 0) this.muzzleLight.intensity = 0;
    }

    this.particlePool.forEachActive((p) => {
      if (!p.active) return;
      p.life += dt;
      if (p.life >= p.maxLife) {
        this.particlePool.release(p);
        return;
      }
      p.velocity.y -= 9 * dt;
      p.mesh.position.addScaledVector(p.velocity, dt);
      const fade = 1 - p.life / p.maxLife;
      (p.mesh.material as THREE.MeshBasicMaterial).opacity = fade;
    });

    this.decalPool.forEachActive((d) => {
      d.life -= dt;
      if (d.life <= 0) this.decalPool.release(d);
    });

    this.tracerPool.forEachActive((t) => {
      if (!t.active) return;
      t.t += dt * t.speed;
      const dist = t.start.distanceTo(t.end);
      if (t.t >= dist) {
        this.tracerPool.release(t);
        return;
      }
      const pos = t.start.clone().lerp(t.end, t.t / dist);
      t.mesh.position.copy(pos);
      t.mesh.lookAt(t.end);
      t.mesh.rotateX(Math.PI / 2);
    });
  }
}
