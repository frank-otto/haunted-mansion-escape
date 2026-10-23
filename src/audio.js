// Haunted Mansion Escape audio (adapted copy of Witch Broom Race / Pumpkin Smash audio) — recorded CC0 samples (LICENSES/SOUNDS.md), embedded as base64 (js/sounds-src.js) so file:// works.
// Layered SFX with random pitch/volume per play; deep & warm (no synth beeps); ambience loops (rain, clock, cauldron) + dark music loop.
let ctx = null, limiter = null, master = null, comp = null, sfxBus = null, musicBus = null, musicTone = null;
let sfxOn = true, musicOn = true, muted = false;
let sfxVol = 0.9, musicVol = 0.6;
let kids = false;
let unlocked = false;
const MUSIC_GAIN = 0.55;
const buffers = {};
let decodePromise = null;

function now() { return window.__sfxClock ? window.__sfxClock() : (ctx ? ctx.currentTime : 0); }   // __sfxClock/__sfxLog: deterministic video capture hooks
function ac() {
  if (!ctx && !unlocked) return null;
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    try { ctx = new AC({ latencyHint: 'interactive' }); } catch (e) { ctx = new AC(); }
    buildGraph(ctx);
  }
  if (ctx.state === 'suspended') ctx.resume().catch(() => {});
  return ctx;
}
function buildGraph(c) {
  const lim = c.createDynamicsCompressor(); lim.threshold.value = -3; lim.knee.value = 0; lim.ratio.value = 20; lim.attack.value = 0.002; lim.release.value = 0.12;
  lim.connect(c.destination); limiter = lim;
  master = c.createGain(); master.gain.value = muted ? 0 : 0.85; master.connect(lim);
  comp = c.createDynamicsCompressor(); comp.threshold.value = -18; comp.ratio.value = 3; comp.attack.value = 0.005; comp.release.value = 0.25;
  comp.connect(master);
  sfxBus = c.createGain(); sfxBus.gain.value = sfxVol; sfxBus.connect(comp);
  musicTone = c.createBiquadFilter(); musicTone.type = 'lowpass'; musicTone.frequency.value = 9000; musicTone.Q.value = 0.5;
  musicBus = c.createGain(); musicBus.gain.value = 0; musicTone.connect(musicBus); musicBus.connect(comp);
  decodeAll(c);
}
function b64ToArrayBuffer(b64) {
  const bin = atob(b64), n = bin.length, u = new Uint8Array(n);
  for (let i = 0; i < n; i++) u[i] = bin.charCodeAt(i);
  return u.buffer;
}
function decodeOne(c, name, b64) {
  return new Promise(res => {
    let done = false;
    const ok = b => { if (done) return; done = true; buffers[name] = b; res(true); if (name.startsWith('music_')) refreshMusic(); };
    const bad = () => { if (done) return; done = true; res(false); };
    try { const p = c.decodeAudioData(b64ToArrayBuffer(b64), ok, bad); if (p && p.then) p.then(ok, bad); } catch (e) { bad(); }
  });
}
function decodeAll(c) {
  if (decodePromise) return decodePromise;
  const S = window.HME_SOUNDS || {};
  const names = Object.keys(S).sort((a, b) => (a.startsWith('music_') ? 1 : 0) - (b.startsWith('music_') ? 1 : 0));
  decodePromise = names.reduce((p, n) => p.then(() => decodeOne(c, n, S[n])), Promise.resolve()).then(() => Object.keys(buffers).length);
  return decodePromise;
}

const rnd = a => 1 + (Math.random() * 2 - 1) * a;
function play(name, { vol = 1, rate = 1, delay = 0, pan = 0, vary = 1 } = {}) {
  if (!sfxOn) return null;
  if (window.__sfxLog) window.__sfxLog.push({ n: name, t: now() + delay, v: vol, r: rate, p: pan });
  const c = ac(); if (!c) return null;
  const buf = buffers[name]; if (!buf) return null;
  const src = c.createBufferSource(); src.buffer = buf;
  src.playbackRate.value = rate * rnd(0.035 * vary);
  const g = c.createGain(); g.gain.value = Math.max(0, vol * rnd(0.1 * vary));
  let node = src.connect(g);
  if (pan && c.createStereoPanner) { const p = c.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, pan)); node = node.connect(p); }
  node.connect(sfxBus);
  src.start(now() + delay);
  return src;
}
const pick = (...n) => n[(Math.random() * n.length) | 0];
let lastChime = -1, lastSwish = -1, lastBat = -1, chimeIdx = 0;

