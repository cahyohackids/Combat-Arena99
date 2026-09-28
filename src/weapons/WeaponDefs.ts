export type AmmoType = 'light' | 'medium' | 'heavy' | 'shells' | 'precision';
export type WeaponSlot = 'primary1' | 'primary2' | 'sidearm';

export interface WeaponDef {
  id: string;
  name: string;
  slot: 'primary' | 'sidearm';
  ammoType: AmmoType;
  automatic: boolean;
  damage: number;
  headshotMultiplier: number;
  fireInterval: number; // seconds between shots
  magSize: number;
  reserveMax: number;
  reloadTime: number;
  pellets: number; // >1 for shotgun spread pattern
  hipSpread: number; // radians, base cone half-angle
  aimSpread: number;
  movingSpreadMult: number;
  sprintSpreadMult: number;
  recoilVertical: number; // radians kick per shot
  recoilHorizontal: number; // radians random variance per shot
  recoilRecoverySpeed: number;
  rangeStart: number; // full damage out to this range
  rangeEnd: number; // damage falls to minDamageMult by here
  minDamageMult: number;
  bulletSpeed: number; // visual tracer speed, m/s
  adsZoom: number; // FOV multiplier while aiming (<1 = zoomed in)
  adsTime: number; // seconds to raise sights
  muzzleFlashSize: number;
  soundProfile: 'rifle' | 'smg' | 'marksman' | 'shotgun' | 'sniper' | 'pistol';
}

export const WEAPONS: Record<string, WeaponDef> = {
  raven: {
    id: 'raven',
    name: 'RAVEN',
    slot: 'primary',
    ammoType: 'medium',
    automatic: true,
    damage: 26,
    headshotMultiplier: 2.0,
    fireInterval: 0.1,
    magSize: 30,
    reserveMax: 180,
    reloadTime: 2.3,
    pellets: 1,
    hipSpread: 0.055,
    aimSpread: 0.008,
    movingSpreadMult: 1.8,
    sprintSpreadMult: 3.0,
    recoilVertical: 0.016,
    recoilHorizontal: 0.006,
    recoilRecoverySpeed: 9,
    rangeStart: 45,
    rangeEnd: 110,
    minDamageMult: 0.55,
    bulletSpeed: 340,
    adsZoom: 0.82,
    adsTime: 0.18,
    muzzleFlashSize: 1.0,
    soundProfile: 'rifle',
  },
  vex: {
    id: 'vex',
    name: 'VEX',
    slot: 'primary',
    ammoType: 'light',
    automatic: true,
    damage: 17,
    headshotMultiplier: 1.8,
    fireInterval: 0.072,
    magSize: 40,
    reserveMax: 240,
    reloadTime: 1.9,
    pellets: 1,
    hipSpread: 0.045,
    aimSpread: 0.012,
    movingSpreadMult: 1.4,
    sprintSpreadMult: 2.2,
    recoilVertical: 0.011,
    recoilHorizontal: 0.008,
    recoilRecoverySpeed: 11,
    rangeStart: 20,
    rangeEnd: 55,
    minDamageMult: 0.4,
    bulletSpeed: 320,
    adsZoom: 0.88,
    adsTime: 0.13,
    muzzleFlashSize: 0.85,
    soundProfile: 'smg',
  },
  sentinel: {
    id: 'sentinel',
    name: 'SENTINEL',
    slot: 'primary',
    ammoType: 'precision',
    automatic: false,
    damage: 52,
    headshotMultiplier: 2.2,
    fireInterval: 0.24,
    magSize: 12,
    reserveMax: 72,
    reloadTime: 2.6,
    pellets: 1,
    hipSpread: 0.05,
    aimSpread: 0.004,
    movingSpreadMult: 2.2,
    sprintSpreadMult: 3.5,
    recoilVertical: 0.038,
    recoilHorizontal: 0.012,
    recoilRecoverySpeed: 7,
    rangeStart: 90,
    rangeEnd: 180,
    minDamageMult: 0.7,
    bulletSpeed: 420,
    adsZoom: 0.62,
    adsTime: 0.22,
    muzzleFlashSize: 1.2,
    soundProfile: 'marksman',
  },
  breach: {
    id: 'breach',
    name: 'BREACH',
    slot: 'primary',
    ammoType: 'shells',
    automatic: false,
    damage: 22,
    headshotMultiplier: 1.6,
    fireInterval: 0.75,
    magSize: 6,
    reserveMax: 36,
    reloadTime: 0.55,
    pellets: 9,
    hipSpread: 0.09,
    aimSpread: 0.055,
    movingSpreadMult: 1.3,
    sprintSpreadMult: 1.8,
    recoilVertical: 0.05,
    recoilHorizontal: 0.02,
    recoilRecoverySpeed: 6,
    rangeStart: 8,
    rangeEnd: 22,
    minDamageMult: 0.2,
    bulletSpeed: 280,
    adsZoom: 0.92,
    adsTime: 0.16,
    muzzleFlashSize: 1.6,
    soundProfile: 'shotgun',
  },
  longbow: {
    id: 'longbow',
    name: 'LONGBOW',
    slot: 'primary',
    ammoType: 'heavy',
    automatic: false,
    damage: 95,
    headshotMultiplier: 2.5,
    fireInterval: 1.35,
    magSize: 5,
    reserveMax: 30,
    reloadTime: 3.2,
    pellets: 1,
    hipSpread: 0.07,
    aimSpread: 0.003,
    movingSpreadMult: 2.5,
    sprintSpreadMult: 4,
    recoilVertical: 0.09,
    recoilHorizontal: 0.02,
    recoilRecoverySpeed: 5,
    rangeStart: 130,
    rangeEnd: 260,
    minDamageMult: 0.8,
    bulletSpeed: 480,
    adsZoom: 0.4,
    adsTime: 0.3,
    muzzleFlashSize: 1.8,
    soundProfile: 'sniper',
  },
  sidewinder: {
    id: 'sidewinder',
    name: 'SIDEWINDER',
    slot: 'sidearm',
    ammoType: 'light',
    automatic: false,
    damage: 24,
    headshotMultiplier: 2.0,
    fireInterval: 0.16,
    magSize: 14,
    reserveMax: 84,
    reloadTime: 1.5,
    pellets: 1,
    hipSpread: 0.04,
    aimSpread: 0.01,
    movingSpreadMult: 1.5,
    sprintSpreadMult: 2.4,
    recoilVertical: 0.02,
    recoilHorizontal: 0.009,
    recoilRecoverySpeed: 10,
    rangeStart: 30,
    rangeEnd: 70,
    minDamageMult: 0.5,
    bulletSpeed: 300,
    adsZoom: 0.9,
    adsTime: 0.12,
    muzzleFlashSize: 0.8,
    soundProfile: 'pistol',
  },
};

export const AMMO_MAX_RESERVE: Record<AmmoType, number> = {
  light: 240,
  medium: 180,
  heavy: 30,
  shells: 36,
  precision: 72,
};

export interface ThrowableDef {
  id: 'frag' | 'smoke';
  name: string;
  fuseTime: number;
  radius: number;
  damage: number;
  throwSpeed: number;
}

export const THROWABLES: Record<string, ThrowableDef> = {
  frag: { id: 'frag', name: 'Frag Pulse', fuseTime: 2.2, radius: 7, damage: 110, throwSpeed: 18 },
  smoke: { id: 'smoke', name: 'Smoke Canister', fuseTime: 1.4, radius: 9, damage: 0, throwSpeed: 15 },
};
