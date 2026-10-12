// The mansion: Foyer, Library, Witch Kitchen, Attic and the moonlit Garden. Each room is its own group; only the current one is visible.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { srand } from './util.js';
import * as TX from './tex.js';
import * as P from './props.js';
import { makePumpkin, makeFaceMaterial } from './pumpkins.js';
const { box, cyl, mesh, std, gold, iron, woodMat, sprite } = P;
const V3 = (x, y, z) => new THREE.Vector3(x, y, z);

function newRoom(name, offset, o = {}) {
  const group = new THREE.Group(); group.position.copy(offset); group.visible = false;
  return { name, group, offset, items: {}, hits: [], candles: [], windows: [], curtains: [], rays: [], drifters: [], fog: [], lights: [], anim: [], spots: {}, kids: o.kids,
    view: o.view, fogColor: o.fogColor ?? 0x120a18, fogDens: o.fogDens ?? 0.035, exposure: o.exposure ?? 1.0, flicker: [], bounds: o.bounds };
}
export function register(R, id, obj, label) {
  obj.traverse(m => { if (m.isMesh) { m.userData.iid = id; if (m.material && m.material.isMeshStandardMaterial) { m.material = m.material.clone(); m.userData.e0 = m.material.emissive.clone(); m.userData.ei0 = m.material.emissiveIntensity; } R.hits.push(m); } });
  obj.userData.iid = id; R.items[id] = obj; return obj;
}
function hitbox(R, id, w, h, d, x, y, z, parent) { const m = box(w, h, d, new THREE.MeshBasicMaterial({ visible: false }), x, y, z, parent || R.group); m.userData.iid = id; R.hits.push(m); if (!R.items[id]) R.items[id] = m; return m; }
const LIGHT_K = 3.2;
function pointLight(R, color, I, dist, x, y, z, flick = 0, parent) { I *= LIGHT_K; dist *= 1.3; const l = new THREE.PointLight(color, I, dist, 2); l.position.set(x, y, z); (parent || R.group).add(l); R.lights.push(l); if (flick) R.flicker.push({ l, base: I, k: flick, ph: srand(0, 10) }); return l; }
function moonSpot(R, x, y, z, tx, ty, tz, I = 40, shadow = false) {
  const s = new THREE.SpotLight(0x8fa6ff, I, 30, 0.55, 0.6, 1.5); s.position.set(x, y, z); s.target.position.set(tx, ty, tz); R.group.add(s, s.target);
  if (shadow) { s.castShadow = true; s.shadow.mapSize.set(1024, 1024); s.shadow.bias = -0.0008; s.shadow.camera.near = 1; s.shadow.camera.far = 30; }
  R.moon = s; return s;
}
function flashLight(R, x, y, z) { const d = new THREE.DirectionalLight(0xc8d4ff, 0); d.position.set(x, y, z); R.group.add(d, d.target); R.flash = d; return d; }
function cast(obj) { obj.traverse(m => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } }); return obj; }
function web(R, x, y, z, ry, rz, s) { const w = P.cobweb(s); w.position.set(x, y, z); w.rotation.set(0, ry, rz); R.group.add(w); }

