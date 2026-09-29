export type Archetype = 'scout' | 'rifleman' | 'guard' | 'marksman' | 'heavy';

export interface ArchetypeDef {
  id: Archetype;
  name: string;
  health: number;
  vestLevel: number;
  helmetLevel: number;
  moveSpeed: number;
  sprintSpeed: number;
  weaponId: string;
  visionRange: number;
  visionFOV: number; // radians, full angle
  hearingRange: number;
  reactionTime: number; // seconds from perceive to first shot
  aimTime: number;
  baseAccuracy: number; // 0..1, chance a shot is well-aimed vs. wide
  fireBurstMin: number;
  fireBurstMax: number;
  burstPause: number;
  preferredRange: number;
  fleeHealthFrac: number;
  color: number;
  colorDark: number;
}

export const ARCHETYPES: Record<Archetype, ArchetypeDef> = {
  scout: {
    id: 'scout',
    name: 'Scout',
    health: 70,
    vestLevel: 0,
    helmetLevel: 0,
    moveSpeed: 3.6,
    sprintSpeed: 6.8,
    weaponId: 'vex',
    visionRange: 55,
    visionFOV: 2.2,
    hearingRange: 40,
    reactionTime: 0.25,
    aimTime: 0.25,
    baseAccuracy: 0.55,
    fireBurstMin: 3,
    fireBurstMax: 7,
    burstPause: 0.5,
    preferredRange: 14,
    fleeHealthFrac: 0.3,
    color: 0x4b4a37,
    colorDark: 0x33321f,
  },
  rifleman: {
    id: 'rifleman',
    name: 'Rifleman',
    health: 95,
    vestLevel: 1,
    helmetLevel: 1,
    moveSpeed: 3.2,
    sprintSpeed: 5.8,
    weaponId: 'raven',
    visionRange: 65,
    visionFOV: 2.0,
    hearingRange: 45,
    reactionTime: 0.35,
    aimTime: 0.35,
    baseAccuracy: 0.62,
    fireBurstMin: 2,
    fireBurstMax: 5,
    burstPause: 0.65,
    preferredRange: 28,
    fleeHealthFrac: 0.22,
    color: 0x565c42,
    colorDark: 0x3a3e2b,
  },
  guard: {
    id: 'guard',
    name: 'Guard',
    health: 105,
    vestLevel: 2,
    helmetLevel: 1,
    moveSpeed: 2.9,
    sprintSpeed: 5.2,
    weaponId: 'raven',
    visionRange: 50,
    visionFOV: 2.4,
    hearingRange: 42,
    reactionTime: 0.3,
    aimTime: 0.3,
    baseAccuracy: 0.6,
    fireBurstMin: 3,
    fireBurstMax: 6,
    burstPause: 0.55,
    preferredRange: 22,
    fleeHealthFrac: 0.15,
    color: 0x4c4636,
    colorDark: 0x322e22,
  },
  marksman: {
    id: 'marksman',
    name: 'Marksman',
    health: 80,
    vestLevel: 1,
    helmetLevel: 0,
    moveSpeed: 2.8,
    sprintSpeed: 5.0,
    weaponId: 'sentinel',
    visionRange: 95,
    visionFOV: 1.6,
    hearingRange: 35,
    reactionTime: 0.55,
    aimTime: 0.6,
    baseAccuracy: 0.78,
    fireBurstMin: 1,
    fireBurstMax: 1,
    burstPause: 1.3,
    preferredRange: 55,
    fleeHealthFrac: 0.35,
    color: 0x3d4535,
    colorDark: 0x272c20,
  },
  heavy: {
    id: 'heavy',
    name: 'Heavy',
    health: 160,
    vestLevel: 3,
    helmetLevel: 2,
    moveSpeed: 2.3,
    sprintSpeed: 3.6,
    weaponId: 'breach',
    visionRange: 40,
    visionFOV: 2.3,
    hearingRange: 40,
    reactionTime: 0.4,
    aimTime: 0.3,
    baseAccuracy: 0.58,
    fireBurstMin: 1,
    fireBurstMax: 2,
    burstPause: 0.8,
    preferredRange: 9,
    fleeHealthFrac: 0.08,
    color: 0x3a3a30,
    colorDark: 0x232320,
  },
};

export function pickArchetypeForRole(role: 'leader' | 'member', rng: () => number): Archetype {
  const weights: Array<[Archetype, number]> =
    role === 'leader'
      ? [
          ['rifleman', 0.35],
          ['guard', 0.25],
          ['marksman', 0.2],
          ['heavy', 0.2],
        ]
      : [
          ['scout', 0.3],
          ['rifleman', 0.35],
          ['guard', 0.15],
          ['marksman', 0.1],
          ['heavy', 0.1],
        ];
  const r = rng();
  let acc = 0;
  for (const [id, w] of weights) {
    acc += w;
    if (r <= acc) return id;
  }
  return 'rifleman';
}
