import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Motion } from '@/components/Motion';
import { LocalTime } from '@/components/LocalTime';
import { site } from '@/data/site';
import { archivo, mono } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.role}`, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: './' },
  openGraph: { type: 'website', siteName: site.name, images: ['/og.png'] },
  twitter: { card: 'summary_large_image' },
};

// Runs before first paint: hidden-until-revealed styles only apply when JS and motion are on.
// The probe loader belongs to the entrypoint on a first visit: inner pages and repeat visits skip it before paint.
const flags = `document.documentElement.classList.add('js');if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion');try{if(location.pathname!=='/'||sessionStorage.getItem('wink:seen'))document.documentElement.classList.add('no-loader')}catch(e){}`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  alumniOf: site.education,
  worksFor: { '@type': 'Organization', name: site.employer },
  address: { '@type': 'PostalAddress', addressLocality: 'Gurugram', addressCountry: 'IN' },
  sameAs: site.socials.filter((s) => !s.placeholder).map((s) => s.href),
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${archivo.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: flags }} />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <canvas id="net" aria-hidden="true" />
        <div id="curtain" aria-hidden="true"><div className="curtain__panel"><span className="curtain__label" data-curtain-label /></div></div>
        <Header />
        <main id="main" tabIndex={-1}>{children}</main>
        <footer className="foot grid wrap">
          <div className="foot__ask">
            <span className="mono">one open port</span>
            <a className="foot__mail draw draw--thick" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <nav className="foot__links" aria-label="Elsewhere">
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener">{s.label}<span className="sr-only"> (opens in a new tab)</span></a>
            ))}
          </nav>
          <p className="foot__colophon">
            <b>{site.name}</b>, {site.location}. <LocalTime /><br />
            Set in Archivo and JetBrains Mono. Built with Next.js and GSAP, routed by Traefik.
          </p>
        </footer>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
        <Motion />
      </body>
    </html>
  );
}
