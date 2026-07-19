import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, ShieldCheck, Zap, ArrowRight, ArrowLeft, ArrowUpRight, Sparkles, 
  CheckCircle2, Star, Layers, Cpu, CreditCard, ChevronDown, Check, X,
  Globe, Code, Server, TrendingUp, RefreshCw, BarChart2, Heart, Award, Lock, ExternalLink
} from 'lucide-react';

const capabilities = [
  { num: '01', title: 'WooCommerce Platinum', desc: 'Custom enterprise themes, plugin architecture & high-scale database optimization.' },
  { num: '02', title: 'Shopify Plus Enterprise', desc: 'Custom Liquid & Headless Storefronts, Script Editor checkout, and B2B expansion.' },
  { num: '03', title: 'Webflow Enterprise', desc: 'Ultra-fast visual storefronts paired with headless commerce backends.' },
  { num: '04', title: 'Stripe Subscriptions', desc: 'Complex billing logic, recurring memberships, multi-currency & tax compliance.' },
  { num: '05', title: 'Conversion Rate UI/UX', desc: 'Mobile-first product pages, cart slide-outs & frictionless 1-click checkouts.' },
  { num: '06', title: 'Custom Marketplace Architecture', desc: 'Multi-vendor portals, ERP/CRM sync, Amazon MCF & real-time inventory.' }
];

const partners = [
  { name: 'Amazon Partner', badge: 'Professional Partner' },
  { name: 'Stripe Enterprise', badge: 'Enterprise Partner' },
  { name: 'Webflow Premium', badge: 'Premium Partner' },
  { name: 'Shopify Plus Agency', badge: 'Official Partner Agency' },
  { name: 'WooCommerce Platinum', badge: 'Platinum Partner' }
];

const stats = [
  { value: '$1B+', label: 'Gross Merchandise Value (GMV)', sub: 'Processed across client stores' },
  { value: '170%+', label: 'Avg Conversion Uplift', sub: 'Post-launch CRO performance' },
  { value: '1,500+', label: 'Ecommerce Projects', sub: 'Completed worldwide since 2012' },
  { value: '99.9%', label: 'Uptime & Security', sub: 'PCI-DSS Level 1 compliance' }
];

const caseStudies = [
  {
    id: '01',
    title: 'D2C Luxury Apparel & Fashion Platform',
    platform: 'Shopify Plus Enterprise',
    metrics: '+210% Conversion Lift · 1.1s Page Load · 4.6x ROAS',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    tags: ['Shopify Plus', 'Conversion UX', 'Global Checkout']
  },
  {
    id: '02',
    title: 'B2B Global Industrial Equipment Marketplace',
    platform: 'WooCommerce Platinum + Custom ERP Sync',
    metrics: '$45M Annual Volume · Real-Time Inventory · Custom B2B Tier Bidding',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    tags: ['WooCommerce', 'ERP Integration', 'B2B Portal']
  },
  {
    id: '03',
    title: 'Subscription & Digital Membership Store',
    platform: 'Stripe Payments + Webflow Headless',
    metrics: '85,000 Active Members · 98.4% Renewal Rate · Automated Tax Compliance',
    image: 'https://images.unsplash.com/photo-1556742049-0a675659e366?q=80&w=1200&auto=format&fit=crop',
    tags: ['Stripe Subscriptions', 'Headless Commerce', 'Membership']
  }
];

const ecommerceFeatures = [
  {
    num: '01',
    title: 'Custom Storefront Architecture',
    color: '#38BDF8',
    icon: Code,
    desc: 'Bespoke themes built from scratch with zero bloated code. Lightning-fast load times under 1.2s that maximize SEO rankings and instant conversion.'
  },
  {
    num: '02',
    title: 'Checkout & Payment Gateway Optimization',
    color: '#F59E0B',
    icon: CreditCard,
    desc: 'Frictionless 1-click checkout, Apple Pay, Google Pay, Buy-Now-Pay-Later (Klarna/Afterpay), and multi-currency localized payment gateways.'
  },
  {
    num: '03',
    title: 'ERP, CRM & Fulfillment Integrations',
    color: '#10B981',
    icon: Server,
    desc: 'Real-time two-way synchronization with NetSuite, SAP, Salesforce, Klaviyo, Amazon Multi-Channel Fulfillment (MCF), and logistics software.'
  },
  {
    num: '04',
    title: 'Conversion Rate Optimization (CRO)',
    color: '#EC4899',
    icon: TrendingUp,
    desc: 'A/B testing on product description pages, cart slide-outs, upsell recommendations, and exit-intent hooks that drive 170%+ average conversion lift.'
  },
  {
    num: '05',
    title: 'Security, ADA & Global Compliance',
    color: '#8B5CF6',
    icon: ShieldCheck,
    desc: 'PCI-DSS Level 1 security standards, WCAG 2.1 AA accessibility compliance, GDPR/CCPA privacy frameworks, and automated SSL encryption.'
  },
  {
    num: '06',
    title: 'Omnichannel Marketplace Listing',
    color: '#F97316',
    icon: Globe,
    desc: 'Expand your reach to Amazon, Walmart Marketplace, Flipkart, and eBay with centralized order routing and unified inventory management.'
  }
];

