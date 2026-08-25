import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

export default function Navbar({ onContactClick, currentView, onNavigate }) {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
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
    'Pricing': 'contact',
    'Blog': 'blog',
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
      if (solutionName === 'Academy' || solutionName === 'Academy Courses' || solutionName === 'AI Consulting' || solutionName === 'AI Workflow Setup' || solutionName === 'Claude AI Implementation' || solutionName === 'Team AI Training') {
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

  const handleResourceItemClick = (e, resourceTitle) => {
    e.preventDefault();
    setIsResourcesOpen(false);
    setIsMobileMenuOpen(false);
    if (resourceTitle === 'Blog') {
      if (onNavigate) onNavigate('blog');
    } else if (resourceTitle === 'Case Studies' || resourceTitle === 'Portfolio') {
      if (onNavigate) onNavigate('portfolio');
    }
  };

  const getActiveState = (itemName) => {
    return currentView === viewMap[itemName];
  };

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#agency' },
    { name: 'Solutions', href: '#services', hasDropdown: true },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Academy', href: '#academy' },
    { name: 'Pricing', href: '#contact' },
    { name: 'Resources', href: '#', hasDropdown: true },
  ];

  const solutionsCategories = [
    {
      title: 'Marketing Solutions',
      items: [
        { name: 'Search Engine Optimization (SEO)', link: '#' },
        { name: 'Social Media Marketing', link: '#' },
        { name: 'Meta Ads', link: '#' },
        { name: 'PPC Advertising', link: '#' },
        { name: 'Performance Marketing', link: '#' }
      ]
    },
    {
      title: 'Web & Ecommerce',
      items: [
        { name: 'Website Design', link: '#' },
        { name: 'Branding Systems', link: '#' },
        { name: 'Ecommerce Marketing', link: '#' },
        { name: 'Marketplace Listing (Amazon, Flipkart, Meesho)', link: '#' }
      ]
    },
    {
      title: 'Creative & Content',
      items: [
        { name: 'Graphics Designing', link: '#' },
        { name: 'Video Editing', link: '#' },
        { name: 'Content Marketing', link: '#' }
      ]
    }
  ];

  const resourceCategories = [
    { title: 'Blog', desc: 'Read our latest articles on AI & growth.', link: '#' },
    { title: 'Case Studies', desc: 'Detailed stories of partner success.', link: '#' },
    { title: 'Free AI Tools (future)', desc: 'Explore our library of free AI engines.', link: '#' }
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
            href="#"
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
                  if (item.name === 'Resources') setIsResourcesOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.name === 'Solutions') setIsSolutionsOpen(false);
                  if (item.name === 'Resources') setIsResourcesOpen(false);
                }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleItemClick(e, item)}
                  className={`flex items-center gap-1 py-2 text-xs lg:text-sm font-semibold tracking-wide transition-colors duration-300 whitespace-nowrap ${getActiveState(item.name) ||
                    (item.name === 'Solutions' && isSolutionsOpen) ||
                    (item.name === 'Resources' && isResourcesOpen)
                    ? 'text-brand-red'
                    : 'text-white/70 hover:text-brand-red'
                    }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${(item.name === 'Solutions' && isSolutionsOpen) ||
                        (item.name === 'Resources' && isResourcesOpen)
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

                {/* Resources Dropdown Menu */}
                {item.name === 'Resources' && (
                  <AnimatePresence>
                    {isResourcesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 rounded-2xl border border-brand-border bg-white p-4 shadow-xl"
                      >
                        <div className="space-y-1">
                          {resourceCategories.map((service, idx) => (
                            <a
                              key={idx}
                              href={service.link}
                              onClick={(e) => handleResourceItemClick(e, service.title)}
                              className="block rounded-xl p-3 border border-transparent hover:border-brand-border hover:bg-brand-gray transition-all duration-200 group cursor-pointer"
                            >
                              <h4 className="text-sm font-bold text-black group-hover:text-brand-red transition-colors">
                                {service.title}
                              </h4>
                              <p className="text-xs text-black/50 mt-0.5 leading-relaxed">
                                {service.desc}
                              </p>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center shrink-0">
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
              className="fixed right-0 top-0 bottom-0 z-50 w-76 bg-white border-l border-brand-border p-6 md:hidden shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-brand-border mb-6">
                  <a
                    href="#"
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
                          } else if (item.name === 'Resources') {
                            setIsResourcesOpen(!isResourcesOpen);
                          } else {
                            handleItemClick(e, item);
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className={`flex w-full items-center justify-between text-base font-bold py-1.5 transition-colors ${getActiveState(item.name) ||
                          (item.name === 'Solutions' && isSolutionsOpen) ||
                          (item.name === 'Resources' && isResourcesOpen)
                          ? 'text-brand-red'
                          : 'text-black/80 hover:text-brand-red'
                          }`}
                      >
                        {item.name}
                        {item.hasDropdown && (
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-300 ${(item.name === 'Solutions' && isSolutionsOpen) ||
                              (item.name === 'Resources' && isResourcesOpen)
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

                      {/* Resources dropdown items for mobile */}
                      {item.name === 'Resources' && isResourcesOpen && (
                        <div className="mt-2 pl-4 space-y-3 border-l-2 border-brand-border">
                          {resourceCategories.map((service, sIdx) => (
                            <a
                              key={sIdx}
                              href={service.link}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1 text-sm text-black/60 hover:text-brand-red"
                            >
                              <div className="font-bold">{service.title}</div>
                              <div className="text-xs text-black/40 mt-0.5">{service.desc}</div>
                            </a>
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
