import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Search Engine Optimization (SEO)',
    category: 'SEARCH ENGINE OPTIMIZATION',
    desc: 'Improve your search rankings, increase organic traffic, and generate qualified leads with our data-driven SEO strategies. We optimize every aspect of your website to deliver long-term business growth and higher online visibility.',
    tags: ['SEO Audit', 'Local SEO', 'Technical SEO', 'Content SEO'],
    buttonText: 'Explore SEO →',
    target: 'seo',
    color: '#FFECEC',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '02',
    title: 'Performance Marketing',
    category: 'PERFORMANCE MARKETING',
    desc: 'Maximize your marketing budget with ROI-focused campaigns. We create and optimize paid advertising strategies that generate quality leads, increase conversions, and deliver measurable business results.',
    tags: ['Google Ads', 'PPC', 'Lead Generation', 'ROI'],
    buttonText: 'Explore Performance Marketing →',
    target: 'performance-marketing',
    color: '#F3F4F6',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '03',
    title: 'Social Media Marketing',
    category: 'SOCIAL MEDIA MARKETING',
    desc: 'Build a stronger online presence with engaging content and strategic social media campaigns that increase brand awareness, customer engagement, and business growth.',
    tags: ['Instagram', 'Facebook', 'LinkedIn', 'Content Strategy'],
    buttonText: 'Explore Social Media →',
    target: 'social-media',
    color: '#ECF5FC',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '04',
    title: 'Website Design & Development',
    category: 'WEBSITE DESIGN & DEVELOPMENT',
    desc: 'Your website should do more than look good. We design fast, responsive, and conversion-focused websites that turn visitors into customers.',
    tags: ['WordPress', 'UI/UX', 'Landing Pages', 'Speed Optimized'],
    buttonText: 'Explore Web Development →',
    target: 'web-design',
    color: '#EDECF9',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '05',
    title: 'Meta Ads Management',
    category: 'META ADS',
    desc: 'Reach the right audience on Facebook and Instagram with highly targeted Meta advertising campaigns designed to generate leads, sales, and measurable growth.',
    tags: ['Facebook Ads', 'Instagram Ads', 'Retargeting', 'Conversions'],
    buttonText: 'Explore Meta Ads →',
    target: 'meta-ads',
    color: '#FFF5EB',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f311?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '06',
    title: 'Graphic Design & Branding',
    category: 'GRAPHIC DESIGN & BRANDING',
    desc: 'Create a memorable brand identity with visually compelling designs for social media, marketing materials, logos, brochures, and business collateral.',
    tags: ['Brand Identity', 'Social Creatives', 'Print Design', 'Logo Design'],
    buttonText: 'Explore Branding →',
    target: 'branding',
    color: '#F4FBF7',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function PortfolioSlider({ onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [progress, setProgress] = useState(0);

  // Auto transition slide timer
  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + 1;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const currentService = services[currentIndex];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id="work" className="py-24 bg-white border-t border-brand-border">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red select-none block">
              OUR DIGITAL MARKETING SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
              Digital Solutions That <br />
              Drive Real Business Growth.
            </h2>
            <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal">
              We combine strategy, creativity, and technology to help businesses attract the right audience, generate qualified leads, and achieve measurable growth.
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-4">
            <div className="text-sm font-semibold tracking-wider text-black/40">
              <span className="text-black font-extrabold">{currentService.id}</span> / 0{services.length}
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-white text-black hover:border-black hover:bg-brand-gray transition-colors duration-200 cursor-pointer"
                aria-label="Previous slide"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-white text-black hover:border-black hover:bg-brand-gray transition-colors duration-200 cursor-pointer"
                aria-label="Next slide"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slide Container */}
        <div className="relative overflow-hidden rounded-3xl border border-brand-border aspect-[16/10] md:aspect-[21/10] w-full">
          {/* Progress loader bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-border z-20">
            <div className="h-full bg-brand-red transition-all duration-75" style={{ width: `${progress}%` }} />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 w-full h-full flex flex-col md:flex-row"
              style={{ backgroundColor: currentService.color }}
            >
              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-between h-1/2 md:h-full">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-red block">
                    {currentService.category}
                  </span>
                  
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
                    {currentService.title}
                  </h3>

                  <p className="text-sm sm:text-base text-black/70 leading-relaxed max-w-md font-normal">
                    {currentService.desc}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Tag List */}
                  <div className="flex flex-wrap gap-2">
                    {currentService.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/60 border border-brand-border px-3 py-1 text-xs font-semibold text-black/80 select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      if (onNavigate) onNavigate(currentService.target);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black hover:text-brand-red transition-colors group cursor-pointer"
                  >
                    {currentService.buttonText}
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden relative">
                <motion.img
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-full object-cover"
                />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Explore All Services CTA */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => {
              if (onNavigate) onNavigate('solutions');
            }}
            className="group flex items-center justify-center gap-2.5 rounded-full bg-black px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-red transition-all duration-300 active:scale-95 shadow-md cursor-pointer"
          >
            <span>Explore All Digital Services</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

      </div>
    </section>
  );
}

