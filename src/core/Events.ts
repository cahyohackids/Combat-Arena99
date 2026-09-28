import * as THREE from 'three';

export interface DamageEvent {
  targetId: string;
  amount: number;
  isPlayer: boolean;
  isHeadshot: boolean;
  killed: boolean;
  position: THREE.Vector3;
  sourceId?: string;
}

export interface GameEvents {
  [key: string]: unknown;
  'weapon:fire': { weaponId: string; position: THREE.Vector3; isPlayer: boolean };
  'weapon:reload': { weaponId: string; isPlayer: boolean; position: THREE.Vector3 };
  'weapon:empty': { weaponId: string; isPlayer: boolean };
  'weapon:switch': { weaponId: string };
  damage: DamageEvent;
  kill: { targetId: string; isPlayer: boolean; weaponId: string; headshot: boolean };
  'player:damaged': { amount: number; direction: THREE.Vector3; killed: boolean };
  'player:heal': { amount: number };
  'player:died': { reason: string };
  'player:footstep': { surface: string; position: THREE.Vector3; sprinting: boolean };
  'loot:pickup': { itemName: string; itemType: string };
  'loot:prompt': { text: string | null };
  'zone:phase': { phase: number; total: number };
  'zone:warning': { secondsToShrink: number };
  'zone:damage': { amount: number };
  'extraction:started': { seconds: number };
  'extraction:progress': { remaining: number; contested: boolean };
  'extraction:success': Record<string, never>;
  'extraction:failed': Record<string, never>;
  'match:start': { seed: number };
  'match:end': { success: boolean; stats: MatchStats };
  'enemy:alert': { position: THREE.Vector3; level: number };
  'ui:tutorial': { text: string; id: string };
  'grenade:explode': { position: THREE.Vector3; radius: number };
  'smoke:deployed': { position: THREE.Vector3; radius: number };
}

export interface MatchStats {
  survivalTime: number;
  kills: number;
  shotsHit: number;
  shotsFired: number;
  damageDealt: number;
  damageTaken: number;
  lootCollected: number;
  distanceTraveled: number;
  extractionBonus: number;
  success: boolean;
}
