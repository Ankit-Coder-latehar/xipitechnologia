import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Type, BarChart2, MessageSquare, Target } from 'lucide-react';

export default function ContentMarketing({ onContactClick }) {
  const services = [
    {
      icon: <Type className="h-6 w-6" />,
      title: 'Copywriting',
      desc: 'Persuasive, conversion-optimized copy for ads, landing pages, and email.'
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'Blog & Article Writing',
      desc: 'SEO-driven articles that build authority and drive organic traffic.'
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: 'Content Strategy',
      desc: 'Data-backed planning to ensure your content reaches the right audience.'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Lead Generation',
      desc: 'E-books, whitepapers, and resources designed to capture high-quality leads.'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-4 block">
            Content Marketing
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-6 leading-[1.1]">
            Words that work. <br/>
            <span className="text-black/30">Stories that sell.</span>
          </h1>
          <p className="text-lg text-black/60 leading-relaxed max-w-2xl">
            We craft compelling narratives that resonate with your audience, build trust, and ultimately drive profitable customer action. 
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl border border-brand-border hover:border-black/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-300 group bg-white"
            >
              <div className="h-14 w-14 rounded-2xl bg-brand-gray flex items-center justify-center text-black mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
              <p className="text-black/60 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strategy Framework Section */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <div className="bg-brand-gray/30 rounded-3xl p-12 md:p-16 border border-brand-border">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-4 block">
              Our Framework
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6">
              The Content Engine
            </h2>
            <p className="text-black/60 text-lg leading-relaxed">
              We don't just write words; we build scalable systems that generate leads and build authority over time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Audit & Research', desc: 'Analyzing competitors and identifying keyword gaps.' },
              { step: '02', title: 'Strategic Planning', desc: 'Developing a content calendar aligned with goals.' },
              { step: '03', title: 'Creation & SEO', desc: 'Writing engaging, optimized copy that ranks well.' },
              { step: '04', title: 'Distribution', desc: 'Amplifying content across social and email channels.' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="text-4xl font-extrabold text-black/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-black/60 leading-relaxed text-sm">{item.desc}</p>
                {idx !== 3 && (
                  <div className="hidden md:block absolute top-6 right-0 w-full h-[1px] bg-brand-border -z-10 translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-gray rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden border border-brand-border"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
              Ready to scale your content?
            </h2>
            <p className="text-black/60 mb-10 max-w-xl mx-auto text-lg">
              Partner with us to create a content engine that fuels your growth.
            </p>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-brand-red transition-colors duration-300 group cursor-pointer"
            >
              Start Your Strategy
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
