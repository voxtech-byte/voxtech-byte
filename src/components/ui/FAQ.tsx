"use client";

import { config } from "@/config/data";
import { useState } from "react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  if (!config.faq || config.faq.length === 0) return null;

  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-surface relative overflow-hidden bg-dot-grid">
      {/* Decorative Quotation Mark */}
      <div className="absolute top-10 left-4 md:left-24 text-[20rem] md:text-[30rem] font-headline font-black text-primary/5 leading-none select-none pointer-events-none z-0">
        &quot;
      </div>
      
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-headline font-black text-4xl md:text-5xl text-blue-950 mb-4">FAQ</h2>
          <p className="text-slate-500 font-body">Pertanyaan yang sering diajukan mengenai layanan kami.</p>
        </div>
        
        <div className="space-y-4">
          {config.faq.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`border-b border-outline-variant/20 transition-colors duration-300 animate-on-scroll delay-${(idx % 5) * 100} ${isOpen ? 'bg-surface-container-high rounded-t-lg' : ''}`}
              >
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center py-6 px-4 md:px-8 text-left focus:outline-none"
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  <span className="font-headline font-bold text-lg text-blue-950">{item.question}</span>
                  <span className={`transform transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180 text-primary' : 'text-slate-400'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'}`}
                >
                  <p className="px-4 md:px-8 text-slate-600 font-body leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
