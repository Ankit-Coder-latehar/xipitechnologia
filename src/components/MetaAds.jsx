import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Video, Users, CheckCircle2, ArrowRight, Sparkles, 
  Play, Share2, Award, ShieldCheck, ChevronDown, ChevronUp, MessageSquare, 
  ExternalLink, Zap, BarChart3, Filter, X, ArrowUpRight, Search, Target, Cpu, LineChart, MapPin
} from 'lucide-react';

const statsData = [
  { value: 'Multi-Platform', label: 'Advertising', detail: 'Meta Ads • Facebook Ads • Instagram Ads' },
  { value: 'Goal-Focused', label: 'Campaigns', detail: 'Leads • Sales • Awareness • Conversions' },
  { value: 'Data-Driven', label: 'Optimization', detail: 'Audience • Creative • Budget • Performance' },
  { value: 'Transparent', label: 'Reporting', detail: 'Clear insights • Actionable recommendations' }
];

const processSteps = [
  {
    step: 'Step 01',
    title: 'Research & Audience Mapping',
    color: '#38BDF8',
    icon: Search,
    desc: 'We understand your business, customers, competitors, and campaign goals to identify the audiences most likely to take action.',
    items: ['Audience research', 'Competitor analysis', 'Customer profiling', 'Interest & behaviour targeting']
  },
  {
    step: 'Step 02',
    title: 'Creative & Campaign Strategy',
    color: '#A78BFA',
    icon: Video,
    desc: 'We develop engaging ad concepts, messaging, and campaign structures designed around your target audience and business objectives.',
    items: ['Ad copy & creative direction', 'Facebook & Instagram campaigns', 'Campaign structure', 'Audience segmentation']
  },
  {
    step: 'Step 03',
    title: 'Launch & A/B Testing',
    color: '#E32626',
    icon: Zap,
    desc: 'We launch campaigns and test different audiences, creatives, messaging, placements, and offers to identify what performs best.',
    items: ['Creative testing', 'Audience testing', 'Placement optimization', 'Conversion tracking']
  },
  {
    step: 'Step 04',
    title: 'Optimize & Scale',
    color: '#34D399',
    icon: TrendingUp,
    desc: 'We continuously monitor campaign performance and optimize budgets, audiences, and creatives to improve leads, conversions, and overall campaign efficiency.',
    items: ['Performance monitoring', 'Budget optimization', 'Retargeting', 'Continuous optimization']
  }
];

const edgeFeatures = [
  { title: 'Audience-First Targeting', icon: Target, color: '#A78BFA', desc: 'We research your ideal customers and create targeted campaigns based on demographics, interests, behaviours, and audience intent.' },
  { title: 'Creative That Gets Attention', icon: Sparkles, color: '#FB923C', desc: 'From ad copy to visual concepts, we create engaging Facebook and Instagram ads designed to stop the scroll and encourage action.' },
  { title: 'Platform-Native Campaigns', icon: Video, color: '#00D4FF', desc: 'We build campaigns specifically for how users interact with Facebook and Instagram, using the right formats, placements, and messaging.' },
  { title: 'Full-Funnel Strategy', icon: Filter, color: '#E32626', desc: 'From awareness to consideration and conversion, we create campaigns that support your complete customer journey.' },
  { title: 'Data-Driven Optimization', icon: Cpu, color: '#F472B6', desc: 'We monitor campaign performance and use real-time data to improve audiences, creatives, budgets, and conversion performance.' },
  { title: 'Transparent Reporting', icon: BarChart3, color: '#34D399', desc: 'You get clear performance updates covering reach, clicks, leads, conversions, cost per result, and campaign insights.' }
];

const campaignMetrics = [
  { title: 'LEAD GENERATION', desc: 'Quality enquiries generated through targeted Meta campaigns.' },
  { title: 'AUDIENCE REACH', desc: 'Connect your brand with relevant customers across Facebook and Instagram.' },
  { title: 'CAMPAIGN EFFICIENCY', desc: 'Continuous optimization to improve cost per result and overall performance.' },
  { title: 'CONVERSIONS', desc: 'Focus on meaningful actions—not just impressions and clicks.' }
];

