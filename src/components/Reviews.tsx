import { Star, Quote } from 'lucide-react';
import { reviews } from '@/data';
import { useReveal } from '@/hooks/useReveal';

export default function Reviews() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blush-50 via-cream to-beige-50" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blush-500">
            Loved by thousands
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold text-ink">
            Glowing reviews
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Real stories from real skin. Here is what our community says about
            their GlowCare routines.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6`}
        >
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className="group relative rounded-4xl bg-cream ring-1 ring-blush-100 p-6 shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-500"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote className="w-8 h-8 text-blush-200 group-hover:text-blush-300 transition-colors" />
              <div className="mt-3 flex items-center gap-1 text-blush-500">
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-ink/80 leading-relaxed">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-blush-100"
                />
                <div>
                  <p className="font-semibold text-ink text-sm">{r.name}</p>
                  <p className="text-xs text-ink/60">{r.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
