import { Sparkles, Star, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      {/* Background washes */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blush-50 via-cream to-beige-50" />
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-blush-200/60 blur-3xl animate-float-slow -z-10" />
      <div className="absolute top-40 -right-20 w-[24rem] h-[24rem] rounded-full bg-beige-200/70 blur-3xl animate-float-slower -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Copy */}
        <div className="reveal is-visible">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-semibold text-blush-600 ring-1 ring-blush-200 shadow-soft">
            <Sparkles className="w-3.5 h-3.5" />
            AI-powered skincare, made for you
          </span>

          <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-ink">
            Your skin,
            <br />
            <span className="bg-gradient-to-r from-blush-500 to-blush-700 bg-clip-text text-transparent">
              intelligently
            </span>{' '}
            cared for.
          </h1>

          <p className="mt-6 text-lg text-ink/70 max-w-md leading-relaxed">
            Discover a personalized routine in minutes. Take our AI Skin Quiz
            and get products matched to your unique skin type — gentle,
            effective, beautifully made.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#quiz"
              className="group inline-flex items-center gap-2 rounded-full bg-ink text-cream px-7 py-3.5 font-semibold shadow-soft-lg hover:bg-blush-600 transition-colors duration-300"
            >
              Start the Skin Quiz
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-7 py-3.5 font-semibold text-ink ring-1 ring-blush-200 hover:bg-white transition-colors duration-300"
            >
              Explore Products
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[
                'https://images.pexels.com/photos/29755259/pexels-photo-29755259.jpeg?auto=compress&cs=tinysrgb&h=80&w=80',
                'https://images.pexels.com/photos/9774655/pexels-photo-9774655.jpeg?auto=compress&cs=tinysrgb&h=80&w=80',
                'https://images.pexels.com/photos/8140902/pexels-photo-8140902.jpeg?auto=compress&cs=tinysrgb&h=80&w=80',
                'https://images.pexels.com/photos/13140394/pexels-photo-13140394.jpeg?auto=compress&cs=tinysrgb&h=80&w=80',
              ].map((src) => (
                <img
                  key={src}
                  src={src}
                  alt="Happy customer"
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-cream"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-blush-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-ink/70 mt-1">
                Loved by <span className="font-semibold text-ink">12,000+</span> glowing customers
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute inset-0 -m-6 rounded-[3rem] bg-gradient-to-br from-blush-200 to-beige-200 blur-2xl opacity-70" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-soft-lg ring-1 ring-white/60">
              <img
                src="https://images.pexels.com/photos/6635917/pexels-photo-6635917.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
                alt="Woman enjoying her skincare routine"
                className="w-full h-[34rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            </div>

            {/* Floating card 1 */}
            <div className="absolute -left-4 lg:-left-10 top-10 rounded-2xl bg-cream/90 backdrop-blur px-5 py-4 shadow-soft-lg ring-1 ring-blush-100 animate-float-slow">
              <p className="text-xs font-semibold text-blush-600 uppercase tracking-wide">Skin match</p>
              <p className="font-serif text-2xl font-semibold text-ink leading-none mt-1">98%</p>
              <p className="text-xs text-ink/60 mt-0.5">routine accuracy</p>
            </div>

            {/* Floating card 2 */}
            <div className="absolute -right-2 lg:-right-8 bottom-8 rounded-2xl bg-cream/90 backdrop-blur px-5 py-4 shadow-soft-lg ring-1 ring-blush-100 animate-float-slower">
              <div className="flex items-center gap-2">
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-blush-100 text-blush-600">
                  <Sparkles className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">AI Routine</p>
                  <p className="text-xs text-ink/60">Ready in 60s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