const roadmapSteps = [
  { step: 'Step 01', title: 'Strategy & Architecture Mapping', desc: 'We audit your catalog, target audience, conversion friction, and technical stack to design a high-converting storefront blueprint.' },
  { step: 'Step 02', title: 'Conversion-First UI/UX Design', desc: 'Wireframes and high-fidelity prototypes crafted for mobile ergonomics, visual hierarchy, and frictionless path to purchase.' },
  { step: 'Step 03', title: 'Full-Stack Development & API Sync', desc: 'Clean pixel-perfect code deployment across Shopify, WooCommerce, or Webflow, integrating ERPs, payment gateways, and analytics.' },
  { step: 'Step 04', title: 'QA Testing, Launch & Scaling', desc: 'Rigorous cross-device quality assurance, load testing under extreme traffic spikes, seamless DNS cutover, and post-launch CRO.' }
];

export default function EcommerceMarketing({ onContactClick }) {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
    interests: ['Shopify Plus', 'Conversion UX'],
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

  const handleInterestToggle = (item) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(item)
        ? prev.interests.filter(i => i !== item)
        : [...prev.interests, item]
    }));
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
        interests: ['Shopify Plus', 'Conversion UX'],
        budget: 'from $25,000 to $50,000'
      });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans select-none overflow-x-hidden pt-20">
      
      {/* Background Lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-amber-500/10 via-brand-red/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* 1. HERO SECTION (NEVER SETTLE EXACT LAYOUT) */}
      <section className="relative pt-24 pb-20 border-b border-white/10 overflow-hidden">
        
        {/* Big Background Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10">
          <span className="text-[14vw] font-black leading-none text-transparent border-text tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}>
            ECOMMERCE
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Main Hero Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 text-amber-400 px-4 py-1.5 rounded-full text-xs font-black tracking-[0.3em] uppercase">
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                WE BUILD HIGH-PERFORMING ECOMMERCE STORES
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] uppercase">
                Fully custom ecommerce <br />
                <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-brand-red normal-case">
                  Development & Growth.
                </span>
              </h1>

              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl font-normal pt-2">
                Xipitechnolia® builds custom e-commerce stores designed for high conversion and scale across WooCommerce, Shopify Plus, Webflow Enterprise, and Stripe payment systems for B2B, B2C, D2C, and subscription models.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={onContactClick}
                  className="group relative inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider shadow-xl shadow-brand-red/25 transition-all hover:scale-105"
                >
                  <span>Start a Development Project</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onContactClick}
                  className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-extrabold rounded-full text-xs uppercase tracking-wider hover:border-amber-400/50 hover:bg-white/5 transition-all"
                >
                  <span>Have a question? →</span>
                </button>
              </div>
            </motion.div>

            {/* Right Column: Capabilities Listing (Never Settle signature side menu) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 bg-[#0D0D0F] p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 shadow-2xl"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400 block mb-2">
                OUR E-COMMERCE CAPABILITIES
              </span>

              <div className="divide-y divide-white/10">
                {capabilities.map((cap) => (
                  <div
                    key={cap.num}
                    className="py-3.5 group flex items-start justify-between cursor-pointer hover:pl-2 transition-all duration-300"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-amber-400">{cap.num}</span>
                        <h4 className="text-sm font-extrabold text-white group-hover:text-amber-300 transition-colors">
                          {cap.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-zinc-400 pl-7 font-normal">
                        {cap.desc}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 2. CERTIFIED PARTNER BADGES BANNER */}
      <section className="bg-[#0A0A0E] py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-3">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 block text-center">
            PROFESSIONALLY PARTNERED WITH INDUSTRY LEADERS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            {partners.map((p, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-black/60 px-4 py-2 rounded-xl border border-white/10">
                <Award className="h-4 w-4 text-amber-400" />
                <div className="text-left">
                  <span className="text-xs font-bold text-white block leading-tight">{p.name}</span>
                  <span className="text-[9px] text-zinc-500 font-mono block">{p.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE METRICS BANNER */}
      <section className="relative bg-[#0D0D0F] border-b border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-amber-400/40 transition-all text-center group"
            >
              <div className="text-2xl sm:text-4xl font-black text-amber-400 font-mono group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs font-extrabold text-white mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[10px] text-zinc-500 font-medium mt-0.5">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED E-COMMERCE CASE STUDIES SLIDER */}
      <section className="py-28 bg-[#050507] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-amber-400">
                PROVEN RESULTS
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                FEATURED <br />
                <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-amber-400">
                  STORE BUILDS.
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveCaseIdx(prev => prev === 0 ? caseStudies.length - 1 : prev - 1)}
                className="h-12 w-12 rounded-full border border-white/20 bg-zinc-900 text-white flex items-center justify-center hover:bg-amber-400 hover:text-black transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <span className="text-xs font-mono font-bold text-amber-400">
                0{activeCaseIdx + 1} / 0{caseStudies.length}
              </span>
              <button
                onClick={() => setActiveCaseIdx(prev => prev === caseStudies.length - 1 ? 0 : prev + 1)}
                className="h-12 w-12 rounded-full border border-white/20 bg-zinc-900 text-white flex items-center justify-center hover:bg-amber-400 hover:text-black transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Case Study Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0D0D0F] p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl">
            <div className="lg:col-span-7 relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
              <img
                src={caseStudies[activeCaseIdx].image}
                alt={caseStudies[activeCaseIdx].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-amber-400/20 text-amber-300 border border-amber-400/30">
                {caseStudies[activeCaseIdx].platform}
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                {caseStudies[activeCaseIdx].title}
              </h3>

              <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block mb-1">Impact & Growth Metrics</span>
                <p className="text-xs sm:text-sm font-mono font-bold text-emerald-400">
                  {caseStudies[activeCaseIdx].metrics}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {caseStudies[activeCaseIdx].tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={onContactClick}
                className="group inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all"
              >
                <span>View Full Architecture</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. 6 E-COMMERCE CAPABILITIES GRID */}
      <section className="py-28 bg-[#0D0D0F] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-amber-400">
              CORE CAPABILITIES
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              EVERYTHING YOU NEED TO <br />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-brand-red">
                CONVERT & SCALE.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecommerceFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-[#050507] p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl" style={{ backgroundColor: feat.color }} />

                  <div>
                    <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${feat.color}20`, color: feat.color }}>
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-xl font-extrabold text-white mb-3">
                      {feat.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. 4-STEP E-COMMERCE ROADMAP */}
      <section className="py-28 bg-[#050507] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-amber-400">
              DEVELOPMENT BLUEPRINT
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              OUR 4-STEP <br />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-amber-400">
                ECOMMERCE PROCESS.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#0D0D0F] p-7 rounded-3xl border border-white/10 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-amber-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400 block mb-3">
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

      {/* 7. INTERACTIVE PROJECT CONFIGURATOR FORM */}
      <section id="quote" className="py-24 bg-[#050507] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          
          <div className="p-8 sm:p-14 rounded-3xl bg-[#0D0D0F] border border-white/10 space-y-8 shadow-2xl">
            
            <div className="text-center space-y-3">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">
                START YOUR PROJECT
              </span>
              <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Configure Your E-Commerce Build.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
                Tell us about your product catalog, platform requirements, and budget to get a custom development proposal.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Proposal Request Received!</h4>
                <p className="text-xs text-zinc-300">
                  Thank you, <strong className="text-white">{formData.name}</strong>. An e-commerce solutions architect will review your project and email you at <strong className="text-white">{formData.email}</strong> within 12 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Your Name*</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Vance"
                      className="w-full bg-black/60 border border-white/10 focus:border-amber-400 rounded-xl px-4 py-3 text-xs text-white outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Your Email*</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@brand.com"
                      className="w-full bg-black/60 border border-white/10 focus:border-amber-400 rounded-xl px-4 py-3 text-xs text-white outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Project Details</label>
                  <textarea
                    rows={3}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Tell us about your current store, SKUs, monthly sales, or desired features..."
                    className="w-full bg-black/60 border border-white/10 focus:border-amber-400 rounded-xl px-4 py-3 text-xs text-white outline-none resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">I am interested in...</span>
                  <div className="flex flex-wrap gap-2">
                    {['Shopify Plus', 'WooCommerce', 'Webflow Enterprise', 'Stripe Subscriptions', 'Conversion UX', 'ERP Sync'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleInterestToggle(item)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                          formData.interests.includes(item)
                            ? 'bg-amber-400 text-black border-amber-400'
                            : 'bg-black/40 text-zinc-400 border-white/10 hover:border-white/30'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 relative">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">Project Budget Range</span>
                  <button
                    type="button"
                    onClick={() => setBudgetDropdownOpen(!budgetDropdownOpen)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 flex justify-between items-center text-xs font-bold text-white"
                  >
                    <span>{formData.budget}</span>
                    <ChevronDown className={`h-4 w-4 text-zinc-400 transition-transform ${budgetDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {budgetDropdownOpen && (
                    <div className="absolute left-0 right-0 z-20 mt-1 bg-zinc-900 border border-white/10 rounded-xl shadow-xl overflow-hidden py-1">
                      {budgetOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, budget: opt });
                            setBudgetDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-xs font-bold hover:bg-white/5 ${
                            formData.budget === opt ? 'text-amber-400' : 'text-zinc-300'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-extrabold py-4 rounded-full text-xs uppercase tracking-wider transition-all shadow-xl shadow-brand-red/25"
                >
                  Request E-Commerce Proposal
                </button>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
