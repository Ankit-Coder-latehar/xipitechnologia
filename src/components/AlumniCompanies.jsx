import React from 'react';

const industriesRow1 = [
  { name: 'Healthcare', font: 'font-sans font-bold text-emerald-600', sub: 'Industry' },
  { name: 'Education', font: 'font-sans font-bold text-blue-600', sub: 'Industry' },
  { name: 'Real Estate', font: 'font-sans font-bold text-amber-700', sub: 'Industry' },
  { name: 'E-commerce', font: 'font-sans font-bold text-purple-600', sub: 'Industry' },
  { name: 'Manufacturing', font: 'font-sans font-bold text-zinc-700', sub: 'Industry' },
  { name: 'Retail', font: 'font-sans font-bold text-rose-600', sub: 'Industry' }
];

const industriesRow2 = [
  { name: 'Hospitality', font: 'font-sans font-bold text-indigo-600', sub: 'Industry' },
  { name: 'Finance', font: 'font-sans font-bold text-sky-600', sub: 'Industry' },
  { name: 'IT & SaaS', font: 'font-sans font-bold text-cyan-600', sub: 'Industry' },
  { name: 'Automotive', font: 'font-sans font-bold text-red-600', sub: 'Industry' },
  { name: 'Professional Services', font: 'font-sans font-bold text-neutral-800', sub: 'Industry' },
  { name: 'Local Businesses', font: 'font-sans font-bold text-teal-600', sub: 'Industry' }
];

export default function AlumniCompanies() {
  // Multiply arrays for smooth seamless infinite scrolling loop
  const topRowFull = [...industriesRow1, ...industriesRow1, ...industriesRow1, ...industriesRow1];
  const bottomRowFull = [...industriesRow2, ...industriesRow2, ...industriesRow2, ...industriesRow2];

  return (
    <section className="relative w-full py-20 bg-[#FAF9F6] border-y border-neutral-200 overflow-hidden select-none">
      
      {/* Keyframe Marquee Animation Styles */}
      <style>{`
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-right {
          display: flex;
          width: max-content;
          animation: marquee-right 32s linear infinite;
        }
        .animate-scroll-left {
          display: flex;
          width: max-content;
          animation: marquee-left 32s linear infinite;
        }
        .animate-scroll-right:hover, .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Side gradient fade masks for smooth infinity blending */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center mb-14 space-y-4">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red block">
          TRUSTED DIGITAL GROWTH PARTNER
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.15] font-display max-w-4xl mx-auto">
          Helping Businesses <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-neutral-900 via-brand-red to-neutral-800 bg-clip-text text-transparent font-black">
            Grow Across Multiple Industries
          </span>
        </h2>
        <p className="text-neutral-600 font-normal text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          We partner with startups, SMEs, and established businesses to deliver data-driven digital marketing solutions that increase visibility, generate qualified leads, and drive measurable business growth.
        </p>

        <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 pt-4">
          Trusted by Businesses Across Diverse Industries
        </p>
      </div>

      <div className="space-y-8 sm:space-y-10">
        
        {/* ROW 1: SCROLLS INFINITELY TO THE RIGHT */}
        <div className="overflow-hidden w-full flex">
          <div className="animate-scroll-right flex items-center gap-8 sm:gap-12">
            {topRowFull.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center h-16 px-6 rounded-2xl bg-white/80 hover:bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 shrink-0 group"
              >
                <div className="flex flex-col items-center">
                  <span className={`text-lg sm:text-xl transition-transform duration-300 group-hover:scale-105 ${logo.font}`}>
                    {logo.name}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold mt-0.5">
                    {logo.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: SCROLLS INFINITELY TO THE LEFT */}
        <div className="overflow-hidden w-full flex">
          <div className="animate-scroll-left flex items-center gap-8 sm:gap-12">
            {bottomRowFull.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center h-16 px-6 rounded-2xl bg-white/80 hover:bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 shrink-0 group"
              >
                <div className="flex flex-col items-center">
                  <span className={`text-lg sm:text-xl transition-transform duration-300 group-hover:scale-105 ${logo.font}`}>
                    {logo.name}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold mt-0.5">
                    {logo.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
