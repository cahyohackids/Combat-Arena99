import * as THREE from 'three';
import { HeightField } from './HeightField';
import { ColliderRegistry } from './Colliders';
import { RNG } from '@/utils/RNG';
import { LootSpawnPoint, EnemySpawnPoint } from './SpawnPoints';
import { getLocation } from './Locations';
import {
  buildHouse,
  registerBoxCollider,
  buildContainer,
  buildCrate,
  buildBarrel,
  buildSandbagWall,
  buildChainlinkFence,
  buildWatchtower,
  buildAntenna,
  buildVehicleWreck,
  buildCrane,
  buildConcreteBarrier,
  buildQuarryMachine,
  buildRock,
} from './structures/Primitives';
import { Materials } from './Materials';

export interface BuildContext {
  scene: THREE.Scene;
  hf: HeightField;
  colliders: ColliderRegistry;
  rng: RNG;
  loot: LootSpawnPoint[];
  enemies: EnemySpawnPoint[];
}

function place(obj: THREE.Object3D, x: number, z: number, ctx: BuildContext, yOffset = 0): void {
  obj.position.x = x;
  obj.position.z = z;
  obj.position.y = ctx.hf.getHeight(x, z) + yOffset;
  ctx.scene.add(obj);
  ctx.colliders.addRaycastMesh(obj);
}

function addLoot(ctx: BuildContext, x: number, z: number, rarity: 'common' | 'uncommon' | 'rare', locId: any): void {
  ctx.loot.push({ x, z, y: ctx.hf.getHeight(x, z), rarity, locationId: locId });
}

function addEnemy(ctx: BuildContext, x: number, z: number, locId: any, squadId: string, role: 'leader' | 'member'): void {
  ctx.enemies.push({ x, z, y: ctx.hf.getHeight(x, z), locationId: locId, squadId, role });
}

function scatterRocks(ctx: BuildContext, cx: number, cz: number, radius: number, count: number): void {
  for (let i = 0; i < count; i++) {
    const a = ctx.rng.range(0, Math.PI * 2);
    const r = ctx.rng.range(radius * 0.3, radius);
    const x = cx + Math.cos(a) * r;
    const z = cz + Math.sin(a) * r;
    const rock = buildRock(ctx.rng.range(0.5, 2.2));
    rock.rotation.y = ctx.rng.range(0, Math.PI * 2);
    place(rock, x, z, ctx);
    ctx.colliders.addCircle(x, z, rock.geometry.boundingSphere?.radius ?? 1, ctx.hf.getHeight(x, z), 2.5);
  }
}

// ---------------------------------------------------------------------------
// Blackridge Village — dense residential streets, close-quarters combat.
// ---------------------------------------------------------------------------
export function buildVillage(ctx: BuildContext): void {
  const loc = getLocation('village');
  const [cx, cz] = loc.center;
  const squadId = 'village-a';
  const rows = 3;
  const cols = 3;
  const spacing = 26;
  let idx = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const jitterX = ctx.rng.range(-3, 3);
      const jitterZ = ctx.rng.range(-3, 3);
      const x = cx - spacing + c * spacing + jitterX;
      const z = cz - spacing + r * spacing + jitterZ;
      const w = ctx.rng.range(6, 9);
      const d = ctx.rng.range(6, 9);
      const h = ctx.rng.range(3, 4.2);
      const doorSide = ctx.rng.pick(['north', 'south', 'east', 'west'] as const);
      const house = buildHouse({
        width: w,
        depth: d,
        height: h,
        wallMat: ctx.rng.chance(0.5) ? Materials.wallPlaster : Materials.wallPlasterDirty,
        roofMat: ctx.rng.chance(0.5) ? Materials.roofTin : Materials.roofRust,
        doorSide,
        pitchedRoof: ctx.rng.chance(0.6),
        windows: true,
      });
      house.rotation.y = ctx.rng.pick([0, Math.PI / 2, Math.PI, (Math.PI * 3) / 2]);
      place(house, x, z, ctx);
      registerBoxCollider(ctx.colliders, house, w, d, h, x, z, ctx.hf.getHeight(x, z), house.rotation.y);

      if (idx % 2 === 0) addLoot(ctx, x + ctx.rng.range(-2, 2), z + ctx.rng.range(-2, 2), ctx.rng.pick(['common', 'uncommon']), 'village');
      idx++;
    }
  }

  // Fences between yards.
  for (let i = 0; i < 6; i++) {
    const x = cx + ctx.rng.range(-spacing * 1.4, spacing * 1.4);
    const z = cz + ctx.rng.range(-spacing * 1.4, spacing * 1.4);
    const fence = buildChainlinkFence(ctx.rng.range(4, 8), 1.4);
    fence.rotation.y = ctx.rng.pick([0, Math.PI / 2]);
    place(fence, x, z, ctx);
  }

  // Barricades / evac debris — environmental storytelling.
  for (let i = 0; i < 4; i++) {
    const x = cx + ctx.rng.range(-40, 40);
    const z = cz + ctx.rng.range(-40, 40);
    const wreck = buildVehicleWreck('sedan');
    wreck.rotation.y = ctx.rng.range(0, Math.PI * 2);
    place(wreck, x, z, ctx);
    ctx.colliders.addCircle(x, z, 2.6, ctx.hf.getHeight(x, z), 1.6);
    ctx.colliders.addCoverPoint(x, z, Math.cos(wreck.rotation.y), Math.sin(wreck.rotation.y));
  }

  addLoot(ctx, cx, cz, 'uncommon', 'village');
  addEnemy(ctx, cx - 20, cz - 10, 'village', squadId, 'leader');
  addEnemy(ctx, cx + 15, cz + 12, 'village', squadId, 'member');
  addEnemy(ctx, cx + 5, cz - 25, 'village', squadId + '2', 'leader');
}

