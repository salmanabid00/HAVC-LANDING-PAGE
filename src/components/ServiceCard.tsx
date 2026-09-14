import { Wrench, Settings2, ShieldCheck, ArrowRight } from 'lucide-react';

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: <Wrench className="h-6 w-6" />,
    title: 'AC Repair',
    description:
      'Get your air conditioning system back to comfortable operation with dependable repair service.',
  },
  {
    icon: <Settings2 className="h-6 w-6" />,
    title: 'AC Installation',
    description:
      'Professional air conditioning installation focused on dependable performance and lasting comfort.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'AC Maintenance',
    description:
      'Routine maintenance to help keep your system running smoothly and efficiently.',
  },
];

export default function ServiceCard({ icon, title, description }: ServiceItem) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-xl hover:shadow-navy-900/8">
      {/* Top accent bar */}
      <div className="absolute top-0 left-7 right-7 h-0.5 origin-left scale-x-0 rounded-full bg-accent-500 transition-transform duration-300 group-hover:scale-x-100" />

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-accent-400 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-navy-950">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-navy-900">{title}</h3>
      <p className="mt-2.5 text-base leading-relaxed text-gray-600">{description}</p>

      <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-accent-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span>Learn more</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </div>
    </div>
  );
}

export { services };
