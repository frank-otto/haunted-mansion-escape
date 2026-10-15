// Haunted Mansion Escape — main: renderer, rooms, point-and-click, puzzles, hints, scares, cinematics, autosave, UI, test hooks.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { buildRooms, BOTTLE_COLS, NOTE_COLS } from './rooms.js';
import * as P from './props.js';
import * as TX from './tex.js';
import * as A from './audio.js';
import { T, setLang, getLang, applyI18n, rankFor, shareText, fmtTime, escapeScore } from './i18n.js';
const defName = () => 'Player';
import { rand, clamp, lerp, damp, store } from './util.js';

const $ = id => document.getElementById(id);
export const QUALITY = {
  low:   { pr: 0.8, bloom: 0,    particles: 0.4, rays: 2, shadows: false, msaa: 0 },
  mid:   { pr: 1.0, bloom: 0.85, particles: 0.7, rays: 3, shadows: false, msaa: 0 },
  high:  { pr: 1.5, bloom: 1.0,  particles: 1.0, rays: 4, shadows: true,  msaa: 4 },
  ultra: { pr: 2.0, bloom: 1.1,  particles: 1.4, rays: 5, shadows: true,  msaa: 4 }
};
// puzzle definitions (normal / kids)
const PUZ = {
  code: '1035',
  candles: { n: [2, 0, 3, 4, 1], k: [3, 0, 2] },      // holder indices (moon,pumpkin,bat,skull,spider)
  brew: { n: [0, 3, 1, 2], k: [0, 1] },               // bottle indices then crystal
  melody: { n: [2, 3, 4, 3, 2, 0], k: [0, 2, 4] },    // music box keys
  pitch: [0, 1, 2, 3.5, 4.5]                          // staff position per key (for the sheet)
};
const SAVE_KEY = 'hme-save';
const ROOM_ORDER = ['foyer', 'library', 'kitchen', 'attic', 'garden'];

// ---------------- state ----------------
const S = {
  mode: 'menu', kids: store.get('hme-kids', false) === true, quality: store.get('hme-quality', ''), qualityUser: !!store.get('hme-quality', ''),
  room: 'foyer', time: 0, hintsUsed: 0, hintLvl: {}, inv: [], sel: null, f: {}, seq: [], brew: [], mel: [], visited: {}, spot: null,
  best: store.get('hme-best', null), nameV: store.get('hme-name', defName()), shareLang: getLang(), paused: false, busy: 0, lastResult: null, clock: 0,
  log: { scare: 0, cute: 0, flyby: 0, hint: 0, pickup: 0, lightning: 0, wrong: 0 }
};
if (!QUALITY[S.quality]) S.quality = '';
function qName() { return S.quality || 'high'; }
function variant(k) { return S.kids ? PUZ[k].k : PUZ[k].n; }

// ---------------- renderer ----------------
const canvas = $('gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', alpha: false, stencil: false });
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05; renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.type = THREE.PCFShadowMap;
const scene = new THREE.Scene(); scene.background = new THREE.Color(0x05030a);
scene.fog = new THREE.FogExp2(0x120a18, 0.03);
const camera = new THREE.PerspectiveCamera(60, 1, 0.05, 300);
const pmrem = new THREE.PMREMGenerator(renderer);
function envScene() { // dark candle-lit room: warm blobs + a cold moon window → believable reflections on gold, glass and metal
  const es = new THREE.Scene();
  es.add(new THREE.Mesh(new THREE.SphereGeometry(10, 24, 16), new THREE.MeshBasicMaterial({ color: 0x1a1018, side: THREE.BackSide })));
  const blob = (c, s, x, y, z) => { const m = new THREE.Mesh(new THREE.SphereGeometry(s, 12, 8), new THREE.MeshBasicMaterial({ color: c })); m.position.set(x, y, z); es.add(m); };
  for (let i = 0; i < 7; i++) { const a = i / 7 * Math.PI * 2; blob(new THREE.Color(2.2, 1.3, 0.55), 0.35, Math.cos(a) * 7, 1 + (i % 3), Math.sin(a) * 7); }
  blob(new THREE.Color(1.6, 1.0, 0.5), 1.2, 0, 8, 0); blob(new THREE.Color(0.7, 0.8, 1.6), 1.6, -6, 4, -6);
  const fl = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), new THREE.MeshBasicMaterial({ color: 0x2a1810 })); fl.rotation.x = -Math.PI / 2; fl.position.y = -3; es.add(fl);
  return es;
}
P.ENV.map = pmrem.fromScene(envScene(), 0.02).texture;
let composer = null, bloom = null, grade = null, scareK = 0, rooms = null, R = null, dprNow = 1, baseFov = 60;
function buildComposer() {
  const q = QUALITY[qName()];
  if (composer) { composer.dispose && composer.dispose(); composer = null; }
  if (!q.bloom) return;
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: q.msaa });
  composer = new EffectComposer(renderer, rt); composer.addPass(new RenderPass(scene, camera));
  bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.68 * q.bloom, 0.55, 0.84); composer.addPass(bloom);
  // cinematic grade: warm candle highlights / cold shadows, contrast, vignette, lightning lift, scare pulse with chromatic split, film grain
  grade = new ShaderPass({ uniforms: { tDiffuse: { value: null }, scare: { value: 0 }, lit: { value: 0 }, time: { value: 0 }, asp: { value: 1 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `uniform sampler2D tDiffuse; uniform float scare; uniform float lit; uniform float time; uniform float asp; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
      void main(){ vec2 d = vUv - 0.5; float ca = 0.0035 + scare * 0.018;
        vec3 x = vec3(texture2D(tDiffuse, vUv + d * ca).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - d * ca).b);
        float l = dot(x, vec3(0.2126,0.7152,0.0722));
        x = mix(x * vec3(0.82,0.92,1.15), x * vec3(1.12,0.98,0.82), smoothstep(0.03, 0.5, l));
        x = mix(vec3(l), x, 1.08 - scare * 0.5); x = pow(max(x, 0.0), vec3(1.07)) * 1.05;
        x += vec3(0.55,0.62,0.9) * lit * 0.05;
        float r = length(d * vec2(asp, 1.0)); x *= mix(0.46 + lit * 0.25, 1.0, smoothstep(1.05, 0.25, r));
        x = mix(x, x * vec3(1.5,0.35,0.35), scare * 0.55 * smoothstep(0.2, 0.9, r)); x += vec3(0.25,0.0,0.02) * scare * smoothstep(0.4, 1.0, r);
        x += (h(vUv * 931.0 + time) - 0.5) * 0.022;
        gl_FragColor = vec4(x, 1.0); }` });
  composer.addPass(grade); composer.addPass(new OutputPass());
}
function resize() {
  const w = window.innerWidth, h = window.innerHeight, q = QUALITY[qName()];
  dprNow = Math.min(window.devicePixelRatio || 1, q.pr); renderer.setPixelRatio(dprNow); renderer.setSize(w, h, false);
  camera.aspect = w / h; const port = clamp((1.0 - camera.aspect) / 0.5, 0, 1); baseFov = 58 + port * 20; camera.fov = baseFov; camera.updateProjectionMatrix();
  if (composer) { composer.setPixelRatio(dprNow); composer.setSize(w, h); }
  if (rooms) for (const k in rooms) if (rooms[k].dust) rooms[k].dust.material.uniforms.pr.value = dprNow * h / 800;
}

// ---------------- camera ----------------
const cam = { pos: new THREE.Vector3(), look: new THREE.Vector3(), tPos: new THREE.Vector3(), tLook: new THREE.Vector3(), yaw: 0, pitch: 0, k: 3.5, shake: 0, roll: 0, fovK: 0 };
const V = new THREE.Vector3(), V2 = new THREE.Vector3();
function dirOf(yaw, pitch, out = new THREE.Vector3()) { return out.set(-Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), -Math.cos(yaw) * Math.cos(pitch)); }
function viewTargets() {
  if (WALK.on && S.mode === 'play' && !S.spot && R && R.group) { cam.tPos.set(P1.x, P1.y + EYE + P1.bobY, P1.z).add(R.offset); cam.tPos.x += P1.bobX; cam.tLook.copy(cam.tPos).addScaledVector(dirOf(cam.yaw, cam.pitch, V), 6); return; }
  if (S.spot && R.spots[S.spot]) { const sp = R.spots[S.spot]; cam.tPos.copy(sp.pos).add(R.offset); cam.tLook.copy(sp.look).add(R.offset); dirOf(cam.yaw * 0.25, cam.pitch * 0.25, V); cam.tLook.addScaledVector(V, 0.0); return; }
  cam.tPos.copy(R.view.pos).add(R.offset); cam.tLook.copy(cam.tPos).addScaledVector(dirOf(R.view.yaw + cam.yaw, R.view.pitch + cam.pitch, V), 6);
}
function snapCamera() { viewTargets(); cam.pos.copy(cam.tPos); cam.look.copy(cam.tLook); }
let cineCam = null; // {pos, look} override (cinematics)
function updateCamera(dt) {
  if (cineCam) { cam.tPos.copy(cineCam.pos); cam.tLook.copy(cineCam.look); } else viewTargets();
  const k = cineCam ? (cineCam.k || 2.2) : WALK.on && S.mode === 'play' && !S.spot ? 26 : drag.active && !S.spot ? 18 : cam.k;
  cam.pos.x = damp(cam.pos.x, cam.tPos.x, k * 0.8, dt); cam.pos.y = damp(cam.pos.y, cam.tPos.y, k * 0.8, dt); cam.pos.z = damp(cam.pos.z, cam.tPos.z, k * 0.8, dt);
  cam.look.x = damp(cam.look.x, cam.tLook.x, k, dt); cam.look.y = damp(cam.look.y, cam.tLook.y, k, dt); cam.look.z = damp(cam.look.z, cam.tLook.z, k, dt);
  const t = S.clock;
  camera.position.copy(cam.pos); camera.position.y += Math.sin(t * 0.6) * 0.012; camera.position.x += Math.sin(t * 0.37) * 0.01;
  if (cam.shake > 0) { cam.shake = Math.max(0, cam.shake - dt * 1.6); const a = cam.shake * cam.shake * 0.12; camera.position.x += rand(-a, a); camera.position.y += rand(-a, a); }
  camera.lookAt(cam.look);
  if (window.__hmeCam) { camera.position.fromArray(window.__hmeCam.pos); camera.lookAt(V.fromArray(window.__hmeCam.look)); }
  scareK = Math.max(0, scareK - dt * 0.9); const f = baseFov - cam.fovK * 6 - Math.sin(Math.min(1, scareK) * Math.PI * 0.5) * 9 * (S.kids ? 0.3 : 1); if (Math.abs(camera.fov - f) > 0.01) { camera.fov = f; camera.updateProjectionMatrix(); }
}

// ---------------- world build ----------------
function applyQuality(qn, user = false) {
  S.quality = qn; if (user) { S.qualityUser = true; store.set('hme-quality', qn); }
  buildWorld(); buildComposer(); resize();
  document.querySelectorAll('#qualSeg button').forEach(b => b.classList.toggle('on', b.dataset.q === qn));
}
function disposeGroup(g) { g.traverse(o => { if (o.geometry) o.geometry.dispose(); }); }
let flybyGhost = null;
function buildWorld() {
  if (rooms) for (const k in rooms) { scene.remove(rooms[k].group); disposeGroup(rooms[k].group); }
  const q = QUALITY[qName()];
  renderer.shadowMap.enabled = !!q.shadows;
  rooms = buildRooms(scene, q, S.kids);
  for (const k in rooms) for (const m of rooms[k].hits) if (m.isMesh && rooms[k].moon && q.shadows) { m.castShadow = true; m.receiveShadow = true; }
  for (const k in rooms) rooms[k].group.traverse(o => { if (o.isMesh && q.shadows) { o.receiveShadow = true; if (!(o.material && o.material.transparent)) o.castShadow = o.geometry && o.geometry.type !== 'PlaneGeometry'; } });
  // clue sheets (language + variant dependent)
  for (const k in rooms) { const fl = rooms[k].flash; if (fl && q.shadows) { fl.castShadow = true; fl.shadow.mapSize.set(1024, 1024); const c = fl.shadow.camera; c.left = c.bottom = -10; c.right = c.top = 10; c.near = 0.5; c.far = 40; fl.shadow.bias = -0.0006; fl.shadow.normalBias = 0.02; } }
  refreshClueTextures();
  buildColliders();
  if (flybyGhost) scene.remove(flybyGhost);
  flybyGhost = P.makeGhostFigure(S.kids, 0.8); flybyGhost.visible = false; scene.add(flybyGhost);
  setRoom(S.room, true);
  applyVisuals();
}
function refreshClueTextures() {
  if (!rooms) return;
  const L = getLang();
  const seq = variant('candles').map(i => TX.SYMBOLS[i]);
  const lib = rooms.library; lib.bookPage.material.map = TX.flameBook(seq, T('bookT', null, L)); lib.bookPage.material.needsUpdate = true;
  const k = rooms.kitchen; k.recipePage.material.map = TX.recipeSheet(variant('brew').map(i => BOTTLE_COLS[i]), T('recipeT', null, L), T('crystalT', null, L)); k.recipePage.material.needsUpdate = true;
  const a = rooms.attic; a.sheetPage.material.map = TX.sheetMusic(variant('melody').map(i => [NOTE_COLS[i], PUZ.pitch[i]]), T('sheetT', null, L)); a.sheetPage.material.needsUpdate = true;
}
function setRoom(name, snap = false) {
  S.room = name; R = rooms[name];
  for (const k in rooms) rooms[k].group.visible = k === name;
  scene.fog.color.set(R.fogColor); scene.fog.density = R.fogDens; scene.background.set(R.fogColor).multiplyScalar(0.4);
  renderer.toneMappingExposure = R.exposure;
  cam.yaw = 0; cam.pitch = 0; S.spot = null;
  if (snap) snapCamera();
  const amb = { foyer: { rain: 0.75, clock_loop: 0.85, bubble_loop: 0 }, library: { rain: 0.7, clock_loop: 0.12, bubble_loop: 0 }, kitchen: { rain: 0.55, clock_loop: 0, bubble_loop: 0.9 }, attic: { rain: 1.0, clock_loop: 0, bubble_loop: 0 }, garden: { rain: 0.35, clock_loop: 0, bubble_loop: 0 } }[name];
  A.setAmbience(amb, name === 'garden' ? 5000 : name === 'attic' ? 3200 : 1800);
}

