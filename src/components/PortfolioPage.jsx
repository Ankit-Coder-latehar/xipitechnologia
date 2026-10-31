import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, ExternalLink, ArrowRight, Filter, Search, CheckCircle2,
  Trophy, TrendingUp, Layers, Zap, Award, X, ShieldCheck, ArrowUpRight,
  Code, Star, Building2, Eye, Check
} from 'lucide-react';

const stats = [
  { label: 'Completed Projects', value: '65+' },
  { label: 'Average Client ROI', value: '4.8x' },
  { label: 'Client Retention Rate', value: '99.8%' },
  { label: 'Global Industry Awards', value: '14' }
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-automation', label: 'AI & Automation' },
  { id: 'web-engineering', label: 'Web & App Dev' },
  { id: 'ecommerce', label: 'E-Commerce Growth' },
  { id: 'branding', label: 'Branding & Design' },
  { id: 'performance-ads', label: 'Meta & Search Ads' }
];

const projectsData = [
  {
    id: 'autoscale-ai',
    category: 'ai-automation',
    categoryName: 'AI & Automation Engine',
    client: 'Nexus SaaS Global',
    title: 'AutoScale AI Agent OS: Multi-Agent Prospecting & Lead Automation Engine',
    tagline: 'Autonomous AI lead generation system scaling B2B outbound conversions by 420%.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    color: '#F8FAFC',
    badge: 'Flagship AI Project',
    featured: true,
    metrics: [
      { label: 'Outbound Lift', value: '+420%' },
      { label: 'Monthly Leads', value: '12,500+' },
      { label: 'Ops Cost Saved', value: '$380k/yr' }
    ],
    tags: ['AI Agents', 'RAG Vector DB', 'Python', 'Outbound Automation', 'LangChain'],
    challenge: 'Nexus SaaS faced high customer acquisition costs and slow manual SDR outreach, limiting pipeline growth across North America and Europe.',
    solution: 'Designed and deployed an autonomous multi-agent AI system that scrapes intent data, synthesizes hyper-personalized emails, and conducts multi-channel follow-ups.',
    results: [
      'Automated 85% of top-of-funnel SDR tasks',
      'Increased qualified demo bookings from 120 to 520 monthly',
      'Achieved 99.4% email deliverability with dynamic domain warmup'
    ],
    testimonial: {
      quote: 'Xipitechnologia engineered an AI agent engine that transformed our sales org. It feels like having 20 top-performing SDRs running 24/7.',
      author: 'Elena Rostova',
      role: 'VP of Growth, Nexus SaaS Global'
    }
  },
  {
    id: 'luxeliving-d2c',
    category: 'ecommerce',
    categoryName: 'E-Commerce Growth & Headless',
    client: 'LuxeLiving International',
    title: 'LuxeLiving Headless Shopify Plus Storefront & High-ROAS Acquisition Funnel',
    tagline: 'High-speed headless e-commerce store generating $14.5M annual D2C revenue.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200',
    color: '#FFF7F7',
    badge: 'Best E-Commerce 2025',
    featured: true,
    metrics: [
      { label: 'Annual Revenue', value: '$14.5M' },
      { label: 'PageSpeed Score', value: '100/100' },
      { label: 'Cart Conversion', value: '+48%' }
    ],
    tags: ['Shopify Plus', 'Next.js 15', 'Headless Commerce', 'Meta Ads', 'Tailwind CSS'],
    challenge: 'LuxeLiving had slow mobile load times (4.8s) on legacy theme templates, resulting in high bounce rates and cart abandonments during peak ad campaigns.',
    solution: 'Re-built the entire store as a ultra-fast Next.js headless storefront backed by Shopify Storefront API, paired with custom 3D furniture customization tools.',
    results: [
      'Reduced average mobile page load time from 4.8s to 0.4s',
      'Boosted mobile checkout conversion rate by 48%',
      'Scaled monthly ad spend profitably from $30k to $180k with 5.2x ROAS'
    ],
    testimonial: {
      quote: 'Our new headless store is blisteringly fast. Our revenue literally doubled in the first quarter post-launch.',
      author: 'Marcus Thorne',
      role: 'Founder & CEO, LuxeLiving'
    }
  },
  {
    id: 'finflow-bank',
    category: 'web-engineering',
    categoryName: 'Web Architecture & Fintech',
    client: 'FinFlow Global Bank',
    title: 'FinFlow Neo-Banking Platform: High-Security Web Portal & Onboarding System',
    tagline: 'Next-gen fintech portal processing 450k+ user signups with sub-second page speed.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    color: '#F0F9FF',
    badge: 'Awwwards Winner',
    featured: false,
    metrics: [
      { label: 'User Signups', value: '450k+' },
      { label: 'Series B Raised', value: '$42M' },
      { label: 'Onboarding Time', value: '-65%' }
    ],
    tags: ['React', 'Next.js', 'Fintech Security', 'TypeScript', 'GraphQL'],
    challenge: 'FinFlow needed a futuristic, bank-grade web portal to support their Series B expansion and reduce friction during mandatory KYC user onboarding.',
    solution: 'Architected a modular Next.js application with bank-level encryption, real-time FX currency rates, interactive loan calculators, and instant KYC validation.',
    results: [
      'Cut signup drop-off rate by 65%',
      'Secured Awwwards Site of the Day honors',
      'Powered customer onboarding that backed a successful $42M Series B round'
    ],
    testimonial: {
      quote: 'The UX craftsmanship and security implementation exceeded all regulatory standards. Truly world-class agency partners.',
      author: 'Marcus Vance',
      role: 'Chief Technology Officer, FinFlow'
    }
  },
  {
    id: 'cyberpulse-brand',
    category: 'branding',
    categoryName: 'Branding & Visual Identity',
    client: 'CyberPulse Security',
    title: 'CyberPulse Security: Complete Rebrand, 3D Graphics & Enterprise Identity System',
    tagline: 'Futuristic brand identity & visual design system for an enterprise cybersecurity firm.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    color: '#FAF5FF',
    badge: 'Brand Excellence',
    featured: false,
    metrics: [
      { label: 'Brand Valuation', value: '2.5x' },
      { label: 'Enterprise Deals', value: '+140%' },
      { label: 'Design Tokens', value: '250+' }
    ],
    tags: ['Brand Strategy', '3D Graphics', 'Design System', 'UI/UX Guidelines'],
    challenge: 'CyberPulse looked generic compared to legacy cyber security giants, making it tough to win multi-million dollar enterprise defense contracts.',
    solution: 'Crafted an aggressive, sleek brand system featuring custom 3D web animations, dark-mode visual hierarchy, typography design tokens, and pitch assets.',
    results: [
      'Closed 14 new Fortune 500 enterprise security contracts',
      'Increased market brand valuation by 2.5x within 6 months',
      'Established a unified cross-platform design system used across 4 global offices'
    ],
    testimonial: {
      quote: 'Xipitechnologia gave us an identity that immediately commands authority in boardrooms. We stand out everywhere.',
      author: 'Sarah Jenkins',
      role: 'CMO, CyberPulse Security'
    }
  },
  {
    id: 'omniscale-ads',
    category: 'performance-ads',
    categoryName: 'Meta & Search Ads Loop',
    client: 'OmniScale Brands',
    title: 'OmniScale Performance Engine: 5.6x ROAS across Meta & Google Ads Campaigns',
    tagline: 'Data-driven paid customer acquisition scaling monthly spend past $220k.',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f311?auto=format&fit=crop&q=80&w=1200',
    color: '#ECFDF5',
    badge: 'Performance Award',
    featured: false,
    metrics: [
      { label: 'Blended ROAS', value: '5.6x' },
      { label: 'Monthly Spend', value: '$220k' },
      { label: 'CAC Reduction', value: '-42%' }
    ],
    tags: ['Meta Ads', 'Google PPC', 'Conversion Funnels', 'Creative Testing', 'Triple Whale'],
    challenge: 'OmniScale suffered from rising Meta ad CAC and creative fatigue, stalling monthly growth at $50k revenue.',
    solution: 'Engineered an aggressive creative testing matrix producing 20+ ad angles weekly, backed by first-party server-side tracking (CAPI) and high-converting landing pages.',
    results: [
      'Scaled monthly ad spend from $30k to $220k profitably',
      'Reduced customer acquisition cost by 42%',
      'Maintained consistent 5.6x blended ROAS across 4 quarters'
    ],
    testimonial: {
      quote: 'They treat our ad spend like their own capital. The ROI and creative quality are unmatched in performance marketing.',
      author: 'Julian Mercer',
      role: 'Managing Partner, OmniScale'
    }
  },
  {
    id: 'healthpulse-ai',
    category: 'ai-automation',
    categoryName: 'AI Medical Portal',
    client: 'HealthPulse Systems',
    title: 'HealthPulse AI Diagnostics: Autonomous Patient Triage & Vision Processing Portal',
    tagline: 'HIPAA-compliant AI diagnostic assistant processing 120,000+ patient consultations.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
    color: '#F0FDFA',
    badge: 'AI Health Tech',
    featured: false,
    metrics: [
      { label: 'Accuracy Rate', value: '99.4%' },
      { label: 'Patients Served', value: '120k+' },
      { label: 'Wait Time Cut', value: '-75%' }
    ],
    tags: ['Computer Vision', 'HIPAA AI', 'Python', 'React Web App', 'FastAPI'],
    challenge: 'Hospitals faced critical ER triage bottlenecks with average wait times exceeding 3 hours for initial document and symptom processing.',
    solution: 'Built an AI-assisted triage portal using multimodal vision models that analyze incoming scans and medical histories in under 15 seconds.',
    results: [
      'Reduced patient intake wait times by 75%',
      'Processed 120,000+ triage cases with 99.4% physician agreement score',
      'Achieved full HIPAA and SOC-2 Type II regulatory compliance'
    ],
    testimonial: {
      quote: 'An astonishing technical achievement. The system handles complex intake workflows effortlessly while keeping patient data strictly secure.',
      author: 'Dr. Aris Thorne',
      role: 'Chief Medical Officer, HealthPulse'
    }
  }
];

