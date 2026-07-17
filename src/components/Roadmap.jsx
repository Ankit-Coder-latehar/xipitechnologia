import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Sparkles, Code, TrendingUp } from 'lucide-react';

const stages = [
  {
    index: '01',
    phase: 'PHASE 01',
    timeframe: 'Weeks 1-2',
    icon: Compass,
    title: 'Discovery & Strategy Audit',
    desc: 'We dissect your market competitors, analyze your current search visibility and acquisition metrics, and run stakeholder surveys. We deliver a complete blueprint detailing visual gaps and technical roadmap requirements.',
    deliverables: ['Competitor Analysis', 'Conversion Audits', 'Architecture Blueprints', 'Visual Moodboards']
  },
  {
    index: '02',
    phase: 'PHASE 02',
    timeframe: 'Weeks 3-5',
    icon: Sparkles,
    title: 'Brand Identity & User Flows',
    desc: 'Our creative team designs the identity core: logos, typography scales, color palettes, and luxury mockups. In parallel, we construct clean wireframes and prototype click paths to maximize retention.',
    deliverables: ['Logotypes & Guidelines', 'Responsive UX Layouts', 'Interactive Prototypes', 'Asset Styleguides']
  },
  {
    index: '03',
    phase: 'PHASE 03',
    timeframe: 'Weeks 6-9',
    icon: Code,
    title: 'High-End Web Engineering',
    desc: 'We translate design mockups into pixel-perfect React/Next.js code. The structure is built with Core Web Vitals optimization in mind, ensuring fast rendering, performance indexing, and accessibility.',
    deliverables: ['Production React Code', 'CMS Integrations', 'Core Web Vitals Optimizations', 'SEO Structures']
  },
  {
    index: '04',
    phase: 'PHASE 04',
    timeframe: 'Ongoing Phase',
    icon: TrendingUp,
    title: 'Growth Scaling & Tuning',
    desc: 'Post-launch, we launch intent-based Paid Search campaigns (Google Ads) and demographic social targeting templates (Meta Ads). We track conversion metrics to adjust budgets and landing copy.',
    deliverables: ['Multi-Touch Tracking', 'Creative Testing Loops', 'Campaign Scaling', 'LTV Performance Metrics']
  }
];

export default function Roadmap() {
  const containerRef = useRef(null);
  
  // Track scroll inside the roadmap container to animate the progress line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 60%"]
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="roadmap" className="py-28 bg-[#FAF9F6] border-t border-brand-border scroll-mt-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-24 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red select-none">
            Engagement Blueprint
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
            How we take brands from <br />
            ideas to execution.
          </h2>
          <p className="text-black/50 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
            A structured, transparent engagement timeline built to eliminate guesswork and deliver measurable, premium products.
          </p>
        </div>

        {/* Timeline Alternating Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto py-8">
          
          {/* Vertical progress line - centered on desktop, left on mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-brand-border -translate-x-1/2" />
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-brand-red origin-top -translate-x-1/2"
            style={{ height: progressHeight }}
          />

          {/* Timeline Stages List */}
          <div className="space-y-16">
            {stages.map((stage, idx) => {
              const IconComponent = stage.icon;
              const isEven = idx % 2 === 0; // Even items go Left, Odd items go Right

              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col md:flex-row w-full items-start group ${
                    isEven ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  
                  {/* Alternating Indicator dot - centered on desktop, left on mobile */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 h-5 w-5 rounded-full border-2 border-brand-red bg-white flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-125">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                  </div>

                  {/* Card Block */}
                  <div className="w-full md:w-[45%] pl-10 md:pl-0">
                    <div className="bg-white border border-brand-border rounded-3xl p-6 sm:p-8 shadow-sm hover:border-brand-red/35 transition-all duration-300 hover:shadow-md relative overflow-hidden group">
                      
                      {/* Floating graphic node inside card */}
                      <div className="absolute -top-6 -right-6 w-16 h-16 bg-brand-red/5 rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                      
                      {/* Card Header */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl border border-brand-border bg-brand-gray text-black flex items-center justify-center shadow-sm group-hover:text-brand-red group-hover:border-brand-red transition-all duration-300">
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-red">
                            {stage.timeframe}
                          </span>
                        </div>
                        <span className="text-sm font-black text-black/20 group-hover:text-brand-red/20 transition-colors duration-300">
                          {stage.phase}
                        </span>
                      </div>

                      {/* Card Content */}
                      <div className="space-y-4">
                        <h3 className="text-lg sm:text-xl font-extrabold text-black tracking-tight group-hover:text-brand-red transition-colors duration-300">
                          {stage.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-black/60 leading-relaxed font-normal">
                          {stage.desc}
                        </p>

                        {/* Deliverables tags */}
                        <div className="space-y-2 border-t border-brand-border pt-4">
                          <span className="block text-[9px] font-bold uppercase tracking-wider text-black/40">
                            Key Deliverables:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {stage.deliverables.map((item, dIdx) => (
                              <span 
                                key={dIdx} 
                                className="rounded-full bg-brand-gray border border-brand-border px-2.5 py-0.5 text-[10px] font-semibold text-black/80 hover:border-black/20 transition-colors select-none shadow-sm"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
