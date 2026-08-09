import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

export default function AboutUs({ onContactClick }) {
  useEffect(() => {
    // Update Meta Title & Description
    document.title = "About Xi Pi Technologia | Digital Marketing Agency in Tricity";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Learn about Xi Pi Technologia, a results-driven digital marketing agency in Tricity helping businesses grow through SEO, performance marketing, PPC, Meta Ads and digital strategies.";
  }, []);

  return (
    <div className="w-full bg-[#FAF9F6] text-black select-none overflow-hidden">
      
      {/* 02. OUR STORY / AGENCY ORIGINS */}
      <section className="py-24 sm:py-32 border-b border-brand-border bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Story Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
                ABOUT OUR JOURNEY
              </span>
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-black leading-[1.08]">
                Where We Started <br />
                <span className="text-black/50">And Where We're Going.</span>
              </h2>
              <div className="space-y-4 text-zinc-600 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Xi Pi Technologia is a digital marketing agency based in the Tricity region, helping businesses build a stronger and more effective digital presence.
                </p>
                <p>
                  We bring together creativity, technology, and data-driven marketing to create digital solutions that are aligned with real business objectives. From startups building their first digital presence to established businesses looking to generate more leads and sales, we develop strategies tailored to their unique needs.
                </p>
                <p className="font-semibold text-black">
                  Our approach is built around transparency, innovation, measurable results, and long-term partnerships.
                </p>
              </div>
            </motion.div>

            {/* Right Side Factual Positioning Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-zinc-900 text-white p-8 sm:p-10 rounded-3xl border border-zinc-800 shadow-xl space-y-8">
                
                {/* OUR FOCUS */}
                <div className="space-y-2 pb-6 border-b border-zinc-800">
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-brand-red shrink-0" />
                    <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-red">
                      OUR FOCUS
                    </span>
                  </div>
                  <p className="text-lg sm:text-xl font-bold text-white pl-8">
                    Customized strategies built around individual business goals.
                  </p>
                </div>

                {/* OUR APPROACH */}
                <div className="space-y-2 pb-6 border-b border-zinc-800">
                  <div className="flex items-center gap-3">
                    <Lightbulb className="h-5 w-5 text-brand-red shrink-0" />
                    <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-red">
                      OUR APPROACH
                    </span>
                  </div>
                  <p className="text-lg sm:text-xl font-bold text-white pl-8">
                    Data-driven marketing combined with creativity and technology.
                  </p>
                </div>

                {/* OUR PRIORITY */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-brand-red shrink-0" />
                    <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-red">
                      OUR PRIORITY
                    </span>
                  </div>
                  <p className="text-lg sm:text-xl font-bold text-white pl-8">
                    Quality leads, stronger conversions, and sustainable growth.
                  </p>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 03. TRUST / RECOGNITION SECTION */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red block">
              OUR COMMITMENT
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Trusted to Build <br className="hidden sm:block" />
              Better Digital Experiences.
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed pt-2">
              We believe successful digital marketing starts with understanding the business behind the brand. That's why we work closely with our clients to understand their goals, audience, challenges, and opportunities before building a strategy.
            </p>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              From SEO and performance marketing to social media, website development, content, and creative design, we provide integrated digital solutions designed to help businesses compete and grow online.
            </p>
          </div>

          {/* Cards for Capabilities/Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {[
              "SEO & ORGANIC GROWTH",
              "PERFORMANCE MARKETING",
              "SOCIAL MEDIA MARKETING",
              "WEB DESIGN & DEVELOPMENT",
              "CONTENT & CREATIVE",
              "ANALYTICS & OPTIMIZATION"
            ].map((title, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-brand-red/50 transition-all duration-300 group"
              >
                <span className="text-[10px] font-extrabold tracking-widest text-brand-red block mb-3">
                  0{idx + 1} / CAPABILITY
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-brand-red transition-colors">
                  {title}
                </h3>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 04. METHODOLOGY / STRATEGIC EXCELLENCE */}
      <section className="py-28 bg-[#F5F5F0] border-b border-brand-border">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
              OUR METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight uppercase">
              Strategic Excellence <br /> Built Around Your Goals.
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed pt-2">
              We don't believe in one-size-fits-all marketing. Every business has different goals, audiences, competitors, and growth opportunities. Our strategies are built around what matters most to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                num: '01 / FOUNDATION',
                title: 'UNDERSTAND THE BUSINESS',
                desc: 'Before creating a strategy, we understand your business, target audience, competition, market, and objectives.',
                tags: 'Business Goals • Audience Research • Competitor Analysis • Market Insights'
              },
              {
                num: '02 / STRATEGY',
                title: 'BUILD THE RIGHT STRATEGY',
                desc: 'We select the right channels and create a customized digital marketing plan based on your business goals and opportunities.',
                tags: 'SEO • PPC • Meta Ads • Social Media • Content • Web'
              },
              {
                num: '03 / EXECUTION',
                title: 'TURN STRATEGY INTO ACTION',
                desc: 'Our team brings the strategy to life through creative campaigns, optimized websites, engaging content, and targeted digital marketing.',
                tags: 'Campaigns • Content • Creative • Website • Paid Advertising'
              },
              {
                num: '04 / OPTIMIZATION',
                title: 'MEASURE & IMPROVE',
                desc: 'We monitor campaign performance, analyze data, and continuously optimize our strategies to improve visibility, leads, conversions, and ROI.',
                tags: 'Analytics • Testing • Optimization • Reporting • Growth'
              }
            ].map((card, cIdx) => (
              <motion.div
                key={cIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: cIdx * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-white p-8 sm:p-10 rounded-3xl border border-brand-border shadow-md space-y-4 flex flex-col justify-between transition-all hover:shadow-2xl"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-red block">
                    {card.num}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100">
                  <span className="text-xs font-bold text-zinc-500 leading-relaxed block">
                    {card.tags}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 05. MISSION & VISION */}
      <section className="py-24 bg-white border-b border-brand-border">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* OUR MISSION */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#FAF9F6] p-8 sm:p-12 rounded-3xl border border-brand-border space-y-4 hover:border-brand-red/40 transition-colors"
            >
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-red block">
                OUR MISSION
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight">
                Helping Businesses Grow Smarter.
              </h3>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Our mission is to help businesses grow through smart, effective, and transparent digital marketing solutions. We focus on increasing online visibility, reaching the right audience, generating quality leads, and improving marketing ROI through creativity, technology, and data-driven strategies.
              </p>
            </motion.div>

            {/* OUR VISION */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-[#FAF9F6] p-8 sm:p-12 rounded-3xl border border-brand-border space-y-4 hover:border-brand-red/40 transition-colors"
            >
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-red block">
                OUR VISION
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight">
                Building Long-Term Digital Success.
              </h3>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Our vision is to become a trusted digital marketing company that helps businesses achieve sustainable growth through innovative and result-driven strategies. We aim to build lasting client relationships by combining creativity, technology, transparency, and continuous improvement.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 06. WHY XI PI TECHNOLOGIA? */}
      <section className="py-28 bg-[#101010] text-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red block">
              WHY XI PI TECHNOLOGIA
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              More Than a Marketing Agency. <br />
              <span className="text-brand-red">A Growth Partner.</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed pt-2">
              We don't simply execute campaigns. We work with businesses to understand their challenges, identify opportunities, and build digital strategies designed around measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                num: '01 —',
                title: 'Customized Strategies',
                desc: 'Every strategy is tailored to your business goals, audience, industry, and market.'
              },
              {
                num: '02 —',
                title: 'Results-Focused',
                desc: 'We focus beyond traffic and impressions, prioritizing leads, conversions, and meaningful business growth.'
              },
              {
                num: '03 —',
                title: 'Data-Driven Decisions',
                desc: 'Campaigns and strategies are continuously evaluated using analytics, research, and performance data.'
              },
              {
                num: '04 —',
                title: 'Transparent Communication',
                desc: 'Regular updates and clear reporting keep you informed about your digital marketing performance.'
              },
              {
                num: '05 —',
                title: 'Complete Digital Solutions',
                desc: 'SEO, PPC, Meta Ads, Social Media, Content, Website Development, Graphic Design, and Analytics under one roof.'
              },
              {
                num: '06 —',
                title: 'Technology & Innovation',
                desc: 'We adopt modern digital tools, AI-powered technologies, and automation to make marketing smarter and more efficient.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-zinc-900/90 border border-zinc-800 p-8 rounded-3xl space-y-3 hover:border-brand-red/50 transition-colors"
              >
                <span className="text-xs font-black text-brand-red tracking-widest block">
                  {item.num}
                </span>
                <h4 className="text-xl font-extrabold text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 07. FINAL CTA */}
      <section className="py-28 bg-brand-red text-white relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 text-center space-y-8 relative z-10">
          
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/80 block">
            LET'S BUILD SOMETHING THAT GROWS
          </span>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Your Business Has Potential. <br />
            Let's Take It Further.
          </h2>

          <p className="text-white/90 text-base sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Whether you're building a brand from scratch or looking to scale an established business, Xi Pi Technologia can help you create a stronger digital presence and turn more opportunities into customers.
          </p>

          <div className="pt-4">
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-3 bg-white hover:bg-zinc-100 text-black font-extrabold px-10 py-5 rounded-2xl text-xs uppercase tracking-wider shadow-2xl transition-all hover:scale-105"
            >
              <span>GET A FREE CONSULTATION →</span>
            </button>
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 pt-6">
            SEO • Performance Marketing • Meta Ads • Social Media • Web Development
          </p>

        </div>
      </section>

    </div>
  );
}

