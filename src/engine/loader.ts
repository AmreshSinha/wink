// First-load sequence. Progress follows REAL work (fonts + critical images), eased by GSAP,
// with a floor so it reads as intentional and a ceiling so it never becomes a usability problem.
// Markup (#loader) lives in the layout; its look is authored per project.
import { gsap } from 'gsap';
import { ease, prefersReducedMotion } from './env';

let format = (p: number) => String(Math.round(p)).padStart(3, '0');
/** Customize the counter text, e.g. a clock, a year, a frame count. p goes 0 → 100. */
export const setLoaderFormat = (fn: (p: number) => string) => { format = fn; };
let exit: ((root: HTMLElement, fast: boolean) => gsap.core.Timeline) | null = null;
/** Replace the exit choreography (the loader → hero handoff). Return a timeline. `fast` when the
 *  page already took longer than MAX to arrive (slow network): keep the exit short. */
export const setLoaderExit = (fn: (root: HTMLElement, fast: boolean) => gsap.core.Timeline) => { exit = fn; };

const MIN = 0.85; // seconds since navigation start: long enough to read as a designed moment
const MAX = 2.0; // seconds since navigation start: a longer loader is a usability problem
const FAST = 1.5; // the page already took this long to arrive: no theatrics, a short fade

function criticalAssets(): Promise<unknown>[] {
  const imgs = [...document.querySelectorAll<HTMLImageElement>('img[data-critical], [data-intro] img, [data-gl-instant] img')];
  return [document.fonts.ready, ...imgs.map((i) => (i.complete ? Promise.resolve() : i.decode().catch(() => {})))];
}

export async function runLoader(): Promise<void> {
  const root = document.getElementById('loader');
  if (!root) return;
  if (getComputedStyle(root).display === 'none') return finish(root); // skipped before paint (inner page, repeat visit)
  if (prefersReducedMotion()) {
    await Promise.race([Promise.all(criticalAssets()), wait(MAX)]);
    await gsap.to(root, { autoAlpha: 0, duration: 0.3 });
    return finish(root);
  }
  const count = root.querySelector<HTMLElement>('[data-loader-count]');
  const bar = root.querySelector<HTMLElement>('[data-loader-bar]');
  const tasks = criticalAssets();
  let done = 0;
  const shown = { v: 0 };
  const target = { v: 0 };
  tasks.forEach((t) => t.then(() => { done++; target.v = (done / tasks.length) * 100; }));
  // Progress is measured from navigation start, so a slow network never adds the floor on top.
  const already = performance.now() / 1000;
  try { sessionStorage.setItem('wink:seen', '1'); } catch { /* storage blocked */ }
  const fast = already >= FAST;
  if (fast) { shown.v = 100; if (count) count.textContent = format(100); if (bar) bar.style.transform = 'scaleX(1)'; }
  const start = performance.now();

  if (!fast) await new Promise<void>((resolve) => {
    const tick = () => {
      const elapsed = already + (performance.now() - start) / 1000;
      const timeCap = Math.min(100, (elapsed / MIN) * 100); // never faster than MIN
      const goal = elapsed > MAX ? 100 : Math.min(target.v, timeCap);
      shown.v += (goal - shown.v) * 0.12;
      if (goal === 100 && shown.v > 99.5) shown.v = 100;
      if (count) count.textContent = format(shown.v);
      if (bar) bar.style.transform = `scaleX(${shown.v / 100})`;
      if (shown.v === 100) { gsap.ticker.remove(tick); resolve(); }
    };
    gsap.ticker.add(tick);
  });

  // Exit. Author per project with setLoaderExit(): it is the first handoff every visitor sees.
  if (fast) { await gsap.to(root, { autoAlpha: 0, duration: 0.25 }); return finish(root); }
  if (exit) { await exit(root, fast); return finish(root); }
  await gsap.timeline()
    .to(root.querySelectorAll('[data-loader-out]'), { yPercent: -110, duration: 0.7, ease: ease.inOut, stagger: 0.05 })
    .to(root, { clipPath: 'inset(0% 0% 100% 0%)', duration: 1, ease: ease.inOut }, '-=0.35');
  finish(root);
}

// Hide rather than remove: in React apps the loader node belongs to React.
function finish(root: HTMLElement) {
  root.hidden = true;
  document.documentElement.classList.add('is-loaded');
}

const wait = (s: number) => new Promise((r) => setTimeout(r, s * 1000));
