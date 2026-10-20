// Works index: a floating cover follows the pointer over the rows (fine pointers only).
// Delegated on the list, so the filter can re-render rows freely.
import { gsap } from 'gsap';
import { isTouch, onPage, onScroll } from '@/engine';

export const indexPreview = () => onPage(() => {
  const list = document.querySelector<HTMLElement>('[data-index]');
  const box = document.querySelector<HTMLElement>('.preview');
  if (!list || !box || isTouch()) return;
  const img = box.querySelector('img')!;
  const x = gsap.quickTo(box, 'x', { duration: 0.6, ease: 'power3.out' });
  const y = gsap.quickTo(box, 'y', { duration: 0.6, ease: 'power3.out' });
  const rot = gsap.quickTo(box, 'rotate', { duration: 0.8, ease: 'power3.out' });
  let lastX = 0, px = 0, py = 0, src = '';
  const move = (e: PointerEvent) => {
    px = e.clientX; py = e.clientY;
    x(Math.max(px, innerWidth * 0.42)); y(py); rot(gsap.utils.clamp(-8, 8, (px - lastX) * 0.5)); lastX = px; // stays in the midfield, never over the titles
  };
  const show = (a: HTMLElement) => {
    const next = a.dataset.preview!;
    if (next !== src) { src = next; img.src = next; }
    gsap.to(box, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'expo.out', overwrite: true });
  };
  const hide = () => gsap.to(box, { autoAlpha: 0, scale: 0.9, duration: 0.4, ease: 'expo.out', overwrite: true });
  const over = (e: Event) => {
    const a = (e.target as HTMLElement).closest<HTMLElement>('a[data-preview]');
    if (a) show(a);
  };
  const focus = (e: Event) => { const a = (e.target as HTMLElement).closest<HTMLElement>('a[data-preview]'); if (a) { const r = a.getBoundingClientRect(); px = r.left + r.width * 0.6; py = r.top + r.height / 2; x(Math.max(px, innerWidth * 0.42)); y(py); show(a); } };
  list.addEventListener('pointerover', over);
  list.addEventListener('pointerleave', hide);
  list.addEventListener('focusin', focus);
  list.addEventListener('focusout', hide);
  addEventListener('pointermove', move, { passive: true });
  const off = onScroll(() => { if (!list.contains(document.elementFromPoint(px, py))) hide(); });
  return () => { removeEventListener('pointermove', move); off(); };
});
