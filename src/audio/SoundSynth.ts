/** Every sound in the game is synthesized in code at load time — no audio assets, no licensing concerns. */

function makeOfflineCtx(duration: number, sampleRate = 44100): OfflineAudioContext {
  return new OfflineAudioContext(1, Math.ceil(duration * sampleRate), sampleRate);
}

async function render(ctx: OfflineAudioContext): Promise<AudioBuffer> {
  return ctx.startRendering();
}

function noiseBuffer(ctx: BaseAudioContext, duration: number): AudioBuffer {
  const buf = ctx.createBuffer(1, Math.ceil(duration * ctx.sampleRate), ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  return buf;
}

function applyFadeOut(buffer: AudioBuffer, fadeSeconds: number): AudioBuffer {
  const data = buffer.getChannelData(0);
  const n = Math.min(data.length, Math.floor(fadeSeconds * buffer.sampleRate));
  for (let i = 0; i < n; i++) {
    const t = i / n;
    data[data.length - n + i] *= 1 - t;
  }
  return buffer;
}

export async function synthGunshot(profile: 'rifle' | 'smg' | 'marksman' | 'shotgun' | 'sniper' | 'pistol'): Promise<AudioBuffer> {
  const params: Record<string, { dur: number; body: number; crack: number; boom: number; tone: number }> = {
    rifle: { dur: 0.28, body: 900, crack: 2600, boom: 140, tone: 0.5 },
    smg: { dur: 0.16, body: 1300, crack: 3200, boom: 180, tone: 0.35 },
    marksman: { dur: 0.35, body: 700, crack: 2200, boom: 110, tone: 0.6 },
    shotgun: { dur: 0.4, body: 500, crack: 1800, boom: 90, tone: 0.75 },
    sniper: { dur: 0.5, body: 450, crack: 1600, boom: 70, tone: 0.85 },
    pistol: { dur: 0.22, body: 1000, crack: 2800, boom: 200, tone: 0.4 },
  };
  const p = params[profile];
  const ctx = makeOfflineCtx(p.dur);
  const src = ctx.createBufferSource();
  src.buffer = noiseBuffer(ctx, p.dur);

  const crackFilter = ctx.createBiquadFilter();
  crackFilter.type = 'bandpass';
  crackFilter.frequency.value = p.crack;
  crackFilter.Q.value = 0.7;

  const bodyFilter = ctx.createBiquadFilter();
  bodyFilter.type = 'lowpass';
  bodyFilter.frequency.setValueAtTime(p.body * 2.2, 0);
  bodyFilter.frequency.exponentialRampToValueAtTime(p.boom, p.dur);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(1, 0);
  gain.gain.exponentialRampToValueAtTime(0.001, p.dur);

  const boomOsc = ctx.createOscillator();
  boomOsc.type = 'sine';
  boomOsc.frequency.setValueAtTime(p.boom * 2, 0);
  boomOsc.frequency.exponentialRampToValueAtTime(p.boom * 0.6, p.dur);
  const boomGain = ctx.createGain();
  boomGain.gain.setValueAtTime(p.tone, 0);
  boomGain.gain.exponentialRampToValueAtTime(0.001, p.dur * 0.9);

  src.connect(crackFilter).connect(bodyFilter).connect(gain).connect(ctx.destination);
  boomOsc.connect(boomGain).connect(ctx.destination);

  src.start(0);
  boomOsc.start(0);
  boomOsc.stop(p.dur);
  return render(ctx);
}

export async function synthFootstep(surface: 'grass' | 'concrete' | 'metal' | 'wood'): Promise<AudioBuffer> {
  const dur = 0.12;
  const ctx = makeOfflineCtx(dur);
  const src = ctx.createBufferSource();
  src.buffer = noiseBuffer(ctx, dur);
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.8, 0);
  gain.gain.exponentialRampToValueAtTime(0.001, dur);

  if (surface === 'grass') {
    filter.type = 'lowpass';
    filter.frequency.value = 900;
  } else if (surface === 'concrete') {
    filter.type = 'bandpass';
    filter.frequency.value = 1800;
    filter.Q.value = 1;
  } else if (surface === 'metal') {
    filter.type = 'highpass';
    filter.frequency.value = 2200;
  } else {
    filter.type = 'bandpass';
    filter.frequency.value = 1200;
    filter.Q.value = 0.8;
  }
  src.connect(filter).connect(gain).connect(ctx.destination);
  src.start(0);
  return render(ctx);
}

