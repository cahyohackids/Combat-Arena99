import * as THREE from 'three';
import { HeightField } from './HeightField';
import { ColliderRegistry } from './Colliders';
import { buildTerrainMesh, buildOcean, updateOcean } from './TerrainMesh';
import { createSky, SkySystem, getSunDirection } from './SkyLighting';
import { buildAllLocations, BuildContext } from './LocationBuilders';
import { buildVegetation, VegetationSystem, VegDensity } from './Vegetation';
import { RNG, makeSeed } from '@/utils/RNG';
import { LootSpawnPoint, EnemySpawnPoint, POI } from './SpawnPoints';
import { LOCATIONS, MAP_RADIUS } from './Locations';

export class World {
  seed: number;
  hf: HeightField;
  colliders = new ColliderRegistry();
  scene: THREE.Scene;
  terrain: THREE.Mesh;
  ocean: THREE.Mesh;
  sky: SkySystem;
  vegetation: VegetationSystem;
  loot: LootSpawnPoint[] = [];
  enemySpawns: EnemySpawnPoint[] = [];
  pois: POI[] = [];
  playerSpawns: Array<{ x: number; z: number }> = [];
  matchTime01 = 0;
  elapsed = 0;

  constructor(scene: THREE.Scene, seed: number = makeSeed(), vegDensity: VegDensity = 'high') {
    this.seed = seed;
    this.scene = scene;
    this.hf = new HeightField(seed);

    this.terrain = buildTerrainMesh(this.hf);
    scene.add(this.terrain);
    this.colliders.addRaycastMesh(this.terrain);

    this.ocean = buildOcean();
    scene.add(this.ocean);

    this.sky = createSky(scene);

    const rng = new RNG(seed);
    const ctx: BuildContext = {
      scene,
      hf: this.hf,
      colliders: this.colliders,
      rng,
      loot: this.loot,
      enemies: this.enemySpawns,
    };
    buildAllLocations(ctx);

    this.vegetation = buildVegetation(scene, this.hf, this.colliders, seed, vegDensity);

    for (const loc of LOCATIONS) {
      this.pois.push({ id: loc.id, name: loc.name, x: loc.center[0], z: loc.center[1] });
    }

    // Player spawn candidates: quiet, walkable, dry, reasonably flat spots away from the busiest compounds.
    const isGoodSpawn = (x: number, z: number): boolean => {
      if (this.hf.isUnderwater(x, z)) return false;
      const [, ny] = this.hf.getNormal(x, z, 2);
      if (ny < 0.82) return false;
      if (this.colliders.isBlocked(x, z, this.hf.getHeight(x, z), 2)) return false;
      return true;
    };
    const addSpawnNear = (cx: number, cz: number, rMin: number, rMax: number): void => {
      for (let attempt = 0; attempt < 20; attempt++) {
        const a = rng.range(0, Math.PI * 2);
        const r = rng.range(rMin, rMax);
        const x = cx + Math.cos(a) * r;
        const z = cz + Math.sin(a) * r;
        if (isGoodSpawn(x, z)) {
          this.playerSpawns.push({ x, z });
          return;
        }
      }
    };

    const quietIds = new Set(['cedarHill', 'northport', 'quarry', 'wilds']);
    for (const loc of LOCATIONS) {
      if (quietIds.has(loc.id)) {
        for (let i = 0; i < 2; i++) addSpawnNear(loc.center[0], loc.center[1], loc.radius * 0.6, loc.radius * 1.1);
      }
    }
    for (let i = 0; i < 8; i++) addSpawnNear(0, 0, 140, 340);
    if (this.playerSpawns.length === 0) this.playerSpawns.push({ x: 0, z: 0 });

  }

  heightAt(x: number, z: number): number {
    return this.hf.getHeight(x, z);
  }

  isOutOfBounds(x: number, z: number): boolean {
    return Math.sqrt(x * x + z * z) > MAP_RADIUS - 8;
  }

  clampToBounds(x: number, z: number): [number, number] {
    const d = Math.sqrt(x * x + z * z);
    const limit = MAP_RADIUS - 8;
    if (d <= limit) return [x, z];
    const s = limit / d;
    return [x * s, z * s];
  }

  update(dt: number, matchDuration: number, cameraPos: THREE.Vector3): void {
    this.elapsed += dt;
    this.matchTime01 = Math.min(1, this.elapsed / matchDuration);
    this.sky.update(this.matchTime01);
    updateOcean(this.ocean, this.elapsed, getSunDirection(this.sky));
    this.vegetation.update(cameraPos);
  }
}
