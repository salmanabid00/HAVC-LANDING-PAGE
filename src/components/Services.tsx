import ServiceCard, { services } from './ServiceCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Services() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="services" ref={ref} className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-sm font-bold uppercase tracking-[0.12em] text-accent-600">
            What We Do
          </p>
          <h2 className="reveal mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Air Conditioning Services
          </h2>
          <p className="reveal mt-4 text-lg leading-relaxed text-gray-600">
            Reliable solutions for keeping your home or business comfortable year-round.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