// ---------------- apply puzzle flags to the 3D scene (also used for resume/quality rebuild) ----------------
function applyVisuals() {
  const f = S.f, fo = rooms.foyer, li = rooms.library, ki = rooms.kitchen, at = rooms.attic;
  fo.matchesObj.visible = !f.matches; if (f.drawer) fo.drawer.position.z = 0.32;
  fo.candleItem.visible = !f.candleTaken;
  fo.libLeaf.rotation.y = f.libOpen ? -1.6 : 0;
  li.holders.forEach((h, i) => { if (i === 3) h.c.g.visible = !!f.candlePlaced; P.setLit(h.c, !!f.candlesDone || S.seq.includes(i)); });
  li.secret.rotation.y = f.shelfOpen ? 1.25 : 0; li.passGlow.intensity = f.shelfOpen ? 6 : 0;
  li.crystalObj.visible = false; if (f.crystal) li.twitch.position.x = 7.0;
  ki.keyObj.visible = !!f.brewDone && !f.keyTaken;
  fo.atticLeaf.rotation.y = f.atticOpen ? 1.7 : 0; fo.padlock.visible = !f.atticOpen; fo.padlock.position.y = 1.25; ki.kLeaf.rotation.y = f.kitOpen ? 1.5 : 0; fo.kitLeaf.rotation.y = f.kitOpen ? -1.5 : 0;
  at.ghost.visible = !!f.ghostMet; at.mbLid.rotation.x = -1.9;
  rooms.garden.ghost.visible = true;
  fo.frontLeaves.forEach((l, i) => { l.rotation.y = f.escaped ? (i ? -1.5 : 1.5) : 0; });
  renderInv(); updateHud();
}

// ---------------- tweens ----------------
const tweens = [];
function tween(dur, fn, done, delay = 0) { const tw = { t: -delay, dur, fn, done }; tweens.push(tw); return tw; }
const ease = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const after = (sec, fn) => tween(0.0001, () => {}, fn, sec);
function updateTweens(dt) {
  for (let i = tweens.length - 1; i >= 0; i--) { const tw = tweens[i]; tw.t += dt; if (tw.t < 0) continue; const k = Math.min(1, tw.t / tw.dur); tw.fn(ease(k), k); if (k >= 1) { tweens.splice(i, 1); tw.done && tw.done(); } }
}

// ---------------- UI helpers ----------------
let msgTimer = 0;
function say(txt, dur = 4.5, who) {
  const el = $('msg'); el.innerHTML = (who ? `<b>${who}</b>` : '') + `<span>${txt}</span>`; el.classList.add('show'); msgTimer = dur;
}
function toast(t) { const el = $('toast'); el.textContent = t; el.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(() => el.classList.remove('show'), 2200); }
function chapter(name) {
  const el = $('chapter'); el.querySelector('.ck').textContent = T('c_' + name); el.querySelector('.ct').textContent = T('r_' + name);
  el.className = ''; void el.offsetWidth; el.className = 'show';
}
function flash(color = 'rgba(200,215,255,0.85)', dur = 0.5) { const el = $('flash'); el.style.background = color; el.style.transition = 'none'; el.style.opacity = '1'; void el.offsetWidth; el.style.transition = `opacity ${dur}s ease-out`; el.style.opacity = '0'; }
function fadeTo(on, dur = 0.45) { const el = $('fade'); el.style.transition = `opacity ${dur}s ease`; el.style.opacity = on ? '1' : '0'; }
const ITEM_ICON = { matches: '🔥', candle: '🕯️', crystal: '💎', brassKey: '🗝️', silverKey: '🔑' };
function renderInv() {
  const el = $('inv'); el.innerHTML = '';
  for (const it of S.inv) { const b = document.createElement('button'); b.className = 'slot' + (S.sel === it ? ' sel' : ''); b.dataset.item = it; b.innerHTML = `<i>${ITEM_ICON[it]}</i><span>${T('i_' + it)}</span>`; b.onclick = (e) => { e.stopPropagation(); select(S.sel === it ? null : it); }; el.appendChild(b); }
  for (let i = S.inv.length; i < 5; i++) { const d = document.createElement('div'); d.className = 'slot empty'; el.appendChild(d); }
  $('btnDesel').classList.toggle('hidden', !S.sel); $('btnDesel').title = T('deselect');
  document.body.classList.toggle('holding', !!S.sel); updateContext(); updateCursor();
}
function select(it) { S.sel = it; A.sfx.ui(); renderInv(); }
function give(it) { if (!S.inv.includes(it)) S.inv.push(it); S.log.pickup++; A.sfx.pickup(); renderInv(); const s = document.querySelector(`.slot[data-item="${it}"]`); if (s) s.classList.add('new'); }
function take(it) { S.inv = S.inv.filter(x => x !== it); if (S.sel === it) S.sel = null; renderInv(); }
// item needed: kids auto-use; normal needs selection
let usedSel = false;
function using(it) { if (!S.inv.includes(it)) return false; if (S.sel === it) { usedSel = true; return true; } if (S.kids) return true; return false; }
function updateHud() {
  $('timer').textContent = fmtTime(S.time); $('hintsN').textContent = S.hintsUsed;
  $('starsHud').textContent = '⭐'.repeat(stars()) + '☆'.repeat(3 - stars());
  $('btnBack').classList.toggle('hidden', !S.spot || S.mode !== 'play');
  $('roomName').textContent = T('r_' + S.room);
  document.body.classList.toggle('spot', !!S.spot); renderNav(); updateContext();
}
// ---------------- room navigation buttons ----------------
function exits() {
  const f = S.f;
  return ({
    foyer: [{ dir: 'right', id: 'libDoor', to: 'library', open: !!f.libOpen }, { dir: 'left', id: 'kitchenDoor', to: 'kitchen', open: !!f.kitOpen }, { dir: 'up', id: 'atticDoor', to: 'attic', open: !!f.atticOpen }, { dir: 'back', id: 'frontDoor', label: 'l_frontDoor', open: !!f.silverKey }],
    library: [{ dir: 'back', id: 'toFoyer', to: 'foyer', open: true }].concat(f.shelfOpen ? [{ dir: 'left', id: 'secretDoor', to: 'kitchen', open: true }] : []),
    kitchen: [{ dir: 'back', id: 'toLibrary', to: 'library', open: true }, { dir: 'right', id: 'kDoor', to: 'foyer', open: true }],
    attic: f.melodyDone ? [] : [{ dir: 'back', id: 'toKitchen', to: 'kitchen', open: true }]
  })[S.room] || [];
}
let navKey = '';
function renderNav() {
  const el = $('nav'); const show = S.mode === 'play' && !WALK.on; el.classList.toggle('hidden', !show); if (!show) return;
  const ex = exits(); const key = S.room + ex.map(e => e.id + e.open).join() + getLang();
  if (key === navKey) return; navKey = key; el.innerHTML = '';
  for (const e of ex) { const b = document.createElement('button'); b.className = e.dir + (e.open ? '' : ' locked'); b.dataset.nav = e.id;
    const arrow = e.dir === 'left' ? '◀' : e.dir === 'right' ? '▶' : e.dir === 'up' ? '▲' : '▼'; const name = e.to ? T('n_' + e.to) : T(e.label);
    const txt = `<span>${name}${e.open ? '' : ' · 🔒'}</span>`; b.innerHTML = e.dir === 'right' ? txt + `<b>${arrow}</b>` : `<b>${arrow}</b>` + txt;
    b.onclick = ev => { ev.stopPropagation(); navTo(e.id); }; el.appendChild(b); }
}
function navTo(id) { if (S.mode !== 'play' || S.busy > 0) return false; S.log.nav = (S.log.nav || 0) + 1; if (S.spot) S.spot = null; return interact(id); }
// ---------------- context line + cursor ----------------
let idleT = 0;
function updateContext() {
  const el = $('selHint'); if (!el) return; let t = '';
  if (S.mode === 'play') {
    if (S.sel) t = hovered ? T('ctxUse', { x: T('i_' + S.sel), y: T('l_' + hovered) }) : T('useOn', { x: T('i_' + S.sel) });
    else if (hovered) t = WALK.on ? T(document.body.classList.contains('touch') ? 'xhTap' : 'xhUse', { x: T('l_' + hovered) }) : T('ctxClick', { x: T('l_' + hovered) });
    else if (idleT > 20) { const id = glintIds()[0]; if (id) t = T('ctxIdle', { x: T('l_' + id) }); }
    else if (S.time < 30 && !S.spot) t = WALK.on ? T(document.body.classList.contains('touch') ? 'ctxWalkT' : 'ctxWalk') : T(e_isMouse ? 'ctxStartM' : 'ctxTap');
  }
  if (el.textContent !== t) el.textContent = t;
}
const curCache = {};
function itemCursor(it) { if (!curCache[it]) curCache[it] = `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='17' fill='rgba(30,14,40,0.75)' stroke='%23ffb547' stroke-width='2'/><text x='20' y='27' font-size='20' text-anchor='middle'>${ITEM_ICON[it]}</text></svg>`).replace(/%2523/g, '%23')}") 20 20, pointer`; return curCache[it]; }
function updateCursor() { if (drag.active) return; canvas.style.cursor = S.sel ? itemCursor(S.sel) : hovered ? 'pointer' : 'grab'; }
function stars() { const h = S.hintsUsed; return S.kids ? (h <= 4 ? 3 : h <= 9 ? 2 : 1) : (h <= 2 ? 3 : h <= 6 ? 2 : 1); }

// ---------------- autosave ----------------
function save() {
  if (S.mode === 'menu' || S.f.escaped) return;
  store.set(SAVE_KEY, { v: 1, room: S.room === 'garden' ? 'foyer' : S.room, time: S.time, hintsUsed: S.hintsUsed, hintLvl: S.hintLvl, inv: S.inv, f: S.f, seq: S.seq, brew: S.brew, visited: S.visited, kids: S.kids, log: S.log, p: S.room === 'garden' ? null : { x: P1.x, y: P1.y, z: P1.z, yaw: cam.yaw }, at: Date.now() });
}
function loadSave() { const s = store.get(SAVE_KEY, null); return s && s.v === 1 ? s : null; }
function clearSave() { try { localStorage.removeItem(SAVE_KEY); } catch (e) {} }

// ---------------- hints ----------------
function goal() {
  const f = S.f;
  if (!f.libOpen) return 'code';
  if (!f.shelfOpen) { if (!f.matches) return 'matches'; if (!f.candlePlaced) return 'candle'; return 'candles'; }
  if (!f.brewDone) return f.crystal ? 'brew' : 'crystal';
  if (!f.keyTaken) return 'key';
  if (!f.atticOpen) return 'attic';
  if (!f.melodyDone) return 'melody';
  return 'front';
}
function hintText(g, lvl) {
  const sep = T('seqSep');
  const vars = {};
  if (g === 'candles') vars.seq = variant('candles').map(i => T('sym_' + TX.SYMBOLS[i])).join(sep);
  if (g === 'brew') vars.seq = variant('brew').map(i => T('col' + i)).join(sep);
  if (g === 'melody') vars.seq = variant('melody').map(i => T('n' + i)).join(sep);
  return T('h_' + g + lvl, vars);
}
function askHint() {
  if (S.mode !== 'play') return;
  const g = goal(); const cur = S.hintLvl[g] || 0; let lvl = cur;
  if (cur < 3) { lvl = cur + 1; S.hintLvl[g] = lvl; S.hintsUsed++; S.log.hint++; }
  const skull = S.room === 'kitchen';
  const who = skull ? '💀 ' + T('hintBy') : '👻 ' + T('hintByGhost');
  say(`${hintText(g, lvl)} <em>(${lvl}/3)</em>`, 7, who);
  if (skull) { A.sfx.skull(); talkT = 2.2; } else { A.sfx.ghostHint(); wispT = 3; }
  updateHud(); save();
  return { goal: g, lvl, text: hintText(g, lvl) };
}
let talkT = 0, wispT = 0;

