// The network behind every page: one canvas, one clock. Ambient routes cross the viewport with
// light traffic; on the home page three main routes run from the entrypoint to the services.
// Routes bend toward the pointer, traffic speeds up with scroll, packets land with a hit on the
// service label. Reduced motion draws the map once and never moves it.
import { gsap } from 'gsap';
import { isTouch, onPage, onScroll, prefersReducedMotion } from '@/engine';

type Pt = { x: number; y: number };
type Packet = { t: number; v: number };
type Route = { id: string; a: Pt; b: Pt; main: boolean; hot: number; packets: Packet[] };

let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let W = 0, H = 0;
let ambient: Route[] = [];
let main: Route[] = [];
let nodes: Record<string, HTMLElement> = {};
let entry: HTMLElement | null = null;
let svcs: Record<string, HTMLElement> = {};
const pointer = { x: -9e3, y: -9e3, tx: -9e3, ty: -9e3 };
let speed = 1, speedAim = 1;
let nextAmbient = 0, nextIdle = 0;
let level = 1; // 1 on the home page, lower behind inner pages
let ink = '#ecebe6', accent = '#f0ad1f';
let reduced = false, touch = false, ticking = false;

const rnd = (() => { let s = 1337; return () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646; })();

function readTokens() {
  const s = getComputedStyle(document.documentElement);
  ink = s.getPropertyValue('--c-fg').trim() || ink;
  accent = s.getPropertyValue('--c-accent').trim() || accent;
}

function buildAmbient() {
  ambient = [];
  const n = 11;
  for (let i = 0; i < n; i++) {
    const y1 = (i + rnd() * 0.8) / n * H;
    const y2 = (rnd() * 0.9 + 0.05) * H;
    ambient.push({ id: `amb${i}`, a: { x: -60, y: y1 }, b: { x: W + 60, y: y2 }, main: false, hot: 0, packets: [] });
  }
}

function resize() {
  if (!canvas || !ctx) return;
  W = innerWidth; H = innerHeight;
  const dpr = Math.min(devicePixelRatio || 1, 1.5);
  canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  buildAmbient();
  readTokens();
  if (reduced) draw(0);
}

function centre(el: HTMLElement): Pt { const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; }

function syncMain() {
  if (!entry) { main = []; return; }
  const a = centre(entry);
  main = Object.entries(nodes).map(([id, el]) => {
    const prev = main.find((m) => m.id === id);
    return { id, a, b: centre(el), main: true, hot: prev?.hot ?? 0, packets: prev?.packets ?? [] };
  });
}

// Control points: horizontal tangents when the route runs sideways, vertical when it runs down.
function controls(r: Route): [Pt, Pt] {
  const dx = r.b.x - r.a.x, dy = r.b.y - r.a.y;
  let c1: Pt, c2: Pt;
  if (Math.abs(dx) >= Math.abs(dy)) { const mx = r.a.x + dx * 0.5; c1 = { x: mx, y: r.a.y }; c2 = { x: mx, y: r.b.y }; }
  else { const my = r.a.y + dy * 0.5; c1 = { x: r.a.x, y: my }; c2 = { x: r.b.x, y: my }; }
  return [bend(c1), bend(c2)];
}
function bend(p: Pt): Pt {
  if (touch || reduced) return p;
  const dx = pointer.x - p.x, dy = pointer.y - p.y;
  const f = 0.3 * Math.exp(-(dx * dx + dy * dy) / (260 * 260));
  return { x: p.x + dx * f, y: p.y + dy * f };
}
function bez(a: Pt, c1: Pt, c2: Pt, b: Pt, t: number): Pt {
  const u = 1 - t, uu = u * u, tt = t * t;
  return { x: uu * u * a.x + 3 * uu * t * c1.x + 3 * u * tt * c2.x + tt * t * b.x, y: uu * u * a.y + 3 * uu * t * c1.y + 3 * u * tt * c2.y + tt * t * b.y };
}

