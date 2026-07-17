import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Compass, Cpu, Target, Award, Users, Heart, ArrowRight } from 'lucide-react';

// CountUp helper component
function CountUp({ end, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

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
    <span ref={ref} className="font-display font-extrabold text-5xl sm:text-6xl text-black">
      {count}{suffix}
    </span>
  );
}

const values = [
  {
    icon: Compass,
    title: 'Creative Obsession',
    desc: 'We do not follow design templates. We create custom grid spaces, bespoke branding palettes, and unique typography guides that define categories.'
  },
  {
    icon: Cpu,
    title: 'Full-Stack Performance',
    desc: 'Our code is clean and fast. We build on React/Next.js and optimize code lines to guarantee a perfect 100 on Google PageSpeed audits.'
  },
  {
    icon: Target,
    title: 'Data Attribution',
    desc: 'Design must serve business metrics. We audit every scroll position, click coordinate, and paid ad dollar to scale your customer acquisitions.'
  }
];

const team = [
  {
    name: 'Alex Mercer',
    role: 'Creative Director',
    motto: '"Obsessed with absolute visual symmetry."',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Elena Rostova',
    role: 'Head of Engineering',
    motto: '"Performance is the ultimate user experience."',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Marcus Vance',
    role: 'Director of Growth',
    motto: '"Attributing design choices directly to ROI."',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  }
];

export default function AboutUs() {
  const introRef = useRef(null);
  
  // Track scroll for Karaoke Text Reveal
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start 80%", "end 60%"]
  });

  const progressPercent = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="agency" className="py-28 bg-[#FAF9F6] border-t border-brand-border scroll-mt-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* 1. KARAOKE STATEMENT */}
        <div className="max-w-4xl mb-24">
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-6 select-none">
            Agency Philosophy
          </span>
          <div ref={introRef} className="block">
            <motion.p
              style={{ '--progress': progressPercent }}
              className="karaoke-text text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-relaxed sm:leading-loose text-left"
            >
              We design and construct digital products that solve complex user problems. By merging raw creative vision with structured, conversion-driven layouts, we enable brands to build authority and experience explosive digital growth.
            </motion.p>
          </div>
        </div>

        {/* 2. STATS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-t border-b border-brand-border/60 mb-24">
          <div className="space-y-2">
            <CountUp end={300} suffix="+" />
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-black/40">Successful Launches</h4>
            <p className="text-xs sm:text-sm text-black/60 font-normal">Delivering premium web layouts and high-performance branding solutions.</p>
          </div>
          <div className="space-y-2">
            <CountUp end={10} suffix=" Years" />
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-black/40">Industry Experience</h4>
            <p className="text-xs sm:text-sm text-black/60 font-normal">Innovating from our physical agency studio in New York City.</p>
          </div>
          <div className="space-y-2">
            <CountUp end={9} suffix=".8" />
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-black/40">Average NPS Score</h4>
            <p className="text-xs sm:text-sm text-black/60 font-normal">Verifying our design quality and strict project delivery timelines.</p>
          </div>
        </div>

        {/* 3. CORE VALUES BENTO LIST */}
        <div className="space-y-12 mb-28">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red select-none">
              Core Principles
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight mt-2">
              Values that guide our design strategy.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-brand-border rounded-3xl p-8 space-y-4 hover:border-brand-red/35 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="h-10 w-10 rounded-xl bg-brand-gray text-black border border-brand-border flex items-center justify-center group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-300 shadow-sm">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold text-black group-hover:text-brand-red transition-colors duration-200">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-black/60 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. INTERACTIVE TEAM SHOWCASE */}
        <div className="space-y-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red select-none">
              Our Studio Team
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight mt-2">
              Minds obsessed with perfection.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((person, idx) => (
              <div 
                key={idx}
                className="group relative rounded-3xl border border-brand-border bg-white p-4 shadow-sm overflow-hidden flex flex-col justify-between hover:border-brand-red/30 hover:shadow-md transition-all duration-300"
              >
                {/* Photo frame */}
                <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-brand-gray">
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-103 transition-all duration-700 ease-out"
                  />
                  {/* Motto gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-xs sm:text-sm font-serif italic leading-relaxed">
                      {person.motto}
                    </p>
                  </div>
                </div>

                {/* Name details */}
                <div className="flex justify-between items-center mt-4 px-1 pb-1">
                  <div className="space-y-0.5">
                    <h4 className="text-base font-bold text-black group-hover:text-brand-red transition-colors duration-200">
                      {person.name}
                    </h4>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-black/40">
                      {person.role}
                    </span>
                  </div>
                  <div className="h-8 w-8 rounded-full border border-brand-border bg-brand-gray flex items-center justify-center text-black/40 group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-colors duration-200 shadow-sm">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
