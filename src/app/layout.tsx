import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PerformanceTracker from "@/components/PerformanceTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improve font loading performance
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Improve font loading performance
  preload: true,
});

export const metadata: Metadata = {
  title: "The Crafted Hospitality",
  description:
    "Professional hospitality consulting services in Panama. Expert guidance for hotels, restaurants, and tourism businesses.",
  keywords:
    "consultoría hotelera, turismo Panamá, hospitality consulting, hotel management",
  authors: [{ name: "Gerson, The Crafted Hospitality" }],
  robots: "index, follow",
  openGraph: {
    title: "The Crafted Hospitality - Professional Consulting",
    description: "Expert hospitality and tourism consulting services in Panama",
    type: "website",
    locale: "en_US",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1f2937" />
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <PerformanceTracker />
        {children}
      </body>
    </html>
  );
}
