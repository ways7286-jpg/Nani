import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_DATA } from '../data';
import { IconRenderer } from '../components/IconRenderer';

export const WhyChooseMe: React.FC = () => {
  return (
    <section id="why-me" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col text-left mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
            04. Client Value
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 mt-2 tracking-tight">
            Why Choose Me
          </h2>
          <div className="w-12 h-1 bg-slate-900 rounded-full mt-4" />
          <p className="font-sans text-sm text-slate-500 mt-4 max-w-xl">
            As a dedicated independent freelancer, I work directly with you—eliminating agency overhead, miscommunications, and sluggish timelines.
          </p>
        </div>

        {/* Bento Grid Design Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {WHY_CHOOSE_DATA.map((item, idx) => {
            // Give specific cards slightly larger spanning styles for dynamic rhythm
            const isFirst = idx === 0;
            const isLast = idx === 4;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-8 rounded-2xl border border-slate-155 shadow-xs transition-all duration-300 flex flex-col justify-between text-left group hover:shadow-lg hover:border-slate-350 hover:bg-slate-50/40 ${
                  isFirst
                    ? 'md:col-span-1 lg:col-span-1'
                    : isLast
                    ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-slate-50'
                    : 'md:col-span-1'
                }`}
              >
                <div>
                  {/* Decorative card badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-slate-900 text-slate-800 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm">
                      <IconRenderer name={item.iconName} size={22} className="transition-transform group-hover:rotate-6 duration-300" />
                    </div>
                    <span className="font-mono text-[9px] font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded-md uppercase tracking-wide">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-slate-900 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-slate-500 leading-relaxed mt-3 max-w-xl">
                    {item.description}
                  </p>
                </div>

                {/* Aesthetic footer marker */}
                <div className="mt-8 flex items-center gap-1 text-[10px] font-mono text-slate-400 font-semibold group-hover:text-slate-900 transition-colors">
                  <span>Guaranteed Standards</span>
                  <IconRenderer name="Check" size={12} className="text-emerald-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Client Stats Panel */}
        <div className="mt-16 p-8 bg-slate-900 text-white rounded-3xl text-left border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl">
            <h4 className="font-display font-extrabold text-xl md:text-2xl text-white tracking-tight leading-snug">
              Need a completely tailormade solution for a custom business model?
            </h4>
            <p className="font-sans text-xs text-slate-400 mt-2">
              If your criteria doesn't fit standard categories, don't worry. I regularly design databases, integrations, and custom dashboards. Get in touch to strategize.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-900 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-colors shadow-md shrink-0 cursor-pointer"
          >
            Start Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
