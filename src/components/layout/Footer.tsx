import React from 'react';
import { Award, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-gold-dark text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-brand-gold p-2 rounded-lg">
                <Award className="text-brand-gold-dark w-6 h-6" />
              </div>
              <h2 className="text-2xl font-serif font-bold tracking-tight text-white leading-none">
                Dr. <span className="text-brand-gold-light">B Kinnera</span>
              </h2>
            </div>
            <p className="text-brand-gold-light/70 leading-relaxed mb-8">
              Premium dermatological care in Visakhapatnam. Gold medalist expertise combining medical science with aesthetic artistry.
            </p>
            <div className="flex items-center gap-2 text-brand-gold-light font-bold text-sm tracking-widest uppercase">
              <Award className="w-4 h-4" />
              Gold Medalist Surgeon
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-brand-gold-light/60 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-brand-gold-light/60 hover:text-white transition-colors">About Me</a></li>
              <li><a href="#services" className="text-brand-gold-light/60 hover:text-white transition-colors">Services</a></li>
              <li><a href="#results" className="text-brand-gold-light/60 hover:text-white transition-colors">Patient Results</a></li>
              <li><a href="#contact" className="text-brand-gold-light/60 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-8">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-brand-gold-light/60 hover:text-white transition-colors">Clinical Dermatology</a></li>
              <li><a href="#" className="text-brand-gold-light/60 hover:text-white transition-colors">Aesthetic Medicine</a></li>
              <li><a href="#" className="text-brand-gold-light/60 hover:text-white transition-colors">Dermatological Surgery</a></li>
              <li><a href="#" className="text-brand-gold-light/60 hover:text-white transition-colors">Laser Treatments</a></li>
              <li><a href="#" className="text-brand-gold-light/60 hover:text-white transition-colors">Hair Restoration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-8">Newsletter</h4>
            <p className="text-brand-gold-light/60 mb-6">Subscribe to get skin health tips and updates on our upcoming hospital.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Email Address" className="bg-white/10 border border-white/20 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 w-full" />
              <button className="bg-brand-gold text-brand-gold-dark p-3 rounded-full hover:bg-white transition-all">
                <ArrowUp className="w-5 h-5 rotate-45" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:row items-center justify-between gap-8">
          <p className="text-brand-gold-light/40 text-sm">
            © 2026 Dr. B Kinnera. All rights reserved. Designed for Excellence.
          </p>
          
          <div className="flex items-center gap-2 text-brand-gold-light/40 text-sm">
            Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> in Visakhapatnam
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-brand-gold-light/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
          >
            Back to top
            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-brand-gold-dark transition-all">
              <ArrowUp className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
