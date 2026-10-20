'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Project, Status } from '@/data/site';

const FILTERS: { key: 'all' | Status; label: string }[] = [
  { key: 'all', label: 'all' },
  { key: 'shipped', label: 'shipped' },
  { key: 'building', label: 'building' },
];

export function WorksIndex({ projects }: { projects: Project[] }) {
  const [q, setQ] = useState('');
  const [status, setStatus] = useState<'all' | Status>('all');
  const needle = q.trim().toLowerCase();
  const list = projects.filter((p) =>
    (status === 'all' || p.status === status) &&
    (!needle || [p.title, p.event, p.summary, ...p.tools].join(' ').toLowerCase().includes(needle)),
  );
  return (
    <>
      <form className="filters" role="search" onSubmit={(e) => e.preventDefault()}>
        <label className="filters__search">
          <span className="mono muted" aria-hidden="true">search</span>
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="title, stack, event" aria-label="Search works by title, stack or event" />
        </label>
        <div className="filters__group" role="group" aria-label="Filter by status">
          {FILTERS.map((f) => (
            <button key={f.key} type="button" className="chip draw" aria-pressed={status === f.key} onClick={() => setStatus(f.key)}>
              {f.key !== 'all' && <span className="led" data-status={f.key} aria-hidden="true" />}{f.label}
            </button>
          ))}
        </div>
        <output className="mono filters__count" aria-live="polite">{String(list.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')} routes</output>
      </form>
      <ul className="index" data-index>
        {list.map((p) => (
          <li key={p.slug}>
            <Link href={`/works/${p.slug}`} className="index__row" data-preview={p.cover.src}>
              <span className="led" data-status={p.status} aria-hidden="true" />
              <span className="index__title">{p.title}</span>
              <span className="index__event mono">{p.event}</span>
              <span className="index__year mono">{p.year}</span>
              <span className="index__status mono">{p.status}</span>
              <span className="index__thumb" aria-hidden="true">
                <Image src={p.cover.src} alt="" width={p.cover.width} height={p.cover.height} sizes="(max-width: 767px) 90vw, 1px" loading="lazy" />
              </span>
            </Link>
          </li>
        ))}
        {list.length === 0 && <li className="index__empty t-m">No route matched. Try another word or clear the filter.</li>}
      </ul>
      {/* eslint-disable-next-line @next/next/no-img-element -- src is swapped at pointer speed by the preview driver */}
      <div className="preview" aria-hidden="true"><img alt="" width={1600} height={1000} /></div>
    </>
  );
}