// ---------------------------------------------------------------------------
// Argo Outpost — fortified compound with towers, walls, heavy loot.
// ---------------------------------------------------------------------------
export function buildOutpost(ctx: BuildContext): void {
  const loc = getLocation('outpost');
  const [cx, cz] = loc.center;

  const towerPositions: [number, number][] = [
    [cx - 45, cz - 45],
    [cx + 45, cz - 45],
    [cx + 45, cz + 45],
    [cx - 45, cz + 45],
  ];
  towerPositions.forEach(([x, z], i) => {
    const tower = buildWatchtower(8);
    place(tower, x, z, ctx);
    ctx.colliders.addCircle(x, z, 2.2, ctx.hf.getHeight(x, z), 8);
    if (i % 2 === 0) addEnemy(ctx, x, z, 'outpost', 'outpost-tower', i === 0 ? 'leader' : 'member');
  });

  // Perimeter walls (sandbag + fence sections) connecting towers.
  for (let i = 0; i < towerPositions.length; i++) {
    const [ax, az] = towerPositions[i];
    const [bx, bz] = towerPositions[(i + 1) % towerPositions.length];
    const midX = (ax + bx) / 2;
    const midZ = (az + bz) / 2;
    const len = Math.hypot(bx - ax, bz - az);
    const angle = Math.atan2(bz - az, bx - ax);
    const wall = buildSandbagWall(len * 0.92, 1.1);
    wall.rotation.y = angle;
    place(wall, midX, midZ, ctx);
    registerBoxCollider(ctx.colliders, wall, len * 0.92, 0.8, 1.1, midX, midZ, ctx.hf.getHeight(midX, midZ), angle);
  }

  // Barracks buildings.
  const barracks: [number, number, number][] = [
    [cx - 10, cz, 0],
    [cx + 12, cz - 5, Math.PI / 2],
  ];
  for (const [x, z, rotY] of barracks) {
    const b = buildHouse({ width: 12, depth: 7, height: 3.6, doorSide: 'south', pitchedRoof: false, windows: true, wallMat: Materials.concrete });
    b.rotation.y = rotY;
    place(b, x, z, ctx);
    registerBoxCollider(ctx.colliders, b, 12, 7, 3.6, x, z, ctx.hf.getHeight(x, z), rotY);
    addLoot(ctx, x + 2, z + 1, 'rare', 'outpost');
  }

  // Container yard + crates, weapon loot heavy.
  for (let i = 0; i < 6; i++) {
    const x = cx + ctx.rng.range(-30, 30);
    const z = cz + ctx.rng.range(-30, 30);
    const c = buildContainer(ctx.rng.pick(['olive', 'green', 'rust'] as const));
    c.rotation.y = ctx.rng.pick([0, Math.PI / 2]);
    place(c, x, z, ctx);
    registerBoxCollider(ctx.colliders, c, 2.44, 6.06, 2.6, x, z, ctx.hf.getHeight(x, z), c.rotation.y);
    ctx.colliders.addCoverPoint(x, z, Math.cos(c.rotation.y + Math.PI / 2), Math.sin(c.rotation.y + Math.PI / 2));
    if (i % 2 === 0) addLoot(ctx, x, z + 3.5, 'rare', 'outpost');
  }
  for (let i = 0; i < 10; i++) {
    const x = cx + ctx.rng.range(-35, 35);
    const z = cz + ctx.rng.range(-35, 35);
    const crate = buildCrate();
    place(crate, x, z, ctx);
    if (ctx.rng.chance(0.4)) addLoot(ctx, x + 0.6, z, ctx.rng.pick(['common', 'uncommon']), 'outpost');
  }

  const antenna = buildAntenna(10);
  place(antenna, cx, cz, ctx);
  ctx.colliders.addCircle(cx, cz, 0.6, ctx.hf.getHeight(cx, cz), 10);

  addLoot(ctx, cx, cz - 6, 'rare', 'outpost');
  addEnemy(ctx, cx - 8, cz - 8, 'outpost', 'outpost-yard', 'leader');
  addEnemy(ctx, cx + 8, cz + 8, 'outpost', 'outpost-yard', 'member');
  addEnemy(ctx, cx, cz + 20, 'outpost', 'outpost-yard2', 'member');
}

