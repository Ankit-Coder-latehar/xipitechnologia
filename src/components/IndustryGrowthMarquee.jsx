import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShoppingBag, Cpu, Sparkles, HeartPulse, Landmark, ArrowUpRight } from 'lucide-react';

const column1 = [
  {
    title: 'Fintech & Banking',
    desc: 'High-converting acquisition funnels for digital banks, trading apps & crypto platforms.',
    icon: Landmark,
    img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop',
    stat: '+340% User Growth'
  },
  {
    title: 'E-Commerce & Retail',
    desc: 'Paid Meta & TikTok ad scaling with guaranteed 10x ROAS for DTC brands.',
    icon: ShoppingBag,
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
    stat: '$120M DTC Sales'
  },
  {
    title: 'Artificial Intelligence & SaaS',
    desc: 'Semantic SEO and product-led growth engines for B2B tech platforms.',
    icon: Cpu,
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    stat: '15.2x CAC Reduction'
  }
];

const column2 = [
  {
    title: 'Luxury & Fashion',
    desc: 'Cinema-grade video ads and brand positioning for high-end lifestyle labels.',
    icon: Sparkles,
    img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop',
    stat: '4.8M Viral Impressions'
  },
  {
    title: 'Healthcare & MedTech',
    desc: 'HIPAA-compliant digital acquisition and search authority building.',
    icon: HeartPulse,
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
    stat: '98% Lead Quality'
  },
  {
    title: 'Real Estate & Hospitality',
    desc: '3D virtual tours, lead scoring automation & luxury property launches.',
    icon: Building2,
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
    stat: '$45M Property Deals'
  }
];

export default function IndustryGrowthMarquee({ onContactClick }) {
  // Quadruple lists for infinite smooth vertical looping
  const col1Items = [...column1, ...column1, ...column1, ...column1];
  const col2Items = [...column2, ...column2, ...column2, ...column2];

  return (
    <section className="relative w-full bg-black text-white py-24 lg:py-32 overflow-hidden select-none border-t border-zinc-800">
      
      {/* Background radial glow & vignette */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]" />

      {/* Embedded Style Block for Vertical Marquee Animations */}
      <style>{`
        @keyframes vertical-marquee-up {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        @keyframes vertical-marquee-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        .animate-marquee-up {
          animation: vertical-marquee-up 35s linear infinite;
        }
        .animate-marquee-down {
          animation: vertical-marquee-down 35s linear infinite;
        }
        .animate-marquee-up:hover, .animate-marquee-down:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-brand-red px-3.5 py-1.5 rounded-full">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em]">
                SECTOR DOMINANCE
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Digital Growth Across <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-400 to-white">
                Every Sector.
              </span>
            </h2>

            <p className="text-zinc-400 text-base leading-relaxed font-normal max-w-lg">
              We partner with bold founders, high-growth startups, and enterprise market leaders. Our performance architecture scales across all high-demand verticals.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <span className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-bold px-3.5 py-2 rounded-xl">
                ✓ B2B SaaS
              </span>
              <span className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-bold px-3.5 py-2 rounded-xl">
                ✓ DTC E-Commerce
              </span>
              <span className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-bold px-3.5 py-2 rounded-xl">
                ✓ Enterprise Tech
              </span>
            </div>

            <div className="pt-6">
              <button
                onClick={onContactClick}
                className="group relative inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white text-xs font-extrabold px-8 py-4 rounded-2xl shadow-xl shadow-brand-red/20 transition-all hover:scale-105"
              >
                <span>Scale Your Industry Brand</span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Dual Vertical Marquee Columns (Prixa.digital signature section) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 h-[580px] overflow-hidden relative">
            
            {/* Top and Bottom Gradient Mask Fades */}
            <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

            {/* Vertical Column 1: Moves UP */}
            <div className="flex flex-col gap-6 animate-marquee-up will-change-transform">
              {col1Items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`col1-${idx}`}
                    className="group relative w-full h-[250px] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 flex flex-col justify-end p-6 transition-all duration-300 hover:border-brand-red/50 hover:shadow-2xl"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    <div className="relative z-10 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="h-8 w-8 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-brand-red">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="bg-brand-red/90 text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-full">
                          {item.stat}
                        </span>
                      </div>

                      <h4 className="text-lg font-extrabold text-white tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-zinc-300 line-clamp-2 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Vertical Column 2: Moves DOWN */}
            <div className="hidden sm:flex flex-col gap-6 animate-marquee-down will-change-transform">
              {col2Items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`col2-${idx}`}
                    className="group relative w-full h-[250px] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 flex flex-col justify-end p-6 transition-all duration-300 hover:border-brand-red/50 hover:shadow-2xl"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    <div className="relative z-10 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="h-8 w-8 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-brand-red">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="bg-emerald-500/90 text-black text-[9px] font-black uppercase px-2.5 py-1 rounded-full">
                          {item.stat}
                        </span>
                      </div>

                      <h4 className="text-lg font-extrabold text-white tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-zinc-300 line-clamp-2 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
