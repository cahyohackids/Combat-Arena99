import * as THREE from 'three';

export interface CharacterPose {
  moveSpeed01: number; // 0..1 of max speed, drives walk cycle
  aiming: boolean;
  crouching: boolean;
  aimPitch: number;
  moving: boolean;
  firing: boolean;
  deadT: number; // 0 alive, ramps to 1 on death for ragdoll-ish collapse
}

export interface CharacterParts {
  root: THREE.Group;
  hip: THREE.Group;
  chest: THREE.Group;
  head: THREE.Object3D;
  headMesh: THREE.Mesh;
  torsoMesh: THREE.Mesh;
  upperArmR: THREE.Group;
  lowerArmR: THREE.Group;
  handR: THREE.Group;
  upperArmL: THREE.Group;
  lowerArmL: THREE.Group;
  upperLegR: THREE.Group;
  lowerLegR: THREE.Group;
  upperLegL: THREE.Group;
  lowerLegL: THREE.Group;
  weaponSocket: THREE.Group;
  walkPhase: number;
}

export interface CharacterColors {
  uniform: number;
  uniformDark: number;
  skin: number;
  helmet?: number;
  vest?: number;
}

function capsule(radius: number, length: number, mat: THREE.Material): THREE.Mesh {
  const geo = new THREE.CapsuleGeometry(radius, length, 4, 8);
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = true;
  // Not a shadow receiver: at character scale the shadow map's bias causes the whole limb to self-shadow black.
  m.receiveShadow = false;
  return m;
}

/** Builds a low-poly procedural soldier rig (no external models) shared by the player and every enemy archetype. */
export function buildCharacterModel(colors: CharacterColors): CharacterParts {
  const uniformMat = new THREE.MeshStandardMaterial({ color: colors.uniform, roughness: 0.85, metalness: 0 });
  const uniformDarkMat = new THREE.MeshStandardMaterial({ color: colors.uniformDark, roughness: 0.85, metalness: 0 });
  const skinMat = new THREE.MeshStandardMaterial({ color: colors.skin, roughness: 0.7, metalness: 0 });

  const root = new THREE.Group();
  const hip = new THREE.Group();
  hip.position.y = 0.92;
  root.add(hip);

  const chest = new THREE.Group();
  chest.position.y = 0.32;
  hip.add(chest);

  const torsoMesh = capsule(0.19, 0.34, uniformMat);
  torsoMesh.position.y = 0.2;
  torsoMesh.name = 'hit-torso';
  chest.add(torsoMesh);

  const neck = new THREE.Group();
  neck.position.y = 0.42;
  chest.add(neck);

  const head = new THREE.Group();
  head.position.y = 0.14;
  neck.add(head);
  const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.135, 10, 8), skinMat);
  headMesh.castShadow = true;
  headMesh.name = 'hit-head';
  head.add(headMesh);

  if (colors.helmet !== undefined) {
    const helmetMat = new THREE.MeshStandardMaterial({ color: colors.helmet, roughness: 0.6, metalness: 0.3 });
    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.62), helmetMat);
    helmet.position.y = 0.02;
    head.add(helmet);
  }

  if (colors.vest !== undefined) {
    const vestMat = new THREE.MeshStandardMaterial({ color: colors.vest, roughness: 0.8, metalness: 0 });
    const vest = capsule(0.205, 0.24, vestMat);
    vest.position.y = 0.24;
    vest.scale.set(1, 0.86, 1);
    chest.add(vest);
  }

  function arm(side: 1 | -1): { upper: THREE.Group; lower: THREE.Group; hand: THREE.Group } {
    const upper = new THREE.Group();
    upper.position.set(side * 0.235, 0.36, 0);
    chest.add(upper);
    const upperMesh = capsule(0.06, 0.24, uniformMat);
    upperMesh.position.y = -0.13;
    upperMesh.name = 'hit-limb';
    upper.add(upperMesh);

    const lower = new THREE.Group();
    lower.position.set(0, -0.26, 0);
    upper.add(lower);
    const lowerMesh = capsule(0.05, 0.22, uniformDarkMat);
    lowerMesh.position.y = -0.12;
    lowerMesh.name = 'hit-limb';
    lower.add(lowerMesh);

    const hand = new THREE.Group();
    hand.position.set(0, -0.26, 0);
    lower.add(hand);

    return { upper, lower, hand };
  }

  const armR = arm(1);
  const armL = arm(-1);

  function leg(side: 1 | -1): { upper: THREE.Group; lower: THREE.Group } {
    const upper = new THREE.Group();
    upper.position.set(side * 0.1, -0.12, 0);
    hip.add(upper);
    const upperMesh = capsule(0.075, 0.26, uniformDarkMat);
    upperMesh.position.y = -0.15;
    upperMesh.name = 'hit-limb';
    upper.add(upperMesh);

    const lower = new THREE.Group();
    lower.position.set(0, -0.3, 0);
    upper.add(lower);
    const lowerMesh = capsule(0.065, 0.26, uniformDarkMat);
    lowerMesh.position.y = -0.15;
    lowerMesh.name = 'hit-limb';
    lower.add(lowerMesh);

    return { upper, lower };
  }

  const legR = leg(1);
  const legL = leg(-1);

  const weaponSocket = new THREE.Group();
  weaponSocket.position.set(0.02, -0.05, 0.12);
  armR.hand.add(weaponSocket);

  root.castShadow = true;

  return {
    root,
    hip,
    chest,
    head,
    headMesh,
    torsoMesh,
    upperArmR: armR.upper,
    lowerArmR: armR.lower,
    handR: armR.hand,
    upperArmL: armL.upper,
    lowerArmL: armL.lower,
    upperLegR: legR.upper,
    lowerLegR: legR.lower,
    upperLegL: legL.upper,
    lowerLegL: legL.lower,
    weaponSocket,
    walkPhase: 0,
  };
}

