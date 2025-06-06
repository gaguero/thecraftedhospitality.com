'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-shadow text-brand-white">
      <div className="max-w-7xl mx-auto content-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/logo/Logo-prrimary-horizontal.png"
                alt="The Crafted Hospitality"
                width={240}
                height={80}
                className="h-16 w-auto filter brightness-0 invert"
              />
            </div>
            <h3 className="text-xl font-heading font-semibold text-brand-accent mb-4">
              {t.footer.expertConsulting}
            </h3>
            <p className="text-brand-white/85 mb-6 leading-relaxed max-w-md">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              {/* Social Media Links */}
              <a
                href="#"
                className="text-brand-white/70 hover:text-brand-accent transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-brand-white/70 hover:text-brand-accent transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.897-.875-1.387-2.026-1.387-3.323s.49-2.448 1.297-3.323c.875-.897 2.026-1.387 3.323-1.387s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-brand-white/70 hover:text-brand-accent transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-brand-accent mb-6">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-brand-white/85 hover:text-brand-accent transition-colors">
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-brand-white/85 hover:text-brand-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-brand-white/85 hover:text-brand-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-brand-white/85 hover:text-brand-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-white/85 hover:text-brand-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-brand-accent mb-6">
              {t.footer.getInTouch}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-brand-accent">Location</p>
                  <p className="text-brand-white/85 text-sm">Panama City, Panama</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-brand-accent">Email</p>
                  <a href="mailto:info@thecraftedhospitality.com" className="text-brand-white/85 hover:text-brand-accent transition-colors text-sm">
                    info@thecraftedhospitality.com
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/contact" className="btn-primary text-sm">
                  {t.footer.startProject}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-brand-white/70 text-sm">
                © {currentYear} {t.footer.copyright}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <Link href="/privacy" className="text-brand-white/70 hover:text-brand-accent transition-colors">
                {t.footer.privacyPolicy}
              </Link>
              <Link href="/terms" className="text-brand-white/70 hover:text-brand-accent transition-colors">
                {t.footer.termsOfService}
              </Link>
              <span className="text-brand-white/70">
                {t.footer.madeInPanama}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 