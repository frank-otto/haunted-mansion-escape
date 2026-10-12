// Prop builders: room shell, windows (moonlight + curtains + god rays), candles, chandeliers, furniture, ghosts.
import * as THREE from 'three';
import { srand, glowTexture } from './util.js';
import * as TX from './tex.js';

export const ENV = { map: null };
const matCache = {};
export function std(color, o = {}) { return new THREE.MeshStandardMaterial(Object.assign({ color, roughness: 0.75, metalness: 0 }, o)); }
export function metal(color = 0xc8963c, rough = 0.35) {
  const k = 'm' + color + rough; if (matCache[k]) return matCache[k];
  return (matCache[k] = new THREE.MeshStandardMaterial({ color, metalness: 0.85, roughness: rough, envMap: ENV.map, envMapIntensity: 1.0 }));
}
export function gold() { return metal(0xd4a24c, 0.32); }
export function iron() { return metal(0x3a3434, 0.55); }
export function woodMat(tone = [70, 38, 20], rep = [1, 1], o = {}) { const t = TX.toTex(TX.woodGrain(tone), rep); return std(0xffffff, Object.assign({ map: t, roughness: 0.62 }, o)); }
export function mesh(geo, mat, x = 0, y = 0, z = 0, parent) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); if (parent) parent.add(m); return m; }
export function box(w, h, d, mat, x, y, z, parent) { return mesh(new THREE.BoxGeometry(w, h, d), mat, x, y, z, parent); }
export function cyl(rt, rb, h, mat, x, y, z, parent, seg = 16) { return mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat, x, y, z, parent); }
export function sprite(tex, scale, x, y, z, parent, o = {}) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial(Object.assign({ map: tex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }, o)));
  s.scale.set(scale, scale, 1); s.position.set(x, y, z); if (parent) parent.add(s); return s;
}
let _glow = null, _flame = null, _cold = null, _dust = null;
export function glowT() { return _glow || (_glow = glowTexture('rgba(255,200,120,1)', 'rgba(255,120,30,0.3)')); }
export function coldT() { return _cold || (_cold = glowTexture('rgba(190,210,255,0.9)', 'rgba(110,130,255,0.25)')); }
export function flameT() { return _flame || (_flame = TX.toTex(TX.flameTex(), [1, 1])); }
export function dustT() { return _dust || (_dust = TX.toTex(TX.softDot('rgba(255,240,220,1)', 'rgba(255,220,180,0.25)'), [1, 1])); }

