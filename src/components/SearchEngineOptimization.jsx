import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Video, Users, CheckCircle2, ArrowRight, Sparkles, 
  Play, Share2, Award, ShieldCheck, ChevronDown, ChevronUp, MessageSquare, 
  ExternalLink, Zap, BarChart3, Filter, X, ArrowUpRight, Search, Target, Cpu, LineChart,
  FileText, Globe, Link2, MapPin, Settings, Check
} from 'lucide-react';

const statsData = [
  { value: '10+', label: 'Clients Ranked', detail: 'Top 3 positions on Google' },
  { value: '3x', label: 'Avg Traffic Increase', detail: 'Organic traffic growth in 6 mos' },
  { value: '6 mo', label: 'Avg to Page 1', detail: 'For high-intent commercial keywords' },
  { value: '40+', label: 'Ranking Signals', detail: 'Technical, semantic & AI signals' }
];

const servicesBreakdown = [
  {
    num: '01',
    title: 'AI Search Optimization',
    tag: 'THE NEW PAGE 1 IS BEING CITED BY AI',
    color: '#38BDF8',
    icon: Cpu,
    desc: 'In 2026, ranking on Google is only part of the equation. ChatGPT, Perplexity, and Google AI Overviews are answering questions and recommending businesses directly. We optimize your content to be cited by LLMs.',
    items: [
      'Google SGE / AI Overviews optimization',
      'ChatGPT & Perplexity citation strategy',
      'Entity optimization & knowledge graph modeling',
      'llms.txt implementation & structured AI files',
      'Structured content for AI answer extraction'
    ]
  },
  {
    num: '02',
    title: 'Technical SEO',
    tag: 'THE FOUNDATION EVERYTHING ELSE SITS ON',
    color: '#0EA5E9',
    icon: Settings,
    desc: 'We audit and fix the technical issues that silently kill rankings — slow load times, poor Core Web Vitals, crawl errors, indexation issues, canonical tags, hreflang, and schema markup.',
    items: [
      'Site speed & Core Web Vitals (LCP, INP, CLS)',
      'Crawlability & indexation fixes',
      'Canonical tags & duplicate content resolution',
      'Hreflang for international & multi-language sites',
      'Structured data / schema markup implementation'
    ]
  },
  {
    num: '03',
    title: 'On-Page SEO',
    tag: 'EVERY PAGE OPTIMIZED TO RANK & CONVERT',
    color: '#10B981',
    icon: FileText,
    desc: 'On-page signals are the most direct ranking lever you control. We optimize title tags, meta descriptions, heading hierarchy, keyword mapping, internal linking structure, and content search intent.',
    items: [
      'Title tags & meta description optimization',
      'Heading hierarchy (H1–H3) structuring',
      'Keyword mapping per target landing page',
      'Strategic internal linking architecture',
      'Content optimization aligned with search intent'
    ]
  },
  {
    num: '04',
    title: 'Content & Blog Strategy',
    tag: 'TOPICAL AUTHORITY THAT COMPOUNDS OVER TIME',
    color: '#8B5CF6',
    icon: TrendingUp,
    desc: 'Google rewards sites that demonstrate expertise across entire topics. We build pillar + cluster content strategies, publish monthly blog content targeting high-intent keywords, and map every piece to your revenue goals.',
    items: [
      'Monthly blog publishing (fully managed for you)',
      'Topical authority & keyword clustering',
      'Pillar page + cluster content model',
      'Search-intent aligned content briefs',
      'Content calendar & editorial management'
    ]
  },
  {
    num: '05',
    title: 'Link Building & Backlinks',
    tag: 'AUTHORITY SIGNALS GOOGLE CANNOT IGNORE',
    color: '#F97316',
    icon: Link2,
    desc: 'Backlinks remain one of the top 3 ranking factors. We run white-hat outreach campaigns, digital PR placements, guest posting on relevant publications, HARO journalist outreach, and anchor text strategy.',
    items: [
      'Outreach campaigns to niche-relevant authority sites',
      'Digital PR & media placements',
      'Guest post strategy & execution',
      'HARO / journalist source outreach',
      'Anchor text strategy & diversity management'
    ]
  },
  {
    num: '06',
    title: 'Google My Business & Local SEO',
    tag: 'OWN THE MAP PACK IN YOUR CITY',
    color: '#EC4899',
    icon: MapPin,
    desc: 'For businesses serving local markets, the Google Map Pack drives more calls than any other source. We optimize your GMB profile, build local citations across directories (Yelp, BBB), and enforce NAP consistency.',
    items: [
      'GMB profile optimization & weekly management',
      'Local citation building (Yelp, BBB, Apple Maps)',
      'Industry-specific directory submissions',
      'NAP (Name, Address, Phone) consistency audit',
      'Review strategy & reputation management'
    ]
  },
  {
    num: '07',
    title: 'Sitemaps, Robots & Setup',
    tag: 'MAKE SURE GOOGLE CAN FIND EVERYTHING',
    color: '#84CC16',
    icon: Globe,
    desc: 'Proper technical setup ensures search engines can crawl, understand, and index your site efficiently. We handle XML sitemaps, robots.txt configuration, canonical tag audits, 301 redirect mapping, and broken link repair.',
    items: [
      'XML sitemap creation & Search Console submission',
      'robots.txt configuration & directives',
      'Canonical tag audit & implementation',
      '301 redirect mapping & cleanup',
      'Broken link audit & instant repair'
    ]
  }
];

