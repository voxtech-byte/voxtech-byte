"use client";

import { config } from "@/config/data";
import { useState } from "react";
import TextScramble from "@/components/utils/TextScramble";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  if (!config.faq || config.faq.length === 0) return null;

  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-slate-900 relative overflow-hidden bg-dot-grid-dark">
      {/* Decorative Quotation Mark */}
      <div className="absolute top-10 left-4 md:left-24 text-[20rem] md:text-[30rem] font-headline font-black text-white/5 leading-none select-none pointer-events-none z-0">
        &quot;
      </div>
      
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-headline font-black text-4xl md:text-5xl text-white mb-4">FAQ</h2>
          <p className="text-slate-400 font-body">Pertanyaan yang sering diajukan mengenai layanan kami.</p>
        </div>
        
        <div className="space-y-4">
          {config.faq.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`border-b border-white/10 transition-colors duration-300 ${isOpen ? 'bg-slate-800/50 rounded-t-lg shadow-xl' : ''}`}
              >
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center py-6 px-4 md:px-8 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-headline font-bold text-lg ${isOpen ? 'text-blue-400' : 'text-white'}`}>{item.question}</span>
                  <span className={`transform transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180 text-blue-400' : 'text-slate-500'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </button>
                
                {/* CSS Grid technique for smooth height animation */}
                <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                  <div>
                    <p className="px-4 md:px-8 pb-6 text-slate-300 font-body leading-relaxed">
                      <TextScramble text={item.answer} isActive={isOpen} />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
