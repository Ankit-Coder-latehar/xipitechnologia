import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap, BookOpen, Award, Users, CheckCircle2, Star,
  Clock, ArrowRight, Sparkles, ChevronRight, Play, Search,
  Download, Briefcase, Zap, ShieldCheck, Check, X, Calendar,
  TrendingUp, Code, Megaphone, Target, BarChart2, Globe, FileText,
  PhoneCall, MessageSquare, Layers, Laptop, CreditCard
} from 'lucide-react';
import PaymentModal from './PaymentModal';

const statsData = [
  { value: '12,500+', label: 'Successful Graduates', detail: 'Working in top tech agencies & startups worldwide' },
  { value: '98.4%', label: 'Placement Rate', detail: 'Direct hiring network across 350+ partner companies' },
  { value: '100+', label: 'Live Agency Projects', detail: 'Gain real client experience during course tenure' },
  { value: '4.95 / 5', label: 'Student Rating', detail: 'Based on 4,200+ verified alumni reviews' }
];

const categories = [
  { id: 'all', label: 'All Programs' },
  { id: 'web-dev', label: 'Web Development' },
  { id: 'digital-marketing', label: 'Digital Marketing' },
  { id: 'seo', label: 'SEO & Organic Growth' },
  { id: 'meta-google-ads', label: 'Meta & Google Ads' }
];