// ======================= FOYER =======================
function buildFoyer(R, q) {
  const g = R.group;
  P.shell(R, { w: 18, d: 16, h: 10, z0: -10, floor: TX.marble(), floorRep: [4.5, 4], floorRough: 0.28, wall: TX.wallpaper('#1e1a2c', '#2c2440'), wallScale: 2.6, wainscot: 1.3, ceil: TX.woodPlanks([40, 24, 18], 8) });
  // runner rug
  const rugM = std(0xffffff, { map: TX.toTex(TX.rug('#5a0c18', '#22040a'), [1, 1]), roughness: 0.95 });
  const rg = mesh(new THREE.PlaneGeometry(3.2, 9), rugM, 0, 0.012, 0.6, g); rg.rotation.x = -Math.PI / 2; rg.receiveShadow = true;
  // grand staircase
  const wood = woodMat([46, 24, 14], [1, 1]); const carpet = std(0x6a0e1c, { roughness: 0.95 });
  const N = 12, rise = 0.34, run = 0.46, sx = 5.2, z0 = -4.2;
  for (let i = 0; i < N; i++) { const y = (i + 1) * rise, z = z0 - i * run; const sb = box(sx, rise, run, wood, 0, y - rise / 2, z - run / 2, g); sb.receiveShadow = true; sb.userData.noCol = 1; box(3.2, 0.03, run + 0.02, carpet, 0, y + 0.012, z - run / 2, g).userData.noCol = 1; box(3.2, rise, 0.02, carpet, 0, y - rise / 2, z + 0.005, g).userData.noCol = 1; }
  R.stairs = { sx, z0, run, N, rise, topY: N * rise };
  const topY = N * rise; box(18, 0.3, 1.5, wood, 0, topY - 0.15, -9.25, g).userData.noCol = 1;
  box(sx, topY, 0.4, wood, 0, topY / 2, -9.6, g).userData.noCol = 1;
  for (const sd of [-1, 1]) {
    // stringer + balusters + handrail
    const len = Math.hypot(N * run, N * rise); const ang = Math.atan2(N * rise, N * run);
    const st = box(0.18, 0.35, len, wood, sd * (sx / 2 + 0.05), topY / 2 + 0.05, z0 - N * run / 2, g); st.rotation.x = ang; st.userData.noCol = 1;
    const hr = box(0.12, 0.1, len + 0.3, wood, sd * (sx / 2 + 0.05), topY / 2 + 1.05, z0 - N * run / 2, g); hr.rotation.x = ang; hr.userData.noCol = 1;
    for (let i = 0; i < N; i++) cyl(0.03, 0.035, 0.95, wood, sd * (sx / 2 + 0.05), (i + 1) * rise + 0.5, z0 - i * run - run / 2, g, 6).userData.noCol = 1;
    const np = box(0.32, 1.35, 0.32, wood, sd * (sx / 2 + 0.05), 0.68, z0 + 0.15, g); mesh(new THREE.SphereGeometry(0.17, 14, 10), P.gold(), sd * (sx / 2 + 0.05), 1.48, z0 + 0.15, g);
    // gallery railing
    box(6.2, 0.1, 0.12, wood, sd * 6, topY + 1.0, -8.5, g); for (let x = 3.2; x < 9; x += 0.35) cyl(0.03, 0.035, 0.95, wood, sd * x, topY + 0.5, -8.5, g, 6);
  }
  // big portrait of Lord Ashgrave on the landing (eyes follow you)
  const lord = P.frame(2.2, 2.9, TX.portrait('lord')); lord.position.set(0, topY + 2.6, -9.95); g.add(lord);
  const eyes = [];
  for (const d of [-1, 1]) {
    // map: portrait 384x512 → 2.2x2.9 ; eye at (192±26, 210)
    const ex = (26 / 384) * 2.2 * d, ey = (0.5 - 210 / 512) * 2.9;
    const eg = new THREE.Group(); eg.position.set(ex, ey, 0.03); lord.add(eg);
    mesh(new THREE.SphereGeometry(0.055, 14, 10), std(0xe8e0d0, { roughness: 0.3, emissive: 0x302820, emissiveIntensity: 0.4 }), 0, 0, 0, eg).scale.set(1.3, 0.75, 0.3);
    const pupil = mesh(new THREE.SphereGeometry(0.026, 10, 8), new THREE.MeshBasicMaterial({ color: 0x0a0604 }), 0, 0, 0.016, eg);
    const glint = mesh(new THREE.SphereGeometry(0.008, 6, 4), new THREE.MeshBasicMaterial({ color: 0xff5030 }), 0, 0, 0.03, eg); glint.visible = false;
    eyes.push({ eg, pupil, glint });
  }
  register(R, 'portraitLord', lord); R.eyes = eyes; R.spots.portraitLord = { pos: V3(0, topY + 2.2, -6.2), look: V3(0, topY + 2.5, -9.9) };
  pointLight(R, 0xffb070, 1.2, 5, 0, topY + 4.4, -7.6); // picture light
  box(0.9, 0.06, 0.12, gold(), 0, topY + 4.15, -9.85, g);
  // windows on the gallery with moonlight streaming into the hall
  for (const sd of [-1, 1]) P.makeWindow(R, { x: sd * 6, y: topY + 2.4, z: -9.88, w: 1.7, h: 3.0, ghost: sd > 0, rayLen: 8, rayTilt: 0.85, rayN: q.rays > 4 ? 4 : 3, curtain: 0x3a0a2a });
  moonSpot(R, 4, topY + 4.5, -9.6, 0, 0, 0, 55, q.shadows);
  // chandelier (sways)
  const ch = P.chandelier(R, 10, 1.25, 4.9); ch.position.set(0, 5.1, -3.4); g.add(ch); R.chand = ch;
  R.chLight = pointLight(R, 0xffa050, 7, 16, 0, 3.4, -3.4, 0.12);
  for (const sd of [-1, 1]) { pointLight(R, 0xff9a48, 3.5, 7, sd * 3.6, 3.2, -8.6, 0.2); pointLight(R, 0xff9a48, 3, 7, sd * 7.5, 2.4, 0, 0.2); }
  register(R, 'chandelier', ch);
  // grandfather clock (left wall, ticking but frozen at 10:35)
  const clock = new THREE.Group(); clock.position.set(-8.5, 0, -4.2); clock.rotation.y = Math.PI / 2; g.add(clock);
  const cw = woodMat([56, 26, 12], [1, 2], { roughness: 0.45 });
  box(0.75, 0.5, 0.45, cw, 0, 0.25, 0, clock); box(0.6, 1.5, 0.38, cw, 0, 1.25, 0, clock); box(0.8, 0.85, 0.48, cw, 0, 2.42, 0, clock);
  const crown = mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.5, 20, 1, false, -Math.PI / 2, Math.PI), cw, 0, 2.85, 0, clock); crown.rotation.x = Math.PI / 2; crown.rotation.z = Math.PI / 2; crown.scale.set(1, 0.3, 1);
  const face = mesh(new THREE.CircleGeometry(0.31, 40), std(0xffffff, { map: TX.clockFace(), roughness: 0.4, emissive: 0x3a2a10, emissiveIntensity: 0.25 }), 0, 2.45, 0.245, clock);
  const ring = mesh(new THREE.TorusGeometry(0.32, 0.025, 8, 40), gold(), 0, 2.45, 0.25, clock);
  const hand = (len, wdt, ang) => { const p = new THREE.Group(); p.position.set(0, 2.45, 0.255); p.rotation.z = -ang; clock.add(p); box(wdt, len, 0.008, std(0x111111, { metalness: 0.6, roughness: 0.3 }), 0, len / 2 - 0.03, 0, p); return p; };
  hand(0.18, 0.022, (10 + 35 / 60) / 12 * Math.PI * 2); hand(0.27, 0.014, 35 / 60 * Math.PI * 2);
  const glass = mesh(new THREE.PlaneGeometry(0.4, 1.1), std(0x202a40, { roughness: 0.05, metalness: 0.2, transparent: true, opacity: 0.35, envMap: P.ENV.map }), 0, 1.3, 0.2, clock);
  const pend = new THREE.Group(); pend.position.set(0, 1.85, 0.12); clock.add(pend); cyl(0.008, 0.008, 0.7, gold(), 0, -0.35, 0, pend, 4); const bob = cyl(0.09, 0.09, 0.02, gold(), 0, -0.72, 0, pend, 20); bob.rotation.x = Math.PI / 2;
  R.pend = pend; register(R, 'clock', clock); R.spots.clock = { pos: V3(-7.15, 2.35, -4.2), look: V3(-8.5, 2.42, -4.2) };
  // console table with rattling drawer + mirror + candelabra
  const ct = new THREE.Group(); ct.position.set(-8.55, 0, 0.6); ct.rotation.y = Math.PI / 2; g.add(ct);
  const tw = woodMat([60, 30, 14], [1, 1], { roughness: 0.4 });
  const tb = P.table(1.8, 0.55, 0.92, tw); ct.add(tb);
  const drawer = new THREE.Group(); drawer.position.set(0, 0.8, 0.02); ct.add(drawer);
  box(0.8, 0.16, 0.5, tw, 0, 0, 0, drawer); box(0.82, 0.18, 0.03, tw, 0, 0, 0.26, drawer); mesh(new THREE.SphereGeometry(0.03, 8, 6), gold(), 0, 0, 0.29, drawer);
  const matches = new THREE.Group(); matches.position.set(0.1, 0.1, 0.05); drawer.add(matches);
  box(0.16, 0.03, 0.1, std(0x8a2a1a, { roughness: 0.6 }), 0, 0, 0, matches); box(0.12, 0.031, 0.06, std(0xe8d8b0), 0, 0.001, 0, matches);
  R.drawer = drawer; R.matchesObj = matches; register(R, 'drawer', drawer); R.spots.drawer = { pos: V3(-6.9, 1.7, 0.6), look: V3(-8.4, 0.8, 0.6) };
  const mir = P.frame(1.1, 1.5, null); mir.userData.pic.material = std(0x18202c, { roughness: 0.04, metalness: 0.9, envMap: P.ENV.map, envMapIntensity: 0.6 }); mir.position.set(0, 1.95, -0.25); ct.add(mir);
  const cb = P.candelabra(R, 3, true, 1.1); cb.g.position.set(0.6, 0.92, 0); ct.add(cb.g);
  pointLight(R, 0xff9a40, 5, 6, -8.0, 1.6, 0.0, 0.25);
  // side table at the foot of the stairs with the spare candle
  const st = P.table(0.6, 0.6, 0.8, tw); st.position.set(3.9, 0, -3.6); g.add(st);
  const lit = P.candelabra(R, 1, true, 1.0); lit.g.position.set(4.05, 0.8, -3.7); g.add(lit.g);
  const spare = new THREE.Group(); spare.position.set(3.75, 0.82, -3.45); g.add(spare);
  const sc = P.makeCandle(R, 0.3, 0.035, false); sc.g.rotation.z = Math.PI / 2; sc.g.position.set(0.12, 0.035, 0); spare.add(sc.g);
  R.candleItem = spare; register(R, 'candleItem', spare); hitbox(R, 'candleItem', 0.5, 0.3, 0.4, 0, 0.1, 0, spare);
  pointLight(R, 0xff9a40, 4, 5, 4.0, 1.4, -3.4, 0.25);
  // library door + code lock (right wall)
  const door = new THREE.Group(); door.position.set(8.96, 0, -3); door.rotation.y = -Math.PI / 2; g.add(door);
  const dw = woodMat([44, 22, 12], [1, 2], { roughness: 0.5 });
  box(2.1, 0.25, 0.25, dw, 0, 3.25, 0, door); box(0.22, 3.25, 0.25, dw, -1.05, 1.62, 0, door); box(0.22, 3.25, 0.25, dw, 1.05, 1.62, 0, door);
  const leaf = new THREE.Group(); leaf.position.set(-0.94, 0, 0.02); door.add(leaf);
  box(1.88, 3.1, 0.1, dw, 0.94, 1.55, 0, leaf); for (const [y, hh] of [[0.8, 1.1], [2.25, 1.3]]) box(1.4, hh, 0.04, woodMat([60, 30, 16]), 0.94, y, 0.07, leaf);
  mesh(new THREE.SphereGeometry(0.06, 10, 8), gold(), 1.65, 1.5, 0.12, leaf);
  R.libLeaf = leaf; register(R, 'libDoor', door);
  const lock = new THREE.Group(); lock.position.set(1.55, 1.45, 0.16); door.add(lock);
  box(0.36, 0.5, 0.08, gold(), 0, 0, 0, lock); for (let i = 0; i < 4; i++) { const wh = cyl(0.04, 0.04, 0.06, P.metal(0x6a4a20, 0.4), -0.12 + i * 0.08, 0.02, 0.05, lock, 10); wh.rotation.z = Math.PI / 2; }
  register(R, 'codeLock', lock); R.spots.libDoor = { pos: V3(6.6, 1.75, -1.6), look: V3(9, 1.45, -1.45) }; R.spots.codeLock = R.spots.libDoor;
  // portraits: lady (jump scare) + cat + ship
  const lady = P.frame(1.3, 1.75, TX.portrait('lady')); lady.position.set(8.92, 3.0, 2.4); lady.rotation.y = -Math.PI / 2; g.add(lady); R.lady = lady; register(R, 'portraitLady', lady);
  R.spots.portraitLady = { pos: V3(7.0, 2.8, 2.4), look: V3(8.9, 3.0, 2.4) };
  pointLight(R, 0xffb070, 2.5, 4, 8.3, 4.1, 2.4);
  const cat = P.frame(1.0, 1.3, TX.portrait('cat')); cat.position.set(-8.92, 3.4, -1.7); cat.rotation.y = Math.PI / 2; g.add(cat); register(R, 'portraitCat', cat);
  const ship = P.frame(1.4, 1.0, TX.portrait('ship')); ship.position.set(8.92, 3.0, -6.8); ship.rotation.y = -Math.PI / 2; g.add(ship); register(R, 'portraitShip', ship);
  // front door behind the player (z=6)
  const fd = new THREE.Group(); fd.position.set(0, 0, 5.96); fd.rotation.y = Math.PI; g.add(fd);
  const fdw = woodMat([36, 18, 10], [1, 2], { roughness: 0.55 });
  box(3.4, 0.4, 0.4, fdw, 0, 4.2, 0, fd); box(0.35, 4.2, 0.4, fdw, -1.7, 2.1, 0, fd); box(0.35, 4.2, 0.4, fdw, 1.7, 2.1, 0, fd);
  const fl = []; for (const sd of [-1, 1]) { const piv = new THREE.Group(); piv.position.set(sd * 1.52, 0, 0.05); fd.add(piv); const lf = box(1.5, 4.0, 0.14, fdw, -sd * 0.75, 2.0, 0, piv);
    for (const y of [1.0, 2.0, 3.2]) box(1.2, 0.08, 0.06, iron(), -sd * 0.75, y, 0.1, piv); mesh(new THREE.TorusGeometry(0.12, 0.02, 6, 16), iron(), -sd * 0.18, 1.9, 0.14, piv); fl.push(piv); }
  const fan = mesh(new THREE.CircleGeometry(1.5, 24, 0, Math.PI), new THREE.MeshBasicMaterial({ map: TX.toTex(TX.nightWindow(true, 256, 128), [1, 1]), fog: false }), 0, 4.4, -0.1, fd); R.windows.push(fan);
  const lockF = box(0.3, 0.4, 0.1, iron(), 0.3, 1.5, 0.2, fd); mesh(new THREE.TorusGeometry(0.05, 0.012, 6, 12), P.metal(0xc8d0e0, 0.25), 0.3, 1.5, 0.26, fd);
  R.frontLeaves = fl; register(R, 'frontDoor', fd); R.spots.frontDoor = { pos: V3(0, 1.9, 2.4), look: V3(0, 1.9, 6) };
  for (const sd of [-1, 1]) { const cs = P.candelabra(R, 3, true, 1.6); cs.g.position.set(sd * 2.6, 0, 5.3); g.add(cs.g); cyl(0.05, 0.12, 1.1, gold(), sd * 2.6, 0.55, 5.3, g, 10); cs.g.position.y = 1.1; }
  pointLight(R, 0xff9a40, 7, 7, 0, 2.6, 4.8, 0.2);
  // stairs (blocked) hit area
  hitbox(R, 'stairs', 5, 3, 4.8, 0, 2.0, -6.8);
  // details: cobwebs, armour-ish urns, plants
  web(R, -8.95, 9.95, -9.95, Math.PI / 2, 0, 2.2); web(R, 8.95, 9.95, -9.95, -Math.PI / 2, 0, 1.8); web(R, -8.95, 9.95, 5.95, Math.PI / 2, -Math.PI / 2, 1.6);
  for (const [x, z] of [[-6.5, -7.6], [6.5, -7.6]]) { const u = cyl(0.25, 0.18, 0.8, std(0x2a2a3a, { roughness: 0.4, metalness: 0.3 }), x, 0.4, z, g, 16); cyl(0.32, 0.22, 0.12, gold(), x, 0.86, z, g, 16); const pl = mesh(new THREE.ConeGeometry(0.5, 1.4, 8, 1, true), std(0x142010, { roughness: 1, side: THREE.DoubleSide }), x, 1.6, z, g); }
  // wall sconces
  for (const [x, z, ry] of [[-8.9, -6.8, Math.PI / 2], [8.9, -0.4, -Math.PI / 2], [-8.9, 5.0, Math.PI / 2]]) { const s = new THREE.Group(); s.position.set(x, 2.6, z); s.rotation.y = ry; g.add(s); box(0.12, 0.3, 0.06, gold(), 0, 0, 0, s); cyl(0.05, 0.02, 0.06, gold(), 0, 0.06, 0.12, s); const c = P.makeCandle(R, 0.2, 0.025, true); c.g.position.set(0, 0.09, 0.12); s.add(c.g); }
  pointLight(R, 0xff9a40, 4, 6, 8.2, 2.8, -0.4, 0.25);
  P.dust(R, Math.round(420 * q.particles), 8, 9, 7.5, 0, -2);
  P.fogLayer(R, 18, 16, 0.2, 0.06, 0x8a90c0, -2);
  R.hemi = new THREE.HemisphereLight(0x6070b0, 0x2a1408, 1.43); g.add(R.hemi);
  flashLight(R, 0, 8, -10);
  // a cute bat that waves from behind the lady portrait (kids surprise)
  const bat = P.makeBat(true); bat.position.set(8.6, 3.0, 2.4); bat.rotation.y = -Math.PI / 2; bat.scale.setScalar(0.001); g.add(bat); R.peekBat = bat;
  // edge richness: armour, plants, side tables, coat rack, umbrellas, sconces, banister finials
  for (const sd of [-1, 1]) { const ar = suitOfArmor(); ar.position.set(sd * 4.4, 0, -8.9); ar.rotation.y = -sd * 0.25; g.add(ar); pointLight(R, 0xffa050, 2.2, 4, sd * 4.0, 2.6, -7.8, 0.2);
    const pl = deadPlant(1.1); pl.position.set(sd * 3.2, 0, -6.3); g.add(pl);
    const sw = new THREE.Group(); sw.position.set(sd * 5.8, 3.2, -9.92); g.add(sw); box(0.16, 0.36, 0.06, gold(), 0, 0, 0, sw); cyl(0.03, 0.02, 0.25, gold(), 0, 0, 0.12, sw, 6).rotation.x = Math.PI / 2;
    const swc = P.makeCandle(R, 0.2, 0.03, true, { gs: 0.6 }); swc.g.position.set(0, 0.04, 0.24); sw.add(swc.g); pointLight(R, 0xff9a40, 2.5, 5, sd * 5.8, 3.4, -9.4, 0.25); }
  { const t2 = P.table(0.9, 0.5, 0.85, woodMat([56, 28, 14])); t2.position.set(-6.4, 0, -8.6); g.add(t2); const c2 = P.candelabra(R, 3, true, 1.0); c2.g.position.set(-6.4, 0.85, -8.6); g.add(c2.g);
    const bk = box(0.3, 0.06, 0.22, std(0x5a1018), -6.1, 0.88, -8.5, g); bk.rotation.y = 0.4; pointLight(R, 0xffa040, 3, 5, -6.4, 1.6, -8.2, 0.25);
    const t3 = P.table(0.9, 0.5, 0.85, woodMat([56, 28, 14])); t3.position.set(6.4, 0, -8.6); g.add(t3); const c3 = P.candelabra(R, 3, true, 1.0); c3.g.position.set(6.4, 0.85, -8.6); g.add(c3.g); pointLight(R, 0xffa040, 3, 5, 6.4, 1.6, -8.2, 0.25);
    const cr = coatRack(); cr.position.set(-6.0, 0, -2.6); g.add(cr); const us = umbrellaStand(); us.position.set(-5.5, 0, -2.0); g.add(us); pointLight(R, 0xff9a48, 2, 5, -5.6, 2.2, -1.8, 0.2);
    const pl3 = deadPlant(1.3); pl3.position.set(6.6, 0, -5.0); g.add(pl3); const pl4 = deadPlant(1.0); pl4.position.set(-7.6, 0, -6.6); g.add(pl4); }
  for (const sd of [-1, 1]) for (let i = 0; i < 4; i++) { const t = i / 3; const fy = 1.25 + t * 3.2, fz = -4.6 - t * 4.2; mesh(new THREE.SphereGeometry(0.055, 10, 8), gold(), sd * 2.62, fy + 0.1, fz, g); }
  web(R, -8.9, 6.5, -9.9, Math.PI / 4, 0, 1.6); web(R, 8.9, 1.3, -9.9, -Math.PI / 4, Math.PI / 2, 1.0);
  // kitchen door (left wall, bolted from the kitchen side) + attic door on the landing (brass padlock)
  { const kd = new THREE.Group(); kd.position.set(-8.96, 0, 3.0); kd.rotation.y = Math.PI / 2; g.add(kd); const kw = woodMat([44, 22, 12], [1, 2]);
    box(1.9, 0.22, 0.3, kw, 0, 2.95, 0, kd); for (const sd of [-1, 1]) box(0.18, 2.9, 0.3, kw, sd * 0.86, 1.45, 0, kd);
    const kl = new THREE.Group(); kl.position.set(-0.78, 0, 0.04); kd.add(kl); box(1.56, 2.8, 0.1, kw, 0.78, 1.4, 0, kl); for (const y of [0.7, 2.1]) box(1.5, 0.07, 0.04, iron(), 0.78, y, 0.06, kl); mesh(new THREE.SphereGeometry(0.05, 10, 8), gold(), 1.35, 1.3, 0.1, kl);
    R.kitLeaf = kl; register(R, 'kitchenDoor', kd); pointLight(R, 0xffa050, 2.5, 5, -8.2, 2.6, 3.0, 0.2);
    const sw = new THREE.Group(); sw.position.set(-8.9, 2.6, 4.6); sw.rotation.y = Math.PI / 2; g.add(sw); box(0.12, 0.3, 0.06, gold(), 0, 0, 0, sw); const swc = P.makeCandle(R, 0.2, 0.03, true, { gs: 0.6 }); swc.g.position.set(0, 0.05, 0.14); sw.add(swc.g); }
  { const tY = N * rise; const ad = new THREE.Group(); ad.position.set(-3.7, tY, -9.93); g.add(ad); const adw = woodMat([40, 22, 12], [1, 2]);
    const adLeaf = new THREE.Group(); adLeaf.position.set(-0.6, 0, 0.05); ad.add(adLeaf); box(1.2, 2.5, 0.1, adw, 0.6, 1.25, 0, adLeaf); for (const y of [0.6, 1.9]) box(1.2, 0.08, 0.04, iron(), 0.6, y, 0.07, adLeaf);
    box(1.5, 0.18, 0.2, adw, 0, 2.6, 0, ad); box(0.15, 2.6, 0.2, adw, -0.68, 1.3, 0, ad); box(0.15, 2.6, 0.2, adw, 0.68, 1.3, 0, ad);
    const pad = new THREE.Group(); pad.position.set(0.95, 1.25, 0.14); adLeaf.add(pad); box(0.14, 0.12, 0.05, P.metal(0xc89a40, 0.3), 0, 0, 0, pad); mesh(new THREE.TorusGeometry(0.045, 0.012, 6, 12, Math.PI), P.metal(0xb0b0b0, 0.3), 0, 0.06, 0, pad);
    R.atticLeaf = adLeaf; R.padlock = pad; register(R, 'atticDoor', ad); R.spots.atticDoor = { pos: V3(-3.7, tY + 1.7, -7.6), look: V3(-3.7, tY + 1.3, -9.9) };
    pointLight(R, 0xffa050, 2.5, 5, -3.7, tY + 2.4, -9.0, 0.2); }
  R.view = { pos: V3(0, 1.75, 2.4), yaw: 0, pitch: 0.1 };
  R.doorSpot = { libDoor: V3(8.5, 1.7, -3) };
}

