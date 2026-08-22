import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Target, TrendingUp, MousePointer, CheckCircle2, 
  ArrowRight, Sparkles, ChevronDown, ChevronUp, 
  Zap, BarChart3, Filter, ArrowUpRight, Cpu, LineChart, Globe, RefreshCw,
  ShoppingBag, Check, MapPin, Layers, DollarSign
} from 'lucide-react';

const statsData = [
  { value: 'PPC', label: 'Lead-Focused Campaigns', detail: 'Campaigns built to attract high-intent customers and generate qualified enquiries.', color: '#4285F4' },
  { value: 'Google Ads', label: 'Search Visibility', detail: 'Reach customers actively searching for your products and services.', color: '#34A853' },
  { value: 'ROI', label: 'Performance Optimization', detail: 'Continuous testing and optimization to improve campaign efficiency.', color: '#FBBC05' },
  { value: '100%', label: 'Transparent Reporting', detail: 'Clear reporting on clicks, conversions, spending, and campaign performance.', color: '#00D4FF' }
];

const ppcChannels = [
  {
    id: 'google-search',
    name: 'Google Search Ads',
    badge1: 'HIGH-INTENT CAPTURE',
    badge2: 'TARGETED SEARCH • QUALIFIED LEADS',
    color: '#4285F4',
    bgColor: 'from-blue-500/10 to-indigo-500/5',
    borderColor: 'border-blue-500/30',
    icon: Search,
    desc: 'Reach customers actively searching for your products or services on Google. Our Google Ads Management Services focus on relevant keywords, compelling ad copy, precise targeting, and conversion tracking to turn search intent into qualified leads.',
    features: [
      'High-intent keyword targeting',
      'Negative keyword optimization',
      'Conversion-focused ad copy',
      'Location & audience targeting',
      'Continuous campaign optimization'
    ],
    buttonText: 'Explore Google Search Ads →'
  },
  {
    id: 'google-display',
    name: 'Google Display Ads',
    badge1: 'BRAND AWARENESS',
    badge2: 'VISUAL REACH • YOUTUBE & APPS',
    color: '#34A853',
    bgColor: 'from-emerald-500/10 to-teal-500/5',
    borderColor: 'border-emerald-500/30',
    icon: Globe,
    desc: 'Build awareness and reconnect with potential customers across websites, apps, and YouTube with targeted Display campaigns.',
    features: [
      'Custom intent audience targeting',
      'Google Display Network reach',
      'YouTube video & discovery ads',
      'Responsive display creative testing',
      'Placement & contextual exclusions'
    ],
    buttonText: 'Explore Google Display Ads →'
  },
  {
    id: 'google-shopping',
    name: 'Google Shopping Ads',
    badge1: 'E-COMMERCE GROWTH',
    badge2: 'PRODUCT DISCOVERY • HIGH CONVERSION',
    color: '#FBBC05',
    bgColor: 'from-amber-500/10 to-orange-500/5',
    borderColor: 'border-amber-500/30',
    icon: ShoppingBag,
    desc: 'Showcase your products with images, pricing, and relevant information to reach customers ready to compare and buy.',
    features: [
      'Merchant Center feed optimization',
      'Product title & attribute enrichment',
      'Custom labels & margin bidding',
      'Google Shopping visual placement',
      'Performance Max shopping assets'
    ],
    buttonText: 'Explore Google Shopping Ads →'
  },
  {
    id: 'meta-ads',
    name: 'Meta Ads',
    badge1: 'PAID SOCIAL LEAD GEN',
    badge2: 'FACEBOOK & INSTAGRAM SCALE',
    color: '#00A4EF',
    bgColor: 'from-cyan-500/10 to-blue-500/5',
    borderColor: 'border-cyan-500/30',
    icon: Target,
    desc: 'Reach targeted audiences across Facebook and Instagram with lead generation, conversion, and remarketing campaigns.',
    features: [
      'Custom audience & lookalike modeling',
      'High-converting lead forms',
      'Direct Instagram DM & Messenger funnels',
      'Creative testing & video ads',
      'Conversion API (CAPI) tracking'
    ],
    buttonText: 'Explore Meta Ads →'
  },
  {
    id: 'remarketing',
    name: 'Remarketing',
    badge1: 'RETENTION & RECOVERY',
    badge2: 'CONVERSION RECOVERY • AUDIENCE LISTS',
    color: '#EC4899',
    bgColor: 'from-pink-500/10 to-rose-500/5',
    borderColor: 'border-pink-500/30',
    icon: RefreshCw,
    desc: "Reconnect with visitors who interacted with your website but didn't convert and bring them back with relevant campaigns.",
    features: [
      'Cart abandonment recovery',
      'Dynamic product remarketing',
      'Segmented audience lists by intent',
      'Frequency capping to avoid fatigue',
      'Cross-platform retargeting funnels'
    ],
    buttonText: 'Explore Remarketing →'
  }
];

