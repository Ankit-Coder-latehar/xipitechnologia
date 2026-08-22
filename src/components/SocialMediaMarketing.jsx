import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Video, Users, CheckCircle2, ArrowRight, Sparkles, 
  Play, Share2, Award, ShieldCheck, ChevronDown, ChevronUp, MessageSquare, 
  ExternalLink, Zap, BarChart3, Filter, X, ArrowUpRight
} from 'lucide-react';

// Data Arrays
const statsData = [
  { value: '4+', label: 'CORE PLATFORMS', detail: 'Facebook • Instagram • LinkedIn • YouTube' },
  { value: '360°', label: 'SOCIAL MEDIA MANAGEMENT', detail: 'Strategy • Content • Publishing • Engagement' },
  { value: 'DATA-DRIVEN', label: 'MARKETING APPROACH', detail: 'Content backed by audience & performance insights' },
  { value: 'TRICITY', label: 'LOCAL MARKET FOCUS', detail: 'Chandigarh • Mohali • Zirakpur • Panchkula' }
];

const pillars = [
  {
    num: '01',
    title: 'SOCIAL MEDIA STRATEGY',
    color: '#E32626',
    desc: 'We start by understanding your business, audience, competitors, and objectives before building a customized social media marketing strategy.',
    items: [
      'Audience & competitor research',
      'Platform selection',
      'Content strategy',
      'Brand positioning',
      'Monthly content planning'
    ]
  },
  {
    num: '02',
    title: 'CONTENT CREATION',
    color: '#F472B6',
    desc: 'Create content that looks professional, communicates your message clearly, and gives your audience a reason to engage with your brand.',
    items: [
      'Social media posts',
      'Reels & short-form videos',
      'Stories & Carousels',
      'Promotional creatives',
      'Educational & informative content'
    ]
  },
  {
    num: '03',
    title: 'SOCIAL MEDIA MANAGEMENT',
    color: '#00D4FF',
    desc: 'Keep your social media profiles consistent, active, and aligned with your brand while our team manages the day-to-day execution.',
    items: [
      'Content scheduling',
      'Regular publishing',
      'Profile management',
      'Audience engagement',
      'Performance monitoring'
    ]
  },
  {
    num: '04',
    title: 'PAID SOCIAL MEDIA ADVERTISING',
    color: '#FB923C',
    desc: 'Turn social media attention into measurable business opportunities with targeted advertising campaigns.',
    items: [
      'Facebook Ads & Instagram Ads',
      'Lead Generation Campaigns',
      'Website Traffic Campaigns',
      'Retargeting Campaigns',
      'Conversion-focused campaigns'
    ]
  }
];

const approachCards = [
  { title: 'Creative That Connects', desc: 'Content designed around your audience, industry, brand identity, and communication goals.' },
  { title: 'Strategy Before Posting', desc: 'Every content plan starts with a clear objective instead of random posting.' },
  { title: 'Platform-Specific Content', desc: 'We adapt content for Instagram, Facebook, LinkedIn, YouTube, and other relevant platforms.' },
  { title: 'Data-Driven Decisions', desc: 'Performance insights help us understand what is working and where your strategy needs improvement.' },
  { title: 'Paid + Organic Growth', desc: 'Combine organic social media management with paid social media advertising for stronger reach and lead-generation opportunities.' },
  { title: 'Continuous Optimization', desc: 'We monitor engagement, reach, traffic, leads, and campaign performance to improve results over time.' }
];

const locationCards = [
  { city: 'Chandigarh', desc: 'Social media marketing for businesses looking to reach and engage customers across Chandigarh.' },
  { city: 'Mohali', desc: 'Build local visibility, generate leads, and connect with your target audience through social media.' },
  { city: 'Zirakpur', desc: 'Customized social media marketing strategies for local businesses targeting Zirakpur and nearby areas.' },
  { city: 'Panchkula', desc: 'Build brand awareness and generate customer engagement with targeted social media campaigns.' }
];

const servicesCards = [
  { num: '01', title: 'Strategy & Planning', desc: 'Customized social media strategies based on your business, audience, competitors, and goals.' },
  { num: '02', title: 'Content Creation', desc: 'Professional graphics, reels, videos, stories, carousels, and promotional content designed for your brand.' },
  { num: '03', title: 'Social Media Management', desc: 'Complete account management including scheduling, publishing, engagement, and content planning.' },
  { num: '04', title: 'Facebook Marketing', desc: 'Reach your target audience through strategic Facebook content and paid advertising campaigns.' },
  { num: '05', title: 'Instagram Marketing', desc: 'Build visibility and engagement through Instagram reels, posts, stories, campaigns, and audience-focused content.' },
  { num: '06', title: 'Paid Social Advertising', desc: 'Generate leads, website traffic, and conversions through targeted Facebook and Instagram advertising campaigns.' },
  { num: '07', title: 'Influencer Marketing', desc: 'Connect with relevant creators and influencers to increase brand awareness and reach new audiences.' },
  { num: '08', title: 'Analytics & Reporting', desc: 'Track reach, engagement, follower growth, traffic, leads, and campaign performance through regular reporting.' }
];

