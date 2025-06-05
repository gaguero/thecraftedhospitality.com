'use client';

// import { useLanguage } from1 '@/contexts/LanguageContext'; // Will get translations via props
import Image from1 'next/image';
import Link from1 'next/link';
import { useEffect, useState } from1 'react'; // Re-enabling useState for the test

// Simplified translations structure for nav passed as prop
interface NavTranslations {
  home: string;
  about: string;
  services: string;
  portfolio: string;
  blog: string;
  contactUs: string;
}

interface NavbarProps {
  navTranslations: NavTranslations;
}

// Language switcher component - remains commented out
/*
function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en';
    setLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-md text-brand-white hover:text-brand-accent transition-colors group"
      title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
    >
      <span className="text-sm font-medium">
        {language === 'en' ? 'EN' : 'ES'}
      </span>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    </button>
  );
}
*/

export default function Navbar({ navTranslations }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false); // Re-enabling state
  const [isScrolled, setIsScrolled] = useState(false); // Re-enabling state
  // const { t } = useLanguage(); // Getting t.nav via props as navTranslations

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-primary/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto content-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo/Logo-prrimary-horizontal.png"
                alt="The Crafted Hospitality"
                width={220}
                height={60}
                className="h-16 w-auto filter brightness-0 invert"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="nav-link"
            >
              {navTranslations.home}
            </Link>
            <Link
              href="/about"
              className="nav-link"
            >
              {navTranslations.about}
            </Link>
            <Link
              href="/services"
              className="nav-link"
            >
              {navTranslations.services}
            </Link>
            <Link
              href="/portfolio"
              className="nav-link"
            >
              {navTranslations.portfolio}
            </Link>
            <Link
              href="/blog"
              className="nav-link"
            >
              {navTranslations.blog}
            </Link>
            
            {/* Language Switcher - remains commented */}
            
            <Link
              href="/contact"
              className="btn-primary"
            >
              {navTranslations.contactUs}
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              type="button"
              className="text-brand-white hover:text-brand-accent focus:outline-none focus:text-brand-accent transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-brand-primary/95 backdrop-blur-md rounded-lg mt-2">
              <Link
                href="/"
                className="mobile-nav-link"
                onClick={closeMenu}
              >
                {navTranslations.home}
              </Link>
              <Link
                href="/about"
                className="mobile-nav-link"
                onClick={closeMenu}
              >
                {navTranslations.about}
              </Link>
              <Link
                href="/services"
                className="mobile-nav-link"
                onClick={closeMenu}
              >
                {navTranslations.services}
              </Link>
              <Link
                href="/portfolio"
                className="mobile-nav-link"
                onClick={closeMenu}
              >
                {navTranslations.portfolio}
              </Link>
              <Link
                href="/blog"
                className="mobile-nav-link"
                onClick={closeMenu}
              >
                {navTranslations.blog}
              </Link>
              <Link
                href="/contact"
                className="mobile-nav-link"
                onClick={closeMenu}
              >
                {navTranslations.contactUs} {/* Using contactUs for the 'Contact' mobile link based on desktop pattern */}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

