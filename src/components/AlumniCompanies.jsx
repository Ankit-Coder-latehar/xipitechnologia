import React from 'react';

const topRowLogos = [
  { name: 'Adobe', font: 'font-serif font-black text-rose-600', sub: 'Adobe' },
  { name: 'tots & moms', font: 'font-sans font-bold bg-neutral-800 text-white px-2 py-1 rounded text-xs', sub: 'Parenting & Care' },
  { name: 'ZEROZILLA', font: 'font-mono font-extrabold text-purple-700 tracking-wider', sub: 'Digital' },
  { name: 'ORACLE', font: 'font-sans font-black tracking-widest text-red-600', sub: 'Cloud Systems' },
  { name: 'DevelUp', font: 'font-sans font-bold text-blue-600', sub: 'Tech Ops' },
  { name: 'AXA', font: 'font-sans font-black text-blue-900 bg-blue-100 px-2 py-0.5 rounded', sub: 'Insurance' },
  { name: 'LAKMÉ', font: 'font-serif font-bold tracking-widest text-neutral-900', sub: 'Beauty' },
  { name: 'recromedia', font: 'font-sans font-medium text-orange-600', sub: 'Media Group' },
  { name: 'reddit', font: 'font-sans font-black text-orange-500 flex items-center gap-1', sub: 'Community' },
  { name: 'Spotify', font: 'font-sans font-bold text-emerald-500', sub: 'Audio' },
  { name: 'HubSpot', font: 'font-sans font-black text-amber-600', sub: 'CRM Engine' },
  { name: 'Salesforce', font: 'font-sans font-bold text-sky-500', sub: 'Enterprise' }
];

const bottomRowLogos = [
  { name: 'BOSCH', font: 'font-sans font-black text-red-600 tracking-wider', sub: 'Engineering' },
  { name: 'amazon', font: 'font-sans font-black text-neutral-900', sub: 'E-Commerce' },
  { name: 'dentsu', font: 'font-mono font-extrabold text-neutral-900', sub: 'Network' },
  { name: 'Flipkart', font: 'font-sans font-bold text-blue-600 bg-amber-300/30 px-2 py-0.5 rounded', sub: 'Retail' },
  { name: 'Continental', font: 'font-sans font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded', sub: 'Automotive' },
  { name: 'yahoo!', font: 'font-sans font-black text-purple-700 italic', sub: 'Media' },
  { name: 'REPLICON', font: 'font-sans font-extrabold text-cyan-600 tracking-wider', sub: 'Software' },
  { name: 'KTM', font: 'font-sans font-black text-orange-600 tracking-tight italic', sub: 'Motors' },
  { name: 'JUNGLE SQUARE', font: 'font-mono font-bold text-teal-600', sub: 'Agency' },
  { name: 'at&t', font: 'font-sans font-black text-sky-500', sub: 'Telecom' },
  { name: 'L\'Oréal', font: 'font-serif font-black text-neutral-900', sub: 'Global Beauty' },
  { name: 'Nike', font: 'font-sans font-black text-black italic', sub: 'Athletics' }
];

export default function AlumniCompanies() {
  // Multiply arrays for smooth seamless infinite scrolling loop
  const topRowFull = [...topRowLogos, ...topRowLogos, ...topRowLogos, ...topRowLogos];
  const bottomRowFull = [...bottomRowLogos, ...bottomRowLogos, ...bottomRowLogos, ...bottomRowLogos];

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

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center mb-14">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red mb-3 block">
          GLOBAL ALUMNI FOOTPRINT
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.15] font-display max-w-4xl mx-auto italic">
          Our Alumni Drive <br className="hidden sm:inline" />
          Digital Marketing & Growth At <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-neutral-900 via-brand-red to-neutral-800 bg-clip-text text-transparent not-italic font-black">
            2,000+ Companies Worldwide
          </span>
        </h2>
      </div>

      <div className="space-y-8 sm:space-y-10">
        
        {/* ROW 1: SCROLLS INFINITELY TO THE RIGHT */}
        <div className="overflow-hidden w-full flex">
          <div className="animate-scroll-right flex items-center gap-12 sm:gap-16">
            {topRowFull.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center h-16 px-6 rounded-2xl bg-white/70 hover:bg-white border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300 shrink-0 group"
              >
                <div className="flex flex-col items-center">
                  <span className={`text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-105 ${logo.font}`}>
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
          <div className="animate-scroll-left flex items-center gap-12 sm:gap-16">
            {bottomRowFull.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center h-16 px-6 rounded-2xl bg-white/70 hover:bg-white border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300 shrink-0 group"
              >
                <div className="flex flex-col items-center">
                  <span className={`text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-105 ${logo.font}`}>
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
