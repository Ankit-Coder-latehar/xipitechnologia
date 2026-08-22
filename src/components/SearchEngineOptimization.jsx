import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, ArrowRight, ArrowLeft, ArrowUpRight, Cpu, 
  FileText, Globe, Link2, MapPin, Settings, Check, X, Sparkles, ChevronLeft, ChevronRight
} from 'lucide-react';

const seoHeroSlides = [
  {
    id: 1,
    title: 'Google SERP #1 Rankings',
    tag: 'ORGANIC VISIBILITY',
    badge: 'Google Rank #1',
    metric: '+340% Traffic',
    desc: 'Targeting high-intent commercial keywords with technical & on-page precision.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'AI Search & LLM Discovery',
    tag: 'AI OVERVIEWS & CHATGPT',
    badge: 'AI Cited ✓',
    metric: '94% Entity Match',
    desc: 'Structured content and entity modeling for ChatGPT, Perplexity & Google AI.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Technical Core Web Vitals',
    tag: '100% HEALTH SCORE',
    badge: '0.8s LCP Speed',
    metric: 'Zero Errors',
    desc: 'Lightning-fast crawlability, indexation fixes, and rich schema implementation.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Local Google Maps Domination',
    tag: 'CHANDIGARH & TRICITY',
    badge: 'Top 3 Map Pack',
    metric: '5x Local Calls',
    desc: 'Hyper-local keyword targeting, GMB optimization & verified citations.',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop'
  }
];

const statsData = [
  { value: '10+', label: 'Businesses Ranked', detail: 'Improved search visibility across competitive keywords' },
  { value: '3X', label: 'Average Traffic Growth', detail: 'Increase in organic traffic through data-driven SEO' },
  { value: '6 Mo', label: 'Typical Growth Period', detail: 'Building sustainable rankings through consistent optimization' },
  { value: '40+', label: 'Ranking Signals', detail: 'Technical, content, authority and search optimization factors' }
];

const servicesBreakdown = [
  {
    num: '01',
    title: 'AI Search Optimization',
    tag: '01 / AI SEARCH',
    color: '#38BDF8',
    icon: Cpu,
    desc: 'Optimize your website and content to improve visibility across AI-powered search experiences such as Google AI Overviews, ChatGPT, and Perplexity.',
    items: [
      'Google AI Overviews optimization',
      'ChatGPT & Perplexity visibility',
      'Entity optimization & knowledge graph signals',
      'AI-friendly content structure',
      'Structured content for AI extraction'
    ]
  },
  {
    num: '02',
    title: 'Technical SEO',
    tag: '02 / TECHNICAL FOUNDATION',
    color: '#0EA5E9',
    icon: Settings,
    desc: 'We audit and improve the technical foundation of your website so search engines can crawl, understand, and index your pages efficiently.',
    items: [
      'Site speed & Core Web Vitals',
      'Crawlability & indexation',
      'Canonical & duplicate content issues',
      'Technical error & redirect resolution',
      'Structured data & schema implementation'
    ]
  },
  {
    num: '03',
    title: 'On-Page SEO',
    tag: '03 / ON-PAGE OPTIMIZATION',
    color: '#10B981',
    icon: FileText,
    desc: 'We optimize your pages, content, headings, metadata, and internal links to improve relevance and help search engines understand your website better.',
    items: [
      'Title tags & meta descriptions',
      'Heading hierarchy & content optimization',
      'Keyword mapping and target-page optimization',
      'Strategic internal linking',
      'Search intent & semantic optimization'
    ]
  },
  {
    num: '04',
    title: 'Content & Blog Strategy',
    tag: '04 / CONTENT STRATEGY',
    color: '#8B5CF6',
    icon: TrendingUp,
    desc: "Create useful, search-focused content that answers your audience's questions, builds topical authority, and supports long-term organic growth.",
    items: [
      'Keyword & topic research',
      'Content planning & editorial strategy',
      'Pillar pages & cluster content',
      'Search-intent-driven content',
      'Content calendar & editorial management'
    ]
  },
  {
    num: '05',
    title: 'Link Building & Backlinks',
    tag: '05 / AUTHORITY BUILDING',
    color: '#F97316',
    icon: Link2,
    desc: "Build your website's authority through relevant, quality backlinks that strengthen trust and support sustainable search visibility.",
    items: [
      'Relevant authority-site outreach',
      'Digital PR & media placements',
      'Guest post strategy & execution',
      'Quality backlink acquisition',
      'HARO / journalist outreach',
      'Anchor text strategy & authority management'
    ]
  },
  {
    num: '06',
    title: 'Google Business & Local SEO',
    tag: '06 / LOCAL SEARCH',
    color: '#EC4899',
    icon: MapPin,
    desc: 'Improve your visibility in local search and Google Maps so customers in your target area can find and contact your business.',
    items: [
      'Google Business Profile optimization',
      'Local citation building',
      'Local keyword targeting',
      'Location-specific content',
      'NAP consistency & local audits',
      'Review strategy & reputation management'
    ],
    locationFocus: 'Chandigarh • Mohali • Panchkula • Zirakpur • Tricity'
  },
  {
    num: '07',
    title: 'Sitemaps, Robots & Site Setup',
    tag: '07 / TECHNICAL CONTROL',
    color: '#84CC16',
    icon: Globe,
    desc: 'Ensure search engines can efficiently discover and access your important pages with a properly configured technical SEO setup.',
    items: [
      'XML sitemap optimization',
      'Robots.txt configuration',
      'Canonical tag audits',
      '301 redirect mapping',
      'Indexation & crawl control',
      'Search Console configuration'
    ]
  }
];

