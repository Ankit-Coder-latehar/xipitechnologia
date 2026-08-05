import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Target, TrendingUp, DollarSign, MousePointer, CheckCircle2, 
  ArrowRight, Sparkles, Award, ShieldCheck, ChevronDown, ChevronUp, 
  Zap, BarChart3, Filter, ArrowUpRight, Cpu, LineChart, Globe, RefreshCw,
  ShoppingBag, Video, Layers, Check, ExternalLink
} from 'lucide-react';

const statsData = [
  { value: '$20M+', label: 'Search Ad Spend Managed', detail: 'Across Google, Bing & Amazon Ads', color: '#4285F4' },
  { value: '5.4x', label: 'Average Search ROAS', detail: 'Blended return on paid search spend', color: '#34A853' },
  { value: '9.4/10', label: 'Average Quality Score', detail: 'Ensures lowest CPCs in auction', color: '#FBBC05' },
  { value: '-38%', label: 'Average CPA Reduction', detail: 'Within first 30 days of takeover', color: '#EA4335' }
];

const ppcChannels = [
  {
    id: 'google-search',
    name: 'Google Search Ads',
    tag: 'HIGH INTENT CAPTURE',
    color: '#4285F4',
    bgColor: 'from-blue-500/10 to-indigo-500/5',
    borderColor: 'border-blue-500/30',
    icon: Search,
    stats: '10/10 Quality Score • 6.2x Search ROAS',
    desc: 'Capture users at the exact millisecond they search for your products or services with laser-targeted Responsive Search Ads (RSAs) and SKAG architectures.',
    features: [
      'Single Keyword & STAG Ad Group Architecture',
      'Negative Keyword Guardrails & Fraud Filter',
      'Dynamic Keyword Insertion (DKI) Copywriting',
      'Full Sitelink & Structured Snippet Extensions'
    ]
  },
  {
    id: 'pmax',
    name: 'Performance Max (PMax)',
    tag: 'AI-POWERED OMNI-CHANNEL',
    color: '#34A853',
    bgColor: 'from-emerald-500/10 to-teal-500/5',
    borderColor: 'border-emerald-500/30',
    icon: Cpu,
    stats: '+310% Conversion Volume • 4.9x ROAS',
    desc: 'Harness Google’s AI bidding across Search, Shopping, YouTube, Display, Discover, and Maps with structured asset groups and custom audience signals.',
    features: [
      'High-Intent First-Party Audience Signals',
      'Custom Product Title & Feed Optimization',
      'Asset Group Granularity & Exclusion Rules',
      'Target ROAS (tROAS) Algorithmic Bidding'
    ]
  },
  {
    id: 'google-shopping',
    name: 'Google Shopping & Merchant',
    tag: 'E-COMMERCE DOMINANCE',
    color: '#FBBC05',
    bgColor: 'from-amber-500/10 to-orange-500/5',
    borderColor: 'border-amber-500/30',
    icon: ShoppingBag,
    stats: '12% Higher Conversion Rate',
    desc: 'Dominate Google’s visual product grid with optimized Merchant Center feeds, custom labels, pricing competitiveness, and Buy Box optimization.',
    features: [
      'Google Merchant Center Feed Diagnostics',
      'Custom Label Margin-Based Segmentation',
      'Product Title SEO & GTIN Enrichment',
      'Promotional Badging & Review Ratings'
    ]
  },
  {
    id: 'bing-ads',
    name: 'Microsoft (Bing) Ads',
    tag: 'HIGH INCOME DEMO',
    color: '#00A4EF',
    bgColor: 'from-cyan-500/10 to-blue-500/5',
    borderColor: 'border-cyan-500/30',
    icon: Globe,
    stats: '35% Lower CPC vs Google',
    desc: 'Reach 44M+ desktop searchers on Bing, Yahoo, and MSN with higher disposable income, lower auction competition, and Copilot AI integrations.',
    features: [
      'LinkedIn Profile & Job Title Targeting',
      'Automated Google Ads Campaign Import',
      'Copilot AI Conversational Search Placements',
      'Higher Purchasing Power Demographics'
    ]
  },
  {
    id: 'amazon-ppc',
    name: 'Amazon Sponsored Ads',
    tag: 'MARKETPLACE SCALE',
    color: '#FF9900',
    bgColor: 'from-orange-500/10 to-amber-500/5',
    borderColor: 'border-orange-500/30',
    icon: Target,
    stats: '14.2% Low ACoS',
    desc: 'Dominate Amazon search results with Sponsored Products, Sponsored Brands Video, and Product Display Ads to capture high-intent buyers.',
    features: [
      'Sponsored Product Keyword Bidding',
      'Sponsored Brands Video & Storefront Ads',
      'ASIN Competitor Conquesting Strategy',
      'Automated ACoS & TACoS Optimization'
    ]
  }
];

