// Procedural canvas textures: wallpaper, wood, stone, rugs, portraits, clue sheets (no external images → works via file://)
import * as THREE from 'three';
import { srand } from './util.js';

const TAU = Math.PI * 2;
const cache = {};
export function cnv(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }
export function toTex(c, rep = [1, 1], srgb = true) {
  const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]); t.anisotropy = 4; return t;
}
function once(key, fn) { if (!cache[key]) { cache[key] = fn(); } return cache[key]; }
function noise(g, w, h, n, a, col = '0,0,0') { for (let i = 0; i < n; i++) { g.fillStyle = `rgba(${col},${srand(0, a)})`; g.fillRect(srand(0, w), srand(0, h), srand(1, 3), srand(1, 3)); } }

// ---------- damask wallpaper ----------
export function wallpaper(base = '#2a1830', ink = '#3e2446', gold = 'rgba(200,150,90,0.22)') {
  return once('wp' + base + ink, () => {
    const [c, g] = cnv(512, 512);
    g.fillStyle = base; g.fillRect(0, 0, 512, 512);
    const motif = (x, y, s) => {
      g.save(); g.translate(x, y); g.scale(s, s);
      g.fillStyle = ink; g.strokeStyle = gold; g.lineWidth = 2.2;
      g.beginPath(); g.moveTo(0, -90);
      g.bezierCurveTo(40, -60, 60, -20, 30, 10); g.bezierCurveTo(60, 30, 50, 70, 0, 95);
      g.bezierCurveTo(-50, 70, -60, 30, -30, 10); g.bezierCurveTo(-60, -20, -40, -60, 0, -90); g.fill(); g.stroke();
      g.beginPath(); g.ellipse(0, 0, 14, 24, 0, 0, TAU); g.fillStyle = base; g.fill(); g.stroke();
      for (const d of [-1, 1]) { g.beginPath(); g.moveTo(d * 30, 10); g.quadraticCurveTo(d * 80, -10, d * 70, -50); g.stroke(); g.beginPath(); g.arc(d * 70, -54, 6, 0, TAU); g.fillStyle = ink; g.fill(); g.stroke(); }
      g.restore();
    };
    for (const [x, y] of [[128, 128], [384, 384], [384, -128], [-128, 384], [384, 640], [640, 384]]) motif(x, y, 1);
    for (const [x, y] of [[384, 128], [128, 384]]) motif(x, y, 0.55);
    // vertical pinstripes + age stains
    g.fillStyle = 'rgba(0,0,0,0.12)'; for (let x = 0; x < 512; x += 64) g.fillRect(x, 0, 2, 512);
    for (let i = 0; i < 18; i++) { const r = g.createRadialGradient(srand(0, 512), srand(0, 512), 0, 256, 256, 0); }
    noise(g, 512, 512, 4000, 0.08);
    return c;
  });
}
// ---------- wood ----------
export function woodPlanks(tone = [92, 54, 30], planks = 6, len = 4) {
  return once('wood' + tone + planks, () => {
    const [c, g] = cnv(512, 512); const ph = 512 / planks;
    for (let i = 0; i < planks; i++) {
      const k = srand(0.75, 1.15); g.fillStyle = `rgb(${tone[0] * k | 0},${tone[1] * k | 0},${tone[2] * k | 0})`; g.fillRect(0, i * ph, 512, ph);
      for (let j = 0; j < 28; j++) { g.strokeStyle = `rgba(${srand(0, 1) < 0.5 ? '20,8,0' : '160,110,70'},${srand(0.05, 0.18)})`; g.lineWidth = srand(0.5, 2); g.beginPath(); const y = i * ph + srand(2, ph - 2); g.moveTo(0, y); for (let x = 0; x <= 512; x += 32) g.lineTo(x, y + Math.sin(x * 0.02 + j) * srand(0.5, 2.5)); g.stroke(); }
      g.fillStyle = 'rgba(10,4,0,0.85)'; g.fillRect(0, i * ph, 512, 2.5);
      const off = srand(0, 512); for (let x = off % (512 / len * 2); x < 512; x += 512 / len * 2) g.fillRect(x, i * ph, 2, ph);
      if (srand() < 0.5) { g.fillStyle = 'rgba(30,12,0,0.45)'; g.beginPath(); g.ellipse(srand(0, 512), i * ph + ph / 2, srand(4, 9), srand(2, 4), 0, 0, TAU); g.fill(); }
    }
    noise(g, 512, 512, 3000, 0.1);
    return c;
  });
}
export function woodGrain(tone = [70, 38, 20]) {
  return once('grain' + tone, () => {
    const [c, g] = cnv(256, 256); g.fillStyle = `rgb(${tone})`; g.fillRect(0, 0, 256, 256);
    for (let j = 0; j < 70; j++) { g.strokeStyle = `rgba(${srand() < 0.5 ? '15,6,0' : '150,100,60'},${srand(0.05, 0.2)})`; g.lineWidth = srand(0.5, 2.5); g.beginPath(); const x0 = srand(0, 256); g.moveTo(x0, 0); for (let y = 0; y <= 256; y += 16) g.lineTo(x0 + Math.sin(y * 0.03 + j) * srand(1, 5), y); g.stroke(); }
    noise(g, 256, 256, 1500, 0.1); return c;
  });
}
// ---------- stone ----------
export function stoneWall(tone = [70, 62, 70]) {
  return once('stone' + tone, () => {
    const [c, g] = cnv(512, 512); g.fillStyle = '#1a1418'; g.fillRect(0, 0, 512, 512);
    const rows = 8, rh = 512 / rows;
    for (let r = 0; r < rows; r++) { let x = r % 2 ? -40 : 0; while (x < 512) { const w = srand(60, 110); const k = srand(0.7, 1.2); g.fillStyle = `rgb(${tone[0] * k | 0},${tone[1] * k | 0},${tone[2] * k | 0})`; g.beginPath(); g.roundRect ? g.roundRect(x + 3, r * rh + 3, w - 6, rh - 6, 8) : g.rect(x + 3, r * rh + 3, w - 6, rh - 6); g.fill();
      const gr = g.createLinearGradient(0, r * rh, 0, r * rh + rh); gr.addColorStop(0, 'rgba(255,255,255,0.08)'); gr.addColorStop(1, 'rgba(0,0,0,0.25)'); g.fillStyle = gr; g.fill(); x += w; } }
    noise(g, 512, 512, 9000, 0.15); noise(g, 512, 512, 2000, 0.06, '255,255,255'); return c;
  });
}
export function stoneFloor() {
  return once('sfloor', () => {
    const [c, g] = cnv(512, 512); g.fillStyle = '#141014'; g.fillRect(0, 0, 512, 512);
    for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) { const k = srand(0.75, 1.15); g.fillStyle = `rgb(${62 * k | 0},${54 * k | 0},${52 * k | 0})`; g.fillRect(x * 128 + 3, y * 128 + 3, 122, 122); }
    noise(g, 512, 512, 9000, 0.14); return c;
  });
}
// ---------- marble checker ----------
export function marble() {
  return once('marble', () => {
    const [c, g] = cnv(512, 512);
    for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) { g.fillStyle = (x + y) % 2 ? '#1c1418' : '#8a7c74'; g.fillRect(x * 128, y * 128, 128, 128); }
    for (let i = 0; i < 40; i++) { g.strokeStyle = `rgba(${srand() < 0.5 ? '255,240,230' : '0,0,0'},${srand(0.04, 0.14)})`; g.lineWidth = srand(0.6, 2); g.beginPath(); let x = srand(0, 512), y = srand(0, 512); g.moveTo(x, y); for (let k = 0; k < 8; k++) { x += srand(-50, 50); y += srand(-50, 50); g.lineTo(x, y); } g.stroke(); }
    g.fillStyle = 'rgba(0,0,0,0.5)'; for (let i = 0; i <= 4; i++) { g.fillRect(i * 128 - 1, 0, 2, 512); g.fillRect(0, i * 128 - 1, 512, 2); }
    return c;
  });
}
// ---------- rug ----------
export function rug(main = '#6a1020', border = '#2a0610', gold = '#c89040') {
  return once('rug' + main, () => {
    const [c, g] = cnv(512, 1024); g.fillStyle = border; g.fillRect(0, 0, 512, 1024);
    g.fillStyle = main; g.fillRect(40, 40, 432, 944);
    g.strokeStyle = gold; g.lineWidth = 6; g.strokeRect(28, 28, 456, 968); g.lineWidth = 3; g.strokeRect(52, 52, 408, 920);
    g.save(); g.translate(256, 512); g.strokeStyle = gold; g.lineWidth = 4;
    for (let i = 0; i < 6; i++) { g.rotate(Math.PI / 3); g.beginPath(); g.ellipse(0, 90, 30, 90, 0, 0, TAU); g.stroke(); }
    g.beginPath(); g.arc(0, 0, 40, 0, TAU); g.fillStyle = border; g.fill(); g.stroke(); g.restore();
    for (let y = 120; y < 920; y += 60) { g.fillStyle = 'rgba(200,140,60,0.25)'; g.beginPath(); g.moveTo(100, y); g.lineTo(115, y + 15); g.lineTo(100, y + 30); g.lineTo(85, y + 15); g.fill(); g.beginPath(); g.moveTo(412, y); g.lineTo(427, y + 15); g.lineTo(412, y + 30); g.lineTo(397, y + 15); g.fill(); }
    noise(g, 512, 1024, 14000, 0.12); return c;
  });
}
// ---------- night sky behind windows ----------
export function nightWindow(moon = true, w = 256, h = 512) {
  return once('nw' + moon + w + h, () => {
    const [c, g] = cnv(w, h);
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#0a0c2c'); gr.addColorStop(0.6, '#2a2a6a'); gr.addColorStop(1, '#5a4a8a'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 80; i++) { g.fillStyle = `rgba(255,255,255,${srand(0.2, 0.9)})`; g.fillRect(srand(0, w), srand(0, h * 0.6), 1.5, 1.5); }
    if (moon) { const r = g.createRadialGradient(w * 0.62, h * 0.24, 0, w * 0.62, h * 0.24, w * 0.45); r.addColorStop(0, 'rgba(240,240,255,1)'); r.addColorStop(0.14, 'rgba(220,225,255,1)'); r.addColorStop(0.18, 'rgba(160,170,255,0.5)'); r.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = r; g.fillRect(0, 0, w, h); }
    // tree silhouettes
    g.fillStyle = '#05040e'; g.beginPath(); g.moveTo(0, h);
    for (let x = 0; x <= w; x += 8) g.lineTo(x, h * 0.82 - Math.abs(Math.sin(x * 0.05)) * h * 0.08 - (x % 64 < 8 ? h * 0.12 : 0)); g.lineTo(w, h); g.fill();
    g.strokeStyle = '#05040e'; g.lineWidth = 3; for (let i = 0; i < 4; i++) { const x = srand(0, w); g.beginPath(); g.moveTo(x, h * 0.85); g.lineTo(x + srand(-20, 20), h * 0.55); g.lineTo(x + srand(-40, 40), h * 0.45); g.stroke(); }
    return c;
  });
}
// ---------- glow / ray gradients ----------
export function rayTex() {
  return once('ray', () => {
    const [c, g] = cnv(128, 512);
    const gr = g.createLinearGradient(0, 0, 0, 512); gr.addColorStop(0, 'rgba(255,255,255,0.9)'); gr.addColorStop(0.5, 'rgba(255,255,255,0.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 128, 512);
    const sg = g.createLinearGradient(0, 0, 128, 0); sg.addColorStop(0, 'rgba(0,0,0,1)'); sg.addColorStop(0.25, 'rgba(0,0,0,0)'); sg.addColorStop(0.75, 'rgba(0,0,0,0)'); sg.addColorStop(1, 'rgba(0,0,0,1)');
    g.globalCompositeOperation = 'destination-out'; g.fillStyle = sg; g.fillRect(0, 0, 128, 512);
    return c;
  });
}
export function softDot(inner = 'rgba(255,255,255,1)', mid = 'rgba(255,255,255,0.3)') {
  return once('dot' + inner + mid, () => { const [c, g] = cnv(64, 64); const r = g.createRadialGradient(32, 32, 0, 32, 32, 32); r.addColorStop(0, inner); r.addColorStop(0.3, mid); r.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = r; g.fillRect(0, 0, 64, 64); return c; });
}
export function flameTex() {
  return once('flame', () => {
    const [c, g] = cnv(64, 128);
    const r = g.createRadialGradient(32, 92, 2, 32, 80, 52); r.addColorStop(0, 'rgba(255,255,235,1)'); r.addColorStop(0.18, 'rgba(255,220,120,1)'); r.addColorStop(0.45, 'rgba(255,120,20,0.75)'); r.addColorStop(1, 'rgba(120,20,0,0)');
    g.fillStyle = r; g.beginPath(); g.moveTo(32, 4); g.bezierCurveTo(52, 50, 58, 80, 32, 120); g.bezierCurveTo(6, 80, 12, 50, 32, 4); g.fill();
    return c;
  });
}
export function fogTex() {
  return once('fog', () => { const [c, g] = cnv(256, 256); for (let i = 0; i < 26; i++) { const x = srand(40, 216), y = srand(70, 186), rr = srand(30, 80); const r = g.createRadialGradient(x, y, 0, x, y, rr); r.addColorStop(0, 'rgba(255,255,255,0.18)'); r.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = r; g.fillRect(0, 0, 256, 256); } return c; });
}

// ---------- portraits ----------
function frameBg(g, w, h, a, b) { const gr = g.createRadialGradient(w / 2, h * 0.35, 10, w / 2, h / 2, h * 0.75); gr.addColorStop(0, a); gr.addColorStop(1, b); g.fillStyle = gr; g.fillRect(0, 0, w, h); }
function brush(g, w, h, n = 3000) { for (let i = 0; i < n; i++) { g.strokeStyle = `rgba(${srand() < 0.5 ? '0,0,0' : '255,230,200'},${srand(0.01, 0.05)})`; g.lineWidth = srand(1, 3); const x = srand(0, w), y = srand(0, h); g.beginPath(); g.moveTo(x, y); g.lineTo(x + srand(-8, 8), y + srand(-8, 8)); g.stroke(); } }
// kind: 'lord' (eye holes left blank for 3D eyes), 'lady', 'ladyScream', 'ladyWink', 'cat', 'ship'
export function portrait(kind) {
  return once('pt' + kind, () => {
    const w = 384, h = 512; const [c, g] = cnv(w, h);
    if (kind === 'ship') {
      frameBg(g, w, h, '#4a5a7a', '#0a0c1a');
      g.fillStyle = '#0c1420'; g.fillRect(0, h * 0.68, w, h);
      g.fillStyle = 'rgba(230,230,255,0.85)'; g.beginPath(); g.arc(w * 0.72, h * 0.2, 26, 0, TAU); g.fill();
      g.fillStyle = '#120c08'; g.beginPath(); g.moveTo(80, 340); g.lineTo(310, 340); g.lineTo(280, 380); g.lineTo(110, 380); g.fill();
      g.fillRect(190, 140, 6, 200); g.fillStyle = 'rgba(220,210,190,0.6)'; g.beginPath(); g.moveTo(196, 150); g.lineTo(290, 300); g.lineTo(196, 310); g.fill(); g.beginPath(); g.moveTo(190, 170); g.lineTo(110, 300); g.lineTo(190, 310); g.fill();
      brush(g, w, h); return toTex(c);
    }
    if (kind === 'cat') {
      frameBg(g, w, h, '#5a3a2a', '#0e0806');
      g.fillStyle = '#16101a'; g.beginPath(); g.ellipse(192, 380, 120, 130, 0, 0, TAU); g.fill(); g.beginPath(); g.ellipse(192, 230, 80, 72, 0, 0, TAU); g.fill();
      g.beginPath(); g.moveTo(122, 200); g.lineTo(130, 130); g.lineTo(170, 175); g.fill(); g.beginPath(); g.moveTo(262, 200); g.lineTo(254, 130); g.lineTo(214, 175); g.fill();
      g.fillStyle = '#e8c040'; for (const d of [-1, 1]) { g.beginPath(); g.ellipse(192 + d * 32, 228, 14, 10, 0, 0, TAU); g.fill(); }
      g.fillStyle = '#000'; for (const d of [-1, 1]) g.fillRect(192 + d * 32 - 2, 218, 4, 20);
      g.fillStyle = '#a02030'; g.fillRect(140, 300, 104, 14); g.fillStyle = '#e0b040'; g.beginPath(); g.arc(192, 322, 9, 0, TAU); g.fill();
      brush(g, w, h); return toTex(c);
    }
    const lady = kind.startsWith('lady');
    frameBg(g, w, h, lady ? '#3a4a3a' : '#5a3020', lady ? '#060a06' : '#0e0604');
    // shoulders / costume
    g.fillStyle = lady ? '#3a1030' : '#121018';
    g.beginPath(); g.moveTo(40, h); g.bezierCurveTo(50, 360, 120, 330, 192, 330); g.bezierCurveTo(264, 330, 334, 360, 344, h); g.fill();
    if (!lady) { g.fillStyle = '#e8e0d0'; g.beginPath(); g.moveTo(170, 330); g.lineTo(192, 390); g.lineTo(214, 330); g.fill(); g.fillStyle = '#8a1020'; g.fillRect(186, 336, 12, 40); }
    else { g.fillStyle = '#d0c8b8'; for (let i = 0; i < 9; i++) { g.beginPath(); g.arc(130 + i * 16, 350 + Math.sin(i / 8 * Math.PI) * 22, 6, 0, TAU); g.fill(); } }
    // neck + face
    const skin = kind === 'ladyScream' ? '#b8c4c8' : lady ? '#d8b8a0' : '#c89a7a';
    g.fillStyle = skin; g.fillRect(170, 280, 44, 60);
    g.beginPath(); g.ellipse(192, 220, 64, 84, 0, 0, TAU); g.fill();
    const shade = g.createRadialGradient(170, 200, 10, 192, 230, 100); shade.addColorStop(0, 'rgba(255,240,220,0.25)'); shade.addColorStop(1, 'rgba(40,10,0,0.45)'); g.fillStyle = shade; g.beginPath(); g.ellipse(192, 220, 64, 84, 0, 0, TAU); g.fill();
    // hair
    g.fillStyle = lady ? '#2a1408' : '#3a3434';
    if (lady) { g.beginPath(); g.ellipse(192, 150, 78, 56, 0, Math.PI, TAU); g.fill(); g.beginPath(); g.ellipse(192, 110, 46, 40, 0, 0, TAU); g.fill(); g.fillRect(118, 150, 18, 90); g.fillRect(248, 150, 18, 90); }
    else { g.beginPath(); g.ellipse(192, 158, 70, 40, 0, Math.PI, TAU); g.fill(); g.fillRect(124, 158, 14, 60); g.fillRect(246, 158, 14, 60); g.fillStyle = '#2a2424'; g.beginPath(); g.moveTo(150, 262); g.quadraticCurveTo(192, 250, 234, 262); g.quadraticCurveTo(192, 275, 150, 262); g.fill(); }
    // eyes
    if (kind === 'lord') { g.fillStyle = '#100808'; for (const d of [-1, 1]) { g.beginPath(); g.ellipse(192 + d * 26, 210, 14, 8, 0, 0, TAU); g.fill(); } }
    else if (kind === 'ladyScream') {
      g.fillStyle = '#05000a'; for (const d of [-1, 1]) { g.beginPath(); g.ellipse(192 + d * 26, 205, 18, 24, d * 0.2, 0, TAU); g.fill(); }
      g.fillStyle = 'rgba(255,40,40,0.9)'; for (const d of [-1, 1]) { g.beginPath(); g.arc(192 + d * 26, 208, 4, 0, TAU); g.fill(); }
      g.fillStyle = '#05000a'; g.beginPath(); g.ellipse(192, 272, 26, 40, 0, 0, TAU); g.fill();
    } else {
      for (const d of [-1, 1]) {
        if (kind === 'ladyWink' && d === 1) { g.strokeStyle = '#2a1408'; g.lineWidth = 4; g.beginPath(); g.arc(192 + d * 26, 206, 11, 0.2, Math.PI - 0.2); g.stroke(); continue; }
        g.fillStyle = '#f0ece4'; g.beginPath(); g.ellipse(192 + d * 26, 208, 12, 7, 0, 0, TAU); g.fill(); g.fillStyle = '#2a4a30'; g.beginPath(); g.arc(192 + d * 26, 208, 5, 0, TAU); g.fill();
      }
      g.fillStyle = '#8a2a2a'; g.beginPath(); g.ellipse(192, 266, 16, kind === 'ladyWink' ? 8 : 5, 0, 0, Math.PI); g.fill();
      if (kind === 'ladyWink') { g.fillStyle = 'rgba(255,100,120,0.4)'; for (const d of [-1, 1]) { g.beginPath(); g.ellipse(192 + d * 40, 242, 14, 8, 0, 0, TAU); g.fill(); } }
    }
    g.strokeStyle = 'rgba(60,20,10,0.6)'; g.lineWidth = 2; g.beginPath(); g.moveTo(192, 215); g.lineTo(186, 245); g.lineTo(196, 247); g.stroke();
    brush(g, w, h, 4000);
    // craquelure
    g.strokeStyle = 'rgba(0,0,0,0.12)'; g.lineWidth = 0.8; for (let i = 0; i < 60; i++) { let x = srand(0, w), y = srand(0, h); g.beginPath(); g.moveTo(x, y); for (let k = 0; k < 4; k++) { x += srand(-20, 20); y += srand(-20, 20); g.lineTo(x, y); } g.stroke(); }
    return toTex(c);
  });
}

// ---------- clue sheets ----------
const SYM = {
  moon: (g, s) => { g.beginPath(); g.arc(0, 0, s, 0, TAU); g.fill(); g.globalCompositeOperation = 'destination-out'; g.beginPath(); g.arc(s * 0.45, -s * 0.2, s * 0.85, 0, TAU); g.fill(); g.globalCompositeOperation = 'source-over'; },
  pumpkin: (g, s) => { for (const d of [-0.45, 0, 0.45]) { g.beginPath(); g.ellipse(d * s, 0, s * 0.55, s * 0.8, 0, 0, TAU); g.fill(); } g.fillRect(-s * 0.1, -s * 1.15, s * 0.2, s * 0.4); },
  bat: (g, s) => { g.beginPath(); g.moveTo(0, -s * 0.3); g.quadraticCurveTo(s * 0.5, -s * 0.9, s * 1.2, -s * 0.5); g.quadraticCurveTo(s * 0.9, 0, s * 1.0, s * 0.3); g.quadraticCurveTo(s * 0.6, s * 0.05, s * 0.4, s * 0.45); g.quadraticCurveTo(s * 0.2, s * 0.2, 0, s * 0.6); g.quadraticCurveTo(-s * 0.2, s * 0.2, -s * 0.4, s * 0.45); g.quadraticCurveTo(-s * 0.6, s * 0.05, -s * 1.0, s * 0.3); g.quadraticCurveTo(-s * 0.9, 0, -s * 1.2, -s * 0.5); g.quadraticCurveTo(-s * 0.5, -s * 0.9, 0, -s * 0.3); g.fill(); },
  skull: (g, s) => { g.beginPath(); g.ellipse(0, -s * 0.1, s * 0.85, s * 0.8, 0, 0, TAU); g.fill(); g.fillRect(-s * 0.45, s * 0.4, s * 0.9, s * 0.45); g.globalCompositeOperation = 'destination-out'; for (const d of [-1, 1]) { g.beginPath(); g.ellipse(d * s * 0.33, -s * 0.1, s * 0.22, s * 0.26, 0, 0, TAU); g.fill(); } g.beginPath(); g.moveTo(0, s * 0.15); g.lineTo(-s * 0.1, s * 0.35); g.lineTo(s * 0.1, s * 0.35); g.fill(); g.globalCompositeOperation = 'source-over'; },
  spider: (g, s) => { g.beginPath(); g.ellipse(0, s * 0.15, s * 0.42, s * 0.5, 0, 0, TAU); g.fill(); g.beginPath(); g.arc(0, -s * 0.45, s * 0.25, 0, TAU); g.fill(); g.lineWidth = s * 0.1; g.strokeStyle = g.fillStyle; for (const d of [-1, 1]) for (let i = 0; i < 4; i++) { g.beginPath(); g.moveTo(0, 0); g.lineTo(d * s * 0.9, -s * 0.5 + i * s * 0.35); g.lineTo(d * s * 1.15, -s * 0.2 + i * s * 0.4); g.stroke(); } }
};
export const SYMBOLS = ['moon', 'pumpkin', 'bat', 'skull', 'spider'];
export function drawSymbol(g, name, x, y, s, color) { g.save(); g.translate(x, y); g.fillStyle = color; SYM[name](g, s); g.restore(); }
export function symbolPlaque(name) {
  return once('sp' + name, () => {
    const [c, g] = cnv(128, 128); const gr = g.createLinearGradient(0, 0, 0, 128); gr.addColorStop(0, '#e0b060'); gr.addColorStop(0.5, '#a0702a'); gr.addColorStop(1, '#5a3a10'); g.fillStyle = gr; g.beginPath(); g.arc(64, 64, 60, 0, TAU); g.fill();
    g.strokeStyle = '#3a2008'; g.lineWidth = 5; g.stroke(); drawSymbol(g, name, 64, 66, 30, '#2a1404'); return toTex(c);
  });
}
function parchment(g, w, h) {
  const gr = g.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, Math.max(w, h) * 0.7); gr.addColorStop(0, '#f0dcb0'); gr.addColorStop(0.7, '#d4b47a'); gr.addColorStop(1, '#7a5428');
  g.fillStyle = gr; g.fillRect(0, 0, w, h); noise(g, w, h, 6000, 0.08, '90,50,10');
  for (let i = 0; i < 8; i++) { const x = srand(0, w), y = srand(0, h), r = srand(10, 40); const s = g.createRadialGradient(x, y, 0, x, y, r); s.addColorStop(0, 'rgba(120,70,20,0.2)'); s.addColorStop(1, 'rgba(120,70,20,0)'); g.fillStyle = s; g.fillRect(x - r, y - r, r * 2, r * 2); }
}
function ink(g, font, txt, x, y, col = '#3a1c08', align = 'center') { g.font = font; g.fillStyle = col; g.textAlign = align; g.textBaseline = 'middle'; g.fillText(txt, x, y); }
const SERIF = 'Georgia, "Times New Roman", serif';
// open book on the lectern: order of flames
export function flameBook(seq, title) {
  const [c, g] = cnv(1024, 640); parchment(g, 1024, 640);
  g.fillStyle = 'rgba(60,30,10,0.35)'; g.fillRect(508, 0, 8, 640);
  ink(g, `italic 700 40px ${SERIF}`, title[0], 256, 70); ink(g, `italic 30px ${SERIF}`, title[1], 256, 120, '#5a3010');
  for (let i = 0; i < 6; i++) { g.strokeStyle = 'rgba(60,30,10,0.25)'; g.lineWidth = 2; g.beginPath(); g.moveTo(60, 190 + i * 70); g.lineTo(460, 190 + i * 70); g.stroke(); }
  // flame drawing
  g.fillStyle = '#7a2a08'; g.beginPath(); g.moveTo(256, 230); g.bezierCurveTo(320, 330, 300, 430, 256, 470); g.bezierCurveTo(212, 430, 192, 330, 256, 230); g.fill();
  g.fillStyle = '#c86a10'; g.beginPath(); g.moveTo(256, 300); g.bezierCurveTo(290, 360, 280, 420, 256, 445); g.bezierCurveTo(232, 420, 222, 360, 256, 300); g.fill();
  g.fillStyle = '#3a1c08'; g.fillRect(232, 470, 48, 110);
  const n = seq.length, step = 440 / n;
  seq.forEach((s, i) => { const y = 90 + i * (520 / n) + 40; ink(g, `700 44px ${SERIF}`, ['I', 'II', 'III', 'IV', 'V'][i], 590, y); drawSymbol(g, s, 720, y, 34, '#3a1c08'); if (i < n - 1) ink(g, `40px ${SERIF}`, '↓', 860, y + 260 / n, '#5a3010'); });
  return toTex(c);
}
// recipe on the kitchen wall
export function recipeSheet(cols, title, crystalTxt) {
  const [c, g] = cnv(640, 900); parchment(g, 640, 900);
  ink(g, `italic 700 46px ${SERIF}`, title[0], 320, 80); ink(g, `italic 28px ${SERIF}`, title[1], 320, 130, '#5a3010');
  const n = cols.length + 1, gap = 600 / n;
  cols.forEach((col, i) => {
    const y = 210 + i * gap; ink(g, `700 52px ${SERIF}`, (i + 1) + '.', 120, y);
    g.fillStyle = col; g.strokeStyle = '#2a1404'; g.lineWidth = 5;
    g.beginPath(); g.moveTo(300, y - 60); g.lineTo(300, y - 30); g.bezierCurveTo(250, y - 10, 240, y + 50, 320, y + 60); g.bezierCurveTo(400, y + 50, 390, y - 10, 340, y - 30); g.lineTo(340, y - 60); g.closePath(); g.fill(); g.stroke();
    g.fillStyle = '#5a3010'; g.fillRect(296, y - 76, 48, 18);
  });
  const y = 210 + cols.length * gap; ink(g, `700 52px ${SERIF}`, n + '.', 120, y);
  g.fillStyle = '#c8e0ff'; g.strokeStyle = '#2a1404'; g.lineWidth = 5; g.beginPath(); g.moveTo(320, y - 60); g.lineTo(360, y); g.lineTo(320, y + 60); g.lineTo(280, y); g.closePath(); g.fill(); g.stroke();
  ink(g, `italic 30px ${SERIF}`, crystalTxt, 470, y, '#3a1c08');
  g.strokeStyle = 'rgba(60,30,10,0.4)'; g.lineWidth = 3; g.strokeRect(30, 30, 580, 840);
  return toTex(c);
}
// sheet music for the attic music box (colored notes)
export function sheetMusic(noteCols, title) {
  const [c, g] = cnv(900, 560); parchment(g, 900, 560);
  ink(g, `italic 700 44px ${SERIF}`, title, 450, 70);
  for (let i = 0; i < 5; i++) { g.strokeStyle = 'rgba(40,20,5,0.7)'; g.lineWidth = 3; g.beginPath(); g.moveTo(60, 200 + i * 40); g.lineTo(840, 200 + i * 40); g.stroke(); }
  ink(g, `140px ${SERIF}`, '𝄞', 110, 280, '#2a1404');
  const n = noteCols.length; noteCols.forEach(([col, pitch], i) => {
    const x = 240 + i * (560 / Math.max(1, n - 1 || 1)) * (n > 1 ? 1 : 0), y = 360 - pitch * 30;
    g.fillStyle = col; g.strokeStyle = '#1a0c04'; g.lineWidth = 4; g.beginPath(); g.ellipse(x, y, 26, 19, -0.35, 0, TAU); g.fill(); g.stroke();
    g.beginPath(); g.moveTo(x + 24, y - 6); g.lineTo(x + 24, y - 120); g.stroke();
  });
  return toTex(c);
}
// clock face (roman numerals)
export function clockFace() {
  return once('clock', () => {
    const [c, g] = cnv(512, 512); const r = g.createRadialGradient(256, 256, 20, 256, 256, 256); r.addColorStop(0, '#f4e8cc'); r.addColorStop(0.8, '#d8c49a'); r.addColorStop(1, '#8a6a3a');
    g.fillStyle = r; g.beginPath(); g.arc(256, 256, 250, 0, TAU); g.fill();
    g.strokeStyle = '#3a2408'; g.lineWidth = 6; g.beginPath(); g.arc(256, 256, 236, 0, TAU); g.stroke(); g.lineWidth = 2; g.beginPath(); g.arc(256, 256, 170, 0, TAU); g.stroke();
    const R = ['XII', 'I', 'II', 'III', 'IIII', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
    for (let i = 0; i < 12; i++) { const a = i / 12 * TAU - Math.PI / 2; g.save(); g.translate(256 + Math.cos(a) * 203, 256 + Math.sin(a) * 203); g.rotate(a + Math.PI / 2); ink(g, `700 40px ${SERIF}`, R[i], 0, 0, '#2a1404'); g.restore(); }
    for (let i = 0; i < 60; i++) { const a = i / 60 * TAU; g.fillStyle = '#3a2408'; g.save(); g.translate(256, 256); g.rotate(a); g.fillRect(-1.5, -236, 3, i % 5 ? 8 : 16); g.restore(); }
    noise(g, 512, 512, 3000, 0.08, '80,50,10'); return toTex(c);
  });
}
export function plaqueTex(lines, w = 512, h = 160) {
  const [c, g] = cnv(w, h); const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#e8c070'); gr.addColorStop(0.5, '#b08038'); gr.addColorStop(1, '#6a4818'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
  g.strokeStyle = '#3a2008'; g.lineWidth = 6; g.strokeRect(6, 6, w - 12, h - 12);
  lines.forEach((l, i) => ink(g, `${i ? 'italic ' : '700 '}${i ? 30 : 38}px ${SERIF}`, l, w / 2, h / (lines.length + 1) * (i + 1), '#2a1404'));
  return toTex(c);
}
export function bookSpine() {
  return once('spine', () => { const [c, g] = cnv(64, 256); g.fillStyle = '#fff'; g.fillRect(0, 0, 64, 256); g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(0, 0, 6, 256); g.fillRect(58, 0, 6, 256);
    g.fillStyle = '#e8c070'; for (const y of [24, 36, 210, 222]) g.fillRect(4, y, 56, 5); g.fillRect(16, 100, 32, 50); noise(g, 64, 256, 600, 0.15); return toTex(c, [1, 1], true); });
}
