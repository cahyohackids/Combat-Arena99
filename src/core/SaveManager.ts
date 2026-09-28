export type GraphicsPreset = 'low' | 'medium' | 'high';

export interface GameSettings {
  graphicsPreset: GraphicsPreset;
  resolutionScale: number;
  shadowQuality: GraphicsPreset;
  vegetationDensity: GraphicsPreset;
  postProcessing: boolean;
  masterVolume: number;
  sfxVolume: number;
  musicVolume: number;
  mouseSensitivity: number;
  aimSensitivity: number;
  invertY: boolean;
  cameraShake: boolean;
  reducedMotion: boolean;
  highContrastPrompts: boolean;
}

export interface SaveData {
  settings: GameSettings;
  loadout: string;
  bestExtractionTime: number | null;
  successfulExtractions: number;
  totalMatches: number;
}

export const DEFAULT_SETTINGS: GameSettings = {
  graphicsPreset: 'high',
  resolutionScale: 1.0,
  shadowQuality: 'high',
  vegetationDensity: 'high',
  postProcessing: true,
  masterVolume: 0.8,
  sfxVolume: 1.0,
  musicVolume: 0.6,
  mouseSensitivity: 1.0,
  aimSensitivity: 0.6,
  invertY: false,
  cameraShake: true,
  reducedMotion: false,
  highContrastPrompts: false,
};

const KEY = 'last-sector-save-v1';

let memoryFallback: SaveData | null = null;

function storageAvailable(): boolean {
  try {
    const t = '__ls_test__';
    localStorage.setItem(t, '1');
    localStorage.removeItem(t);
    return true;
  } catch {
    return false;
  }
}

const HAS_STORAGE = storageAvailable();

export class SaveManager {
  static load(): SaveData {
    const fallback: SaveData = {
      settings: { ...DEFAULT_SETTINGS },
      loadout: 'assault',
      bestExtractionTime: null,
      successfulExtractions: 0,
      totalMatches: 0,
    };
    if (!HAS_STORAGE) return memoryFallback ?? fallback;
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return {
        settings: { ...DEFAULT_SETTINGS, ...parsed.settings },
        loadout: parsed.loadout ?? 'assault',
        bestExtractionTime: parsed.bestExtractionTime ?? null,
        successfulExtractions: parsed.successfulExtractions ?? 0,
        totalMatches: parsed.totalMatches ?? 0,
      };
    } catch {
      return fallback;
    }
  }

  static save(data: SaveData): void {
    if (!HAS_STORAGE) {
      memoryFallback = data;
      return;
    }
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch {
      memoryFallback = data;
    }
  }
}
