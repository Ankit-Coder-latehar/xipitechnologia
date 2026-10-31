import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Palette, 
  Share2, 
  Megaphone, 
  Layers, 
  Printer, 
  Package, 
  Monitor, 
  ShoppingBag,
  Award,
  Zap,
  Check
} from 'lucide-react';

export default function GraphicDesign({ onContactClick }) {
  const [openFaq, setOpenFaq] = useState(0);

  const whyMattersPoints = [
    'Build a strong brand identity',
    'Improve customer engagement',
    'Increase brand recognition',
    'Create professional marketing materials',
    'Enhance your online and offline presence',
    'Support your digital marketing campaigns'
  ];

  const services = [
    {
      title: 'Brand Identity Design',
      icon: <Palette className="h-6 w-6 text-brand-red" />,
      desc: 'Brand identity design services of Xi Pi Technologia help businesses create a strong, consistent, and professional brand image. We develop complete branding solutions, including colour palettes, typography, brand guidelines, stationery, and visual elements that maintain consistency across all platforms. Our professional brand identity design ensures your website, social media, marketing materials, packaging, and print designs all present a strong brand recognition, helping your business stand out in a competitive market.'
    },
    {
      title: 'Social Media Graphics',
      icon: <Share2 className="h-6 w-6 text-brand-red" />,
      desc: 'Eye-catching social media graphics help your brand get noticed online.Creative designs of Xi Pi Technologia are customised to match your brand identity while effectively communicating your message to your target audience. Our social media graphic design services include Facebook posts, Instagram posts and stories, LinkedIn banners, X (Twitter) graphics, YouTube thumbnails, cover photos, promotional posts, festival creative, event announcements, product launch graphics, advertisement creative, and custom social media templates.'
    },
    {
      title: 'Advertisement Creative Design',
      icon: <Megaphone className="h-6 w-6 text-brand-red" />,
      desc: 'Experts at Xi Pi Technologia, design impactful advertisement creative that help businesses capture attention and drive customer engagement. Our creative team develops visually appealing advertisements that effectively promote your products, services, and brand across both digital and print media. Our advertisement creative design services include social media ads, Google display ads, banner ads, newspaper advertisements, magazine ads, billboard designs, hoardings, promotional posters, digital display creatives, product advertisements, event promotion graphics, festival campaign creatives, email advertising banners, and custom promotional designs.'
    },
    {
      title: 'Marketing materials',
      icon: <Layers className="h-6 w-6 text-brand-red" />,
      desc: 'At Xi Pi Technologia, we design attractive and professional marketing materials that help your business stand out. Whether you want to promote a product, advertise a service, or increase brand awareness, we create designs that clearly communicate your message and leave a lasting impression. Our marketing design services include brochures, flyers, leaflets, business cards, letterheads, posters, banners, product catalogues, promotional cards, coupons, event invitations, roll-up standees, restaurant menus, corporate folders, social media graphics, email banners, and advertisement designs, helping you connect with your audience effectively.'
    },
    {
      title: 'Print Design',
      icon: <Printer className="h-6 w-6 text-brand-red" />,
      desc: 'Creation of high-quality print designs that help businesses communicate their message with clarity and professionalism. We create print designs that match your brand and help you stand out. Whether you need brochures, business cards, letterheads, flyers, banners, event materials and other custom print media, we design attractive, high-quality print-ready artwork that makes a great impression.'
    },
    {
      title: 'Packaging Design',
      icon: <Package className="h-6 w-6 text-brand-red" />,
      desc: 'Attractive and functional packaging designs that enhance your product\'s appeal and strengthen your brand identity. Xi Pi Technologia’s packaging solutions are designed to capture customer attention, communicate essential product information, and create a memorable unboxing experience. Our packaging design services include product box designs, labels, pouches, bottles, cans, cartons, bags, sleeves, wrappers, tags, stickers, gift packaging, food and beverage packaging, cosmetic packaging, pharmaceutical packaging, retail packaging, and custom packaging solutions. Every design is developed with your brand, target audience, and printing requirements in mind, ensuring high-quality, print-ready packaging that helps your products stand out on the shelf and builds customer trust.'
    },
    {
      title: 'Website Graphics',
      icon: <Monitor className="h-6 w-6 text-brand-red" />,
      desc: 'At Xi Pi Technologia, we design visually appealing website graphics that enhance user experience and strengthen your online brand presence. We create custom graphics that match your website and help share your message clearly. Our designs make your website look more attractive, easy to use, and engaging for your visitors.',
      extraDesc: 'Our website graphic design services include website banners, landing page visuals, custom icons, illustrations, sliders, call-to-action banners, promotional graphics, infographics, blog featured images, web advertisements, product showcase graphics, category banners, and custom web visuals. Every design is optimized for fast loading, responsive display, and a seamless user experience across desktops, tablets, and mobile devices, helping your website look modern, professional, and engaging.'
    },
    {
      title: 'E-Commerce Graphics',
      icon: <ShoppingBag className="h-6 w-6 text-brand-red" />,
      desc: 'High-quality e-commerce graphics that help businesses showcase their products professionally and increase customer engagement. Our creative designs are focused on enhancing product presentation, building brand trust, and improving the overall online shopping experience.',
      extraDesc: 'Our e-commerce graphic design services include product image editing, product banners, category banners, promotional graphics, sale and discount banners, featured product images, Amazon and Flipkart listing graphics, product infographics, lifestyle images, comparison charts, size guides, website promotional banners, social media creatives for e-commerce, and custom marketplace visuals. Every design is optimized for different platforms, ensuring clear, attractive, and professional visuals.'
    }
  ];

  const advantages = [
    'Experienced graphic designers',
    'Custom and unique designs',
    'Modern and creative concepts',
    'Fast project delivery',
    'Affordable pricing',
    'Unlimited creativity',
    'High-quality print and digital designs',
    'Customer-focused approach'
  ];

  const designProcessSteps = [
    {
      step: '1',
      title: 'Requirement Discussion',
      desc: 'We understand your business, target audience, and design requirements.'
    },
    {
      step: '2',
      title: 'Research & Planning',
      desc: 'Our team studies your industry and competitors to develop creative concepts.'
    },
    {
      step: '3',
      title: 'Design Creation',
      desc: 'We create visually appealing designs that match your brand identity.'
    },
    {
      step: '4',
      title: 'Client Feedback',
      desc: 'Your feedback helps us refine the design until it meets your expectations.'
    },
    {
      step: '5',
      title: 'Final Delivery',
      desc: 'We deliver high-quality design files ready for print, web, and social media use.'
    }
  ];

  const faqs = [
    {
      q: '1. What are Graphic Design Services?',
      a: 'Graphic Design Services involve creating visual content such as logos, brochures, social media graphics, business cards, banners, packaging, and other marketing materials that help businesses communicate their message effectively.'
    },
    {
      q: '2. Why is graphic design important for my business?',
      a: 'Professional graphic design improves your brand image, attracts customers, increases credibility, and helps your business stand out from competitors.'
    },
    {
      q: '3. What types of graphic design services do you provide?',
      a: 'We provide logo design, brand identity design, social media graphics, brochures, flyers, banners, business cards, packaging design, marketing materials, and custom design solutions.'
    },
    {
      q: '4. Do you offer branding design services?',
      a: 'Yes. Our branding design services include logo design, brand guidelines, typography, colour schemes, stationery, and complete visual identity development.'
    },
    {
      q: '5. Can you design graphics for social media?',
      a: 'Absolutely. We create custom graphics for Facebook, Instagram, LinkedIn, YouTube, Pinterest, and other social media platforms.'
    },
    {
      q: '6. Will my designs be unique?',
      a: 'Yes. Every design is created from scratch according to your business needs and brand identity. We do not use copied or duplicate designs.'
    },
    {
      q: '7. How long does a graphic design project take?',
      a: 'The timeline depends on the project size. Simple designs may take 2–3 business days, while complete branding projects may require one to three weeks.'
    },
    {
      q: '8. Do you provide source files?',
      a: 'Yes. We provide the required design files, including editable source files, along with print-ready and web-ready formats whenever applicable.'
    },
    {
      q: '9. Can you redesign my existing logo or marketing materials?',
      a: 'Yes. We can refresh or completely redesign your existing branding while maintaining your business identity if desired.'
    },
    {
      q: '10. Why choose Xi Pi Technologia as your creative design agency?',
      a: 'Xi Pi Technologia combines creativity, industry knowledge, and customer-focused solutions to deliver professional Graphic Design Services and branding design services that help businesses build a strong and memorable brand.'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white text-black min-h-screen">
      {/* 1. HERO / HEADER SECTION */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-4 block">
            Graphic Design Services
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-black mb-6 leading-[1.1]">
            Professional Graphic Design Services by Xi Pi Technologia
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-black/80 mb-8 italic">
            Designs that speak for your brand……
          </p>
          <div className="space-y-4 text-base sm:text-lg text-black/70 leading-relaxed font-normal">
            <p>
              At Xi Pi Technologia, high-quality Graphic Design Services are provided that help 
              businesses create a powerful visual identity. Good design is more than just attractive 
              graphics—it communicates your brand message, builds trust, and leaves a lasting 
              impression on your customers.
            </p>
            <p>
              As a trusted creative design agency, we combine creativity with strategy to design 
              visuals that represent your business professionally. From ambitious start-ups and 
              growing small businesses to established enterprises, our experienced designers 
              create customized designs that match your brand identity and business goals.
            </p>
            <p>
              From logo creation to complete branding design services, we create designs that 
              reflect your business values and help your brand stand out in today's competitive 
              market. Every design is made to give your business a professional and memorable 
              look.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. WHY GRAPHIC DESIGN MATTERS? */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <div className="bg-brand-gray/60 rounded-3xl p-8 sm:p-12 lg:p-16 border border-brand-border">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-6">
              Why Graphic Design Matters?
            </h2>
            <p className="text-base sm:text-lg text-black/70 leading-relaxed mb-6">
              Strong visual communication is essential for every business. Professionally designed 
              graphics help customers recognize your brand, understand your message, and remember 
              your business.
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-6">
              Our Graphic Design Services are designed to:
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMattersPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-brand-border shadow-xs hover:border-brand-red/30 transition-all"
              >
                <div className="h-7 w-7 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0 mt-0.5">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-black leading-snug">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR GRAPHIC DESIGN SERVICES */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-4">
            Our Graphic Design Services
          </h2>
          <p className="text-base sm:text-lg text-black/70 leading-relaxed">
            Xi Pi Technologia’s creative, custom designs that strengthen your brand and help your 
            business stand out which includes:-
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="p-8 sm:p-10 rounded-3xl border border-brand-border hover:border-brand-red/40 hover:shadow-xl hover:shadow-brand-red/5 transition-all duration-300 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="h-14 w-14 rounded-2xl bg-brand-gray flex items-center justify-center mb-6">
                  {srv.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {srv.title}
                </h3>
                <p className="text-sm sm:text-base text-black/70 leading-relaxed">
                  {srv.desc}
                </p>
                {srv.extraDesc && (
                  <p className="text-sm sm:text-base text-black/70 leading-relaxed mt-4 pt-4 border-t border-brand-border/60">
                    {srv.extraDesc}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE XI PI TECHNOLOGIA? & OUR ADVANTAGES */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <div className="bg-black text-white rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Why Choose Xi Pi Technologia?
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8">
              As a reliable creative design agency, we focus on delivering designs that are 
              creative, professional, and aligned with your business objectives.
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-red">
              Our Advantages
            </h3>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {advantages.map((adv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-red/40 hover:bg-white/10 transition-all flex items-center gap-3.5"
              >
                <div className="h-6 w-6 rounded-full bg-brand-red flex items-center justify-center text-white shrink-0">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-white">
                  {adv}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR DESIGN PROCESS */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <div className="bg-brand-gray/50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-brand-border">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-4">
              Our Design Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {designProcessSteps.map((stepItem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-white p-6 rounded-2xl border border-brand-border relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-brand-red/20 mb-3">
                    0{stepItem.step}
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">
                    {stepItem.step}. {stepItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/60 leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LET'S BUILD YOUR BRAND TOGETHER (CTA) */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-black rounded-[2.5rem] p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden border border-white/10"
        >
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Let's Build Your Brand Together
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Whether you need a new logo, marketing materials, social media graphics, or 
              complete branding design services, Xi Pi Technologia is here to help. Our creative 
              team delivers professional designs that strengthen your brand identity and help your 
              business grow.
            </p>
            <div className="pt-4">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-3 bg-brand-red text-white px-8 sm:px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors duration-300 group cursor-pointer shadow-xl shadow-brand-red/20"
              >
                <span>Get in Touch</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (FAQS) */}
      <section className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                onClick={() => setOpenFaq(isOpen ? null : idx)}
                className="bg-white rounded-2xl border border-brand-border p-6 cursor-pointer transition-all hover:border-brand-red/30 shadow-xs"
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-base sm:text-lg font-bold text-black text-left">
                    {faq.q}
                  </h3>
                  <div className="h-8 w-8 rounded-full bg-brand-gray flex items-center justify-center shrink-0 text-black">
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </div>

                {isOpen && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-sm sm:text-base text-black/70 leading-relaxed pt-4 border-t border-brand-border/60 mt-4"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