// ---------- ambience loops (rain outside, clock tick, cauldron bubble) ----------
const AMB = { rain: 0, clock_loop: 0, bubble_loop: 0 };
const loops = {};
function ensureLoop(name) {
  const c = ac(); if (!c || loops[name] || !buffers[name]) return loops[name];
  const buf = buffers[name];
  const src = c.createBufferSource(); src.buffer = buf; src.loop = true; src.loopStart = 0.5; src.loopEnd = buf.duration - 0.5;
  const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2400; lp.Q.value = 0.4;
  const g = c.createGain(); g.gain.value = 0;
  src.connect(lp).connect(g).connect(sfxBus); src.start(now(), 0.5 + Math.random() * 2);
  loops[name] = { src, lp, g }; return loops[name];
}
// levels 0..1 per loop; lp = muffling (rain is muffled indoors, open in the garden)
export function setAmbience(levels = {}, lpHz = 2400) {
  Object.assign(AMB, levels);
  if (window.__sfxLog) window.__sfxLog.push({ amb: { ...AMB }, lp: lpHz, t: now() });
  if (!ctx) return;
  const t = now();
  for (const k of Object.keys(AMB)) {
    const L = ensureLoop(k); if (!L) continue;
    const base = k === 'rain' ? 0.42 : k === 'clock_loop' ? 0.34 : 0.5;
    L.g.gain.setTargetAtTime(sfxOn ? AMB[k] * base * (kids ? 0.75 : 1) : 0, t, 0.6);
    L.lp.frequency.setTargetAtTime(k === 'rain' ? lpHz : 3200, t, 0.5);
  }
}
// music-box notes: warm pentatonic (G A B D E, + octave) from one recorded music-box tine
export const NOTE_RATES = [1, 1.1225, 1.2599, 1.4983, 1.6818, 2];
export function note(i, delay = 0) { play('musicbox', { vol: kids ? 0.5 : 0.6, rate: NOTE_RATES[i] || 1, delay, vary: 0.05 }); }

