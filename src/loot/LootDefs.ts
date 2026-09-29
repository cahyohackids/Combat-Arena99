import { Rarity } from '@/world/SpawnPoints';

export type LootKind = 'weapon' | 'ammo' | 'armor' | 'heal' | 'throwable';

export interface LootEntry {
  kind: LootKind;
  id: string;
  label: string;
  rarity: Rarity;
  weight: number;
  ammoAmount?: number;
  armorSlot?: 'helmet' | 'vest';
  armorLevel?: number;
}

export const LOOT_TABLE: LootEntry[] = [
  { kind: 'weapon', id: 'raven', label: 'RAVEN AR', rarity: 'uncommon', weight: 10 },
  { kind: 'weapon', id: 'vex', label: 'VEX SMG', rarity: 'common', weight: 12 },
  { kind: 'weapon', id: 'sentinel', label: 'SENTINEL DMR', rarity: 'rare', weight: 6 },
  { kind: 'weapon', id: 'breach', label: 'BREACH Shotgun', rarity: 'uncommon', weight: 8 },
  { kind: 'weapon', id: 'longbow', label: 'LONGBOW Rifle', rarity: 'rare', weight: 5 },
  { kind: 'weapon', id: 'sidewinder', label: 'SIDEWINDER Pistol', rarity: 'common', weight: 14 },

  { kind: 'ammo', id: 'light', label: 'Light Ammo', rarity: 'common', weight: 20, ammoAmount: 60 },
  { kind: 'ammo', id: 'medium', label: 'Medium Ammo', rarity: 'common', weight: 18, ammoAmount: 60 },
  { kind: 'ammo', id: 'heavy', label: 'Heavy Ammo', rarity: 'uncommon', weight: 8, ammoAmount: 15 },
  { kind: 'ammo', id: 'shells', label: 'Shells', rarity: 'uncommon', weight: 10, ammoAmount: 12 },
  { kind: 'ammo', id: 'precision', label: 'Precision Rounds', rarity: 'uncommon', weight: 8, ammoAmount: 15 },

  { kind: 'armor', id: 'helmet1', label: 'Helmet Mk.I', rarity: 'common', weight: 10, armorSlot: 'helmet', armorLevel: 1 },
  { kind: 'armor', id: 'helmet2', label: 'Helmet Mk.II', rarity: 'uncommon', weight: 6, armorSlot: 'helmet', armorLevel: 2 },
  { kind: 'armor', id: 'helmet3', label: 'Helmet Mk.III', rarity: 'rare', weight: 3, armorSlot: 'helmet', armorLevel: 3 },
  { kind: 'armor', id: 'vest1', label: 'Vest Mk.I', rarity: 'common', weight: 10, armorSlot: 'vest', armorLevel: 1 },
  { kind: 'armor', id: 'vest2', label: 'Vest Mk.II', rarity: 'uncommon', weight: 6, armorSlot: 'vest', armorLevel: 2 },
  { kind: 'armor', id: 'vest3', label: 'Vest Mk.III', rarity: 'rare', weight: 3, armorSlot: 'vest', armorLevel: 3 },

  { kind: 'heal', id: 'bandage', label: 'Bandage', rarity: 'common', weight: 22 },
  { kind: 'heal', id: 'medkit', label: 'Medkit', rarity: 'uncommon', weight: 10 },

  { kind: 'throwable', id: 'frag', label: 'Frag Pulse', rarity: 'uncommon', weight: 9 },
  { kind: 'throwable', id: 'smoke', label: 'Smoke Canister', rarity: 'common', weight: 10 },
];

export function rollLoot(rarity: Rarity, rand: () => number): LootEntry {
  const pool = LOOT_TABLE.filter((e) => e.rarity === rarity);
  const total = pool.reduce((s, e) => s + e.weight, 0);
  let r = rand() * total;
  for (const e of pool) {
    r -= e.weight;
    if (r <= 0) return e;
  }
  return pool[0];
}