// ======================= LIBRARY =======================
function shelfUnit(R, w, h, d, books = true, rnd = 1) {
  const g = new THREE.Group(); const wm = woodMat([50, 26, 14], [1, 2], { roughness: 0.55 });
  box(w, h, 0.05, wm, 0, h / 2, -d / 2 + 0.025, g); box(0.08, h, d, wm, -w / 2, h / 2, 0, g); box(0.08, h, d, wm, w / 2, h / 2, 0, g); box(w + 0.2, 0.15, d + 0.1, wm, 0, h + 0.07, 0.02, g);
  const rows = Math.floor(h / 0.55);
  const spine = TX.bookSpine();
  const cols = [0x5a1018, 0x1a3a24, 0x1a2448, 0x4a2a10, 0x3a1040, 0x6a4a18, 0x202020, 0x7a2a10];
  let count = 0; const list = [];
  for (let r = 0; r < rows; r++) { const y = 0.12 + r * (h - 0.2) / rows; box(w - 0.08, 0.04, d - 0.04, wm, 0, y, 0, g);
    if (!books) continue; let x = -w / 2 + 0.08; while (x < w / 2 - 0.16) { const bw = srand(0.05, 0.11), bh = srand(0.28, 0.44) * Math.min(1, (h - 0.2) / rows / 0.5), bd = d * srand(0.6, 0.85); if (srand() < 0.04) { x += srand(0.1, 0.25); continue; }
      list.push([x + bw / 2, y + 0.02 + bh / 2, bd, bw, bh, cols[(srand(0, cols.length)) | 0], srand() < 0.15 ? srand(-0.25, 0.25) : 0]); x += bw + 0.004; } }
  if (list.length) {
    const im = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), std(0xffffff, { map: spine, roughness: 0.7 }), list.length); const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), E = new THREE.Euler(), S = new THREE.Vector3(), Pp = new THREE.Vector3();
    list.forEach(([x, y, bd, bw, bh, c, lean], i) => { Q.setFromEuler(E.set(0, 0, lean)); M.compose(Pp.set(x, y, -d / 2 + 0.05 + bd / 2), Q, S.set(bw, bh, bd)); im.setMatrixAt(i, M); im.setColorAt(i, new THREE.Color(c).multiplyScalar(srand(0.7, 1.2))); });
    g.add(im);
  }
  return g;
}

