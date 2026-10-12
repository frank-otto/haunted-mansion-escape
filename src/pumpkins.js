// Procedural pumpkins with carved glowing faces (copied from Pumpkin Smash; giant jack-o'-lanterns for the pumpkin forest).
import * as THREE from 'three';
import { glowTexture } from './util.js';

const TAU = Math.PI * 2;
function ribbedGeometry(ribs = 10, depth = 0.075, squash = 0.84, seg = 56) {
  const g = new THREE.SphereGeometry(1, seg, Math.round(seg * 0.6));
  const p = g.attributes.position, v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const phi = Math.atan2(v.z, v.x);
    const rib = Math.pow(Math.abs(Math.cos(phi * ribs / 2)), 0.6);
    const lat = Math.sqrt(Math.max(0, 1 - v.y * v.y));
    let r = 1 - depth * (1 - rib) * lat;
    let y = v.y * squash;
    if (v.y > 0.75) y -= (v.y - 0.75) * 0.55;          // top dimple around stem
    if (v.y < -0.8) y += (-0.8 - v.y) * 0.4;            // flat-ish bottom
    p.setXYZ(i, v.x * r, y, v.z * r);
  }
  g.computeVertexNormals();
  return g;
}

function ctx2(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }
function tex(c, srgb = true) { const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; }

// equirect: face centred at u=0.25 (x = W/4), v=0.5 (+z direction of the sphere)
function skinCanvas(W, H, base = ['#ff8a1e', '#e0640c', '#b24a06'], ribs = 10) {
  const [c, g] = ctx2(W, H);
  const lg = g.createLinearGradient(0, 0, 0, H); lg.addColorStop(0, base[2]); lg.addColorStop(0.18, base[1]); lg.addColorStop(0.5, base[0]); lg.addColorStop(0.82, base[1]); lg.addColorStop(1, base[2]);
  g.fillStyle = lg; g.fillRect(0, 0, W, H);
  for (let i = 0; i < ribs; i++) { // groove shading
    const x = (i + 0.5) * W / ribs;
    const gr = g.createLinearGradient(x - W / ribs / 2, 0, x + W / ribs / 2, 0);
    gr.addColorStop(0, 'rgba(90,25,0,0.55)'); gr.addColorStop(0.18, 'rgba(90,25,0,0)'); gr.addColorStop(0.5, 'rgba(255,200,120,0.10)'); gr.addColorStop(0.82, 'rgba(90,25,0,0)'); gr.addColorStop(1, 'rgba(90,25,0,0.55)');
    g.fillStyle = gr; g.fillRect(x - W / ribs / 2, 0, W / ribs, H);
  }
  for (let i = 0; i < W * H / 900; i++) { g.fillStyle = Math.random() < 0.5 ? 'rgba(255,190,90,0.10)' : 'rgba(80,20,0,0.12)'; g.fillRect(Math.random() * W, Math.random() * H, 1 + Math.random() * 3, 2 + Math.random() * 10); }
  return [c, g];
}