const performancePillars = [
  {
    num: '01',
    title: 'Targeted Keywords',
    tag: 'KEYWORD-FOCUSED CAMPAIGNS',
    icon: Search,
    color: '#4285F4',
    desc: 'We identify high-intent search terms that align with your products, services, location, and customer intent.'
  },
  {
    num: '02',
    title: 'Relevant Ad Copy',
    tag: 'CONVERSION-FOCUSED ADS',
    icon: Target,
    color: '#34A853',
    desc: 'We create compelling, keyword-relevant ads designed to match search intent and encourage users to take action.'
  },
  {
    num: '03',
    title: 'Landing Page Experience',
    tag: 'BETTER USER EXPERIENCE',
    icon: Zap,
    color: '#FBBC05',
    desc: 'We evaluate landing pages for relevance, speed, usability, and conversion opportunities to improve the journey from click to lead.'
  },
  {
    num: '04',
    title: 'Smart Campaign Optimization',
    tag: 'CONTINUOUS OPTIMIZATION',
    icon: LineChart,
    color: '#00D4FF',
    desc: 'We continuously monitor search terms, bids, audiences, conversions, and campaign performance to improve efficiency.'
  }
];

const processSteps = [
  {
    step: 'Step 01',
    title: 'Search Intent & Keyword Research',
    color: '#4285F4',
    desc: 'We research your market, competitors, customer search behaviour, and high-intent keywords to build a strong PPC foundation.',
    highlights: 'Keyword Research • Competitor Analysis • Search Intent'
  },
  {
    step: 'Step 02',
    title: 'Campaign Structure & Targeting',
    color: '#34A853',
    desc: 'We organize campaigns and ad groups around relevant services, products, locations, audiences, and conversion goals.',
    highlights: 'Campaign Setup • Audience Targeting • Location Targeting'
  },
  {
    step: 'Step 03',
    title: 'Ad Copy & Extensions',
    color: '#FBBC05',
    desc: 'We create relevant, conversion-focused ad copy and use available ad assets to improve visibility and engagement.',
    highlights: 'Responsive Search Ads • Ad Assets • CTA Optimization'
  },
  {
    step: 'Step 04',
    title: 'Landing Page & Conversion Tracking',
    color: '#00D4FF',
    desc: 'We align landing pages with campaign intent and configure conversion tracking to measure calls, forms, purchases, and other valuable actions.',
    highlights: 'Landing Pages • Conversion Tracking • Analytics'
  },
  {
    step: 'Step 05',
    title: 'Bid & Campaign Optimization',
    color: '#8B5CF6',
    desc: 'We continuously monitor campaign performance, search terms, bids, conversions, and budget allocation to improve results.',
    highlights: 'Performance Monitoring • A/B Testing • Budget Optimization'
  }
];

