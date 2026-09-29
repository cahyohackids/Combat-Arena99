import * as THREE from 'three';
import { Engine } from '@/core/Engine';
import { InputManager } from '@/core/InputManager';
import { EventBus } from '@/core/EventBus';
import { GameEvents } from '@/core/Events';
import { SaveManager, GameSettings } from '@/core/SaveManager';
import { AudioSystem } from '@/audio/AudioSystem';
import { UIManager, LOADOUTS, LoadoutId } from '@/ui/UIManager';
import { HUD } from '@/ui/HUD';
import { Match } from './Match';

type AppState = 'loading' | 'menu' | 'loadout' | 'playing' | 'paused' | 'results';

const LOAD_TIPS = [
  'Tip: Smoke Canisters block enemy line of sight — use them to break contact.',
  'Tip: Marksmen keep their distance and hit hard. Close the gap or use cover.',
  'Tip: The Signal Collapse always converges on the extraction point.',
  'Tip: Headshots deal significantly more damage — armor helps, helmets help more.',
  'Tip: Sprinting is loud. Nearby enemies can hear you coming.',
];

export class Game {
  private engine: Engine;
  private input: InputManager;
  private bus = new EventBus<GameEvents>();
  private audio: AudioSystem;
  private ui: UIManager;
  private hud: HUD;
  private save = SaveManager.load();
  private state: AppState = 'loading';
  private match: Match | null = null;
  private clock = new THREE.Clock();
  private uiRoot: HTMLElement;

  constructor(viewportEl: HTMLElement, uiRoot: HTMLElement) {
    this.uiRoot = uiRoot;
    this.engine = new Engine(viewportEl);
    this.input = new InputManager(this.engine.renderer.domElement);
    this.audio = new AudioSystem(this.engine.camera);
    this.hud = new HUD(uiRoot);

    this.ui = new UIManager(uiRoot, this.save, {
      onDeploy: (loadout) => this.deploy(loadout),
      onResume: () => this.resume(),
      onRestart: () => this.restart(),
      onQuitToMenu: () => this.quitToMenu(),
      onSettingsChange: (s) => this.applySettings(s, true),
      onUISound: (kind) => this.audio.playUI(kind),
    });

    this.applySettings(this.save.settings, false);
    this.ui.show('loading');
    this.boot();

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') this.onEscape();
    });

    requestAnimationFrame(() => this.loop());
  }

  private async boot(): Promise<void> {
    const start = performance.now();
    let progress = 0;
    const tipTimer = setInterval(() => {
      progress = Math.min(0.92, progress + 0.05);
      this.ui.setLoadProgress(progress, LOAD_TIPS[Math.floor(Math.random() * LOAD_TIPS.length)]);
    }, 140);

    await this.audio.init();
    this.audio.bindGameEvents(this.bus);

    const elapsed = performance.now() - start;
    if (elapsed < 900) await new Promise((r) => setTimeout(r, 900 - elapsed));
    clearInterval(tipTimer);
    this.ui.setLoadProgress(1);
    setTimeout(() => {
      this.state = 'menu';
      this.ui.show('menu');
    }, 200);
  }

  private applySettings(s: GameSettings, save: boolean): void {
    this.engine.setGraphicsPreset(s.graphicsPreset);
    this.engine.setResolutionScale(s.resolutionScale);
    this.engine.setPostProcessing(s.postProcessing);
    this.audio.updateVolumes(s.masterVolume, s.sfxVolume, s.musicVolume);
    this.input.settings.sensitivity = s.mouseSensitivity;
    this.input.settings.aimSensitivity = s.aimSensitivity;
    this.input.settings.invertY = s.invertY;
    this.save.settings = s;
    this.match?.applyLiveSettings(s);
    if (save) SaveManager.save(this.save);
  }

  private deploy(loadoutId: LoadoutId): void {
    this.save.loadout = loadoutId;
    SaveManager.save(this.save);
    this.ui.hideAll();
    this.match = new Match(this.engine, this.input, this.bus, this.audio, this.hud, this.save.settings, LOADOUTS[loadoutId]);
    this.state = 'playing';
    this.engine.renderer.domElement.requestPointerLock();
  }

  private onEscape(): void {
    if (this.state === 'playing') {
      this.state = 'paused';
      this.match?.setInputEnabled(false);
      this.ui.show('pause');
    } else if (this.state === 'paused') {
      this.resume();
    }
  }

  private resume(): void {
    this.state = 'playing';
    this.ui.hideAll();
    this.match?.setInputEnabled(true);
    this.engine.renderer.domElement.requestPointerLock();
  }

  private restart(): void {
    this.match?.dispose();
    this.match = null;
    this.ui.hideAll();
    this.deploy((this.save.loadout as LoadoutId) ?? 'assault');
  }

  private quitToMenu(): void {
    this.match?.dispose();
    this.match = null;
    this.input.exitPointerLock();
    this.state = 'menu';
    this.ui.updateMenuStats(this.save);
    this.ui.hideAll();
    this.ui.show('menu');
  }

  private handleMatchEnd(): void {
    if (!this.match) return;
    const result = this.match.result;
    if (!result) return;
    this.state = 'results';
    this.input.exitPointerLock();

    if (result.stats.success) {
      this.save.successfulExtractions++;
      if (this.save.bestExtractionTime === null || result.stats.survivalTime < this.save.bestExtractionTime) {
        this.save.bestExtractionTime = result.stats.survivalTime;
      }
    }
    this.save.totalMatches++;
    SaveManager.save(this.save);

    const reasonText: Record<string, string> = {
      extracted: 'Extraction successful. Signal secured.',
      killed: 'Neutralized by hostile forces.',
      zone: 'Lost to the Signal Collapse.',
      quit: 'Mission aborted.',
    };
    this.ui.showResults(result.stats, reasonText[result.reason] ?? '');
  }

  private loop(): void {
    const dt = Math.min(this.clock.getDelta(), 0.05);

    if (this.state === 'playing' && this.match) {
      this.match.update(dt);
      if (this.match.isEnded) this.handleMatchEnd();
    }

    this.engine.render();
    this.input.endFrame();
    requestAnimationFrame(() => this.loop());
  }
}
