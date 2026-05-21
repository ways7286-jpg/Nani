import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IconRenderer } from './IconRenderer';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'My Process' },
    { id: 'why-me', label: 'Why Choose Me' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <button
          onClick={() => handleItemClick('home')}
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-display font-black text-lg shadow-sm transition-transform group-hover:scale-105 duration-250">
            N
          </div>
          <div>
            <span className="font-display font-extrabold text-slate-900 block text-base leading-tight tracking-tight">
              Nithil Portfolio
            </span>
            <span className="font-mono text-[10px] text-slate-400 tracking-wider block uppercase font-medium">
              Freelance Dev
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/40">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`relative px-4 py-2 rounded-full font-sans text-xs font-semibold tracking-wide uppercase transition-colors duration-250 cursor-pointer ${
                  isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-slate-900 rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/917416775421"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white bg-[#25D366] hover:bg-[#128c7e] rounded-lg transition-all duration-200 shadow-sm"
          >
            <IconRenderer name="MessageSquare" size={14} />
            WhatsApp Me
          </a>
          <button
            onClick={() => handleItemClick('contact')}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-all duration-200 cursor-pointer"
          >
            Contact Me
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://wa.me/917416775421"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-white bg-[#25D366] rounded-lg hover:bg-[#128c7e] transition-colors"
          >
            <IconRenderer name="MessageSquare" size={18} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-800 hover:bg-slate-100 rounded-lg border border-slate-250 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            <IconRenderer name={mobileMenuOpen ? 'X' : 'Menu'} size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase border-b border-slate-50 pb-1">
                Navigation Menu
              </span>
              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-semibold cursor-pointer ${
                        isActive
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span>{item.label}</span>
                      <IconRenderer
                        name="ChevronRight"
                        size={14}
                        className={isActive ? 'text-white/70' : 'text-slate-400'}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <a
                  href="https://wa.me/917416775421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wide text-white bg-[#25D366] hover:bg-[#128c7e] rounded-xl text-center shadow-sm"
                >
                  <IconRenderer name="MessageSquare" size={14} />
                  WhatsApp
                </a>
                <button
                  onClick={() => handleItemClick('contact')}
                  className="py-3 px-4 text-xs font-bold uppercase tracking-wide text-slate-800 bg-slate-100 hover:bg-slate-250 border border-slate-200 rounded-xl text-center cursor-pointer"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
