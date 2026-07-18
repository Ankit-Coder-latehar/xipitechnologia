import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, ShieldAlert, Zap, GitBranch, 
  TrendingUp, CheckCircle, Database, ArrowRight,
  Code, MessageSquare, Link2
} from 'lucide-react';

const pillars = [
  {
    title: 'Mathematical Precision',
    tag: 'ROI-Driven Strategy',
    desc: 'We don\'t believe in "creative guessing". We structure search queries, PPC targeting parameters, and landing page wireframes backed by exact intent volume metrics.',
    icon: Target
  },
  {
    title: 'Absolute Terminology Guardrails',
    tag: 'Compliance & Style Safety',
    desc: 'Our AI content systems run validation loops comparing generated assets against custom dictionaries, guaranteeing 0% compliance deviations and perfect brand-voice execution.',
    icon: ShieldAlert
  },
  {
    title: 'Velocity-Driven Scaling',
    tag: 'Production Speed',
    desc: 'Deploy custom pipelines publishing up to 500+ optimized landing pages, blog drafts, and social templates monthly—reclaiming hundreds of hours of manual copy labor.',
    icon: Zap
  },
  {
    title: 'Frictionless Integration',
    tag: 'Stack Connectivity',
    desc: 'Our loops hook seamlessly into your current software directories (Salesforce, Slack, Mailgun, Meta, Vite, Shopify), triggering outreach dispatch without workflow disruptions.',
    icon: GitBranch
  }
];

