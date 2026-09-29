import * as THREE from 'three';
import { Combatant, HitPart } from '@/combat/Combatant';
import { PlayerController } from './PlayerController';
import { PlayerHealth } from './PlayerHealth';

/** Adapts the player's controller + health model to the shared Combatant interface so weapons/AI treat it uniformly. */
export class PlayerCombatant implements Combatant {
  id = 'player';
  team: 'player' = 'player';

  constructor(
    private controller: PlayerController,
    private health: PlayerHealth,
  ) {}

  isAlive(): boolean {
    return this.health.alive;
  }

  getPosition(): THREE.Vector3 {
    return this.controller.position.clone();
  }

  getHeadPosition(): THREE.Vector3 {
    return this.controller.position.clone().add(new THREE.Vector3(0, this.controller.eyeHeight, 0));
  }

  getTorsoPosition(): THREE.Vector3 {
    return this.controller.position.clone().add(new THREE.Vector3(0, this.controller.eyeHeight * 0.6, 0));
  }

  applyDamage(amount: number, fromDirection: THREE.Vector3, part: HitPart): void {
    this.health.applyDamage(amount, fromDirection, part === 'head');
  }
}
