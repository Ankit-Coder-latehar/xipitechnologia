import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Video, Users, CheckCircle2, ArrowRight, Sparkles, 
  Play, Share2, Award, ShieldCheck, ChevronDown, ChevronUp, MessageSquare, 
  ExternalLink, Zap, BarChart3, Filter, X, ArrowUpRight
} from 'lucide-react';

const statsData = [
  { value: '4K → 427K', label: '@dr.remina followers', detail: 'Organic creator growth' },
  { value: '1M+', label: 'Views — Quadratic AI', detail: 'TikTok & Reels viral reach' },
  { value: '0 → 11K', label: 'Pongbot Growth', detail: 'Niche community building' },
  { value: '$100K+', label: 'Revenue via Social', detail: 'Direct DM conversion funnels' }
];

const pillars = [
  {
    num: '01',
    title: 'Funnel Building',
    color: '#E32626',
    desc: 'We map every post to a specific funnel stage — awareness, engagement, or conversion. Content is engineered to move followers down the funnel into paying clients, not just rack up views.',
    items: [
      'Top-of-funnel viral hooks (first 2 seconds)',
      'Mid-funnel educational carousel breakdowns',
      'Bottom-funnel DM-to-sale scripts & keywords',
      'Story funnels with high-converting link-in-bio CTAs'
    ]
  },
  {
    num: '02',
    title: 'Viral Reels System',
    color: '#F472B6',
    desc: 'We analyze real-time algorithm trends on Instagram & TikTok weekly, engineering high-retention script structures, visual hooks, and audio pacing that trigger organic shares.',
    items: [
      'Hook-first scriptwriting & storyboarding',
      'Trending audio research & audio curation',
      'A/B tested thumbnail & title cover designs',
      'Native typography captions & sound design'
    ]
  },
  {
    num: '03',
    title: 'UGC Creation',
    color: '#00D4FF',
    desc: 'Authentic user-generated content consistently outperforms polished traditional ads. We produce and source UGC that feels raw, relatable, and converts cold traffic instantly.',
    items: [
      'Raw-style product demo video production',
      'Creator casting, vetting & brief management',
      'Unboxing & unscripted reaction videos',
      'Problem-solution testimonial format reels'
    ]
  },
  {
    num: '04',
    title: 'Influencer Collabs',
    color: '#FB923C',
    desc: 'We connect your brand with vetted creators who actually move the needle — from micro-influencers with high engagement to macro industry authorities.',
    items: [
      'Niche influencer discovery & audience audit',
      'Campaign briefing & contract negotiation',
      'Seeding, gifting & affiliate program management',
      'Co-authored Instagram Collab posts & co-branding'
    ]
  }
];

const faqs = [
  {
    q: 'How fast can we expect results from social media marketing?',
    a: 'While organic audience building compounds over 3-6 months, our viral hook scripts and UGC reel frameworks typically produce viral view spikes (100K+ views) within the first 30 days of consistent posting.'
  },
  {
    q: 'Do you handle the full process including video editing & scriptwriting?',
    a: 'Yes, 100%! We provide end-to-end management: content strategy, scriptwriting, shot list creation, professional video editing, captions, thumbnail design, posting schedule, and DM funnel automation.'
  },
  {
    q: 'Which platforms do you specialize in?',
    a: 'We specialize heavily in Instagram Reels, TikTok, YouTube Shorts, and Meta Paid Social. We cross-repurpose winning short-form visual content across all major channels for maximum ROI.'
  },
  {
    q: 'How do you track real business ROI and revenue from social posts?',
    a: 'We set up custom keyword DM automation triggers (e.g. comment "GROWTH" for link), trackable link-in-bio UTM parameters, and direct consultation booking funnels so every lead is tracked to the penny.'
  }
];

