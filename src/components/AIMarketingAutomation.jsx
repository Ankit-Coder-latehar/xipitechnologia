import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Cpu, Sparkles, TrendingUp, Clock, 
  Coins, Play, CheckCircle2, Database, Mail, 
  Terminal, ArrowRight, ChevronRight, Zap, Target,
  ShieldCheck, Server, Lock, Layers, Code, Bot, Check, X, Sliders, RefreshCw
} from 'lucide-react';

const statsData = [
  { value: '$15M+', label: 'Verified Cost Savings', detail: 'Across enterprise client operations' },
  { value: '99.4%', label: 'Task Accuracy Rate', detail: 'Strict multi-stage guardrails' },
  { value: '4.5x', label: 'Avg Efficiency Lift', detail: 'Deployable within 14 business days' },
  { value: '50+', label: 'Custom Models Deployed', detail: 'In active production environments' }
];

const workflowsData = {
  prospector: {
    title: 'Autonomous Lead Prospector',
    desc: 'Scrapes domain targets, enriches decision-maker contact vectors, runs competitive audits, and crafts personalized multi-touch sequences.',
    logs: [
      '🚀 Initializing Lead Prospector Agent thread...',
      '🔍 Querying LinkedIn & Crunchbase APIs for target ICP matches...',
      '📊 Found 64 high-intent decision makers (VP Sales, CMOs)',
      '🤖 Invoking custom LLM model specialized in B2B copy synthesis...',
      '✉️ Generating hyper-personalized outreach sequences with 0.82 confidence score',
      '🎉 Dispatch queue loaded — 64 outbound touches automated!'
    ],
    sampleOutput: `Subject: Reclaiming your wasted Meta ad spend\n\nHi Sarah,\n\nWe audited your domain and identified a 3.4s mobile checkout latency causing an estimated 18% bounce on paid traffic.\n\nOur AI employee can deploy a optimized checkout flow within 48 hours.\n\nBest,\nAI Growth Agent`
  },
  support: {
    title: '24/7 AI Customer Support & Success Agent',
    desc: 'Resolves tier-1 and tier-2 customer support tickets instantly by querying your private RAG vector knowledge base.',
    logs: [
      '⚡ Initializing Support Agent thread with Pinecone Vector DB...',
      '📩 Incoming customer ticket received: "How do I sync Shopify webhooks?"',
      '🧠 Running semantic vector search across 12,000 product documentation chunks...',
      '✅ Found match in API Documentation Section 4.2 (Cosine similarity 0.96)',
      '✍️ Formatting step-by-step resolution guide for customer...',
      '🎉 Ticket #4892 resolved in 1.4 seconds with 5-star customer rating!'
    ],
    sampleOutput: `Hi Mark,\n\nTo sync Shopify webhooks:\n1. Navigate to Settings > Notifications > Webhooks in your Shopify Admin.\n2. Click "Create Webhook" and select "Orders/Create".\n3. Paste endpoint: https://api.xipi.ai/v1/webhook\n\nOur AI agent has already pre-validated your API key.`
  },
  content: {
    title: 'AI Content & Ad Creative Engine',
    desc: 'Generates search-optimized articles, social copy variations, and static/video ad assets automatically scheduled across all channels.',
    logs: [
      '🎨 Initializing Content Generation Engine...',
      '📈 Analyzing trending search queries and competitor content gaps...',
      '✍️ Drafting 2,500-word deep-dive article on "AI Automation in 2026"',
      '🖼️ Invoking Stable Diffusion SDXL model for 4 bespoke header graphics...',
      '📲 Formatted multi-platform snippets for LinkedIn, X, and Instagram...',
      '🎉 Published to CMS and queued social distribution!'
    ],
    sampleOutput: `Headline: 5 Ways AI Employees Are Replacing Traditional SaaS Toolchains in 2026.\n\nExecutive Summary: Manual data entry between CRMs and ERPs costs enterprises $4.2B annually. Here is how custom LLMs eliminate friction...`
  },
  churn: {
    title: 'Predictive Churn & Retention Machine',
    desc: 'Monitors user in-app activity signals, forecasts customer drop-off before it happens, and triggers targeted winback offers.',
    logs: [
      '🔮 Initializing Predictive Churn Analytics Model...',
      '📊 Processing 150,000 user activity telemetry events...',
      '⚠️ Warning: 14 accounts flagged with decreased login frequency (-40%)',
      '🎯 Segmenting at-risk accounts by Lifetime Value (LTV)',
      '🎁 Automated dispatch of personalized upgrade discount & concierge call invite',
      '🎉 Churn risk reduced by 62% for flagged cohort!'
    ],
    sampleOutput: `Alert: User account #9482 (LTV $12,500) has not logged in for 14 days.\n\nAI Action Taken: Triggered 20% renewal discount offer & notified Account Manager via Slack notification.`
  }
};

