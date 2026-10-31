import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

export default function Navbar({ onContactClick, currentView, onNavigate }) {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const viewMap = {
    'Home': 'home',
    'About': 'about',
    'Solutions': 'solutions',
    'Portfolio': 'portfolio',
    'Case Studies': 'portfolio',
    'Academy': 'academy',
    'AI Consulting': 'academy',
    'Blog': 'blog',
    'Services': 'services',
    'Pricing': 'services',
    'Contact': 'contact'
  };

  const handleItemClick = (e, item) => {
    if (item.name === 'Solutions') {
      const targetView = viewMap[item.name];
      if (targetView && onNavigate) {
        e.preventDefault();
        onNavigate(targetView);
        setIsSolutionsOpen(false);
      }
      return;
    }
    if (item.hasDropdown) {
      e.preventDefault();
      return;
    }
    const targetView = viewMap[item.name];
    if (targetView && onNavigate) {
      e.preventDefault();
      onNavigate(targetView);
    }
  };

  const handleSolutionItemClick = (e, solutionName) => {
    e.preventDefault();
    setIsSolutionsOpen(false);
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      if (solutionName.includes('Pricing') || solutionName.includes('Services') || solutionName === 'Services & Pricing (AUD)') {
        onNavigate('services');
      } else if (solutionName === 'Academy' || solutionName === 'Academy Courses' || solutionName === 'AI Consulting' || solutionName === 'AI Workflow Setup' || solutionName === 'Claude AI Implementation' || solutionName === 'Team AI Training') {
        onNavigate('academy');
      } else if (solutionName === 'AI Marketing Automation') {
        onNavigate('ai-marketing-automation');
      } else if (solutionName === 'AI Content Systems') {
        onNavigate('ai-content-systems');
      } else if (solutionName === 'Website Design') {
        onNavigate('web-design');
      } else if (solutionName === 'Branding Systems') {
        onNavigate('branding');
      } else if (solutionName === 'Ecommerce Marketing' || solutionName === 'Ecommerce') {
        onNavigate('ecommerce-marketing');
      } else if (solutionName === 'Social Media Marketing') {
        onNavigate('social-media');
      } else if (solutionName === 'Performance Marketing') {
        onNavigate('performance-marketing');
      } else if (solutionName === 'PPC Advertising') {
        onNavigate('ppc-advertising');
      } else if (solutionName === 'Meta Ads') {
        onNavigate('meta-ads');
      } else if (solutionName === 'Search Engine Optimization (SEO)' || solutionName === 'SEO') {
        onNavigate('seo');
      } else if (solutionName === 'Graphics Designing') {
        onNavigate('graphic-design');
      } else if (solutionName === 'Video Editing') {
        onNavigate('video-editing');
      } else if (solutionName === 'Video Shoot') {
        onNavigate('video-shoot');
      } else if (solutionName === 'Content Marketing') {
        onNavigate('content-marketing');
      } else {
        onNavigate('solutions');
        if (currentView === 'solutions') {
          const servicesSection = document.getElementById('services');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  };

  const getActiveState = (itemName) => {
    if (itemName === 'Solutions') {
      const solutionViews = [
        'solutions', 'ai-marketing-automation', 'ai-content-systems',
        'web-design', 'branding', 'ecommerce-marketing', 'social-media',
        'meta-ads', 'performance-marketing', 'ppc-advertising',
        'seo', 'graphic-design', 'video-editing', 'video-shoot',
        'content-marketing'
      ];
      return solutionViews.includes(currentView);
    }
    if (itemName === 'Blog') {
      return currentView === 'blog' || currentView === 'blog-post';
    }
    return currentView === viewMap[itemName];
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Solutions', href: '/solutions', hasDropdown: true },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Academy', href: '/academy' },
  ];

  const solutionsCategories = [
    {
      title: 'Marketing Solutions',
      items: [
        { name: '★ Pricing & Packages (AUD)', link: '/services' },
        { name: 'Search Engine Optimization (SEO)', link: '/seo' },
        { name: 'Social Media Marketing', link: '/social-media' },
        { name: 'Meta Ads', link: '/meta-ads' },
        { name: 'PPC Advertising', link: '/ppc-advertising' },
        { name: 'Performance Marketing', link: '/performance-marketing' }
      ]
    },
    {
      title: 'Web & Ecommerce',
      items: [
        { name: 'Website Design', link: '/web-design' },
        { name: 'Branding Systems', link: '/branding' },
        { name: 'Ecommerce Marketing', link: '/ecommerce-marketing' },
        { name: 'Marketplace Listing (Amazon, Flipkart, Meesho)', link: '/solutions' }
      ]
    },
    {
      title: 'Creative & Content',
      items: [
        { name: 'Graphics Designing', link: '/graphic-design' },
        { name: 'Video Editing', link: '/video-editing' },
        { name: 'Video Shoot', link: '/video-shoot' },
        { name: 'Content Marketing', link: '/content-marketing' }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled styling trigger
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Headroom showing/hiding logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${isScrolled
        ? 'bg-black/90 backdrop-blur-md border-b border-white/10 shadow-sm'
        : 'bg-black/50 border-b border-transparent'
        }`}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      data-cursor="cross"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('home');
            }}
            className="flex items-center group select-none shrink-0"
          >
            <img src="/white-logo.png" alt="Xipi Technologia" className="h-12 sm:h-16 w-auto" />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => {
                  if (item.name === 'Solutions') setIsSolutionsOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.name === 'Solutions') setIsSolutionsOpen(false);
                }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleItemClick(e, item)}
                  className={`flex items-center gap-1 py-2 text-xs lg:text-sm font-semibold tracking-wide transition-colors duration-300 whitespace-nowrap ${getActiveState(item.name) ||
                    (item.name === 'Solutions' && isSolutionsOpen)
                    ? 'text-brand-red'
                    : 'text-white/70 hover:text-brand-red'
                    }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${item.name === 'Solutions' && isSolutionsOpen
                        ? 'rotate-180 text-brand-red'
                        : ''
                        }`}
                    />
                  )}
                </a>

                {/* Solutions Dropdown Menu */}
                {item.name === 'Solutions' && (
                  <AnimatePresence>
                    {isSolutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full z-50 mt-2 w-[760px] -translate-x-1/2 rounded-2xl border border-brand-border bg-white p-6 shadow-xl"
                      >
                        <div className="grid grid-cols-3 gap-6">
                          {solutionsCategories.map((category, idx) => (
                            <div key={idx} className="space-y-4">
                              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red border-b border-brand-border pb-2 select-none">
                                {category.title}
                              </h4>
                              <ul className="space-y-1">
                                {category.items.map((subItem, sIdx) => (
                                  <li key={sIdx}>
                                    <a
                                      href={subItem.link}
                                      onClick={(e) => handleSolutionItemClick(e, subItem.name)}
                                      className="block rounded-xl px-3 py-2 text-xs font-bold text-black/70 hover:bg-brand-gray hover:text-brand-red transition-all duration-200"
                                    >
                                      {subItem.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onContactClick}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-5.5 py-3 text-xs font-bold uppercase tracking-wider text-black hover:text-white hover:bg-brand-red transition-all duration-300 active:scale-95 shadow-sm leading-none whitespace-nowrap cursor-pointer"
            >
              <span>Book a Free Strategy Call</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Drawer Trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="rounded-lg p-2 text-white hover:text-brand-red transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            />

            {/* Menu container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-76 bg-white border-l border-brand-border p-6 md:hidden shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-brand-border mb-6">
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      if (onNavigate) onNavigate('home');
                    }}
                    className="flex items-center group"
                  >
                    <img src="/white-logo.png" alt="Xipi Technologia" className="h-12 w-auto" />
                  </a>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-lg p-1.5 text-black/60 hover:text-black"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <button
                        onClick={(e) => {
                          if (item.name === 'Solutions') {
                            setIsSolutionsOpen(!isSolutionsOpen);
                          } else {
                            handleItemClick(e, item);
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className={`flex w-full items-center justify-between text-base font-bold py-1.5 transition-colors ${getActiveState(item.name) ||
                          (item.name === 'Solutions' && isSolutionsOpen)
                          ? 'text-brand-red'
                          : 'text-black/80 hover:text-brand-red'
                          }`}
                      >
                        {item.name}
                        {item.hasDropdown && (
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-300 ${item.name === 'Solutions' && isSolutionsOpen
                              ? 'rotate-180 text-brand-red'
                              : ''
                              }`}
                          />
                        )}
                      </button>

                      {/* Solutions dropdown items for mobile */}
                      {item.name === 'Solutions' && isSolutionsOpen && (
                        <div className="mt-2 pl-4 space-y-4 border-l-2 border-brand-border">
                          {solutionsCategories.map((category, cIdx) => (
                            <div key={cIdx} className="space-y-1.5">
                              <div className="text-[10px] font-bold uppercase tracking-wider text-black/40 pt-1 select-none">
                                {category.title}
                              </div>
                              <div className="pl-1 space-y-2">
                                {category.items.map((subItem, sIdx) => (
                                  <a
                                    key={sIdx}
                                    href={subItem.link}
                                    onClick={(e) => handleSolutionItemClick(e, subItem.name)}
                                    className="block py-0.5 text-sm font-semibold text-black/70 hover:text-brand-red transition-colors"
                                  >
                                    {subItem.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Drawer footer CTA */}
              <div className="pt-6 border-t border-brand-border">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="group w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-black py-3.5 px-5 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-red transition-all duration-300 active:scale-95 shadow-sm leading-none whitespace-nowrap cursor-pointer"
                >
                  <span>Book a Free Strategy Call</span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
