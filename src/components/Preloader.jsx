import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState(1);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Add overflow-hidden to body while loading
    document.body.classList.add('preloader-lock');

    const timers = [
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1200),
      setTimeout(() => setPhase(4), 1800),
      setTimeout(() => setPhase(5), 2400),
      setTimeout(() => {
        setIsDone(true);
        document.body.classList.remove('preloader-lock');
        if (onComplete) onComplete();
      }, 3000)
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.body.classList.remove('preloader-lock');
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      <div className="relative flex flex-col items-center justify-center w-full h-full">
        {/* Phase progress line indicator */}
        <div className="absolute bottom-12 left-10 right-10 h-[2px] bg-white/10 overflow-hidden">
          <motion.div 
            className="h-full bg-brand-red"
            initial={{ width: '0%' }}
            animate={{ width: `${(phase / 5) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>

        {/* Phase Counter */}
        <div className="absolute top-12 right-12 text-sm font-bold tracking-widest text-white/50">
          PHASE 0{phase} / 05
        </div>

        {/* Dynamic Logo Text expansion and styling based on phases */}
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center select-none w-64 h-64"
          >
            <img src="/black-logo.png" alt="Xipi Technologia" className="h-16 sm:h-24 w-auto z-10 bg-white p-2 rounded-lg" />
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {[
                { Icon: FaFacebook, angle: 0 },
                { Icon: FaTwitter, angle: 60 },
                { Icon: FaInstagram, angle: 120 },
                { Icon: FaLinkedin, angle: 180 },
                { Icon: FaYoutube, angle: 240 },
                { Icon: FaGithub, angle: 300 },
              ].map((item, index) => {
                const radius = 130;
                const radian = (item.angle * Math.PI) / 180;
                const x = radius * Math.cos(radian);
                const y = radius * Math.sin(radian);
                return (
                  <div
                    key={index}
                    className="absolute text-brand-red opacity-80"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    >
                      <item.Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          <div className="overflow-hidden mt-4 h-6 text-center">
            <AnimatePresence mode="wait">
              {phase === 1 && (
                <motion.p
                  key="p1"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="text-xs sm:text-sm tracking-[0.3em] font-medium text-white/40 uppercase"
                >
                  Establishing Connection
                </motion.p>
              )}
              {phase === 2 && (
                <motion.p
                  key="p2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="text-xs sm:text-sm tracking-[0.3em] font-medium text-white/60 uppercase"
                >
                  Loading Digital Assets
                </motion.p>
              )}
              {phase === 3 && (
                <motion.p
                  key="p3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="text-xs sm:text-sm tracking-[0.3em] font-medium text-white/80 uppercase"
                >
                  Rendering Design Grid
                </motion.p>
              )}
              {phase === 4 && (
                <motion.p
                  key="p4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="text-xs sm:text-sm tracking-[0.3em] font-medium text-brand-red uppercase"
                >
                  Syncing Motion Engine
                </motion.p>
              )}
              {phase === 5 && (
                <motion.p
                  key="p5"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="text-xs sm:text-sm tracking-[0.3em] font-medium text-white uppercase"
                >
                  Welcome to Xipitechnologia
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
