import * as THREE from 'three';

const bodyMat = new THREE.MeshStandardMaterial({ color: 0x2b2b28, roughness: 0.55, metalness: 0.5 });
const barrelMat = new THREE.MeshStandardMaterial({ color: 0x1b1b19, roughness: 0.4, metalness: 0.7 });
const woodMat = new THREE.MeshStandardMaterial({ color: 0x4a3520, roughness: 0.8, metalness: 0.0 });
const magMat = new THREE.MeshStandardMaterial({ color: 0x1f1f1c, roughness: 0.6, metalness: 0.4 });

export interface WeaponMesh {
  group: THREE.Group;
  muzzle: THREE.Object3D;
  ejectionPort: THREE.Object3D;
}

function box(w: number, h: number, d: number, mat: THREE.Material): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.castShadow = true;
  return m;
}

export function buildWeaponMesh(weaponId: string): WeaponMesh {
  const group = new THREE.Group();
  let bodyLen = 0.55;
  let barrelLen = 0.35;
  let hasStock = true;
  let magLen = 0.22;
  let scopeBig = false;

  switch (weaponId) {
    case 'raven':
      bodyLen = 0.5;
      barrelLen = 0.32;
      magLen = 0.24;
      break;
    case 'vex':
      bodyLen = 0.36;
      barrelLen = 0.18;
      magLen = 0.2;
      hasStock = false;
      break;
    case 'sentinel':
      bodyLen = 0.62;
      barrelLen = 0.42;
      magLen = 0.2;
      scopeBig = true;
      break;
    case 'breach':
      bodyLen = 0.5;
      barrelLen = 0.4;
      magLen = 0;
      break;
    case 'longbow':
      bodyLen = 0.7;
      barrelLen = 0.55;
      magLen = 0.12;
      scopeBig = true;
      break;
    case 'sidewinder':
      bodyLen = 0.22;
      barrelLen = 0.12;
      magLen = 0.14;
      hasStock = false;
      break;
  }

  const receiver = box(0.08, 0.11, bodyLen, bodyMat);
  receiver.position.z = 0;
  group.add(receiver);

  const barrel = box(0.035, 0.035, barrelLen, barrelMat);
  barrel.position.z = bodyLen / 2 + barrelLen / 2;
  group.add(barrel);

  if (hasStock) {
    const stock = box(0.05, 0.09, 0.26, woodMat);
    stock.position.z = -(bodyLen / 2 + 0.11);
    group.add(stock);
  }

  if (magLen > 0) {
    const mag = box(0.05, magLen, 0.07, magMat);
    mag.position.set(0, -magLen / 2 - 0.03, bodyLen * 0.12);
    mag.rotation.x = 0.2;
    group.add(mag);
  }

  const grip = box(0.045, 0.16, 0.05, bodyMat);
  grip.position.set(0, -0.1, -bodyLen * 0.12);
  grip.rotation.x = 0.3;
  group.add(grip);

  if (scopeBig) {
    const scope = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.22, 8), barrelMat);
    scope.rotation.z = Math.PI / 2;
    scope.position.set(0, 0.07, bodyLen * 0.05);
    group.add(scope);
  } else {
    const sight = box(0.02, 0.03, 0.03, barrelMat);
    sight.position.set(0, 0.065, bodyLen * 0.3);
    group.add(sight);
  }

  const muzzle = new THREE.Object3D();
  muzzle.position.z = bodyLen / 2 + barrelLen;
  group.add(muzzle);

  const ejectionPort = new THREE.Object3D();
  ejectionPort.position.set(0.05, 0.03, 0);
  group.add(ejectionPort);

  group.rotation.y = Math.PI;
  group.scale.setScalar(1.15);

  return { group, muzzle, ejectionPort };
}
