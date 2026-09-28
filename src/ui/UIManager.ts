import { GameSettings, GraphicsPreset, SaveData } from '@/core/SaveManager';
import { MatchStats } from '@/core/Events';

export type LoadoutId = 'assault' | 'scout' | 'marksman' | 'balanced';

export interface LoadoutDef {
  id: LoadoutId;
  name: string;
  description: string;
  primary: string;
  sidearm: string;
  vest: number;
  helmet: number;
  bandages: number;
  medkits: number;
  frags: number;
  smokes: number;
}

export const LOADOUTS: Record<LoadoutId, LoadoutDef> = {
  assault: {
    id: 'assault',
    name: 'Assault',
    description: 'Balanced automatic firepower for aggressive pushes and close-quarter clears.',
    primary: 'raven',
    sidearm: 'sidewinder',
    vest: 1,
    helmet: 1,
    bandages: 2,
    medkits: 0,
    frags: 1,
    smokes: 1,
  },
  scout: {
    id: 'scout',
    name: 'Scout',
    description: 'Light and fast — high mobility, close-range SMG, extra smoke for repositioning.',
    primary: 'vex',
    sidearm: 'sidewinder',
    vest: 0,
    helmet: 0,
    bandages: 3,
    medkits: 0,
    frags: 0,
    smokes: 2,
  },
  marksman: {
    id: 'marksman',
    name: 'Marksman',
    description: 'Precision engagements at range. Slower, but every shot counts.',
    primary: 'sentinel',
    sidearm: 'sidewinder',
    vest: 1,
    helmet: 0,
    bandages: 2,
    medkits: 1,
    frags: 0,
    smokes: 1,
  },
  balanced: {
    id: 'balanced',
    name: 'Balanced',
    description: 'A dependable all-rounder for players still learning the island.',
    primary: 'raven',
    sidearm: 'sidewinder',
    vest: 1,
    helmet: 1,
    bandages: 1,
    medkits: 1,
    frags: 1,
    smokes: 0,
  },
};

export interface UICallbacks {
  onDeploy: (loadout: LoadoutId) => void;
  onResume: () => void;
  onRestart: () => void;
  onQuitToMenu: () => void;
  onSettingsChange: (settings: GameSettings) => void;
  onUISound: (kind: 'click' | 'hover') => void;
}