const faqData = [
  {
    q: 'How does PPC Advertising differ from SEO?',
    a: 'PPC generates immediate visibility and traffic by bidding on high-intent search terms on Google Ads, whereas SEO builds sustainable organic search rankings over time. Combining PPC with SEO provides both instant lead flow and long-term search dominance.'
  },
  {
    q: 'How do you prevent wasted ad spend on irrelevant search clicks?',
    a: 'We deploy proactive negative keyword lists, tight search-intent match types, click-fraud filtering, and continuous search query audits to ensure your budget is invested exclusively in qualified prospects.'
  },
  {
    q: 'What monthly ad budget is ideal for PPC in Chandigarh & Tricity?',
    a: 'Campaign budgets typically start from ₹25,000 to ₹1,00,000+ per month depending on your industry, competition, target geography (Tricity vs Pan-India), and monthly lead generation goals.'
  },
  {
    q: 'How quickly can we start seeing leads and inquiries from Google Ads?',
    a: 'Once your campaigns, ad copy, conversion tracking, and landing pages are live, Google Ads begins capturing high-intent search queries immediately, generating inquiries within the very first week of launch.'
  },
  {
    q: 'Do you manage complete tracking including calls and WhatsApp leads?',
    a: 'Yes, 100%! We implement end-to-end conversion tracking for phone calls, WhatsApp inquiries, form submissions, and online purchases through Google Tag Manager and GA4.'
  }
];

