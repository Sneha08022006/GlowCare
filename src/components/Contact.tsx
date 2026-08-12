import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@glowcare.ai' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 012-3456' },
  { icon: MapPin, label: 'Studio', value: '221 Rose Avenue, Los Angeles, CA' },
];

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-beige-50 to-blush-50" />
      <div className="absolute -top-16 right-1/4 w-80 h-80 rounded-full bg-blush-200/50 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blush-500">
            Contact
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold text-ink">
            Let's talk skin
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Questions about your routine or an order? Our team replies within
            one business day.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mt-12 grid lg:grid-cols-5 gap-8`}
        >
          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-4 rounded-3xl bg-cream ring-1 ring-blush-100 p-5 shadow-soft"
              >
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-blush-100 text-blush-600">
                  <c.icon className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blush-500">
                    {c.label}
                  </p>
                  <p className="text-ink font-medium">{c.value}</p>
                </div>
              </div>
            ))}
            <div className="rounded-3xl bg-gradient-to-br from-blush-300 to-blush-500 p-6 text-cream shadow-soft">
              <p className="font-serif text-2xl font-semibold">Skincare concierge</p>
              <p className="mt-2 text-sm text-cream/90 leading-relaxed">
                Book a free 15-minute consultation with one of our experts to
                refine your routine.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-5xl bg-cream/80 backdrop-blur-xl ring-1 ring-blush-100 shadow-soft-lg p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-ink/70 mb-2">Name</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full rounded-2xl bg-white ring-1 ring-blush-100 px-4 py-3 text-ink placeholder:text-ink/40 focus:ring-2 focus:ring-blush-400 focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink/70 mb-2">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className="w-full rounded-2xl bg-white ring-1 ring-blush-100 px-4 py-3 text-ink placeholder:text-ink/40 focus:ring-2 focus:ring-blush-400 focus:outline-none transition"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-ink/70 mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your skin goals..."
                className="w-full rounded-2xl bg-white ring-1 ring-blush-100 px-4 py-3 text-ink placeholder:text-ink/40 focus:ring-2 focus:ring-blush-400 focus:outline-none transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-ink text-cream px-7 py-3.5 font-semibold shadow-soft hover:bg-blush-600 transition-colors duration-300"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Message sent
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  Send message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