export async function synthImpact(surface: 'terrain' | 'concrete' | 'metal' | 'wood' | 'body' | 'rock'): Promise<AudioBuffer> {
  const dur = surface === 'metal' ? 0.3 : 0.18;
  const ctx = makeOfflineCtx(dur);
  const src = ctx.createBufferSource();
  src.buffer = noiseBuffer(ctx, dur);
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.7, 0);
  gain.gain.exponentialRampToValueAtTime(0.001, dur);
  const map: Record<string, [BiquadFilterType, number]> = {
    terrain: ['lowpass', 700],
    concrete: ['bandpass', 1500],
    metal: ['highpass', 2600],
    wood: ['bandpass', 1000],
    body: ['lowpass', 500],
    rock: ['bandpass', 1300],
  };
  const [type, freq] = map[surface];
  filter.type = type;
  filter.frequency.value = freq;
  src.connect(filter).connect(gain).connect(ctx.destination);
  src.start(0);
  if (surface === 'metal') {
    const ring = ctx.createOscillator();
    ring.type = 'triangle';
    ring.frequency.value = 1800;
    const ringGain = ctx.createGain();
    ringGain.gain.setValueAtTime(0.15, 0);
    ringGain.gain.exponentialRampToValueAtTime(0.001, dur);
    ring.connect(ringGain).connect(ctx.destination);
    ring.start(0);
    ring.stop(dur);
  }
  return render(ctx);
}

export async function synthReload(): Promise<AudioBuffer> {
  const dur = 0.18;
  const ctx = makeOfflineCtx(dur);
  const src = ctx.createBufferSource();
  src.buffer = noiseBuffer(ctx, dur);
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 2400;
  filter.Q.value = 3;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.6, 0);
  gain.gain.exponentialRampToValueAtTime(0.001, dur);
  src.connect(filter).connect(gain).connect(ctx.destination);
  src.start(0);
  return render(ctx);
}

export async function synthUIClick(kind: 'click' | 'hover' | 'confirm' | 'error'): Promise<AudioBuffer> {
  const dur = 0.12;
  const ctx = makeOfflineCtx(dur);
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  const freqMap = { click: 700, hover: 500, confirm: 620, error: 220 };
  osc.frequency.setValueAtTime(freqMap[kind], 0);
  if (kind === 'confirm') osc.frequency.exponentialRampToValueAtTime(1000, dur);
  if (kind === 'error') osc.frequency.exponentialRampToValueAtTime(140, dur);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.35, 0);
  gain.gain.exponentialRampToValueAtTime(0.001, dur);
  osc.connect(gain).connect(ctx.destination);
  osc.start(0);
  osc.stop(dur);
  return render(ctx);
}

export async function synthZoneWarning(): Promise<AudioBuffer> {
  const dur = 1.2;
  const ctx = makeOfflineCtx(dur);
  const osc = ctx.createOscillator();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(320, 0);
  osc.frequency.linearRampToValueAtTime(460, dur * 0.5);
  osc.frequency.linearRampToValueAtTime(320, dur);
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 1200;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.001, 0);
  gain.gain.linearRampToValueAtTime(0.4, 0.1);
  gain.gain.linearRampToValueAtTime(0.001, dur);
  osc.connect(filter).connect(gain).connect(ctx.destination);
  osc.start(0);
  osc.stop(dur);
  return render(ctx);
}

export async function synthExtractionBeacon(): Promise<AudioBuffer> {
  const dur = 0.9;
  const ctx = makeOfflineCtx(dur);
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.value = 880;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.001, 0);
  gain.gain.linearRampToValueAtTime(0.35, 0.05);
  gain.gain.linearRampToValueAtTime(0.001, 0.4);
  gain.gain.linearRampToValueAtTime(0.35, 0.5);
  gain.gain.linearRampToValueAtTime(0.001, dur);
  osc.connect(gain).connect(ctx.destination);
  osc.start(0);
  osc.stop(dur);
  return render(ctx);
}

export async function synthWindAmbience(): Promise<AudioBuffer> {
  const dur = 8;
  const ctx = makeOfflineCtx(dur);
  const src = ctx.createBufferSource();
  src.buffer = noiseBuffer(ctx, dur);
  src.loop = false;
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 500;
  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.15;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 220;
  lfo.connect(lfoGain).connect(filter.frequency);
  const gain = ctx.createGain();
  gain.gain.value = 0.18;
  src.connect(filter).connect(gain).connect(ctx.destination);
  src.start(0);
  lfo.start(0);
  const buf = await render(ctx);
  applyFadeOut(buf, 0.5);
  return buf;
}

export async function synthMusicBed(): Promise<AudioBuffer> {
  const dur = 24;
  const ctx = makeOfflineCtx(dur);
  const notes = [55, 55 * 1.5, 55 * 1.19, 55 * 2];
  const master = ctx.createGain();
  master.gain.value = 0.22;
  master.connect(ctx.destination);
  for (const freq of notes) {
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = freq;
    const detune = ctx.createOscillator();
    detune.type = 'sine';
    detune.frequency.value = freq * 1.004;
    const g = ctx.createGain();
    g.gain.value = 0.5;
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.05 + Math.random() * 0.05;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.15;
    lfo.connect(lfoGain).connect(g.gain);
    osc.connect(g);
    detune.connect(g);
    g.connect(master);
    osc.start(0);
    detune.start(0);
    lfo.start(0);
    osc.stop(dur);
    detune.stop(dur);
  }
  const buf = await render(ctx);
  applyFadeOut(buf, 1.5);
  return buf;
}
