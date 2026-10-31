import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Video, 
  Camera, 
  Film, 
  PlayCircle, 
  Tv, 
  MonitorPlay, 
  Users, 
  GraduationCap, 
  MessageSquareQuote, 
  Building2, 
  Sparkles, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Clapperboard
} from 'lucide-react';

export default function VideoShoot({ onContactClick }) {
  const [openFaq, setOpenFaq] = useState(0);

  const services = [
    {
      title: 'Corporate Video Production',
      icon: <Building2 className="h-6 w-6 text-brand-red" />,
      desc: 'Corporate video production services are designed to showcase your company, culture, achievements, and values. We create company profile videos, corporate presentations, CEO messages, employee training videos, and business introductions that strengthen your brand image and build credibility.'
    },
    {
      title: 'Commercial Video Production',
      icon: <Tv className="h-6 w-6 text-brand-red" />,
      desc: 'Commercial video production services help businesses promote their products and services through engaging advertisements. We create eye-catching ads that grab attention, show what makes your business special, and encourage people to become your customers.'
    },
    {
      title: 'Promotional Video Production',
      icon: <Clapperboard className="h-6 w-6 text-brand-red" />,
      desc: 'Promotional video production services are perfect for launching new products, promoting special offers, increasing brand awareness, and supporting marketing campaigns. We create visually appealing promotional videos that effectively communicate your message and generate customer interest.'
    },
    {
      title: 'Product Demo Videos',
      icon: <MonitorPlay className="h-6 w-6 text-brand-red" />,
      desc: 'Demo videos showcase your products with detailed product videos that explain features, benefits, and real-life usage. These videos help customers understand your products better and improve purchasing decisions. It helps to show your product in action to build trust and answer common customer questions. Clear and engaging product demos can increase customer interest, improve conversions, and reduce purchase hesitation.'
    },
    {
      title: 'Brand Story Videos',
      icon: <Film className="h-6 w-6 text-brand-red" />,
      desc: 'Introduce your company with an engaging profile video that highlights your history, mission, services, team, infrastructure, and achievements. A company profile video is an effective way to build trust with clients and business partners. Share what makes your brand unique and why customers choose you. Give viewers a behind-the-scenes look at your team and work culture. A strong brand story helps people connect with your business and creates a lasting impression.'
    },
    {
      title: 'Business Event Video Coverage',
      icon: <Camera className="h-6 w-6 text-brand-red" />,
      desc: 'Capture your business events, conferences, seminars, exhibitions, product launches, and corporate celebrations with professional event videography. From key presentations to candid interactions, we capture your event from every important angle. Our videos help you showcase your brand, connect with your audience, and relive the event. Professional editing ensures your final video looks polished, engaging and memorable.'
    },
    {
      title: 'Customer Testimonial Videos',
      icon: <MessageSquareQuote className="h-6 w-6 text-brand-red" />,
      desc: 'Customer testimonials and client success stories are powerful marketing tools. We produce authentic testimonial videos that help build trust and encourage potential customers to choose your business. We capture genuine experiences and feedback that highlight the value of your products or services. Our professional storytelling makes each testimonial engaging, relatable, and credible. Use these videos across your website, social media, and marketing campaigns to connect with your audience.'
    },
    {
      title: 'Social Media Videos',
      icon: <PlayCircle className="h-6 w-6 text-brand-red" />,
      desc: 'Short and engaging videos are crucial for platforms like Facebook, Instagram, LinkedIn, YouTube, and other social media channels. These videos are designed to increase engagement and reach a wider audience. Our videos are tailored to match your brand style and connect with your target audience. We focus on creative visuals, clear messaging, and engaging content that grabs attention. From promotional clips to reels and branded content, we help your business stay active and visible online.'
    },
    {
      title: 'Business Video Shoot Services',
      icon: <Video className="h-6 w-6 text-brand-red" />,
      desc: 'Our business video shoot services include professional filming for offices, factories, retail stores, corporate events, interviews, and product demonstrations. We use high-quality cameras, lighting, and audio equipment to ensure every video looks professional and polished.'
    },
    {
      title: 'Training & Educational Videos',
      icon: <GraduationCap className="h-6 w-6 text-brand-red" />,
      desc: 'Improve employee learning and customer education with professionally produced training videos, instructional videos, on boarding videos, and educational content that is easy to understand and visually engaging. We present complex information in a simple and clear way for better understanding. Our videos help make training more engaging, consistent, and easy to follow. From step-by-step tutorials to company training materials, we create content that supports effective learning.'
    }
  ];

  const productionProcess = [
    {
      step: '1',
      title: 'Requirement Discussion',
      desc: 'We begin by understanding your business, target audience, marketing objectives, and video requirements.'
    },
    {
      step: '2',
      title: 'Concept & Script Planning',
      desc: 'Our creative team develops ideas, prepares the script, and plans the shooting schedule to ensure your message is communicated effectively.'
    },
    {
      step: '3',
      title: 'Video Shoot',
      desc: 'Using professional cameras, lighting, microphones, and production equipment, we capture high-quality footage at your preferred location or studio.'
    },
    {
      step: '4',
      title: 'Editing & Post Production',
      desc: 'Our editors enhance the footage with color correction, sound design, background music, transitions, subtitles, motion graphics, and branding elements to create a polished final video'
    },
    {
      step: '5',
      title: 'Review & Delivery',
      desc: 'After incorporating your feedback, we deliver the final video in high-resolution formats optimized for websites, presentations, social media, and digital marketing campaigns.'
    }
  ];

  const whyChoosePoints = [
    {
      title: 'Professional Video Production',
      desc: 'High-quality visuals, clear audio, and polished production for every project.'
    },
    {
      title: 'Creative & Customized Approach',
      desc: 'We create videos based on your brand, audience, and specific business goals.'
    },
    {
      title: 'Experienced Team',
      desc: 'Our skilled team ensures smooth planning, professional shooting, and engaging storytelling.'
    },
    {
      title: 'Complete Video Solutions',
      desc: 'From corporate and promotional videos to social media, events, testimonials, and training content every solution is here.'
    },
    {
      title: 'Modern Equipment & Techniques',
      desc: 'We use professional cameras, lighting, audio, and production techniques to deliver quality results.'
    },
    {
      title: 'On-Time Delivery',
      desc: 'We focus on efficient production and timely delivery without compromising on quality.'
    },
    {
      title: 'Brand-Focused Storytelling',
      desc: 'Every video is designed to communicate your message clearly and create a strong connection with your audience.'
    }
  ];

  const faqs = [
    {
      q: '1. What corporate video production services do you offer?',
      a: 'We offer a wide range of corporate video production services, including company profile videos, promotional videos, product videos, training videos, testimonial videos, event coverage, and social media videos.'
    },
    {
      q: '2. What industries do you work with?',
      a: 'We work with businesses across various industries, including IT, healthcare, education, manufacturing, real estate, retail, hospitality, finance, and start-ups.'
    },
    {
      q: '3. Do you provide complete video production services?',
      a: 'Yes. Our video production services cover everything from concept development, script writing, storyboarding, filming, editing, motion graphics, voice-over, and final delivery.'
    },
    {
      q: '4. How long does it take to produce a corporate video?',
      a: 'The timeline depends on the project\'s complexity. Most corporate videos are completed within 1 to 4 weeks, including planning, shooting, editing, and revisions.'
    },
    {
      q: '5. Can you shoot videos at our office or business location?',
      a: 'Yes. Our business video shoot services include on-site filming at your office, factory, showroom, retail store, event venue, or any preferred location.'
    },
    {
      q: '6. Do you create promotional videos for products and services?',
      a: 'Absolutely. Our promotional video production services help businesses showcase products, launch new services, promote offers, and increase customer engagement.'
    },
    {
      q: '7. What is included in your commercial video production service?',
      a: 'Our commercial video production service includes concept creation, scripting, professional filming, lighting, audio recording, editing, motion graphics, music, and final video delivery.'
    },
    {
      q: '8. Can you create videos for social media platforms?',
      a: 'Yes. We create videos optimized for YouTube, Facebook, Instagram, LinkedIn, and other social media platforms in the required formats and resolutions.'
    },
    {
      q: '9. Will you help with script writing and creative ideas?',
      a: 'Yes. Our creative team assists with concept development, script writing, storyboarding, and planning to ensure your message is clear and engaging.'
    },
    {
      q: '10. Can I request changes after the first video edit?',
      a: 'Yes. We include revision rounds to refine the video based on your feedback before final delivery.'
    },
    {
      q: '11. What video formats do you deliver?',
      a: 'We deliver videos in popular formats such as MP4, MOV, and other formats suitable for websites, presentations, social media, and digital marketing campaigns.'
    },
    {
      q: '12. How much do your video production services cost?',
      a: 'The cost depends on factors such as video length, shooting location, production requirements, editing complexity, and additional services. Contact us for a customized quote based on your project.'
    },
    {
      q: '13. Why should I invest in professional corporate video production?',
      a: 'Professional corporate video production helps build brand credibility, engage your audience, improve customer trust, explain your products or services effectively, and increase conversions through high-quality visual content.'
    },
    {
      q: '14. Why choose Xi Pi Technologia for video production services?',
      a: 'Xi Pi Technologia combines creativity, professional equipment, experienced videographers, and skilled editors to deliver high-quality video production services that align with your business goals and help your brand make a lasting impact.'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-black text-white min-h-screen">
      {/* 1. HERO / HEADER SECTION */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-4 block">
            Video Shoot Services
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Turning Ideas into Stunning Visual Experiences.
          </h1>
          <div className="space-y-4 text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            <p>
              At Xi Pi Technologia, we offer professional corporate video production services that help 
              businesses tell their story in a creative and impactful way. A professionally produced video 
              can build trust, increase brand awareness, explain your products or services, and engage 
              your target audience across websites, social media, and digital marketing campaigns.
            </p>
            <p>
              Our experienced team works closely with you to understand your business goals and create 
              videos that reflect your brand identity. From concept development and script planning to 
              filming, editing, motion graphics, and final delivery, we manage the complete production 
              process with attention to every detail.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. OUR VIDEO PRODUCTION SERVICES */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Our Video Production Services
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            We offer complete business video shoot services for businesses of all sizes. Our services include:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="p-8 rounded-3xl border border-white/10 hover:border-brand-red/50 hover:bg-white/5 transition-all duration-300 bg-[#0A0A0F] flex flex-col justify-between group"
            >
              <div>
                <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-brand-red/20 transition-colors">
                  {srv.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {srv.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. VIDEO PRODUCTION PROCESS */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <div className="bg-[#0e0e14] border border-white/10 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Video Production Process at Xi Pi Technologia
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {productionProcess.map((stepItem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 relative flex flex-col justify-between hover:border-brand-red/40 transition-all"
              >
                <div>
                  <div className="text-3xl font-black text-brand-red/40 mb-3 font-mono">
                    0{stepItem.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE XI PI TECHNOLOGIA? */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <div className="bg-[#0A0A0F] border border-white/10 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Why Choose Xi Pi Technologia?
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              At Xi Pi Technologia, we combine creativity, professional equipment, and skilled production 
              to create videos that make your brand stand out. From planning and shooting to editing and 
              final delivery, we manage every step with attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChoosePoints.map((pt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-red/30 transition-all flex items-start gap-4"
              >
                <div className="h-6 w-6 rounded-full bg-brand-red flex items-center justify-center text-white shrink-0 mt-1">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    {pt.title}
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-red rounded-[2.5rem] p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-brand-red/20"
        >
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Turning Ideas into Stunning Visual Experiences
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              At Xi Pi Technologia, we combine creativity, professional equipment, and skilled production 
              to create videos that make your brand stand out. From planning and shooting to editing and 
              final delivery, we manage every step with attention to detail.
            </p>
            <div className="pt-4">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-3 bg-black text-white px-8 sm:px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors duration-300 group cursor-pointer"
              >
                <span>Book a Video Shoot</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS (FAQS) */}
      <section className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
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
                className="bg-[#0e0e14] rounded-2xl border border-white/10 p-6 cursor-pointer transition-all hover:border-brand-red/40"
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-base sm:text-lg font-bold text-white text-left">
                    {faq.q}
                  </h3>
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </div>

                {isOpen && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-sm sm:text-base text-white/70 leading-relaxed pt-4 border-t border-white/10 mt-4"
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
