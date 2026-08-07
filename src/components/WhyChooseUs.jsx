import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, TrendingUp, Zap, ShieldCheck, BarChart3, Award, Sparkles, 
  Check, X, ArrowRight, Layers, Users, Cpu, DollarSign, Rocket, 
  MousePointerClick, RefreshCw, Flame, Globe, PieChart, Activity,
  CheckCircle, Video, Bot, LineChart, Search, CheckCircle2, ChevronRight
} from 'lucide-react';

const pillars = [
  {
    id: 'performance',
    title: 'Performance Marketing',
    tag: '📈 ROI-Focused',
    subtitle: 'Paid Acquisition',
    desc: 'Run ROI-focused campaigns that generate quality leads, increase conversions, and maximize your advertising budget.',
    icon: Target,
    stats: 'Max ROI',
    highlight: 'Quality Leads'
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    tag: '🔍 Organic Growth',
    subtitle: 'Rankings & Traffic',
    desc: 'Improve search rankings, boost organic traffic, and build long-term online visibility with proven SEO strategies.',
    icon: Search,
    stats: 'Top Rankings',
    highlight: 'Organic Traffic'
  },
  {
    id: 'ai',
    title: 'AI-Powered Marketing',
    tag: '🤖 Automation',
    subtitle: 'Process Streamlining',
    desc: 'Leverage AI tools and automation to streamline marketing processes, improve targeting, and enhance campaign performance.',
    icon: Bot,
    stats: 'High Efficiency',
    highlight: 'Smart Targeting'
  },
  {
    id: 'branding',
    title: 'Creative Branding & Design',
    tag: '🎨 Identity & Visuals',
    subtitle: 'Brand Excellence',
    desc: 'From eye-catching creatives to impactful brand identities, we design visuals that engage your audience and strengthen your brand.',
    icon: Video,
    stats: 'Memorable Identity',
    highlight: 'Visual Impact'
  },
  {
    id: 'analytics',
    title: 'Analytics & Reporting',
    tag: '📊 Actionable Insights',
    subtitle: 'Data Transparency',
    desc: 'Make informed decisions with detailed performance reports, campaign insights, and continuous optimization.',
    icon: BarChart3,
    stats: 'Clear Metrics',
    highlight: 'Continuous Growth'
  }
];

const metrics = [
  { value: 'Customized', label: 'Customized Strategies', detail: 'Marketing solutions tailored to your business goals and target audience.', icon: Rocket },
  { value: 'Data-Driven', label: 'Performance-Driven', detail: 'Every campaign is optimized to generate more leads, higher conversions, and better ROI.', icon: TrendingUp },
  { value: '100% Clear', label: 'Transparent Reporting', detail: 'Track campaign performance with regular updates, analytics, and actionable insights.', icon: ShieldCheck },
  { value: 'All-In-One', label: 'Complete Digital Solutions', detail: 'SEO, Performance Marketing, Meta Ads, PPC, Website Development, Branding, and more—all under one roof.', icon: Layers }
];

const comparisons = [
  { feature: 'Campaign Strategy', traditional: 'Generic templates & guesswork', xipi: 'Custom predictive intent modeling' },
  { feature: 'Reporting & Data', traditional: '30-day delayed PDF reports with vanity clicks', xipi: '24/7 Live client revenue & CAC attribution dashboard' },
  { feature: 'Creative Asset Turnaround', traditional: '2-3 weeks for simple ad variations', xipi: 'Rapid AI-assisted 48-hour video & ad iteration' },
  { feature: 'Optimization Velocity', traditional: 'Weekly or monthly manual check-ins', xipi: 'Real-time algorithmic ROAS & bid adjustment' },
  { feature: 'Growth Guarantee', traditional: 'No performance accountability', xipi: 'Milestone-backed performance commitments' }
];