const coursesData = [
  {
    id: 'web-development',
    category: 'web-dev',
    title: 'Full-Stack Web Development Mastery',
    badge: 'Most Popular',
    rating: 4.9,
    reviews: '2,140+',
    duration: '16 Weeks',
    level: 'Beginner to Advanced',
    mode: 'Live Cohort + 1-on-1 Labs',
    color: 'from-blue-600 to-indigo-700',
    accent: '#3B82F6',
    price: 29999,
    originalPrice: '₹49,999',
    emi: '₹2,500/mo',
    shortDesc: 'Master modern full-stack web engineering with React 19, Next.js 15, Node.js, TypeScript, Tailwind CSS, REST & GraphQL APIs, MongoDB, and AWS cloud deployment.',
    description: 'Transform into a job-ready full-stack developer capable of architecting scalable, high-performance web applications from scratch. Build 6 enterprise-grade live client projects with direct code reviews from senior agency leads.',
    salaryRange: '₹6 - 15 LPA',
    tools: ['React.js', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Docker', 'Git & GitHub', 'Vercel'],
    skills: ['Frontend Engineering', 'Backend API Architecture', 'Database Management', 'State Management', 'Authentication', 'Performance Tuning'],
    curriculum: [
      { week: 'Weeks 1-3', title: 'Modern Frontend Foundation', desc: 'HTML5, CSS3, Modern JavaScript (ES6+), Responsive Layouts, Git & GitHub Workflow' },
      { week: 'Weeks 4-7', title: 'Advanced React & Next.js Architecture', desc: 'React Hooks, State Management, Next.js App Router, Server Components, SSR/SSG, Tailwind CSS' },
      { week: 'Weeks 8-11', title: 'Backend Development & Database Systems', desc: 'Node.js, Express.js RESTful APIs, GraphQL, MongoDB, PostgreSQL, JWT Authentication' },
      { week: 'Weeks 12-14', title: 'Full-Stack Integration & Testing', desc: 'Connecting APIs, Stripe Payment Gateways, Unit Testing (Jest/Cypress), WebSockets for Realtime Apps' },
      { week: 'Weeks 15-16', title: 'Live Agency Capstone & Placement Prep', desc: 'Deploying full-stack SaaS apps on Vercel/AWS, Resume polish, Mock Technical Interviews & Placement drives' }
    ],
    projects: [
      'E-Commerce Multi-Vendor Marketplace SaaS with Stripe & Next.js',
      'Real-Time Project Management Workspace with WebSockets & Node.js',
      'AI-Powered Content Management Platform with Open API Integration'
    ]
  },
  {
    id: 'digital-marketing',
    category: 'digital-marketing',
    title: '360° Digital Marketing & Growth Masterclass',
    badge: 'Highest Placement',
    rating: 4.95,
    reviews: '1,890+',
    duration: '12 Weeks',
    level: 'All Levels',
    mode: 'Live Mentorship + Agency Internships',
    color: 'from-rose-600 to-pink-600',
    accent: '#E32626',
    price: 24999,
    originalPrice: '₹39,999',
    emi: '₹2,083/mo',
    shortDesc: 'A comprehensive growth program covering brand strategy, content marketing, email automation, performance analytics, funnel conversion optimization, and social growth.',
    description: 'Become a holistic growth marketer who can craft high-converting marketing campaigns across channels. Learn to construct end-to-end sales funnels, design multi-step email automations, analyze campaign data, and drive brand revenue.',
    salaryRange: '₹5 - 12 LPA',
    tools: ['Google Analytics 4', 'HubSpot', 'Mailchimp', 'Klaviyo', 'Canva Pro', 'Zapier', 'Hotjar', 'Figma', 'Buffer'],
    skills: ['Sales Funnel Architecture', 'Copywriting & Content Strategy', 'Marketing Automation', 'Customer Acquisition', 'Retention & LTV Strategy'],
    curriculum: [
      { week: 'Weeks 1-2', title: 'Digital Marketing Fundamentals & Consumer Psychology', desc: 'Brand positioning, buyer personas, market research, and competitive intelligence' },
      { week: 'Weeks 3-5', title: 'Content Marketing & Social Media Strategy', desc: 'Viral reel framework, LinkedIn & Twitter brand building, organic distribution networks' },
      { week: 'Weeks 6-8', title: 'Funnel Optimization & Email Automation', desc: 'Building landing page funnels with high CVR, Mailchimp/Klaviyo automation flows' },
      { week: 'Weeks 9-10', title: 'Data Analytics & CRO (Conversion Rate Optimization)', desc: 'GA4 custom events, tracking funnels, heatmaps with Hotjar, A/B testing methods' },
      { week: 'Weeks 11-12', title: 'Omnichannel Capstone & Client Portfolio', desc: 'Executing a full marketing launch campaign for a real agency client with tracked ROI' }
    ],
    projects: [
      'End-to-End E-Commerce Launch Strategy with 3x ROI Target',
      'B2B SaaS Multi-Channel Lead Generation Campaign',
      'Viral Brand Awareness Blueprint for Consumer Tech Startup'
    ]
  },
  {
    id: 'seo-course',
    category: 'seo',
    title: 'Advanced Search Engine Optimization (SEO) & Organic Growth',
    badge: 'High Demand',
    rating: 4.88,
    reviews: '1,120+',
    duration: '8 Weeks',
    level: 'Intermediate to Pro',
    mode: 'Live Case-Study Based',
    color: 'from-emerald-600 to-teal-700',
    accent: '#10B981',
    price: 14999,
    originalPrice: '₹24,999',
    emi: '₹1,250/mo',
    shortDesc: 'Master On-Page, Technical SEO, Programmatic SEO, High-Authority Backlink Strategies, Keyword Intelligence, and AI-Driven Content Optimization.',
    description: 'Rank websites on page 1 of Google systematically. Gain deep expertise in technical crawl audits, schema markup, mobile speed optimization, programmatic SEO templates, and ethical high-DA link acquisition methods used by elite agencies.',
    salaryRange: '₹4.5 - 10 LPA',
    tools: ['Ahrefs', 'SEMrush', 'Screaming Frog', 'Google Search Console', 'Surfer SEO', 'Yoast/RankMath', 'Google Tag Manager', 'PageSpeed Insights'],
    skills: ['Technical SEO Auditing', 'Keyword Mapping & Intent Analysis', 'Programmatic SEO Scaling', 'Authority Backlink Building', 'Local & Global Rank Tracking'],
    curriculum: [
      { week: 'Weeks 1-2', title: 'Search Engine Architecture & Intent Research', desc: 'How Google indexing works, intent-based keyword research, competitor gap analysis' },
      { week: 'Weeks 3-4', title: 'On-Page SEO & AI Content Optimization', desc: 'Heading structures, internal linking silos, Surfer SEO content grading, schema markup' },
      { week: 'Weeks 5-6', title: 'Technical SEO & Site Speed Mastery', desc: 'Screaming Frog audits, Core Web Vitals, fixing crawl budgets, canonical tags, redirects' },
      { week: 'Weeks 7-8', title: 'Authority Link Building & Programmatic SEO', desc: 'Digital PR outreach, skyscraper technique, programmatic page creation, client reporting' }
    ],
    projects: [
      'Complete Technical SEO Audit & 50k Traffic Recovery Plan',
      'Programmatic SEO Engine Generating 1,000+ Target Landing Pages',
      'High-DA Backlink Outreach Campaign for Enterprise Client'
    ]
  },
  {
    id: 'meta-google-ads',
    category: 'meta-google-ads',
    title: 'Meta Ads & Google Ads Performance Growth Mastery',
    badge: 'Top ROI Specialization',
    rating: 4.98,
    reviews: '1,680+',
    duration: '10 Weeks',
    level: 'All Levels',
    mode: 'Real Budget Campaigns (₹8 Lakhs+ Spent)',
    color: 'from-amber-600 to-orange-600',
    accent: '#F59E0B',
    price: 19999,
    originalPrice: '₹32,999',
    emi: '₹1,666/mo',
    shortDesc: 'Learn to run, optimize, and scale profitable Meta Ads (Facebook & Instagram) and Google Ads (Search, Display, Shopping & YouTube) with high ROAS.',
    description: 'Master paid media advertising with real spend budgets provided during the course. Learn pixel tracking, CAPI setup, high-converting ad copy synthesis, audience segmentation, bidding strategies, and ROAS scaling frameworks.',
    salaryRange: '₹5.5 - 14 LPA',
    tools: ['Meta Ads Manager', 'Google Ads Studio', 'Meta Pixel & CAPI', 'Triple Whale', 'Looker Studio', 'Canva Ad Creator', 'Google Tag Manager'],
    skills: ['Meta Pixel & Conversion API', 'Google Search & PMax Ads', 'Retargeting Funnels', 'Creative Strategy & Hooks', 'ROAS Optimization & Scaling'],
    curriculum: [
      { week: 'Weeks 1-2', title: 'Paid Media Fundamentals & Conversion Tracking', desc: 'Meta Business Manager setup, Meta Pixel installation, Conversions API (CAPI), GTM tracking' },
      { week: 'Weeks 3-5', title: 'Meta Ads Mastery (Facebook & Instagram)', desc: 'Ad formats, cold audience targeting, lookalike audiences, retargeting funnels, creative testing' },
      { week: 'Weeks 6-8', title: 'Google Ads Mastery (Search, PMax & Shopping)', desc: 'Keyword match types, Quality Score optimization, Performance Max campaigns, Shopping feeds' },
      { week: 'Weeks 9-10', title: 'Budget Scaling, ROAS Analytics & Client Reporting', desc: 'Scaling winning ads to ₹50,000+/day, Looker Studio dashboards, client reporting & pitch deck' }
    ],
    projects: [
      'Scaling an E-Commerce Brand to 4.2x ROAS with Meta & Google Ads',
      'B2B High-Ticket Lead Gen Campaign with Google Search Ads',
      'Retargeting Campaign Engine with Dynamic Product Ads'
    ]
  }
];

const perks = [
  {
    icon: Laptop,
    title: '100% Live Agency Projects',
    desc: 'Work on actual client projects managed by Xipitechnologia agency, giving you real portfolio proof before graduation.'
  },
  {
    icon: Users,
    title: '1-on-1 Senior Mentorship',
    desc: 'Get personal guidance, code/campaign reviews, and career coaching from active agency leads and senior developers.'
  },
  {
    icon: Briefcase,
    title: 'Dedicated Placement Cell',
    desc: 'Resume rebuilding, portfolio polishing, mock interviews, and guaranteed job/internship interview referrals.'
  },
  {
    icon: Award,
    title: 'Verified Global Certification',
    desc: 'Earn an industry-recognized certificate shareable directly on LinkedIn and verifiable by employers online.'
  }
];

const successStories = [
  {
    name: 'Rahul Sharma',
    role: 'Full-Stack Developer at Tech Corp',
    course: 'Full-Stack Web Development Mastery',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
    quote: 'Xipitechnologia Academy transformed my career! The hands-on project work gave me the exact confidence needed to clear technical interviews effortlessly.',
    package: 'Package: $78,000/yr'
  },
  {
    name: 'Ananya Verma',
    role: 'Performance Lead at BrandScale',
    course: 'Meta Ads & Google Ads Mastery',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=250',
    quote: 'Managing real ad budgets during the course was a game changer. I managed to scale our e-commerce client to 4.5x ROAS within 3 weeks of joining!',
    package: 'Package: $85,000/yr'
  },
  {
    name: 'Vikram Patel',
    role: 'SEO Strategist at GrowthHQ',
    course: 'Advanced SEO & Organic Growth',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
    quote: 'The technical SEO and programmatic SEO modules are top-notch. I went from zero SEO knowledge to managing 500k monthly organic sessions!',
    package: 'Package: $68,000/yr'
  }
];

const faqs = [
  {
    q: 'Do I need prior coding or marketing experience to enroll?',
    a: 'No prior experience is required! Our programs are structured to take you from foundational concepts up to advanced industry standards with step-by-step guidance.'
  },
  {
    q: 'What is the schedule for live classes?',
    a: 'We offer flexible learning paths: Weekday Batches (Mon-Thu Evening) and Weekend Batches (Sat-Sun Morning/Afternoon). All live sessions are recorded and uploaded to your student portal.'
  },
  {
    q: 'How does the 100% placement support work?',
    a: 'Our placement team assists with resume optimization, GitHub/portfolio building, mock interviews with hiring managers, and direct interview scheduling with our network of 350+ hiring partner companies.'
  },
  {
    q: 'Will I get to work on real client projects?',
    a: 'Yes! Unlike theoretical courses, Xipitechnologia Academy integrates real client briefs from our active digital agency operations into your curriculum capstone.'
  },
  {
    q: 'Are EMI or flexible payment options available?',
    a: 'Yes, we offer zero-cost EMI plans up to 12 months, allowing you to pay in easy monthly installments.'
  }
];

export default function Academy({ onContactClick }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [enrollCourseTitle, setEnrollCourseTitle] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [enrollFormSubmitted, setEnrollFormSubmitted] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentCourseData, setPaymentCourseData] = useState({ title: '', amount: 24999 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    mode: 'Online Live Batch',
    schedule: 'Weekend Batch'
  });

  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleOpenEnroll = (courseTitle, amount = 24999) => {
    setPaymentCourseData({
      title: courseTitle || 'Academy Professional Program',
      amount: amount
    });
    setIsEnrollModalOpen(false);
    setIsPaymentModalOpen(true);
  };

  const handleOpenCounseling = (courseTitle) => {
    setEnrollCourseTitle(courseTitle || 'General Counseling');
    setFormData(prev => ({ ...prev, course: courseTitle || coursesData[0].title }));
    setEnrollFormSubmitted(false);
    setIsEnrollModalOpen(true);
  };

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    setEnrollFormSubmitted(true);
    setTimeout(() => {
      setIsEnrollModalOpen(false);
      setEnrollFormSubmitted(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-black text-white select-none pt-20">
      
      {/* 1. TOP ANNOUNCEMENT BANNER */}
      <div className="bg-gradient-to-r from-brand-red via-red-600 to-rose-700 py-3 px-4 text-center text-xs sm:text-sm font-semibold text-white tracking-wide shadow-lg flex items-center justify-center gap-2">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <span>ADMISSIONS OPEN FOR NEXT COHORT • UP TO 30% EARLY BIRD SCHOLARSHIP</span>
        <button 
          onClick={() => handleOpenCounseling('Scholarship Counseling')} 
          className="ml-2 underline font-bold hover:text-black transition-colors cursor-pointer"
        >
          Claim Now &rarr;
        </button>
      </div>

      {/* 2. ACADEMY HERO SECTION */}
      <section className="relative pt-16 pb-24 px-6 sm:px-8 lg:px-12 overflow-hidden border-b border-white/10">
        {/* Background Glowing Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-red/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-brand-red text-xs font-bold tracking-widest uppercase mb-6 shadow-inner"
          >
            <Sparkles className="h-4 w-4 text-brand-red animate-pulse" />
            <span>XIPITECHNOLOGIA CAREER ACADEMY</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-5xl mx-auto"
          >
            Master In-Demand Skills. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-red via-rose-400 to-amber-400 bg-clip-text text-transparent">
              Build Real Agency Projects.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            Industry-crafted programs engineered by agency leaders. Transform your potential into high-paying careers in Web Development, Digital Marketing, SEO, and Meta & Google Paid Ads.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#courses-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-brand-red/30"
            >
              <BookOpen className="h-5 w-5" />
              Explore All Programs
            </a>
            <button
              onClick={() => handleOpenCounseling('Free Career Counseling')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 cursor-pointer"
            >
              <PhoneCall className="h-5 w-5 text-brand-red" />
              Book Free Career Counseling
            </button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10"
          >
            {statsData.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 transition-colors">
                <p className="text-3xl sm:text-4xl font-extrabold text-white bg-gradient-to-r from-white to-white/70 bg-clip-text">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-brand-red mt-1">{stat.label}</p>
                <p className="text-xs text-white/50 mt-1 font-light leading-tight">{stat.detail}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 3. COURSES SECTION & FILTERS */}
      <section id="courses-section" className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              CAREER PATHWAYS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
              Featured Flagship Programs
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-2 max-w-xl">
              Choose your career track. Intensive curriculum designed for real-world mastery with 100% placement support.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative min-w-[280px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              type="text"
              placeholder="Search course or tool (e.g. React, SEO)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/15 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-red transition-colors"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/50 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Card Header Banner Gradient */}
              <div className={`h-3 bg-gradient-to-r ${course.color}`} />

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-brand-red/20 text-brand-red border border-brand-red/30">
                      {course.badge}
                    </span>
                    <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10 text-xs font-semibold text-white">
                      <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                      <span>{course.rating}</span>
                      <span className="text-white/40">({course.reviews})</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-brand-red transition-colors duration-300">
                    {course.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-3 text-sm text-white/70 leading-relaxed font-normal">
                    {course.shortDesc}
                  </p>

                  {/* Course Details Info Chips */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-medium text-white/70">
                    <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/5">
                      <Clock className="h-4 w-4 text-brand-red" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/5">
                      <GraduationCap className="h-4 w-4 text-brand-red" />
                      <span>{course.level}</span>
                    </div>
                    <div className="col-span-2 sm:col-span-1 flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/5">
                      <Laptop className="h-4 w-4 text-brand-red" />
                      <span>{course.mode}</span>
                    </div>
                  </div>

                  {/* Skills / Tools Chips */}
                  <div className="mt-6">
                    <p className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2.5">
                      Tools & Technologies Mastered
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {course.tools.slice(0, 6).map((tool, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-semibold text-white/80 border border-white/10">
                          {tool}
                        </span>
                      ))}
                      {course.tools.length > 6 && (
                        <span className="px-2.5 py-1 rounded-md bg-brand-red/10 text-[11px] font-semibold text-brand-red">
                          +{course.tools.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                </div>

                {/* Card Action Footer */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-white font-mono tracking-tight">
                        ₹{course.price?.toLocaleString('en-IN')}
                      </span>
                      {course.originalPrice && (
                        <span className="text-xs text-white/40 line-through">
                          {course.originalPrice}
                        </span>
                      )}
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        Special Offer
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-[11px] text-white/50">
                      <span>Salary: <strong className="text-white font-semibold">{course.salaryRange}</strong></span>
                      <span>•</span>
                      <span>EMI from <strong className="text-white/80">{course.emi}</strong></span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white border border-white/15 transition-colors cursor-pointer"
                    >
                      View Syllabus
                    </button>
                    <button
                      onClick={() => handleOpenEnroll(course.title, course.price)}
                      className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-brand-red hover:bg-brand-red-dark text-xs font-bold text-white shadow-lg shadow-brand-red/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      <CreditCard className="h-3.5 w-3.5" />
                      <span>Enroll Now</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16 bg-white/5 rounded-3xl border border-white/10">
            <Search className="h-10 w-10 text-white/30 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No courses match your search</h3>
            <p className="text-sm text-white/50 mt-1">Try clearing filters or search terms.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-6 py-2.5 bg-brand-red text-white text-xs font-bold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}

      </section>

      {/* 4. ACADEMY PERKS & ADVANTAGES */}
      <section className="py-20 bg-white/[0.02] border-y border-white/10 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              THE XIPITECHNOLOGIA EDGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
              Why Learn With Our Agency?
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-3">
              We are not a traditional institute. We are an active digital design agency that trains talent directly on real agency workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, idx) => {
              const IconComp = perk.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mb-6">
                      <IconComp className="h-6 w-6 text-brand-red" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{perk.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed font-normal">{perk.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. SUCCESS STORIES & ALUMNI TRANSITIONS */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            PROVEN RESULTS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
            Student Success Stories
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-3">
            Read how our alumni transitioned into high-growth roles across leading tech & agency partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="h-14 w-14 rounded-full object-cover border-2 border-brand-red"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-white">{story.name}</h4>
                    <p className="text-xs font-semibold text-brand-red">{story.role}</p>
                    <p className="text-[11px] text-white/40 mt-0.5">{story.course}</p>
                  </div>
                </div>

                <p className="text-sm text-white/70 italic leading-relaxed">
                  "{story.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {story.package}
                </span>
                <span className="text-[11px] text-white/40 font-medium">Verified Alumni</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ ACCORDION SECTION */}
      <section className="py-20 bg-white/[0.02] border-t border-white/10 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              HAVE QUESTIONS?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-brand-red transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <span className={`h-6 w-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-red text-white' : ''}`}>
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. BOTTOM CALL-TO-ACTION CARD */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-brand-red via-red-600 to-rose-800 p-10 sm:p-16 overflow-hidden text-center shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)] pointer-events-none" />
          
          <span className="inline-block text-xs font-bold uppercase tracking-widest bg-black/20 text-white px-4 py-1.5 rounded-full mb-4">
            LIMITED SEATS PER BATCH
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
            Ready to Launch Your High-Growth Tech & Marketing Career?
          </h2>
          <p className="mt-4 text-white/90 text-sm sm:text-lg max-w-2xl mx-auto font-normal">
            Speak with our career advisors today. Reserve your seat for the upcoming cohort and secure your early-bird scholarship.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleOpenEnroll('Academy Fast-Track Enrollment', 24999)}
              className="w-full sm:w-auto bg-black hover:bg-black/80 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-xl cursor-pointer"
            >
              Enroll via Razorpay (From ₹14,999) &rarr;
            </button>
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-xl text-base transition-all"
            >
              Contact Academy Team
            </button>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE SYLLABUS MODAL */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-neutral-900 border border-white/20 rounded-3xl p-6 sm:p-10 text-white max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                FULL CURRICULUM SYLLABUS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {selectedCourse.title}
              </h3>
              <p className="text-sm text-white/70 mt-2 leading-relaxed">
                {selectedCourse.description}
              </p>

              {/* Course Meta Info Bar */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs">
                <div>
                  <span className="text-white/40 block">Course Fee</span>
                  <span className="font-extrabold text-white text-sm font-mono">₹{selectedCourse.price?.toLocaleString('en-IN')}</span>
                </div>
                <div>
                  <span className="text-white/40 block">Duration</span>
                  <span className="font-bold text-white">{selectedCourse.duration}</span>
                </div>
                <div>
                  <span className="text-white/40 block">Learning Mode</span>
                  <span className="font-bold text-white">{selectedCourse.mode}</span>
                </div>
                <div>
                  <span className="text-white/40 block">Target Salary</span>
                  <span className="font-bold text-emerald-400">{selectedCourse.salaryRange}</span>
                </div>
              </div>

              {/* Module Timeline Breakdown */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-brand-red" />
                  Week-by-Week Modules
                </h4>
                <div className="space-y-4">
                  {selectedCourse.curriculum.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-extrabold text-brand-red uppercase">{item.week}</span>
                        <span className="text-xs font-bold text-white">{item.title}</span>
                      </div>
                      <p className="text-xs text-white/60 font-normal leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Projects Included */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-brand-red" />
                  Real Client Projects Included
                </h4>
                <ul className="space-y-2 text-xs text-white/80">
                  {selectedCourse.projects.map((proj, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{proj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    const title = selectedCourse.title;
                    const price = selectedCourse.price || 24999;
                    setSelectedCourse(null);
                    handleOpenEnroll(title, price);
                  }}
                  className="flex-1 bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3 rounded-xl text-sm transition-colors text-center cursor-pointer flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Enroll Now (₹{selectedCourse.price?.toLocaleString('en-IN')}) via Razorpay &rarr;</span>
                </button>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl text-sm transition-colors text-center"
                >
                  Close Syllabus
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 9. ENROLLMENT & COUNSELING FORM MODAL */}
      <AnimatePresence>
        {isEnrollModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-xl bg-neutral-900 border border-brand-red/30 rounded-3xl p-6 sm:p-10 text-white shadow-2xl"
            >
              <button
                onClick={() => setIsEnrollModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {enrollFormSubmitted ? (
                <div className="text-center py-10">
                  <div className="h-16 w-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Application Received!</h3>
                  <p className="text-sm text-white/70 mt-2 max-w-md mx-auto">
                    Thank you! Our senior academic counselor will call you within 2 business hours to share your course syllabus and early-bird scholarship details.
                  </p>
                </div>
              ) : (
                <>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                    FAST-TRACK ENROLLMENT
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    Book Free Counseling / Enroll
                  </h3>
                  <p className="text-xs text-white/60 mt-1">
                    Selected Course: <span className="text-brand-red font-bold">{enrollCourseTitle}</span>
                  </p>

                  <form onSubmit={handleEnrollSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-white/70 uppercase mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-white/70 uppercase mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-white/70 uppercase mb-1">Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-white/70 uppercase mb-1">Learning Format</label>
                        <select
                          value={formData.mode}
                          onChange={e => setFormData({ ...formData, mode: e.target.value })}
                          className="w-full bg-neutral-800 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                        >
                          <option value="Online Live Batch">Online Live Interactive</option>
                          <option value="Hybrid Agency Campus">Hybrid Agency Campus</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-white/70 uppercase mb-1">Preferred Schedule</label>
                        <select
                          value={formData.schedule}
                          onChange={e => setFormData({ ...formData, schedule: e.target.value })}
                          className="w-full bg-neutral-800 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red"
                        >
                          <option value="Weekend Batch">Weekend (Sat - Sun)</option>
                          <option value="Weekday Evening">Weekday (Mon - Thu)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3 mt-6">
                      <button
                        type="button"
                        onClick={() => {
                          const courseMatch = coursesData.find(c => c.title === enrollCourseTitle);
                          const finalAmount = courseMatch ? courseMatch.price : 24999;
                          setIsEnrollModalOpen(false);
                          setPaymentCourseData({
                            title: enrollCourseTitle || 'Academy Course Tuition',
                            amount: finalAmount
                          });
                          setIsPaymentModalOpen(true);
                        }}
                        className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-brand-red/30 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <CreditCard className="w-4 h-4" />
                        <span>Pay & Enroll Online (₹{(coursesData.find(c => c.title === enrollCourseTitle)?.price || 24999).toLocaleString('en-IN')} Razorpay) &rarr;</span>
                      </button>

                      <button
                        type="submit"
                        className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 rounded-xl text-sm transition-all cursor-pointer"
                      >
                        Submit Free Application & Request Syllabus
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Razorpay Online Payment Checkout */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        initialItem={paymentCourseData.title}
        initialAmount={paymentCourseData.amount}
        category="Academy Enrollment"
      />

    </div>
  );
}
