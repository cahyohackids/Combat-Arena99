import * as THREE from 'three';

export interface CircleBlocker {
  type: 'circle';
  x: number;
  z: number;
  radius: number;
  height: number; // top of obstacle (world Y); 0 baseline handled by terrain
  baseY: number;
}

export interface BoxBlocker {
  type: 'box';
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  baseY: number;
  height: number;
  rotY: number;
}

export type Blocker = CircleBlocker | BoxBlocker;

/**
 * Cheap 2D collision registry for character movement (push-out resolution),
 * plus a separate list of real meshes used for raycasts (bullets, line-of-sight, cover).
 */
export class ColliderRegistry {
  blockers: Blocker[] = [];
  raycastMeshes: THREE.Object3D[] = [];
  coverPoints: Array<{ x: number; z: number; normalX: number; normalZ: number; height: number }> = [];

  addCircle(x: number, z: number, radius: number, baseY: number, height: number): void {
    this.blockers.push({ type: 'circle', x, z, radius, baseY, height });
  }

  addBox(minX: number, maxX: number, minZ: number, maxZ: number, baseY: number, height: number, rotY = 0): void {
    this.blockers.push({ type: 'box', minX, maxX, minZ, maxZ, baseY, height, rotY });
  }

  addRaycastMesh(obj: THREE.Object3D): void {
    this.raycastMeshes.push(obj);
  }

  addCoverPoint(x: number, z: number, normalX: number, normalZ: number, height = 1.1): void {
    this.coverPoints.push({ x, z, normalX, normalZ, height });
  }

  /** Resolves a horizontal position against all blockers within `feetY..feetY+charHeight`. Returns corrected [x,z]. */
  resolve(x: number, z: number, feetY: number, radius: number, charHeight: number): [number, number] {
    let cx = x;
    let cz = z;
    for (const b of this.blockers) {
      if (feetY > b.baseY + b.height || feetY + charHeight < b.baseY) continue;
      if (b.type === 'circle') {
        const dx = cx - b.x;
        const dz = cz - b.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        const minDist = b.radius + radius;
        if (dist < minDist && dist > 0.0001) {
          const push = (minDist - dist) / dist;
          cx += dx * push;
          cz += dz * push;
        } else if (dist <= 0.0001) {
          cx += radius;
        }
      } else {
        const nx = Math.max(b.minX - radius, Math.min(cx, b.maxX + radius));
        const nz = Math.max(b.minZ - radius, Math.min(cz, b.maxZ + radius));
        const closestX = Math.max(b.minX, Math.min(cx, b.maxX));
        const closestZ = Math.max(b.minZ, Math.min(cz, b.maxZ));
        const dx = cx - closestX;
        const dz = cz - closestZ;
        const dist = Math.sqrt(dx * dx + dz * dz);
        if (dist < radius) {
          if (dist > 0.0001) {
            const push = (radius - dist) / dist;
            cx += dx * push;
            cz += dz * push;
          } else {
            // Inside the box: push out along the shortest axis.
            const dLeft = cx - b.minX;
            const dRight = b.maxX - cx;
            const dTop = cz - b.minZ;
            const dBottom = b.maxZ - cz;
            const min = Math.min(dLeft, dRight, dTop, dBottom);
            if (min === dLeft) cx = b.minX - radius;
            else if (min === dRight) cx = b.maxX + radius;
            else if (min === dTop) cz = b.minZ - radius;
            else cz = b.maxZ + radius;
          }
        }
        void nx;
        void nz;
      }
    }
    return [cx, cz];
  }

  /** Quick point-inside-any-blocker test at a given height band (used for loot/spawn placement checks). */
  isBlocked(x: number, z: number, feetY: number, charHeight: number): boolean {
    for (const b of this.blockers) {
      if (feetY > b.baseY + b.height || feetY + charHeight < b.baseY) continue;
      if (b.type === 'circle') {
        const dx = x - b.x;
        const dz = z - b.z;
        if (dx * dx + dz * dz < b.radius * b.radius) return true;
      } else if (x >= b.minX && x <= b.maxX && z >= b.minZ && z <= b.maxZ) {
        return true;
      }
    }
    return false;
  }
}
