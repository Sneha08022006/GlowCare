import { Sparkles, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const columns = [
  {
    title: 'Shop',
    links: ['Face Wash', 'Moisturizer', 'Sunscreen', 'Serum', 'Cleanser'],
  },
  {
    title: 'Explore',
    links: ['Skin Quiz', 'AI Recommendation', 'About Us', 'Reviews', 'FAQ'],
  },
  {
    title: 'Support',
    links: ['Contact', 'Shipping', 'Returns', 'Track Order', 'Concierge'],
  },
];

const socials = [Instagram, Facebook, Twitter, Youtube];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-cream/80 overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-blush-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid place-items-center w-10 h-10 rounded-2xl bg-gradient-to-br from-blush-300 to-blush-500 text-white">
                <Sparkles className="w-5 h-5" />
              </span>
              <span className="font-serif text-2xl font-semibold text-cream">
                GlowCare<span className="text-blush-300"> AI</span>
              </span>
            </a>
            <p className="mt-5 text-sm text-cream/70 leading-relaxed max-w-sm">
              Intelligent skincare, tailored to you. Clean formulas, AI-matched
              routines, and a glow that feels personal.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid place-items-center w-10 h-10 rounded-full bg-cream/10 hover:bg-blush-500 text-cream transition-colors duration-300"
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-serif text-lg font-semibold text-cream">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-cream/70 hover:text-blush-300 transition-colors duration-300"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-14 pt-8 border-t border-cream/10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="font-serif text-2xl font-semibold text-cream">
              Join the glow list
            </p>
            <p className="mt-1 text-sm text-cream/70">
              Skincare tips and early access — straight to your inbox.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-3 max-w-md md:ml-auto w-full"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 rounded-full bg-cream/10 px-5 py-3 text-cream placeholder:text-cream/40 ring-1 ring-cream/15 focus:ring-2 focus:ring-blush-300 focus:outline-none transition"
            />
            <button
              type="submit"
              className="rounded-full bg-blush-400 text-ink font-semibold px-6 py-3 hover:bg-blush-300 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} GlowCare. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blush-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blush-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-blush-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
