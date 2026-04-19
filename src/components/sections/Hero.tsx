import React from 'react';
import { motion } from 'motion/react';
import { Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-brand-cream">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-brand-gold/8 to-transparent" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-brand-gold/6 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-brand-gold-dark/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-gold-light text-brand-gold-dark px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 border border-brand-gold/20">
            <Award className="w-4 h-4 text-brand-gold" />
            IADVL Gold Medalist · MD Dermatology
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-gold-dark leading-[1.1] mb-4">
            Dr. Kinnera <span className="text-brand-gold italic">B.</span>
          </h1>

          <p className="text-lg md:text-xl text-brand-text/70 font-medium mb-2">
            MBBS · MD (Dermatology) · FRGUHS (Dermatosurgery &amp; Hair Transplantation)
          </p>
          <p className="text-base text-brand-text/50 mb-8">
            Chief Dermatologist · Apollo Hospitals, Ramnagar, Visakhapatnam
          </p>

          <p className="text-lg text-brand-text/70 mb-10 leading-relaxed max-w-xl">
            With over 8 years of specialized experience and more than 10 gold medals to her credit,
            Dr. Kinnera delivers transformative dermatological care — from medical skin conditions
            to advanced dermatosurgical and aesthetic procedures.
          </p>
        </motion.div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white aspect-[4/5] w-full max-w-md">
            <img
              src="/dr-kinnera.png"
              alt="Dr. Kinnera Boina — Consultant Dermatologist, Visakhapatnam"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Decorative rings */}
          <div className="absolute -top-8 -right-8 w-40 h-40 border-2 border-brand-gold/20 rounded-full pointer-events-none" />
          <div className="absolute -top-14 -right-14 w-40 h-40 border border-brand-gold-dark/10 rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
