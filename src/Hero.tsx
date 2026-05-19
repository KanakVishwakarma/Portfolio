import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 md:pt-48 lg:pt-56 pb-24 md:pb-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left — copy */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2.5 mb-10 fade-in">
              <span className="size-2 rounded-full bg-emerald-500 pulse-dot" />
              <span className="eyebrow">Available for new projects</span>
            </div>

            <h1 className="rise text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.05] tracking-[-0.025em] font-medium">
              I design and build{' '}
              <span className="serif-italic text-accent">modern</span>{' '}
              web products that feel as good as they work.
            </h1>

            <p className="rise delay-150 mt-10 text-lg md:text-xl text-ink-soft leading-relaxed max-w-xl">
              I'm Kanak Vishwakarma — a full-stack developer based in India,
              specialising in the MERN stack. I help teams ship thoughtful,
              performant interfaces.
            </p>

            <div className="rise delay-300 mt-12 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View my work
                <ArrowDown size={16} />
              </a>
              <a href="#contact" className="btn-outline">
                Get in touch
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Right — portrait */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex lg:justify-end">
            <div className="relative fade-in">
              <div
                aria-hidden
                className="absolute -inset-5 md:-inset-7 rounded-3xl bg-accent-bg -z-10"
              />
              <div className="relative w-[260px] sm:w-[320px] lg:w-[360px] aspect-[4/5] rounded-2xl overflow-hidden border border-line shadow-xl">
                <img
                  src="/profile.png"
                  alt="Kanak Vishwakarma"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
