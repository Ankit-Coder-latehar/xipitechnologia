import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Star, ArrowRight, ArrowLeft, ArrowUpRight, Sparkles, Layout,
  Smartphone, Code, ShieldCheck, Landmark, BookOpen, MousePointer, 
  ShoppingCart, Activity, Compass, Cpu, Target, Heart, CheckCircle2, ChevronDown,
  Award, Shield, HelpCircle
} from 'lucide-react';

export default function Branding({ onContactClick }) {
  // 1. Shiftbox Carousel State
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const projects = [
    {
      id: '01',
      title: 'Symphony Sleep® Branding & Packaging',
      category: ['Branding', 'Visual Identity', 'Typography', 'Packaging Design'],
      desc: 'Complete identity, mattress packaging, and global brand guidelines for Symphony Sleep. Focused on clinical sleeping comfort with a premium aesthetic.',
      accent: 'from-[#0B5CFF] to-[#8E2A59]',
      tags: ['Corporate Identity', 'Bed Packaging', 'Asset Kit']
    },
    {
      id: '02',
      title: 'IvyWise Education Consultancy Rebrand',
      category: ['Branding', 'Brand Collateral', 'Graphic Design', 'Corporate Identity'],
      desc: 'Studio/Agency Gold Winner in Brand Identity. Re-engineered visual materials, corporate marks, and print deliverables for a premium educational consultancy.',
      accent: 'from-[#E3544D] to-[#8E2A59]',
      tags: ['Gold Winner', 'Stationery', 'Typography']
    },
    {
      id: '03',
      title: 'VALE Real Estate Branding & Website',
      category: ['Branding', 'Web Design', 'Real Estate', '3D Design'],
      desc: 'Elegant real estate developer identity combining luxury serif typography with interactive real estate modules.',
      accent: 'from-[#D4AF37] to-[#111111]',
      tags: ['Luxury Brand', 'Real Estate', 'Logo Kit']
    },
    {
      id: '04',
      title: 'PlumBuddy Industrial Branding & Website',
      category: ['Branding', 'Graphic Design', 'Industrial', 'Web Design'],
      desc: 'Modern and robust rebranding for a key commercial contractor. Clean block grids, technical assets, and high-impact identity tools.',
      accent: 'from-[#1A1A1A] to-[#6E6E6E]',
      tags: ['Industrial Brand', 'Web Systems', 'Icons Kit']
    },
    {
      id: '05',
      title: 'WillowWood Global Medical Branding',
      category: ['Branding', 'Brand Collateral', '3D Design', 'Motion Graphics', 'Web Design'],
      desc: 'Rebranding WillowWood prosthetic solutions at Hanger Live. 3D packaging designs, clinical assets, and compliant system style-sheets.',
      accent: 'from-[#007EA7] to-[#00A8E8]',
      tags: ['Healthcare', 'Anthem Winner', 'Compliance']
    },
    {
      id: '06',
      title: 'Modern Dose Supplements Branding & Packaging',
      category: ['Branding', 'Packaging Design', 'Beauty', 'Graphic Design'],
      desc: 'High-end supplement bottle and jar design, combining pastel palettes with minimalist typography to appeal to wellness consumers.',
      accent: 'from-[#F78DA7] to-[#abb8c3]',
      tags: ['Wellness', 'Bottle Prints', 'Box Design']
    },
    {
      id: '07',
      title: '(US) Haircare Beauty Branding & Packaging',
      category: ['Branding', 'Packaging Design', 'Beauty', 'Web Design'],
      desc: 'Award-winning eco-friendly hair care tube packaging design. Dynamic color swatches and sustainable brand positioning strategy.',
      accent: 'from-[#00D47C] to-[#0B5CFF]',
      tags: ['Sustainability', 'Tube Design', 'Retail Assets']
    }
  ];

  const handleNextProject = () => {
    setActiveProjectIdx((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrevProject = () => {
    setActiveProjectIdx((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  // 2. 12-Step Process Accordion State
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const brandingSteps = [
    {
      title: '1. Audit & Discovery',
      desc: 'We begin by performing an audit of your current brand to understand the pillars of your company. We look for areas of improvement, sources of untapped potential, and really dig at what makes you unique among your competitors.'
    },
    {
      title: '2. Market Research',
      desc: 'We gain insight into your brand’s position through comprehensive market research, in turn understanding your competitive environment and target audience. This process allows us to explore your industry and find new streams of customers.'
    },
    {
      title: '3. Visual Review & Brainstorming',
      desc: 'We hold a visual review of the most relevant and successful modern practices and brainstorm ideas – features, designs, angles, and products. Our goal is not simply to be trendy but to capitalize on the right opportunities for your brand to flourish.'
    },
    {
      title: '4. Concept Direction',
      desc: 'In our concept phase, we define the direction and purpose of your new brand. We work with you to set emotional standards and guidelines that set up your brand for success. Whether you want to reach new audiences, create credibility or simply build awareness.'
    },
    {
      title: '5. Verbal Identity',
      desc: 'Next, we assemble the ideal tools to help you establish your brand. We formulate a language and verbal identity that beams with personality. Instituting these structures helps your team stay on-brand and web appropriate.'
    },
    {
      title: '6. Metric Optimization',
      desc: 'We identify matches between your brand positioning and customer needs, designing all the tools for you to attract your target audience. We develop metrics that measure brand interaction and consumer behavior to prepare your team for the future.'
    },
    {
      title: '7. Brand Identity Design',
      desc: 'During the Design phase, we strengthen your big idea to produce the most robust brand identity. We create a frame of reference that reflects your brand positioning and makes room for market adoption and scaling.'
    },
    {
      title: '8. Prototyping & Concept Testing',
      desc: 'A successful brand launch requires rigorous scrutiny to be impactful. We create prototypes and survey them on your target audience, examining how it is perceived. We check for any missed opportunities or weaknesses to ensure your brand is foolproof.'
    },
    {
      title: '9. Asset Extension',
      desc: 'Once the major design tasks are completed, we begin applying the new brand to specific assets of your business. Working with feedback from the Concept Testing, we build upon existing and new assets to capitalize on the brand identity potential.'
    },
    {
      title: '10. Brand Message & Voice',
      desc: 'Our designers will create assets that speak to your brand essence. We provide you with the tools to create engaging, authentic messages for the marketplace that portray your personality and tone. Consistency of your brand across all assets is key.'
    },
    {
      title: '11. Brand Standards Guide',
      desc: 'We coordinate with your team to establish clear-cut guidelines that provide a foundation for your branding efforts. Foreshadowing your future projects, our protocol ensures your products remain effective and attractive to your customers across various types of media.'
    },
    {
      title: '12. Transition & Launch',
      desc: 'The launch of a new brand is always the most exciting. We help streamline your transition by working with our web design & UI/UX teams to train your team about usage rules and measurement metrics, handing you the keys to your improved identity.'
    }
  ];

  // 3. Creative Services Toggle Panel State
  const [activeServiceIdx, setActiveServiceIdx] = useState(1); // Default to Branding
  const creativeServices = [
    {
      title: 'Web Design',
      tags: ['Landing', 'Brochure Site', 'Corporate Website', 'E-Commerce', 'Web 3.0', 'UI/UX Design'],
      desc: 'We create world-class websites using modern design practices. Mobile-first websites and web experiences are essential to the success of your web project. While maintaining bespoke originality, our team will focus on responsive design and optimize your website for any device.'
    },
    {
      title: 'Branding',
      tags: ['Corporate', 'Beauty', 'F&B', 'Web 3.0', 'Hospitality', 'Re-Branding'],
      desc: 'Our branding team will excel at presenting your business in its best light. Whether you’re looking to attract a new set of eyes, rekindle an old client base, or simply refine your business’s identity - our creatives will formulate the optimal corporate identity, collateral designs, and brand guidelines.'
    },
    {
      title: 'Graphic Design',
      tags: ['Print Graphics', 'Conference Event Branding', 'Deck Designs', 'Digital Brand Collateral', 'Social Media Designs'],
      desc: 'Our innovative graphic design team will create the digital and print designs for your project. Having both startup and enterprise experience, our designers consider differing execution and audience demographics when designing a pixel-perfect graphic.'
    },
    {
      title: 'Packaging Design',
      tags: ['Consumer Good Packaging', 'Merchandise Packaging', 'Beverage Packaging', 'Startup Product Packaging'],
      desc: 'Experienced with top-grade packaging design for a wide range of products from consumer goods to startup ideas. Your packaging design will exceed all expectations with fresh yet pragmatic design ideas realistic to produce by the creatives at Xipitechnologia.'
    },
    {
      title: 'Video Production',
      tags: ['Corporate Video Production', 'Event Video Production', 'Promotional Videos', 'Post-Production & Editing'],
      desc: 'Xipitechnologia specializes in video production in Manhattan, our talented team leverages over 30 years of combined experience working with advertising agencies and brands to create exceptional visual narratives and visual storytelling.'
    }
  ];

  // 4. Custom Outbound Quote Module State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
    interests: ['Branding'],
    budget: 'from $25,000 to $50,000'
  });
  const [budgetDropdownOpen, setBudgetDropdownOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const budgetOptions = [
    'up to $10,000',
    'from $10,000 to $25,000',
    'from $25,000 to $50,000',
    'from $50,000 to $100,000',
    'over $100,000'
  ];

  const handleInterestToggle = (interest) => {
    setFormData(prev => {
      const exists = prev.interests.includes(interest);
      if (exists) {
        return { ...prev, interests: prev.interests.filter(i => i !== interest) };
      } else {
        return { ...prev, interests: [...prev.interests, interest] };
      }
    });
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
        interests: ['Branding'],
        budget: 'from $25,000 to $50,000'
      });
    }, 4000);
  };

  return (
    <div className="bg-white min-h-screen text-black overflow-hidden pt-20 select-none font-sans">
      
      {/* 1. HERO SECTION WITH INTERSECTING RED GRIDLINES */}
      <section className="relative py-24 border-b border-brand-border bg-white overflow-hidden">
        
        {/* Absolute intersecting gridlines */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Vertical lines */}
          <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-brand-border/60" />
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-brand-border/60" />
          <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-brand-border/60" />
          {/* Horizontal lines */}
          <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-brand-border/60" />
          <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-brand-border/60" />
          
          {/* Top-Right Crossing Indicator */}
          <div className="absolute right-[25%] top-[33.3%] -translate-y-1/2 translate-x-1/2 z-10 flex flex-col items-end">
            <div className="w-8 h-8 relative flex items-center justify-center">
              <span className="absolute w-4 h-[1.5px] bg-brand-red" />
              <span className="absolute h-4 w-[1.5px] bg-brand-red" />
            </div>
            <span className="text-[9px] uppercase tracking-widest text-brand-red font-bold mt-1 mr-4 bg-white px-1 select-none hidden md:inline">
              Crafting premium identities
            </span>
          </div>
          
          {/* Top-Left Crossing Indicator */}
          <div className="absolute left-[25%] top-[66.6%] -translate-y-1/2 -translate-x-1/2 z-10">
            <div className="w-8 h-8 relative flex items-center justify-center">
              <span className="absolute w-4 h-[1.5px] bg-brand-red" />
              <span className="absolute h-4 w-[1.5px] bg-brand-red" />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
          
          <div className="flex flex-col items-start space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-red/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-red"
            >
              <Award className="h-3.5 w-3.5 text-brand-red animate-pulse" /> Inc. 5000 Honored Branding Agency
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-7xl font-black tracking-tight leading-[0.95] max-w-5xl"
            >
              Best branding & logo design <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-zinc-800 to-brand-red font-serif italic font-medium pr-2">
                that elevates businesses.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-black/50 text-sm sm:text-lg leading-relaxed max-w-2xl font-normal pt-2"
            >
              We define strategic corporate identities, bespoke typography systems, high-end packaging designs, and verbal guidelines that captivate audiences and drive premium market value.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4 flex flex-wrap gap-4 items-center"
            >
              <a
                href="#quote"
                className="flex items-center gap-2 rounded-full bg-black hover:bg-brand-red px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition-colors duration-300 shadow-xl shadow-black/10 active:scale-95"
              >
                Let's Talk Branding
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              
              <div className="flex items-center gap-2 border-l border-brand-border pl-6 py-2 select-none">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-red text-brand-red" />
                  ))}
                </div>
                <span className="text-xs font-extrabold text-black/60 uppercase tracking-widest">
                  Anthem & Anthem Gold Winner
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. INFINITE TEXT MARQUEE */}
      <section className="bg-black py-6 border-y border-brand-border/20 overflow-hidden select-none">
        <div className="w-full flex">
          <div className="animate-marquee-container flex items-center gap-12 whitespace-nowrap">
            {[...Array(2)].map((_, containerIdx) => (
              <div key={containerIdx} className="flex gap-12 items-center">
                {[
                  'Award-Winning Brand Identities',
                  'Strategic Logo & Typography Design',
                  'Gold Anthem Award Studio Winner',
                  'High-End Package & Box Design',
                  'Custom Corporate Rebranding',
                  'M/WBE-Certified Creative Agency'
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-white">
                    <span className="text-sm sm:text-base font-display font-extrabold uppercase tracking-widest text-white/95">
                      {text}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-brand-red" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED WORK CAROUSEL */}
      <section className="py-24 bg-brand-gray/30 border-b border-brand-border select-none">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
                Branding Case Studies
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
                Crafting visual legacies.
              </h2>
            </div>
            
            {/* Slider navigations */}
            <div className="flex items-center gap-3">
              <button 
                onClick={handlePrevProject}
                className="h-12 w-12 rounded-full border border-brand-border bg-white flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <div className="text-sm font-bold font-display select-none">
                <span className="text-brand-red">{projects[activeProjectIdx].id}</span>
                <span className="text-black/30"> / {projects.length.toString().padStart(2, '0')}</span>
              </div>
              <button 
                onClick={handleNextProject}
                className="h-12 w-12 rounded-full border border-brand-border bg-white flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all active:scale-95 cursor-pointer"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Core Shiftbox Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Project Image Display Card */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-brand-border bg-white relative aspect-video flex flex-col justify-between shadow-sm group">
              
              {/* Graphic Backdrop */}
              <div className="absolute inset-0 z-0 bg-brand-gray/50 flex items-center justify-center p-8 overflow-hidden select-none">
                <div className={`w-full h-full rounded-2xl bg-gradient-to-tr ${projects[activeProjectIdx].accent} opacity-30 blur-2xl group-hover:scale-105 transition-transform duration-700`} />
                
                {/* Simulated branding book interface inside container */}
                <div className="absolute inset-8 rounded-xl border border-brand-border/40 bg-white/70 backdrop-blur-md shadow-2xl p-6 flex flex-col justify-between select-none">
                  <div className="flex justify-between items-start border-b border-black/5 pb-3">
                    <span className="text-[10px] font-black tracking-tighter text-black">BRAND BOOK</span>
                    <span className="text-[8px] font-extrabold text-black/40">2026 EDITION</span>
                  </div>
                  
                  {/* Brand Typography display */}
                  <div className="my-auto space-y-3 text-center">
                    <div className="text-5xl sm:text-6xl font-serif font-black italic tracking-tighter text-black">Aa</div>
                    <div className="h-2 w-2/3 bg-black/40 rounded mx-auto" />
                    <div className="h-1.5 w-1/2 bg-black/10 rounded mx-auto" />
                  </div>
                  
                  <div className="flex justify-between items-center text-[7px] font-extrabold text-black/40 uppercase tracking-widest pt-3 border-t border-black/5">
                    <span>{projects[activeProjectIdx].tags[0]}</span>
                    <span>{projects[activeProjectIdx].tags[1]}</span>
                    <span>{projects[activeProjectIdx].tags[2]}</span>
                  </div>
                </div>

              </div>

              {/* Top metadata tags */}
              <div className="relative z-10 p-6 flex flex-wrap gap-2">
                {projects[activeProjectIdx].category.slice(0, 3).map((cat, idx) => (
                  <span key={idx} className="bg-black/90 backdrop-blur-md text-[9px] font-bold text-white uppercase tracking-widest px-3 py-1 rounded-full">
                    {cat}
                  </span>
                ))}
              </div>

              {/* Bottom CTA overlay */}
              <div className="relative z-10 p-6 flex justify-end">
                <button
                  onClick={onContactClick}
                  className="bg-white hover:bg-brand-red hover:text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-black flex items-center gap-1.5 shadow-lg shadow-black/15 transition-all select-none active:scale-95 cursor-pointer"
                >
                  View Case Study
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>

            {/* Project Details Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl border border-brand-border p-8 md:p-10 shadow-sm relative">
              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-extrabold text-brand-red uppercase tracking-widest select-none">
                    Case Study {projects[activeProjectIdx].id}
                  </span>
                  <h3 className="text-3xl font-extrabold text-black tracking-tight leading-tight">
                    {projects[activeProjectIdx].title}
                  </h3>
                </div>
                
                <p className="text-black/60 text-sm leading-relaxed font-normal">
                  {projects[activeProjectIdx].desc}
                </p>
              </div>

              {/* Full Category Tags Grid in Details Panel */}
              <div className="pt-8 border-t border-brand-border mt-8 space-y-4">
                <span className="block text-[10px] font-extrabold uppercase tracking-widest text-black/40">
                  Branding Deliverables
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {projects[activeProjectIdx].category.map((cat, idx) => (
                    <span key={idx} className="bg-brand-gray border border-brand-border px-3 py-1 rounded-full text-[10px] font-bold text-black/70 uppercase">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. 12-STEP BRANDING PROCESS ACCORDION */}
      <section className="py-28 bg-white border-b border-brand-border select-none">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
              A comprehensive workflow <br />
              for brand architecture.
            </h2>
            <p className="text-black/50 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              We guide our partners through a structured 12-phase pipeline combining deep research, concept audits, identity mockups, standards coordination, and final asset deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Accordion Headers List */}
            <div className="lg:col-span-5 flex flex-col gap-1.5 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
              {brandingSteps.map((step, idx) => {
                const isActive = activeStepIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStepIdx(idx)}
                    className={`text-left px-5 py-4.5 rounded-xl font-bold text-sm sm:text-base flex items-center justify-between transition-all select-none border cursor-pointer ${
                      isActive 
                        ? 'bg-black text-white border-black shadow-md' 
                        : 'bg-brand-gray hover:bg-brand-gray-dark/50 border-brand-border text-black/75'
                    }`}
                  >
                    <span>{step.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Display Board */}
            <div className="lg:col-span-7 bg-brand-gray/30 border border-brand-border rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-sm relative overflow-hidden min-h-[360px]">
              
              <div className="absolute top-0 right-0 w-36 h-36 bg-brand-red/5 rounded-full blur-3xl" />
              
              <div className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <span className="text-xs font-extrabold text-brand-red uppercase tracking-widest">
                    Phase {(activeStepIdx + 1).toString().padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
                    {brandingSteps[activeStepIdx].title.split('. ')[1]}
                  </h3>
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeStepIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-black/60 text-sm leading-relaxed font-normal"
                  >
                    {brandingSteps[activeStepIdx].desc}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Progress dots at bottom */}
              <div className="flex items-center gap-1.5 pt-8 border-t border-brand-border mt-8 relative z-10 select-none">
                {brandingSteps.map((_, idx) => (
                  <span 
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeStepIdx === idx ? 'w-6 bg-brand-red' : 'w-1.5 bg-black/15'
                    }`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. BRANDING EXPERTISE */}
      <section className="py-28 bg-brand-gray/30 border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red select-none">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
              High-quality creative branding.
            </h2>
            <p className="text-black/50 text-sm leading-relaxed max-w-xl font-normal">
              We do not build generic visual marks. We formulate deep identities configured to scale, keeping your company relevant across digital assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Authentic Identities',
                desc: 'We construct brand marks, logos, typography catalogs, and swatches that match your core guidelines. Responsive across screen breakpoints, modern print media, and retail packages.'
              },
              {
                title: 'Cohesion & Durability',
                desc: 'Visual assets designed to grow alongside your firm. We provide robust guidelines, ensuring color values, spacing parameters, and logo configurations remain aligned.'
              },
              {
                title: 'Strategic Coordination',
                desc: 'A structured, iterative workflow promoting organic brainstorming, audience indexing, and stakeholder feedback to deliver client assets on-time.'
              }
            ].map((card, idx) => (
              <div 
                key={idx}
                className="group border border-brand-border hover:border-brand-red/30 bg-white rounded-3xl p-8 hover:shadow-xl hover:shadow-brand-red/5 transition-all duration-300 flex flex-col justify-between h-[240px]"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black tracking-tight">{card.title}</h3>
                  <p className="text-xs text-black/60 leading-relaxed font-normal">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CREATIVE SERVICES ACCORDION/TOGGLES */}
      <section className="py-28 bg-white border-b border-brand-border select-none">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
              A comprehensive creative suite.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left selector */}
            <div className="lg:col-span-5 space-y-2">
              {creativeServices.map((service, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveServiceIdx(idx)}
                  className={`w-full text-left px-6 py-5 rounded-2xl font-bold text-lg flex items-center justify-between border transition-all cursor-pointer ${
                    activeServiceIdx === idx 
                      ? 'bg-black text-white border-black shadow-lg shadow-black/10'
                      : 'bg-brand-gray hover:bg-brand-gray-dark/50 border-brand-border text-black/75'
                  }`}
                >
                  <span>{service.title}</span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${activeServiceIdx === idx ? '-rotate-90' : 'opacity-40'}`} />
                </button>
              ))}
            </div>

            {/* Right card */}
            <div className="lg:col-span-7 bg-brand-gray/30 border border-brand-border rounded-3xl p-8 sm:p-10 shadow-sm min-h-[360px] flex flex-col justify-between">
              <div className="space-y-6">
                
                {/* Horizontal tags */}
                <div className="flex flex-wrap gap-1.5 border-b border-brand-border pb-4">
                  {creativeServices[activeServiceIdx].tags.map((tag) => (
                    <span key={tag} className="bg-white border border-brand-border px-3 py-1 rounded-full text-[10px] font-bold text-black/70 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeServiceIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-black/60 text-sm leading-relaxed font-normal"
                  >
                    {creativeServices[activeServiceIdx].desc}
                  </motion.p>
                </AnimatePresence>

              </div>

              <div className="pt-8 border-t border-brand-border mt-8 flex justify-end">
                <button
                  onClick={onContactClick}
                  className="text-xs font-bold uppercase tracking-wider text-brand-red flex items-center gap-1 hover:text-brand-red-dark transition-colors cursor-pointer"
                >
                  Configure {creativeServices[activeServiceIdx].title} <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 7. ACCOLADES & AWARDS */}
      <section className="py-24 bg-brand-gray/40 border-b border-brand-border select-none">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              Accolades
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black leading-tight">
              Award-winning agency recognition.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Inc. 5000 Honoree',
                desc: 'Ranked #58 in Advertising & Marketing on the Inc. 5000 list of America’s fastest-growing private companies.'
              },
              {
                title: 'Anthem Awards Gold',
                desc: 'Winner of 5 Gold and Silver Anthem Awards for outstanding creative branding and campaign storytelling.'
              },
              {
                title: 'CSSDA Best Innovation',
                desc: 'Awarded by CSS Design Awards for custom frontend innovations, digital design, and interface usability.'
              },
              {
                title: 'Clutch Champion & Top 40',
                desc: 'Attained Clutch Champion and Top 40 Global Design Agency status with verified 5-star feedback.'
              },
              {
                title: 'Awwwards Mention',
                desc: 'Recognized by Awwwards for layout aesthetics, premium typography systems, and dynamic grid transitions.'
              },
              {
                title: 'M/WBE-Certified Studio',
                desc: 'Certified as a Minority/Women-Owned Business Enterprise in good standing with New York City.'
              }
            ].map((award, idx) => (
              <div 
                key={idx}
                className="bg-white border border-brand-border rounded-2xl p-6.5 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-[160px]"
              >
                <div className="space-y-2">
                  <h4 className="text-base font-extrabold text-black tracking-tight">{award.title}</h4>
                  <p className="text-xs text-black/60 leading-relaxed font-normal">{award.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. INTERACTIVE CONSULTATION/QUOTE FORM */}
      <section id="quote" className="py-28 bg-white select-none">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
              <Heart className="h-4.5 w-4.5 fill-brand-red animate-pulse" />
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black">
              Start Your Branding Project
            </h2>
            <p className="text-black/50 text-sm leading-relaxed max-w-md mx-auto font-normal">
              Tell us about your brand direction, select your campaign requirements, and let's configure an award-winning brand mark.
            </p>
          </div>

          {formSubmitted ? (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-brand-gray border border-brand-border rounded-3xl p-10 text-center space-y-4 shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-2">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-black tracking-tight">Request Sent Successfully!</h3>
              <p className="text-sm text-black/60 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-black">{formData.name}</strong>. An identity strategy specialist will review your request and reach out at <strong className="text-black">{formData.email}</strong> within 12 business hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-8 bg-brand-gray/25 border border-brand-border rounded-3xl p-8 sm:p-12 shadow-sm">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-black/50">Your name*</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Anjelika Kour"
                    className="w-full bg-white border border-brand-border focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-xl px-4 py-3 text-sm text-black outline-none font-semibold shadow-sm transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-black/50">Your e-mail*</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="hello@dd.nyc"
                    className="w-full bg-white border border-brand-border focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-xl px-4 py-3 text-sm text-black outline-none font-semibold shadow-sm transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="details" className="text-xs font-bold uppercase tracking-wider text-black/50">Tell us about your project…</label>
                <textarea
                  id="details"
                  rows={4}
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  placeholder="Need a custom rebrand for an ecommerce beauty storefront, including tube design, typography guidelines..."
                  className="w-full bg-white border border-brand-border focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-xl px-4 py-3 text-sm text-black outline-none font-semibold shadow-sm transition-all resize-none"
                />
              </div>

              {/* Checkboxes selection */}
              <div className="space-y-3">
                <span className="block text-xs font-bold uppercase tracking-wider text-black/50">I'm interested in...</span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Branding', 'Web Design', 'Packaging', 'Graphic Design',
                    'UI/UX', 'Video Production', 'Experiential', 'Other'
                  ].map((interest) => {
                    const isSelected = formData.interests.includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestToggle(interest)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all border select-none cursor-pointer ${
                          isSelected 
                            ? 'bg-black border-black text-white shadow-sm'
                            : 'bg-white border-brand-border text-black/75 hover:border-black/40'
                        }`}
                      >
                        {interest}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom Budget Selector */}
              <div className="space-y-2 relative">
                <span className="block text-xs font-bold uppercase tracking-wider text-black/50">Tell us your approximate budget</span>
                
                <button
                  type="button"
                  onClick={() => setBudgetDropdownOpen(!budgetDropdownOpen)}
                  className="w-full bg-white border border-brand-border rounded-xl px-4 py-3.5 flex justify-between items-center text-sm font-semibold text-black/85 outline-none text-left shadow-sm select-none hover:border-black/30 cursor-pointer"
                >
                  <span>{formData.budget}</span>
                  <ChevronDown className={`h-4 w-4 text-black/50 transition-transform ${budgetDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {budgetDropdownOpen && (
                  <div className="absolute left-0 right-0 z-20 mt-1.5 bg-white border border-brand-border rounded-xl shadow-xl overflow-hidden py-1">
                    {budgetOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, budget: opt });
                          setBudgetDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-xs font-bold hover:bg-brand-gray transition-colors select-none cursor-pointer ${
                          formData.budget === opt ? 'text-brand-red' : 'text-black/70'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Dispatch trigger submit button */}
              <div className="pt-4 border-t border-brand-border/60">
                <button
                  type="submit"
                  className="w-full rounded-full bg-black hover:bg-brand-red py-4 text-xs font-bold uppercase tracking-wider text-white transition-colors duration-300 select-none shadow-md shadow-black/10 active:scale-[0.98] cursor-pointer"
                >
                  Send Project Request
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

    </div>
  );
}
