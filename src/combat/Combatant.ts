import * as THREE from 'three';

export type Team = 'player' | 'enemy';
export type HitPart = 'head' | 'torso' | 'limb';

export interface Combatant {
  id: string;
  team: Team;
  isAlive(): boolean;
  getPosition(): THREE.Vector3;
  getHeadPosition(): THREE.Vector3;
  getTorsoPosition(): THREE.Vector3;
  applyDamage(amount: number, fromDirection: THREE.Vector3, part: HitPart, sourceId: string): void;
  onHitReaction?(fromDirection: THREE.Vector3, part: HitPart): void;
}

interface HitEntry {
  combatant: Combatant;
  part: HitPart;
}

/** Maps hitbox meshes back to their owning combatant so a single raycast against a flat mesh list resolves damage. */
export class CombatantRegistry {
  private meshToHit = new Map<THREE.Object3D, HitEntry>();
  private combatants = new Map<string, Combatant>();
  hitMeshes: THREE.Object3D[] = [];

  register(combatant: Combatant, meshes: { mesh: THREE.Object3D; part: HitPart }[]): void {
    this.combatants.set(combatant.id, combatant);
    for (const { mesh, part } of meshes) {
      this.meshToHit.set(mesh, { combatant, part });
      this.hitMeshes.push(mesh);
    }
  }

  unregister(combatant: Combatant): void {
    this.combatants.delete(combatant.id);
    this.hitMeshes = this.hitMeshes.filter((m) => this.meshToHit.get(m)?.combatant.id !== combatant.id);
    for (const [mesh, entry] of this.meshToHit) {
      if (entry.combatant.id === combatant.id) this.meshToHit.delete(mesh);
    }
  }

  resolve(mesh: THREE.Object3D): HitEntry | null {
    let cur: THREE.Object3D | null = mesh;
    while (cur) {
      const found = this.meshToHit.get(cur);
      if (found) return found;
      cur = cur.parent;
    }
    return null;
  }

  getAll(): Combatant[] {
    return Array.from(this.combatants.values());
  }
}
