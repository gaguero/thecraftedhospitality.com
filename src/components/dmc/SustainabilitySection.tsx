'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import {
    ArrowRightIcon,
    CheckCircleIcon,
    GlobeAltIcon,
    HeartIcon,
    SparklesIcon,
    UsersIcon
} from '@heroicons/react/24/outline';

const sustainabilityContent = {
  en: {
    subtitle: "Sustainable Excellence",
    title: "Our Commitment to Responsible Tourism",
    description: "We believe luxury and sustainability go hand in hand. Our events create positive impact for local communities while minimizing environmental footprint.",
    
    pillars: [
      {
        icon: GlobeAltIcon,
        title: "Environmental Stewardship",
        description: "Minimizing environmental impact through eco-friendly practices and carbon offset programs.",
        initiatives: [
          "Carbon footprint measurement & offsetting",
          "Waste reduction & recycling programs",
          "Sustainable transportation options",
          "Eco-friendly venue selection",
          "Digital-first documentation"
        ]
      },
      {
        icon: HeartIcon,
        title: "Community Impact",
        description: "Supporting local communities through employment, partnerships, and cultural preservation.",
        initiatives: [
          "Local supplier preference",
          "Community employment programs",
          "Cultural preservation initiatives",
          "Educational partnerships",
          "Local artisan showcasing"
        ]
      },
      {
        icon: SparklesIcon,
        title: "Authentic Experiences",
        description: "Creating genuine connections with Panama's culture while respecting traditions and environments.",
        initiatives: [
          "Cultural sensitivity training",
          "Traditional craft workshops",
          "Local cuisine experiences",
          "Indigenous community visits",
          "Conservation awareness programs"
        ]
      },
      {
        icon: UsersIcon,
        title: "Social Responsibility",
        description: "Promoting ethical practices and contributing to the social development of our communities.",
        initiatives: [
          "Fair wage employment",
          "Local education support",
          "Healthcare community programs",
          "Women empowerment initiatives",
          "Youth development projects"
        ]
      }
    ],

    certifications: {
      title: "Our Certifications & Partnerships",
      items: [
        "Rainforest Alliance Certified",
        "UNWTO Sustainable Tourism Partner",
        "LEED Event Management Certified",
        "Local Community Partnership Program",
        "Carbon Neutral Event Certification"
      ]
    },

    impact: {
      title: "2024 Impact Metrics",
      stats: [
        { number: "15%", label: "Carbon Reduction vs. 2023" },
        { number: "85%", label: "Local Supplier Usage" },
        { number: "200+", label: "Community Jobs Created" },
        { number: "95%", label: "Waste Diverted from Landfills" }
      ]
    }
  },
  es: {
    subtitle: "Excelencia Sostenible",
    title: "Nuestro Compromiso con el Turismo Responsable",
    description: "Creemos que el lujo y la sostenibilidad van de la mano. Nuestros eventos crean impacto positivo para las comunidades locales mientras minimizan la huella ambiental.",
    
    pillars: [
      {
        icon: GlobeAltIcon,
        title: "Gestión Ambiental",
        description: "Minimizando el impacto ambiental a través de prácticas eco-amigables y programas de compensación de carbono.",
        initiatives: [
          "Medición y compensación de huella de carbono",
          "Programas de reducción y reciclaje de residuos",
          "Opciones de transporte sostenible",
          "Selección de venues eco-amigables",
          "Documentación digital primero"
        ]
      },
      {
        icon: HeartIcon,
        title: "Impacto Comunitario",
        description: "Apoyando a las comunidades locales a través de empleo, alianzas y preservación cultural.",
        initiatives: [
          "Preferencia por proveedores locales",
          "Programas de empleo comunitario",
          "Iniciativas de preservación cultural",
          "Alianzas educativas",
          "Exhibición de artesanos locales"
        ]
      },
      {
        icon: SparklesIcon,
        title: "Experiencias Auténticas",
        description: "Creando conexiones genuinas con la cultura de Panamá mientras respetamos tradiciones y ambientes.",
        initiatives: [
          "Entrenamiento en sensibilidad cultural",
          "Talleres de artesanías tradicionales",
          "Experiencias de cocina local",
          "Visitas a comunidades indígenas",
          "Programas de concientización sobre conservación"
        ]
      },
      {
        icon: UsersIcon,
        title: "Responsabilidad Social",
        description: "Promoviendo prácticas éticas y contribuyendo al desarrollo social de nuestras comunidades.",
        initiatives: [
          "Empleo con salarios justos",
          "Apoyo a educación local",
          "Programas de salud comunitaria",
          "Iniciativas de empoderamiento femenino",
          "Proyectos de desarrollo juvenil"
        ]
      }
    ],

    certifications: {
      title: "Nuestras Certificaciones y Alianzas",
      items: [
        "Certificado Rainforest Alliance",
        "Socio de Turismo Sostenible UNWTO",
        "Certificado en Gestión de Eventos LEED",
        "Programa de Alianzas Comunitarias Locales",
        "Certificación de Eventos Carbono Neutrales"
      ]
    },

    impact: {
      title: "Métricas de Impacto 2024",
      stats: [
        { number: "15%", label: "Reducción de Carbono vs. 2023" },
        { number: "85%", label: "Uso de Proveedores Locales" },
        { number: "200+", label: "Empleos Comunitarios Creados" },
        { number: "95%", label: "Residuos Desviados de Vertederos" }
      ]
    }
  }
};

export default function SustainabilitySection() {
  const { language } = useLanguage();
  const content = sustainabilityContent[language];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-accent-gold/5">
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

        {/* Sustainability Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {content.pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-green/10 p-3 rounded-lg">
                    <IconComponent className="w-8 h-8 text-primary-green" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-green ml-4">
                    {pillar.title}
                  </h3>
                </div>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                <ul className="space-y-2">
                  {pillar.initiatives.map((initiative, initIndex) => (
                    <li key={initIndex} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-600">{initiative}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Impact Metrics */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200 mb-16">
          <h3 className="text-2xl font-playfair font-bold text-primary-green text-center mb-8">
            {content.impact.title}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.impact.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-primary-green text-white p-8 rounded-xl mb-16">
          <h3 className="text-2xl font-playfair font-bold text-center mb-8">
            {content.certifications.title}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.certifications.items.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                <CheckCircleIcon className="w-6 h-6 text-accent-gold flex-shrink-0" />
                <span className="text-sm md:text-base">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-accent-gold/10 to-primary-green/10 p-8 rounded-xl border border-accent-gold/20">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-primary-green mb-4">
              {language === 'en' ? 'Plan a Sustainable Event' : 'Planifique un Evento Sostenible'}
            </h3>
            <p className="text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Join us in creating events that not only achieve your business objectives but also contribute to a better world.'
                : 'Únase a nosotros en la creación de eventos que no solo logran sus objetivos de negocio sino que también contribuyen a un mundo mejor.'
              }
            </p>
            <button className="group bg-primary-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-green/90 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
              {language === 'en' ? 'Learn More About Our Practices' : 'Conozca Más Sobre Nuestras Prácticas'}
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 