// face drawers: (g, cx, cy, s) draw filled holes in current fillStyle
const FACES = {
  evil(g, cx, cy, s) {
    g.beginPath(); g.moveTo(cx - 70 * s, cy - 18 * s); g.lineTo(cx - 28 * s, cy - 12 * s); g.lineTo(cx - 52 * s, cy - 58 * s); g.closePath(); g.fill();
    g.beginPath(); g.moveTo(cx + 70 * s, cy - 18 * s); g.lineTo(cx + 28 * s, cy - 12 * s); g.lineTo(cx + 52 * s, cy - 58 * s); g.closePath(); g.fill();
    g.beginPath(); g.moveTo(cx, cy - 6 * s); g.lineTo(cx - 12 * s, cy + 14 * s); g.lineTo(cx + 12 * s, cy + 14 * s); g.closePath(); g.fill();
    g.beginPath(); g.moveTo(cx - 92 * s, cy + 18 * s);
    const n = 8; for (let i = 0; i <= n; i++) { const x = cx - 92 * s + i * 184 * s / n; g.lineTo(x, cy + (30 + (i % 2 ? 14 : 0) + Math.sin(i / n * Math.PI) * 22) * s); }
    for (let i = n; i >= 0; i--) { const x = cx - 92 * s + i * 184 * s / n; g.lineTo(x, cy + (44 + (i % 2 ? -10 : 0) + Math.sin(i / n * Math.PI) * 44) * s); }
    g.closePath(); g.fill();
  },
  grin(g, cx, cy, s) {
    for (const d of [-1, 1]) { g.beginPath(); g.moveTo(cx + d * 22 * s, cy - 10 * s); g.lineTo(cx + d * 76 * s, cy - 14 * s); g.lineTo(cx + d * 50 * s, cy - 54 * s); g.closePath(); g.fill(); }
    g.beginPath(); g.moveTo(cx - 8 * s, cy + 4 * s); g.lineTo(cx + 8 * s, cy + 4 * s); g.lineTo(cx, cy - 12 * s); g.fill();
    g.beginPath(); g.moveTo(cx - 100 * s, cy + 6 * s); g.quadraticCurveTo(cx, cy + 120 * s, cx + 100 * s, cy + 6 * s); g.quadraticCurveTo(cx, cy + 62 * s, cx - 100 * s, cy + 6 * s); g.fill();
    g.save(); g.globalCompositeOperation = 'destination-out'; // teeth
    for (const x of [-40, 22]) { g.fillRect(cx + x * s, cy + 30 * s, 18 * s, 22 * s); }
    g.restore();
  },
  wild(g, cx, cy, s) {
    g.beginPath(); g.ellipse(cx - 46 * s, cy - 30 * s, 20 * s, 26 * s, 0.3, 0, TAU); g.fill();
    g.beginPath(); g.moveTo(cx + 24 * s, cy - 10 * s); g.lineTo(cx + 78 * s, cy - 24 * s); g.lineTo(cx + 46 * s, cy - 62 * s); g.closePath(); g.fill();
    g.beginPath(); g.moveTo(cx - 90 * s, cy + 22 * s);
    for (let i = 0; i <= 10; i++) g.lineTo(cx - 90 * s + i * 18 * s, cy + (22 + (i % 2 ? 22 : 0) + Math.sin(i / 10 * Math.PI) * 18) * s);
    g.lineTo(cx + 90 * s, cy + 22 * s);
    for (let i = 10; i >= 0; i--) g.lineTo(cx - 90 * s + i * 18 * s, cy + (60 + (i % 2 ? -14 : 0) + Math.sin(i / 10 * Math.PI) * 30) * s);
    g.closePath(); g.fill();
  },
  cute(g, cx, cy, s) {
    for (const d of [-1, 1]) { g.beginPath(); g.ellipse(cx + d * 44 * s, cy - 24 * s, 22 * s, 27 * s, 0, 0, TAU); g.fill(); }
    g.beginPath(); g.moveTo(cx - 62 * s, cy + 22 * s); g.quadraticCurveTo(cx, cy + 92 * s, cx + 62 * s, cy + 22 * s); g.quadraticCurveTo(cx, cy + 54 * s, cx - 62 * s, cy + 22 * s); g.fill();
    g.save(); g.globalCompositeOperation = 'destination-out';
    for (const d of [-1, 1]) { g.beginPath(); g.arc(cx + d * 44 * s + 8 * s, cy - 34 * s, 7 * s, 0, TAU); g.fill(); }
    g.restore();
  },
  happy(g, cx, cy, s) {
    for (const d of [-1, 1]) { g.beginPath(); g.arc(cx + d * 44 * s, cy - 14 * s, 24 * s, Math.PI, 0); g.lineTo(cx + d * 44 * s + 12 * s, cy - 14 * s); g.arc(cx + d * 44 * s, cy - 14 * s, 12 * s, 0, Math.PI, true); g.closePath(); g.fill(); }
    g.beginPath(); g.arc(cx, cy + 18 * s, 50 * s, 0.15, Math.PI - 0.15); g.closePath(); g.fill();
  },
  sleepy(g, cx, cy, s) {
    for (const d of [-1, 1]) { g.beginPath(); g.ellipse(cx + d * 44 * s, cy - 18 * s, 22 * s, 9 * s, 0, 0, Math.PI); g.fill(); }
    g.beginPath(); g.ellipse(cx, cy + 40 * s, 18 * s, 22 * s, 0, 0, TAU); g.fill();
  },
  boss(g, cx, cy, s) {
    for (const d of [-1, 1]) {
      g.beginPath(); g.moveTo(cx + d * 18 * s, cy - 6 * s); g.lineTo(cx + d * 96 * s, cy - 34 * s); g.lineTo(cx + d * 84 * s, cy - 4 * s); g.lineTo(cx + d * 52 * s, cy + 6 * s); g.closePath(); g.fill();
    }
    g.beginPath(); g.moveTo(cx - 10 * s, cy + 26 * s); g.lineTo(cx + 10 * s, cy + 26 * s); g.lineTo(cx, cy + 6 * s); g.fill();
    g.beginPath(); g.moveTo(cx - 128 * s, cy + 34 * s);
    const n = 12; for (let i = 0; i <= n; i++) g.lineTo(cx - 128 * s + i * 256 * s / n, cy + (40 + (i % 2 ? 26 : 0) + Math.sin(i / n * Math.PI) * 26) * s);
    for (let i = n; i >= 0; i--) g.lineTo(cx - 128 * s + i * 256 * s / n, cy + (64 + (i % 2 ? -22 : 0) + Math.sin(i / n * Math.PI) * 74) * s);
    g.closePath(); g.fill();
  },
  bosskids(g, cx, cy, s) {
    for (const d of [-1, 1]) { g.beginPath(); g.ellipse(cx + d * 52 * s, cy - 20 * s, 26 * s, 32 * s, 0, 0, TAU); g.fill(); }
    g.beginPath(); g.moveTo(cx - 90 * s, cy + 30 * s); g.quadraticCurveTo(cx, cy + 130 * s, cx + 90 * s, cy + 30 * s); g.quadraticCurveTo(cx, cy + 72 * s, cx - 90 * s, cy + 30 * s); g.fill();
    g.save(); g.globalCompositeOperation = 'destination-out'; for (const d of [-1, 1]) { g.beginPath(); g.arc(cx + d * 52 * s + 9 * s, cy - 32 * s, 8 * s, 0, TAU); g.fill(); } g.restore();
  }
};

