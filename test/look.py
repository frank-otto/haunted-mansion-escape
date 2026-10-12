"""Review shots: lightning in the foyer, portrait jump scare (normal + kids). python3 test/look.py"""
import asyncio, os
from playwright.async_api import async_playwright
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARGS = ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist']
async def run(b, kids, name):
    ctx = await b.new_context(viewport={'width': 960, 'height': 600})
    await ctx.add_init_script(f"localStorage.clear(); localStorage.setItem('hme-quality', JSON.stringify('high')); localStorage.setItem('hme-kids', JSON.stringify({str(kids).lower()})); localStorage.setItem('hme-walk','false'); window.__hmeNoTut = true; window.__hmeNoAutoQ = true;")
    pg = await ctx.new_page(); errs = []; pg.on('pageerror', lambda e: errs.append(str(e)))
    await pg.goto('file://' + ROOT + '/index.html'); await pg.wait_for_function('document.body.classList.contains("ready") && window.__hme', timeout=120000)
    await pg.evaluate('__hme.hold(true); __hme.start(); __hme.sim(90, 1/30); __hme.clean()')
    await pg.evaluate('__hme.lightning(); __hme.sim(2, 1/30); __hme.render()'); await pg.screenshot(path=f'{ROOT}/test/shots/look-{name}-lightning.png')
    await pg.evaluate('__hme.sim(60, 1/30); __hme.interact("portraitLady"); __hme.sim(24, 1/30); __hme.render()'); await pg.screenshot(path=f'{ROOT}/test/shots/look-{name}-scare.png')
    print(name, errs); await ctx.close()
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', headless=True, args=ARGS)
        await run(b, False, 'n'); await run(b, True, 'k'); await b.close()
asyncio.run(main())
