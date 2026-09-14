import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ServiceBand from '@/components/ServiceBand';
import TrustSection from '@/components/TrustSection';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import MobileCallButton from '@/components/MobileCallButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ServiceBand />
        <TrustSection />
        <ContactCTA />
      </main>
      <Footer />
      <MobileCallButton />
      {/* Bottom padding so floating button doesn't cover footer content on mobile */}
      <div className="h-24 md:hidden" />
    </div>
  );
}

export default App;