// ---------------- interactions ----------------
function go(spot) { if (WALK.on) return; S.spot = spot; cam.yaw = 0; cam.pitch = 0; A.sfx.step(); updateHud(); }
function back() { if (S.spot) { S.spot = null; A.sfx.step(); updateHud(); } }
function wrong(msg) { S.log.wrong++; A.sfx.wrong(); if (msg) say(msg, 3.5); }
const ACT = {
  // ---- foyer
  drawer() {
    const f = S.f; const fo = rooms.foyer;
    if (!f.drawer) { f.drawer = 1; A.sfx.drawer(); tween(0.5, k => { fo.drawer.position.z = 0.02 + 0.3 * k; }); go('drawer'); }
    if (!f.matches) { after(0.55, () => { f.matches = 1; fo.matchesObj.visible = false; give('matches'); say(T('m_drawer')); save(); }); } else say(T('m_drawerEmpty'));
  },
  candleItem() { if (S.f.candleTaken) return; S.f.candleTaken = 1; rooms.foyer.candleItem.visible = false; give('candle'); say(T('m_candleItem')); save(); },
  clock() { go('clock'); A.sfx.creak(0.2); say(S.f.clockSeen ? T('m_clock2') : T('m_clock'), 5); S.f.clockSeen = 1; save(); },
  portraitLord() { go('portraitLord'); say(T('m_lord'), 5); rooms.foyer.eyes.forEach(e => { e.glint.visible = true; }); after(1.5, () => rooms.foyer.eyes.forEach(e => { e.glint.visible = false; })); A.sfx.whisper(0.3); },
  portraitLady() { go('portraitLady'); if (!S.f.ladyScared) { S.f.ladyScared = 1; after(0.65, jumpScare); save(); } else say(T('m_lady')); },
  portraitCat() { say(T('m_cat')); }, portraitShip() { say(T('m_ship')); },
  libDoor() { if (S.f.libOpen) { gotoRoom('library'); return; } go('libDoor'); A.sfx.locked(); say(T('m_libLocked')); after(0.5, openLock); },
  codeLock() { ACT.libDoor(); },
  frontDoor() {
    if (S.f.escaped) return;
    if (using('silverKey')) { escapeSequence(); return; }
    go('frontDoor'); A.sfx.locked(); say(S.inv.includes('silverKey') ? T('needItem') : T('m_front'));
  },
  stairs() { A.sfx.floor(); say(T('m_stairs')); },
  chandelier() { A.sfx.creak(0.45); chSwing = 1; say(T('m_chand'), 3); },
  // ---- library
  toFoyer() { gotoRoom('foyer'); },
  lectern() { go('lectern'); A.sfx.page(); say(T('m_lectern'), 6); S.f.bookSeen = 1; save(); },
  twitchBook() {
    if (S.f.crystal) { say(T('m_twitchEmpty')); return; }
    const li = rooms.library; go('twitchBook'); A.sfx.books();
    tween(0.6, k => { li.twitch.position.x = 7.3 - 0.3 * k; li.twitch.rotation.z = k * 0.25; }, () => { li.crystalObj.visible = true; A.sfx.sparkle && A.sfx.sparkle(); });
    after(1.2, () => { li.crystalObj.visible = false; S.f.crystal = 1; give('crystal'); say(T('m_twitch')); save(); });
  },
  globe() { A.sfx.rattle(); globeSpin = 6; say(T('m_globe'), 2.5); },
  flyBook() { A.sfx.books(); bookScare = 1.2; say(T('m_flyBook'), 2.5); },
  secretDoor() { if (S.f.shelfOpen) gotoRoom('kitchen'); else say(T('m_shelf'), 2.5); },
  holder(i) {
    const li = rooms.library, h = li.holders[i], f = S.f;
    if (S.spot !== 'mantel') go('mantel');
    if (f.candlesDone) return;
    if (i === 3 && !f.candlePlaced) {
      if (using('candle')) { f.candlePlaced = 1; take('candle'); h.c.g.visible = true; h.c.g.position.y = 0.5; tween(0.4, k => { h.c.g.position.y = 0.5 - 0.3 * k; }); A.sfx.floor(); say(T('m_placed')); save(); }
      else if (S.inv.includes('candle')) say(T('needItem')); else say(T('m_holderEmpty'));
      return;
    }
    if (h.c.lit) return;
    if (!using('matches')) { say(S.inv.includes('matches') ? T('needItem') : T('m_needLight')); return; }
    const seqWant = variant('candles');
    if (!seqWant.includes(i) && S.kids) { wrong(T('m_blown')); return; }
    A.sfx.match(); after(0.25, () => A.sfx.ignite()); P.setLit(h.c, true); S.seq.push(i);
    const ok = S.seq.every((v, k) => v === seqWant[k]);
    if (!ok) {
      after(0.7, () => { gust = 1.4; A.sfx.blowOut(); li.holders.forEach(x => P.setLit(x.c, false)); S.seq = []; wrong(T('m_blown')); save(); });
    } else if (S.seq.length === seqWant.length) { f.candlesDone = 1; after(0.6, openShelf); }
    else say(T('m_lit'), 2); save();
  },
  // ---- kitchen
  toLibrary() { gotoRoom('library'); },
  recipe() { go('recipe'); A.sfx.page(); say(T('m_recipe'), 6); S.f.recipeSeen = 1; save(); },
  cauldron() {
    const f = S.f;
    if (f.brewDone) { if (!f.keyTaken) ACT.brassKey(); return; }
    if (using('crystal')) {
      const want = variant('brew');
      if (S.brew.length === want.length && S.brew.every((v, k) => v === want[k])) { take('crystal'); brewSuccess(); }
      else { if (S.brew.length < want.length) say(T('m_crystalFirst')); else brewFail(); }
      return;
    }
    go('cauldron'); A.sfx.bubble(); say(S.inv.includes('crystal') && S.brew.length ? T('needItem') : T('m_cauldron'));
  },
  bottle(i) {
    const f = S.f; if (f.brewDone) return; const ki = rooms.kitchen; const b = ki.bottles[i];
    if (S.spot !== 'cauldron' && S.spot !== 'shelf') go('shelf');
    tween(0.7, (k, raw) => { b.rotation.z = Math.sin(raw * Math.PI) * 0.9; b.position.y = 1.33 + Math.sin(raw * Math.PI) * 0.15; });
    after(0.35, () => { A.sfx.splash(); ki.liquid.uniforms.col.value.set(BOTTLE_COLS[i]); splashT = 1; });
    S.brew.push(i); const want = variant('brew');
    if (S.brew.length > want.length || S.brew[S.brew.length - 1] !== want[S.brew.length - 1]) { after(0.9, brewFail); }
    else say(T('m_pour'), 2);
    save();
  },
  skull() { go('skull'); askHint(); },
  brassKey() { if (!S.f.brewDone || S.f.keyTaken) return; S.f.keyTaken = 1; rooms.kitchen.keyObj.visible = false; A.sfx.keys(); give('brassKey'); say(T('got', { x: T('i_brassKey') })); save(); },
  atticDoor() {
    const f = S.f; if (f.atticOpen) { gotoRoom('attic'); return; }
    go('atticDoor');
    if (using('brassKey')) { take('brassKey'); f.atticOpen = 1; A.sfx.lock(); after(0.4, () => A.sfx.door()); const ki = rooms.foyer; tween(0.4, k => { ki.padlock.position.y = 1.25 - k * 1.1; ki.padlock.rotation.z = k * 2; }, () => { ki.padlock.visible = false; });
      tween(1.4, k => { ki.atticLeaf.rotation.y = 1.7 * k; }, null, 0.5); say(T('m_atticOpen')); A.sfx.solve(); save(); if (!WALK.on) after(2.2, () => gotoRoom('attic')); }
    else { A.sfx.locked(); say(S.inv.includes('brassKey') ? T('needItem') : T('m_attic')); }
  },
  kitchenDoor() { if (S.f.kitOpen) { gotoRoom('kitchen'); return; } go('kitchenDoor'); A.sfx.locked(); say(T('m_kitLocked')); },
  kDoor() { if (!S.f.kitOpen) { S.f.kitOpen = 1; A.sfx.lock(); after(0.3, () => A.sfx.door()); const ki = rooms.kitchen, fo = rooms.foyer; tween(1.0, k => { ki.kLeaf.rotation.y = 1.5 * k; fo.kitLeaf.rotation.y = -1.5 * k; }); say(T('m_unbolt')); save(); if (WALK.on) return; }
    gotoRoom('foyer'); },
  // ---- attic
  toKitchen() { if (!S.f.melodyDone) gotoRoom('kitchen'); },
  sheet() { go('sheet'); A.sfx.page(); say(T('m_sheet'), 5); },
  musicbox() { go('musicbox'); say(T('m_musicbox'), 3); },
  rocker() { rockerK = 2.5; A.sfx.creak(0.3); say(T('m_rocker'), 3); },
  ghost() { if (S.f.melodyDone) return; say(T('m_ghost'), 2); after(1.0, playMelody); },
  mkey(i) {
    if (S.f.melodyDone || melodyPlaying) return;
    if (S.spot !== 'musicbox') go('musicbox');
    A.note(i); pressKey(i); S.mel.push(i);
    const want = variant('melody'); const ok = S.mel.every((v, k) => v === want[k]);
    if (!ok) { S.mel = []; S.log.wrong++; after(0.6, () => { say(T('m_melodyWrong'), 3); A.sfx.whisper(0.25); }); after(2.0, playMelody); }
    else if (S.mel.length === want.length) { S.mel = []; after(0.7, melodySuccess); }
  }
};
function interact(id) {
  if (S.mode !== 'play' || S.busy > 0) return false;
  let m = id.match(/^(holder|bottle|mkey)(\d)$/);
  const held = S.sel; usedSel = false; idleT = 0;
  if (m) { ACT[m[1]](+m[2]); }
  else if (ACT[id]) ACT[id]();
  else return false;
  // feedback for using an item on the wrong thing (item goes back to the bag)
  if (held && !usedSel && S.inv.includes(held) && S.sel === held && !/^(bottle|mkey)/.test(id)) { S.log.wrongUse = (S.log.wrongUse || 0) + 1; toast('🎒 ' + T('i_' + held) + ' — ' + T('wrongUse')); A.sfx.locked && A.sfx.locked(); select(null); }
  updateHud(); return true;
}

