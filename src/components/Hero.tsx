import { Phone, ChevronDown, Snowflake } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Hero() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="home" ref={ref} className="relative overflow-hidden bg-navy-950 pt-16 lg:pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="HVAC technician repairing an air conditioning unit"
          className="h-full w-full object-cover opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
        <div className="absolute inset-0 pattern-dots opacity-50" />
      </div>

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 items-center gap-8 lg:gap-12 py-16 lg:py-24">
          {/* Text content */}
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="reveal inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-4 py-1.5 ring-1 ring-accent-400/25">
              <Snowflake className="h-3.5 w-3.5 text-accent-400" />
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-accent-300">
                Professional Air Conditioning Service
              </span>
            </div>

            <h1 className="reveal mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Fast, Reliable Air Conditioning Service When You Need It.
            </h1>

            <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
              Professional AC repair, installation, and maintenance services designed to keep your home or business comfortable.
            </p>

            <div className="reveal mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-accent-500 px-7 py-4 text-base font-bold text-navy-950 shadow-xl shadow-accent-500/25 transition-all hover:bg-accent-400 hover:shadow-accent-400/40 active:scale-95"
              >
                <Phone className="h-5 w-5" />
                Call Now — {BUSINESS.phone}
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-7 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/25 active:scale-95"
              >
                Explore Our Services
                <ChevronDown className="h-4 w-4" />
              </a>
            </div>

            <p className="reveal mt-7 flex items-center gap-2.5 text-sm font-medium text-gray-400">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              {BUSINESS.serviceTagline}
            </p>
          </div>

          {/* Visual card */}
          <div className="reveal lg:col-span-5 xl:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Professional HVAC technician inspecting an outdoor air conditioning unit"
                  className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-3 lg:-left-5 rounded-xl bg-white p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-500/15">
                    <Phone className="h-5 w-5 text-accent-600" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Call us today</p>
                    <p className="font-display text-sm font-bold text-navy-900">{BUSINESS.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