// ---------------------------------------------------------------------------
// Cedar Hill — forested high ground, long sightlines, marksman threat.
// ---------------------------------------------------------------------------
export function buildCedarHill(ctx: BuildContext): void {
  const loc = getLocation('cedarHill');
  const [cx, cz] = loc.center;

  scatterRocks(ctx, cx, cz, loc.radius * 0.9, 18);

  const lookout = buildWatchtower(9);
  place(lookout, cx, cz, ctx);
  ctx.colliders.addCircle(cx, cz, 2.2, ctx.hf.getHeight(cx, cz), 9);

  addLoot(ctx, cx, cz, 'rare', 'cedarHill');
  addEnemy(ctx, cx, cz, 'cedarHill', 'hill-marksman', 'leader');
  addEnemy(ctx, cx + 30, cz - 20, 'cedarHill', 'hill-b', 'member');
  addEnemy(ctx, cx - 25, cz + 15, 'cedarHill', 'hill-b', 'member');

  for (let i = 0; i < 5; i++) {
    const a = ctx.rng.range(0, Math.PI * 2);
    const r = ctx.rng.range(15, loc.radius * 0.85);
    addLoot(ctx, cx + Math.cos(a) * r, cz + Math.sin(a) * r, ctx.rng.pick(['common', 'uncommon']), 'cedarHill');
  }
}

// ---------------------------------------------------------------------------
// Northport — docks, warehouses, cranes, container corridors.
// ---------------------------------------------------------------------------
export function buildNorthport(ctx: BuildContext): void {
  const loc = getLocation('northport');
  const [cx, cz] = loc.center;

  const warehouse = buildHouse({
    width: 20,
    depth: 12,
    height: 6,
    wallMat: Materials.metal,
    roofMat: Materials.roofTin,
    doorSide: 'south',
    pitchedRoof: false,
    windows: true,
  });
  place(warehouse, cx - 15, cz - 5, ctx);
  registerBoxCollider(ctx.colliders, warehouse, 20, 12, 6, cx - 15, cz - 5, ctx.hf.getHeight(cx - 15, cz - 5), 0);
  addLoot(ctx, cx - 15, cz - 5, 'rare', 'northport');

  const crane1 = buildCrane(14);
  place(crane1, cx + 20, cz + 10, ctx);
  const crane2 = buildCrane(12);
  crane2.rotation.y = Math.PI;
  place(crane2, cx + 32, cz - 8, ctx);

  // Container corridor near the water.
  let rowX = cx + 5;
  for (let i = 0; i < 8; i++) {
    const z = cz + 20 - i * 6.4;
    const c = buildContainer(ctx.rng.pick(['blue', 'rust', 'green'] as const));
    c.rotation.y = Math.PI / 2;
    place(c, rowX, z, ctx);
    registerBoxCollider(ctx.colliders, c, 2.44, 6.06, 2.6, rowX, z, ctx.hf.getHeight(rowX, z), Math.PI / 2);
    if (i % 3 === 0) addLoot(ctx, rowX, z + 3.6, 'uncommon', 'northport');
  }

  for (let i = 0; i < 6; i++) {
    const x = cx + ctx.rng.range(-30, 40);
    const z = cz + ctx.rng.range(-25, 30);
    const barrel = buildBarrel();
    place(barrel, x, z, ctx);
  }

  addEnemy(ctx, cx - 10, cz - 10, 'northport', 'port-a', 'leader');
  addEnemy(ctx, cx + 10, cz + 5, 'northport', 'port-a', 'member');
  addEnemy(ctx, cx + 25, cz + 15, 'northport', 'port-b', 'member');
}

