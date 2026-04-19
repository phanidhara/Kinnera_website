import React from 'react';
import { MessageCircle } from 'lucide-react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

const WHATSAPP = 'https://wa.me/917981337366?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Dr.%20Kinnera';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-gold/30 selection:text-brand-gold-dark">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
