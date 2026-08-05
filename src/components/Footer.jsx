import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10 select-none">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Top brand grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 mb-12">
          
          {/* Logo brand message */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="flex items-center gap-1 group">
              <span className="font-display font-extrabold text-3xl text-white">
                Xipi
              </span>
              <span className="text-brand-red font-display font-extrabold text-3xl">
                technologia
              </span>
              <span className="text-[10px] font-bold text-white/40 self-start mt-1">®</span>
            </a>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm font-normal">
              An award-winning digital design agency located in New York City, crafting premium brand identities, packaging, and high-performance websites worldwide.
            </p>
          </div>

          {/* Directory column 1 */}
          <div className="lg:col-span-2 space-y-4">
            <span className="block text-xs font-bold uppercase tracking-widest text-white/40">
              Agency
            </span>
            <ul className="space-y-2.5 text-sm font-semibold text-white/70">
              <li>
                <a 
                  href="#work" 
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('case-studies');
                    }
                  }}
                  className="hover:text-brand-red transition-colors duration-200"
                >
                  Our Work & Case Studies
                </a>
              </li>
              <li>
                <a 
                  href="#agency" 
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('about');
                    }
                  }}
                  className="hover:text-brand-red transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li><a href="#services" className="hover:text-brand-red transition-colors duration-200">Capabilities</a></li>
              <li><a href="#careers" className="hover:text-brand-red transition-colors duration-200 flex items-center gap-1.5">Careers <span className="text-[10px] rounded-full bg-brand-red px-1.5 py-0.5 text-white">Hiring</span></a></li>
            </ul>
          </div>

          {/* Directory column 2 */}
          <div className="lg:col-span-2 space-y-4">
            <span className="block text-xs font-bold uppercase tracking-widest text-white/40">
              Services
            </span>
            <ul className="space-y-2.5 text-sm font-semibold text-white/70">
              <li><a href="#services" className="hover:text-brand-red transition-colors duration-200">Web Design</a></li>
              <li><a href="#services" className="hover:text-brand-red transition-colors duration-200">Branding Systems</a></li>
              <li><a href="#services" className="hover:text-brand-red transition-colors duration-200">Packaging</a></li>
              <li><a href="#services" className="hover:text-brand-red transition-colors duration-200">Digital Strategy</a></li>
            </ul>
          </div>

          {/* Directory column 3 */}
          <div className="lg:col-span-3 space-y-4">
            <span className="block text-xs font-bold uppercase tracking-widest text-white/40">
              Office Details
            </span>
            <address className="not-italic text-sm text-white/50 space-y-2.5 font-normal">
              <p>
                160 Varick Street, 5th Floor<br />
                New York, NY 10013
              </p>
              <p className="font-semibold text-white">
                hello@xipitechnologia.com<br />
                +1 212.380.1761
              </p>
              <a 
                href="https://wa.me/12123801761?text=Hello%20Xipitechnologia!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-xs text-[#25D366] hover:underline pt-1"
              >
                <WhatsAppIcon className="h-4 w-4 fill-[#25D366]" />
                WhatsApp Chat Support
              </a>
            </address>
          </div>

        </div>

        {/* Bottom copyright list */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-semibold text-white/40">
          
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <span>© 2026 Xipitechnologia® Creative Agency. All rights reserved.</span>
            <a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-red transition-colors">Terms of Service</a>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <a href="https://wa.me/12123801761" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors flex items-center gap-1 text-[#25D366] font-bold">
              <WhatsAppIcon className="h-3.5 w-3.5 fill-current" /> WhatsApp <ArrowUpRight className="h-3 w-3" />
            </a>
            <a href="#" className="hover:text-white flex items-center gap-0.5">Behance <ArrowUpRight className="h-3 w-3" /></a>
            <a href="#" className="hover:text-white flex items-center gap-0.5">LinkedIn <ArrowUpRight className="h-3.5 w-3.5" /></a>
            <a href="#" className="hover:text-white flex items-center gap-0.5">Instagram <ArrowUpRight className="h-3.5 w-3.5" /></a>
          </div>

        </div>

      </div>
    </footer>
  );
}
