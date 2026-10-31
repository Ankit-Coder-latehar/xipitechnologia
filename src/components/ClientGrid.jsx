import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const visibleInitial = [
  { id: 1, name: 'L\'Oréal', type: 'Beauty' },
  { id: 2, name: 'FIFA', type: 'Sports' },
  { id: 3, name: 'VTS', type: 'Software' },
  { id: 4, name: 'Etihad Park', type: 'Venue' },
  { id: 5, name: 'NYCFC', type: 'Club' },
  { id: 6, name: 'Clutch', type: 'Ratings' },
  { id: 7, name: 'Antidote', type: 'Candles' },
  { id: 8, name: 'WillowWood', type: 'Medical' },
  { id: 9, name: 'Vantage', type: 'Finance' },
  { id: 10, name: 'Trivago', type: 'Travel' },
  { id: 11, name: 'Flipkart', type: 'E-commerce' },
  { id: 12, name: 'dailyhunt', type: 'News' }
];

const backupLogos = [
  { name: 'Adobe', type: 'Software' },
  { name: 'Google', type: 'Search' },
  { name: 'Meta', type: 'Social' },
  { name: 'Salesforce', type: 'CRM' },
  { name: 'Spotify', type: 'Music' },
  { name: 'Nike', type: 'Athletics' },
  { name: 'Disney', type: 'Media' },
  { name: 'Uber', type: 'Mobility' }
];

export default function ClientGrid() {
  const [gridItems, setGridItems] = useState(visibleInitial);
  const [reserves, setReserves] = useState(backupLogos);

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      // Choose a random grid index to replace (0 to 11)
      const targetGridIdx = Math.floor(Math.random() * gridItems.length);
      
      // Choose a random reserve index
      const targetReserveIdx = Math.floor(Math.random() * reserves.length);

      // Perform swap
      setGridItems((prevGrid) => {
        const nextGrid = [...prevGrid];
        const oldItem = nextGrid[targetGridIdx];
        const newItem = reserves[targetReserveIdx];

        // Replace grid item
        nextGrid[targetGridIdx] = { 
          id: oldItem.id, // keep key id stable for react rendering 
          name: newItem.name, 
          type: newItem.type 
        };

        // Update reserves with the old item
        setReserves((prevReserves) => {
          const nextReserves = [...prevReserves];
          nextReserves[targetReserveIdx] = { name: oldItem.name, type: oldItem.type };
          return nextReserves;
        });

        return nextGrid;
      });
    }, 2500);

    return () => clearInterval(shuffleInterval);
  }, [gridItems, reserves]);

  return (
    <section className="py-24 bg-[#FAF9F6] border-t border-brand-border">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red select-none">
            OUR CLIENTS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight mb-4">
            Trusted by Businesses <br /> Growing Online.
          </h2>
          <p className="text-base text-neutral-600 max-w-2xl">
            We work with businesses that want more than visibility. Our focus is on building a stronger online presence, generating qualified leads, and creating sustainable business growth through data-driven digital marketing strategies.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[1px] bg-brand-border border border-brand-border rounded-3xl overflow-hidden shadow-sm">
          {gridItems.map((item) => (
            <div
              key={item.id}
              className="bg-white hover:bg-brand-gray/50 h-36 flex flex-col justify-center items-center p-6 relative group transition-colors duration-300 select-none overflow-hidden"
            >
              {/* Inner card containing name */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <span className="font-display font-black text-xl text-black tracking-tight group-hover:text-brand-red transition-colors duration-300">
                    {item.name}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-black/40 font-bold mt-1">
                    {item.type}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Decorative active border indicators */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-red group-hover:w-12 transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
