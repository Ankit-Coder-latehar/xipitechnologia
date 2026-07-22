import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy, TrendingUp, ArrowUpRight, Sparkles, Filter, Search,
  CheckCircle2, ArrowRight, ShieldCheck, Zap, Layers, Globe,
  BarChart3, Code, Award, ExternalLink, X, Play, Clock, Star,
  PhoneCall, Building2, Check, FileText, ChevronRight
} from 'lucide-react';

const statsData = [
  { value: '$45M+', label: 'Client Revenue Generated', detail: 'Tracked across e-commerce & SaaS client campaigns' },
  { value: '+340%', label: 'Average ROAS & Growth', detail: 'Organic traffic & paid media performance lift' },
  { value: '12', label: 'International Honors', detail: 'Awwwards, FWA, and CSS Design Awards accolades' },
  { value: '99.8%', label: 'Client Retention Rate', detail: 'Long-term enterprise growth partnerships' }
];

const categories = [
  { id: 'all', label: 'All Showcase' },
  { id: 'web-design', label: 'Web Design & Dev' },
  { id: 'ecommerce', label: 'E-Commerce Growth' },
  { id: 'ads', label: 'Meta & Google Ads' },
  { id: 'ai-automation', label: 'AI & Automation' },
  { id: 'branding', label: 'Branding & Identity' }
];

const featuredSpotlight = {
  id: 'finedge-tech',
  category: 'web-design',
  categoryLabel: 'WEB DESIGN & FINTECH ARCHITECTURE',
  client: 'FinEdge Technologies',
  title: 'Re-Architecting a Global Neo-Bank Experience & High-Speed Web Platform',
  award: 'Awwwards Site of the Day Winner',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
  metrics: [
    { label: 'Conversion Lift', value: '+380%' },
    { label: 'Series B Raised', value: '$42M' },
    { label: 'Page Load Speed', value: '0.3s' },
    { label: 'User Signups', value: '450k+' }
  ],
  shortDesc: 'A complete ground-up digital overhaul for FinEdge, creating a lightning-fast React/Next.js portal with bank-grade security, interactive calculator widgets, and seamless onboarding funnels.',
  challenge: 'FinEdge faced a 4.2-second mobile load time and a 62% bounce rate on their primary signup funnel, causing significant loss of qualified financial leads.',
  solution: 'Engineered a custom Next.js 15 headless web architecture integrated with real-time API endpoints, custom micro-interactions, and a streamlined 3-step KYC onboarding flow.',
  stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GraphQL', 'AWS CloudFront'],
  testimonial: {
    quote: 'Xipitechnolia delivered an award-winning web platform that completely unlocked our Series B fundraising. The speed and UX craftsmanship are unparalleled.',
    author: 'Marcus Vance',
    role: 'Chief Technology Officer, FinEdge'
  }
};

