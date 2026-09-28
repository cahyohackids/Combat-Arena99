import * as THREE from 'three';
import { EventBus } from '@/core/EventBus';
import { GameEvents } from '@/core/Events';

const HOLD_DURATION = 22;
const RADIUS = 10;

export type ExtractionState = 'inactive' | 'active' | 'holding' | 'complete';

/** The final-phase objective: stand in the extraction radius uninterrupted for HOLD_DURATION seconds while enemies push in. */
export class Extraction {
  state: ExtractionState = 'inactive';
  point: THREE.Vector2;
  holdRemaining = HOLD_DURATION;
  private started = false;

  constructor(
    private bus: EventBus<GameEvents>,
    point: THREE.Vector2,
  ) {
    this.point = point;
  }

  activate(): void {
    if (this.state !== 'inactive') return;
    this.state = 'active';
    this.bus.emit('extraction:started', { seconds: HOLD_DURATION });
  }

  isPlayerInRadius(x: number, z: number): boolean {
    return Math.hypot(x - this.point.x, z - this.point.y) <= RADIUS;
  }

  update(dt: number, playerX: number, playerZ: number, playerAlive: boolean, contestedByEnemyNearby: boolean): void {
    if (this.state === 'inactive' || this.state === 'complete') return;
    const inRadius = this.isPlayerInRadius(playerX, playerZ) && playerAlive;

    if (inRadius) {
      this.state = 'holding';
      this.holdRemaining -= dt;
      if (!this.started) this.started = true;
      this.bus.emit('extraction:progress', { remaining: Math.max(0, this.holdRemaining), contested: contestedByEnemyNearby });
      if (this.holdRemaining <= 0) {
        this.state = 'complete';
        this.bus.emit('extraction:success', {});
      }
    } else if (this.started) {
      // Leaving the radius doesn't fully reset progress, but it does stop the clock and the player must return.
      this.state = 'active';
      this.bus.emit('extraction:progress', { remaining: Math.max(0, this.holdRemaining), contested: false });
    }
  }

  get progress01(): number {
    return 1 - this.holdRemaining / HOLD_DURATION;
  }
}
