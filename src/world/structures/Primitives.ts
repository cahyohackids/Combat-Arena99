import * as THREE from 'three';
import { Materials } from '../Materials';
import { ColliderRegistry } from '../Colliders';

function box(w: number, h: number, d: number, mat: THREE.Material): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

/** A rectangular building shell with door gap(s), interior floor, and a pitched or flat roof. Interior is walkable. */
export function buildHouse(opts: {
  width: number;
  depth: number;
  height: number;
  wallMat?: THREE.Material;
  roofMat?: THREE.Material;
  doorSide?: 'north' | 'south' | 'east' | 'west';
  pitchedRoof?: boolean;
  windows?: boolean;
}): THREE.Group {
  const { width, depth, height } = opts;
  const wallMat = opts.wallMat ?? Materials.wallPlaster;
  const roofMat = opts.roofMat ?? Materials.roofTin;
  const thickness = 0.25;
  const group = new THREE.Group();
  const doorW = 1.5;
  const doorSide = opts.doorSide ?? 'south';

  const floor = box(width, 0.2, depth, Materials.concreteDark);
  floor.position.y = 0.1;
  floor.receiveShadow = true;
  group.add(floor);

  function wallWithDoor(len: number, hasDoor: boolean): THREE.Group {
    const g = new THREE.Group();
    if (!hasDoor) {
      const w = box(len, height, thickness, wallMat);
      w.position.y = height / 2;
      g.add(w);
      return g;
    }
    const sideLen = (len - doorW) / 2;
    const left = box(sideLen, height, thickness, wallMat);
    left.position.set(-(len / 2) + sideLen / 2, height / 2, 0);
    const right = box(sideLen, height, thickness, wallMat);
    right.position.set(len / 2 - sideLen / 2, height / 2, 0);
    const lintel = box(doorW, height * 0.32, thickness, wallMat);
    lintel.position.set(0, height - height * 0.16, 0);
    g.add(left, right, lintel);
    return g;
  }

  const north = wallWithDoor(width, doorSide === 'north');
  north.position.set(0, 0, -depth / 2);
  const south = wallWithDoor(width, doorSide === 'south');
  south.position.set(0, 0, depth / 2);
  const east = wallWithDoor(depth, doorSide === 'east');
  east.rotation.y = Math.PI / 2;
  east.position.set(width / 2, 0, 0);
  const west = wallWithDoor(depth, doorSide === 'west');
  west.rotation.y = Math.PI / 2;
  west.position.set(-width / 2, 0, 0);
  group.add(north, south, east, west);

  if (opts.windows) {
    for (const side of [-1, 1]) {
      const win = box(1.1, 1.1, 0.06, Materials.glassDark);
      win.position.set((width / 2 - 0.05) * side, height * 0.55, 0);
      win.rotation.y = Math.PI / 2;
      group.add(win);
    }
  }

  if (opts.pitchedRoof) {
    const roofHalf = box(Math.sqrt((width / 2) ** 2 + (height * 0.4) ** 2), 0.15, depth + 0.6, roofMat);
    const angle = Math.atan2(height * 0.4, width / 2);
    roofHalf.rotation.z = angle;
    roofHalf.position.set(-width / 4, height + (height * 0.2) / 2, 0);
    const roofHalf2 = roofHalf.clone();
    roofHalf2.rotation.z = -angle;
    roofHalf2.position.set(width / 4, height + (height * 0.2) / 2, 0);
    group.add(roofHalf, roofHalf2);
  } else {
    const roof = box(width + 0.4, 0.25, depth + 0.4, roofMat);
    roof.position.y = height + 0.12;
    group.add(roof);
  }

  return group;
}

export function registerBoxCollider(
  colliders: ColliderRegistry,
  group: THREE.Object3D,
  width: number,
  depth: number,
  height: number,
  originX: number,
  originZ: number,
  baseY: number,
  rotY = 0,
  wallOnly = true,
): void {
  void wallOnly;
  // Approximate as an axis box (rotated footprint handled by caller pre-rotating coordinates when rotY≈0..π/2 steps).
  const cos = Math.cos(rotY);
  const sin = Math.sin(rotY);
  const hw = width / 2;
  const hd = depth / 2;
  const corners = [
    [-hw, -hd],
    [hw, -hd],
    [hw, hd],
    [-hw, hd],
  ].map(([x, z]) => [originX + x * cos - z * sin, originZ + x * sin + z * cos]);
  const xs = corners.map((c) => c[0]);
  const zs = corners.map((c) => c[1]);
  colliders.addBox(Math.min(...xs), Math.max(...xs), Math.min(...zs), Math.max(...zs), baseY, height);
  void group;
}

