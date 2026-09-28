import * as THREE from 'three';
import { Engine } from '@/core/Engine';
import { InputManager } from '@/core/InputManager';
import { EventBus } from '@/core/EventBus';
import { GameEvents, MatchStats } from '@/core/Events';
import { GameSettings } from '@/core/SaveManager';
import { World } from '@/world/World';
import { RNG, makeSeed } from '@/utils/RNG';
import { PlayerController } from '@/player/PlayerController';
import { PlayerCamera } from '@/player/PlayerCamera';
import { PlayerHealth } from '@/player/PlayerHealth';
import { PlayerCombatant } from '@/player/PlayerCombatant';
import { PlayerWeaponController } from '@/player/PlayerWeaponController';
import { Inventory } from '@/loot/Inventory';
import { LootSystem } from '@/loot/LootSystem';
import { CombatantRegistry } from '@/combat/Combatant';
import { EffectsSystem } from '@/combat/Effects';
import { ThrowableSystem } from '@/weapons/Throwables';
import { EnemyManager } from '@/ai/EnemyManager';
import { SignalCollapse } from '@/zone/SignalCollapse';
import { Extraction } from '@/zone/Extraction';
import { ZoneVisual } from '@/zone/ZoneVisual';
import { AudioSystem } from '@/audio/AudioSystem';
import { HUD } from '@/ui/HUD';
import { LoadoutDef } from '@/ui/UIManager';
import { disposeSceneContents } from '@/utils/DisposeScene';
import { PerfMonitor } from '@/core/Perf';
import { radToDeg } from '@/utils/MathUtils';

const MATCH_DURATION_ESTIMATE = 620;

export type MatchEndReason = 'extracted' | 'killed' | 'zone' | 'quit';

export interface MatchEndResult {
  stats: MatchStats;
  reason: MatchEndReason;
}

/** One full deployment: builds the world, spawns the player and every enemy, and drives the play loop until extraction or death. */
export class Match {
  world: World;
  player: PlayerController;
  playerCamera: PlayerCamera;
  playerHealth: PlayerHealth;
  playerCombatant: PlayerCombatant;
  weaponController: PlayerWeaponController;
  inventory: Inventory;
  registry = new CombatantRegistry();
  effects: EffectsSystem;
  throwables: ThrowableSystem;
  enemyManager: EnemyManager;
  loot: LootSystem;
  zone: SignalCollapse;
  extraction: Extraction;
  zoneVisual: ZoneVisual;
  perf = new PerfMonitor();

  private engine: Engine;
  private input: InputManager;
  private bus: EventBus<GameEvents>;
  private audio: AudioSystem;
  private hud: HUD;
  private elapsed = 0;
  private ended = false;
  private endResult: MatchEndResult | null = null;
  private zoneRng: RNG;
  private mapVisible = false;
  private inventoryVisible = false;
  private debugVisible = false;
  private reducedMotion = false;
  private tutorialsShown = new Set<string>();
  private movedDistanceForTutorial = 0;
  private extractionPoint2D: THREE.Vector2;
  private seed: number;

