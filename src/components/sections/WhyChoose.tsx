import React from 'react';
import { motion } from 'motion/react';
import { Award, Clock, Microscope, Heart, MapPin, Lightbulb } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'IADVL Gold Medalist',
    desc: 'Secured the highest marks at university level during MD Dermatology — a distinction recognised by the Indian Association of Dermatologists, Venereologists and Leprologists.',
  },
  {
    icon: Microscope,
    title: 'First in Andhra Pradesh',
    desc: 'Dr. Kinnera is the first dermatologist in Andhra Pradesh to hold a Fellowship in Interventional Dermatology, bringing pioneering surgical expertise to Visakhapatnam.',
  },
  {
    icon: Clock,
    title: '8+ Years Specialized Experience',
    desc: 'Over eight years as a practising consultant dermatologist, handling a wide spectrum of skin, hair, and nail conditions from routine to highly complex cases.',
  },
  {
    icon: Lightbulb,
    title: 'Dermatoscopy Advantage',
    desc: 'Advanced Dermatoscopy expertise allows accurate sub-surface diagnosis of skin disorders — providing a critical edge in complicated and resistant cases.',
  },
  {
    icon: Heart,
    title: 'Holistic, Patient-First Care',
    desc: 'Every treatment plan considers the patient\'s full health profile, lifestyle, and goals — addressing root causes, not just visible symptoms.',
  },
  {
    icon: MapPin,
    title: 'Apollo Hospitals, Visakhapatnam',
    desc: 'Practising at Apollo Hospitals, Ramnagar — a world-class facility with advanced equipment and a trusted environment for every patient.',
  },
];

const WhyChoose = () => {
  return (
    <section id="why" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-gold-light/30 rounded-full blur-3xl pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold tracking-widest uppercase text-sm"
          >
            Why Patients Choose Dr. Kinnera
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-gold-dark mt-4 mb-6"
          >
            The Difference That <span className="italic text-brand-gold">Defines Excellence</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-7 rounded-3xl border border-brand-gold/10 bg-brand-cream hover:bg-brand-gold-dark hover:border-brand-gold-dark transition-all duration-500 hover:shadow-xl"
            >
              <div className="bg-brand-gold-light group-hover:bg-brand-gold/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-500">
                <r.icon className="w-7 h-7 text-brand-gold-dark group-hover:text-brand-gold-light transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-bold text-brand-gold-dark group-hover:text-white mb-3 transition-colors duration-500">
                {r.title}
              </h3>
              <p className="text-brand-text/60 group-hover:text-brand-gold-light/80 text-sm leading-relaxed transition-colors duration-500">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
