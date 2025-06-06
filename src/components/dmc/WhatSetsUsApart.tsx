'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import {
    ChatBubbleLeftRightIcon,
    GlobeAltIcon,
    HeartIcon,
    ShieldCheckIcon,
    SparklesIcon,
    TrophyIcon
} from '@heroicons/react/24/outline';

const apartContent = {
  en: {
    subtitle: "Why Choose The Crafted Hospitality",
    title: "What Sets Us Apart",
    description: "We're not just another DMC. We're your partners in creating extraordinary experiences that showcase the authentic spirit of Panama while delivering uncompromising professional excellence.",
    differentiators: [
      {
        icon: HeartIcon,
        title: "Boutique Approach",
        description: "Personal attention and customized solutions, not corporate templates. Every event receives our full focus and creativity."
      },
      {
        icon: GlobeAltIcon,
        title: "Deep Panama Expertise",
        description: "Born and raised in Panama, we know the hidden gems, cultural nuances, and local connections that make experiences truly authentic."
      },
      {
        icon: ChatBubbleLeftRightIcon,
        title: "Bilingual Excellence",
        description: "Seamless communication in English and Spanish ensures nothing gets lost in translation with your international teams."
      },
      {
        icon: SparklesIcon,
        title: "Luxury Experience Focus",
        description: "We specialize in high-end events that create lasting impressions and exceed the expectations of discerning clientele."
      },
      {
        icon: ShieldCheckIcon,
        title: "Sustainable Leadership",
        description: "Pioneering eco-conscious practices that benefit local communities while reducing environmental impact."
      },
      {
        icon: TrophyIcon,
        title: "Proven Results",
        description: "15+ years of excellence with Fortune 500 companies, consistently delivering events that drive business results."
      }
    ]
  },
  es: {
    subtitle: "Por Qué Elegir The Crafted Hospitality",
    title: "Lo Que Nos Distingue",
    description: "No somos solo otra empresa de gestión de destinos. Somos sus socios en la creación de experiencias extraordinarias que muestran el espíritu auténtico de Panamá mientras brindamos excelencia profesional sin compromisos.",
    differentiators: [
      {
        icon: HeartIcon,
        title: "Enfoque Boutique",
        description: "Atención personal y soluciones personalizadas, no plantillas corporativas. Cada evento recibe toda nuestra atención y creatividad."
      },
      {
        icon: GlobeAltIcon,
        title: "Experiencia Profunda en Panamá",
        description: "Nacidos y criados en Panamá, conocemos las joyas ocultas, los matices culturales y las conexiones locales que hacen que las experiencias sean verdaderamente auténticas."
      },
      {
        icon: ChatBubbleLeftRightIcon,
        title: "Excelencia Bilingüe",
        description: "Comunicación fluida en inglés y español garantiza que nada se pierda en la traducción con sus equipos internacionales."
      },
      {
        icon: SparklesIcon,
        title: "Enfoque en Experiencias de Lujo",
        description: "Nos especializamos en eventos de alto nivel que crean impresiones duraderas y superan las expectativas de clientela exigente."
      },
      {
        icon: ShieldCheckIcon,
        title: "Liderazgo Sostenible",
        description: "Pioneros en prácticas eco-conscientes que benefician a las comunidades locales mientras reducen el impacto ambiental."
      },
      {
        icon: TrophyIcon,
        title: "Resultados Comprobados",
        description: "Más de 15 años de excelencia con empresas Fortune 500, entregando consistentemente eventos que generan resultados de negocio."
      }
    ]
  }
};

export default function WhatSetsUsApart() {
  const { language } = useLanguage();
  const content = apartContent[language];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent-gold font-semibold text-lg mb-4">
            {content.subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-green mb-6">
            {content.title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-200"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-accent-gold/10 p-3 rounded-lg group-hover:bg-accent-gold/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-accent-gold" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary-green mb-4 group-hover:text-accent-gold transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary-green text-white p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
              {language === 'en' ? 'Ready to Experience the Difference?' : '¿Listo para Experimentar la Diferencia?'}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {language === 'en' 
                ? 'Let\'s discuss how our unique approach can elevate your next event in Panama.'
                : 'Hablemos sobre cómo nuestro enfoque único puede elevar su próximo evento en Panamá.'
              }
            </p>
            <button className="bg-accent-gold text-primary-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-gold/90 transition-all duration-300">
              {language === 'en' ? 'Start Planning Today' : 'Comience a Planificar Hoy'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 