import { LanguageProvider } from "@/contexts/LanguageContext"; // Keep LanguageProvider import
import type { Metadata } from "next";
import { ReactNode } from "react"; // Added ReactNode import
import "./globals.css";
import LayoutContent from "./layout-content"; // Import the new client component

// Define metadata separately as it cannot use hooks
export const metadata: Metadata = {
  title: "The Crafted Hospitality - Expert Hospitality Consulting in Panama",
  description:
    "Transform your hospitality vision into extraordinary experiences. Expert consulting services for hotels, restaurants, and tourism businesses in Panama combining international standards with local excellence.",
};

// RootLayout remains a Server Component
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <LanguageProvider>
      <LayoutContent>{children}</LayoutContent>
    </LanguageProvider>
  );
}
