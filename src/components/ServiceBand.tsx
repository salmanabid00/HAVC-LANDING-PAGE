import { Phone, Snowflake } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ServiceBand() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy-900 py-20 lg:py-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/5463587/pexels-photo-5463587.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="HVAC technician servicing air conditioning equipment"
          className="h-full w-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-900/70" />
        <div className="absolute inset-0 pattern-dots opacity-40" />
      </div>

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-4 py-1.5 ring-1 ring-accent-400/25">
            <Snowflake className="h-3.5 w-3.5 text-accent-400" />
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-accent-300">
              Always Here For Your Comfort
            </span>
          </span>

          <h2 className="reveal mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Keep Your Comfort Running
          </h2>

          <p className="reveal mt-5 max-w-2xl mx-auto text-lg leading-relaxed text-gray-300">
            From unexpected AC problems to planned installation and maintenance, {BUSINESS.name} is here when you need dependable air conditioning service.
          </p>

          <div className="reveal mt-8">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-accent-500 px-8 py-4 text-lg font-bold text-navy-950 shadow-2xl shadow-accent-500/30 transition-all hover:bg-accent-400 hover:shadow-accent-400/40 active:scale-95"
            >
              <Phone className="h-5 w-5" />
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
