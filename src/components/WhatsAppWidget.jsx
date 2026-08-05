import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle, Sparkles, CheckCheck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppWidget({ phoneNumber = "12123801761" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [userMessage, setUserMessage] = useState('');

  const defaultGreeting = "Hello Xipitechnologia! I'm interested in growing my business with your services.";

  const quickPrompts = [
    "🚀 I need a High-Converting Website / Branding",
    "🤖 I want to explore AI Marketing Automation",
    "📈 I need Meta Ads & SEO Growth strategy",
    "📞 Book a free 1-on-1 Strategy Call"
  ];

  const handleOpenWhatsApp = (customText) => {
    const message = customText || userMessage || defaultGreeting;
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (hasUnread) {
      setHasUnread(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none flex flex-col items-end">
      {/* Floating Popup Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 w-[340px] sm:w-[380px] rounded-3xl bg-white shadow-2xl border border-brand-border overflow-hidden flex flex-col font-sans"
          >
            {/* Widget Header */}
            <div className="bg-gradient-to-r from-[#075E54] via-[#128C7E] to-[#25D366] p-5 text-white relative">
              <button
                onClick={handleToggle}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                aria-label="Close WhatsApp chat"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-3.5">
                <div className="relative">
                  <div className="h-12 w-12 rounded-full bg-white/10 border-2 border-white/40 flex items-center justify-center font-bold text-white shadow-inner overflow-hidden">
                    <span className="font-display font-extrabold text-sm tracking-tighter">XIPI</span>
                  </div>
                  {/* Online indicator dot */}
                  <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-[#25D366] border-2 border-white" />
                </div>

                <div>
                  <h3 className="font-extrabold text-base tracking-tight text-white flex items-center gap-1.5">
                    Xipitechnologia Support
                    <Sparkles className="h-3.5 w-3.5 text-yellow-300 fill-yellow-300" />
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-white/90 font-medium">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                    Typically replies in &lt; 2 minutes
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-[#ECE5DD] space-y-4 max-h-[320px] overflow-y-auto">
              {/* Automated Welcome Message */}
              <div className="flex flex-col items-start max-w-[88%]">
                <div className="bg-white rounded-2xl rounded-tl-none p-3.5 shadow-sm border border-neutral-200 text-xs text-neutral-800 leading-relaxed space-y-2">
                  <p className="font-semibold text-neutral-900">
                    👋 Hey there! Welcome to <span className="text-brand-red font-bold">Xipitechnologia®</span>.
                  </p>
                  <p>
                    How can we help scale your business or upgrade your digital presence today?
                  </p>
                  <div className="flex items-center justify-end gap-1 text-[10px] text-neutral-400 font-medium pt-1">
                    <span>Just now</span>
                    <CheckCheck className="h-3.5 w-3.5 text-sky-500" />
                  </div>
                </div>
              </div>

              {/* Quick Action Chips */}
              <div className="space-y-2 pt-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 px-1">
                  Popular topics:
                </p>
                <div className="flex flex-col gap-1.5">
                  {quickPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOpenWhatsApp(prompt)}
                      className="text-left text-xs font-semibold bg-white/90 hover:bg-white hover:text-brand-red text-neutral-800 p-2.5 rounded-xl border border-neutral-200 shadow-2xs transition-all duration-200 hover:shadow-xs active:scale-[0.98]"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Widget Input / Direct CTA */}
            <div className="p-3 bg-white border-t border-neutral-200 space-y-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleOpenWhatsApp();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  className="flex-1 bg-neutral-100 border border-neutral-200 rounded-full px-4 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#25D366] transition-colors"
                />
                <button
                  type="submit"
                  className="h-9 w-9 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center transition-colors shadow-sm active:scale-95 flex-shrink-0"
                  aria-label="Send WhatsApp message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>

              <button
                onClick={() => handleOpenWhatsApp()}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg active:scale-98 tracking-wide uppercase"
              >
                <WhatsAppIcon className="h-4 w-4 fill-white" />
                Open Chat in WhatsApp
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        {/* Tooltip on Hover */}
        {!isOpen && (
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 bg-black text-white text-xs font-bold rounded-xl whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none flex items-center gap-1.5 border border-white/20">
            <span>Chat on WhatsApp</span>
            <span className="h-2 w-2 rounded-full bg-[#25D366]" />
          </div>
        )}

        {/* Outer Glow Pulse Effect */}
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] blur-md opacity-60 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />

        {/* Trigger Button */}
        <button
          onClick={handleToggle}
          className="relative h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none"
          aria-label="Toggle WhatsApp chat widget"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <div className="relative flex items-center justify-center">
              <WhatsAppIcon className="h-7 w-7 fill-white" />
              
              {/* Unread notification badge */}
              {hasUnread && (
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-brand-red text-white text-[10px] font-black flex items-center justify-center border-2 border-white shadow-md animate-bounce">
                  1
                </span>
              )}
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