export function buildContainer(color: 'blue' | 'rust' | 'green' | 'olive' = 'blue'): THREE.Group {
  const mat =
    color === 'blue'
      ? Materials.containerBlue
      : color === 'rust'
        ? Materials.containerRust
        : color === 'green'
          ? Materials.containerGreen
          : Materials.containerOlive;
  const group = new THREE.Group();
  const w = 2.44,
    h = 2.6,
    d = 6.06;
  const body = box(w, h, d, mat);
  body.position.y = h / 2;
  group.add(body);
  // Corrugation hint via thin ribs.
  for (let i = -2; i <= 2; i++) {
    const rib = box(0.06, h * 0.94, d * 0.98, Materials.metalDark);
    rib.position.set((i * w) / 5, h / 2, 0);
    group.add(rib);
  }
  const doorFrame = box(w * 0.98, h * 0.9, 0.1, Materials.metalDark);
  doorFrame.position.set(0, h / 2, d / 2);
  group.add(doorFrame);
  return group;
}

export function buildCrate(size = 0.9): THREE.Mesh {
  const m = box(size, size, size, Materials.woodPlank);
  m.position.y = size / 2;
  return m;
}

export function buildBarrel(): THREE.Mesh {
  const geo = new THREE.CylinderGeometry(0.38, 0.38, 0.9, 12);
  const m = new THREE.Mesh(geo, Materials.rust);
  m.position.y = 0.45;
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

export function buildSandbagWall(length: number, height = 1.0): THREE.Group {
  const group = new THREE.Group();
  const rows = Math.round(height / 0.32);
  const count = Math.max(2, Math.round(length / 0.55));
  for (let r = 0; r < rows; r++) {
    for (let i = 0; i < count; i++) {
      const geo = new THREE.SphereGeometry(0.32, 6, 5);
      geo.scale(1.3, 0.7, 1);
      const bag = new THREE.Mesh(geo, Materials.sandbag);
      bag.position.set(-length / 2 + i * (length / (count - 1 || 1)), 0.16 + r * 0.3, (r % 2) * 0.08);
      bag.castShadow = true;
      bag.receiveShadow = true;
      group.add(bag);
    }
  }
  return group;
}

export function buildChainlinkFence(length: number, height = 2.0): THREE.Group {
  const group = new THREE.Group();
  const postCount = Math.max(2, Math.round(length / 3));
  for (let i = 0; i < postCount; i++) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, height, 6), Materials.metalDark);
    post.position.set(-length / 2 + (i * length) / (postCount - 1 || 1), height / 2, 0);
    post.castShadow = true;
    group.add(post);
  }
  const mesh = box(length, height * 0.92, 0.04, Materials.chainlink);
  mesh.position.y = height / 2;
  mesh.castShadow = false;
  group.add(mesh);
  return group;
}

export function buildWatchtower(height = 7): THREE.Group {
  const group = new THREE.Group();
  const legOffset = 1.6;
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const leg = box(0.18, height, 0.18, Materials.woodDark);
      leg.position.set(sx * legOffset, height / 2, sz * legOffset);
      group.add(leg);
    }
  }
  for (let i = 1; i < 3; i++) {
    const brace = box(legOffset * 2 + 0.2, 0.12, 0.12, Materials.woodDark);
    brace.position.set(0, (height / 3) * i, legOffset);
    group.add(brace);
    const brace2 = brace.clone();
    brace2.position.z = -legOffset;
    group.add(brace2);
  }
  const platform = box(legOffset * 2 + 0.6, 0.2, legOffset * 2 + 0.6, Materials.woodPlank);
  platform.position.y = height;
  group.add(platform);
  const railHeight = 1.0;
  for (const side of [0, 1, 2, 3]) {
    const rail = box(side % 2 === 0 ? legOffset * 2 + 0.6 : 0.1, railHeight, side % 2 === 0 ? 0.1 : legOffset * 2 + 0.6, Materials.woodDark);
    const off = legOffset + 0.3;
    if (side === 0) rail.position.set(0, height + railHeight / 2, -off);
    if (side === 1) rail.position.set(off, height + railHeight / 2, 0);
    if (side === 2) rail.position.set(0, height + railHeight / 2, off);
    if (side === 3) rail.position.set(-off, height + railHeight / 2, 0);
    group.add(rail);
  }
  const roof = box(legOffset * 2 + 1, 0.15, legOffset * 2 + 1, Materials.roofRust);
  roof.position.y = height + 2.2;
  group.add(roof);
  const roofPost = box(0.1, 2.2, 0.1, Materials.metalDark);
  roofPost.position.y = height + 1.1;
  group.add(roofPost);
  return group;
}

