import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

const links = [
  { href: '#about',    label: 'About' },
  { href: '#projects', label: 'Work' },
  { href: '#skills',   label: 'Skills' },
  { href: '#contact',  label: 'Contact' },
];

export default function Navbar({ theme, onToggle }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? 'bg-bg/85 border-b border-line shadow-[0_1px_0_0_var(--line)]'
          : 'bg-bg/70 border-b border-transparent'
      }`}
    >
      <div className="container-x">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Wordmark */}
          <a href="#top" className="flex items-center gap-2 font-medium tracking-tight">
            <span className="size-7 rounded-md bg-ink text-bg flex items-center justify-center text-sm font-semibold">
              K
            </span>
            <span className="hidden sm:inline">Kanak Vishwakarma</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-sm text-ink-soft hover:text-ink rounded-md transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggle}
              aria-label="Toggle theme"
              className="size-9 rounded-md flex items-center justify-center text-ink-soft hover:text-ink hover:bg-line-soft transition-colors"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href="#contact"
              className="hidden md:inline-flex btn-primary text-sm py-2 px-4"
            >
              Hire me
            </a>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="md:hidden size-9 rounded-md flex items-center justify-center text-ink hover:bg-line-soft transition-colors"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden pb-4 pt-1">
            <nav className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 border-t border-line text-base"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary justify-center mt-3"
              >
                Hire me
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
