import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Star, Compass } from 'lucide-react';

const awardsList = [
  {
    year: '2025',
    title: 'Inc. 5000 List',
    category: 'Fastest Growing Agency',
    desc: 'Recognized as one of America\'s fastest-growing private creative marketing agencies by Inc. Magazine.'
  },
  {
    year: '2024',
    title: 'Anthem Awards',
    category: 'Gold - Best Web Portal',
    desc: 'Awarded Gold in the Web Design category for outstanding digital experience on the NYCFC Etihad Park project.'
  },
  {
    year: '2024',
    title: 'Pentawards Gold',
    category: 'Luxury Packaging Design',
    desc: 'Received Gold for our minimalist packaging and typography work on the Antidote Candle luxury package series.'
  },
  {
    year: '2023',
    title: 'Dieline Awards',
    category: 'Best in Brand Identity',
    desc: 'Honored for our comprehensive branding system and logotype creations for emerging consumer retail products.'
  },
  {
    year: '2023',
    title: 'Clutch Top 40',
    category: 'Best NYC Design Agency',
    desc: 'Ranked in the top 40 design agencies in New York City based on client net promoter scores and verified reviews.'
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
                Accolades
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black leading-tight">
                Recognized for design <br />
                excellence.
              </h2>
            </div>
            
            <p className="text-sm text-black/60 leading-relaxed font-normal">
              We focus on delivering high-end experiences that get noticed. Our projects are regularly cataloged in top creative magazines and industry design circles.
            </p>

            {/* Badges row */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-brand-border/60">
              
              <div className="rounded-xl border border-brand-border bg-brand-gray px-4 py-3 flex items-center gap-3">
                <Award className="h-6 w-6 text-brand-red" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black/40">MWBE Certified</span>
                  <span className="text-xs font-bold text-black">New York State</span>
                </div>
              </div>

              <div className="rounded-xl border border-brand-border bg-brand-gray px-4 py-3 flex items-center gap-3">
                <Compass className="h-6 w-6 text-brand-red" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black/40">Clutch Verified</span>
                  <span className="text-xs font-bold text-black">Top 40 Design Agency</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Awards Accordion */}
          <div className="lg:col-span-8 border-t border-brand-border/60">
            {awardsList.map((award, index) => {
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