// ---------------------------------------------------------------------------
// Redstone Quarry — deep pit, ramps, machinery, exposed traversal.
// ---------------------------------------------------------------------------
export function buildQuarry(ctx: BuildContext): void {
  const loc = getLocation('quarry');
  const [cx, cz] = loc.center;

  const machine = buildQuarryMachine();
  machine.rotation.y = ctx.rng.range(0, Math.PI * 2);
  place(machine, cx, cz, ctx);
  ctx.colliders.addCircle(cx, cz, 3.2, ctx.hf.getHeight(cx, cz), 3);

  scatterRocks(ctx, cx, cz, loc.radius, 20);

  for (let i = 0; i < 8; i++) {
    const a = ctx.rng.range(0, Math.PI * 2);
    const r = ctx.rng.range(10, loc.radius * 0.8);
    const x = cx + Math.cos(a) * r;
    const z = cz + Math.sin(a) * r;
    const barrier = buildConcreteBarrier(ctx.rng.range(1.5, 2.5));
    barrier.rotation.y = a;
    place(barrier, x, z, ctx);
    ctx.colliders.addCoverPoint(x, z, Math.cos(a), Math.sin(a));
  }

  addLoot(ctx, cx, cz, 'uncommon', 'quarry');
  addLoot(ctx, cx + 25, cz - 15, 'rare', 'quarry');
  addEnemy(ctx, cx - 15, cz + 10, 'quarry', 'quarry-a', 'leader');
  addEnemy(ctx, cx + 20, cz - 5, 'quarry', 'quarry-a', 'member');
}

// ---------------------------------------------------------------------------
// Echo Research Facility — late-game concrete complex, tougher enemies.
// ---------------------------------------------------------------------------
export function buildFacility(ctx: BuildContext): void {
  const loc = getLocation('facility');
  const [cx, cz] = loc.center;

  const mainBuilding = buildHouse({
    width: 26,
    depth: 18,
    height: 6.5,
    wallMat: Materials.concrete,
    roofMat: Materials.concreteDark,
    doorSide: 'south',
    pitchedRoof: false,
    windows: true,
  });
  place(mainBuilding, cx, cz, ctx);
  registerBoxCollider(ctx.colliders, mainBuilding, 26, 18, 6.5, cx, cz, ctx.hf.getHeight(cx, cz), 0);

  const wingA = buildHouse({ width: 10, depth: 8, height: 4.5, wallMat: Materials.concrete, doorSide: 'west', windows: true });
  place(wingA, cx - 22, cz + 6, ctx);
  registerBoxCollider(ctx.colliders, wingA, 10, 8, 4.5, cx - 22, cz + 6, ctx.hf.getHeight(cx - 22, cz + 6), 0);

  const wingB = buildHouse({ width: 10, depth: 8, height: 4.5, wallMat: Materials.concreteDark, doorSide: 'east', windows: true });
  wingB.rotation.y = Math.PI;
  place(wingB, cx + 22, cz - 6, ctx);
  registerBoxCollider(ctx.colliders, wingB, 10, 8, 4.5, cx + 22, cz - 6, ctx.hf.getHeight(cx + 22, cz - 6), Math.PI);

  for (let i = 0; i < 6; i++) {
    const x = cx + ctx.rng.range(-32, 32);
    const z = cz + ctx.rng.range(-24, 24);
    const barrier = buildConcreteBarrier(2);
    barrier.rotation.y = ctx.rng.range(0, Math.PI * 2);
    place(barrier, x, z, ctx);
  }

  const fence = buildChainlinkFence(loc.radius * 1.6, 2.4);
  place(fence, cx, cz - loc.radius * 0.75, ctx);

  addLoot(ctx, cx, cz, 'rare', 'facility');
  addLoot(ctx, cx - 22, cz + 6, 'rare', 'facility');
  addLoot(ctx, cx + 22, cz - 6, 'rare', 'facility');
  addEnemy(ctx, cx - 5, cz - 5, 'facility', 'facility-a', 'leader');
  addEnemy(ctx, cx + 8, cz + 8, 'facility', 'facility-a', 'member');
  addEnemy(ctx, cx - 18, cz + 10, 'facility', 'facility-b', 'leader');
  addEnemy(ctx, cx + 18, cz - 10, 'facility', 'facility-b', 'member');
}

// ---------------------------------------------------------------------------
// Wilds — sparse loot & light patrols scattered across open terrain between POIs.
// ---------------------------------------------------------------------------
export function buildWilds(ctx: BuildContext): void {
  for (let i = 0; i < 14; i++) {
    const a = ctx.rng.range(0, Math.PI * 2);
    const r = ctx.rng.range(80, 370);
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (ctx.hf.isUnderwater(x, z)) continue;
    if (ctx.rng.chance(0.5)) {
      const tree = ctx.rng.chance(0.7);
      if (tree) continue; // trees handled by Vegetation.ts instancing
    }
    addLoot(ctx, x, z, ctx.rng.pick(['common', 'common', 'uncommon']), 'wilds');
  }
  for (let i = 0; i < 2; i++) {
    const a = ctx.rng.range(0, Math.PI * 2);
    const r = ctx.rng.range(100, 340);
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    addEnemy(ctx, x, z, 'wilds', `wilds-${i}`, 'leader');
  }
}

export function buildAllLocations(ctx: BuildContext): void {
  buildVillage(ctx);
  buildOutpost(ctx);
  buildCedarHill(ctx);
  buildNorthport(ctx);
  buildQuarry(ctx);
  buildFacility(ctx);
  buildWilds(ctx);
}
