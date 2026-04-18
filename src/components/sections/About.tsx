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
    desc: 'Fellowship (FRGUHS) in Dermatosurgery and Hair Transplantation — the first dermatologist in Andhra Pradesh to hold this specialized credential.',
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
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold-light/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Image */}
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
              alt="Dr. Kinnera Boina — Consultant Dermatologist at Apollo Hospitals Visakhapatnam"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Pull quote overlay */}
          <div className="absolute -bottom-8 -right-8 bg-brand-gold-dark text-white p-6 rounded-2xl shadow-xl max-w-[260px]">
            <p className="text-sm italic leading-relaxed text-brand-gold-light/90">
              "I believe in addressing not just the visible symptom, but the underlying cause — creating care that lasts."
            </p>
            <p className="text-xs font-bold mt-3 text-brand-gold">— Dr. Kinnera Boina</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">About Dr. Kinnera</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-gold-dark mb-6 leading-tight">
            Where Gold Medal <br />
            <span className="italic text-brand-gold">Academics Meet</span> <br />
            Surgical Artistry
          </h2>

          <p className="text-brand-text/70 mb-5 leading-relaxed">
            Dr. Kinnera Boina stands at the forefront of dermatological care as a board-certified Consultant
            Dermatologist with over 8 years of specialized experience. As the Chief Dermatologist at Apollo
            Hospitals, Ramnagar, she has built a practice founded on medical excellence, personalized
            attention, and transformative results.
          </p>

          <p className="text-brand-text/70 mb-8 leading-relaxed">
            Her comprehensive training includes an MBBS and MD in Dermatology, earning more than 10 gold
            medals — including the prestigious IADVL gold medal for securing the highest marks at university
            level. She further advanced her expertise with a Fellowship (FRGUHS) in Dermatosurgery and Hair
            Transplantation, and her mastery of Dermatoscopy gives her an extra edge in diagnosing complex,
            resistant cases.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="flex gap-4 p-4 bg-brand-cream rounded-2xl border border-brand-gold/10"
              >
                <div className="bg-brand-gold-light p-2.5 rounded-xl shrink-0 h-fit">
                  <h.icon className="w-5 h-5 text-brand-gold-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-gold-dark text-sm mb-1">{h.title}</h4>
                  <p className="text-brand-text/60 text-xs leading-relaxed">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Professional activities */}
          <div className="border-l-4 border-brand-gold pl-6 mb-8">
            <h4 className="font-bold text-brand-gold-dark mb-3">Professional Activities</h4>
            <ul className="space-y-2 text-sm text-brand-text/70">
              <li>· Invited speaker at prestigious national &amp; international conferences</li>
              <li>· Active member of leading dermatological societies</li>
              <li>· Mentor to the next generation of dermatologists</li>
              <li>· Presentations on clinical &amp; procedural dermatology innovations</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
