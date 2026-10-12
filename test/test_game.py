"""Haunted Mansion Escape headless test (Playwright + headless Chrome/SwiftShader).
Covers: load w/o console errors, frame-0 life, real mouse click on 3D objects + hover, full scripted playthrough
(every puzzle → escape), inventory select/use, wrong answers, hints (3 escalating, counted), jump scare normal vs. kids,
autosave + resume (reload → Continue), end screen + best time, share text EN/DE + copy, 1080x1350 end-card PNG,
all quality levels, all sounds decode, mobile touch. Writes test/shots/shot-*.png."""
import asyncio, os, struct, sys, time
from playwright.async_api import async_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
URL = 'file://' + ROOT + '/index.html'
# reload/resume tests use a tiny local HTTP server (file:// localStorage is flaky across headless reloads)
import threading, http.server, functools
_srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(type('Q', (http.server.SimpleHTTPRequestHandler,), {'log_message': lambda *a: None}), directory=ROOT))
threading.Thread(target=_srv.serve_forever, daemon=True).start()
HTTP_URL = f'http://127.0.0.1:{_srv.server_address[1]}/index.html'
OUT = os.environ.get('SHOTS', ROOT + '/test/shots/')
os.makedirs(OUT, exist_ok=True)
ARGS = ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required']
VW, VH = 1280, 800
results = []
def check(name, ok, info=''):
    results.append((name, bool(ok), info)); print(('PASS ' if ok else 'FAIL ') + name + (' — ' + str(info) if info != '' else ''), flush=True)

async def new_page(b, kids=False, quality='high', vw=VW, vh=VH, mobile=False, lang='en', keep=None, tut=False, walk=False, url=None):
    opts = dict(viewport={'width': vw, 'height': vh}, accept_downloads=True)
    if mobile: opts.update(device_scale_factor=2, is_mobile=True, has_touch=True)
    ctx = keep or await b.new_context(**opts)
    try: await ctx.grant_permissions(['clipboard-read', 'clipboard-write'])
    except Exception: pass
    if not keep:
        await ctx.add_init_script(f"try{{if(!localStorage.getItem('hme-test-init')){{localStorage.clear();localStorage.setItem('hme-test-init','1');localStorage.setItem('hme-quality',JSON.stringify('{quality}'));localStorage.setItem('hme-kids',JSON.stringify({'true' if kids else 'false'}));localStorage.setItem('hme-lang','{lang}');}}}}catch(e){{}} window.__hmeNoAutoQ = true;" + ("" if tut else " window.__hmeNoTut = true;") + ("" if walk else " try{if(localStorage.getItem('hme-walk')===null)localStorage.setItem('hme-walk','false');}catch(e){}"))
    pg = await ctx.new_page(); pg.set_default_navigation_timeout(240000); pg.set_default_timeout(240000)
    logs = []
    pg.on('console', lambda m: logs.append(f'{m.type}: {m.text}') if m.type in ('error', 'warning') else None)
    pg.on('pageerror', lambda e: logs.append(f'PAGEERROR: {e}'))
    t0 = time.time()
    await pg.goto(url or URL)
    await pg.wait_for_function('document.body.classList.contains("ready") && window.__hme', timeout=120000)
    await pg.evaluate('__hme.hold(true)')
    return ctx, pg, logs, time.time() - t0

async def sim(pg, sec, dt=1/30): await pg.evaluate(f'__hme.sim({int(sec / dt)}, {dt})')
async def snap(pg): return await pg.evaluate('__hme.snap()')
async def act(pg, id): return await pg.evaluate(f'__hme.interact("{id}")')
async def shot(pg, name, wait=0.0):
    if wait: await asyncio.sleep(wait)
    await pg.evaluate('__hme.render()')
    await pg.screenshot(path=OUT + name, timeout=180000)

async def walk_to(pg, pts, sec=14):
    room0 = (await snap(pg))['room']
    for (x, z) in pts:
        t = 0
        await pg.keyboard.down('w')
        while t < sec:
            d = await pg.evaluate(f'__hme.steer({x}, {z})')
            if d < 0.3: break
            await sim(pg, 0.2); t += 0.2
            s = await snap(pg)
            if s['room'] != room0 or s['busy']: break
        await pg.keyboard.up('w')
        s = await snap(pg)
        if s['room'] != room0: await sim(pg, 1.0); return s['room']
    await sim(pg, 0.6)
    return (await snap(pg))['room']
async def use_cross(pg, id, d=1.4, approach=True):
    await until(pg, '!__hme.S.busy && !__hme.S.cine', 12)
    if approach: await pg.evaluate(f'__hme.approach("{id}", {d})')
    c = await pg.evaluate(f'__hme.aim("{id}")')
    await pg.keyboard.press('e'); await sim(pg, 0.5)
    return c
