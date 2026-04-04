import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-gold-dark mb-8 leading-tight">
              Visit Our <span className="italic text-brand-gold">Vizag</span> Clinic
            </h2>
            <p className="text-lg text-brand-text/70 mb-12 leading-relaxed">
              We are located in the heart of Visakhapatnam, providing a serene and professional environment for your dermatological needs.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-white p-4 rounded-2xl shrink-0 shadow-sm border border-brand-gold/10">
                  <MapPin className="w-6 h-6 text-brand-gold-dark" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-gold-dark mb-1">Our Location</h4>
                  <p className="text-brand-text/60">123 Health Avenue, MVP Colony, Visakhapatnam, Andhra Pradesh 530017</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-white p-4 rounded-2xl shrink-0 shadow-sm border border-brand-gold/10">
                  <Phone className="w-6 h-6 text-brand-gold-dark" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-gold-dark mb-1">Phone Number</h4>
                  <p className="text-brand-text/60">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-white p-4 rounded-2xl shrink-0 shadow-sm border border-brand-gold/10">
                  <Mail className="w-6 h-6 text-brand-gold-dark" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-gold-dark mb-1">Email Address</h4>
                  <p className="text-brand-text/60">contact@drbkinnera.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-white p-4 rounded-2xl shrink-0 shadow-sm border border-brand-gold/10">
                  <Clock className="w-6 h-6 text-brand-gold-dark" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-gold-dark mb-1">Working Hours</h4>
                  <p className="text-brand-text/60">Mon - Sat: 10:00 AM - 07:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-gold-dark border border-brand-gold/10 hover:bg-brand-gold-dark hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-gold-dark border border-brand-gold/10 hover:bg-brand-gold-dark hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-gold-dark border border-brand-gold/10 hover:bg-brand-gold-dark hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-gold-dark border border-brand-gold/10 hover:bg-brand-gold-dark hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-brand-gold/10 shadow-xl">
            <h3 className="text-2xl font-serif font-bold text-brand-gold-dark mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-text/70 uppercase tracking-wider">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-xl border border-brand-gold/10 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 bg-brand-cream/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-text/70 uppercase tracking-wider">Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" className="w-full px-6 py-4 rounded-xl border border-brand-gold/10 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 bg-brand-cream/30" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-text/70 uppercase tracking-wider">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-xl border border-brand-gold/10 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 bg-brand-cream/30" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-text/70 uppercase tracking-wider">Select Service</label>
                <select className="w-full px-6 py-4 rounded-xl border border-brand-gold/10 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 bg-brand-cream/30">
                  <option>Medical Dermatology</option>
                  <option>Cosmetic Procedures</option>
                  <option>Dermatological Surgery</option>
                  <option>Other Consultation</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-text/70 uppercase tracking-wider">Your Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full px-6 py-4 rounded-xl border border-brand-gold/10 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 bg-brand-cream/30"></textarea>
              </div>
              <button className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3">
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
