import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Video, Users, CheckCircle2, ArrowRight, Sparkles, 
  Play, Share2, Award, ShieldCheck, ChevronDown, ChevronUp, MessageSquare, 
  ExternalLink, Zap, BarChart3, Filter, X, ArrowUpRight, Search, Target, Cpu, LineChart
} from 'lucide-react';

const statsData = [
  { value: '$2.5M+', label: 'Ad Spend Managed', detail: 'Across all client campaigns' },
  { value: '4.2x', label: 'Average ROAS', detail: 'Blended return on ad spend' },
  { value: '45+', label: 'Brands Scaled', detail: 'Meta, TikTok & Google Ads' },
  { value: '3', label: 'Core Platforms', detail: 'Meta · TikTok · Google' }
];

const processSteps = [
  {
    step: 'Step 01',
    title: 'Research & Mapping',
    color: '#38BDF8',
    icon: Search,
    desc: 'We audit your competitors, study what creative is winning in your category right now, and map the full funnel before a single dollar is spent.'
  },
  {
    step: 'Step 02',
    title: 'UGC Creative Production',
    color: '#A78BFA',
    icon: Video,
    desc: 'Hook-first scripts, UGC-style shoots, and platform-native editing. We make ads that feel organic — because those convert 3x better than polished brand spots.'
  },
  {
    step: 'Step 03',
    title: 'Launch & A/B Test',
    color: '#E32626',
    icon: Zap,
    desc: 'Multi-variant launches from day one. We test audiences, hooks, visuals, and CTAs simultaneously — letting data pick winners within the first 72 hours.'
  },
  {
    step: 'Step 04',
    title: 'Optimize & Scale',
    color: '#34D399',
    icon: TrendingUp,
    desc: "We kill what doesn't work and pour budget into what does. Weekly reporting, ROAS-driven decisions, and continuous creative refresh to prevent ad fatigue."
  }
];

const edgeFeatures = [
  {
    title: 'UGC-First Creative',
    color: '#A78BFA',
    icon: Users,
    desc: 'Every campaign starts with user-generated-style content — raw, real, and impossible to scroll past. We produce it in-house or cast creators to match your brand voice.'
  },
  {
    title: 'Hook Engineering',
    color: '#FB923C',
    icon: Sparkles,
    desc: 'The first 2 seconds determine everything. We write, test, and iterate on hooks until we find the one that stops the scroll — then build the rest of the ad around it.'
  },
  {
    title: 'Platform-Native Format',
    color: '#00D4FF',
    icon: Video,
    desc: 'TikTok ads that feel like TikToks. Instagram ads that blend into the feed. We never repurpose — every creative is built specifically for how users consume that platform.'
  },
  {
    title: 'Full-Funnel Strategy',
    color: '#E32626',
    icon: Filter,
    desc: 'Awareness → consideration → conversion → retention. We map every ad to a funnel stage and build retargeting flows that recapture lost revenue.'
  },
  {
    title: 'AI-Powered Optimization',
    color: '#F472B6',
    icon: Cpu,
    desc: 'We pair human creative instinct with AI media-buying tools — automated bidding, lookalike expansion, and real-time budget allocation based on performance signals.'
  },
  {
    title: 'Weekly Reporting',
    color: '#34D399',
    icon: BarChart3,
    desc: 'No black boxes. Every Monday you get a clear report: spend, ROAS, CPM, CTR, and what we are testing next. You always know where your money is going.'
  }
];

const laundryLabsMetrics = [
  { val: '166,500', sub: '137,850 unique reached', label: 'Total Impressions', desc: 'Massive top-of-funnel reach — nearly 138K individual people saw the brand.', color: '#FBBF24' },
  { val: '$0.19', sub: 'Industry avg: $0.50–$2.00', label: 'Cost Per Click (CPC)', desc: 'A/B tested audiences drove CPC 6–10x below Meta industry benchmarks.', color: '#34D399' },
  { val: '3,778', sub: '2.5–3.2% CTR vs 1% avg', label: 'Total Clicks', desc: 'Click-through rate 2–3x the industry average — proof the creative stopped the scroll.', color: '#38BDF8' },
  { val: 'Lead Gen', sub: 'High-value deliverable', label: 'Campaign Type', desc: 'Full lead generation campaigns built to capture qualified buyers, not just traffic.', color: '#A78BFA' },
  { val: 'Shopping', sub: 'Bottom-of-funnel', label: 'Funnel Coverage', desc: 'Full-funnel execution from awareness to shopping — not just traffic, but purchase intent.', color: '#F472B6' },
  { val: '$3.23', sub: 'Exceptionally low CPM', label: 'Cost Per 1K Impressions', desc: 'Media buying efficiency that signals expert optimization — premium reach at low cost.', color: '#FB923C' }
];

