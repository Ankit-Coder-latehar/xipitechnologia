import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    title: 'Brand Systems',
    tag: 'STRATEGY & IDENTITY'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    title: 'Web Experiences',
    tag: 'REACT & FRAMER MOTION'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1541462608141-2f5287b4e665?auto=format&fit=crop&q=80&w=800',
    title: 'Luxury Packaging',
    tag: 'PRINT & 3D GRAPHICS'
  }
];

export default function HeroSection({ onContactClick, onViewWorkClick }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse Parallax listener
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) / 35,
        y: (e.clientY - window.innerHeight / 2) / 35
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Slideshow automatic rotation timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 25, stiffness: 120 }
    }
  };

  return (
    <section className="relative min-h-[92vh] bg-white flex flex-col justify-center items-center overflow-hidden pt-28 pb-16">
      
      {/* 1. FINE GRAPHICS AND GRID BACKGROUND SYSTEM */}
      {/* Structural Grid lines overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E4E4E6 1px, transparent 1px),
            linear-gradient(to bottom, #E4E4E6 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
        }}
      />

      {/* Floating glowing graphics circles with parallax drift */}
      <motion.div
        className="absolute top-[15%] left-[10%] w-[350px] h-[350px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(227,38,38,0.06) 0%, transparent 70%)',
          x: mousePos.x * -1.2,
          y: mousePos.y * -1.2
        }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0,0,0,0.04) 0%, transparent 70%)',
          x: mousePos.x * 0.8,
          y: mousePos.y * 0.8
        }}
      />

      {/* Abstract vector coordinate lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-30">
        <motion.path
          d="M -100 200 C 300 150, 400 450, 1200 400"
          fill="none"
          stroke="#E4E4E6"
          strokeWidth="1.5"
          style={{
            x: mousePos.x * 0.4,
            y: mousePos.y * 0.4
          }}
        />
        <motion.path
          d="M 200 800 C 600 650, 800 250, 1600 300"
          fill="none"
          stroke="#E4E4E6"
          strokeWidth="1"
          style={{
            x: mousePos.x * -0.3,
            y: mousePos.y * -0.3
          }}
        />
      </svg>

      <div className="mx-auto max-w-none px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Heading Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-8 text-left"
          >
            {/* Minimal pill badge list */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-brand-border bg-brand-gray px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-black flex items-center gap-2 select-none">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-red"></span>
                </span>
                🚀 Performance Marketing Agency | SEO | Web Development
              </span>
            </motion.div>

            {/* Typography */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.05] text-black"
            >
              Transform Clicks Into <br />
              <span className="text-brand-red">Business Growth.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-base sm:text-lg text-black/70 leading-relaxed font-normal"
            >
              <strong className="font-semibold text-black block mb-1">Performance Marketing That Delivers Results.</strong>
              We help startups, SMEs, and enterprises attract the right audience, generate quality leads, and scale faster with data-driven digital marketing.
            </motion.p>

            {/* CTA Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onContactClick}
                className="group relative flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-red transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg hover:shadow-brand-red/10 cursor-pointer"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (onViewWorkClick) {
                    onViewWorkClick();
                  } else {
                    const workSection = document.getElementById('work');
                    if (workSection) {
                      workSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="group flex items-center justify-center gap-2 rounded-full border border-brand-border bg-white px-7 py-4 text-xs font-bold uppercase tracking-wider text-black hover:border-black hover:bg-black hover:text-white transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>View Our Services</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </motion.div>
          </motion.div>

          {/* 2. RIGHT COLUMN: PREMIUM HIGH-FIDELITY SLIDESHOW */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end relative w-full h-[400px] sm:h-[500px] md:h-[540px] lg:h-[600px]">
            
            <div className="relative w-full max-w-[360px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[560px]">
              {/* Structural backdrop framing line */}
              <div className="absolute -inset-4 rounded-[28px] border border-dashed border-brand-border pointer-events-none -z-10" />

              <div className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] lg:h-[540px] xl:h-[560px] rounded-3xl border border-brand-border bg-brand-gray p-5 flex flex-col justify-between shadow-lg overflow-hidden group">
                
                {/* Slideshow image container */}
                <div className="relative w-full h-[65%] rounded-2xl overflow-hidden bg-zinc-150">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={slideIndex}
                      initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', opacity: 0.8 }}
                      animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 }}
                      exit={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)', opacity: 0.8 }}
                      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <img 
                        src={slides[slideIndex].image} 
                        alt={slides[slideIndex].title} 
                        className="w-full h-full object-cover"
                      />
                      {/* Shadow overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      
                      {/* Floating slide overlay tag */}
                      <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm border border-brand-border px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-black">
                        {slides[slideIndex].tag}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Text / Index Footer zone */}
                <div className="flex flex-col justify-between pt-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red block">
                      RESULTS THAT MATTER
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-black/80 leading-snug">
                      Helping businesses grow with strategic SEO, Performance Marketing, Meta Ads, PPC, and Web Development.
                    </p>
                  </div>

                  {/* Slides selector dots */}
                  <div className="flex items-center justify-between pt-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-black/40">
                      0{slideIndex + 1} / 0{slides.length}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {slides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSlideIndex(idx)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            slideIndex === idx ? 'w-5 bg-brand-red' : 'w-2 bg-black/20 hover:bg-black/40'
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
