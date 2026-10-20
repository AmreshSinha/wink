import type { Metadata } from 'next';
import Link from 'next/link';
import { about, site } from '@/data/site';
import { Uptime } from '@/components/Uptime';

export const metadata: Metadata = {
  title: 'Me',
  description: 'The journey from a first computer in 2011 and QBASIC Turtle to IIT Guwahati, two Inter IIT medals, and an SDE2 seat at Wishlink, told hop by hop by Amresh Sinha.',
};

export default function Me() {
  const [h1, ...lines] = about.intro;
  return (
    <>
      <section className="me-intro grid wrap" aria-labelledby="me-title">
        <h1 id="me-title" className="t-xl">{h1} {lines[0]}</h1>
        <div className="me-intro__facts mono" data-reveal="fade" data-intro data-delay="0.3">
          <span>{site.role.toLowerCase()}</span>
          <span>{site.location.toLowerCase()}</span>
          <span>{site.education.toLowerCase()}, b.tech 2024</span>
          <span>{site.hobbies.join(', ')}</span>
        </div>
        <div className="me-intro__lines">
          {lines.slice(1).map((l, i) => <p key={l} data-split="lines" data-intro data-delay={String(0.3 + i * 0.08)}>{l}</p>)}
        </div>
      </section>

      <Uptime />

      <section className="journey grid wrap" data-journey aria-label="Journey">
        <div className="journey__rail">
          <div className="journey__line">
          <svg className="journey__svg" viewBox="0 0 24 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <line className="journey__track" x1="12" y1="0" x2="12" y2="100" />
            <line className="journey__done" x1="12" y1="0" x2="12" y2="0" />
          </svg>
          <span className="journey__cursor" aria-hidden="true" />
          </div>
          <p className="journey__hud mono" aria-live="polite">
            <span>hop <b data-hop-n>01</b> / {String(about.journey.length).padStart(2, '0')}</span>
            <span><b data-hop-label>{about.journey[0].hop}</b></span>
          </p>
        </div>
        <ol className="journey__list">
          {about.journey.map((j, i) => (
            <li key={i} data-hop={j.hop}>
              <span className="journey__hop mono">{String(i + 1).padStart(2, '0')} · {j.hop}</span>
              <p data-split="lines">{j.text}</p>
            </li>
          ))}
        </ol>
        <div className="journey__end">
          <Link href="/works" className="btn" data-route-link="works">See my work<span className="arrow" aria-hidden="true">→</span></Link>
          <a href={`mailto:${site.email}`} className="btn">Email me<span className="arrow" aria-hidden="true">→</span></a>
        </div>
      </section>
    </>
  );
}