function drawFace(gCol, gEm, face, W, H, scale, blush) {
  const cx = W / 4, cy = H * 0.5, s = scale * W / 1024;
  // colour map: carved holes = bright flesh, carved bevel shadow
  gCol.save(); gCol.shadowColor = 'rgba(60,10,0,0.9)'; gCol.shadowBlur = 10 * s; gCol.fillStyle = '#ffd36a'; FACES[face](gCol, cx, cy, s); gCol.restore();
  if (blush) { gCol.fillStyle = 'rgba(255,90,120,0.45)'; for (const d of [-1, 1]) { gCol.beginPath(); gCol.ellipse(cx + d * 76 * s, cy + 18 * s, 18 * s, 10 * s, 0, 0, TAU); gCol.fill(); } }
  // emissive: holes glow hot, soft spill around
  gEm.fillStyle = '#000'; gEm.fillRect(0, 0, W, H);
  gEm.save(); gEm.shadowColor = 'rgba(255,120,20,0.9)'; gEm.shadowBlur = 26 * s; gEm.fillStyle = '#ffb540'; FACES[face](gEm, cx, cy, s); gEm.restore();
  gEm.fillStyle = '#fff2b0'; gEm.save(); gEm.translate(cx, cy); gEm.scale(0.8, 0.8); gEm.translate(-cx, -cy); FACES[face](gEm, cx, cy + 6 * s, s); gEm.restore();
}

export function makeFaceMaterial(face, opts = {}) {
  const W = opts.W || 1024, H = W / 2;
  const [cCol, gCol] = skinCanvas(W, H, opts.base, opts.ribs || 10);
  const [cEm, gEm] = ctx2(W, H);
  drawFace(gCol, gEm, face, W, H, opts.scale || 1, !!opts.blush);
  const mat = new THREE.MeshStandardMaterial({ map: tex(cCol), emissiveMap: tex(cEm), emissive: new THREE.Color(opts.emissive || 0xffffff), emissiveIntensity: opts.ei || 2.4, roughness: 0.48, metalness: 0.0 });
  mat.userData = { cCol, gCol, cEm, gEm, face, W, H };
  // inner flesh on back faces (seen when the pumpkin is sliced open)
  mat.side = THREE.DoubleSide;
  mat.onBeforeCompile = (sh) => {
    sh.fragmentShader = sh.fragmentShader.replace('#include <dithering_fragment>', `#include <dithering_fragment>
      if (!gl_FrontFacing) {
        vec3 vp = vViewPosition; float ndv = abs(dot(normalize(normal), normalize(vp)));
        float fib = 0.5 + 0.5 * sin(dot(vp, vec3(37.0, 53.0, 21.0))) * sin(dot(vp, vec3(-23.0, 41.0, 67.0)));
        vec3 fl = mix(vec3(0.85, 0.28, 0.02), vec3(1.0, 0.55, 0.12), fib * 0.6 + ndv * 0.4);
        gl_FragColor = vec4(fl * (0.2 + 0.32 * ndv), 1.0);
      }`);
  };
  return mat;
}

