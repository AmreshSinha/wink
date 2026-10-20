import Link from 'next/link';
import { projects, site } from '@/data/site';

// The entrypoint and the three services. The routes between them are drawn by the net canvas
// (src/motion/net.ts); without JS or under reduced motion the labels still read as the map.
const ROUTES = [
  { key: 'works', label: '/works', note: `${projects.length} services` },
  { key: 'blog', label: '/blog', note: 'fossian' },
  { key: 'me', label: '/me', note: site.education.toLowerCase() },
];

export function Entry() {
  return (
    <p className="net__entry mono">
      <span className="net__dot net__dot--entry" data-net-node="entry" aria-hidden="true" />
      :443 entrypoint
    </p>
  );
}

export function Services() {
  const nav = Object.fromEntries(site.nav.map((n) => [n.route, n]));
  return (
    <nav className="net__svcs" aria-label="Routes">
      {ROUTES.map((r) => {
        const n = nav[r.key];
        const inner = <><span className="net__dot" data-net-node={r.key} aria-hidden="true" /><span className="net__label"><span className="mono draw">{r.label}</span><small>{r.note}</small></span></>;
        return n.external ? (
          <a key={r.key} className="net__svc" data-svc={r.key} data-route-link={r.key} href={n.href} target="_blank" rel="noopener">{inner}<span className="sr-only"> (opens in a new tab)</span></a>
        ) : (
          <Link key={r.key} className="net__svc" data-svc={r.key} data-route-link={r.key} href={n.href}>{inner}</Link>
        );
      })}
    </nav>
  );
}
