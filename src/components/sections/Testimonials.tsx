import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Priya S.',
    treatment: 'Vitiligo Surgery',
    text: 'Dr. Kinnera performed my vitiligo surgery and the results have been beyond what I imagined. She explained every step in detail and made me feel completely at ease. The repigmentation has been excellent.',
    rating: 5,
  },
  {
    name: 'Ravi K.',
    treatment: 'Hair Transplant (FUE)',
    text: 'I had a FUE hair transplant and the results after 10 months are absolutely natural. Dr. Kinnera is incredibly skilled — her artistic sense in placing each follicle at the right angle makes all the difference. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Ananya M.',
    treatment: 'Acne Scar Treatment',
    text: 'I had been struggling with acne scars for years. After consulting Dr. Kinnera and following her treatment plan, my skin has improved dramatically. She is thorough, patient, and genuinely cares about results.',
    rating: 5,
  },
  {
    name: 'Suresh R.',
    treatment: 'Mole Removal',
    text: 'Had multiple moles removed using Dermoscopy-guided RF ablation. There is practically no scar visible. Dr. Kinnera\'s precision is remarkable — I wish I had come to her sooner.',
    rating: 5,
  },
  {
    name: 'Lakshmi D.',
    treatment: 'Keloid Surgery',
    text: 'My ear lobe keloid had been a source of embarrassment for years. Dr. Kinnera\'s multi-modal approach completely resolved it. The after-care and follow-up were exceptional.',
    rating: 5,
  },
  {
    name: 'Nithya P.',
    treatment: 'Laser & Aesthetic',
    text: 'I came in for pigmentation and overall skin rejuvenation. The results after my chemical peel and laser sessions have been phenomenal. I get compliments on my skin every day now!',
    rating: 5,
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  return (
    <div className="w-12 h-12 rounded-full bg-brand-gold-dark flex items-center justify-center text-white font-bold text-lg shrink-0">
      {name.charAt(0)}
    </div>
  );
}

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const perPage = 3;
  const total = Math.ceil(reviews.length / perPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const visible = reviews.slice(current * perPage, current * perPage + perPage);
  // fill to perPage so grid doesn't jump
  while (visible.length < perPage) visible.push(visible[0]);

  return (
    <section id="testimonials" className="section-padding bg-brand-gold-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold tracking-widest uppercase text-sm"
          >
            Patient Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-4"
          >
            What Patients <span className="italic text-brand-gold">Say About</span> Her
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-brand-gold-light/70"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <span className="font-bold text-white">5.0</span>
            <span>· Trusted by thousands of patients in Visakhapatnam</span>
          </motion.div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            {visible.map((r, i) => (
              <div
                key={`${r.name}-${i}`}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-7 border border-white/10 flex flex-col"
              >
                <StarRow count={r.rating} />
                <p className="text-brand-gold-light/90 text-sm leading-relaxed mb-6 flex-1 italic">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar name={r.name} />
                  <div>
                    <p className="font-bold text-white text-sm">{r.name}</p>
                    <p className="text-brand-gold text-xs">{r.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => setCurrent((c) => (c - 1 + total) % total)}
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-brand-gold-dark transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-brand-gold' : 'w-2 bg-white/30'}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((c) => (c + 1) % total)}
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-brand-gold-dark transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
