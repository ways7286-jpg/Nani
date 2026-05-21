import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_DATA } from '../data';
import { IconRenderer } from '../components/IconRenderer';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-50 border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col text-left mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
            03. The Workflow
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 mt-2 tracking-tight">
            How We Get Results
          </h2>
          <div className="w-12 h-1 bg-slate-900 rounded-full mt-4" />
          <p className="font-sans text-sm text-slate-500 mt-4 max-w-xl">
            A step-by-step, transparent development flow to guarantee your project finishes on target, inside budget, and with flawless execution.
          </p>
        </div>

        {/* Timeline Path Stack */}
        <div className="relative mt-12">
          {/* Vertical connection line drawing down behind nodes (only on desktop md+) */}
          <div className="absolute left-[39px] md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block" />

          {/* Process Row Lists */}
          <div className="space-y-12 relative z-10 text-left">
            {PROCESS_DATA.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.stepNumber}
                  className={`flex flex-col md:flex-row items-stretch gap-6 md:gap-0 relative ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Left or Right Content Block */}
                  <div className="w-full md:w-1/2 md:px-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5 }}
                      className="bg-white p-6 rounded-2xl border border-slate-150 shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col"
                    >
                      {/* Step Tag & Details */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 border border-slate-205 rounded-full font-mono text-[9px] font-bold uppercase tracking-wider">
                          Phase 0{step.stepNumber}
                        </span>
                        <span className="text-[10px] font-sans font-bold text-slate-400 uppercase">
                          • {step.tag}
                        </span>
                      </div>

                      <h3 className="font-display font-black text-xl text-slate-900 tracking-tight mb-3">
                        {step.title}
                      </h3>

                      <p className="font-sans text-xs text-slate-500 leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Phase Deliverables List */}
                      <div className="mt-4 pt-4 border-t border-slate-50">
                        <span className="text-[10px] font-mono font-bold tracking-wide uppercase text-slate-400 block mb-2">
                          Key Deliverables
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.deliverables.map((deliv, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-2 text-[11px] text-slate-600 font-sans">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  {/* Central Node Ring representing Phase circle */}
                  <div className="absolute left-[15px] md:left-1/2 top-4 md:top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center font-display font-black text-slate-900 text-sm shadow-md transition-transform hover:scale-110">
                      0{step.stepNumber}
                    </div>
                  </div>

                  {/* Empty Spacer Column on Desktop equivalent to 50% spacing */}
                  <div className="w-full md:w-1/2 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
