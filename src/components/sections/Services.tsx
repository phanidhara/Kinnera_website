import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Sparkles, Scissors, ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Clinical Dermatology',
    description: 'Expert diagnosis and treatment for a wide range of skin, hair, and nail conditions using evidence-based protocols.',
    icon: Stethoscope,
    items: ['Acne & Rosacea', 'Psoriasis & Eczema', 'Hair Loss (Alopecia)', 'Vitiligo Management', 'Fungal Infections'],
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Aesthetic Medicine',
    description: 'Advanced non-surgical treatments to rejuvenate your skin and enhance your natural features.',
    icon: Sparkles,
    items: ['Botox & Dermal Fillers', 'Laser Hair Reduction', 'PRP Therapy', 'Chemical Peels', 'Skin Rejuvenation'],
    color: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Dermatological Surgery',
    description: 'Specialized surgical procedures performed with precision to treat skin conditions and improve aesthetics.',
    icon: Scissors,
    items: ['Vitiligo Surgery', 'Hair Transplant', 'Mole & Cyst Removal', 'Scar Revision', 'Skin Biopsy'],
    color: 'bg-emerald-50 text-emerald-600',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold tracking-widest uppercase text-sm"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-gold-dark mt-4 mb-6"
          >
            Comprehensive Skin Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-text/70 max-w-2xl mx-auto text-lg"
          >
            We offer a wide range of dermatological services tailored to your unique needs, from medical diagnosis to advanced surgical procedures.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-8 border border-brand-gold/10 hover:bg-brand-gold-light hover:shadow-2xl hover:shadow-brand-gold/5 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                <service.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-brand-gold-dark mb-4">
                {service.title}
              </h3>
              
              <p className="text-brand-text/60 mb-8 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-4 mb-10">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-brand-text/80 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-2 text-brand-gold-dark font-bold group-hover:gap-4 transition-all duration-300">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-brand-gold-dark rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold-light/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Need a Personalized Consultation?
            </h3>
            <p className="text-brand-gold-light/80 max-w-2xl mx-auto mb-10 text-lg">
              Every skin is unique. Book a session to get a customized treatment plan designed specifically for your skin type and concerns.
            </p>
            <button className="bg-brand-gold text-brand-gold-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl">
              Schedule Your Visit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
