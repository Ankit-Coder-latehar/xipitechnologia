import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Video, 
  Film, 
  PlayCircle, 
  MonitorPlay, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Layers,
  Tv,
  Users,
  GraduationCap,
  MessageSquareQuote,
  Smartphone
} from 'lucide-react';

export default function VideoEditing({ onContactClick }) {
  const [openFaq, setOpenFaq] = useState(0);

  const services = [
    {
      title: 'Corporate Video Editing',
      icon: <Film className="h-6 w-6 text-brand-red" />,
      desc: 'Corporate video editing is the process of turning raw business footage into a professional and engaging video. It includes cutting unwanted parts, improving video and sound quality, adding text, graphics, transitions, music, and branding elements. A well-edited corporate video helps businesses clearly present their company, products, services, events, and ideas to their audience.'
    },
    {
      title: 'Promotional Video Editing',
      icon: <Tv className="h-6 w-6 text-brand-red" />,
      desc: 'Promotional video editing helps turn raw footage into attractive and engaging videos that promote a product, service, or brand. It includes adding smooth transitions, music, text, graphics, effects, and brand elements to make the video more appealing. A well-edited promotional video captures attention, highlights key features, and encourages viewers to take action.'
    },
    {
      title: 'Product Video Editing',
      icon: <MonitorPlay className="h-6 w-6 text-brand-red" />,
      desc: 'Product video editing focuses on creating clear and attractive videos that showcase a product’s features, benefits, and uses. It includes trimming footage, improving colours and sound, adding text, graphics, music, and smooth transitions. A well-edited product video helps customers understand the product better and creates interest in buying it.'
    },
    {
      title: 'Event Video Editing',
      icon: <Video className="h-6 w-6 text-brand-red" />,
      desc: 'Event video editing turns raw event footage into a polished and engaging video that captures important moments and highlights. It includes cutting unwanted footage, improving video and audio quality, adding music, transitions, titles, and special effects. A well-edited event video helps preserve memorable moments and allows audiences to experience the event again.'
    },
    {
      title: 'Social Media Video Editing',
      icon: <PlayCircle className="h-6 w-6 text-brand-red" />,
      desc: 'Social media video editing focuses on creating short, engaging, and eye-catching videos for platforms like Instagram, Facebook, YouTube, and LinkedIn. It includes trimming clips, adding text, music, captions, transitions, effects, and branding elements. Well-edited social media videos help capture attention, increase engagement, and effectively promote your brand or content'
    },
    {
      title: 'Interview Video Editing',
      icon: <Users className="h-6 w-6 text-brand-red" />,
      desc: 'Interview video editing transforms raw interview footage into a clear, professional, and engaging video. It includes removing unnecessary parts, improving audio and video quality, adding captions, titles, transitions, background music, and branding elements. A well-edited interview keeps viewers engaged while clearly presenting the speaker’s ideas, experiences, and message.'
    },
    {
      title: 'Training Video Editing',
      icon: <GraduationCap className="h-6 w-6 text-brand-red" />,
      desc: 'Training video editing focuses on creating clear, informative, and easy-to-follow videos for learning and employee development. It includes editing footage, improving audio and video quality, adding text, graphics, captions, screen recordings, and smooth transitions. A well-edited training video makes complex information easier to understand and helps viewers learn effectively.'
    },
    {
      title: 'Testimonial Video Editing',
      icon: <MessageSquareQuote className="h-6 w-6 text-brand-red" />,
      desc: 'Testimonial video editing turns customer or client feedback into professional and engaging videos. It includes removing unnecessary footage, improving audio and video quality, adding captions, branding, music, and smooth transitions. A well-edited testimonial video builds trust, highlights real customer experiences, and helps potential customers feel confident about your products or services.'
    },
    {
      title: 'Reels and Short Videos',
      icon: <Smartphone className="h-6 w-6 text-brand-red" />,
      desc: 'Reels and short video editing focuses on creating quick, engaging, and attention-grabbing videos for social media platforms. It includes trimming clips, adding captions, music, transitions, effects, and creative text to keep viewers interested. Well-edited short videos help increase engagement, showcase your brand, and deliver your message in a simple and entertaining way.'
    }
  ];

  const whyChoosePoints = [
    {
      title: 'Professional-Quality Editing',
      desc: 'We transform raw footage into polished, engaging, and visually appealing videos.'
    },
    {
      title: 'Business & YouTube Video Expertise',
      desc: 'From professional business videos to engaging YouTube content, we create videos tailored to your audience and goals.'
    },
    {
      title: 'Creative Storytelling',
      desc: 'We use smooth flow, transitions, visuals, and sound to make your content more engaging and memorable.'
    },
    {
      title: 'Customized Editing Solutions',
      desc: 'Every project is edited according to your brand style, content requirements, and target audience.'
    },
    {
      title: 'Attention to Detail',
      desc: 'We focus on clear audio, smooth transitions, colour enhancement, text, graphics, and other elements that improve overall video quality.'
    },
    {
      title: 'Digital-First Approach',
      desc: 'Our editing is designed to work effectively across websites, YouTube, social media, and other digital platforms.'
    },
    {
      title: 'Reliable & Professional Service',
      desc: 'We value clear communication, timely delivery, and consistent quality throughout every project.'
    }
  ];

  const faqs = [
    {
      q: '1. What is Professional Video Editing?',
      a: 'Professional Video Editing is the process of improving raw video footage by trimming clips, adding transitions, enhancing audio, correcting colours, adding effects, and creating a polished final video.'
    },
    {
      q: '2. What types of videos do you edit?',
      a: 'Xi Pi Technologia edits corporate videos, promotional videos, YouTube videos, social media content, product videos, interviews, events, training videos, and customer testimonials.'
    },
    {
      q: '3. Do you provide YouTube video editing services?',
      a: 'Yes. Our YouTube video editing services include editing vlogs, tutorials, podcasts, reviews, interviews, and promotional videos with professional effects, captions, and music.'
    },
    {
      q: '4. Can you edit business videos?',
      a: 'Yes. Our business video editing services help companies create professional videos for marketing, websites, presentations, social media, and internal communication.'
    },
    {
      q: '5. Do you add subtitles and captions?',
      a: 'Of course if required or demanded by the client, we can add subtitles, captions, titles, and animated text to make your videos more engaging and accessible.'
    },
    {
      q: '6. Can you improve video and audio quality?',
      a: 'Yes. We provide colour correction, audio enhancement, noise reduction, and visual improvements to deliver a professional final video.'
    },
    {
      q: '7. How long does video editing take?',
      a: 'The timeline depends on the length and complexity of the project. Simple edits may take a few days, while larger projects may require more time.'
    },
    {
      q: '8. Can I request revisions?',
      a: 'Absolutely. We offer revisions based on your feedback to ensure the final video meets your expectations.'
    },
    {
      q: '9. What formats do you deliver?',
      a: 'We deliver videos in high-quality formats suitable for YouTube, websites, social media platforms, presentations, and other digital channels.'
    },
    {
      q: '10. Why choose Xi Pi Technologia as your video editing company?',
      a: 'As a reliable video editing company, Xi Pi Technologia combines creativity, technical expertise, and attention to detail to deliver Professional Video Editing services that help businesses and creators produce engaging, high-quality videos'
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
            Video Editing Services
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Professional Video Editing Services by Xi Pi Technologia
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-white/90 mb-8 italic">
            Xi Pi Technologia — Your Story, Our Creative Cut.
          </p>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            At Xi Pi Technologia, we provide Professional Video Editing services that 
            transform raw footage into engaging, high-quality videos. Our editing experts 
            enhance every video with smooth transitions, colour correction, sound enhancement, 
            visual effects, and creative storytelling to ensure your content captures attention and 
            delivers your message effectively. As a trusted video editing company, we work 
            with businesses, content creators, start-ups, and organizations to create videos that 
            are professional, polished, and ready for digital platforms.
          </p>
        </motion.div>
      </section>

      {/* 2. OUR VIDEO EDITING SERVICES */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Our Video Editing Services
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Xi Pi Technologia offers complete video editing solutions for different business and 
            marketing needs, including:
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

      {/* 3. WHY CHOOSE XI PI TECHNOLOGIA? */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <div className="bg-[#0e0e14] border border-white/10 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Why Choose Xi Pi Technologia?
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              Xi Pi Technologia is an established digital marketing services company based in Punjab that 
              provides professional video editing services designed to make your content clear, 
              engaging, and visually appealing. We focus on quality editing, creative visuals, smooth 
              transitions, clear audio, and effective storytelling. Whether you need business video 
              editing, YouTube video editing, corporate videos, promotional videos, product videos, 
              social media reels, or event videos, we help turn your raw footage into polished and 
              professional content.
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

      {/* 4. LET'S CREATE VIDEOS THAT GET YOUR BRAND NOTICED (CTA) */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-red rounded-[2.5rem] p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-brand-red/20"
        >
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Let's Create Videos That Get Your Brand Noticed
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Whether you need Professional Video Editing, YouTube video editing services, 
              or business video editing, Xi Pi Technologia is here to help. Our skilled team 
              delivers creative and professional editing solutions that improve video quality, 
              strengthen your brand, and engage your audience.
            </p>
            <div className="pt-4">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-3 bg-black text-white px-8 sm:px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors duration-300 group cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS (FAQS) */}
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
