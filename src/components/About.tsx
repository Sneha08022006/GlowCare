import { Leaf, FlaskConical, HeartHandshake, ShieldCheck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const pillars = [
  {
    icon: Leaf,
    title: 'Clean formulas',
    desc: 'Vegan, cruelty-free and free from parabens, sulfates and synthetic fragrance.',
  },
  {
    icon: FlaskConical,
    title: 'Science-led',
    desc: 'Every active is dosed at clinically proven levels for visible results.',
  },
  {
    icon: HeartHandshake,
    title: 'Made with care',
    desc: 'Dermatologist-tested and designed for every skin type and tone.',
  },
  {
    icon: ShieldCheck,
    title: 'Barrier first',
    desc: 'We protect and strengthen your skin barrier — never compromise it.',
  },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-cream" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} relative`}
        >
          <div className="absolute inset-0 -m-4 rounded-[3rem] bg-gradient-to-br from-blush-200 to-beige-200 blur-2xl opacity-70" />
          <div className="relative grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/7020271/pexels-photo-7020271.jpeg?auto=compress&cs=tinysrgb&h=700&w=500"
              alt="Calm spa scene"
              className="rounded-4xl object-cover h-72 w-full shadow-soft"
            />
            <img
              src="https://images.pexels.com/photos/1502219/pexels-photo-1502219.jpeg?auto=compress&cs=tinysrgb&h=700&w=500"
              alt="Skincare products"
              className="rounded-4xl object-cover h-72 w-full shadow-soft mt-10"
            />
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blush-500">
            About GlowCare
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold text-ink leading-tight">
            Skincare that truly knows you
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed">
            GlowCare blends clean beauty with intelligent personalization.
            We believe great skin starts with understanding it — so we built a
            system that listens to your skin and recommends exactly what it
            needs, nothing it does not.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl bg-blush-50 p-5 ring-1 ring-blush-100 hover:shadow-soft transition-shadow duration-300"
              >
                <span className="grid place-items-center w-11 h-11 rounded-2xl bg-white text-blush-600 shadow-soft">
                  <p.icon className="w-5 h-5" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-1.5 text-sm text-ink/70 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
