import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/site';

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: PageProps<'/works/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.title, description: `${p.summary} Built for ${p.event} in ${p.year} with ${p.tools.slice(0, 3).join(', ')}.` } : {};
}

export default async function Work({ params }: PageProps<'/works/[slug]'>) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];
  const external = /^https?:/.test(p.link);
  return (
    <article className="case wrap">
      <header className="case__head grid">
        <p className="case__crumb mono" data-reveal="fade" data-intro>
          <span className="led" data-status={p.status} aria-hidden="true" />
          service {String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </p>
        <h1 className="t-xl" data-split="lines" data-intro>{p.title}</h1>
        <p className="case__summary t-m" data-split="lines" data-intro data-delay="0.25">{p.summary}</p>
        <dl className="case__meta" data-reveal="fade" data-intro data-delay="0.4">
          <dt>event</dt><dd>{p.event}</dd>
          <dt>year</dt><dd>{p.year}</dd>
          <dt>status</dt><dd><span className="led" data-status={p.status} aria-hidden="true" />{p.status}</dd>
          <dt>stack</dt><dd>{p.tools.map((t) => <span key={t}>{t}</span>)}</dd>
          <dt>upstream</dt><dd><a className="link" href={p.link} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>{p.linkLabel}{external && <span className="sr-only"> (opens in a new tab)</span>}</a></dd>
        </dl>
      </header>
      <div className="case__pair grid">
        <figure className="case__media">
          <Image src={p.cover.src} alt={p.cover.alt} width={p.cover.width} height={p.cover.height} sizes="(max-width: 767px) 92vw, 66vw" loading="eager" fetchPriority="high" data-critical />
        </figure>
      </div>
      <div className="grid">
        <div className="case__body">
          {p.body.map((b) => (
            <section key={b.heading}>
              <h2>{b.heading}</h2>
              <p data-split="lines">{b.text}</p>
            </section>
          ))}
        </div>
      </div>
      <div className="grid">
        <Link href={`/works/${next.slug}`} className="case__next">
          <span className="mono">next service · {String((i + 1) % projects.length + 1).padStart(2, '0')}</span>
          <span className="case__next-title t-l">{next.title}<span className="arrow" aria-hidden="true">→</span></span>
        </Link>
      </div>
    </article>
  );
}
