import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Type, BarChart2, MessageSquare, Target, Check, CreditCard, Sparkles, ShieldCheck } from 'lucide-react';
import PaymentModal from './PaymentModal';

export default function ContentMarketing({ onContactClick }) {
  const [paymentModal, setPaymentModal] = useState({
    isOpen: false,
    item: '',
    amount: 12499,
    category: 'Content Marketing Package'
  });

  const handleOpenRazorpay = (itemName, amount) => {
    setPaymentModal({
      isOpen: true,
      item: itemName,
      amount: amount,
      category: 'Content Marketing Services'
    });
  };

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

  const packages = [
    {
      name: 'Starter Content Sprint',
      desc: 'Ideal for early-stage brands looking to establish credibility and publish their first core foundational pieces.',
      amountINR: 12499,
      amountAUD: 249,
      features: [
        '4 Long-Form SEO Articles (1,200+ words each)',
        'Targeted keyword research & meta optimization',
        'Plagiarism-free, 100% human-edited writing',
        '2 Revisions per deliverable',
        'Turnaround in 7 business days'
      ]
    },
    {
      name: 'Growth Content Engine',
      desc: 'Our most popular retainer for businesses wanting steady Google organic rankings and engaging social copy.',
      amountINR: 24999,
      amountAUD: 449,
      popular: true,
      features: [
        '8 Authority Blog Posts & Thought Leadership Pieces',
        'Full Monthly Content Calendar Strategy',
        '16 Social Media Repurposed Snippets / Carousels',
        'Internal Linking & Conversion Architecture',
        'Dedicated Content Strategist & Bi-Weekly Review'
      ]
    },
    {
      name: 'Omnichannel Authority System',
      desc: 'Complete end-to-end editorial powerhouse for scaling brands wanting multi-channel domination.',
      amountINR: 44999,
      amountAUD: 799,
      features: [
        '16 In-Depth Research Papers & SEO Articles',
        '1 High-Ticket Lead Magnet (Whitepaper / Guide)',
        '4 Conversion Email Newsletter Sequences',
        'Distribution Strategy across LinkedIn & Medium',
        'Priority Turnaround & 24/7 Slack/WhatsApp Support'
      ]
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

      {/* Content Marketing Packages with Razorpay Integration */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Online Booking</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
            Transparent Content Packages
          </h2>
          <p className="text-black/60 text-base leading-relaxed">
            Select a package and start your content engine today with seamless Razorpay checkout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                pkg.popular
                  ? 'bg-zinc-950 text-white border-brand-red shadow-2xl relative'
                  : 'bg-white text-black border-brand-border hover:border-black/20 hover:shadow-xl'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-8 bg-brand-red text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl font-black mb-2">{pkg.name}</h3>
                <p className={`text-xs leading-relaxed mb-6 ${pkg.popular ? 'text-zinc-400' : 'text-black/60'}`}>
                  {pkg.desc}
                </p>

                <div className="py-4 border-y border-white/10 mb-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black font-mono">
                      ₹{pkg.amountINR.toLocaleString('en-IN')}
                    </span>
                    <span className={`text-xs ${pkg.popular ? 'text-zinc-400' : 'text-black/50'}`}>
                      (≈ AUD ${pkg.amountAUD})
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold block mt-1">
                    ✓ Instant Razorpay Checkout
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs leading-relaxed">
                      <div className="h-4 w-4 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-2.5 w-2.5" />
                      </div>
                      <span className={pkg.popular ? 'text-zinc-300' : 'text-black/70'}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => handleOpenRazorpay(pkg.name, pkg.amountINR)}
                  className={`w-full py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                    pkg.popular
                      ? 'bg-brand-red hover:bg-brand-red-dark text-white shadow-brand-red/30'
                      : 'bg-black hover:bg-brand-red text-white'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Book & Pay via Razorpay</span>
                </button>
                <button
                  type="button"
                  onClick={onContactClick}
                  className={`w-full py-2 text-xs font-bold transition-colors text-center ${
                    pkg.popular ? 'text-zinc-400 hover:text-white' : 'text-black/60 hover:text-black'
                  }`}
                >
                  Book Free Consultation &rarr;
                </button>
              </div>
            </motion.div>
          ))}
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
              Partner with us to create a content engine that fuels your organic search and customer acquisition.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => handleOpenRazorpay('Custom Content Strategy', 14999)}
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all shadow-lg shadow-brand-red/25 cursor-pointer"
              >
                <CreditCard className="h-4 w-4" />
                Pay & Start via Razorpay (₹14,999)
              </button>
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-brand-red transition-colors duration-300 group cursor-pointer"
              >
                Start Custom Brief
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Razorpay Online Payment Gateway Modal */}
      <PaymentModal
        isOpen={paymentModal.isOpen}
        onClose={() => setPaymentModal(prev => ({ ...prev, isOpen: false }))}
        initialItem={paymentModal.item}
        initialAmount={paymentModal.amount}
        category={paymentModal.category}
        currency="INR"
      />
    </div>
  );
}
