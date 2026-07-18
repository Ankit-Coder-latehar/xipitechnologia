import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Zap, Star, ArrowRight, ArrowLeft, ArrowUpRight, Sparkles, Layout,
  Smartphone, Code, ShieldCheck, Landmark, BookOpen, MousePointer, 
  ShoppingCart, Activity, Compass, Cpu, Target, Heart, CheckCircle2, ChevronDown
} from 'lucide-react';

export default function WebDesign({ onContactClick }) {
  // 1. Shiftbox Carousel State
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const projects = [
    {
      id: '01',
      title: 'FIFA World Cup 2026™ NYNJ',
      category: ['Web Design', 'Web Development', 'UI/UX', 'Sports'],
      desc: 'Official host city digital hub for the biggest sporting event on earth. Designed for massive scale, accessibility, and high-intensity user traffic.',
      accent: 'from-[#0B5CFF] to-[#00D47C]',
      tags: ['React', 'Next.js', 'Vercel']
    },
    {
      id: '02',
      title: 'New York City FC Etihad Park Stadium',
      category: ['Web Design', 'Web Development', 'UI/UX', '3D Design', 'Custom Animations'],
      desc: 'Bespoke stadium experience page showcasing Etihad Park with high-fidelity interactive blueprints and immersive WebGL graphics.',
      accent: 'from-[#69B3E7] to-[#002F6C]',
      tags: ['Three.js', 'Framer Motion', 'Tailwind']
    },
    {
      id: '03',
      title: 'BAS Stone NYC',
      category: ['Web Design', '3D Design', 'Real Estate', 'Video Production'],
      desc: 'Architectural luxury stone gallery. Uses grid typography and high-end animations to represent premium marble and stone textures.',
      accent: 'from-[#1A1A1A] to-[#6E6E6E]',
      tags: ['GSAP', 'Headless CMS', 'Prismic']
    },
    {
      id: '04',
      title: 'IvyWise Education Consultancy',
      category: ['Branding', 'Brand Collateral', 'Web Design', 'Video Production'],
      desc: 'Premier college admission consulting firm platform optimized for deep lead funnel integration, fast loading speeds, and high reliability.',
      accent: 'from-[#8E2A59] to-[#E3544D]',
      tags: ['WordPress', 'SEO Engine', 'HubSpot']
    },
    {
      id: '05',
      title: 'WillowWood Global Medical',
      category: ['Branding', 'Brand Collateral', '3D Design', 'Motion Graphics', 'Web Design'],
      desc: 'Medical device systems website designed with responsive compliance frameworks and state-of-the-art interactive healthcare animations.',
      accent: 'from-[#007EA7] to-[#00A8E8]',
      tags: ['TypeScript', 'GraphQL', 'Tailwind']
    },
    {
      id: '06',
      title: 'Hawkridge Luxury Development',
      category: ['Luxury', 'Real Estate', 'Web Design', 'Branding', 'Advertising'],
      desc: 'Exquisite property development portfolio in Los Angeles. Dynamic transitions, fluid galleries, and custom real estate map assets.',
      accent: 'from-[#D4AF37] to-[#111111]',
      tags: ['Vite', 'React Router', 'CSS Grid']
    },
    {
      id: '07',
      title: '1datapipe Website & Animations',
      category: ['Custom Animations', 'Tech', 'UI/UX', 'Web Design'],
      desc: 'Global financial scoring system landing page containing interactive SVG graphs, speed performance diagnostics, and dynamic node connections.',
      accent: 'from-[#5433FF] to-[#20BDFF]',
      tags: ['Figma', 'Lottie', 'Node.js']
    }
  ];

  const handleNextProject = () => {
    setActiveProjectIdx((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrevProject = () => {
    setActiveProjectIdx((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  // 2. Process Accordion Tabs State
  const [activeStage, setActiveStage] = useState('Discovery');
  const [activeSubTab, setActiveSubTab] = useState('Creative Brief');

  const processData = {
    Discovery: {
      subTabs: [
        {
          name: 'Creative Brief',
          desc: 'To deeper understand your objectives with the new website, we invite you to complete our custom and proprietary Creative Brief. Geared for results, your custom Brief will include questions about your audience, goals, CTAs, and your definition of success for our bespoke work.'
        },
        {
          name: 'Digital Analysis',
          desc: 'Understanding the purpose of your website is vital to our success. We begin the process by discussing your new website’s goals and target audience. After, we craft a strategy to meet or exceed your objectives with analytics and cognitive behavior in mind.'
        },
        {
          name: 'Strategy',
          desc: 'Having analyzed your industry, references, and industry direction, we devise a strong directional strategy for the next steps of the project and draw up a plan of the meeting schedule to follow. Our strategy includes visual direction and team brainstorming.'
        }
      ]
    },
    Design: {
      subTabs: [
        {
          name: 'Concept Ideation',
          desc: 'As a cohesive multidisciplinary team, our web designers collaborate with our branding team to ensure your website expresses your every brand essence and desire. We utilize knowledge transfer and design trends to understand your industry and craft a web design to help your business stand out.'
        },
        {
          name: 'UX - Experience Design',
          desc: 'Flowcharts and wireframes identify user motivation and define the hierarchy of items on a site based on your audience’s needs. We experiment with cutting-edge innovation and design principles to elevate your website to the top of your industry.'
        },
        {
          name: 'UI - Interface Design',
          desc: 'Next, we build modern high-fidelity design screens that tell a story and reflect your newfound web design direction. This meticulous process expands into multiple device sizes and web design breakpoints.'
        },
        {
          name: 'Prototype',
          desc: 'As a final step in our detailed design process, we create clickable animated prototypes to walk the client through what our vision of the web design will be and reference any additional animations we envision using professional motion software.'
        }
      ]
    },
    Development: {
      subTabs: [
        {
          name: 'Systems Architecture',
          desc: 'We thoughtfully discuss and decide the fundamental organization of the backend system that will be optimal for your website. Selecting the most elegant of solutions to effectively reach the desired design solution in the allotted timeline, we proceed to the development stage.'
        },
        {
          name: 'Full Stack & CMS Integrations',
          desc: 'We are skilled in a variety of programming languages to provide you with flexibility for your site. Unlike many web design companies that utilize outdated approaches and templates, all our work is entirely custom and we specialize in headless CMS as a back-end-only content management system, making website management and content creation easy.'
        },
        {
          name: 'QA',
          desc: 'Upon design completion, the website undergoes rigorous testing which utilizes the most state-of-the-art technologies to report and expedite any design inconsistencies and updates needed.'
        },
        {
          name: 'Launch',
          desc: 'The most exciting of steps, we walk our clients through each and every step of the launch process and ensure nothing is overlooked. In the strictest of disciplines, website launches are executed with zero downtime.'
        }
      ]
    },
    Support: {
      subTabs: [
        {
          name: 'Maintenance & Updates',
          desc: 'The relationship between a web design company and its clients should not end with the launch of a website. We ensure that your site continues working for you by maintaining secure hosting and providing daily data backups and security scans. We are also available for updates, improvements, or expansions.'
        },
        {
          name: 'Performance Monitoring',
          desc: 'Every project we build has performance and security in mind. We exceed modern web standards by optimizing accessibility, usability, responsiveness across platforms, and organic search. These factors not only improve user experience but also drive sales and help your brand grow.'
        },
        {
          name: 'Robust Training',
          desc: 'We ensure the process of creating and maintaining your website is as simple as possible. Part of our process teaches you the intricacies of your website. We provide training videos, guides, and/or on-site training to help your team get up to speed with your new website.'
        }
      ]
    }
  };

  // Reset subtab on category change
  useEffect(() => {
    setActiveSubTab(processData[activeStage].subTabs[0].name);
  }, [activeStage]);

  // 3. FAQ Accordion State
  const [expandedFaqIdx, setExpandedFaqIdx] = useState(0);
  const faqs = [
    {
      question: 'How does Xipitechnolia approach a new web design project?',
      answer: 'We approach every new project with a defined, collaborative, and results-driven process designed to deliver high-impact creative work. Here’s a concise breakdown of our approach:\n\n1. Discovery & Strategy: Deep dive into your brand, goals, audience, and competitive landscape.\n2. Art Direction: Create moodboards, visual directions, and creative brand exploration.\n3. Design & Iteration: Craft refined visual solutions through interactive wireframes and screen designs.\n4. Development: Code high-performance custom modules with precision speed.\n5. Launch & Optimization: Guide you through a bulletproof launch workflow and post-launch setup.'
    },
    {
      question: 'What differentiates Xipitechnolia from other design agencies?',
      answer: 'Our approach is rooted in clarity, creativity, and collaboration. We offer:\n\n• Design Excellence: Every project is crafted with custom precision, merging premium aesthetics with smart user psychology.\n• Structured AGILE Method: Step-by-step phases ensure project transparency and velocity.\n• Partnership Mindset: We treat clients as long-term allies, focusing on actual conversion ROI and long-term tech stack stability.'
    },
    {
      question: 'What web platforms and technologies do you specialize in?',
      answer: 'We construct premium tailor-made digital assets. We are highly proficient in:\n\n• Advanced Front-end: React, Next.js, Framer Motion, Tailwind CSS, Three.js (3D).\n• High-velocity Back-end: Node.js, GraphQL, Serverless APIs.\n• Modern CMS Platforms: Headless WordPress, Strapi, Sanity, Shopify Plus.\n• Robust Infrastructure: Vercel, AWS Cloudfront, high-availability global CDNs.'
    },
    {
      question: 'Do you offer post-launch support and security maintenance?',
      answer: 'Absolutely. We believe launching is just the beginning. We provide custom hosting plans, real-time security scans, automated daily backups, speed health monitors, and dedicated support hours for continuous updates and feature expansion.'
    }
  ];

  // 4. Custom Outbound Quote Module State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
    interests: [],
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
        interests: [],
        budget: 'from $25,000 to $50,000'
      });
    }, 4000);
  };

  // 5. Scroll-based Karaoke Text Highlight Effect
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transform progress for text mask reveal
  const textRevealProgress = useTransform(scrollYProgress, [0.35, 0.65], ["0%", "100%"]);

  return (
    <div className="bg-white min-h-screen text-black overflow-hidden pt-20 select-none font-sans">
      
      {/* 1. HERO SECTION WITH INTERSECTING GRID GRIDLINES */}
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
              Innovating digital design
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
              <Sparkles className="h-3.5 w-3.5 text-brand-red animate-pulse" /> Award-Winning Web Standards
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-7xl font-black tracking-tight leading-[0.95] max-w-5xl"
            >
              Best custom websites <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-zinc-800 to-brand-red font-serif italic font-medium pr-2">
                that drive business growth.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-black/50 text-sm sm:text-lg leading-relaxed max-w-2xl font-normal pt-2"
            >
              We craft bespoke, world-class mobile-responsive websites that act as highly optimized conversion engines for your business. Blending stunning aesthetics with robust engineering.
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
                Start Your Project
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              
              <div className="flex items-center gap-2 border-l border-brand-border pl-6 py-2 select-none">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-red text-brand-red" />
                  ))}
                </div>
                <span className="text-xs font-extrabold text-black/60 uppercase tracking-widest">
                  Rated 5.0 on Clutch
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
                  'Fast, Creative, Reliable Websites',
                  'Best-Rated UI/UX Web Design Agency',
                  '5-Star Clutch Rating',
                  'User-Centered Design Websites',
                  'Award-Winning Web Design',
                  'AGILE Development Process',
                  'Page Speed 100 Guarantee'
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

      {/* 3. SHIFTBOX INTERACTIVE CAROUSEL */}
      <section className="py-24 bg-brand-gray/30 border-b border-brand-border select-none">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
                Featured Work
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
                Case studies in digital <br className="hidden sm:inline" />
                excellence.
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
                
                {/* Simulated Webpage Interface design inside container */}
                <div className="absolute inset-8 rounded-xl border border-brand-border/40 bg-white/70 backdrop-blur-md shadow-2xl p-4 flex flex-col justify-between select-none">
                  {/* Navbar mockup */}
                  <div className="flex justify-between items-center border-b border-black/5 pb-2">
                    <span className="text-[10px] font-black tracking-tighter text-black select-none">SITE DEMO</span>
                    <div className="flex gap-2">
                      <span className="w-6 h-2 bg-black/10 rounded" />
                      <span className="w-6 h-2 bg-black/10 rounded" />
                    </div>
                  </div>
                  {/* Main section mockup */}
                  <div className="my-auto space-y-2">
                    <div className="h-4 w-4/5 bg-black/80 rounded" />
                    <div className="h-3 w-3/5 bg-black/30 rounded" />
                    <div className="h-3.5 w-16 bg-brand-red rounded" />
                  </div>
                  {/* Grid layout indicators */}
                  <div className="flex justify-between items-center text-[7px] font-extrabold text-black/30 uppercase tracking-widest pt-2 border-t border-black/5">
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
                    Project Case {projects[activeProjectIdx].id}
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
                  Services Provided
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

      {/* 4. EXPERTISE SECTION (GRID LAYOUT) */}
      <section className="py-28 bg-white border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red select-none">
              Design Pillars
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
              Web development capabilities <br />
              without compromise.
            </h2>
            <p className="text-black/50 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              We specialize in custom web architectures that out-perform templates. Speed, aesthetics, scalability, and UX design are built into every build.
            </p>
          </div>

          {/* Grid of expertise items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[
              {
                icon: Code,
                title: 'WordPress Websites',
                desc: 'Highly bespoke and customized WordPress builds. Engineered to remain responsive, SEO-ready, easily scalable, and fully content-manageable with custom block builders.'
              },
              {
                icon: Smartphone,
                title: 'Mobile-Responsive Websites',
                desc: 'Tailored and meticulously design-tested across all resolutions. Mobile-first layout designs optimized for screen ratios, touch response, and maximum visibility.'
              },
              {
                icon: Layout,
                title: 'Custom Design',
                desc: 'Zero template code. Every layout is structured specifically from scratch to match your target audience criteria, competitive landscape, and brand guidelines.'
              },
              {
                icon: ShieldCheck,
                title: 'Website Support & SLA',
                desc: 'Continuous uptime maintenance, robust firewall protocols, daily cloud backups, accessibility standard audits (ADA Compliance), and developer support.'
              },
              {
                icon: Landmark,
                title: 'Corporate Websites',
                desc: 'High-end portals specifically designed for businesses, conglomerates, and educational hubs. Safe, fast-loading, structured layouts showcasing service capabilities.'
              },
              {
                icon: BookOpen,
                title: 'Brochure Websites',
                desc: 'Stunning and elegant brochure profiles to outline product specifications or project galleries. Clean layouts focusing on high-resolution graphics and media.'
              },
              {
                icon: MousePointer,
                title: 'Landing Pages',
                desc: 'High-converting tactical landing pages optimized specifically for paid social or PPC search campaigns. Fast speeds, clear call-to-actions, and continuous A/B testing.'
              },
              {
                icon: ShoppingCart,
                title: 'E-commerce Websites',
                desc: 'Secure catalog, payment and logistics integration. Configured using headless Shopify Plus, WooCommerce, or Custom database logic to manage products efficiently.'
              },
              {
                icon: Activity,
                title: 'Animated Website',
                desc: 'Premium dynamic websites utilizing smooth micro-animations, scroll triggers, custom SVG paths, and WebGL elements. Captivates attention instantly.'
              }
            ].map((pillar, idx) => (
              <div 
                key={idx}
                className="group border border-brand-border hover:border-brand-red/30 bg-brand-gray/30 rounded-3xl p-8 hover:shadow-xl hover:shadow-brand-red/5 transition-all duration-300 flex flex-col justify-between h-[280px]"
              >
                <div className="space-y-4">
                  <div className="h-11 w-11 rounded-2xl bg-white border border-brand-border flex items-center justify-center text-black group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-300 shadow-sm">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-black tracking-tight">{pillar.title}</h3>
                  <p className="text-xs text-black/60 leading-relaxed font-normal">{pillar.desc}</p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE PROCESS TABS */}
      <section className="py-28 bg-brand-gray/30 border-b border-brand-border select-none">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
              An agile blueprint built for <br />
              high velocity delivery.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Category Selection Toggles */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {Object.keys(processData).map((stage) => (
                <button
                  key={stage}
                  onClick={() => setActiveStage(stage)}
                  className={`text-left px-6 py-5 rounded-2xl font-bold text-lg flex items-center justify-between transition-all select-none border border-transparent cursor-pointer ${
                    activeStage === stage 
                      ? 'bg-black text-white shadow-lg shadow-black/10 border-black' 
                      : 'bg-white text-black/70 hover:bg-brand-gray border-brand-border'
                  }`}
                >
                  <span>{stage}</span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${activeStage === stage ? '-rotate-90' : 'opacity-40'}`} />
                </button>
              ))}
            </div>

            {/* Right Tabs and Content Panel */}
            <div className="lg:col-span-8 bg-white border border-brand-border rounded-3xl p-8 md:p-10 shadow-sm min-h-[380px] flex flex-col justify-between">
              
              <div className="space-y-6">
                
                {/* Horizontal list of sub-tabs inside active category */}
                <div className="flex flex-wrap gap-2 border-b border-brand-border pb-4 select-none">
                  {processData[activeStage].subTabs.map((sub) => (
                    <button
                      key={sub.name}
                      onClick={() => setActiveSubTab(sub.name)}
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all border cursor-pointer ${
                        activeSubTab === sub.name
                          ? 'bg-brand-red/10 border-brand-red text-brand-red'
                          : 'border-transparent text-black/55 hover:text-black hover:bg-brand-gray'
                      }`}
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>

                {/* Body Content display */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSubTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h4 className="text-xl font-bold tracking-tight text-black">
                      {activeSubTab} Description
                    </h4>
                    <p className="text-black/60 text-sm leading-relaxed font-normal">
                      {processData[activeStage].subTabs.find(s => s.name === activeSubTab)?.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

              </div>

              {/* Progress Bar indicator */}
              <div className="pt-8 border-t border-brand-border mt-8 flex justify-between items-center text-xs font-bold text-black/40">
                <span className="uppercase tracking-widest">{activeStage} phase active</span>
                <span className="font-display font-black text-brand-red">
                  {activeStage === 'Discovery' && '25%'}
                  {activeStage === 'Design' && '50%'}
                  {activeStage === 'Development' && '75%'}
                  {activeStage === 'Support' && '100%'} Completed
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. DYNAMIC CITATIONS (KARAOKE TEXT REVEAL) */}
      <section 
        ref={containerRef}
        className="py-32 bg-black text-white relative flex items-center justify-center overflow-hidden border-b border-brand-border/20 select-none"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-5xl font-extrabold tracking-tight leading-snug">
              {/* Splitting key message for mask color reveals */}
              <motion.span 
                className="inline-block relative text-white/10"
              >
                Xipitechnolia delivers top-tier web design practices, where aesthetic and usability both play a key role.
                
                {/* Overlaid sliding reveal copy */}
                <motion.span 
                  className="absolute left-0 top-0 text-brand-red overflow-hidden whitespace-normal text-left pointer-events-none"
                  style={{ width: textRevealProgress }}
                >
                  Xipitechnolia delivers top-tier web design practices, where aesthetic and usability both play a key role.
                </motion.span>
              </motion.span>
            </h2>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-28 bg-white border-b border-brand-border select-none">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Header info */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
                Common Queries
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
                Frequently Asked <br className="hidden lg:inline" /> Questions.
              </h2>
              <p className="text-black/50 text-sm leading-relaxed max-w-sm font-normal">
                Everything you need to know about working with our custom engineering agency. For other requests, feel free to write to hello@xipitechnolia.com.
              </p>
            </div>

            {/* Accordion panel */}
            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = expandedFaqIdx === idx;
                return (
                  <div 
                    key={idx}
                    className={`border border-brand-border rounded-2xl overflow-hidden transition-all duration-300 bg-white ${
                      isOpen ? 'border-brand-red/35 shadow-md shadow-brand-red/5' : 'hover:border-black/30'
                    }`}
                  >
                    <button
                      onClick={() => setExpandedFaqIdx(isOpen ? -1 : idx)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-black select-none cursor-pointer"
                    >
                      <span className={isOpen ? 'text-brand-red' : ''}>{faq.question}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-red' : 'opacity-40'}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-6 pb-6 pt-1 border-t border-brand-border/40 text-xs sm:text-sm text-black/60 leading-relaxed font-normal whitespace-pre-line">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 8. CLIENT LOGOS GRID */}
      <section className="py-24 bg-brand-gray border-b border-brand-border select-none">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
              Partners
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black leading-tight">
              Trusted by global innovators.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-[1px] bg-brand-border border border-brand-border rounded-3xl overflow-hidden shadow-sm bg-white">
            {[
              'L\'Oréal', 'FIFA', 'VTS', 'Etihad', 'NYCFC', 'Clutch',
              'dailyhunt', 'WillowWood', 'Flipkart', 'Trivago', 'Antidote', 'Vantage'
            ].map((partner, idx) => (
              <div 
                key={idx}
                className="bg-white h-24 flex items-center justify-center p-4 text-center font-display font-black text-lg text-black/45 tracking-tight hover:text-brand-red transition-all cursor-pointer select-none relative group"
              >
                <span>{partner}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-brand-red group-hover:w-8 transition-all duration-300" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. INTERACTIVE CONSULTATION/QUOTE MODULE */}
      <section id="quote" className="py-28 bg-white select-none">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
              <Heart className="h-4.5 w-4.5 fill-brand-red animate-pulse" />
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black">
              Start Your Web Project
            </h2>
            <p className="text-black/50 text-sm leading-relaxed max-w-md mx-auto font-normal">
              Tell us about your digital goals, choose your approximate project scope, and let's configure an award-winning site stack.
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
                Thank you, <strong className="text-black">{formData.name}</strong>. An acquisition engineering specialist will review your request and reach out at <strong className="text-black">{formData.email}</strong> within 12 business hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-8 bg-brand-gray/25 border border-brand-border rounded-3xl p-8 sm:p-12 shadow-sm">
              
              {/* Form fields */}
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
                    placeholder="anjelika@dd.nyc"
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
                  placeholder="Need a custom mobile-first website with Three.js web animation modules..."
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
