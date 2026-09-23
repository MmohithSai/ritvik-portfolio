import type { Metadata } from "next";
import { Anton, Inter_Tight, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import CtaSection from "@/components/CtaSection";
import CookieBanner from "@/components/CookieBanner";
import Cursor from "@/components/Cursor";
import { hero, person } from "@/content/site";
import "./globals.css";

// Open-licence stand-ins for the commercial PP Neue families (DESIGN.md → Font families).
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
const interTight = Inter_Tight({ weight: "500", subsets: ["latin"], variable: "--font-inter-tight", display: "swap" });
const jetbrains = JetBrains_Mono({ weight: "500", subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
// Inter Display (SIL OFL) for the exclusion hero + footer.
const interDisplay = localFont({
  src: [
    { path: "./fonts/InterDisplay-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/InterDisplay-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/InterDisplay-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/InterDisplay-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: `${person.name} | ${person.role}`, template: `%s | ${person.name}` },
  description: `${person.name} — ${person.role}. ${hero.lead}`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${interTight.variable} ${jetbrains.variable} ${interDisplay.variable}`}>
      <body>
        <div className="grain" aria-hidden />
        <Cursor />
        <SiteNav />
        <div className="page">
          <main>{children}</main>
          <CtaSection />
        </div>
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  );
}