const drReminaReels = [
  { title: 'Aesthetic Medical Routine', views: '2.4M Views', tag: 'Viral Reel', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop' },
  { title: 'Behind the Scenes Clinic Day', views: '1.1M Views', tag: 'Story Funnel', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop' },
  { title: 'Forbes PR Feature Announcement', views: '890K Views', tag: 'Authority Drop', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop' }
];

const quadraticTikToks = [
  { title: 'ChatGPT vs Quadratic AI Demo', views: '450K Views', tag: 'UGC Demo', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
  { title: 'Data Analytics Trick 2026', views: '320K Views', tag: 'Tech Hook', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' },
  { title: 'Building SQL Queries in Seconds', views: '280K Views', tag: 'SaaS Viral', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop' }
];

export default function SocialMediaMarketing({ onContactClick }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans select-none overflow-x-hidden pt-20">
      
      {/* Background Decorative Radial Lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-brand-red/15 via-brand-red/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* 1. HERO SECTION (helloupdigital exact layout & typography) */}
      <section className="relative pt-24 pb-20 border-b border-white/10 overflow-hidden">
        
        {/* Background Big Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10">
          <span className="text-[14vw] font-black leading-none text-transparent border-text tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}>
            SOCIAL
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 text-brand-red px-4 py-1.5 rounded-full text-xs font-black tracking-[0.3em] uppercase">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              SOCIAL MEDIA MARKETING
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.93]">
              GROW YOUR <br />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-brand-red">
                BRAND ONLINE.
              </span>
            </h1>

            <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal pt-2">
              Viral reels, UGC, influencer collabs, and full-funnel Instagram strategy — built by an elite team that grew a creator from <strong className="text-white">4K to 427K followers</strong>.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onContactClick}
                className="group relative inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-xl shadow-brand-red/25 transition-all hover:scale-105"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-extrabold rounded-full text-sm uppercase tracking-wider hover:border-brand-red/50 hover:bg-white/5 transition-all"
              >
                <span>Free Social Audit</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. LIVE METRICS STATS BAR */}
      <section className="relative bg-[#0D0D0F] border-b border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-brand-red/40 transition-all text-center group"
            >
              <div className="text-2xl sm:text-4xl font-black text-brand-red font-mono group-hover:scale-105 transition-transform">
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

      {/* 3. THE SYSTEM · 4 PILLARS OF INSTAGRAM STRATEGY */}
      <section className="py-24 bg-[#FAF9F6] text-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 bg-black text-white px-3.5 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase">
              <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
              THE SYSTEM · 4 PILLARS
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08]">
              OUR INSTAGRAM <br />
              <span className="font-serif italic font-light text-brand-red">
                Strategy.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, idx) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 border border-zinc-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Accent Line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl" 
                  style={{ backgroundColor: p.color }} 
                />

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black tracking-[0.4em] uppercase" style={{ color: p.color }}>
                      {p.num}
                    </span>
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-zinc-100 text-black group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-black mb-3 tracking-tight">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6 font-normal">
                    {p.desc}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-zinc-100">
                  {p.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2.5 text-xs font-semibold text-zinc-700">
                      <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CASE STUDY 01: @dr.remina */}
      <section className="py-28 bg-[#0A0A0F] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
          
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-brand-red">
              CASE STUDY 01 / CREATOR GROWTH
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-5xl sm:text-7xl font-black text-white tracking-tight">
                  @dr.remina
                </h2>
                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
                  A medical aesthetic creator with 4K followers and no content system. We built a full Instagram growth engine — reels strategy, hook-first scriptwriting, posting cadence, and audience funnel — that turned her profile into a <strong className="text-white">$100K+ revenue channel</strong>.
                </p>

                {/* 3 Metric Pills */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="bg-[#111116] p-4 rounded-2xl border border-white/10 text-center">
                    <span className="text-xl sm:text-2xl font-black text-brand-red block font-mono">4K → 427K</span>
                    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Followers</span>
                  </div>
                  <div className="bg-[#111116] p-4 rounded-2xl border border-white/10 text-center">
                    <span className="text-xl sm:text-2xl font-black text-emerald-400 block font-mono">$100K+</span>
                    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Revenue</span>
                  </div>
                  <div className="bg-[#111116] p-4 rounded-2xl border border-white/10 text-center">
                    <span className="text-xl sm:text-2xl font-black text-blue-400 block font-mono">Forbes</span>
                    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">PR Feature</span>
                  </div>
                </div>
              </div>

              {/* What We Built Box */}
              <div className="lg:col-span-6 bg-[#111118] p-8 rounded-3xl border border-white/10 space-y-4">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-red">
                  WHAT WE BUILT
                </h4>
                <div className="space-y-3 text-xs sm:text-sm">
                  {[
                    'Grew from 4,000 to 427,000 organic followers in 18 months',
                    'Built full Instagram content funnel (reels, stories, highlights)',
                    'Converted followers into paying clients via DM automation',
                    'Secured Forbes PR placement for brand authority',
                    'Generated $100K+ in direct revenue from social'
                  ].map((line, lIdx) => (
                    <div key={lIdx} className="flex items-start gap-3 text-zinc-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Content Video Showcase Cards */}
          <div className="space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">
              CONTENT WE PRODUCED FOR @DR.REMINA
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {drReminaReels.map((reel, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveVideoModal(reel)}
                  className="group relative h-[380px] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 cursor-pointer shadow-xl"
                >
                  <img
                    src={reel.img}
                    alt={reel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-brand-red text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 fill-white ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 space-y-1">
                    <span className="bg-white/20 backdrop-blur-md text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-full">
                      {reel.tag} • {reel.views}
                    </span>
                    <h5 className="text-base font-extrabold text-white pt-1">
                      {reel.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. CASE STUDY 02: QUADRATIC AI */}
      <section className="py-28 bg-[#050507] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
          
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-cyan-400">
              CASE STUDY 02 / B2B TECH & SAAS
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-5xl sm:text-7xl font-black text-white tracking-tight">
                  QUADRATIC AI
                </h2>
                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
                  ChatGPT meets Tableau — a next-gen AI data platform. We built a full UGC content machine: 7 TikTok videos + 3 Instagram reels driving <strong className="text-white">1M+ views and 1,000+ signups</strong> in 90 days.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-3 gap-3">
                <div className="bg-[#0D0D0F] p-4 rounded-2xl border border-cyan-500/20 text-center">
                  <span className="text-2xl font-black text-cyan-400 block font-mono">1M+</span>
                  <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Views</span>
                </div>
                <div className="bg-[#0D0D0F] p-4 rounded-2xl border border-cyan-500/20 text-center">
                  <span className="text-2xl font-black text-emerald-400 block font-mono">1,000+</span>
                  <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Signups</span>
                </div>
                <div className="bg-[#0D0D0F] p-4 rounded-2xl border border-cyan-500/20 text-center">
                  <span className="text-2xl font-black text-purple-400 block font-mono">90 Days</span>
                  <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Speed</span>
                </div>
              </div>
            </div>
          </div>

          {/* TikTok UGC Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {quadraticTikToks.map((tt, idx) => (
              <div
                key={idx}
                onClick={() => setActiveVideoModal(tt)}
                className="group relative h-[340px] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 cursor-pointer shadow-xl"
              >
                <img
                  src={tt.img}
                  alt={tt.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="h-5 w-5 fill-black ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <span className="bg-cyan-500/20 text-cyan-300 text-[9px] font-black uppercase px-2.5 py-1 rounded-full border border-cyan-500/30">
                    {tt.tag} • {tt.views}
                  </span>
                  <h5 className="text-sm font-extrabold text-white pt-1">
                    {tt.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. FAQ ACCORDION */}
      <section className="py-24 bg-[#0A0A0F] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-brand-red">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Social Growth FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="bg-[#111116] rounded-2xl border border-white/10 p-6 cursor-pointer transition-all hover:border-white/20"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-base sm:text-lg font-bold text-white pr-4">
                      {faq.q}
                    </h4>
                    <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-white">
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </div>
                  </div>

                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal pt-4 border-t border-white/5 mt-4"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. HIGH-CONVERTING CTA BANNER */}
      <section className="py-24 bg-[#050507] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border border-zinc-800 text-center space-y-6 relative overflow-hidden shadow-2xl">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">
              READY TO GO VIRAL & SCALE REVENUE?
            </span>

            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Book Your Free 30-Min Social Media Audit.
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              We'll analyze your current Instagram profile, audit your reel hooks, and build a custom content roadmap.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={onContactClick}
                className="group inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-xl shadow-brand-red/25 transition-all hover:scale-105"
              >
                <span>Book Growth Audit</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* VIDEO PREVIEW MODAL */}
      <AnimatePresence>
        {activeVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideoModal(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-lg bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 p-6 space-y-4 text-center">
              <button
                onClick={() => setActiveVideoModal(null)}
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-zinc-800 text-white flex items-center justify-center hover:bg-brand-red transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative w-full h-[360px] rounded-2xl overflow-hidden">
                <img src={activeVideoModal.img} alt={activeVideoModal.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="bg-brand-red text-white text-xs font-bold px-4 py-2 rounded-full">
                    ▶ Playing {activeVideoModal.title}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">{activeVideoModal.title}</h4>
                <p className="text-xs text-zinc-400 mt-1">{activeVideoModal.views} • {activeVideoModal.tag}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
