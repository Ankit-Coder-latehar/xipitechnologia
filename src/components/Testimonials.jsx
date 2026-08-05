import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquare, Quote, ArrowLeft, ArrowRight, TrendingUp } from 'lucide-react';

const testimonialsList = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'VP Growth & Marketing',
    company: 'FinSphere',
    metric: '+310% Search Volume',
    rating: 5,
    quote: 'Xipitechnologia completely reconstructed our acquisition model. Their AI Content System publishes semantic rank-optimized articles that scaled our organic traffic from zero to 80k within 4 months.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 2,
    name: 'David Kross',
    role: 'Founder & CEO',
    company: 'VeloSaaS',
    metric: '4.2x Lead Conversions',
    rating: 5,
    quote: 'The AI Marketing Automation pipelines are mathematical masterpieces. We scaled our outbound prospecting loops while keeping brand compliance guardrails fully locked. Zero legal risks, massive ROAS.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Director of Performance',
    company: 'LuxCart Ecom',
    metric: '5.4x Meta ROAS',
    rating: 5,
    quote: 'We spent years trying different agencies to optimize our Meta ads. Xipitechnologia engineered custom landing interfaces and PPC intent funnels that instantly scaled our ROAS to 5.4x.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 4,
    name: 'Marcus Vance',
    role: 'Chief Operations Officer',
    company: 'LogisTech Corp',
    metric: '180 Hours Saved / Mo',
    rating: 5,
    quote: 'Integrating their automated copy dispatch system saved our marketing specialists hundreds of hours of manual labor. Our velocity speed is 12x faster, with no drop in message quality.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 5,
    name: 'Tariq Al-Fayed',
    role: 'VP Headless Engineering',
    company: 'ApexCart Group',
    metric: 'Page Speed 100 / 100',
    rating: 5,
    quote: 'Xipitechnologia built our headless ecommerce storefront with flawless Core Web Vitals optimizations. Cart abandonment decreased by 35% because the portal loads in under 400ms.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 6,
    name: 'Clara Oswald',
    role: 'Brand Manager',
    company: 'Chronos Apparel',
    metric: '98% Keyword Gaps Solved',
    rating: 5,
    quote: 'Their semantic targeting guardrails solved our keyword gap issues. The AI models capture search volume patterns that standard marketing teams miss completely.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

export default function Testimonials() {
  const [activePage, setActivePage] = useState(0); // 0 or 1 for desktop page slide
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  // Auto-slide effect every 3 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActivePage((prev) => (prev === 1 ? 0 : 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrev = () => {
    setActivePage((prev) => (prev === 0 ? 1 : 0));
  };

  const handleNext = () => {
    setActivePage((prev) => (prev === 1 ? 0 : 1));
  };

  // Divide testimonials into 2 pages (3 cards each for desktop)
  const page1 = testimonialsList.slice(0, 3);
  const page2 = testimonialsList.slice(3, 6);
  const currentVisibleCards = activePage === 0 ? page1 : page2;

  return (
    <section 
      id="testimonials" 
      className="py-28 bg-white border-t border-brand-border select-none scroll-mt-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              Partner Feedback
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
              Endorsed by high-growth <br />
              enterprises worldwide.
            </h2>
          </div>

          {/* Manual controls */}
          <div className="flex items-center gap-4">
            <div className="text-sm font-semibold tracking-wider text-black/40">
              <span className="text-black font-extrabold">{activePage + 1}</span> / 2 Pages
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-white text-black hover:border-black hover:bg-brand-gray transition-colors duration-200 cursor-pointer"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-white text-black hover:border-black hover:bg-brand-gray transition-colors duration-200 cursor-pointer"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slide Container */}
        <div ref={containerRef} className="relative min-h-[380px] overflow-hidden py-2 px-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, x: activePage === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activePage === 0 ? 100 : -100 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentVisibleCards.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white border border-brand-border rounded-3xl p-8 flex flex-col justify-between h-[360px] hover:shadow-xl hover:border-brand-red/30 transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Glowing top line decorator */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  {/* Header info - avatar + rating */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="h-12 w-12 rounded-full border border-brand-border"
                        />
                        <div>
                          <h4 className="text-sm font-extrabold text-black tracking-tight">{item.name}</h4>
                          <span className="text-[10px] font-semibold text-black/40">{item.role} • {item.company}</span>
                        </div>
                      </div>
                      
                      {/* Performance Metric Badge */}
                      <span className="flex items-center gap-0.5 text-[9px] font-black text-brand-red bg-brand-red/5 border border-brand-red/15 px-2.5 py-1 rounded-full shadow-sm">
                        <TrendingUp className="h-3 w-3" /> {item.metric}
                      </span>
                    </div>

                    {/* Rating stars */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: item.rating }).map((_, rIdx) => (
                        <Star key={rIdx} className="h-3.5 w-3.5 fill-brand-red text-brand-red" />
                      ))}
                    </div>
                  </div>

                  {/* Quote content */}
                  <div className="flex-grow flex items-center py-4 relative">
                    <Quote className="absolute -top-1 -left-2 h-8 w-8 text-brand-red/5" />
                    <p className="text-xs sm:text-sm text-black/60 leading-relaxed font-normal italic relative z-10">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Message bubble icon indicator */}
                  <div className="flex justify-between items-center text-[10px] font-bold text-black/40 uppercase tracking-widest pt-4 border-t border-brand-border/60">
                    <span>Verified Audit</span>
                    <MessageSquare className="h-3.5 w-3.5 text-black/20 group-hover:text-brand-red transition-colors" />
                  </div>

                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bullet Progress Tracker Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8 select-none">
          {[0, 1].map((pageIdx) => (
            <button
              key={pageIdx}
              onClick={() => handlePillarClick(pageIdx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activePage === pageIdx 
                  ? 'bg-brand-red w-8' 
                  : 'bg-zinc-200 hover:bg-zinc-300 w-2.5'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
