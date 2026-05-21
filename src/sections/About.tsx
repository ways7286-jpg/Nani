import React from 'react';
import { motion } from 'motion/react';
import { ABOUT_DATA } from '../data';
import { IconRenderer } from '../components/IconRenderer';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Modern Visual Presentation Cards */}
        <div className="lg:col-span-5 relative flex flex-col items-center">
          {/* Main frame block simulating code audit layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-xl border border-slate-200/50 text-left relative"
          >
            {/* Design accents */}
            <div className="absolute top-4 right-4 text-slate-300">
              <IconRenderer name="Award" size={32} />
            </div>

            <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
              <IconRenderer name="Laptop" size={24} />
            </div>

            <h3 className="font-display font-black text-xl text-slate-900 tracking-tight">Nithil</h3>
            <span className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider block mt-1">
              Website Developer & Designer
            </span>

            <p className="font-sans text-xs text-slate-500 mt-4 leading-relaxed">
              Based online, working with companies, local shops, and startup founders globally to launch digital experiences.
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-slate-150 rounded-md text-[10px] font-mono text-slate-600 font-semibold uppercase">
                #HTML5
              </span>
              <span className="px-2.5 py-1 bg-slate-150 rounded-md text-[10px] font-mono text-slate-600 font-semibold uppercase">
                #CSS3
              </span>
              <span className="px-2.5 py-1 bg-slate-150 rounded-md text-[10px] font-mono text-slate-600 font-semibold uppercase">
                #TailwindCSS
              </span>
              <span className="px-2.5 py-1 bg-slate-150 rounded-md text-[10px] font-mono text-slate-600 font-semibold uppercase">
                #React
              </span>
              <span className="px-2.5 py-1 bg-slate-150 rounded-md text-[10px] font-mono text-slate-600 font-semibold uppercase">
                #FigmaUX
              </span>
            </div>
          </motion.div>

          {/* Overlapping small badge stat */}
          <motion.div
            initial={{ opacity: 0, x: 25, y: -25 }}
            whileInView={{ opacity: 1, x: 10, y: 10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -bottom-6 -right-2 md:right-8 bg-slate-900 text-white px-5 py-4 rounded-xl shadow-xl border border-slate-700 max-w-[180px] text-left"
          >
            <span className="block text-xs font-mono text-slate-400 font-medium">Availability</span>
            <span className="block font-display font-extrabold text-base text-emerald-400 mt-1">Taking New Clients</span>
          </motion.div>
        </div>

        {/* Right Side: Copywriting Content */}
        <div className="lg:col-span-7 flex flex-col text-left">
          <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
            01. Background
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 mt-2 tracking-tight">
            {ABOUT_DATA.title}
          </h2>

          <div className="w-12 h-1 bg-slate-900 rounded-full mt-4 mb-6" />

          {/* Requested Highlight Text - Bold & prominent */}
          <p className="font-sans text-lg md:text-xl font-medium text-slate-800 leading-relaxed">
            {ABOUT_DATA.text}
          </p>

          {/* Supplementary value text */}
          <p className="font-sans text-sm text-slate-600 mt-4 leading-relaxed">
            {ABOUT_DATA.detailedParagraph}
          </p>

          {/* Interactive Statistics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {ABOUT_DATA.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-4 rounded-xl shadow-xs border border-slate-200/40 text-left"
              >
                <span className="block font-display font-black text-2xl text-slate-900">
                  {stat.value}
                </span>
                <span className="block font-sans text-[11px] text-slate-500 font-medium mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="text-xs font-mono text-slate-400 mt-6 block">
            * Fully certified and focused on clean semantic layouts for fast execution.
          </p>
        </div>

      </div>
    </section>
  );
};
