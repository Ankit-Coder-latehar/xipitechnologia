import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'WillowWood',
    category: 'Branding & Web Design',
    desc: 'Engineering category-leading visual systems and high-converting portals for a historical medical prosthetics leader.',
    tags: ['Medical Tech', '3D Graphics', 'UX Strategy', 'Next.js'],
    color: '#FFECEC',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '02',
    title: 'Antidote Candle',
    category: 'Packaging & Identity',
    desc: 'Minimalist editorial packaging design and naming conventions establishing a premium luxury sensory brand.',
    tags: ['Luxury Goods', 'Asset Direction', 'Print Layout', 'Logotype'],
    color: '#F3F4F6',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '03',
    title: 'FIFA World Cup 2026',
    category: 'Event Brand System',
    desc: 'Creating custom visual patterns, stadium signages, and promotional campaigns for the landmark global tournament.',
    tags: ['Sporting Event', 'Signage Systems', 'Vector Art', 'Global Reach'],
    color: '#ECF5FC',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '04',
    title: 'NYCFC Etihad Park',
    category: 'Stadium Web Portal',
    desc: 'Designing and building the interactive digital matchday experience for New York City Football Club\'s premium park.',
    tags: ['Web Application', 'Tailwind', 'Realtime Data', 'Interactive Map'],
    color: '#EDECF9',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function PortfolioSlider() {
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

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black hover:text-brand-red transition-colors group"
                  >
                    View Project Case Study
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </a>
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

      </div>
    </section>
  );
}
