import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Award } from 'lucide-react';

const heroImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    title: 'Brand Strategy',
    floatDir: [0, -18, 0],
    duration: 5
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    title: 'Creative Direction',
    floatDir: [0, 18, 0],
    duration: 6
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    title: 'Performance Marketing',
    floatDir: [0, -14, 0],
    duration: 5.5
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
    title: 'Digital Experience',
    floatDir: [0, 14, 0],
    duration: 4.8
  }
];

export default function AboutHero({ onContactClick }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) / 30,
        y: (e.clientY - window.innerHeight / 2) / 30
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-[#101010] text-white pt-32 pb-20 overflow-hidden select-none">
      
      {/* Background ambient lighting */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-brand-red/20 via-sky-500/10 to-transparent rounded-full blur-[180px] pointer-events-none" 
      />

      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 relative z-20">
        
        {/* Main Hero Header Stack */}
        <div className="space-y-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-red animate-pulse" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-white/90">
              ABOUT XIPITECHNOLOGIA®
            </span>
          </motion.div>

          {/* Staggered Title Reveal */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.95]"
          >
            We help brands to connect with <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-brand-red">
              new generations.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl text-base sm:text-xl text-zinc-400 font-medium leading-relaxed pt-2"
          >
            Ambitious brands lead with clarity, earn trust through authenticity, and connect with the people who matter most.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4"
          >
            <button
              onClick={onContactClick}
              className="group relative inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-8 py-4 rounded-2xl text-xs uppercase tracking-wider shadow-xl shadow-brand-red/25 transition-all hover:scale-105"
            >
              <span>Start a Project</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* 4 Floating Parallax Image Cards Grid (Prixa style) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 relative z-10">
          {heroImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ 
                opacity: 1, 
                y: img.floatDir 
              }}
              transition={{ 
                opacity: { duration: 0.6, delay: 0.3 + i * 0.1 },
                y: { duration: img.duration, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.05, zIndex: 30 }}
              className="relative h-[240px] sm:h-[320px] lg:h-[400px] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl group cursor-pointer bg-zinc-900"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-red block mb-1">
                  0{i + 1} / PILLAR
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                  {img.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