const industries = [
  'Healthcare', 'Education', 'Real Estate', 'E-commerce', 'Retail', 'Hospitality',
  'Finance', 'Technology', 'Manufacturing', 'Professional Services', 'Automotive', 'Local Businesses'
];

const benefitsCards = [
  { num: '01', title: 'Brand Visibility', desc: 'Put your business in front of the right audience and increase online visibility.' },
  { num: '02', title: 'Audience Engagement', desc: 'Build meaningful interactions and stronger relationships with your customers.' },
  { num: '03', title: 'Website Traffic', desc: 'Drive relevant users from social platforms to your website and landing pages.' },
  { num: '04', title: 'Quality Leads', desc: 'Use targeted content and paid campaigns to generate relevant enquiries.' },
  { num: '05', title: 'Brand Credibility', desc: 'Maintain a professional and consistent digital presence across your social channels.' },
  { num: '06', title: 'Business Growth', desc: 'Combine strategy, content, advertising, and optimization to support sustainable growth.' }
];

const faqs = [
  { q: 'What is social media marketing?', a: 'Social media marketing is the process of promoting your business through platforms such as Facebook, Instagram, LinkedIn, YouTube, and other social networks to increase visibility, engagement, website traffic, leads, and sales.' },
  { q: 'Why should I hire a social media marketing company?', a: 'A professional social media marketing company can develop your strategy, create content, manage your social profiles, run paid campaigns, engage with your audience, and track performance.' },
  { q: 'Which social media platforms does Xi Pi Technologia manage?', a: 'We manage platforms including Facebook, Instagram, LinkedIn, and YouTube, along with other relevant platforms based on your business and target audience.' },
  { q: 'Do you provide Facebook and Instagram marketing?', a: 'Yes. We provide Facebook and Instagram marketing services, including organic content, social media management, audience targeting, and paid advertising campaigns.' },
  { q: 'Do you provide social media marketing in Chandigarh?', a: 'Yes. Xi Pi Technologia provides social media marketing services for businesses targeting Chandigarh, Mohali, Zirakpur, Panchkula, and the wider Tricity region.' },
  { q: 'Can social media marketing help small businesses?', a: 'Yes. Social media can help small businesses increase brand awareness, reach potential customers, generate enquiries, and build stronger relationships with their audience.' },
  { q: 'Do you create social media content?', a: 'Yes. Our team creates graphics, reels, videos, stories, carousels, promotional posts, and informative content based on your brand and marketing strategy.' },
  { q: 'Do you provide paid social media advertising?', a: 'Yes. We manage paid campaigns on platforms such as Facebook and Instagram to help businesses increase reach, generate leads, drive website traffic, and improve conversions.' },
  { q: 'How long does social media marketing take to show results?', a: 'Initial improvements in reach and engagement can appear within weeks, while stronger results in leads, conversions, and brand growth generally require consistent marketing over several months.' },
  { q: 'Do you provide monthly social media reports?', a: 'Yes. We provide performance updates covering relevant metrics such as reach, engagement, follower growth, website traffic, leads, and advertising performance.' },
  { q: 'How much does social media marketing cost?', a: 'The cost depends on your business goals, number of platforms, content requirements, posting frequency, advertising needs, and overall scope of work. We create customized packages based on your requirements.' },
  { q: 'Why choose Xi Pi Technologia for social media marketing?', a: 'Xi Pi Technologia combines strategy, creative content, social media management, paid advertising, analytics, and continuous optimization to help businesses build a stronger online presence and achieve measurable growth.' }
];

