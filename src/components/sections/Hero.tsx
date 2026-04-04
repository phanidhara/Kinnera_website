import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-brand-cream">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 -skew-x-12 transform translate-x-1/4" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-gold-light text-brand-gold-dark px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 border border-brand-gold/20">
            <Award className="w-4 h-4 text-brand-gold" />
            Gold Medalist Dermatologist & Surgeon
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-gold-dark leading-[1.1] mb-6">
            Expert Dermatological Care by <span className="text-brand-gold italic">Dr. B Kinnera</span>
          </h1>
          
          <p className="text-lg text-brand-text/70 mb-10 leading-relaxed max-w-xl">
            Specialized dermatological and cosmetic solutions in Visakhapatnam. Combining clinical excellence with surgical precision for your skin's health.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4">
              Book Appointment
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4">
              View Services
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white aspect-[4/5]">
            <img
              src="/dr-kinnera.png"
              alt="Dr. B Kinnera"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-xl shadow-xl border border-brand-gold/10 max-w-[240px]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-brand-gold-light p-2 rounded-full">
                <ShieldCheck className="w-5 h-5 text-brand-gold-dark" />
              </div>
              <span className="text-sm font-bold text-brand-gold-dark">Certified Expert</span>
            </div>
            <p className="text-xs text-brand-text/60 leading-relaxed">
              Specialized in advanced dermatological surgery and aesthetic medicine.
            </p>
          </motion.div>

          {/* Decorative Rings */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-brand-gold/20 rounded-full" />
          <div className="absolute -top-16 -right-16 w-40 h-40 border-2 border-brand-gold-dark/10 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
