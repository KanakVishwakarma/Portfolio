import { ArrowUp } from 'lucide-react';
import { socials } from './socialsData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-x py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="flex items-center gap-3">
            <span className="size-8 rounded-md bg-ink text-bg flex items-center justify-center text-sm font-semibold">
              K
            </span>
            <p className="font-medium">Kanak Vishwakarma</p>
          </div>

          <div className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="size-9 rounded-md flex items-center justify-center text-ink-soft hover:text-ink hover:bg-line-soft transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition-colors"
          >
            Back to top
            <span className="size-8 rounded-md border border-line flex items-center justify-center">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>

        <p className="mt-16 text-xs text-muted">
          © {year} Kanak Vishwakarma · Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
}
