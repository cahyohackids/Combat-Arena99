import * as THREE from 'three';
import { EventBus } from '@/core/EventBus';
import { GameEvents } from '@/core/Events';

export interface HealItem {
  id: 'bandage' | 'medkit';
  name: string;
  healAmount: number;
  duration: number;
}

export const HEAL_ITEMS: Record<string, HealItem> = {
  bandage: { id: 'bandage', name: 'Bandage', healAmount: 30, duration: 2.6 },
  medkit: { id: 'medkit', name: 'Medkit', healAmount: 85, duration: 5.5 },
};

const ARMOR_REDUCTION_PER_LEVEL = 0.12;
const HELMET_HEADSHOT_REDUCTION_PER_LEVEL = 0.16;

export class PlayerHealth {
  health = 100;
  maxHealth = 100;
  vestLevel = 0;
  helmetLevel = 0;
  alive = true;
  private healing: { item: HealItem; remaining: number } | null = null;
  lastHitDirection = new THREE.Vector3();
  lastDamageTime = -10;
  invulnerable = false;

  constructor(private bus: EventBus<GameEvents>) {}

  get isHealing(): boolean {
    return this.healing !== null;
  }

  get healProgress01(): number {
    if (!this.healing) return 0;
    return 1 - this.healing.remaining / this.healing.item.duration;
  }

  startHeal(itemId: 'bandage' | 'medkit'): boolean {
    if (this.health >= this.maxHealth || this.healing) return false;
    this.healing = { item: HEAL_ITEMS[itemId], remaining: HEAL_ITEMS[itemId].duration };
    return true;
  }

  cancelHeal(): void {
    this.healing = null;
  }

  update(dt: number): void {
    if (this.healing) {
      this.healing.remaining -= dt;
      if (this.healing.remaining <= 0) {
        this.health = Math.min(this.maxHealth, this.health + this.healing.item.healAmount);
        this.bus.emit('player:heal', { amount: this.healing.item.healAmount });
        this.healing = null;
      }
    }
  }

  applyDamage(rawAmount: number, fromDirection: THREE.Vector3, isHeadshot: boolean, isZone = false): void {
    if (!this.alive || this.invulnerable) return;
    let amount = rawAmount;
    if (!isZone) {
      if (isHeadshot) {
        amount *= 1 - this.helmetLevel * HELMET_HEADSHOT_REDUCTION_PER_LEVEL;
      } else {
        amount *= 1 - this.vestLevel * ARMOR_REDUCTION_PER_LEVEL;
      }
      this.healing = null;
    }
    amount = Math.max(1, amount);
    this.health = Math.max(0, this.health - amount);
    this.lastHitDirection.copy(fromDirection);
    this.lastDamageTime = performance.now() / 1000;
    const killed = this.health <= 0;
    if (killed) this.alive = false;
    this.bus.emit('player:damaged', { amount, direction: fromDirection.clone(), killed });
    if (killed) this.bus.emit('player:died', { reason: isZone ? 'zone' : 'combat' });
  }

  reset(): void {
    this.health = this.maxHealth;
    this.vestLevel = 0;
    this.helmetLevel = 0;
    this.alive = true;
    this.healing = null;
  }
}