const geoCache = {};
export function pumpkinGeometry(kind = 'n') {
  if (!geoCache[kind]) { geoCache[kind] = kind === 'boss' ? ribbedGeometry(14, 0.09, 0.8, 96) : kind === 'tall' ? ribbedGeometry(8, 0.07, 1.05, 48) : ribbedGeometry(10, 0.075, 0.84, 48); geoCache[kind].userData.shared = true; }
  return geoCache[kind];
}
const stemMat = new THREE.MeshStandardMaterial({ color: 0x4a3a18, roughness: 0.85 }); stemMat.userData.shared = true;
let stemGeo = null;
function stem(r) {
  if (!stemGeo) stemGeo = new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.02, 0.18, 0), new THREE.Vector3(0.12, 0.3, 0.02)), 6, 0.07, 6, false);
  stemGeo.userData.shared = true;
  const m = new THREE.Mesh(stemGeo, stemMat); m.scale.setScalar(r); return m;
}
const haloMats = {};
function haloMat(golden) {
  const k = golden ? 'g' : 'n';
  if (!haloMats[k]) { haloMats[k] = new THREE.SpriteMaterial({ map: haloTex(), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: golden ? 0.95 : 0.6, color: golden ? 0xffe070 : 0xffffff }); haloMats[k].userData.shared = true; }
  return haloMats[k];
}
let halo = null;
export function haloTex() { if (!halo) { halo = glowTexture('rgba(255,190,90,0.9)', 'rgba(255,100,20,0.28)'); halo.userData.shared = true; } return halo; }

export function makePumpkin(mat, radius, kind = 'n', golden = false) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(pumpkinGeometry(kind), mat); body.scale.setScalar(radius); g.add(body);
  const s = stem(radius * 1.3); s.position.y = radius * (kind === 'tall' ? 0.92 : 0.72); g.add(s);
  const h = new THREE.Sprite(haloMat(golden));
  h.scale.set(radius * 4.2, radius * 4.2, 1); h.position.z = -radius * 0.2; h.renderOrder = -1; g.add(h);
  g.userData.body = body; g.userData.halo = h;
  return g;
}

export function makeGhost(kind, kids) {
  const g = new THREE.Group();
  const pts = [];
  for (let i = 0; i <= 20; i++) { const t = i / 20; const y = 1 - t * 2.1; const r = t < 0.45 ? Math.sin(Math.min(1, t / 0.45) * Math.PI / 2) * 0.62 : 0.62 + (t - 0.45) * 0.25; pts.push(new THREE.Vector2(Math.max(0.001, r), y)); }
  const geo = new THREE.LatheGeometry(pts, 40);
  const p = geo.attributes.position; // wavy hem
  for (let i = 0; i < p.count; i++) { const y = p.getY(i); if (y < -0.6) { const a = Math.atan2(p.getZ(i), p.getX(i)); p.setY(i, y + Math.sin(a * 6) * 0.12 * ((-0.6 - y) / 0.5)); } }
  geo.computeVertexNormals();
  const col = kind === 'time' ? 0xa8fff0 : 0xffd0ff;
  const mat = new THREE.MeshStandardMaterial({ color: 0xe8e2f8, emissive: col, emissiveIntensity: 0.38, roughness: 0.5, transparent: true, opacity: 0.93, side: THREE.DoubleSide });
  const body = new THREE.Mesh(geo, mat); g.add(body);
  const eyeM = new THREE.MeshBasicMaterial({ color: 0x14081c });
  for (const d of [-1, 1]) {
    const e = new THREE.Mesh(new THREE.SphereGeometry(kids ? 0.15 : 0.13, 12, 8), eyeM); e.scale.set(1, kids ? 1.15 : 1.5, 0.6); e.position.set(d * 0.22, 0.42, 0.56); g.add(e);
    if (kids) { const hl = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff })); hl.position.set(d * 0.22 + 0.04, 0.48, 0.62); g.add(hl); }
  }
  const mouth = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 8), eyeM); mouth.scale.set(kids ? 1.3 : 1, kids ? 0.6 : 1.3, 0.4); mouth.position.set(0, 0.12, 0.6); g.add(mouth);
  const h = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(kind === 'time' ? 'rgba(160,255,240,0.9)' : 'rgba(255,170,255,0.9)', kind === 'time' ? 'rgba(60,200,200,0.25)' : 'rgba(200,80,255,0.25)'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.8 }));
  h.scale.set(3.4, 3.4, 1); h.position.z = -0.3; h.material.opacity = 0.55; g.add(h);
  // label sprite
  const [c, gg] = ctx2(256, 128);
  gg.font = '900 84px "Arial Black", Impact, sans-serif'; gg.textAlign = 'center'; gg.textBaseline = 'middle';
  gg.lineWidth = 12; gg.strokeStyle = 'rgba(30,0,40,0.9)'; const label = kind === 'time' ? '+5s' : 'x2';
  gg.strokeText(label, 128, 66); gg.fillStyle = kind === 'time' ? '#9ffff0' : '#ffb0ff'; gg.fillText(label, 128, 66);
  const lab = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex(c), depthWrite: false, transparent: true, color: new THREE.Color(1.6, 1.6, 1.6) }));
  lab.scale.set(1.3, 0.65, 1); lab.position.y = 1.45; g.add(lab);
  g.userData.body = body; g.userData.halo = h;
  return g;
}

