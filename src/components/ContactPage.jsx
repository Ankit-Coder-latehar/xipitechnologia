import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Clock, CheckCircle2 } from 'lucide-react';

const projectBudgets = [
  '$10k – $25k',
  '$25k – $50k',
  '$50k – $100k',
  '$100k+'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [selectedBudget, setSelectedBudget] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse Parallax listener for the map graphic
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) / 40,
        y: (e.clientY - window.innerHeight / 2) / 40
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1300);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', company: '', message: '' });
    setSelectedBudget('');
    setIsSuccess(false);
  };

  return (
    <section className="relative min-h-screen bg-white pt-36 pb-24 overflow-hidden">
      
      {/* Background coordinate grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E4E4E6 1px, transparent 1px),
            linear-gradient(to bottom, #E4E4E6 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 85%)'
        }}
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        
        {/* Entrance Headers */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
            Connect With Us
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-black leading-[1.08]">
            Let's build something <br />
            exceptional.
          </h1>
          <p className="text-black/50 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
            Whether you want to discuss a new project scope or audit your current stack, our partners are ready to align.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: Luxury Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-brand-border rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
              
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Inputs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    
                    <div className="relative group">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-brand-border focus:border-brand-red py-3 text-sm text-black placeholder-black/30 outline-none transition-colors"
                        placeholder="Your Name *"
                      />
                    </div>

                    <div className="relative group">
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-brand-border focus:border-brand-red py-3 text-sm text-black placeholder-black/30 outline-none transition-colors"
                        placeholder="Email Address *"
                      />
                    </div>

                  </div>

                  <div className="relative group">
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-brand-border focus:border-brand-red py-3 text-sm text-black placeholder-black/30 outline-none transition-colors"
                      placeholder="Company Name (Optional)"
                    />
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-3">
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-black/40">
                      Approximate Project Budget *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectBudgets.map((budget) => {
                        const isSelected = selectedBudget === budget;
                        return (
                          <button
                            key={budget}
                            type="button"
                            onClick={() => setSelectedBudget(budget)}
                            className={`rounded-full border px-4 py-2.5 text-xs font-bold transition-all duration-200 select-none ${
                              isSelected
                                ? 'bg-brand-red border-brand-red text-white shadow-sm shadow-brand-red/10'
                                : 'bg-brand-gray border-brand-border text-black/70 hover:border-black/35'
                            }`}
                          >
                            {budget}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="relative group">
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-brand-border focus:border-brand-red py-3 text-sm text-black placeholder-black/30 outline-none transition-colors resize-none"
                      placeholder="Tell us about your requirements, roadmap, and timeline *"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-black hover:bg-brand-red py-4 text-xs font-bold uppercase tracking-wider text-white transition-colors duration-300 disabled:opacity-50 active:scale-95 shadow-sm hover:shadow-md"
                  >
                    {isSubmitting ? (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        Submit RFP Project Details
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>

                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center justify-center"
                >
                  <div className="h-16 w-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-500 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-black tracking-tight mb-2">
                    Request Received!
                  </h3>
                  <p className="text-black/50 text-sm max-w-md mb-8 leading-relaxed font-normal">
                    Thank you, <span className="font-bold text-black">{formData.name}</span>. We have logged your request. A managing partner will contact you at <span className="font-bold text-black">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="rounded-full border border-brand-border px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black hover:border-black transition-colors duration-200 active:scale-95"
                  >
                    Submit another request
                  </button>
                </motion.div>
              )}

            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Vector Map & Addresses */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Custom SVG Radar Map */}
            <div className="relative rounded-3xl border border-brand-border bg-brand-gray p-4 overflow-hidden h-[300px] w-full shadow-sm group">
              <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm border border-brand-border px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-black shadow-sm select-none">
                Varick St Studio Grid / Manhattan
              </div>

              {/* Vector streets map container */}
              <motion.div
                className="absolute inset-0 w-full h-full p-8"
                style={{
                  x: mousePos.x * 0.4,
                  y: mousePos.y * 0.4
                }}
              >
                <svg className="w-full h-full opacity-40" viewBox="0 0 200 200">
                  {/* Manhattan Grid Streets */}
                  <line x1="20" y1="0" x2="20" y2="200" stroke="#000000" strokeWidth="1" />
                  <line x1="60" y1="0" x2="60" y2="200" stroke="#000000" strokeWidth="1.5" /> {/* Varick St */}
                  <line x1="100" y1="0" x2="100" y2="200" stroke="#000000" strokeWidth="1" />
                  <line x1="140" y1="0" x2="140" y2="200" stroke="#000000" strokeWidth="1" />
                  <line x1="180" y1="0" x2="180" y2="200" stroke="#000000" strokeWidth="1" />

                  <line x1="0" y1="30" x2="200" y2="30" stroke="#000000" strokeWidth="1" />
                  <line x1="0" y1="70" x2="200" y2="70" stroke="#000000" strokeWidth="1.5" /> {/* Charlton St */}
                  <line x1="0" y1="110" x2="200" y2="110" stroke="#000000" strokeWidth="1" />
                  <line x1="0" y1="150" x2="200" y2="150" stroke="#000000" strokeWidth="1" />

                  {/* Street Names */}
                  <text x="64" y="20" font-size="6" font-weight="bold" fill="#000" transform="rotate(90, 64, 20)">VARICK ST</text>
                  <text x="10" y="68" font-size="6" font-weight="bold" fill="#000">CHARLTON ST</text>
                  <text x="10" y="108" font-size="6" font-weight="bold" fill="#000">KING ST</text>
                  <text x="144" y="20" font-size="5" font-weight="bold" fill="#A0A0A0" transform="rotate(90, 144, 20)">HUDSON ST</text>
                </svg>

                {/* Radar target pin */}
                {/* Radar echo ring */}
                <div className="absolute top-[37%] left-[30%] -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full border-2 border-brand-red animate-ping opacity-60" />
                {/* Core dot */}
                <div className="absolute top-[37%] left-[30%] -translate-x-1/2 -translate-y-1/2 h-4.5 w-4.5 rounded-full border-2 border-white bg-brand-red shadow-md flex items-center justify-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>
              </motion.div>

              {/* Map Footer coordinates indicator */}
              <div className="absolute bottom-4 right-4 text-[9px] font-bold text-black/50 select-none">
                40.7276° N, 74.0062° W
              </div>
            </div>

            {/* Address & Hours details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-brand-red">
                  <MapPin className="h-4 w-4" />
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-black/40">Varick Studio</span>
                </div>
                <p className="text-sm font-semibold text-black leading-relaxed">
                  160 Varick Street, 5th Floor<br />
                  New York, NY 10013
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-brand-red">
                  <Clock className="h-4 w-4" />
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-black/40">Studio Hours</span>
                </div>
                <p className="text-sm font-semibold text-black leading-relaxed">
                  Monday – Friday<br />
                  9:00 AM – 6:00 PM EST
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-brand-red">
                  <Mail className="h-4 w-4" />
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-black/40">General Inquiries</span>
                </div>
                <p className="text-sm font-semibold text-black leading-relaxed">
                  hello@xipitechnolia.com<br />
                  partners@xipitechnolia.com
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-brand-red">
                  <Phone className="h-4 w-4" />
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-black/40">Studio Call Line</span>
                </div>
                <p className="text-sm font-semibold text-black leading-relaxed">
                  +1 212.380.1761<br />
                  Press: ext 402
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
