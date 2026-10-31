import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Star, Compass } from 'lucide-react';

const expertiseList = [
  {
    year: '01',
    title: 'SEO & Organic Growth',
    category: 'Search Optimization',
    desc: 'Technical SEO, Local SEO, Content & Search Optimization'
  },
  {
    year: '02',
    title: 'Performance Marketing',
    category: 'Campaign Optimization',
    desc: 'Google Ads, PPC, Lead Generation & Campaign Optimization'
  },
  {
    year: '03',
    title: 'Social Media Marketing',
    category: 'Audience Engagement',
    desc: 'Strategy, Content, Creative & Audience Engagement'
  },
  {
    year: '04',
    title: 'Web Development',
    category: 'Conversion-Focused',
    desc: 'Responsive, User-Friendly & Conversion-Focused Websites'
  },
  {
    year: '05',
    title: 'Creative & Branding',
    category: 'Brand Communication',
    desc: 'Graphic Design, Social Creatives & Brand Communication'
  },
  {
    year: '06',
    title: 'AI & Marketing Technology',
    category: 'Smarter Workflows',
    desc: 'AI Tools, Automation & Smarter Marketing Workflows'
  }
];

export default function AwardsAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white border-t border-brand-border">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Certifications / Badges */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red select-none">
                OUR EXPERTISE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black leading-tight">
                Built on Experience. <br />
                Driven by Results.
              </h2>
            </div>
            
            <p className="text-sm text-black/60 leading-relaxed font-normal">
              Our digital marketing experts bring together expertise across SEO, PPC, Meta Ads, social media marketing, web development, content marketing, graphic designing, analytics, and AI-powered marketing technologies.
            </p>

            {/* Badges row */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-brand-border/60">
              <span className="rounded-full border border-brand-border bg-brand-gray px-3 py-1.5 text-[10px] font-bold tracking-wider text-black/70">
                DATA-DRIVEN STRATEGIES
              </span>
              <span className="rounded-full border border-brand-border bg-brand-gray px-3 py-1.5 text-[10px] font-bold tracking-wider text-black/70">
                RESULTS-FOCUSED MARKETING
              </span>
              <span className="rounded-full border border-brand-border bg-brand-gray px-3 py-1.5 text-[10px] font-bold tracking-wider text-black/70">
                CONTINUOUS OPTIMIZATION
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Awards Accordion */}
          <div className="lg:col-span-8 border-t border-brand-border/60">
            {expertiseList.map((award, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border-b border-brand-border/60">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center py-6 text-left group"
                  >
                    <span className="w-16 text-sm font-extrabold text-black/40 select-none">
                      {award.year}
                    </span>
                    
                    <div className="flex-grow flex flex-col sm:flex-row sm:items-center justify-between gap-2 pr-4">
                      <span className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-200 ${
                        isOpen ? 'text-brand-red' : 'text-black group-hover:text-brand-red'
                      }`}>
                        {award.title}
                      </span>
                      <span className="text-xs font-semibold text-black/50 uppercase tracking-wider">
                        {award.category}
                      </span>
                    </div>

                    <div className="relative w-4 h-4 flex items-center justify-center">
                      <span className={`absolute w-3 h-[2px] bg-black transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      <span className={`absolute h-3 w-[2px] bg-black transition-transform duration-300 ${isOpen ? 'rotate-90 scale-0' : ''}`} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pl-16 pb-6 pr-4 text-xs sm:text-sm text-black/60 leading-relaxed max-w-2xl font-normal">
                          {award.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
