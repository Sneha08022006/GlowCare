import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Skin Quiz', href: '#quiz' },
  { label: 'AI Recommendation', href: '#recommendation' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/85 backdrop-blur-xl shadow-soft border-b border-blush-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-10 h-10 rounded-2xl bg-gradient-to-br from-blush-300 to-blush-500 text-white shadow-soft transition-transform duration-500 group-hover:rotate-12">
            <Sparkles className="w-5 h-5" strokeWidth={2.2} />
          </span>
          <span className="font-serif text-2xl font-semibold tracking-tight text-ink">
            GlowCare
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative px-4 py-2 text-sm font-medium text-ink/75 hover:text-blush-600 transition-colors duration-300 after:absolute after:left-4 after:right-4 after:bottom-1 after:h-0.5 after:rounded-full after:bg-blush-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#quiz"
            className="rounded-full bg-ink text-cream px-5 py-2.5 text-sm font-semibold shadow-soft hover:bg-blush-600 transition-colors duration-300"
          >
            Take the Quiz
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-xl bg-blush-100 text-ink"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-[28rem]' : 'max-h-0'
        }`}
      >
        <ul className="px-6 pb-6 pt-2 space-y-1 bg-cream/95 backdrop-blur-xl border-t border-blush-100">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-ink/80 hover:bg-blush-100 hover:text-blush-600 font-medium transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#quiz"
              onClick={() => setOpen(false)}
              className="block mt-2 text-center rounded-full bg-ink text-cream px-5 py-3 font-semibold"
            >
              Take the Quiz
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
