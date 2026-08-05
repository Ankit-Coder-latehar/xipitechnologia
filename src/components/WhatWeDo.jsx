import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Search, Megaphone, Globe, TrendingUp, Sparkles, Heart, Share2, Compass, Cpu } from 'lucide-react';

// Custom Mouse Spotlight Wrapper
const ServiceCard = ({ children, className = '' }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative p-[1px] rounded-3xl overflow-hidden bg-brand-gray border border-brand-border hover:border-brand-red/30 transition-all duration-500 hover:shadow-xl flex flex-col h-[480px] ${className}`}
    >
      {/* Dynamic Cursor Spotlight Radial Background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, rgba(227, 38, 38, 0.05), transparent 80%)`
        }}
      />
      {/* Inner Card container */}
      <div className="relative rounded-[23px] bg-white p-8 h-full flex flex-col justify-between overflow-hidden z-10">
        {children}
      </div>
    </div>
  );
};

export default function WhatWeDo() {
  const [activeHeartCount, setActiveHeartCount] = useState(0);

  // Floating heart trigger for Social Media card
  const handleSocialCardHover = () => {
    setActiveHeartCount((prev) => prev + 1);
  };

  return (
    <section id="services" className="py-28 bg-white border-t border-brand-border scroll-mt-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red select-none">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
            Services engineered for <br />
            digital dominance.
          </h2>
          <p className="text-black/50 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
            We don't offer cookie-cutter systems. We construct custom solutions across acquisition, engineering, and storytelling.
          </p>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1: Web Development & SEO */}
          <ServiceCard>
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gray text-black border border-brand-border group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-300">
                <Layout className="h-6 w-6" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-black tracking-tight">
                  Web Development & SEO
                </h3>
                <p className="text-sm text-black/60 leading-relaxed font-normal">
                  Bespoke, high-performance web platforms optimized for fast indexing, search relevance, and conversion logic.
                </p>
              </div>
            </div>

            {/* Graphic Display: Browser Viewport with Ranking Climb */}
            <div className="relative h-44 w-full rounded-2xl bg-brand-gray border border-brand-border p-4 overflow-hidden flex flex-col justify-between">
              
              {/* Simulated Browser topbar */}
              <div className="flex items-center gap-1.5 border-b border-brand-border/60 pb-2.5">
                <span className="h-2 w-2 rounded-full bg-brand-red/35" />
                <span className="h-2 w-2 rounded-full bg-black/10" />
                <span className="h-2 w-2 rounded-full bg-black/10" />
                <div className="h-3 w-32 bg-white rounded-md border border-brand-border ml-2 flex items-center justify-center text-[7px] text-black/40 font-bold select-none">
                  xipitechnologia.com/rankings
                </div>
              </div>

              {/* Graphic body */}
              <div className="flex-grow flex items-center justify-between gap-4 pt-2">
                
                {/* Code lines */}
                <div className="space-y-1.5 flex-grow">
                  <div className="h-2 w-24 bg-black/10 rounded" />
                  <div className="h-2 w-16 bg-black/5 rounded" />
                  <div className="h-2 w-20 bg-brand-red/10 rounded" />
                  <div className="h-2.5 w-28 bg-black/15 rounded flex items-center pl-1">
                    <span className="text-[6px] font-bold text-black/40">React Engine</span>
                  </div>
                </div>

                {/* SERP ladder widget */}
                <div className="bg-white rounded-xl border border-brand-border p-2.5 flex flex-col shadow-sm w-32">
                  <span className="text-[7px] font-bold text-black/40 uppercase tracking-wider mb-1 select-none">Google SERP</span>
                  
                  <div className="flex items-center justify-between border-t border-brand-border pt-1">
                    <span className="text-[9px] font-extrabold text-black">"AI Solutions"</span>
                    <motion.span 
                      animate={{ y: [2, -2, 2] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="text-[9px] font-bold text-emerald-500 flex items-center"
                    >
                      #1 Rank
                    </motion.span>
                  </div>
                </div>

              </div>

              {/* Base tag footer */}
              <div className="flex justify-between items-center text-[8px] font-bold text-black/40 uppercase tracking-widest pt-2 border-t border-brand-border/60">
                <span>Tailwind CSS</span>
                <span>Page Speed 100</span>
              </div>

            </div>
          </ServiceCard>

          {/* CARD 2: Meta Ads & Google Ads */}
          <ServiceCard>
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gray text-black border border-brand-border group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-300">
                <Globe className="h-6 w-6" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-black tracking-tight">
                  Meta Ads & Google Ads
                </h3>
                <p className="text-sm text-black/60 leading-relaxed font-normal">
                  High-performance paid acquisition campaigns driving intent-based queries and scaling product purchase loops.
                </p>
              </div>
            </div>

            {/* Graphic Display: Interactive ROI conversion curve */}
            <div className="relative h-44 w-full rounded-2xl bg-brand-gray border border-brand-border p-4 overflow-hidden flex flex-col justify-between">
              
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold text-black/40 uppercase tracking-wider">Acquisition Scale</span>
                <span className="text-xs font-black text-brand-red flex items-center gap-0.5">
                  5.4x ROAS <TrendingUp className="h-3 w-3" />
                </span>
              </div>

              {/* SVG drawing curve */}
              <svg className="w-full h-20" viewBox="0 0 300 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="roi-glow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E32626" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#E32626" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Curve path */}
                <motion.path
                  d="M0 95 Q 60 85, 120 40 T 240 25 T 300 5"
                  fill="none"
                  stroke="#E32626"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                />
                <path
                  d="M0 95 Q 60 85, 120 40 T 240 25 T 300 5 L 300 100 L 0 100 Z"
                  fill="url(#roi-glow)"
                />
                <circle cx="300" cy="5" r="4.5" fill="#E32626" />
              </svg>

              <div className="flex gap-2 justify-start items-center">
                <span className="bg-white px-2 py-0.5 rounded border border-brand-border text-[8px] font-extrabold text-black/60 shadow-sm">
                  Google Search: 340% ROI
                </span>
                <span className="bg-white px-2 py-0.5 rounded border border-brand-border text-[8px] font-extrabold text-black/60 shadow-sm">
                  Meta Scale: +45% YoY
                </span>
              </div>

            </div>
          </ServiceCard>

          {/* CARD 3: Social Media Marketing */}
          <ServiceCard>
            <div className="space-y-4" onMouseEnter={handleSocialCardHover}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gray text-black border border-brand-border group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-300">
                <Megaphone className="h-6 w-6" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-black tracking-tight">
                  Social Media Marketing
                </h3>
                <p className="text-sm text-black/60 leading-relaxed font-normal">
                  Viral organic short-form video strategies, aesthetic asset curation, and cross-channel community positioning.
                </p>
              </div>
            </div>

            {/* Graphic Display: Phone story card mockup with bubble hearts */}
            <div className="relative h-44 w-full rounded-2xl bg-brand-gray border border-brand-border p-4 overflow-hidden flex items-center justify-center">
              
              {/* Phone card wrapper */}
              <div className="relative w-44 h-36 rounded-2xl bg-white border border-brand-border shadow-sm flex flex-col justify-between p-3 overflow-hidden">
                
                {/* Profile card header */}
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center font-display font-black text-[9px] text-brand-red">
                    XI
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold text-black">xipitechnologia.com</span>
                    <span className="text-[6px] text-black/40 font-bold">New York, NY</span>
                  </div>
                </div>

                {/* Simulated post image */}
                <div className="h-14 w-full rounded-lg bg-brand-gray border border-brand-border overflow-hidden flex items-center justify-center relative">
                  <Sparkles className="h-4 w-4 text-brand-red/40" />
                  
                  {/* Floating interaction metrics */}
                  <div className="absolute bottom-1 right-1.5 bg-black/65 px-1.5 py-0.5 rounded-full text-[6px] font-bold text-white flex items-center gap-0.5 select-none">
                    <Heart className="h-1.5 w-1.5 fill-brand-red text-brand-red" /> +10.2k
                  </div>
                </div>

                {/* Footer text action */}
                <div className="flex justify-between items-center text-[7px] text-black/50 font-bold border-t border-brand-border/60 pt-2">
                  <span>Viral story active</span>
                  <div className="flex gap-1">
                    <Share2 className="h-2.5 w-2.5 hover:text-brand-red" />
                  </div>
                </div>

              </div>

              {/* Heart animation elements that pop-up on card action */}
              <AnimatePresence>
                {Array.from({ length: activeHeartCount }).slice(-4).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 80, x: (i % 2 === 0 ? -20 : 20) + (Math.random() * 10 - 5), scale: 0.5, opacity: 0 }}
                    animate={{ y: -60, scale: 1.2, opacity: [0, 1, 1, 0] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.6, ease: 'easeOut' }}
                    className="absolute z-20 text-brand-red pointer-events-none"
                  >
                    <Heart className="h-5.5 w-5.5 fill-current" />
                  </motion.div>
                ))}
              </AnimatePresence>

            </div>
          </ServiceCard>

        </div>

      </div>
    </section>
  );
}
