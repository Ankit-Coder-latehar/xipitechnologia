import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PenTool, Palette, Image as ImageIcon, Layers } from 'lucide-react';

export default function GraphicDesign({ onContactClick }) {
  const services = [
    {
      icon: <PenTool className="h-6 w-6" />,
      title: 'Logo & Identity',
      desc: 'Distinctive visual identities that capture your brand essence.'
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'Brand Guidelines',
      desc: 'Comprehensive rules to keep your branding consistent everywhere.'
    },
    {
      icon: <ImageIcon className="h-6 w-6" />,
      title: 'Marketing Collateral',
      desc: 'Stunning brochures, flyers, and digital assets.'
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: 'UI/UX Design',
      desc: 'Engaging user interfaces focused on conversion and usability.'
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
            Creative Services
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-6 leading-[1.1]">
            Design that speaks <br/>
            <span className="text-black/30">louder than words.</span>
          </h1>
          <p className="text-lg text-black/60 leading-relaxed max-w-2xl">
            We create visually stunning, purposeful designs that communicate your brand's unique value and captivate your audience at first glance.
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
              className="p-8 rounded-3xl border border-brand-border hover:border-brand-red/30 hover:shadow-2xl hover:shadow-brand-red/5 transition-all duration-300 group bg-white"
            >
              <div className="h-14 w-14 rounded-2xl bg-brand-gray flex items-center justify-center text-black mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
              <p className="text-black/60 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Process Section */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <div className="bg-brand-gray/50 rounded-3xl p-12 md:p-16 border border-brand-border">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-4 block">
              How We Work
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6">
              Our Design Process
            </h2>
            <p className="text-black/60 text-lg leading-relaxed">
              We follow a proven methodology to ensure that every pixel serves a purpose and aligns perfectly with your brand's vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your brand, audience, and goals.' },
              { step: '02', title: 'Concept', desc: 'Brainstorming and sketching initial design directions.' },
              { step: '03', title: 'Refinement', desc: 'Polishing designs based on your valuable feedback.' },
              { step: '04', title: 'Delivery', desc: 'Providing final assets in all necessary formats.' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="text-4xl font-extrabold text-brand-red/20 mb-4">{item.step}</div>
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
          className="bg-black rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to elevate your brand?
            </h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto text-lg">
              Let's create a visual identity that sets you apart from the competition.
            </p>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors duration-300 group cursor-pointer"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
