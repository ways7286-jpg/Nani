import React from 'react';
import { IconRenderer } from './IconRenderer';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'My Process' },
    { id: 'why-me', label: 'Why Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Upper Column Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800 items-start">
          
          {/* Logo & Pitch */}
          <div className="md:col-span-5 flex flex-col items-start">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 text-left cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-white text-slate-900 flex items-center justify-center font-display font-black text-lg transition-transform group-hover:scale-105 duration-200">
                N
              </div>
              <div>
                <span className="font-display font-black text-base tracking-tight text-white block">
                  Nithil Portfolio
                </span>
                <span className="font-mono text-[10px] text-slate-500 block uppercase tracking-wider">
                  Freelance Developer
                </span>
              </div>
            </button>

            <p className="font-sans text-xs text-slate-400 mt-4 leading-relaxed max-w-sm">
              I create modern, responsive, and user-friendly websites for businesses, startups, restaurants, cafes, and personal brands.
            </p>
          </div>

          {/* Quick Navigations */}
          <div className="md:col-span-3">
            <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="font-sans text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer text-left block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support and Location */}
          <div className="md:col-span-4">
            <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-4">
              Operational Details
            </span>
            <div className="space-y-3 font-sans text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <IconRenderer name="Clock" size={14} className="text-slate-500" />
                <span>Mon – Sat: 09:00 AM – 07:00 PM IST</span>
              </p>
              <p className="flex items-center gap-2">
                <IconRenderer name="MapPin" size={14} className="text-slate-500" />
                <span>India (Serving Clients Worldwide)</span>
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/917416775421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#128c7e] text-white text-[11px] font-bold uppercase tracking-wider rounded-lg transition-colors"
                >
                  <IconRenderer name="MessageSquare" size={12} />
                  Instant WhatsApp Support
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Column Block: Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium font-sans">
          <span>
            © 2026 Nithil. All Rights Reserved.
          </span>
          <span className="text-[10px] font-mono text-slate-600 block">
            Crafted with React, Tailwind CSS & Framer Motion
          </span>
        </div>

      </div>
    </footer>
  );
};