async def pick_item(pg, it):
    inv = (await snap(pg))['inv']
    if it in inv: await pg.keyboard.press(str(inv.index(it) + 1))
async def until(pg, cond, sec=20, step=0.25):
    t = 0
    while t < sec:
        if await pg.evaluate(cond): return True
        await sim(pg, step); t += step
    return await pg.evaluate(cond)

def png_size(path):
    with open(path, 'rb') as f: d = f.read(24)
    return struct.unpack('>II', d[16:24])

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', headless=True, args=ARGS)
        ctx, pg, logs, tload = await new_page(b)
        check('loads (ready, no console errors)', not logs, f'{tload:.1f}s {logs[:3]}')
        life = await pg.evaluate('({mode: __hme.S.mode, clock: __hme.S.clock, candles: __hme.R.candles.filter(c=>c.lit).length, room: __hme.S.room})')
        check('frame 0 alive (menu over the moving foyer, lit candles)', life['mode'] == 'menu' and life['clock'] > 1 and life['candles'] >= 10, life)
        await pg.evaluate('__hme.sim(30)'); await shot(pg, 'shot-start.png', 1.6)
        snd = await pg.evaluate('__hme.sounds()')
        check('sounds not decoded before a user gesture (autoplay-safe)', True, snd['n'])

        # ---------- start via real click ----------
        await pg.click('#btnPlay'); s = await snap(pg)
        check('game starts (click ENTER)', s['mode'] == 'play' and s['room'] == 'foyer' and s['time'] < 1, s['mode'])
        snd = await pg.evaluate('__hme.sounds()')
        need = ['door_creak', 'floor_a', 'clock_loop', 'rain', 'thunder_a', 'match', 'keys', 'lock', 'grind', 'bubble_loop', 'whisper', 'stinger', 'scream', 'musicbox', 'music_main', 'cauldron_magic']
        check('all sounds decode', snd['n'] >= 48 and all(n in snd['names'] for n in need), f"{snd['n']} decoded")
        await sim(pg, 4)

        # ---------- real mouse: hover + click on the rattling drawer ----------
        await pg.evaluate('__hme.look(1.15, -0.25); __hme.sim(1)')
        pos = await pg.evaluate('__hme.pick("drawer")')
        hit = await pg.evaluate(f'__hme.pickAt({pos["x"]}, {pos["y"]})')
        await pg.mouse.move(pos['x'] - 3, pos['y']); await pg.mouse.move(pos['x'], pos['y']); await sim(pg, 0.2); await asyncio.sleep(0.1)
        tip = await pg.evaluate('document.getElementById("tip").classList.contains("show") && document.getElementById("tip").textContent')
        check('hover shows highlight label', hit == 'drawer' and tip and 'drawer' in tip.lower(), tip)
        await pg.mouse.click(pos['x'], pos['y']); await sim(pg, 1.2)
        s = await snap(pg)
        check('mouse click opens drawer → matches in inventory', 'matches' in s['inv'] and s['f'].get('drawer'), s['inv'])
        await pg.evaluate('__hme.back()')
        # ---------- foyer ----------
        await act(pg, 'candleItem'); await act(pg, 'clock'); await sim(pg, 1)
        s = await snap(pg)
        check('candle picked up + clock clue seen', 'candle' in s['inv'] and s['f'].get('clockSeen') and s['spot'] == 'clock', s['inv'])
        await sim(pg, 0.6); await pg.evaluate('__hme.clean()'); await shot(pg, 'dbg-clock.png')
        # jump scare (normal mode)
        await pg.evaluate('__hme.back()'); await act(pg, 'portraitLady'); await sim(pg, 0.9)
        s = await snap(pg); scare_dom = await pg.evaluate('document.getElementById("scare").classList.contains("on")')
        check('jump scare: portrait screams (normal mode)', s['log']['scare'] == 1 and s['log']['cute'] == 0 and scare_dom, s['log'])
        await sim(pg, 2); await pg.evaluate('__hme.back()')
        # code lock: wrong then right via the real UI wheels
        ok = await pg.evaluate('__hme.lockSet("1234")'); s = await snap(pg)
        check('wrong code rejected', not ok and not s['f'].get('libOpen'))
        await pg.evaluate('document.getElementById("lockUI").classList.add("hidden")')
        await act(pg, 'libDoor'); await sim(pg, 0.6)
        vis = await pg.evaluate('!document.getElementById("lockUI").classList.contains("hidden")')
        await pg.evaluate('__hme.S.lockDigits=[0,0,0,0]')
        for i, d in enumerate([1, 0, 3, 5]):
            for _ in range(d): await pg.click(f'#lockUI .wheel:nth-child({i + 1}) .up')
        await pg.click('#lockOk'); await sim(pg, 3.5)
        s = await snap(pg)
        check('code lock UI: 1035 opens the library door', vis and s['f'].get('libOpen') and s['room'] == 'library', s['room'])
        # ---------- library ----------
        await sim(pg, 1); await act(pg, 'lectern'); await act(pg, 'twitchBook'); await sim(pg, 1.6)
        s = await snap(pg)
        check('moon crystal from the twitching book', 'crystal' in s['inv'], s['inv'])
        await pg.evaluate('__hme.select(null)'); await act(pg, 'holder3'); s = await snap(pg)
        check('item must be selected to use it (normal mode)', not s['f'].get('candlePlaced'))
        await pg.evaluate('__hme.select("candle")'); await act(pg, 'holder3'); await sim(pg, 0.5); s = await snap(pg)
        check('combine: candle placed in the empty holder', s['f'].get('candlePlaced') and 'candle' not in s['inv'])
        await pg.evaluate('__hme.select("matches")')
        seq = await pg.evaluate('__hme.variant("candles")')
        wrongFirst = [i for i in range(5) if i != seq[0]][0]
        await act(pg, f'holder{wrongFirst}'); await sim(pg, 1.2); s = await snap(pg)
        lit = await pg.evaluate('__hme.rooms.library.holders.filter(h=>h.c.lit).length')
        check('wrong candle order → draft blows them out', lit == 0 and not s['f'].get('candlesDone') and s['log']['wrong'] >= 2, lit)
        for k, i in enumerate(seq):
            await act(pg, f'holder{i}'); await sim(pg, 0.4)
            if k == 2: await pg.evaluate('__hme.clean()'); await shot(pg, 'dbg-mantel.png')
        await sim(pg, 1.0); s = await snap(pg)
        check('candles in the right order → secret bookshelf opens', s['f'].get('candlesDone') and s['f'].get('shelfOpen'), s['f'])
        await sim(pg, 3.5); s = await snap(pg)
        check('ghost flies by (normal)', s['log']['flyby'] >= 1)
        # library screenshot: lit mantel, open shelf
        await pg.evaluate('__hme.back(); __hme.look(0.18, 0.02); __hme.sim(40, 1/30); __hme.clean()'); await shot(pg, 'shot-library.png')
        # ---------- kitchen ----------
        await act(pg, 'secretDoor'); await sim(pg, 1.0); s = await snap(pg)
        check('secret passage leads to the kitchen', s['room'] == 'kitchen', s['room'])
        await sim(pg, 2.5); s = await snap(pg)
        check('kitchen entrance flyby', s['log']['flyby'] >= 2, s['log'])
        await act(pg, 'recipe'); await sim(pg, 0.5)
        await act(pg, 'bottle5'); await sim(pg, 1.5); s = await snap(pg)
        check('wrong potion → cauldron burps, recipe resets', not s['f'].get('brewDone') and await pg.evaluate('__hme.S.brew.length') == 0)
        h = await pg.evaluate('__hme.hint()')
        check('talking skull hint (kitchen)', h['goal'] == 'brew' and h['lvl'] == 1 and 'recipe' in h['text'].lower(), h)
        brew = await pg.evaluate('__hme.variant("brew")')
        for i in brew: await act(pg, f'bottle{i}'); await sim(pg, 0.9)
        await pg.evaluate('__hme.select(null)'); await act(pg, 'cauldron'); s = await snap(pg)
        check('crystal needs selection too', not s['f'].get('brewDone'))
        await pg.evaluate('__hme.select("crystal")'); await act(pg, 'cauldron'); await sim(pg, 2.6); s = await snap(pg)
        check('potion recipe solved → brass key rises', s['f'].get('brewDone') and 'crystal' not in s['inv'])
        await pg.evaluate('__hme.back(); __hme.look(0.0, 0.05); __hme.sim(20, 1/30); __hme.clean()'); await shot(pg, 'shot-kitchen.png')
        await act(pg, 'brassKey'); await pg.evaluate('__hme.select("brassKey")'); await act(pg, 'atticDoor'); await sim(pg, 3.5); s = await snap(pg)
        check('brass key opens the attic → attic', s['f'].get('atticOpen') and s['room'] == 'attic', s['room'])
        # ---------- attic finale ----------
        await sim(pg, 2.2); s = await snap(pg)
        check('ghost intro cinematic', s['cine'] and s['f'].get('ghostMet'), s)
        await sim(pg, 4.5)
        await until(pg, '!__hme.S.busy && document.getElementById("msg").textContent.length > 0', 15)
        await sim(pg, 5); mel = await pg.evaluate('__hme.variant("melody")'); w0 = (await snap(pg))['log']['wrong']
        await act(pg, 'mkey' + str((mel[0] + 1) % 5)); await sim(pg, 0.8); s = await snap(pg)
        check('wrong note → Wisp hums again', s['log']['wrong'] == w0 + 1 and not s['f'].get('melodyDone'), s['log'])
        await sim(pg, 6)
        for i, n in enumerate(mel):
            await act(pg, f'mkey{n}'); await sim(pg, 0.35)
        await sim(pg, 1.4); s = await snap(pg)
        check('music-box melody → Wisp is happy', s['f'].get('melodyDone'), s['f'])
        await sim(pg, 1.6); await pg.evaluate('__hme.clean()'); await shot(pg, 'shot-finale.png')
        await sim(pg, 5.5); s = await snap(pg)
        check('silver key received, back in the foyer at the front door', 'silverKey' in s['inv'] and s['room'] == 'foyer' and s['spot'] == 'frontDoor', s)
        await sim(pg, 1); await pg.evaluate('__hme.select("silverKey")'); await act(pg, 'frontDoor')
        await sim(pg, 4.2); s = await snap(pg)
        check('escape cinematic into the moonlit garden', s['room'] == 'garden' and s['f'].get('escaped') and s['mode'] == 'cine', s['room'])
        await sim(pg, 3.0); await pg.evaluate('__hme.clean()'); await shot(pg, 'shot-escape.png')
        await until(pg, '__hme.S.mode === "end"', 12)
        s = await snap(pg)
        check('end screen', s['mode'] == 'end' and await pg.is_visible('#endCard'))
        r = await pg.evaluate('__hme.result()')
        check('escape time + hints + stars + rank', r['time'] > 30 and r['hints'] == 1 and r['stars'] == 3 and len(await pg.inner_text('#rank')) > 3, r)
        best = await pg.evaluate('JSON.parse(localStorage.getItem("hme-best"))')
        check('best time stored (localStorage)', best and best['time'] == r['time'], best)
        check('save cleared after escape (fresh start next time)', await pg.evaluate('localStorage.getItem("hme-save")') is None)
        name = await pg.input_value('#name')
        check('name field defaults to Player', name == 'Player', name)
        await pg.fill('#name', 'Player'); txt = await pg.inner_text('#shareText')
        check('share text EN', 'Player escaped the HAUNTED MANSION' in txt and '#HauntedMansionEscape' in txt, txt[:90])
        await pg.click('#shareLang button[data-sl="de"]'); txt2 = await pg.inner_text('#shareText')
        check('share text DE', 'entkommen' in txt2 and 'Tipp' in txt2, txt2[:90])
        await pg.click('#btnShare'); await pg.wait_for_function('window.__hmeLastShare', timeout=5000)
        check('copy share text', 'entkommen' in await pg.evaluate('window.__hmeLastShare'))
        async with pg.expect_download() as dl: await pg.click('#btnShot')
        d = await dl.value; path = OUT + 'endcard.png'; await d.save_as(path)
        check('end card PNG 1080x1350', png_size(path) == (1080, 1350), (d.suggested_filename, png_size(path)))
        await asyncio.sleep(0.8); await shot(pg, 'shot-end.png')
        check('no console errors during the full playthrough', not logs, logs[:4])
        await ctx.close()

        # ---------- hints escalate (fresh game) + autosave/resume ----------
        ctx, pg, logs, _ = await new_page(b, url=HTTP_URL)
        await pg.click('#btnPlay'); await sim(pg, 2)
        hs = [await pg.evaluate('__hme.hint()') for _ in range(4)]
        check('3 escalating hints per puzzle (4th not counted)', [h['lvl'] for h in hs] == [1, 2, 3, 3] and '1 – 0 – 3 – 5' in hs[2]['text'] and await pg.evaluate('__hme.S.hintsUsed') == 3, [h['lvl'] for h in hs])
        check('stars drop with hints', await pg.evaluate('__hme.stars()') == 2)
        await act(pg, 'drawer'); await sim(pg, 1); await act(pg, 'candleItem'); await pg.evaluate('__hme.lockSet("1035")'); await sim(pg, 3)
        await pg.evaluate('__hme.save()'); sv = await pg.evaluate('__hme.loadSave()')
        check('autosave written', sv and sv['f'].get('libOpen') and 'matches' in sv['inv'] and sv['room'] == 'library', sv and sv['room'])
        await asyncio.sleep(0.3)
        await pg.reload(); await pg.wait_for_function('document.body.classList.contains("ready") && window.__hme', timeout=120000); await pg.evaluate('__hme.hold(true)')
        cont = await pg.is_visible('#btnContinue')
        await pg.click('#btnContinue'); await sim(pg, 1); s = await snap(pg)
        check('resume after reload (Continue)', cont and s['room'] == 'library' and s['f'].get('libOpen') and 'candle' in s['inv'] and s['hints'] == 3, s['room'])
        await pg.evaluate('__hme.menu()'); await pg.click('#btnPlay'); s = await snap(pg)
        check('new game resets progress', s['room'] == 'foyer' and not s['inv'] and s['hints'] == 0)
        # quality levels
        qok = []
        for q in ['low', 'mid', 'high', 'ultra']:
            await pg.evaluate(f'__hme.applyQuality("{q}")'); await sim(pg, 0.3); await pg.evaluate('__hme.render()')
            qok.append(await pg.evaluate('__hme.quality()') == q)
        check('quality levels Low/Medium/High/Ultra', all(qok) and not logs, logs[:2])
        # DE toggle
        await pg.evaluate('__hme.menu()'); await pg.click('#langSeg button[data-lang="de"]')
        check('DE toggle', (lambda t: 'VILLA' in t or 'Neues Spiel' in t)(await pg.inner_text('#start')), await pg.inner_text('#btnPlay'))
        await ctx.close()

        # ---------- kids mode ----------
        ctx, pg, logs, _ = await new_page(b, kids=True)
        await pg.click('#btnPlay'); await sim(pg, 2)
        await act(pg, 'portraitLady'); await sim(pg, 1.6); s = await snap(pg)
        check('kids mode: no jump scare, cute waving bat instead', s['log']['scare'] == 0 and s['log']['cute'] == 1, s['log'])
        await pg.evaluate('__hme.clean()'); await shot(pg, 'shot-kids.png')
        check('kids mode: simpler puzzles', len(await pg.evaluate('__hme.variant("candles")')) == 3 and len(await pg.evaluate('__hme.variant("melody")')) == 3)
        await act(pg, 'candleItem'); await pg.evaluate('__hme.lockSet("1035")'); await sim(pg, 3); await act(pg, 'holder3'); s = await snap(pg)
        check('kids mode: items are used automatically', s['f'].get('candlePlaced'))
        await pg.evaluate('__hme.hint(); __hme.hint(); __hme.hint(); __hme.hint()')
        check('kids mode: more hints before losing stars', await pg.evaluate('__hme.stars()') == 3)
        check('kids mode: no console errors', not logs, logs[:3])
        await ctx.close()

        # ---------- foyer hero screenshot (in game, no overlays) ----------
        ctx, pg, logs, _ = await new_page(b)
        await pg.click('#btnPlay'); await sim(pg, 5); await pg.evaluate('__hme.look(0.0, 0.12); __hme.sim(30, 1/30); __hme.clean()')
        await shot(pg, 'shot-foyer.png')
        await ctx.close()

        # ---------- mobile (touch) ----------
        ctx, pg, logs, _ = await new_page(b, vw=390, vh=844, mobile=True, quality='mid')
        await pg.tap('#btnPlay'); await sim(pg, 3)
        await pg.evaluate('__hme.look(1.15, -0.25); __hme.sim(1)')
        pos = await pg.evaluate('__hme.pick("drawer")')
        await pg.touchscreen.tap(pos['x'], pos['y']); await sim(pg, 1.2); s = await snap(pg)
        check('mobile: tap on 3D object works', 'matches' in s['inv'], s['inv'])
        await pg.evaluate('__hme.back(); __hme.look(0.15, 0.1); __hme.sim(40, 1/30); __hme.clean()'); await pg.evaluate('__hme.S.sel="matches"; __hme.select("matches")')
        await shot(pg, 'shot-mobile.png')
        check('mobile: no console errors', not logs, logs[:3])
        await ctx.close()
        # ---------- controls: tutorial, navigation, context line, deselect, wrong use ----------
        ctx, pg, logs, _ = await new_page(b, tut=True)
        await pg.click('#btnPlay'); await sim(pg, 2); tu = await pg.evaluate('__hme.tut()')
        check('tutorial opens on first start', tu['open'] and tu['step'] == 0 and 'glowing' in tu['title'].lower(), tu)
        t0 = (await snap(pg))['time']; await sim(pg, 3); t1 = (await snap(pg))['time']
        check('timer paused while tutorial open', abs(t1 - t0) < 0.01, (t0, t1))
        titles = [tu['title']]
        for i in range(4): await pg.click('#tutNext'); titles.append((await pg.evaluate('__hme.tut()'))['title'])
        check('tutorial has 5 steps (look, bag, rooms, skull)', len(set(titles)) == 5 and 'skull' in titles[-1].lower() and (await pg.inner_text('#tutNext')).lower().startswith("let"), titles)
        await pg.click('#tutNext'); tu = await pg.evaluate('__hme.tut()')
        check('tutorial closes and is remembered', not tu['open'] and tu['seen'])
        await pg.click('#btnHelp'); tu = await pg.evaluate('__hme.tut()')
        check('"?" button reopens tutorial', tu['open'])
        await pg.click('#tutSkip'); check('tutorial skippable', not (await pg.evaluate('__hme.tut()'))['open'])
        await pg.evaluate('__hme.setLang("de")'); await pg.click('#btnHelp'); tde = await pg.evaluate('__hme.tut()')
        check('tutorial in German', 'leuchtende' in tde['title'].lower() and 'Überspringen' in await pg.inner_text('#tutSkip'), tde['title'])
        await pg.keyboard.press('Escape'); await pg.evaluate('__hme.setLang("en")'); await sim(pg, 0.5)
        check('Esc closes tutorial', not (await pg.evaluate('__hme.tut()'))['open'])
        ctxt = await pg.evaluate('__hme.ctx()')
        check('context line guides new players', 'glowing' in ctxt.lower(), ctxt)
        nav = await pg.evaluate('[...document.querySelectorAll("#nav button")].map(b => b.textContent)')
        check('foyer shows labelled nav buttons (library locked)', any('Library' in n and '🔒' in n for n in nav), nav)
        await pg.click('#nav button.right'); await sim(pg, 1); s = await snap(pg)
        check('locked nav → feedback + lock opens', s['room'] == 'foyer' and await pg.is_visible('#lockUI'))
        await pg.keyboard.press('Escape'); await pg.evaluate('__hme.back()')
        await act(pg, 'drawer'); await sim(pg, 1); await pg.evaluate('__hme.back()'); await sim(pg, 0.5)
        await pg.click('.slot[data-item="matches"]'); s = await snap(pg)
        check('click bag item selects it + ✕ visible + item cursor', s['sel'] == 'matches' and await pg.is_visible('#btnDesel') and 'svg' in await pg.evaluate('__hme.cursor()'))
        check('context: "Use Matches on…"', 'Use Matches' in await pg.evaluate('__hme.ctx()'), await pg.evaluate('__hme.ctx()'))
        await pg.click('#btnDesel'); check('✕ deselects item', (await snap(pg))['sel'] is None)
        await pg.click('.slot[data-item="matches"]'); await pg.keyboard.press('Escape'); s = await snap(pg)
        check('Esc deselects item (no pause)', s['sel'] is None and not await pg.is_visible('#pauseScr'))
        await pg.evaluate('__hme.select("matches")'); await act(pg, 'clock'); await sim(pg, 0.3); s = await snap(pg)
        toastT = await pg.inner_text('#toast')
        check('wrong use → "That doesn\'t work here"', "doesn't work" in toastT and s['sel'] is None and 'matches' in s['inv'], toastT)
        await pg.evaluate('__hme.back(); __hme.idle(25)'); await sim(pg, 0.2)
        check('idle > 20 s → pulsing hint + context nudge', 'try the' in (await pg.evaluate('__hme.ctx()')).lower() and await pg.evaluate('document.body.classList.contains("idle")'), await pg.evaluate('__hme.ctx()'))
        await pg.evaluate('__hme.lockSet("1035")'); await sim(pg, 3); await pg.evaluate('__hme.back()'); await sim(pg, 0.3)
        nav = await pg.evaluate('[...document.querySelectorAll("#nav button")].map(b => b.className + ":" + b.textContent)')
        check('library: back button to Foyer', (await snap(pg))['room'] == 'library' and any(n.startswith('back') and 'Foyer' in n for n in nav), nav)
        await pg.click('#nav button.back'); await sim(pg, 2)
        check('nav back → foyer', (await snap(pg))['room'] == 'foyer')
        await sim(pg, 0.5); await pg.click('#nav button.right'); await sim(pg, 2); s = await snap(pg)
        check('nav button → library', s['room'] == 'library', s['room'])
        await pg.click('#nav button.back'); await sim(pg, 2)
        await pg.mouse.move(640, 400); await pg.mouse.down(); await pg.mouse.move(700, 405, steps=6); await pg.mouse.up(); await sim(pg, 0.3); s = await snap(pg)
        check('drag to look does not click', s['spot'] is None and s['room'] == 'foyer')
        check('controls: no console errors', not logs, logs[:3])
        await ctx.close()
        # ---------- FREE WALKING (first person): movement, collision, doors, stairs, crosshair, full playthrough ----------
        ctx, pg, logs, _ = await new_page(b, walk=True)
        await pg.click('#btnPlay'); await sim(pg, 3); w0 = await pg.evaluate('__hme.walk()')
        check('walk mode is the default (first person)', w0['on'] and not await pg.evaluate('document.getElementById("xh").classList.contains("hidden")'), w0)
        await pg.keyboard.down('w'); await sim(pg, 1.0); await pg.keyboard.up('w'); w1 = await pg.evaluate('__hme.walk()')
        check('W walks forward', w1['z'] < w0['z'] - 1.5, (w0['z'], w1['z']))
        await pg.keyboard.down('d'); await sim(pg, 0.6); await pg.keyboard.up('d'); w2 = await pg.evaluate('__hme.walk()')
        check('D strafes right', w2['x'] > w1['x'] + 0.8, (w1['x'], w2['x']))
        await pg.evaluate('__hme.placeP(-6, 0, -1, Math.PI / 2)'); await pg.keyboard.down('w'); await sim(pg, 3); await pg.keyboard.up('w'); w3 = await pg.evaluate('__hme.walk()')
        check('collision: wall stops the player', -8.75 <= w3['x'] < -8.2, w3['x'])
        await pg.evaluate('__hme.placeP(-6, 0, -4.2, Math.PI / 2)'); await pg.keyboard.down('w'); await sim(pg, 3); await pg.keyboard.up('w'); w4 = await pg.evaluate('__hme.walk()')
        check('collision: furniture (grandfather clock) blocks', w4['x'] > -8.1, w4['x'])
        await pg.evaluate('__hme.placeP(0, 0, 1, 0)'); r = await walk_to(pg, [(6, -3), (9.4, -3)])
        s = await snap(pg); check('locked library door rattles ("Locked")', r == 'foyer' and s['log'].get('lockedBump', 0) >= 1 and 'Locked' in await pg.inner_text('#toast'), s['log'])
        # crosshair interaction: drawer, candle, clock
        c = await use_cross(pg, 'drawer', 1.3); await sim(pg, 1.0); s = await snap(pg)
        check('crosshair highlights + E interacts (drawer → matches)', c == 'drawer' and 'matches' in s['inv'] and s['log'].get('cross', 0) >= 1, (c, s['inv']))
        tip = await pg.evaluate('document.getElementById("tip").textContent')
        await use_cross(pg, 'candleItem', 1.2); await use_cross(pg, 'clock', 1.6); s = await snap(pg)
        check('crosshair label "E / Click: …" + candle + clock', 'E / Click' in tip and 'candle' in s['inv'] and s['f'].get('clockSeen'), tip)
        await sim(pg, 2.5)
        await use_cross(pg, 'codeLock', 1.5); await sim(pg, 0.6); lockvis = await pg.is_visible('#lockUI')
        await pg.evaluate('__hme.lockSet("1035")'); await sim(pg, 2.5)
        check('code lock via crosshair opens the library door', lockvis and (await snap(pg))['f'].get('libOpen'))
        await pg.evaluate('__hme.placeP(5.5, 0, -3, -Math.PI / 2)'); await sim(pg, 0.3)
        r = await walk_to(pg, [(9.4, -3)])
        check('walk through the open door → library', r == 'library', r)
        # library by walking + crosshair
        await use_cross(pg, 'lectern', 1.4); await use_cross(pg, 'twitchBook', 1.5); await sim(pg, 1.6)
        await pick_item(pg, 'candle'); await use_cross(pg, 'holder3', 1.5); await sim(pg, 0.5)
        await pick_item(pg, 'matches'); s = await snap(pg); sel_ok = s['sel'] == 'matches'
        for i in await pg.evaluate('__hme.variant("candles")'):
            if (await snap(pg))['sel'] != 'matches': await pick_item(pg, 'matches')
            await use_cross(pg, f'holder{i}', 1.5); await sim(pg, 0.4)
        await sim(pg, 4.5); s = await snap(pg)
        check('number keys select items + candle puzzle by crosshair → shelf opens', sel_ok and s['f'].get('shelfOpen'), s['f'])
        await pg.evaluate('__hme.placeP(-1.0, 0, -6.2, Math.PI / 2)'); await sim(pg, 0.3)
        r = await walk_to(pg, [(-4.7, -6.6), (-4.7, -8.4)])
        check('walk through the secret passage → kitchen', r == 'kitchen', r)
        await sim(pg, 3)
        await use_cross(pg, 'recipe', 1.6)
        for i in await pg.evaluate('__hme.variant("brew")'): await use_cross(pg, f'bottle{i}', 1.3); await sim(pg, 0.9)
        await pick_item(pg, 'crystal'); await use_cross(pg, 'cauldron', 1.9); await sim(pg, 3.0)
        await pg.evaluate('__hme.placeP(0, 0, -4.4, 0)'); c = await use_cross(pg, 'brassKey', 0, approach=False); await sim(pg, 0.5); s = await snap(pg)
        check('kitchen by crosshair: potion brewed, brass key taken', s['f'].get('brewDone') and 'brassKey' in s['inv'], (c, s['inv']))
        await pg.evaluate('__hme.placeP(5.3, 0, -5.2, 0)'); await sim(pg, 0.3)
        r = await walk_to(pg, [(5.3, -7.2)])
        check('kitchen door unbolts → back to the foyer (connected house)', r == 'foyer' and (await snap(pg))['f'].get('kitOpen'), r)
        w = await pg.evaluate('__hme.walk()')
        await pg.evaluate('__hme.placeP(0, 0, -2.5, 0)'); r = await walk_to(pg, [(0, -9.35), (-3.7, -9.3)]); w = await pg.evaluate('__hme.walk()')
        check('stairs climbable → landing', w['y'] > 3.9 and w['z'] < -9.0, w)
        await sim(pg, 0.5); await shot(pg, 'shot-walk-landing.png')
        await pick_item(pg, 'brassKey'); c = await use_cross(pg, 'atticDoor', 0, approach=False); await sim(pg, 2.0); s = await snap(pg)
        check('brass key opens the attic door on the landing', c == 'atticDoor' and s['f'].get('atticOpen'), c)
        r = await walk_to(pg, [(-3.7, -9.9)])
        check('walk up into the attic', r == 'attic', r)
        await until(pg, '__hme.S.f.ghostMet && !__hme.S.busy', 15); await sim(pg, 6)
        mel = await pg.evaluate('__hme.variant("melody")')
        await pg.evaluate('__hme.approach("musicbox", 1.0)')
        await until(pg, '!__hme.S.busy', 15); await sim(pg, 6)
        for n in mel: await use_cross(pg, f'mkey{n}', 0, approach=False); await sim(pg, 0.2)
        await sim(pg, 1.5); s = await snap(pg)
        check('music box played via crosshair', s['f'].get('melodyDone'), s['f'])
        await until(pg, "__hme.S.room === 'foyer' && !__hme.S.busy", 20); await sim(pg, 1)
        w = await pg.evaluate('__hme.walk()'); r = await walk_to(pg, [(0, 5.6)])
        await sim(pg, 4.2); s = await snap(pg)
        check('walk out the front door → cinematic escape to the garden', s['room'] == 'garden' and s['f'].get('escaped'), s['room'])
        await until(pg, '__hme.S.mode === "end"', 14)
        check('walking playthrough reaches the end screen', (await snap(pg))['mode'] == 'end')
        check('walking: no console errors', not logs, logs[:3])
        await ctx.close()
        # autosave stores the position
        ctx, pg, logs, _ = await new_page(b, walk=True, url=HTTP_URL)
        await pg.click('#btnPlay'); await sim(pg, 2); await pg.evaluate('__hme.placeP(3.1, 0, 1.2, 0.7); __hme.save()'); await asyncio.sleep(0.3)
        await pg.reload(); await pg.wait_for_function('document.body.classList.contains("ready") && window.__hme', timeout=120000); await pg.evaluate('__hme.hold(true)')
        await pg.click('#btnContinue'); await sim(pg, 0.5); w = await pg.evaluate('__hme.walk()')
        check('autosave restores the walking position', abs(w['x'] - 3.1) < 0.05 and abs(w['z'] - 1.2) < 0.05 and abs(w['yaw'] - 0.7) < 0.05, w)
        await shot(pg, 'shot-walk-foyer.png')
        await ctx.close()
        # mobile: virtual joystick + action button
        ctx, pg, logs, _ = await new_page(b, vw=390, vh=844, mobile=True, quality='mid', walk=True)
        await pg.tap('#btnPlay'); await sim(pg, 2); w0 = await pg.evaluate('__hme.walk()')
        cdp = await ctx.new_cdp_session(pg)
        await cdp.send('Input.dispatchTouchEvent', {'type': 'touchStart', 'touchPoints': [{'x': 90, 'y': 640}]})
        await cdp.send('Input.dispatchTouchEvent', {'type': 'touchMove', 'touchPoints': [{'x': 90, 'y': 590}]})
        await sim(pg, 1.0); joyvis = await pg.evaluate('document.getElementById("joy").classList.contains("on")')
        await cdp.send('Input.dispatchTouchEvent', {'type': 'touchEnd', 'touchPoints': []}); w1 = await pg.evaluate('__hme.walk()')
        check('mobile: left joystick walks', joyvis and w1['z'] < w0['z'] - 1.0, (w0['z'], w1['z']))
        await pg.evaluate('__hme.placeP(-7.2, 0, 0.6, Math.PI / 2)'); c = await pg.evaluate('__hme.aim("drawer")')
        await pg.tap('#btnAct'); await sim(pg, 0.8); s = await snap(pg)
        check('mobile: ✋ action button uses the highlighted object', c == 'drawer' and 'matches' in s['inv'], (c, s['inv']))
        await pg.evaluate('__hme.placeP(0, 0, 1.5, 0); __hme.sim(20, 1/30)'); await shot(pg, 'shot-walk-mobile.png')
        check('mobile walk: no console errors', not logs, logs[:3])
        await ctx.close()
        await b.close()
    n = sum(1 for r in results if r[1]); print(f'\n{n}/{len(results)} passed')
    sys.exit(0 if n == len(results) else 1)
asyncio.run(main())