const galleryImages = [
  { title: 'Athletic Pods Frozen In Ice', tag: 'Product Shoot', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop' },
  { title: '5-in-1 Eco Pod Breakdown', tag: 'Feature Ad', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop' },
  { title: 'My Biceps Miss The Jug Hook', tag: 'UGC Hook', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop' }
];

export default function MetaAds({ onContactClick }) {
  const [activeGalleryModal, setActiveGalleryModal] = useState(null);

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans select-none overflow-x-hidden pt-20">
      
      {/* Radial Lighting Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-600/10 via-brand-red/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* 1. HERO SECTION (helloupdigital exact layout) */}
      <section className="relative pt-24 pb-20 border-b border-white/10 overflow-hidden">
        
        {/* Big Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10">
          <span className="text-[14vw] font-black leading-none text-transparent border-text tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}>
            PAID ADS
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 px-4 py-1.5 rounded-full text-xs font-black tracking-[0.3em] uppercase">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              PAID ADVERTISING & META ADS
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.93]">
              ADS THAT <br />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-sky-400">
                ACTUALLY CONVERT.
              </span>
            </h1>

            <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-xl font-normal pt-2">
              Meta, TikTok & Google campaigns built on UGC-first creative, AI optimization, and full-funnel strategy. We don't just run ads — we build revenue machines.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onContactClick}
                className="group relative inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-xl shadow-brand-red/25 transition-all hover:scale-105"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-extrabold rounded-full text-sm uppercase tracking-wider hover:border-sky-400/50 hover:bg-white/5 transition-all"
              >
                <span>Free Paid Ads Audit</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PERFORMANCE METRICS BANNER */}
      <section className="relative bg-[#0D0D0F] border-b border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-sky-400/40 transition-all text-center group"
            >
              <div className="text-2xl sm:text-4xl font-black text-sky-400 font-mono group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs font-extrabold text-white mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[10px] text-zinc-500 font-medium mt-0.5">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. THE PROCESS · 4 STEPS */}
      <section className="py-24 bg-[#FAF9F6] text-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 bg-black text-white px-3.5 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              THE PROCESS · 4 STEPS
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08]">
              HOW WE <br />
              <span className="font-serif italic font-light text-brand-red">
                Run Ads.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-white rounded-3xl p-7 border border-zinc-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl" style={{ backgroundColor: step.color }} />

                  <div>
                    <div 
                      className="h-10 w-10 rounded-xl flex items-center justify-center mb-5 font-bold"
                      style={{ backgroundColor: `${step.color}20`, color: step.color }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-[10px] font-black tracking-[0.3em] uppercase block mb-2" style={{ color: step.color }}>
                      {step.step}
                    </span>

                    <h3 className="text-lg font-extrabold text-black mb-3 tracking-tight">
                      {step.title}
                    </h3>

                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. OUR EDGE · 6 FEATURE GRID */}
      <section className="py-28 bg-[#050507] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
          
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-sky-400">
              OUR EDGE
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              WHY OUR ADS <br />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-brand-red">
                CONVERT.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {edgeFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-[#0D0D0F] p-7 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: feat.color }} />

                  <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${feat.color}20`, color: feat.color }}>
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-3">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. FULL CASE STUDY: LAUNDRY LABS */}
      <section className="py-28 bg-[#0A0A0F] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 text-amber-400 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
              FULL CASE STUDY
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-5xl sm:text-7xl font-black text-white tracking-tight">
                  LAUNDRY <br />
                  <span className="text-amber-400">LABS.</span>
                </h2>
              </div>

              <div className="max-w-md space-y-2">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  A premium eco-friendly laundry pod brand going head-to-head with Tide, Gain, and legacy detergent giants.
                </p>
                <span className="text-amber-400 text-xs font-black uppercase tracking-wider block">
                  laundrylabs.shop →
                </span>
              </div>
            </div>

            {/* 3 Column Problem/Audience/Approach */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="bg-[#0D0D0F] p-6 rounded-2xl border border-red-500/20 relative">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-red-400 rounded-t-2xl" />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-red-400 block mb-2">The Problem</span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Legacy detergent brands dominate 80% of market share. New entrants get drowned out by massive traditional ad budgets.
                </p>
              </div>

              <div className="bg-[#0D0D0F] p-6 rounded-2xl border border-sky-500/20 relative">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-sky-400 rounded-t-2xl" />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-sky-400 block mb-2">The Audience</span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Gen Z and millennials who care about sustainability & aesthetics — but won't buy unless the product looks cool.
                </p>
              </div>

              <div className="bg-[#0D0D0F] p-6 rounded-2xl border border-amber-500/20 relative">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-amber-400 rounded-t-2xl" />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-amber-400 block mb-2">Our Approach</span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Build high-concept product shoots, athlete lifestyle content, and viral UGC hooks that feel nothing like traditional detergent ads.
                </p>
              </div>
            </div>
          </div>

          {/* Benchmark Performance Bars Comparison (Prixa/Up Digital Signature Section) */}
          <div className="bg-[#0D0D0F] p-8 sm:p-10 rounded-3xl border border-amber-400/20 space-y-6">
            <span className="text-amber-400 text-xs font-black uppercase tracking-[0.4em] block">
              OUR RESULTS VS INDUSTRY AVERAGE
            </span>

            <div className="space-y-6">
              {/* Cost Per Click Comparison */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-zinc-400 uppercase">Cost Per Click (CPC)</span>
                  <div className="flex gap-4">
                    <span className="text-amber-400 font-mono font-black">Xipi Us: $0.19</span>
                    <span className="text-zinc-500 font-mono">Industry Avg: $0.50–$2.00</span>
                  </div>
                </div>
                <div className="relative h-6 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-amber-400 w-[15%] rounded-full flex items-center px-2">
                    <span className="text-[9px] font-black text-black uppercase">Us ($0.19)</span>
                  </div>
                </div>
                <p className="text-[10px] text-zinc-500 font-medium">90% below industry avg — more reach per dollar spent</p>
              </div>

              {/* Click-Through Rate Comparison */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-zinc-400 uppercase">Click-Through Rate (CTR)</span>
                  <div className="flex gap-4">
                    <span className="text-emerald-400 font-mono font-black">Xipi Us: 2.5%–3.2%</span>
                    <span className="text-zinc-500 font-mono">Industry Avg: ~1.0%</span>
                  </div>
                </div>
                <div className="relative h-6 rounded-full bg-zinc-800 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1 }}
                    className="absolute inset-y-0 left-0 bg-emerald-400 rounded-full flex items-center px-2"
                  >
                    <span className="text-[9px] font-black text-black uppercase">Us (3.2% CTR)</span>
                  </motion.div>
                </div>
                <p className="text-[10px] text-zinc-500 font-medium">3x the industry average CTR — proof the creative stopped the scroll</p>
              </div>

              {/* Cost Per 1K Impressions Comparison */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-zinc-400 uppercase">Cost Per 1K Impressions (CPM)</span>
                  <div className="flex gap-4">
                    <span className="text-sky-400 font-mono font-black">Xipi Us: $3.23</span>
                    <span className="text-zinc-500 font-mono">Industry Avg: $8.00–$12.00</span>
                  </div>
                </div>
                <div className="relative h-6 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-sky-400 w-[28%] rounded-full flex items-center px-2">
                    <span className="text-[9px] font-black text-black uppercase">Us ($3.23)</span>
                  </div>
                </div>
                <p className="text-[10px] text-zinc-500 font-medium">73% below industry avg — premium ad reach at fraction of cost</p>
              </div>
            </div>
          </div>

          {/* 6 Metric Breakdown Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {laundryLabsMetrics.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#0D0D0F] p-6 rounded-2xl border border-white/10 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundColor: m.color }} />
                <div className="text-3xl font-black font-mono mb-1" style={{ color: m.color }}>
                  {m.val}
                </div>
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 mb-2">
                  {m.sub}
                </div>
                <h4 className="text-xs font-black uppercase text-white tracking-wider mb-1">
                  {m.label}
                </h4>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Ad Creative Gallery Shoot Showcase */}
          <div className="space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-amber-400">
              AD CREATIVES & SHOOT SHOWCASE
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {galleryImages.map((imgItem, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveGalleryModal(imgItem)}
                  className="group relative h-[320px] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 cursor-pointer shadow-xl"
                >
                  <img
                    src={imgItem.img}
                    alt={imgItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 space-y-1">
                    <span className="bg-amber-400/20 text-amber-300 text-[9px] font-black uppercase px-2.5 py-1 rounded-full border border-amber-400/30">
                      {imgItem.tag}
                    </span>
                    <h5 className="text-sm font-extrabold text-white pt-1">
                      {imgItem.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. HIGH-CONVERTING CTA BANNER */}
      <section className="py-24 bg-[#050507] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border border-zinc-800 text-center space-y-6 relative overflow-hidden shadow-2xl">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">
              READY TO SCALE YOUR META & PAID ADS?
            </span>

            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Get Your Free Paid Ad Strategy Audit.
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              We'll analyze your current ad spend, CTR benchmarks, and creative hooks—completely free with zero obligation.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={onContactClick}
                className="group inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-xl shadow-brand-red/25 transition-all hover:scale-105"
              >
                <span>Book Paid Ads Audit</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW MODAL */}
      <AnimatePresence>
        {activeGalleryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveGalleryModal(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-lg bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 p-6 space-y-4 text-center">
              <button
                onClick={() => setActiveGalleryModal(null)}
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-zinc-800 text-white flex items-center justify-center hover:bg-brand-red transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative w-full h-[320px] rounded-2xl overflow-hidden">
                <img src={activeGalleryModal.img} alt={activeGalleryModal.title} className="w-full h-full object-cover" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">{activeGalleryModal.title}</h4>
                <p className="text-xs text-amber-400 font-mono mt-1">{activeGalleryModal.tag}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
