import React from 'react';
import { motion } from 'motion/react';
import { HERO_DATA } from '../data';
import { IconRenderer } from '../components/IconRenderer';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-white"
    >
      {/* 1. Subdued Animated Background Grid & Elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40" />

      {/* Rotating abstract blurred gradients for visual depth */}
      <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-slate-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse-slow" />

      {/* Decorative floating code accents */}
      <div className="absolute top-1/4 left-1/12 hidden xl:block p-3 bg-white/75 backdrop-blur-sm border border-slate-150 rounded-xl shadow-xs text-[10px] font-mono text-slate-400 rotate-[-4deg]">
        <span className="text-blue-500">const</span> site = <span className="text-amber-500">new</span> Website();
      </div>
      <div className="absolute bottom-1/4 right-1/12 hidden xl:block p-3 bg-white/75 backdrop-blur-sm border border-slate-150 rounded-xl shadow-xs text-[10px] font-mono text-slate-400 rotate-[5deg]">
        <span className="text-emerald-500">&lt;Responsive /&gt;</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Editorial Copy Grid */}
        <div className="lg:col-span-7 flex flex-col text-left">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 self-start px-3 py-1.5 bg-slate-100/80 border border-slate-200/50 rounded-full mb-6"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-sans text-[11px] font-bold text-slate-700 tracking-wider uppercase">
              Available for Freelance Projects – 2026
            </span>
          </motion.div>

          {/* Heading with staggered layout */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-slate-900 tracking-tight leading-tight"
          >
            {HERO_DATA.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 inline-flex self-start"
          >
            <span className="font-display font-extrabold text-2xl md:text-3xl text-slate-800 bg-gradient-to-r from-slate-900 to-indigo-900 bg-clip-text text-transparent italic leading-relaxed">
              {HERO_DATA.subheading}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 font-sans text-lg text-slate-600 leading-relaxed max-w-xl"
          >
            {HERO_DATA.description}
          </motion.p>

          {/* Call-to-actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-display font-semibold tracking-wide transition-all shadow-md cursor-pointer flex items-center gap-2 group border border-slate-900"
            >
              Contact Me
              <IconRenderer
                name="ArrowRight"
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <a
              href={HERO_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#128c7e] text-white rounded-xl font-display font-semibold tracking-wide transition-all shadow-md flex items-center gap-2"
            >
              <IconRenderer name="MessageSquare" size={16} />
              WhatsApp Me
            </a>
          </motion.div>

          {/* Social Proof Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-3 gap-4"
          >
            <div>
              <span className="block font-display font-extrabold text-2xl text-slate-900">
                100%
              </span>
              <span className="block font-sans text-xs text-slate-500 font-medium">
                Mobile Responsive
              </span>
            </div>
            <div>
              <span className="block font-display font-extrabold text-2xl text-slate-900">
                SEO
              </span>
              <span className="block font-sans text-xs text-slate-500 font-medium">
                Optimized Setup
              </span>
            </div>
            <div>
              <span className="block font-display font-extrabold text-2xl text-slate-900">
                Fast
              </span>
              <span className="block font-sans text-xs text-slate-500 font-medium">
                Loading Speeds
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Professional Interactive Frame Mockup */}
        <div className="lg:col-span-5 h-[400px] md:h-[480px] flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-sm bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 flex flex-col relative aspect-[4/5] md:aspect-auto md:h-full"
          >
            {/* Visual Web Frame Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="bg-slate-900 px-4 py-1 rounded-md text-[10px] font-mono text-slate-400 w-1/2 text-center whitespace-nowrap overflow-hidden">
                nithil_portfolio.dev
              </div>
              <div className="w-6" /> {/* Balance spacer */}
            </div>

            {/* Simulated Live Interface */}
            <div className="flex-1 p-6 flex flex-col justify-between font-sans text-white text-left relative overflow-hidden">
              {/* Mesh Accent inside mockup */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full filter blur-xl" />

              {/* Mock content top section */}
              <div>
                <span className="inline-block px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-[9px] font-semibold text-blue-400 uppercase tracking-wider mb-4">
                  DEVELOPER METRICS
                </span>
                <p className="font-display font-bold text-lg leading-tight">
                  High Performance Custom Websites.
                </p>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                  Tailored design, responsive navigation, and solid coding protocols.
                </p>
              </div>

              {/* Performance Indicator Rings */}
              <div className="grid grid-cols-3 gap-3 my-4">
                <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800 text-center flex flex-col justify-center items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center font-mono text-emerald-400 text-xs font-bold mb-1">
                    100
                  </div>
                  <span className="text-[9px] text-slate-400 font-medium">Performance</span>
                </div>
                <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800 text-center flex flex-col justify-center items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center font-mono text-emerald-400 text-xs font-bold mb-1">
                    100
                  </div>
                  <span className="text-[9px] text-slate-400 font-medium">Accessibility</span>
                </div>
                <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800 text-center flex flex-col justify-center items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center font-mono text-emerald-400 text-xs font-bold mb-1">
                    100
                  </div>
                  <span className="text-[9px] text-slate-400 font-medium">SEO Ready</span>
                </div>
              </div>

              {/* Code preview bottom section */}
              <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl font-mono text-[10px] text-left leading-normal overflow-hidden scrollbar-none">
                <span className="text-slate-500">// 100% Custom Code for clients</span>
                <span className="block text-indigo-400">
                  export <span className="text-pink-400">default</span>{' '}
                  <span className="text-sky-300">function</span>{' '}
                  <span className="text-green-300">Website</span>() &#123;
                </span>
                <span className="block pl-3 text-slate-300">
                  <span className="text-pink-400">return</span> (
                </span>
                <span className="block pl-6 text-green-400">&lt;Layout responsive=&#123;true&#125; /&gt;</span>
                <span className="block pl-3 text-slate-300">);</span>
                <span className="block text-indigo-400">&#125;</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
