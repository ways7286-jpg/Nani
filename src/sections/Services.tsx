import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA, HERO_DATA } from '../data';
import { IconRenderer } from '../components/IconRenderer';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState(SERVICES_DATA[1]); // Default to Business Websites
  const [customPagesCount, setCustomPagesCount] = useState(5);
  const [addSEOBoost, setAddSEOBoost] = useState(true);
  const [addUrgentDelivery, setAddUrgentDelivery] = useState(false);

  // Simple, realistic calculations for timeline estimation
  const estimateDays = () => {
    let days = 5;
    if (selectedService.id === 'website-design') days = 4;
    else if (selectedService.id === 'business-websites') days = 8;
    else if (selectedService.id === 'restaurant-websites') days = 6;
    else if (selectedService.id === 'portfolio-websites') days = 5;
    else if (selectedService.id === 'landing-pages') days = 3;
    else if (selectedService.id === 'website-redesign') days = 6;

    // Adjust by custom pages
    const pageAdjustment = Math.floor(customPagesCount / 3);
    days += pageAdjustment;

    // Urgent speed adjustment
    if (addUrgentDelivery) {
      days = Math.max(2, Math.floor(days * 0.6));
    }

    return days;
  };

  const getPrefilledMessage = () => {
    let template = `Hi Nithil! I visited your portfolio and I would like to inquire about a project scope:\n\n`;
    template += `- Service: *${selectedService.title}*\n`;
    template += `- Desired Pages: *${customPagesCount} pages*\n`;
    template += `- Standard SEO Optimizations: *${addSEOBoost ? 'Yes' : 'No'}*\n`;
    template += `- Urgent Delivery: *${addUrgentDelivery ? 'Yes (Requested)' : 'No'}*\n`;
    template += `- Estimated Timeline calculated: *${estimateDays()} Days*\n\n`;
    template += `Are you available to discuss next steps? Thanks!`;
    return encodeURIComponent(template);
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col text-left mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
            02. Core Services
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 mt-2 tracking-tight">
            Professional Web Offerings
          </h2>
          <div className="w-12 h-1 bg-slate-900 rounded-full mt-4" />
          <p className="font-sans text-sm text-slate-500 mt-4 max-w-xl">
            Whether launching a new brand or updating an outdated interface, I craft modular layouts that load quickly and look spectacular.
          </p>
        </div>

        {/* Services Grid (6 Core Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedService(service)}
              className={`p-6 rounded-2xl shadow-xs border transition-all duration-300 text-left flex flex-col justify-between cursor-pointer group hover:shadow-lg ${
                selectedService.id === service.id
                  ? 'bg-slate-900 border-slate-900 text-white shadow-md scale-[1.02]'
                  : 'bg-white border-slate-150 text-slate-800 hover:border-slate-350 hover:bg-slate-50/50'
              }`}
            >
              <div>
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:scale-105 duration-200 ${
                  selectedService.id === service.id
                    ? 'bg-white text-slate-900'
                    : 'bg-slate-100 text-slate-800'
                }`}>
                  <IconRenderer name={service.iconName} size={22} />
                </div>

                <h3 className="font-display font-extrabold text-xl tracking-tight">
                  {service.title}
                </h3>
                
                <p className={`font-sans text-xs mt-3 leading-relaxed ${
                  selectedService.id === service.id ? 'text-slate-300' : 'text-slate-500'
                }`}>
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="mt-6 space-y-2 border-t pt-4 border-slate-200/20">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs">
                      <IconRenderer
                        name="Check"
                        size={14}
                        className={selectedService.id === service.id ? 'text-emerald-400 mt-0.5' : 'text-slate-900 mt-0.5'}
                      />
                      <span className={selectedService.id === service.id ? 'text-slate-300' : 'text-slate-600'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Meta */}
              <div className="mt-8 pt-4 border-t border-slate-200/20 flex items-center justify-between text-[11px] font-mono">
                <span className={selectedService.id === service.id ? 'text-slate-400' : 'text-slate-500'}>
                  Time: {service.duration}
                </span>
                <span className={`font-semibold ${
                  selectedService.id === service.id ? 'text-emerald-400' : 'text-slate-900'
                }`}>
                  {selectedService.id === service.id ? 'Active Selection' : 'Click to estimate'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Interactive Project Scope & Timeline Estimator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-200/60 max-w-4xl mx-auto shadow-sm text-left grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Left panel selector controls */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="inline-block px-2.5 py-0.5 bg-slate-250 border border-slate-300/60 text-slate-600 rounded-md font-mono text-[9px] font-bold uppercase tracking-wider mb-2">
                Scope Configurator
              </span>
              <h3 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight">
                Timeline & Requirements Estimator
              </h3>
              <p className="font-sans text-xs text-slate-500 mt-1">
                Customize parameters below. See how it shapes the timeline scope, and instantly message Nithil with this config.
              </p>
            </div>

            {/* Selector Field */}
            <div className="flex flex-col gap-2">
              <label className="font-sans text-xs font-bold text-slate-700">Selected Service Tier</label>
              <select
                value={selectedService.id}
                onChange={(e) => {
                  const sv = SERVICES_DATA.find((s) => s.id === e.target.value);
                  if (sv) setSelectedService(sv);
                }}
                className="w-full bg-white border border-slate-300 px-4 py-2.5 rounded-xl font-sans text-sm outline-none text-slate-800 focus:border-slate-800 transition-colors"
              >
                {SERVICES_DATA.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Slider Range Input representing page count */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="font-sans text-xs font-bold text-slate-700">Desired Page Quantity</label>
                <span className="font-mono text-xs font-bold text-slate-900 bg-white border px-2 py-0.5 rounded-md">
                  {customPagesCount} {customPagesCount === 1 ? 'Page' : 'Pages'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                value={customPagesCount}
                onChange={(e) => setCustomPagesCount(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
              <span className="text-[10px] text-slate-400 block font-medium">
                (Standard single landing pages are 1 page; small restaurant menus 3-5 pages; business agencies 5-12 pages)
              </span>
            </div>

            {/* Optional checkboxes in grid format */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <label className="flex items-center gap-3 p-3 bg-white border rounded-xl cursor-pointer hover:bg-slate-100/50 transition-colors">
                <input
                  type="checkbox"
                  checked={addSEOBoost}
                  onChange={(e) => setAddSEOBoost(e.target.checked)}
                  className="w-4 h-4 rounded text-slate-900 accent-slate-900 border-slate-300 focus:ring-slate-900"
                />
                <div>
                  <span className="block font-sans text-xs font-bold text-slate-800">SEO Audit Tagging</span>
                  <span className="block text-[9px] text-slate-400">Include schema metadata</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 bg-white border rounded-xl cursor-pointer hover:bg-slate-100/50 transition-colors">
                <input
                  type="checkbox"
                  checked={addUrgentDelivery}
                  onChange={(e) => setAddUrgentDelivery(e.target.checked)}
                  className="w-4 h-4 rounded text-slate-900 accent-slate-900 border-slate-300 focus:ring-slate-900"
                />
                <div>
                  <span className="block font-sans text-xs font-bold text-slate-800">Express Turnaround</span>
                  <span className="block text-[9px] text-slate-400">Compress timeline (-40% time)</span>
                </div>
              </label>
            </div>
          </div>

          {/* Right panel summary estimation display */}
          <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-6 text-white flex flex-col justify-between border border-slate-800 shadow-md">
            <div>
              <span className="font-mono text-[9px] font-bold text-indigo-400 tracking-wider block uppercase mb-4">
                Estimated Output
              </span>

              {/* Service details */}
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block">Scope Category</span>
                  <span className="font-display font-semibold text-base text-white mt-1 block">
                    {selectedService.title}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block">Project Scope</span>
                    <span className="font-sans font-bold text-xs text-white mt-1 block">
                      {customPagesCount} Fluid {customPagesCount === 1 ? 'Page' : 'Pages'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block">Target Timeline</span>
                    <span className="font-display font-black text-amber-400 text-lg mt-0.5 block">
                      ~ {estimateDays()} Days
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block mb-1">Deliverables include</span>
                  <p className="text-[11px] text-slate-300 font-sans italic">
                    "{selectedService.matchTier}"
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Send trigger button */}
            <div className="mt-8">
              <a
                href={`https://wa.me/917416775421?text=${getPrefilledMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] hover:bg-[#128c7e] text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-lg text-center"
              >
                <IconRenderer name="MessageSquare" size={16} />
                Send Scope on WhatsApp
              </a>
              <span className="block text-center text-[9px] text-slate-500 mt-2 font-mono">
                Clicking opens WhatsApp with prefilled message
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
