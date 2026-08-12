import { useState } from 'react';
import { Sparkles, Check, Droplet, Sun, Scale, Flower } from 'lucide-react';
import { recommendations, type SkinType } from '@/data';
import { useReveal } from '@/hooks/useReveal';

const tabs: { value: SkinType; label: string; icon: typeof Droplet }[] = [
  { value: 'dry', label: 'Dry', icon: Droplet },
  { value: 'oily', label: 'Oily', icon: Sun },
  { value: 'combination', label: 'Combination', icon: Scale },
  { value: 'sensitive', label: 'Sensitive', icon: Flower },
];

export default function Recommendation() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<SkinType>('dry');
  const rec = recommendations[active];

  return (
    <section id="recommendation" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-beige-50 to-blush-50" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-semibold text-blush-600 ring-1 ring-blush-200 shadow-soft">
            <Sparkles className="w-3.5 h-3.5" />
            AI Recommendation
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold text-ink">
            Your personalized routine
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Select your skin type to reveal a complete, AI-matched skincare
            ritual — from morning cleanse to daily protection.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = active === t.value;
            return (
              <button
                key={t.value}
                onClick={() => setActive(t.value)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-ink text-cream shadow-soft'
                    : 'bg-white text-ink/70 ring-1 ring-blush-100 hover:bg-blush-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mt-12 grid lg:grid-cols-5 gap-8 items-start`}
        >
          {/* Intro + tips */}
          <div className="lg:col-span-2 rounded-5xl bg-gradient-to-br from-blush-300 to-blush-500 p-8 sm:p-10 text-cream shadow-soft-lg">
            <div className="text-5xl">{rec.emoji}</div>
            <h3 className="mt-4 font-serif text-3xl font-semibold">{rec.label}</h3>
            <p className="mt-3 text-cream/90 leading-relaxed">{rec.intro}</p>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/80">
                Pro tips
              </p>
              <ul className="mt-4 space-y-3">
                {rec.tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <span className="grid place-items-center w-5 h-5 rounded-full bg-cream/30 shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="text-sm text-cream/95 leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Routine steps */}
          <div className="lg:col-span-3 space-y-4">
            {rec.routine.map((r, i) => (
              <div
                key={r.step + r.product}
                className="group flex items-start gap-5 rounded-4xl bg-cream ring-1 ring-blush-100 p-5 sm:p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-0.5"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex flex-col items-center">
                  <span className="grid place-items-center w-12 h-12 rounded-2xl bg-blush-100 text-blush-600 font-serif text-xl font-semibold">
                    {i + 1}
                  </span>
                  {i < rec.routine.length - 1 && (
                    <span className="w-px flex-1 bg-blush-100 my-2 min-h-[1.5rem]" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blush-500">
                    {r.step}
                  </p>
                  <h4 className="mt-1 font-serif text-xl font-semibold text-ink">
                    {r.product}
                  </h4>
                  <p className="mt-1 text-sm text-ink/70 leading-relaxed">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
