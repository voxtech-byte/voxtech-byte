import { config } from "@/config/data";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 px-0 md:px-24 bg-slate-200 relative">
      {/* Decorative vertical line */}
      <div className="hidden md:block absolute top-0 left-12 w-[1px] h-full bg-slate-900/5"></div>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Header Column */}
          <div className="md:col-span-4 flex flex-col justify-center animate-on-scroll relative">
            {/* Decorative Star/Asterisk */}
            <svg className="absolute -top-12 -left-8 w-24 h-24 text-slate-900/5 animate-[spin_10s_linear_infinite] pointer-events-none hidden md:block" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
            </svg>
            <div className="vertical-text hidden md:block text-slate-900/5 font-headline font-black text-8xl leading-none tracking-tighter mb-8">
              {config.portfolio.title}
            </div>
            <h2 className="font-headline font-bold text-4xl md:text-5xl text-blue-950 mb-8 tracking-tighter leading-none whitespace-pre-line">
              {config.portfolio.headline}
            </h2>
            <p className="text-slate-600 font-light max-w-xs font-body">
              {config.portfolio.description}
            </p>
          </div>
          
          {/* Mobile Horizontal Scroll vs Desktop Masonry Grid */}
          <div className="md:col-span-8">
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-8 px-0">
              {/* Column 1 */}
              <div className="space-y-12 flex flex-col">
                {[config.portfolio.items[0], config.portfolio.items[1]].map((item, idx) => (
                  <PortfolioCard key={idx} item={item} idx={idx} />
                ))}
              </div>
              {/* Column 2 (Offset) */}
              <div className="space-y-12 pt-32 flex flex-col">
                {[config.portfolio.items[2], config.portfolio.items[3]].map((item, idx) => (
                  <PortfolioCard key={idx} item={item} idx={idx + 2} />
                ))}
              </div>
            </div>

            {/* Mobile Scroll */}
            <div className="flex md:hidden overflow-x-auto snap-x-mandatory hide-scrollbar pb-8 -mx-6 px-6 gap-6">
              {config.portfolio.items.map((item, idx) => (
                <div key={idx} className="flex-shrink-0 w-[80vw] snap-center">
                  <PortfolioCard item={item} idx={idx} isMobile />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Transisi Wave ke Section Pricing (bg-slate-800) */}
      <div className="wave-divider text-slate-800 relative z-20">
        <svg viewBox="0 0 1440 320" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,117.3C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}

interface PortfolioItem {
  category: string;
  title: string;
  link: string;
  image: string;
  welcomeImage?: string;
  aspectRatio: string;
}

function PortfolioCard({ item, idx, isMobile }: { item: PortfolioItem, idx: number, isMobile?: boolean }) {
  return (
    <div className={`flex flex-col gap-4 ${!isMobile ? `animate-on-scroll delay-${(idx + 1) * 100}` : ''}`}>
      <a 
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`card-lift block relative group overflow-hidden rounded-2xl ${item.aspectRatio} transition-all duration-300`}
        style={{ perspective: "800px" }}
      >
        {/* Main Content Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={item.image} 
          alt={item.title}
          loading="lazy" 
          decoding="async" 
          className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110" 
        />
        
        {/* Welcome Modal Preview Overlay */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 w-20 md:w-32 aspect-[9/16] rounded-lg overflow-hidden border-2 border-white/40 shadow-2xl z-20 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 pointer-events-none md:opacity-90 group-hover:opacity-100 ring-1 ring-black/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={item.welcomeImage} 
            alt="Welcome Preview" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Hover overlay for 'View' feel */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
           <div className="bg-white/90 backdrop-blur-sm text-primary px-6 py-2 rounded-full font-headline font-bold scale-90 group-hover:scale-100 transition-transform">
             Lihat Detail
           </div>
        </div>

        {/* Decorative tag */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 z-30">
          Kunjungi
        </div>
      </a>

      {/* Info below card */}
      <div className="px-2">
        <span className="text-[10px] uppercase tracking-widest font-label text-slate-400 mb-1 block">
          {item.category}
        </span>
        <h4 className="font-headline font-bold text-xl text-blue-950 group-hover:text-primary transition-colors">
          {item.title}
        </h4>
      </div>
    </div>
  );
}
