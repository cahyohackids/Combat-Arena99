import * as THREE from 'three';
import { allMaterials } from '@/world/Materials';

let sharedMaterialSet: Set<THREE.Material> | null = null;

function getSharedMaterials(): Set<THREE.Material> {
  if (!sharedMaterialSet) sharedMaterialSet = new Set(allMaterials());
  return sharedMaterialSet;
}

/** Frees GPU geometries/textures for everything in a scene, skipping the app-wide shared Materials singletons. */
export function disposeSceneContents(scene: THREE.Scene): void {
  const shared = getSharedMaterials();
  scene.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (mesh.geometry) mesh.geometry.dispose();
    const mat = (mesh as { material?: THREE.Material | THREE.Material[] }).material;
    if (mat) {
      const mats = Array.isArray(mat) ? mat : [mat];
      for (const m of mats) {
        if (shared.has(m)) continue;
        const withMap = m as THREE.MeshStandardMaterial;
        withMap.map?.dispose();
        (withMap as unknown as { emissiveMap?: THREE.Texture }).emissiveMap?.dispose();
        m.dispose();
      }
    }
  });
  for (const child of [...scene.children]) scene.remove(child);
}
