import * as THREE from 'three';
import { RNG } from '@/utils/RNG';
import { MAP_RADIUS } from '@/world/Locations';
import { EventBus } from '@/core/EventBus';
import { GameEvents } from '@/core/Events';

export interface ZonePhase {
  radius: number;
  durationToShrink: number; // seconds of "safe" time before this phase starts shrinking to the next
  shrinkTime: number; // seconds the shrink itself takes
  damagePerSecond: number;
}

export const ZONE_PHASES: ZonePhase[] = [
  { radius: MAP_RADIUS - 10, durationToShrink: 95, shrinkTime: 45, damagePerSecond: 2 },
  { radius: 230, durationToShrink: 80, shrinkTime: 40, damagePerSecond: 4 },
  { radius: 120, durationToShrink: 70, shrinkTime: 35, damagePerSecond: 7 },
  { radius: 45, durationToShrink: 60, shrinkTime: 30, damagePerSecond: 12 },
];

export type ZoneStage = 'safe' | 'shrinking' | 'final';

/**
 * Drives the shrinking danger zone ("Signal Collapse"): four phases each smaller/harsher,
 * culminating at a fixed extraction point that never moves once chosen.
 */
export class SignalCollapse {
  center: THREE.Vector2;
  nextCenter: THREE.Vector2;
  extractionPoint: THREE.Vector2;
  phaseIndex = -1;
  timer = 0;
  currentRadius: number;
  targetRadius: number;
  stage: ZoneStage = 'safe';
  private warned10 = false;
  private warned60 = false;

  constructor(
    private bus: EventBus<GameEvents>,
    seed: number,
    extractionPoint: THREE.Vector2,
  ) {
    const rng = new RNG(seed ^ 0x2468bdfa);
    this.extractionPoint = extractionPoint;
    this.center = new THREE.Vector2(0, 0);
    this.nextCenter = this.pickNextCenter(rng, ZONE_PHASES[0].radius);
    this.currentRadius = ZONE_PHASES[0].radius;
    this.targetRadius = ZONE_PHASES[0].radius;
    this.advancePhase(rng);
  }

  private pickNextCenter(rng: RNG, containingRadius: number): THREE.Vector2 {
    // Bias new zone centers toward the extraction point so the endgame naturally converges there.
    const towardExtraction = this.extractionPoint.clone().multiplyScalar(0.5 + rng.next() * 0.3);
    const jitter = new THREE.Vector2(rng.range(-40, 40), rng.range(-40, 40));
    const candidate = towardExtraction.add(jitter);
    const maxDist = Math.max(10, containingRadius * 0.35);
    if (candidate.length() > maxDist) candidate.setLength(maxDist);
    return candidate;
  }

  private advancePhase(rng: RNG): void {
    this.phaseIndex++;
    this.timer = 0;
    this.warned10 = false;
    this.warned60 = false;
    if (this.phaseIndex >= ZONE_PHASES.length) {
      this.stage = 'final';
      this.center.copy(this.extractionPoint);
      this.targetRadius = 22;
      this.bus.emit('zone:phase', { phase: ZONE_PHASES.length, total: ZONE_PHASES.length });
      return;
    }
    this.stage = 'safe';
    this.currentRadius = this.phaseIndex === 0 ? ZONE_PHASES[0].radius : this.targetRadius;
    this.center.copy(this.nextCenter);
    const phase = ZONE_PHASES[this.phaseIndex];
    this.targetRadius = phase.radius;
    if (this.phaseIndex + 1 < ZONE_PHASES.length) {
      this.nextCenter = this.pickNextCenter(rng, phase.radius);
    } else {
      this.nextCenter.copy(this.extractionPoint);
    }
    this.bus.emit('zone:phase', { phase: this.phaseIndex + 1, total: ZONE_PHASES.length });
  }

  get currentPhase(): ZonePhase | null {
    return this.phaseIndex >= 0 && this.phaseIndex < ZONE_PHASES.length ? ZONE_PHASES[this.phaseIndex] : null;
  }

  get timeRemainingInStage(): number {
    const phase = this.currentPhase;
    if (!phase) return 0;
    const total = this.stage === 'safe' ? phase.durationToShrink : phase.shrinkTime;
    return Math.max(0, total - this.timer);
  }

  isInsideZone(x: number, z: number): boolean {
    const dx = x - this.center.x;
    const dz = z - this.center.y;
    return Math.sqrt(dx * dx + dz * dz) <= this.currentRadius;
  }

  update(dt: number, seedRng: RNG): void {
    if (this.stage === 'final') return;
    const phase = this.currentPhase;
    if (!phase) return;
    this.timer += dt;

    if (this.stage === 'safe') {
      const remaining = phase.durationToShrink - this.timer;
      if (remaining <= 60 && !this.warned60) {
        this.warned60 = true;
        this.bus.emit('zone:warning', { secondsToShrink: 60 });
      }
      if (remaining <= 10 && !this.warned10) {
        this.warned10 = true;
        this.bus.emit('zone:warning', { secondsToShrink: 10 });
      }
      if (this.timer >= phase.durationToShrink) {
        this.stage = 'shrinking';
        this.timer = 0;
      }
    } else if (this.stage === 'shrinking') {
      const t = Math.min(1, this.timer / phase.shrinkTime);
      const startRadius = this.phaseIndex === 0 ? ZONE_PHASES[0].radius : ZONE_PHASES[Math.max(0, this.phaseIndex - 1)].radius;
      this.currentRadius = THREE.MathUtils.lerp(startRadius, phase.radius, t);
      this.center.lerpVectors(this.center, this.nextCenter, dt / Math.max(0.1, phase.shrinkTime - this.timer + dt));
      if (t >= 1) {
        this.advancePhase(seedRng);
      }
    }
  }

  damageOutsideZone(x: number, z: number): number {
    if (this.stage === 'final') return 0;
    const phase = this.currentPhase;
    if (!phase) return 0;
    if (this.isInsideZone(x, z)) return 0;
    return phase.damagePerSecond;
  }
}
