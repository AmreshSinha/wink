// Global motion for this site: runs once on the client, before the first page initializes.
// The loader probes the entrypoint, the curtain carries the request, the header steps aside,
// and the traffic driver keeps the topology alive.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ease, setLoaderExit, setLoaderFormat, setTransition } from '@/engine';
import { startNet, dispatch } from './net';
import { indexPreview } from './preview';
import { journeyRail } from './journey';

export function setupMotion() {
  setLoaderFormat((p) => String(Math.round(p)).padStart(3, '0'));
  setLoaderExit((root, fast) => gsap.timeline()
    .add(() => { const c = root.querySelector('[data-loader-count]'); if (c) c.textContent = '200'; })
    .to(root.querySelector('[data-loader-count]'), { color: 'var(--c-accent)', duration: 0.12 })
    .to(root, { clipPath: 'inset(0% 0% 0% 100%)', duration: fast ? 0.45 : 0.6, ease: ease.inOut }, fast ? '+=0.05' : '+=0.08'));

  // The request label: read the link before the curtain sweeps.
  let pending = '/';
  document.addEventListener('click', (e) => {
    const a = (e.target as Element).closest('a');
    if (!a) return;
    try {
      const u = new URL(a.href, location.href);
      if (u.origin === location.origin) { pending = u.pathname; const r = a.dataset.routeLink; if (r) dispatch(r, true); }
    } catch { /* not a URL */ }
  }, true);

  setTransition({
    leave: (c) => {
      const label = c.querySelector<HTMLElement>('[data-curtain-label]');
      if (label) label.textContent = `GET ${pending}`;
      return gsap.timeline()
        .set(c, { autoAlpha: 1 })
        .fromTo(c.querySelector('.curtain__panel'), { clipPath: 'inset(0% 100% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.8, ease: ease.inOut })
        .fromTo(label, { autoAlpha: 0, x: -12 }, { autoAlpha: 1, x: 0, duration: 0.4, ease: ease.soft }, '-=0.3');
    },
    enter: (c) => {
      const label = c.querySelector<HTMLElement>('[data-curtain-label]');
      return gsap.timeline()
        .add(() => { if (label) label.textContent = '200 OK'; })
        .to(c.querySelector('.curtain__panel'), { clipPath: 'inset(0% 0% 0% 100%)', duration: 0.9, ease: ease.inOut }, '+=0.3')
        .set(c, { autoAlpha: 0 })
        .set(c.querySelector('.curtain__panel'), { clipPath: 'inset(0% 100% 0% 0%)' })
        .set(label, { autoAlpha: 0 });
    },
  });

  // The header steps aside while scrolling down and returns on the way up (ScrollTrigger sees
  // both Lenis and native scrolling, so this works on every input).
  ScrollTrigger.create({
    start: 120, end: 'max',
    onUpdate: (self) => document.documentElement.classList.toggle('frame-away', self.direction === 1),
    onLeaveBack: () => document.documentElement.classList.remove('frame-away'),
  });
  ScrollTrigger.create({
    start: 24, end: 'max',
    onToggle: (self) => document.documentElement.classList.toggle('scrolled', self.isActive),
  });

  startNet();
  indexPreview();
  journeyRail();
}