// ---------- room shell ----------
export function shell(R, o) {
  const { w, d, h, z0 = -d / 2 } = o; const g = R.group; const z1 = z0 + d;
  const floorT = TX.toTex(o.floor, o.floorRep || [w / 4, d / 4]);
  const floor = mesh(new THREE.PlaneGeometry(w, d), std(0xffffff, { map: floorT, roughness: o.floorRough ?? 0.45, metalness: 0.05 }), 0, 0, z0 + d / 2, g); floor.rotation.x = -Math.PI / 2;
  if (o.ceil !== false) { const cm = o.ceil ? std(0xffffff, { map: TX.toTex(o.ceil, [w / 4, d / 4]), roughness: 0.9 }) : std(0x1a1218, { roughness: 1 }); const c = mesh(new THREE.PlaneGeometry(w, d), cm, 0, h, z0 + d / 2, g); c.rotation.x = Math.PI / 2; }
  const wallMat = (len) => std(0xffffff, { map: TX.toTex(o.wall, [len / (o.wallScale || 3), h / (o.wallScale || 3)]), roughness: 0.85 });
  const walls = [
    [w, 0, h / 2, z0, 0], [w, 0, h / 2, z1, Math.PI], [d, -w / 2, h / 2, z0 + d / 2, Math.PI / 2], [d, w / 2, h / 2, z0 + d / 2, -Math.PI / 2]
  ];
  const hb = o.holeBack; // optional doorway in the back wall: { x, w, h }
  for (const [len, x, y, z, ry] of walls) {
    let geo = new THREE.PlaneGeometry(len, h);
    if (hb && ry === 0 && z === z0) { const sh = new THREE.Shape(); sh.moveTo(-len / 2, -h / 2); sh.lineTo(len / 2, -h / 2); sh.lineTo(len / 2, h / 2); sh.lineTo(-len / 2, h / 2); sh.lineTo(-len / 2, -h / 2);
      const hp = new THREE.Path(); hp.moveTo(hb.x - hb.w / 2, -h / 2 + 0.001); hp.lineTo(hb.x - hb.w / 2, -h / 2 + hb.h); hp.lineTo(hb.x + hb.w / 2, -h / 2 + hb.h); hp.lineTo(hb.x + hb.w / 2, -h / 2 + 0.001); sh.holes.push(hp);
      geo = new THREE.ShapeGeometry(sh); const uv = geo.attributes.uv, ps = geo.attributes.position; for (let i = 0; i < uv.count; i++) uv.setXY(i, ps.getX(i) / len + 0.5, ps.getY(i) / h + 0.5); }
    const m = mesh(geo, wallMat(len), x, y, z, g); m.rotation.y = ry; }
  if (o.wainscot) {
    const wm = woodMat([48, 26, 16], [4, 1]); const trim = woodMat([60, 32, 18], [6, 1]);
    const H = o.wainscot;
    const backSegs = hb ? [[(hb.x - hb.w / 2) + w / 2, (-w / 2 + hb.x - hb.w / 2) / 2], [w / 2 - (hb.x + hb.w / 2), (w / 2 + hb.x + hb.w / 2) / 2]] : [[w, 0]];
    for (const [len, x, z, ry] of [...backSegs.map(([l, cx]) => [l, cx, z0 + 0.04, 0]), [w, 0, z1 - 0.04, Math.PI], [d, -w / 2 + 0.04, z0 + d / 2, Math.PI / 2], [d, w / 2 - 0.04, z0 + d / 2, -Math.PI / 2]]) {
      const p = new THREE.Group(); p.position.set(x, 0, z); p.rotation.y = ry; g.add(p);
      box(len, H, 0.06, wm, 0, H / 2, 0, p); box(len, 0.08, 0.14, trim, 0, H, 0.03, p); box(len, 0.22, 0.1, trim, 0, 0.11, 0.02, p);
      for (let i = -len / 2 + 0.6; i < len / 2 - 0.4; i += 1.2) { box(0.9, H - 0.45, 0.03, trim, i + 0.15, H / 2 + 0.05, 0.045, p); }
    }
    // crown molding
    for (const [len, x, z, ry] of [[w, 0, z0 + 0.06, 0], [w, 0, z1 - 0.06, Math.PI], [d, -w / 2 + 0.06, z0 + d / 2, Math.PI / 2], [d, w / 2 - 0.06, z0 + d / 2, -Math.PI / 2]]) { const m = box(len, 0.25, 0.14, trim, x, h - 0.12, z, g); m.rotation.y = ry; }
  }
}

