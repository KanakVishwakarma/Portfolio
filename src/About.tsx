export default function About() {
  return (
    <section id="about" className="section border-t border-line">
      <div className="container-x">
        <div className="heading-rule mb-6">
          <span className="eyebrow">About</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.15] max-w-3xl">
          A developer who cares about the <span className="serif-italic text-accent">details</span> —
          from the first commit to the last pixel.
        </h2>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mt-20 md:mt-28">
          {/* Left — bio */}
          <div className="lg:col-span-7 space-y-7 text-ink-soft text-[1.05rem] leading-[1.75]">
            <p>
              I'm a full-stack developer focused on the MERN stack, with a soft spot
              for thoughtful frontend craft. Over the last four years I've built
              everything from internal dashboards to consumer products — usually as
              part of small, fast-moving teams.
            </p>
            <p>
              My favourite work sits at the seam between design and engineering:
              translating Figma intent into a UI that feels precise and responsive,
              wiring it to APIs that don't fall over, and shipping it quickly
              without cutting corners.
            </p>
            <p>
              Outside of building products, I read about typography, dabble in side
              projects, and occasionally write about what I learn.
            </p>
          </div>

          {/* Right — quiet info card */}
          <div className="lg:col-span-5">
            <div className="card p-8 md:p-10">
              <p className="eyebrow mb-8">Currently</p>

              <ul className="space-y-7">
                <li>
                  <p className="font-medium">Building a notetaking app</p>
                  <p className="text-sm text-muted mt-1.5 leading-relaxed">
                    A linked-thinking workspace with offline-first sync.
                  </p>
                </li>
                <li>
                  <p className="font-medium">Freelancing with early-stage startups</p>
                  <p className="text-sm text-muted mt-1.5 leading-relaxed">
                    Helping ship MVPs and rebuild crusty marketing sites.
                  </p>
                </li>
                <li>
                  <p className="font-medium">Reading & learning, slowly</p>
                  <p className="text-sm text-muted mt-1.5 leading-relaxed">
                    Postgres internals, Rust basics, and design history.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