// ---------- shared rich props ----------
function clothDrape(w, h, d, col = 0x7a7484) {
  // a sheet thrown over a box: flat top, sides falling with sinusoidal folds and a flared hem
  const ext = h * 1.15, sx = w + 2 * ext, sz = d + 2 * ext, N = 56;
  const geo = new THREE.PlaneGeometry(sx, sz, N, N); geo.rotateX(-Math.PI / 2); const p = geo.attributes.position;
  const ph = srand(0, 6);
  for (let i = 0; i < p.count; i++) { const x = p.getX(i), z = p.getZ(i);
    const dx = Math.max(Math.abs(x) - w / 2, 0), dz = Math.max(Math.abs(z) - d / 2, 0); const e = Math.max(dx, dz);
    let X = Math.sign(x) * Math.min(Math.abs(x), w / 2), Z = Math.sign(z) * Math.min(Math.abs(z), d / 2), Y = h + 0.02 + Math.sin(x * 5 + ph) * Math.sin(z * 4) * 0.012;
    if (e > 0) { const fall = Math.min(e, h); const k = fall / h; const along = dx >= dz ? z : x;
      const fold = (Math.sin(along * 9 + ph) * 0.6 + Math.sin(along * 17 + ph * 2) * 0.3) * 0.05 * (0.3 + k) + 0.03 + k * k * 0.12;
      Y = h + 0.02 - fall - Math.max(e - h, 0) * 0.05; const r = Math.min(0.06, e) * (1 - k) * 0.8;
      if (dx >= dz) X += Math.sign(x) * (fold + r); else Z += Math.sign(z) * (fold + r);
      if (dx > 0 && dz > 0) { X += Math.sign(x) * 0.04; Z += Math.sign(z) * 0.04; } Y = Math.max(Y, 0.005); }
    p.setXYZ(i, X, Y, Z); }
  geo.computeVertexNormals();
  return new THREE.Mesh(geo, std(col, { roughness: 0.95, side: THREE.DoubleSide, bumpMap: TX.toTex(TX.stoneWall([128, 128, 128]), [3, 3], false), bumpScale: 0.004 }));
}
function suitOfArmor() {
  const a = new THREE.Group(); const st = P.metal(0x9aa0aa, 0.38), dk = P.metal(0x4a4e58, 0.5);
  box(0.6, 0.15, 0.45, woodMat([30, 18, 10]), 0, 0.075, 0, a);
  for (const sd of [-1, 1]) { cyl(0.08, 0.07, 0.75, st, sd * 0.12, 0.55, 0, a, 10); mesh(new THREE.SphereGeometry(0.09, 10, 8), dk, sd * 0.12, 0.92, 0.02, a); cyl(0.09, 0.08, 0.5, st, sd * 0.12, 1.2, 0, a, 10);
    mesh(new THREE.SphereGeometry(0.13, 12, 10), st, sd * 0.28, 1.85, 0, a); const arm = cyl(0.06, 0.05, 0.62, st, sd * 0.32, 1.5, 0.04, a, 10); arm.rotation.z = sd * 0.1; mesh(new THREE.SphereGeometry(0.06, 8, 6), dk, sd * 0.34, 1.16, 0.08, a); }
  const torso = cyl(0.2, 0.26, 0.6, st, 0, 1.65, 0, a, 16); torso.scale.z = 0.75; cyl(0.24, 0.2, 0.18, dk, 0, 1.38, 0, a, 16).scale.z = 0.75;
  const helm = mesh(new THREE.SphereGeometry(0.15, 16, 12), st, 0, 2.15, 0, a); helm.scale.y = 1.2; box(0.2, 0.02, 0.05, new THREE.MeshBasicMaterial({ color: 0x050505 }), 0, 2.16, 0.14, a);
  mesh(new THREE.ConeGeometry(0.03, 0.15, 6), std(0x8a1020), 0, 2.36, 0, a);
  cyl(0.015, 0.015, 2.4, woodMat([50, 30, 16]), 0.4, 1.2, 0.1, a, 6); const blade = mesh(new THREE.ConeGeometry(0.06, 0.3, 4), st, 0.4, 2.5, 0.1, a); blade.scale.z = 0.25;
  return a;
}
function deadPlant(s = 1) {
  const g = new THREE.Group(); g.scale.setScalar(s); cyl(0.26, 0.18, 0.45, std(0x5a2a1a, { roughness: 0.7 }), 0, 0.22, 0, g, 18); cyl(0.28, 0.28, 0.05, std(0x6a3420, { roughness: 0.7 }), 0, 0.45, 0, g, 18);
  const tw = std(0x2a1a10, { roughness: 1 });
  for (let i = 0; i < 7; i++) { const b = new THREE.Group(); b.position.y = 0.45; b.rotation.set(srand(-0.6, 0.6), srand(0, 6), srand(-0.6, 0.6)); g.add(b); cyl(0.004, 0.015, 0.9, tw, 0, 0.45, 0, b, 4);
    const t2 = new THREE.Group(); t2.position.y = 0.6; t2.rotation.z = srand(-1, 1); b.add(t2); cyl(0.002, 0.008, 0.35, tw, 0, 0.17, 0, t2, 3); }
  return g;
}
function coatRack() {
  const g = new THREE.Group(); const w = woodMat([40, 22, 12]); cyl(0.03, 0.04, 1.9, w, 0, 0.95, 0, g, 8); mesh(new THREE.SphereGeometry(0.05, 8, 6), w, 0, 1.92, 0, g);
  for (let i = 0; i < 3; i++) { const l = cyl(0.015, 0.02, 0.5, w, 0, 0.2, 0, g, 5); l.position.set(Math.cos(i * 2.1) * 0.15, 0.18, Math.sin(i * 2.1) * 0.15); l.rotation.set(Math.sin(i * 2.1) * 0.6, 0, -Math.cos(i * 2.1) * 0.6); }
  for (let i = 0; i < 4; i++) { const h = cyl(0.012, 0.012, 0.22, w, Math.cos(i * 1.57) * 0.1, 1.75, Math.sin(i * 1.57) * 0.1, g, 4); h.rotation.set(Math.sin(i * 1.57) * 0.9, 0, -Math.cos(i * 1.57) * 0.9); }
  const coat = clothDrape(0.22, 0.95, 0.12, 0x2a1428); coat.position.set(0.12, 0.8, 0); g.add(coat);
  const hat = new THREE.Group(); hat.position.set(-0.13, 1.78, 0); hat.rotation.z = 0.3; g.add(hat); cyl(0.16, 0.16, 0.015, std(0x141018), 0, 0, 0, hat, 20); cyl(0.09, 0.1, 0.18, std(0x141018), 0, 0.09, 0, hat, 16);
  return g;
}
function umbrellaStand() {
  const g = new THREE.Group(); cyl(0.14, 0.12, 0.6, P.metal(0x6a5030, 0.5), 0, 0.3, 0, g, 16);
  for (let i = 0; i < 2; i++) { const u = new THREE.Group(); u.position.set(i ? 0.04 : -0.04, 0.1, 0); u.rotation.z = i ? -0.12 : 0.15; g.add(u); cyl(0.01, 0.01, 0.95, std(0x101010), 0, 0.47, 0, u, 5);
    mesh(new THREE.ConeGeometry(0.06, 0.55, 8), std(i ? 0x1a1030 : 0x301018, { roughness: 0.7 }), 0, 0.6, 0, u).rotation.x = Math.PI; const hd = mesh(new THREE.TorusGeometry(0.04, 0.01, 6, 10, Math.PI), std(0x3a2010), 0.04, 0.95, 0, u); }
  return g;
}
function mantelStone() { return std(0x5a4a42, { roughness: 0.6 }); }
function buildLibrary(R, q) {
  const g = R.group;
  P.shell(R, { w: 16, d: 14, h: 8, z0: -8, holeBack: { x: -4.7, w: 2.8, h: 5.8 }, floor: TX.woodPlanks([70, 40, 22], 8, 3), floorRep: [3, 3], floorRough: 0.4, wall: TX.wallpaper('#2a0e14', '#3a1620', 'rgba(210,150,80,0.2)'), wainscot: 1.0, ceil: TX.woodPlanks([36, 20, 14], 6) });
  const rg = mesh(new THREE.PlaneGeometry(6, 8), std(0xffffff, { map: TX.toTex(TX.rug('#1a2a4a', '#0a1020', '#c8a050'), [1, 1]), roughness: 0.95 }), 0, 0.012, -1.5, g); rg.rotation.x = -Math.PI / 2; rg.rotation.z = Math.PI / 2;
  // shelves: left wall (with window gap), right wall, back wall flanking the fireplace
  for (const [x, z, ry, w] of [[-7.7, -5.4, Math.PI / 2, 4.6], [-7.7, 3.0, Math.PI / 2, 4.6], [7.7, -4.6, -Math.PI / 2, 6.2], [7.7, 2.6, -Math.PI / 2, 5.6], [4.6, -7.7, 0, 3.2]]) { const s = shelfUnit(R, w, 6.0, 0.55); s.position.set(x, 0, z); s.rotation.y = ry; g.add(s); }
  // secret shelf door (back wall, left of fireplace) — pivots open
  const secretPiv = new THREE.Group(); secretPiv.position.set(-6.2, 0, -7.7); g.add(secretPiv); secretPiv.userData.noCol = 1;
  const sec = shelfUnit(R, 3.0, 6.0, 0.55); sec.position.set(1.5, 0, 0); secretPiv.add(sec);
  const passage = new THREE.Group(); passage.position.set(-4.7, 0, -8.0); g.add(passage);
  { const cs = std(0xffffff, { map: TX.toTex(TX.stoneWall([58, 56, 72]), [2, 1.5]), roughness: 0.85 }), cf = std(0xffffff, { map: TX.toTex(TX.stoneWall([44, 42, 52]), [1, 3]), roughness: 0.7 });
    const L = 7; for (const sd of [-1, 1]) { const w = mesh(new THREE.PlaneGeometry(L, 5.8), cs, sd * 1.4, 2.9, -L / 2, passage); w.rotation.y = -sd * Math.PI / 2; }
    const fl = mesh(new THREE.PlaneGeometry(2.8, L), cf, 0, 0.01, -L / 2, passage); fl.rotation.x = -Math.PI / 2; const ce = mesh(new THREE.PlaneGeometry(2.8, L), cs, 0, 5.8, -L / 2, passage); ce.rotation.x = Math.PI / 2;
    mesh(new THREE.PlaneGeometry(2.8, 5.8), cs, 0, 2.9, -L, passage);
    const win = mesh(new THREE.PlaneGeometry(0.6, 1.3), new THREE.MeshBasicMaterial({ map: TX.toTex(TX.nightWindow(false, 128, 256), [1, 1]), fog: false }), 0, 3.0, -L + 0.02, passage); sprite(P.coldT(), 2.2, 0, 3.0, -L + 0.1, passage, { opacity: 0.35 });
    for (const sd of [-1, 1]) box(0.08, 1.4, 0.08, iron(), sd * 0.18, 3.0, -L + 0.05, passage);
    const pl = new THREE.PointLight(0x8aa0ff, 6, 9, 2); pl.position.set(0, 3.2, -L + 1); passage.add(pl);
    const tc = P.makeCandle(R, 0.22, 0.03, true); tc.g.position.set(1.25, 1.6, -3); passage.add(tc.g); box(0.18, 0.04, 0.16, iron(), 1.3, 1.58, -3, passage); }
  const passGlow = pointLight(R, 0xffa050, 0, 6, -4.7, 1.8, -9.5); R.passGlow = passGlow;
  R.secret = secretPiv; register(R, 'secretDoor', secretPiv); R.spots.secretDoor = { pos: V3(-4.7, 1.8, -3.5), look: V3(-4.7, 1.8, -7.8) };
  // fireplace with mantel + candle puzzle
  const fp = new THREE.Group(); fp.position.set(0.3, 0, -7.75); g.add(fp);
  const stone = std(0xffffff, { map: TX.toTex(TX.stoneWall([78, 66, 62]), [2.5, 2]), roughness: 0.9, bumpMap: TX.toTex(TX.stoneWall([78, 66, 62]), [2.5, 2], false), bumpScale: 0.04 });
  box(3.4, 1.5, 0.6, stone, 0, 0.75, 0, fp); box(1.8, 1.05, 0.62, std(0x1a0c06, { roughness: 1, emissive: 0x401404, emissiveIntensity: 0.6 }), 0, 0.52, 0.01, fp); box(2.1, 0.12, 0.66, mantelStone(), 0, 1.1, 0.02, fp);
  const mantel = woodMat([60, 30, 14], [2, 1], { roughness: 0.4 }); box(3.8, 0.14, 0.8, mantel, 0, 1.57, 0.1, fp);
  box(3.2, 2.6, 0.3, stone, 0, 2.95, -0.15, fp);
  for (let i = 0; i < 6; i++) { const lg = cyl(0.07, 0.07, 1.1, woodMat([40, 20, 10]), srand(-0.4, 0.4), 0.12 + (i % 2) * 0.1, 0.1 + srand(-0.1, 0.1), fp, 8); lg.rotation.z = Math.PI / 2; lg.rotation.y = srand(-0.5, 0.5); }
  R.fire = []; for (let i = 0; i < 7; i++) { const f = sprite(P.flameT(), 1, srand(-0.5, 0.5), 0.45, 0.15 + srand(-0.05, 0.1), fp); f.userData.ph = srand(0, 10); f.userData.x0 = f.position.x; R.fire.push(f); }
  sprite(P.glowT(), 3.5, 0, 0.6, 0.3, fp, { opacity: 0.5 });
  pointLight(R, 0xff7a20, 11, 10, 0.3, 1.0, -6.0, 0.35);
  // 5 candle holders with symbol plaques on the mantel front
  const SY = TX.SYMBOLS; R.holders = [];
  for (let i = 0; i < 5; i++) {
    const x = -1.4 + i * 0.7; const hg = new THREE.Group(); hg.position.set(x, 1.64, 0.2); fp.add(hg);
    cyl(0.07, 0.09, 0.04, gold(), 0, 0.02, 0, hg, 12); cyl(0.02, 0.03, 0.14, gold(), 0, 0.09, 0, hg, 8); cyl(0.05, 0.035, 0.05, gold(), 0, 0.18, 0, hg, 10);
    const plaque = mesh(new THREE.CircleGeometry(0.11, 24), std(0xffffff, { map: TX.symbolPlaque(SY[i]), metalness: 0.6, roughness: 0.35, envMap: P.ENV.map }), x, 1.43, 0.51, fp);
    const c = P.makeCandle(R, 0.34 - Math.abs(i - 2) * 0.03, 0.035, false, { gs: 1.2 }); c.g.position.set(0, 0.2, 0); hg.add(c.g);
    if (i === 3) c.g.visible = false;
    register(R, 'holder' + i, hg); hitbox(R, 'holder' + i, 0.3, 0.6, 0.3, 0, 0.3, 0, hg);
    R.holders.push({ g: hg, c, sym: SY[i] });
  }
  R.spots.mantel = { pos: V3(0.3, 2.1, -5.0), look: V3(0.3, 1.75, -7.6) };
  // lectern with the book of flames
  const lec = new THREE.Group(); lec.position.set(3.4, 0, -1.6); lec.rotation.y = -0.5; g.add(lec);
  const lw = woodMat([56, 28, 14], [1, 1], { roughness: 0.45 }); cyl(0.3, 0.38, 0.08, lw, 0, 0.04, 0, lec, 12); cyl(0.07, 0.09, 1.05, lw, 0, 0.56, 0, lec, 10);
  const top = new THREE.Group(); top.position.set(0, 1.12, 0); top.rotation.x = -0.45; lec.add(top); box(0.8, 0.05, 0.55, lw, 0, 0, 0, top);
  const bookT = new THREE.Mesh(new THREE.PlaneGeometry(0.76, 0.48), std(0xffffff, { roughness: 0.8, emissive: 0xffffff, emissiveIntensity: 0.06 })); bookT.rotation.x = -Math.PI / 2; bookT.position.y = 0.035; top.add(bookT); R.bookPage = bookT;
  const lc = P.makeCandle(R, 0.18, 0.03, true); lc.g.position.set(0.32, 0.03, -0.2); top.add(lc.g);
  register(R, 'lectern', lec); R.spots.lectern = { pos: V3(2.5, 2.0, -0.4), look: V3(3.4, 1.1, -1.6) };
  pointLight(R, 0xffa050, 3.5, 4, 3.3, 1.8, -1.4, 0.25);
  // twitching red book (hides the moon crystal) on the right shelf
  const tb = new THREE.Group(); tb.position.set(7.3, 2.0, -2.8); tb.rotation.y = -Math.PI / 2; g.add(tb);
  box(0.11, 0.42, 0.42, std(0xb0182a, { roughness: 0.5, emissive: 0x400008, emissiveIntensity: 0.6 }), 0, 0, 0, tb); box(0.115, 0.04, 0.43, gold(), 0, 0.15, 0, tb); box(0.115, 0.04, 0.43, gold(), 0, -0.15, 0, tb);
  const crystal = mesh(new THREE.OctahedronGeometry(0.09, 0), std(0xc8e0ff, { roughness: 0.05, metalness: 0.2, emissive: 0x7aa0ff, emissiveIntensity: 1.6, transparent: true, opacity: 0.9 }), 0, 0, 0, tb); crystal.scale.y = 1.6; crystal.visible = false;
  R.twitch = tb; R.crystalObj = crystal; register(R, 'twitchBook', tb); hitbox(R, 'twitchBook', 0.4, 0.6, 0.6, 0, 0, 0, tb);
  R.spots.twitchBook = { pos: V3(5.6, 2.1, -2.8), look: V3(7.4, 2.0, -2.8) };
  // window on the left wall
  P.makeWindow(R, { x: -7.9, y: 3.3, z: -1.2, ry: Math.PI / 2, w: 1.9, h: 3.4, ghost: true, rayTilt: 0.8, rayLen: 6.5, rayN: 3, curtain: 0x4a0a14 });
  moonSpot(R, -9, 6.5, -1.2, 1, 0, -1.5, 45, q.shadows);
  // armchair + globe + rolling ladder
  const ac = new THREE.Group(); ac.position.set(-2.8, 0, -4.6); ac.rotation.y = 0.6; g.add(ac); const leather = std(0x5a1a14, { roughness: 0.55 });
  { const rb = (w, h, d, x, y, z) => { const m = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 3, Math.min(w, h, d) * 0.4), leather); m.position.set(x, y, z); m.castShadow = true; ac.add(m); return m; };
    rb(0.9, 0.22, 0.8, 0, 0.42, 0.04); rb(0.95, 0.2, 0.85, 0, 0.24, 0); const bk = rb(0.9, 1.05, 0.24, 0, 0.98, -0.36); bk.rotation.x = -0.12;
    for (const sd of [-1, 1]) { rb(0.2, 0.45, 0.85, sd * 0.52, 0.46, 0); const roll = cyl(0.13, 0.13, 0.88, leather, sd * 0.53, 0.72, 0.02, ac, 16); roll.rotation.x = Math.PI / 2; }
    for (let i = 0; i < 6; i++) mesh(new THREE.SphereGeometry(0.018, 6, 5), gold(), (i % 3 - 1) * 0.28, 0.8 + (i / 3 | 0) * 0.32, -0.22, ac);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) cyl(0.04, 0.03, 0.14, woodMat([40, 20, 10]), sx * 0.5, 0.07, sz * 0.35, ac, 8);
    const cu = rb(0.45, 0.3, 0.12, 0.1, 0.68, -0.18); cu.material = std(0x6a5020, { roughness: 0.8 }); cu.rotation.set(-0.3, 0.2, 0.1); }
  const gl = new THREE.Group(); gl.position.set(-4.6, 0, 0.6); g.add(gl); cyl(0.04, 0.2, 0.9, woodMat([60, 30, 14]), 0, 0.45, 0, gl, 8); const gb = mesh(new THREE.SphereGeometry(0.35, 24, 16), std(0x4a6a6a, { roughness: 0.5, emissive: 0x101810 }), 0, 1.25, 0, gl); const gr = mesh(new THREE.TorusGeometry(0.4, 0.02, 6, 32), gold(), 0, 1.25, 0, gl); gr.rotation.y = 0.4; R.globe = gb; register(R, 'globe', gl);
  const lad = new THREE.Group(); lad.position.set(7.0, 0, 0.8); lad.rotation.z = 0.12; g.add(lad); for (const sd of [-1, 1]) box(0.06, 6.2, 0.06, woodMat([60, 32, 16]), 0, 3.1, sd * 0.3, lad); for (let y = 0.4; y < 6; y += 0.45) box(0.04, 0.04, 0.6, woodMat([60, 32, 16]), 0, y, 0, lad); lad.rotation.y = Math.PI / 2;
  // flying books (moving books)
  R.flyBooks = [];
  for (let i = 0; i < 6; i++) { const b = new THREE.Group(); const col = [0x7a1a20, 0x1a4a2a, 0x2a2a6a, 0x6a4a18, 0x4a1a4a, 0x8a3a10][i]; const cm = std(col, { roughness: 0.6, side: THREE.DoubleSide }); const pg = std(0xe8dcc0, { side: THREE.DoubleSide, roughness: 0.9 });
    const halves = []; for (const sd of [-1, 1]) { const h = new THREE.Group(); b.add(h); box(0.22, 0.01, 0.3, cm, sd * 0.11, 0, 0, h); box(0.2, 0.02, 0.28, pg, sd * 0.1, 0.012, 0, h); halves.push(h); }
    g.add(b); R.flyBooks.push({ b, halves, r: srand(1.5, 3.5), y: srand(4.2, 6.6), sp: srand(0.25, 0.5) * (i % 2 ? 1 : -1), ph: srand(0, 6), cx: srand(-2, 2), cz: srand(-4, 0) });
    register(R, 'flyBook', b); }
  // desk with an open glowing grimoire, skull, candelabra, quill; hanging portraits; side table + warm candle pools
  { const dk = new THREE.Group(); dk.position.set(-3.6, 0, -1.2); dk.rotation.y = 0.9; g.add(dk); const dwm = woodMat([62, 32, 16], [1, 1], { roughness: 0.4 });
    dk.add(P.table(1.8, 0.9, 0.8, dwm)); box(0.5, 0.6, 0.8, dwm, -0.6, 0.35, 0, dk); box(0.5, 0.6, 0.8, dwm, 0.6, 0.35, 0, dk);
    const gb = new THREE.Group(); gb.position.set(0, 0.82, 0.05); gb.rotation.y = 0.15; dk.add(gb); const pgm = std(0xf0e2c0, { roughness: 0.9, emissive: 0xffc070, emissiveIntensity: 0.1 });
    for (const sd of [-1, 1]) { const pg = box(0.34, 0.03, 0.46, pgm, sd * 0.17, 0.02, 0, gb); pg.rotation.z = -sd * 0.08; } box(0.72, 0.015, 0.5, std(0x3a0c10, { roughness: 0.6 }), 0, 0, 0, gb);
    sprite(P.glowT(), 0.6, 0, 0.15, 0, gb, { opacity: 0.25 }); const gl2 = new THREE.PointLight(0xffb060, 1.0, 3, 2); gl2.position.set(0, 0.5, 0); gb.add(gl2);
    const sk = new THREE.Group(); sk.position.set(0.7, 0.92, -0.2); sk.rotation.y = -0.6; dk.add(sk); const bone = std(0xd8cca8, { roughness: 0.6 });
    const cr = mesh(new THREE.SphereGeometry(0.12, 16, 12), bone, 0, 0.02, 0, sk); cr.scale.set(0.9, 0.95, 1.1); box(0.13, 0.07, 0.12, bone, 0, -0.07, 0.06, sk);
    for (const sd of [-1, 1]) mesh(new THREE.SphereGeometry(0.03, 8, 6), new THREE.MeshBasicMaterial({ color: 0x080404 }), sd * 0.045, 0.01, 0.115, sk);
    const cb = P.candelabra(R, 3, true, 0.7); cb.g.position.set(-0.65, 0.82, -0.2); dk.add(cb.g);
    const quill = cyl(0.004, 0.012, 0.35, std(0xe8e0d8), 0.35, 0.95, 0.15, dk, 5); quill.rotation.z = 0.6; cyl(0.04, 0.05, 0.06, std(0x101018, { roughness: 0.2 }), 0.42, 0.85, 0.12, dk, 10);
    for (let i = 0; i < 3; i++) box(0.3, 0.06, 0.22, std([0x5a1018, 0x1a3a24, 0x4a2a10][i], { roughness: 0.6 }), 0.55, 0.83 + i * 0.06, 0.2, dk).rotation.y = i * 0.3; }
  pointLight(R, 0xffa050, 4, 6, -3.4, 1.6, -1.0, 0.25);
  { const fr1 = P.frame(1.0, 1.3, TX.portrait('lady')); fr1.position.set(2.6, 3.9, -7.6); g.add(fr1); const fr2 = P.frame(0.9, 0.7, TX.portrait('ship')); fr2.position.set(-2.4, 4.2, -7.6); g.add(fr2);
    for (const [x, y] of [[2.6, 3.9], [-2.4, 4.2]]) pointLight(R, 0xffb070, 1.2, 3, x, y + 1.2, -7.0); }
  { const st2 = new THREE.Group(); st2.position.set(5.2, 0, 1.4); g.add(st2); st2.add(P.table(0.7, 0.7, 0.75, woodMat([56, 28, 14]))); const c1 = P.makeCandle(R, 0.25, 0.04, true, { gs: 1.0 }); c1.g.position.set(0, 0.75, 0); st2.add(c1.g); const c2 = P.makeCandle(R, 0.16, 0.035, true); c2.g.position.set(0.15, 0.75, 0.1); st2.add(c2.g); }
  pointLight(R, 0xff9a40, 3.5, 5, 5.2, 1.3, 1.4, 0.3);
  // warm shelf wash so the book spines read
  for (const [x, z] of [[-6.5, -5.4], [-6.5, 3.0], [6.5, -4.6], [6.5, 2.6], [4.6, -6.6]]) pointLight(R, 0xffa060, 2.2, 5, x, 4.5, z, 0.08);
  // second rug + scattered books on the floor
  { const r2 = mesh(new THREE.CircleGeometry(1.6, 40), std(0xffffff, { map: TX.toTex(TX.rug('#4a1018', '#200608', '#d0a050'), [1, 1]), roughness: 0.95 }), 0.3, 0.016, -5.6, g); r2.rotation.x = -Math.PI / 2;
    for (let i = 0; i < 4; i++) { const b = box(0.24, 0.05, 0.32, std([0x7a1a20, 0x2a2a6a, 0x6a4a18, 0x1a4a2a][i], { roughness: 0.6 }), -1.2 + i * 0.25, 0.025 + (i % 2) * 0.05, 1.2 + (i % 3) * 0.1, g); b.rotation.y = i * 0.7; } }
  web(R, -7.95, 6.5, -2.6, Math.PI / 2, 0, 1.0); web(R, 6.0, 7.95, -7.95, 0, 0, 1.2);
  // chandelier
  const ch = P.chandelier(R, 6, 0.8, 1.6); ch.position.set(0, 6.2, -1.5); g.add(ch); R.chand = ch; R.chLight = pointLight(R, 0xffa050, 10, 12, 0, 5.9, -1.5, 0.12);
  // door back to foyer (behind the viewer)
  const db = new THREE.Group(); db.position.set(0, 0, 5.96); db.rotation.y = Math.PI; g.add(db); const dw = woodMat([44, 22, 12], [1, 2]);
  box(1.9, 3.0, 0.12, dw, 0, 1.5, 0, db); box(2.3, 0.25, 0.3, dw, 0, 3.12, 0, db); mesh(new THREE.SphereGeometry(0.06, 10, 8), gold(), 0.7, 1.4, 0.1, db); register(R, 'toFoyer', db);
  pointLight(R, 0xffa050, 7, 12, 0, 3.2, 1.5, 0.1);
  for (const [x, z] of [[-1.6, 5.8], [1.6, 5.8]]) { const s = new THREE.Group(); s.position.set(x, 2.3, z); s.rotation.y = Math.PI; g.add(s); box(0.12, 0.3, 0.06, gold(), 0, 0, 0, s); cyl(0.05, 0.02, 0.06, gold(), 0, 0.06, 0.12, s); const c = P.makeCandle(R, 0.2, 0.025, true); c.g.position.set(0, 0.09, 0.12); s.add(c.g); }
  pointLight(R, 0xff9a40, 4, 6, 0, 2.6, 5.3, 0.25);
  web(R, -7.95, 7.95, -7.95, Math.PI / 2, 0, 1.6); web(R, 7.95, 7.95, 5.95, -Math.PI / 2, -Math.PI / 2, 1.4);
  P.dust(R, Math.round(360 * q.particles), 7, 7.5, 6.5, 0, -1);
  P.fogLayer(R, 16, 14, 0.15, 0.05, 0x8a7090, -1);
  R.hemi = new THREE.HemisphereLight(0x6a70b0, 0x4a2010, 1.7); g.add(R.hemi);
  flashLight(R, -10, 6, -1);
  R.view = { pos: V3(0, 1.72, 3.4), yaw: 0, pitch: 0.06 };
}

