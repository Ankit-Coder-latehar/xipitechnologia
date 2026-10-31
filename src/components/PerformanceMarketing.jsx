import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Target, BarChart3, Zap, CheckCircle2, ArrowRight, Sparkles, 
  DollarSign, Layers, Cpu, PieChart, Sliders, Search, Award, ShieldCheck, 
  ChevronDown, ChevronUp, MessageSquare, ExternalLink, Filter, ArrowUpRight, 
  Activity, Clock, Users, Video, Globe, RefreshCw, Eye, MousePointer, Check,
  Share2, Rocket, BarChart2, Shield
} from 'lucide-react';

export default function PerformanceMarketing({ onContactClick }) {
  // Simulator State
  const [adSpend, setAdSpend] = useState(15000);
  const [targetRoas, setTargetRoas] = useState(4.2);
  const [aov, setAov] = useState(75);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Dynamic ROAS calculations
  const projectedRevenue = Math.round(adSpend * targetRoas);
  const projectedConversions = Math.round(projectedRevenue / aov);
  const projectedCpa = (adSpend / (projectedConversions || 1)).toFixed(2);
  const projectedNetProfit = Math.round(projectedRevenue - adSpend);

  const scrollToSimulator = () => {
    const el = document.getElementById('roas-simulator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      id: '1',
      title: '1. Paid Search Advertising',
      icon: Search,
      desc: 'Paid search advertising helps businesses appear in front of people who are actively searching for the products or services. Campaigns can be created around relevant keywords, locations, audiences, and business goals. Xi Pi Technologia can help with campaign planning, keyword selection, ad creation, budget management, and on-going optimization.'
    },
    {
      id: '2',
      title: '2. Social Media Advertising',
      icon: Share2,
      desc: 'Social media platforms provide businesses with opportunities to reach specific audiences based on factors such as interests, demographics, online behaviour, and location. Xi Pi Technologia can develop targeted social media advertising campaigns designed to increase enquiries, website traffic, conversions, or sales.'
    },
    {
      id: '3',
      title: '3. Lead Generation Campaigns',
      icon: Target,
      desc: 'Generating quality leads is an important objective for many businesses. Performance marketing campaigns can be designed to attract potential customers and encourage them to submit enquiry forms, call the business, send messages, or take other desired actions. Campaign performance can then be monitored to identify opportunities for improving lead quality and conversion rates.'
    },
    {
      id: '4',
      title: '4. Conversion Optimization',
      icon: TrendingUp,
      desc: 'Getting visitors to a website is only one part of digital marketing. Businesses also need to encourage those visitors to take meaningful actions. Xi Pi Technologia focuses on analysing campaign and user behaviour to identify possible improvements in landing pages, advertisements, calls to action, and conversion processes.'
    },
    {
      id: '5',
      title: '5. Remarketing Campaigns',
      icon: RefreshCw,
      desc: 'Remarketing helps businesses reconnect with people who have previously visited their website or interacted with their digital channels. These campaigns can remind potential customers about a product or service and encourage them to return and complete an enquiry or purchase.'
    },
    {
      id: '6',
      title: '6. Campaign Tracking and Analytics',
      icon: BarChart3,
      desc: 'Measuring campaign performance is essential for making informed marketing decisions. Performance marketing services include tracking important metrics such as clicks, leads, conversions, cost per lead, conversion rates, and overall campaign performance. This data can help businesses understand what is working and where improvements are needed.'
    },
    {
      id: '7',
      title: '7. Campaign Optimization',
      icon: Sliders,
      desc: 'Digital advertising campaigns require regular monitoring and optimization. Xi Pi Technologia can analyse campaign data and make adjustments to targeting, advertisements, keywords, budgets, and other campaign elements to improve performance.'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'BUSINESS & GOAL ANALYSIS',
      points: [
        'Understand the product/service, target audience, geography and competitors.',
        'Define the primary KPI (key performance indicators): leads, sales, ROAS(return on ads spend), CAC (customer acquisition cost), bookings, etc.'
      ]
    },
    {
      step: '2',
      title: 'MARKETING & COMPETITOR RESEARCH',
      points: [
        'Understand who the customers are and what they want to buy.',
        'Check competitors, popular search words, offers, and ad ideas.'
      ]
    },
    {
      step: '3',
      title: 'STRATEGY & MEDIA PLAN',
      points: [
        'Channel Selection: Choose the best platform to reach the target customers.',
        'Campaign Strategy: Plan how to run the campaign and achieve the business goal.',
        'Budget Allocation: Decide on how much money to spend on each platform and campaign.',
        'Conversion Funnel: Plan the steps that turn people from interested viewers into customers.'
      ]
    },
    {
      step: '4',
      title: 'TRACKING & SET-UP',
      points: [
        'Analytics Setup: Set up tools to track website and campaign performance.',
        'Pixel / Tag Implementation: Add tracking codes to the website to collect useful data.',
        'Conversion Tracking: Track actions like purchases, sign-ups, or form submissions.',
        'CRM / Lead Tracking: Track and manage leads from the time they contact you until they become customers.'
      ]
    },
    {
      step: '5',
      title: 'Campaign Creation',
      points: [
        'Ad Creatives: Create attractive images, videos, and ads for customers.',
        'Copy & Landing Pages: Write simple ad messages and create useful landing pages.',
        'Audience Targeting: Choose the right people who are most likely to be interested.',
        'Campaign Configuration: Set up the campaign with the right budget, audience, goals, and settings.'
      ]
    },
    {
      step: '6',
      title: 'Campaign Launch',
      points: [
        'Campaign Activation: Launch the campaign on the selected platforms.',
        'Ad Publishing: Publish the ads, images, and videos for the target audience.',
        'Audience Activation: Start showing the ads to the selected customer groups.',
        'Campaign Monitoring: Check the campaign regularly after launch to make sure everything is working properly.'
      ]
    },
    {
      step: '7',
      title: 'Monitoring & Optimization',
      points: [
        'Check how many people click the ads and how much each click costs.',
        'Track how many leads and sales the campaign generates.',
        'Test different ads to find out which one performs better.',
        'Adjust the budget to spend more on campaigns that perform well.'
      ]
    },
    {
      step: '8',
      title: 'Reporting & Insights',
      points: [
        'Performance Dashboard: Create a dashboard to show campaign performance and results.',
        'ROI / ROAS Analysis: Measure the money earned from the money spent on advertising.',
        'Key Insights: Find out what is working well and what can be improved.',
        'Client Reporting: Share clear and simple campaign reports with the client.'
      ]
    },
    {
      step: '9',
      title: 'Scale & Retarget',
      points: [
        'Increase the budget for campaigns and ads that are performing well.',
        'Show ads again to people who have already visited or interacted with the brand.',
        'Reach more potential customers by targeting new audiences and markets.'
      ]
    }
  ];

  const faqs = [
    {
      q: '1. What are performance marketing services?',
      a: 'Performance marketing services are digital marketing solutions focused on measurable business results such as leads, sales, conversions, website traffic, and customer enquiries. Campaigns are continuously monitored and optimized to improve performance and maximize marketing ROI.'
    },
    {
      q: '2. What performance marketing services does Xi Pi Technologia offer?',
      a: 'Xi Pi Technologia offers performance-focused solutions such as paid search advertising, social media advertising, lead generation, remarketing, conversion optimization, campaign tracking, analytics, and campaign optimization.'
    },
    {
      q: '3. How can performance marketing help my business?',
      a: 'Performance marketing can help businesses reach relevant audiences, generate quality leads, increase conversions, drive website traffic, and make better use of their advertising budgets through data-driven campaign management.'
    },
    {
      q: '4. Why should I choose Xi Pi Technologia for performance marketing?',
      a: 'Xi Pi Technologia focuses on measurable outcomes and customized strategies. Campaigns can be planned according to your business goals, target audience, industry, budget, and desired conversions.'
    },
    {
      q: '5. Do you provide performance marketing services in Tricity?',
      a: 'Yes. Xi Pi Technologia provides performance marketing services in Tricity, helping businesses target audiences across Chandigarh, Mohali, Panchkula, and nearby areas through targeted digital campaigns.'
    },
    {
      q: '6. Which platforms can be used for performance marketing?',
      a: 'Performance marketing campaigns can use platforms such as Google Ads, Meta Ads, and other relevant digital advertising channels, depending on the business objectives and target audience.'
    },
    {
      q: '7. Can performance marketing help generate leads?',
      a: 'Yes. Lead generation is one of the major applications of performance marketing. Campaigns can be designed to encourage potential customers to submit enquiry forms, make calls, send messages, or complete other desired actions.'
    },
    {
      q: '8. How is performance marketing measured?',
      a: 'Performance marketing can be measured using metrics such as impressions, clicks, click-through rate, cost per click, leads, cost per lead, conversions, conversion rate, revenue, and return on advertising spend.'
    },
    {
      q: '9. Is performance marketing suitable for small businesses?',
      a: 'Yes. Performance marketing can be suitable for businesses of different sizes because campaigns can be planned around specific budgets, locations, audiences, and objectives. Regular performance tracking can help businesses identify where their budget is producing results.'
    },
    {
      q: '10. How long does it take to see results from performance marketing?',
      a: 'The timeline can vary depending on the industry, competition, advertising platform, budget, target audience, and campaign objectives. Initial data may become available relatively quickly, while consistent optimization can help improve performance over time.'
    },
    {
      q: '11. Can performance marketing increase online sales?',
      a: 'Yes. E-commerce and other businesses can use performance marketing to target potential customers, promote products or services, drive qualified traffic, and encourage conversions. Campaign data can also be used to identify opportunities for improving sales performance.'
    },
    {
      q: '12. How can I get started with performance marketing services from Xi Pi Technologia?',
      a: 'You can start by discussing your business goals, target audience, budget, current digital presence, and desired results with Xi Pi Technologia. Based on these factors, a suitable performance marketing strategy can be developed.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans overflow-x-hidden pt-20">
      
      {/* Dynamic Background Radial Lights */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-to-b from-brand-red/10 via-emerald-500/5 to-transparent rounded-full blur-[180px] pointer-events-none" />

      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative pt-24 pb-20 border-b border-white/10 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-md mb-8"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
            <span className="text-xs font-extrabold tracking-wider uppercase text-zinc-200">
              TRICITY PERFORMANCE MARKETING AGENCY
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-8 space-y-6"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Performance Marketing Services <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-brand-red">
                  by Xi Pi Technologia
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-3xl">
                <p>
                  Performance marketing services help businesses promote their products and 
                  services online while focusing on measurable results. Instead of simply increasing 
                  visibility, performance marketing focuses on important business goals such as 
                  website traffic, leads, sales, conversions, and return on investment (ROI).
                </p>
                <p>
                  For businesses looking for performance marketing services in Tricity, Xi Pi 
                  Technologia can help create customized digital marketing campaigns based on 
                  business objectives, target audience, budget, and industry requirements.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onContactClick}
                  className="group relative inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-xl shadow-brand-red/30 transition-all duration-300 hover:scale-105"
                >
                  <span>Book Strategy Audit</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={scrollToSimulator}
                  className="inline-flex items-center gap-2.5 bg-white/5 hover:bg-white/10 text-white font-bold text-sm px-6 py-4 rounded-2xl border border-white/15 backdrop-blur-sm transition-all duration-300 hover:border-white/30"
                >
                  <Sliders className="h-4 w-4 text-emerald-400" />
                  <span>Interactive ROAS Calculator</span>
                </button>
              </div>
            </motion.div>

            {/* Right Command Center Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 relative"
            >
              <div className="relative rounded-3xl bg-zinc-900/90 border border-white/15 p-6 backdrop-blur-xl shadow-2xl shadow-emerald-900/20 overflow-hidden space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
                    MEASURABLE IMPACT
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                    DATA-DRIVEN
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-xs text-zinc-400 block mb-1">Target Outcomes</span>
                    <span className="text-lg font-bold text-white">Leads, Conversions & ROI</span>
                  </div>
                  <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-xs text-zinc-400 block mb-1">Service Region</span>
                    <span className="text-lg font-bold text-emerald-400">Tricity & Pan-India</span>
                  </div>
                  <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-xs text-zinc-400 block mb-1">Core Philosophy</span>
                    <span className="text-sm font-semibold text-zinc-200">Results-First Media Planning</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. WHAT IS PERFORMANCE MARKETING? */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
              CORE CONCEPT
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              What is Performance Marketing?
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              <p>
                Performance marketing is a type of digital marketing that focuses on getting clear 
                and measurable results. These results are like getting leads, making sales, bringing 
                visitors to a website, getting app downloads, receiving enquiries, or getting 
                customers to take an action.
              </p>
              <p>
                Rather than relying only on brand awareness, performance marketing allows 
                businesses to monitor how their campaigns are performing and make data-based 
                improvements. This helps businesses use their marketing budgets more effectively 
                and identify which campaigns, audiences, and platforms are generating the best 
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. PERFORMANCE MARKETING SERVICES OFFERED */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
              OUR CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Performance Marketing Services Offered by Xi Pi Technologia
            </h2>
            <p className="text-base sm:text-lg text-zinc-400">
              Xi Pi Technologia provides performance marketing services designed to help 
              businesses reach the right audience, generate quality leads, and improve online 
              growth. The performance marketing services covers:-
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv) => {
              const Icon = srv.icon;
              return (
                <motion.div
                  key={srv.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-emerald-500/40 p-8 flex flex-col justify-between group transition-all duration-300 hover:bg-zinc-900/90"
                >
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                      <Icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                      {srv.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. WHY CHOOSE US? */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-[#0A0A0F] border border-white/10 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
                OUR VALUE PROPOSITION
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
                Why choose us?
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
                <p>
                  Effective performance marketing is not simply about running advertisements. It 
                  involves selecting the right channels, reaching the right audience, tracking 
                  meaningful results, and continuously improving campaigns.
                </p>
                <p>
                  With performance marketing services from Xi Pi Technologia, businesses can 
                  take a structured and measurable approach to digital advertising. If you are looking 
                  for performance marketing services in Tricity, a customized strategy can help you 
                  work toward stronger online visibility, better-quality leads, increased conversions, 
                  and sustainable business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. INTERACTIVE ROAS SIMULATOR */}
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
              Adjust your monthly ad budget and targets to see projected revenue, CPA, and net profit with data-driven performance marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Sliders Control Panel */}
            <div className="lg:col-span-6 bg-zinc-900/80 rounded-3xl p-6 sm:p-8 border border-white/10 space-y-8 backdrop-blur-md">
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

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <label htmlFor="aov-range" className="text-zinc-300 flex items-center gap-2">
                    <PieChart className="h-4 w-4 text-blue-400" />
                    Average Order Value / Lead Value (AOV)
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

            {/* Results Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider block">PROJECTED MONTHLY OUTCOME</span>
                  <span className="text-sm font-bold text-white">Based on Performance Marketing Projections</span>
                </div>
                <Sparkles className="h-6 w-6 text-emerald-400 animate-pulse" />
              </div>

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
      {/* 6. GET STARTED WITH XI PI TECHNOLOGIA & 9-STEP PROCESS */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
              METHODOLOGY & EXECUTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Get Started with Xi Pi Technologia
            </h2>
            <p className="text-base sm:text-lg text-zinc-400">
              A practical Xi-Pi-style performance marketing process would look like this:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((stepItem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-zinc-900/60 rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-emerald-400/40 mb-3 font-mono">
                    0{stepItem.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white mb-4">
                    {stepItem.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {stepItem.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5 leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. CLOSING CTA BANNER */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[350px] bg-gradient-to-r from-emerald-500/20 to-brand-red/20 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
            TAKE THE LEAP TO MEASURABLE GROWTH
          </span>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Performance Marketing Services <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              by Xi Pi Technologia
            </span>
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            If you are looking for performance marketing services in Tricity, a customized strategy can help you work toward stronger online visibility, better-quality leads, increased conversions, and sustainable business growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold text-sm px-10 py-5 rounded-2xl shadow-2xl shadow-brand-red/40 transition-all duration-300 hover:scale-105"
            >
              <span>Get Started with Xi Pi Technologia</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-t border-white/10 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
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

    </div>
  );
}
