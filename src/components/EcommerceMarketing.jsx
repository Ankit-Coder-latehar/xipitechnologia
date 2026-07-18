import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Star, ArrowRight, ArrowLeft, ArrowUpRight, Sparkles, Layout,
  Smartphone, Code, ShieldCheck, Landmark, BookOpen, MousePointer, 
  ShoppingCart, Activity, Compass, Cpu, Target, Heart, CheckCircle2, ChevronDown,
  TrendingUp, BarChart2, Mail, Image, Layers, RefreshCw
} from 'lucide-react';

export default function EcommerceMarketing({ onContactClick }) {
  // 1. Project Case Studies State
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const projects = [
    {
      id: '01',
      title: "L'Oréal Beauty Paid Acquisition Campaign",
      category: ['Paid Meta Ads', 'Google Search PPC', 'Conversion Rate Optimization'],
      desc: "Architected a high-scale paid acquisition engine across Meta and Google, delivering a consistent 4.8x ROAS while increasing new customer acquisition by 145% YoY.",
      image: '/loreal_campaign_mockup.png',
      accent: 'from-[#0B5CFF] to-[#00D47C]',
      tags: ['4.8x ROAS', 'Beauty Scale', 'Audience Funnels']
    },
    {
      id: '02',
      title: 'Antidote Luxury Candles E-commerce Funnel',
      category: ['Branding Strategy', 'Klaviyo Retention Flows', 'Shopify Storefront Optimization'],
      desc: "Designed and scaled an optimized e-commerce acquisition funnel for Antidote. Overhauled automated email/SMS flows, achieving a 140% monthly recurring revenue scale.",
      image: '/antidote_growth_funnel.png',
      accent: 'from-[#F78DA7] to-[#abb8c3]',
      tags: ['+140% MRR', 'D2C Retail', 'Retention Loops']
    }
  ];

  const handleNextProject = () => {
    setActiveProjectIdx((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrevProject = () => {
    setActiveProjectIdx((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  // 2. Process Accordion Tabs State
  const [activeStage, setActiveStage] = useState('Analysis');
  const [activeSubTab, setActiveSubTab] = useState('Funnel Audit');

  const processData = {
    Analysis: {
      subTabs: [
        {
          name: 'Funnel Audit',
          desc: 'We perform a comprehensive audit of your current Google Analytics, pixel data, checkout drop-off rates, and email dispatch funnels. We isolate leaking budgets and identify key sources of scalable traffic.'
        },
        {
          name: 'Competitor Intel',
          desc: 'Using advanced visual diagnostic tools, we analyze competitor ad creatives, landing page layouts, and search keyword bidding hierarchies. This forms a bulletproof strategy for initial campaign dispatch.'
        }
      ]
    },
    Creatives: {
      subTabs: [
        {
          name: 'Ad Concept Design',
          desc: 'Our design and video departments construct high-velocity visual formats (short-form reels, product grids, carousel collections). We align typography and visual style with your brand identity.'
        },
        {
          name: 'CRO landing pages',
          desc: 'We design bespoke landing pages structured specifically for conversion speed. Using clean styles, clear call-to-actions, and mobile-responsive layouts, we minimize distractions and scale checkouts.'
        }
      ]
    },
    Dispatch: {
      subTabs: [
        {
          name: 'Campaign Setup',
          desc: 'We map out target customer profiles, custom bidding rules, and retargeting hierarchies on Meta and Google Ads Manager, initiating campaigns with structured ad variations.'
        },
        {
          name: 'Feed & API Sync',
          desc: 'We set up real-time integrations for your Shopify catalog feed and Meta Conversions API (CAPI), ensuring accurate attribution metrics and zero catalog sync errors.'
        }
      ]
    },
    Scale: {
      subTabs: [
        {
          name: 'A/B Testing & Budgets',
          desc: 'We scale budgets by routing funds into winning ad sets, maintaining consistent testing loops for copy styles and visual formats to reduce acquisition cost (CPA).'
        },
        {
          name: 'Email Retention Loops',
          desc: 'We establish Klaviyo flow setups (welcome hooks, abandoned checkout reminders, post-purchase offers) to scale customer lifetime value (LTV) automatically.'
        }
      ]
    }
  };

  // Reset subtab on category change
  useEffect(() => {
    setActiveSubTab(processData[activeStage].subTabs[0].name);
  }, [activeStage]);

  // 3. Outbound Quote Module State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
    interests: ['Web Design', 'UI/UX'],
    budget: 'from $25,000 to $50,000'
  });
  const [budgetDropdownOpen, setBudgetDropdownOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const budgetOptions = [
    'up to $10,000',
    'from $10,000 to $25,000',
    'from $25,000 to $50,000',
    'from $50,000 to $100,000',
    'over $100,000'
  ];

  const handleInterestToggle = (interest) => {
    setFormData(prev => {
      const exists = prev.interests.includes(interest);
      if (exists) {
        return { ...prev, interests: prev.interests.filter(i => i !== interest) };
      } else {
        return { ...prev, interests: [...prev.interests, interest] };
      }
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectDetails: '',
        interests: ['Web Design', 'UI/UX'],
        budget: 'from $25,000 to $50,000'
      });
    }, 4000);
  };

  return (
    <div className="bg-white min-h-screen text-black overflow-hidden pt-20 select-none font-sans">
      
      {/* 1. HERO SECTION WITH INTERSECTING RED GRIDLINES */}
      <section className="relative py-24 border-b border-brand-border bg-white overflow-hidden">
        
        {/* Absolute intersecting gridlines */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Vertical lines */}
          <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-brand-border/60" />
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-brand-border/60" />
          <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-brand-border/60" />
          {/* Horizontal lines */}
          <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-brand-border/60" />
          <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-brand-border/60" />
          
          {/* Top-Right Crossing Indicator */}
          <div className="absolute right-[25%] top-[33.3%] -translate-y-1/2 translate-x-1/2 z-10 flex flex-col items-end">
            <div className="w-8 h-8 relative flex items-center justify-center">
              <span className="absolute w-4 h-[1.5px] bg-brand-red" />
              <span className="absolute h-4 w-[1.5px] bg-brand-red" />
            </div>
            <span className="text-[9px] uppercase tracking-widest text-brand-red font-bold mt-1 mr-4 bg-white px-1 select-none hidden md:inline">
              Scaling D2C customer acquisition
            </span>
          </div>
          
          {/* Top-Left Crossing Indicator */}
          <div className="absolute left-[25%] top-[66.6%] -translate-y-1/2 -translate-x-1/2 z-10">
            <div className="w-8 h-8 relative flex items-center justify-center">
              <span className="absolute w-4 h-[1.5px] bg-brand-red" />
              <span className="absolute h-4 w-[1.5px] bg-brand-red" />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
          
          <div className="flex flex-col items-start space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-red/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-red"
            >
              <TrendingUp className="h-3.5 w-3.5 text-brand-red animate-pulse" /> E-commerce Growth Engineering
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-7xl font-black tracking-tight leading-[0.95] max-w-5xl"
            >
              Scale customer acquisition <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-zinc-800 to-brand-red font-serif italic font-medium pr-2">
                on ecommerce marketplaces.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-black/50 text-sm sm:text-lg leading-relaxed max-w-2xl font-normal pt-2"
            >
              Deploy full-funnel media buying, conversion optimization, retention loops, and marketplace listings structured to turn traffic into paying recurring customers.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4 flex flex-wrap gap-4 items-center"
            >
              <a
                href="#quote"
                className="flex items-center gap-2 rounded-full bg-black hover:bg-brand-red px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition-colors duration-300 shadow-xl shadow-black/10 active:scale-95"
              >
                Launch Growth Campaign
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              
              <div className="flex items-center gap-2 border-l border-brand-border pl-6 py-2 select-none">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-red text-brand-red" />
                  ))}
                </div>
                <span className="text-xs font-extrabold text-black/60 uppercase tracking-widest">
                  Average 4.8x Campaign ROAS
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. INFINITE TEXT MARQUEE */}
      <section className="bg-black py-6 border-y border-brand-border/20 overflow-hidden select-none">
        <div className="w-full flex">
          <div className="animate-marquee-container flex items-center gap-12 whitespace-nowrap">
            {[...Array(2)].map((_, containerIdx) => (
              <div key={containerIdx} className="flex gap-12 items-center">
                {[
                  'Scalable Meta Ads Funnels',
                  'High-Converting Google Search PPC',
                  'Shopify Plus & Headless Development',
                  'Klaviyo Email Retention Flows',
                  'Amazon & Flipkart Listing Scaling',
                  'Award-Winning E-commerce Design'
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-white">
                    <span className="text-sm sm:text-base font-display font-extrabold uppercase tracking-widest text-white/95">
                      {text}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-brand-red" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CASE STUDIES SECTION (WITH GENERATED IMAGES) */}
      <section className="py-24 bg-brand-gray/30 border-b border-brand-border select-none">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
                E-commerce Case Studies
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
                Real traffic. Proven returns.
              </h2>
            </div>
            
            {/* Slider navigations */}
            <div className="flex items-center gap-3">
              <button 
                onClick={handlePrevProject}
                className="h-12 w-12 rounded-full border border-brand-border bg-white flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <div className="text-sm font-bold font-display select-none">
                <span className="text-brand-red">{(activeProjectIdx + 1).toString().padStart(2, '0')}</span>
                <span className="text-black/30"> / {projects.length.toString().padStart(2, '0')}</span>
              </div>
              <button 
                onClick={handleNextProject}
                className="h-12 w-12 rounded-full border border-brand-border bg-white flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all active:scale-95 cursor-pointer"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Case Studies Display Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Project Image Display Card using Generated Images */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-brand-border bg-white relative aspect-video flex flex-col justify-between shadow-sm group">
              
              {/* Graphic Backdrop with generated image */}
              <div className="absolute inset-0 z-0 bg-brand-gray/50 overflow-hidden select-none flex items-center justify-center">
                <img 
                  src={projects[activeProjectIdx].image} 
                  alt={projects[activeProjectIdx].title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
              </div>

              {/* Top metadata tags */}
              <div className="relative z-10 p-6 flex flex-wrap gap-2">
                {projects[activeProjectIdx].category.map((cat, idx) => (
                  <span key={idx} className="bg-black/90 backdrop-blur-md text-[9px] font-bold text-white uppercase tracking-widest px-3 py-1 rounded-full">
                    {cat}
                  </span>
                ))}
              </div>

              {/* Bottom CTA overlay */}
              <div className="relative z-10 p-6 flex justify-end">
                <button
                  onClick={onContactClick}
                  className="bg-white hover:bg-brand-red hover:text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-black flex items-center gap-1.5 shadow-lg shadow-black/15 transition-all select-none active:scale-95 cursor-pointer"
                >
                  View Growth Metrics
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>

            {/* Project Details Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl border border-brand-border p-8 md:p-10 shadow-sm relative">
              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-extrabold text-brand-red uppercase tracking-widest select-none font-display">
                    Case Study {(activeProjectIdx + 1).toString().padStart(2, '0')}
                  </span>
                  <h3 className="text-3xl font-extrabold text-black tracking-tight leading-tight">
                    {projects[activeProjectIdx].title}
                  </h3>
                </div>
                
                <p className="text-black/60 text-sm leading-relaxed font-normal">
                  {projects[activeProjectIdx].desc}
                </p>
              </div>

              {/* Full Category Tags Grid in Details Panel */}
              <div className="pt-8 border-t border-brand-border mt-8 space-y-4">
                <span className="block text-[10px] font-extrabold uppercase tracking-widest text-black/40">
                  Key Metrics Achieved
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {projects[activeProjectIdx].tags.map((tag, idx) => (
                    <span key={idx} className="bg-brand-gray border border-brand-border px-3 py-1 rounded-full text-[10px] font-bold text-black/75 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. GROWTH PILLARS GRID */}
      <section className="py-28 bg-white border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red select-none">
              Pillars of Growth
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
              E-commerce acquisition tools <br />
              engineered to scale.
            </h2>
            <p className="text-black/50 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              We construct custom paid social, paid search, creative execution, and database retargeting funnels that out-perform traditional agency benchmarks.
            </p>
          </div>

          {/* Grid of growth pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[
              {
                icon: TrendingUp,
                title: 'Paid Social Ads (Meta/TikTok)',
                desc: 'Strategic prospecting, high-scale media buying, pixel CAPI setups, and retargeting hierarchies on Meta Ads Manager and TikTok Ads to scale purchases.'
              },
              {
                icon: Target,
                title: 'Paid Search (Google/Bing)',
                desc: 'Bespoke Google Search PPC campaigns, Performance Max (PMax) setups, shopping catalog feeds, and high-intent long-tail keywords.'
              },
              {
                icon: Mail,
                title: 'Retention Automation (Klaviyo)',
                desc: 'Highly customized email & SMS workflows (Welcome flows, Cart Abandonment, Winbacks, Post-purchase splits) scaling Customer LTV automatically.'
              },
              {
                icon: Activity,
                title: 'Conversion Rate Optimization',
                desc: 'Rigorous A/B testing on checkout blocks, cart slide-outs, product description pages, and shipping banners to maximize conversion rate (CVR).'
              },
              {
                icon: Layers,
                title: 'Feed & API Management',
                desc: 'Clean synchronizations across Shopify catalog feeds, Conversions API tracking, Amazon seller listings, and marketplace listings.'
              },
              {
                icon: Image,
                title: 'Performance Creative Designs',
                desc: 'Dynamic design assets (UGC video editing, high-converting product grids, carousel collections, static ad hooks) to combat creative fatigue.'
              }
            ].map((pillar, idx) => (
              <div 
                key={idx}
                className="group border border-brand-border hover:border-brand-red/30 bg-brand-gray/30 rounded-3xl p-8 hover:shadow-xl hover:shadow-brand-red/5 transition-all duration-300 flex flex-col justify-between h-[280px]"
              >
                <div className="space-y-4">
                  <div className="h-11 w-11 rounded-2xl bg-white border border-brand-border flex items-center justify-center text-black group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-300 shadow-sm">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-black tracking-tight">{pillar.title}</h3>
                  <p className="text-xs text-black/60 leading-relaxed font-normal">{pillar.desc}</p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* 5. CAMPAIGN STRATEGY PROCESS TABS */}
      <section className="py-28 bg-brand-gray/30 border-b border-brand-border select-none">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              Our Roadmap
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
              An optimization blueprint built <br />
              for continuous customer loops.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left selector */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {Object.keys(processData).map((stage) => (
                <button
                  key={stage}
                  onClick={() => setActiveStage(stage)}
                  className={`text-left px-6 py-5 rounded-2xl font-bold text-lg flex items-center justify-between transition-all select-none border border-transparent cursor-pointer ${
                    activeStage === stage 
                      ? 'bg-black text-white shadow-lg shadow-black/10 border-black' 
                      : 'bg-white text-black/70 hover:bg-brand-gray border-brand-border'
                  }`}
                >
                  <span>{stage}</span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${activeStage === stage ? '-rotate-90' : 'opacity-40'}`} />
                </button>
              ))}
            </div>

            {/* Right panel display */}
            <div className="lg:col-span-8 bg-white border border-brand-border rounded-3xl p-8 md:p-10 shadow-sm min-h-[360px] flex flex-col justify-between">
              
              <div className="space-y-6">
                
                {/* subtabs */}
                <div className="flex flex-wrap gap-2 border-b border-brand-border pb-4 select-none">
                  {processData[activeStage].subTabs.map((sub) => (
                    <button
                      key={sub.name}
                      onClick={() => setActiveSubTab(sub.name)}
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all border cursor-pointer ${
                        activeSubTab === sub.name
                          ? 'bg-brand-red/10 border-brand-red text-brand-red'
                          : 'border-transparent text-black/55 hover:text-black hover:bg-brand-gray'
                      }`}
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>

                {/* content display */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSubTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h4 className="text-xl font-bold tracking-tight text-black">
                      {activeSubTab} Description
                    </h4>
                    <p className="text-black/60 text-sm leading-relaxed font-normal">
                      {processData[activeStage].subTabs.find(s => s.name === activeSubTab)?.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

              </div>

              {/* Progress bar */}
              <div className="pt-8 border-t border-brand-border mt-8 flex justify-between items-center text-xs font-bold text-black/40">
                <span className="uppercase tracking-widest">{activeStage} flow active</span>
                <span className="font-display font-black text-brand-red">
                  {activeStage === 'Analysis' && '25%'}
                  {activeStage === 'Creatives' && '50%'}
                  {activeStage === 'Dispatch' && '75%'}
                  {activeStage === 'Scale' && '100%'} Setup
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. INTERACTIVE CONSULTATION/QUOTE FORM */}
      <section id="quote" className="py-28 bg-white select-none">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
              <Heart className="h-4.5 w-4.5 fill-brand-red animate-pulse" />
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black">
              Start Your Growth Campaign
            </h2>
            <p className="text-black/50 text-sm leading-relaxed max-w-md mx-auto font-normal">
              Tell us about your D2C product scale, choose your marketing objectives, and let\'s configure a high-ROAS marketing stack.
            </p>
          </div>

          {formSubmitted ? (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-brand-gray border border-brand-border rounded-3xl p-10 text-center space-y-4 shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-2">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-black tracking-tight">Request Sent Successfully!</h3>
              <p className="text-sm text-black/60 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-black">{formData.name}</strong>. An e-commerce growth specialist will review your parameters and reach out at <strong className="text-black">{formData.email}</strong> within 12 business hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-8 bg-brand-gray/25 border border-brand-border rounded-3xl p-8 sm:p-12 shadow-sm">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-black/50">Your name*</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Anjelika Kour"
                    className="w-full bg-white border border-brand-border focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-xl px-4 py-3 text-sm text-black outline-none font-semibold shadow-sm transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-black/50">Your e-mail*</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="hello@dd.nyc"
                    className="w-full bg-white border border-brand-border focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-xl px-4 py-3 text-sm text-black outline-none font-semibold shadow-sm transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="details" className="text-xs font-bold uppercase tracking-wider text-black/50">Tell us about your project…</label>
                <textarea
                  id="details"
                  rows={4}
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  placeholder="Tell us about your current monthly revenue, ad spend budget, target ROAS..."
                  className="w-full bg-white border border-brand-border focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-xl px-4 py-3 text-sm text-black outline-none font-semibold shadow-sm transition-all resize-none"
                />
              </div>

              {/* Checkboxes selection */}
              <div className="space-y-3">
                <span className="block text-xs font-bold uppercase tracking-wider text-black/50">I'm interested in...</span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Branding', 'Web Design', 'Packaging', 'Graphic Design',
                    'UI/UX', 'Video Production', 'Experiential', 'Other'
                  ].map((interest) => {
                    const isSelected = formData.interests.includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestToggle(interest)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all border select-none cursor-pointer ${
                          isSelected 
                            ? 'bg-black border-black text-white shadow-sm'
                            : 'bg-white border-brand-border text-black/75 hover:border-black/40'
                        }`}
                      >
                        {interest}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom Budget Selector */}
              <div className="space-y-2 relative">
                <span className="block text-xs font-bold uppercase tracking-wider text-black/50">Tell us your approximate budget</span>
                
                <button
                  type="button"
                  onClick={() => setBudgetDropdownOpen(!budgetDropdownOpen)}
                  className="w-full bg-white border border-brand-border rounded-xl px-4 py-3.5 flex justify-between items-center text-sm font-semibold text-black/85 outline-none text-left shadow-sm select-none hover:border-black/30 cursor-pointer"
                >
                  <span>{formData.budget}</span>
                  <ChevronDown className={`h-4 w-4 text-black/50 transition-transform ${budgetDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {budgetDropdownOpen && (
                  <div className="absolute left-0 right-0 z-20 mt-1.5 bg-white border border-brand-border rounded-xl shadow-xl overflow-hidden py-1">
                    {budgetOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, budget: opt });
                          setBudgetDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-xs font-bold hover:bg-brand-gray transition-colors select-none cursor-pointer ${
                          formData.budget === opt ? 'text-brand-red' : 'text-black/70'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Dispatch trigger submit button */}
              <div className="pt-4 border-t border-brand-border/60">
                <button
                  type="submit"
                  className="w-full rounded-full bg-black hover:bg-brand-red py-4 text-xs font-bold uppercase tracking-wider text-white transition-colors duration-300 select-none shadow-md shadow-black/10 active:scale-[0.98] cursor-pointer"
                >
                  Send Project Request
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

    </div>
  );
}
