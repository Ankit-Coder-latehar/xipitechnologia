import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Target, BarChart3, Zap, CheckCircle2, ArrowRight, Sparkles, 
  DollarSign, Layers, Cpu, PieChart, Sliders, Search, Award, ShieldCheck, 
  ChevronDown, ChevronUp, MessageSquare, ExternalLink, Filter, ArrowUpRight, 
  Activity, Clock, Users, Video, Globe, RefreshCw, Eye, MousePointer, Check
} from 'lucide-react';

const statsData = [
  { value: '$15M+', label: 'Ad Spend Managed', detail: 'Across Meta, Google & TikTok', color: '#E32626' },
  { value: '4.8x', label: 'Average Blended ROAS', detail: 'Portfolio-wide return on ad spend', color: '#10B981' },
  { value: '350K+', label: 'Acquisitions Scaled', detail: 'High-intent purchases & leads', color: '#3B82F6' },
  { value: '98.4%', label: 'Client Retention Rate', detail: 'Quarter-over-quarter partnership scale', color: '#8B5CF6' }
];

const channelMatrix = [
  {
    id: 'meta',
    name: 'Meta Ads (FB & IG)',
    tag: 'SCALE ENGINE',
    color: '#E32626',
    bgColor: 'from-red-500/10 to-orange-500/5',
    borderColor: 'border-red-500/30',
    icon: Target,
    stats: '+340% Conversions • 4.6x ROAS',
    desc: 'Leverage Advantage+ Shopping, server-side CAPI tracking, and dynamic creative testing to dominate feeds and stories with zero audience fatigue.',
    features: [
      'Conversions API (CAPI) Server Tracking',
      'Advantage+ Shopping & Catalog Ads',
      'High-Velocity UGC Hook Testing',
      'Dynamic Creative Optimization (DCO)'
    ]
  },
  {
    id: 'google',
    name: 'Google Ads & PMax',
    tag: 'HIGH INTENT',
    color: '#3B82F6',
    bgColor: 'from-blue-500/10 to-cyan-500/5',
    borderColor: 'border-blue-500/30',
    icon: Search,
    stats: '-42% CPA • 5.1x Search ROAS',
    desc: 'Capture ready-to-buy search traffic and conquer YouTube & Performance Max campaigns with algorithmic target-ROAS bid strategies.',
    features: [
      'Performance Max (PMax) Feed Mastery',
      'Non-Brand High-Intent Search Bidding',
      'YouTube In-Stream Video Conversions',
      'Negative Keyword & Match-Type Guardrails'
    ]
  },
  {
    id: 'tiktok',
    name: 'TikTok & Short Video Ads',
    tag: 'VIRAL ACQUISITION',
    color: '#10B981',
    bgColor: 'from-emerald-500/10 to-teal-500/5',
    borderColor: 'border-emerald-500/30',
    icon: Video,
    stats: '2.8x CTR • 3.9x Impulse ROAS',
    desc: 'Engage Gen-Z and millennial shoppers with native, unpolished UGC hooks that blend seamlessly into feeds while driving impulse purchases.',
    features: [
      'Spark Ads & Creator Marketplace Casting',
      'Native TikTok Shop Integration',
      'Fast-Paced Hook & Pattern Interrupts',
      'Trendy Audio & Micro-Influencer Scripts'
    ]
  },
  {
    id: 'linkedin',
    name: 'LinkedIn B2B Acquisition',
    tag: 'HIGH TICKET B2B',
    color: '#8B5CF6',
    bgColor: 'from-purple-500/10 to-indigo-500/5',
    borderColor: 'border-purple-500/30',
    icon: Users,
    stats: '$180k Avg ACV • 48% Lead Rate',
    desc: 'Precision target CXOs, VPs, and key enterprise buyers using account-based marketing (ABM), document ads, and high-converting lead forms.',
    features: [
      'Account-Based Marketing (ABM) Lists',
      'Job Title & Company Revenue Targeting',
      'InMail & Native Lead Gen Forms',
      'High-Value Gated Asset Funnels'
    ]
  },
  {
    id: 'retargeting',
    name: 'Omni-Channel Retargeting',
    tag: 'REVENUE RECOVERY',
    color: '#F59E0B',
    bgColor: 'from-amber-500/10 to-yellow-500/5',
    borderColor: 'border-amber-500/30',
    icon: RefreshCw,
    stats: '8.4x Retargeting ROAS',
    desc: 'Recapture cart abandoners and site visitors across programmatic display, native ads, and cross-device display networks with personalized offers.',
    features: [
      'Dynamic Product Catalog Retargeting',
      'Sequential Storytelling Funnels',
      'Cross-Device Impression Frequency Caps',
      'Custom Offer & VIP Discount Windows'
    ]
  }
];

