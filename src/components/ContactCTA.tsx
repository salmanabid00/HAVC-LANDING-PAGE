import { Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ContactCTA() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-40" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-500/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-accent-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="reveal font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Need AC Service?
        </h2>
        <p className="reveal mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">
          Contact {BUSINESS.name} for air conditioning repair, installation, or maintenance.
        </p>

        <div className="reveal mt-8">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-accent-500 px-8 py-5 text-lg font-bold text-navy-950 shadow-2xl shadow-accent-500/30 transition-all hover:bg-accent-400 hover:shadow-accent-400/40 active:scale-95"
          >
            <Phone className="h-6 w-6" />
            Call {BUSINESS.phone}
          </a>
        </div>

        <div className="reveal mt-12 border-t border-white/10 pt-8">
          <p className="font-display text-lg font-bold text-white">{BUSINESS.name}</p>
          <p className="mt-2 text-base text-gray-400">
            <a
              href={BUSINESS.phoneHref}
              className="font-medium text-accent-400 transition-colors hover:text-accent-300"
            >
              {BUSINESS.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
