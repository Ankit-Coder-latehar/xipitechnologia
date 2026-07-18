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
import Showreel from './components/Showreel';
import ClientGrid from './components/ClientGrid';
import AwardsAccordion from './components/AwardsAccordion';
import ContactForm from './components/ContactForm';
import ContactPage from './components/ContactPage';
import AIMarketingAutomation from './components/AIMarketingAutomation';
import AIContentSystems from './components/AIContentSystems';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WebDesign from './components/WebDesign';
import Branding from './components/Branding';
import EcommerceMarketing from './components/EcommerceMarketing';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState('home');
  const [transitioning, setTransitioning] = useState(false);

  // Lost Focus Tab Title swap
  useEffect(() => {
    const handleBlur = () => {
      document.title = 'Xipitechnolia® misses you!';
    };
    const handleFocus = () => {
      document.title = 'Award-Winning Digital Design Agency | Xipitechnolia®';
    };

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  const handleNavigate = (targetView) => {
    if (targetView === view) return;
    setTransitioning(true);

    // Switch page views halfway through curtain sweep (~550ms)
    setTimeout(() => {
      setView(targetView);
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
                Xipitechnolia
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

        {/* Sticky headroom header navigation */}
        <Navbar 
          onContactClick={() => handleNavigate('contact')} 
          currentView={view} 
          onNavigate={handleNavigate}
        />

        <main className="min-h-[80vh]">
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
                <HeroSection onContactClick={() => handleNavigate('contact')} />
                <PortfolioSlider />
                <WhyChooseUs />
                <Testimonials />
                <Showreel />
                <ClientGrid />
                <AwardsAccordion />
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
                <AboutHero />
                
                <AboutUs />
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

          </AnimatePresence>
        </main>

        {/* Site directory footer map */}
        <Footer />
      </div>
    </>
  );
}

export default App;
