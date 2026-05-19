import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { EMAIL, socials } from "./socialsData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="section border-t border-line">
      <div className="container-x">
        <div className="heading-rule mb-6">
          <span className="eyebrow">Contact</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.15] max-w-3xl">
          Have a project in mind?{" "}
          <span className="serif-italic text-accent">Let's talk</span>.
        </h2>

        <p className="mt-6 text-lg text-ink-soft max-w-xl leading-relaxed">
          I'm currently open to freelance projects, contract work, and full-time
          roles. The fastest way to reach me is email — I usually reply within a
          day.
        </p>

        {/* Email — primary contact */}
        <div className="mt-20 md:mt-24 flex flex-wrap items-baseline gap-x-6 gap-y-3">
          <a
            href={`mailto:${EMAIL}`}
            className="text-2xl md:text-4xl font-medium tracking-tight hover:text-accent transition-colors"
          >
            {EMAIL}
          </a>
          <button
            onClick={copyEmail}
            className="font-mono text-xs text-muted hover:text-ink inline-flex items-center gap-1.5 transition-colors"
            aria-label="Copy email"
          >
            {copied ? (
              <>
                <Check size={13} className="text-emerald-500" /> Copied
              </>
            ) : (
              <>
                <Copy size={13} /> Copy
              </>
            )}
          </button>
        </div>

        {/* Socials */}
        <div className="mt-24 md:mt-32">
          <p className="eyebrow mb-8">Or find me on</p>

          <ul className="grid sm:grid-cols-3 gap-4 md:gap-6">
            {socials.map(({ label, handle, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group p-6 md:p-7 flex items-center gap-4"
                >
                  <span className="size-10 rounded-lg bg-line-soft text-ink flex items-center justify-center shrink-0">
                    <Icon size={18} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">{label}</p>
                    <p className="text-xs text-muted truncate mt-0.5">
                      {handle}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-muted shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Direct mailto fallback */}
        <div className="mt-20 md:mt-24">
          <a href={`mailto:${EMAIL}`} className="btn-primary inline-flex">
            <Mail size={16} />
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
}
