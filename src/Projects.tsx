import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from './projectsData';

export default function Projects() {
  return (
    <section id="projects" className="section border-t border-line">
      <div className="container-x">
        <div className="heading-rule mb-6">
          <span className="eyebrow">Selected work</span>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6 mb-20 md:mb-28">
          <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.15] max-w-2xl">
            Projects I've shipped <span className="serif-italic text-accent">recently</span>.
          </h2>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link text-sm flex items-center gap-1.5"
          >
            All projects on GitHub
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          {projects.map((p) => (
            <article key={p.id} className="card group overflow-hidden flex flex-col">
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[16/10] overflow-hidden"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </a>

              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                    {p.title}
                  </h3>
                  <span className="font-mono text-xs text-muted shrink-0">{p.year}</span>
                </div>

                <p className="mt-4 text-ink-soft text-[0.95rem] leading-relaxed">
                  {p.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-6 text-sm">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 link"
                  >
                    Live site
                    <ArrowUpRight size={13} />
                  </a>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 link text-muted hover:text-ink"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
