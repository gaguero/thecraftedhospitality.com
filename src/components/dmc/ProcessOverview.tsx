'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import {
    ArrowRightIcon,
    ChatBubbleLeftRightIcon,
    CheckCircleIcon,
    Cog6ToothIcon,
    DocumentTextIcon
} from '@heroicons/react/24/outline';

const processContent = {
  en: {
    subtitle: "Our Proven Methodology",
    title: "How We Deliver Excellence",
    description: "Our structured approach ensures every detail is perfect and every expectation is exceeded, from initial consultation to post-event follow-up.",
    
    steps: [
      {
        number: "01",
        icon: ChatBubbleLeftRightIcon,
        title: "Discovery & Consultation",
        description: "We listen carefully to understand your objectives, preferences, budget, and unique requirements.",
        details: [
          "Comprehensive needs assessment",
          "Objective clarification & goal setting",
          "Budget optimization strategies",
          "Timeline development",
          "Risk assessment & mitigation planning"
        ]
      },
      {
        number: "02",
        icon: DocumentTextIcon,
        title: "Custom Proposal & Planning",
        description: "We create a detailed proposal with customized solutions, timelines, and transparent pricing.",
        details: [
          "Tailored event concepts & themes",
          "Venue selection & recommendations",
          "Detailed itinerary development",
          "Vendor sourcing & coordination",
          "Transparent cost breakdown"
        ]
      },
      {
        number: "03",
        icon: Cog6ToothIcon,
        title: "Execution & Management",
        description: "Our experienced team manages every aspect, ensuring flawless execution and real-time problem solving.",
        details: [
          "On-site coordination & management",
          "Real-time communication & updates",
          "Quality control & monitoring",
          "Emergency response protocols",
          "Guest services & support"
        ]
      },
      {
        number: "04",
        icon: CheckCircleIcon,
        title: "Follow-up & Optimization",
        description: "We conduct thorough debriefings and gather feedback to continuously improve our services.",
        details: [
          "Post-event evaluation & reporting",
          "Client satisfaction assessment",
          "Feedback collection & analysis",
          "Lessons learned documentation",
          "Relationship maintenance & future planning"
        ]
      }
    ],

    guarantee: {
      title: "Our Service Guarantee",
      points: [
        "24/7 support during your event",
        "Dedicated on-site event manager",
        "Backup plans for every scenario",
        "Direct communication channels",
        "Post-event detailed reporting"
      ]
    }
  },
  es: {
    subtitle: "Nuestra Metodología Comprobada",
    title: "Cómo Entregamos Excelencia",
    description: "Nuestro enfoque estructurado asegura que cada detalle sea perfecto y cada expectativa sea superada, desde la consulta inicial hasta el seguimiento post-evento.",
    
    steps: [
      {
        number: "01",
        icon: ChatBubbleLeftRightIcon,
        title: "Descubrimiento y Consulta",
        description: "Escuchamos cuidadosamente para entender sus objetivos, preferencias, presupuesto y requisitos únicos.",
        details: [
          "Evaluación integral de necesidades",
          "Clarificación de objetivos y establecimiento de metas",
          "Estrategias de optimización de presupuesto",
          "Desarrollo de cronograma",
          "Evaluación y planificación de mitigación de riesgos"
        ]
      },
      {
        number: "02",
        icon: DocumentTextIcon,
        title: "Propuesta Personalizada y Planificación",
        description: "Creamos una propuesta detallada con soluciones personalizadas, cronogramas y precios transparentes.",
        details: [
          "Conceptos y temas de eventos personalizados",
          "Selección y recomendaciones de venues",
          "Desarrollo detallado de itinerario",
          "Búsqueda y coordinación de proveedores",
          "Desglose transparente de costos"
        ]
      },
      {
        number: "03",
        icon: Cog6ToothIcon,
        title: "Ejecución y Gestión",
        description: "Nuestro equipo experimentado gestiona cada aspecto, asegurando una ejecución impecable y resolución de problemas en tiempo real.",
        details: [
          "Coordinación y gestión en sitio",
          "Comunicación y actualizaciones en tiempo real",
          "Control y monitoreo de calidad",
          "Protocolos de respuesta de emergencia",
          "Servicios y soporte para invitados"
        ]
      },
      {
        number: "04",
        icon: CheckCircleIcon,
        title: "Seguimiento y Optimización",
        description: "Realizamos evaluaciones exhaustivas y recopilamos retroalimentación para mejorar continuamente nuestros servicios.",
        details: [
          "Evaluación e informes post-evento",
          "Evaluación de satisfacción del cliente",
          "Recopilación y análisis de retroalimentación",
          "Documentación de lecciones aprendidas",
          "Mantenimiento de relaciones y planificación futura"
        ]
      }
    ],

    guarantee: {
      title: "Nuestra Garantía de Servicio",
      points: [
        "Soporte 24/7 durante su evento",
        "Gerente de eventos dedicado en sitio",
        "Planes de respaldo para cada escenario",
        "Canales de comunicación directa",
        "Informes detallados post-evento"
      ]
    }
  }
};

export default function ProcessOverview() {
  const { language } = useLanguage();
  const content = processContent[language];

  return (
    <section className="py-20 bg-white">
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

        {/* Process Steps */}
        <div className="space-y-16 mb-20">
          {content.steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-3xl font-bold text-accent-gold">
                      {step.number}
                    </div>
                    <div className="bg-primary-green/10 p-3 rounded-lg">
                      <IconComponent className="w-8 h-8 text-primary-green" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-primary-green mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-neutral-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Element */}
                <div className="flex-1 max-w-md">
                  <div className="bg-gradient-to-br from-primary-green/10 to-accent-gold/10 p-8 rounded-2xl text-center">
                    <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <IconComponent className="w-12 h-12 text-primary-green" />
                    </div>
                    <div className="text-6xl font-bold text-accent-gold mb-2">
                      {step.number}
                    </div>
                    <div className="text-lg font-semibold text-primary-green">
                      {step.title}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Guarantee */}
        <div className="bg-primary-green text-white p-8 md:p-12 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-8">
              {content.guarantee.title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {content.guarantee.points.map((point, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                  <CheckCircleIcon className="w-6 h-6 text-accent-gold flex-shrink-0" />
                  <span className="text-sm md:text-base">{point}</span>
                </div>
              ))}
            </div>

            <button className="group bg-accent-gold text-primary-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-gold/90 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
              {language === 'en' ? 'Start Your Project' : 'Comience Su Proyecto'}
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 