// ======================= WITCH KITCHEN =======================
export const BOTTLE_COLS = ['#2a7aff', '#3ad04a', '#a040ff', '#ff3040', '#ffcc30', '#ff8a20'];
function buildKitchen(R, q) {
  const g = R.group;
  P.shell(R, { w: 14, d: 12, h: 6.5, z0: -7, floor: TX.stoneFloor(), floorRep: [4, 3.5], floorRough: 0.7, wall: TX.stoneWall([84, 72, 70]), wallScale: 3.2, ceil: TX.woodPlanks([36, 22, 14], 6) });
  for (let z = -6; z <= 4; z += 2) { const b = box(14, 0.35, 0.3, woodMat([40, 22, 12], [4, 1]), 0, 6.2, z, g); }
  // hearth with cauldron
  const h = new THREE.Group(); h.position.set(0, 0, -6.7); g.add(h); const stone = std(0xffffff, { map: TX.toTex(TX.stoneWall([100, 88, 84]), [1.5, 1.2]), roughness: 0.85 });
  box(0.8, 3.4, 1.2, stone, -2.1, 1.7, 0, h); box(0.8, 3.4, 1.2, stone, 2.1, 1.7, 0, h); box(5.0, 0.8, 1.3, stone, 0, 3.6, 0, h); box(3.4, 3.2, 0.2, new THREE.MeshStandardMaterial({ color: 0x0c0806, roughness: 1 }), 0, 1.6, -0.5, h);
  box(4.6, 2.6, 0.9, stone, 0, 5.2, -0.2, h);
  const cauld = new THREE.Group(); cauld.position.set(0, 0, 1.2 - 6.7 + 6.7); h.add(cauld); cauld.position.set(0, 0, 0.3);
  const cpts = []; for (let i = 0; i <= 16; i++) { const t = i / 16; cpts.push(new THREE.Vector2(Math.sin(t * Math.PI * 0.92) * 0.95 + 0.05, t * 1.3)); }
  const cm = std(0x1a1818, { roughness: 0.45, metalness: 0.6, envMap: P.ENV.map, envMapIntensity: 0.4 });
  const pot = mesh(new THREE.LatheGeometry(cpts, 40), cm, 0, 0.35, 0, cauld); pot.material.side = THREE.DoubleSide;
  const rim = mesh(new THREE.TorusGeometry(0.62, 0.07, 10, 40), cm, 0, 1.64, 0, cauld); rim.rotation.x = Math.PI / 2;
  for (let i = 0; i < 3; i++) { const a = i / 3 * Math.PI * 2; const l = cyl(0.06, 0.04, 0.5, cm, Math.cos(a) * 0.6, 0.22, Math.sin(a) * 0.6, cauld, 6); }
  const liquidMat = new THREE.ShaderMaterial({ uniforms: { t: { value: 0 }, col: { value: new THREE.Color(0x30ff70) }, col2: { value: new THREE.Color(0x0a5020) } },
    vertexShader: `uniform float t; varying vec2 vUv; void main(){ vUv = uv; vec3 p = position; float r = length(p.xy); p.z += sin(r*14.0 - t*3.0)*0.015 + sin(p.x*9.0+t*2.0)*0.01; gl_Position = projectionMatrix*modelViewMatrix*vec4(p,1.0); }`,
    fragmentShader: `uniform float t; uniform vec3 col; uniform vec3 col2; varying vec2 vUv; void main(){ vec2 c = vUv-0.5; float r = length(c); float sw = sin(atan(c.y,c.x)*3.0 + r*18.0 - t*1.5)*0.5+0.5; vec3 k = mix(col2, col, 0.45 + 0.55*sw*(1.0-r*1.4)); gl_FragColor = vec4(k*1.6, 1.0); }` });
  const liquid = mesh(new THREE.CircleGeometry(0.6, 40), liquidMat, 0, 1.5, 0, cauld); liquid.rotation.x = -Math.PI / 2; R.liquid = liquidMat;
  R.bubbles = []; const bm = std(0x60ff90, { emissive: 0x30ff70, emissiveIntensity: 1.5, transparent: true, opacity: 0.85, roughness: 0.1 });
  for (let i = 0; i < 14; i++) { const b = mesh(new THREE.SphereGeometry(1, 10, 8), bm, 0, 1.5, 0, cauld); b.userData = { t: srand(0, 1), x: srand(-0.45, 0.45), z: srand(-0.45, 0.45), s: srand(0.04, 0.09), sp: srand(0.5, 1.2) }; R.bubbles.push(b); }
  R.steam = []; const stT = TX.toTex(TX.fogTex(), [1, 1]);
  for (let i = 0; i < 6; i++) { const s = sprite(stT, 1.5, 0, 2, 0, cauld, { blending: THREE.AdditiveBlending, opacity: 0.25, color: 0x80ffa0 }); s.userData = { t: i / 6 }; R.steam.push(s); }
  R.cauldLight = pointLight(R, 0x40ff80, 5, 7, 0, 2.0, -5.2, 0.25);
  R.fire = []; for (let i = 0; i < 6; i++) { const f = sprite(P.flameT(), 1, srand(-0.5, 0.5), 0.25, srand(-0.3, 0.3), cauld); f.userData.ph = srand(0, 10); f.userData.x0 = f.position.x; R.fire.push(f); }
  pointLight(R, 0xff7020, 6, 6, 0, 0.4, -5.4, 0.4); pointLight(R, 0xff9040, 3, 9, -4.5, 3.2, -3.5, 0.15); pointLight(R, 0xff9040, 3, 9, 4.5, 3.2, -3.5, 0.15);
  R.cauldron = cauld; register(R, 'cauldron', cauld); hitbox(R, 'cauldron', 1.8, 1.8, 1.8, 0, 0.9, 0, cauld);
  R.spots.cauldron = { pos: V3(0, 2.9, -3.0), look: V3(0, 1.3, -6.4) };
  // floating key (appears when the brew is right)
  const key = new THREE.Group(); key.visible = false; g.add(key); key.position.set(0, 2.3, -6.4);
  const km = P.metal(0xe0b050, 0.25); const bow = mesh(new THREE.TorusGeometry(0.1, 0.025, 8, 20), km, 0, 0.15, 0, key); cyl(0.018, 0.018, 0.36, km, 0, -0.08, 0, key, 6); box(0.08, 0.05, 0.02, km, 0.04, -0.22, 0, key); box(0.06, 0.04, 0.02, km, 0.03, -0.14, 0, key);
  sprite(P.glowT(), 0.9, 0, 0, 0, key, { opacity: 0.8, color: 0xffe0a0 });
  R.keyObj = key; register(R, 'brassKey', key); hitbox(R, 'brassKey', 0.5, 0.7, 0.5, 0, 0, 0, key);
  // potion shelf (left wall) with 6 bottles
  const sh = new THREE.Group(); sh.position.set(-6.75, 0, -2.4); sh.rotation.y = Math.PI / 2; g.add(sh); const sw = woodMat([52, 28, 14], [2, 1]);
  for (const y of [1.3, 2.2, 3.1]) box(3.4, 0.06, 0.45, sw, 0, y, 0, sh); for (const sd of [-1, 1]) box(0.06, 2.3, 0.45, sw, sd * 1.7, 2.15, 0, sh);
  R.bottles = [];
  for (let i = 0; i < 6; i++) {
    const b = new THREE.Group(); b.position.set(-1.35 + i * 0.54, 1.33, 0); sh.add(b);
    const col = new THREE.Color(BOTTLE_COLS[i]);
    const pts = [[0, 0], [0.12, 0], [0.14, 0.05], [0.14, 0.22], [0.1, 0.3], [0.045, 0.36], [0.045, 0.46], [0.055, 0.48], [0, 0.48]].map(([x, y]) => new THREE.Vector2(x, y));
    const glass = mesh(new THREE.LatheGeometry(pts, 20), std(col, { roughness: 0.08, metalness: 0.1, transparent: true, opacity: 0.55, emissive: col, emissiveIntensity: 0.35, envMap: P.ENV.map }), 0, 0, 0, b);
    const liq = mesh(new THREE.CylinderGeometry(0.115, 0.11, 0.2, 16), std(col, { emissive: col, emissiveIntensity: 1.3, roughness: 0.3 }), 0, 0.11, 0, b);
    cyl(0.04, 0.035, 0.07, woodMat([90, 60, 30]), 0, 0.5, 0, b, 8);
    sprite(P.glowT(), 0.6, 0, 0.15, 0.05, b, { opacity: 0.35, color: col });
    register(R, 'bottle' + i, b); R.bottles.push(b);
  }
  // jars & herbs on the upper shelves
  for (let i = 0; i < 9; i++) { const jc = [0x5a6a40, 0x6a4a30, 0x404a5a][i % 3]; cyl(0.12, 0.12, srand(0.25, 0.4), std(jc, { roughness: 0.2, transparent: true, opacity: 0.8 }), -1.4 + (i % 5) * 0.68, (i < 5 ? 2.25 : 3.15) + 0.17, 0, sh, 12); }
  R.spots.shelf = { pos: V3(-4.2, 2.0, -2.4), look: V3(-6.8, 1.55, -2.4) };
  // table with talking skull + candle + book
  const tbl = P.table(2.2, 1.1, 0.95, woodMat([70, 40, 20], [2, 1], { roughness: 0.6 })); tbl.position.set(3.8, 0, -1.6); g.add(tbl);
  const skull = new THREE.Group(); skull.position.set(3.6, 1.1, -1.5); skull.rotation.y = -0.7; g.add(skull);
  const bone = std(0xe8dcc0, { roughness: 0.55, emissive: 0x302010, emissiveIntensity: 0.3 });
  const cran = mesh(new THREE.SphereGeometry(0.22, 24, 18), bone, 0, 0.12, 0, skull); cran.scale.set(0.9, 1, 1.1);
  const jaw = new THREE.Group(); jaw.position.set(0, -0.02, 0.05); skull.add(jaw); const jm = mesh(new THREE.SphereGeometry(0.15, 16, 10, 0, Math.PI * 2, Math.PI * 0.5, Math.PI * 0.5), bone, 0, 0.02, 0.06, jaw); jm.scale.set(0.95, 0.8, 1.1);
  for (let i = 0; i < 6; i++) box(0.025, 0.035, 0.02, bone, -0.07 + i * 0.028, 0.015, 0.21, jaw);
  const eyeG = []; for (const d of [-1, 1]) { mesh(new THREE.SphereGeometry(0.06, 12, 10), new THREE.MeshBasicMaterial({ color: 0x050302 }), d * 0.085, 0.14, 0.17, skull); const eg = sprite(P.glowT(), 0.22, d * 0.085, 0.14, 0.2, skull, { color: 0xffa040, opacity: 0.8 }); eyeG.push(eg); }
  mesh(new THREE.ConeGeometry(0.03, 0.06, 3), new THREE.MeshBasicMaterial({ color: 0x050302 }), 0, 0.06, 0.22, skull).rotation.x = Math.PI;
  R.skull = skull; R.jaw = jaw; R.skullEyes = eyeG; register(R, 'skull', skull);
  R.spots.skull = { pos: V3(2.6, 1.6, 0.2), look: V3(3.6, 1.25, -1.5) };
  const sk = P.candelabra(R, 1, true, 1.0); sk.g.position.set(4.4, 0.95, -1.9); g.add(sk.g); pointLight(R, 0xffa040, 4, 5, 4.3, 1.8, -1.6, 0.3);
  box(0.5, 0.1, 0.36, std(0x3a1a10, { roughness: 0.7 }), 3.6, 1.0, -1.5, g);
  // recipe parchment on the right wall
  const rec = new THREE.Group(); rec.position.set(6.95, 2.2, -4.0); rec.rotation.y = -Math.PI / 2; g.add(rec);
  const recM = mesh(new THREE.PlaneGeometry(1.0, 1.4), std(0xffffff, { roughness: 0.85, emissive: 0xffffff, emissiveIntensity: 0.05 }), 0, 0, 0.02, rec); R.recipePage = recM;
  mesh(new THREE.SphereGeometry(0.03, 8, 6), iron(), 0, 0.62, 0.05, rec);
  register(R, 'recipe', rec); R.spots.recipe = { pos: V3(4.9, 2.2, -4.0), look: V3(7.0, 2.2, -4.0) };
  pointLight(R, 0xffa040, 3, 4, 6.0, 3.0, -4.0, 0.2);
  // attic door (back right) with brass padlock
  const ad = new THREE.Group(); ad.position.set(5.3, 0, -6.96); g.add(ad); const adw = woodMat([40, 22, 12], [1, 2]);
  const adLeaf = new THREE.Group(); adLeaf.position.set(-0.6, 0, 0.05); ad.add(adLeaf); box(1.2, 2.5, 0.1, adw, 0.6, 1.25, 0, adLeaf); for (const y of [0.6, 1.9]) box(1.2, 0.08, 0.04, iron(), 0.6, y, 0.07, adLeaf);
  box(1.5, 0.18, 0.2, adw, 0, 2.6, 0, ad); box(0.15, 2.6, 0.2, adw, -0.68, 1.3, 0, ad); box(0.15, 2.6, 0.2, adw, 0.68, 1.3, 0, ad);
  box(0.5, 0.06, 0.06, iron(), 0.6, 1.3, 0.12, adLeaf); // iron bolt
  R.kLeaf = adLeaf; register(R, 'kDoor', ad); R.spots.kDoor = { pos: V3(4.3, 1.7, -4.6), look: V3(5.3, 1.4, -7) };
  // hanging herbs, pans, pumpkins
  for (let i = 0; i < 8; i++) { const hb = new THREE.Group(); hb.position.set(-5 + i * 1.3, 5.6, -5.5 + (i % 2)); g.add(hb); cyl(0.005, 0.005, 0.6, std(0x3a2a18), 0, 0.3, 0, hb, 3); mesh(new THREE.ConeGeometry(0.14, 0.5, 6), std([0x3a5a20, 0x5a4a20, 0x4a3a50][i % 3], { roughness: 1 }), 0, -0.2, 0, hb).rotation.x = Math.PI; R.anim.push((t) => { hb.rotation.z = Math.sin(t * 0.7 + i) * 0.05; }); }
  for (let i = 0; i < 4; i++) { const pan = mesh(new THREE.CylinderGeometry(0.25, 0.22, 0.08, 20), P.metal(0xb8683a, 0.35), -1.5 + i * 0.75, 4.3, -6.15, g); pan.rotation.x = Math.PI / 2; }
  const pmat = makeFaceMaterial('grin', { W: 512, emissive: 0xffb050, ei: 2.0 });
  for (const [x, z, r] of [[-2.8, -5.8, 0.38], [2.9, -5.9, 0.32], [-6.0, 3.6, 0.42], [5.8, -4.2, 0.3]]) { const p = makePumpkin(pmat, r); p.position.set(x, r * 0.8, z); p.rotation.y = Math.atan2(-x, 3 - z); g.add(p); }
    // window on the left wall
  P.makeWindow(R, { x: -6.9, y: 2.8, z: 1.6, ry: Math.PI / 2, w: 1.3, h: 2.0, arch: true, ghost: true, rayLen: 7, rayTilt: 0.9, rayN: 2, curtain: 0x2a3a1a });
  moonSpot(R, -8, 5, 1.6, 1, 0, 0, 30, q.shadows);
  // door back to the library (passage, behind)
  const db = new THREE.Group(); db.position.set(0, 0, 4.96); db.rotation.y = Math.PI; g.add(db); box(1.8, 2.9, 0.1, woodMat([44, 22, 12], [1, 2]), 0, 1.45, 0, db); register(R, 'toLibrary', db);
  for (const [x, z] of [[-1.4, 4.8], [1.4, 4.8]]) { const tc = new THREE.Group(); tc.position.set(x, 2.2, z); tc.rotation.y = Math.PI; g.add(tc); box(0.08, 0.5, 0.08, iron(), 0, 0, 0.06, tc); const f = sprite(P.flameT(), 1, 0, 0.42, 0.1, tc); f.scale.set(0.22, 0.4, 1); R.fire.push(Object.assign(f, {})); f.userData.ph = srand(0, 9); f.userData.x0 = 0; sprite(P.glowT(), 1.4, 0, 0.42, 0.12, tc, { opacity: 0.5 }); }
  pointLight(R, 0xff8a30, 6, 7, 0, 2.6, 4.3, 0.35);
  web(R, -6.95, 6.45, -6.95, Math.PI / 2, 0, 1.4); web(R, 6.95, 6.45, 4.95, -Math.PI / 2, -Math.PI / 2, 1.2);
  P.dust(R, Math.round(300 * q.particles), 6, 6, 5.5, 0, -1); R.dust.material.uniforms.col.value.set(0.8, 1.0, 0.8);
  P.fogLayer(R, 14, 12, 0.15, 0.07, 0x60a070, -2);
  R.hemi = new THREE.HemisphereLight(0x506a90, 0x1a1008, 1.21); g.add(R.hemi);
  flashLight(R, -8, 5, 1.6);
  R.view = { pos: V3(0, 1.72, 2.8), yaw: 0, pitch: 0.02 };
}

