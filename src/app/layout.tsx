import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { config } from "@/config/data";
import ScrollObserver from "@/components/utils/ScrollObserver";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter", weight: ["300", "400", "500", "600"] });
const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope", weight: ["200", "300", "400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: config.seo.title,
  description: config.seo.description,
  openGraph: {
    title: config.seo.title,
    description: config.seo.description,
    url: config.seo.url,
    siteName: "VoxTech",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VoxTech",
    "url": config.seo.url,
    "description": config.seo.description,
  };

  return (
    <html lang="id" className={`scroll-smooth ${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface text-on-surface font-body overflow-x-hidden antialiased">
        <ScrollObserver />
        <div className="grain-overlay"></div>
        {children}
      </body>
    </html>
  );
}