export default function SocialMediaMarketing({ onContactClick }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans select-none overflow-x-hidden pt-20">
      
      {/* Background Decorative Radial Lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-brand-red/15 via-brand-red/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 border-b border-white/10 overflow-hidden">
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
              SOCIAL MEDIA MARKETING • TRICITY
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.93]">
              GROW YOUR <br />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-brand-red">
                BRAND ONLINE.
              </span>
            </h1>

            <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal pt-2">
              Build a stronger digital presence with social media marketing services designed to increase brand visibility, engage your audience, generate quality leads, and support measurable business growth. <br/><br/>
              From Instagram and Facebook to LinkedIn and YouTube, Xi Pi Technologia creates data-driven social media strategies for businesses across Chandigarh, Mohali, Zirakpur, Panchkula, and the Tricity region.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onContactClick}
                className="group relative inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-xl shadow-brand-red/25 transition-all hover:scale-105"
              >
                <span>START YOUR PROJECT</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-extrabold rounded-full text-sm uppercase tracking-wider hover:border-brand-red/50 hover:bg-white/5 transition-all"
              >
                <span>FREE SOCIAL MEDIA AUDIT</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="relative bg-[#0D0D0F] border-b border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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

      {/* 3. OUR SOCIAL MEDIA STRATEGY */}
      <section className="py-24 bg-[#FAF9F6] text-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 bg-black text-white px-3.5 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase">
              <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
              THE SYSTEM • 4 PILLARS
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08]">
              OUR SOCIAL MEDIA <br />
              <span className="font-serif italic font-light text-brand-red">
                STRATEGY.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed mt-4">
              We don't post content just to keep your social media active. Every post, reel, campaign, and creative is planned around your business goals, audience, and growth objectives.
            </p>
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
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl" style={{ backgroundColor: p.color }} />
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black tracking-[0.4em] uppercase" style={{ color: p.color }}>
                      {p.num}
                    </span>
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-zinc-100 text-black group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-extrabold text-black mb-3 tracking-tight">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6 font-normal">{p.desc}</p>
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

      {/* 4. WHY OUR SOCIAL MEDIA MARKETING WORKS */}
      <section className="py-24 bg-[#0A0A0F] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-brand-red">
              OUR APPROACH
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                WHY OUR SOCIAL <br/>
                <span className="text-brand-red">MARKETING WORKS.</span>
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed">
                Effective social media marketing is more than posting attractive graphics. We combine creative content, audience research, paid advertising, analytics, and continuous optimization to build a social presence that contributes to real business growth.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {approachCards.map((card, i) => (
              <div key={i} className="bg-[#111116] p-8 rounded-3xl border border-white/10 hover:border-brand-red/30 transition-colors">
                <CheckCircle2 className="h-6 w-6 text-brand-red mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRICITY LOCATION SECTION */}
      <section className="py-24 bg-[#050507] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-brand-red">
              SOCIAL MEDIA MARKETING • TRICITY
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              YOUR LOCAL BUSINESS.<br/>
              A STRONGER DIGITAL PRESENCE.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Looking for a social media marketing company in Chandigarh, Mohali, Zirakpur, or Panchkula? Xi Pi Technologia helps local businesses build a stronger presence across social media with customized strategies, engaging content, social media management, and paid advertising. We understand that businesses targeting the Tricity market need more than generic social media campaigns. Your strategy should reflect your local audience, competition, market, and business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationCards.map((loc, i) => (
              <div key={i} className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 hover:bg-zinc-900 transition-colors text-center">
                <h4 className="text-xl font-bold text-white mb-3">{loc.city}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] pt-4">
            Chandigarh • Mohali • Zirakpur • Panchkula • Tricity
          </div>
        </div>
      </section>

      {/* 6. SERVICES / WHAT WE DO */}
      <section className="py-24 bg-[#0A0A0F] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="space-y-3 text-center">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-brand-red">
              FULL SOCIAL MEDIA SERVICE
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              EVERYTHING YOUR<br/>
              SOCIAL PRESENCE NEEDS.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesCards.map((srv, i) => (
              <div key={i} className="group relative bg-[#111116] p-8 rounded-3xl border border-white/10 hover:border-brand-red/50 transition-all overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-6xl font-black text-white font-mono">
                  {srv.num}
                </div>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-white mb-3 pr-8">{srv.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES SECTION */}
      <section className="py-24 bg-[#050507] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-black tracking-[0.4em] uppercase text-brand-red">
                BUILT FOR DIFFERENT BUSINESSES
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                SOCIAL MEDIA FOR<br/>
                YOUR INDUSTRY.
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed">
                We create customized social media marketing strategies for businesses across different industries. Different industries need different content, audiences, and marketing approaches. We customize our strategy according to your business and target market.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {industries.map((ind, i) => (
              <div key={i} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white hover:bg-brand-red hover:border-brand-red transition-all cursor-default">
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. RESULTS / BENEFITS SECTION */}
      <section className="py-24 bg-[#0A0A0F] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="text-center space-y-3">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-brand-red">
              WHAT SOCIAL MEDIA DELIVERS
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              FROM ONLINE PRESENCE<br/>
              TO BUSINESS GROWTH.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitsCards.map((ben, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl bg-[#111116] border border-white/5 hover:bg-[#15151A] transition-colors">
                <div className="text-2xl font-black text-brand-red font-mono shrink-0">{ben.num}</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{ben.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{ben.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section className="py-24 bg-[#050507] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-brand-red">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              SOCIAL MEDIA MARKETING<br/>FAQS
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

      {/* 10. HIGH-CONVERTING CTA BANNER */}
      <section className="py-24 bg-[#0A0A0F] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border border-zinc-800 text-center space-y-6 relative overflow-hidden shadow-2xl">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">
              READY TO GROW ON SOCIAL?
            </span>

            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              TURN YOUR <br className="sm:hidden" />SOCIAL PRESENCE INTO GROWTH.
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Your audience is already spending time on social media. Let's build a strategy that gets your brand noticed, builds trust, generates leads, and moves your business forward.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={onContactClick}
                className="group inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-xl shadow-brand-red/25 transition-all hover:scale-105"
              >
                <span>GET YOUR FREE SOCIAL MEDIA AUDIT</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-extrabold rounded-full text-sm uppercase tracking-wider hover:border-brand-red/50 hover:bg-white/5 transition-all"
              >
                <span>CHAT ON WHATSAPP</span>
              </button>
            </div>
            
            <p className="text-[10px] text-zinc-500 pt-4 tracking-widest uppercase">
              Social Media Strategy • Content Creation • Management • Facebook Ads • Instagram Marketing
            </p>

          </div>
        </div>
      </section>

    </div>
  );
}
