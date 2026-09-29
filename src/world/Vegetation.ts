import * as THREE from 'three';
import { HeightField } from './HeightField';
import { RNG } from '@/utils/RNG';
import { locationAt, MAP_RADIUS } from './Locations';
import { Materials } from './Materials';
import { ColliderRegistry } from './Colliders';

export type VegDensity = 'low' | 'medium' | 'high';

const DENSITY_COUNTS: Record<VegDensity, { trees: number; rocks: number; grass: number }> = {
  low: { trees: 260, rocks: 140, grass: 900 },
  medium: { trees: 480, rocks: 220, grass: 2200 },
  high: { trees: 750, rocks: 320, grass: 4200 },
};

function treeGeometry(): { trunk: THREE.CylinderGeometry; foliage: THREE.ConeGeometry } {
  return {
    trunk: new THREE.CylinderGeometry(0.18, 0.3, 3.2, 6),
    foliage: new THREE.ConeGeometry(1.6, 3.4, 7),
  };
}

export interface VegetationSystem {
  group: THREE.Group;
  setDensity(density: VegDensity): void;
  update(cameraPos: THREE.Vector3): void;
}

/** Instanced trees/rocks/grass so thousands of props cost only a handful of draw calls. */
export function buildVegetation(
  scene: THREE.Scene,
  hf: HeightField,
  colliders: ColliderRegistry,
  seed: number,
  initialDensity: VegDensity = 'high',
): VegetationSystem {
  const rng = new RNG(seed ^ 0x51ed270b);
  const group = new THREE.Group();
  group.name = 'vegetation';
  scene.add(group);

  const { trunk, foliage } = treeGeometry();
  const trunkMesh = new THREE.InstancedMesh(trunk, Materials.barkTree, DENSITY_COUNTS.high.trees);
  const foliageMesh = new THREE.InstancedMesh(foliage, Materials.foliage, DENSITY_COUNTS.high.trees);
  trunkMesh.castShadow = true;
  foliageMesh.castShadow = true;
  trunkMesh.receiveShadow = true;
  trunkMesh.name = 'veg-trunks';
  foliageMesh.name = 'veg-foliage';

  const rockGeo = new THREE.IcosahedronGeometry(1, 0);
  const rockMesh = new THREE.InstancedMesh(rockGeo, Materials.rockGrey, DENSITY_COUNTS.high.rocks);
  rockMesh.castShadow = true;
  rockMesh.receiveShadow = true;

  const grassGeo = new THREE.PlaneGeometry(0.6, 0.7);
  grassGeo.translate(0, 0.35, 0);
  const grassMat = new THREE.MeshStandardMaterial({
    color: 0x3a4522,
    side: THREE.DoubleSide,
    roughness: 1,
    metalness: 0,
    alphaTest: 0.5,
    transparent: false,
  });
  const grassMesh = new THREE.InstancedMesh(grassGeo, grassMat, DENSITY_COUNTS.high.grass);
  grassMesh.castShadow = false;
  grassMesh.receiveShadow = false;

  group.add(trunkMesh, foliageMesh, rockMesh, grassMesh);

  // Pre-generate candidate positions once (deterministic per seed); density just changes visible instance counts.
  interface Candidate {
    x: number;
    z: number;
    y: number;
    scale: number;
    rot: number;
  }
  const treeCandidates: Candidate[] = [];
  const rockCandidates: Candidate[] = [];
  const grassCandidates: Candidate[] = [];

  const totalTrees = DENSITY_COUNTS.high.trees;
  let attempts = 0;
  while (treeCandidates.length < totalTrees && attempts < totalTrees * 6) {
    attempts++;
    const a = rng.range(0, Math.PI * 2);
    const r = Math.sqrt(rng.next()) * (MAP_RADIUS - 30);
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (hf.isUnderwater(x, z)) continue;
    if (colliders.isBlocked(x, z, hf.getHeight(x, z), 3)) continue;
    const loc = locationAt(x, z);
    let density = 0.35;
    if (loc?.id === 'cedarHill') density = 1.0;
    else if (loc && ['village', 'outpost', 'facility'].includes(loc.id)) density = 0.05;
    else if (loc?.id === 'quarry') density = 0.05;
    if (!rng.chance(density)) continue;
    const [nx, ny, nz] = hf.getNormal(x, z);
    if (ny < 0.6) continue;
    void nx;
    void nz;
    treeCandidates.push({ x, z, y: hf.getHeight(x, z), scale: rng.range(0.7, 1.5), rot: rng.range(0, Math.PI * 2) });
  }

  attempts = 0;
  const totalRocks = DENSITY_COUNTS.high.rocks;
  while (rockCandidates.length < totalRocks && attempts < totalRocks * 6) {
    attempts++;
    const a = rng.range(0, Math.PI * 2);
    const r = Math.sqrt(rng.next()) * (MAP_RADIUS - 20);
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (hf.isUnderwater(x, z)) continue;
    if (colliders.isBlocked(x, z, hf.getHeight(x, z), 2)) continue;
    rockCandidates.push({ x, z, y: hf.getHeight(x, z), scale: rng.range(0.4, 1.8), rot: rng.range(0, Math.PI * 2) });
  }

  attempts = 0;
  const totalGrass = DENSITY_COUNTS.high.grass;
  while (grassCandidates.length < totalGrass && attempts < totalGrass * 4) {
    attempts++;
    const a = rng.range(0, Math.PI * 2);
    const r = Math.sqrt(rng.next()) * (MAP_RADIUS - 15);
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (hf.isUnderwater(x, z)) continue;
    const loc = locationAt(x, z);
    if (loc && ['village', 'outpost', 'facility', 'quarry'].includes(loc.id)) continue;
    grassCandidates.push({ x, z, y: hf.getHeight(x, z), scale: rng.range(0.7, 1.3), rot: rng.range(0, Math.PI * 2) });
  }

  const dummy = new THREE.Object3D();

  function applyInstances(mesh: THREE.InstancedMesh, list: Candidate[], count: number, heightOffset = 0): void {
    const n = Math.min(count, list.length);
    for (let i = 0; i < n; i++) {
      const c = list[i];
      dummy.position.set(c.x, c.y + heightOffset, c.z);
      dummy.rotation.set(0, c.rot, 0);
      dummy.scale.setScalar(c.scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.count = n;
    mesh.instanceMatrix.needsUpdate = true;
  }

  function setDensity(density: VegDensity): void {
    const counts = DENSITY_COUNTS[density];
    applyInstances(trunkMesh, treeCandidates, counts.trees, 1.6);
    applyInstances(foliageMesh, treeCandidates, counts.trees, 3.2);
    applyInstances(rockMesh, rockCandidates, counts.rocks);
    applyInstances(grassMesh, grassCandidates, counts.grass);
  }

  setDensity(initialDensity);

  function update(_cameraPos: THREE.Vector3): void {
    void _cameraPos;
  }

  return { group, setDensity, update };
}
