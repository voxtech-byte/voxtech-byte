import { config } from "@/config/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full relative mt-24 rounded-t-[3rem] bg-slate-100 dark:bg-slate-900 animate-on-scroll">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-8 md:px-16 py-24 max-w-screen-2xl mx-auto items-end">
        <div>
          <span className="text-6xl font-headline font-bold tracking-tighter mb-8 block text-blue-950 dark:text-blue-50">VoxTech</span>
          <p className="text-slate-600 dark:text-slate-400 max-w-md font-body leading-relaxed tracking-tight mb-8">
            {config.footer.description}
          </p>
          <div className="flex gap-6 font-body text-sm">
            <a href={config.links.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-900 transition-all">WhatsApp</a>
            <a href={config.links.form} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-900 transition-all">Pesan Sekarang</a>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end gap-12">
          <div className="flex flex-wrap md:justify-end gap-x-8 gap-y-4 font-body text-sm">
            {config.footer.links.map((link, idx) => (
              <Link key={idx} href={link.href} className="text-slate-600 dark:text-slate-400 hover:text-blue-900 transition-all">
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
