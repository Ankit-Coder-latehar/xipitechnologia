import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Award, Zap, Users, Heart, ExternalLink, X } from 'lucide-react';

function CountUpNumber({ end, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const totalFrames = Math.round(duration * 60);

    const counter = () => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(end * (progress * (2 - progress)));
      
      if (frame < totalFrames) {
        setCount(currentCount);
        requestAnimationFrame(counter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(counter);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-mono font-black">
      {count}{suffix}
    </span>
  );
}

const partnersMarquee = [
  { name: 'Google Premier Partner', img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=400&auto=format&fit=crop' },
  { name: 'Meta Platinum Business', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop' },
  { name: 'Shopify Plus Partner', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop' },
  { name: 'Rastriya Banijya Bank', img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=400&auto=format&fit=crop' },
  { name: 'Third Factor', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop' },
  { name: 'X-AGE Tech', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop' }
];

const polaroids = [
  { title: 'Strategy Offsite 2026', tilt: '-rotate-6', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop', caption: 'Brainstorming our global campaign roadmap.' },
  { title: 'Award Ceremony Night', tilt: 'rotate-3', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop', caption: 'Celebrating Design Agency of the Year nominee.' },
  { title: 'Design Sprint Workshop', tilt: '-rotate-3', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop', caption: 'Rapid UI prototyping & user testing.' },
  { title: 'Global Campaign Launch', tilt: 'rotate-6', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop', caption: 'Going live across 15+ countries simultaneously.' }
];

export default function AboutUs({ onContactClick }) {
  const [activePolaroid, setActivePolaroid] = useState(null);
  const marqueeItems = [...partnersMarquee, ...partnersMarquee, ...partnersMarquee];

  return (
    <div className="w-full bg-[#FAF9F6] text-black select-none overflow-hidden">
      
      {/* 1. WHERE WE STARTED AND OUR STORY SECTION */}
      <section className="py-24 sm:py-32 border-b border-brand-border bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column Story Header */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
                AGENCY ORIGINS
              </span>
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-black leading-[1.08] uppercase">
                Where we started <br />
                <span className="text-black/40">and our story.</span>
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
                Xipitechnolia® was founded out of a passion for high-end digital design, algorithmic performance marketing, and creative agency innovation. We seamlessly merge artistic vision with engineering precision to help ambitious brands build category dominance.
              </p>
            </motion.div>

            {/* Right Column Visual Banner & Divided Metrics */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="relative w-full h-[320px] sm:h-[400px] rounded-3xl overflow-hidden border border-brand-border shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="Our Team Story"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Divided Stats List with CountUp */}
              <div className="divide-y divide-black/10 border-y border-black/10">
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-16 py-6">
                  <span className="text-sm font-extrabold uppercase tracking-widest text-black shrink-0 min-w-[110px]">
                    THE SCALE
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-zinc-700">
                    <span className="text-brand-red font-bold"><CountUpNumber end={80} suffix="+" /></span> Campaigns delivered with precision, strategy, and care.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-16 py-6">
                  <span className="text-sm font-extrabold uppercase tracking-widest text-black shrink-0 min-w-[110px]">
                    THE REACH
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-zinc-700">
                    <span className="text-brand-red font-bold"><CountUpNumber end={25} suffix="+" /></span> Unique industries served, from local startups to global enterprise brands.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-16 py-6">
                  <span className="text-sm font-extrabold uppercase tracking-widest text-black shrink-0 min-w-[110px]">
                    THE RESULT
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-zinc-700">
                    <span className="text-brand-red font-bold">$250M+</span> In verified client revenue generated to date.
                  </p>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 2. TRUSTED BY THE WORLD'S BEST MARQUEE */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red block mb-2">
            GLOBAL RECOGNITION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            TRUSTED BY THE WORLD'S BEST
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="group relative w-full overflow-hidden mb-12">
          <div className="animate-marquee-container flex gap-8">
            {marqueeItems.map((p, idx) => (
              <div
                key={idx}
                className="shrink-0 h-[180px] w-[260px] rounded-2xl overflow-hidden border border-zinc-800 relative group"
              >
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-bold text-white uppercase tracking-wider">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-zinc-400 mb-3">
            Selected Partners & Brands
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal capitalize">
            Rastrya Banijya Bank, Jyoti Bikash Bank, Laxmi Sunrise Bank, Agricultural Development Bank, WorldLink Communications, Esewa, X-AGE Tech, Kidzee, Yala Himalayan, Kathmandu Guest House, Red Bull, Styx, Skills Nepal, Third Factor, Prixa Academy, TingTing, and 60+ global brands.
          </p>
        </div>
      </section>

      {/* 3. INTELLIGENT STRATEGY STACKED CARDS */}
      <section className="py-28 bg-[#F5F5F0] border-b border-brand-border">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 space-y-16">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
              OUR METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight uppercase">
              STRATEGIC EXCELLENCE
            </h2>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              { num: '01', title: 'INTELLIGENT STRATEGY', desc: 'We replace guesswork with granular analytics. We research the exact keywords, channels, and user behaviors that drive high quality traffic to your brand.' },
              { num: '02', title: 'ENGAGEMENT FIRST', desc: 'Traffic is useless without trust. We move beyond "reach" to craft authentic, sticky campaigns that turn passive scrollers into loyal brand advocates.' },
              { num: '03', title: 'REVENUE FOCUSED GROWTH', desc: 'We don\'t just report on "likes" - we optimize for conversion. Every strategy is rigorously tested to ensure it turns attention into tangible profit.' }
            ].map((card, cIdx) => (
              <motion.div
                key={cIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: cIdx * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-white p-8 sm:p-12 rounded-3xl border border-brand-border shadow-md space-y-4 text-center transition-all hover:shadow-2xl"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">
                  {card.num} / FOUNDATION
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-black uppercase tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-base text-zinc-600 leading-relaxed font-normal max-w-xl mx-auto">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. BLUE AGENCY GROWTH STATS CONTAINER */}
      <section className="py-24 bg-[#007AFF] text-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-3 p-8 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-md"
            >
              <div className="text-5xl sm:text-7xl font-black tracking-tight block">
                <CountUpNumber end={2} suffix="+" />
              </div>
              <h4 className="text-sm font-extrabold uppercase tracking-widest text-white/90">
                (YEARS OF GROWTH)
              </h4>
              <p className="text-xs sm:text-sm text-white/80 font-normal">
                Mastering the digital landscape to help brands grow and thrive.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-3 p-8 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-md"
            >
              <div className="text-5xl sm:text-7xl font-black tracking-tight block">
                <CountUpNumber end={80} suffix="+" />
              </div>
              <h4 className="text-sm font-extrabold uppercase tracking-widest text-white/90">
                (CAMPAIGNS LAUNCHED)
              </h4>
              <p className="text-xs sm:text-sm text-white/80 font-normal">
                Across diverse industries with a singular focus on measurable results.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-3 p-8 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-md"
            >
              <div className="text-5xl sm:text-7xl font-black tracking-tight block">
                <CountUpNumber end={94} suffix="%" />
              </div>
              <h4 className="text-sm font-extrabold uppercase tracking-widest text-white/90">
                (CLIENT RETENTION)
              </h4>
              <p className="text-xs sm:text-sm text-white/80 font-normal">
                Building real partnerships based on transparency, trust, and mutual success.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 5. THERE'S WORK AND THERE'S PLAY POLAROIDS */}
      <section className="py-28 bg-[#CEE4F6] text-black relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 text-center space-y-16">
          
          <div className="space-y-3 max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              CULTURE & LIFE AT XIPITECHNOLIA®
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-tight text-black">
              THERE'S WORK AND THERE'S PLAY
            </h2>
          </div>

          {/* Scatter Tilt Polaroids with Interactive Hover & Modal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {polaroids.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.08, rotate: 0, y: -12 }}
                onClick={() => setActivePolaroid(p)}
                className={`bg-white p-4 rounded-2xl border-8 border-white shadow-2xl transition-all duration-300 transform ${p.tilt} cursor-pointer group`}
              >
                <div className="relative w-full h-[240px] rounded-xl overflow-hidden mb-3 bg-zinc-100">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="text-xs font-bold text-black uppercase tracking-wider block font-mono">
                  {p.title}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="pt-6">
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-3 bg-black hover:bg-zinc-800 text-white font-extrabold px-8 py-4 rounded-2xl text-xs uppercase tracking-wider shadow-xl transition-all hover:scale-105"
            >
              <span>Join Our Agency Journey</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </div>
      </section>

      {/* POLAROID MODAL PREVIEW */}
      {activePolaroid && (
        <div 
          onClick={() => setActivePolaroid(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-white p-6 rounded-3xl max-w-md w-full space-y-4 text-center border-8 border-white shadow-2xl relative">
            <button
              onClick={() => setActivePolaroid(null)}
              className="absolute top-4 right-4 h-8 w-8 rounded-full bg-zinc-200 text-black flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="h-[300px] w-full rounded-2xl overflow-hidden">
              <img src={activePolaroid.img} alt={activePolaroid.title} className="w-full h-full object-cover" />
            </div>
            <h4 className="text-xl font-bold text-black uppercase">{activePolaroid.title}</h4>
            <p className="text-xs text-zinc-600 font-medium">{activePolaroid.caption}</p>
          </div>
        </div>
      )}

    </div>
  );
}