export function makeBomb() {
  const g = new THREE.Group();
  const [cCol, gc] = ctx2(512, 256); gc.fillStyle = '#121016'; gc.fillRect(0, 0, 512, 256);
  const [cEm, ge] = ctx2(512, 256); ge.fillStyle = '#000'; ge.fillRect(0, 0, 512, 256);
  for (const [gx, colr] of [[gc, '#d8d0c0'], [ge, '#ff2a4a']]) { // skull
    gx.fillStyle = colr; gx.beginPath(); gx.ellipse(128, 118, 52, 46, 0, 0, TAU); gx.fill(); gx.fillRect(100, 140, 56, 34);
    gx.fillStyle = gx === gc ? '#121016' : '#ff8aa0';
    gx.beginPath(); gx.ellipse(108, 116, 15, 17, 0, 0, TAU); gx.fill(); gx.beginPath(); gx.ellipse(148, 116, 15, 17, 0, 0, TAU); gx.fill();
    gx.beginPath(); gx.moveTo(128, 132); gx.lineTo(120, 146); gx.lineTo(136, 146); gx.fill();
    for (let i = 0; i < 4; i++) gx.fillRect(106 + i * 12, 158, 4, 16);
  }
  const mat = new THREE.MeshStandardMaterial({ map: tex(cCol), emissiveMap: tex(cEm), emissive: 0xffffff, emissiveIntensity: 0.9, roughness: 0.25, metalness: 0.5 });
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.62, 32, 20), mat); g.add(body);
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.18, 0.18, 12), new THREE.MeshStandardMaterial({ color: 0x3a3440, metalness: 0.8, roughness: 0.3 })); cap.position.y = 0.62; g.add(cap);
  const fuse = new THREE.Mesh(new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(new THREE.Vector3(0, 0.68, 0), new THREE.Vector3(0.05, 0.95, 0), new THREE.Vector3(0.25, 1.0, 0)), 8, 0.03, 5), new THREE.MeshStandardMaterial({ color: 0xb09060 })); g.add(fuse);
  const spark = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,255,220,1)', 'rgba(255,80,40,0.5)'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
  spark.scale.set(0.7, 0.7, 1); spark.position.set(0.25, 1.0, 0); g.add(spark);
  const h = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,40,80,0.6)', 'rgba(140,0,60,0.25)'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.7 }));
  h.scale.set(3, 3, 1); h.position.z = -0.4; g.add(h);
  g.userData.body = body; g.userData.spark = spark; g.userData.halo = h;
  return g;
}