const processSteps = [
  {
    step: 'Phase 01',
    title: 'Data & Server CAPI Infrastructure',
    icon: Cpu,
    color: '#3B82F6',
    desc: 'We repair signal loss caused by iOS 14+ by deploying 1st-party Server-Side Conversions API (CAPI), custom GA4 parameters, and MER (Marketing Efficiency Ratio) tracking dashboards.'
  },
  {
    step: 'Phase 02',
    title: 'Creative Velocity & UGC Production',
    icon: Sparkles,
    color: '#E32626',
    desc: 'Ad creative is 80% of ad performance. We produce 10–15 unique UGC hooks, static concepts, and high-impact video ads weekly to eliminate ad fatigue.'
  },
  {
    step: 'Phase 03',
    title: 'Algorithmic Media Buying',
    icon: BarChart3,
    color: '#10B981',
    desc: 'We structure simplified campaign architectures (CBO/ABO) leveraging machine learning, automated bid strategies, and dynamic budget scaling toward top performers.'
  },
  {
    step: 'Phase 04',
    title: 'Post-Click Funnel & CRO Optimization',
    icon: Zap,
    color: '#8B5CF6',
    desc: 'We optimize every step after the click with custom high-speed landing pages, 1-click upsells, quiz funnels, and cart optimization that boost conversion rate by 40%+.'
  },
  {
    step: 'Phase 05',
    title: 'Aggressive Spend Scaling',
    icon: TrendingUp,
    color: '#F59E0B',
    desc: 'Once ROAS benchmarks stabilize, we systematically scale ad budgets 3x–10x while maintaining target Customer Acquisition Costs (CAC) and protecting net margins.'
  }
];

const caseStudiesData = [
  {
    client: 'Velocita Apparel D2C',
    category: 'E-Commerce Fashion',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    spend: '$45,000 / mo',
    roas: '5.2x ROAS',
    lift: '+310% Revenue Growth',
    cpa: '$18.40 CPA',
    summary: 'Scaled Meta & TikTok campaigns with 12 new UGC hooks weekly and a custom 1-click cart slideout.'
  },
  {
    client: 'CloudFlow SaaS Platform',
    category: 'B2B Tech',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    spend: '$65,000 / mo',
    roas: '4.4x MER',
    lift: '-54% Customer CAC',
    cpa: '$142 CAC',
    summary: 'Restructured Google Search PMax and LinkedIn ABM lists with gated ROI calculator landing pages.'
  },
  {
    client: 'NutraGlow Supplement Co.',
    category: 'Health & Wellness',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop',
    spend: '$95,000 / mo',
    roas: '6.1x ROAS',
    lift: '+480% Subscription Scale',
    cpa: '$22.10 CPA',
    summary: 'Deployed custom Quiz Funnel with dynamic bundle builder, achieving 6.1x blended return on Meta & Google.'
  }
];

