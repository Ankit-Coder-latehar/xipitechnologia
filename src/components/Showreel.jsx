import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Light accent lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top title info */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red select-none">
              Campaign Showreel
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Xipitechnologia® 2025 Creative Campaign Showreel
            </h2>
          </div>
          <p className="text-sm text-white/50 max-w-xs font-normal">
            Take a visual dive into our campaigns, branding events, stadium mockups, and web layouts.
          </p>
        </div>

        {/* Video Wrapper */}
        <div className="relative rounded-3xl border border-white/10 overflow-hidden bg-zinc-950 aspect-video w-full group shadow-2xl">
          
          {!isPlaying ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer" onClick={() => setIsPlaying(true)}>
              {/* Cover Image */}
              <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200" 
                alt="Showreel Cover" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-102 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              
              {/* Pulsing Play Button */}
              <div className="relative z-10 h-20 w-20 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow-xl group-hover:scale-105 active:scale-95">
                <Play className="h-8 w-8 fill-current ml-1" />
              </div>
              <span className="relative z-10 text-xs font-bold uppercase tracking-[0.25em] text-white mt-4 select-none">
                Play Showreel Video
              </span>
            </div>
          ) : (
            <div className="w-full h-full relative">
              <button 
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-20 rounded-full bg-black/60 p-2 text-white hover:text-brand-red transition-colors border border-white/10"
              >
                <X className="h-5 w-5" />
              </button>
              <iframe
                className="w-full h-full border-none"
                src="https://www.youtube.com/embed/a3ICNMQW7Ok?autoplay=1&mute=0"
                title="Xipitechnologia Campaign Showreel Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
