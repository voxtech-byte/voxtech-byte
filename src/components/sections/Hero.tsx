import { config } from "@/config/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-12 overflow-hidden bg-dot-grid">
      {/* Abstract Geometric Shape */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-3xl pointer-events-none transform translate-y-0 transition-transform duration-[2000ms] lg:group-hover:translate-y-12"></div>
      
      {/* Large Decorative Typography */}
      <div className="absolute left-[-5%] md:left-12 top-1/4 select-none pointer-events-none opacity-[0.03] text-[40rem] font-headline font-black leading-none text-primary">
        V
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-32 left-12 w-6 h-6 border-2 border-primary/20 rounded-full pointer-events-none animate-pulse hidden md:block"></div>
      <div className="absolute bottom-48 left-1/3 w-2 h-2 bg-primary/20 rounded-full pointer-events-none hidden lg:block"></div>
      
      <div className="grid grid-cols-12 gap-6 items-center max-w-screen-2xl mx-auto w-full relative z-10">
        <div className="col-span-12 lg:col-span-7 relative z-10">
          <span className="animate-on-scroll text-tertiary-fixed-dim font-label text-xs tracking-[0.2em] uppercase mb-4 block">
            {config.hero.tagline}
          </span>
          <h1 className="animate-on-scroll delay-100 font-headline font-extrabold text-5xl md:text-7xl lg:text-9xl tracking-tighter text-blue-950 leading-[0.9] mb-8 whitespace-pre-line">
            {config.hero.headline}
          </h1>
          <p className="animate-on-scroll delay-200 max-w-md text-secondary leading-relaxed font-light text-lg mb-10">
            {config.hero.description}
          </p>
          <div className="animate-on-scroll delay-300 flex items-center gap-8">
            <div className="w-12 md:w-24 h-[1px] bg-outline-variant/30"></div>
            <a href="#why-us" className="font-headline font-bold text-primary group flex items-center gap-2">
              {config.hero.secondaryCta}
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
        
        <div className="col-span-12 lg:col-span-5 relative mt-16 lg:mt-0 animate-on-scroll delay-400">
          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden editorial-shadow -rotate-2 md:scale-100 transition-transform duration-700 hover:rotate-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTGXrJkBTzbOJMAjo0u_GxuRHOpoS-WTLTpgpuhDEtYhljpiGlmTlzynXUlIL_VgCGLLN0ZWanyd2GO2MwXl8-dKdXlrZheqlcsEDUkbFBH13TPYpgsZoTMPXlLEW0vef-YXiJfB3n2RCsjCLF9bEf11x2wo3Z-Y7WyTGpVKEgl70W8DmKM8-dXOAvj7IonmV3EB7Y5ztTowaGOTwwbQYFmD7SAiGlGCnPF3jwx5fCG8vIaSlKozCzCodPqZY1tWMj-NkzhsPQrPM"
              alt="Luxury Setting"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          </div>
          
          {/* Overlapping feature card */}
          <div className="absolute bottom-4 -left-6 md:-left-10 bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-2xl max-w-[240px] md:max-w-[280px] magnetic-hover z-30">
            <svg className="w-8 h-8 text-primary mb-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"></path></svg>
            <p className="font-headline font-bold text-blue-950 mb-2">Mode Kustom</p>
            <p className="text-xs text-slate-500 leading-relaxed font-body">Web greeting yang dipetakan secara emosional untuk menangkap nuansa perasaan manusia.</p>
          </div>
        </div>
      </div>
      
      {/* Transisi Wave ke Section WhyUs (bg-surface-container-low) */}
      <div className="wave-divider text-surface-container-low">
        <svg viewBox="0 0 1440 320" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,176C672,149,768,107,864,117.3C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
