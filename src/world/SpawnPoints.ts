import type { LocationId } from './Locations';

export type Rarity = 'common' | 'uncommon' | 'rare';

export interface LootSpawnPoint {
  x: number;
  z: number;
  y: number;
  rarity: Rarity;
  locationId: LocationId;
}

export interface EnemySpawnPoint {
  x: number;
  z: number;
  y: number;
  locationId: LocationId;
  squadId: string;
  role: 'leader' | 'member';
}

export interface POI {
  id: LocationId;
  name: string;
  x: number;
  z: number;
}
