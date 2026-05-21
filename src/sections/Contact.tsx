import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IconRenderer } from '../components/IconRenderer';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [service, setService] = useState('Business Website');
  const [notes, setNotes] = useState('');
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const phoneRaw = "7416775421";
  const whatsappUrl = "https://wa.me/917416775421";

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!name.trim()) {
      setFormError('Please input your name so Nithil knows who to reply to.');
      return;
    }

    // Success response state
    setFormSubmitted(true);

    // Prompt WhatsApp action after brief delay or offer button
    const messageText = `Hi Nithil!\nMy name is ${name}${businessName ? ` from ${businessName}` : ''}.\nI am interested in a *${service}*.\nNotes: ${notes || 'None'}\nLooking forward to working with you!`;
    const encoded = encodeURIComponent(messageText);
    
    // Automatically redirect to WhatsApp after 1.5 seconds so it feels real and helpful!
    setTimeout(() => {
      window.open(`https://wa.me/917416775421?text=${encoded}`, '_blank');
    }, 1500);
  };

  const handleReset = () => {
    setName('');
    setBusinessName('');
    setService('Business Website');
    setNotes('');
    setFormSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Visual top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col text-left mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
            05. Immediate Hook
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 mt-2 tracking-tight">
            Let's Work Together
          </h2>
          <div className="w-12 h-1 bg-slate-900 rounded-full mt-4" />
          <p className="font-sans text-sm text-slate-500 mt-4 max-w-xl">
            Ready to establish a solid footprint online? Review direct credentials below or send an automated quick-brief request immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-8">
          
          {/* Left Block: Business Card Elements */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex-1 flex flex-col justify-between text-left"
            >
              <div>
                <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-100 border px-2.5 py-1 rounded-md uppercase inline-block">
                  Official Business Card
                </span>
                
                <h3 className="font-display font-black text-2xl text-slate-900 mt-6 tracking-tight">
                  Nithil Portfolio
                </h3>
                <span className="text-xs font-mono text-slate-500 block mt-1">
                  Verified Freelance Website Developer
                </span>

                <div className="w-full h-px bg-slate-100 my-6" />

                {/* Direct Contact Options */}
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-900 flex items-center justify-center border shrink-0">
                      <IconRenderer name="Phone" size={18} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-slate-400 uppercase">Direct line / Call</span>
                      <a
                        href={`tel:${phoneRaw}`}
                        className="font-sans font-bold text-slate-800 text-sm hover:underline"
                        title="Click to call Nithil"
                      >
                        +91 {phoneRaw}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#25D366] flex items-center justify-center border shrink-0">
                      <IconRenderer name="MessageSquare" size={18} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-slate-400 uppercase">WhatsApp Inquiry</span>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans font-bold text-slate-800 text-sm hover:underline flex items-center gap-1"
                        title="Click to WhatsApp Nithil"
                      >
                        Chat Direct
                        <IconRenderer name="ExternalLink" size={12} className="text-slate-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Crucial requested texts here */}
              <div className="mt-12 bg-[#eff6ff] border border-blue-200 p-5 rounded-2xl">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg">
                    <IconRenderer name="MessageSquare" size={16} />
                  </div>
                  <p className="font-sans text-xs text-blue-900 font-semibold leading-relaxed">
                    Click the WhatsApp button to contact me directly.
                  </p>
                </div>
                
                <div className="mt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#128c7e] text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md"
                  >
                    <IconRenderer name="MessageSquare" size={14} />
                    WhatsApp Me Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Block: Interactive Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm h-full text-left"
            >
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleInquirySubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-display font-extrabold text-xl text-slate-900 tracking-tight">
                        Send Nithil a Quick Proposal
                      </h3>
                      <p className="font-sans text-xs text-slate-500 mt-1">
                        Fill this out and submit. The system compiles your request and opens a chat directly with Nithil.
                      </p>
                    </div>

                    {formError && (
                      <div className="bg-rose-50 border border-rose-250 p-3.5 rounded-xl text-rose-700 text-xs font-sans font-medium">
                        {formError}
                      </div>
                    )}

                    {/* Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs font-bold text-slate-700">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. David Miller"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-sans text-sm text-slate-800 outline-none focus:bg-white focus:border-slate-800 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs font-bold text-slate-700">Business / Brand Name</label>
                        <input
                          type="text"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          placeholder="e.g. Miller Bistro"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-sans text-sm text-slate-800 outline-none focus:bg-white focus:border-slate-800 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-xs font-bold text-slate-700">Requested Work Genre</label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-sans text-sm text-slate-800 outline-none focus:bg-white focus:border-slate-800 transition-colors"
                      >
                        <option value="Website Design">Website Design & UI Mockup</option>
                        <option value="Business Website">Custom Multi-page Business Site</option>
                        <option value="Restaurant Website">Interactive Restaurant Digital Menu Site</option>
                        <option value="Portfolio Website">Professional Freelancer Portfolio</option>
                        <option value="Landing Page">Marketing Campaign Landing Page</option>
                        <option value="Website Redesign">Speed Audit & Component Redesign</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-xs font-bold text-slate-700 font-semibold">Project Details / Requirements</label>
                      <textarea
                        rows={4}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Please brief Nithil about your site requirements, brand preferences, page sizes, or design patterns you like..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-sans text-sm text-slate-800 outline-none focus:bg-white focus:border-slate-800 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-display font-semibold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <IconRenderer name="MessageSquare" size={14} />
                      Generate and Launch WhatsApp Chat
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-prompt"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-10 h-full"
                  >
                    <div className="w-16 h-16 bg-emerald-50 text-[#25D366] border border-emerald-100 rounded-2xl flex items-center justify-center mb-6 shadow-xs">
                      <IconRenderer name="Check" size={32} />
                    </div>

                    <h3 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight">
                      Inquiry Pack Generated!
                    </h3>
                    <p className="font-sans text-sm text-slate-500 mt-2 max-w-sm">
                      WhatsApp was signaled to open with your prefilled custom message so you can request your quote seamlessly.
                    </p>

                    <div className="bg-slate-50 p-4 border rounded-2xl mt-6 text-left max-w-sm w-full font-mono text-xs text-slate-600 leading-snug">
                      <span className="font-bold text-slate-800 block mb-1">Generated Brief Message:</span>
                      "Hi Nithil! My name is {name}... interested in a *{service}*..."
                    </div>

                    <div className="flex gap-3 mt-8">
                      <button
                        onClick={handleReset}
                        className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-bold text-slate-700 cursor-pointer"
                      >
                        Send Another Brief
                      </button>
                      <a
                        href={`https://wa.me/917416775421?text=${encodeURIComponent(`Hi Nithil!\nMy name is ${name}${businessName ? ` from ${businessName}` : ''}.\nI am interested in a *${service}*.\nNotes: ${notes || 'None'}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-[#25D366] hover:bg-[#128c7e] text-white rounded-lg text-xs font-bold inline-flex items-center gap-2"
                      >
                        Resend WhatsApp Link
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