const qualityScorePillars = [
  {
    title: 'Expected Click-Through Rate (CTR)',
    icon: MousePointer,
    color: '#4285F4',
    desc: 'We engineer high-converting Responsive Search Ads with emotional hooks and dynamic keyword insertion that double standard CTRs.'
  },
  {
    title: 'Ad Relevance & Message Match',
    icon: Target,
    color: '#34A853',
    desc: 'Zero mismatch. Every ad group is meticulously aligned with the search query to ensure 100% relevance signals in Google’s auction.'
  },
  {
    title: 'Landing Page Speed & UX',
    icon: Zap,
    color: '#FBBC05',
    desc: 'Sub-1-second landing page load speeds with exact keyword headline alignment, driving maximum conversion rates and high Quality Scores.'
  },
  {
    title: 'Smart Bidding Strategy',
    icon: LineChart,
    color: '#EA4335',
    desc: 'Machine-learning bidding algorithms (tROAS, tCPA) tuned with negative keyword lists to exclude wasteful non-converting search terms.'
  }
];

const processSteps = [
  {
    step: 'Step 01',
    title: 'Search Intent & Negative Audit',
    color: '#4285F4',
    desc: 'We analyze historical search queries to strip out wasted ad spend on irrelevant searches and identify gold-mine long-tail keywords.'
  },
  {
    step: 'Step 02',
    title: 'Campaign Architecture Setup',
    color: '#34A853',
    desc: 'We build clean, segmented campaign structures (Search, PMax, Retargeting) with dedicated ad groups and granular match types.'
  },
  {
    step: 'Step 03',
    title: 'Ad Copy & Extension Engineering',
    color: '#FBBC05',
    desc: 'Crafting 15-headline RSAs, sitelinks, callout extensions, price extensions, and location extensions for maximum SERP real estate.'
  },
  {
    step: 'Step 04',
    title: 'Landing Page CRO Alignment',
    color: '#EA4335',
    desc: 'Building lightning-fast post-click landing pages optimized for mobile, featuring clear CTAs, trust badges, and frictionless forms.'
  },
  {
    step: 'Step 05',
    title: 'Bid Optimization & ROAS Scaling',
    color: '#8B5CF6',
    desc: 'Continuous keyword bid adjustments, dayparting, device bid tweaks, and scaling budget into high-ROAS campaign channels.'
  }
];

const caseStudies = [
  {
    client: 'Apex Legal Partners',
    category: 'High-Ticket B2B Legal',
    spend: '$35,000 / mo',
    roas: '6.4x ROAS',
    cpa: '$115 Cost Per Lead',
    summary: 'Captured high-intent search traffic for commercial litigation, reducing CPL by 44% while tripling qualified cases.'
  },
  {
    client: 'Lumina Home Decor',
    category: 'E-Commerce Store',
    spend: '$80,000 / mo',
    roas: '5.8x ROAS',
    cpa: '$24.50 CPA',
    summary: 'Re-structured Google PMax & Merchant Center feeds, driving a 310% increase in revenue during peak Q4 shopping.'
  },
  {
    client: 'SaaSify Enterprise',
    category: 'B2B Software',
    spend: '$50,000 / mo',
    roas: '4.9x MER',
    cpa: '$82 Demo CAC',
    summary: 'Combined Google Search Ads with Bing Ads and LinkedIn Matched Audiences to scale monthly demo requests 4x.'
  }
];

