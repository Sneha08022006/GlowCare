import { Star, Plus } from 'lucide-react';
import { products, type Product } from '@/data';
import { useReveal } from '@/hooks/useReveal';

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} group relative rounded-4xl bg-cream ring-1 ring-blush-100 overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-1.5`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 rounded-full bg-cream/90 backdrop-blur px-3 py-1 text-xs font-semibold text-blush-600 ring-1 ring-blush-100">
          {product.category}
        </span>
        <span className="absolute top-4 right-4 rounded-full bg-ink/80 backdrop-blur px-3 py-1 text-xs font-semibold text-cream">
          {product.price}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-1 text-blush-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < Math.round(product.rating) ? 'fill-current' : 'opacity-30'}`}
            />
          ))}
          <span className="text-xs text-ink/60 ml-1">{product.rating.toFixed(1)}</span>
        </div>

        <h3 className="mt-3 font-serif text-2xl font-semibold text-ink leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-blush-600 font-medium mt-0.5">{product.tagline}</p>
        <p className="mt-3 text-sm text-ink/70 leading-relaxed">{product.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {product.benefits.map((b) => (
            <span
              key={b}
              className="rounded-full bg-blush-50 px-3 py-1 text-xs font-medium text-blush-600 ring-1 ring-blush-100"
            >
              {b}
            </span>
          ))}
        </div>

        <button className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-ink text-cream py-3 text-sm font-semibold hover:bg-blush-600 transition-colors duration-300">
          <Plus className="w-4 h-4" />
          Add to Routine
        </button>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-beige-50" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blush-500">
            The Collection
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold text-ink">
            Products your skin will love
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Each formula is crafted with clean, proven ingredients and matched
            to your skin by our AI — so every step earns its place.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}

          {/* CTA tile */}
          <div className="rounded-4xl bg-gradient-to-br from-blush-300 to-blush-500 p-8 flex flex-col justify-center items-center text-center text-cream shadow-soft">
            <h3 className="font-serif text-3xl font-semibold leading-tight">
              Not sure where to start?
            </h3>
            <p className="mt-3 text-cream/90 text-sm leading-relaxed max-w-xs">
              Let our AI build a routine tailored to your skin type in under a minute.
            </p>
            <a
              href="#quiz"
              className="mt-6 rounded-full bg-cream text-blush-600 px-6 py-3 text-sm font-semibold shadow-soft hover:bg-white transition-colors"
            >
              Take the Skin Quiz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