const timelineSteps = [
  {
    week: 'WEEK 1',
    title: 'Audit & Strategy',
    color: '#0EA5E9',
    tasks: [
      'Full technical SEO audit',
      'Competitor & keyword research',
      'Content & backlink audit',
      'Monthly SEO strategy',
      'Search-intent mapping'
    ]
  },
  {
    week: 'WEEK 2',
    title: 'Technical Fixes',
    color: '#10B981',
    tasks: [
      'Implement priority technical fixes',
      'Schema markup updates',
      'Site speed & Core Web Vitals optimization',
      'Indexation improvements',
      'Internal linking improvements'
    ]
  },
  {
    week: 'WEEK 3',
    title: 'Content & Links',
    color: '#8B5CF6',
    tasks: [
      'Publish optimized content',
      'On-page optimization',
      'Develop supporting content',
      'Link outreach campaigns',
      'Google Business Profile & local optimization'
    ]
  },
  {
    week: 'WEEK 4',
    title: 'Reporting & Planning',
    color: '#F97316',
    tasks: [
      'Keyword ranking report',
      'Organic traffic analysis',
      'Traffic & conversion report',
      'Link-building report',
      'Strategy & next-month action plan'
    ]
  }
];

export default function SearchEngineOptimization({ onContactClick }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide rotation
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % seoHeroSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentSlide = seoHeroSlides[activeSlide];

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans select-none overflow-x-hidden pt-20">
      
      {/* Background Decorative Radial Lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-sky-500/15 via-blue-600/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-20 border-b border-white/10 overflow-hidden">
        
        {/* Background Big Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10">
          <span className="text-[16vw] font-black leading-none text-transparent border-text tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}>
            SEO
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
            
            {/* Left Column: Exact SEO Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sky-400 text-xs font-black tracking-[0.4em] uppercase">
                  SEARCH ENGINE OPTIMIZATION
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-sky-500/10 border border-sky-500/30 text-sky-400">
                  <Cpu className="h-3 w-3" /> + AI SEO
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-black text-white tracking-tight leading-[0.95]">
                RANK HIGHER <br />
                <span className="text-sky-400">ON GOOGLE.</span> <br />
                <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-sky-400">
                  GET FOUND BY AI.
                </span>
              </h1>

              <div className="space-y-3 max-w-2xl pt-1">
                <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
                  Traditional SEO foundations combined with AI search optimization to help your business rank on Google and get discovered across AI-powered search.
                </p>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
                  Whether you're a local business, growing brand, or e-commerce company, our SEO strategies are designed to increase organic visibility, attract qualified traffic, and generate sustainable business growth.
                </p>
                <p className="text-sky-400 text-xs sm:text-sm font-semibold tracking-wide uppercase pt-1">
                  SEO Services in Chandigarh &amp; Tricity
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-1">
                {['Google Rankings', 'Technical SEO', 'Local SEO', 'AI SEO', 'E-commerce SEO'].map((pill, pIdx) => (
                  <span key={pIdx} className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-500/10 border border-sky-500/20 text-sky-400">
                    {pill}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={onContactClick}
                  className="group relative inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-xl shadow-brand-red/25 transition-all hover:scale-105"
                >
                  <span>START YOUR SEO PROJECT</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onContactClick}
                  className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-extrabold rounded-full text-sm uppercase tracking-wider hover:border-sky-400/50 hover:bg-white/5 transition-all"
                >
                  <span>GET FREE SEO AUDIT</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>

            {/* Right Column: SEO Image Slider in Small Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-4 relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Main Active Visual Card */}
              <div className="relative rounded-3xl bg-[#0C0D12] border border-white/15 p-4 sm:p-5 shadow-2xl overflow-hidden group">
                {/* Decorative neon top glow */}
                <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-80" />

                {/* Image Container with Smooth Animation */}
                <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden bg-black/60">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide.id}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <img
                        src={currentSlide.image}
                        alt={currentSlide.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay for readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D12] via-black/40 to-transparent" />
                    </motion.div>
                  </AnimatePresence>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/70 backdrop-blur-md border border-sky-400/40 text-sky-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                      {currentSlide.tag}
                    </span>

                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-500/20 backdrop-blur-md border border-sky-500/30 text-white">
                      {currentSlide.badge}
                    </span>
                  </div>

                  {/* Bottom Metric Callout inside image */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-sky-400 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-sky-400/30">
                      {currentSlide.metric}
                    </span>
                    <div className="flex items-center gap-1">
                      {seoHeroSlides.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => setActiveSlide(dotIdx)}
                          className={`h-1.5 rounded-full transition-all ${
                            dotIdx === activeSlide ? 'w-5 bg-sky-400' : 'w-1.5 bg-white/30'
                          }`}
                          aria-label={`Go to slide ${dotIdx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Title & Info */}
                <div className="pt-4 px-1 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                      {currentSlide.title}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setActiveSlide((prev) => (prev === 0 ? seoHeroSlides.length - 1 : prev - 1))}
                        className="h-7 w-7 rounded-full bg-white/5 hover:bg-sky-500/20 border border-white/10 hover:border-sky-400/50 flex items-center justify-center text-white transition-colors"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setActiveSlide((prev) => (prev + 1) % seoHeroSlides.length)}
                        className="h-7 w-7 rounded-full bg-white/5 hover:bg-sky-500/20 border border-white/10 hover:border-sky-400/50 flex items-center justify-center text-white transition-colors"
                        aria-label="Next slide"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {currentSlide.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Small Thumbnail Cards Slider */}
              <div className="grid grid-cols-4 gap-2.5">
                {seoHeroSlides.map((slide, sIdx) => {
                  const isActive = sIdx === activeSlide;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => setActiveSlide(sIdx)}
                      className={`group/mini relative rounded-2xl p-2 text-left transition-all duration-300 overflow-hidden border flex flex-col justify-between h-24 ${
                        isActive
                          ? 'bg-sky-950/40 border-sky-400/80 shadow-lg shadow-sky-500/10 -translate-y-0.5'
                          : 'bg-[#0A0A0E] border-white/10 hover:border-white/25 opacity-70 hover:opacity-100'
                      }`}
                    >
                      {/* Mini Thumbnail Image with overlay */}
                      <div className="relative h-10 w-full rounded-lg overflow-hidden mb-1.5 bg-black/40">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover group-hover/mini:scale-110 transition-transform duration-300"
                        />
                        {isActive && (
                          <div className="absolute inset-0 bg-sky-500/20 border border-sky-400/40 rounded-lg pointer-events-none" />
                        )}
                      </div>

                      <div className="flex items-center justify-between w-full">
                        <span className={`text-[10px] font-black tracking-tight leading-tight line-clamp-1 ${
                          isActive ? 'text-sky-300' : 'text-zinc-400 group-hover/mini:text-white'
                        }`}>
                          {slide.title.split(' ')[0]} {slide.title.split(' ')[1]}
                        </span>
                        <span className="text-[9px] font-mono text-zinc-500">
                          0{slide.id}
                        </span>
                      </div>

                      {/* Active indicator bar */}
                      {isActive && (
                        <motion.div
                          layoutId="activeBar"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-sky-400"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. RESULTS / STATS */}
      <section className="relative bg-[#0D0D0F] border-b border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
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

      {/* 3. FULL SEO SERVICE BREAKDOWN */}
      <section className="py-28 bg-[#0D0D0F] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
          
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-sky-400">
              FULL SEO SERVICE BREAKDOWN
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              WHAT WE <br />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-sky-400">
                DO.
              </span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl font-normal pt-2">
              We cover every layer of SEO—from technical foundations and content to local search, authority building, and AI search optimization—to improve visibility, attract qualified traffic, and support sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesBreakdown.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-[#09090D] rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl" style={{ backgroundColor: s.color }} />

                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="h-10 w-10 rounded-xl flex items-center justify-center font-bold" style={{ backgroundColor: `${s.color}20`, color: s.color }}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-black tracking-[0.3em] uppercase" style={{ color: s.color }}>
                        {s.num}
                      </span>
                    </div>

                    <span className="text-[10px] font-black uppercase tracking-wider block mb-2" style={{ color: s.color }}>
                      {s.tag}
                    </span>

                    <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight">
                      {s.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                      {s.desc}
                    </p>
                  </div>

                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2.5">
                      Includes:
                    </div>
                    <ul className="space-y-2.5 pt-2 border-t border-white/5">
                      {s.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2.5 text-xs font-medium text-zinc-300">
                          <span className="h-4 w-4 rounded-full flex items-center justify-center text-[10px] font-black shrink-0" style={{ backgroundColor: `${s.color}25`, color: s.color }}>
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {s.locationFocus && (
                      <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-sky-400 font-semibold">
                        Location Focus: {s.locationFocus}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. 1. MONTHLY SEO PLAN */}
      <section className="py-28 bg-[#050507] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
          
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-sky-400">
              HOW IT WORKS MONTH-TO-MONTH
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              THE MONTHLY <br />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-sky-400">
                SEO PLAN.
              </span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal pt-2">
              SEO is a long-term growth strategy. Every month, we analyze performance, fix opportunities, improve content, and build stronger search visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineSteps.map((step, idx) => (
              <motion.div
                key={step.week}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#0D0D0F] p-7 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundColor: step.color }} />

                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4" style={{ backgroundColor: `${step.color}20`, color: step.color }}>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: step.color }} />
                    {step.week}
                  </span>

                  <h3 className="text-xl font-extrabold text-white mb-4">
                    {step.title}
                  </h3>

                  <ul className="space-y-2">
                    {step.tasks.map((task, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                        <span className="h-1.5 w-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: step.color }} />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#0D0D0F] p-6 rounded-2xl border border-white/10 text-center space-y-1">
            <div className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-1">Bottom Line</div>
            <p className="text-xs sm:text-sm text-zinc-300">
              Every month builds on the last. <br className="sm:hidden" />
              <strong className="text-white font-bold"> Rankings compound. Traffic compounds. Revenue compounds.</strong>
            </p>
          </div>

        </div>
      </section>

      {/* 5. 2. SEO HAS CHANGED */}
      <section className="py-28 bg-[#0D0D0F] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
          
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-sky-400">
              THE 2026 SEO PLAYBOOK
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              SEO HAS <br />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-sky-400">
                CHANGED.
              </span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal pt-2">
              Search is no longer limited to traditional Google results. Your business needs to be visible across search engines, AI-powered answers, local search, and other discovery platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#050507] p-8 rounded-3xl border border-red-500/20 space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-red-400">
                OLD TRADITIONAL SEO
              </span>
              <h4 className="text-xl font-bold text-white">Keyword Stuffing & Old Tactics</h4>
              <ul className="space-y-3 text-xs text-zinc-400">
                <li className="flex items-center gap-2 text-zinc-400">
                  <X className="h-4 w-4 text-red-400 shrink-0" /> Targeting individual keywords in isolation
                </li>
                <li className="flex items-center gap-2 text-zinc-400">
                  <X className="h-4 w-4 text-red-400 shrink-0" /> Focusing only on Google Search rankings
                </li>
                <li className="flex items-center gap-2 text-zinc-400">
                  <X className="h-4 w-4 text-red-400 shrink-0" /> Ignoring AI-powered search experiences
                </li>
                <li className="flex items-center gap-2 text-zinc-400">
                  <X className="h-4 w-4 text-red-400 shrink-0" /> Slow manual technical checks
                </li>
                <li className="flex items-center gap-2 text-zinc-400">
                  <X className="h-4 w-4 text-red-400 shrink-0" /> Creating content primarily for search engines
                </li>
              </ul>
            </div>

            <div className="bg-[#050507] p-8 rounded-3xl border border-sky-500/30 space-y-4 shadow-xl">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-sky-400">
                MODERN SEO
              </span>
              <h4 className="text-xl font-bold text-white">Google + AI + Local Search</h4>
              <ul className="space-y-3 text-xs text-zinc-300">
                <li className="flex items-center gap-2 text-white">
                  <Check className="h-4 w-4 text-sky-400 shrink-0" /> Build topical authority & semantic relevance
                </li>
                <li className="flex items-center gap-2 text-white">
                  <Check className="h-4 w-4 text-sky-400 shrink-0" /> Optimize for Google Search & AI discovery
                </li>
                <li className="flex items-center gap-2 text-white">
                  <Check className="h-4 w-4 text-sky-400 shrink-0" /> Improve visibility across AI search platforms
                </li>
                <li className="flex items-center gap-2 text-white">
                  <Check className="h-4 w-4 text-sky-400 shrink-0" /> Use structured data and entity optimization
                </li>
                <li className="flex items-center gap-2 text-white">
                  <Check className="h-4 w-4 text-sky-400 shrink-0" /> Create helpful content around search intent
                </li>
                <li className="flex items-center gap-2 text-white">
                  <Check className="h-4 w-4 text-sky-400 shrink-0" /> Combine technical SEO, content, authority & local optimization
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#050507] p-6 rounded-2xl border border-white/10 text-center space-y-1">
            <div className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-1">Bottom Message</div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Modern SEO isn't just about ranking pages. <br className="hidden sm:inline" />
              <strong className="text-white font-bold">It's about making your business discoverable wherever your customers search.</strong>
            </p>
          </div>

        </div>
      </section>

      {/* 6. 3. FINAL SEO CTA */}
      <section className="py-24 bg-[#050507] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border border-zinc-800 text-center space-y-6 relative overflow-hidden shadow-2xl">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-400">
              READY TO RANK ON GOOGLE & GET FOUND BY AI?
            </span>

            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Get Your Free SEO & <br className="hidden sm:inline" /> AI Search Audit.
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              We'll review your technical SEO, keyword targeting, content, search visibility, and AI search opportunities to identify where your website can grow.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={onContactClick}
                className="group inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-xl shadow-brand-red/25 transition-all hover:scale-105"
              >
                <span>BOOK SEO AUDIT</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs font-semibold text-zinc-400 tracking-wider">
              SEO • Technical SEO • Local SEO • AI Search Optimization
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
