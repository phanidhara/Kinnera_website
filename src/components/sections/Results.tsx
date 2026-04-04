import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Star } from 'lucide-react';

const results = [
  {
    title: 'Acne Scar Revision',
    description: 'Advanced laser and subcision treatment for deep acne scars.',
    imageBefore: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=500',
    imageAfter: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=500',
    category: 'Surgical',
  },
  {
    title: 'Skin Rejuvenation',
    description: 'Chemical peel and microneedling for texture and tone improvement.',
    imageBefore: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=500',
    imageAfter: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=500',
    category: 'Cosmetic',
  },
  {
    title: 'Mole Removal',
    description: 'Surgical excision with minimal scarring for facial mole.',
    imageBefore: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=500',
    imageAfter: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=500',
    category: 'Surgical',
  },
];

const Results = () => {
  return (
    <section id="results" className="section-padding bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold tracking-widest uppercase text-sm"
          >
            Clinical Excellence
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-gold-dark mt-4 mb-6"
          >
            Real Patient <span className="italic text-brand-gold">Transformations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-text/70 max-w-2xl mx-auto text-lg"
          >
            Witness the results of expert dermatological care. All procedures are performed with the highest medical standards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {results.map((result, index) => (
            <motion.div
              key={result.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-brand-gold/10 group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={result.imageAfter}
                  alt={result.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-brand-gold-dark/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {result.category}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-gold-dark mb-3">
                  {result.title}
                </h3>
                <p className="text-brand-text/60 mb-6 leading-relaxed">
                  {result.description}
                </p>
                <div className="flex items-center gap-2 text-brand-gold font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  Successful Outcome
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-brand-text/40 italic text-sm">
            *Results may vary from patient to patient. Privacy is our priority; all images are shared with patient consent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Results;
