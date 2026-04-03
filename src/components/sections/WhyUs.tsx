import { config } from "@/config/data";

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 px-0 md:px-24 bg-surface-container-low relative overflow-hidden">
      {/* Decorative Lines Parallax Effect & Vertical Boundaries */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[40rem] h-[1px] bg-primary/20 rotate-[25deg]"></div>
        <div className="absolute top-2/4 right-0 w-[40rem] h-[1px] bg-primary/20 rotate-[25deg]"></div>
        {/* Thin vertical lines on desktop */}
        <div className="hidden md:block absolute top-0 left-12 w-[1px] h-full bg-outline-variant/20"></div>
        <div className="hidden md:block absolute top-0 right-12 w-[1px] h-full bg-outline-variant/20"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-0 relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 animate-on-scroll">
          <h2 className="font-headline font-black text-5xl md:text-6xl text-blue-950 tracking-tighter">{config.whyUs.title}</h2>
          <p className="text-slate-500 max-w-sm font-light uppercase tracking-widest text-xs leading-loose">
            {config.whyUs.subtitle}
          </p>
        </div>
      </div>

      {/* Mobile Horizontal Scroll vs Desktop Vertical Flow */}
      <div className="flex flex-nowrap md:flex-col overflow-x-auto snap-x-mandatory hide-scrollbar pb-8 px-6 md:px-0 md:max-w-7xl md:mx-auto md:space-y-48 gap-8 md:gap-0 relative z-10">
        {config.whyUs.points.map((pt, idx) => (
          <div key={idx} className={`snap-center flex-shrink-0 w-[85vw] md:w-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} animate-on-scroll relative`}>
            
            {/* Very Large Number Element */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] lg:text-[20rem] font-headline font-extrabold text-primary/5 leading-none select-none pointer-events-none z-0">
              {pt.id}
            </div>

            <div className="max-w-xl relative z-10 bg-surface/80 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none backdrop-blur-md md:backdrop-blur-none border border-white/20 md:border-none shadow-xl md:shadow-none">
              <h3 className="font-headline font-bold text-2xl md:text-3xl mb-4 md:mb-6 text-blue-900 border-l-4 border-primary pl-4">{pt.title}</h3>
              <p className="text-secondary leading-relaxed md:text-lg font-body">
                {pt.description}
              </p>
            </div>
            
            <div className="flex-grow hidden md:block"></div>
            
            <div className={`w-full md:w-80 h-72 md:h-96 rounded-xl overflow-hidden editorial-shadow relative z-30 ${idx % 2 === 0 ? 'md:rotate-3' : 'md:-rotate-6'}`}>
              <img 
                src={pt.image} 
                alt={pt.title} 
                loading="lazy" 
                decoding="async" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 border-4 border-primary/10 rounded-xl pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Scroll indicator for mobile */}
      <div className="md:hidden flex justify-center mt-4 gap-2 opacity-50">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
        <div className="w-2 h-2 rounded-full bg-primary/30"></div>
        <div className="w-2 h-2 rounded-full bg-primary/30"></div>
      </div>
      
      {/* Transisi Wave ke Section Portfolio (bg-surface = putih) */}
      <div className="wave-divider text-white relative z-20">
        <svg viewBox="0 0 1440 320" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,224L48,208C96,192,192,160,288,154.7C384,149,480,171,576,192C672,213,768,235,864,240C960,245,1056,235,1152,218.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