function draw(dt: number) {
  if (!ctx) return;
  ctx.clearRect(0, 0, W, H);
  ctx.lineCap = 'round';
  const routes = [...ambient, ...main];
  for (const r of routes) {
    const [c1, c2] = controls(r);
    const alpha = r.main ? 0.32 + r.hot * 0.68 : 0.09 * level + 0.03;
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = r.main && r.hot > 0.3 ? accent : ink;
    ctx.lineWidth = r.main ? 1 + r.hot * 0.6 : 1;
    ctx.beginPath(); ctx.moveTo(r.a.x, r.a.y); ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, r.b.x, r.b.y); ctx.stroke();
    if (r.hot > 0) r.hot = Math.max(0, r.hot - dt * 1.4);
    // packets
    for (let i = r.packets.length - 1; i >= 0; i--) {
      const p = r.packets[i];
      p.t += p.v * dt * speed;
      if (p.t >= 1) { r.packets.splice(i, 1); if (r.main) land(r.id); continue; }
      const q = bez(r.a, c1, c2, r.b, p.t);
      const tail = bez(r.a, c1, c2, r.b, Math.max(0, p.t - 0.05));
      ctx.globalAlpha = r.main ? 1 : 0.55 * level + 0.15;
      ctx.strokeStyle = accent; ctx.lineWidth = r.main ? 2 : 1.5;
      ctx.beginPath(); ctx.moveTo(tail.x, tail.y); ctx.lineTo(q.x, q.y); ctx.stroke();
      ctx.fillStyle = accent;
      ctx.beginPath(); ctx.arc(q.x, q.y, r.main ? 3 : 2, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha *= 0.22;
      ctx.beginPath(); ctx.arc(q.x, q.y, r.main ? 9 : 6, 0, Math.PI * 2); ctx.fill();
    }
  }
  ctx.globalAlpha = 1;
}

function land(id: string) {
  const r = main.find((m) => m.id === id); if (r) r.hot = 1;
  const svc = svcs[id]; if (!svc) return;
  svc.classList.add('is-hit');
  gsap.delayedCall(0.6, () => svc.classList.remove('is-hit'));
}

/** Send a packet along a main route (hover, focus, click, idle). */
export function dispatch(id: string, fast = false) {
  if (reduced) return;
  const r = main.find((m) => m.id === id);
  if (!r || r.packets.length > 2) return;
  r.packets.push({ t: 0, v: fast ? 1.4 : 0.6 });
}

function heroVisible() { if (!entry) return false; const r = entry.getBoundingClientRect(); return r.bottom > 0 && r.top < H; }

const tick = (time: number, deltaMs: number) => {
  if (document.hidden) return;
  const dt = Math.min(deltaMs / 1000, 0.05);
  pointer.x += (pointer.tx - pointer.x) * 0.08; pointer.y += (pointer.ty - pointer.y) * 0.08;
  speed += (speedAim - speed) * 0.08; speedAim += (1 - speedAim) * 0.04;
  syncMain();
  if (time > nextAmbient) {
    nextAmbient = time + (0.35 + rnd() * 0.9) / Math.max(level, 0.3);
    const r = ambient[(rnd() * ambient.length) | 0];
    if (r && r.packets.length < 3) r.packets.push({ t: 0, v: 0.08 + rnd() * 0.08 });
  }
  if (main.length && time > nextIdle && heroVisible()) {
    nextIdle = time + 2.2 + rnd() * 1.6;
    dispatch(main[(rnd() * main.length) | 0].id);
  }
  draw(dt);
};

export function startNet() {
  canvas = document.getElementById('net') as HTMLCanvasElement | null;
  if (!canvas) return;
  ctx = canvas.getContext('2d');
  reduced = prefersReducedMotion(); touch = isTouch();
  resize();
  addEventListener('resize', resize);
  if (!touch) addEventListener('pointermove', (e) => { pointer.tx = e.clientX; pointer.ty = e.clientY; }, { passive: true });
  onScroll(({ velocity }) => { speedAim = 1 + Math.min(Math.abs(velocity) / 25, 3); });

  onPage(() => {
    entry = document.querySelector<HTMLElement>('[data-net-node="entry"]');
    nodes = {}; svcs = {};
    document.querySelectorAll<HTMLElement>('[data-net-node]:not([data-net-node="entry"])').forEach((el) => { nodes[el.dataset.netNode!] = el; });
    document.querySelectorAll<HTMLElement>('[data-svc]').forEach((el) => { svcs[el.dataset.svc!] = el; });
    level = entry ? 1 : 0.45;
    main = [];
    const links = [...document.querySelectorAll<HTMLElement>('[data-route-link]')];
    const over = (e: Event) => dispatch((e.currentTarget as HTMLElement).dataset.routeLink!);
    links.forEach((a) => { a.addEventListener('pointerenter', over); a.addEventListener('focus', over); });
    if (reduced) { syncMain(); draw(0); }
    else if (!ticking) { ticking = true; gsap.ticker.add(tick); }
    return () => {
      links.forEach((a) => { a.removeEventListener('pointerenter', over); a.removeEventListener('focus', over); });
      entry = null; nodes = {}; svcs = {}; main = [];
    };
  });
}
