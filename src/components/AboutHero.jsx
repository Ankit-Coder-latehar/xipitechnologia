import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const pillars = [
  {
    num: '01 / PILLAR',
    title: 'Digital Strategy',
    desc: 'Building customized marketing strategies around your business goals, audience, and market.',
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    duration: 5,
    floatDir: [0, -18, 0]
  },
  {
    num: '02 / PILLAR',
    title: 'Performance Marketing',
    desc: 'Creating data-driven campaigns focused on qualified leads, conversions, and measurable ROI.',
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    duration: 6,
    floatDir: [0, 18, 0]
  },
  {
    num: '03 / PILLAR',
    title: 'Digital Visibility',
    desc: 'Strengthening your presence through SEO, social media, content, and targeted digital campaigns.',
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    duration: 5.5,
    floatDir: [0, -14, 0]
  },
  {
    num: '04 / PILLAR',
    title: 'Digital Experiences',
    desc: 'Creating user-friendly websites and creative digital assets that turn visitors into customers.',
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
    duration: 4.8,
    floatDir: [0, 14, 0]
  }
];

export default function AboutHero({ onContactClick }) {
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
              ABOUT XI PI TECHNOLOGIA®
            </span>
          </motion.div>

          {/* Staggered Title Reveal */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.95]"
          >
            We Help Businesses <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-brand-red">
              Grow in the Digital World.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl text-base sm:text-xl text-zinc-300 font-medium leading-relaxed pt-2"
          >
            We combine digital marketing, creativity, technology, and data-driven strategies to help businesses build stronger online presence, generate quality leads, and achieve sustainable growth.
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
              <span>LET'S GROW TOGETHER →</span>
            </button>
          </motion.div>
        </div>

        {/* 4 Pillars Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 relative z-10">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ 
                opacity: 1, 
                y: pillar.floatDir 
              }}
              transition={{ 
                opacity: { duration: 0.6, delay: 0.3 + i * 0.1 },
                y: { duration: pillar.duration, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.04, zIndex: 30 }}
              className="relative min-h-[320px] p-6 sm:p-8 rounded-3xl overflow-hidden border border-white/15 shadow-2xl group cursor-pointer bg-zinc-900/90 backdrop-blur-md flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 pointer-events-none" />
              <img 
                src={pillar.url} 
                alt={pillar.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-opacity duration-500 -z-10" 
              />

              <div className="relative z-10 space-y-3">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-brand-red block">
                  {pillar.num}
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                  {pillar.title}
                </h4>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10">
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