const faqData = [
  {
    q: 'What is Performance Marketing and how does it differ from traditional marketing?',
    a: 'Performance Marketing is 100% data-driven and results-focused. Unlike traditional brand awareness campaigns where you pay flat rates for eyeballs, performance marketing measures every dollar spent against real revenue, leads, CPA, and ROAS. You pay for performance and scale campaigns based on quantifiable net profit.'
  },
  {
    q: 'How do you overcome signal loss and tracking issues from iOS 14.5+?',
    a: 'We implement server-side tracking via Conversions API (CAPI) on Meta, Google Enhanced Conversions, and Server GTM. This bypasses browser ad-blockers and iOS privacy restrictions, feeding accurate first-party conversion data directly into ad platform machine-learning algorithms for precision targeting.'
  },
  {
    q: 'What is the recommended minimum monthly ad budget to work with Xipitechnologia?',
    a: 'We typically recommend a minimum monthly ad spend of $5,000 to $10,000. This provides sufficient statistical volume to execute multi-variant creative testing, algorithm learning, and rapid scale. For enterprise clients, we manage ad accounts spending $100,000+ monthly.'
  },
  {
    q: 'Do you create the ad assets (videos, graphics, copy) or do we need to provide them?',
    a: 'We provide full end-to-end creative production! Our in-house creative studio handles UGC creator casting, scriptwriting, video editing, graphic design, motion design, and copywriting specifically engineered to stop the scroll.'
  },
  {
    q: 'How quickly can we expect to see results after launching?',
    a: 'Initial technical auditing, CAPI tracking setup, and first creative batch rollout take 5-7 business days. Upon launching campaigns, algorithmic data signals begin optimizing within 72 hours, and clear ROAS lift is typically demonstrated within the first 14 to 30 days.'
  }
];

