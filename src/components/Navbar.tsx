import { useEffect, useState } from 'react';
import { Phone, Menu, X, Snowflake } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/95 backdrop-blur-md shadow-lg shadow-black/30'
          : 'bg-navy-950'
      }`}
    >
      <nav className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group shrink-0">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/15 ring-1 ring-accent-400/30 transition-transform group-hover:scale-105">
              <Snowflake className="h-5 w-5 text-accent-400" />
            </span>
            <span className="font-display text-base font-bold tracking-tight text-white lg:text-lg leading-tight">
              Urgent Air Conditioning
              <span className="text-accent-400"> LLC</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent-400 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-bold text-navy-950 shadow-lg shadow-accent-500/20 transition-all hover:bg-accent-400 hover:shadow-accent-400/30 active:scale-95"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-200 transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-1 pb-4 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={BUSINESS.phoneHref}
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-5 py-3.5 text-base font-bold text-navy-950 transition-all hover:bg-accent-400 active:scale-95"
              >
                <Phone className="h-5 w-5" />
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
