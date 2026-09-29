import * as THREE from 'three';

/** Shared, reused materials for procedural structures — keeps draw calls and memory low. */
export const Materials = {
  concrete: new THREE.MeshStandardMaterial({ color: 0x8a867c, roughness: 0.95, metalness: 0.02 }),
  concreteDark: new THREE.MeshStandardMaterial({ color: 0x54524c, roughness: 0.9, metalness: 0.02 }),
  wallPlaster: new THREE.MeshStandardMaterial({ color: 0xb8ab8e, roughness: 0.88, metalness: 0.0 }),
  wallPlasterDirty: new THREE.MeshStandardMaterial({ color: 0x8f8570, roughness: 0.92, metalness: 0.0 }),
  woodPlank: new THREE.MeshStandardMaterial({ color: 0x5b4531, roughness: 0.85, metalness: 0.0 }),
  woodDark: new THREE.MeshStandardMaterial({ color: 0x362718, roughness: 0.85, metalness: 0.0 }),
  roofTin: new THREE.MeshStandardMaterial({ color: 0x3f3a36, roughness: 0.6, metalness: 0.55 }),
  roofRust: new THREE.MeshStandardMaterial({ color: 0x5a3a26, roughness: 0.75, metalness: 0.3 }),
  metal: new THREE.MeshStandardMaterial({ color: 0x6b6e6a, roughness: 0.5, metalness: 0.75 }),
  metalDark: new THREE.MeshStandardMaterial({ color: 0x2e302f, roughness: 0.55, metalness: 0.7 }),
  rust: new THREE.MeshStandardMaterial({ color: 0x6b4327, roughness: 0.8, metalness: 0.4 }),
  glassDark: new THREE.MeshStandardMaterial({
    color: 0x1a2226,
    roughness: 0.15,
    metalness: 0.4,
    transparent: true,
    opacity: 0.85,
  }),
  containerBlue: new THREE.MeshStandardMaterial({ color: 0x35566b, roughness: 0.55, metalness: 0.5 }),
  containerRust: new THREE.MeshStandardMaterial({ color: 0x7a4a2c, roughness: 0.65, metalness: 0.4 }),
  containerGreen: new THREE.MeshStandardMaterial({ color: 0x445a3e, roughness: 0.6, metalness: 0.45 }),
  containerOlive: new THREE.MeshStandardMaterial({ color: 0x585c42, roughness: 0.6, metalness: 0.4 }),
  sandbag: new THREE.MeshStandardMaterial({ color: 0x9a8a63, roughness: 0.95, metalness: 0.0 }),
  fabricCamo: new THREE.MeshStandardMaterial({ color: 0x4b4a37, roughness: 0.9, metalness: 0.0 }),
  rockGrey: new THREE.MeshStandardMaterial({ color: 0x5b584f, roughness: 0.95, metalness: 0.03 }),
  barkTree: new THREE.MeshStandardMaterial({ color: 0x3c2e20, roughness: 0.9, metalness: 0.0 }),
  foliage: new THREE.MeshStandardMaterial({ color: 0x2c3620, roughness: 0.85, metalness: 0.0 }),
  foliageDry: new THREE.MeshStandardMaterial({ color: 0x565627, roughness: 0.85, metalness: 0.0 }),
  vehicleWreck: new THREE.MeshStandardMaterial({ color: 0x4a3f38, roughness: 0.7, metalness: 0.35 }),
  concreteBarrier: new THREE.MeshStandardMaterial({ color: 0x9b9a8f, roughness: 0.9, metalness: 0.0 }),
  chainlink: new THREE.MeshStandardMaterial({
    color: 0x878b84,
    roughness: 0.6,
    metalness: 0.6,
    transparent: true,
    opacity: 0.55,
    side: THREE.DoubleSide,
  }),
  crane: new THREE.MeshStandardMaterial({ color: 0xb8823a, roughness: 0.65, metalness: 0.5 }),
  asphalt: new THREE.MeshStandardMaterial({ color: 0x2c2b28, roughness: 0.95, metalness: 0.0 }),
  sand: new THREE.MeshStandardMaterial({ color: 0x93825f, roughness: 0.95, metalness: 0.0 }),
  emissiveAmber: new THREE.MeshStandardMaterial({
    color: 0x1a1712,
    emissive: 0xffaa44,
    emissiveIntensity: 1.6,
    roughness: 0.5,
  }),
  emissiveRed: new THREE.MeshStandardMaterial({
    color: 0x1a0d0d,
    emissive: 0xff2222,
    emissiveIntensity: 2.0,
    roughness: 0.5,
  }),
};

export function allMaterials(): THREE.Material[] {
  return Object.values(Materials);
}
