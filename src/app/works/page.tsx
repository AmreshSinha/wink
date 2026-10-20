import type { Metadata } from 'next';
import { WorksIndex } from '@/components/WorksIndex';
import { projects } from '@/data/site';

export const metadata: Metadata = {
  title: 'Works',
  description: 'Seven things Amresh Sinha built: hackathon projects for Smart India Hackathon, Flipkart Grid and Inter IIT, plus small APIs that ran behind his own Traefik router.',
};

export default function Works() {
  return (
    <section className="works-head grid wrap sec--tight" aria-labelledby="works-title">
      <h1 id="works-title" className="t-xl" data-split="lines" data-intro>Works</h1>
      <p className="works-head__count mono" data-reveal="fade" data-intro data-delay="0.3">
        {String(projects.length).padStart(2, '0')} services registered · {projects[projects.length - 1].year} to {projects[0].year}
      </p>
      <WorksIndex projects={projects} />
    </section>
  );
}
