import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const serviceTags = [
  'Web Design',
  'Brand Strategy',
  'Packaging Design',
  'Graphic Design',
  'Video Production',
  'Marketing Scaling'
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [selectedTags, setSelectedTags] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) => 
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSelectedTags([]);
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF9F6] border-t border-brand-border scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red select-none">
            Get in touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
            Let's start a project together.
          </h2>
          <p className="text-sm sm:text-base text-black/50 leading-relaxed font-normal">
            Have an idea or need an agency to execute? Fill out the details below and we will get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-white border border-brand-border rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
          
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Interest Checkboxes */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-black/40">
                  What are you looking to build? *
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceTags.map((tag) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleTagToggle(tag)}
                        className={`rounded-full border px-4 py-2 text-xs font-bold transition-all duration-200 select-none ${
                          isSelected
                            ? 'bg-brand-red border-brand-red text-white shadow-sm shadow-brand-red/10'
                            : 'bg-brand-gray border-brand-border text-black/70 hover:border-black/30'
                        }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Text Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-black/40">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-brand-border bg-brand-gray px-4 py-3 text-sm text-black placeholder-black/30 outline-none transition-all focus:border-brand-red/60 focus:bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-black/40">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-brand-border bg-brand-gray px-4 py-3 text-sm text-black placeholder-black/30 outline-none transition-all focus:border-brand-red/60 focus:bg-white"
                  />
                </div>

              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-black/40">
                  Project Details *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your brand, requirements, and target timeline..."
                  className="w-full rounded-xl border border-brand-border bg-brand-gray px-4 py-3 text-sm text-black placeholder-black/30 outline-none transition-all focus:border-brand-red/60 focus:bg-white resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-black hover:bg-brand-red px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition-colors duration-300 disabled:opacity-50 active:scale-95"
              >
                {isSubmitting ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    Send Request
                    <ArrowRight className="h-4 w-4" />
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
                Project Details Submitted!
              </h3>
              <p className="text-black/50 text-sm max-w-md mb-8 leading-relaxed font-normal">
                Thank you, <span className="font-bold text-black">{formData.name}</span>. We have cataloged your interest in <span className="font-semibold text-black">{selectedTags.join(', ') || 'our creative services'}</span>. A partner will contact you at <span className="font-bold text-black">{formData.email}</span> shortly.
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
    </section>
  );
}
