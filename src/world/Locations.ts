export type LocationId =
  | 'village'
  | 'outpost'
  | 'cedarHill'
  | 'northport'
  | 'quarry'
  | 'facility'
  | 'wilds';

export interface LocationDef {
  id: LocationId;
  name: string;
  center: [number, number]; // x,z
  radius: number;
  falloff: number;
  baseHeight: number; // target height at center (before dome/pit shaping)
  kind: 'flat' | 'hill' | 'pit';
  shapeAmount: number; // dome height / pit depth
  lootDensity: 'low' | 'medium' | 'high' | 'veryHigh';
  enemyDensity: 'low' | 'medium' | 'high';
}

export const MAP_RADIUS = 400;
export const WATER_LEVEL = -6;

export const LOCATIONS: LocationDef[] = [
  {
    id: 'village',
    name: 'Blackridge Village',
    center: [-260, -80],
    radius: 95,
    falloff: 60,
    baseHeight: 4,
    kind: 'flat',
    shapeAmount: 0,
    lootDensity: 'medium',
    enemyDensity: 'medium',
  },
  {
    id: 'outpost',
    name: 'Argo Outpost',
    center: [220, -190],
    radius: 85,
    falloff: 55,
    baseHeight: 9,
    kind: 'flat',
    shapeAmount: 0,
    lootDensity: 'high',
    enemyDensity: 'high',
  },
  {
    id: 'cedarHill',
    name: 'Cedar Hill',
    center: [-190, 230],
    radius: 120,
    falloff: 90,
    baseHeight: 2,
    kind: 'hill',
    shapeAmount: 52,
    lootDensity: 'medium',
    enemyDensity: 'medium',
  },
  {
    id: 'northport',
    name: 'Northport',
    center: [305, 190],
    radius: 95,
    falloff: 60,
    baseHeight: 1,
    kind: 'flat',
    shapeAmount: 0,
    lootDensity: 'medium',
    enemyDensity: 'medium',
  },
  {
    id: 'quarry',
    name: 'Redstone Quarry',
    center: [55, -270],
    radius: 95,
    falloff: 55,
    baseHeight: 5,
    kind: 'pit',
    shapeAmount: 34,
    lootDensity: 'medium',
    enemyDensity: 'low',
  },
  {
    id: 'facility',
    name: 'Echo Research Facility',
    center: [20, 55],
    radius: 78,
    falloff: 45,
    baseHeight: 3,
    kind: 'flat',
    shapeAmount: 0,
    lootDensity: 'veryHigh',
    enemyDensity: 'high',
  },
];

/** Straight-ish connective roads between locations (also used to bias AI patrol routes). */
export const ROADS: Array<[LocationId, LocationId]> = [
  ['village', 'outpost'],
  ['village', 'cedarHill'],
  ['outpost', 'facility'],
  ['outpost', 'quarry'],
  ['cedarHill', 'facility'],
  ['facility', 'northport'],
  ['quarry', 'northport'],
];

export function getLocation(id: LocationId): LocationDef {
  const l = LOCATIONS.find((x) => x.id === id);
  if (!l) throw new Error(`Unknown location ${id}`);
  return l;
}

export function locationAt(x: number, z: number): LocationDef | null {
  let best: LocationDef | null = null;
  let bestD = Infinity;
  for (const loc of LOCATIONS) {
    const dx = x - loc.center[0];
    const dz = z - loc.center[1];
    const d = Math.sqrt(dx * dx + dz * dz);
    if (d < loc.radius && d < bestD) {
      best = loc;
      bestD = d;
    }
  }
  return best;
}
