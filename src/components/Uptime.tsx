import { experience } from '@/data/site';

// Where he has been up: a status page of real facts, no invented numbers.
export function Uptime() {
  return (
    <section className="sec sec--tight grid wrap uptime" aria-labelledby="uptime-title">
      <div className="sec__head">
        <h2 id="uptime-title" className="t-l">Uptime</h2>
        <span className="mono muted">hosts, oldest at the bottom</span>
      </div>
      <ol className="uptime__list">
        {experience.map((e) => (
          <li key={e.host} className="uptime__row">
            <span className="led" data-status={e.status === 'up' ? 'building' : 'shipped'} aria-hidden="true" />
            <span className="uptime__host">{e.host}</span>
            <span className="uptime__role">{e.role}</span>
            <span className="uptime__when mono">{e.when}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