// ---------------- puzzle effects ----------------
let chSwing = 0, gust = 0, globeSpin = 0, bookScare = 0, rockerK = 0, splashT = 0, melodyPlaying = false;
function openLock() { $('lockUI').classList.remove('hidden'); S.lockDigits = [0, 0, 0, 0]; renderLock(); }
function renderLock() { document.querySelectorAll('#lockUI .wheel b').forEach((b, i) => { b.textContent = S.lockDigits[i]; }); }
function lockTry() {
  const code = S.lockDigits.join('');
  if (code === PUZ.code) {
    $('lockUI').classList.add('hidden'); S.f.libOpen = 1; A.sfx.lock(); say(T('m_codeRight')); A.sfx.solve(); save();
    const fo = rooms.foyer; after(0.5, () => A.sfx.door()); tween(1.4, k => { fo.libLeaf.rotation.y = -1.6 * k; }, null, 0.5);
    after(2.0, () => gotoRoom('library'));
  } else { $('lockUI').classList.add('shake'); setTimeout(() => $('lockUI').classList.remove('shake'), 400); wrong(T('m_codeWrong')); }
  return code === PUZ.code;
}
function openShelf() {
  const li = rooms.library; S.f.shelfOpen = 1; save();
  S.busy++; go('secretDoor'); A.sfx.grind(); cam.shake = 0.7; say(T('m_shelfOpen'), 5); A.sfx.bigSolve();
  tween(3.0, k => { li.secret.rotation.y = 1.25 * k; li.passGlow.intensity = 6 * k; }, () => { S.busy--; if (!S.f.flyLib) { S.f.flyLib = 1; flyby(); } });
}
function brewFail() { const ki = rooms.kitchen; S.brew = []; A.sfx.fizzle(); cam.shake = 0.35; ki.liquid.uniforms.col.value.set(0x30ff70); splashT = 2; wrong(T('m_brewWrong')); save(); }
function brewSuccess() {
  const ki = rooms.kitchen; S.f.brewDone = 1; S.brew = []; save(); S.busy++;
  go('cauldron'); A.sfx.brewDone(); say(T('m_brewDone'), 5); ki.liquid.uniforms.col.value.set(0x9ad0ff); splashT = 3; cam.shake = 0.4;
  ki.keyObj.visible = true; ki.keyObj.position.y = 1.2; tween(2.2, k => { ki.keyObj.position.y = 1.2 + 1.3 * k; ki.keyObj.rotation.y = k * 8; }, () => { S.busy--; });
}
function pressKey(i) { const k = rooms.attic.mkeys[i]; tween(0.3, (e, raw) => { k.position.y = 0.12 - Math.sin(raw * Math.PI) * 0.02; k.children[0].material.emissiveIntensity = 0.5 + Math.sin(raw * Math.PI) * 2.5; }); noteFx(i); }
function noteFx(i) { const at = rooms.attic; const s = P.sprite(P.glowT(), 0.3, 0, 0, 0, null, { color: new THREE.Color(NOTE_COLS[i]), opacity: 0.9 }); at.mkeys[i].getWorldPosition(s.position); scene.add(s); tween(1.4, k => { s.position.y += 0.012; s.material.opacity = 0.9 * (1 - k); s.scale.setScalar(0.3 + k * 0.4); }, () => { scene.remove(s); }); }
function playMelody() {
  if (melodyPlaying || S.f.melodyDone) return; melodyPlaying = true; say(T('m_listen'), 3);
  const want = variant('melody'); const gap = S.kids ? 0.75 : 0.6;
  want.forEach((n, k) => after(0.5 + k * gap, () => { A.note(n); pressKey(n); ghostHum = 0.6; }));
  after(0.6 + want.length * gap, () => { melodyPlaying = false; say(T('m_yourTurn'), 3); if (S.spot !== 'musicbox') go('musicbox'); });
}
let ghostHum = 0;
function melodySuccess() {
  const at = rooms.attic, gh = at.ghost; S.f.melodyDone = 1; S.busy++; save();
  A.sfx.happyGhost(); A.sfx.bigSolve(); say(T('m_melodyDone'), 6); setCine(true);
  cineCam = { pos: V.set(0, 1.7, -0.6).add(at.offset).clone(), look: V2.set(0, 1.6, -4).add(at.offset).clone(), k: 2 };
  tween(2.5, k => { gh.userData.halo.material.opacity = 0.3 + k * 0.25; gh.userData.light.intensity = 3 + k * 4; gh.rotation.y = k * Math.PI * 2; });
  const key = P.mesh(new THREE.TorusGeometry(0.09, 0.022, 8, 20), P.metal(0x8a92a4, 0.5)); const kg = new THREE.Group(); kg.add(key); P.cyl(0.016, 0.016, 0.32, P.metal(0x8a92a4, 0.5), 0, -0.2, 0, kg, 6); P.sprite(P.coldT(), 0.5, 0, -0.1, 0, kg, { opacity: 0.4 });
  kg.position.set(0, 2.4, -3.6).add(at.offset); scene.add(kg);
  tween(2.4, k => { kg.position.set(0, 2.4 - k * 0.9, -3.6 + k * 2.6).add(at.offset); kg.rotation.y = k * 9; }, () => { scene.remove(kg); give('silverKey'); S.f.silverKey = 1; say(T('m_ghostKey'), 4); save(); }, 1.2);
  after(6.2, () => { cineCam = null; setCine(false); S.busy--; gotoRoom('foyer', 'frontDoor'); });
}
function escapeSequence() {
  const fo = rooms.foyer; S.f.escaped = 1; take('silverKey'); S.busy++; S.mode = 'cine'; clearSave();
  A.sfx.lock(); say(T('m_frontKey'), 4); setCine(true); A.setMood('calm');
  cineCam = { pos: V.set(0, 1.8, 2.6).add(fo.offset).clone(), look: V2.set(0, 1.9, 6).add(fo.offset).clone(), k: 1.5 };
  after(0.5, () => { A.sfx.escape(); flash('rgba(190,205,255,0.9)', 1.6); });
  tween(2.2, k => { fo.frontLeaves[0].rotation.y = 1.5 * k; fo.frontLeaves[1].rotation.y = -1.5 * k; }, null, 0.5);
  after(1.6, () => { cineCam = { pos: V.set(0, 1.8, 6.5).add(fo.offset).clone(), look: V2.set(0, 1.8, 12).add(fo.offset).clone(), k: 1.2 }; });
  after(2.8, () => fadeTo(true, 0.5));
  after(3.4, () => {
    setRoom('garden'); const gd = rooms.garden; chapter('garden');
    cam.pos.set(0, 1.8, 1.5).add(gd.offset); cam.look.set(0, 1.9, 10).add(gd.offset);
    cineCam = { pos: V.set(0, 2.0, 7).add(gd.offset).clone(), look: V2.set(1, 3, 30).add(gd.offset).clone(), k: 0.9 };
    fadeTo(false, 0.8); say(T('escapeLine'), 4);
  });
  after(7.0, () => { const gd = rooms.garden; cineCam = { pos: V.set(1.5, 2.6, 15).add(gd.offset).clone(), look: V2.set(0, 6.5, 0).add(gd.offset).clone(), k: 0.8 }; });
  after(10.0, () => { S.busy--; showEnd(); });
}
function openRoomFx(name) {
  if (name === 'kitchen' && !S.f.flyKitchen) { S.f.flyKitchen = 1; after(1.4, flyby); }
  if (name === 'attic' && !S.f.ghostMet) after(1.0, ghostIntro);
}
function gotoRoom(name, spot) {
  if (S.busy > 1 && name !== 'foyer') return;
  S.busy++; A.sfx.door(); fadeTo(true, WALK.on ? 0.3 : 0.45); cam.fovK = WALK.on ? 0 : 1;
  after(WALK.on ? 0.32 : 0.5, () => {
    const from = S.room; $('chapter').className = ''; setRoom(name); cam.fovK = 0; placePlayer(SPAWN[from + '>' + name]);
    V.copy(R.view.pos).add(R.offset); if (!WALK.on) cam.pos.copy(V).addScaledVector(dirOf(R.view.yaw, 0, V2), -1.6); viewTargets(); if (WALK.on) cam.pos.copy(cam.tPos); cam.look.copy(cam.tLook);
    if (spot && !WALK.on) S.spot = spot; else if (spot === 'frontDoor') placePlayer([0, 0, 0.8, Math.PI]);
    fadeTo(false, 0.7);
    if (!S.visited[name]) { S.visited[name] = 1; chapter(name); openRoomFx(name); }
    S.busy--; save(); updateHud();
  });
}
function ghostIntro() {
  const at = rooms.attic, gh = at.ghost; S.f.ghostMet = 1; save(); S.busy++;
  gh.visible = true; gh.userData.mat.uniforms.op.value = 0; A.sfx.ghost(); setCine(true); A.setMood('tense');
  cineCam = { pos: V.set(0, 1.65, 0.4).add(at.offset).clone(), look: V2.set(0, 1.5, -4).add(at.offset).clone(), k: 1.6 };
  tween(2.0, k => { gh.userData.mat.uniforms.op.value = k; gh.position.y = 0.6 + k * 0.8; });
  after(1.6, () => say(T('m_ghostIntro'), 8, '👻 Wisp'));
  after(5.0, () => { cineCam = null; setCine(false); A.setMood('main'); S.busy--; playMelody(); });
}
function setCine(on) { document.body.classList.toggle('cine', on); }
// ---------------- jump scares / cute surprises ----------------
function jumpScare() {
  const fo = rooms.foyer, lady = fo.lady, pic = lady.userData.pic;
  if (S.kids) {
    S.log.cute++; pic.material.map = TX.portrait('ladyWink'); pic.material.needsUpdate = true; A.sfx.scare(); say(T('m_scareKids'), 4);
    const bat = fo.peekBat; tween(0.5, k => { bat.scale.setScalar(Math.max(0.001, k * 2.2)); bat.position.z = 2.4 - k * 0.0; bat.position.x = 8.6 - k * 0.5; bat.position.y = 3.0 + k * 1.1; });
    batWave = 3.2; after(3.4, () => { tween(0.4, k => { bat.scale.setScalar(Math.max(0.001, 2.2 * (1 - k))); }); pic.material.map = TX.portrait('lady'); pic.material.needsUpdate = true; });
    return;
  }
  S.log.scare++; pic.material.map = TX.portrait('ladyScream'); pic.material.needsUpdate = true;
  A.sfx.scare(); A.duck(0.2, 1.5); cam.shake = 1.3; scareK = 1.4; lightning(true); flash('radial-gradient(circle, rgba(255,230,230,0.9), rgba(120,0,20,0.85))', 0.9); $('scare').classList.add('on');
  const x0 = lady.position.x; tween(0.18, k => { lady.position.x = x0 - 0.9 * k; lady.scale.setScalar(1 + 0.35 * k); }, () => tween(0.9, k => { lady.position.x = x0 - 0.9 * (1 - k); lady.scale.setScalar(1.35 - 0.35 * k); }, null, 0.5));
  after(1.4, () => { $('scare').classList.remove('on'); pic.material.map = TX.portrait('lady'); pic.material.needsUpdate = true; say(T('m_lady')); });
}
let batWave = 0, flyT = -1;
function flyby() {
  if (!flybyGhost) return; S.log.flyby++;
  flybyGhost.visible = true; flyT = 0; flybyGhost.userData.mat.uniforms.op.value = 1;
  if (S.kids) { S.log.cute++; say(T('m_flybyKids'), 4); } else { cam.shake = 0.7; scareK = Math.max(scareK, 0.8); }
  A.sfx.flyby();
}
function updateFlyby(dt) {
  if (flyT < 0) return; flyT += dt; const dur = S.kids ? 4.0 : 1.3; const k = flyT / dur;
  if (k >= 1) { flyT = -1; flybyGhost.visible = false; return; }
  camera.getWorldDirection(V); const right = V2.crossVectors(V, camera.up).normalize();
  const d = S.kids ? 2.6 : 1.6; const x = lerp(-3.2, 3.2, k) * (S.kids ? 0.8 : 1.2);
  flybyGhost.position.copy(camera.position).addScaledVector(V, d).addScaledVector(right, x); flybyGhost.position.y += (S.kids ? -0.9 + Math.sin(k * Math.PI) * 0.3 : -0.6 + Math.sin(k * Math.PI) * 0.5);
  flybyGhost.lookAt(camera.position); flybyGhost.rotation.z = S.kids ? Math.sin(flyT * 4) * 0.2 : -0.5;
  flybyGhost.userData.mat.uniforms.op.value = Math.sin(k * Math.PI) * (S.kids ? 1 : 1.2);
  if (S.kids) flybyGhost.userData.arms[1].rotation.z = 2.2 + Math.sin(flyT * 9) * 0.5;
}

// ---------------- lightning ----------------
const L = { next: 2.5, t: -1, near: false, lvl: 0 };
function lightning(near = Math.random() < 0.35) { L.t = 0; L.near = near; S.log.lightning++; A.sfx.thunder(near); }
function updateLightning(dt) {
  L.next -= dt; if (L.next <= 0 && S.mode !== 'end') { lightning(); L.next = Math.random() < 0.3 ? rand(0.5, 0.9) : rand(9, 20); }
  let v = 0; if (L.t >= 0) { L.t += dt; const t = L.t; v = (t < 0.08 ? 1 : t < 0.16 ? 0.2 : t < 0.26 ? 0.85 : Math.max(0, 0.85 - (t - 0.26) * 3)) * (L.near ? 1.4 : 0.8); if (t > 0.6) L.t = -1; }
  L.lvl = v;
  if (R.flash) R.flash.intensity = v * 4.2;
  const wk = 1.15 + v * 3; for (const w of R.windows) w.material.color.setRGB(wk, wk, wk * 1.15);
  for (const r of R.rays) r.m.opacity = r.base * (1 + v * 2.5) * (0.85 + 0.15 * Math.sin(S.clock * 0.7 + r.ph));
  if (R.hemi) R.hemi.intensity = (R.hemi.userData.base ?? (R.hemi.userData.base = R.hemi.intensity)) * (1 + v * 0.8);
}

// ---------------- examine focus: no glare on close-ups ----------------
// While a close-up is open, bloom + exposure ease down and glows / lights / light shafts near the examined object are dimmed,
// so paper, ink and colours stay readable. Values are restored every frame before the regular animation writes them.
const FOCUS = { f: 0, saved: [], cache: new WeakMap() };
function focusRestore() { for (const [o, k, v] of FOCUS.saved) o[k] = v; FOCUS.saved.length = 0; }
function focusScale(o, k, m) { FOCUS.saved.push([o, k, o[k]]); o[k] *= m; }
function focusApply(dt) {
  const want = S.spot && R.spots[S.spot] && !cineCam ? 1 : 0;
  FOCUS.f += (want - FOCUS.f) * Math.min(1, dt * 5); if (FOCUS.f < 0.002) FOCUS.f = 0;
  const f = FOCUS.f;
  if (bloom) bloom.strength = 0.68 * QUALITY[qName()].bloom * (1 - 0.8 * f);
  renderer.toneMappingExposure = R.exposure * (1 - 0.14 * f);
  if (!f) return;
  let c = FOCUS.cache.get(R); if (!c) { c = { sprites: [], lights: [] }; R.group.traverse(o => { if (o.isSprite) c.sprites.push(o); else if (o.isPointLight || o.isSpotLight) c.lights.push(o); }); FOCUS.cache.set(R, c); }
  const sp = R.spots[S.spot] || R.spots[Object.keys(R.spots)[0]]; const tgt = V2.copy(sp.look).add(R.offset), W = new THREE.Vector3();
  const near = (o, r0, r1) => { o.getWorldPosition(W); return f * clamp(1 - (W.distanceTo(tgt) - r0) / (r1 - r0), 0, 1); };
  for (const o of c.sprites) { if (!o.visible) continue; const k = near(o, 0.9, 3.2); if (k > 0) focusScale(o.material, 'opacity', 1 - 0.85 * k); }
  for (const l of c.lights) { const k = near(l, 1.2, 4.0); if (k > 0) focusScale(l, 'intensity', 1 - 0.6 * k); }
  for (const r of R.rays) focusScale(r.m, 'opacity', 1 - 0.8 * f);
  for (const fg of R.fog) if (fg.p.material && fg.p.material.opacity !== undefined) focusScale(fg.p.material, 'opacity', 1 - 0.6 * f);
  if (R.dust && f > 0.5) { FOCUS.saved.push([R.dust, 'visible', R.dust.visible]); R.dust.visible = false; }
}

