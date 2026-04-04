import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Building2, MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-brand-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold-dark rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white aspect-[4/5] max-w-md mx-auto lg:mx-0">
            <img
              src="/dr-kinnera.png"
              alt="Dr. B Kinnera Professional Portrait"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">Meet Your Doctor</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-gold-dark mb-8 leading-tight">
            A Legacy of <span className="italic text-brand-gold">Academic Excellence</span> & Surgical Precision
          </h2>
          
          <p className="text-lg text-brand-text/70 mb-8 leading-relaxed">
            As a <span className="font-bold text-brand-gold-dark">Gold Medalist</span> in MD Dermatology, I have dedicated my career to mastering the complexities of skin health. My approach combines rigorous medical science with an artistic eye for aesthetics, ensuring that every patient receives personalized, high-quality care.
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-brand-gold/10 shrink-0">
                <GraduationCap className="w-8 h-8 text-brand-gold" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-gold-dark mb-2">Academic Excellence</h4>
                <p className="text-brand-text/60">Gold Medalist in MD Dermatology, specializing in advanced dermatological surgery and cosmetic medicine.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-brand-gold/10 shrink-0">
                <Award className="w-8 h-8 text-brand-gold" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-gold-dark mb-2">Surgical Mastery</h4>
                <p className="text-brand-text/60">Performed numerous successful dermatological and cosmetic procedures with a focus on minimal scarring and natural results.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-brand-gold/10 shrink-0">
                <Building2 className="w-8 h-8 text-brand-gold" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-gold-dark mb-2">Future Vision</h4>
                <p className="text-brand-text/60">Currently providing expert consultations while preparing to establish a state-of-the-art dermatological hospital in Visakhapatnam.</p>
              </div>
            </div>
          </div>

          <button className="btn-primary px-10 py-4 text-lg">
            Download Professional Profile
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
