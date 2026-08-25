import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Video, Film, PlayCircle, MonitorPlay } from 'lucide-react';

export default function VideoEditing({ onContactClick }) {
  const services = [
    {
      icon: <Video className="h-6 w-6" />,
      title: 'Commercial Editing',
      desc: 'High-impact promotional videos to drive sales and engagement.'
    },
    {
      icon: <Film className="h-6 w-6" />,
      title: 'Corporate Films',
      desc: 'Professional storytelling for your brand, team, and company culture.'
    },
    {
      icon: <PlayCircle className="h-6 w-6" />,
      title: 'Social Media Reels',
      desc: 'Short, snappy, and viral-ready content for TikTok, IG Reels, and Shorts.'
    },
    {
      icon: <MonitorPlay className="h-6 w-6" />,
      title: 'Motion Graphics',
      desc: 'Dynamic animations and effects that bring your ideas to life.'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-black text-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-4 block">
            Video Services
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Cinematic impact. <br/>
            <span className="text-white/40">Scroll-stopping results.</span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
            We transform raw footage into compelling stories. From punchy social media ads to full-scale brand documentaries, we make every frame count.
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
              className="p-8 rounded-3xl border border-white/10 hover:border-brand-red/50 hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-brand-red transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Production Pipeline Section */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <div className="bg-white/5 rounded-3xl p-12 md:p-16 border border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-4 block">
              The Workflow
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Our Production Pipeline
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              A seamless, collaborative process from the first storyboard sketch to the final, rendered frame.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Pre-Production', desc: 'Scripting, storyboarding, and planning the shoot.' },
              { step: '02', title: 'Production', desc: 'Capturing high-quality footage and audio on set.' },
              { step: '03', title: 'Post-Production', desc: 'Editing, color grading, and adding visual effects.' },
              { step: '04', title: 'Final Polish', desc: 'Sound design and exporting for various platforms.' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="text-4xl font-extrabold text-brand-red/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
                {idx !== 3 && (
                  <div className="hidden md:block absolute top-6 right-0 w-full h-[1px] bg-white/10 -z-10 translate-x-1/2"></div>
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
          className="bg-brand-red rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to tell your story?
            </h2>
            <p className="text-white/80 mb-10 max-w-xl mx-auto text-lg">
              Let's create video content that captures attention and drives action.
            </p>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors duration-300 group cursor-pointer"
            >
              Book a Strategy Call
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
