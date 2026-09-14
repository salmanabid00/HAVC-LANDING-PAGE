import { Clock, UserCheck, ThumbsUp } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const benefits = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Responsive Service',
    description:
      'We take your comfort seriously and aim to respond promptly to your air conditioning needs.',
  },
  {
    icon: <UserCheck className="h-6 w-6" />,
    title: 'Professional Approach',
    description:
      'Every job is handled with care and attention to detail, from diagnosis to completion.',
  },
  {
    icon: <ThumbsUp className="h-6 w-6" />,
    title: 'Reliable AC Solutions',
    description:
      'We focus on practical, dependable solutions to help keep your cooling system running right.',
  },
];

export default function TrustSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="why-choose-us" ref={ref} className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-sm font-bold uppercase tracking-[0.12em] text-accent-600">
            Why Choose Us
          </p>
          <h2 className="reveal mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Comfort You Can Count On
          </h2>
          <p className="reveal mt-4 text-lg leading-relaxed text-gray-600">
            We're committed to providing straightforward, dependable air conditioning service.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className="reveal flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-accent-400 shadow-lg shadow-navy-900/10 transition-transform duration-300 hover:scale-105">
                {benefit.icon}
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-navy-900">
                {benefit.title}
              </h3>
              <p className="mt-3 max-w-xs text-base leading-relaxed text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
