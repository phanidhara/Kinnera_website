import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';

const WHATSAPP = 'https://wa.me/917981337366?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Dr.%20Kinnera';

const steps = [
  { num: '1', text: 'Send a WhatsApp message with your name and concern' },
  { num: '2', text: 'The clinic team will confirm your appointment slot' },
  { num: '3', text: 'Visit hospital at your scheduled time' },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold-light/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold tracking-widest uppercase text-sm"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-gold-dark mt-4 mb-4"
          >
            Book Your <span className="italic text-brand-gold">Consultation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-text/60 text-lg max-w-xl mx-auto"
          >
            The fastest way to reach Dr. Kinnera's clinic is via WhatsApp or phone.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* How to book */}
            <div className="bg-brand-cream rounded-3xl p-8 border border-brand-gold/10 mb-8">
              <h3 className="text-xl font-bold text-brand-gold-dark mb-6">How to Book</h3>
              <div className="space-y-4">
                {steps.map((s) => (
                  <div key={s.num} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-gold-dark text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {s.num}
                    </div>
                    <p className="text-brand-text/70 text-sm leading-relaxed pt-1">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-5 mb-8">
              <div className="flex gap-5 items-start">
                <div className="bg-brand-gold-light p-3 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5 text-brand-gold-dark" />
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-brand-gold-dark">Consultation Locations</h4>
                  <div>
                    <p className="text-brand-gold-dark font-semibold text-sm">Apollo Hospitals</p>
                    <p className="text-brand-text/60 text-sm">Ramnagar, Visakhapatnam, Andhra Pradesh</p>
                    <a href="https://maps.google.com/?q=Apollo+Hospitals+Ramnagar+Visakhapatnam" target="_blank" rel="noopener noreferrer" className="text-xs text-brand-gold-dark font-bold underline underline-offset-2 hover:text-brand-gold transition-colors">
                      Open in Google Maps →
                    </a>
                  </div>
                  <div>
                    <p className="text-brand-gold-dark font-semibold text-sm">Sujatha Hospital</p>
                    <p className="text-brand-text/60 text-sm">6-60-8/9, Opp. SBT Hotel, Sramika Nagar,<br />Chaitanya Nagar, Gajuwaka, Andhra Pradesh 530026</p>
                    <a href="https://maps.google.com/?q=Sujatha+Hospital+Gajuwaka+Visakhapatnam" target="_blank" rel="noopener noreferrer" className="text-xs text-brand-gold-dark font-bold underline underline-offset-2 hover:text-brand-gold transition-colors">
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="bg-brand-gold-light p-3 rounded-xl shrink-0">
                  <Phone className="w-5 h-5 text-brand-gold-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-gold-dark mb-1">Phone / WhatsApp</h4>
                  <a href="tel:+917981337366" className="text-brand-text/60 text-sm hover:text-brand-gold-dark transition-colors">
                    +91 79813 37366
                  </a>
                </div>
              </div>

            </div>

            {/* Social */}
            <div className="flex gap-3">
              <a href="https://www.instagram.com/theandhra_dermatologist?igsh=MXhvOHN6bHp0Y2po" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-brand-cream rounded-full flex items-center justify-center text-brand-gold-dark border border-brand-gold/15 hover:bg-brand-gold-dark hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-brand-cream rounded-full flex items-center justify-center text-brand-gold-dark border border-brand-gold/15 hover:bg-brand-gold-dark hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@theandhra_dermatologist" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-brand-cream rounded-full flex items-center justify-center text-brand-gold-dark border border-brand-gold/15 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right — WhatsApp CTA + Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-full"
          >
            {/* WhatsApp card */}
            <div className="bg-brand-gold-dark rounded-3xl p-10 text-center relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/15 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-5">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                  Message on WhatsApp
                </h3>
                <p className="text-brand-gold-light/70 text-sm mb-7 leading-relaxed">
                  Send a WhatsApp message and the clinic team will get back to you to confirm your appointment.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white hover:text-[#25D366] transition-all duration-300 shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat with Us
                </a>
                <p className="text-brand-gold-light/40 text-xs mt-4">+91 79813 37366</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
