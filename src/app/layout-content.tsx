'use client';

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function LayoutContent({ children }: { children: ReactNode }) {
  const { t, isLoaded } = useLanguage();
  const pathname = usePathname();

  // If we're on the homepage (root or with locale), render without header and footer
  if (pathname === "/" || pathname === "/es" || pathname === "/en") {
    return (
      <html lang="en">
        <body className="min-h-screen bg-brand-cream text-gray-900">
          {children}
        </body>
      </html>
    );
  }

  if (!isLoaded || !t || !t.nav) {
    const fallbackNavTranslations = {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      blog: "Blog",
      contactUs: "Contact Us"
    };
    return (
      <html lang="en">
        <body className="min-h-screen bg-brand-cream text-gray-900">
          <div className="flex flex-col min-h-screen">
            <Navbar navTranslations={fallbackNavTranslations} />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    );
  }

  const navTranslations = t.nav;

  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-cream text-gray-900">
        <div className="flex flex-col min-h-screen">
          <Navbar navTranslations={navTranslations} />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 