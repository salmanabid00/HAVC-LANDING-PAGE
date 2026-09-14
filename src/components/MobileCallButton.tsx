import { Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export default function MobileCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      {/* Gradient fade so content above isn't abruptly cut */}
      <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />
      <div className="bg-navy-950 px-4 pb-4 pt-3">
        <a
          href={BUSINESS.phoneHref}
          className="flex items-center justify-center gap-2.5 rounded-xl bg-accent-500 px-6 py-4 text-base font-bold text-navy-950 shadow-2xl shadow-accent-500/40 transition-all hover:bg-accent-400 active:scale-95"
          aria-label={`Call ${BUSINESS.phone}`}
        >
          <Phone className="h-5 w-5" />
          Call Now — {BUSINESS.phone}
        </a>
      </div>
    </div>
  );
}
