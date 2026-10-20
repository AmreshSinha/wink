import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'No route matched', description: 'This address is not behind the router. Head back to the entrypoint.' };

export default function NotFound() {
  return (
    <section className="nf grid" aria-labelledby="nf-title">
      <p className="nf__code mono">404 · no route matched</p>
      <h1 id="nf-title" className="t-xl">Nothing answers at this address.</h1>
      <p className="nf__text t-m" data-split="lines" data-intro data-delay="0.2">The router checked every service and none of them claim this path. Back to the entrypoint, or pick a route from the top.</p>
      <div className="nf__topo" aria-hidden="true" data-reveal="wipe" data-intro data-delay="0.3">
        <span className="nf__dot" /><span className="nf__line" /><span className="nf__gap" /><span className="nf__ghost" />
      </div>
      <div className="nf__text">
        <Link href="/" className="btn">Go to the entrypoint<span className="arrow" aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