  constructor(
    engine: Engine,
    input: InputManager,
    bus: EventBus<GameEvents>,
    audio: AudioSystem,
    hud: HUD,
    settings: GameSettings,
    loadout: LoadoutDef,
    seed: number = makeSeed(),
  ) {
    this.engine = engine;
    this.input = input;
    this.bus = bus;
    this.audio = audio;
    this.hud = hud;
    this.seed = seed;

    const vegDensity = settings.vegetationDensity;
    this.world = new World(engine.scene, seed, vegDensity);

    const rng = new RNG(seed ^ 0x55aa11);
    const spawn = rng.pick(this.world.playerSpawns);

    this.player = new PlayerController(this.world, input);
    this.player.teleport(spawn.x, spawn.z);
    this.player.yaw = rng.range(0, Math.PI * 2);
    this.player.onFootstep = (surface, sprinting) => {
      bus.emit('player:footstep', { surface, position: this.player.position.clone(), sprinting });
    };

    this.playerCamera = new PlayerCamera(engine.camera);
    this.playerHealth = new PlayerHealth(bus);
    this.playerCombatant = new PlayerCombatant(this.player, this.playerHealth);

    this.inventory = new Inventory();
    this.inventory.equipStarting(loadout.primary, loadout.sidearm);
    this.inventory.addArmor('vest', loadout.vest);
    this.inventory.addArmor('helmet', loadout.helmet);
    this.inventory.addHeal('bandage', loadout.bandages);
    this.inventory.addHeal('medkit', loadout.medkits);
    this.inventory.addThrowable('frag', loadout.frags);
    this.inventory.addThrowable('smoke', loadout.smokes);
    this.playerHealth.vestLevel = loadout.vest;
    this.playerHealth.helmetLevel = loadout.helmet;

    this.effects = new EffectsSystem(engine.scene);
    this.throwables = new ThrowableSystem(this.world, this.registry, this.effects, bus);

    this.weaponController = new PlayerWeaponController({
      world: this.world,
      input,
      player: this.player,
      camera: this.playerCamera,
      health: this.playerHealth,
      inventory: this.inventory,
      registry: this.registry,
      effects: this.effects,
      throwables: this.throwables,
      bus,
      combatant: this.playerCombatant,
    });

    this.enemyManager = new EnemyManager({
      world: this.world,
      registry: this.registry,
      effects: this.effects,
      throwables: this.throwables,
      bus,
      player: this.player,
      playerHealth: this.playerHealth,
      playerCombatant: this.playerCombatant,
      seed,
    });

    this.loot = new LootSystem(this.world, seed, bus);

    const extractPoi = rng.pick(this.world.pois.filter((p) => Math.hypot(p.x - spawn.x, p.z - spawn.z) > 150));
    this.extractionPoint2D = new THREE.Vector2(extractPoi.x, extractPoi.z);
    this.zoneRng = new RNG(seed ^ 0x9988aa);
    this.zone = new SignalCollapse(bus, seed, this.extractionPoint2D);
    this.extraction = new Extraction(bus, this.extractionPoint2D);
    this.zoneVisual = new ZoneVisual(engine.scene);

    audio.setSceneRoot(engine.scene);
    audio.startAmbience();
    audio.startMusic();

    this.bus.on('player:died', () => this.finish('killed'));
    this.bus.on('extraction:success', () => this.finish('extracted'));
    this.bus.on('kill', (e) => {
      if (!e.isPlayer) this.killCount++;
    });
    this.bus.on('damage', (e) => {
      if (e.isPlayer) {
        hud.flashDamage(this.reducedMotion ? 0.18 : 0.5);
      } else if (e.sourceId === 'player') {
        hud.flashHitMarker(e.killed);
      }
    });
    this.bus.on('player:damaged', (e) => {
      // `direction` is the bullet's travel direction (attacker -> player); the threat is the reverse.
      const threatYaw = Math.atan2(-e.direction.x, -e.direction.z);
      const relative = threatYaw - this.player.yaw;
      hud.showHitDirection(relative);
    });

    input.settings.sensitivity = settings.mouseSensitivity;
    input.settings.aimSensitivity = settings.aimSensitivity;
    this.playerCamera.shakeEnabled = settings.cameraShake && !settings.reducedMotion;
    this.reducedMotion = settings.reducedMotion;
    hud.setHighContrast(settings.highContrastPrompts);

    this.bus.emit('match:start', { seed });
    this.showTutorial('move', 'WASD — MOVE', window.innerWidth / 2 - 60, window.innerHeight / 2 + 80);
  }

  private showTutorial(id: string, text: string, x: number, y: number): void {
    if (this.tutorialsShown.has(id)) return;
    this.tutorialsShown.add(id);
    this.hud.showTutorial(id, text, x, y);
  }

  private finish(reason: MatchEndReason): void {
    if (this.ended) return;
    this.ended = true;
    const success = reason === 'extracted';
    const stats: MatchStats = {
      survivalTime: this.elapsed,
      kills: this.killCount,
      shotsHit: this.weaponController.shotsHit,
      shotsFired: this.weaponController.shotsFired,
      damageDealt: this.weaponController.damageDealt,
      damageTaken: 100 - this.playerHealth.health >= 0 ? this.damageTakenTotal : 0,
      lootCollected: this.inventory.state.lootCollected,
      distanceTraveled: this.player.distanceTraveled,
      extractionBonus: success ? Math.round(50 + this.killCount * 15) : 0,
      success,
    };
    this.endResult = { stats, reason };
    this.bus.emit('match:end', { success, stats });
  }

  private killCount = 0;
  private damageTakenTotal = 0;

  get result(): MatchEndResult | null {
    return this.endResult;
  }

  get isEnded(): boolean {
    return this.ended;
  }

  applyLiveSettings(settings: GameSettings): void {
    this.playerCamera.shakeEnabled = settings.cameraShake && !settings.reducedMotion;
    this.reducedMotion = settings.reducedMotion;
    this.hud.setHighContrast(settings.highContrastPrompts);
    this.world.vegetation.setDensity(settings.vegetationDensity);
    this.input.settings.sensitivity = settings.mouseSensitivity;
    this.input.settings.aimSensitivity = settings.aimSensitivity;
    this.input.settings.invertY = settings.invertY;
  }

  setInputEnabled(enabled: boolean): void {
    this.input.enabled = enabled;
    if (!enabled) this.input.exitPointerLock();
  }