export default function PerformanceMarketing({ onContactClick }) {
  // Simulator State
  const [adSpend, setAdSpend] = useState(15000);
  const [targetRoas, setTargetRoas] = useState(4.2);
  const [convRate, setConvRate] = useState(2.8);
  const [aov, setAov] = useState(75);

  // Active channel matrix tab
  const [selectedChannel, setSelectedChannel] = useState('meta');

  // Dashboard Simulator Toggle
  const [dashView, setDashView] = useState('meta');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Dynamic ROAS calculations
  const projectedRevenue = Math.round(adSpend * targetRoas);
  const projectedConversions = Math.round(projectedRevenue / aov);
  const projectedCpa = (adSpend / (projectedConversions || 1)).toFixed(2);
  const projectedNetProfit = Math.round(projectedRevenue - adSpend);

  const activeChannelObj = channelMatrix.find(c => c.id === selectedChannel) || channelMatrix[0];

  const scrollToSimulator = () => {
    const el = document.getElementById('roas-simulator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans select-none overflow-x-hidden pt-20">
      
      {/* Dynamic Background Radial Lights */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-to-b from-brand-red/10 via-emerald-500/5 to-transparent rounded-full blur-[180px] pointer-events-none" />
      <div className="fixed top-[40%] right-[-200px] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative pt-24 pb-20 border-b border-white/10 overflow-hidden">
        
        {/* Background Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.07]">
          <span className="text-[15vw] font-black leading-none text-transparent tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>
            PERFORMANCE
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Top Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-md mb-8"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
            <span className="text-xs font-extrabold tracking-wider uppercase text-zinc-200">
              DATA-DRIVEN ROI ENGINE • MAXIMUM PROFIT SCALABILITY
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 space-y-6"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                Scale Revenue With <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-brand-red">
                  Algorithmic Media Buying.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl">
                We manage over <span className="text-white font-bold">$15M+ in paid ad spend</span>, pairing 1st-party Server-Side CAPI tracking, rapid UGC creative testing, and machine-learning bid automation to turn paid media into a predictable revenue machine.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onContactClick}
                  className="group relative inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-xl shadow-brand-red/30 transition-all duration-300 hover:scale-105"
                >
                  <span>Book Performance Audit</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={scrollToSimulator}
                  className="inline-flex items-center gap-2.5 bg-white/5 hover:bg-white/10 text-white font-bold text-sm px-6 py-4 rounded-2xl border border-white/15 backdrop-blur-sm transition-all duration-300 hover:border-white/30"
                >
                  <Sliders className="h-4 w-4 text-emerald-400" />
                  <span>Calculate Projected ROAS</span>
                </button>
              </div>

              {/* Micro Proof Bar */}
              <div className="pt-6 flex flex-wrap items-center gap-6 border-t border-white/10 text-xs text-zinc-400 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Server-Side CAPI Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Weekly UGC Creative Batches</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Zero Lock-in Contracts</span>
                </div>
              </div>
            </motion.div>

            {/* Right Live Command Center Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl bg-zinc-900/90 border border-white/15 p-6 backdrop-blur-xl shadow-2xl shadow-emerald-900/20 overflow-hidden">
                
                {/* Header bar of card */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
                      LIVE MER COMMAND CENTER
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    REAL-TIME CAPI FEED
                  </span>
                </div>

                {/* Main Metric Spotlight */}
                <div className="bg-black/60 rounded-2xl p-5 border border-white/10 mb-5">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Blended MER (ROAS)</span>
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <TrendingUp className="h-3 w-3" /> +38.4% vs last mo
                    </span>
                  </div>
                  <div className="text-4xl font-extrabold text-white tracking-tight font-display">
                    4.82x
                  </div>
                  <div className="w-full bg-zinc-800 h-2 rounded-full mt-3 overflow-hidden">
                    <motion.div 
                      initial={{ width: '0%' }}
                      animate={{ width: '82%' }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-brand-red rounded-full"
                    />
                  </div>
                </div>

                {/* Sub-kpi Grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                    <span className="text-[11px] text-zinc-400 block mb-1 font-medium">Monthly Revenue</span>
                    <span className="text-xl font-extrabold text-white">$142,850</span>
                    <span className="text-[10px] text-emerald-400 block mt-0.5">Meta & Google Blended</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                    <span className="text-[11px] text-zinc-400 block mb-1 font-medium">Cost Per Acq (CPA)</span>
                    <span className="text-xl font-extrabold text-emerald-400">$19.20</span>
                    <span className="text-[10px] text-zinc-400 block mt-0.5">-35% below target</span>
                  </div>
                </div>

                {/* Live Channel Stream Row */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500" />
                      <span className="font-semibold text-zinc-200">Meta Advantage+</span>
                    </div>
                    <span className="font-mono text-emerald-400 font-bold">$78,400 (4.9x)</span>
                  </div>

                  <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      <span className="font-semibold text-zinc-200">Google Search & PMax</span>
                    </div>
                    <span className="font-mono text-emerald-400 font-bold">$49,200 (5.2x)</span>
                  </div>

                  <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="font-semibold text-zinc-200">TikTok UGC Hooks</span>
                    </div>
                    <span className="font-mono text-emerald-400 font-bold">$15,250 (3.8x)</span>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

          {/* KPI Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10">
            {statsData.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className="bg-zinc-900/50 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all hover:bg-zinc-900/80"
              >
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-1 font-display" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-zinc-200 mb-1">{stat.label}</div>
                <div className="text-xs text-zinc-400 font-normal">{stat.detail}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. INTERACTIVE ROAS & REVENUE SIMULATOR */}
      {/* ------------------------------------------------------------- */}
      <section id="roas-simulator" className="py-24 border-b border-white/10 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
              INTERACTIVE ROI CALCULATOR
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Simulate Your Revenue Lift.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Adjust your current ad budget and performance targets to see projected revenue, CPA, and net profit with our algorithmic media buying.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Sliders Control Panel */}
            <div className="lg:col-span-6 bg-zinc-900/80 rounded-3xl p-6 sm:p-8 border border-white/10 space-y-8 backdrop-blur-md">
              
              {/* Slider 1: Monthly Ad Spend */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <label htmlFor="ad-spend-range" className="text-zinc-300 flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-emerald-400" />
                    Monthly Ad Budget
                  </label>
                  <span className="text-white font-mono text-lg font-extrabold bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                    ${adSpend.toLocaleString()}
                  </span>
                </div>
                <input
                  id="ad-spend-range"
                  type="range"
                  min={5000}
                  max={200000}
                  step={2500}
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                  <span>$5,000</span>
                  <span>$100,000</span>
                  <span>$200,000+</span>
                </div>
              </div>

              {/* Slider 2: Target ROAS */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <label htmlFor="target-roas-range" className="text-zinc-300 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-emerald-400" />
                    Target ROAS Multiplier
                  </label>
                  <span className="text-emerald-400 font-mono text-lg font-extrabold bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                    {targetRoas}x ROAS
                  </span>
                </div>
                <input
                  id="target-roas-range"
                  type="range"
                  min={2.0}
                  max={8.0}
                  step={0.1}
                  value={targetRoas}
                  onChange={(e) => setTargetRoas(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                  <span>2.0x</span>
                  <span>4.5x (Avg)</span>
                  <span>8.0x</span>
                </div>
              </div>

              {/* Slider 3: Average Order Value / LTV */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <label htmlFor="aov-range" className="text-zinc-300 flex items-center gap-2">
                    <PieChart className="h-4 w-4 text-blue-400" />
                    Average Order Value (AOV)
                  </label>
                  <span className="text-white font-mono text-lg font-extrabold bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                    ${aov}
                  </span>
                </div>
                <input
                  id="aov-range"
                  type="range"
                  min={20}
                  max={500}
                  step={5}
                  value={aov}
                  onChange={(e) => setAov(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-400"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                  <span>$20</span>
                  <span>$250</span>
                  <span>$500</span>
                </div>
              </div>

            </div>

            {/* Simulated Results Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider block">PROJECTED MONTHLY OUTCOME</span>
                  <span className="text-sm font-bold text-white">Based on Xipitechnologia Performance Benchmarks</span>
                </div>
                <Sparkles className="h-6 w-6 text-emerald-400 animate-pulse" />
              </div>

              {/* Main Projected Revenue Display */}
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                  ESTIMATED GROSS REVENUE
                </span>
                <span className="text-4xl sm:text-6xl font-black text-white font-display tracking-tight">
                  ${projectedRevenue.toLocaleString()}
                </span>
                <span className="text-xs text-emerald-300/80 block mt-2 font-medium">
                  At {targetRoas}x Return on Ad Spend
                </span>
              </div>

              {/* Breakdown KPIs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                  <span className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">Net Monthly Profit</span>
                  <span className="text-xl font-extrabold text-emerald-400">${projectedNetProfit.toLocaleString()}</span>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                  <span className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">Total Conversions</span>
                  <span className="text-xl font-extrabold text-white">{projectedConversions.toLocaleString()}</span>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">Target CPA</span>
                  <span className="text-xl font-extrabold text-blue-400">${projectedCpa}</span>
                </div>
              </div>

              {/* CTA trigger */}
              <div className="pt-2">
                <button
                  onClick={onContactClick}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-black font-extrabold text-sm py-4 rounded-xl shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Claim Strategy Audit For ${adSpend.toLocaleString()}/mo Spend</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. MULTI-CHANNEL PAID MEDIA MATRIX (INTERACTIVE TABS) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
                OMNI-CHANNEL DOMINANCE
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Multi-Channel Acquisition Matrix.
              </h2>
            </div>
            <p className="text-zinc-400 text-sm max-w-md">
              We engineer specialized media-buying strategies tailored to each platform's distinct user behavior and algorithmic mechanics.
            </p>
          </div>

          {/* Interactive Channel Tabs */}
          <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {channelMatrix.map((ch) => {
              const Icon = ch.icon;
              const isSelected = selectedChannel === ch.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => setSelectedChannel(ch.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border ${
                    isSelected
                      ? 'bg-white text-black border-white shadow-xl shadow-white/10 scale-105'
                      : 'bg-zinc-900/80 text-zinc-400 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" style={{ color: isSelected ? '#000' : ch.color }} />
                  <span>{ch.name}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Channel Showcase Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChannelObj.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className={`rounded-3xl bg-gradient-to-br ${activeChannelObj.bgColor} border ${activeChannelObj.borderColor} p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden`}
            >
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-zinc-300 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                      {activeChannelObj.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                      {activeChannelObj.stats}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                    {activeChannelObj.name}
                  </h3>

                  <p className="text-zinc-300 text-base leading-relaxed">
                    {activeChannelObj.desc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {activeChannelObj.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-zinc-200">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={onContactClick}
                      className="inline-flex items-center gap-2.5 bg-white text-black font-extrabold text-xs px-6 py-3.5 rounded-xl hover:bg-zinc-200 transition-all"
                    >
                      <span>Scale {activeChannelObj.name}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                </div>

                {/* Right Visual Box */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full bg-black/60 rounded-2xl p-6 border border-white/15 space-y-4">
                    <div className="flex items-center justify-between text-xs text-zinc-400 font-bold border-b border-white/10 pb-3">
                      <span>CAMPAIGN ARCHITECTURE</span>
                      <span className="text-emerald-400">OPTIMIZED</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                        <span className="font-semibold text-zinc-200">Top Funnel (Broad CBO)</span>
                        <span className="font-mono text-zinc-400">60% Budget</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                        <span className="font-semibold text-zinc-200">Creative Sandbox (DCO)</span>
                        <span className="font-mono text-zinc-400">25% Budget</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                        <span className="font-semibold text-zinc-200">Bottom Retargeting (CAPI)</span>
                        <span className="font-mono text-zinc-400">15% Budget</span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-400">
                      <span>Server-Side CAPI Active</span>
                      <span className="text-emerald-400 font-mono font-bold">100% Match Quality</span>
                    </div>
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. THE 5-PHASE PERFORMANCE FRAMEWORK */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
              METHODOLOGY & EXECUTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              The 5-Phase Performance Engine.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              A systematic framework built to eliminate wasted ad spend, engineer high-converting creative, and scale revenue predictably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  className="bg-zinc-900/60 rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-zinc-400 group-hover:text-white transition-colors">
                        {step.step}
                      </span>
                      <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Icon className="h-4 w-4" style={{ color: step.color }} />
                      </div>
                    </div>

                    <h3 className="text-lg font-extrabold text-white leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 mt-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                      <Check className="h-3 w-3" /> Phase Complete
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. CASE STUDY PROOF SHOWCASE */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
                VERIFIABLE PROOF
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Real Scale. Real Net Profit.
              </h2>
            </div>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 text-xs font-extrabold text-zinc-300 hover:text-white uppercase tracking-wider"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="h-4 w-4 text-brand-red" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudiesData.map((cs, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className="bg-zinc-900/50 rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cs.image}
                      alt={cs.client}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 text-[10px] font-extrabold uppercase tracking-widest bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-white border border-white/10">
                      {cs.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-extrabold text-white">
                      {cs.client}
                    </h3>

                    {/* Metric Badges */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white/5 rounded-xl p-2.5 border border-white/10">
                        <span className="text-[10px] text-zinc-400 block">Ad Spend</span>
                        <span className="font-extrabold text-white">{cs.spend}</span>
                      </div>
                      <div className="bg-emerald-500/10 rounded-xl p-2.5 border border-emerald-500/20">
                        <span className="text-[10px] text-emerald-400 block">ROAS / MER</span>
                        <span className="font-extrabold text-emerald-400">{cs.roas}</span>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                      {cs.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={onContactClick}
                    className="w-full bg-white/5 hover:bg-white/10 text-white text-xs font-bold py-3 rounded-xl border border-white/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>View Campaign Breakdown</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. FAQ ACCORDION SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Performance Marketing FAQ.
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-zinc-900/60 rounded-2xl border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-emerald-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 shrink-0 text-emerald-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 shrink-0 text-zinc-400" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal border-t border-white/5 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. CLOSING CTA BANNER */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 relative overflow-hidden">
        
        {/* Glow backdrop */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[350px] bg-gradient-to-r from-emerald-500/20 to-brand-red/20 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8">
          
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
            TAKE THE LEAP TO PROFITABLE SCALE
          </span>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Stop Burning Ad Spend. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Start Engineering Predictable ROAS.
            </span>
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Claim your complimentary 30-minute Performance Marketing & Server CAPI Audit today. We'll uncover hidden ad spend leaks and show you exact roadmap numbers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold text-sm px-10 py-5 rounded-2xl shadow-2xl shadow-brand-red/40 transition-all duration-300 hover:scale-105"
            >
              <span>Schedule Free Strategy Session</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <p className="text-xs text-zinc-500 font-medium">
            No long-term contracts • Direct access to senior media buyers • Guaranteed ROAS roadmap
          </p>

        </div>
      </section>

    </div>
  );
}