export default function PortfolioPage({ onContactClick, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects based on tab & search query
  const filteredProjects = projectsData.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredSpotlight = projectsData.find((p) => p.featured) || projectsData[0];

  return (
    <div className="min-h-screen bg-white pt-24 pb-0 text-black">
      {/* 1. HERO SECTION */}
      <section className="relative border-b border-brand-border bg-gradient-to-b from-brand-gray/40 to-white py-16 sm:py-24 select-none">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-black shadow-xs"
            >
              <Sparkles className="h-3.5 w-3.5 text-brand-red animate-pulse" />
              <span>Selected Portfolio & Flagship Works</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-black leading-[1.08]"
            >
              Architecting Digital Products <br />
              <span className="font-serif font-normal italic text-brand-red">that dominate markets.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-black/70 font-normal leading-relaxed max-w-2xl"
            >
              Explore our curated portfolio of AI agent engines, high-speed web platforms, D2C e-commerce ecosystems, and high-ROAS performance acquisition loops.
            </motion.p>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-brand-border"
          >
            {stats.map((s, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight font-display">
                  {s.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-black/50">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH CONTROLS */}
      <section className="border-b border-brand-border bg-white py-4 relative z-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-black text-white shadow-sm'
                    : 'border border-brand-border bg-white text-black/70 hover:border-black hover:text-black'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40" />
            <input
              type="text"
              placeholder="Search projects or stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-brand-border bg-brand-gray/50 pl-10 pr-4 py-2 text-xs font-semibold text-black placeholder:text-black/40 focus:border-black focus:bg-white focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-black/40 hover:text-black"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

        </div>
      </section>

      {/* 3. FEATURED SPOTLIGHT SHOWCASE */}
      {activeCategory === 'all' && !searchQuery && (
        <section className="py-16 bg-white border-b border-brand-border">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mb-6 flex items-center gap-2 select-none">
              <Star className="h-4 w-4 text-brand-red fill-brand-red" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                Featured Flagship Spotlight
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-brand-border bg-brand-gray/30 p-6 sm:p-10 hover:border-black/30 transition-all duration-300">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 border border-brand-red/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-red">
                  {featuredSpotlight.categoryName}
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight leading-snug">
                  {featuredSpotlight.title}
                </h2>

                <p className="text-sm sm:text-base text-black/70 leading-relaxed">
                  {featuredSpotlight.tagline}
                </p>

                <div className="grid grid-cols-3 gap-4 pt-2 border-t border-brand-border/60">
                  {featuredSpotlight.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-xl sm:text-2xl font-extrabold text-black">{m.value}</div>
                      <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-black/50">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredSpotlight.tags.map((t) => (
                    <span key={t} className="rounded-md bg-white border border-brand-border px-2.5 py-1 text-[11px] font-bold text-black/80">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => setSelectedProject(featuredSpotlight)}
                    className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-red transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    Explore Full Case Study
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden rounded-2xl border border-brand-border group cursor-pointer" onClick={() => setSelectedProject(featuredSpotlight)}>
                <img
                  src={featuredSpotlight.image}
                  alt={featuredSpotlight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="rounded-full bg-white text-black px-5 py-2.5 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2">
                    <Eye className="h-4 w-4" /> Quick View
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. MAIN PROJECTS GRID */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">
              All Showcase Projects ({filteredProjects.length})
            </h3>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center space-y-4 rounded-2xl border border-dashed border-brand-border">
              <p className="text-base text-black/60">No projects found matching your search criteria.</p>
              <button
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="rounded-full bg-black px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-red transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col justify-between rounded-3xl border border-brand-border bg-white hover:border-black/40 transition-all duration-300 hover:shadow-xl overflow-hidden"
                >
                  <div>
                    {/* Project Image */}
                    <div
                      className="relative aspect-[16/10] overflow-hidden bg-brand-gray cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black border border-brand-border">
                          {project.client}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="rounded-full bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                          <Eye className="h-3.5 w-3.5" /> View Case Study
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div className="text-[11px] font-bold uppercase tracking-widest text-brand-red">
                        {project.categoryName}
                      </div>

                      <h4
                        onClick={() => setSelectedProject(project)}
                        className="text-lg font-extrabold text-black tracking-tight hover:text-brand-red transition-colors cursor-pointer line-clamp-2"
                      >
                        {project.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-black/60 leading-relaxed line-clamp-2">
                        {project.tagline}
                      </p>

                      {/* Key Metric Pill */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-brand-border/60">
                        {project.metrics.slice(0, 2).map((m, idx) => (
                          <div key={idx} className="rounded-lg bg-brand-gray/80 px-2.5 py-1 text-[11px] font-bold text-black flex items-center gap-1">
                            <span className="text-brand-red">{m.value}</span>
                            <span className="text-black/50 font-normal">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-brand-border/40">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black hover:text-brand-red transition-colors cursor-pointer"
                    >
                      Case Details
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={onContactClick}
                      className="text-[11px] font-semibold text-black/50 hover:text-black underline"
                    >
                      Discuss Similar
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 5. PROJECT DETAIL MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-10 shadow-2xl border border-brand-border"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-6 top-6 rounded-full border border-brand-border bg-white p-2 text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Content */}
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-brand-red/10 border border-brand-red/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-red">
                      {selectedProject.categoryName}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-black/50">
                      Client: {selectedProject.client}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight">
                    {selectedProject.title}
                  </h2>

                  <p className="text-base text-black/70 leading-relaxed font-normal">
                    {selectedProject.tagline}
                  </p>
                </div>

                {/* Hero Image */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-brand-border">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Metrics Highlight Grid */}
                <div className="grid grid-cols-3 gap-4 rounded-2xl bg-brand-gray/60 p-6 border border-brand-border">
                  {selectedProject.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-2xl sm:text-3xl font-extrabold text-black">{m.value}</div>
                      <div className="text-xs font-bold uppercase tracking-wider text-black/50">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-3 rounded-2xl border border-brand-border p-6 bg-white">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-brand-red flex items-center gap-2">
                      <Zap className="h-4 w-4" /> The Challenge
                    </h4>
                    <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div className="space-y-3 rounded-2xl border border-brand-border p-6 bg-white">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-black flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Our Solution
                    </h4>
                    <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Results achieved */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-black">
                    Key Outcomes & Impact
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.results.map((res, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-black/80 font-medium">
                        <Check className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                {selectedProject.testimonial && (
                  <div className="rounded-2xl bg-black text-white p-6 sm:p-8 space-y-4 shadow-lg">
                    <p className="text-sm sm:text-base font-serif italic text-white/90 leading-relaxed">
                      "{selectedProject.testimonial.quote}"
                    </p>
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-red">
                      {selectedProject.testimonial.author} — <span className="text-white/60 font-normal">{selectedProject.testimonial.role}</span>
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-black/50">Tech Stack & Frameworks</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t) => (
                      <span key={t} className="rounded-full bg-brand-gray border border-brand-border px-3 py-1 text-xs font-bold text-black">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal CTA Action */}
                <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      if (onContactClick) onContactClick();
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-red transition-all cursor-pointer shadow-md"
                  >
                    Discuss A Similar Project
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-xs font-bold uppercase tracking-wider text-black/50 hover:text-black"
                  >
                    Close Window
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="py-20 bg-black text-white text-center border-t border-brand-border select-none">
        <div className="mx-auto max-w-4xl px-6 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
            Ready to Build Your Flagship Project?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Let's create something extraordinary together.
          </h2>
          <p className="text-base text-white/70 max-w-xl mx-auto font-normal">
            Whether you need autonomous AI agents, high-speed web platforms, or high-ROAS marketing engines, our team is ready to scale your vision.
          </p>
          <div className="pt-4 flex justify-center">
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-wider text-black hover:bg-brand-red hover:text-white transition-all duration-300 shadow-xl cursor-pointer active:scale-95"
            >
              <span>Book a Free Strategy Call</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
