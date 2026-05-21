import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IconRenderer } from './IconRenderer';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show inviting tooltip after 3.5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            className="pointer-events-auto max-w-xs bg-white text-slate-800 rounded-2xl shadow-xl border border-slate-100 p-4 relative mb-2"
          >
            {/* Small triangle arrow on bottom-right */}
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white border-r border-b border-slate-100 rotate-45" />

            {/* Quick avatar & status */}
            <div className="flex items-center gap-2 mb-2 border-b border-slate-50 pb-2">
              <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-display text-xs font-bold">
                N
              </div>
              <div>
                <span className="font-display font-bold text-xs block text-slate-900">Nithil</span>
                <span className="text-[9px] text-[#25D366] font-medium block flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" /> Online
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
                className="ml-auto p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
              >
                <IconRenderer name="X" size={12} />
              </button>
            </div>

            {/* Conversational prompt */}
            <p className="font-sans text-xs text-slate-600 leading-relaxed mb-3">
              Hi there! 👋 Looking for a new website, business profile, or restaurant menu? Let's discuss your project on WhatsApp.
            </p>

            <a
              href="https://wa.me/917416775421"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#128c7e] transition-all shadow-md"
            >
              <IconRenderer name="MessageSquare" size={14} />
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.div
        className="pointer-events-auto"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href="https://wa.me/917416775421"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 bg-[#25D366] hover:bg-[#128c7e] text-white rounded-full flex items-center justify-center shadow-2xl transition-all group pointer-events-auto cursor-pointer border border-[#2df077]"
          title="Chat with Nithil on WhatsApp"
        >
          {/* Pulsing indicator background circle */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10 group-hover:scale-125" />

          {/* Genuine Notification bubble on top-right */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          </span>

          <IconRenderer name="MessageSquare" size={24} className="fill-white" />
        </a>
      </motion.div>
    </div>
  );
};
