import React from 'react';
import { Award, Heart, ArrowUp, MessageCircle, Phone, MapPin, Instagram, Youtube } from 'lucide-react';

const WHATSAPP = 'https://wa.me/917981337366?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Dr.%20Kinnera';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-brand-gold-dark text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-gold p-2 rounded-lg">
                <Award className="text-brand-gold-dark w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-serif font-bold text-white leading-none">
                  Dr. <span className="text-brand-gold-light">Kinnera Boina</span>
                </h2>
              </div>
            </div>
            <p className="text-brand-gold-light/60 text-sm leading-relaxed mb-6">
              Consultant Dermatologist at Apollo Hospitals &amp; Sujatha Hospital. Providing gold-standard dermatological care in Visakhapatnam.
            </p>
            <div className="space-y-2 text-sm text-brand-gold-light/50">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Apollo Hospitals, Ramnagar, Vizag<br />Sujatha Hospital, Gajuwaka, Vizag</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                +91 79813 37366
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-6 text-brand-gold-light">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', href: '#' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-brand-gold-light/50 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-bold mb-6 text-brand-gold-light">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                'Clinical Dermatology',
                'Trichology & Hair Transplant',
                'Dermatosurgery',
                'Aesthetic Dermatology',
                'Pediatric Dermatology',
                'Geriatric Dermatology',
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-brand-gold-light/50 hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h4 className="text-base font-bold mb-6 text-brand-gold-light">Book Appointment</h4>
            <p className="text-brand-gold-light/50 text-sm mb-5 leading-relaxed">
              The quickest way to reach the clinic is via WhatsApp.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-[#25D366] transition-all shadow-lg w-fit"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
            <p className="text-brand-gold-light/30 text-xs mt-3">Mon–Sat, 10 AM – 7 PM</p>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-brand-gold-light/30 text-xs">
            © 2026 Dr. Kinnera Boina. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-brand-gold-light/30 text-xs">
            <span className="flex items-center gap-1.5">Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> in Visakhapatnam</span>
            <a
              href="https://www.instagram.com/theandhra_dermatologist?igsh=MXhvOHN6bHp0Y2po"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@theandhra_dermatologist"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-brand-gold-light/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
          >
            Back to top
            <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-brand-gold-dark transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
