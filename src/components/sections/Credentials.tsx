import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Stethoscope, Star, Globe, Users } from 'lucide-react';

const timeline = [
  {
    icon: GraduationCap,
    year: 'MBBS',
    title: 'Bachelor of Medicine & Bachelor of Surgery',
    detail: 'Foundation of clinical medicine with distinction in multiple subjects.',
    highlight: false,
  },
  {
    icon: Award,
    year: 'MD',
    title: 'MD in Dermatology — 10+ Gold Medals',
    detail: 'Recipient of the prestigious IADVL gold medal for securing the highest marks at university level during MD Dermatology. Earned more than 10 gold medals across academic assessments.',
    highlight: true,
  },
  {
    icon: Stethoscope,
    year: 'FRGUHS',
    title: 'Fellowship in Dermatosurgery & Hair Transplantation',
    detail: 'Rajiv Gandhi University of Health Sciences (RGUHS) Fellowship. Specialized training in cutaneous surgeries and hair restoration. First dermatologist in Andhra Pradesh to hold this Fellowship in Interventional Dermatology.',
    highlight: true,
  },
  {
    icon: Star,
    year: 'Expert',
    title: 'Dermatoscopy Specialist',
    detail: 'Advanced certification in Dermatoscopy — a specialized high-magnification diagnostic tool for skin disorders. Provides a critical edge in diagnosing complicated and resistant cases.',
    highlight: false,
  },
  {
    icon: Globe,
    year: 'Speaker',
    title: 'National & International Conference Speaker',
    detail: 'Invited speaker at prestigious dermatological conferences. Delivers presentations on clinical dermatology, procedural innovations, and hair restoration advances.',
    highlight: false,
  },
  {
    icon: Users,
    year: 'Member',
    title: 'Professional Society Memberships',
    detail: 'Active member of the Indian Association of Dermatologists, Venereologists and Leprologists (IADVL) and other leading dermatological societies. Collaborates with top experts nationally and internationally.',
    highlight: false,
  },
];

const Credentials = () => {
  return (
    <section id="credentials" className="section-padding bg-brand-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-gold/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold tracking-widest uppercase text-sm"
          >
            Qualifications & Achievements
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-gold-dark mt-4 mb-6"
          >
            Academic Excellence &amp; <span className="italic text-brand-gold">Clinical Authority</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-text/70 max-w-2xl mx-auto text-lg"
          >
            Dr. Kinnera's credentials represent years of dedicated academic pursuit and hands-on surgical training
            — a combination that defines true dermatological expertise.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-gold/20 -translate-x-1/2 hidden md:block" />

          <div className="space-y-10">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Card */}
                  <div className="flex-1 md:max-w-[45%]">
                    <div className={`p-6 rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-lg ${item.highlight ? 'bg-brand-gold-dark text-white border-brand-gold-dark' : 'bg-white border-brand-gold/10'}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-xl ${item.highlight ? 'bg-brand-gold/20' : 'bg-brand-gold-light'}`}>
                          <item.icon className={`w-5 h-5 ${item.highlight ? 'text-brand-gold-light' : 'text-brand-gold-dark'}`} />
                        </div>
                        <span className={`text-xs font-bold tracking-widest uppercase ${item.highlight ? 'text-brand-gold-light/70' : 'text-brand-gold'}`}>
                          {item.year}
                        </span>
                      </div>
                      <h3 className={`text-lg font-bold mb-2 ${item.highlight ? 'text-white' : 'text-brand-gold-dark'}`}>
                        {item.title}
                        {item.highlight && <span className="ml-2 text-brand-gold text-sm">★</span>}
                      </h3>
                      <p className={`text-sm leading-relaxed ${item.highlight ? 'text-brand-gold-light/80' : 'text-brand-text/60'}`}>
                        {item.detail}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-6 h-6 rounded-full border-4 border-brand-gold bg-white shrink-0 z-10 items-center justify-center shadow-md">
                    <div className="w-2 h-2 rounded-full bg-brand-gold" />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1 md:max-w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Apollo Hospitals badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white border border-brand-gold/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm"
        >
          <div className="bg-brand-gold-light p-5 rounded-2xl shrink-0">
            <Stethoscope className="w-10 h-10 text-brand-gold-dark" />
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-brand-gold-dark mb-2">
              Currently Practising at Apollo Hospitals
            </h3>
            <p className="text-brand-text/60 text-lg">
              Ramnagar, Visakhapatnam, Andhra Pradesh
            </p>
            <p className="text-brand-text/50 text-sm mt-2">
              Chief Dermatologist · Consultant Dermatologist · Dermatosurgeon
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Credentials;
