import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Results from './components/sections/Results';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-gold/30 selection:text-brand-navy">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
