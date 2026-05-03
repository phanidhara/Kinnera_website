import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Stethoscope, Sparkles, Scissors, Baby, Glasses, ChevronDown, MessageCircle } from 'lucide-react';

const HairFollicleIcon = ({ className }: { className?: string }) => (
  <img src="/hair-folicle.png" alt="Hair follicle" className={className} style={{ objectFit: 'contain' }} />
);

const WHATSAPP = 'https://wa.me/917981337366?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Dr.%20Kinnera';

const categories = [
  {
    id: 'clinical',
    icon: Stethoscope,
    title: 'Clinical Dermatology',
    description: 'Advanced diagnosis and management of complex skin disorders using evidence-based protocols and the latest therapies.',
    procedures: [
      'Psoriasis, Eczema & Autoimmune Skin Conditions',
      'Acne, Rosacea & Hyperpigmentation',
      'Dermatitis & Allergic Skin Reactions',
      'Fungal, Bacterial & Viral Skin Infections',
      'Biologicals & Immunotherapy',
      'Vitiligo Management',
    ],
    color: 'bg-amber-50 border-amber-200',
    iconColor: 'bg-amber-100 text-amber-800',
    tag: null,
  },
  {
    id: 'trichology',
    icon: HairFollicleIcon,
    title: 'Trichology & Hair Transplantation',
    description: 'Comprehensive hair and scalp solutions — from diagnosis and medical management to advanced FUE hair transplantation.',
    procedures: [
      'Genetic Baldness & Alopecia Areata',
      'Hair Loss Treatment',
      'Dandruff & Scalp Conditions',
      'Scalp Biopsy & Trichoscopy',
      'PRP for Hair Growth',
      'Eyebrow Microblading & Scalp Micropigmentation',
      'Electroepilation for White Hair',
      'Hair Transplantation — FUE (Scalp, Beard, Eyebrow, Scar)',
    ],
    color: 'bg-rose-50 border-rose-200',
    iconColor: 'bg-rose-100 text-rose-800',
    tag: 'Most Popular',
  },
  {
    id: 'surgery',
    icon: Scissors,
    title: 'Dermatosurgery',
    description: 'Specialized surgical procedures performed with precision for skin conditions, pigment restoration, and aesthetic improvement.',
    procedures: [
      'Skin Biopsy (Oral, Genital & Scalp)',
      'Radio Frequency / Electrocautery (DPNs, Moles, Tags, Warts)',
      'Excisional Surgeries (Mole, Cyst, Corn, Lipoma)',
      'Vitiligo Surgeries',
      'Acne Scar Surgeries',
      'PRP / PRFM for Scars & Ulcers',
      'Scar Revision Surgeries',
      'Ear Piercing & Ear Lobe Repair',
      'Keloid Surgeries',
      'Nail Surgeries',
      'Sclerotherapy',
    ],
    color: 'bg-stone-50 border-stone-200',
    iconColor: 'bg-stone-100 text-stone-800',
    tag: null,
  },
  {
    id: 'aesthetic',
    icon: Sparkles,
    title: 'Aesthetic Dermatology',
    description: 'Non-surgical and minimally invasive treatments to rejuvenate your skin and enhance your natural features.',
    procedures: [
      'Uneven Skin Tone Treatment',
      'Facial Rejuvenation',
      'Botox & Fillers',
      'PRP for Skin',
      'Chemical Peels',
      'Laser Hair Removal (Face & Body)',
      'Laser for Scars',
      'Vampire Lift Facial',
      'Dermaplaning',
    ],
    color: 'bg-white border-gray-100',
    iconColor: 'bg-yellow-100 text-yellow-800',
    tag: 'Popular',
  },
  {
    id: 'pediatric',
    icon: Baby,
    title: 'Pediatric Dermatology',
    description: 'Gentle, age-appropriate care for children\'s skin conditions — from common rashes to complex congenital disorders.',
    procedures: [
      'Atopic Dermatitis & Infantile Acne',
      'Birthmarks & Congenital Skin Disorders',
      'Pediatric Infectious Skin Diseases',
      'Age-Appropriate Treatment Protocols',
    ],
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'bg-blue-100 text-blue-800',
    tag: null,
  },
  {
    id: 'geriatric',
    icon: Glasses,
    title: 'Geriatric Dermatology',
    description: 'Specialized care for age-related and systemic skin conditions in older patients.',
    procedures: [
      'Chronic Pruritus & Age-Related Skin Conditions',
      'Immunobullous Disorders (Pemphigus, Bullous Pemphigoid)',
      'Skin Conditions from Diabetes, Hypertension & Other Systemic Diseases',
    ],
    color: 'bg-teal-50 border-teal-200',
    iconColor: 'bg-teal-100 text-teal-800',
    tag: null,
  },
];

function ServiceCard({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`bg-white rounded-3xl border overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ${cat.color}`}
    >
      <div className="p-7">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-2xl ${cat.iconColor}`}>
              <cat.icon className="w-6 h-6" />
            </div>
            {cat.tag && (
              <span className="bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                {cat.tag}
              </span>
            )}
          </div>
        </div>

        <h3 className="text-xl font-serif font-bold text-brand-gold-dark mb-3">{cat.title}</h3>
        <p className="text-brand-text/60 text-sm leading-relaxed mb-5">{cat.description}</p>

        {/* Top 3 always visible */}
        <ul className="space-y-2 mb-4">
          {cat.procedures.slice(0, 3).map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm text-brand-text/70">
              <span className="text-brand-gold mt-1 shrink-0">·</span>
              {p}
            </li>
          ))}
        </ul>

        {/* Expandable rest */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2 mb-4 overflow-hidden"
            >
              {cat.procedures.slice(3).map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-brand-text/70">
                  <span className="text-brand-gold mt-1 shrink-0">·</span>
                  {p}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {cat.procedures.length > 3 && (
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 text-brand-gold-dark text-sm font-bold hover:text-brand-gold transition-colors"
          >
            {open ? 'Show less' : `+${cat.procedures.length - 3} more procedures`}
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>
    </motion.div>
  );
}

const Services = () => {
  return (
    <section id="services" className="section-padding bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold tracking-widest uppercase text-sm"
          >
            Services & Procedures
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-gold-dark mt-4 mb-6"
          >
            Comprehensive Dermatological <br className="hidden md:block" />
            <span className="italic text-brand-gold">Care Under One Roof</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-text/70 max-w-2xl mx-auto text-lg"
          >
            Dr. Kinnera offers medical, dermatosurgical, aesthetic, pediatric, and geriatric dermatology — tailored to each patient's unique needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <ServiceCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-brand-gold-dark rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Not sure which treatment is right for you?
            </h3>
            <p className="text-brand-gold-light/80 max-w-2xl mx-auto mb-8 text-lg">
              Book a consultation and Dr. Kinnera will design a personalized plan based on your skin
              type, condition, and goals.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#25D366] transition-all duration-300 shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Book via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
