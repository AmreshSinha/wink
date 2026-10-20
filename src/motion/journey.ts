// /me: the request travels down the journey. Scroll scrubs the packet along the rail; each hop
// updates the counter and its label. Under reduced motion the rail is static and the hud still works.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onPage, prefersReducedMotion } from '@/engine';

gsap.registerPlugin(ScrollTrigger);

export const journeyRail = () => onPage(() => {
  const root = document.querySelector<HTMLElement>('[data-journey]');
  if (!root) return;
  const items = [...root.querySelectorAll<HTMLElement>('[data-hop]')];
  const n = root.querySelector<HTMLElement>('[data-hop-n]');
  const label = root.querySelector<HTMLElement>('[data-hop-label]');
  const cursor = root.querySelector<HTMLElement>('.journey__cursor');
  const line = root.querySelector<HTMLElement>('.journey__line');
  const done = root.querySelector<SVGLineElement>('.journey__done');
  const list = root.querySelector<HTMLElement>('.journey__list')!;

  items.forEach((li, i) => ScrollTrigger.create({
    trigger: li, start: 'top 60%', end: 'bottom 60%',
    onToggle: (s) => {
      if (!s.isActive) return;
      items.forEach((o) => o.classList.toggle('is-here', o === li));
      if (n) n.textContent = String(i + 1).padStart(2, '0');
      if (label) label.textContent = li.dataset.hop || '';
    },
  }));

  if (prefersReducedMotion() || !cursor || !done || !line) return;
  gsap.fromTo(cursor, { y: 0 }, {
    y: () => line.clientHeight - cursor.offsetHeight, ease: 'none',
    scrollTrigger: { trigger: list, start: 'top 60%', end: 'bottom 60%', scrub: 0.6, invalidateOnRefresh: true },
  });
  gsap.fromTo(done, { attr: { y2: 0 } }, {
    attr: { y2: 100 }, ease: 'none',
    scrollTrigger: { trigger: list, start: 'top 60%', end: 'bottom 60%', scrub: 0.6 },
  });
});
