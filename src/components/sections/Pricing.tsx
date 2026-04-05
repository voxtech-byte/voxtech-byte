import { config } from "@/config/data";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-slate-800 relative overflow-hidden bg-concentric">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] md:w-[80vw] h-[150vw] md:h-[80vw] border border-white/5 rounded-full pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full pointer-events-none animate-pulse blur-xl"></div>
      <div className="absolute bottom-40 left-10 w-20 h-20 bg-white/5 rounded-full pointer-events-none blur-lg"></div>
      
      {/* Wave Divider Transition to FAQ (bg-slate-900) */}
      <div className="wave-divider text-slate-900 z-0">
        <svg viewBox="0 0 1440 320" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,117.3C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-16 relative z-10 pb-16">
        <div className="lg:w-1/3 animate-on-scroll">
          <h2 className="font-headline font-black text-5xl md:text-6xl text-white tracking-tighter leading-none mb-8 whitespace-pre-line">
            {config.pricing.title}
          </h2>
          <p className="text-white/60 font-light mb-12 font-body max-w-md">
            {config.pricing.description}
          </p>
          <a href={config.links.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-8 md:px-10 py-4 rounded-xl font-headline font-bold transition-all hover:scale-105 active:scale-95 text-center w-full md:w-auto">
            Konsultasi via WhatsApp
          </a>
        </div>
        
        <div className="lg:w-2/3 flex flex-col gap-8 md:gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start pt-8 lg:pt-0">
            {config.pricing.tiers.map((tier, idx) => (
              <div 
                key={tier.id}
                className={`p-8 md:p-12 rounded-2xl animate-on-scroll delay-${(idx + 1) * 100} relative transition-all duration-500 hover:-translate-y-2 ${tier.isPopular ? 'bg-white lg:-translate-y-12 order-first md:order-last ring-1 ring-slate-200 float-card-popular pulse-glow' : 'bg-slate-50 lg:mt-24 shadow-xl'}`}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 right-8 md:right-12 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg">
                    Paket Terpopuler
                  </div>
                )}
                
                <span className="font-label text-[10px] md:text-xs tracking-widest uppercase block mb-2 text-slate-400">{tier.category}</span>
                <h3 className="font-headline font-bold text-2xl md:text-3xl mb-6 text-blue-950">{tier.name}</h3>
                
                <div className="mb-8">
                  <span className="text-4xl md:text-5xl font-headline font-black text-blue-900">{tier.price}</span>
                  <span className="text-sm italic font-body text-slate-400">{tier.unit}</span>
                </div>
                
                <ul className="space-y-4 mb-10 md:mb-12 font-light font-body text-slate-600">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-4 h-4 flex-shrink-0 text-blue-600" fill={tier.isPopular ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                        {tier.isPopular ? (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        )}
                      </svg>
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href={config.links.form} target="_blank" rel="noopener noreferrer" className={`block text-center py-4 rounded-xl font-bold transition-all font-body ${tier.isPopular ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' : 'bg-slate-200 text-blue-950 hover:bg-slate-300 border border-slate-300'}`}>
                  {tier.ctaText}
                </a>
              </div>
            ))}
          </div>
          <p className="text-white/60 font-body text-center lg:text-right mt-4 animate-on-scroll">
            Mau nego? Bisa, hubungi kami dulu via WhatsApp 😊
          </p>
        </div>
      </div>
    </section>
  );
}
