import * as THREE from 'three';
import { World } from '@/world/World';
import { NavGrid } from './NavGrid';
import { SquadManager } from './Squad';
import { EnemyController, EnemyDeps } from './EnemyController';
import { pickArchetypeForRole } from './EnemyDefs';
import { CombatantRegistry, Combatant } from '@/combat/Combatant';
import { EffectsSystem } from '@/combat/Effects';
import { ThrowableSystem } from '@/weapons/Throwables';
import { EventBus } from '@/core/EventBus';
import { GameEvents } from '@/core/Events';
import { PlayerController } from '@/player/PlayerController';
import { PlayerHealth } from '@/player/PlayerHealth';
import { RNG } from '@/utils/RNG';

export interface EnemyManagerDeps {
  world: World;
  registry: CombatantRegistry;
  effects: EffectsSystem;
  throwables: ThrowableSystem;
  bus: EventBus<GameEvents>;
  player: PlayerController;
  playerHealth: PlayerHealth;
  playerCombatant: Combatant;
  seed: number;
}

export class EnemyManager {
  enemies: EnemyController[] = [];
  navGrid: NavGrid;
  squad = new SquadManager();
  private deps: EnemyManagerDeps;

  constructor(deps: EnemyManagerDeps) {
    this.deps = deps;
    this.navGrid = new NavGrid(deps.world.hf, deps.world.colliders);

    const rng = new RNG(deps.seed ^ 0x7f4a7c15);
    const bySquad = new Map<string, typeof deps.world.enemySpawns>();
    for (const s of deps.world.enemySpawns) {
      const arr = bySquad.get(s.squadId) ?? [];
      arr.push(s);
      bySquad.set(s.squadId, arr);
    }

    const enemyDeps: EnemyDeps = {
      world: deps.world,
      navGrid: this.navGrid,
      squad: this.squad,
      registry: deps.registry,
      effects: deps.effects,
      throwables: deps.throwables,
      bus: deps.bus,
      player: deps.player,
      playerHealth: deps.playerHealth,
      playerCombatant: deps.playerCombatant,
    };

    for (const [, members] of bySquad) {
      for (const spawn of members) {
        const archetype = pickArchetypeForRole(spawn.role, () => rng.next());
        const pos = new THREE.Vector3(spawn.x, spawn.y, spawn.z);
        const enemy = new EnemyController(enemyDeps, archetype, spawn.squadId, pos);
        this.enemies.push(enemy);
      }
    }
  }

  get aliveCount(): number {
    return this.enemies.filter((e) => e.isAlive()).length;
  }

  update(dt: number, now: number): void {
    for (const e of this.enemies) {
      e.update(dt, now);
    }
  }

  dispose(): void {
    for (const e of this.enemies) e.dispose();
  }
}
