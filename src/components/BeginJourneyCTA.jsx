import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, ArrowRight, CheckCircle2, Sparkles, X, Check } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function BeginJourneyCTA({ onContactClick }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Digital Marketing Mastery'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
    }, 2500);
  };

  return (
    <section className="relative w-full bg-[#FAF9F6] border-t border-neutral-200 py-20 lg:py-28 overflow-hidden select-none">
      
      {/* Background Geometric Diagonal Stripes matching the image */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-30">
        <svg viewBox="0 0 500 500" className="w-full h-full text-neutral-300 fill-current">
          <path d="M250,0 L500,0 L500,500 L400,500 Z" />
          <path d="M150,0 L200,0 L450,500 L400,500 Z" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-1/3 h-full pointer-events-none opacity-20">
        <svg viewBox="0 0 500 500" className="w-full h-full text-neutral-400 fill-current">
          <path d="M0,200 L0,500 L300,500 Z" />
          <path d="M0,100 L0,150 L200,500 L150,500 Z" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Cutout Professional Woman holding tablet */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center lg:justify-start relative"
          >
            {/* Glowing Accent Ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-300/30 via-lime-400/30 to-brand-red/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-sm mx-auto w-full">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Begin Your Digital Marketing Journey"
                className="w-full h-auto object-cover rounded-3xl shadow-2xl border-4 border-white hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Floating Live Indicator Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-2 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-neutral-200 shadow-xl flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-lime-400/20 text-lime-700 flex items-center justify-center font-black">
                  <PhoneCall className="h-5 w-5 animate-bounce" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">TALK TO OUR TEAM</span>
                  <span className="text-xs font-extrabold text-neutral-900">Let's discuss your growth goals.</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Headline, Subheading & Call Action */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Main Headline */}
            <span className="text-sm font-bold text-brand-red uppercase tracking-widest block mb-4">READY TO GROW ONLINE?</span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.08] font-display uppercase">
              BEGIN YOUR DIGITAL <br />
              GROWTH JOURNEY
            </h2>

            {/* Subheading & Call Us Today */}
            <div className="space-y-3 pt-2">
              <p className="text-base sm:text-lg text-neutral-700 max-w-2xl font-normal leading-relaxed">
                Get the right digital marketing strategy to attract more customers, generate qualified leads, and grow your business online with measurable results.
              </p>
              <p className="text-sm font-bold text-neutral-800 pt-2 tracking-wide">
                SEO • Performance Marketing • Meta Ads • Social Media Marketing
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-3 border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-900 font-extrabold px-8 py-4 rounded-full text-base tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-xl hover:scale-105 group"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <a
                href="https://wa.me/918427779193?text=Hello%20Xipitechnologia!%20I'm%20ready%20to%20begin%20my%20digital%20marketing%20journey."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold px-8 py-4 rounded-full text-base tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105"
              >
                <WhatsAppIcon className="h-5 w-5 fill-white" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Interactive Counseling & Call Request Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-lg bg-neutral-900 border border-brand-red/30 rounded-3xl p-6 sm:p-8 text-white shadow-2xl"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="h-14 w-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3 border border-emerald-500/40">
                    <Check className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">We'll Call You Right Away!</h3>
                  <p className="text-xs text-white/70 mt-2">
                    Thank you, <span className="text-white font-bold">{formData.name}</span>! Our career advisor will reach out to <span className="text-brand-red font-bold">{formData.phone}</span> within 15 minutes.
                  </p>
                </div>
              ) : (
                <>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red">FAST CALL-BACK</span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">Begin Your Marketing Journey</h3>
                  <p className="text-xs text-white/70 mt-1">Leave your contact info and our senior advisor will call you today.</p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-white/70 uppercase mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white/70 uppercase mb-1">Phone Number (Required for Call-Back)</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white/70 uppercase mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 rounded-xl text-xs transition-all shadow-lg shadow-brand-red/30 mt-4 uppercase tracking-wider"
                    >
                      Request Immediate Call-Back &rarr;
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
