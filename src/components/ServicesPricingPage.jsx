import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check, Sparkles, ArrowRight, ShieldCheck, Zap, Globe, Search,
  TrendingUp, Video, Monitor, PhoneCall, CheckCircle2, ChevronDown,
  ChevronUp, HelpCircle, ArrowUpRight, Award, MessageSquare, Star,
  Calculator, DollarSign, CreditCard, Lock
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import PaymentModal from './PaymentModal';

export default function ServicesPricingPage({ onContactClick, onNavigate }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'quarterly' (10% off)
  const [activeCategory, setActiveCategory] = useState('all');
  const [currency, setCurrency] = useState('AUD'); // 'AUD' | 'INR'
  const [selectedBundleServices, setSelectedBundleServices] = useState([
    'website-seo',
    'meta-ads'
  ]);
  const [faqOpenIndex, setFaqOpenIndex] = useState(0);

  // Razorpay Payment Modal State
  const [paymentModal, setPaymentModal] = useState({
    isOpen: false,
    item: '',
    amount: 4999,
    category: 'Digital Marketing Service'
  });

  const handleOpenRazorpay = (itemName, amount, category) => {
    setPaymentModal({
      isOpen: true,
      item: itemName,
      amount: amount,
      category: category || 'Digital Marketing Service'
    });
  };

  // Core service offerings with exact requested AUD & INR pricing
  const services = [
    {
      id: 'website-seo',
      category: 'seo',
      name: 'Website SEO Management',
      tagline: 'Technical, On-Page & Authority Backlink Search Dominance',
      priceAUD: 399,
      priceINR: 21999,
      unit: '/ month',
      badge: 'Most Popular',
      popular: true,
      description: 'Comprehensive enterprise-grade search engine optimization designed to push your core commercial keywords to Google Page 1.',
      deliverables: [
        'Complete Technical & Mobile Core Web Vitals Audit',
        'Keyword Mapping & Commercial Intent Strategy (30+ keywords)',
        'On-Page Optimization (Meta titles, H1-H3, internal linking)',
        'High-Authority Niche Backlink Acquisition monthly',
        'Google Search Console & GA4 Setup & Telemetry',
        'Bi-Weekly Video Ranking & Traffic Growth Reports',
        'Dedicated SEO Strategist & Priority Slack/WhatsApp Support'
      ],
      idealFor: 'Businesses wanting sustainable, high-intent Google organic traffic without constant ad spend.'
    },
    {
      id: 'local-seo',
      category: 'seo',
      name: 'Local SEO & Google Maps',
      tagline: 'Google Business Profile 3-Pack Domination for Local Customers',
      priceAUD: 299,
      priceINR: 15999,
      unit: '/ month',
      badge: 'High ROI Local',
      popular: false,
      description: 'Capture nearby high-intent searches. Get your business featured in the coveted Google Local 3-Pack and Google Maps.',
      deliverables: [
        'Google Business Profile (GBP) Full Optimization & Verification',
        'Local 3-Pack Geo-Targeted Ranking Strategy',
        '50+ Verified Local Directory & Citation Submissions',
        'Automated Customer Review Generation Funnel',
        'Local Schema Markup & Geo-Tagged Image Optimization',
        'Local Competitor Proximity & Map Telemetry',
        'Monthly Calls & Foot-Traffic Telemetry Report'
      ],
      idealFor: 'Local contractors, clinics, salons, real estate, hospitality & local service providers.'
    },
    {
      id: 'meta-ads',
      category: 'ads',
      name: 'Meta Ads Management',
      tagline: 'Facebook & Instagram High-ROAS Performance Funnels',
      priceAUD: 399,
      priceINR: 21999,
      unit: '/ month',
      badge: 'Top Converting',
      popular: true,
      description: 'Precision-targeted paid social campaigns that turn scrolling prospects into paying customers and qualified booked appointments.',
      deliverables: [
        'Full Top, Middle & Bottom-of-Funnel Campaign Architecture',
        'High-Converting Ad Copywriting & Dynamic Creative Testing',
        'Meta Conversions API (CAPI) & Pixel Setup with Server-Side Tracking',
        'Custom Lookalike & Retargeting Audience Modeling',
        'A/B Creative Rotation to Eliminate Ad Fatigue',
        'Continuous Bid Management & ROAS Scaling Strategy',
        'Weekly Performance Dashboard & Creative Insights'
      ],
      idealFor: 'E-commerce brands, high-ticket services, gyms, clinics, and consumer brands looking for immediate pipeline scale.'
    },
    {
      id: 'google-ads',
      category: 'ads',
      name: 'Google Ads Management',
      tagline: 'High-Intent Search, Performance Max & Shopping Scaling',
      priceAUD: 499,
      priceINR: 27499,
      unit: '/ month',
      badge: 'Maximum Intent',
      popular: false,
      description: 'Reach buyers at the exact second they are searching for what you sell. Stop wasting budget on unqualified clicks.',
      deliverables: [
        'High-Intent Keyword Architecture & Single Keyword Ad Groups',
        'Performance Max (PMax) & Dynamic Search Setup',
        'Aggressive Negative Keyword Sculpting (Zero Wasted Budget)',
        'Conversion Tracking & Value-Based Bidding Configuration',
        'Landing Page Conversion Rate Optimization (CRO) Feedback',
        'Weekly Quality Score & Search Impression Share Optimization',
        'Direct Access to Google Certified Partner Media Buyer'
      ],
      idealFor: 'Companies wanting instant qualified inbound leads and high-ticket service inquiries.'
    },
    {
      id: 'youtube-seo',
      category: 'seo',
      name: 'YouTube SEO & Channel Growth',
      tagline: 'Rank in YouTube Search & Turn Video Views into High-Paying Leads',
      priceAUD: 299,
      priceINR: 15999,
      unit: '/ month',
      badge: 'Video Growth',
      popular: false,
      description: 'Optimize your video library to rank top for high-volume video search queries on both YouTube and Google Video search.',
      deliverables: [
        'Video Keyword Research & Search Gap Analysis',
        'High-CTR Thumbnail Design Strategy & Title Engineering',
        'Full Metadata, Description, Chapters & Tag Optimization',
        'End-Screen & Info-Card Funnel Linkage for Maximum Watch Time',
        'Strategic Playlist Curation to Boost Channel Authority',
        'Audience Retention & Click-Through Rate (CTR) Diagnostics',
        'Monthly Video Traffic & Subscriber Conversion Report'
      ],
      idealFor: 'Creators, agencies, coaches, educators, and brands investing in long-form or short-form video assets.'
    },
    {
      id: 'web-development',
      category: 'web',
      name: 'High-Converting Web Development',
      tagline: 'Bespoke, Blazing-Fast Mobile-First Web Architecture',
      priceAUD: 799,
      priceINR: 43999,
      unit: 'starting from',
      badge: 'Custom Engineering',
      popular: false,
      description: 'Custom React, Next.js, and WordPress websites engineered for lightning-quick load times, sleek aesthetics, and maximum conversion rates.',
      deliverables: [
        'Custom Tailored UX/UI Design Mockups (Desktop & Mobile)',
        'Full Mobile-First Responsive Frontend & Backend Development',
        'Ultra-Fast Google PageSpeed Score (95+ Guaranteed)',
        'Integrated Contact Forms, WhatsApp Chat & CRM Routing',
        'Payment Gateway Integration (Stripe, Razorpay, PayPal, Bank)',
        'Built-in Technical SEO, OpenGraph Tags & SSL Security',
        '100% Code Ownership & CMS Training Walkthrough'
      ],
      idealFor: 'Startups, growing brands, and modern businesses needing a world-class digital storefront.'
    }
  ];

  // Filtered services
  const filteredServices = useMemo(() => {
    if (activeCategory === 'all') return services;
    if (activeCategory === 'seo') return services.filter(s => s.category === 'seo');
    if (activeCategory === 'ads') return services.filter(s => s.category === 'ads');
    if (activeCategory === 'web') return services.filter(s => s.category === 'web');
    return services;
  }, [activeCategory]);

  // Bundle Calculator Logic (AUD & INR)
  const bundleCalculation = useMemo(() => {
    const selected = services.filter(s => selectedBundleServices.includes(s.id));
    const subtotalAUD = selected.reduce((sum, item) => sum + item.priceAUD, 0);
    const subtotalINR = selected.reduce((sum, item) => sum + (item.priceINR || Math.round(item.priceAUD * 55)), 0);
    // 15% bundle discount when 2 or more services selected
    const discountRate = selected.length >= 2 ? 0.15 : 0;
    const discountAmountAUD = Math.round(subtotalAUD * discountRate);
    const discountAmountINR = Math.round(subtotalINR * discountRate);
    const totalAUD = subtotalAUD - discountAmountAUD;
    const totalINR = subtotalINR - discountAmountINR;

    return {
      selected,
      subtotalAUD,
      discountAmountAUD,
      totalAUD,
      subtotalINR,
      discountAmountINR,
      totalINR,
      discountRate
    };
  }, [selectedBundleServices]);

  const toggleBundleItem = (id) => {
    setSelectedBundleServices(prev => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev; // Keep at least one
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // WhatsApp Order Link generator
  const getWhatsAppOrderUrl = (serviceName, price) => {
    const message = `Hi Xipitechnologia! I am interested in getting started with *${serviceName}* (AUD $${price}). Please provide more details on onboarding and our kick-off call.`;
    return `https://wa.me/918427779193?text=${encodeURIComponent(message)}`;
  };

  const getBundleWhatsAppUrl = () => {
    const names = bundleCalculation.selected.map(s => s.name).join(', ');
    const msg = `Hi Xipitechnologia! I would like to inquire about a Custom Service Bundle: *${names}* (Total: AUD $${bundleCalculation.total}/mo with 15% Bundle Discount applied). Let's schedule a kick-off session!`;
    return `https://wa.me/918427779193?text=${encodeURIComponent(msg)}`;
  };

  const faqs = [
    {
      q: 'Why are your service packages quoted in Australian Dollars (AUD)?',
      a: 'We work closely with business founders and companies across Australia, New Zealand, the US, UK, and globally. AUD offers transparent, competitive rates with clear milestone deliverables and no surprise exchange fees for our clients.'
    },
    {
      q: 'Are there any hidden setup fees or lock-in contracts?',
      a: 'No lock-in contracts whatsoever. All our recurring services (Website SEO, Local SEO, Meta Ads, Google Ads, YouTube SEO) are billed month-to-month. You can scale, modify, or pause your service at any time with 14 days notice before the next cycle.'
    },
    {
      q: 'How fast will we start seeing measurable results?',
      a: 'For Meta Ads and Google Ads, campaigns go live within 5-7 business days after onboarding, and lead flow typically commences within the first 48-72 hours of campaign activation. For Website SEO and Local SEO, technical fixes take effect immediately, while steady ranking momentum and traffic gains compound predictably within 30 to 90 days.'
    },
    {
      q: 'What ad spend is required for Meta & Google Ads management?',
      a: 'Our management fee covers all strategy, creative drafting, copy, audience configuration, pixel setup, and daily optimization. Your ad spend is paid directly to Meta or Google via your own ad account. We recommend starting with a minimum ad budget of AUD $30-$50 per day to allow algorithms to quickly optimize.'
    },
    {
      q: 'Can I bundle multiple services together for a discount?',
      a: 'Absolutely! When you select two or more services (for example: Web Development + Website SEO, or Meta Ads + Google Ads + Local SEO), our agency automatically applies a 15% Multi-Service Bundle Discount. Use the interactive Bundle Builder below to see your savings.'
    },
    {
      q: 'How do you handle reporting and communication?',
      a: 'You will have a dedicated Growth Director and direct access via private WhatsApp/Slack channel. We provide bi-weekly transparent video walkthroughs and live 24/7 access to your custom analytics telemetry dashboard.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans select-none overflow-x-hidden pt-28 pb-24 relative">
      
      {/* Background Ambient Mesh & Warm Red Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-brand-red/[0.05] via-amber-500/[0.02] to-transparent rounded-full blur-[170px] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* ============================================================== */}
        {/* 1. HERO SECTION                                                */}
        {/* ============================================================== */}
        <section className="text-center space-y-6 pt-4 sm:pt-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Australian & International Client Services</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-zinc-950 tracking-tight leading-[1.08]">
            Predictable Growth. <br className="hidden sm:inline" />
            <span className="text-brand-red">Transparent Pricing.</span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-normal">
            High-performance Web Development, Page 1 SEO, and high-ROAS Meta & Google ad management. Direct pricing in AUD with zero lock-in contracts.
          </p>

          {/* Quick Value Pillars */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-zinc-700">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>All Prices in AUD</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-brand-red shrink-0" />
              <span>No Lock-In Contracts</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 shadow-xs">
              <Award className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Dedicated Growth Strategist</span>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. CATEGORY SELECTOR & FILTER TABS                             */}
        {/* ============================================================== */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-zinc-200/80">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none w-full sm:w-auto">
            {[
              { id: 'all', label: 'All Services & Packages' },
              { id: 'seo', label: 'SEO & Organic Growth' },
              { id: 'ads', label: 'Paid Meta & Google Ads' },
              { id: 'web', label: 'Web Engineering' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-brand-red text-white shadow-md shadow-brand-red/25 ring-2 ring-brand-red/30'
                    : 'bg-white border border-zinc-200/90 text-zinc-600 hover:border-zinc-300 hover:text-zinc-950 hover:bg-zinc-50 shadow-xs'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Currency Toggle (AUD / INR) & Count */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
              {filteredServices.length} Services
            </span>
            <div className="inline-flex p-1 bg-zinc-100 rounded-xl border border-zinc-200">
              <button
                onClick={() => setCurrency('AUD')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currency === 'AUD'
                    ? 'bg-white text-brand-red shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                AUD ($)
              </button>
              <button
                onClick={() => setCurrency('INR')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currency === 'INR'
                    ? 'bg-white text-brand-red shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                INR (₹)
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. CORE SERVICE PRICING GRID                                   */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`bg-white rounded-3xl border transition-all duration-300 flex flex-col justify-between p-7 sm:p-8 relative group hover:-translate-y-1.5 ${
                service.popular
                  ? 'border-brand-red/60 shadow-xl shadow-brand-red/5 ring-1 ring-brand-red/20'
                  : 'border-zinc-200/90 hover:border-brand-red/40 shadow-sm hover:shadow-xl hover:shadow-zinc-200/60'
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border shadow-xs ${
                  service.popular
                    ? 'bg-brand-red text-white border-brand-red shadow-brand-red/20'
                    : 'bg-zinc-100 text-zinc-700 border-zinc-200'
                }`}>
                  {service.badge}
                </span>

                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1">
                  <CreditCard className="w-3 h-3 text-brand-red" />
                  {currency === 'AUD' ? 'AUD CURRENCY' : 'INR CURRENCY'}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-2 mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight leading-snug">
                  {service.name}
                </h3>
                <p className="text-xs font-semibold text-brand-red">
                  {service.tagline}
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pt-1">
                  {service.description}
                </p>
              </div>

              {/* Price Tag */}
              <div className="py-5 border-y border-zinc-100 my-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-bold text-zinc-500 uppercase">{currency}</span>
                  <span className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight">
                    {currency === 'AUD' ? `$${service.priceAUD}` : `₹${service.priceINR?.toLocaleString('en-IN')}`}
                  </span>
                  <span className="text-xs font-medium text-zinc-500 font-mono">
                    {service.unit}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-1 text-[11px]">
                  <span className="text-zinc-500 font-mono">
                    {currency === 'AUD' ? `≈ ₹${service.priceINR?.toLocaleString('en-IN')}` : `≈ AUD $${service.priceAUD}`}
                  </span>
                  <span className="text-emerald-700 font-semibold">
                    ✓ Razorpay Instant Checkout
                  </span>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="py-6 space-y-3.5 flex-1">
                <span className="text-xs font-black uppercase tracking-wider text-zinc-900 block">
                  What's Included:
                </span>
                <ul className="space-y-2.5">
                  {service.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs text-zinc-700 leading-relaxed">
                      <div className="h-4 w-4 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-2.5 w-2.5" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-6 border-t border-zinc-100 space-y-2.5">
                <button
                  type="button"
                  onClick={() => handleOpenRazorpay(
                    service.name,
                    service.priceINR,
                    `Digital Marketing: ${service.name}`
                  )}
                  className="w-full py-3.5 px-6 rounded-2xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md bg-brand-red hover:bg-brand-red-dark text-white shadow-brand-red/25 hover:scale-[1.02]"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Pay & Book via Razorpay ({currency === 'INR' ? `₹${service.priceINR?.toLocaleString('en-IN')}` : `AUD $${service.priceAUD}`})</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={getWhatsAppOrderUrl(service.name, service.priceAUD)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold bg-zinc-100 hover:bg-zinc-200 text-zinc-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-center"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    onClick={onContactClick}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-zinc-600 hover:text-brand-red hover:bg-zinc-50 transition-colors flex items-center justify-center gap-1 cursor-pointer border border-zinc-200"
                  >
                    <span>Free Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* 4. INTERACTIVE MULTI-SERVICE BUNDLE BUILDER                     */}
        {/* ============================================================== */}
        <section className="bg-white rounded-3xl border border-zinc-200/90 shadow-xl shadow-zinc-200/40 p-8 sm:p-12 space-y-8 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-100">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold tracking-wider uppercase">
                <Calculator className="w-3.5 h-3.5 text-emerald-600" />
                <span>Custom Bundle & Save 15%</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 tracking-tight">
                Build Your Complete Growth Engine
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 max-w-xl leading-relaxed">
                Combine Web Development, SEO, and Paid Ads into a unified growth engine. Select 2 or more services to unlock our automatic 15% agency bundle discount.
              </p>
            </div>

            <div className="bg-zinc-50 border border-zinc-200/90 rounded-2xl p-5 shrink-0 text-right min-w-[240px]">
              <span className="text-[11px] font-mono text-zinc-400 block uppercase">Estimated Investment</span>
              <div className="flex items-baseline justify-end gap-1.5 mt-1">
                <span className="text-xs font-bold text-zinc-500">{currency}</span>
                <span className="text-3xl sm:text-4xl font-black text-zinc-950">
                  {currency === 'AUD' ? `$${bundleCalculation.totalAUD}` : `₹${bundleCalculation.totalINR?.toLocaleString('en-IN')}`}
                </span>
                <span className="text-xs text-zinc-500 font-mono">/mo</span>
              </div>
              <span className="text-[11px] text-zinc-500 block font-mono">
                {currency === 'AUD' ? `≈ ₹${bundleCalculation.totalINR?.toLocaleString('en-IN')}/mo` : `≈ AUD $${bundleCalculation.totalAUD}/mo`}
              </span>
              {bundleCalculation.discountAmountAUD > 0 && (
                <span className="text-[11px] font-bold text-emerald-600 block mt-1">
                  🎉 You save {currency === 'AUD' ? `AUD $${bundleCalculation.discountAmountAUD}` : `₹${bundleCalculation.discountAmountINR?.toLocaleString('en-IN')}`}/mo (15% OFF)
                </span>
              )}
            </div>
          </div>

          {/* Interactive Checkbox Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(svc => {
              const isSelected = selectedBundleServices.includes(svc.id);
              return (
                <div
                  key={svc.id}
                  onClick={() => toggleBundleItem(svc.id)}
                  className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-red-50/40 border-brand-red/50 shadow-sm'
                      : 'bg-zinc-50/60 border-zinc-200/80 hover:bg-zinc-100/60 hover:border-zinc-300'
                  }`}
                >
                  <div className={`h-5 w-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                    isSelected
                      ? 'bg-brand-red text-white'
                      : 'border-2 border-zinc-300 bg-white'
                  }`}>
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-zinc-900 leading-tight">
                        {svc.name}
                      </span>
                      <span className="text-xs font-black text-brand-red font-mono">
                        {currency === 'AUD' ? `AUD $${svc.priceAUD}` : `₹${svc.priceINR?.toLocaleString('en-IN')}`}
                      </span>
                    </div>
                    <span className="text-[11px] text-zinc-500 block leading-snug">
                      {svc.tagline}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bundle CTA */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-zinc-100">
            <div className="flex items-center gap-3">
              <span className="text-xs text-zinc-500">
                Selected: <strong className="text-zinc-900">{bundleCalculation.selected.length} services</strong>
              </span>
              <span>•</span>
              <span className="text-xs text-emerald-700 font-semibold">
                No Lock-in Contracts • Razorpay Protected
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleOpenRazorpay(
                  `Custom Bundle: ${bundleCalculation.selected.map(s => s.name).join(' + ')}`,
                  bundleCalculation.totalINR,
                  'Custom Multi-Service Bundle (15% OFF)'
                )}
                className="bg-brand-red hover:bg-brand-red-dark text-white px-7 py-3 rounded-full text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-lg shadow-brand-red/25 transition-all hover:scale-105 cursor-pointer"
              >
                <CreditCard className="w-4 h-4" />
                <span>Pay Bundle via Razorpay ({currency === 'INR' ? `₹${bundleCalculation.totalINR?.toLocaleString('en-IN')}` : `AUD $${bundleCalculation.totalAUD}`}/mo)</span>
              </button>

              <a
                href={getBundleWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-all hover:scale-105"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp Quote</span>
              </a>
            </div>
          </div>

        </section>

        {/* ============================================================== */}
        {/* 5. SERVICE COMPARISON & DELIVERABLES MATRIX                    */}
        {/* ============================================================== */}
        <section className="space-y-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Transparent Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
              Compare What's Included in Every Package
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600">
              Every client engagement includes direct senior strategist access, weekly telemetry dashboards, and 100% white-hat execution.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-zinc-200/90 shadow-sm overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50/80 text-zinc-700 uppercase font-mono tracking-wider">
                  <th className="p-4 sm:p-5 font-bold">Service Package</th>
                  <th className="p-4 sm:p-5 font-bold">Monthly AUD</th>
                  <th className="p-4 sm:p-5 font-bold">Lead Turnaround</th>
                  <th className="p-4 sm:p-5 font-bold">Reporting Frequency</th>
                  <th className="p-4 sm:p-5 font-bold">Contract Term</th>
                  <th className="p-4 sm:p-5 font-bold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-800">
                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-zinc-950">
                    <span className="block text-sm">Website SEO Management</span>
                    <span className="text-[11px] text-zinc-500 font-normal">Technical + On-page + Authority Backlinks</span>
                  </td>
                  <td className="p-4 sm:p-5 font-mono font-bold text-brand-red">
                    {currency === 'AUD' ? 'AUD $399' : '₹21,999'}
                    <span className="block text-[10px] text-zinc-400 font-normal">
                      {currency === 'AUD' ? '≈ ₹21,999' : '≈ AUD $399'}
                    </span>
                  </td>
                  <td className="p-4 sm:p-5">30-60 Days Organic Scale</td>
                  <td className="p-4 sm:p-5">Bi-Weekly Video Walkthrough</td>
                  <td className="p-4 sm:p-5 font-semibold text-emerald-700">Month-to-Month</td>
                  <td className="p-4 sm:p-5">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleOpenRazorpay('Website SEO Management', 21999, 'Digital Marketing: Website SEO')}
                        className="px-3 py-1.5 rounded-lg bg-brand-red text-white hover:bg-brand-red-dark text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-xs"
                      >
                        <CreditCard className="w-3 h-3" />
                        <span>Pay Online</span>
                      </button>
                      <a
                        href={getWhatsAppOrderUrl('Website SEO Management', 399)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-brand-red p-1 text-xs"
                        title="Inquire via WhatsApp"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-zinc-950">
                    <span className="block text-sm">Local SEO & Google Maps</span>
                    <span className="text-[11px] text-zinc-500 font-normal">Google 3-Pack + Citations + Review Funnel</span>
                  </td>
                  <td className="p-4 sm:p-5 font-mono font-bold text-brand-red">
                    {currency === 'AUD' ? 'AUD $299' : '₹15,999'}
                    <span className="block text-[10px] text-zinc-400 font-normal">
                      {currency === 'AUD' ? '≈ ₹15,999' : '≈ AUD $299'}
                    </span>
                  </td>
                  <td className="p-4 sm:p-5">14-30 Days Local Lift</td>
                  <td className="p-4 sm:p-5">Monthly Calls Telemetry</td>
                  <td className="p-4 sm:p-5 font-semibold text-emerald-700">Month-to-Month</td>
                  <td className="p-4 sm:p-5">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleOpenRazorpay('Local SEO & Google Maps', 15999, 'Digital Marketing: Local SEO')}
                        className="px-3 py-1.5 rounded-lg bg-brand-red text-white hover:bg-brand-red-dark text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-xs"
                      >
                        <CreditCard className="w-3 h-3" />
                        <span>Pay Online</span>
                      </button>
                      <a
                        href={getWhatsAppOrderUrl('Local SEO & Google Maps', 299)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-brand-red p-1 text-xs"
                        title="Inquire via WhatsApp"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-zinc-950">
                    <span className="block text-sm">Meta Ads Management</span>
                    <span className="text-[11px] text-zinc-500 font-normal">Facebook & Instagram Conversion Funnels</span>
                  </td>
                  <td className="p-4 sm:p-5 font-mono font-bold text-brand-red">
                    {currency === 'AUD' ? 'AUD $399' : '₹21,999'}
                    <span className="block text-[10px] text-zinc-400 font-normal">
                      {currency === 'AUD' ? '≈ ₹21,999' : '≈ AUD $399'}
                    </span>
                  </td>
                  <td className="p-4 sm:p-5">48-72 Hours from Launch</td>
                  <td className="p-4 sm:p-5">Weekly ROAS & Budget Check</td>
                  <td className="p-4 sm:p-5 font-semibold text-emerald-700">Month-to-Month</td>
                  <td className="p-4 sm:p-5">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleOpenRazorpay('Meta Ads Management', 21999, 'Digital Marketing: Meta Ads')}
                        className="px-3 py-1.5 rounded-lg bg-brand-red text-white hover:bg-brand-red-dark text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-xs"
                      >
                        <CreditCard className="w-3 h-3" />
                        <span>Pay Online</span>
                      </button>
                      <a
                        href={getWhatsAppOrderUrl('Meta Ads Management', 399)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-brand-red p-1 text-xs"
                        title="Inquire via WhatsApp"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-zinc-950">
                    <span className="block text-sm">Google Ads Management</span>
                    <span className="text-[11px] text-zinc-500 font-normal">Search + PMax + Dynamic Retargeting</span>
                  </td>
                  <td className="p-4 sm:p-5 font-mono font-bold text-brand-red">
                    {currency === 'AUD' ? 'AUD $499' : '₹27,499'}
                    <span className="block text-[10px] text-zinc-400 font-normal">
                      {currency === 'AUD' ? '≈ ₹27,499' : '≈ AUD $499'}
                    </span>
                  </td>
                  <td className="p-4 sm:p-5">Instant Inbound Leads</td>
                  <td className="p-4 sm:p-5">Weekly Performance Telemetry</td>
                  <td className="p-4 sm:p-5 font-semibold text-emerald-700">Month-to-Month</td>
                  <td className="p-4 sm:p-5">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleOpenRazorpay('Google Ads Management', 27499, 'Digital Marketing: Google Ads')}
                        className="px-3 py-1.5 rounded-lg bg-brand-red text-white hover:bg-brand-red-dark text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-xs"
                      >
                        <CreditCard className="w-3 h-3" />
                        <span>Pay Online</span>
                      </button>
                      <a
                        href={getWhatsAppOrderUrl('Google Ads Management', 499)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-brand-red p-1 text-xs"
                        title="Inquire via WhatsApp"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-zinc-950">
                    <span className="block text-sm">YouTube SEO & Optimization</span>
                    <span className="text-[11px] text-zinc-500 font-normal">Search Ranking, CTR Titles & Thumbnails</span>
                  </td>
                  <td className="p-4 sm:p-5 font-mono font-bold text-brand-red">
                    {currency === 'AUD' ? 'AUD $299' : '₹15,999'}
                    <span className="block text-[10px] text-zinc-400 font-normal">
                      {currency === 'AUD' ? '≈ ₹15,999' : '≈ AUD $299'}
                    </span>
                  </td>
                  <td className="p-4 sm:p-5">Compounding Video Views</td>
                  <td className="p-4 sm:p-5">Monthly Channel Telemetry</td>
                  <td className="p-4 sm:p-5 font-semibold text-emerald-700">Month-to-Month</td>
                  <td className="p-4 sm:p-5">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleOpenRazorpay('YouTube SEO & Optimization', 15999, 'Digital Marketing: YouTube SEO')}
                        className="px-3 py-1.5 rounded-lg bg-brand-red text-white hover:bg-brand-red-dark text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-xs"
                      >
                        <CreditCard className="w-3 h-3" />
                        <span>Pay Online</span>
                      </button>
                      <a
                        href={getWhatsAppOrderUrl('YouTube SEO', 299)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-brand-red p-1 text-xs"
                        title="Inquire via WhatsApp"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-zinc-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-zinc-950">
                    <span className="block text-sm">Web Development & CRO</span>
                    <span className="text-[11px] text-zinc-500 font-normal">High-Speed Next.js / React / Custom Site</span>
                  </td>
                  <td className="p-4 sm:p-5 font-mono font-bold text-brand-red">
                    {currency === 'AUD' ? 'From AUD $799' : 'From ₹43,999'}
                    <span className="block text-[10px] text-zinc-400 font-normal">
                      {currency === 'AUD' ? '≈ ₹43,999' : '≈ AUD $799'}
                    </span>
                  </td>
                  <td className="p-4 sm:p-5">10-14 Business Days</td>
                  <td className="p-4 sm:p-5">Sprint Reviews & Staging</td>
                  <td className="p-4 sm:p-5 font-semibold text-emerald-700">Milestone Based</td>
                  <td className="p-4 sm:p-5">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleOpenRazorpay('Web Development & CRO', 43999, 'Digital Marketing: Web Engineering')}
                        className="px-3 py-1.5 rounded-lg bg-brand-red text-white hover:bg-brand-red-dark text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-xs"
                      >
                        <CreditCard className="w-3 h-3" />
                        <span>Pay Online</span>
                      </button>
                      <a
                        href={getWhatsAppOrderUrl('Web Development & CRO', 799)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-brand-red p-1 text-xs"
                        title="Inquire via WhatsApp"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. CLIENT TESTIMONIALS & PROOF                                 */}
        {/* ============================================================== */}
        <section className="space-y-6 pt-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Verified Client Outcomes
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 tracking-tight">
              What Founders Say About Working With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl border border-zinc-200/80 p-7 space-y-4 shadow-sm">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed italic">
                "Our Google Local 3-Pack rank shot to #1 in Melbourne within 45 days. The AUD $299 package gave us more qualified phone calls than a $3,000 agency we used last year."
              </p>
              <div className="pt-2 border-t border-zinc-100 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-brand-red/10 text-brand-red font-bold flex items-center justify-center text-xs">
                  DR
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-950 block">Dr. Robert Chen</span>
                  <span className="text-[10px] text-zinc-500 block">Principal Dentist, Melbourne Vic</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-zinc-200/80 p-7 space-y-4 shadow-sm">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed italic">
                "Their Meta Ads management generated a 4.4x verified ROAS for our ecommerce store. The weekly video updates and creative rotations are phenomenal."
              </p>
              <div className="pt-2 border-t border-zinc-100 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-brand-red/10 text-brand-red font-bold flex items-center justify-center text-xs">
                  SK
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-950 block">Sophie King</span>
                  <span className="text-[10px] text-zinc-500 block">Founder, Luxe Activewear Sydney</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-zinc-200/80 p-7 space-y-4 shadow-sm">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed italic">
                "The Web Development and Website SEO package transformed our commercial B2B sales pipeline. Top 3 Google rank for 18 high-value industrial keywords."
              </p>
              <div className="pt-2 border-t border-zinc-100 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-brand-red/10 text-brand-red font-bold flex items-center justify-center text-xs">
                  MW
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-950 block">Markus Wright</span>
                  <span className="text-[10px] text-zinc-500 block">Managing Director, Wright Logistics</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ)                            */}
        {/* ============================================================== */}
        <section className="max-w-4xl mx-auto space-y-6 pt-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600">
              Everything you need to know about pricing, deliverables, and how we work together.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = faqOpenIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setFaqOpenIndex(isOpen ? -1 : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-zinc-900">
                      {faq.q}
                    </span>
                    <div className={`p-1.5 rounded-full bg-zinc-100 text-zinc-600 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-red bg-brand-red/10' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 sm:p-6 pt-0 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================== */}
        {/* 8. BOTTOM HERO ACTION BANNER (Before standard site footer)      */}
        {/* ============================================================== */}
        <section className="rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-brand-red block">
              READY TO SCALE YOUR BUSINESS?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Start Today or Book a Free Strategy Audit
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              Speak directly with our senior digital strategists. We will audit your current website, SEO rankings, and ad campaigns for zero cost.
            </p>
          </div>

          <div className="relative z-10 pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/918427779193?text=Hi%20Xipitechnologia!%20I%20would%20like%20to%20claim%20my%20Free%2030-Minute%20Strategy%20Audit%20and%20discuss%20your%20service%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red hover:bg-brand-red-dark text-white font-extrabold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-xl shadow-brand-red/30 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Claim Free 30-Min Audit</span>
            </a>

            <button
              onClick={onContactClick}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 cursor-pointer"
            >
              Send Detailed Brief
            </button>
          </div>
        </section>

      </div>

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