const adCreatives = [
  { title: 'Lead Generation Ads', tag: 'Lead Gen', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', desc: 'Designed to encourage users to enquire, register, or submit their details.' },
  { title: 'Product & Service Ads', tag: 'Showcase', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop', desc: 'Showcase your products or services with clear messaging and compelling visuals.' },
  { title: 'UGC-Style Creatives', tag: 'Authentic', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop', desc: 'Authentic, relatable creative formats designed to feel native to social feeds.' },
  { title: 'Retargeting Creatives', tag: 'Retargeting', img: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=800&auto=format&fit=crop', desc: 'Reconnect with people who have already interacted with your brand and encourage them to take the next step.' }
];

const localServices = [
  { title: 'Facebook Ads Management', desc: 'Targeted Facebook advertising campaigns focused on leads, sales, and brand growth.' },
  { title: 'Instagram Ads Management', desc: 'Creative and performance-focused Instagram campaigns designed to reach relevant audiences.' },
  { title: 'Meta Ads Campaign Management', desc: 'Complete campaign planning, setup, monitoring, testing, and optimization.' },
  { title: 'Social Media Advertising', desc: 'Paid social media strategies designed to increase visibility, engagement, leads, and conversions.' }
];

const whyXiPiCards = [
  { title: 'Experienced Digital Marketing Team', desc: 'Our team understands campaign strategy, audience targeting, creative testing, and performance optimization.' },
  { title: 'Customized Campaign Strategy', desc: 'Every campaign is designed around your business goals, audience, industry, and budget.' },
  { title: 'Performance-Focused Advertising', desc: 'We focus on meaningful metrics such as leads, conversions, cost per result, and return on advertising spend.' },
  { title: 'Regular Optimization', desc: 'We continuously monitor campaigns and make data-driven improvements.' },
  { title: 'Clear Reporting', desc: 'Understand where your budget is going and how your campaigns are performing.' }
];

export default function MetaAds({ onContactClick }) {
  const [activeGalleryModal, setActiveGalleryModal] = useState(null);

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans select-none overflow-x-hidden pt-20">
      
      {/* Radial Lighting Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-600/10 via-brand-red/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 border-b border-white/10 overflow-hidden">
        
        {/* Big Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10">
          <span className="text-[14vw] font-black leading-none text-transparent border-text tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}>
            META ADS
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 px-4 py-1.5 rounded-full text-xs font-black tracking-[0.3em] uppercase">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              PAID ADVERTISING & META ADS
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.93]">
              ADS THAT <br />
              <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-sky-400">
                ACTUALLY CONVERT.
              </span>
            </h1>

            <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-xl font-normal pt-2">
              Reach the right customers with strategic Meta Ads Management Services across Facebook and Instagram. We create targeted campaigns designed to generate quality leads, increase sales, and deliver measurable business growth.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onContactClick}
                className="group relative inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-xl shadow-brand-red/25 transition-all hover:scale-105"
              >
                <span>Start Your Meta Ads Campaign</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-extrabold rounded-full text-sm uppercase tracking-wider hover:border-sky-400/50 hover:bg-white/5 transition-all"
              >
                <span>Get Free Meta Ads Audit</span>
              </button>
            </div>
            
            <p className="text-[10px] text-zinc-500 pt-2 tracking-widest uppercase font-bold">
              Facebook Ads • Instagram Ads • Lead Generation • Conversion Optimization
            </p>

          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
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
              <div className="text-xl sm:text-2xl font-black text-sky-400 font-mono group-hover:scale-105 transition-transform mb-2">
                {stat.value}
              </div>
              <div className="text-xs font-extrabold text-white uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[10px] text-zinc-500 font-medium mt-1">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. PROCESS SECTION */}
      <section className="py-24 bg-[#FAF9F6] text-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 bg-black text-white px-3.5 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              THE PROCESS • 4 STEPS
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08]">
              HOW WE <br />
              <span className="font-serif italic font-light text-brand-red">
                RUN META ADS.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed mt-4">
              We combine audience research, creative strategy, campaign testing, and continuous optimization to make your advertising budget work harder.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-white rounded-3xl p-7 border border-zinc-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl" style={{ backgroundColor: step.color }} />

                  <div>
                    <div 
                      className="h-10 w-10 rounded-xl flex items-center justify-center mb-5 font-bold"
                      style={{ backgroundColor: `${step.color}20`, color: step.color }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-[10px] font-black tracking-[0.3em] uppercase block mb-2" style={{ color: step.color }}>
                      {step.step}
                    </span>

                    <h3 className="text-lg font-extrabold text-black mb-3 tracking-tight">
                      {step.title}
                    </h3>

                    <p className="text-xs text-zinc-600 leading-relaxed font-normal mb-6">
                      {step.desc}
                    </p>
                  </div>
                  
                  <ul className="space-y-2.5 pt-4 border-t border-zinc-100">
                    {step.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2.5 text-xs font-semibold text-zinc-700">
                        <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: step.color }} />
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

      {/* 4. WHY OUR ADS CONVERT */}
      <section className="py-28 bg-[#050507] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
          
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-sky-400">
              OUR EDGE
            </span>
            <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight shrink-0">
                WHY OUR ADS <br />
                <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-brand-red">
                  CONVERT.
                </span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-lg leading-relaxed pt-2">
                We don't simply launch advertisements. We build data-driven Meta advertising campaigns around your audience, creative, budget, and business goals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {edgeFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-[#0D0D0F] p-7 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: feat.color }} />

                  <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${feat.color}20`, color: feat.color }}>
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-3">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. CASE STUDY */}
      <section className="py-28 bg-[#0A0A0F] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
          
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 text-amber-400 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
              CAMPAIGN CASE STUDY
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              From Creative <br />
              <span className="text-amber-400">To Conversion.</span>
            </h2>
            <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed">
              See how strategic Meta advertising campaigns can connect the right audience with the right message and turn attention into measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            <div className="bg-[#0D0D0F] p-6 rounded-2xl border border-red-500/20 relative">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-red-400 rounded-t-2xl" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-red-400 block mb-2">The Challenge</span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                The business needed to reach a highly relevant audience while improving campaign efficiency and generating more qualified enquiries.
              </p>
            </div>

            <div className="bg-[#0D0D0F] p-6 rounded-2xl border border-sky-500/20 relative">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-sky-400 rounded-t-2xl" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-sky-400 block mb-2">The Audience</span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                We identified the ideal customer profile and developed audience segments based on relevant demographics, interests, behaviours, and intent.
              </p>
            </div>

            <div className="bg-[#0D0D0F] p-6 rounded-2xl border border-amber-500/20 relative">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-amber-400 rounded-t-2xl" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-amber-400 block mb-2">Our Approach</span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                We combined audience targeting, platform-native creatives, campaign testing, retargeting, and continuous optimization.
              </p>
            </div>
          </div>
          
          <div className="bg-[#0D0D0F] p-8 sm:p-10 rounded-3xl border border-amber-400/20 space-y-6 text-center">
            <span className="text-amber-400 text-xs font-black uppercase tracking-[0.4em] block mb-4">
              THE RESULT
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
               <div>
                  <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono mb-2">137K+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Total Reach</div>
               </div>
               <div>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono mb-2">3.2%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Avg. CTR</div>
               </div>
               <div>
                  <div className="text-3xl sm:text-4xl font-black text-sky-400 font-mono mb-2">$0.19</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Cost Per Click</div>
               </div>
               <div>
                  <div className="text-3xl sm:text-4xl font-black text-purple-400 font-mono mb-2">3,778</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Leads / Clicks</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CAMPAIGN RESULTS / METRICS */}
      <section className="py-24 bg-[#050507] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaignMetrics.map((metric, i) => (
              <div key={i} className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 hover:border-brand-red/30 transition-colors">
                <CheckCircle2 className="h-6 w-6 text-brand-red mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">{metric.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. AD CREATIVES SECTION */}
      <section className="py-24 bg-[#0A0A0F] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="space-y-4 text-center">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-red">
              AD CREATIVES & CAMPAIGN SHOWCASE
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Creative That <br/> Stops the Scroll.
            </h2>
            <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed pt-2">
              Great Meta advertising starts with great creative. We create engaging ad concepts, copy, and visuals designed for Facebook and Instagram while staying aligned with your brand and campaign objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {adCreatives.map((creative, idx) => (
              <div
                key={idx}
                className="group relative h-[380px] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-xl"
              >
                <img
                  src={creative.img}
                  alt={creative.title}
                  className="w-full h-[55%] object-cover opacity-80"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-red text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-full shadow-lg">
                    {creative.tag}
                  </span>
                </div>
                <div className="p-5 h-[45%] bg-[#111116] flex flex-col justify-center border-t border-white/10">
                  <h5 className="text-base font-extrabold text-white mb-2">
                    {creative.title}
                  </h5>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                    {creative.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LOCATION / LOCAL SERVICE SECTION */}
      <section className="py-24 bg-[#050507] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
                <span className="text-xs font-black tracking-[0.4em] uppercase text-brand-red block mb-4">
                  LOCAL META ADS EXPERTISE
                </span>
                <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
                  Meta Ads Agency <br/>
                  <span className="text-brand-red">in Chandigarh & Tricity</span>
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-4">
                  Looking for a Meta Ads Agency in Chandigarh to generate more leads and grow your business online?
                </p>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-4">
                  Xi Pi Technologia provides Meta Ads Management Services in Chandigarh and Tricity, helping businesses reach relevant customers through targeted Facebook and Instagram advertising campaigns.
                </p>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  We work with businesses across Chandigarh, Mohali, Panchkula, and Zirakpur, creating customized Meta advertising strategies based on their audience, industry, budget, and business goals.
                </p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {localServices.map((srv, i) => (
                 <div key={i} className="bg-[#111116] p-6 rounded-2xl border border-white/10">
                   <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                     <MapPin className="h-4 w-4 text-brand-red shrink-0" />
                     {srv.title}
                   </h4>
                   <p className="text-xs text-zinc-400 leading-relaxed">{srv.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* 9. WHY XI PI */}
      <section className="py-24 bg-[#0A0A0F] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="text-center space-y-3">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-brand-red">
              WHY CHOOSE XI PI TECHNOLOGIA
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              A Meta Ads Partner<br/>Focused on Results.
            </h2>
            <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed pt-2">
              At Xi Pi Technologia, we combine audience research, creative strategy, performance marketing, and continuous optimization to help businesses get more from their Meta advertising budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyXiPiCards.map((card, i) => (
              <div key={i} className="bg-[#111116] p-8 rounded-3xl border border-white/10 hover:border-brand-red/30 transition-colors">
                <CheckCircle2 className="h-6 w-6 text-brand-red mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-24 bg-[#050507] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border border-zinc-800 text-center space-y-6 relative overflow-hidden shadow-2xl">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">
              READY TO SCALE YOUR META ADS?
            </span>

            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Get Your Free <br className="sm:hidden" />Meta Ads Strategy Audit.
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Let's review your current campaigns, audience targeting, creatives, and performance opportunities to identify where your Meta advertising can improve.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={onContactClick}
                className="group inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-xl shadow-brand-red/25 transition-all hover:scale-105"
              >
                <span>Book Your Meta Ads Audit</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <p className="text-[10px] text-zinc-500 pt-2 tracking-widest uppercase font-bold">
              Facebook Ads • Instagram Ads • Lead Generation • Conversion Optimization
            </p>

            <div className="mt-8 pt-8 border-t border-white/10 flex justify-center">
              <div className="bg-white/5 border border-white/10 rounded-full px-6 py-3 flex items-center gap-3 hover:bg-white/10 transition-colors cursor-pointer" onClick={onContactClick}>
                 <MessageSquare className="h-5 w-5 text-brand-red" />
                 <div className="text-left">
                   <div className="text-xs font-bold text-white uppercase tracking-wider">Talk to our team</div>
                   <div className="text-[10px] text-zinc-400">Let's discuss your advertising goals.</div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
