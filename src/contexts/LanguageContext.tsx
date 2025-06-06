'use client';

import { ReactNode, createContext, useContext, useMemo } from 'react';

// Original full simpleTranslations object
const simpleTranslations = {
  nav: {
    home: "Home",
    about: "About",
    services: "Services", 
    portfolio: "Portfolio",
    blog: "Blog",
    contact: "Contact",
    contactUs: "Contact Us"
  },
  hero: {
    title: "The Crafted Hospitality",
    subtitle: "Expert Hospitality Consulting in Panama",
    description: "Transform your hospitality vision into extraordinary experiences.",
    bookConsultation: "Book Consultation",
    exploreServices: "Explore Services"
  },
  services: {
    title: "Our Services",
    description: "Professional hospitality consulting services.",
    dmc: {
      title: "DMC & Experiences",
      description: "Destination management and experiences.",
      learnMore: "Learn More →"
    },
    consulting: {
      title: "Hotel Consulting",
      description: "Strategic consulting for hospitality operations.",
      learnMore: "Learn More →"
    },
    technology: {
      title: "Technology Integration",
      description: "Modern hospitality technology solutions.",
      learnMore: "Learn More →"
    }
  },
  about: {
    title: "Our Story",
    description1: "Expert hospitality consulting in Panama.",
    description2: "Creating exceptional experiences.",
    ourExpertise: "Our Expertise",
    viewWork: "View Our Work"
  },
  cta: {
    title: "Ready to Get Started?",
    description: "Let's transform your hospitality concept.",
    scheduleConsultation: "Schedule Consultation",
    callToday: "Call Today"
  },
  footer: {
    expertConsulting: "Expert Consulting",
    description: "Hospitality consulting services in Panama.",
    quickLinks: "Quick Links",
    aboutUs: "About Us",
    getInTouch: "Get in Touch",
    location: "Location",
    email: "Email",
    startProject: "Start Project",
    copyright: "The Crafted Hospitality",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    madeInPanama: "Made in Panama"
  },
  common: {
    learnMore: "Learn More",
    readMore: "Read More",
    getStarted: "Get Started",
    contactUs: "Contact Us"
  }
};

// Original LanguageContextType
interface LanguageContextType {
  language: 'en' | 'es';
  setLanguage: (lang: 'en' | 'es') => void;
  t: typeof simpleTranslations;
  isLoaded: boolean;
}

// const TinyTranslationsContext = createContext<any | undefined>(undefined); // Commented out
const LanguageContext = createContext<LanguageContextType | undefined>(undefined); // Using original LanguageContext name

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const contextValue: LanguageContextType = useMemo(() => ({
    language: 'en',
    setLanguage: () => {},
    t: simpleTranslations,
    isLoaded: true
  }), []);

  return (
    <LanguageContext.Provider value={contextValue}> {/* Using original LanguageContext name */}
      {children}
    </LanguageContext.Provider>
  );
}

// Original useLanguage hook - re-enabled but adapted to use LanguageContext
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 