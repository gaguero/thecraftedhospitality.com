'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRightIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const heroContent = {
  en: {
    title: "Panama's Premier Destination Management Company",
    subtitle: "Authentic Experiences. Seamless Execution. Unforgettable Results.",
    description: "From corporate events to incentive programs, we create extraordinary experiences that showcase the best of Panama while delivering world-class professional service.",
    cta1: "Plan Your Event",
    cta2: "Download Capabilities",
    stats: [
      { number: "500+", label: "Events Managed" },
      { number: "50+", label: "Fortune 500 Clients" },
      { number: "15+", label: "Years of Excellence" },
      { number: "100%", label: "Client Satisfaction" }
    ]
  },
  es: {
    title: "La Principal Empresa de Gestión de Destinos de Panamá",
    subtitle: "Experiencias Auténticas. Ejecución Perfecta. Resultados Inolvidables.",
    description: "Desde eventos corporativos hasta programas de incentivos, creamos experiencias extraordinarias que muestran lo mejor de Panamá mientras brindamos un servicio profesional de clase mundial.",
    cta1: "Planifica Tu Evento",
    cta2: "Descargar Capacidades",
    stats: [
      { number: "500+", label: "Eventos Gestionados" },
      { number: "50+", label: "Clientes Fortune 500" },
      { number: "15+", label: "Años de Excelencia" },
      { number: "100%", label: "Satisfacción del Cliente" }
    ]
  }
};

export default function DMCHero() {
  const { language } = useLanguage();
  const content = heroContent[language];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-green/90 to-primary-green/70">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582550945154-019d17d5c21b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-green/90 to-primary-green/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            {content.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-accent-gold font-light mb-8 leading-relaxed">
            {content.subtitle}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {content.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group bg-accent-gold text-primary-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-gold/90 transition-all duration-300 flex items-center justify-center gap-2">
              {content.cta1}
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-green transition-all duration-300 flex items-center justify-center gap-2">
              {content.cta2}
              <DocumentArrowDownIcon className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {content.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 