const consultingPillars = [
  {
    num: '01',
    title: 'Custom AI Employees & Autonomous Agents',
    tag: '24/7 DIGITAL WORKFORCE TRAINED ON YOUR SOPS',
    color: '#38BDF8',
    icon: Bot,
    desc: 'Deploy autonomous digital employees trained on your exact company SOPs, brand voice, and workflows. They handle lead qualification, customer onboarding, scheduling, and CRM updates without burnout.',
    items: [
      'Custom AI Agent development & persona training',
      'Autonomous lead qualification & email outreach',
      'Multi-channel customer support (Chat, Email, WhatsApp)',
      'Automated CRM & database record updates',
      'Human-in-the-loop fallback & approval triggers'
    ]
  },
  {
    num: '02',
    title: 'LLM Fine-Tuning & RAG Vector Systems',
    tag: 'PRIVATE DATA VECTOR DATABASE ARCHITECTURE',
    color: '#A78BFA',
    icon: Database,
    desc: 'Connect your private company data (PDFs, Notion, Slack, SQL) to custom LLM vectors using Pinecone, LangChain, and OpenAI. Zero data leakage with 100% enterprise data privacy.',
    items: [
      'Custom RAG (Retrieval-Augmented Generation) pipeline',
      'Pinecone, Weaviate & Milvus vector database setups',
      'Llama 3, Claude 3.5 & GPT-4o model fine-tuning',
      'Enterprise data privacy & zero retention policies',
      'Real-time semantic search & document indexing'
    ]
  },
  {
    num: '03',
    title: 'Automated Marketing & Content Engine',
    tag: 'SCALE CONTENT SUPPLY CHAIN BY 10X',
    color: '#E32626',
    icon: Sparkles,
    desc: 'Automate your entire content production lifecycle. AI writes search-optimized articles, generates social graphics, builds ad copy variations, and schedules posts across all channels.',
    items: [
      'AI-powered blog & SEO article generation',
      'Ad copy multi-variant generator for Meta & Google',
      'Stable Diffusion & Midjourney visual graphic pipeline',
      'Automated social media scheduling & auto-posting',
      'Brand voice alignment & style guide enforcement'
    ]
  },
  {
    num: '04',
    title: 'Predictive Analytics & Algorithmic Growth',
    tag: 'DATA-DRIVEN DECISION MAKING AT SCALE',
    color: '#34D399',
    icon: TrendingUp,
    desc: 'Predict customer lifetime value (LTV), optimize paid ad bidding in real-time, and trigger behavioral automated retention campaigns before high-value customers churn.',
    items: [
      'Customer LTV & churn risk predictive modeling',
      'Algorithmic paid ad bid & budget allocation',
      'Behavioral event tracking & trigger flows',
      'Automated A/B testing & landing page variant selection',
      'Executive dashboard & real-time metric reporting'
    ]
  },
  {
    num: '05',
    title: 'Enterprise ERP & CRM AI Integration',
    tag: 'ELIMINATE MANUAL DATA ENTRY BETWEEN SYSTEMS',
    color: '#FB923C',
    icon: Server,
    desc: 'Seamlessly integrate AI agents with Salesforce, HubSpot, Shopify, Zapier, Make, and custom REST APIs to automate cross-platform data synchronization.',
    items: [
      'Salesforce & HubSpot custom AI agent connectors',
      'Shopify & WooCommerce inventory sync automation',
      'Zapier, Make & n8n workflow orchestration',
      'Custom REST API & Webhook listener endpoints',
      'Legacy software automation & web scraping'
    ]
  },
  {
    num: '06',
    title: 'AI Security, Governance & Compliance',
    tag: 'BANK-GRADE AI SECURITY & ZERO LEAKAGE',
    color: '#F472B6',
    icon: ShieldCheck,
    desc: 'Bank-grade AI security. SOC2 compliant architectures, strict prompt injection safeguards, audit logging, and optional on-premise local model hosting.',
    items: [
      'SOC2 Type II compliant AI system architecture',
      'Prompt injection & adversarial attack defense',
      'Comprehensive audit logging & telemetry monitoring',
      'Role-based access control (RBAC) for AI outputs',
      'On-premise / private cloud model hosting options'
    ]
  }
];

