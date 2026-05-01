import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Users, Microscope, Globe } from 'lucide-react';

const highlights = [
  {
    icon: BookOpen,
    title: 'Medical Excellence',
    desc: 'MBBS and MD in Dermatology with 10+ gold medals, including the prestigious IADVL gold medal for highest marks at university level.',
  },
  {
    icon: Microscope,
    title: 'Surgical Mastery',
    desc: 'Fellowship (FRGUHS) in Dermatosurgery and Hair Transplantation — one of the very few dermatologists in Andhra Pradesh to hold this specialized credential.',
  },
  {
    icon: Users,
    title: 'Holistic Patient Care',
    desc: 'Every treatment plan considers the patient\'s unique health profile, lifestyle, and goals — not just the visible skin symptom.',
  },
  {
    icon: Globe,
    title: 'Thought Leader',
    desc: 'Invited speaker at national and international conferences; active member of prestigious dermatological societies.',
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-brand-cream">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">About Dr. Kinnera</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-gold-dark mb-8 leading-tight">
            Where Gold Medal <span className="italic text-brand-gold">Academics Meet</span> Surgical Artistry
          </h2>

          <p className="text-brand-text/70 mb-5 leading-relaxed text-lg">
            Dr. Kinnera graduated as the Best Outgoing Student of her MBBS batch, earning the prestigious
            Andhra Pradesh Medical Council Gold Medal and over 10 gold medals for her academic excellence.
          </p>

          <p className="text-brand-text/70 mb-5 leading-relaxed text-lg">
            She completed her MD in Dermatology at Rangaraya Medical College, where she continued her streak
            of excellence as a University Topper, receiving the esteemed IADVL Gold Medal from Shri Abdul
            Nazeer, the Governor of Andhra Pradesh. Throughout her residency, she was a frequent winner of
            numerous state and national-level quiz competitions.
          </p>

          <p className="text-brand-text/70 mb-5 leading-relaxed text-lg">
            Driven by a passion for dermatosurgical precision, she pursued a specialized, university-accredited
            Fellowship in Dermatosurgery and Hair Transplantation at the Cutis Institute of Dermatology in
            Bangalore — widely recognized as one of India's premier centres for skin surgery.
          </p>

          <p className="text-brand-text/70 leading-relaxed text-lg">
            Dr. Kinnera combines her rigorous academic background with advanced dermatosurgical expertise to
            provide world-class care in medical dermatology, aesthetic surgery, and hair restoration.
          </p>
        </motion.div>
      </div>

      {/* Full-width surgery image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto mb-12"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/7]">
          <img
            src="/dr-kinnera-surgery.png"
            alt="Dr. Kinnera Boina performing dermatosurgery"
            className="w-full h-full object-cover object-right-top"
          />
          {/* Quote overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-gold-dark/90 to-transparent p-8">
            <p className="text-white text-base md:text-lg italic leading-relaxed max-w-2xl">
              "I believe in addressing not just the visible symptom, but the underlying cause — creating care that lasts."
            </p>
            <p className="text-brand-gold-light text-sm font-bold mt-2">— Dr. Kinnera Boina</p>
          </div>
        </div>
      </motion.div>

      {/* Highlight cards */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="flex flex-col gap-3 p-5 bg-white rounded-2xl border border-brand-gold/10 shadow-sm"
            >
              <div className="bg-brand-gold-light p-2.5 rounded-xl w-fit">
                <h.icon className="w-5 h-5 text-brand-gold-dark" />
              </div>
              <h4 className="font-bold text-brand-gold-dark text-sm">{h.title}</h4>
              <p className="text-brand-text/60 text-xs leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Professional activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-l-4 border-brand-gold pl-6"
        >
          <h4 className="font-bold text-brand-gold-dark mb-3">Professional Activities</h4>
          <ul className="space-y-2 text-sm text-brand-text/70">
            <li>· Invited speaker at prestigious national &amp; international conferences</li>
            <li>· Active member of leading dermatological societies</li>
            <li>· Mentor to the next generation of dermatologists</li>
            <li>· Presentations on clinical &amp; procedural dermatology innovations</li>
          </ul>
        </motion.div>
      </div>

    </section>
  );
};

export default About;
