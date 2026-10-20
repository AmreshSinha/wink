'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/data/site';

export function Header() {
  const path = usePathname();
  return (
    <header className="hdr">
      <Link href="/" className="hdr__brand draw" aria-current={path === '/' ? 'page' : undefined} aria-label={`${site.name}, home`}>
        <span className="led" aria-hidden="true" />
        {site.short}.sinha
      </Link>
      <nav className="hdr__nav" aria-label="Primary">
        {site.nav.map((n) => {
          const current = !n.external && path.startsWith(n.href);
          return n.external ? (
            <a key={n.href} href={n.href} className="draw" target="_blank" rel="noopener" data-route-link={n.route}>
              {n.label}<span aria-hidden="true"> ↗</span><span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <Link key={n.href} href={n.href} className="draw" aria-current={current ? 'page' : undefined} data-route-link={n.route}>
              {n.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