const roadmapSteps = [
  { step: 'Step 01', title: 'AI Feasibility & System Audit', desc: 'We audit your manual workflows, data sources, SOPs, and tech stack to identify high-ROI AI automation opportunities.' },
  { step: 'Step 02', title: 'Private Vector DB & Model Architecture', desc: 'We construct your private RAG vector index, fine-tune specialized LLM models, and build security guardrails.' },
  { step: 'Step 03', title: 'Agent Testing & Guardrail Calibration', desc: 'Multi-stage testing with zero hallucination enforcement, edge case testing, and human-in-the-loop fallback setup.' },
  { step: 'Step 04', title: 'Enterprise Deployment & Scaling', desc: 'Full API integration with your existing CRM/ERP, team training, and continuous model performance monitoring.' }
];

export default function AIMarketingAutomation({ onContactClick }) {
  // Simulator State
  const [activeWorkflow, setActiveWorkflow] = useState('prospector');
  const [simRunning, setSimRunning] = useState(false);
  const [currentLogs, setCurrentLogs] = useState([]);
  const [typedOutput, setTypedOutput] = useState('');
  const [progress, setProgress] = useState(0);

  // ROI Calculator State
  const [manualHours, setManualHours] = useState(1500);
  const [hourlyRate, setHourlyRate] = useState(45);

  const activeWfData = workflowsData[activeWorkflow];

  const runSimulation = () => {
    setSimRunning(true);
    setCurrentLogs([]);
    setTypedOutput('');
    setProgress(10);

    const logs = activeWfData.logs;
    logs.forEach((logText, idx) => {
      setTimeout(() => {
        setCurrentLogs(prev => [...prev, logText]);
        setProgress(Math.round(((idx + 1) / logs.length) * 100));
      }, idx * 1200);
    });

    setTimeout(() => {
      setTypedOutput(activeWfData.sampleOutput);
      setSimRunning(false);
    }, logs.length * 1200 + 400);
  };

  useEffect(() => {
    runSimulation();
  }, [activeWorkflow]);

  // Calculations
  const monthlySavings = Math.round(manualHours * hourlyRate * 0.85); // 85% cost reduction
  const annualHoursReclaimed = Math.round(manualHours * 12 * 0.9);
  const efficiencyMultiplier = 4.5;

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans select-none overflow-x-hidden pt-20">
      
      {/* Background Lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-sky-600/15 via-brand-red/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 border-b border-white/10 overflow-hidden">
        
        {/* Background Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10">
          <span className="text-[14vw] font-black leading-none text-transparent border-text tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}>
            AI SYSTEMS
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-5xl"
          >
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 px-4 py-1.5 rounded-full text-xs font-black tracking-[0.3em] uppercase">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              AI CONSULTING & ENTERPRISE AUTOMATION SYSTEMS
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.93] uppercase">
              ENTERPRISE AI <br />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-amber-300 to-brand-red normal-case">
                Consulting & Automation.
              </span>
            </h1>

            <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal pt-2">
              We architect autonomous AI employees, custom RAG knowledge bases, and multi-agent marketing workflows. Turn 40-hour manual tasks into 4-second algorithmic execution.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {['Custom AI Employees', 'LLM Fine-Tuning', 'RAG Knowledge System', 'Autonomous Agents', 'SOC2 AI Governance'].map((pill, pIdx) => (
                <span key={pIdx} className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-500/10 border border-sky-500/20 text-sky-400">
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <button
                onClick={onContactClick}
                className="group relative inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider shadow-xl shadow-brand-red/25 transition-all hover:scale-105"
              >
                <span>Deploy Enterprise AI</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-extrabold rounded-full text-xs uppercase tracking-wider hover:border-sky-400/50 hover:bg-white/5 transition-all"
              >
                <span>Free AI Architecture Audit</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PERFORMANCE METRICS BANNER */}
      <section className="relative bg-[#0D0D0F] border-b border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
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

      {/* 3. LIVE AI COMMAND CENTER & WORKFLOW SIMULATOR */}
      <section className="py-28 bg-[#050507] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
          
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-sky-400">
              LIVE DEMO SANDBOX
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              AI AGENT <br />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-sky-400">
                COMMAND CENTER.
              </span>
            </h2>
          </div>

          {/* Workflow Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.keys(workflowsData).map((wfKey) => (
              <button
                key={wfKey}
                onClick={() => setActiveWorkflow(wfKey)}
                className={`p-5 rounded-2xl border text-left transition-all ${
                  activeWorkflow === wfKey
                    ? 'bg-sky-500/10 border-sky-400 text-white shadow-xl shadow-sky-500/10'
                    : 'bg-[#0D0D0F] border-white/10 text-zinc-400 hover:border-white/30'
                }`}
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-sky-400 block mb-1">
                  WORKFLOW
                </span>
                <h4 className="text-sm font-extrabold text-white leading-tight">
                  {workflowsData[wfKey].title}
                </h4>
              </button>
            ))}
          </div>

          {/* Terminal Console Display */}
          <div className="bg-[#09090D] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <Terminal className="h-5 w-5 text-sky-400" />
                <span className="text-xs font-mono font-bold text-white">
                  xipi_ai_agent_thread::{activeWorkflow}.log
                </span>
              </div>
              <button
                onClick={runSimulation}
                disabled={simRunning}
                className="inline-flex items-center gap-2 bg-sky-500/20 hover:bg-sky-500 text-sky-300 hover:text-black border border-sky-500/40 px-4 py-1.5 rounded-full text-xs font-bold transition-all disabled:opacity-50"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${simRunning ? 'animate-spin' : ''}`} />
                <span>Re-run Agent Thread</span>
              </button>
            </div>

            <p className="text-xs text-zinc-400">
              {activeWfData.desc}
            </p>

            {/* Console Log Output */}
            <div className="font-mono text-xs space-y-2 bg-black/70 p-6 rounded-2xl border border-white/5 min-h-[160px] max-h-[260px] overflow-y-auto">
              {currentLogs.map((log, lIdx) => (
                <div key={lIdx} className="flex items-start gap-2.5">
                  <span className="text-sky-400 select-none">{`>`}</span>
                  <span className="text-zinc-300 leading-relaxed">{log}</span>
                </div>
              ))}
            </div>

            {/* Simulated LLM Synthesis Output */}
            {typedOutput && (
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-sky-400 block">
                  LLM SYNTHESIS OUTPUT:
                </span>
                <div className="bg-zinc-950 p-5 rounded-2xl border border-sky-400/20 text-xs text-zinc-200 font-mono whitespace-pre-line leading-relaxed">
                  {typedOutput}
                </div>
              </div>
            )}

            {/* Progress bar */}
            <div className="space-y-1 pt-2">
              <div className="flex justify-between text-[10px] font-mono text-zinc-500 uppercase">
                <span>Agent Status: {simRunning ? 'Executing...' : 'Completed'}</span>
                <span>{progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                <motion.div className="h-full bg-sky-400" animate={{ width: `${progress}%` }} />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. FULL AI CONSULTING SERVICES BREAKDOWN (6 CARDS) */}
      <section className="py-28 bg-[#0D0D0F] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-sky-400">
              CORE CONSULTING PILLARS
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              WHAT WE <br />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-sky-400">
                BUILD & AUTOMATE.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-[#050507] rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl" style={{ backgroundColor: p.color }} />

                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="h-10 w-10 rounded-xl flex items-center justify-center font-bold" style={{ backgroundColor: `${p.color}20`, color: p.color }}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-black tracking-[0.3em] uppercase" style={{ color: p.color }}>
                        {p.num}
                      </span>
                    </div>

                    <span className="text-[10px] font-black uppercase tracking-wider block mb-2" style={{ color: p.color }}>
                      {p.tag}
                    </span>

                    <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight">
                      {p.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                      {p.desc}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-4 border-t border-white/5">
                    {p.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2.5 text-xs font-medium text-zinc-300">
                        <span className="h-4 w-4 rounded-full flex items-center justify-center text-[10px] font-black shrink-0" style={{ backgroundColor: `${p.color}25`, color: p.color }}>
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE AI ROI SAVINGS CALCULATOR */}
      <section className="py-28 bg-[#050507] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-sky-400">
              ROI CALCULATOR
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              CALCULATE YOUR <br />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-emerald-400">
                AUTOMATED SAVINGS.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0D0D0F] p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl">
            
            {/* Sliders Input Panel */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-zinc-400 uppercase">Monthly Manual Task Hours</span>
                  <span className="text-sky-400 font-mono text-lg font-bold">{manualHours.toLocaleString()} hrs/mo</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="10000"
                  step="100"
                  value={manualHours}
                  onChange={(e) => setManualHours(parseInt(e.target.value))}
                  className="w-full accent-sky-400 h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-zinc-400 uppercase">Average Hourly Labor Cost ($/hr)</span>
                  <span className="text-emerald-400 font-mono text-lg font-bold">${hourlyRate}/hr</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="150"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                  className="w-full accent-emerald-400 h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 text-xs text-zinc-400 leading-relaxed">
                <strong className="text-white font-bold block mb-1">Calculation Methodology:</strong>
                Based on an 85% average manual labor reduction verified across 50+ enterprise AI employee deployments.
              </div>
            </div>

            {/* Metrics Output Display */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-black/60 p-6 rounded-2xl border border-emerald-500/30 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block">
                  MONTHLY COST SAVINGS
                </span>
                <span className="text-3xl font-black font-mono text-emerald-400 block">
                  ${monthlySavings.toLocaleString()}
                </span>
                <span className="text-[10px] text-zinc-500 font-medium block">
                  Annual: ${(monthlySavings * 12).toLocaleString()} saved
                </span>
              </div>

              <div className="bg-black/60 p-6 rounded-2xl border border-sky-500/30 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-sky-400 block">
                  HOURS RECLAIMED / YR
                </span>
                <span className="text-3xl font-black font-mono text-sky-400 block">
                  {annualHoursReclaimed.toLocaleString()} hrs
                </span>
                <span className="text-[10px] text-zinc-500 font-medium block">
                  Redirected to core strategy
                </span>
              </div>

              <div className="bg-black/60 p-6 rounded-2xl border border-amber-500/30 space-y-2 sm:col-span-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 block">
                  EFFICIENCY MULTIPLIER
                </span>
                <span className="text-3xl font-black font-mono text-amber-400 block">
                  {efficiencyMultiplier}x
                </span>
                <span className="text-[10px] text-zinc-500 font-medium block">
                  Deployable in under 14 business days
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. 4-STEP AI IMPLEMENTATION BLUEPRINT */}
      <section className="py-28 bg-[#0D0D0F] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-sky-400">
              IMPLEMENTATION ROADMAP
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              HOW WE DEPLOY <br />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-sky-400">
                ENTERPRISE AI.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#050507] p-7 rounded-3xl border border-white/10 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-sky-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-400 block mb-3">
                  {step.step}
                </span>
                <h3 className="text-lg font-extrabold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. HIGH-CONVERTING CTA BANNER */}
      <section className="py-24 bg-[#050507] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border border-zinc-800 text-center space-y-6 relative overflow-hidden shadow-2xl">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-400">
              READY TO AUTOMATE YOUR BUSINESS WITH ENTERPRISE AI?
            </span>

            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Book Your Free AI Architecture Strategy Call.
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              We'll audit your current manual processes, design a custom RAG vector database concept, and outline a zero-risk deployment plan.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={onContactClick}
                className="group inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider shadow-xl shadow-brand-red/25 transition-all hover:scale-105"
              >
                <span>Book AI Strategy Call</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
