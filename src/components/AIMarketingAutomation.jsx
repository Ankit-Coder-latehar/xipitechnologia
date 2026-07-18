import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Cpu, Sparkles, TrendingUp, Clock, 
  Coins, Play, CheckCircle2, Database, Mail, 
  Terminal, ArrowRight, ChevronRight, Zap, Target
} from 'lucide-react';

export default function AIMarketingAutomation({ onContactClick }) {
  // Simulator State
  const [targetAudience, setTargetAudience] = useState('E-commerce Brands');
  const [channel, setChannel] = useState('Omnichannel (Email + Meta)');
  const [simulationState, setSimulationState] = useState('idle'); // idle, scraping, enriching, writing, sending, completed
  const [simLogs, setSimLogs] = useState([]);
  const [generatedPitch, setGeneratedPitch] = useState('');
  const [currentProgress, setCurrentProgress] = useState(0);

  // ROI Calculator State
  const [monthlyLeads, setMonthlyLeads] = useState(5000);
  const [customerLtv, setCustomerLtv] = useState(2500);

  // Simulation run triggers
  const runSimulation = () => {
    setSimulationState('scraping');
    setSimLogs([]);
    setGeneratedPitch('');
    setCurrentProgress(10);
    
    // Log helpers
    const addLog = (text, type = 'info', delay) => {
      setTimeout(() => {
        setSimLogs(prev => [...prev, { text, type, id: Date.now() + Math.random() }]);
      }, delay);
    };

    addLog('🚀 Initializing AI Marketing Agent engine...', 'info', 200);
    addLog(`🔍 Targeted Audience query loaded: "${targetAudience}"`, 'info', 800);
    addLog(`📡 Scanning digital footprints across LinkedIn, Crunchbase & web domains...`, 'process', 1400);

    setTimeout(() => {
      setSimulationState('enriching');
      setCurrentProgress(35);
      addLog('✅ Found 45 high-intent leads matches!', 'success', 0);
      addLog('📊 Enriching metrics (Revenue scale, Technology stack, Ad pixels active)...', 'process', 400);
      addLog('🧬 Identified Decision Makers (VP Marketing, Growth Leads)', 'success', 1000);
    }, 2200);

    setTimeout(() => {
      setSimulationState('writing');
      setCurrentProgress(65);
      addLog('🤖 Invoking custom LLM model specialized in copywriting conversion logic...', 'process', 0);
      addLog('✍️ Personalizing value propositions based on competitor gaps...', 'process', 600);
      
      // Simulate typing of the pitch
      const pitchText = `Subject: Quick question regarding growth at {Company_Name}\n\nHi {First_Name},\n\nNoticed that your brand has recently scaled Facebook ad spend. However, your load speed is currently averaging 3.2 seconds. We simulated an automation stack that could reclaim 18% of your wasted budget.\n\nLet me know if you want the details.\n- Xipi Agent`;
      let i = 0;
      const interval = setInterval(() => {
        setGeneratedPitch(prev => prev + pitchText.charAt(i));
        i++;
        if (i >= pitchText.length) {
          clearInterval(interval);
        }
      }, 15);
    }, 4000);

    setTimeout(() => {
      setSimulationState('sending');
      setCurrentProgress(85);
      addLog('✉️ Outbound template compiled successfully.', 'success', 0);
      addLog(`📤 Routing dispatch queue via specialized ${channel} nodes...`, 'process', 600);
    }, 7500);

    setTimeout(() => {
      setSimulationState('completed');
      setCurrentProgress(100);
      addLog('🎉 Campaign loop fully completed!', 'success', 0);
      addLog('🎯 Analytics dashboards updated: CTR 8.4% projected, CPA down 45%', 'success', 400);
    }, 9500);
  };

  // ROI computations
  const convertedLeads = Math.round(monthlyLeads * 0.022); // Assuming 2.2% conversion rate
  const projectedRevenue = convertedLeads * customerLtv;
  const hoursSaved = Math.round((monthlyLeads * 20) / 60); // 20 mins per lead manually saved

  return (
    <div className="bg-white min-h-screen text-black overflow-hidden pt-28 pb-20 select-none">
      
      {/* 1. Hero & Title Section */}
      <section className="relative py-16 sm:py-20 border-b border-brand-border bg-gradient-to-b from-brand-gray/40 to-white">
        
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" />
          <div className="absolute top-60 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-red/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-red"
          >
            <Zap className="h-3.5 w-3.5" /> High-Performance Systems
          </motion.span>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]"
              >
                AI Marketing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-zinc-800 to-brand-red">
                  Automation.
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-black/50 text-sm sm:text-base leading-relaxed max-w-xl font-normal"
              >
                Deploy smart outbound agent loops that prospect, enrich, write custom hyper-personalized sales copy, and scale acquisitions automatically. Zero cold calls. 100% conversion efficiency.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={onContactClick}
                  className="flex items-center gap-2 rounded-full bg-black hover:bg-brand-red px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors duration-300 active:scale-95 shadow-lg shadow-black/10"
                >
                  Deploy an Agent System
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <a
                  href="#simulator"
                  className="flex items-center gap-1.5 rounded-full border border-brand-border hover:border-black px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black/70 hover:text-black transition-colors"
                >
                  Run Live Simulator
                </a>
              </motion.div>
            </div>

            {/* Visual Node Diagram Column */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[320px]">
              <div className="relative w-80 h-80 flex items-center justify-center">
                
                {/* Central brain node */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-44 h-44 rounded-full border border-brand-border/60 flex items-center justify-center"
                />
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="z-10 h-20 w-20 rounded-full bg-black flex items-center justify-center text-white border border-brand-red/35 shadow-xl shadow-brand-red/10"
                >
                  <Brain className="h-10 w-10 text-brand-red animate-pulse" />
                </motion.div>

                {/* Satellite Nodes */}
                {[
                  { icon: Target, delay: 0, label: 'Scrape', x: -110, y: -70 },
                  { icon: Cpu, delay: 0.5, label: 'Enrich', x: 110, y: -70 },
                  { icon: Sparkles, delay: 1, label: 'Write', x: -110, y: 70 },
                  { icon: Mail, delay: 1.5, label: 'Route', x: 110, y: 70 }
                ].map((node, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: node.delay }}
                    className="absolute z-10 flex flex-col items-center"
                    style={{ x: node.x, y: node.y }}
                  >
                    <div className="h-12 w-12 rounded-xl bg-white border border-brand-border flex items-center justify-center shadow-md hover:border-brand-red hover:text-brand-red transition-all cursor-pointer">
                      <node.icon className="h-5 w-5 text-black" />
                    </div>
                    <span className="text-[10px] font-bold text-black/50 mt-1 uppercase tracking-wider">{node.label}</span>
                  </motion.div>
                ))}

                {/* SVG connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 320">
                  <line x1="160" y1="160" x2="50" y2="90" stroke="#EEEEEE" strokeWidth="1.5" />
                  <line x1="160" y1="160" x2="270" y2="90" stroke="#EEEEEE" strokeWidth="1.5" />
                  <line x1="160" y1="160" x2="50" y2="230" stroke="#EEEEEE" strokeWidth="1.5" />
                  <line x1="160" y1="160" x2="270" y2="230" stroke="#EEEEEE" strokeWidth="1.5" />
                </svg>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Simulator Section */}
      <section id="simulator" className="py-24 border-b border-brand-border scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              Live Demo Sandbox
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Test drive the AI campaign agent.
            </h2>
            <p className="text-black/50 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Customize the core engine target parameters and run a real-time campaign simulation. Watch the AI execute discovery and copy loops on-screen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Input Config Panel */}
            <div className="lg:col-span-4 bg-brand-gray border border-brand-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-2 border-b border-brand-border pb-4 mb-4">
                  <Database className="h-5 w-5 text-brand-red" />
                  <h3 className="font-display font-extrabold text-lg">Agent Parameters</h3>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-black/50">
                    Target Niche Audience
                  </label>
                  <input
                    type="text"
                    disabled={simulationState !== 'idle' && simulationState !== 'completed'}
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    className="w-full rounded-xl border border-brand-border bg-white px-4 py-3.5 text-sm text-black outline-none transition-all focus:border-brand-red disabled:opacity-60"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-black/50">
                    Acquisition Channel
                  </label>
                  <select
                    disabled={simulationState !== 'idle' && simulationState !== 'completed'}
                    value={channel}
                    onChange={(e) => setChannel(e.target.value)}
                    className="w-full rounded-xl border border-brand-border bg-white px-4 py-3.5 text-sm text-black outline-none transition-all focus:border-brand-red disabled:opacity-60"
                  >
                    <option>Omnichannel (Email + Meta)</option>
                    <option>LinkedIn Outbound</option>
                    <option>Hyper-Personalized Email</option>
                  </select>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={runSimulation}
                  disabled={simulationState !== 'idle' && simulationState !== 'completed'}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-black hover:bg-brand-red px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition-colors duration-300 disabled:opacity-40 select-none active:scale-95"
                >
                  <Play className="h-4 w-4 fill-white" />
                  Launch AI Automation Loop
                </button>
              </div>
            </div>

            {/* Output Visual Simulator Panel */}
            <div className="lg:col-span-8 bg-black border border-zinc-800 rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between min-h-[440px] relative overflow-hidden shadow-2xl">
              
              {/* Top window UI dots */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-4 select-none">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-brand-red" />
                  <span className="text-xs font-mono text-zinc-500">agent_core_thread.log</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-zinc-800" />
                  <span className="h-2 w-2 rounded-full bg-zinc-800" />
                  <span className="h-2 w-2 rounded-full bg-zinc-800" />
                </div>
              </div>

              {/* Console log list */}
              <div className="flex-grow font-mono text-xs space-y-2.5 overflow-y-auto max-h-56 pr-2 scrollbar-thin">
                {simLogs.length === 0 && (
                  <p className="text-zinc-600">Console ready. Set parameters and click Launch to trigger system...</p>
                )}
                {simLogs.map((log) => (
                  <div key={log.id} className="flex items-start gap-2">
                    <span className="text-zinc-600 select-none">{`>`}</span>
                    <p className={`
                      ${log.type === 'success' ? 'text-emerald-400' : ''}
                      ${log.type === 'process' ? 'text-brand-red font-semibold' : ''}
                      ${log.type === 'info' ? 'text-zinc-300' : ''}
                    `}>
                      {log.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Real-time Generated Email Copy Display */}
              {generatedPitch && (
                <div className="mt-4 border-t border-zinc-800 pt-4 flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    LLM Synthesis Output:
                  </span>
                  <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-xs font-sans text-zinc-300 whitespace-pre-line leading-relaxed max-w-xl">
                    {generatedPitch}
                  </div>
                </div>
              )}

              {/* Progress visual bar */}
              <div className="mt-6 border-t border-zinc-900 pt-4 select-none">
                <div className="flex justify-between items-center text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">
                  <span>Engine State: {simulationState}</span>
                  <span>{currentProgress}%</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-brand-red"
                    animate={{ width: `${currentProgress}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. Interactive ROI Savings Section */}
      <section className="py-24 border-b border-brand-border bg-brand-gray/30">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              Performance Yields
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Calculate your automated scale.
            </h2>
            <p className="text-black/50 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Adjust your monthly outbound parameters below to see the projected conversions, saved hours, and revenue growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Sliders Panel */}
            <div className="lg:col-span-5 space-y-8 bg-white border border-brand-border p-8 rounded-3xl shadow-sm">
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-black/50">Monthly Outbound Volume</span>
                  <span className="text-sm font-extrabold text-black">{monthlyLeads.toLocaleString()} Leads</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="20000"
                  step="500"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(parseInt(e.target.value))}
                  className="w-full accent-brand-red h-1 bg-brand-gray rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-black/50">Target Customer LTV</span>
                  <span className="text-sm font-extrabold text-black">${customerLtv.toLocaleString()} USD</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="250"
                  value={customerLtv}
                  onChange={(e) => setCustomerLtv(parseInt(e.target.value))}
                  className="w-full accent-brand-red h-1 bg-brand-gray rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="border-t border-brand-border pt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center">
                  <Coins className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-black/40 uppercase tracking-wide">Base Assumptions</span>
                  <span className="text-xs font-semibold text-black/70">Conversion Rate: 2.2% | Time Saved: 20m/lead</span>
                </div>
              </div>

            </div>

            {/* Calculations Dashboard View */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 1: Revenue */}
              <div className="bg-white border border-brand-border rounded-3xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-44">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-black/40 uppercase tracking-wider">Projected Revenue Lift</span>
                  <TrendingUp className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
                    ${projectedRevenue.toLocaleString()}
                  </span>
                  <span className="block text-xs font-bold text-black/40 mt-1 select-none">Projected Annual: ${(projectedRevenue * 12).toLocaleString()}</span>
                </div>
              </div>

              {/* Card 2: Converted leads */}
              <div className="bg-white border border-brand-border rounded-3xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-44">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-black/40 uppercase tracking-wider">Acquisition Yield</span>
                  <Sparkles className="h-5 w-5 text-brand-red animate-pulse" />
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
                    +{convertedLeads}
                  </span>
                  <span className="block text-xs font-bold text-black/40 mt-1 select-none">Conversions per month</span>
                </div>
              </div>

              {/* Card 3: Hours Saved */}
              <div className="bg-white border border-brand-border rounded-3xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-44">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-black/40 uppercase tracking-wider">Hours Reclaimed</span>
                  <Clock className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
                    {hoursSaved} hrs
                  </span>
                  <span className="block text-xs font-bold text-black/40 mt-1 select-none">Saved from manual prospecting</span>
                </div>
              </div>

              {/* Card 4: Action Call */}
              <div className="bg-black text-white rounded-3xl p-6 flex flex-col justify-between h-44 relative overflow-hidden group shadow-lg border border-transparent hover:border-brand-red/30 transition-all duration-500">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-red/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                
                <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Ready to deploy?</span>
                
                <button 
                  onClick={onContactClick}
                  className="flex items-center justify-between w-full bg-white text-black group-hover:bg-brand-red group-hover:text-white px-5 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300"
                >
                  Book Demo Call
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. Core Features Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red select-none">
              Systems Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Engineered features to acquire.
            </h2>
            <p className="text-black/50 text-sm leading-relaxed max-w-lg mx-auto font-normal">
              We design robust agent systems integrated directly with your business channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: 'Prospect Intelligence Scraper',
                desc: 'Scrapes specific target categories from directories, web indexes, and social graphs using intent queries.'
              },
              {
                icon: Brain,
                title: 'Value-Proposition Synthesizer',
                desc: 'Analyzes target domain codebases, reviews, and load metrics to formulate automated pitching targets.'
              },
              {
                icon: Mail,
                title: 'High-Deliverability Routing',
                desc: 'Coordinates cold sequences and Meta ad retargeting in a cohesive multi-touch sequence without spam folder risks.'
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-brand-border rounded-3xl p-8 space-y-6 hover:shadow-xl hover:border-brand-red/30 transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-2xl bg-brand-gray border border-brand-border text-black flex items-center justify-center group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight">{feature.title}</h3>
                  <p className="text-sm text-black/50 leading-relaxed font-normal">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