// ---------------- ambient animation ----------------
function animate(dt) {
  const t = S.clock;
  for (const c of R.candles) P.flicker(c, t);
  for (const f of R.flicker) f.l.intensity = f.base * (1 - f.k * 0.5 + f.k * 0.5 * (Math.sin(t * 9 + f.ph) * Math.sin(t * 5.7 + f.ph * 1.3) * 0.5 + 0.5 + 0.2 * Math.sin(t * 23 + f.ph)));
  P.animateCurtains(R, t, gust); gust = Math.max(0, gust - dt * 0.8);
  for (const d of R.drifters) { d.t += dt; const k = (d.t % d.period) / 5; const on = k < 1; d.s.material.opacity = on ? Math.sin(k * Math.PI) * 0.8 : 0; if (on) { d.s.position.x = lerp(-d.w * 0.8, d.w * 0.8, k); d.s.position.y = Math.sin(k * 6) * 0.15; } }
  for (const f of R.fog) { f.p.rotation.z += f.sp * dt; }
  if (R.dust) R.dust.material.uniforms.t.value = t;
  if (R.chand) { chSwing = Math.max(0, chSwing - dt * 0.15); R.chand.rotation.z = Math.sin(t * 0.9) * (0.025 + chSwing * 0.08); R.chand.rotation.x = Math.sin(t * 0.7 + 1) * (0.015 + chSwing * 0.05); if (R.chLight) R.chLight.position.x = R.chand.position.x + R.chand.rotation.z * 2; }
  if (R.fire) for (const f of R.fire) { const s = 0.5 + 0.35 * Math.abs(Math.sin(t * 7 + f.userData.ph)); f.scale.set(s * 0.6, s * 1.1, 1); f.position.x = f.userData.x0 + Math.sin(t * 3 + f.userData.ph) * 0.05; }
  const name = S.room;
  if (name === 'foyer') {
    const fo = R; fo.pend.rotation.z = Math.sin(t * Math.PI) * 0.18;
    // portrait eyes follow the camera
    for (const e of fo.eyes) { e.eg.getWorldPosition(V); V2.copy(camera.position).sub(V); e.eg.parent.worldToLocal(V2.add(V)); V2.sub(e.eg.position).normalize(); e.pupil.position.set(V2.x * 0.025, V2.y * 0.02, 0.016); }
    if (!S.f.drawer) { const r = (t % 6.5) < 0.6; fo.drawer.position.x = r ? Math.sin(t * 60) * 0.008 : 0; if (r && !fo._rat && S.mode === 'play') { A.sfx.rattle(); } fo._rat = r; }
    if (batWave > 0) { batWave -= dt; const wg = fo.peekBat.userData.wings; wg[0].rotation.z = Math.sin(t * 14) * 0.6; wg[1].rotation.z = -0.3 + Math.sin(t * 9) * 1.0; }
  } else if (name === 'library') {
    if (!S.f.crystal) { const k = (t % 4.0) < 0.5; R.twitch.position.x = 7.3 - (k ? Math.abs(Math.sin(t * 40)) * 0.06 : 0); R.twitch.rotation.x = k ? Math.sin(t * 50) * 0.05 : 0; }
    for (const b of R.flyBooks) { const a = t * b.sp + b.ph; b.b.position.set(b.cx + Math.cos(a) * b.r, b.y + Math.sin(t * 1.3 + b.ph) * 0.3 + bookScare * 0.5, b.cz + Math.sin(a) * b.r); b.b.rotation.y = -a + (b.sp > 0 ? 0 : Math.PI); const fl = Math.sin(t * (6 + bookScare * 8) + b.ph) * 0.7; b.halves[0].rotation.z = 0.5 + fl; b.halves[1].rotation.z = -0.5 - fl; }
    bookScare = Math.max(0, bookScare - dt * 0.5);
    if (globeSpin > 0) { R.globe.rotation.y += globeSpin * dt; globeSpin = Math.max(0, globeSpin - dt * 2); } else R.globe.rotation.y += dt * 0.05;
  } else if (name === 'kitchen') {
    R.liquid.uniforms.t.value = t;
    if (splashT > 0) splashT -= dt;
    const target = new THREE.Color(S.f.brewDone ? 0x9ad0ff : 0x30ff70); if (splashT <= 0) R.liquid.uniforms.col.value.lerp(target, 1 - Math.exp(-dt * 0.8));
    R.cauldLight.color.copy(R.liquid.uniforms.col.value);
    for (const b of R.bubbles) { const u = b.userData; u.t += dt * u.sp * (1 + (splashT > 0 ? 2 : 0)); if (u.t > 1) { u.t = 0; u.x = rand(-0.45, 0.45); u.z = rand(-0.45, 0.45); } b.position.set(u.x, 1.5 + u.t * 0.08, u.z); b.scale.setScalar(u.s * Math.sin(u.t * Math.PI)); b.material.color.copy(R.liquid.uniforms.col.value); b.material.emissive.copy(R.liquid.uniforms.col.value); }
    for (const s of R.steam) { const u = s.userData; u.t = (u.t + dt * 0.12) % 1; s.position.set(Math.sin(u.t * 5 + s.id) * 0.3, 1.7 + u.t * 2.2, Math.cos(u.t * 4) * 0.2); s.material.opacity = Math.sin(u.t * Math.PI) * 0.28; s.scale.setScalar(1 + u.t * 1.8); s.material.color.copy(R.liquid.uniforms.col.value); }
    if (talkT > 0) { talkT -= dt; R.jaw.rotation.x = Math.abs(Math.sin(t * 16)) * 0.35; R.skullEyes.forEach(e => e.material.opacity = 1); } else { R.jaw.rotation.x = damp(R.jaw.rotation.x, 0, 8, dt); R.skullEyes.forEach(e => e.material.opacity = 0.45 + 0.2 * Math.sin(t * 2)); }
    if (R.keyObj.visible && S.f.brewDone) { R.keyObj.rotation.y += dt * 1.5; R.keyObj.position.y = 2.5 + Math.sin(t * 2) * 0.08; }
  } else if (name === 'attic') {
    rockerK = Math.max(0, rockerK - dt * 0.3); R.rocker.rotation.x = Math.sin(t * 1.4) * (0.06 + rockerK * 0.06);
    R.lantern.rotation.z = Math.sin(t * 0.8) * 0.06; R.drum.rotation.x += dt * (melodyPlaying ? 3 : 0.3); R.dancer.rotation.y += dt * (melodyPlaying ? 3 : 0.5);
    const gh = R.ghost; if (gh.visible) { gh.userData.mat.uniforms.t.value = t; if (!cineCam || S.f.melodyDone) gh.position.y = 1.4 + Math.sin(t * 1.2) * 0.12; gh.userData.arms[0].rotation.z = -0.35 - Math.sin(t * 1.5) * 0.1; gh.userData.arms[1].rotation.z = 0.35 + Math.sin(t * 1.5) * 0.1 + ghostHum; ghostHum = Math.max(0, ghostHum - dt); gh.lookAt(V.copy(camera.position).setY(gh.getWorldPosition(V2).y)); gh.rotation.x = 0; }
  } else if (name === 'garden') {
    const gh = R.ghost; gh.userData.mat.uniforms.t.value = t; gh.position.y = 13.3 + Math.sin(t * 1.2) * 0.12; gh.userData.arms[1].rotation.z = 2.4 + Math.sin(t * 5) * 0.5;
  }
  for (const f of R.anim) f(t, dt);
  // interactable glints (help on touch devices / kids)
  updateGlints(t);
}
// ---------------- glints over unsolved interactables ----------------
const glints = [];
function glintIds() {
  const f = S.f; const ids = [];
  if (S.room === 'foyer') { if (!f.matches) ids.push('drawer'); if (!f.candleTaken) ids.push('candleItem'); if (!f.clockSeen) ids.push('clock'); if (!f.libOpen) ids.push('codeLock'); else ids.push('libDoor'); if (f.silverKey && !f.escaped) ids.push('frontDoor'); if (f.keyTaken && !f.atticOpen) ids.push('atticDoor'); }
  if (S.room === 'library') { if (!f.bookSeen) ids.push('lectern'); if (!f.crystal) ids.push('twitchBook'); if (!f.candlesDone) ids.push('holder3'); if (f.shelfOpen) ids.push('secretDoor'); }
  if (S.room === 'kitchen') { if (!f.recipeSeen) ids.push('recipe'); ids.push('skull'); if (!f.brewDone) ids.push('cauldron'); if (f.brewDone && !f.keyTaken) ids.push('brassKey'); if (f.keyTaken && !f.kitOpen) ids.push('kDoor'); }
  if (S.room === 'attic') { if (!f.melodyDone) ids.push('musicbox', 'sheet'); }
  return ids;
}
function updateGlints(t) {
  const ids = S.mode === 'play' ? glintIds() : [];
  while (glints.length < 8) { const s = P.sprite(P.glowT(), 0.25, 0, 0, 0, scene, { color: 0xffe8c0, opacity: 0, depthTest: false }); s.renderOrder = 10; glints.push(s); }
  glints.forEach((s, i) => {
    const id = ids[i]; const o = id && R.items[id];
    if (!o) { s.visible = false; return; }
    s.visible = true; o.getWorldPosition(V); if (o.userData.glintY) V.y += o.userData.glintY;
    const ph = (t * 0.8 + i * 0.37) % 2.4; const a = ph < 0.6 ? Math.sin(ph / 0.6 * Math.PI) : 0;
    const idl = idleT > 20 ? 0.5 + 0.5 * Math.sin(t * 5 + i) : 0; const base = 0.32 + 0.1 * Math.sin(t * 2.2 + i * 1.7);
    s.position.copy(V); s.material.opacity = Math.min(1, base + a * (S.kids ? 0.6 : 0.45) + idl * 0.5); s.scale.setScalar(0.16 + a * 0.2 + idl * 0.35);
  });
}


// ---------------- first-person walking (WASD + mouse look / joystick + swipe) ----------------
const WALK = { on: store.get('hme-walk', true), sens: store.get('hme-sens', 1), invY: store.get('hme-invy', false), bob: store.get('hme-bob', true) };
const P1 = { x: 0, y: 0, z: 0, bobT: 0, bobY: 0, bobX: 0, stepD: 0, mv: 0, lastLock: 0, lockT: 0, cross: null };
const EYE = 1.62, RAD = 0.32, REACH = 3.8;
const keys = new Set(); const joy = { id: null, x0: 0, y0: 0, dx: 0, dy: 0 };
const TOPY = 12 * 0.34;
// spawn points (local room coords: x, y, z, yaw) when walking from one room into another
const SPAWN = {
  'foyer>library': [0, 0, 4.4, 0], 'library>foyer': [7.5, 0, -3, Math.PI / 2], 'library>kitchen': [0, 0, 3.4, 0], 'kitchen>library': [-4.7, 0, -6.5, Math.PI],
  'kitchen>foyer': [-7.6, 0, 3.0, -Math.PI / 2], 'foyer>kitchen': [5.3, 0, -5.6, Math.PI], 'foyer>attic': [0, 0, 3.0, 0], 'attic>foyer': [-3.7, TOPY, -8.9, Math.PI],
  'kitchen>attic': [0, 0, 3.0, 0], 'attic>kitchen': [5.3, 0, -5.6, Math.PI]
};
// door zones: walk in → next room (or rattle + "Locked")
const PORTALS = {
  foyer: [{ x0: 8.0, x1: 9.5, z0: -3.9, z1: -2.1, to: 'library', open: () => S.f.libOpen, door: 'libDoor' },
    { x0: -9.5, x1: -8.05, z0: 2.2, z1: 3.8, to: 'kitchen', open: () => S.f.kitOpen, door: 'kitchenDoor' },
    { x0: -4.35, x1: -3.05, z0: -10.5, z1: -9.42, y0: 3, to: 'attic', open: () => S.f.atticOpen, door: 'atticDoor' },
    { x0: -1.5, x1: 1.5, z0: 5.0, z1: 7, front: true }],
  library: [{ x0: -1.2, x1: 1.2, z0: 5.0, z1: 7, to: 'foyer', open: () => true }, { x0: -6.0, x1: -3.4, z0: -9, z1: -7.25, to: 'kitchen', open: () => S.f.shelfOpen, door: 'secretDoor' }],
  kitchen: [{ x0: -1.2, x1: 1.2, z0: 4.0, z1: 6, to: 'library', open: () => true }, { x0: 4.6, x1: 6.0, z0: -8, z1: -6.15, to: 'foyer', open: () => true, door: 'kDoor', unbolt: true }],
  attic: [{ x0: -1.0, x1: 1.0, z0: 3.4, z1: 6, to: 'foyer', open: () => !S.f.melodyDone || true }]
};
const BOUNDS = { foyer: [-8.7, 8.7, -9.7, 5.6], library: [-7.7, 7.7, -7.7, 5.7], kitchen: [-6.7, 6.7, -6.7, 4.7], attic: [-5.6, 5.6, -6.7, 4.7], garden: [-30, 30, -30, 30] };
function locked() { return document.pointerLockElement === canvas; }
function buildColliders() {
  scene.updateMatrixWorld(true); const B = new THREE.Box3();
  for (const k in rooms) { const room = rooms[k]; const col = []; const off = room.offset;
    const walkT = (o, nc) => { nc = nc || !!o.userData.noCol; if (!nc && (o.isMesh || o.isInstancedMesh) && o.geometry) {
        const m = o.material; const bad = !m || m.visible === false || m.isShaderMaterial || m.isMeshBasicMaterial && m.transparent || (m.transparent && (m.depthWrite === false || m.blending === THREE.AdditiveBlending)) || o.isSprite;
        if (!bad) { if (o.isInstancedMesh) { o.computeBoundingBox(); B.copy(o.boundingBox); } else { if (!o.geometry.boundingBox) o.geometry.computeBoundingBox(); B.copy(o.geometry.boundingBox); } B.applyMatrix4(o.matrixWorld);
          const sx = B.max.x - B.min.x, sz = B.max.z - B.min.z, sy = B.max.y - B.min.y;
          const thinFloor = B.max.y - off.y < 0.15, tiny = sx < 0.05 && sz < 0.05, huge = sx > 4.2 && sz > 4.2, ceilP = sy < 0.03 && B.min.y - off.y > 2.5;
          if (!thinFloor && !tiny && !huge && !ceilP) col.push([B.min.x - off.x, B.max.x - off.x, B.min.y - off.y, B.max.y - off.y, B.min.z - off.z, B.max.z - off.z]); } }
      for (const c of o.children) walkT(c, nc); };
    walkT(room.group, false); room.col = col; }
}
function floorAt(x, z, y) {
  if (S.room !== 'foyer') return 0;
  const st = R.stairs; if (!st) return 0;
  if (Math.abs(x) < st.sx / 2 + 0.1 && z < st.z0 + 0.05 && z > st.z0 - st.N * st.run) return clamp((st.z0 - z) / (st.N * st.run), 0, 1) * st.topY;
  if (z < -8.45 && y > 2.6) return st.topY;
  return 0;
}
function dynCols() { const c = []; if (S.room === 'library' && !S.f.shelfOpen) c.push([-6.3, -3.1, 0, 6, -8.2, -7.15]);
  if (S.room === 'foyer') { for (const sd of [-1, 1]) c.push(sd < 0 ? [-2.95, -2.72, 0, TOPY - 0.05, -9.0, -4.0] : [2.72, 2.95, 0, TOPY - 0.05, -9.0, -4.0]); if (!S.f.libOpen) c.push([8.85, 9.5, 0, 3, -4, -2]); if (!S.f.kitOpen) c.push([-9.5, -8.85, 0, 3, 2, 4]); if (!S.f.atticOpen) c.push([-4.5, -2.9, TOPY, TOPY + 3, -10.5, -9.85]); }
  if (S.room === 'kitchen' && !S.f.kitOpen) c.push([4.5, 6.1, 0, 3, -7.5, -6.85]); return c; }
