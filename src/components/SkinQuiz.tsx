import { useState } from 'react';
import { Droplet, Sun, Scale, Flower, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import type { SkinType } from '@/data';
import { useReveal } from '@/hooks/useReveal';

type Option = {
  value: SkinType;
  label: string;
  desc: string;
  icon: typeof Droplet;
};

const options: Option[] = [
  { value: 'dry', label: 'Dry', desc: 'Tight, flaky, craves moisture', icon: Droplet },
  { value: 'oily', label: 'Oily', desc: 'Shiny, prone to breakouts', icon: Sun },
  { value: 'combination', label: 'Combination', desc: 'Oily T-zone, drier cheeks', icon: Scale },
  { value: 'sensitive', label: 'Sensitive', desc: 'Reactive, easily red', icon: Flower },
];

type QuestionOption = { value: SkinType; label: string; desc: string };
type Question = { q: string; options: QuestionOption[] };

const questions: Question[] = [
  {
    q: 'How does your skin feel by midday?',
    options: [
      { value: 'dry', label: 'Tight and dry', desc: 'It feels parched and uncomfortable.' },
      { value: 'oily', label: 'Shiny all over', desc: 'I blot more than once a day.' },
      { value: 'combination', label: 'Oily T-zone only', desc: 'Forehead and nose shine, cheeks feel fine.' },
      { value: 'sensitive', label: 'Irritated or warm', desc: 'It feels reactive or looks flushed.' },
    ],
  },
  {
    q: 'How does your skin react to a new product?',
    options: [
      { value: 'dry', label: 'Feels even tighter', desc: 'I need extra moisturizer after.' },
      { value: 'oily', label: 'No issues, sometimes greasy', desc: 'Rich creams break me out.' },
      { value: 'combination', label: 'Mixed reaction', desc: 'Some areas love it, some rebel.' },
      { value: 'sensitive', label: 'Stings or reddens', desc: 'I have to be very careful.' },
    ],
  },
  {
    q: 'What is your main skin goal?',
    options: [
      { value: 'dry', label: 'Deep hydration', desc: 'Soft, plump, dewy skin.' },
      { value: 'oily', label: 'Balance and clarity', desc: 'Less shine, fewer breakouts.' },
      { value: 'combination', label: 'Even, balanced tone', desc: 'Harmony across all zones.' },
      { value: 'sensitive', label: 'Calm and soothed', desc: 'Less redness, stronger barrier.' },
    ],
  },
];

export default function SkinQuiz() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<SkinType[]>([]);
  const [result, setResult] = useState<SkinType | null>(null);

  const pick = (value: SkinType) => {
    const next = [...answers, value];
    setAnswers(next);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      const tally = next.reduce((acc, v) => {
        acc[v] = (acc[v] || 0) + 1;
        return acc;
      }, {} as Record<SkinType, number>);
      const winner = (Object.entries(tally) as [SkinType, number][]).sort(
        (a, b) => b[1] - a[1]
      )[0][0];
      setResult(winner);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  const progress = result ? 100 : (step / questions.length) * 100;
  const resultOption = options.find((o) => o.value === result);

  return (
    <section id="quiz" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-blush-50 to-cream" />
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 rounded-full bg-blush-200/50 blur-3xl -z-10" />

      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blush-500">
            Skin Quiz
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold text-ink">
            Find your skin type
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Answer three quick questions and our AI will match you to the
            perfect routine. No guesswork, just glow.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mt-12 rounded-5xl bg-cream/80 backdrop-blur-xl ring-1 ring-blush-100 shadow-soft-lg p-6 sm:p-10`}
        >
          {/* Progress */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-sm font-medium text-ink/60">
              {result ? 'Result' : `Question ${step + 1} of ${questions.length}`}
            </span>
            <div className="w-40 h-2 rounded-full bg-blush-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blush-400 to-blush-600 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {!result && (
            <div key={step} className="animate-[fadeIn_0.5s_ease]">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ink">
                {questions[step].q}
              </h3>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {questions[step].options.map((opt) => {
                  const Icon = options.find((o) => o.value === opt.value)!.icon;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => pick(opt.value)}
                      className="group flex items-start gap-4 rounded-3xl bg-white p-5 ring-1 ring-blush-100 hover:ring-blush-300 hover:bg-blush-50 transition-all duration-300 text-left hover:-translate-y-0.5"
                    >
                      <span className="grid place-items-center w-12 h-12 rounded-2xl bg-blush-100 text-blush-600 group-hover:bg-blush-400 group-hover:text-white transition-colors duration-300 shrink-0">
                        <Icon className="w-5 h-5" />
                      </span>
                      <span>
                        <span className="block font-semibold text-ink">{opt.label}</span>
                        <span className="block text-sm text-ink/60 mt-0.5">{opt.desc}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {result && resultOption && (
            <div className="text-center animate-[fadeIn_0.6s_ease]">
              <div className="mx-auto grid place-items-center w-20 h-20 rounded-full bg-gradient-to-br from-blush-300 to-blush-500 text-white shadow-soft animate-soft-pulse">
                <resultOption.icon className="w-9 h-9" />
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-blush-500">
                Your skin type is
              </p>
              <h3 className="mt-1 font-serif text-4xl font-semibold text-ink">
                {resultOption.label}
              </h3>
              <p className="mt-2 text-ink/70 max-w-md mx-auto">{resultOption.desc}</p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#recommendation"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink text-cream px-7 py-3.5 font-semibold shadow-soft hover:bg-blush-600 transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  See my AI routine
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink ring-1 ring-blush-200 hover:bg-blush-50 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Retake quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