// ======================= ATTIC =======================
export const NOTE_COLS = ['#ff5a5a', '#ffb030', '#ffe85a', '#5ad06a', '#5aa0ff'];
function buildAttic(R, q) {
  const g = R.group; const W = 12, D = 12, z0 = -7, wallH = 1.6, ridge = 5.4;
  const floor = mesh(new THREE.PlaneGeometry(W, D), std(0xffffff, { map: TX.toTex(TX.woodPlanks([66, 46, 30], 8, 2), [3, 3]), roughness: 0.75 }), 0, 0, z0 + D / 2, g); floor.rotation.x = -Math.PI / 2;
  const roofM = std(0xffffff, { map: TX.toTex(TX.woodPlanks([46, 32, 22], 10, 1), [3, 4]), roughness: 0.85, side: THREE.DoubleSide });
  const slope = Math.hypot(W / 2, ridge - wallH), ang = Math.atan2(ridge - wallH, W / 2);
  for (const sd of [-1, 1]) { const r = mesh(new THREE.PlaneGeometry(slope, D), roofM, sd * W / 4, (ridge + wallH) / 2, z0 + D / 2, g); r.userData.noCol = 1;
    const u = new THREE.Vector3(-sd * Math.cos(ang), Math.sin(ang), 0), w2 = new THREE.Vector3(0, 0, 1); r.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(u, w2, new THREE.Vector3().crossVectors(u, w2)));
    box(0.2, wallH, D, woodMat([50, 34, 22]), sd * W / 2, wallH / 2, z0 + D / 2, g); }
  for (let z = z0 + 0.5; z < z0 + D; z += 1.6) for (const sd of [-1, 1]) { const rf = box(slope, 0.22, 0.16, woodMat([40, 26, 16]), sd * W / 4, (ridge + wallH) / 2 - 0.15, z, g); rf.rotation.z = -sd * ang; }
  box(0.25, 0.25, D, woodMat([40, 26, 16]), 0, ridge - 0.12, z0 + D / 2, g);
  for (let z = z0 + 2; z < z0 + D; z += 3.2) box(W, 0.2, 0.2, woodMat([40, 26, 16]), 0, 3.2, z, g);
  // gable walls with round moon window
  const gw = std(0xffffff, { map: TX.toTex(TX.woodPlanks([52, 36, 24], 12, 1), [2, 2]), roughness: 0.9, side: THREE.DoubleSide });
  for (const zz of [z0, z0 + D]) { const sh = new THREE.Shape(); sh.moveTo(-W / 2, 0); sh.lineTo(W / 2, 0); sh.lineTo(W / 2, wallH); sh.lineTo(0, ridge); sh.lineTo(-W / 2, wallH); sh.lineTo(-W / 2, 0);
    if (zz === z0) { const hole = new THREE.Path(); hole.absarc(0, 3.0, 1.15, 0, Math.PI * 2, true); sh.holes.push(hole); }
    mesh(new THREE.ShapeGeometry(sh), gw, 0, 0, zz, g); }
  const moonWin = mesh(new THREE.CircleGeometry(1.15, 40), new THREE.MeshBasicMaterial({ map: TX.toTex(TX.nightWindow(true, 256, 256), [1, 1]), fog: false, color: new THREE.Color(1.3, 1.3, 1.5) }), 0, 3.0, z0 - 0.15, g); R.windows.push(moonWin);
  const wr = mesh(new THREE.TorusGeometry(1.2, 0.1, 10, 40), woodMat([40, 24, 14]), 0, 3.0, z0 + 0.02, g);
  for (const a of [0, Math.PI / 2]) { const m = box(2.3, 0.07, 0.07, woodMat([40, 24, 14]), 0, 3.0, z0 + 0.02, g); m.rotation.z = a; }
  const moonDisc = sprite(P.coldT(), 4.0, 0.35, 3.4, z0 - 0.4, g, { opacity: 0.7, fog: false });
  // god rays from the round window
  const rt = TX.toTex(TX.rayTex(), [1, 1]);
  for (let i = 0; i < 4; i++) { const pm = new THREE.MeshBasicMaterial({ map: rt, color: new THREE.Color(0.6, 0.68, 1.0), transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
    const piv = new THREE.Group(); piv.position.set(srand(-0.6, 0.6), 3.0 + srand(-0.5, 0.5), z0 + 0.1); g.add(piv); const p = mesh(new THREE.PlaneGeometry(srand(0.5, 1.1), 9), pm, 0, -4.5, 0, piv); piv.rotation.x = -1.15; piv.rotation.z = srand(-0.2, 0.2); p.rotation.y = srand(-0.5, 0.5); R.rays.push({ m: pm, base: 0.07 + srand(0, 0.04), ph: srand(0, 6) }); }
  moonSpot(R, 0.3, 3.2, z0 - 1.5, 0, 0, -1.5, 70, q.shadows);
  // trunk with the music box
  const tr = new THREE.Group(); tr.position.set(0, 0, -2.2); g.add(tr); const tw = woodMat([70, 40, 20], [1, 1]);
  box(1.6, 0.7, 0.9, tw, 0, 0.35, 0, tr); for (const x of [-0.6, 0.6]) box(0.08, 0.72, 0.92, iron(), x, 0.36, 0, tr);
  const mb = new THREE.Group(); mb.position.set(0, 0.7, 0); tr.add(mb); const mbw = woodMat([90, 40, 20], [1, 1], { roughness: 0.35 });
  box(0.7, 0.24, 0.45, mbw, 0, 0.12, 0, mb); const lid = new THREE.Group(); lid.position.set(0, 0.24, -0.225); mb.add(lid); box(0.72, 0.05, 0.47, mbw, 0, 0.025, 0.235, lid); lid.rotation.x = -1.9;
  box(0.6, 0.02, 0.38, P.gold(), 0, 0.2, 0, mb); const drum = cyl(0.05, 0.05, 0.4, P.gold(), 0, 0.27, -0.08, mb, 16); drum.rotation.z = Math.PI / 2; R.drum = drum;
  const dancer = new THREE.Group(); dancer.position.set(0.18, 0.24, 0.08); mb.add(dancer); mesh(new THREE.ConeGeometry(0.05, 0.12, 12), std(0xffd0e0, { emissive: 0x402030 }), 0, 0.06, 0, dancer); mesh(new THREE.SphereGeometry(0.02, 8, 6), std(0xffe0d0), 0, 0.14, 0, dancer); R.dancer = dancer;
  // five colored keys on the front of the box
  R.mkeys = [];
  for (let i = 0; i < 5; i++) { const col = new THREE.Color(NOTE_COLS[i]); const k = new THREE.Group(); k.position.set(-0.24 + i * 0.12, 0.12, 0.24); mb.add(k);
    mesh(new THREE.SphereGeometry(0.045, 16, 12), std(col, { emissive: col, emissiveIntensity: 0.5, roughness: 0.25, metalness: 0.2 }), 0, 0, 0, k).scale.z = 0.6;
    register(R, 'mkey' + i, k); hitbox(R, 'mkey' + i, 0.11, 0.14, 0.14, 0, 0, 0.02, k); R.mkeys.push(k); }
  register(R, 'musicbox', lid); R.musicbox = mb; R.mbLid = lid;
  R.spots.musicbox = { pos: V3(0, 1.62, -1.0), look: V3(0, 0.82, -2.05) };
  const lantern = new THREE.Group(); lantern.position.set(-1.6, 3.0, -1.5); g.add(lantern); cyl(0.006, 0.006, 2.2, iron(), 0, 1.1, 0, lantern, 3); box(0.22, 0.3, 0.22, std(0x302010, { metalness: 0.5, roughness: 0.4, transparent: true, opacity: 0.6 }), 0, -0.1, 0, lantern); const lc = P.makeCandle(R, 0.12, 0.03, true); lc.g.position.set(0, -0.22, 0); lantern.add(lc.g); R.lantern = lantern;
  R.lanternLight = pointLight(R, 0xffa040, 8, 8, -1.6, 2.85, -1.5, 0.3);
  pointLight(R, 0xffb060, 1.2, 3, 0.3, 1.8, -1.2, 0.2);
  // sheet music on an easel
  const es = new THREE.Group(); es.position.set(-2.7, 0, -3.4); es.rotation.y = 0.55; g.add(es); for (const sd of [-1, 1]) { const l = box(0.05, 2.0, 0.05, woodMat([60, 36, 20]), sd * 0.45, 1.0, 0, es); l.rotation.z = -sd * 0.08; } const l3 = box(0.05, 2.0, 0.05, woodMat([60, 36, 20]), 0, 1.0, -0.4, es); l3.rotation.x = 0.25;
  box(1.0, 0.05, 0.12, woodMat([60, 36, 20]), 0, 1.0, 0.04, es);
  const sheet = mesh(new THREE.PlaneGeometry(1.0, 0.62), std(0xffffff, { roughness: 0.85, emissive: 0xffffff, emissiveIntensity: 0.07 }), 0, 1.36, 0.03, es); sheet.rotation.x = -0.08; R.sheetPage = sheet;
  register(R, 'sheet', es); R.spots.sheet = { pos: V3(-2.0, 1.55, -2.3), look: V3(-2.75, 1.35, -3.45) };
  pointLight(R, 0xffb060, 2.5, 3, -2.3, 2.1, -2.8, 0.2);
  // covered furniture, rocking chair, dress form, crates, mirror
  const sheetM = std(0x6a6474, { roughness: 1 });
  for (const [x, z, w, h2, d, ry] of [[-4.2, -5.6, 1.6, 1.1, 1.0, 0.2], [4.0, -5.4, 1.2, 1.6, 0.8, -0.3], [-4.4, 0.6, 1.4, 0.9, 1.2, 0.5], [4.6, -3.2, 1.0, 0.8, 0.9, 0.1]]) { box(w * 0.96, h2, d * 0.96, std(0x2a1c14), x, h2 / 2, z, g).rotation.y = ry; const c = clothDrape(w, h2, d, [0x7a7488, 0x868090, 0x6e6a80, 0x8a8494][Math.abs(x * 3 | 0) % 4]); c.position.set(x, 0, z); c.rotation.y = ry; g.add(c); }
  // old trunks, rocking horse, dusty mirror, second hanging lantern, cobwebs
  { const tk = (x, z, ry, s) => { const t = new THREE.Group(); t.position.set(x, 0, z); t.rotation.y = ry; t.scale.setScalar(s); g.add(t); const tw2 = woodMat([60, 34, 18]);
      box(1.0, 0.5, 0.6, tw2, 0, 0.25, 0, t); const lidC = cyl(0.3, 0.3, 1.0, tw2, 0, 0.5, 0, t, 16, ); lidC.rotation.z = Math.PI / 2; lidC.scale.set(1, 1, 0.35);
      for (const xx of [-0.35, 0.35]) { box(0.06, 0.52, 0.62, iron(), xx, 0.26, 0, t); } box(0.12, 0.14, 0.04, gold(), 0, 0.45, 0.31, t); return t; };
    tk(-1.8, -5.6, 0.3, 1); tk(2.0, -6.0, -0.2, 0.85); tk(-5.0, -2.6, 1.3, 0.9);
    const rh = new THREE.Group(); rh.position.set(2.2, 0, -4.0); rh.rotation.y = -0.9; g.add(rh); const hw = std(0xc8b8a0, { roughness: 0.6 }), red = std(0x8a1a1a, { roughness: 0.5 });
    for (const sd of [-1, 1]) { const run = mesh(new THREE.TorusGeometry(0.9, 0.03, 6, 24, 1.3), woodMat([60, 34, 18]), 0, 0.95, sd * 0.2, rh); run.rotation.z = -Math.PI / 2 - 0.65; }
    const body = cyl(0.17, 0.17, 0.8, hw, 0, 0.62, 0, rh, 14); body.rotation.z = Math.PI / 2; const neck = cyl(0.09, 0.12, 0.4, hw, 0.38, 0.85, 0, rh, 10); neck.rotation.z = -0.6;
    const head = box(0.35, 0.16, 0.16, hw, 0.55, 1.02, 0, rh); head.rotation.z = -0.3; box(0.3, 0.03, 0.25, red, 0, 0.8, 0, rh); const mane = box(0.3, 0.1, 0.04, std(0x2a1a10), 0.36, 0.95, 0, rh); mane.rotation.z = -0.6;
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const l = cyl(0.04, 0.035, 0.42, hw, sx * 0.28, 0.4, sz * 0.12, rh, 8); l.rotation.z = sx * 0.25; }
    const tail = cyl(0.01, 0.05, 0.35, std(0x2a1a10), -0.45, 0.6, 0, rh, 6); tail.rotation.z = -0.9;
    const mr = P.frame(0.9, 1.7, null); mr.userData.pic.material = std(0x4a5060, { roughness: 0.35, metalness: 0.8, envMap: P.ENV.map, envMapIntensity: 0.5 }); mr.position.set(-5.6, 1.0, -4.2); mr.rotation.set(-0.12, 1.15, 0); g.add(mr);
    const dustM = mesh(new THREE.PlaneGeometry(0.9, 1.7), new THREE.MeshBasicMaterial({ map: TX.toTex(TX.fogTex(), [1, 1]), color: 0x6a6070, transparent: true, opacity: 0.35, depthWrite: false }), 0, 0, 0.06, mr);
    const ln2 = new THREE.Group(); ln2.position.set(2.6, 3.2, -5.4); g.add(ln2); cyl(0.006, 0.006, 1.8, iron(), 0, 0.9, 0, ln2, 3); box(0.18, 0.26, 0.18, std(0x302010, { metalness: 0.5, roughness: 0.4, transparent: true, opacity: 0.6 }), 0, -0.1, 0, ln2);
    const lc2 = P.makeCandle(R, 0.1, 0.025, true, { gs: 0.5 }); lc2.g.position.set(0, -0.2, 0); ln2.add(lc2.g); pointLight(R, 0xffa040, 2.5, 6, 2.6, 2.9, -5.4, 0.3); R.lantern2 = ln2;
    web(R, -5.9, 3.0, -3.0, Math.PI / 2, 0, 1.2); web(R, 5.9, 2.6, -1.0, -Math.PI / 2, 0, 1.0); web(R, -2.6, 4.2, z0 + 0.05, 0, 0.6, 1.0); }
  const rc = new THREE.Group(); rc.position.set(3.0, 0, -2.0); rc.rotation.y = -0.6; g.add(rc); const rw = woodMat([60, 34, 18]);
  for (const sd of [-1, 1]) { const run = mesh(new THREE.TorusGeometry(0.6, 0.03, 6, 20, 1.6), rw, sd * 0.3, 0.62, 0, rc); run.rotation.y = Math.PI / 2; run.rotation.z = -Math.PI / 2 - 0.8; box(0.05, 1.2, 0.05, rw, sd * 0.3, 0.9, -0.3, rc); box(0.05, 0.45, 0.05, rw, sd * 0.3, 0.28, 0.25, rc); }
  box(0.65, 0.05, 0.6, rw, 0, 0.48, 0, rc); for (let i = 0; i < 4; i++) box(0.04, 0.9, 0.03, rw, -0.2 + i * 0.13, 1.0, -0.32, rc);
  R.rocker = rc; register(R, 'rocker', rc);
  const df = new THREE.Group(); df.position.set(4.3, 0, -0.4); g.add(df); cyl(0.02, 0.2, 1.0, woodMat([40, 24, 14]), 0, 0.5, 0, df, 6); const torso = mesh(new THREE.SphereGeometry(0.3, 16, 12), std(0x6a4a5a, { roughness: 0.8 }), 0, 1.35, 0, df); torso.scale.set(1, 1.5, 0.75);
  for (let i = 0; i < 5; i++) box(srand(0.5, 0.8), srand(0.4, 0.7), srand(0.5, 0.8), woodMat([80, 56, 32]), srand(-5, -3), 0.3, srand(1.5, 4), g).rotation.y = srand(0, 1);
  web(R, -5.9, 1.6, z0 + 0.05, 0, 0, 1.4); web(R, 5.9, 1.6, z0 + 0.05, 0, -Math.PI / 2, 1.2); web(R, 0.2, ridge - 0.2, z0 + 0.06, 0, 0, 1.5);
  // the ghost (Wisp)
  const ghost = P.makeGhostFigure(R.kids, 1.0); ghost.position.set(0, 1.4, -4.0); ghost.visible = false; g.add(ghost); R.ghost = ghost; register(R, 'ghost', ghost);
  P.dust(R, Math.round(420 * q.particles), 5.5, 4.5, 5.5, 0, -1); R.dust.material.uniforms.col.value.set(0.85, 0.9, 1.1);
  P.fogLayer(R, 12, 12, 0.12, 0.07, 0x7a80c0, -1);
  R.hemi = new THREE.HemisphereLight(0x5a6ab0, 0x201008, 1.1); g.add(R.hemi);
  flashLight(R, 0, 4, -10);
  // stairs hatch behind
  const hatch = box(1.4, 0.05, 1.0, woodMat([40, 24, 14]), 0, 0.03, 4.0, g); register(R, 'toKitchen', hatch);
  R.view = { pos: V3(0, 1.62, 2.6), yaw: 0, pitch: 0.12 };
}