const timelineSteps = [
  {
    week: 'Week 1',
    title: 'Audit & Strategy',
    color: '#0EA5E9',
    tasks: [
      'Full technical SEO audit',
      'Competitor keyword gap analysis',
      'Content & backlink audit',
      'Monthly strategy document delivered'
    ]
  },
  {
    week: 'Week 2',
    title: 'Technical Fixes',
    color: '#10B981',
    tasks: [
      'Implement priority technical fixes',
      'Schema markup updates',
      'Site speed & Web Vitals optimizations',
      'Internal linking improvements'
    ]
  },
  {
    week: 'Week 3',
    title: 'Content & Links',
    color: '#8B5CF6',
    tasks: [
      'Blog content published',
      'On-page optimizations deployed',
      'Link outreach campaigns sent',
      'GMB updates & local citations'
    ]
  },
  {
    week: 'Week 4',
    title: 'Reporting & Planning',
    color: '#F97316',
    tasks: [
      'Keyword ranking report delivered',
      'Traffic & conversion report',
      'Links built this month (with DR data)',
      'Strategy call + next month plan'
    ]
  }
];

export default function SearchEngineOptimization({ onContactClick }) {
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans select-none overflow-x-hidden pt-20">
      
      {/* Background Decorative Radial Lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-sky-500/15 via-blue-600/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* 1. HERO SECTION (helloupdigital exact layout) */}
      <section className="relative pt-24 pb-20 border-b border-white/10 overflow-hidden">
        
        {/* Background Big Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10">
          <span className="text-[16vw] font-black leading-none text-transparent border-text tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}>
            SEO
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sky-400 text-xs font-black tracking-[0.4em] uppercase">
                SEARCH ENGINE OPTIMIZATION
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-sky-500/10 border border-sky-500/30 text-sky-400">
                <Cpu className="h-3 w-3" /> + AI SEO
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.93]">
              RANK ON <br />
              <span className="text-sky-400">GOOGLE.</span> <br />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-sky-400">
                GET CITED BY AI.
              </span>
            </h1>

            <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-xl font-normal pt-2">
              Traditional SEO foundations plus AI search optimization — so your brand ranks on Google and gets cited by ChatGPT, Perplexity, and Google's AI Overviews.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {['Google Rankings', 'ChatGPT Citations', 'Perplexity', 'AI Overviews (SGE)', 'llms.txt'].map((pill, pIdx) => (
                <span key={pIdx} className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-500/10 border border-sky-500/20 text-sky-400">
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <button
                onClick={onContactClick}
                className="group relative inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-xl shadow-brand-red/25 transition-all hover:scale-105"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-extrabold rounded-full text-sm uppercase tracking-wider hover:border-sky-400/50 hover:bg-white/5 transition-all"
              >
                <span>Free SEO & AI Audit</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. METRICS BANNER */}
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

      {/* 3. FULL SEO SERVICE BREAKDOWN (7 CARDS) */}
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

                  <ul className="space-y-2.5 pt-4 border-t border-white/5">
                    {s.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2.5 text-xs font-medium text-zinc-300">
                        <span className="h-4 w-4 rounded-full flex items-center justify-center text-[10px] font-black shrink-0" style={{ backgroundColor: `${s.color}25`, color: s.color }}>
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

      {/* 4. HOW IT WORKS MONTH-TO-MONTH (THE MONTHLY SEO PLAN) */}
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
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl font-normal pt-2">
              SEO is a long game — but that doesn't mean you should be in the dark. Here is exactly what happens every month when you partner with us.
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

          <div className="bg-[#0D0D0F] p-6 rounded-2xl border border-white/10 text-center">
            <p className="text-xs sm:text-sm text-zinc-400">
              Then we repeat — each month building on the last. <strong className="text-white font-bold">Rankings compound. Traffic compounds. Revenue compounds.</strong>
            </p>
          </div>

        </div>
      </section>

      {/* 5. THE 2026 PLAYBOOK (SEO HAS CHANGED) */}
      <section className="py-28 bg-[#0D0D0F] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
          
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-sky-400">
              THE 2026 PLAYBOOK
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              SEO HAS <br />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-sky-400">
                CHANGED.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#050507] p-8 rounded-3xl border border-red-500/20 space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-red-400">
                OLD TRADITIONAL SEO (OBSOLETE)
              </span>
              <h4 className="text-xl font-bold text-white">Keyword Stuffing & Standard 10 Links</h4>
              <ul className="space-y-3 text-xs text-zinc-400">
                <li className="flex items-center gap-2 text-zinc-400">
                  <X className="h-4 w-4 text-red-400 shrink-0" /> Target individual keywords in isolation
                </li>
                <li className="flex items-center gap-2 text-zinc-400">
                  <X className="h-4 w-4 text-red-400 shrink-0" /> Rely solely on Google Search Console clicks
                </li>
                <li className="flex items-center gap-2 text-zinc-400">
                  <X className="h-4 w-4 text-red-400 shrink-0" /> Ignore AI search engines (ChatGPT, Perplexity)
                </li>
                <li className="flex items-center gap-2 text-zinc-400">
                  <X className="h-4 w-4 text-red-400 shrink-0" /> Slow manual technical checkups
                </li>
              </ul>
            </div>

            <div className="bg-[#050507] p-8 rounded-3xl border border-sky-500/30 space-y-4 shadow-xl">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-sky-400">
                XIPITECHNOLIA 2026 AI SEO (DOMINANT)
              </span>
              <h4 className="text-xl font-bold text-white">Google Rank #1 + AI Citation Engine</h4>
              <ul className="space-y-3 text-xs text-zinc-300">
                <li className="flex items-center gap-2 text-white">
                  <Check className="h-4 w-4 text-sky-400 shrink-0" /> Topical authority & semantic content clusters
                </li>
                <li className="flex items-center gap-2 text-white">
                  <Check className="h-4 w-4 text-sky-400 shrink-0" /> ChatGPT & Perplexity direct LLM recommendation
                </li>
                <li className="flex items-center gap-2 text-white">
                  <Check className="h-4 w-4 text-sky-400 shrink-0" /> llms.txt & structured data for AI Overviews
                </li>
                <li className="flex items-center gap-2 text-white">
                  <Check className="h-4 w-4 text-sky-400 shrink-0" /> Real-time Core Web Vitals & technical health optimization
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 6. HIGH-CONVERTING CTA BANNER */}
      <section className="py-24 bg-[#050507] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border border-zinc-800 text-center space-y-6 relative overflow-hidden shadow-2xl">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-400">
              READY TO RANK ON GOOGLE & GET CITED BY AI?
            </span>

            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Get Your Free SEO & AI Search Audit.
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              We'll audit your current technical SEO, keyword rankings, and AI citation presence—completely free with zero obligation.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={onContactClick}
                className="group inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-xl shadow-brand-red/25 transition-all hover:scale-105"
              >
                <span>Book SEO Audit</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