const faqData = [
  {
    q: 'How does PPC Advertising differ from Social Media Paid Ads?',
    a: 'PPC search advertising captures high-intent demand — users actively searching for your exact product or service right now. Social media ads push awareness to passive scrollers. Search PPC yields higher immediate conversion rates because searchers already have buying intent.'
  },
  {
    q: 'What is Google Quality Score and why does it matter?',
    a: 'Quality Score (rated 1 to 10) is Google’s rating of your ad quality, keyword relevance, and landing page experience. Higher Quality Scores lower your Cost Per Click (CPC) and give you top ad positions for less money than competitors.'
  },
  {
    q: 'How do you prevent wasted spend on irrelevant search clicks?',
    a: 'We deploy comprehensive negative keyword lists (often 1,000+ terms), exact & phrase match focus, click-fraud protection software, and daily search term audits to ensure your budget is spent strictly on high-intent buyers.'
  },
  {
    q: 'What monthly ad budget do you recommend for PPC campaigns?',
    a: 'We recommend starting with a minimum search ad budget of $3,000 to $5,000/month for local or niche B2B campaigns, and $10,000+/month for nationwide e-commerce or high-competition industries.'
  },
  {
    q: 'Are you a certified Google Premier Partner agency?',
    a: 'Yes! Xipitechnologia’s search media buyers are Google Certified Specialists across Search, Display, Measurement, and Performance Max.'
  }
];