// ---------- window with moon, curtains, rays ----------
export function makeWindow(R, o) {
  const { x, y, z, ry = 0, w = 1.8, h = 3.2, arch = true, curtains = true, rays = true } = o;
  const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry; R.group.add(g);
  const skyT = TX.toTex(TX.nightWindow(o.moon !== false), [1, 1]);
  const sky = mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: skyT, color: new THREE.Color(1.15, 1.15, 1.3), fog: false }), 0, 0, -0.03, g);
  R.windows.push(sky);
  const fm = woodMat([30, 18, 14]);
  box(w + 0.3, 0.16, 0.3, fm, 0, -h / 2, 0.02, g); box(w + 0.3, 0.16, 0.25, fm, 0, h / 2, 0, g);
  box(0.16, h, 0.25, fm, -w / 2 - 0.07, 0, 0, g); box(0.16, h, 0.25, fm, w / 2 + 0.07, 0, 0, g);
  box(0.06, h, 0.06, fm, 0, 0, 0.02, g); for (let i = 1; i < 4; i++) box(w, 0.05, 0.06, fm, 0, -h / 2 + i * h / 4, 0.02, g);
  box(w + 0.6, 0.1, 0.45, woodMat([50, 28, 18]), 0, -h / 2 - 0.1, 0.15, g);
  if (arch) { const a = mesh(new THREE.TorusGeometry(w / 2 + 0.05, 0.09, 8, 24, Math.PI), fm, 0, h / 2, 0, g); const s2 = mesh(new THREE.CircleGeometry(w / 2, 24, 0, Math.PI), sky.material, 0, h / 2, -0.03, g); R.windows.push(s2); }
  // outside ghost drifting past (sprite behind the glass)
  if (o.ghost) { const gs = sprite(TX.toTex(ghostCard(R.kids), [1, 1]), 0.9, 0, 0, -0.015, g, { blending: THREE.NormalBlending, opacity: 0, fog: false }); R.drifters.push({ s: gs, w, h, t: srand(0, 20), period: srand(16, 26) }); }
  if (curtains) {
    const cm = std(o.curtain || 0x5a0c1c, { roughness: 0.9, side: THREE.DoubleSide, emissive: 0x200408, emissiveIntensity: 0.4 });
    for (const sd of [-1, 1]) {
      const geo = new THREE.PlaneGeometry(w * 0.42, h + (arch ? w / 2 : 0) + 0.6, 12, 16);
      const c = mesh(geo, cm, sd * (w / 2 + 0.05), 0.15 + (arch ? w / 4 : 0), 0.22, g);
      c.userData.base = geo.attributes.position.array.slice(); c.userData.sd = sd; R.curtains.push(c);
    }
    box(w + 1.2, 0.07, 0.07, gold(), 0, h / 2 + (arch ? w / 2 : 0) + 0.32, 0.25, g);
  }
  if (rays) {
    const rt = TX.toTex(TX.rayTex(), [1, 1]);
    for (let i = 0; i < (o.rayN || 3); i++) {
      const L = o.rayLen || 9; const pm = new THREE.MeshBasicMaterial({ map: rt, color: new THREE.Color(0.55, 0.62, 1.0), transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
      const p = new THREE.Mesh(new THREE.PlaneGeometry(w * srand(0.35, 0.7), L), pm);
      const piv = new THREE.Group(); piv.position.set(srand(-w * 0.3, w * 0.3), srand(-h * 0.2, h * 0.3), 0.2); g.add(piv);
      p.position.y = -L / 2; piv.add(p); piv.rotation.x = -(o.rayTilt ?? 0.95); piv.rotation.z = srand(-0.15, 0.15) + (o.rayRoll || 0); p.rotation.y = srand(-0.6, 0.6);
      R.rays.push({ m: pm, base: 0.028 + srand(0, 0.018), ph: srand(0, 6) });
    }
  }
  return g;
}
function ghostCard(kids) {
  const [c, g] = TX.cnv(128, 160);
  const r = g.createRadialGradient(64, 70, 4, 64, 80, 70); r.addColorStop(0, 'rgba(230,240,255,0.95)'); r.addColorStop(0.6, 'rgba(180,200,255,0.5)'); r.addColorStop(1, 'rgba(160,180,255,0)');
  g.fillStyle = r; g.beginPath(); g.moveTo(64, 10); g.bezierCurveTo(110, 10, 112, 80, 108, 150); g.lineTo(90, 135); g.lineTo(76, 152); g.lineTo(62, 136); g.lineTo(46, 152); g.lineTo(32, 136); g.lineTo(18, 150); g.bezierCurveTo(14, 80, 18, 10, 64, 10); g.fill();
  g.fillStyle = 'rgba(20,10,40,0.9)'; g.beginPath(); g.ellipse(48, 58, kids ? 8 : 7, kids ? 9 : 12, 0, 0, Math.PI * 2); g.fill(); g.beginPath(); g.ellipse(80, 58, kids ? 8 : 7, kids ? 9 : 12, 0, 0, Math.PI * 2); g.fill();
  if (kids) { g.strokeStyle = 'rgba(20,10,40,0.9)'; g.lineWidth = 4; g.beginPath(); g.arc(64, 80, 12, 0.2, Math.PI - 0.2); g.stroke(); } else { g.beginPath(); g.ellipse(64, 90, 8, 12, 0, 0, Math.PI * 2); g.fill(); }
  return c;
}
export function animateCurtains(R, t, gust) {
  for (const c of R.curtains) {
    const p = c.geometry.attributes.position, b = c.userData.base;
    for (let i = 0; i < p.count; i++) {
      const bx = b[i * 3], by = b[i * 3 + 1]; const k = (0.5 - by / (c.geometry.parameters.height)) ; // more at bottom
      const wv = Math.sin(t * 1.3 + bx * 4 + by * 0.8) * 0.05 + Math.sin(t * 2.1 + by * 2) * 0.03;
      p.setZ(i, (wv + gust * 0.5 * Math.sin(t * 6 + bx * 5)) * Math.max(0, k + 0.4) + Math.abs(Math.sin(bx * 9)) * 0.06);
      p.setX(i, bx + gust * 0.25 * Math.max(0, k) * c.userData.sd * -1);
    }
    p.needsUpdate = true;
  }
}

// ---------- candles ----------
export function makeCandle(R, h = 0.28, r = 0.035, lit = true, o = {}) {
  const g = new THREE.Group();
  const wax = cyl(r, r * 1.05, h, std(o.wax || 0xf0e2c4, { roughness: 0.5, emissive: 0xff9a40, emissiveIntensity: lit ? 0.12 : 0 }), 0, h / 2, 0, g, 10);
  const drip = mesh(new THREE.TorusGeometry(r * 0.9, r * 0.25, 5, 10), wax.material, 0, h - 0.01, 0, g); drip.rotation.x = Math.PI / 2;
  cyl(0.003, 0.003, 0.03, std(0x111111), 0, h + 0.015, 0, g, 4);
  const flame = sprite(flameT(), 1, 0, h + 0.05, 0, g); flame.scale.set(0.07 * (o.fs || 1), 0.14 * (o.fs || 1), 1);
  const glow = sprite(glowT(), 0.5 * (o.gs || 1), 0, h + 0.05, 0, g, { opacity: 0.55 });
  const C = { g, wax, flame, glow, lit, h, ph: srand(0, 10), fs: o.fs || 1, gs: o.gs || 1 };
  setLit(C, lit); R.candles.push(C); return C;
}
export function setLit(C, lit) { C.lit = lit; C.flame.visible = lit; C.glow.visible = lit; C.wax.material.emissiveIntensity = lit ? 0.12 : 0; }
export function flicker(C, t) {
  if (!C.lit) return;
  const f = 0.85 + 0.15 * Math.sin(t * 11 + C.ph) * Math.sin(t * 7.3 + C.ph * 2) + 0.06 * Math.sin(t * 23 + C.ph);
  C.flame.scale.set(0.07 * C.fs * (0.9 + 0.1 * f), 0.14 * C.fs * f, 1); C.flame.position.x = Math.sin(t * 5 + C.ph) * 0.004;
  C.glow.material.opacity = 0.42 + 0.18 * f;
}
export function candelabra(R, arms = 3, lit = true, scale = 1) {
  const g = new THREE.Group(); const m = gold();
  cyl(0.09, 0.13, 0.05, m, 0, 0.025, 0, g); cyl(0.02, 0.025, 0.4, m, 0, 0.22, 0, g, 8); mesh(new THREE.SphereGeometry(0.04, 10, 8), m, 0, 0.3, 0, g);
  const cs = [];
  for (let i = 0; i < arms; i++) {
    const a = arms === 1 ? 0 : (i / (arms - 1) - 0.5) * 2; const x = a * 0.2;
    if (arms > 1 && i !== (arms - 1) / 2) { const arm = mesh(new THREE.TorusGeometry(0.1, 0.012, 6, 12, Math.PI), m, x / 2, 0.42, 0, g); arm.rotation.z = a > 0 ? 0 : 0; arm.scale.set(Math.abs(a) * 1.0 + 0.001, 0.6, 1); arm.position.y = 0.38; }
    cyl(0.035, 0.02, 0.05, m, x, 0.44 + (a === 0 ? 0.08 : 0), 0, g, 8);
    const c = makeCandle(R, 0.22, 0.026, lit); c.g.position.set(x, 0.465 + (a === 0 ? 0.08 : 0), 0); g.add(c.g); cs.push(c);
  }
  g.scale.setScalar(scale); return { g, candles: cs };
}
export function chandelier(R, n = 8, rad = 1.0, drop = 1.6) {
  const g = new THREE.Group(); const m = gold();
  cyl(0.015, 0.015, drop, iron(), 0, drop / 2, 0, g, 6);
  const m2 = metal(0x8a6428, 0.55); const ring = mesh(new THREE.TorusGeometry(rad, 0.035, 8, 40), m2, 0, 0, 0, g); ring.rotation.x = Math.PI / 2;
  const ring2 = mesh(new THREE.TorusGeometry(rad * 0.55, 0.03, 8, 32), m2, 0, 0.35, 0, g); ring2.rotation.x = Math.PI / 2;
  mesh(new THREE.SphereGeometry(0.12, 12, 10), m, 0, 0.1, 0, g); mesh(new THREE.ConeGeometry(0.08, 0.35, 10), m, 0, -0.2, 0, g).rotation.x = Math.PI;
  const crystal = std(0xd8e8ff, { roughness: 0.05, metalness: 0.3, transparent: true, opacity: 0.75, emissive: 0x8090ff, emissiveIntensity: 0.25, envMap: ENV.map });
  for (let i = 0; i < n; i++) {
    const a = i / n * Math.PI * 2; const x = Math.cos(a) * rad, z = Math.sin(a) * rad;
    cyl(0.05, 0.03, 0.06, m, x, 0.03, z, g, 8);
    const c = makeCandle(R, 0.2, 0.025, true, { fs: 0.9, gs: 0.28 }); c.g.position.set(x, 0.06, z); g.add(c.g);
    const cr = mesh(new THREE.OctahedronGeometry(0.05), crystal, Math.cos(a + 0.4) * rad * 0.8, -0.2, Math.sin(a + 0.4) * rad * 0.8, g); cr.scale.y = 1.8;
    const sp = mesh(new THREE.TorusGeometry(rad * 0.5, 0.012, 4, 8, 1.2), m, x * 0.5, 0.18, z * 0.5, g); sp.rotation.y = -a;
  }
  return g;
}
// ---------- furniture ----------
export function table(w, d, h, mat, legs = true) {
  const g = new THREE.Group(); box(w, 0.06, d, mat, 0, h - 0.03, 0, g); box(w - 0.08, 0.12, d - 0.08, mat, 0, h - 0.12, 0, g);
  if (legs) for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const l = cyl(0.035, 0.025, h - 0.06, mat, sx * (w / 2 - 0.08), (h - 0.06) / 2, sz * (d / 2 - 0.08), g, 8); }
  return g;
}
export function frame(w, h, tex, depth = 0.08) {
  const g = new THREE.Group(); const m = gold();
  const pic = mesh(new THREE.PlaneGeometry(w, h), std(0xffffff, { map: tex, roughness: 0.55 }), 0, 0, depth * 0.5, g);
  const t = 0.14;
  for (const [fw, fh, x, y] of [[w + t * 2, t, 0, h / 2 + t / 2], [w + t * 2, t, 0, -h / 2 - t / 2], [t, h, -w / 2 - t / 2, 0], [t, h, w / 2 + t / 2, 0]]) box(fw, fh, depth + 0.06, m, x, y, depth * 0.5, g);
  for (const [fw, fh, x, y] of [[w + 0.04, 0.03, 0, h / 2 + 0.01], [w + 0.04, 0.03, 0, -h / 2 - 0.01], [0.03, h, -w / 2 - 0.01, 0], [0.03, h, w / 2 + 0.01, 0]]) box(fw, fh, 0.02, metal(0x5a3a10, 0.5), x, y, depth + 0.04, g);
  g.userData.pic = pic; return g;
}
export function cobweb(size = 1) {
  const [c, g] = TX.cnv(256, 256); g.strokeStyle = 'rgba(230,230,240,0.55)'; g.lineWidth = 1.2;
  for (let i = 0; i <= 8; i++) { const a = i / 8 * Math.PI / 2; g.beginPath(); g.moveTo(0, 0); g.lineTo(Math.cos(a) * 256, Math.sin(a) * 256); g.stroke(); }
  for (let r = 30; r < 256; r += 26) { g.beginPath(); for (let i = 0; i <= 8; i++) { const a = i / 8 * Math.PI / 2; const rr = r + Math.sin(i * 3 + r) * 6; i ? g.quadraticCurveTo(Math.cos(a - 0.1) * rr * 0.92, Math.sin(a - 0.1) * rr * 0.92, Math.cos(a) * rr, Math.sin(a) * rr) : g.moveTo(Math.cos(a) * rr, Math.sin(a) * rr); } g.stroke(); }
  const m = new THREE.MeshBasicMaterial({ map: TX.toTex(c, [1, 1]), transparent: true, depthWrite: false, side: THREE.DoubleSide, opacity: 0.6, color: 0x9a9ab0 });
  const p = new THREE.Mesh(new THREE.PlaneGeometry(size, size), m); p.geometry.translate(size / 2, -size / 2, 0); return p;
}
export function dust(R, n, bx, by, bz, cx = 0, cz = 0) {
  const geo = new THREE.BufferGeometry(); const pos = new Float32Array(n * 3); const sd = new Float32Array(n);
  for (let i = 0; i < n; i++) { pos[i * 3] = cx + srand(-bx, bx); pos[i * 3 + 1] = srand(0.2, by); pos[i * 3 + 2] = cz + srand(-bz, bz); sd[i] = srand(0, 100); }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('seed', new THREE.BufferAttribute(sd, 1));
  const mat = new THREE.ShaderMaterial({
    uniforms: { t: { value: 0 }, map: { value: dustT() }, pr: { value: 1 }, col: { value: new THREE.Color(1, 0.9, 0.75) } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: `attribute float seed; uniform float t; uniform float pr; varying float vA;
      void main(){ vec3 p = position; p.x += sin(t*0.13+seed)*0.5; p.y += sin(t*0.09+seed*1.7)*0.4; p.z += cos(t*0.11+seed*0.7)*0.5;
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv; float d = -mv.z;
        gl_PointSize = min(40.0, pr*(26.0 + 14.0*fract(seed))/d); vA = smoothstep(0.4,1.6,d)*(1.0-smoothstep(9.0,16.0,d))*(0.35+0.65*fract(seed*3.1))*(0.6+0.4*sin(t*0.7+seed*5.0)); }`,
    fragmentShader: `uniform sampler2D map; uniform vec3 col; varying float vA; void main(){ vec4 c = texture2D(map, gl_PointCoord); gl_FragColor = vec4(col*c.rgb, c.a*vA*0.55); }`
  });
  const pts = new THREE.Points(geo, mat); pts.frustumCulled = false; R.group.add(pts); R.dust = pts; return pts;
}
export function fogLayer(R, w, d, y, op = 0.2, color = 0x8a90c0, cz = 0) {
  const t = TX.toTex(TX.fogTex(), [1, 1]);
  for (let i = 0; i < 5; i++) {
    const m = new THREE.MeshBasicMaterial({ map: t, color, transparent: true, opacity: op, depthWrite: false, blending: THREE.AdditiveBlending, fog: false });
    const p = mesh(new THREE.PlaneGeometry(w * 0.7, d * 0.7), m, srand(-w / 4, w / 4), y + i * 0.08, cz + srand(-d / 4, d / 4), R.group); p.rotation.x = -Math.PI / 2; p.rotation.z = srand(0, 6);
    R.fog.push({ p, sp: srand(-0.03, 0.03) });
  }
}
// ---------- ghost (attic lady / cute kids ghost / flyby) ----------
export function makeGhostFigure(kids, scale = 1) {
  const g = new THREE.Group();
  const pts = []; for (let i = 0; i <= 24; i++) { const t = i / 24; const y = 1.2 - t * 2.6; const r = t < 0.25 ? Math.sin(t / 0.25 * Math.PI / 2) * 0.36 : t < 0.36 ? 0.36 - (t - 0.25) * 0.8 : 0.27 + (t - 0.36) * (kids ? 0.5 : 0.75); pts.push(new THREE.Vector2(Math.max(0.001, kids ? r * 1.25 : r), y)); }
  const geo = new THREE.LatheGeometry(pts, 48); const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) { const y = p.getY(i); if (y < -0.8) { const a = Math.atan2(p.getZ(i), p.getX(i)); p.setY(i, y + Math.sin(a * 7) * 0.12 * ((-0.8 - y) / 0.6)); } }
  geo.computeVertexNormals();
  const mat = new THREE.ShaderMaterial({
    uniforms: { t: { value: 0 }, op: { value: 1 }, col: { value: new THREE.Color(kids ? 0xd8f0ff : 0xbfd4ff) } }, transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
    vertexShader: `uniform float t; varying vec3 vN; varying vec3 vV; varying float vY; void main(){ vec3 p = position; float k = smoothstep(0.2,-1.4,p.y); p.x += sin(t*2.0+p.y*3.0)*0.08*k; p.z += cos(t*1.7+p.y*2.5)*0.08*k; vY = p.y;
      vec4 mv = modelViewMatrix*vec4(p,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }`,
    fragmentShader: `uniform vec3 col; uniform float op; uniform float t; varying vec3 vN; varying vec3 vV; varying float vY; void main(){ float f = 1.0 - abs(dot(vN, vV)); float a = (0.1 + pow(f, 2.0)*0.6) * smoothstep(-1.45,-0.6,vY) * op; a *= 0.85+0.15*sin(t*3.0+vY*6.0); gl_FragColor = vec4(col*(0.45+f*0.6), a); }`
  });
  const body = new THREE.Mesh(geo, mat); g.add(body);
  const eyeM = new THREE.MeshBasicMaterial({ color: 0x0a0618, transparent: true, opacity: 0.9 });
  const eyes = [];
  for (const d of [-1, 1]) { const e = mesh(new THREE.SphereGeometry(kids ? 0.07 : 0.05, 12, 8), eyeM, d * 0.12, 0.98, 0.3, g); e.scale.set(1, kids ? 1.1 : 1.4, 0.5); eyes.push(e);
    if (kids) mesh(new THREE.SphereGeometry(0.02, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }), d * 0.12 + 0.02, 1.01, 0.34, g); }
  const mouth = mesh(new THREE.SphereGeometry(0.05, 12, 8), eyeM, 0, 0.84, 0.32, g); mouth.scale.set(kids ? 1.4 : 0.8, kids ? 0.5 : 1.1, 0.4);
  // arms
  const armM = mat; const arms = [];
  for (const d of [-1, 1]) { const a = new THREE.Group(); a.position.set(d * 0.3, 0.55, 0); const m = mesh(new THREE.CapsuleGeometry(0.06, 0.6, 4, 8), armM, 0, -0.3, 0, a); g.add(a); a.rotation.z = d * 0.35; arms.push(a); }
  const halo = sprite(coldT(), 2.2, 0, 0.3, -0.3, g, { opacity: 0.35 });
  const light = new THREE.PointLight(0x9ab0ff, 6, 7, 2); light.position.set(0, 1.4, -0.6); g.add(light);
  g.scale.setScalar(scale);
  g.userData = { mat, eyes, mouth, arms, halo, light };
  return g;
}
export function makeBat(cute) {
  const g = new THREE.Group(); const m = std(cute ? 0x6a4aa0 : 0x18101c, { roughness: 0.7, emissive: cute ? 0x2a1050 : 0x080408, side: THREE.DoubleSide });
  mesh(new THREE.SphereGeometry(0.13, 14, 10), m, 0, 0, 0, g).scale.set(1, 1.2, 0.9);
  for (const d of [-1, 1]) { mesh(new THREE.ConeGeometry(0.05, 0.12, 4), m, d * 0.07, 0.17, 0, g);
    const e = mesh(new THREE.SphereGeometry(cute ? 0.045 : 0.025, 10, 8), new THREE.MeshBasicMaterial({ color: cute ? 0xffffff : 0xff3020 }), d * 0.055, 0.04, 0.11, g);
    if (cute) mesh(new THREE.SphereGeometry(0.022, 8, 6), new THREE.MeshBasicMaterial({ color: 0x100818 }), d * 0.055, 0.04, 0.15, g); }
  const wings = [];
  for (const d of [-1, 1]) { const piv = new THREE.Group(); piv.position.set(d * 0.1, 0.02, 0); g.add(piv);
    const s = new THREE.Shape(); s.moveTo(0, 0); s.quadraticCurveTo(0.2, 0.2, 0.42, 0.12); s.quadraticCurveTo(0.36, 0.0, 0.4, -0.1); s.quadraticCurveTo(0.28, -0.04, 0.22, -0.14); s.quadraticCurveTo(0.12, -0.04, 0, -0.08); s.lineTo(0, 0);
    const w = mesh(new THREE.ShapeGeometry(s), m, 0, 0, 0, piv); if (d < 0) w.scale.x = -1; wings.push(piv); }
  g.userData.wings = wings; return g;
}
