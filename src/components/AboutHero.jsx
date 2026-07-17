import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, Star } from 'lucide-react';

export default function AboutHero() {
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

  const line1 = "We construct digital";
  const line2 = "experiences that";
  const line3 = "command attention.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const wordRevealVariants = {
    hidden: { y: '100%' },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section className="relative min-h-[75vh] bg-white flex flex-col justify-center items-center overflow-hidden pt-36 pb-16 border-b border-brand-border">
      
      {/* 1. COORDINATE BACKGROUND GRID AND ORBS */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E4E4E6 1px, transparent 1px),
            linear-gradient(to bottom, #E4E4E6 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
        }}
      />

      <motion.div
        className="absolute top-1/4 left-10 w-[300px] h-[300px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(227,38,38,0.04) 0%, transparent 70%)',
          x: mousePos.x * -0.8,
          y: mousePos.y * -0.8
        }}
      />

      {/* Floating letters */}
      <motion.div 
        className="absolute right-[12%] top-[15%] text-[120px] font-display font-black text-black/5 select-none pointer-events-none"
        style={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
      >
        STUDIO
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Awwwards Split Text Headlines */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 flex flex-col space-y-6 text-left"
          >
            {/* Pill badges row */}
            <motion.div variants={fadeInVariants} className="flex flex-wrap items-center gap-2 select-none">
              <span className="rounded-full border border-brand-border bg-brand-gray px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-black flex items-center gap-2">
                <Trophy className="h-3.5 w-3.5 text-brand-red" />
                Awwwards Agency of the Year nominee
              </span>
              <span className="rounded-full border border-brand-border bg-brand-gray px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-black select-none">
                Est. 2015
              </span>
            </motion.div>

            {/* Headline with clip-path mask reveals */}
            <div className="space-y-1 sm:space-y-2 select-none">
              
              <div className="overflow-hidden h-12 sm:h-20 flex items-center">
                <motion.h1 
                  variants={wordRevealVariants}
                  className="text-4xl sm:text-7xl font-extrabold tracking-tight text-black leading-none"
                >
                  {line1}
                </motion.h1>
              </div>

              <div className="overflow-hidden h-12 sm:h-20 flex items-center">
                <motion.h1 
                  variants={wordRevealVariants}
                  className="text-4xl sm:text-7xl font-extrabold tracking-tight text-black leading-none"
                >
                  {line2}
                </motion.h1>
              </div>

              <div className="overflow-hidden h-12 sm:h-20 flex items-center">
                <motion.h1 
                  variants={wordRevealVariants}
                  className="text-4xl sm:text-7xl font-extrabold tracking-tight leading-none"
                >
                  <span className="font-serif font-normal italic text-brand-red">{line3}</span>
                </motion.h1>
              </div>

            </div>

            {/* Description Copy */}
            <motion.p
              variants={fadeInVariants}
              className="max-w-2xl text-base sm:text-lg text-black/60 leading-relaxed font-normal pt-2"
            >
              We are visual engineers, brand architects, and SEO researchers. We believe that award-winning products are not designed by accident—they are structured, coded, and fine-tuned to capture category dominance.
            </motion.p>
          </motion.div>

          {/* Right Column: Rotating circular badge and glowing cards */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
            
            {/* 2. SPINNING CIRCULAR STAMP BADGE */}
            <div className="relative h-48 w-48 flex items-center justify-center group select-none">
              
              {/* Rotating circular SVG text path */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 w-full h-full"
              >
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path 
                    id="circlePath" 
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" 
                    fill="none" 
                  />
                  <text font-size="7.5" font-weight="900" fill="#000000" letter-spacing="1.2">
                    <textPath href="#circlePath">
                      • XIPITECHNOLIA CREATIVE AGENCY • AWARD WINNING DESIGN
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Pulsing center red core */}
              <div className="relative h-14 w-14 rounded-full border border-brand-border bg-brand-gray flex items-center justify-center shadow-md group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                <Sparkles className="h-5 w-5 text-brand-red group-hover:text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>

            {/* Mini metrics stamp */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 bg-brand-gray border border-brand-border rounded-2xl px-4.5 py-2.5 flex items-center gap-2.5 shadow-sm"
            >
              <div className="flex gap-0.5 text-brand-red">
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-black">
                Top 1% Design
              </span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