export default function PpcAdvertising({ onContactClick }) {
  // Calculator States
  const [monthlyBudget, setMonthlyBudget] = useState(10000);
  const [avgCpc, setAvgCpc] = useState(3.50);
  const [convRate, setConvRate] = useState(4.5);
  const [dealValue, setDealValue] = useState(150);

  // Active channel matrix tab
  const [selectedChannel, setSelectedChannel] = useState('google-search');

  // Ad preview state toggle
  const [adPreviewType, setAdPreviewType] = useState('search');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Calculation outputs
  const projectedClicks = Math.round(monthlyBudget / (avgCpc || 1));
  const projectedConversions = Math.round(projectedClicks * (convRate / 100));
  const projectedRevenue = Math.round(projectedConversions * dealValue);
  const projectedRoas = (projectedRevenue / (monthlyBudget || 1)).toFixed(2);
  const projectedCpl = (monthlyBudget / (projectedConversions || 1)).toFixed(2);

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
      {/* 1. HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative pt-24 pb-20 border-b border-white/10 overflow-hidden">
        
        {/* Background Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.06]">
          <span className="text-[16vw] font-black leading-none text-transparent tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.25)' }}>
            PPC ADS
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-md mb-8"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-blue-400 animate-pulse shadow-lg shadow-blue-400/50" />
            <span className="text-xs font-extrabold tracking-wider uppercase text-zinc-200">
              PRECISION INTENT ENGINE • GOOGLE & BING SEARCH MASTERY
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
                Dominating Search Intent. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">
                  Maximizing Paid Search ROI.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl">
                We manage over <span className="text-white font-bold">$20M+ in search ad campaigns</span>, combining 10/10 Quality Score optimization, negative keyword guardrails, and automated smart bidding to capture high-intent buyers before your competitors do.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onContactClick}
                  className="group relative inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-105"
                >
                  <span>Book Free PPC Audit</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={scrollToCalc}
                  className="inline-flex items-center gap-2.5 bg-white/5 hover:bg-white/10 text-white font-bold text-sm px-6 py-4 rounded-2xl border border-white/15 backdrop-blur-sm transition-all duration-300 hover:border-white/30"
                >
                  <MousePointer className="h-4 w-4 text-emerald-400" />
                  <span>Calculate Keyword ROI</span>
                </button>
              </div>

              {/* Micro Proof Features */}
              <div className="pt-6 flex flex-wrap items-center gap-6 border-t border-white/10 text-xs text-zinc-400 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-400" />
                  <span>Certified Google Premier Partner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-400" />
                  <span>Click-Fraud Protection Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-400" />
                  <span>Sub-1s Landing Page Speed</span>
                </div>
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
                      GOOGLE AD AUCTION PREVIEW
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-bold">
                    QUALITY SCORE 10/10
                  </span>
                </div>

                {/* Simulated Google Search Ad Container */}
                <div className="bg-black/70 rounded-2xl p-5 border border-blue-500/30 space-y-3">
                  
                  <div className="flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white bg-blue-600 px-1.5 py-0.5 rounded text-[10px]">Sponsored</span>
                      <span className="text-zinc-400 font-mono">https://www.yourbrand.com/ppc-growth</span>
                    </div>
                    <span className="text-emerald-400 font-mono font-bold">TOP POS #1</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-blue-400 hover:underline cursor-pointer leading-snug">
                    #1 Performance Marketing & PPC Agency | Scale ROAS 5x
                  </h3>

                  <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                    Turn search intent into predictable profit. Google Certified Premier Partner. Zero wasted ad spend with negative keyword guardrails. Get your free 30-min strategy audit!
                  </p>

                  {/* Sitelink Extensions */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-[11px]">
                    <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                      <span className="font-bold text-blue-400 block">Free PPC Audit</span>
                      <span className="text-zinc-400 text-[10px]">Uncover search leaks</span>
                    </div>
                    <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                      <span className="font-bold text-blue-400 block">ROAS Calculator</span>
                      <span className="text-zinc-400 text-[10px]">Simulate conversion lift</span>
                    </div>
                  </div>

                </div>

                {/* Auction Performance Footer */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs pt-2">
                  <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                    <span className="text-[10px] text-zinc-400 block">Avg CPC</span>
                    <span className="font-mono font-bold text-white">$2.10</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                    <span className="text-[10px] text-zinc-400 block">CTR</span>
                    <span className="font-mono font-bold text-emerald-400">8.4%</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                    <span className="text-[10px] text-zinc-400 block">Impr Share</span>
                    <span className="font-mono font-bold text-blue-400">94.2%</span>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

          {/* Stats Bar */}
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
      {/* 2. INTERACTIVE PPC ROI CALCULATOR */}
      {/* ------------------------------------------------------------- */}
      <section id="ppc-calc" className="py-24 border-b border-white/10 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              SEARCH CAMPAIGN SIMULATOR
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Calculate Your Paid Search ROI.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Test how CPC optimizations, conversion rate uplifts, and high Quality Scores translate into gross revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Sliders Box */}
            <div className="lg:col-span-6 bg-zinc-900/80 rounded-3xl p-6 sm:p-8 border border-white/10 space-y-8 backdrop-blur-md">
              
              {/* Slider 1: Monthly Budget */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <label htmlFor="ppc-monthly-budget" className="text-zinc-300 flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-blue-400" />
                    Monthly Paid Search Budget
                  </label>
                  <span className="text-white font-mono text-lg font-extrabold bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                    ${monthlyBudget.toLocaleString()}
                  </span>
                </div>
                <input
                  id="ppc-monthly-budget"
                  type="range"
                  min={2500}
                  max={100000}
                  step={2500}
                  value={monthlyBudget}
                  onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-400"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                  <span>$2,500</span>
                  <span>$50,000</span>
                  <span>$100,000+</span>
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
                    ${avgCpc.toFixed(2)}
                  </span>
                </div>
                <input
                  id="ppc-avg-cpc"
                  type="range"
                  min={0.50}
                  max={20.00}
                  step={0.25}
                  value={avgCpc}
                  onChange={(e) => setAvgCpc(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                  <span>$0.50</span>
                  <span>$5.00</span>
                  <span>$20.00</span>
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
                  max={12.0}
                  step={0.5}
                  value={convRate}
                  onChange={(e) => setConvRate(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                  <span>1.0%</span>
                  <span>4.5% (Industry Avg)</span>
                  <span>12.0%</span>
                </div>
              </div>

              {/* Slider 4: Deal Value */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <label htmlFor="ppc-deal-value" className="text-zinc-300 flex items-center gap-2">
                    <Target className="h-4 w-4 text-purple-400" />
                    Average Deal / Order Value
                  </label>
                  <span className="text-white font-mono text-lg font-extrabold bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                    ${dealValue}
                  </span>
                </div>
                <input
                  id="ppc-deal-value"
                  type="range"
                  min={25}
                  max={1000}
                  step={25}
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                  <span>$25</span>
                  <span>$500</span>
                  <span>$1,000</span>
                </div>
              </div>

            </div>

            {/* Results Box */}
            <div className="lg:col-span-6 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider block">PROJECTED PPC REVENUE</span>
                  <span className="text-sm font-bold text-white">Estimated Paid Search Performance</span>
                </div>
                <Sparkles className="h-6 w-6 text-blue-400 animate-pulse" />
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 text-center">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-1">
                  ESTIMATED GROSS REVENUE
                </span>
                <span className="text-4xl sm:text-6xl font-black text-white font-display tracking-tight">
                  ${projectedRevenue.toLocaleString()}
                </span>
                <span className="text-xs text-blue-300/80 block mt-2 font-medium">
                  At {projectedRoas}x Return On Ad Spend
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                  <span className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">Projected Clicks</span>
                  <span className="text-xl font-extrabold text-white">{projectedClicks.toLocaleString()}</span>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                  <span className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">Conversions</span>
                  <span className="text-xl font-extrabold text-emerald-400">{projectedConversions.toLocaleString()}</span>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">Cost Per Lead/Sale</span>
                  <span className="text-xl font-extrabold text-blue-400">${projectedCpl}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onContactClick}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-extrabold text-sm py-4 rounded-xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Claim Strategy Audit For ${monthlyBudget.toLocaleString()}/mo Spend</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. PPC CHANNELS MATRIX */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                MULTI-PLATFORM SEARCH MASTERY
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                PPC Channels We Dominate.
              </h2>
            </div>
            <p className="text-zinc-400 text-sm max-w-md">
              From high-intent Google search auctions to Microsoft Copilot ads and Amazon Marketplace Sponsored Products.
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
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
                      <span>Scale {activeChannelObj.name}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full bg-black/60 rounded-2xl p-6 border border-white/15 space-y-4">
                    <div className="flex items-center justify-between text-xs text-zinc-400 font-bold border-b border-white/10 pb-3">
                      <span>AUCTION EXCELLENCE</span>
                      <span className="text-blue-400 font-mono">10/10 SCORE</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                        <span className="font-semibold text-zinc-200">Search Query Exact Match</span>
                        <span className="font-mono text-emerald-400">100% Relevance</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                        <span className="font-semibold text-zinc-200">Negative Keyword Filter</span>
                        <span className="font-mono text-zinc-400">Zero Waste</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                        <span className="font-semibold text-zinc-200">Smart Bidding Strategy</span>
                        <span className="font-mono text-blue-400">tROAS Automated</span>
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
      {/* 4. QUALITY SCORE MATRIX */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
              LOWEST CPC • MAXIMUM AD POSITIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              The 10/10 Quality Score Formula.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Google rewards high-quality ads with discounted Cost Per Click. Here is how we engineer top ad placements for less money.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityScorePillars.map((pillar, idx) => {
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
                    <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="h-5 w-5" style={{ color: pillar.color }} />
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
                      OPTIMIZED 10/10 SIGNAL
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. 5-STEP PPC BLUEPRINT */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              EXECUTION ROADMAP
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Our 5-Step PPC Campaign Blueprint.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className="bg-zinc-900/50 rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
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
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. PROOF CASE STUDIES */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                PROVEN RESULTS
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Paid Search Success Stories.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/50 rounded-3xl p-6 border border-white/10 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {cs.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    {cs.client}
                  </h3>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white/5 rounded-xl p-2.5 border border-white/10">
                      <span className="text-[10px] text-zinc-400 block">Ad Spend</span>
                      <span className="font-extrabold text-white">{cs.spend}</span>
                    </div>
                    <div className="bg-emerald-500/10 rounded-xl p-2.5 border border-emerald-500/20">
                      <span className="text-[10px] text-emerald-400 block">ROAS / CPL</span>
                      <span className="font-extrabold text-emerald-400">{cs.roas}</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {cs.summary}
                  </p>
                </div>

                <button
                  onClick={onContactClick}
                  className="w-full bg-white/5 hover:bg-white/10 text-white text-xs font-bold py-3 rounded-xl border border-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Search Case Study</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. FAQ ACCORDION */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10">
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
      {/* 8. CLOSING CTA BANNER */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[350px] bg-gradient-to-r from-blue-600/20 to-emerald-500/20 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
            DOMINATE PAID SEARCH AUCTIONS
          </span>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Stop Paying Premium CPCs for Low-Intent Traffic. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
              Claim Your $1,500 PPC Audit Today.
            </span>
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Our Google Premier Partner team will perform a granular 40-point audit of your search campaigns, negative keywords, Quality Scores, and landing page UX.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm px-10 py-5 rounded-2xl shadow-2xl shadow-blue-600/40 transition-all duration-300 hover:scale-105"
            >
              <span>Schedule Free PPC Audit</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
