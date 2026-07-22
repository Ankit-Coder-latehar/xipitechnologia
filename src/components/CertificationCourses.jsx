import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowUpRight, Sparkles, Clock, BookOpen, Award, X, Check } from 'lucide-react';

const courses = [
  {
    id: 'skill-diploma',
    title: 'Skill Diploma Program in Digital Marketing',
    subtitle: 'Comprehensive 360° Growth Masterclass',
    badge: '3 MONTHS • ONLINE & OFFLINE',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    color: 'from-blue-600 to-indigo-700',
    features: [
      '3 Months / Online & Offline',
      'Advanced Skill Diploma Certification',
      '120+ Hours of Live Learning',
      '10+ Real Agency Case Studies',
      '12+ Industry Marketing Tools',
      '5+ Battle-Tested Marketing Templates'
    ],
    details: 'Master the end-to-end digital marketing stack from consumer behavior research to ROI analytics, search engine optimization, content funnels, and performance scaling.'
  },
  {
    id: 'influencer-creator',
    title: 'Youtube & Instagram Influencer Mastery',
    subtitle: 'Creator Economy & Viral Audience Growth',
    badge: '2 MONTHS • ONLINE',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    color: 'from-pink-600 to-rose-600',
    features: [
      '2 Months / Online Live',
      'Advanced Specialist Certification',
      '80+ Hours of Intensive Training',
      '8+ Creator Case Studies',
      '5+ Specialised Creator Tools',
      '2 Full Creator Growth Blueprints'
    ],
    details: 'Learn how to script, edit, produce, and monetize short-form viral Reels/Shorts, partner with top brands, build a loyal community, and turn content creation into a full-time business.'
  },
  {
    id: 'performance-martech',
    title: 'Performance Marketing & MarTech',
    subtitle: 'High-ROAS Media Buying & Automation',
    badge: '2 MONTHS • ONLINE',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    color: 'from-purple-600 to-amber-600',
    features: [
      '2 Months / Online Live',
      'Advanced Specialist Certification',
      '80+ Hours of Applied Learning',
      '8+ Campaign Case Studies',
      '10+ Media Buying Tools',
      '2 Conversion Funnel Blueprints'
    ],
    details: 'Master Meta Ads Manager, Google Performance Max, CAPI tracking, A/B creative testing, conversion rate optimization (CRO), and automated attribution reporting.'
  }
];

export default function CertificationCourses({ onNavigate }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setIsEnrolled(false);
  };

  return (
    <section className="py-24 bg-[#FAF9F6] border-t border-neutral-200 select-none relative overflow-hidden">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold tracking-widest uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            <span>INDUSTRY CERTIFICATION PATHWAYS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight font-display italic">
            Digital Marketing <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-neutral-900 via-brand-red to-neutral-800 bg-clip-text text-transparent not-italic font-black">
              Certification Courses
            </span>
          </h2>

          <p className="text-neutral-500 font-semibold text-sm sm:text-base tracking-wide">
            Deep Dive into Core Marketing Concepts & Real Agency Workflows
          </p>
        </div>

        {/* 3 Main Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl bg-neutral-900 border border-neutral-300 shadow-xl overflow-hidden flex flex-col justify-between"
            >
              {/* Background Cover Image with Hover Zoom */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                
                {/* Badge Overlay */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-white border border-white/20">
                  {course.badge}
                </span>
              </div>

              {/* Floating Bottom Card Box */}
              <div className="p-6 sm:p-7 bg-white text-neutral-900 rounded-b-3xl flex-1 flex flex-col justify-between shadow-2xl relative z-10 border-t border-neutral-100">
                <div>
                  <h3 className="text-xl font-extrabold text-neutral-900 group-hover:text-brand-red transition-colors duration-300 leading-snug">
                    {course.title}
                  </h3>

                  {/* Checklist Features */}
                  <ul className="mt-5 space-y-2.5 text-xs font-semibold text-neutral-700">
                    {course.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-400 group-hover:text-neutral-900 transition-colors">
                    Enrollment Open
                  </span>
                  
                  <button
                    onClick={() => handleEnrollClick(course)}
                    aria-label={`Enroll in ${course.title}`}
                    className="h-11 w-11 rounded-full bg-black group-hover:bg-brand-red text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110"
                  >
                    <ArrowUpRight className="h-5 w-5 group-hover:rotate-45 transition-transform duration-300" />
                  </button>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Course Enrollment & Preview Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-lg bg-neutral-900 border border-brand-red/30 rounded-3xl p-6 sm:p-8 text-white shadow-2xl"
            >
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {isEnrolled ? (
                <div className="text-center py-8">
                  <div className="h-14 w-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3 border border-emerald-500/40">
                    <Check className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Enrollment Request Sent!</h3>
                  <p className="text-xs text-white/70 mt-2">
                    Our academic team will contact you within 2 hours with syllabus and scholarship details for <span className="text-brand-red font-bold">{selectedCourse.title}</span>.
                  </p>
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="mt-6 px-6 py-2.5 bg-brand-red text-white font-bold text-xs rounded-xl"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red">COURSE DETAILS</span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">{selectedCourse.title}</h3>
                  <p className="text-xs text-white/70 mt-2 leading-relaxed">{selectedCourse.details}</p>

                  <div className="mt-5 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-xs font-bold text-white/50 block mb-2">KEY HIGHLIGHTS</span>
                    <ul className="space-y-2 text-xs text-white/80">
                      {selectedCourse.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => setIsEnrolled(true)}
                      className="flex-1 bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3.5 rounded-xl text-xs transition-all shadow-lg shadow-brand-red/30"
                    >
                      Instant Enroll & Request Syllabus &rarr;
                    </button>
                    {onNavigate && (
                      <button
                        onClick={() => {
                          setSelectedCourse(null);
                          onNavigate('academy');
                        }}
                        className="px-4 bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 rounded-xl text-xs transition-all"
                      >
                        All Academy Courses
                      </button>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
