import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Microscope, Zap, Trophy, BookOpen, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Clinical Dermatology',
    icon: Microscope,
    color: 'bg-brand-gold-light text-brand-gold-dark',
    skills: [
      { name: 'Acne & Rosacea Management', level: 98 },
      { name: 'Psoriasis & Eczema Therapy', level: 95 },
      { name: 'Vitiligo Treatment', level: 97 },
      { name: 'Hair Loss (Alopecia) Diagnosis', level: 96 },
      { name: 'Fungal & Infectious Dermatology', level: 94 },
    ],
  },
  {
    title: 'Surgical Expertise',
    icon: Zap,
    color: 'bg-brand-gold/10 text-brand-gold',
    skills: [
      { name: 'Vitiligo Surgery (Grafting)', level: 96 },
      { name: 'Hair Transplant (FUE/FUT)', level: 93 },
      { name: 'Mole & Cyst Removal', level: 99 },
      { name: 'Scar Revision Surgery', level: 95 },
      { name: 'Skin Biopsy & Histopathology', level: 97 },
    ],
  },
  {
    title: 'Aesthetic Procedures',
    icon: Trophy,
    color: 'bg-brand-gold-dark/10 text-brand-gold-dark',
    skills: [
      { name: 'Botox & Dermal Fillers', level: 97 },
      { name: 'Laser Hair Reduction', level: 98 },
      { name: 'PRP Therapy', level: 95 },
      { name: 'Chemical Peels & Resurfacing', level: 96 },
      { name: 'Skin Rejuvenation Protocols', level: 94 },
    ],
  },
];

const highlights = [
  {
    icon: GraduationCap,
    title: 'Gold Medalist',
    subtitle: 'MBBS — Top of class with university-level distinction',
  },
  {
    icon: BookOpen,
    title: 'MD Dermatology',
    subtitle: 'Postgraduate specialization with research publications',
  },
  {
    icon: Users,
    title: '5000+ Patients',
    subtitle: 'Treated across clinical and aesthetic dermatology',
  },
  {
    icon: Trophy,
    title: 'Fellowship Trained',
    subtitle: 'Advanced fellowship in dermatological surgery',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold tracking-widest uppercase text-sm"
          >
            Expertise & Credentials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-gold-dark mt-4 mb-6"
          >
            Skills That Set Us Apart
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-text/70 max-w-2xl mx-auto text-lg"
          >
            A gold-medal academic foundation combined with years of clinical and surgical practice — delivering precision care across every dermatological discipline.
          </motion.p>
        </div>

        {/* Highlight Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col items-center text-center bg-brand-gold-light rounded-3xl p-6 border border-brand-gold/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-gold-dark flex items-center justify-center mb-4 shadow-sm">
                <item.icon className="w-7 h-7 text-brand-gold-light" />
              </div>
              <h4 className="font-serif font-bold text-brand-gold-dark text-lg leading-tight mb-1">
                {item.title}
              </h4>
              <p className="text-brand-text/60 text-sm leading-relaxed">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-brand-cream rounded-3xl p-8 border border-brand-gold/10"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center shadow-sm flex-shrink-0`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-brand-gold-dark text-xl">
                  {category.title}
                </h3>
              </div>

              {/* Skill Bars */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-brand-text/80">{skill.name}</span>
                      <span className="text-xs font-bold text-brand-gold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-brand-gold/15 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: catIndex * 0.1 + skillIndex * 0.08, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-brand-gold-dark to-brand-gold rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