  update(dt: number): void {
    if (this.ended) return;
    this.elapsed += dt;
    this.perf.update(dt);

    const input = this.input;
    if (input.wasPressed('Tab')) {
      this.inventoryVisible = !this.inventoryVisible;
      this.mapVisible = false;
    }
    if (input.wasPressed('KeyM')) {
      this.mapVisible = !this.mapVisible;
      this.inventoryVisible = false;
    }
    if (input.wasPressed('F3')) this.debugVisible = !this.debugVisible;

    // Movement/firing are gated below via `overlayOpen`; keyboard capture itself must stay on so
    // the same toggle key can close the overlay again (disabling InputManager would block that key too).
    const overlayOpen = this.mapVisible || this.inventoryVisible;
    this.hud.setMapVisible(this.mapVisible);
    this.hud.setInventoryVisible(this.inventoryVisible, this.inventory);
    this.hud.setDebugVisible(this.debugVisible);

    if (!overlayOpen) {
      this.weaponController.preMovementUpdate();
      const wasHealing = this.playerHealth.isHealing;
      this.player.update(dt, true);
      if (wasHealing && this.player.speedFraction > 0.05) this.playerHealth.cancelHeal();
      this.weaponController.postMovementUpdate(dt, this.elapsed);

      const prevHealth = this.playerHealth.health;
      this.playerHealth.update(dt);

      const zoneDmg = this.zone.damageOutsideZone(this.player.position.x, this.player.position.z);
      if (zoneDmg > 0) {
        this.playerHealth.applyDamage(zoneDmg * dt, new THREE.Vector3(0, 1, 0), false, true);
      }
      this.hud.setZoneDamageActive(zoneDmg > 0);
      if (this.playerHealth.health < prevHealth) {
        this.damageTakenTotal += prevHealth - this.playerHealth.health;
      }

      const prompt = this.loot.update(dt, this.player, this.inventory);
      this.hud.showInteractPrompt(prompt);
      if (prompt && input.wasPressed('KeyF')) {
        this.loot.tryPickup(this.inventory);
      }

      this.throwables.update(dt);
      this.enemyManager.update(dt, this.elapsed);
      this.effects.update(dt);

      this.zone.update(dt, this.zoneRng);
      if (this.zone.stage === 'final' && this.extraction.state === 'inactive') {
        this.extraction.activate();
      }
      const enemyNearExtraction = this.enemyManager.enemies.some(
        (e) => e.isAlive() && e.position.distanceTo(new THREE.Vector3(this.extractionPoint2D.x, e.position.y, this.extractionPoint2D.y)) < 14,
      );
      this.extraction.update(dt, this.player.position.x, this.player.position.z, this.playerHealth.alive, enemyNearExtraction);
      this.zoneVisual.update(dt, this.zone, this.elapsed, this.player.position.y);

      this.playerCamera.update(dt, this.player, this.world.colliders.raycastMeshes, this.player.aiming ? 1 : 1);

      this.runTutorials();
    }

    // Always refreshed, even with an overlay open, so the map/minimap stay live while paused-for-menu.
    this.updateHUD();

    this.world.update(dt, MATCH_DURATION_ESTIMATE, this.engine.camera.position);
  }

  private runTutorials(): void {
    this.movedDistanceForTutorial = this.player.distanceTraveled;
    if (this.movedDistanceForTutorial > 2) this.showTutorial('aim', 'RMB — AIM · LMB — FIRE', window.innerWidth / 2 - 90, window.innerHeight / 2 + 100);
    if (this.inventory.state.lootCollected === 0 && this.movedDistanceForTutorial > 8) {
      this.showTutorial('loot', 'F — PICK UP nearby loot', window.innerWidth / 2 - 90, window.innerHeight - 220);
    }
    if (this.zone.phaseIndex >= 0 && !this.tutorialsShown.has('zone')) {
      this.showTutorial('zone', 'The Signal Collapse is active — watch the top-right timer', window.innerWidth / 2 - 160, 140);
    }
  }

  private updateHUD(): void {
    const weapon = this.inventory.getActiveWeapon();
    const drawInfo = this.engine.getDrawCallInfo();
    this.hud.update({
      health: this.playerHealth.health,
      maxHealth: this.playerHealth.maxHealth,
      vestLevel: this.playerHealth.vestLevel,
      helmetLevel: this.playerHealth.helmetLevel,
      stamina: this.player.stamina,
      maxStamina: this.player.maxStamina,
      weapon,
      yawDegrees: radToDeg(this.player.yaw),
      zone: this.zone,
      hostilesRemaining: this.enemyManager.aliveCount,
      extractionActive: this.extraction.state !== 'inactive' && this.extraction.state !== 'complete',
      extractionRemaining: this.extraction.holdRemaining,
      extractionContested: false,
      extractionX: this.extractionPoint2D.x,
      extractionZ: this.extractionPoint2D.y,
      playerX: this.player.position.x,
      playerZ: this.player.position.z,
      playerYaw: this.player.yaw,
      fps: this.perf.fps,
      drawCalls: drawInfo.calls,
      triangles: drawInfo.triangles,
      debugVisible: this.debugVisible,
      reducedMotion: this.reducedMotion,
      healProgress01: this.playerHealth.healProgress01,
      isHealing: this.playerHealth.isHealing,
    });
    const spreadPx = this.player.aiming ? 2 : 8 + this.player.speedFraction * 14;
    this.hud.setCrosshairSpread(spreadPx, this.player.aiming);
  }

  dispose(): void {
    this.enemyManager.dispose();
    disposeSceneContents(this.engine.scene);
    this.audio.stopAll();
  }
}