export default function WhyChooseUs() {
  const [activePillar, setActivePillar] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
        return prev + 1.25;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [activePillar, isHovered]);

  const handlePillarClick = (idx) => {
    setActivePillar(idx);
    setProgress(0);
  };

  return (
    <section 
      id="why-choose-us" 
      className="py-28 bg-[#FAF9F6] border-t border-brand-border scroll-mt-12 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
            Competitive Edge
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Why leading brands choose <br />
            Xipitechnolia systems.
          </h2>
          <p className="text-black/50 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
            We bridge high-end creative identity with automated engineering to drive measurable acquisition scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Columns - Value Pillars List */}
          <div className="lg:col-span-5 space-y-6">
            {pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              const isActive = activePillar === idx;

              return (
                <div
                  key={idx}
                  onClick={() => handlePillarClick(idx)}
                  className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-white border-brand-border shadow-md' 
                      : 'bg-transparent border-transparent hover:bg-white/40 hover:border-brand-border/40'
                  }`}
                >
                  
                  {/* Progress Timer Line on Active Pillar */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-brand-border rounded-t-2xl overflow-hidden">
                      <div 
                        className="h-full bg-brand-red transition-all duration-75" 
                        style={{ width: `${progress}%` }} 
                      />
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className={`h-10 w-10 rounded-xl border flex items-center justify-center transition-colors duration-300 ${
                      isActive 
                        ? 'bg-brand-red text-white border-brand-red shadow-sm shadow-brand-red/10' 
                        : 'bg-white text-black border-brand-border'
                    }`}>
                      <IconComponent className="h-5 w-5" />
                    </div>

                    <div className="space-y-1 flex-grow">
                      <span className="block text-[9px] font-extrabold uppercase tracking-wider text-brand-red">
                        {pillar.tag}
                      </span>
                      <h3 className="text-base font-extrabold text-black tracking-tight">
                        {pillar.title}
                      </h3>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="text-xs text-black/50 leading-relaxed font-normal pt-2"
                        >
                          {pillar.desc}
                        </motion.p>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Right Column - Visual Dashboard Card Panel */}
          <div className="lg:col-span-7 flex items-center justify-center min-h-[420px]">
            <div className="relative w-full max-w-[540px] h-[380px] bg-white border border-brand-border rounded-3xl p-6 sm:p-8 shadow-md overflow-hidden flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                
                {/* Pillar 0: Precision Growth Chart */}
                {activePillar === 0 && (
                  <motion.div
                    key="precision"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-center select-none pb-4 border-b border-brand-gray-dark/50">
                      <div>
                        <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Growth Engine</span>
                        <h4 className="text-sm font-extrabold text-black">Organic Search Indexing</h4>
                      </div>
                      <span className="text-xs font-black text-brand-red flex items-center gap-0.5">
                        +310% Scale <TrendingUp className="h-3.5 w-3.5" />
                      </span>
                    </div>

                    {/* SVG Graphic path */}
                    <div className="flex-grow flex items-center justify-center py-4">
                      <svg className="w-full h-36" viewBox="0 0 400 120" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="gradient-glow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#E32626" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#E32626" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Reference lines */}
                        <line x1="0" y1="100" x2="400" y2="100" stroke="#F3F4F6" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="0" y1="60" x2="400" y2="60" stroke="#F3F4F6" strokeWidth="1" strokeDasharray="4 4" />
                        
                        {/* Linear growth line */}
                        <path d="M0 100 Q 150 90, 400 80" fill="none" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="4" />
                        <text x="310" y="70" className="text-[8px] font-bold fill-black/35 font-sans">Industry Baseline</text>

                        {/* Automated scale path */}
                        <motion.path
                          d="M0 110 Q 120 100, 240 40 T 400 10"
                          fill="none"
                          stroke="#E32626"
                          strokeWidth="3.5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, ease: 'easeOut' }}
                        />
                        <path
                          d="M0 110 Q 120 100, 240 40 T 400 10 L 400 120 L 0 120 Z"
                          fill="url(#gradient-glow)"
                        />
                        <circle cx="400" cy="10" r="5" fill="#E32626" />
                      </svg>
                    </div>

                    <div className="flex gap-2 select-none border-t border-brand-gray-dark/50 pt-4">
                      <span className="bg-brand-gray px-2.5 py-1 rounded-full border border-brand-border text-[9px] font-bold text-black/60 shadow-sm">
                        Intent Keyword Targeting: 98% Correct
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Pillar 1: Compliance Guardrails log */}
                {activePillar === 1 && (
                  <motion.div
                    key="guardrails"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col justify-between"
                  >
                    <div className="pb-4 border-b border-brand-gray-dark/50">
                      <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Real-time Check</span>
                      <h4 className="text-sm font-extrabold text-black">Compliance Audit Logger</h4>
                    </div>

                    {/* Console simulation */}
                    <div className="flex-grow my-4 bg-black rounded-2xl p-4 font-mono text-[10px] text-white space-y-1.5 overflow-y-auto max-h-[140px] shadow-inner select-none">
                      <p className="text-zinc-500">{`>`} Checking LLM output constraints...</p>
                      <p className="text-zinc-500">{`>`} Compiling document syntax...</p>
                      <p className="text-amber-400 font-semibold">{`!`} Found prohibited term: "guaranteed returns"</p>
                      <p className="text-brand-red font-semibold">{`>`} Invoking replacement filter (Fallback: "structured targets")</p>
                      <p className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle className="h-3 w-3 fill-emerald-400 text-black" /> Audit success! Voice compatibility 100%
                      </p>
                    </div>

                    <div className="flex gap-2 select-none border-t border-brand-gray-dark/50 pt-4">
                      <span className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200 text-[9px] font-bold flex items-center gap-1 shadow-sm">
                        <CheckCircle className="h-3 w-3 fill-current text-white" /> Zero Legal Risks
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Pillar 2: Velocity Bar counter */}
                {activePillar === 2 && (
                  <motion.div
                    key="velocity"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col justify-between"
                  >
                    <div className="pb-4 border-b border-brand-gray-dark/50 flex justify-between items-center">
                      <div>
                        <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Content Dispatch</span>
                        <h4 className="text-sm font-extrabold text-black">Asset Velocity Output</h4>
                      </div>
                      <span className="bg-brand-red/10 text-brand-red px-2 py-0.5 rounded text-[10px] font-extrabold uppercase select-none">12x Speed</span>
                    </div>

                    <div className="flex-grow flex flex-col justify-center gap-4 py-4 select-none">
                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-[9px] font-bold text-black/50 uppercase">
                          <span>Standard Copywriter Manual Output</span>
                          <span>15 Articles / Mo</span>
                        </div>
                        <div className="h-2 w-full bg-brand-gray border border-brand-border rounded-full overflow-hidden">
                          <div className="h-full bg-zinc-300 w-[8%]" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-[9px] font-bold text-brand-red uppercase">
                          <span>Xipitechnolia Automation System</span>
                          <span className="font-extrabold">300+ Articles / Mo</span>
                        </div>
                        <div className="h-2 w-full bg-brand-gray border border-brand-border rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-brand-red"
                            initial={{ width: 0 }}
                            animate={{ width: '85%' }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 select-none border-t border-brand-gray-dark/50 pt-4">
                      <span className="bg-brand-gray px-2.5 py-1 rounded-full border border-brand-border text-[9px] font-bold text-black/60 shadow-sm">
                        Hours Reclaimed: 160 hrs / mo
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Pillar 3: Integration connect node */}
                {activePillar === 3 && (
                  <motion.div
                    key="integration"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col justify-between"
                  >
                    <div className="pb-4 border-b border-brand-gray-dark/50">
                      <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Connectivity Map</span>
                      <h4 className="text-sm font-extrabold text-black">Omnichannel Stack Routing</h4>
                    </div>

                    {/* Nodes flow layout */}
                    <div className="flex-grow flex items-center justify-between px-6 py-6 select-none relative">
                      
                      {/* Central node database */}
                      <div className="h-14 w-14 rounded-2xl bg-black border border-zinc-800 flex flex-col items-center justify-center text-white shadow-lg z-15 relative">
                        <Database className="h-6 w-6 text-brand-red" />
                        <span className="text-[7px] font-bold uppercase tracking-wider text-white/50 mt-1 select-none">AI Core</span>
                      </div>

                      {/* Connection current particles */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-0.5 bg-brand-border" />
                      
                      {/* Target endpoints */}
                      <div className="space-y-4 z-15">
                        {[
                          { icon: Code, text: 'Vite / CMS' },
                          { icon: MessageSquare, text: 'Slack Sync' },
                          { icon: Link2, text: 'Meta APIs' }
                        ].map((end, eIdx) => (
                          <div key={eIdx} className="flex items-center gap-2.5 bg-white border border-brand-border pl-2 pr-3 py-1.5 rounded-xl shadow-sm hover:border-black/35 transition-all">
                            <div className="h-6 w-6 bg-brand-gray border border-brand-border rounded-lg flex items-center justify-center text-black">
                              <end.icon className="h-3.5 w-3.5" />
                            </div>
                            <span className="text-[9px] font-bold uppercase tracking-wider text-black/60">{end.text}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                    <div className="flex justify-between items-center select-none border-t border-brand-gray-dark/50 pt-4">
                      <span className="bg-brand-gray px-2.5 py-1 rounded-full border border-brand-border text-[9px] font-bold text-black/60 shadow-sm">
                        Data Sync: 100% Realtime
                      </span>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