export default function WhyChooseUs({ onContactClick }) {
  const [activePillar, setActivePillar] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // ROAS Interactive Calculator state for Pillar 0
  const [monthlySpend, setMonthlySpend] = useState(15000);
  // Creative A/B test toggle for Pillar 3
  const [activeAdTab, setActiveAdTab] = useState('xipi');

  // Auto-progress slide effect
  useEffect(() => {
    if (isHovered) return;
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActivePillar((curr) => (curr === pillars.length - 1 ? 0 : curr + 1));
          return 0;
        }
        return prev + 1.2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [activePillar, isHovered]);

  const handlePillarClick = (idx) => {
    setActivePillar(idx);
    setProgress(0);
  };

  // Calculations for ROAS simulator
  const estimatedRevenue = Math.round(monthlySpend * 14.8);
  const estimatedLeads = Math.round((monthlySpend / 15000) * 1250);

  return (
    <section 
      id="why-choose-us" 
      className="py-24 lg:py-32 bg-[#FAF9F6] border-t border-brand-border scroll-mt-12 select-none relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Decorative Mesh & Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-black/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-black text-white px-3.5 py-1.5 rounded-full border border-black/10 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-brand-red animate-pulse" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em]">
                WHY CHOOSE XI PI TECHNOLOGIA
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08] text-black">
              Why Businesses Choose <br />
              <span className="text-brand-red">
                Xi Pi Technologia to Grow.
              </span>
            </h2>
            
            <p className="text-black/70 text-base sm:text-lg leading-relaxed max-w-2xl font-normal pt-2">
              We don't just run digital marketing campaigns—we create data-driven strategies that help businesses generate qualified leads, increase conversions, and achieve sustainable growth. Our team combines creativity, technology, and performance marketing to deliver measurable results that matter.
            </p>
          </div>

          {/* Highlight Card */}
          <div className="max-w-md p-6 rounded-2xl bg-white border border-brand-red/30 shadow-md space-y-2">
            <div className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-wider">
              <Sparkles className="h-4 w-4" />
              <span>Your Growth, Our Priority</span>
            </div>
            <p className="text-xs text-black/70 leading-relaxed">
              Every business is unique. That's why we create customized marketing strategies aligned with your goals, industry, and audience—ensuring every campaign delivers maximum impact.
            </p>
          </div>
        </div>

        {/* Metrics Grid Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-6 rounded-3xl bg-white border border-brand-border shadow-sm hover:shadow-xl hover:border-brand-red/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 text-black/10 group-hover:text-brand-red/20 transition-colors">
                  <Icon className="h-10 w-10" />
                </div>
                <span className="block text-3xl sm:text-5xl font-black text-black tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left">
                  {m.value}
                </span>
                <h3 className="text-sm font-extrabold text-black mt-2 tracking-tight">
                  {m.label}
                </h3>
                <p className="text-xs text-black/50 mt-1 font-medium">
                  {m.detail}
                </p>
                <div className="mt-4 h-1 w-8 bg-brand-red/30 rounded-full group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Interactive Section: 5 Pillars + Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24">
          
          {/* Left Column - 5 Value Pillars Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              const isActive = activePillar === idx;

              return (
                <div
                  key={pillar.id}
                  onClick={() => handlePillarClick(idx)}
                  className={`relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive 
                      ? 'bg-white border-brand-red/40 shadow-lg shadow-brand-red/5' 
                      : 'bg-white/60 border-brand-border/80 hover:bg-white hover:border-brand-border'
                  }`}
                >
                  {/* Progress Timer Line on Active Pillar */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-border/50 overflow-hidden">
                      <div 
                        className="h-full bg-brand-red transition-all duration-75" 
                        style={{ width: `${progress}%` }} 
                      />
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className={`h-11 w-11 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive 
                        ? 'bg-brand-red text-white border-brand-red shadow-md shadow-brand-red/20 scale-105' 
                        : 'bg-brand-gray text-black border-brand-border'
                    }`}>
                      <IconComponent className="h-5 w-5" />
                    </div>

                    <div className="space-y-1 flex-grow">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-red">
                          {pillar.tag}
                        </span>
                        {isActive && (
                          <span className="bg-brand-red/10 text-brand-red text-[9px] font-extrabold px-2 py-0.5 rounded-full">
                            {pillar.stats}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-extrabold text-black tracking-tight">
                        {pillar.title}
                      </h3>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <p className="text-xs sm:text-sm text-black/60 leading-relaxed font-normal pt-2">
                            {pillar.desc}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Visual Interactive Showcase Panel */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-full min-h-[460px] bg-black text-white rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-2xl overflow-hidden flex flex-col justify-between">
              
              {/* Background ambient lighting inside widget */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-red/20 rounded-full blur-[90px] pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-600/10 rounded-full blur-[90px] pointer-events-none" />

              <AnimatePresence mode="wait">
                
                {/* Pillar 0: Interactive ROAS & Campaign Simulator */}
                {activePillar === 0 && (
                  <motion.div
                    key="ppc-widget"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col justify-between relative z-10"
                  >
                    <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
                      <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-brand-red animate-ping" />
                        <span className="text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                          Live Performance Ads Simulator
                        </span>
                      </div>
                      <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full text-[10px] font-black uppercase flex items-center gap-1">
                        <Activity className="h-3 w-3 animate-spin" /> Live Yield: 14.8x ROAS
                      </span>
                    </div>

                    {/* Interactive Slider Area */}
                    <div className="my-6 space-y-6 bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800">
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                            Monthly Ad Investment:
                          </label>
                          <span className="text-xl font-black text-white font-mono">
                            ${monthlySpend.toLocaleString()} / mo
                          </span>
                        </div>
                        <input 
                          type="range" 
                          min="5000" 
                          max="100000" 
                          step="5000"
                          value={monthlySpend}
                          onChange={(e) => setMonthlySpend(Number(e.target.value))}
                          className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-red"
                        />
                        <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
                          <span>$5,000</span>
                          <span>$50,000</span>
                          <span>$100,000</span>
                        </div>
                      </div>

                      {/* Projected Results Grid */}
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="bg-black/60 p-4 rounded-xl border border-zinc-800">
                          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">
                            Projected Client Revenue
                          </span>
                          <span className="text-2xl sm:text-3xl font-black text-brand-red font-mono">
                            ${estimatedRevenue.toLocaleString()}
                          </span>
                        </div>
                        <div className="bg-black/60 p-4 rounded-xl border border-zinc-800">
                          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">
                            High-Intent Conversions
                          </span>
                          <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                            ~{estimatedLeads.toLocaleString()} Leads
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-xs text-zinc-400 pt-3 border-t border-zinc-800">
                      <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Omni-channel Meta & Google Ads optimization
                      </span>
                      <span className="text-[10px] text-zinc-500 font-mono">Simulated Avg Data</span>
                    </div>
                  </motion.div>
                )}

                {/* Pillar 1: Organic SEO Dominance SERP Rank #1 Preview */}
                {activePillar === 1 && (
                  <motion.div
                    key="seo-widget"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col justify-between relative z-10"
                  >
                    <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                        Google Search Indexing Matrix
                      </span>
                      <span className="bg-brand-red/20 text-brand-red border border-brand-red/30 px-2.5 py-1 rounded-full text-[10px] font-black uppercase">
                        Rank #1 Guaranteed Path
                      </span>
                    </div>

                    {/* Simulated Google SERP Snippet */}
                    <div className="my-6 space-y-4">
                      <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 space-y-2">
                        <div className="flex items-center gap-2 text-xs text-zinc-400">
                          <Globe className="h-3.5 w-3.5 text-blue-400" />
                          <span>https://yourbrand.com › top-market-solution</span>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-blue-400 hover:underline cursor-pointer flex items-center gap-2">
                          #1 Best Enterprise Growth Solutions | 2026 Industry Leader
                          <span className="bg-emerald-500 text-black text-[9px] font-extrabold px-1.5 py-0.5 rounded">
                            Pos #1
                          </span>
                        </h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          Dominate market share with Xipitechnologia's semantic SEO content architecture. Experience a +420% increase in organic buyer traffic within 90 days.
                        </p>
                      </div>

                      {/* Organic Traffic Curve Mini Graph */}
                      <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-widest block">
                            Organic Search Growth Index
                          </span>
                          <span className="text-xl font-black text-white font-mono">+420% Volume Lift</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-xl text-xs font-bold">
                          <TrendingUp className="h-4 w-4" /> DR 88 Authority
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-xs text-zinc-400 pt-3 border-t border-zinc-800">
                      <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Zero blackhat risk, 100% whitehat authority
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Pillar 2: AI Marketing & Funnel Automation */}
                {activePillar === 2 && (
                  <motion.div
                    key="ai-widget"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col justify-between relative z-10"
                  >
                    <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                        Autonomous Lead Nurture Flow
                      </span>
                      <span className="bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2.5 py-1 rounded-full text-[10px] font-black uppercase">
                        AI Workflow Active
                      </span>
                    </div>

                    {/* Animated Flow Nodes */}
                    <div className="my-6 space-y-3">
                      {[
                        { step: '01', title: 'Ad Click & Instant Intent Capture', desc: 'Traffic hits dynamic AI landing page', status: 'Instant (0.1s)' },
                        { step: '02', title: 'AI Lead Qualification & Scoring', desc: 'LLM filters high-value decision makers', status: 'Automated' },
                        { step: '03', title: 'Omnichannel SMS & Email Dispatch', desc: 'Hyper-personalized offer delivered', status: 'Sent in 3s' },
                        { step: '04', title: 'High-Value Conversion & CRM Sync', desc: 'Sales-ready meeting booked directly to calendar', status: 'Done 100%' }
                      ].map((item, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center justify-between bg-zinc-900/90 p-3.5 rounded-xl border border-zinc-800"
                        >
                          <div className="flex items-center gap-3">
                            <span className="h-7 w-7 rounded-lg bg-brand-red/20 text-brand-red border border-brand-red/30 flex items-center justify-center font-mono text-xs font-black">
                              {item.step}
                            </span>
                            <div>
                              <h5 className="text-xs font-extrabold text-white">{item.title}</h5>
                              <p className="text-[11px] text-zinc-400">{item.desc}</p>
                            </div>
                          </div>
                          <span className="text-[9px] font-mono font-bold bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
                            {item.status}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center text-xs text-zinc-400 pt-3 border-t border-zinc-800">
                      <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Replaces 100+ manual sales call hours monthly
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Pillar 3: High-Converting Creative A/B Test Lift */}
                {activePillar === 3 && (
                  <motion.div
                    key="creative-widget"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col justify-between relative z-10"
                  >
                    <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                        A/B Creative Performance Lift
                      </span>
                      <div className="flex gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800">
                        <button
                          onClick={() => setActiveAdTab('standard')}
                          className={`px-3 py-1 rounded-lg text-[10px] font-extrabold transition-all ${
                            activeAdTab === 'standard' ? 'bg-zinc-800 text-zinc-400' : 'text-zinc-500'
                          }`}
                        >
                          Standard Ad
                        </button>
                        <button
                          onClick={() => setActiveAdTab('xipi')}
                          className={`px-3 py-1 rounded-lg text-[10px] font-extrabold transition-all ${
                            activeAdTab === 'xipi' ? 'bg-brand-red text-white shadow-md' : 'text-zinc-400'
                          }`}
                        >
                          Xipi Award Creative
                        </button>
                      </div>
                    </div>

                    {/* Creative Comparison View */}
                    <div className="my-6 bg-zinc-900/90 p-6 rounded-2xl border border-zinc-800 space-y-4">
                      {activeAdTab === 'standard' ? (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-zinc-400 font-semibold">Generic Stock Ad Creative</span>
                            <span className="text-amber-400 font-mono font-bold">1.8% CTR (Industry Baseline)</span>
                          </div>
                          <div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-500 w-[25%]" />
                          </div>
                          <p className="text-xs text-zinc-400">
                            Generic static images with plain copy get scrolled past, causing high Customer Acquisition Costs.
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-white font-bold flex items-center gap-1.5">
                              <Sparkles className="h-4 w-4 text-brand-red" /> Cinema-Grade Xipi Micro-Animation Ad
                            </span>
                            <span className="text-emerald-400 font-mono font-black text-sm">6.8% CTR (+277% Lift)</span>
                          </div>
                          <div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: '88%' }}
                              transition={{ duration: 0.8 }}
                              className="h-full bg-gradient-to-r from-brand-red to-emerald-400" 
                            />
                          </div>
                          <p className="text-xs text-zinc-300">
                            High-contrast motion graphics, custom sound design, and thumb-stopping visual hooks double conversion rates immediately.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-between items-center text-xs text-zinc-400 pt-3 border-t border-zinc-800">
                      <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Award-winning design team & 48-hr ad iteration
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Pillar 4: Zero-Fluff Revenue Analytics */}
                {activePillar === 4 && (
                  <motion.div
                    key="analytics-widget"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col justify-between relative z-10"
                  >
                    <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                        24/7 Client Revenue Command Center
                      </span>
                      <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full text-[10px] font-black uppercase">
                        Live Feed Active
                      </span>
                    </div>

                    <div className="my-6 space-y-3">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800 text-center">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase block">Ad Spend</span>
                          <span className="text-sm font-black text-white font-mono">$12,450</span>
                        </div>
                        <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800 text-center">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase block">New Sales</span>
                          <span className="text-sm font-black text-emerald-400 font-mono">$184,260</span>
                        </div>
                        <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800 text-center">
                          <span className="text-[9px] text-zinc-500 font-bold uppercase block">Blended ROAS</span>
                          <span className="text-sm font-black text-brand-red font-mono">14.8x</span>
                        </div>
                      </div>

                      {/* Live Recent Transactions */}
                      <div className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-800 space-y-2">
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Real-time conversion stream</span>
                        <div className="space-y-1 font-mono text-[11px]">
                          <div className="flex justify-between text-zinc-300">
                            <span>Meta Ad → Enterprise SaaS Plan</span>
                            <span className="text-emerald-400 font-bold">+$4,200</span>
                          </div>
                          <div className="flex justify-between text-zinc-400">
                            <span>Google PPC → Annual Contract</span>
                            <span className="text-emerald-400 font-bold">+$12,500</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-xs text-zinc-400 pt-3 border-t border-zinc-800">
                      <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Full transparency with zero vanity metrics
                      </span>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Traditional Agencies vs Xipitechnologia Matrix Section */}
        <div className="mt-20 bg-white rounded-3xl border border-brand-border p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="max-w-2xl mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              THE XIPITECHNOLOGIA® ADVANTAGE
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
              How we compare to traditional agencies.
            </h3>
            <p className="text-black/60 text-sm sm:text-base font-normal">
              Most digital agencies charge high retainers for slow, manual work. We combine elite creative talent with AI automation to deliver 10x faster execution and guaranteed ROAS.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-brand-border text-xs font-extrabold uppercase tracking-wider text-black/50">
                  <th className="pb-4 w-1/3">Growth Dimension</th>
                  <th className="pb-4 w-1/3 text-zinc-400">Traditional Agencies</th>
                  <th className="pb-4 w-1/3 text-brand-red font-black">Xipitechnologia® Systems</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border text-xs sm:text-sm font-medium">
                {comparisons.map((row, i) => (
                  <tr key={i} className="hover:bg-brand-gray/50 transition-colors">
                    <td className="py-4 font-bold text-black flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-brand-red shrink-0" />
                      {row.feature}
                    </td>
                    <td className="py-4 text-zinc-400 font-normal">
                      <div className="flex items-center gap-2">
                        <X className="h-4 w-4 text-red-400 shrink-0" />
                        {row.traditional}
                      </div>
                    </td>
                    <td className="py-4 text-black font-extrabold bg-brand-red/5 px-4 rounded-xl">
                      <div className="flex items-center gap-2 text-brand-red">
                        <Check className="h-4 w-4 text-brand-red shrink-0" />
                        {row.xipi}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Note & Partner Badges */}
        <div className="mt-16 text-center space-y-6">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-full bg-brand-gray border border-brand-border text-xs sm:text-sm font-bold text-black select-none">
            <span>Customized Strategies</span>
            <span className="text-brand-red">•</span>
            <span>Transparent Communication</span>
            <span className="text-brand-red">•</span>
            <span>Continuous Optimization</span>
            <span className="text-brand-red">•</span>
            <span>Measurable Results</span>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex items-center gap-2 font-display font-extrabold text-sm tracking-tight text-black">
              <span className="h-3 w-3 rounded-full bg-blue-500" /> Google Premier Partner
            </div>
            <div className="flex items-center gap-2 font-display font-extrabold text-sm tracking-tight text-black">
              <span className="h-3 w-3 rounded-full bg-blue-700" /> Meta Business Partner
            </div>
            <div className="flex items-center gap-2 font-display font-extrabold text-sm tracking-tight text-black">
              <span className="h-3 w-3 rounded-full bg-emerald-500" /> SEO & Growth Certified
            </div>
          </div>
        </div>

        {/* High Conversion CTA Section Banner */}
        <div className="mt-20 p-8 sm:p-14 rounded-3xl bg-black text-white border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="space-y-3 max-w-xl text-center md:text-left relative z-10">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-brand-red">
              READY TO SCALE YOUR DIGITAL FOOTPRINT?
            </span>
            <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Claim Your Free 2026 Digital Growth Audit.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              We'll analyze your current ad spend, SEO score, and funnel conversion gaps—completely free with zero obligation.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={onContactClick}
              className="group relative inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white text-sm font-extrabold px-8 py-4 rounded-2xl shadow-xl shadow-brand-red/25 transition-all duration-300 hover:scale-[1.03]"
            >
              <span>Get Strategy Audit</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
