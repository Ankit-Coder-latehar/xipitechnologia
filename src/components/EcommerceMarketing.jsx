import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, ShieldCheck, Zap, ArrowRight, ArrowLeft, ArrowUpRight, Sparkles, 
  CheckCircle2, Star, Layers, Cpu, CreditCard, ChevronDown, ChevronUp, Check, X,
  Globe, Code, Server, TrendingUp, RefreshCw, BarChart2, Heart, Award, Lock, ExternalLink,
  Search, Share2, Megaphone, FileText, Target, LineChart, MapPin
} from 'lucide-react';

export default function EcommerceMarketing({ onContactClick }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
    interests: ['Ecommerce SEO', 'Google Ads'],
    budget: 'from $10,000 to $25,000'
  });
  const [budgetDropdownOpen, setBudgetDropdownOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const budgetOptions = [
    'up to $5,000',
    'from $5,000 to $10,000',
    'from $10,000 to $25,000',
    'from $25,000 to $50,000',
    'over $50,000'
  ];

  const handleInterestToggle = (item) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(item)
        ? prev.interests.filter(i => i !== item)
        : [...prev.interests, item]
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectDetails: '',
        interests: ['Ecommerce SEO', 'Google Ads'],
        budget: 'from $10,000 to $25,000'
      });
    }, 4000);
  };

  const strategyBenefits = [
    'Increase website traffic',
    'Improve online visibility',
    'Reach the right target audience',
    'Generate product enquiries and sales',
    'Build brand awareness',
    'Improve customer engagement',
    'Increase repeat purchases'
  ];

  const services = [
    {
      title: 'Ecommerce SEO',
      icon: <Search className="h-6 w-6 text-amber-400" />,
      desc: 'We improve ecommerce websites so they can rank better in search results. Our SEO services include finding the right keywords, improving product pages, fixing technical issues, creating better content, and building quality links.'
    },
    {
      title: 'Social Media Marketing',
      icon: <Share2 className="h-6 w-6 text-amber-400" />,
      desc: 'Social media platforms can help ecommerce businesses showcase products and connect with potential customers. Xi Pi Technologia creates and promotes engaging content to improve brand awareness and audience engagement.'
    },
    {
      title: 'Google Ads and Paid Marketing',
      icon: <Megaphone className="h-6 w-6 text-amber-400" />,
      desc: 'Paid advertising can help ecommerce businesses reach potential customers quickly. We create targeted campaigns based on products, audience, location, and business objectives.'
    },
    {
      title: 'Content Marketing',
      icon: <FileText className="h-6 w-6 text-amber-400" />,
      desc: 'Useful and engaging content can help customers understand your products and make informed buying decisions. We develop content that supports your brand and marketing goals.'
    },
    {
      title: 'Product Promotion',
      icon: <Target className="h-6 w-6 text-amber-400" />,
      desc: 'We help businesses promote their products across suitable digital channels. The strategy can include product-focused campaigns, promotional content, social media campaigns, and search marketing.'
    },
    {
      title: 'Conversion Rate Optimization',
      icon: <TrendingUp className="h-6 w-6 text-amber-400" />,
      desc: 'Getting website visitors is only one part of ecommerce growth. We also focus on improving the customer journey so that more visitors can become buyers.'
    },
    {
      title: 'Analytics and Reporting',
      icon: <LineChart className="h-6 w-6 text-amber-400" />,
      desc: 'We track important marketing performance indicators to understand what is working and where improvements are needed. Regular reporting helps businesses make better marketing decisions.'
    }
  ];

  const keyBenefits = [
    'Customized marketing strategies',
    'Focus on business and sales goals',
    'SEO-friendly content and campaigns',
    'Multi-channel marketing',
    'Regular performance monitoring',
    'Transparent communication',
    'Strategies suitable for different ecommerce businesses'
  ];

  const faqs = [
    {
      q: '1. What is ecommerce marketing?',
      a: 'Ecommerce marketing is the promotion of an online store and its products through channels such as search engines, social media, paid advertising, email, and content marketing.'
    },
    {
      q: '2. Why is ecommerce marketing important?',
      a: 'Ecommerce marketing helps online businesses attract potential customers, increase website traffic, improve brand visibility, and generate more sales.'
    },
    {
      q: '3. What ecommerce marketing services does Xi Pi Technologia offer?',
      a: 'Xi Pi Technologia offers ecommerce SEO, social media marketing, Google Ads, content marketing, product promotion, conversion optimization, and performance tracking.'
    },
    {
      q: '4. Do you provide ecommerce marketing services in Tricity?',
      a: 'Yes. Xi Pi Technologia provides ecommerce marketing services in Tricity, covering businesses in Chandigarh, Mohali, and Panchkula.'
    },
    {
      q: '5. Can ecommerce marketing help increase sales?',
      a: 'Yes. A well-planned ecommerce marketing strategy can bring relevant visitors to your website and improve the chances of converting them into customers. Results depend on factors such as the product, market, competition, website, pricing, and marketing strategy.'
    },
    {
      q: '6. Is SEO important for an ecommerce website?',
      a: 'Absolutely. Ecommerce SEO can help product and category pages appear in relevant search results, making it easier for potential customers to discover your products organically.'
    },
    {
      q: '7. Do you provide paid advertising for ecommerce businesses?',
      a: 'Definitely. Paid advertising can be used to promote products and reach targeted audiences through suitable advertising platforms.'
    },
    {
      q: '8. How long does ecommerce marketing take to show results?',
      a: 'The timeline depends on the marketing channels used. SEO generally requires consistent effort over time, while paid advertising can generate traffic more quickly. Long-term results usually require continuous optimization.'
    },
    {
      q: '9. Can you market a new ecommerce website?',
      a: 'Yes. A new ecommerce website can benefit from a combination of SEO, paid advertising, social media, content marketing, and other digital strategies.'
    },
    {
      q: '10. How can I get started with Xi Pi Technologia?',
      a: 'You can contact Xi Pi Technologia to discuss your ecommerce business, target audience, products, and marketing goals. Based on your requirements, a suitable ecommerce marketing strategy can be planned.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans select-none overflow-x-hidden pt-20">
      
      {/* Background Lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-amber-500/10 via-brand-red/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative pt-24 pb-20 border-b border-white/10 overflow-hidden">
        {/* Background Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10">
          <span className="text-[14vw] font-black leading-none text-transparent tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}>
            ECOMMERCE
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8 space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 text-amber-400 px-4 py-1.5 rounded-full text-xs font-black tracking-[0.3em] uppercase">
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                ECOMMERCE MARKETING SERVICE
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
                Ecommerce Marketing Service <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-brand-red">
                  by Xi Pi Technologia
                </span>
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-white/90 italic">
                Xi Pi Technologia — We Market, You Grow.
              </p>

              <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal pt-2 max-w-2xl">
                <p>
                  In today’s competitive online market, having an ecommerce website is not enough. 
                  Businesses need the right marketing strategy to attract visitors, build trust, and 
                  convert visitors into customers. Xi Pi Technologia provides professional 
                  ecommerce marketing solutions to help businesses improve their online visibility 
                  and grow their sales.
                </p>
                <p>
                  Our team uses different digital marketing techniques to promote ecommerce brands 
                  and connect them with potential customers. From SEO and social media to paid 
                  advertising and content marketing, we focus on strategies that support your business 
                  goals.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={onContactClick}
                  className="group relative inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider shadow-xl shadow-brand-red/25 transition-all hover:scale-105 cursor-pointer"
                >
                  <span>Start Marketing Your Store</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onContactClick}
                  className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-extrabold rounded-full text-xs uppercase tracking-wider hover:border-amber-400/50 hover:bg-white/5 transition-all cursor-pointer"
                >
                  <span>Discuss Your Business</span>
                </button>
              </div>
            </motion.div>

            {/* Right Card Highlight */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 bg-[#0D0D0F] p-8 rounded-3xl border border-white/10 space-y-6 shadow-2xl"
            >
              <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase block border-b border-white/10 pb-3">
                XI PI ADVANTAGE
              </span>
              <div className="space-y-4 text-xs text-zinc-300">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                  <span className="font-semibold text-white">Full-Funnel Commerce</span>
                  <span className="text-amber-400 font-mono">End-to-End</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                  <span className="font-semibold text-white">Service Location</span>
                  <span className="text-amber-400 font-mono">Tricity & Pan-India</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                  <span className="font-semibold text-white">Growth Engine</span>
                  <span className="text-amber-400 font-mono">Traffic & Conversion</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. WHAT IS ECOMMERCE MARKETING? */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10 bg-[#07070a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
              UNDERSTANDING THE IMPACT
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              What is Ecommerce Marketing?
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              Ecommerce marketing is the process of promoting an online store, products, and 
              services through digital channels. It includes SEO, social media marketing, paid 
              advertising, email marketing, content creation, and other strategies designed to bring 
              customers to an ecommerce website and encourage them to make a purchase.
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-4">
              A good ecommerce marketing strategy can help businesses:
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {strategyBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="flex items-center gap-3.5 p-5 rounded-2xl bg-[#0D0D0F] border border-white/10 hover:border-amber-400/40 transition-all"
              >
                <div className="h-7 w-7 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-white">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. SERVICES OFFERED BY XI PI TECHNOLOGIA */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Services offered by Xi Pi Technologia
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              At Xi Pi Technologia, we offer a complete range of ecommerce marketing services based on 
              one’s business requirements. We provide a range of ecommerce marketing solutions, 
              including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="p-8 rounded-3xl bg-[#0D0D0F] border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-amber-400/10 transition-colors">
                    {srv.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {srv.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. ECOMMERCE MARKETING SERVICES IN TRICITY */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10 bg-[#07070a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="bg-gradient-to-br from-[#0D0D0F] via-black to-[#0D0D0F] p-8 sm:p-14 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400 flex items-center gap-2">
                <MapPin className="h-4 w-4" /> REGIONAL FOCUS
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
                Ecommerce Marketing Services in Tricity
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                <p>
                  Businesses looking for ecommerce marketing services in Tricity can work with Xi 
                  Pi Technologia to develop a focused digital marketing strategy. We help businesses 
                  in Chandigarh, Mohali, and Panchkula strengthen their online presence and reach 
                  potential customers.
                </p>
                <p>
                  Whether you are launching a new ecommerce store or looking to improve an existing 
                  online business, our team can create a marketing strategy based on your goals and 
                  target audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. WHY CHOOSE XI PI TECHNOLOGIA FOR ECOMMERCE MARKETING? */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
          
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
              OUR ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Why Choose Xi Pi Technologia for Ecommerce Marketing?
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-amber-300">
              Grow Your Online Store with Xi Pi Technologia
            </h3>
            <div className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              <p>
                A strong digital presence can help your ecommerce business reach more customers 
                and compete effectively in the online market. With the right ecommerce marketing 
                strategy, consistent promotion, and continuous optimization, your online store can 
                build greater visibility and create more opportunities for growth.
              </p>
              <p>
                If you are searching for reliable ecommerce marketing services in Tricity, Xi Pi 
                Technologia can help you create a focused marketing strategy for your ecommerce 
                business. Choosing the right digital marketing partner can make a significant 
                difference to your ecommerce growth. Xi Pi Technologia focuses on practical 
                strategies, consistent optimization, and measurable marketing activities.
              </p>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white pt-2">
              Our key benefits include:
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="p-6 rounded-2xl bg-[#0D0D0F] border border-white/10 hover:border-brand-red/40 transition-all flex items-start gap-4"
              >
                <div className="h-6 w-6 rounded-full bg-brand-red flex items-center justify-center text-white shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-white">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. INTERACTIVE PROJECT CONFIGURATOR FORM */}
      {/* ------------------------------------------------------------- */}
      <section id="quote" className="py-24 bg-[#050507] border-b border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          
          <div className="p-8 sm:p-14 rounded-3xl bg-[#0D0D0F] border border-white/10 space-y-8 shadow-2xl">
            
            <div className="text-center space-y-3">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">
                START YOUR PROJECT
              </span>
              <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Get Started with Xi Pi Technologia
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
                Tell us about your ecommerce store, marketing requirements, and goals to get a tailored marketing proposal.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Proposal Request Received!</h4>
                <p className="text-xs text-zinc-300">
                  Thank you, <strong className="text-white">{formData.name}</strong>. An ecommerce marketing specialist will review your inquiry and email you at <strong className="text-white">{formData.email}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Your Name*</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Vance"
                      className="w-full bg-black/60 border border-white/10 focus:border-amber-400 rounded-xl px-4 py-3 text-xs text-white outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Your Email*</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@brand.com"
                      className="w-full bg-black/60 border border-white/10 focus:border-amber-400 rounded-xl px-4 py-3 text-xs text-white outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Project Details</label>
                  <textarea
                    rows={3}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Tell us about your online store, products, monthly sales, or marketing objectives..."
                    className="w-full bg-black/60 border border-white/10 focus:border-amber-400 rounded-xl px-4 py-3 text-xs text-white outline-none resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">I am interested in...</span>
                  <div className="flex flex-wrap gap-2">
                    {['Ecommerce SEO', 'Social Media Marketing', 'Google Ads', 'Content Marketing', 'Product Promotion', 'CRO', 'Analytics'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleInterestToggle(item)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                          formData.interests.includes(item)
                            ? 'bg-amber-400 text-black border-amber-400'
                            : 'bg-black/40 text-zinc-400 border-white/10 hover:border-white/30'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 relative">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">Monthly Budget Range</span>
                  <button
                    type="button"
                    onClick={() => setBudgetDropdownOpen(!budgetDropdownOpen)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 flex justify-between items-center text-xs font-bold text-white cursor-pointer"
                  >
                    <span>{formData.budget}</span>
                    <ChevronDown className={`h-4 w-4 text-zinc-400 transition-transform ${budgetDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {budgetDropdownOpen && (
                    <div className="absolute left-0 right-0 z-20 mt-1 bg-zinc-900 border border-white/10 rounded-xl shadow-xl overflow-hidden py-1">
                      {budgetOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, budget: opt });
                            setBudgetDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-xs font-bold hover:bg-white/5 cursor-pointer ${
                            formData.budget === opt ? 'text-amber-400' : 'text-zinc-300'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-extrabold py-4 rounded-full text-xs uppercase tracking-wider transition-all shadow-xl shadow-brand-red/25 cursor-pointer"
                >
                  Request Ecommerce Marketing Proposal
                </button>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-t border-white/10 bg-[#07070a]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#0D0D0F] rounded-2xl border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 shrink-0 text-amber-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 shrink-0 text-zinc-400" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal border-t border-white/5 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