export const sfx = {
  creak(v = 0.5) { play(pick('door_creak', 'door_creak_b'), { vol: v * (kids ? 0.7 : 1), rate: 0.9 }); },
  door() { play('door_creak', { vol: 0.6, rate: 0.85 }); play('floor_c', { vol: 0.25, delay: 0.5 }); },
  floor() { play(pick('floor_a', 'floor_b', 'floor_c'), { vol: 0.35, vary: 0.6 }); },
  step() { play(pick('floor_a', 'floor_b'), { vol: 0.25, rate: 1.1, vary: 0.6 }); },
  foot(surf = 'wood', run = false) { const n = 1 + ((Math.random() * 3) | 0); play((surf === 'stone' ? 'step_stone_' : 'step_wood_') + n, { vol: (kids ? 0.32 : 0.42) * (run ? 1.15 : 1), rate: 0.92 + Math.random() * 0.14, vary: 0.4 }); if (surf === 'wood' && Math.random() < 0.12) play(pick('floor_a', 'floor_b'), { vol: 0.12, rate: 1.2, vary: 0.5 }); },
  tick() { play('clock_loop', { vol: 0.3 }); },
  chime() { play('bell', { vol: 0.5, rate: 0.62 }); play('bell', { vol: 0.25, rate: 0.5, delay: 1.3 }); },
  thunder(near = false) { play(near && !kids ? 'thunder_a' : 'thunder_soft', { vol: near ? 0.55 : 0.32, vary: 0.5, delay: near ? 0.05 : 0.5 + Math.random() }); if (near) play('sub', { vol: kids ? 0.15 : 0.3 }); },
  match() { play('match', { vol: 0.6 }); },
  ignite() { play('fwoosh', { vol: 0.28, rate: 0.8 }); play('match', { vol: 0.3, rate: 1.05, delay: 0.02 }); },
  blowOut() { play('swish_a', { vol: 0.4, rate: 0.6 }); play('fwoosh', { vol: 0.2, rate: 0.6 }); },
  keys() { play('keys', { vol: 0.55 }); },
  lock() { play('lock', { vol: 0.7 }); play('impact', { vol: 0.18, rate: 0.6, delay: 0.05 }); },
  locked() { play('lock_b', { vol: 0.55, rate: 0.85 }); play('rattle', { vol: 0.2, rate: 0.8 }); },
  dial() { play('lock_b', { vol: 0.25, rate: 1.25, vary: 0.4 }); },
  grind() { play('grind', { vol: 0.7 }); play('grind_b', { vol: 0.4, delay: 0.4 }); play('sub', { vol: 0.3 }); },
  bubble() { play('brew', { vol: 0.55 }); },
  splash() { play('brew', { vol: 0.6, rate: 0.8 }); play('magic', { vol: 0.2, rate: 0.8 }); },
  fizzle() { play('brew', { vol: 0.7, rate: 0.6 }); play('boom', { vol: 0.25, rate: 1.3 }); },
  brewDone() { play('cauldron_magic', { vol: 0.75 }); play('choir', { vol: 0.35, delay: 0.6 }); play('harp', { vol: 0.4, delay: 1.2 }); },
  whisper(v = 0.45) { play(pick('whisper', 'whisper_b'), { vol: kids ? v * 0.45 : v, rate: kids ? 1.1 : 0.95, vary: 0.4 }); },
  skull() { play('whisper', { vol: kids ? 0.25 : 0.35, rate: 0.7, vary: 0.3 }); play('floor_c', { vol: 0.15, rate: 1.6 }); },
  ghostHint() { play('chime_a', { vol: 0.35, rate: 0.7 }); play('whisper_b', { vol: kids ? 0.18 : 0.25, rate: 1.05 }); },
  pickup() { play('sparkle', { vol: 0.45 }); play('harp', { vol: 0.28, rate: 1.0, delay: 0.05 }); },
  drawer() { play('drawer', { vol: 0.6 }); play('rattle', { vol: 0.4, delay: 0.25 }); },
  rattle() { play('rattle', { vol: 0.45, vary: 0.5 }); },
  page() { play('page', { vol: 0.5 }); },
  books() { play('page', { vol: 0.35, rate: 1.2 }); play('swish_a', { vol: 0.2, rate: 0.8 }); },
  wrong() { play('soft', { vol: 0.45, rate: 0.6 }); play('lock_b', { vol: 0.2, rate: 0.7 }); },
  solve() { play('success', { vol: 0.55 }); play('choir', { vol: 0.25, delay: 0.2 }); },
  bigSolve() { play('success', { vol: 0.6 }); play('choir', { vol: 0.4, delay: 0.2 }); play('epic', { vol: kids ? 0.25 : 0.35, delay: 0.1 }); },
  scare() {
    if (kids) { play('squeak_kids', { vol: 0.4 }); play('laugh_kids', { vol: 0.4, delay: 0.3 }); return; }
    play('stinger', { vol: 0.85 }); play('scream', { vol: 0.65, delay: 0.02 }); play('impact', { vol: 0.4, rate: 0.7 });
  },
  flyby() {
    if (kids) { play('laugh_kids', { vol: 0.35, rate: 1.1 }); play('swish_a', { vol: 0.25 }); return; }
    play('stinger_b', { vol: 0.7 }); play('whisper', { vol: 0.5, rate: 1.2 }); play('swish_a', { vol: 0.5, rate: 0.7 });
  },
  bats() { play('bats', { vol: 0.35 }); if (kids) play('squeak_kids', { vol: 0.25, delay: 0.2 }); },
  ghost() { play('riser', { vol: kids ? 0.2 : 0.4, rate: 0.8 }); play('choir', { vol: 0.35, delay: 0.5 }); sfx.whisper(0.5); },
  happyGhost() { play('musicbox_tune', { vol: 0.5 }); play('choir', { vol: 0.4 }); play('harp', { vol: 0.4, delay: 0.6 }); },
  escape() { play('door_creak', { vol: 0.7, rate: 0.75 }); play('epic', { vol: 0.55, delay: 0.6 }); play('choir', { vol: 0.5, delay: 0.9 }); play('harp', { vol: 0.5, delay: 1.4 }); },
  ui() { play('soft', { vol: 0.32, rate: 1.2, vary: 0.2 }); },
  start() { play('door_creak', { vol: 0.5, rate: 0.8 }); play('sub', { vol: 0.3 }); play('thunder_soft', { vol: 0.35, delay: 0.4 }); },
  newBest() { play('choir', { vol: 0.5 }); play('harp', { vol: 0.5, delay: 0.2 }); play('magic', { vol: 0.35, delay: 0.1 }); }
};
// ---------- music ----------
const LOOP = { start: 0.5, end: 36.5 };
let cur = null, mood = 'main';
function refreshMusic() {
  if (!ctx) return;
  const want = musicOn && !muted;
  musicBus.gain.cancelScheduledValues(now());
  musicBus.gain.setTargetAtTime(want ? musicVol * MUSIC_GAIN * (kids ? 0.7 : 1) : 0, now(), 0.3);
  musicTone.frequency.setTargetAtTime(kids ? 3500 : 9000, now(), 0.3);
  if (want) startLoop(mood);
}
function startLoop(m) {
  const c = ac(); if (!c) return;
  const buf = buffers['music_' + m]; if (!buf) return;
  if (cur && cur.mood === m) return;
  const t = now();
  const src = c.createBufferSource(); src.buffer = buf; src.loop = true;
  src.loopStart = LOOP.start; src.loopEnd = Math.min(LOOP.end, buf.duration);
  const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(1, t + (cur ? 1.2 : 0.4));
  src.connect(g).connect(musicTone);
  const off = cur ? ((t - cur.t0) % (LOOP.end - LOOP.start)) : 0;
  src.start(t, LOOP.start + off);
  if (cur) { const o = cur; o.gain.gain.cancelScheduledValues(t); o.gain.gain.setValueAtTime(o.gain.gain.value, t); o.gain.gain.linearRampToValueAtTime(0.0001, t + 1.2); try { o.src.stop(t + 1.3); } catch (e) {} }
  cur = { src, gain: g, mood: m, t0: cur ? cur.t0 : t };
}
export function setMood(m) { mood = 'main'; if (musicTone && ctx) musicTone.frequency.setTargetAtTime(m === 'tense' ? 1600 : m === 'calm' ? 5000 : (kids ? 3500 : 9000), now(), 0.8); }
export function setMusicOn(on) { musicOn = !!on; refreshMusic(); }
export function setSfxOn(on) { sfxOn = !!on; }
export function setMuted(m) { muted = !!m; if (master) master.gain.setTargetAtTime(muted ? 0 : 0.85, now(), 0.05); refreshMusic(); }
export function isMuted() { return muted; }
export function setSfxVolume(v) { sfxVol = Math.max(0, Math.min(1, v)); if (sfxBus) sfxBus.gain.setTargetAtTime(sfxVol, now(), 0.05); }
export function setMusicVolume(v) { musicVol = Math.max(0, Math.min(1, v)); refreshMusic(); }
export function setKids(on) { kids = !!on; refreshMusic(); }
export function duck(amount = 0.35, dur = 1.5) {
  if (!ctx || !musicOn || muted) return;
  const t = now(), full = musicVol * MUSIC_GAIN * (kids ? 0.7 : 1);
  musicBus.gain.cancelScheduledValues(t); musicBus.gain.setValueAtTime(musicBus.gain.value, t);
  musicBus.gain.linearRampToValueAtTime(full * amount, t + 0.08); musicBus.gain.setValueAtTime(full * amount, t + dur);
  musicBus.gain.linearRampToValueAtTime(full, t + dur + 1.2);
}
// iOS Safari: resume inside the gesture, play a 1-sample silent buffer (unlocks output) and ask for 'playback' (ignores the mute switch)
function kick(c) { try { const b = c.createBuffer(1, 1, 22050), src = c.createBufferSource(); src.buffer = b; src.connect(c.destination); src.start(0); } catch (e) {} }
let kicked = false;
export function unlockAudio() { unlocked = true; try { if (navigator.audioSession && navigator.audioSession.type !== 'playback') navigator.audioSession.type = 'playback'; } catch (e) {} const c = ac(); if (c) { if (!kicked) { kicked = true; kick(c); } if (c.state !== 'running') c.resume().catch(() => {}); refreshMusic(); } }
export function audioState() { return ctx ? ctx.state : 'none'; }
export function soundsReady() { const c = ac(); return c ? decodeAll(c) : Promise.resolve(0); }
export function soundNames() { return Object.keys(buffers); }
export function suspendAudio(h) { if (!ctx) return; if (h) ctx.suspend().catch(() => {}); else ctx.resume().catch(() => {}); }
let tap = null;
export function getAnalyser() {
  const c = ac(); if (!c) return null;
  if (!tap) { tap = c.createAnalyser(); tap.fftSize = 2048; limiter.connect(tap); }
  return tap;
}
if (typeof window !== 'undefined') {
  const u = () => { unlockAudio(); window.removeEventListener('pointerdown', u, true); window.removeEventListener('keydown', u, true); window.removeEventListener('touchend', u, true); };
  window.addEventListener('pointerdown', u, true); window.addEventListener('keydown', u, true); window.addEventListener('touchend', u, true);
  document.addEventListener('visibilitychange', () => suspendAudio(document.hidden));
}