export function updateCharacterPose(parts: CharacterParts, pose: CharacterPose, dt: number): void {
  if (pose.deadT > 0) {
    parts.root.rotation.x = THREE.MathUtils.lerp(0, Math.PI / 2, Math.min(1, pose.deadT));
    parts.hip.position.y = THREE.MathUtils.lerp(0.92, 0.22, Math.min(1, pose.deadT));
    return;
  }

  const crouchY = pose.crouching ? 0.68 : 0.92;
  parts.hip.position.y = THREE.MathUtils.lerp(parts.hip.position.y, crouchY, Math.min(1, dt * 10));

  const walkSpeedFactor = 6 + pose.moveSpeed01 * 4;
  if (pose.moving) parts.walkPhase += dt * walkSpeedFactor;
  else parts.walkPhase = THREE.MathUtils.lerp(parts.walkPhase, Math.round(parts.walkPhase / Math.PI) * Math.PI, dt * 8);

  const swing = pose.moving ? 0.55 * Math.min(1, 0.3 + pose.moveSpeed01) : 0;
  parts.upperLegR.rotation.x = Math.sin(parts.walkPhase) * swing;
  parts.upperLegL.rotation.x = Math.sin(parts.walkPhase + Math.PI) * swing;
  parts.lowerLegR.rotation.x = Math.max(0, -Math.sin(parts.walkPhase + 0.6) * swing * 1.3);
  parts.lowerLegL.rotation.x = Math.max(0, -Math.sin(parts.walkPhase + Math.PI + 0.6) * swing * 1.3);

  if (pose.aiming) {
    const targetPitch = THREE.MathUtils.clamp(pose.aimPitch, -1.1, 1.1);
    parts.upperArmR.rotation.x = -1.2 - targetPitch * 0.5;
    parts.lowerArmR.rotation.x = 0.3;
    parts.upperArmL.rotation.x = -1.15 - targetPitch * 0.5;
    parts.chest.rotation.x = targetPitch * 0.28;
  } else {
    const armSwing = pose.moving ? 0.4 * Math.min(1, 0.3 + pose.moveSpeed01) : 0.05;
    parts.upperArmR.rotation.x = Math.sin(parts.walkPhase + Math.PI) * armSwing - 0.25;
    parts.upperArmL.rotation.x = Math.sin(parts.walkPhase) * armSwing - 0.25;
    parts.lowerArmR.rotation.x = THREE.MathUtils.lerp(parts.lowerArmR.rotation.x, 0.15, dt * 6);
    parts.lowerArmL.rotation.x = THREE.MathUtils.lerp(parts.lowerArmL.rotation.x, 0.15, dt * 6);
    parts.chest.rotation.x = THREE.MathUtils.lerp(parts.chest.rotation.x, 0, dt * 6);
  }

  parts.root.rotation.x = THREE.MathUtils.lerp(parts.root.rotation.x, 0, dt * 10);
}