function el<K extends keyof HTMLElementTagNameMap>(tag: K, className?: string, html?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

/** Owns every full-screen overlay (loading, menu, loadout, pause, settings, results, how-to-play). The in-match HUD lives in HUD.ts. */
export class UIManager {
  private root: HTMLElement;
  private screens = new Map<string, HTMLElement>();
  private callbacks: UICallbacks;
  private selectedLoadout: LoadoutId = 'assault';
  private save: SaveData;

  constructor(root: HTMLElement, save: SaveData, callbacks: UICallbacks) {
    this.root = root;
    this.save = save;
    this.callbacks = callbacks;
    this.selectedLoadout = (save.loadout as LoadoutId) ?? 'assault';
    this.buildLoadingScreen();
    this.buildMainMenu();
    this.buildLoadoutScreen();
    this.buildPauseScreen();
    this.buildSettingsScreen('pause');
    this.buildSettingsScreen('menu');
    this.buildHowToPlay();
    this.buildResultsScreen();
  }

  private btn(label: string, onClick: () => void, cls = 'btn'): HTMLButtonElement {
    const b = el('button', cls, label);
    b.addEventListener('mouseenter', () => this.callbacks.onUISound('hover'));
    b.addEventListener('click', () => {
      this.callbacks.onUISound('click');
      onClick();
    });
    return b;
  }

  show(name: string): void {
    for (const [key, s] of this.screens) s.classList.toggle('hidden', key !== name);
  }

  hideAll(): void {
    for (const s of this.screens.values()) s.classList.add('hidden');
  }

  private register(name: string, screen: HTMLElement): void {
    screen.classList.add('hidden');
    this.root.appendChild(screen);
    this.screens.set(name, screen);
  }

  // ---------------- Loading ----------------
  private loadingFill!: HTMLElement;
  private buildLoadingScreen(): void {
    const screen = el('div', 'screen');
    screen.id = 'loading-screen';
    screen.innerHTML = `
      <div class="load-title">LAST SECTOR — LOADING BLACKRIDGE…</div>
      <div class="load-bar-track"><div class="load-bar-fill" id="load-fill"></div></div>
      <div class="load-tip" id="load-tip">Tip: The Signal Collapse always pushes toward the extraction point — use it to plan your route.</div>
    `;
    this.register('loading', screen);
    this.loadingFill = screen.querySelector('#load-fill')!;
  }

  setLoadProgress(p: number, tip?: string): void {
    this.loadingFill.style.width = `${Math.round(p * 100)}%`;
    if (tip) {
      const tipEl = this.screens.get('loading')?.querySelector('#load-tip');
      if (tipEl) tipEl.textContent = tip;
    }
  }

  // ---------------- Main Menu ----------------
  private buildMainMenu(): void {
    const screen = el('div', 'screen');
    const panel = el('div', 'panel menu-panel');
    panel.innerHTML = `
      <div class="title-block">
        <h1>LAST SECTOR</h1>
        <div class="subtitle">Operation Blackridge</div>
      </div>
    `;
    panel.appendChild(this.btn('Deploy', () => this.show('loadout'), 'btn primary'));
    panel.appendChild(this.btn('Loadout', () => this.show('loadout')));
    panel.appendChild(this.btn('Settings', () => this.show('settings-menu')));
    panel.appendChild(this.btn('How To Play', () => this.show('how-to-play')));
    const footer = el(
      'div',
      'menu-footer',
      `Best extraction: ${this.save.bestExtractionTime ? this.save.bestExtractionTime.toFixed(0) + 's' : '—'} · Extractions: ${this.save.successfulExtractions}`,
    );
    panel.appendChild(footer);
    screen.appendChild(panel);
    this.register('menu', screen);
  }

  updateMenuStats(save: SaveData): void {
    this.save = save;
  }

  // ---------------- Loadout ----------------
  private buildLoadoutScreen(): void {
    const screen = el('div', 'screen');
    const panel = el('div', 'panel loadout-panel');
    const title = el('div', 'title-block');
    title.innerHTML = `<h1 style="font-size:26px;letter-spacing:4px;">LOADOUT</h1>`;
    panel.appendChild(title);

    const classesRow = el('div', 'loadout-classes');
    const details = el('div', 'loadout-details');
    panel.appendChild(classesRow);
    panel.appendChild(details);

    const renderDetails = () => {
      const l = LOADOUTS[this.selectedLoadout];
      details.innerHTML = `
        <div class="loadout-slot"><div class="slot-label">Primary</div>${l.primary.toUpperCase()}</div>
        <div class="loadout-slot"><div class="slot-label">Sidearm</div>${l.sidearm.toUpperCase()}</div>
        <div class="loadout-slot"><div class="slot-label">Armor</div>Vest ${l.vest} · Helmet ${l.helmet}</div>
        <div class="loadout-slot"><div class="slot-label">Supplies</div>Bandage×${l.bandages} Medkit×${l.medkits} Frag×${l.frags} Smoke×${l.smokes}</div>
      `;
    };

    for (const id of Object.keys(LOADOUTS) as LoadoutId[]) {
      const l = LOADOUTS[id];
      const card = el('div', 'loadout-class' + (id === this.selectedLoadout ? ' selected' : ''));
      card.innerHTML = `<h3>${l.name}</h3><p>${l.description}</p>`;
      card.addEventListener('click', () => {
        this.selectedLoadout = id;
        this.save.loadout = id;
        classesRow.querySelectorAll('.loadout-class').forEach((c) => c.classList.remove('selected'));
        card.classList.add('selected');
        renderDetails();
        this.callbacks.onUISound('click');
      });
      classesRow.appendChild(card);
    }
    renderDetails();

    const actions = el('div', 'results-actions');
    actions.appendChild(this.btn('Back', () => this.show('menu')));
    actions.appendChild(this.btn('Deploy', () => this.callbacks.onDeploy(this.selectedLoadout), 'btn primary'));
    panel.appendChild(actions);

    screen.appendChild(panel);
    this.register('loadout', screen);
  }

  // ---------------- Pause ----------------
  private buildPauseScreen(): void {
    const screen = el('div', 'screen');
    const panel = el('div', 'panel menu-panel');
    panel.innerHTML = `<div class="title-block"><h1 style="font-size:30px;">PAUSED</h1></div>`;
    panel.appendChild(this.btn('Resume', () => this.callbacks.onResume(), 'btn primary'));
    panel.appendChild(this.btn('Settings', () => this.show('settings-pause')));
    panel.appendChild(this.btn('Restart Mission', () => this.callbacks.onRestart()));
    panel.appendChild(this.btn('Quit to Menu', () => this.callbacks.onQuitToMenu(), 'btn danger'));
    screen.appendChild(panel);
    this.register('pause', screen);
  }

  // ---------------- Settings (shared builder, two instances so Back returns to the right place) ----------------
  private buildSettingsScreen(context: 'menu' | 'pause'): void {
    const screen = el('div', 'screen');
    const panel = el('div', 'panel');
    panel.style.padding = '32px';
    const title = el('div', 'title-block');
    title.innerHTML = `<h1 style="font-size:24px;letter-spacing:4px;">SETTINGS</h1>`;
    panel.appendChild(title);

    const grid = el('div', 'settings-grid');
    panel.appendChild(grid);

    const s = this.save.settings;

    const segRow = (label: string, options: string[], current: string, onPick: (v: string) => void) => {
      const row = el('div', 'settings-row');
      row.appendChild(el('label', undefined, label));
      const seg = el('div', 'segmented');
      for (const opt of options) {
        const b = el('button', 'seg-btn' + (opt === current ? ' active' : ''), opt);
        b.addEventListener('click', () => {
          seg.querySelectorAll('.seg-btn').forEach((x) => x.classList.remove('active'));
          b.classList.add('active');
          onPick(opt);
          this.callbacks.onUISound('click');
        });
        seg.appendChild(b);
      }
      row.appendChild(seg);
      grid.appendChild(row);
    };

    const sliderRow = (label: string, min: number, max: number, step: number, value: number, onInput: (v: number) => void) => {
      const row = el('div', 'settings-row');
      row.appendChild(el('label', undefined, label));
      const input = el('input');
      input.type = 'range';
      input.min = String(min);
      input.max = String(max);
      input.step = String(step);
      input.value = String(value);
      input.addEventListener('input', () => onInput(parseFloat(input.value)));
      row.appendChild(input);
      grid.appendChild(row);
    };

    const checkRow = (label: string, checked: boolean, onChange: (v: boolean) => void) => {
      const row = el('div', 'settings-row checkbox-row');
      const input = el('input');
      input.type = 'checkbox';
      input.checked = checked;
      input.addEventListener('change', () => onChange(input.checked));
      row.appendChild(input);
      row.appendChild(el('label', undefined, label));
      grid.appendChild(row);
    };

    grid.appendChild(el('div', 'section-label', 'Graphics'));
    segRow('Preset', ['low', 'medium', 'high'], s.graphicsPreset, (v) => {
      s.graphicsPreset = v as GraphicsPreset;
      this.callbacks.onSettingsChange(s);
    });
    sliderRow('Resolution Scale', 0.5, 1.0, 0.05, s.resolutionScale, (v) => {
      s.resolutionScale = v;
      this.callbacks.onSettingsChange(s);
    });
    segRow('Shadow Quality', ['low', 'medium', 'high'], s.shadowQuality, (v) => {
      s.shadowQuality = v as GraphicsPreset;
      this.callbacks.onSettingsChange(s);
    });
    segRow('Vegetation Density', ['low', 'medium', 'high'], s.vegetationDensity, (v) => {
      s.vegetationDensity = v as GraphicsPreset;
      this.callbacks.onSettingsChange(s);
    });
    checkRow('Post-Processing', s.postProcessing, (v) => {
      s.postProcessing = v;
      this.callbacks.onSettingsChange(s);
    });

    grid.appendChild(el('div', 'section-label', 'Audio'));
    sliderRow('Master Volume', 0, 1, 0.05, s.masterVolume, (v) => {
      s.masterVolume = v;
      this.callbacks.onSettingsChange(s);
    });
    sliderRow('SFX Volume', 0, 1, 0.05, s.sfxVolume, (v) => {
      s.sfxVolume = v;
      this.callbacks.onSettingsChange(s);
    });
    sliderRow('Music Volume', 0, 1, 0.05, s.musicVolume, (v) => {
      s.musicVolume = v;
      this.callbacks.onSettingsChange(s);
    });

    grid.appendChild(el('div', 'section-label', 'Controls'));
    sliderRow('Mouse Sensitivity', 0.2, 2.0, 0.05, s.mouseSensitivity, (v) => {
      s.mouseSensitivity = v;
      this.callbacks.onSettingsChange(s);
    });
    sliderRow('Aim Sensitivity', 0.2, 2.0, 0.05, s.aimSensitivity, (v) => {
      s.aimSensitivity = v;
      this.callbacks.onSettingsChange(s);
    });
    checkRow('Invert Y', s.invertY, (v) => {
      s.invertY = v;
      this.callbacks.onSettingsChange(s);
    });
    checkRow('Camera Shake', s.cameraShake, (v) => {
      s.cameraShake = v;
      this.callbacks.onSettingsChange(s);
    });

    grid.appendChild(el('div', 'section-label', 'Accessibility'));
    checkRow('Reduced Motion', s.reducedMotion, (v) => {
      s.reducedMotion = v;
      this.callbacks.onSettingsChange(s);
    });
    checkRow('High-Contrast Prompts', s.highContrastPrompts, (v) => {
      s.highContrastPrompts = v;
      this.callbacks.onSettingsChange(s);
    });

    const actions = el('div', 'results-actions');
    actions.style.marginTop = '18px';
    actions.appendChild(this.btn('Back', () => this.show(context === 'menu' ? 'menu' : 'pause'), 'btn primary'));
    panel.appendChild(actions);

    screen.appendChild(panel);
    this.register(`settings-${context}`, screen);
  }

  // ---------------- How to play ----------------
  private buildHowToPlay(): void {
    const screen = el('div', 'screen');
    const panel = el('div', 'panel');
    panel.style.width = '520px';
    panel.style.padding = '32px';
    panel.innerHTML = `
      <div class="title-block"><h1 style="font-size:24px;letter-spacing:4px;">HOW TO PLAY</h1></div>
      <div style="font-size:13px;line-height:2;color:rgba(231,226,211,0.85);">
        WASD Move · Mouse Look · Shift Sprint · C/Ctrl Crouch · Space Jump<br/>
        RMB Aim · LMB Fire · R Reload · F Interact/Loot<br/>
        1/2 Primaries · 3 Sidearm · 4 Heal · G Throwable<br/>
        Tab Inventory · M Map · Esc Pause · F3 Debug Overlay<br/><br/>
        Survive the Signal Collapse, loot the island's six locations, and reach extraction before the zone — or the enemy — closes in.
      </div>
    `;
    panel.appendChild(this.btn('Back', () => this.show('menu'), 'btn primary'));
    screen.appendChild(panel);
    this.register('how-to-play', screen);
  }

  // ---------------- Results ----------------
  private resultsPanelEls!: { title: HTMLElement; reason: HTMLElement; grid: HTMLElement };
  private buildResultsScreen(): void {
    const screen = el('div', 'screen');
    const panel = el('div', 'panel results-panel');
    const title = el('div', 'results-title');
    const reason = el('div', 'results-reason');
    const grid = el('div', 'stats-grid');
    panel.appendChild(title);
    panel.appendChild(reason);
    panel.appendChild(grid);
    const actions = el('div', 'results-actions');
    actions.appendChild(this.btn('Retry', () => this.callbacks.onRestart(), 'btn primary'));
    actions.appendChild(this.btn('Main Menu', () => this.callbacks.onQuitToMenu()));
    panel.appendChild(actions);
    screen.appendChild(panel);
    this.register('results', screen);
    this.resultsPanelEls = { title, reason, grid };
  }

  showResults(stats: MatchStats, reasonText: string): void {
    const { title, reason, grid } = this.resultsPanelEls;
    title.textContent = stats.success ? 'MISSION COMPLETE' : 'MISSION FAILED';
    title.className = 'results-title ' + (stats.success ? 'success' : 'fail');
    reason.textContent = reasonText;
    const items: Array<[string, string]> = [
      ['Survival Time', `${stats.survivalTime.toFixed(0)}s`],
      ['Kills', `${stats.kills}`],
      ['Accuracy', `${stats.shotsFired > 0 ? Math.round((stats.shotsHit / stats.shotsFired) * 100) : 0}%`],
      ['Damage Dealt', `${Math.round(stats.damageDealt)}`],
      ['Loot Collected', `${stats.lootCollected}`],
      ['Distance Traveled', `${Math.round(stats.distanceTraveled)}m`],
      ['Extraction Bonus', `${stats.extractionBonus}`],
      ['Shots Fired', `${stats.shotsFired}`],
    ];
    grid.innerHTML = '';
    for (const [label, val] of items) {
      const item = el('div', 'stat-item');
      item.innerHTML = `<span>${label}</span><span class="val">${val}</span>`;
      grid.appendChild(item);
    }
    this.show('results');
  }

  updateSave(save: SaveData): void {
    this.save = save;
  }
}