export function makeSleepyCat() {
  const g = new THREE.Group();
  const fur = new THREE.MeshStandardMaterial({ color: 0x241a30, roughness: 0.75, emissive: 0x2a1840, emissiveIntensity: 0.5 });
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.62, 28, 18), fur); body.scale.set(1.15, 0.7, 0.95); g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.36, 24, 16), fur); head.position.set(0.35, 0.18, 0.42); g.add(head);
  for (const d of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.22, 4), fur); ear.position.set(0.35 + d * 0.18, 0.5, 0.4); ear.rotation.z = -d * 0.35; g.add(ear);
    const eye = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.016, 6, 12, Math.PI), new THREE.MeshBasicMaterial({ color: 0xffd0ff })); eye.position.set(0.35 + d * 0.13, 0.2, 0.76); eye.rotation.z = Math.PI; g.add(eye);
  }
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff8ab0 })); nose.position.set(0.35, 0.12, 0.78); g.add(nose);
  const tail = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.08, 8, 24, Math.PI * 1.2), fur); tail.rotation.x = Math.PI / 2; tail.position.y = -0.25; g.add(tail);
  const [c, gg] = ctx2(256, 128); gg.font = '900 70px "Arial Black", sans-serif'; gg.fillStyle = '#e8d8ff'; gg.strokeStyle = '#2a1040'; gg.lineWidth = 8;
  gg.strokeText('Zzz', 40, 90); gg.fillText('Zzz', 40, 90);
  const z = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex(c), depthWrite: false, transparent: true })); z.scale.set(1.0, 0.5, 1); z.position.set(0.6, 0.95, 0); g.add(z);
  const h = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(200,160,255,0.6)', 'rgba(120,60,200,0.2)'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.6 }));
  h.scale.set(3, 3, 1); h.position.z = -0.4; g.add(h);
  g.userData.body = body; g.userData.zzz = z; g.userData.halo = h;
  return g;
}

// boss face with progressive glowing cracks
export function makeBoss(kids) {
  const mat = makeFaceMaterial(kids ? 'bosskids' : 'boss', { W: 2048, ribs: 14, scale: 1.0, ei: 1.1, emissive: 0xffa050, base: ['#ff8a1a', '#d85c08', '#8a3004'], blush: kids });
  const g = makePumpkin(mat, 2.6, 'boss');
  g.userData.halo.material = g.userData.halo.material.clone(); g.userData.halo.scale.set(14, 14, 1); g.userData.halo.material.opacity = 0.16;
  // vines
  const vm = new THREE.MeshStandardMaterial({ color: 0x2a4a18, roughness: 0.8 });
  for (let i = 0; i < 5; i++) {
    const a = i / 5 * TAU + 0.3;
    const pts = [new THREE.Vector3(0, 1.9, 0), new THREE.Vector3(Math.cos(a) * 1.4, 2.3, Math.sin(a) * 1.4), new THREE.Vector3(Math.cos(a) * 2.4, 1.2, Math.sin(a) * 2.4), new THREE.Vector3(Math.cos(a + 0.4) * 2.8, 0.2, Math.sin(a + 0.4) * 2.8)];
    g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, 0.07, 5), vm));
  }
  g.userData.mat = mat; g.userData.cracks = 0;
  return g;
}
const crackSeeds = [];
export function crackBoss(boss, level) { // level 0..1
  const m = boss.userData.mat, { gCol, gEm, cCol, cEm, W, H } = m.userData;
  const want = Math.floor(level * 26);
  while (boss.userData.cracks < want) {
    const i = boss.userData.cracks++;
    if (!crackSeeds[i]) crackSeeds[i] = { x: W / 4 + (Math.random() - 0.5) * W * 0.36, y: H * (0.2 + Math.random() * 0.6), a: Math.random() * TAU };
    const sd = crackSeeds[i];
    const path = []; let x = sd.x, y = sd.y, a = sd.a;
    for (let k = 0; k < 9; k++) { path.push([x, y]); a += (Math.random() - 0.5) * 1.2; const L = 14 + Math.random() * 30; x += Math.cos(a) * L; y += Math.sin(a) * L * 0.8; }
    for (const [gx, w, col] of [[gCol, 7, '#2a0800'], [gCol, 3, '#ffcf60'], [gEm, 6, 'rgba(255,110,15,0.75)'], [gEm, 2.5, '#ffd890']]) {
      gx.save(); gx.strokeStyle = col; gx.lineWidth = w; gx.lineJoin = 'round'; if (gx === gEm && w > 5) { gx.shadowColor = '#ff6a08'; gx.shadowBlur = 12; }
      gx.beginPath(); path.forEach(([px, py], j) => j ? gx.lineTo(px, py) : gx.moveTo(px, py)); gx.stroke(); gx.restore();
    }
  }
  m.map.needsUpdate = true; m.emissiveMap.needsUpdate = true;
}
