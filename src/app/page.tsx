import Image from 'next/image';
import Link from 'next/link';
import { Entry, Services } from '@/components/Topology';
import { featured, home, projects, site } from '@/data/site';
import { Uptime } from '@/components/Uptime';

export default function Home() {
  const picks = featured.map((s) => projects.find((p) => p.slug === s)!);
  return (
    <>
      {/* The probe loader belongs to the entrypoint only: inner routes never render it. */}
      <div id="loader" role="status" aria-label="Loading">
        <span className="loader__name"><span className="led" aria-hidden="true" />{site.short}.sinha</span>
        <div className="loader__inner">
          <span data-loader-out>probing entrypoint :443</span>
          <span className="loader__count" data-loader-out data-loader-count>000</span>
        </div>
        <div className="loader__bar" data-loader-bar />
      </div>
      <section className="hero grid" aria-labelledby="hero-name">
        <div className="hero__name">
          <h1 id="hero-name" className="display"><span>Amresh</span><span className="hero__line2">Sinha</span></h1>
        </div>
        <div className="hero__sub">
          <p className="t-m" data-split="lines" data-intro data-delay="0.15">{home.tagline} {home.sub}</p>
          <div data-reveal="fade" data-intro data-delay="0.45">
            <Link href={home.cta.href} className="btn" data-route-link="works">{home.cta.label}<span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="hero__entry" data-reveal="fade" data-intro data-delay="0.2"><Entry /></div>
        <div className="hero__svcs" data-reveal="fade" data-intro data-delay="0.3"><Services /></div>
        <div className="hero__meta mono" data-reveal="fade" data-intro data-delay="0.5">
          <span>{site.role.toLowerCase()}</span>
          <span>{site.location.toLowerCase()} · {site.coords}</span>
          <span>{site.hobbies.join(', ')}</span>
        </div>
      </section>

      <section className="sec grid wrap wall" aria-labelledby="work-title">
        <div className="sec__head">
          <h2 id="work-title" className="t-l">Selected work</h2>
          <Link href="/works" className="mono draw" data-route-link="works">all {String(projects.length).padStart(2, '0')} routes</Link>
        </div>
        {picks.map((p, i) => (
          <Link key={p.slug} href={`/works/${p.slug}`} className="wall__item">
            <span className="card__frame" data-reveal="wipe" data-delay={String(i * 0.05)}>
              <Image src={p.cover.src} alt={p.cover.alt} width={p.cover.width} height={p.cover.height} sizes="(max-width: 767px) 92vw, 58vw" loading={i === 0 ? 'eager' : 'lazy'} />
            </span>
            <span className="card__cap">
              <span className="card__title">{p.title}</span>
              <span className="card__meta mono">{p.event} · {p.year}</span>
            </span>
          </Link>
        ))}
      </section>

      <Uptime />

      <section className="sec sec--tight grid wrap stmt" aria-label="About, in short">
        <p className="stmt__label mono">about</p>
        <p className="stmt__text t-l" data-split="lines">{home.statement}</p>
        <Link href="/me" className="stmt__more draw" data-route-link="me">Read the whole journey</Link>
      </section>

      <section className="field grid wrap" aria-labelledby="contact-title">
        <h2 id="contact-title" className="field__face" aria-label="Smiley face">{home.errorCard.title}</h2>
        <div className="field__body">
          <p className="mono">status: 0x0000DEAD · a friendly stop screen</p>
          {home.errorCard.lines.map((l) => <p key={l} className="t-m" data-split="lines">{l}</p>)}
          <div><a className="btn" href={`mailto:${site.email}`}>{home.errorCard.cta}<span className="arrow" aria-hidden="true">→</span></a></div>
        </div>
      </section>
    </>
  );
}