// ======================= GARDEN (finale) =======================
function buildGarden(R, q) {
  const g = R.group;
  const ground = mesh(new THREE.PlaneGeometry(80, 80, 40, 40), std(0x1a2418, { roughness: 1 }), 0, 0, 10, g); ground.rotation.x = -Math.PI / 2;
  const gp = ground.geometry.attributes.position; for (let i = 0; i < gp.count; i++) gp.setZ(i, Math.sin(gp.getX(i) * 0.3) * 0.15 + Math.cos(gp.getY(i) * 0.25) * 0.15); ground.geometry.computeVertexNormals();
  const path = mesh(new THREE.PlaneGeometry(2.4, 26), std(0x4a4048, { roughness: 0.9 }), 0, 0.03, 13, g); path.rotation.x = -Math.PI / 2;
  for (let z = 1; z < 26; z += 0.9) { const s = mesh(new THREE.CircleGeometry(srand(0.3, 0.5), 7), std(0x6a6068, { roughness: 0.8 }), srand(-0.6, 0.6), 0.04, z, g); s.rotation.x = -Math.PI / 2; }
  // mansion facade
  const fac = new THREE.Group(); g.add(fac); const st = std(0xffffff, { map: TX.toTex(TX.stoneWall([70, 64, 80]), [5, 3]), roughness: 0.9 });
  box(22, 12, 1, st, 0, 6, -0.5, fac); box(6, 6, 6, st, -9, 15, -3, fac); const tower = cyl(2.2, 2.2, 18, st, 9, 9, -2, fac, 48); for (const y of [6, 12, 17.8]) cyl(2.4, 2.4, 0.3, std(0x5a5262, { roughness: 0.8 }), 9, y, -2, fac, 48);
  mesh(new THREE.ConeGeometry(2.8, 5, 48), std(0x1a1424, { roughness: 0.7 }), 9, 20.5, -2, fac); mesh(new THREE.ConeGeometry(14, 6, 4), std(0x1a1424, { roughness: 0.8 }), 0, 15, -3, fac).rotation.y = Math.PI / 4;
  const lit = new THREE.MeshBasicMaterial({ color: 0xffb060 }); const dark = new THREE.MeshBasicMaterial({ color: 0x14102a });
  const winTex = TX.toTex(TX.nightWindow(true, 128, 256), [1, 1]); const frameM = std(0x2a2430, { roughness: 0.7 }), sillM = std(0x5a5262, { roughness: 0.8 });
  const warm = new THREE.MeshBasicMaterial({ color: 0xffa850 }); const cold = new THREE.MeshBasicMaterial({ map: winTex, color: 0x8090c0 });
  for (const [x, y] of [[-7, 3], [-4, 3], [4, 3], [7, 3], [-7, 7.5], [-4, 7.5], [4, 7.5], [7, 7.5]]) { const on = srand() < 0.6; const wg = new THREE.Group(); wg.position.set(x, y, 0.02); fac.add(wg);
    mesh(new THREE.PlaneGeometry(1.2, 2.0), on ? warm : cold, 0, 0, 0, wg); mesh(new THREE.CircleGeometry(0.6, 20, 0, Math.PI), on ? warm : cold, 0, 1.0, 0, wg);
    box(0.08, 2.0, 0.1, frameM, 0, 0, 0.05, wg); box(1.2, 0.07, 0.1, frameM, 0, 0.3, 0.05, wg); for (const sd of [-1, 1]) { box(0.14, 2.3, 0.22, sillM, sd * 0.67, 0.1, 0.1, wg); box(0.5, 2.0, 0.05, std(0x1a1020, { roughness: 0.8 }), sd * 1.0, 0, 0.06, wg).rotation.y = sd * 0.4; }
    box(1.6, 0.14, 0.35, sillM, 0, -1.07, 0.16, wg); box(1.5, 0.16, 0.25, sillM, 0, 1.68, 0.12, wg);
    if (on) { sprite(P.glowT(), 2.6, 0, 0, 0.3, wg, { opacity: 0.35 }); } }
  for (const y of [5.3, 11.8]) box(22.6, 0.3, 0.5, sillM, 0, y, 0.0, fac); box(23, 0.5, 0.8, sillM, 0, 12.1, -0.1, fac);
  for (const x of [-10.8, -1.9, 1.9, 10.8]) box(0.6, 12, 0.4, sillM, x, 6, 0.05, fac);
  for (const [x, y] of [[9, 12], [9, 16]]) { const tw = mesh(new THREE.PlaneGeometry(0.9, 1.6), warm, x, y, 0.2, fac); box(1.1, 0.12, 0.3, sillM, x, y - 0.85, 0.25, fac); }
  box(1.0, 4, 1.0, st, -6, 17, -3, fac); box(1.3, 0.3, 1.3, sillM, -6, 19.1, -3, fac);
  const attic = mesh(new THREE.CircleGeometry(0.9, 24), new THREE.MeshBasicMaterial({ color: 0x9ab0ff }), 0, 13.5, 0.05, fac); sprite(P.coldT(), 4, 0, 13.5, 0.3, fac, { opacity: 0.8 });
  const doorG = mesh(new THREE.PlaneGeometry(3, 4), new THREE.MeshBasicMaterial({ color: 0xffa050 }), 0, 2, 0.03, fac); sprite(P.glowT(), 7, 0, 2, 0.6, fac, { opacity: 0.6 });
  // steps + door leaves swung outwards
  for (let i = 0; i < 3; i++) box(5 - i * 0.4, 0.2, 1.0 - i * 0.2, st, 0, 0.1 + i * 0.2, 0.5 - i * 0.1, g);
  // pumpkins along the path
  const pm = [makeFaceMaterial('grin', { W: 512, emissive: 0xffb050, ei: 2.2 }), makeFaceMaterial('happy', { W: 512, emissive: 0xffb050, ei: 2.2 })];
  for (let i = 0; i < 10; i++) { const z = 3 + i * 2.2, x = (i % 2 ? 1 : -1) * srand(1.8, 2.8); const r = srand(0.3, 0.55); const p = makePumpkin(pm[i % 2], r); p.position.set(x, r * 0.8, z); p.rotation.y = Math.atan2(-x, 14 - z) ; g.add(p); }
  for (let i = 0; i < 4; i++) pointLight(R, 0xff8a30, 6, 7, (i % 2 ? 2.4 : -2.4), 0.8, 4 + i * 4.5, 0.3);
  // gate + fence + dead trees
  for (const sd of [-1, 1]) { box(0.5, 3, 0.5, st, sd * 2.2, 1.5, 24, g); mesh(new THREE.SphereGeometry(0.35, 12, 10), st, sd * 2.2, 3.25, 24, g);
    for (let x = 2.6; x < 18; x += 0.35) cyl(0.03, 0.03, 1.8, iron(), sd * x, 0.9, 24, g, 4); box(16, 0.06, 0.06, iron(), sd * 10.4, 1.6, 24, g);
    const gl = new THREE.Group(); gl.position.set(sd * 1.95, 0, 24); g.add(gl); gl.rotation.y = sd * 1.0; for (let x = 0.1; x < 1.9; x += 0.22) cyl(0.025, 0.025, 2.4, iron(), -sd * x, 1.2, 0, gl, 4); box(1.9, 0.06, 0.06, iron(), -sd * 0.95, 2.2, 0, gl); }
  const treeM = std(0x0a0810, { roughness: 1 });
  const tree = (x, z, s) => { const t = new THREE.Group(); t.position.set(x, 0, z); t.scale.setScalar(s); g.add(t); const add = (p, len, r, ang, dep) => { const b = new THREE.Group(); b.position.copy(p); b.rotation.set(ang[0], ang[1], ang[2]); t.add(b); cyl(r * 0.6, r, len, treeM, 0, len / 2, 0, b, 6); return b; };
    const trunk = add(new THREE.Vector3(), 4, 0.35, [0, 0, 0.05]); const br = (par, depth, len, r) => { if (depth > 3) return; for (let i = 0; i < 3; i++) { const b = new THREE.Group(); b.position.y = len * srand(0.6, 1); b.rotation.set(srand(-0.9, 0.9), srand(0, 6), srand(-0.9, 0.9)); par.add(b); cyl(r * 0.5, r, len * 0.7, treeM, 0, len * 0.35, 0, b, 5); br(b, depth + 1, len * 0.7, r * 0.55); } }; br(trunk, 1, 4, 0.3); };
  tree(-8, 8, 1.2); tree(9, 11, 1.0); tree(-12, 18, 1.4); tree(13, 20, 1.3);
  // moon + sky
  const sky = mesh(new THREE.SphereGeometry(70, 32, 16), new THREE.MeshBasicMaterial({ map: TX.toTex(TX.nightWindow(false, 512, 256), [1, 1]), side: THREE.BackSide, fog: false }), 0, 0, 10, g);
  const moon = mesh(new THREE.CircleGeometry(3.5, 40), new THREE.MeshBasicMaterial({ color: 0xf4f0ff, fog: false }), 8, 22, 60, g); moon.lookAt(0, 2, 0); sprite(P.coldT(), 30, 8, 22, 59, g, { opacity: 0.8, fog: false });
  const ml = new THREE.DirectionalLight(0x9ab0ff, 1.6); ml.position.set(8, 22, 60); g.add(ml, ml.target); R.moon = ml;
  P.fogLayer(R, 40, 30, 0.2, 0.12, 0x8a90d0, 12);
  // fireflies
  P.dust(R, Math.round(300 * q.particles), 12, 4, 12, 0, 12); R.dust.material.uniforms.col.value.set(1.0, 0.85, 0.4);
  R.hemi = new THREE.HemisphereLight(0x6a7ac8, 0x10180c, 1.32); g.add(R.hemi);
  flashLight(R, 0, 20, 30);
  // ghost waving from the attic window
  const ghost = P.makeGhostFigure(R.kids, 1.1); ghost.position.set(0, 13.3, 0.8); g.add(ghost); R.ghost = ghost;
  R.view = { pos: V3(0, 1.8, 8), yaw: Math.PI, pitch: 0.18 };
}

export function buildRooms(scene, q, kids) {
  const rooms = {};
  const defs = [['foyer', buildFoyer, { fogColor: 0x140c1c, fogDens: 0.022, exposure: 1.45 }], ['library', buildLibrary, { fogColor: 0x160a10, fogDens: 0.025, exposure: 1.35 }],
    ['kitchen', buildKitchen, { fogColor: 0x0c140e, fogDens: 0.03, exposure: 1.2 }], ['attic', buildAttic, { fogColor: 0x0c0e1c, fogDens: 0.035, exposure: 1.3 }], ['garden', buildGarden, { fogColor: 0x101428, fogDens: 0.025, exposure: 1.1 }]];
  defs.forEach(([name, fn, o], i) => { const R = newRoom(name, new THREE.Vector3(i * 300, 0, 0), Object.assign({ kids }, o)); fn(R, q); scene.add(R.group); rooms[name] = R; });
  return rooms;
}
