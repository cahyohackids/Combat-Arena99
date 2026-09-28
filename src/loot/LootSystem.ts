import * as THREE from 'three';
import { World } from '@/world/World';
import { RNG } from '@/utils/RNG';
import { rollLoot, LootEntry } from './LootDefs';
import { Inventory } from './Inventory';
import { EventBus } from '@/core/EventBus';
import { GameEvents } from '@/core/Events';
import { PlayerController } from '@/player/PlayerController';

interface WorldLootItem {
  entry: LootEntry;
  mesh: THREE.Group;
  position: THREE.Vector3;
  collected: boolean;
}

const RARITY_COLOR: Record<string, number> = {
  common: 0xb8ab8e,
  uncommon: 0x7fa5c9,
  rare: 0xd69a4a,
};

function buildMarker(rarity: string): THREE.Group {
  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({
    color: RARITY_COLOR[rarity] ?? 0xffffff,
    emissive: RARITY_COLOR[rarity] ?? 0xffffff,
    emissiveIntensity: 0.5,
    roughness: 0.4,
    metalness: 0.3,
  });
  const case_ = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.16, 0.28), mat);
  case_.position.y = 0.1;
  case_.castShadow = true;
  group.add(case_);
  const beamGeo = new THREE.CylinderGeometry(0.02, 0.02, 2.2, 6);
  const beamMat = new THREE.MeshBasicMaterial({ color: mat.color, transparent: true, opacity: 0.35 });
  const beam = new THREE.Mesh(beamGeo, beamMat);
  beam.position.y = 1.2;
  group.add(beam);
  return group;
}

const PICKUP_RADIUS = 2.2;

export class LootSystem {
  items: WorldLootItem[] = [];
  private bobTime = 0;

  constructor(
    private world: World,
    seed: number,
    private bus: EventBus<GameEvents>,
  ) {
    const rng = new RNG(seed ^ 0x1234abcd);
    for (const spawn of world.loot) {
      const entry = rollLoot(spawn.rarity, () => rng.next());
      const mesh = buildMarker(spawn.rarity);
      mesh.position.set(spawn.x, spawn.y + 0.05, spawn.z);
      world.scene.add(mesh);
      this.items.push({ entry, mesh, position: mesh.position.clone(), collected: false });
    }
  }

  update(dt: number, player: PlayerController, inventory: Inventory): string | null {
    this.bobTime += dt;
    let nearestPrompt: string | null = null;
    let nearestDist = PICKUP_RADIUS;
    let nearestItem: WorldLootItem | null = null;

    for (const item of this.items) {
      if (item.collected) continue;
      item.mesh.rotation.y += dt * 1.2;
      item.mesh.position.y = item.position.y + Math.sin(this.bobTime * 2 + item.position.x) * 0.06 + 0.1;
      const dist = Math.hypot(item.position.x - player.position.x, item.position.z - player.position.z);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearestItem = item;
        nearestPrompt = item.entry.label;
      }
    }

    if (nearestItem) {
      const item = nearestItem;
      (item.mesh.children[0] as THREE.Mesh).scale.setScalar(1.15);
    }

    this.pendingPickup = nearestItem;
    return nearestPrompt;
  }

  private pendingPickup: WorldLootItem | null = null;

  tryPickup(inventory: Inventory): boolean {
    const item = this.pendingPickup;
    if (!item || item.collected) return false;
    item.collected = true;
    this.world.scene.remove(item.mesh);
    inventory.state.lootCollected++;

    const e = item.entry;
    if (e.kind === 'weapon') inventory.pickupWeapon(e.id);
    else if (e.kind === 'ammo') inventory.addAmmo(e.id as never, e.ammoAmount ?? 30);
    else if (e.kind === 'armor') inventory.addArmor(e.armorSlot!, e.armorLevel!);
    else if (e.kind === 'heal') inventory.addHeal(e.id as 'bandage' | 'medkit');
    else if (e.kind === 'throwable') inventory.addThrowable(e.id as 'frag' | 'smoke');

    this.bus.emit('loot:pickup', { itemName: e.label, itemType: e.kind });
    return true;
  }
}
