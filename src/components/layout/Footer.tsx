import { config } from "@/config/data";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full relative mt-24 rounded-t-[3rem] gradient-shift-bg text-white animate-on-scroll">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-8 md:px-16 py-24 max-w-screen-2xl mx-auto items-end">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <Image 
              src={config.seo.logo} 
              alt="VoxTech Logo" 
              width={64} 
              height={64} 
              className="w-16 h-16 object-contain brightness-0 invert"
            />
            <span className="text-6xl font-headline font-bold tracking-tighter text-white">VoxTech</span>
          </div>
          <p className="text-slate-400 max-w-md font-body leading-relaxed tracking-tight mb-8">
            {config.footer.description}
          </p>
          <div className="flex gap-6 font-body text-sm">
            <a href={config.links.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-all">WhatsApp</a>
            <a href={config.links.form} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-all">Pesan Sekarang</a>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end gap-12">
          <div className="flex flex-wrap md:justify-end gap-x-8 gap-y-4 font-body text-sm">
            {config.footer.links.map((link, idx) => (
              <Link key={idx} href={link.href} className="text-slate-400 hover:text-blue-400 transition-all">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="text-left md:text-right">
            <p className="text-slate-400 text-xs font-body leading-relaxed tracking-tight">
              © {new Date().getFullYear()} VoxTech. Dibuat untuk Momen Berkesan.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