export function buildRock(scale = 1): THREE.Mesh {
  const geo = new THREE.IcosahedronGeometry(scale, 0);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    const jitter = 0.15 + Math.random() * 0.2;
    pos.setXYZ(i, pos.getX(i) * (1 + Math.random() * jitter), pos.getY(i) * (1 + Math.random() * jitter * 0.6), pos.getZ(i) * (1 + Math.random() * jitter));
  }
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, Materials.rockGrey);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

export function buildTree(height = 6): THREE.Group {
  const group = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.28, height * 0.55, 6), Materials.barkTree);
  trunk.position.y = (height * 0.55) / 2;
  trunk.castShadow = true;
  group.add(trunk);
  const foliageMat = Math.random() > 0.5 ? Materials.foliage : Materials.foliageDry;
  for (let i = 0; i < 3; i++) {
    const r = height * 0.32 * (1 - i * 0.18);
    const cone = new THREE.Mesh(new THREE.ConeGeometry(r, height * 0.4, 7), foliageMat);
    cone.position.y = height * 0.5 + i * height * 0.22;
    cone.castShadow = true;
    group.add(cone);
  }
  return group;
}

export function buildAntenna(height = 9): THREE.Group {
  const group = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, height, 6), Materials.metal);
  pole.position.y = height / 2;
  pole.castShadow = true;
  group.add(pole);
  for (let i = 0; i < 3; i++) {
    const guy = box(0.03, height * 0.55, 0.03, Materials.metalDark);
    guy.position.set(Math.cos((i / 3) * Math.PI * 2) * 1.4, height * 0.35, Math.sin((i / 3) * Math.PI * 2) * 1.4);
    guy.rotation.x = 0.35;
    group.add(guy);
  }
  const dish = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2), Materials.metal);
  dish.rotation.x = Math.PI;
  dish.position.y = height * 0.85;
  group.add(dish);
  return group;
}

export function buildVehicleWreck(kind: 'sedan' | 'truck' = 'sedan'): THREE.Group {
  const group = new THREE.Group();
  const bodyLen = kind === 'truck' ? 5.4 : 4.2;
  const bodyW = kind === 'truck' ? 2.2 : 1.8;
  const body = box(bodyW, 1.1, bodyLen, Materials.vehicleWreck);
  body.position.y = 0.65;
  body.rotation.z = (Math.random() - 0.5) * 0.08;
  group.add(body);
  const cabin = box(bodyW * 0.85, 0.7, bodyLen * 0.45, Materials.metalDark);
  cabin.position.set(0, 1.3, kind === 'truck' ? bodyLen * 0.15 : 0);
  group.add(cabin);
  const wheelGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 10);
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const wheel = new THREE.Mesh(wheelGeo, Materials.metalDark);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set((sx * bodyW) / 2, 0.4, sz * (bodyLen / 2 - 0.7));
      group.add(wheel);
    }
  }
  return group;
}

export function buildCrane(height = 14): THREE.Group {
  const group = new THREE.Group();
  const tower = new THREE.Mesh(new THREE.BoxGeometry(0.9, height, 0.9), Materials.crane);
  tower.position.y = height / 2;
  tower.castShadow = true;
  group.add(tower);
  const arm = box(16, 0.7, 0.7, Materials.crane);
  arm.position.set(4, height, 0);
  group.add(arm);
  const counterArm = box(4, 0.7, 0.7, Materials.crane);
  counterArm.position.set(-3.5, height, 0);
  group.add(counterArm);
  const cabin = box(1.2, 1.2, 1.2, Materials.metalDark);
  cabin.position.set(0, height - 1, 0.8);
  group.add(cabin);
  const cable = box(0.05, 6, 0.05, Materials.metalDark);
  cable.position.set(9, height - 3, 0);
  group.add(cable);
  return group;
}

export function buildConcreteBarrier(length = 2): THREE.Mesh {
  const geo = new THREE.BoxGeometry(length, 0.8, 0.5);
  const m = new THREE.Mesh(geo, Materials.concreteBarrier);
  m.position.y = 0.4;
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

export function buildQuarryMachine(): THREE.Group {
  const group = new THREE.Group();
  const base = box(4, 2, 3, Materials.metal);
  base.position.y = 1;
  group.add(base);
  const boomBase = box(0.6, 0.6, 6, Materials.metalDark);
  boomBase.position.set(0, 2.5, 2.5);
  boomBase.rotation.x = -0.4;
  group.add(boomBase);
  const bucket = box(1.4, 1, 1.6, Materials.rust);
  bucket.position.set(0, 1.3, 5.3);
  group.add(bucket);
  for (const s of [-1, 1]) {
    const tread = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 1, 10), Materials.metalDark);
    tread.rotation.z = Math.PI / 2;
    tread.position.set(s * 1.6, 0.9, -0.5);
    group.add(tread);
  }
  return group;
}
