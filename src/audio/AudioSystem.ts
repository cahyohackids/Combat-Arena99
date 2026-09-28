import * as THREE from 'three';
import { EventBus } from '@/core/EventBus';
import { GameEvents } from '@/core/Events';
import {
  synthGunshot,
  synthFootstep,
  synthImpact,
  synthReload,
  synthUIClick,
  synthZoneWarning,
  synthExtractionBeacon,
  synthWindAmbience,
  synthMusicBed,
} from './SoundSynth';
import { WEAPONS } from '@/weapons/WeaponDefs';

type BufferKey = string;

/** Loads/synthesizes all sound buffers once, then plays pooled positional sources against them. Silent-safe if audio fails. */
export class AudioSystem {
  listener = new THREE.AudioListener();
  private buffers = new Map<BufferKey, AudioBuffer>();
  private pool: THREE.PositionalAudio[] = [];
  private poolIndex = 0;
  private ready = false;
  private ambience: THREE.Audio | null = null;
  private music: THREE.Audio | null = null;
  masterVolume = 0.8;
  sfxVolume = 1.0;
  musicVolume = 0.6;

  constructor(camera: THREE.Camera) {
    camera.add(this.listener);
    for (let i = 0; i < 24; i++) {
      this.pool.push(new THREE.PositionalAudio(this.listener));
    }
  }

  async init(): Promise<void> {
    try {
      const tasks: Array<Promise<unknown>> = [];
      for (const weaponId of Object.keys(WEAPONS)) {
        const profile = WEAPONS[weaponId].soundProfile;
        tasks.push(synthGunshot(profile).then((b) => this.buffers.set(`gun_${weaponId}`, b)));
      }
      for (const s of ['grass', 'concrete', 'metal', 'wood'] as const) {
        tasks.push(synthFootstep(s).then((b) => this.buffers.set(`step_${s}`, b)));
      }
      for (const s of ['terrain', 'concrete', 'metal', 'wood', 'body', 'rock'] as const) {
        tasks.push(synthImpact(s).then((b) => this.buffers.set(`impact_${s}`, b)));
      }
      tasks.push(synthReload().then((b) => this.buffers.set('reload', b)));
      for (const k of ['click', 'hover', 'confirm', 'error'] as const) {
        tasks.push(synthUIClick(k).then((b) => this.buffers.set(`ui_${k}`, b)));
      }
      tasks.push(synthZoneWarning().then((b) => this.buffers.set('zone_warning', b)));
      tasks.push(synthExtractionBeacon().then((b) => this.buffers.set('extraction_beacon', b)));
      tasks.push(synthWindAmbience().then((b) => this.buffers.set('ambience_wind', b)));
      tasks.push(synthMusicBed().then((b) => this.buffers.set('music_bed', b)));
      await Promise.all(tasks);
      this.ready = true;
    } catch (err) {
      console.warn('Audio synthesis failed; continuing without sound.', err);
      this.ready = false;
    }
  }

  private getSource(): THREE.PositionalAudio {
    const src = this.pool[this.poolIndex];
    this.poolIndex = (this.poolIndex + 1) % this.pool.length;
    if (src.isPlaying) src.stop();
    return src;
  }

  playAt(key: BufferKey, position: THREE.Vector3, volume = 1): void {
    if (!this.ready) return;
    const buffer = this.buffers.get(key);
    if (!buffer) return;
    const src = this.getSource();
    if (src.parent) src.parent.remove(src);
    const holder = new THREE.Object3D();
    holder.position.copy(position);
    holder.add(src);
    // Attach transiently to the scene root reachable via listener's ancestor; simplest is to add directly to listener's parent scene graph root.
    this.sceneRoot?.add(holder);
    src.setBuffer(buffer);
    src.setVolume(volume * this.sfxVolume * this.masterVolume);
    src.setRefDistance(8);
    src.setRolloffFactor(1.6);
    src.setMaxDistance(220);
    src.play();
    const dur = (buffer.duration + 0.05) * 1000;
    setTimeout(() => {
      holder.remove(src);
      this.sceneRoot?.remove(holder);
    }, dur);
  }

  private sceneRoot: THREE.Scene | null = null;
  setSceneRoot(scene: THREE.Scene): void {
    this.sceneRoot = scene;
  }

  playUI(kind: 'click' | 'hover' | 'confirm' | 'error'): void {
    if (!this.ready) return;
    const buffer = this.buffers.get(`ui_${kind}`);
    if (!buffer) return;
    const audio = new THREE.Audio(this.listener);
    audio.setBuffer(buffer);
    audio.setVolume(0.5 * this.masterVolume);
    audio.play();
  }

  startAmbience(): void {
    if (!this.ready || this.ambience) return;
    const buffer = this.buffers.get('ambience_wind');
    if (!buffer) return;
    this.ambience = new THREE.Audio(this.listener);
    this.ambience.setBuffer(buffer);
    this.ambience.setLoop(true);
    this.ambience.setVolume(0.4 * this.masterVolume);
    this.ambience.play();
  }

  startMusic(): void {
    if (!this.ready || this.music) return;
    const buffer = this.buffers.get('music_bed');
    if (!buffer) return;
    this.music = new THREE.Audio(this.listener);
    this.music.setBuffer(buffer);
    this.music.setLoop(true);
    this.music.setVolume(this.musicVolume * this.masterVolume);
    this.music.play();
  }

  updateVolumes(master: number, sfx: number, music: number): void {
    this.masterVolume = master;
    this.sfxVolume = sfx;
    this.musicVolume = music;
    if (this.ambience) this.ambience.setVolume(0.4 * this.masterVolume);
    if (this.music) this.music.setVolume(this.musicVolume * this.masterVolume);
  }

  stopAll(): void {
    this.ambience?.stop();
    this.music?.stop();
    this.ambience = null;
    this.music = null;
  }

  bindGameEvents(bus: EventBus<GameEvents>): void {
    bus.on('weapon:fire', (e) => this.playAt(`gun_${e.weaponId}`, e.position, e.isPlayer ? 0.9 : 0.75));
    bus.on('weapon:reload', (e) => this.playAt('reload', e.position, 0.6));
    bus.on('player:footstep', (e) => this.playAt(`step_${e.surface === 'rock' || e.surface === 'sand' ? 'concrete' : e.surface}`, e.position, e.sprinting ? 0.5 : 0.3));
    bus.on('zone:warning', () => this.playUI('error'));
    bus.on('extraction:started', () => this.playUI('confirm'));
    bus.on('loot:pickup', () => this.playUI('confirm'));
  }
}