const caseStudiesData = [
  {
    id: 'aura-luxury',
    category: 'ecommerce',
    client: 'Aura Luxury Fragrances',
    title: 'Scaling D2C E-Commerce Brand to $25M Revenue with High-ROAS Meta Ads & Shopify Plus',
    award: 'E-Commerce Growth Excellence 2025',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    tags: ['E-Commerce', 'Meta Ads', 'Shopify Plus', 'CRO'],
    metrics: [
      { label: 'Blended ROAS', value: '5.4x' },
      { label: 'Annual Revenue', value: '$25M' },
      { label: 'AOV Increase', value: '+68%' }
    ],
    summary: 'Transformed an artisanal perfume label into an international e-commerce giant using dynamic product ads, retargeting funnels, and optimized checkout UX.',
    challenge: 'High customer acquisition costs (CAC) and stagnant average order value (AOV) limiting international expansion.',
    solution: 'Implemented Meta Pixel CAPI, constructed multi-tier bundle offers, and redesigned the mobile shopping cart with instant upsell flows.',
    stack: ['Shopify Plus', 'Meta Ads Manager', 'Triple Whale', 'Klaviyo', 'Hotjar'],
    testimonial: {
      quote: 'Our ROAS jumped from 1.8x to 5.4x in under 90 days. Xipitechnolia is the growth engine every modern D2C brand needs.',
      author: 'Sophia Chen',
      role: 'Founder & CMO, Aura Fragrances'
    }
  },
  {
    id: 'cognitive-cloud',
    category: 'ai-automation',
    client: 'Cognitive Cloud AI',
    title: 'Autonomous Enterprise Customer Support & RAG Knowledge Processing Engine',
    award: 'AI Innovation Award Finalist',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    tags: ['AI Agents', 'RAG Vector DB', 'Node.js', 'Python'],
    metrics: [
      { label: 'Ticket Automation', value: '88%' },
      { label: 'Annual Savings', value: '$3.2M' },
      { label: 'Response Time', value: '1.2s' }
    ],
    summary: 'Built an autonomous AI support engine querying 50,000+ enterprise docs in real-time, resolving 88% of incoming customer tickets without human intervention.',
    challenge: 'Overwhelmed support operations with 15,000+ weekly technical tickets leading to high churn.',
    solution: 'Deployed a custom LLM fine-tuned model connected to Pinecone Vector DB and automated Zendesk/Slack API webhooks.',
    stack: ['Python', 'Pinecone Vector DB', 'LangChain', 'Node.js', 'React'],
    testimonial: {
      quote: 'This AI support engine saved our team millions while dramatically increasing our CSAT scores. Extraordinary execution!',
      author: 'David Sterling',
      role: 'VP of Customer Success, Cognitive Cloud'
    }
  },
  {
    id: 'vogue-vision',
    category: 'branding',
    client: 'Vogue Vision Apparel',
    title: 'Headless E-Commerce & Luxury Brand Architecture Overhaul for Global Fashion House',
    award: 'FWA of the Day Winner',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    tags: ['Branding', 'Headless Web', 'WebGL', 'Framer Motion'],
    metrics: [
      { label: 'Organic Traffic', value: '+210%' },
      { label: 'Mobile Sales', value: '+145%' },
      { label: 'Page Load', value: '0.4s' }
    ],
    summary: 'Crafted an editorial-grade luxury visual identity paired with a high-performance headless React web storefront featuring smooth 3D product previews.',
    challenge: 'Outdated legacy storefront unable to showcase new seasonal runway collections dynamically.',
    solution: 'Designed a sleek black/gold design system with WebGL interactive 3D product modeling and instant page transitions.',
    stack: ['React', 'Three.js', 'Sanity CMS', 'Tailwind CSS', 'Vercel'],
    testimonial: {
      quote: 'Xipitechnolia understood our high-fashion aesthetic effortlessly and backed it up with blazing-fast web tech.',
      author: 'Camille Laurent',
      role: 'Creative Director, Vogue Vision'
    }
  },
  {
    id: 'pulsefit-health',
    category: 'ads',
    client: 'PulseFit Health Tech',
    title: 'Dominating Search & Social: Scaling Organic Search & Google Ads Lead Volume by 450%',
    award: 'Search Excellence Award 2025',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    tags: ['Google Ads', 'SEO', 'PPC', 'Content Funnels'],
    metrics: [
      { label: 'Lead Volume', value: '+450%' },
      { label: 'Monthly Visitors', value: '500k+' },
      { label: 'CPL Reduction', value: '-42%' }
    ],
    summary: 'Executed an integrated SEO search strategy alongside targeted Google Search & YouTube video ad campaigns to dominate organic and paid search results.',
    challenge: 'Stiff competition from industry incumbents resulting in soaring cost-per-lead (CPL) prices.',
    solution: 'Mapped high-intent long-tail keywords, fixed technical site crawl bottlenecks, and launched high-converting Google Performance Max campaigns.',
    stack: ['Google Ads', 'Ahrefs', 'SEMrush', 'Google Search Console', 'Looker Studio'],
    testimonial: {
      quote: 'We now dominate page 1 for all our target keywords. Our lead pipeline has never been stronger.',
      author: 'Dr. Evelyn Reed',
      role: 'Growth Lead, PulseFit'
    }
  },
  {
    id: 'logitrack-global',
    category: 'web-design',
    client: 'LogiTrack Global',
    title: 'Custom Enterprise Operations Portal & Real-Time Cargo Tracking Web Application',
    award: 'Enterprise Solution of the Year',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    tags: ['Web Application', 'Realtime WebSockets', 'React', 'Node.js'],
    metrics: [
      { label: 'Overhead Reduction', value: '-45%' },
      { label: 'System Uptime', value: '99.99%' },
      { label: 'Daily Tracking', value: '1.5M' }
    ],
    summary: 'Built a real-time web portal for global freight logistics, replacing manual spreadsheet tracking with automated telemetry maps and instant status notifications.',
    challenge: 'Manual communication delays across 40 global ports causing costly shipment compliance penalties.',
    solution: 'Designed an intuitive React dashboard with WebSocket telemetry, interactive map rendering, and automated SMS/Email compliance alerts.',
    stack: ['React', 'Node.js', 'WebSockets', 'Mapbox GL', 'PostgreSQL'],
    testimonial: {
      quote: 'LogiTrack transformed our operations. We eliminated 45% of manual operational friction overnight.',
      author: 'Robert Sterling',
      role: 'Chief Operating Officer, LogiTrack'
    }
  },
  {
    id: 'apex-crypto',
    category: 'ai-automation',
    client: 'Apex Digital Exchange',
    title: 'High-Security Trading Platform Redesign & Automated Onboarding Conversion Funnel',
    award: 'FinTech UX Award Winner',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800',
    tags: ['FinTech UX', 'React', 'Security', 'Conversion Optimization'],
    metrics: [
      { label: 'Monthly Volume', value: '$120M' },
      { label: 'UX Rating', value: '4.9/5' },
      { label: 'KYC Speed', value: '45 sec' }
    ],
    summary: 'Redesigned the entire web trading interface for Apex Exchange, introducing dark mode trading charts, friction-free identity verification, and multi-asset wallet management.',
    challenge: 'Complex interface discouraging non-technical traders and slowing down registration velocity.',
    solution: 'Created a modular dashboard with customizable widget layouts, interactive charting tools, and instant 1-click trading tools.',
    stack: ['React', 'TradingView API', 'Tailwind CSS', 'Node.js', 'Redis'],
    testimonial: {
      quote: 'The UX makeover resulted in a record $120M monthly volume. Xipitechnolia is unmatched in digital execution.',
      author: 'Elena Rostova',
      role: 'Head of Product, Apex Digital'
    }
  }
];

