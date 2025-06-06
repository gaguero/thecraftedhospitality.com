'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import {
    ArrowRightIcon,
    BuildingOfficeIcon,
    CogIcon,
    MapIcon,
    ShieldCheckIcon,
    TrophyIcon,
    UsersIcon
} from '@heroicons/react/24/outline';

const serviceContent = {
  en: {
    subtitle: "Comprehensive DMC Solutions",
    title: "Our Service Categories",
    description: "From intimate executive retreats to large-scale international conferences, we provide end-to-end destination management services tailored to your objectives.",
    
    coreServices: {
      title: "Core DMC Services",
      services: [
        {
          icon: MapIcon,
          title: "Ground Handling & Logistics",
          description: "Airport transfers, transportation coordination, local logistics management, and seamless arrival/departure services."
        },
        {
          icon: BuildingOfficeIcon,
          title: "Event Production & Management",
          description: "Full-service event planning, venue coordination, technical production, and on-site management for flawless execution."
        },
        {
          icon: CogIcon,
          title: "Vendor Network & Partnerships",
          description: "Established relationships with premium suppliers, venues, and service providers ensuring quality and value."
        },
        {
          icon: ShieldCheckIcon,
          title: "Risk Mitigation & Support",
          description: "Comprehensive contingency planning, emergency protocols, and 24/7 on-site support for peace of mind."
        }
      ]
    },

    eventTypes: {
      title: "Event Specializations",
      description: "We excel across multiple event categories, each with specialized expertise and tailored approaches.",
      types: [
        {
          icon: BuildingOfficeIcon,
          title: "Corporate Events",
          subtitle: "Professional Excellence",
          features: [
            "Product launches & brand activations",
            "Board meetings & executive retreats",
            "Annual conferences & conventions",
            "Awards ceremonies & galas",
            "Team building & corporate outings"
          ],
          cta: "Explore Corporate Solutions"
        },
        {
          icon: TrophyIcon,
          title: "Incentive Programs",
          subtitle: "Reward & Motivate",
          features: [
            "Executive reward experiences",
            "Sales incentive trips",
            "VIP client entertainment",
            "Achievement recognition events",
            "Luxury group experiences"
          ],
          cta: "Design Incentive Program"
        },
        {
          icon: UsersIcon,
          title: "MICE Services",
          subtitle: "Meetings, Incentives, Conferences & Events",
          features: [
            "Meeting facilitation & logistics",
            "Conference management",
            "Exhibition coordination",
            "Delegate services",
            "Multi-destination programs"
          ],
          cta: "Plan MICE Event"
        }
      ]
    }
  },
  es: {
    subtitle: "Soluciones Integrales de DMC",
    title: "Nuestras Categorías de Servicios",
    description: "Desde retiros ejecutivos íntimos hasta conferencias internacionales a gran escala, brindamos servicios de gestión de destinos de extremo a extremo adaptados a sus objetivos.",
    
    coreServices: {
      title: "Servicios Principales de DMC",
      services: [
        {
          icon: MapIcon,
          title: "Manejo Terrestre y Logística",
          description: "Traslados aeroportuarios, coordinación de transporte, gestión logística local y servicios fluidos de llegada/salida."
        },
        {
          icon: BuildingOfficeIcon,
          title: "Producción y Gestión de Eventos",
          description: "Planificación integral de eventos, coordinación de venues, producción técnica y gestión en sitio para una ejecución impecable."
        },
        {
          icon: CogIcon,
          title: "Red de Proveedores y Alianzas",
          description: "Relaciones establecidas con proveedores premium, venues y proveedores de servicios garantizando calidad y valor."
        },
        {
          icon: ShieldCheckIcon,
          title: "Mitigación de Riesgos y Soporte",
          description: "Planificación integral de contingencias, protocolos de emergencia y soporte en sitio 24/7 para tranquilidad."
        }
      ]
    },

    eventTypes: {
      title: "Especializaciones de Eventos",
      description: "Sobresalimos en múltiples categorías de eventos, cada una con experiencia especializada y enfoques personalizados.",
      types: [
        {
          icon: BuildingOfficeIcon,
          title: "Eventos Corporativos",
          subtitle: "Excelencia Profesional",
          features: [
            "Lanzamientos de productos y activaciones de marca",
            "Reuniones de directorio y retiros ejecutivos",
            "Conferencias anuales y convenciones",
            "Ceremonias de premios y galas",
            "Team building y salidas corporativas"
          ],
          cta: "Explorar Soluciones Corporativas"
        },
        {
          icon: TrophyIcon,
          title: "Programas de Incentivos",
          subtitle: "Recompensar y Motivar",
          features: [
            "Experiencias de recompensa ejecutiva",
            "Viajes de incentivos de ventas",
            "Entretenimiento VIP para clientes",
            "Eventos de reconocimiento de logros",
            "Experiencias grupales de lujo"
          ],
          cta: "Diseñar Programa de Incentivos"
        },
        {
          icon: UsersIcon,
          title: "Servicios MICE",
          subtitle: "Reuniones, Incentivos, Conferencias y Eventos",
          features: [
            "Facilitación de reuniones y logística",
            "Gestión de conferencias",
            "Coordinación de exhibiciones",
            "Servicios para delegados",
            "Programas multi-destino"
          ],
          cta: "Planificar Evento MICE"
        }
      ]
    }
  }
};

export default function ServiceCategories() {
  const { language } = useLanguage();
  const content = serviceContent[language];

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

        {/* Core Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-playfair font-bold text-primary-green text-center mb-12">
            {content.coreServices.title}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.coreServices.services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-accent-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-gold/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-accent-gold" />
                  </div>
                  <h4 className="text-lg font-bold text-primary-green mb-4 group-hover:text-accent-gold transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Event Specializations */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold text-primary-green mb-4">
              {content.eventTypes.title}
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {content.eventTypes.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.eventTypes.types.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div key={index} className="bg-neutral-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-neutral-200">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-green p-3 rounded-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-bold text-primary-green">
                        {type.title}
                      </h4>
                      <p className="text-accent-gold font-semibold">
                        {type.subtitle}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="group w-full bg-primary-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-green/90 transition-all duration-300 flex items-center justify-center gap-2">
                    {type.cta}
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 