import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioSlider from './components/PortfolioSlider';
import AboutHero from './components/AboutHero';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';
import Roadmap from './components/Roadmap';
import AwardsAccordion from './components/AwardsAccordion';
import ContactForm from './components/ContactForm';
import ContactPage from './components/ContactPage';
import AIMarketingAutomation from './components/AIMarketingAutomation';
import AIContentSystems from './components/AIContentSystems';
import Academy from './components/Academy';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WebDesign from './components/WebDesign';
import Branding from './components/Branding';
import EcommerceMarketing from './components/EcommerceMarketing';
import MajorServicesAccordion from './components/MajorServicesAccordion';
import IndustryGrowthMarquee from './components/IndustryGrowthMarquee';
import SocialMediaMarketing from './components/SocialMediaMarketing';
import MetaAds from './components/MetaAds';
import SearchEngineOptimization from './components/SearchEngineOptimization';
import PerformanceMarketing from './components/PerformanceMarketing';
import PpcAdvertising from './components/PpcAdvertising';
import BlogPage from './components/BlogPage';
import CaseStudies from './components/CaseStudies';
import PortfolioPage from './components/PortfolioPage';
import AlumniCompanies from './components/AlumniCompanies';
import CertificationCourses from './components/CertificationCourses';
import BeginJourneyCTA from './components/BeginJourneyCTA';
import WhatsAppWidget from './components/WhatsAppWidget';
import GraphicDesign from './components/GraphicDesign';
import VideoEditing from './components/VideoEditing';
import VideoShoot from './components/VideoShoot';
import ContentMarketing from './components/ContentMarketing';
import AdminPanel from './components/AdminPanel';
import BlogPostPage from './components/BlogPostPage';
import HomeBlogSection from './components/HomeBlogSection';
import ServicesPricingPage from './components/ServicesPricingPage';

export const ROUTE_MAP = {
  '/': 'home',
  '/admin': 'admin',
  '/admin/login': 'admin',
  '/admin/blogs': 'admin',
  '/about': 'about',
  '/solutions': 'solutions',
  '/academy': 'academy',
  '/ai-consulting': 'academy',
  '/ai-marketing-automation': 'ai-marketing-automation',
  '/ai-content-systems': 'ai-content-systems',
  '/web-design': 'web-design',
  '/branding': 'branding',
  '/ecommerce-marketing': 'ecommerce-marketing',
  '/social-media': 'social-media',
  '/meta-ads': 'meta-ads',
  '/performance-marketing': 'performance-marketing',
  '/performance': 'performance-marketing',
  '/ppc-advertising': 'ppc-advertising',
  '/ppc': 'ppc-advertising',
  '/seo': 'seo',
  '/blog': 'blog',
  '/portfolio': 'portfolio',
  '/case-studies': 'portfolio',
  '/work': 'portfolio',
  '/contact': 'contact',
  '/graphic-design': 'graphic-design',
  '/video-editing': 'video-editing',
  '/video-shoot': 'video-shoot',
  '/content-marketing': 'content-marketing',
  '/services': 'services',
  '/pricing': 'services',
  '/services-pricing': 'services',
  '/seo-services': 'services',
};

export const VIEW_TO_PATH = {
  'home': '/',
  'services': '/services',
  'admin': '/admin',
  'about': '/about',
  'solutions': '/solutions',
  'academy': '/academy',
  'ai-consulting': '/academy',
  'ai-marketing-automation': '/ai-marketing-automation',
  'ai-content-systems': '/ai-content-systems',
  'web-design': '/web-design',
  'branding': '/branding',
  'ecommerce-marketing': '/ecommerce-marketing',
  'social-media': '/social-media',
  'meta-ads': '/meta-ads',
  'performance-marketing': '/performance-marketing',
  'ppc-advertising': '/ppc-advertising',
  'seo': '/seo',
  'blog': '/blog',
  'portfolio': '/portfolio',
  'case-studies': '/portfolio',
  'work': '/portfolio',
  'contact': '/contact',
  'graphic-design': '/graphic-design',
  'video-editing': '/video-editing',
  'video-shoot': '/video-shoot',
  'content-marketing': '/content-marketing',
  'blog-post': '/blog',
};