export default function PpcAdvertising({ onContactClick }) {
  // Calculator States in INR
  const [monthlyBudget, setMonthlyBudget] = useState(50000);
  const [avgCpc, setAvgCpc] = useState(50);
  const [convRate, setConvRate] = useState(5.0);
  const [dealValue, setDealValue] = useState(5000);

  // Active channel matrix tab
  const [selectedChannel, setSelectedChannel] = useState('google-search');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Calculation outputs
  const projectedClicks = Math.round(monthlyBudget / (avgCpc || 1));
  const projectedConversions = Math.round(projectedClicks * (convRate / 100));
  const projectedRevenue = Math.round(projectedConversions * dealValue);

  const activeChannelObj = ppcChannels.find(c => c.id === selectedChannel) || ppcChannels[0];

  const scrollToCalc = () => {
    const el = document.getElementById('ppc-calc');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans select-none overflow-x-hidden pt-20">
      
      {/* Background Radial Lights */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-to-b from-blue-600/10 via-emerald-500/5 to-transparent rounded-full blur-[180px] pointer-events-none" />
      <div className="fixed top-[50%] left-[-200px] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* ------------------------------------------------------------- */}
      {/* 01 — HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative pt-24 pb-20 border-b border-white/10 overflow-hidden">
        
        {/* Background Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.06]">
          <span className="text-[16vw] font-black leading-none text-transparent tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.25)' }}>
            PPC ADS
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Section Label Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-md mb-8"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-blue-400 animate-pulse shadow-lg shadow-blue-400/50" />
            <span className="text-xs font-extrabold tracking-wider uppercase text-zinc-200">
              PPC ADVERTISING SERVICES • CHANDIGARH & TRICITY
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 space-y-6"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                Dominate Search Intent. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">
                  Maximize Your PPC ROI.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl">
                Reach customers when they're actively searching for your products or services. Our Google Ads Management Services and PPC strategies are designed to generate qualified leads, increase conversions, and maximize your advertising ROI.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onContactClick}
                  className="group relative inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-105"
                >
                  <span>Get Your Free PPC Audit</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={scrollToCalc}
                  className="inline-flex items-center gap-2.5 bg-white/5 hover:bg-white/10 text-white font-bold text-sm px-6 py-4 rounded-2xl border border-white/15 backdrop-blur-sm transition-all duration-300 hover:border-white/30"
                >
                  <MousePointer className="h-4 w-4 text-emerald-400" />
                  <span>Calculate Your PPC ROI</span>
                </button>
              </div>

              {/* Trust / Feature Badges */}
              <div className="pt-6 flex flex-wrap items-center gap-4 border-t border-white/10 text-xs text-zinc-300 font-medium">
                {['Google Search Ads', 'Google Display Ads', 'Google Shopping Ads', 'Remarketing', 'Conversion Tracking'].map((badge, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero Right Ad Preview Interactive Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl bg-zinc-900/90 border border-white/15 p-6 backdrop-blur-xl shadow-2xl shadow-blue-900/20 overflow-hidden space-y-4">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-blue-400" />
                    <span className="text-xs font-mono font-bold text-zinc-300 uppercase">
                      GOOGLE SEARCH ADS PREVIEW
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-bold">
                    HIGH INTENT
                  </span>
                </div>

                {/* Simulated Google Search Ad Container */}
                <div className="bg-black/70 rounded-2xl p-5 border border-blue-500/30 space-y-3">
                  
                  <div className="flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white bg-blue-600 px-1.5 py-0.5 rounded text-[10px]">Sponsored</span>
                      <span className="text-zinc-400 font-mono">https://www.yourbusiness.com/chandigarh</span>
                    </div>
                    <span className="text-emerald-400 font-mono font-bold">RANK #1</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-blue-400 hover:underline cursor-pointer leading-snug">
                    PPC Advertising Services in Chandigarh & Tricity | Qualified Leads
                  </h3>

                  <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                    Capture high-intent searches on Google. High conversion ad copy, location targeting, and transparent ROI reporting. Book your free strategy audit today!
                  </p>

                  {/* Sitelink Extensions */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-[11px]">
                    <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                      <span className="font-bold text-blue-400 block">Free PPC Audit</span>
                      <span className="text-zinc-400 text-[10px]">Identify growth opportunities</span>
                    </div>
                    <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                      <span className="font-bold text-blue-400 block">ROI Calculator</span>
                      <span className="text-zinc-400 text-[10px]">Estimate potential returns</span>
                    </div>
                  </div>

                </div>

                {/* Campaign Key Highlights */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs pt-2">
                  <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                    <span className="text-[10px] text-zinc-400 block">Search Focus</span>
                    <span className="font-mono font-bold text-white">Tricity & Pan-India</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                    <span className="text-[10px] text-zinc-400 block">Intent Level</span>
                    <span className="font-mono font-bold text-emerald-400">High Purchase</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                    <span className="text-[10px] text-zinc-400 block">Tracking</span>
                    <span className="font-mono font-bold text-blue-400">100% Verified</span>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

          {/* ------------------------------------------------------------- */}
          {/* 02 — STATS CARDS (Benefit-Based) */}
          {/* ------------------------------------------------------------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10">
            {statsData.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className="bg-zinc-900/50 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all hover:bg-zinc-900/80 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2 font-display" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-zinc-100 mb-2">{stat.label}</div>
                  <div className="text-xs text-zinc-400 font-normal leading-relaxed">{stat.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 03 — PPC CAMPAIGN SIMULATOR SECTION */}
      {/* ------------------------------------------------------------- */}
      <section id="ppc-calc" className="py-24 border-b border-white/10 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              PPC CAMPAIGN PLANNER
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Calculate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">
                Potential PPC ROI.
              </span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Estimate how your monthly advertising budget could translate into clicks, leads, and potential conversions based on your campaign goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Panel: Inputs */}
            <div className="lg:col-span-6 bg-zinc-900/80 rounded-3xl p-6 sm:p-8 border border-white/10 space-y-8 backdrop-blur-md">
              
              {/* Slider 1: Monthly Budget */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <label htmlFor="ppc-monthly-budget" className="text-zinc-300 flex items-center gap-2">
                    <span className="text-blue-400 font-mono font-bold">₹</span>
                    Monthly Advertising Budget
                  </label>
                  <span className="text-white font-mono text-lg font-extrabold bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                    ₹{monthlyBudget.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  id="ppc-monthly-budget"
                  type="range"
                  min={10000}
                  max={500000}
                  step={5000}
                  value={monthlyBudget}
                  onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-400"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                  <span>₹10,000</span>
                  <span>Example: ₹50,000</span>
                  <span>₹5,00,000+</span>
                </div>
              </div>

              {/* Slider 2: Average CPC */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <label htmlFor="ppc-avg-cpc" className="text-zinc-300 flex items-center gap-2">
                    <MousePointer className="h-4 w-4 text-emerald-400" />
                    Average Cost Per Click (CPC)
                  </label>
                  <span className="text-emerald-400 font-mono text-lg font-extrabold bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                    ₹{avgCpc}
                  </span>
                </div>
                <input
                  id="ppc-avg-cpc"
                  type="range"
                  min={5}
                  max={250}
                  step={5}
                  value={avgCpc}
                  onChange={(e) => setAvgCpc(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                  <span>₹5</span>
                  <span>Example: ₹50</span>
                  <span>₹250</span>
                </div>
              </div>

              {/* Slider 3: Conversion Rate */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <label htmlFor="ppc-conv-rate" className="text-zinc-300 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-amber-400" />
                    Landing Page Conversion Rate
                  </label>
                  <span className="text-amber-400 font-mono text-lg font-extrabold bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
                    {convRate}%
                  </span>
                </div>
                <input
                  id="ppc-conv-rate"
                  type="range"
                  min={1.0}
                  max={15.0}
                  step={0.5}
                  value={convRate}
                  onChange={(e) => setConvRate(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                  <span>1.0%</span>
                  <span>Example: 5%</span>
                  <span>15.0%</span>
                </div>
              </div>

              {/* Slider 4: Deal Value */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <label htmlFor="ppc-deal-value" className="text-zinc-300 flex items-center gap-2">
                    <Target className="h-4 w-4 text-purple-400" />
                    Average Lead / Order Value
                  </label>
                  <span className="text-white font-mono text-lg font-extrabold bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                    ₹{dealValue.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  id="ppc-deal-value"
                  type="range"
                  min={500}
                  max={50000}
                  step={500}
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                  <span>₹500</span>
                  <span>Example: ₹5,000</span>
                  <span>₹50,000</span>
                </div>
              </div>

            </div>

            {/* Right Panel: Projected PPC Performance */}
            <div className="lg:col-span-6 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs text-blue-400 font-bold uppercase tracking-wider block">PROJECTED PPC PERFORMANCE</span>
                  <span className="text-sm font-bold text-white">Estimated Campaign Potential</span>
                </div>
                <Sparkles className="h-6 w-6 text-blue-400 animate-pulse" />
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 text-center">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-1">
                  ESTIMATED REVENUE OPPORTUNITY
                </span>
                <span className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
                  ₹{projectedRevenue.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                  <span className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">Estimated Monthly Clicks</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-white">{projectedClicks.toLocaleString('en-IN')}</span>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                  <span className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">Estimated Leads</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-emerald-400">{projectedConversions.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onContactClick}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-extrabold text-sm py-4 rounded-xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Get a Custom PPC Strategy</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <p className="text-[11px] text-zinc-500 leading-relaxed text-center font-normal pt-1">
                Illustrative estimates only. Actual performance depends on industry, competition, keywords, budget and conversion rates.
              </p>

            </div>

          </div>

          {/* ------------------------------------------------------------- */}
          {/* 04 — LOCATION-BASED SUPPORTING COPY */}
          {/* ------------------------------------------------------------- */}
          <div className="bg-zinc-900/60 rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-4 text-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                <MapPin className="h-3.5 w-3.5" />
                <span>CHANDIGARH • MOHALI • PANCHKULA • ZIRAKPUR • TRICITY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                PPC Advertising for Businesses in Chandigarh & Tricity
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                Whether you're based in Chandigarh, Mohali, Panchkula, Zirakpur or nearby Tricity areas, our PPC campaigns are built around your target audience, location, budget and business objectives.
              </p>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
                From Google Search Ads and Display Ads to Shopping and Remarketing campaigns, we help businesses reach high-intent customers and turn paid traffic into measurable business opportunities.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* Section 1 — PPC Channels */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                MULTI-PLATFORM PPC ADVERTISING
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                PPC Channels That <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">
                  Drive Results.
                </span>
              </h2>
            </div>
            <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
              From high-intent Google searches to product discovery and remarketing, we build paid advertising campaigns around where your customers are most likely to take action.
            </p>
          </div>

          {/* Channel Tabs */}
          <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {ppcChannels.map((ch) => {
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

          {/* Selected Channel Display */}
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
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-zinc-300 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                      {activeChannelObj.badge1}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                      {activeChannelObj.badge2}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                    {activeChannelObj.name}
                  </h3>

                  <p className="text-zinc-300 text-base leading-relaxed">
                    {activeChannelObj.desc}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-1">Key Focus Areas:</span>
                    {activeChannelObj.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-zinc-200">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={onContactClick}
                      className="inline-flex items-center gap-2.5 bg-white text-black font-extrabold text-xs px-6 py-3.5 rounded-xl hover:bg-zinc-200 transition-all"
                    >
                      <span>{activeChannelObj.buttonText}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full bg-black/60 rounded-2xl p-6 border border-white/15 space-y-4">
                    <div className="flex items-center justify-between text-xs text-zinc-400 font-bold border-b border-white/10 pb-3">
                      <span>CAMPAIGN HIGHLIGHTS</span>
                      <span className="text-blue-400 font-mono">OPTIMIZED</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                        <span className="font-semibold text-zinc-200">High-Intent Targeting</span>
                        <span className="font-mono text-emerald-400">Active</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                        <span className="font-semibold text-zinc-200">Negative Keyword Filter</span>
                        <span className="font-mono text-zinc-300">Protected</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                        <span className="font-semibold text-zinc-200">Conversion Tracking</span>
                        <span className="font-mono text-blue-400">Configured</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* Section 2 — Quality / Performance */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
              BETTER RELEVANCE • BETTER PERFORMANCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              The Formula Behind <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">
                Better PPC Performance.
              </span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Successful PPC campaigns are built on more than keywords. We align targeting, ad relevance, landing pages, bidding, and conversion data to improve campaign efficiency and reduce wasted ad spend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performancePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  className="bg-zinc-900/60 rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Icon className="h-5 w-5" style={{ color: pillar.color }} />
                      </div>
                      <span className="text-xs font-mono font-bold text-zinc-500">
                        {pillar.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-white leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 mt-4">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                      {pillar.tag}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* Section 3 — PPC Campaign Process (5-Step Blueprint) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              PPC EXECUTION ROADMAP
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Our 5-Step PPC <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">
                Campaign Blueprint.
              </span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              From research and setup to optimization and reporting, our PPC Management Services follow a structured process designed around your business goals and advertising budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className="bg-zinc-900/50 rounded-2xl p-6 border border-white/10 flex flex-col justify-between space-y-4 hover:border-white/20 transition-colors"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-blue-400 block">
                    {step.step}
                  </span>
                  <h3 className="text-base font-extrabold text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-zinc-400">
                  {step.highlights}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tricity-Focused Process Line */}
          <div className="bg-gradient-to-r from-blue-950/40 via-zinc-900 to-emerald-950/40 p-8 rounded-3xl border border-white/10 text-center space-y-3">
            <h4 className="text-xl font-bold text-white">
              PPC Services for Chandigarh & Tricity Businesses
            </h4>
            <p className="text-zinc-300 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed">
              Whether your business operates in Chandigarh, Mohali, Panchkula, or Zirakpur, we build PPC campaigns around your target location, audience, competition, and budget.
            </p>
            <p className="text-zinc-400 text-xs max-w-3xl mx-auto leading-relaxed">
              Our PPC Advertising Services in Chandigarh & Tricity help businesses generate relevant traffic, qualified leads, enquiries, and sales through strategically managed paid campaigns.
            </p>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* FAQ ACCORDION */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              PPC Advertising FAQ.
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-zinc-900/60 rounded-2xl border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-blue-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 shrink-0 text-blue-400" />
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
      {/* CLOSING CTA BANNER */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[350px] bg-gradient-to-r from-blue-600/20 to-emerald-500/20 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
            START YOUR PPC CAMPAIGN
          </span>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Generate Qualified Leads & Maximize PPC ROI?
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Get your free PPC strategy audit. We'll analyze your search keywords, ad relevance, negative keyword opportunities, and conversion funnel for Chandigarh & beyond.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm px-10 py-5 rounded-2xl shadow-2xl shadow-blue-600/40 transition-all duration-300 hover:scale-105"
            >
              <span>Get Your Free PPC Audit</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
