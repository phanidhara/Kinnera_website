import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What qualifications does Dr. Kinnera hold?',
    a: 'Dr. Kinnera Boina holds an MBBS, an MD in Dermatology (with 10+ gold medals including the prestigious IADVL gold medal for highest marks at university level), and an FRGUHS Fellowship in Dermatosurgery and Hair Transplantation. She is the first dermatologist in Andhra Pradesh to hold this specialised Fellowship in Interventional Dermatology.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'The easiest way is to WhatsApp Dr. Kinnera\'s clinic at +91 99325 54359. You can also call the same number directly. The clinic is located at Apollo Hospitals, Ramnagar, Visakhapatnam.',
  },
  {
    q: 'What is the difference between FUE and FUT hair transplantation?',
    a: 'FUE (Follicular Unit Extraction) harvests individual hair follicles using a tiny tool — no stitches, no linear scar, ideal for most patients. FUT (Follicular Unit Transplantation) takes a small strip from the scalp\'s back and is used when a very large number of grafts are needed in one session. Dr. Kinnera assesses each case individually to recommend the best technique.',
  },
  {
    q: 'Is laser treatment safe for Indian skin tones?',
    a: 'Yes. Dr. Kinnera uses laser settings specifically calibrated for darker Indian skin tones (Fitzpatrick III–V). Treatments such as laser hair removal and scar correction are routinely performed safely. A patch test and consultation are done before any laser procedure.',
  },
  {
    q: 'How many sessions are needed for PRP hair treatment?',
    a: 'Most patients require 3–4 monthly sessions for initial results, followed by maintenance sessions every 4–6 months. The number of sessions depends on the degree of hair loss and individual response, which Dr. Kinnera evaluates during the consultation.',
  },
  {
    q: 'What is Dermatoscopy and why does Dr. Kinnera use it?',
    a: 'Dermatoscopy is a specialised high-magnification imaging technique that allows a dermatologist to examine subsurface skin structures invisible to the naked eye. Dr. Kinnera uses it to accurately classify moles, diagnose hair disorders (trichoscopy), and detect early signs of skin cancer — giving her a significant diagnostic edge in complex cases.',
  },
  {
    q: 'Can Vitiligo be treated surgically?',
    a: 'Yes, for patients whose vitiligo has been stable for at least 6–12 months and has not responded to topical or phototherapy, surgical options such as Mini-Punch Grafting, Suction Blister Epidermal Grafting (SBEG), or Melanocyte Transplantation are highly effective. Dr. Kinnera specialises in all three techniques.',
  },
  {
    q: 'What is the recovery time after a hair transplant?',
    a: 'Patients can typically return to desk work within 3 days. Normal physical activities resume after 1 week. Strenuous exercise and direct sun exposure should be avoided for 2–4 weeks. Final results emerge gradually over 9–12 months as transplanted hair grows naturally.',
  },
  {
    q: 'Do keloids come back after treatment?',
    a: 'Keloids have a tendency to recur, which is why Dr. Kinnera uses a multi-modal approach — combining Intralesional Cryotherapy, Radiofrequency, and/or Laser Therapy — rather than surgery alone. This reduces the recurrence rate significantly. Regular follow-up monitoring is part of the treatment protocol.',
  },
  {
    q: 'Does Dr. Kinnera treat children\'s skin conditions?',
    a: 'Yes. Dr. Kinnera has a dedicated Pediatric Dermatology practice. She treats atopic dermatitis, infantile acne, birthmarks, congenital skin disorders, and childhood infectious skin diseases using age-appropriate and safe protocols.',
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border border-brand-gold/15 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left bg-white hover:bg-brand-gold-light/50 transition-colors duration-200"
      >
        <span className="font-bold text-brand-gold-dark text-base leading-snug">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-brand-gold shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-brand-text/70 text-sm leading-relaxed bg-brand-cream/60 border-t border-brand-gold/10">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-brand-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold tracking-widest uppercase text-sm"
          >
            Frequently Asked Questions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-gold-dark mt-4 mb-4"
          >
            Your Questions, <span className="italic text-brand-gold">Answered</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-text/60 text-lg"
          >
            Everything you need to know before your first consultation.
          </motion.p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
