import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Sparkles, TrendingUp, Cpu, Database, 
  Layers, CheckCircle2, Play, Terminal, ArrowRight, 
  Globe, Search, Share2, Award, Zap
} from 'lucide-react';

export default function AIContentSystems({ onContactClick }) {
  // Simulator State
  const [topic, setTopic] = useState('Future of Decentralized Finance');
  const [tone, setTone] = useState('Technical & Authoritative');
  const [simulationState, setSimulationState] = useState('idle'); // idle, analyzing, writing, optimizing, completed
  const [simLogs, setSimLogs] = useState([]);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('blog'); // blog, social, seo

  // ROI Calculator State
  const [articleCount, setArticleCount] = useState(80);
  const [manualCost, setManualCost] = useState(150);

  // Simulated assets outputs based on topic
  const [generatedAssets, setGeneratedAssets] = useState({
    blogTitle: '',
    blogBody: '',
    socialLinkedin: '',
    socialTwitter: '',
    seoTitle: '',
    seoDesc: '',
    seoScore: 0
  });

  const runSimulation = () => {
    setSimulationState('analyzing');
    setSimLogs([]);
    setCurrentProgress(10);

    const addLog = (text, type = 'info', delay) => {
      setTimeout(() => {
        setSimLogs(prev => [...prev, { text, type, id: Date.now() + Math.random() }]);
      }, delay);
    };

    addLog('🚀 Loading Semantic SEO model configuration...', 'info', 200);
    addLog(`🔍 Analyzing keyword cluster for topic: "${topic}"`, 'info', 800);
    addLog('📊 Checking search volume and competition gaps on Google SERP...', 'process', 1400);

    setTimeout(() => {
      setSimulationState('writing');
      setCurrentProgress(45);
      addLog('✅ Keyword priority defined: "Decentralized Finance scaling, Web3 structures"', 'success', 0);
      addLog(`✍️ Drafting structured article with "${tone}" tone constraints...`, 'process', 500);
    }, 2200);

    setTimeout(() => {
      setSimulationState('optimizing');
      setCurrentProgress(75);
      addLog('📝 Base draft compiled successfully.', 'success', 0);
      addLog('🧬 Running terminology guardrails (Checking brand-voice guidelines)...', 'process', 600);
      addLog('📐 Injecting schema markup, anchor tags, and internal link mapping...', 'process', 1200);
    }, 5000);

    setTimeout(() => {
      setSimulationState('completed');
      setCurrentProgress(100);
      addLog('🎉 Omnichannel Content Suite generated!', 'success', 0);
      addLog('📈 SEO optimization score verified: 98/100', 'success', 500);

      // Populate assets
      setGeneratedAssets({
        blogTitle: `The Paradigm Shift: Navigating the ${topic}`,
        blogBody: `The current landscape of decentralized finance is undergoing a critical restructuring. As liquidity fragmentation poses hurdles for early adoption, developers are constructing unified liquidity bridges. The main question remains: how will institutional-grade safety protocols integrate with absolute decentralized transparency? Over the next decade, we project smart-contracts to automate asset clearings completely...`,
        socialLinkedin: `💡 The landscape of Finance is shifting. In our latest piece, we breakdown "The Paradigm Shift: Navigating the ${topic}". \n\nWe examine unified liquidity, safety protocols, and automated clearings.\n\nRead the full report below. 👇\n#DeFi #Web3 #FutureOfFinance`,
        socialTwitter: `How will institutional protocols integrate with decentralized transparency? 🧵\n\nWe outline the scaling roadmap for the ${topic} in our new analysis. Read now:\n\n#DeFi #Web3Scale`,
        seoTitle: `Navigating the ${topic} | Scale Analysis`,
        seoDesc: `Dissecting the future of liquidity fragmentation, safety protocols, and smart-contract automation inside decentralized ecosystems. Read our complete study.`,
        seoScore: 98
      });
    }, 8500);
  };

  // ROI computations
  const totalManualCost = articleCount * manualCost;
  const totalAICost = Math.round(articleCount * 8.5); // $8.50 per article API costs
  const savings = totalManualCost - totalAICost;
  const trafficGrowth = articleCount * 280; // project 280 visits/piece/mo

  return (
    <div className="bg-white min-h-screen text-black overflow-hidden pt-28 pb-20 select-none">
      
      {/* 1. Hero Section */}
      <section className="relative py-16 sm:py-20 border-b border-brand-border bg-gradient-to-b from-brand-gray/40 to-white">
        
        {/* Glowing visual backdrop */}
        <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
          <div className="absolute -top-32 right-10 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-zinc-200 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
          
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-red/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-red"
          >
            <Award className="h-3.5 w-3.5" /> High-Performance Media
          </motion.span>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]"
              >
                AI Content <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-zinc-800 to-brand-red">
                  Systems.
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-black/50 text-sm sm:text-base leading-relaxed max-w-xl font-normal"
              >
                Engineered engines that produce semantic search articles, social hooks, and landing page copies dynamically. Scale content velocity while maintaining absolute brand guidelines.
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
                  Configure a Content Engine
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <a
                  href="#workbench"
                  className="flex items-center gap-1.5 rounded-full border border-brand-border hover:border-black px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black/70 hover:text-black transition-colors"
                >
                  Open Sandbox Workspace
                </a>
              </motion.div>
            </div>

            {/* Visual Media Stack Right Column */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[340px]">
              <div className="relative w-full max-w-[360px] h-80">
                
                {/* Floating Mock UI 1: Google SEO Result */}
                <motion.div
                  initial={{ x: -20, y: -20, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute top-4 left-2 w-80 bg-white border border-brand-border p-4 rounded-2xl shadow-lg z-20 flex flex-col gap-1.5"
                >
                  <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-bold select-none">
                    <Search className="h-3 w-3 text-brand-red" /> google.com/search
                  </div>
                  <span className="text-xs font-extrabold text-blue-600 hover:underline cursor-pointer">
                    Decentralized Finance Scaling: Unified Liquidity Analysis
                  </span>
                  <p className="text-[10px] text-black/60 leading-normal">
                    We breakdown scaling solutions for liquidity fragmentation and institutional compliance in Web3.
                  </p>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md self-start border border-emerald-100">
                    #1 Ranking
                  </span>
                </motion.div>

                {/* Floating Mock UI 2: Social Media Post */}
                <motion.div
                  initial={{ x: 40, y: 40, opacity: 0 }}
                  animate={{ x: 0, y: 40, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute bottom-6 right-2 w-72 bg-white border border-brand-border p-4 rounded-2xl shadow-xl z-10 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2 select-none">
                    <div className="h-6 w-6 rounded-full bg-brand-red flex items-center justify-center text-[8px] text-white font-bold">
                      XI
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-black">Xipitechnologia Platform</span>
                      <span className="text-[7px] text-black/40">12 mins ago • Edited</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-black/70 leading-relaxed font-normal">
                    Decentralized systems require unified liquidity channels to scale compliance structures...
                  </p>
                  <div className="h-2 w-full bg-brand-gray rounded border border-brand-border" />
                </motion.div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Interactive Workbench Section */}
      <section id="workbench" className="py-24 border-b border-brand-border scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              Interactive Workspace
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Test drive the content sandbox.
            </h2>
            <p className="text-black/50 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Select your seed parameters and watch the AI map out keywords, write formatted draft segments, and output metadata.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Input Configuration Panel */}
            <div className="lg:col-span-4 bg-brand-gray border border-brand-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-6">
                
                <div className="flex items-center gap-2 border-b border-brand-border pb-4 mb-4 select-none">
                  <Layers className="h-5 w-5 text-brand-red" />
                  <h3 className="font-display font-extrabold text-lg">System Parameters</h3>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-black/50">
                    Seed Topic / Target Area
                  </label>
                  <input
                    type="text"
                    disabled={simulationState !== 'idle' && simulationState !== 'completed'}
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full rounded-xl border border-brand-border bg-white px-4 py-3.5 text-sm text-black outline-none transition-all focus:border-brand-red disabled:opacity-60"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-black/50">
                    Brand Tone & Constraint
                  </label>
                  <select
                    disabled={simulationState !== 'idle' && simulationState !== 'completed'}
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="w-full rounded-xl border border-brand-border bg-white px-4 py-3.5 text-sm text-black outline-none transition-all focus:border-brand-red disabled:opacity-60"
                  >
                    <option>Technical & Authoritative</option>
                    <option>Creative & Narrative-Driven</option>
                    <option>Sleek Brand Commercial</option>
                  </select>
                </div>

              </div>

              <div className="pt-8">
                <button
                  onClick={runSimulation}
                  disabled={simulationState !== 'idle' && simulationState !== 'completed'}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-black hover:bg-brand-red px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition-colors duration-300 disabled:opacity-40 select-none active:scale-95 shadow-sm"
                >
                  <Play className="h-4 w-4 fill-white" />
                  Generate Multi-Channel Assets
                </button>
              </div>

            </div>

            {/* Output Panel with Tabs */}
            <div className="lg:col-span-8 bg-brand-gray border border-brand-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[440px] relative overflow-hidden shadow-sm">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-brand-border/60 pb-4 mb-4 gap-4 select-none">
                
                {/* Tabs selection */}
                <div className="flex bg-white border border-brand-border p-1 rounded-xl">
                  {[
                    { id: 'blog', label: 'Blog Article' },
                    { id: 'social', label: 'Social Outlets' },
                    { id: 'seo', label: 'SEO Metadata' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
                        activeTab === tab.id 
                          ? 'bg-black text-white shadow-sm' 
                          : 'text-black/60 hover:text-black'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 self-end sm:self-auto">
                  <Terminal className="h-4 w-4 text-brand-red" />
                  <span className="text-[10px] font-mono text-black/40">system_thread.log</span>
                </div>

              </div>

              {/* Simulation Logging Console */}
              {simulationState !== 'completed' && (
                <div className="flex-grow font-mono text-xs space-y-2 bg-black text-white p-5 rounded-2xl overflow-y-auto max-h-56">
                  {simLogs.length === 0 && (
                    <p className="text-zinc-500">Console idle. Awaiting compilation trigger...</p>
                  )}
                  {simLogs.map((log) => (
                    <div key={log.id} className="flex gap-2">
                      <span className="text-zinc-600">{`>`}</span>
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
              )}

              {/* Compiled output content displays */}
              {simulationState === 'completed' && (
                <div className="flex-grow min-h-[220px] flex flex-col justify-start">
                  <AnimatePresence mode="wait">
                    
                    {/* Tab: Blog */}
                    {activeTab === 'blog' && (
                      <motion.div
                        key="blog"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="space-y-3"
                      >
                        <h4 className="text-lg font-display font-extrabold text-black">
                          {generatedAssets.blogTitle}
                        </h4>
                        <p className="text-xs text-black/65 leading-relaxed font-normal bg-white border border-brand-border p-4 rounded-xl max-w-xl">
                          {generatedAssets.blogBody}
                        </p>
                      </motion.div>
                    )}

                    {/* Tab: Social */}
                    {activeTab === 'social' && (
                      <motion.div
                        key="social"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      >
                        <div className="bg-white border border-brand-border p-4 rounded-xl flex flex-col gap-2">
                          <span className="text-[9px] font-bold text-blue-600 uppercase tracking-wide">LinkedIn Template</span>
                          <p className="text-[10px] text-black/60 whitespace-pre-wrap leading-relaxed">
                            {generatedAssets.socialLinkedin}
                          </p>
                        </div>
                        <div className="bg-white border border-brand-border p-4 rounded-xl flex flex-col gap-2">
                          <span className="text-[9px] font-bold text-sky-500 uppercase tracking-wide">Twitter Thread</span>
                          <p className="text-[10px] text-black/60 whitespace-pre-wrap leading-relaxed">
                            {generatedAssets.socialTwitter}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Tab: SEO */}
                    {activeTab === 'seo' && (
                      <motion.div
                        key="seo"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center"
                      >
                        <div className="sm:col-span-8 bg-white border border-brand-border p-4 rounded-xl flex flex-col gap-2">
                          <div className="flex items-center gap-1.5 text-[8px] text-zinc-400 font-bold">
                            <Search className="h-3 w-3 text-zinc-400" /> google_meta_output
                          </div>
                          <span className="text-xs font-bold text-blue-600">
                            {generatedAssets.seoTitle}
                          </span>
                          <p className="text-[10px] text-black/60 leading-normal font-normal">
                            {generatedAssets.seoDesc}
                          </p>
                        </div>

                        {/* Dial score element */}
                        <div className="sm:col-span-4 flex flex-col items-center justify-center bg-white border border-brand-border p-4 rounded-xl h-full min-h-[140px]">
                          <div className="relative flex items-center justify-center">
                            <svg className="w-20 h-20 transform -rotate-90">
                              <circle cx="40" cy="40" r="30" stroke="#EEEEEE" strokeWidth="6" fill="transparent" />
                              <motion.circle 
                                cx="40" cy="40" r="30" stroke="#E32626" strokeWidth="6" fill="transparent"
                                strokeDasharray="188.4"
                                initial={{ strokeDashoffset: 188.4 }}
                                animate={{ strokeDashoffset: 188.4 - (188.4 * generatedAssets.seoScore) / 100 }}
                                transition={{ duration: 1.5, ease: 'easeOut' }}
                              />
                            </svg>
                            <span className="absolute text-sm font-extrabold text-black">
                              {generatedAssets.seoScore}%
                            </span>
                          </div>
                          <span className="text-[9px] font-bold text-black/50 uppercase tracking-widest mt-2">Optimization Score</span>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>
              )}

              {/* Progress visual bar */}
              <div className="mt-6 border-t border-brand-border/60 pt-4 select-none">
                <div className="flex justify-between items-center text-[10px] font-bold text-black/40 uppercase tracking-widest mb-1.5">
                  <span>Engine Phase: {simulationState}</span>
                  <span>{currentProgress}%</span>
                </div>
                <div className="h-1.5 w-full bg-brand-border rounded-full overflow-hidden">
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

      {/* 3. Efficiency & Velocity Yield Calculator */}
      <section className="py-24 border-b border-brand-border bg-brand-gray/30">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              Performance Yields
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Calculate your scaling efficiency.
            </h2>
            <p className="text-black/50 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Adjust content volume targets to see the operational cost savings, production speed, and traffic lift compared to manual agency methods.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Range Controls */}
            <div className="lg:col-span-5 space-y-8 bg-white border border-brand-border p-8 rounded-3xl shadow-sm">
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-black/50">Monthly Content Target</span>
                  <span className="text-sm font-extrabold text-black">{articleCount} Pieces</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={articleCount}
                  onChange={(e) => setArticleCount(parseInt(e.target.value))}
                  className="w-full accent-brand-red h-1 bg-brand-gray rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-black/50">Manual Copywriter Cost</span>
                  <span className="text-sm font-extrabold text-black">${manualCost} USD / Piece</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="25"
                  value={manualCost}
                  onChange={(e) => setManualCost(parseInt(e.target.value))}
                  className="w-full accent-brand-red h-1 bg-brand-gray rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="border-t border-brand-border pt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-black/40 uppercase tracking-wide">Base Assumptions</span>
                  <span className="text-xs font-semibold text-black/70">LLM Generation Cost: $8.50/pc | Traffic multiplier: 280/pc</span>
                </div>
              </div>

            </div>

            {/* Metric Displays */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card: Cost Savings */}
              <div className="bg-white border border-brand-border rounded-3xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-44">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-black/40 uppercase tracking-wider">Direct Cost Savings</span>
                  <TrendingUp className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
                    ${savings.toLocaleString()}
                  </span>
                  <span className="block text-xs font-bold text-black/40 mt-1 select-none">Saved compared to manual draft copies</span>
                </div>
              </div>

              {/* Card: Traffic scale */}
              <div className="bg-white border border-brand-border rounded-3xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-44">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-black/40 uppercase tracking-wider">Organic Visitors Lift</span>
                  <Globe className="h-5 w-5 text-brand-red animate-pulse" />
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
                    +{trafficGrowth.toLocaleString()}
                  </span>
                  <span className="block text-xs font-bold text-black/40 mt-1 select-none">Projected organic visits per month</span>
                </div>
              </div>

              {/* Card: Velocity speed */}
              <div className="bg-white border border-brand-border rounded-3xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-44">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-black/40 uppercase tracking-wider">Time Velocity Scale</span>
                  <Zap className="h-5 w-5 text-blue-500 animate-pulse" />
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
                    12x Speed
                  </span>
                  <span className="block text-xs font-bold text-black/40 mt-1 select-none">Faster outbound distribution indexing</span>
                </div>
              </div>

              {/* Card: Action Button */}
              <div className="bg-black text-white rounded-3xl p-6 flex flex-col justify-between h-44 relative overflow-hidden group shadow-lg border border-transparent hover:border-brand-red/30 transition-all duration-500">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-red/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                
                <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Ready to deploy?</span>
                
                <button 
                  onClick={onContactClick}
                  className="flex items-center justify-between w-full bg-white text-black group-hover:bg-brand-red group-hover:text-white px-5 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300"
                >
                  Book Setup Call
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. Modular Capability Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red select-none">
              Capabilities Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Engineered features to rank.
            </h2>
            <p className="text-black/50 text-sm leading-relaxed max-w-lg mx-auto font-normal">
              We design structured editorial and formatting guardrails to maximize conversion logic and indexing speeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: 'Semantic SEO Engine',
                desc: 'Maps search volumes and clusters keywords dynamically, matching natural language query variations.'
              },
              {
                icon: Cpu,
                title: 'Omni-Platform Formatting',
                desc: 'Generates specific templates for blog drafts, social posts, newsletters, and email copies in one click.'
              },
              {
                icon: CheckCircle2,
                title: 'Brand Voice Guardrails',
                desc: 'Injects custom terminology matrices ensuring all copy matches style scales, avoiding compliance errors.'
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
