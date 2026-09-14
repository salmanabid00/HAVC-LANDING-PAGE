import { Snowflake, Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5 py-12">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo + phone */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2.5 md:justify-start">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/15 ring-1 ring-accent-400/30">
                <Snowflake className="h-5 w-5 text-accent-400" />
              </span>
              <span className="font-display text-base font-bold text-white">
                Urgent Air Conditioning <span className="text-accent-400">LLC</span>
              </span>
            </div>
            <a
              href={BUSINESS.phoneHref}
              className="mt-4 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-accent-400"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2026 {BUSINESS.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
