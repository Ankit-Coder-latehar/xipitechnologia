import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Video, Target, Sparkles, Search, CheckCircle, ExternalLink } from 'lucide-react';

const services = [
  {
    id: 'video-production',
    title: 'Video Production',
    subtitle: 'Cinema-Grade Visual Ads',
    category: '01 / CREATIVE',
    icon: Video,
    desc: 'We specialize in producing high-end TV commercials, creative social ads, and product launch videos that leave a mark. Instead of just hitting record, we craft compelling stories that connect with your audience and drive real results from the very first frame to the final cut.',
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
    tag: 'High-Impact Media'
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    subtitle: '10x ROAS PPC & Paid Ads',
    category: '02 / ACQUISITION',
    icon: Target,
    desc: 'Turn your ad spend into actual profit. We handle everything from finding your most profitable buyers to running the exact campaigns you need to scale up across Meta, Google, and TikTok. We build a reliable system that brings in consistent sales month after month.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    tag: 'Algorithmic Bidding'
  },
  {
    id: 'branding',
    title: 'Brand Identity',
    subtitle: 'Unforgettable Positioning',
    category: '03 / IDENTITY',
    icon: Sparkles,
    desc: 'Build a brand people actually remember. We handle everything from finding your unique angle to creating the exact roadmap you need to scale up. We build a complete identity system that makes your business impossible to ignore and easy for your audience to trust.',
    img: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop',
    tag: 'Visual Strategy'
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    subtitle: 'Topical Authority & Rank #1',
    category: '04 / ORGANIC',
    icon: Search,
    desc: 'Make sure people find you before they find your competitors. Instead of just chasing traffic, we focus on getting your business in front of people who are actually ready to buy. We fix your website, create great content, and build a trusted search presence.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    tag: 'Semantic SEO'
  }
];

export default function MajorServicesAccordion({ onContactClick }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full bg-[#FAF9F6] py-24 lg:py-32 border-t border-brand-border select-none overflow-hidden">
      
      {/* Background Decorative Mesh */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-black/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
              OUR CORE EXPERTISE
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-black leading-[1.08]">
              Major Services <br />
              <span className="text-black/40">Engineered to scale.</span>
            </h2>
          </div>
          <p className="text-black/60 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Inspired by world-class digital agency frameworks. Hover over any service to explore our specialized execution.
          </p>
        </div>

        {/* Desktop View: Horizontal Expanding Flex Columns (Prixa style) */}
        <div className="hidden lg:flex h-[620px] w-full gap-4 items-stretch">
          {services.map((service, idx) => {
            const isActive = activeIndex === idx;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveIndex(idx)}
                style={{
                  flex: isActive ? 4 : 1,
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer border transition-all duration-500 flex flex-col justify-end p-8 sm:p-10 ${
                  isActive
                    ? 'bg-black text-white border-black shadow-2xl shadow-black/20'
                    : 'bg-white text-black border-brand-border hover:border-black/30'
                }`}
              >
                {/* Active Column Layout */}
                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col h-full justify-between relative z-10"
                  >
                    {/* Top Row */}
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-red">
                          {service.category}
                        </span>
                        <h3 className="text-3xl font-extrabold tracking-tight text-white">
                          {service.title}
                        </h3>
                      </div>
                      <span className="bg-brand-red/20 text-brand-red border border-brand-red/30 px-3 py-1 rounded-full text-[10px] font-black uppercase">
                        {service.tag}
                      </span>
                    </div>

                    {/* Middle Image Frame with Layered Offset Shadows (Prixa exact aesthetic) */}
                    <div className="my-6 relative w-full h-[260px] rounded-2xl overflow-hidden border border-zinc-800 shadow-xl group">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                        <Icon className="h-4 w-4 text-brand-red" />
                        <span className="text-xs font-bold text-white">{service.subtitle}</span>
                      </div>
                    </div>

                    {/* Bottom Details & CTA */}
                    <div className="space-y-4">
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xl font-normal">
                        {service.desc}
                      </p>
                      <div className="pt-2">
                        <button
                          onClick={onContactClick}
                          className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white text-xs font-extrabold px-6 py-3 rounded-xl shadow-lg shadow-brand-red/20 transition-all hover:scale-105"
                        >
                          <span>Explore {service.title}</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* Collapsed Vertical Text Column Layout (writing-mode: vertical-rl) */
                  <div className="h-full flex flex-col justify-between items-center py-6">
                    <div className="h-10 w-10 rounded-xl bg-brand-gray border border-brand-border flex items-center justify-center text-black">
                      <Icon className="h-5 w-5" />
                    </div>
                    
                    {/* Vertical Text Label */}
                    <div className="rotate-180 [writing-mode:vertical-rl] flex items-center gap-4 my-auto">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-black/40">
                        {service.category}
                      </span>
                      <h3 className="text-xl font-extrabold text-black uppercase tracking-tight">
                        {service.title}
                      </h3>
                    </div>

                    <span className="text-xs font-mono font-bold text-black/30">
                      0{idx + 1}
                    </span>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Mobile View: Stacked Cards */}
        <div className="flex lg:hidden flex-col gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 border border-brand-border shadow-md space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-brand-red text-white flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-brand-red block">
                        {service.category}
                      </span>
                      <h3 className="text-xl font-extrabold text-black tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="relative w-full h-[180px] rounded-2xl overflow-hidden border border-brand-border">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-xs text-black/70 leading-relaxed font-normal">
                  {service.desc}
                </p>

                <button
                  onClick={onContactClick}
                  className="w-full inline-flex items-center justify-center gap-2 bg-black text-white text-xs font-extrabold py-3.5 rounded-xl"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