function collide(nx, nz, y) {
  const y0 = y + 0.38, y1 = y + 1.75; const list = (R.col || []).concat(dynCols());
  for (let it = 0; it < 3; it++) { let pushed = false;
    for (const b of list) { if (b[3] < y0 || b[2] > y1) continue; if (nx < b[0] - RAD || nx > b[1] + RAD || nz < b[4] - RAD || nz > b[5] + RAD) continue;
      const cx = clamp(nx, b[0], b[1]), cz = clamp(nz, b[4], b[5]); let dx = nx - cx, dz = nz - cz; const d = Math.hypot(dx, dz);
      if (d > 1e-5) { if (d < RAD) { nx = cx + dx / d * RAD; nz = cz + dz / d * RAD; pushed = true; } }
      else { const e = [nx - b[0], b[1] - nx, nz - b[4], b[5] - nz]; const m = Math.min(...e); if (m === e[0]) nx = b[0] - RAD; else if (m === e[1]) nx = b[1] + RAD; else if (m === e[2]) nz = b[4] - RAD; else nz = b[5] + RAD; pushed = true; } }
    if (!pushed) break; }
  const bd = BOUNDS[S.room]; if (bd) { nx = clamp(nx, bd[0], bd[1]); nz = clamp(nz, bd[2], bd[3]); }
  return [nx, nz];
}
function placePlayer(sp) {
  if (!R) return; const v = R.view; const p = sp || [v.pos.x, 0, v.pos.z, v.yaw];
  P1.x = p[0]; P1.y = p[1] || 0; P1.z = p[2]; if (WALK.on && S.mode === 'play') { cam.yaw = p[3] || 0; cam.pitch = 0; } P1.stepD = 0;
}
function surface() { if (S.room === 'kitchen') return 'stone'; if (S.room === 'foyer') return P1.y > 0.15 ? 'wood' : 'stone'; return 'wood'; }
function walkStep(dt) {
  P1.bobY = P1.bobX = 0;
  if (!WALK.on || S.mode !== 'play' || S.paused || S.tut || cineCam || S.busy > 0 || S.spot || !R || !R.col) { P1.cross = null; if (WALK.on) updateCross(); return; }
  let fx = 0, fz = 0; const k = keys;
  if (k.has('KeyW') || k.has('ArrowUp')) fz += 1; if (k.has('KeyS') || k.has('ArrowDown')) fz -= 1; if (k.has('KeyA') || k.has('ArrowLeft')) fx -= 1; if (k.has('KeyD') || k.has('ArrowRight')) fx += 1;
  if (joy.id !== null || joy.dx || joy.dy) { fx += joy.dx; fz -= joy.dy; }
  const mag = Math.hypot(fx, fz); if (mag > 1) { fx /= mag; fz /= mag; }
  const run = k.has('ShiftLeft') || k.has('ShiftRight') || Math.hypot(joy.dx, joy.dy) > 0.95; const sp = (run ? 3.9 : 2.5) * (S.kids ? 0.95 : 1);
  const sy = Math.sin(cam.yaw), cy = Math.cos(cam.yaw);
  const tvx = (-sy * fz + cy * fx) * sp, tvz = (-cy * fz - sy * fx) * sp;
  P1.vx = damp(P1.vx || 0, tvx, 9, dt); P1.vz = damp(P1.vz || 0, tvz, 9, dt); if (Math.hypot(P1.vx, P1.vz) < 0.02 && !tvx && !tvz) P1.vx = P1.vz = 0; const vx = P1.vx, vz = P1.vz;
  P1.mv = damp(P1.mv, Math.min(1, Math.hypot(fx, fz)) * (run ? 1.3 : 1), 10, dt);
  if (vx || vz) { const ox = P1.x, oz = P1.z; const [nx, nz] = collide(P1.x + vx * dt, P1.z + vz * dt, P1.y); P1.x = nx; P1.z = nz; const moved = Math.hypot(nx - ox, nz - oz); P1.stepD += moved;
    if (moved > 0.0005) idleT = 0;
    if (P1.stepD > (run ? 0.85 : 0.68)) { P1.stepD = 0; A.sfx.foot(surface(), run); } P1.bobT += moved * 4.6; }
  const fy = floorAt(P1.x, P1.z, P1.y); P1.y = fy > P1.y ? damp(P1.y, fy, 14, dt) : damp(P1.y, fy, 9, dt);
  if (WALK.bob) { P1.bobY = Math.sin(P1.bobT * 2) * 0.035 * Math.min(1, P1.mv); P1.bobX = Math.cos(P1.bobT) * 0.018 * Math.min(1, P1.mv); }
  // door zones
  for (const pz of PORTALS[S.room] || []) { if (P1.x < pz.x0 - RAD - 0.05 || P1.x > pz.x1 + RAD + 0.05 || P1.z < pz.z0 - RAD - 0.05 || P1.z > pz.z1 + RAD + 0.05 || (pz.y0 && P1.y < pz.y0)) continue;
    if (pz.front) { if (S.f.escaped) continue; if (S.inv.includes('silverKey')) { S.sel = 'silverKey'; interact('frontDoor'); } else lockedFx('frontDoor'); continue; }
    if (pz.open()) { if (pz.unbolt && !S.f.kitOpen) { S.f.kitOpen = 1; A.sfx.lock(); applyVisuals(); } S.log.walkDoor = (S.log.walkDoor || 0) + 1; gotoRoom(pz.to); return; }
    lockedFx(pz.door); }
  updateCross();
}
function lockedFx(door) { const now = S.clock; if (now - P1.lockT < 1.6) return; P1.lockT = now; S.log.lockedBump = (S.log.lockedBump || 0) + 1; A.sfx.locked(); toast(T('locked') + (door ? ' · ' + T('l_' + door) : '')); }
function updateCross() {
  const xh = $('xh'); if (!xh) return; const on = WALK.on && S.mode === 'play' && !cineCam && !S.spot; xh.classList.toggle('hidden', !on);
  if (!on) return;
  let id = null; if (!S.tut && !S.paused && S.busy === 0) { const h = pickHit(window.innerWidth / 2, window.innerHeight / 2); if (h && h.d <= REACH) id = h.id; }
  P1.cross = id; if (hovered !== id) setHover(id);
  xh.classList.toggle('on', !!id); const tip = $('tip'); tip.style.left = '50%'; tip.style.top = '50%';
}
function interactCross() { if (S.mode !== 'play' || S.busy > 0) return false; const id = P1.cross; if (!id) return false; S.log.cross = (S.log.cross || 0) + 1; return interact(id); }
function walkClick(e) {
  if (e.pointerType === 'mouse' && !locked()) { try { const r = canvas.requestPointerLock(); if (r && r.catch) r.catch(() => {}); } catch (err) {} }
  if (P1.cross) { interactCross(); return; }
  const h = pickHit(e.clientX, e.clientY); if (h && h.d <= REACH) interact(h.id); else if (S.sel) select(null);
}
function showJoy(on) { const j = $('joy'); if (!j) return; j.classList.toggle('on', on); if (on) { j.style.left = joy.x0 + 'px'; j.style.top = joy.y0 + 'px'; $('joyK').style.transform = `translate(${joy.dx * 38}px, ${joy.dy * 38}px)`; } }
function setWalkUI() { document.body.classList.toggle('walk', WALK.on); document.body.classList.toggle('touch', !!(window.matchMedia && matchMedia('(pointer: coarse)').matches) || navigator.maxTouchPoints > 0 && /Mobi|Android|iPhone|iPad/.test(navigator.userAgent)); navKey = ''; renderNav(); if (!WALK.on && locked()) document.exitPointerLock(); }
function setWalk(on) { WALK.on = !!on; store.set('hme-walk', WALK.on); if (S.mode === 'play') { S.spot = null; if (on) placePlayer(null); snapCamera(); } setWalkUI(); updateContext(); }
document.addEventListener('pointerlockchange', () => { document.body.classList.toggle('locked', locked()); updateContext(); });
// ---------------- input: drag to look, click/tap to interact, hover glow ----------------
const ray = new THREE.Raycaster(); const ndc = new THREE.Vector2();
const drag = { active: false, down: false, x: 0, y: 0, sx: 0, sy: 0, moved: 0, t0: 0, id: null };
let hovered = null;
function worldVisible(o) { while (o) { if (!o.visible) return false; o = o.parent; } return true; }
function pickAt(cx, cy) {
  scene.updateMatrixWorld(); camera.updateMatrixWorld();
  ndc.set(cx / window.innerWidth * 2 - 1, -(cy / window.innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera);
  const hits = ray.intersectObjects(R.hits, false);
  for (const h of hits) { if (h.distance > 14) break; if (worldVisible(h.object)) return h.object.userData.iid; }
  return null;
}
function pickHit(cx, cy) {
  scene.updateMatrixWorld(); camera.updateMatrixWorld();
  ndc.set(cx / window.innerWidth * 2 - 1, -(cy / window.innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera);
  for (const h of ray.intersectObjects(R.hits, false)) { if (h.distance > 14) break; if (worldVisible(h.object)) return { id: h.object.userData.iid, d: h.distance }; }
  return null;
}
function setHover(id) {
  if (hovered === id) return;
  if (hovered && R.items[hovered]) glow(hovered, false);
  hovered = id; if (id && R.items[id]) glow(id, true);
  const tip = $('tip'); if (id) { const lbl = (S.sel ? '🎒 ' + T('i_' + S.sel) + ' → ' : '') + T('l_' + id); tip.textContent = WALK.on ? T(document.body.classList.contains('touch') ? 'xhTap' : 'xhUse', { x: lbl }) : (S.sel ? '🎒 ' : '') + T('l_' + id); tip.classList.add('show'); } else tip.classList.remove('show');
  updateCursor(); updateContext();
}
function glow(id, on) {
  const meshes = R.hits.filter(m => m.userData.iid === id);
  for (const m of meshes) { const mt = m.material; if (!mt || !mt.isMeshStandardMaterial || !m.userData.e0) continue; if (on) { mt.emissive.setRGB(1, 0.62, 0.3); mt.emissiveIntensity = 0.28; } else { mt.emissive.copy(m.userData.e0); mt.emissiveIntensity = m.userData.ei0; } }
}
function onDown(e) {
  if (S.mode === 'menu' || S.mode === 'end') return;
  if (WALK.on && e.pointerType === 'touch' && e.clientX < window.innerWidth * 0.42 && S.mode === 'play') { joy.id = e.pointerId; joy.x0 = e.clientX; joy.y0 = e.clientY; joy.dx = joy.dy = 0; showJoy(true); try { canvas.setPointerCapture(e.pointerId); } catch (err) {} return; }
  drag.down = true; drag.active = false; drag.x = drag.sx = e.clientX; drag.y = drag.sy = e.clientY; drag.moved = 0; drag.t0 = performance.now(); drag.id = e.pointerId;
  try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
}
function onMove(e) {
  if (joy.id !== null && e.pointerId === joy.id) { joy.dx = clamp((e.clientX - joy.x0) / 55, -1, 1); joy.dy = clamp((e.clientY - joy.y0) / 55, -1, 1); showJoy(true); return; }
  if (WALK.on && locked()) { if (S.mode === 'play' && !S.paused && !cineCam) { const k = 0.0022 * WALK.sens; cam.yaw -= (e.movementX || 0) * k; cam.pitch = clamp(cam.pitch - (e.movementY || 0) * k * (WALK.invY ? -1 : 1), -1.25, 1.25); } return; }
  if (WALK.on && drag.down) { const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.x = e.clientX; drag.y = e.clientY; drag.moved += Math.abs(dx) + Math.abs(dy); if (drag.moved > (e.pointerType === 'touch' ? 14 : 8)) drag.active = true;
    if (drag.active && !cineCam && S.mode === 'play') { const k = 0.0042 * WALK.sens * (e.pointerType === 'touch' ? 1.2 : 1); cam.yaw -= dx * k; cam.pitch = clamp(cam.pitch - dy * k * 0.8 * (WALK.invY ? -1 : 1), -1.25, 1.25); } return; }
  if (WALK.on) return;
  if (drag.down) {
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.x = e.clientX; drag.y = e.clientY; drag.moved += Math.abs(dx) + Math.abs(dy);
    if (drag.moved > (e.pointerType === 'touch' ? 14 : 8)) { drag.active = true; canvas.style.cursor = 'grabbing'; }
    if (drag.active && !cineCam) { const sens = 3.2 / Math.max(window.innerWidth, 600); cam.yaw += dx * sens * (e.pointerType === 'touch' ? 1.3 : 1); cam.pitch = clamp(cam.pitch + dy * sens * 0.8, S.spot ? -0.3 : -0.55, S.spot ? 0.3 : 0.6); if (S.spot) cam.yaw = clamp(cam.yaw, -0.6, 0.6);
      if (S.spot && Math.abs(cam.yaw) > 0.55) back(); }
  } else if (e.pointerType !== 'touch' && S.mode === 'play') { const id = pickAt(e.clientX, e.clientY); setHover(id); const tip = $('tip'); tip.style.left = e.clientX + 'px'; tip.style.top = e.clientY + 'px'; }
}
function onUp(e) {
  if (joy.id !== null && e.pointerId === joy.id) { joy.id = null; joy.dx = joy.dy = 0; showJoy(false); return; }
  if (WALK.on && locked()) { if (S.mode === 'play' && !S.paused) interactCross(); return; }
  if (!drag.down) return; drag.down = false;
  const wasDrag = drag.active; drag.active = false; updateCursor();
  if (!wasDrag && S.mode === 'play') { if (WALK.on) { walkClick(e); } else click(e.clientX, e.clientY); }
}
function click(x, y) {
  const id = pickAt(x, y);
  if (id) { interact(id); setHover(e_isMouse ? id : null); }
  else if (S.sel) select(null);
  return id;
}
let e_isMouse = true;
canvas.addEventListener('pointerdown', e => { e_isMouse = e.pointerType !== 'touch'; idleT = 0; onDown(e); });
window.addEventListener('pointermove', onMove);
window.addEventListener('pointerup', onUp); window.addEventListener('mousedown', e => { if (WALK.on && locked() && e.target === document.body) { e.preventDefault(); } }); window.addEventListener('pointercancel', () => { drag.down = false; drag.active = false; });
window.addEventListener('keyup', e => { keys.delete(e.code); });
window.addEventListener('blur', () => keys.clear());
window.addEventListener('keydown', e => {
  if (WALK.on) { keys.add(e.code); if (S.mode === 'play' && !S.tut && $('lockUI').classList.contains('hidden')) { if (e.code === 'KeyE' || e.code === 'Enter') { interactCross(); return; } if (/^Digit[1-5]$/.test(e.code)) { const it = S.inv[+e.code.slice(5) - 1]; if (it) select(S.sel === it ? null : it); return; } if (e.code === 'Space' || e.code.startsWith('Arrow')) e.preventDefault(); } }
  if (e.key === 'Escape') { if (!$('tut').classList.contains('hidden')) { tutClose(); return; } if (!$('lockUI').classList.contains('hidden')) { $('lockUI').classList.add('hidden'); return; } if (S.sel) { select(null); return; } if (S.spot) back(); else if (S.mode === 'play') pause(!S.paused); }
  if (S.mode !== 'play') return;
  if (!WALK.on) { if (e.key === 'ArrowLeft') cam.yaw -= 0.25; if (e.key === 'ArrowRight') cam.yaw += 0.25; } if (e.key === 'h' || e.key === 'H') askHint();
  if (!$('lockUI').classList.contains('hidden') && /^[0-9]$/.test(e.key)) { S.lockPos = ((S.lockPos || 0)); S.lockDigits[S.lockPos] = +e.key; S.lockPos = (S.lockPos + 1) % 4; renderLock(); A.sfx.dial(); if (S.lockPos === 0) lockTry(); }
});

// ---------------- end / share ----------------
function liveResult() { return { name: (($('name') && $('name').value) || S.nameV || defName()).trim() || defName(), time: Math.round(S.time), hints: S.hintsUsed, stars: stars(), kids: S.kids }; }
function result() { if (S.mode === 'end' && S.lastResult) return Object.assign({}, S.lastResult, { name: ($('name').value || defName()).trim() || defName() }); return liveResult(); }
function showEnd() {
  S.mode = 'end'; setCine(false); cineCam = cineCam || null; S.lastResult = liveResult(); const r = S.lastResult;
  const isBest = !S.best || r.time < S.best.time; if (isBest) { S.best = { time: r.time, stars: r.stars, hints: r.hints }; store.set('hme-best', S.best); }
  $('hud').classList.add('hidden'); $('invBar').classList.add('hidden'); $('nav').classList.add('hidden'); $('msg').classList.remove('show'); $('chapter').className = '';
  $('end').classList.remove('hidden'); $('endTime').textContent = fmtTime(r.time); $('newBest').classList.toggle('hidden', !isBest);
  $('endStars').textContent = '⭐'.repeat(r.stars) + '☆'.repeat(3 - r.stars); $('rank').textContent = '👻 ' + rankFor(r);
  $('stTime').textContent = fmtTime(r.time); $('stHints').textContent = r.hints; $('stStars').textContent = r.stars + '/3'; $('stBest').textContent = fmtTime(S.best.time);
  $('name').value = S.nameV; updateShare(); if (isBest) setTimeout(() => A.sfx.newBest(), 600);
}
function updateShare() { $('shareText').textContent = shareText(result(), S.shareLang); document.querySelectorAll('#shareLang button').forEach(b => b.classList.toggle('on', b.dataset.sl === S.shareLang)); }
async function copyShare() {
  const txt = shareText(result(), S.shareLang); window.__hmeLastShare = txt; let ok = false;
  try { if (navigator.clipboard && window.isSecureContext !== false) { await navigator.clipboard.writeText(txt); ok = true; } } catch (e) {}
  if (!ok) { try { const ta = document.createElement('textarea'); ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); ok = document.execCommand('copy'); ta.remove(); } catch (e) {} }
  toast(ok ? T('copied') : T('copyFail')); A.sfx.ui(); return ok;
}
function makeShot() {
  renderNow();
  const c = document.createElement('canvas'); c.width = 1080; c.height = 1350; const g = c.getContext('2d');
  const src = renderer.domElement, sw = src.width, sh = src.height, k = Math.max(1080 / sw, 1350 / sh);
  g.drawImage(src, (1080 - sw * k) / 2, (1350 - sh * k) / 2, sw * k, sh * k);
  const vg = g.createLinearGradient(0, 0, 0, 1350); vg.addColorStop(0, 'rgba(8,4,20,0.25)'); vg.addColorStop(0.4, 'rgba(8,4,20,0.45)'); vg.addColorStop(1, 'rgba(8,4,20,0.88)'); g.fillStyle = vg; g.fillRect(0, 0, 1080, 1350);
  const r = result(), Lg = getLang();
  const SERIF = 'Didot, "Bodoni 72", Georgia, "Times New Roman", serif', SANS = '"Arial Black", Impact, sans-serif';
  const txt = (s, x, y, size, fill, glowC, font = SANS, weight = '900', spacing = 0) => { g.font = `${weight} ${size}px ${font}`; g.textAlign = 'center'; g.textBaseline = 'middle'; if ('letterSpacing' in g) g.letterSpacing = spacing + 'px'; g.shadowColor = glowC; g.shadowBlur = size * 0.45; g.fillStyle = fill; g.fillText(s, x, y); g.shadowBlur = 0; if ('letterSpacing' in g) g.letterSpacing = '0px'; };
  const grad = (y0, y1, a, b, c3) => { const gr = g.createLinearGradient(0, y0, 0, y1); gr.addColorStop(0, a); gr.addColorStop(0.5, b); gr.addColorStop(1, c3); return gr; };
  txt('HAUNTED', 540, 150, 140, grad(80, 220, '#ffffff', '#cfe0ff', '#7a8cff'), 'rgba(140,170,255,0.9)', SERIF, '900', 10);
  txt('MANSION ESCAPE', 540, 262, 74, grad(230, 300, '#fffbe6', '#ffd070', '#c25a10'), 'rgba(255,140,30,0.9)', SERIF, '900', 8);
  const rr = (x, y, w, h, Rr) => { g.beginPath(); g.moveTo(x + Rr, y); g.arcTo(x + w, y, x + w, y + h, Rr); g.arcTo(x + w, y + h, x, y + h, Rr); g.arcTo(x, y + h, x, y, Rr); g.arcTo(x, y, x + w, y, Rr); g.closePath(); };
  g.save(); g.fillStyle = 'rgba(20,14,44,0.62)'; g.strokeStyle = 'rgba(180,200,255,0.45)'; g.lineWidth = 3; rr(100, 400, 880, 760, 48); g.shadowColor = 'rgba(120,140,255,0.5)'; g.shadowBlur = 50; g.fill(); g.shadowBlur = 0; g.stroke(); g.restore();
  txt(r.name.toUpperCase(), 540, 475, 44, '#dfe6ff', 'rgba(120,140,255,0.9)');
  txt(T('endTitle', null, Lg), 540, 545, 40, '#ffd9a8', 'rgba(255,140,30,0.8)', SERIF, '900', 6);
  txt(fmtTime(r.time), 540, 665, 170, grad(590, 740, '#fff3c4', '#ffb547', '#ff6a0a'), 'rgba(255,120,20,0.95)');
  txt('⭐'.repeat(r.stars) + '☆'.repeat(3 - r.stars), 540, 790, 70, '#ffd84a', 'rgba(255,200,60,0.8)');
  txt('👻 ' + rankFor(r, Lg), 540, 880, 52, '#ffd9a8', 'rgba(255,140,30,0.9)');
  const st = [[String(r.hints), T('stHints', null, Lg)], [r.stars + '/3', T('stStars', null, Lg)], ['4', T('stRooms', null, Lg)]];
  st.forEach(([v, l], i) => { const x = 250 + i * 290; g.fillStyle = 'rgba(255,255,255,0.08)'; rr(x - 125, 950, 250, 160, 26); g.fill(); txt(v, x, 1012, 56, '#fff0d0', 'rgba(255,160,60,0.6)'); txt(l.toUpperCase(), x, 1075, 22, 'rgba(240,240,255,0.8)', 'rgba(0,0,0,0)', SANS, '800'); });
  txt(Lg === 'de' ? 'Schaffst du es schneller?' : 'Can you get out faster?', 540, 1225, 42, '#ffffff', 'rgba(140,170,255,0.8)', SANS, '800');
  txt('#HauntedMansionEscape', 540, 1295, 36, '#ffb547', 'rgba(255,120,20,0.8)');
  return c;
}
function saveShot() {
  const c = makeShot(); const url = c.toDataURL('image/png'); const r = result();
  const a = document.createElement('a'); a.href = url; a.download = `haunted-mansion-escape-${fmtTime(r.time).replace(':', 'm')}s.png`; document.body.appendChild(a); a.click(); a.remove();
  window.__hmeLastShot = url.length; toast(T('shotSaved')); A.sfx.ui(); return url;
}

// ---------------- game flow ----------------
function resetState() {
  Object.assign(S, { time: 0, hintsUsed: 0, hintLvl: {}, inv: [], sel: null, f: {}, seq: [], brew: [], mel: [], visited: {}, spot: null, busy: 0, lastResult: null });
  S.log = { scare: 0, cute: 0, flyby: 0, hint: 0, pickup: 0, lightning: 0, wrong: 0 };
  tweens.length = 0; cineCam = null; setCine(false); melodyPlaying = false; flyT = -1; if (flybyGhost) flybyGhost.visible = false;
}
function startGame(resume = false) {
  const sv = resume ? loadSave() : null;
  resetState();
  if (sv) { if (sv.kids !== S.kids) setKids(sv.kids); Object.assign(S, { time: sv.time, hintsUsed: sv.hintsUsed, hintLvl: sv.hintLvl || {}, inv: sv.inv || [], f: sv.f || {}, seq: sv.seq || [], brew: sv.brew || [], visited: sv.visited || {} }); S.log = Object.assign(S.log, sv.log || {}); }
  else clearSave();
  // rebuild so all props are fresh (state applied afterwards)
  buildWorld();
  S.mode = 'play'; document.body.classList.add('playing');
  $('start').classList.add('hidden'); $('end').classList.add('hidden'); $('hud').classList.remove('hidden'); $('invBar').classList.remove('hidden');
  const room = sv ? sv.room : 'foyer'; setRoom(room, true); placePlayer(sv && sv.p ? [sv.p.x, sv.p.y, sv.p.z, sv.p.yaw] : null); snapCamera(); applyVisuals(); setWalkUI();
  A.unlockAudio(); A.setMood('main'); A.sfx.start();
  navKey = ''; if (!store.get('hme-tut', 0) && !window.__hmeNoTut) after(1.4, tutOpen);
  if (!sv) { S.visited.foyer = 1; chapter('foyer'); after(1.0, () => say(T('intro'), 6)); after(2.2, () => lightning(true)); }
  else { S.visited[room] = 1; toast(T('resumed')); }
  save(); updateHud();
}
// ---------------- tutorial (first start, also via ?) ----------------
const TUT = [['✨', 'tut1'], ['✋', 'tut2'], ['🎒', 'tut3'], ['🚪', 'tut4'], ['💀', 'tut5']];
let tutI = 0;
function tutOpen() { if (S.mode !== 'play') return; if (locked()) document.exitPointerLock(); keys.clear(); S.tut = true; tutI = 0; $('tut').classList.remove('hidden'); tutRender(); A.sfx.ui(); }
function tutList() { return WALK.on ? [['🚶', 'tutW1'], ['✨', 'tutW2'], ['🎒', 'tutW3'], ['🚪', 'tutW4'], ['💀', 'tut5']] : TUT; }
function tutRender() { const L = tutList(); const [ic, k0] = L[tutI]; const k = k0; $('tutIcon').textContent = ic; $('tutT').textContent = T(k + 't'); $('tutX').textContent = T(k + (WALK.on && document.body.classList.contains('touch') && (k === 'tutW1' || k === 'tutW2') ? 'm' : '')); $('tutStep').textContent = (tutI + 1) + '/' + L.length;
  $('tutDots').innerHTML = L.map((_, i) => `<i class="${i === tutI ? 'on' : ''}"></i>`).join(''); $('tutNext').textContent = tutI === L.length - 1 ? T('tutGo') : T('tutNext'); }
function tutNext() { if (tutI < TUT.length - 1) { tutI++; tutRender(); A.sfx.ui(); } else tutClose(); }
function tutClose() { S.tut = false; $('tut').classList.add('hidden'); store.set('hme-tut', 1); idleT = 0; }
function toMenu() {
  pause(false); S.mode = 'menu'; document.body.classList.remove('playing');
  $('hud').classList.add('hidden'); $('invBar').classList.add('hidden'); $('nav').classList.add('hidden'); $('end').classList.add('hidden'); $('start').classList.remove('hidden'); $('msg').classList.remove('show');
  resetState(); buildWorld(); setRoom('foyer', true); applyVisuals(); refreshStart();
}
function refreshStart() {
  const sv = loadSave(); $('btnContinue').classList.toggle('hidden', !sv); $('btnPlay').querySelector('span').textContent = sv ? T('newGame') : T('play');
  $('btnPlay').classList.toggle('mid', !!sv); $('btnPlay').classList.toggle('big', !sv);
  if (sv) $('contInfo').textContent = `${T('r_' + sv.room)} · ${fmtTime(sv.time)}`; else $('contInfo').textContent = '';
  $('bestStart').textContent = S.best ? fmtTime(S.best.time) + ' ' + '⭐'.repeat(S.best.stars) : '—';
}
function pause(on) { if (S.mode !== 'play' && on) return; S.paused = !!on; $('pauseScr').classList.toggle('hidden', !S.paused); }

// ---------------- main loop ----------------
let last = 0, held = false;
function renderNow() { if (grade) { const u = grade.uniforms; u.time.value = (u.time.value + 0.37) % 100; u.asp.value = camera.aspect; u.scare.value = scareK * (S.kids ? 0.25 : 1); u.lit.value = L.lvl; } if (composer) composer.render(); else renderer.render(scene, camera); }
function step(dt) {
  S.clock += dt;
  if (S.mode === 'play' && !S.paused && !S.tut && S.busy === 0) { idleT += dt; const idl = idleT > 20; if (idl !== document.body.classList.contains('idle')) { document.body.classList.toggle('idle', idl); updateContext(); } }
  if (S.mode === 'play' && !S.paused && !S.tut && !S.f.escaped) { S.time += dt; if ((S._ht = (S._ht || 0) + dt) > 0.5) { S._ht = 0; updateHud(); } if ((S._st = (S._st || 0) + dt) > 5) { S._st = 0; save(); } }
  if (S.mode === 'menu') { cam.yaw = Math.sin(S.clock * 0.12) * 0.42; cam.pitch = 0.04 + Math.sin(S.clock * 0.09) * 0.05; }
  if ((S._nt = (S._nt || 0) + dt) > 0.2) { S._nt = 0; renderNav(); }
  focusRestore(); updateTweens(dt); updateLightning(dt); animate(dt); walkStep(dt); updateCamera(dt); updateFlyby(dt); focusApply(dt);
  if (msgTimer > 0) { msgTimer -= dt; if (msgTimer <= 0) $('msg').classList.remove('show'); }
  if (wispT > 0) { wispT -= dt; } $('wisp').classList.toggle('on', wispT > 0);
}
function frame(now) {
  requestAnimationFrame(frame); if (held) return;
  const dt = Math.min(0.05, (now - (last || now)) / 1000); last = now;
  if (!S.paused) step(dt);
  renderNow(); trackFps(now);
}

// ---------------- FPS → quality suggestion ----------------
const fps = { n: 0, t0: 0, ema: 60, slow: 0, decided: false, samples: 0 };
function qLabel(q) { return T('q_' + q); }
function qualHint() { $('qualHint').textContent = `${T('suggested')}: ${qLabel(suggest())} (${Math.round(fps.ema)} fps)`; }
function suggest() { const e = fps.ema; return e >= 56 ? (Math.max(window.screen.width, window.screen.height) >= 1400 && (window.devicePixelRatio || 1) <= 2 ? 'ultra' : 'high') : e >= 42 ? 'high' : e >= 28 ? 'mid' : 'low'; }
function trackFps(now) {
  fps.n++; if (!fps.t0) fps.t0 = now;
  if (now - fps.t0 >= 1000) {
    const f = fps.n * 1000 / (now - fps.t0); fps.ema = fps.decided ? fps.ema * 0.6 + f * 0.4 : f; fps.n = 0; fps.t0 = now; fps.samples++; qualHint();
    if (!fps.decided && fps.samples >= 3) { fps.decided = true; if (!S.qualityUser && !window.__hmeNoAutoQ) { const s = suggest(); if (s !== qName()) { applyQuality(s); applyVisuals(); toast(`${T('suggested')}: ${qLabel(s)} (${Math.round(fps.ema)} fps)`); } } }
    if (fps.decided && S.mode === 'play' && fps.ema < 24 && qName() !== 'low' && !window.__hmeNoAutoQ && !S.qualityUser) { fps.slow++; if (fps.slow >= 4) { fps.slow = 0; const order = ['low', 'mid', 'high', 'ultra']; const nq = order[Math.max(0, order.indexOf(qName()) - 1)]; applyQuality(nq); applyVisuals(); toast(`${T('fpsLow')} ${qLabel(nq)}`); } } else fps.slow = 0;
  }
}

// ---------------- UI wiring ----------------
function refreshTexts() { if (S.tut) tutRender(); navKey = '';
  applyI18n(S.kids);
  document.querySelectorAll('#langSeg button, #langSeg2 button').forEach(b => b.classList.toggle('on', b.dataset.lang === getLang()));
  if (rooms) refreshClueTextures(); renderInv(); updateHud(); refreshStart(); qualHint();
  if (S.mode === 'end') updateShare();
}
function setKids(on) {
  const ch = S.kids !== !!on; S.kids = !!on; store.set('hme-kids', S.kids); $('chkKids').checked = S.kids; $('chkKids2').checked = S.kids; A.setKids(S.kids);
  document.body.classList.toggle('kids', S.kids); applyI18n(S.kids);
  if (ch && rooms && S.mode === 'menu') { buildWorld(); }
}
function wire() {
  $('btnPlay').onclick = () => startGame(false);
  $('btnContinue').onclick = () => startGame(true);
  $('chkKids').onchange = e => setKids(e.target.checked); $('chkKids2').onchange = e => setKids(e.target.checked);
  document.querySelectorAll('#langSeg button, #langSeg2 button').forEach(b => b.onclick = () => { setLang(b.dataset.lang); S.shareLang = getLang(); refreshTexts(); A.sfx.ui(); });
  $('btnSettings').onclick = () => { $('settings').classList.remove('hidden'); qualHint(); };
  $('btnSet2').onclick = () => { $('settings').classList.remove('hidden'); qualHint(); };
  $('btnCloseSettings').onclick = () => $('settings').classList.add('hidden');
  document.querySelectorAll('#qualSeg button').forEach(b => b.onclick = () => { applyQuality(b.dataset.q, true); applyVisuals(); A.sfx.ui(); qualHint(); });
  $('volMusic').oninput = e => { A.setMusicVolume(e.target.value / 100); store.set('hme-music', +e.target.value); };
  $('volSfx').oninput = e => { A.setSfxVolume(e.target.value / 100); store.set('hme-sfx', +e.target.value); };
  $('chkMute').onchange = e => { A.setMuted(e.target.checked); $('btnMute').textContent = e.target.checked ? '🔇' : '🔊'; };
  $('btnMute').onclick = () => { const m = !A.isMuted(); A.setMuted(m); $('chkMute').checked = m; $('btnMute').textContent = m ? '🔇' : '🔊'; };
  $('btnPause').onclick = () => pause(true); $('btnResume').onclick = () => pause(false); $('btnQuit').onclick = () => { save(); toMenu(); };
  $('btnHint').onclick = e => { e.stopPropagation(); askHint(); };
  $('btnHelp').onclick = e => { e.stopPropagation(); tutOpen(); };
  $('tutNext').onclick = e => { e.stopPropagation(); tutNext(); }; $('tutSkip').onclick = e => { e.stopPropagation(); tutClose(); };
  $('btnDesel').onclick = e => { e.stopPropagation(); select(null); };
  $('btnAct').addEventListener('pointerdown', e => { e.stopPropagation(); e.preventDefault(); interactCross(); });
  const cw = $('chkWalk'); cw.checked = WALK.on; cw.onchange = () => setWalk(cw.checked);
  const sn = $('sensR'); sn.value = Math.round(WALK.sens * 50); sn.oninput = () => { WALK.sens = Math.max(0.2, sn.value / 50); store.set('hme-sens', WALK.sens); };
  const iy = $('chkInvY'); iy.checked = WALK.invY; iy.onchange = () => { WALK.invY = iy.checked; store.set('hme-invy', WALK.invY); };
  const cb = $('chkBob'); cb.checked = WALK.bob; cb.onchange = () => { WALK.bob = cb.checked; store.set('hme-bob', WALK.bob); };
  setWalkUI();
  $('btnBack').onclick = e => { e.stopPropagation(); back(); };
  $('lockOk').onclick = () => lockTry(); $('lockClose').onclick = () => $('lockUI').classList.add('hidden');
  document.querySelectorAll('#lockUI .wheel').forEach((w, i) => {
    w.querySelector('.up').onclick = () => { S.lockDigits[i] = (S.lockDigits[i] + 1) % 10; renderLock(); A.sfx.dial(); };
    w.querySelector('.dn').onclick = () => { S.lockDigits[i] = (S.lockDigits[i] + 9) % 10; renderLock(); A.sfx.dial(); };
  });
  $('btnShare').onclick = () => copyShare(); $('btnShot').onclick = () => saveShot();
  $('btnReplay').onclick = () => { clearSave(); startGame(false); };
  $('btnMenu').onclick = () => toMenu();
  $('name').oninput = e => { S.nameV = e.target.value.slice(0, 18); store.set('hme-name', S.nameV); updateShare(); };
  document.querySelectorAll('#shareLang button').forEach(b => b.onclick = () => { S.shareLang = b.dataset.sl; updateShare(); });
  const mv = store.get('hme-music', 60), sv = store.get('hme-sfx', 90); $('volMusic').value = mv; $('volSfx').value = sv; A.setMusicVolume(mv / 100); A.setSfxVolume(sv / 100);
  window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', () => { if (document.hidden) save(); });
}

// ---------------- boot ----------------
setLang(getLang()); A.setKids(S.kids); document.body.classList.toggle('kids', S.kids);
$('chkKids').checked = S.kids; $('chkKids2').checked = S.kids;
wire(); buildWorld(); buildComposer(); resize(); refreshTexts();
setRoom('foyer', true); applyVisuals();
document.querySelectorAll('#qualSeg button').forEach(b => b.classList.toggle('on', b.dataset.q === qName()));
for (let i = 0; i < 90; i++) step(1 / 60); // frame 0 already alive (flames, dust, swaying chandelier)
renderNow(); document.body.classList.add('ready');
requestAnimationFrame(frame);

// ---------------- test hooks ----------------
window.__hme = {
  S, PUZ, cam, get R() { return R; }, get rooms() { return rooms; }, camera, renderer,
  start: (resume) => startGame(!!resume), menu: toMenu, interact, act: interact, hint: askHint, goal, select, give, gotoRoom, back,
  lockSet: (code) => { openLock(); S.lockDigits = code.split('').map(Number); renderLock(); return lockTry(); },
  variant, stars, save, loadSave, result, showEnd, shareText: (l) => shareText(result(), l), copyShare, makeShot, saveShot,
  setKids, setLang: (l) => { setLang(l); refreshTexts(); }, applyQuality: (q) => { applyQuality(q, true); applyVisuals(); }, quality: () => qName(),
  tut: () => ({ open: !$('tut').classList.contains('hidden'), step: tutI, title: $('tutT').textContent, seen: !!store.get('hme-tut', 0) }), tutOpen, tutNext, tutClose, navTo, exits: () => exits().map(e => ({ ...e })),
  walk: () => ({ on: WALK.on, x: P1.x, y: P1.y, z: P1.z, yaw: cam.yaw, pitch: cam.pitch, cross: P1.cross, locked: locked() }), setWalk, keyDown: (c) => keys.add(c), keyUp: (c) => keys.delete(c), keysClear: () => keys.clear(),
  placeP: (x, y, z, yaw) => { placePlayer([x, y, z, yaw]); snapCamera(); }, joy: (dx, dy) => { joy.dx = dx; joy.dy = dy; }, cross: () => { updateCross(); return P1.cross; }, interactCross, colCount: () => (R.col || []).length, colNear: (x, z, y, r = 0.6) => (R.col || []).filter(b => !(b[3] < y + 0.38 || b[2] > y + 1.75) && x > b[0] - r && x < b[1] + r && z > b[4] - r && z < b[5] + r),
  aim: (id) => { const o = R.items[id]; if (!o) return null; const hb = R.hits.filter(m => m.userData.iid === id && m.material && m.material.visible === false); if (hb.length) { scene.updateMatrixWorld(); new THREE.Box3().setFromObject(hb[0]).getCenter(V); V.sub(R.offset); } else o.getWorldPosition(V).sub(R.offset); const dx = V.x - P1.x, dy = V.y - (P1.y + EYE), dz = V.z - P1.z; cam.yaw = Math.atan2(-dx, -dz); cam.pitch = Math.atan2(dy, Math.hypot(dx, dz)); snapCamera(); updateCamera(0); updateCross(); return P1.cross; },
  approach: (id, d = 1.5) => { const o = R.items[id]; if (!o) return null; o.getWorldPosition(V).sub(R.offset); const c = R.view.pos; let ax = c.x - V.x, az = c.z - V.z; const l = Math.hypot(ax, az) || 1; ax /= l; az /= l;
    const [nx, nz] = collide(V.x + ax * d, V.z + az * d, P1.y); P1.x = nx; P1.z = nz; P1.y = floorAt(nx, nz, P1.y); return [nx, nz]; },
  steer: (x, z) => { cam.yaw = Math.atan2(-(x - P1.x), -(z - P1.z)); cam.pitch = 0; return Math.hypot(x - P1.x, z - P1.z); },
  ctx: () => $('selHint').textContent, idle: (v) => { if (v != null) idleT = v; return idleT; }, cursor: () => canvas.style.cursor,
  snap: () => ({ mode: S.mode, room: S.room, spot: S.spot, time: S.time, hints: S.hintsUsed, inv: [...S.inv], sel: S.sel, f: { ...S.f }, log: { ...S.log }, busy: S.busy, goal: goal(), stars: stars(), cine: document.body.classList.contains('cine') }),
  hitsAt: (cx, cy) => { scene.updateMatrixWorld(); camera.updateMatrixWorld(); ndc.set(cx / window.innerWidth * 2 - 1, -(cy / window.innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera); return [ray.ray.origin.toArray(), ray.ray.direction.toArray(), ray.intersectObjects(R.hits, false).map(h => [h.object.userData.iid, +h.distance.toFixed(2), h.point.toArray()])]; },
  pick: (id) => { const o = R.items[id]; if (!o) return null; scene.updateMatrixWorld(); camera.updateMatrixWorld(); o.getWorldPosition(V); V.project(camera); return { x: (V.x * 0.5 + 0.5) * window.innerWidth, y: (-V.y * 0.5 + 0.5) * window.innerHeight, z: V.z }; },
  clickAt: (x, y) => click(x, y), pickAt, lightning: () => lightning(true), flyby,
  sim: (n = 1, dt = 1 / 60) => { for (let i = 0; i < n; i++) step(dt); return true; }, render: () => { renderNow(); return true; }, hold: (h) => { held = !!h; },
  sounds: () => A.soundsReady().then(n => ({ n, names: A.soundNames() })), sfx: A.sfx, audio: A, fps: () => fps.ema,
  clean: () => { $('chapter').className = ''; $('msg').classList.remove('show'); $('tip').classList.remove('show'); $('toast').classList.remove('show'); msgTimer = 0; return true; },
  look: (yaw, pitch) => { cam.yaw = yaw; cam.pitch = pitch; snapCamera(); }, spot: (s) => { S.spot = s; snapCamera(); }, snapCam: snapCamera
};