const VIEW_TITLES = {
  'admin': 'Admin Editorial Control Center | Xipitechnologia®',
  'home': 'Award-Winning Digital Design Agency | Xipitechnologia®',
  'about': 'About Us | Xipitechnologia®',
  'solutions': 'Solutions & Services | Xipitechnologia®',
  'academy': 'Academy & AI Consulting | Xipitechnologia®',
  'ai-marketing-automation': 'AI Marketing Automation | Xipitechnologia®',
  'ai-content-systems': 'AI Content Systems | Xipitechnologia®',
  'web-design': 'Website Design & Development | Xipitechnologia®',
  'branding': 'Branding Systems | Xipitechnologia®',
  'ecommerce-marketing': 'Ecommerce Marketing | Xipitechnologia®',
  'social-media': 'Social Media Marketing | Xipitechnologia®',
  'meta-ads': 'Meta Ads & Paid Social | Xipitechnologia®',
  'performance-marketing': 'Performance Marketing | Xipitechnologia®',
  'ppc-advertising': 'PPC Advertising | Xipitechnologia®',
  'seo': 'Search Engine Optimization (SEO) | Xipitechnologia®',
  'blog': 'Blog & Insights | Xipitechnologia®',
  'blog-post': 'Article & Insights | Xipitechnologia®',
  'portfolio': 'Portfolio & Case Studies | Xipitechnologia®',
  'contact': 'Contact Us & Book Free Call | Xipitechnologia®',
  'graphic-design': 'Graphics Designing | Xipitechnologia®',
  'video-editing': 'Video Editing | Xipitechnologia®',
  'video-shoot': 'Video Shoot Production | Xipitechnologia®',
  'content-marketing': 'Content Marketing | Xipitechnologia®',
};

export const getBlogIdFromLocation = (pathname, search) => {
  if (typeof window !== 'undefined') {
    const currentSearch = search !== undefined ? search : window.location.search;
    const currentPath = pathname !== undefined ? pathname : window.location.pathname;

    if (currentSearch) {
      const params = new URLSearchParams(currentSearch);
      const queryId = params.get('id') || params.get('blog');
      if (queryId) return decodeURIComponent(queryId.trim());
    }

    const cleanPath = currentPath.split('?')[0].split('#')[0].replace(/\/+$/, '');
    if (cleanPath.toLowerCase().startsWith('/blog/')) {
      const id = cleanPath.slice('/blog/'.length);
      if (id && id.trim()) return decodeURIComponent(id.trim());
    }
  }
  return null;
};

