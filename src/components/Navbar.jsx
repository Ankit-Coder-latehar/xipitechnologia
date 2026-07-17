import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

export default function Navbar({ onContactClick, currentView, onNavigate }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const viewMap = {
    'Home': 'home',
    'About': 'about',
    'Solutions': 'solutions',
    'AI Consulting': 'solutions',
    'Pricing': 'contact',
    'Contact': 'contact'
  };

  const handleItemClick = (e, item) => {
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

  const getActiveState = (itemName) => {
    return currentView === viewMap[itemName];
  };

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#agency' },
    { name: 'Solutions', href: '#services' },
    { name: 'AI Consulting', href: '#services' },
    { name: 'Pricing', href: '#contact' },
    { name: 'Resources', href: '#', hasDropdown: true },
    { name: 'Contact', href: '#contact' }
  ];

  const resourceCategories = [
    { title: 'Blog', desc: 'Read our latest articles on AI & growth.', link: '#' },
    { title: 'Case Studies (future)', desc: 'Detailed stories of partner success.', link: '#' },
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
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-brand-border shadow-sm' 
          : 'bg-white/50 border-b border-transparent'
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
            className="flex items-center gap-1.5 group select-none"
          >
            <span className="font-display font-extrabold text-2xl tracking-tighter text-black group-hover:text-brand-red transition-colors duration-300">
              Xipi
            </span>
            <span className="text-brand-red font-display font-extrabold text-2xl tracking-tighter">
              technolia
            </span>
            <span className="text-[8px] font-bold text-black/40 self-start mt-1">®</span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleItemClick(e, item)}
                  className={`flex items-center gap-1 py-2 text-sm font-semibold tracking-wide transition-colors duration-300 ${
                    getActiveState(item.name) || (item.hasDropdown && isServicesOpen)
                      ? 'text-brand-red'
                      : 'text-black/70 hover:text-brand-red'
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isServicesOpen ? 'rotate-180 text-brand-red' : ''
                      }`}
                    />
                  )}
                </a>

                {/* Dropdown menu sensor for services */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
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
                              className="block rounded-xl p-3 border border-transparent hover:border-brand-border hover:bg-brand-gray transition-all duration-200 group"
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
          <div className="hidden md:block">
            <button
              onClick={onContactClick}
              className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-red transition-colors duration-300 active:scale-95"
            >
              Book a Free Strategy Call
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Mobile Drawer Trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="rounded-lg p-2 text-black hover:text-brand-red transition-colors"
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
                    className="flex items-center gap-1 group"
                  >
                    <span className="font-display font-extrabold text-xl text-black">
                      Xipi
                    </span>
                    <span className="text-brand-red font-display font-extrabold text-xl">
                      technolia
                    </span>
                    <span className="text-[8px] font-bold text-black/40 self-start mt-1">®</span>
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
                          if (item.hasDropdown) {
                            setIsServicesOpen(!isServicesOpen);
                          } else {
                            handleItemClick(e, item);
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className={`flex w-full items-center justify-between text-base font-bold py-1.5 transition-colors ${
                          getActiveState(item.name) ? 'text-brand-red' : 'text-black/80 hover:text-brand-red'
                        }`}
                      >
                        {item.name}
                        {item.hasDropdown && (
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-300 ${
                              isServicesOpen ? 'rotate-180 text-brand-red' : ''
                            }`}
                          />
                        )}
                      </button>

                      {/* Dropdown items for mobile */}
                      {item.hasDropdown && isServicesOpen && (
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
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-black py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-red transition-colors"
                >
                  Book a Free Strategy Call
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
