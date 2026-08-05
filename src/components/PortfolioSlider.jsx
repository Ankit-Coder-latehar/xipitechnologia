import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'AutoScale AI',
    category: 'AI Marketing Automation',
    desc: 'Deployed multi-agent prospecting engines scaling conversions by 4.2x and automating outbounds for a global B2B SaaS.',
    tags: ['Lead Gen', 'AI Agents', 'Outbound Loop', 'Omnichannel'],
    color: '#FFECEC',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '02',
    title: 'AuraMedia SEO',
    category: 'AI Content Systems',
    desc: 'Constructed dynamic content semantic engines publishing 300+ optimized articles monthly, driving 80k+ organic visitors.',
    tags: ['Semantic SEO', 'Content Scale', 'NLP Optimization', 'Rank Growth'],
    color: '#F3F4F6',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '03',
    title: 'ScaleLoop Performance',
    category: 'Meta Ads & Paid Search',
    desc: 'Engineered intent-driven PPC search structures and Meta ad loops yielding 5.4x ROAS on a $120k/mo ad budget.',
    tags: ['Meta Ads', 'Google PPC', 'Paid Acquisition', 'ROAS Optimization'],
    color: '#ECF5FC',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f311?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '04',
    title: 'ApexCart Storefront',
    category: 'Website Design & Ecommerce',
    desc: 'Built high-speed headless ecommerce layouts reducing cart abandonment by 35% with page speed scores of 100.',
    tags: ['Headless Commerce', 'Web Development', 'Cart Conversion', 'Vitals Tuning'],
    color: '#EDECF9',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function PortfolioSlider({ onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [progress, setProgress] = useState(0);

  // Auto transition slide timer
  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + 1;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id="work" className="py-24 bg-white border-t border-brand-border">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red select-none">
              Featured Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
              Designs that dominate <br />
              the competition.
            </h2>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-4">
            <div className="text-sm font-semibold tracking-wider text-black/40">
              <span className="text-black font-extrabold">{currentProject.id}</span> / 04
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-white text-black hover:border-black hover:bg-brand-gray transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-white text-black hover:border-black hover:bg-brand-gray transition-colors duration-200"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slide Container */}
        <div className="relative overflow-hidden rounded-3xl border border-brand-border aspect-[16/10] md:aspect-[21/10] w-full">
          {/* Progress loader bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-border z-20">
            <div className="h-full bg-brand-red transition-all duration-75" style={{ width: `${progress}%` }} />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 w-full h-full flex flex-col md:flex-row"
              style={{ backgroundColor: currentProject.color }}
            >
              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-between h-1/2 md:h-full">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-black/50">
                    {currentProject.category}
                  </span>
                  
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
                    {currentProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-black/70 leading-relaxed max-w-md font-normal">
                    {currentProject.desc}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Tag List */}
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/60 border border-brand-border px-3 py-1 text-xs font-semibold text-black/80 select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      if (onNavigate) onNavigate('portfolio');
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black hover:text-brand-red transition-colors group cursor-pointer"
                  >
                    View Project Case Study
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden relative">
                <motion.img
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Explore All Projects CTA */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => {
              if (onNavigate) onNavigate('portfolio');
            }}
            className="group flex items-center justify-center gap-2.5 rounded-full bg-black px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-red transition-all duration-300 active:scale-95 shadow-md cursor-pointer"
          >
            <span>Explore All Showcase Projects</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

      </div>
    </section>
  );
}
