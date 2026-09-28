import * as THREE from 'three';

export interface SquadBlackboard {
  squadId: string;
  members: Set<string>;
  lastKnownPlayerPos: THREE.Vector3 | null;
  lastKnownPlayerTime: number;
  alertLevel: number; // 0 unaware, 1 suspicious, 2 alert/combat
  flankerId: string | null;
  coverSlots: Map<string, [number, number]>;
}

/** Lightweight shared blackboard per squad so members coordinate flanking and don't all stack the same cover. */
export class SquadManager {
  private squads = new Map<string, SquadBlackboard>();

  getOrCreate(squadId: string): SquadBlackboard {
    let sb = this.squads.get(squadId);
    if (!sb) {
      sb = {
        squadId,
        members: new Set(),
        lastKnownPlayerPos: null,
        lastKnownPlayerTime: -999,
        alertLevel: 0,
        flankerId: null,
        coverSlots: new Map(),
      };
      this.squads.set(squadId, sb);
    }
    return sb;
  }

  reportSighting(squadId: string, pos: THREE.Vector3, time: number): void {
    const sb = this.getOrCreate(squadId);
    sb.lastKnownPlayerPos = pos.clone();
    sb.lastKnownPlayerTime = time;
    sb.alertLevel = 2;
  }

  decay(squadId: string, now: number, forgetAfter = 25): void {
    const sb = this.squads.get(squadId);
    if (!sb) return;
    if (sb.alertLevel === 2 && now - sb.lastKnownPlayerTime > forgetAfter) {
      sb.alertLevel = 1;
    }
    if (sb.alertLevel === 1 && now - sb.lastKnownPlayerTime > forgetAfter * 2) {
      sb.alertLevel = 0;
      sb.lastKnownPlayerPos = null;
    }
  }

  claimFlanker(squadId: string, enemyId: string): boolean {
    const sb = this.getOrCreate(squadId);
    if (sb.flankerId === null || sb.flankerId === enemyId) {
      sb.flankerId = enemyId;
      return true;
    }
    return false;
  }

  releaseFlanker(squadId: string, enemyId: string): void {
    const sb = this.squads.get(squadId);
    if (sb && sb.flankerId === enemyId) sb.flankerId = null;
  }

  claimCover(squadId: string, enemyId: string, spot: [number, number]): boolean {
    const sb = this.getOrCreate(squadId);
    for (const [id, s] of sb.coverSlots) {
      if (id !== enemyId && Math.hypot(s[0] - spot[0], s[1] - spot[1]) < 4) return false;
    }
    sb.coverSlots.set(enemyId, spot);
    return true;
  }

  releaseCover(squadId: string, enemyId: string): void {
    const sb = this.squads.get(squadId);
    sb?.coverSlots.delete(enemyId);
  }
}
