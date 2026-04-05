import { config } from "@/config/data";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-xl transition-all duration-500 ease-in-out shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-3">
          <Image 
            src={config.seo.logo} 
            alt="VoxTech Logo" 
            width={40} 
            height={40} 
            className="w-10 h-10 object-contain drop-shadow-sm"
          />
          <span className="text-2xl font-bold tracking-tighter text-blue-950 font-headline">VoxTech</span>
        </div>
        <div className="hidden md:flex gap-10 font-headline tracking-tight font-light text-slate-500">
          <Link href="#why-us" className="text-blue-950 border-b-2 border-blue-900 pb-1 transition-all duration-500 ease-in-out hover:opacity-70">Kenapa Kami?</Link>
          <Link href="#portfolio" className="hover:text-blue-900 transition-all duration-500 ease-in-out hover:opacity-70">Karya</Link>
          <Link href="#pricing" className="hover:text-blue-900 transition-all duration-500 ease-in-out hover:opacity-70">Harga</Link>
        </div>
        <a href={config.links.form} target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-6 md:px-8 py-3 rounded-xl font-headline font-semibold tracking-tight transition-all duration-500 ease-in-out hover:opacity-70 shadow-lg shadow-primary/10">
          {config.hero.cta}
        </a>
      </div>
    </nav>
  );
}
