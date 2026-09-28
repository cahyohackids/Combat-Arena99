import { AmmoType } from '@/weapons/WeaponDefs';
import { WeaponSystem, AmmoSource } from '@/weapons/WeaponSystem';
import { WEAPONS } from '@/weapons/WeaponDefs';

export type PrimarySlot = 'primary1' | 'primary2';

export interface InventoryState {
  primary: (WeaponSystem | null)[]; // length 2
  sidearm: WeaponSystem | null;
  activeSlot: 'primary1' | 'primary2' | 'sidearm';
  ammo: Record<AmmoType, number>;
  helmetLevel: number;
  vestLevel: number;
  bandages: number;
  medkits: number;
  frags: number;
  smokes: number;
  lootCollected: number;
}

export class Inventory implements AmmoSource {
  state: InventoryState = {
    primary: [null, null],
    sidearm: null,
    activeSlot: 'primary1',
    ammo: { light: 0, medium: 0, heavy: 0, shells: 0, precision: 0 },
    helmetLevel: 0,
    vestLevel: 0,
    bandages: 0,
    medkits: 0,
    frags: 0,
    smokes: 0,
    lootCollected: 0,
  };

  getActiveWeapon(): WeaponSystem | null {
    if (this.state.activeSlot === 'sidearm') return this.state.sidearm;
    return this.state.activeSlot === 'primary1' ? this.state.primary[0] : this.state.primary[1];
  }

  equipStarting(primaryId: string, sidearmId = 'sidewinder'): void {
    this.state.ammo[WEAPONS[primaryId].ammoType] += Math.floor(WEAPONS[primaryId].reserveMax * 0.5);
    this.state.ammo[WEAPONS[sidearmId].ammoType] += Math.floor(WEAPONS[sidearmId].reserveMax * 0.6);
    this.state.primary[0] = new WeaponSystem(WEAPONS[primaryId], 0, this);
    this.state.sidearm = new WeaponSystem(WEAPONS[sidearmId], 0, this);
    this.state.activeSlot = 'primary1';
  }

  pickupWeapon(weaponId: string): PrimarySlot | 'sidearm' | null {
    const def = WEAPONS[weaponId];
    this.state.ammo[def.ammoType] = Math.min(999, this.state.ammo[def.ammoType] + Math.floor(def.reserveMax * 0.4));
    if (def.slot === 'sidearm') {
      this.state.sidearm = new WeaponSystem(def, 0, this);
      return 'sidearm';
    }
    if (!this.state.primary[0]) {
      this.state.primary[0] = new WeaponSystem(def, 0, this);
      return 'primary1';
    }
    if (!this.state.primary[1]) {
      this.state.primary[1] = new WeaponSystem(def, 0, this);
      return 'primary2';
    }
    // Replace the currently active primary slot.
    const slot: PrimarySlot = this.state.activeSlot === 'primary2' ? 'primary2' : 'primary1';
    const idx = slot === 'primary1' ? 0 : 1;
    this.state.primary[idx] = new WeaponSystem(def, 0, this);
    return slot;
  }

  cycleWeapon(): void {
    const order: Array<'primary1' | 'primary2' | 'sidearm'> = ['primary1', 'primary2', 'sidearm'];
    let idx = order.indexOf(this.state.activeSlot);
    for (let i = 0; i < order.length; i++) {
      idx = (idx + 1) % order.length;
      const slot = order[idx];
      if (slot === 'sidearm' && this.state.sidearm) {
        this.state.activeSlot = slot;
        return;
      }
      if (slot === 'primary1' && this.state.primary[0]) {
        this.state.activeSlot = slot;
        return;
      }
      if (slot === 'primary2' && this.state.primary[1]) {
        this.state.activeSlot = slot;
        return;
      }
    }
  }

  selectSlot(slot: 'primary1' | 'primary2' | 'sidearm'): boolean {
    if (slot === 'primary1' && this.state.primary[0]) {
      this.state.activeSlot = slot;
      return true;
    }
    if (slot === 'primary2' && this.state.primary[1]) {
      this.state.activeSlot = slot;
      return true;
    }
    if (slot === 'sidearm' && this.state.sidearm) {
      this.state.activeSlot = slot;
      return true;
    }
    return false;
  }

  addAmmo(type: AmmoType, amount: number): void {
    this.state.ammo[type] = Math.min(999, this.state.ammo[type] + amount);
  }

  // AmmoSource implementation — the shared pool every equipped weapon reloads from.
  get(type: AmmoType): number {
    return this.state.ammo[type];
  }

  consume(type: AmmoType, amount: number): number {
    const take = Math.min(amount, this.state.ammo[type]);
    this.state.ammo[type] -= take;
    return take;
  }

  add(type: AmmoType, amount: number): void {
    this.addAmmo(type, amount);
  }

  addArmor(slot: 'helmet' | 'vest', level: number): boolean {
    if (slot === 'helmet') {
      if (level <= this.state.helmetLevel) return false;
      this.state.helmetLevel = level;
    } else {
      if (level <= this.state.vestLevel) return false;
      this.state.vestLevel = level;
    }
    return true;
  }

  addHeal(id: 'bandage' | 'medkit', amount = 1): void {
    if (id === 'bandage') this.state.bandages += amount;
    else this.state.medkits += amount;
  }

  addThrowable(id: 'frag' | 'smoke', amount = 1): void {
    if (id === 'frag') this.state.frags += amount;
    else this.state.smokes += amount;
  }

  useHeal(id: 'bandage' | 'medkit'): boolean {
    if (id === 'bandage' && this.state.bandages > 0) {
      this.state.bandages--;
      return true;
    }
    if (id === 'medkit' && this.state.medkits > 0) {
      this.state.medkits--;
      return true;
    }
    return false;
  }

  useThrowable(id: 'frag' | 'smoke'): boolean {
    if (id === 'frag' && this.state.frags > 0) {
      this.state.frags--;
      return true;
    }
    if (id === 'smoke' && this.state.smokes > 0) {
      this.state.smokes--;
      return true;
    }
    return false;
  }
}
