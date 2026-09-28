import { drawMap } from './MapRenderer';
import { SignalCollapse } from '@/zone/SignalCollapse';
import { Inventory } from '@/loot/Inventory';
import { WeaponSystem } from '@/weapons/WeaponSystem';

function el<K extends keyof HTMLElementTagNameMap>(tag: K, className?: string, html?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

export interface HUDFrameData {
  health: number;
  maxHealth: number;
  vestLevel: number;
  helmetLevel: number;
  stamina: number;
  maxStamina: number;
  weapon: WeaponSystem | null;
  yawDegrees: number;
  zone: SignalCollapse;
  hostilesRemaining: number;
  extractionActive: boolean;
  extractionRemaining: number;
  extractionContested: boolean;
  extractionX: number;
  extractionZ: number;
  playerX: number;
  playerZ: number;
  playerYaw: number;
  fps: number;
  drawCalls: number;
  triangles: number;
  debugVisible: boolean;
  reducedMotion: boolean;
  healProgress01: number;
  isHealing: boolean;
}

const COMPASS_DIRS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

export class HUD {
  private root: HTMLElement;
  private hostilesEl!: HTMLElement;
  private phaseEl!: HTMLElement;
  private timerEl!: HTMLElement;
  private healthFill!: HTMLElement;
  private armorFill!: HTMLElement;
  private staminaFill!: HTMLElement;
  private armorPips!: HTMLElement;
  private ammoCount!: HTMLElement;
  private ammoReserve!: HTMLElement;
  private weaponNameEl!: HTMLElement;
  private fireModeEl!: HTMLElement;
  private reloadFill!: HTMLElement;
  private crosshair!: HTMLElement;
  private hitMarker!: HTMLElement;
  private interactPrompt!: HTMLElement;
  private compassStrip!: HTMLElement;
  private damageVignette!: HTMLElement;
  private hitDirIndicator!: HTMLElement;
  private hitDirTimeout: number | null = null;
  private zoneDamageOverlay!: HTMLElement;
  private extractionBanner!: HTMLElement;
  private extractionTimer!: HTMLElement;
  private debugOverlay!: HTMLElement;
  private tutorialContainer!: HTMLElement;
  private mapScreen!: HTMLElement;
  private mapCanvas!: HTMLCanvasElement;
  private minimapCanvas!: HTMLCanvasElement;
  private inventoryScreen!: HTMLElement;
  private inventoryGrid!: HTMLElement;
  private hitMarkerTimeout: number | null = null;
  private activeTutorials = new Map<string, HTMLElement>();

  constructor(root: HTMLElement) {
    this.root = root;
    this.build();
  }

  private build(): void {
    const hud = el('div');
    hud.id = 'hud';
    this.root.appendChild(hud);

    // Bottom-left: health/armor/stamina.
    const bl = el('div', 'hud-bottom-left');
    bl.innerHTML = `
      <div class="bar-row"><span class="bar-label">❤</span><div class="bar-track"><div class="bar-fill health" id="hp-fill"></div></div></div>
      <div class="bar-row"><span class="bar-label">◆</span><div class="bar-track"><div class="bar-fill armor" id="armor-fill"></div></div><div class="armor-pips" id="armor-pips"></div></div>
      <div class="bar-row"><span class="bar-label">⚡</span><div class="bar-track"><div class="bar-fill stamina" id="stamina-fill"></div></div></div>
    `;
    hud.appendChild(bl);
    this.healthFill = bl.querySelector('#hp-fill')!;
    this.armorFill = bl.querySelector('#armor-fill')!;
    this.staminaFill = bl.querySelector('#stamina-fill')!;
    this.armorPips = bl.querySelector('#armor-pips')!;

    // Bottom-right: weapon/ammo.
    const br = el('div', 'hud-bottom-right');
    br.innerHTML = `
      <div class="weapon-name" id="weapon-name">—</div>
      <div class="ammo-count"><span id="ammo-mag">0</span> <span class="ammo-reserve" id="ammo-reserve">/ 0</span></div>
      <div class="fire-mode" id="fire-mode"></div>
      <div class="reload-bar"><div class="reload-fill" id="reload-fill"></div></div>
    `;
    hud.appendChild(br);
    this.ammoCount = br.querySelector('#ammo-mag')!;
    this.ammoReserve = br.querySelector('#ammo-reserve')!;
    this.weaponNameEl = br.querySelector('#weapon-name')!;
    this.fireModeEl = br.querySelector('#fire-mode')!;
    this.reloadFill = br.querySelector('#reload-fill')!;

    // Top-center: compass.
    const tc = el('div', 'hud-top-center');
    tc.innerHTML = `<div id="compass"><div id="compass-strip"></div><div class="compass-center-marker"></div></div>`;
    hud.appendChild(tc);
    this.compassStrip = tc.querySelector('#compass-strip')!;
    this.buildCompassStrip();

    // Top-right: zone/hostiles.
    const tr = el('div', 'hud-top-right');
    tr.innerHTML = `
      <div class="zone-phase-label" id="zone-phase">SIGNAL COLLAPSE — PHASE 1/4</div>
      <div class="zone-timer" id="zone-timer">--:--</div>
      <div class="hostiles-count" id="hostiles-count">Hostiles: —</div>
    `;
    hud.appendChild(tr);
    this.phaseEl = tr.querySelector('#zone-phase')!;
    this.timerEl = tr.querySelector('#zone-timer')!;
    this.hostilesEl = tr.querySelector('#hostiles-count')!;

    // Crosshair + hit marker.
    const crosshair = el(
      'div',
      undefined,
      `<div class="ch-line top"></div><div class="ch-line bottom"></div><div class="ch-line left"></div><div class="ch-line right"></div>`,
    );
    crosshair.id = 'crosshair';
    hud.appendChild(crosshair);
    this.crosshair = crosshair;
    this.hitMarker = el('div', undefined, '✕');
    this.hitMarker.id = 'hit-marker';
    hud.appendChild(this.hitMarker);

    // Interact prompt.
    this.interactPrompt = el('div');
    this.interactPrompt.id = 'interact-prompt';
    this.interactPrompt.classList.add('hidden');
    hud.appendChild(this.interactPrompt);

    // Damage feedback overlays.
    this.damageVignette = el('div');
    this.damageVignette.id = 'damage-vignette';
    hud.appendChild(this.damageVignette);
    this.hitDirIndicator = el('div', 'hit-dir-indicator');
    this.hitDirIndicator.style.opacity = '0';
    hud.appendChild(this.hitDirIndicator);
    this.zoneDamageOverlay = el('div');
    this.zoneDamageOverlay.id = 'zone-damage-overlay';
    hud.appendChild(this.zoneDamageOverlay);

    // Extraction banner.
    this.extractionBanner = el('div');
    this.extractionBanner.id = 'extraction-banner';
    this.extractionBanner.classList.add('hidden');
    this.extractionBanner.innerHTML = `<div class="ex-title" id="ex-title">EXTRACTION ACTIVE</div><div class="ex-timer" id="ex-timer">00:00</div>`;
    hud.appendChild(this.extractionBanner);
    this.extractionTimer = this.extractionBanner.querySelector('#ex-timer')!;

    // Top-left minimap label + minimap canvas.
    const minimap = el('canvas');
    minimap.id = 'minimap';
    minimap.width = 168;
    minimap.height = 168;
    hud.appendChild(minimap);
    this.minimapCanvas = minimap;

    // Debug overlay.
    this.debugOverlay = el('div');
    this.debugOverlay.id = 'debug-overlay';
    this.debugOverlay.classList.add('hidden');
    hud.appendChild(this.debugOverlay);

    // Tutorial prompt container.
    this.tutorialContainer = el('div');
    hud.appendChild(this.tutorialContainer);

    // Map screen (toggled with M).
    this.mapScreen = el('div', 'screen hidden');
    this.mapScreen.id = 'map-screen';
    const mapWrap = el('div');
    mapWrap.id = 'map-canvas-wrap';
    const mapCanvas = el('canvas');
    mapCanvas.id = 'map-canvas';
    mapCanvas.width = 780;
    mapCanvas.height = 780;
    mapWrap.appendChild(mapCanvas);
    this.mapScreen.appendChild(mapWrap);
    this.root.appendChild(this.mapScreen);
    this.mapCanvas = mapCanvas;

    // Inventory screen (Tab).
    this.inventoryScreen = el('div', 'screen hidden');
    this.inventoryScreen.id = 'inventory-screen';
    const invPanel = el('div', 'panel');
    invPanel.innerHTML = `<div class="title-block"><h1 style="font-size:22px;letter-spacing:3px;">INVENTORY</h1></div>`;
    const grid = el('div', 'inv-grid');
    invPanel.appendChild(grid);
    this.inventoryScreen.appendChild(invPanel);
    this.root.appendChild(this.inventoryScreen);
    this.inventoryGrid = grid;
  }

  private buildCompassStrip(): void {
    let html = '';
    for (let deg = -180; deg <= 540; deg += 15) {
      const norm = ((deg % 360) + 360) % 360;
      const dirIndex = Math.round(norm / 45) % 8;
      const label = norm % 45 === 0 ? COMPASS_DIRS[dirIndex] : norm % 15 === 0 ? '' : '';
      html += `<span data-deg="${deg}">${label}</span>`;
    }
    this.compassStrip.innerHTML = html;
  }

  showInteractPrompt(text: string | null): void {
    if (!text) {
      this.interactPrompt.classList.add('hidden');
      return;
    }
    this.interactPrompt.classList.remove('hidden');
    this.interactPrompt.innerHTML = `<span class="key">F</span>${text}`;
  }

  showTutorial(id: string, text: string, x: number, y: number): void {
    if (this.activeTutorials.has(id)) return;
    const p = el('div', 'tutorial-prompt', text);
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    this.tutorialContainer.appendChild(p);
    this.activeTutorials.set(id, p);
    setTimeout(() => {
      p.remove();
      this.activeTutorials.delete(id);
    }, 4500);
  }

  flashHitMarker(kill: boolean): void {
    this.hitMarker.style.opacity = '1';
    this.hitMarker.style.color = kill ? '#e05a3f' : '#e7e2d3';
    if (this.hitMarkerTimeout) window.clearTimeout(this.hitMarkerTimeout);
    this.hitMarkerTimeout = window.setTimeout(() => {
      this.hitMarker.style.opacity = '0';
    }, 180);
  }

  flashDamage(intensity: number): void {
    this.damageVignette.style.boxShadow = `inset 0 0 180px rgba(180,30,20,${Math.min(0.75, intensity)})`;
    setTimeout(() => {
      this.damageVignette.style.boxShadow = 'inset 0 0 140px rgba(180,30,20,0)';
    }, 220);
  }

  /** `angleFromForward` is radians relative to where the player is facing (0 = front, PI = behind). */
  showHitDirection(angleFromForward: number): void {
    this.hitDirIndicator.style.transform = `rotate(${angleFromForward}rad)`;
    this.hitDirIndicator.style.opacity = '1';
    if (this.hitDirTimeout) window.clearTimeout(this.hitDirTimeout);
    this.hitDirTimeout = window.setTimeout(() => {
      this.hitDirIndicator.style.opacity = '0';
    }, 900);
  }

  setZoneDamageActive(active: boolean): void {
    this.zoneDamageOverlay.style.opacity = active ? '1' : '0';
  }

  setHighContrast(enabled: boolean): void {
    this.root.classList.toggle('high-contrast', enabled);
  }

  setMapVisible(visible: boolean): void {
    this.mapScreen.classList.toggle('hidden', !visible);
  }

  setInventoryVisible(visible: boolean, inv?: Inventory): void {
    this.inventoryScreen.classList.toggle('hidden', !visible);
    if (visible && inv) this.renderInventory(inv);
  }

  private renderInventory(inv: Inventory): void {
    const s = inv.state;
    const slots: Array<[string, string, string]> = [
      ['Primary 1', s.primary[0]?.def.name ?? 'Empty', s.primary[0] ? `${s.primary[0].magAmmo}/${s.primary[0].reserveAmmo}` : ''],
      ['Primary 2', s.primary[1]?.def.name ?? 'Empty', s.primary[1] ? `${s.primary[1].magAmmo}/${s.primary[1].reserveAmmo}` : ''],
      ['Sidearm', s.sidearm?.def.name ?? 'Empty', s.sidearm ? `${s.sidearm.magAmmo}/${s.sidearm.reserveAmmo}` : ''],
      ['Helmet', s.helmetLevel > 0 ? `Level ${s.helmetLevel}` : 'None', ''],
      ['Vest', s.vestLevel > 0 ? `Level ${s.vestLevel}` : 'None', ''],
      ['Healing', `Bandage×${s.bandages}  Medkit×${s.medkits}`, ''],
      ['Throwables', `Frag×${s.frags}  Smoke×${s.smokes}`, ''],
      ['Light Ammo', `${s.ammo.light}`, ''],
      ['Medium Ammo', `${s.ammo.medium}`, ''],
      ['Heavy Ammo', `${s.ammo.heavy}`, ''],
      ['Shells', `${s.ammo.shells}`, ''],
      ['Precision Rounds', `${s.ammo.precision}`, ''],
    ];
    this.inventoryGrid.innerHTML = '';
    for (const [label, value, sub] of slots) {
      const slot = el('div', 'inv-slot' + (value === 'Empty' || value === 'None' ? ' empty' : ''));
      slot.innerHTML = `<div class="slot-title">${label}</div><div class="slot-item">${value}</div><div>${sub}</div>`;
      this.inventoryGrid.appendChild(slot);
    }
  }

  setDebugVisible(visible: boolean): void {
    this.debugOverlay.classList.toggle('hidden', !visible);
  }

  update(data: HUDFrameData): void {
    this.healthFill.style.width = `${(data.health / data.maxHealth) * 100}%`;
    this.armorFill.style.width = `${(data.vestLevel / 3) * 100}%`;
    this.staminaFill.style.width = `${(data.stamina / data.maxStamina) * 100}%`;
    this.armorPips.innerHTML = [1, 2, 3].map((i) => `<div class="armor-pip${i <= data.helmetLevel ? ' filled' : ''}"></div>`).join('');

    if (data.weapon) {
      this.weaponNameEl.textContent = data.weapon.def.name;
      this.ammoCount.textContent = String(data.weapon.magAmmo);
      this.ammoReserve.textContent = `/ ${data.weapon.reserveAmmo}`;
      this.fireModeEl.textContent = data.weapon.def.automatic ? 'AUTO' : 'SEMI';
      this.reloadFill.style.width = `${data.weapon.reloadProgress01 * 100}%`;
    } else {
      this.weaponNameEl.textContent = 'UNARMED';
      this.ammoCount.textContent = '–';
      this.ammoReserve.textContent = '';
      this.fireModeEl.textContent = '';
      this.reloadFill.style.width = '0%';
    }

    const compassOffsetPx = -(data.yawDegrees / 15) * 46;
    this.compassStrip.style.transform = `translateX(${compassOffsetPx + 230}px)`;

    const phase = data.zone.stage === 'final' ? 'FINAL' : `${data.zone.phaseIndex + 1}/4`;
    this.phaseEl.textContent = `SIGNAL COLLAPSE — PHASE ${phase}`;
    const t = data.zone.timeRemainingInStage;
    const mm = Math.floor(t / 60);
    const ss = Math.floor(t % 60);
    this.timerEl.textContent = `${mm}:${ss.toString().padStart(2, '0')}`;
    this.timerEl.classList.toggle('danger', data.zone.stage === 'shrinking' || data.zone.stage === 'final');
    this.hostilesEl.textContent = `Hostiles: ${data.hostilesRemaining}`;

    if (data.extractionActive) {
      this.extractionBanner.classList.remove('hidden');
      const mm2 = Math.floor(data.extractionRemaining / 60);
      const ss2 = Math.floor(data.extractionRemaining % 60);
      this.extractionTimer.textContent = `${mm2}:${ss2.toString().padStart(2, '0')}`;
      this.extractionBanner.querySelector('#ex-title')!.textContent = data.extractionContested
        ? 'EXTRACTION CONTESTED'
        : `EXTRACTION IN ${mm2}:${ss2.toString().padStart(2, '0')}`;
    } else {
      this.extractionBanner.classList.add('hidden');
    }

    if (data.debugVisible) {
      this.debugOverlay.classList.remove('hidden');
      this.debugOverlay.innerHTML = `FPS: ${data.fps.toFixed(0)}<br/>Draw calls: ${data.drawCalls}<br/>Triangles: ${data.triangles}<br/>Pos: ${data.playerX.toFixed(
        0,
      )}, ${data.playerZ.toFixed(0)}<br/>Zone phase: ${phase}`;
    } else {
      this.debugOverlay.classList.add('hidden');
    }

    const isAiming = this.crosshair.dataset.aiming === '1';
    this.crosshair.classList.toggle('hidden', isAiming);

    if (!this.mapScreen.classList.contains('hidden')) {
      const ctx = this.mapCanvas.getContext('2d')!;
      drawMap(
        ctx,
        this.mapCanvas.width,
        {
          playerX: data.playerX,
          playerZ: data.playerZ,
          playerYaw: data.playerYaw,
          zone: data.zone,
          extraction: { x: data.extractionX, z: data.extractionZ, active: data.extractionActive },
          showLocationLabels: true,
        },
        false,
      );
    }
    const miniCtx = this.minimapCanvas.getContext('2d')!;
    drawMap(
      miniCtx,
      this.minimapCanvas.width,
      {
        playerX: data.playerX,
        playerZ: data.playerZ,
        playerYaw: data.playerYaw,
        zone: data.zone,
        extraction: { x: data.extractionX, z: data.extractionZ, active: data.extractionActive },
        showLocationLabels: false,
      },
      true,
    );
  }

  setCrosshairSpread(spreadPx: number, hidden: boolean): void {
    this.crosshair.dataset.aiming = hidden ? '1' : '0';
    const lines = this.crosshair.querySelectorAll<HTMLElement>('.ch-line');
    lines[0].style.top = `${-spreadPx - 6}px`;
    lines[0].style.height = '6px';
    lines[1].style.top = `${spreadPx}px`;
    lines[1].style.height = '6px';
    lines[2].style.left = `${-spreadPx - 6}px`;
    lines[2].style.width = '6px';
    lines[3].style.left = `${spreadPx}px`;
    lines[3].style.width = '6px';
  }
}