const awardsMarquee = [
  '🏆 AWWWARDS Site of the Day Winner',
  '⚡ FWA Of The Day Accolade',
  '🎨 CSS Design Awards Special Kudos',
  '🚀 Webby Awards Nominee for Best UX',
  '💎 Global Agency Excellence Award 2025'
];

export default function CaseStudies({ onContactClick }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isPitchModalOpen, setIsPitchModalOpen] = useState(false);
  const [pitchFormSubmitted, setPitchFormSubmitted] = useState(false);

  const [pitchData, setPitchData] = useState({
    name: '',
    company: '',
    email: '',
    service: 'Web Design & Development',
    budget: '$10k - $25k',
    message: ''
  });

  const filteredCaseStudies = caseStudiesData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handlePitchSubmit = (e) => {
    e.preventDefault();
    setPitchFormSubmitted(true);
    setTimeout(() => {
      setIsPitchModalOpen(false);
      setPitchFormSubmitted(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-black text-white select-none pt-20">
      
      {/* 1. AWARDS TICKER MARQUEE */}
      <div className="bg-white/5 border-b border-white/10 py-3 overflow-hidden">
        <div className="flex w-max animate-marquee space-x-12 text-xs font-bold uppercase tracking-widest text-brand-red">
          {awardsMarquee.concat(awardsMarquee).map((award, i) => (
            <span key={i} className="flex items-center gap-2">
              <Trophy className="h-3.5 w-3.5 text-amber-400" />
              <span>{award}</span>
            </span>
          ))}
        </div>
      </div>

      {/* 2. HERO KINETIC HEADER SECTION */}
      <section className="relative pt-16 pb-24 px-6 sm:px-8 lg:px-12 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-red/20 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-brand-red text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Sparkles className="h-4 w-4 text-brand-red animate-pulse" />
            <span>XIPITECHNOLIA FEATURED CASE STUDIES</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-5xl mx-auto"
          >
            Engineering Digital Dominance <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-red via-rose-400 to-amber-400 bg-clip-text text-transparent">
              for Industry Leaders.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            Explore real client transformations. From high-converting e-commerce redesigns to autonomous AI engines and multi-million dollar performance advertising.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10"
          >
            {statsData.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 transition-colors">
                <p className="text-3xl sm:text-4xl font-extrabold text-white bg-gradient-to-r from-white to-white/70 bg-clip-text">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-brand-red mt-1">{stat.label}</p>
                <p className="text-xs text-white/50 mt-1 font-light leading-tight">{stat.detail}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 3. FEATURED SPOTLIGHT HERO CASE STUDY */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">SPOTLIGHT SHOWCASE</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Award-Winning Featured Project</h2>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-bold">
            <Trophy className="h-3.5 w-3.5" />
            {featuredSpotlight.award}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="group relative rounded-3xl bg-neutral-900 border border-white/15 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Left Visual Image Showcase */}
          <div className="lg:col-span-7 relative h-72 lg:h-auto overflow-hidden">
            <img
              src={featuredSpotlight.image}
              alt={featuredSpotlight.client}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-bold text-white">
              {featuredSpotlight.categoryLabel}
            </div>
          </div>

          {/* Right Case Study Content */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-red">{featuredSpotlight.client}</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 leading-snug">
                {featuredSpotlight.title}
              </h3>
              <p className="text-sm text-white/70 mt-4 leading-relaxed font-normal">
                {featuredSpotlight.shortDesc}
              </p>

              {/* Metrics Grid */}
              <div className="mt-8 grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                {featuredSpotlight.metrics.map((m, idx) => (
                  <div key={idx} className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <span className="text-xs text-white/40 block">{m.label}</span>
                    <span className="text-xl font-extrabold text-brand-red">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {featuredSpotlight.stack.slice(0, 3).map((st, i) => (
                  <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-white/70 border border-white/10">
                    {st}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedCaseStudy(featuredSpotlight)}
                className="px-5 py-3 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-bold text-xs shadow-lg shadow-brand-red/30 transition-all flex items-center gap-1.5 shrink-0"
              >
                <span>Read Deep-Dive</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>
        </motion.div>
      </section>

      {/* 4. CASE STUDIES CATALOG GRID & FILTERS */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">CLIENT ARCHIVE</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">Explore All Client Successes</h2>
          </div>

          <div className="relative min-w-[280px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              type="text"
              placeholder="Search by client or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/15 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-red transition-colors"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study) => (
            <motion.div
              key={study.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="group rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/50 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Cover */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-[11px] font-bold text-white">
                    {study.client}
                  </span>
                </div>

                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-white group-hover:text-brand-red transition-colors duration-300 line-clamp-2">
                    {study.title}
                  </h3>

                  <p className="mt-3 text-xs text-white/70 leading-relaxed line-clamp-3">
                    {study.summary}
                  </p>

                  {/* Metrics */}
                  <div className="mt-6 grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
                    {study.metrics.map((m, idx) => (
                      <div key={idx} className="bg-white/5 p-2 rounded-lg text-center">
                        <span className="text-[10px] text-white/40 block">{m.label}</span>
                        <span className="text-sm font-extrabold text-brand-red">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {study.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-white/60 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/5 mt-4">
                <button
                  onClick={() => setSelectedCaseStudy(study)}
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-brand-red text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-white/10 group-hover:border-brand-red"
                >
                  <span>View Full Case Study</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-16 bg-white/5 rounded-3xl border border-white/10">
            <Search className="h-10 w-10 text-white/30 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No case studies match your query</h3>
            <p className="text-sm text-white/50 mt-1">Try resetting search filters.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-6 py-2.5 bg-brand-red text-white text-xs font-bold rounded-xl"
            >
              Reset Search
            </button>
          </div>
        )}

      </section>

      {/* 5. BOTTOM PITCH / CONSULTATION CTA */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-brand-red via-red-600 to-rose-800 p-10 sm:p-16 overflow-hidden text-center shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)] pointer-events-none" />
          
          <span className="inline-block text-xs font-bold uppercase tracking-widest bg-black/20 text-white px-4 py-1.5 rounded-full mb-4">
            LET'S BUILD YOUR SUCCESS STORY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
            Ready to Transform Your Digital Growth & Revenue?
          </h2>
          <p className="mt-4 text-white/90 text-sm sm:text-lg max-w-2xl mx-auto font-normal">
            Schedule a 1-on-1 strategy call with our agency leads. We audit your existing stack and outline a high-converting roadmap.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsPitchModalOpen(true)}
              className="w-full sm:w-auto bg-black hover:bg-black/80 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-xl"
            >
              Request Project Audit & Proposal &rarr;
            </button>
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-xl text-base transition-all"
            >
              Contact Strategy Team
            </button>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE CASE STUDY DETAIL MODAL */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-neutral-900 border border-white/20 rounded-3xl p-6 sm:p-10 text-white max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                FULL CLIENT CASE STUDY
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                {selectedCaseStudy.client}
              </h3>
              <p className="text-base text-white/80 mt-2 leading-relaxed">
                {selectedCaseStudy.title}
              </p>

              {/* Cover Banner Image */}
              <div className="mt-6 rounded-2xl overflow-hidden h-64 sm:h-80 relative">
                <img src={selectedCaseStudy.image} alt={selectedCaseStudy.client} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* Metrics Header Bar */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                {selectedCaseStudy.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <span className="text-xs text-white/40 block">{m.label}</span>
                    <span className="text-xl font-extrabold text-brand-red">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* The Challenge vs The Solution */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-500" />
                    The Challenge
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed font-normal">
                    {selectedCaseStudy.challenge}
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Our Solution & Architecture
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed font-normal">
                    {selectedCaseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Verified Client Testimonial */}
              {selectedCaseStudy.testimonial && (
                <div className="mt-8 p-6 rounded-2xl bg-brand-red/10 border border-brand-red/30">
                  <p className="text-sm text-white/90 italic leading-relaxed">
                    "{selectedCaseStudy.testimonial.quote}"
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{selectedCaseStudy.testimonial.author}</span>
                    <span className="text-[11px] text-brand-red font-semibold">{selectedCaseStudy.testimonial.role}</span>
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <span className="text-xs font-bold uppercase text-white/40 block mb-3">Technology & Strategy Stack</span>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.stack.map((st, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white">
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    setIsPitchModalOpen(true);
                  }}
                  className="flex-1 bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3.5 rounded-xl text-sm transition-all"
                >
                  Start Similar Project &rarr;
                </button>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 rounded-xl text-sm transition-all"
                >
                  Close Case Study
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 7. PROJECT PROPOSAL MODAL */}
      <AnimatePresence>
        {isPitchModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-xl bg-neutral-900 border border-brand-red/30 rounded-3xl p-6 sm:p-10 text-white shadow-2xl"
            >
              <button
                onClick={() => setIsPitchModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {pitchFormSubmitted ? (
                <div className="text-center py-10">
                  <div className="h-16 w-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Proposal Request Received!</h3>
                  <p className="text-sm text-white/70 mt-2 max-w-md mx-auto">
                    Thank you! Our senior partner strategist will review your project requirements and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                    WORK WITH US
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    Request Project Proposal
                  </h3>
                  <p className="text-xs text-white/60 mt-1">
                    Tell us about your brand goals and technical scope.
                  </p>

                  <form onSubmit={handlePitchSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-white/70 uppercase mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Connor"
                        value={pitchData.name}
                        onChange={e => setPitchData({ ...pitchData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-white/70 uppercase mb-1">Company / Brand</label>
                        <input
                          type="text"
                          required
                          placeholder="Acme Corp"
                          value={pitchData.company}
                          onChange={e => setPitchData({ ...pitchData, company: e.target.value })}
                          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-white/70 uppercase mb-1">Work Email</label>
                        <input
                          type="email"
                          required
                          placeholder="sarah@acme.com"
                          value={pitchData.email}
                          onChange={e => setPitchData({ ...pitchData, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-white/70 uppercase mb-1">Primary Capability</label>
                        <select
                          value={pitchData.service}
                          onChange={e => setPitchData({ ...pitchData, service: e.target.value })}
                          className="w-full bg-neutral-800 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                        >
                          <option value="Web Design & Development">Web Design & Dev</option>
                          <option value="E-Commerce Growth">E-Commerce Growth</option>
                          <option value="Meta & Google Ads">Meta & Google Ads</option>
                          <option value="AI & Automation">AI & Automation</option>
                          <option value="Branding & Identity">Branding & Identity</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-white/70 uppercase mb-1">Estimated Budget</label>
                        <select
                          value={pitchData.budget}
                          onChange={e => setPitchData({ ...pitchData, budget: e.target.value })}
                          className="w-full bg-neutral-800 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                        >
                          <option value="$10k - $25k">$10k - $25k</option>
                          <option value="$25k - $50k">$25k - $50k</option>
                          <option value="$50k+">$50k+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white/70 uppercase mb-1">Project Details</label>
                      <textarea
                        rows={3}
                        placeholder="Briefly describe your objectives or challenges..."
                        value={pitchData.message}
                        onChange={e => setPitchData({ ...pitchData, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 rounded-xl text-sm transition-all shadow-lg shadow-brand-red/30 mt-6"
                    >
                      Submit Proposal Request &rarr;
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
