import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Users, Microscope, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  { src: '/photo-1.png', label: 'Dr. Kinnera receiving Gold Medal — YSR University of Health Sciences', ready: true, pos: 'object-bottom' },
  { src: '/photo-2.png', label: 'Dr. Kinnera speaking at ACDICON National Conference', ready: true, pos: 'object-top' },
  { src: '/photo-3.png', label: 'Dr. Kinnera presenting at ACDICON conference', ready: true, pos: 'object-center' },
  { src: '/photo-4.png', label: 'Dr. Kinnera with surgical team in the operation theatre', ready: true, pos: 'object-center' },
  { src: '/photo-5.png', label: 'Dr. Kinnera receiving academic award at convocation', ready: true, pos: 'object-top' },
  { src: '/photo-6.png', label: 'Dr. Kinnera performing dermatosurgery', ready: true, pos: 'object-center' },
];
const PER_PAGE = 3;
const slides = [photos.slice(0, PER_PAGE), photos.slice(PER_PAGE)];

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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="section-padding bg-brand-cream">

      <div className="max-w-7xl mx-auto">

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
            Where Academic <span className="italic text-brand-gold">Excellence Meets</span> Procedural Perfection
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
            Fellowship in Dermatosurgery and Hair Transplantation at the Cutis Academy of Cutaneous Sciences in
            Bangalore — widely recognized as one of India's premier centres for skin surgery.
          </p>

          <p className="text-brand-text/70 mb-5 leading-relaxed text-lg">
            Dr. Kinnera combines her rigorous academic background with advanced dermatosurgical expertise to
            provide world-class care in medical dermatology, aesthetic surgery, and hair restoration.
          </p>

          <p className="text-brand-text/70 leading-relaxed text-lg">
            Invited as a speaker at prestigious national and international conferences, she is an active member
            of leading dermatological societies and a committed contributor to the academic community. With a
            strong passion for teaching, she mentors the next generation of dermatologists while consistently
            presenting advancements in clinical and procedural dermatology. Her work reflects a blend of
            scientific rigor, innovation, and dedication to excellence in patient care.
          </p>
        </motion.div>
      </div>

      {/* Photo Carousel — 3 per slide, 2 slides */}
      <div className="max-w-7xl mx-auto mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {slides[current].map((photo, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-brand-gold/10 border-2 border-dashed border-brand-gold/25"
              >
                {photo.ready ? (
                  <>
                    <img
                      src={photo.src}
                      alt={photo.label}
                      className={`w-full h-full object-cover ${photo.pos}`}
                    />
                    {/* Quote on first photo of first slide */}
                    {current === 0 && i === 0 && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-gold-dark/85 to-transparent p-4">
                        <p className="text-white text-xs italic leading-relaxed">
                          "Addressing not just the visible symptom, but the underlying cause."
                        </p>
                        <p className="text-brand-gold-light text-[10px] font-bold mt-1">— Dr. Kinnera Boina</p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-brand-gold-dark/30">
                    <div className="w-12 h-12 rounded-full border-2 border-dashed border-brand-gold/30 flex items-center justify-center mb-2">
                      <span className="text-lg font-bold">{current * PER_PAGE + i + 1}</span>
                    </div>
                    <p className="text-xs font-medium">Photo coming soon</p>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-5">
          <button
            onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
            className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold-dark hover:bg-brand-gold-dark hover:text-white transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-brand-gold-dark' : 'w-2 bg-brand-gold/30'}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((c) => (c + 1) % slides.length)}
            className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold-dark hover:bg-brand-gold-dark hover:text-white transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Highlight cards */}
      <div className="max-w-5xl mx-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
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

      </div>

    </section>
  );
};

export default About;
