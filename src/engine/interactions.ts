// Pointer craft. Fine pointers only; never hides the native cursor (accessibility, usability).
//   data-magnetic="0.35"   element leans toward the pointer
import { gsap } from 'gsap';
import { isTouch, prefersReducedMotion } from './env';

export function initMagnetic(root: ParentNode = document) {
  if (isTouch() || prefersReducedMotion()) return;
  root.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = parseFloat(el.dataset.magnetic || '0.35');
    const x = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
    const y = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      x((e.clientX - (r.left + r.width / 2)) * strength);
      y((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const leave = () => { x(0); y(0); };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
  });
}
