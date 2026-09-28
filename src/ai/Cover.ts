import { ColliderRegistry } from '@/world/Colliders';
import { SquadManager } from './Squad';

export interface CoverChoice {
  x: number;
  z: number;
  standX: number; // position to stand at (offset from cover point toward the enemy's own side)
  standZ: number;
}

/** Picks the nearest unclaimed cover point that sits between the enemy and the threat. */
export function chooseCover(
  colliders: ColliderRegistry,
  squad: SquadManager,
  squadId: string,
  enemyId: string,
  selfX: number,
  selfZ: number,
  threatX: number,
  threatZ: number,
): CoverChoice | null {
  const candidates: Array<{ score: number; choice: CoverChoice }> = [];

  for (const cp of colliders.coverPoints) {
    const toThreatX = threatX - cp.x;
    const toThreatZ = threatZ - cp.z;
    const dot = toThreatX * cp.normalX + toThreatZ * cp.normalZ;
    // Only useful if the cover's outward face roughly points away from the threat (i.e. threat is on the normal side).
    if (dot < 0.5) continue;

    const standX = cp.x - cp.normalX * 0.9;
    const standZ = cp.z - cp.normalZ * 0.9;
    const distSelf = Math.hypot(selfX - standX, selfZ - standZ);
    const distThreat = Math.hypot(threatX - cp.x, threatZ - cp.z);
    if (distThreat < 6) continue; // too close to threat to be useful cover

    const score = distSelf * 1.0 + Math.abs(distThreat - 22) * 0.3;
    candidates.push({ score, choice: { x: cp.x, z: cp.z, standX, standZ } });
  }

  candidates.sort((a, b) => a.score - b.score);
  for (const c of candidates) {
    if (squad.claimCover(squadId, enemyId, [c.choice.x, c.choice.z])) return c.choice;
  }
  return null;
}