const getViewFromPath = (pathname, search) => {
  if (!pathname) return 'home';
  const cleanPath = pathname.split('?')[0].split('#')[0].toLowerCase().replace(/\/+$/, '') || '/';
  const blogId = getBlogIdFromLocation(pathname, search);
  if (blogId) {
    return 'blog-post';
  }
  return ROUTE_MAP[cleanPath] || 'home';
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [blogId, setBlogId] = useState(() => {
    return getBlogIdFromLocation();
  });
  const [view, setView] = useState(() => {
    if (typeof window !== 'undefined') {
      return getViewFromPath(window.location.pathname, window.location.search);
    }
    return 'home';
  });
  const [transitioning, setTransitioning] = useState(false);

  // Sync document title with current view
  useEffect(() => {
    if (VIEW_TITLES[view]) {
      document.title = VIEW_TITLES[view];
    }
  }, [view]);

  // Handle browser Back & Forward button navigation (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const targetView = getViewFromPath(window.location.pathname, window.location.search);
      const targetBlogId = getBlogIdFromLocation(window.location.pathname, window.location.search);
      setView(targetView);
      setBlogId(targetBlogId);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Lost Focus Tab Title swap
  useEffect(() => {
    const handleBlur = () => {
      document.title = 'Xipitechnologia® misses you!';
    };
    const handleFocus = () => {
      document.title = VIEW_TITLES[view] || 'Award-Winning Digital Design Agency | Xipitechnologia®';
    };

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, [view]);

  const handleNavigate = (targetView, targetParam) => {
    let targetPath = VIEW_TO_PATH[targetView] || '/';
    if (targetView === 'blog-post' && targetParam) {
      targetPath = `/blog/${targetParam}`;
    }
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ view: targetView, param: targetParam }, '', targetPath);
    }

    if (targetView === view && (targetView !== 'blog-post' || targetParam === blogId)) return;
    setTransitioning(true);

    // Switch page views halfway through curtain sweep (~550ms)
    setTimeout(() => {
      setView(targetView);
      if (targetView === 'blog-post') {
        setBlogId(targetParam || getBlogIdFromLocation());
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 550);

    // Turn off transition curtain cover state (~1100ms)
    setTimeout(() => {
      setTransitioning(false);
    }, 1100);
  };

  return (
    <>
      {/* 5-Phase Preloader */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* Dynamic curtain slide sweep transitions */}
      <AnimatePresence>
        {transitioning && (
          <>
            {/* Red curtain background layer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: '-100%' }}
              exit={{ x: '-100%' }}
              transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 z-50 bg-brand-red pointer-events-none"
            />
            {/* Black curtain layer displaying logo text */}
            <motion.div
              initial={{ x: '125%' }}
              animate={{ x: '-100%' }}
              exit={{ x: '-100%' }}
              transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.08 }}
              className="fixed inset-0 z-50 bg-black flex items-center justify-center pointer-events-none"
            >
              <span className="font-display font-extrabold text-4xl text-white tracking-tighter">
                Xipitechnologia
              </span>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Page Layout (faded in once loaded) */}
      <div className={`relative min-h-screen bg-white transition-opacity duration-700 ${
        isLoading ? 'opacity-0' : 'opacity-100'
      }`}>
        {/* Custom pointer cursor (only active on desktop viewports) */}
        <CustomCursor />

        {/* Sticky headroom header navigation - Hidden on dedicated admin route */}
        {view !== 'admin' && (
          <Navbar 
            onContactClick={() => handleNavigate('contact')} 
            currentView={view} 
            onNavigate={handleNavigate}
          />
        )}

        <main className={view === 'admin' ? 'min-h-screen bg-[#07090E]' : 'min-h-[80vh]'}>
          <AnimatePresence mode="wait">
            
            {/* Home View */}
            {view === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <HeroSection 
                  onContactClick={() => handleNavigate('contact')} 
                  onViewWorkClick={() => handleNavigate('portfolio')}
                />
                <PortfolioSlider onNavigate={handleNavigate} />
                <AlumniCompanies />
                <WhyChooseUs onContactClick={() => handleNavigate('contact')} />
                <MajorServicesAccordion onContactClick={() => handleNavigate('contact')} onNavigate={handleNavigate} />
                <Testimonials />
                <IndustryGrowthMarquee onContactClick={() => handleNavigate('contact')} />
                <AwardsAccordion />
                <HomeBlogSection onNavigate={handleNavigate} />
                <BeginJourneyCTA onContactClick={() => handleNavigate('contact')} />
              </motion.div>
            )}

            {/* About View */}
            {view === 'about' && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                {/* About Page Hero */}
                <AboutHero onContactClick={() => handleNavigate('contact')} />
                
                <AboutUs onContactClick={() => handleNavigate('contact')} />
              </motion.div>
            )}

            {/* Solutions View */}
            {view === 'solutions' && (
              <motion.div
                key="solutions"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                {/* Solutions Page Hero */}
                <section className="pt-40 pb-16 bg-white border-b border-brand-border select-none">
                  <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
                      Our Solutions
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-black mt-4 leading-[1.1]">
                      Expertise engineered <br className="hidden sm:inline" />
                      to scale acquisitions.
                    </h1>
                  </div>
                </section>
                <WhatWeDo />
                <Roadmap />
              </motion.div>
            )}

            {/* Academy View */}
            {(view === 'academy' || view === 'ai-consulting') && (
              <motion.div
                key="academy"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <Academy onContactClick={() => handleNavigate('contact')} />
              </motion.div>
            )}

            {/* AI Marketing Automation View */}
            {view === 'ai-marketing-automation' && (
              <motion.div
                key="ai-marketing-automation"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <AIMarketingAutomation onContactClick={() => handleNavigate('contact')} />
              </motion.div>
            )}

            {/* AI Content Systems View */}
            {view === 'ai-content-systems' && (
              <motion.div
                key="ai-content-systems"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <AIContentSystems onContactClick={() => handleNavigate('contact')} />
              </motion.div>
            )}

            {/* Web Design View */}
            {view === 'web-design' && (
              <motion.div
                key="web-design"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <WebDesign onContactClick={() => handleNavigate('contact')} />
              </motion.div>
            )}

            {/* Branding View */}
            {view === 'branding' && (
              <motion.div
                key="branding"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <Branding onContactClick={() => handleNavigate('contact')} />
              </motion.div>
            )}

            {/* Ecommerce Marketing View */}
            {view === 'ecommerce-marketing' && (
              <motion.div
                key="ecommerce-marketing"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <EcommerceMarketing onContactClick={() => handleNavigate('contact')} />
              </motion.div>
            )}

            {/* Social Media Marketing View */}
            {view === 'social-media' && (
              <motion.div
                key="social-media"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <SocialMediaMarketing onContactClick={() => handleNavigate('contact')} />
              </motion.div>
            )}

            {/* Meta Ads & Paid Advertising View */}
            {view === 'meta-ads' && (
              <motion.div
                key="meta-ads"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <MetaAds onContactClick={() => handleNavigate('contact')} />
              </motion.div>
            )}

            {/* Performance Marketing View */}
            {(view === 'performance-marketing' || view === 'performance') && (
              <motion.div
                key="performance-marketing"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <PerformanceMarketing onContactClick={() => handleNavigate('contact')} />
              </motion.div>
            )}

            {/* PPC Advertising View */}
            {(view === 'ppc-advertising' || view === 'ppc') && (
              <motion.div
                key="ppc-advertising"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <PpcAdvertising onContactClick={() => handleNavigate('contact')} />
              </motion.div>
            )}

            {/* Search Engine Optimization View */}
            {view === 'seo' && (
              <motion.div
                key="seo"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <SearchEngineOptimization onContactClick={() => handleNavigate('contact')} />
              </motion.div>
            )}

            {/* Blog & Insights View */}
            {view === 'blog' && (
              <motion.div
                key="blog"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <BlogPage 
                  onContactClick={() => handleNavigate('contact')} 
                  onNavigate={handleNavigate}
                />
              </motion.div>
            )}

            {/* Dedicated Standalone Blog Post View */}
            {view === 'blog-post' && (
              <motion.div
                key={`blog-post-${blogId || 'post'}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <BlogPostPage
                  blogId={blogId}
                  onContactClick={() => handleNavigate('contact')}
                  onNavigate={handleNavigate}
                />
              </motion.div>
            )}

            {/* Services & Pricing Plans View */}
            {view === 'services' && (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <ServicesPricingPage 
                  onContactClick={() => handleNavigate('contact')} 
                  onNavigate={handleNavigate}
                />
              </motion.div>
            )}

            {/* Portfolio & Case Studies View */}
            {(view === 'portfolio' || view === 'case-studies' || view === 'work') && (
              <motion.div
                key="portfolio"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <PortfolioPage 
                  onContactClick={() => handleNavigate('contact')} 
                  onNavigate={handleNavigate}
                />
              </motion.div>
            )}

            {/* Contact View */}
            {view === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <ContactPage />
              </motion.div>
            )}

            {/* Graphic Design View */}
            {view === 'graphic-design' && (
              <motion.div
                key="graphic-design"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <GraphicDesign onContactClick={() => handleNavigate('contact')} />
              </motion.div>
            )}

            {/* Video Editing View */}
            {view === 'video-editing' && (
              <motion.div
                key="video-editing"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <VideoEditing onContactClick={() => handleNavigate('contact')} />
              </motion.div>
            )}

            {/* Video Shoot View */}
            {view === 'video-shoot' && (
              <motion.div
                key="video-shoot"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <VideoShoot onContactClick={() => handleNavigate('contact')} />
              </motion.div>
            )}

            {/* Content Marketing View */}
            {view === 'content-marketing' && (
              <motion.div
                key="content-marketing"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <ContentMarketing onContactClick={() => handleNavigate('contact')} />
              </motion.div>
            )}

            {/* Admin Panel View */}
            {view === 'admin' && (
              <motion.div
                key="admin"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <AdminPanel onNavigate={handleNavigate} />
              </motion.div>
            )}

          </AnimatePresence>
        </main>

        {/* Site directory footer map - Hidden on dedicated admin route */}
        {view !== 'admin' && <Footer onNavigate={handleNavigate} />}

        {/* Global Floating WhatsApp Widget - Hidden on dedicated admin route */}
        {view !== 'admin' && <WhatsAppWidget />}
      </div>
    </>
  );
}

export default App;
