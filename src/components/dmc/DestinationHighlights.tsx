'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import {
    BuildingOffice2Icon,
    CameraIcon,
    GlobeAmericasIcon,
    SparklesIcon,
    SunIcon,
    TruckIcon
} from '@heroicons/react/24/outline';

const destinationContent = {
  en: {
    subtitle: "Discover Panama",
    title: "Why Panama is the Perfect Event Destination",
    description: "Strategic location, world-class infrastructure, and unparalleled natural beauty make Panama the ideal choice for international corporate events and incentive programs.",
    
    advantages: [
      {
        icon: GlobeAmericasIcon,
        title: "Strategic Location",
        description: "Bridge between the Americas with easy access from North and South America. Hub for international business and cultural exchange."
      },
      {
        icon: SunIcon,
        title: "Year-Round Climate",
        description: "Tropical climate with consistent temperatures perfect for outdoor events and activities throughout the year."
      },
      {
        icon: BuildingOffice2Icon,
        title: "Modern Infrastructure",
        description: "World-class hotels, convention centers, and event venues with state-of-the-art technology and facilities."
      },
      {
        icon: CameraIcon,
        title: "Panama Canal Experience",
        description: "Iconic engineering marvel providing unique venues and unforgettable experiences for corporate events."
      },
      {
        icon: SparklesIcon,
        title: "Rich Biodiversity",
        description: "Rainforests, beaches, and wildlife offering diverse adventure activities and team-building opportunities."
      },
      {
        icon: TruckIcon,
        title: "Excellent Connectivity",
        description: "Major airline hub with direct flights to key business centers and efficient ground transportation networks."
      }
    ],

    experiences: {
      title: "Signature Panama Experiences",
      list: [
        {
          title: "Panama Canal Corporate Tours",
          description: "Private access to observation decks and Miraflores Visitor Center for exclusive corporate events.",
          image: "https://images.unsplash.com/photo-1582550945154-019d17d5c21b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Rainforest Team Building",
          description: "Adventure activities in pristine rainforest settings including zip-lining, canopy walks, and wildlife encounters.",
          image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Luxury Beach Retreats",
          description: "Exclusive beachfront venues perfect for executive retreats and high-end corporate entertainment.",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Cultural Heritage Events",
          description: "Authentic cultural experiences in historic Casco Viejo and traditional communities.",
          image: "https://images.unsplash.com/photo-1555400082-7c4ad66c0231?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    }
  },
  es: {
    subtitle: "Descubre Panamá",
    title: "Por Qué Panamá es el Destino Perfecto para Eventos",
    description: "Ubicación estratégica, infraestructura de clase mundial y belleza natural incomparable hacen de Panamá la opción ideal para eventos corporativos internacionales y programas de incentivos.",
    
    advantages: [
      {
        icon: GlobeAmericasIcon,
        title: "Ubicación Estratégica",
        description: "Puente entre las Américas con fácil acceso desde Norte y Sud América. Hub para negocios internacionales e intercambio cultural."
      },
      {
        icon: SunIcon,
        title: "Clima Todo el Año",
        description: "Clima tropical con temperaturas consistentes perfectas para eventos al aire libre y actividades durante todo el año."
      },
      {
        icon: BuildingOffice2Icon,
        title: "Infraestructura Moderna",
        description: "Hoteles de clase mundial, centros de convenciones y venues de eventos con tecnología y facilidades de última generación."
      },
      {
        icon: CameraIcon,
        title: "Experiencia del Canal de Panamá",
        description: "Maravilla icónica de ingeniería que brinda venues únicos y experiencias inolvidables para eventos corporativos."
      },
      {
        icon: SparklesIcon,
        title: "Rica Biodiversidad",
        description: "Bosques tropicales, playas y vida silvestre ofreciendo diversas actividades de aventura y oportunidades de team building."
      },
      {
        icon: TruckIcon,
        title: "Excelente Conectividad",
        description: "Hub aéreo importante con vuelos directos a centros de negocios clave y redes eficientes de transporte terrestre."
      }
    ],

    experiences: {
      title: "Experiencias Distintivas de Panamá",
      list: [
        {
          title: "Tours Corporativos del Canal de Panamá",
          description: "Acceso privado a miradores y Centro de Visitantes de Miraflores para eventos corporativos exclusivos.",
          image: "https://images.unsplash.com/photo-1582550945154-019d17d5c21b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Team Building en la Selva",
          description: "Actividades de aventura en entornos prístinos de selva tropical incluyendo canopy, caminatas aéreas y encuentros con vida silvestre.",
          image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Retiros de Lujo en la Playa",
          description: "Venues exclusivos frente al mar perfectos para retiros ejecutivos y entretenimiento corporativo de alto nivel.",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Eventos de Patrimonio Cultural",
          description: "Experiencias culturales auténticas en el histórico Casco Viejo y comunidades tradicionales.",
          image: "https://images.unsplash.com/photo-1555400082-7c4ad66c0231?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    }
  }
};

export default function DestinationHighlights() {
  const { language } = useLanguage();
  const content = destinationContent[language];

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

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {content.advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200">
                <div className="bg-primary-green/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-primary-green" />
                </div>
                <h3 className="text-lg font-bold text-primary-green mb-3">
                  {advantage.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Signature Experiences */}
        <div>
          <h3 className="text-3xl font-playfair font-bold text-primary-green text-center mb-12">
            {content.experiences.title}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.experiences.list.map((experience, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-green/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-xl font-bold text-white mb-2">
                      {experience.title}
                    </h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600 leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-green to-primary-green/90 text-white p-8 rounded-xl">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
              {language === 'en' ? 'Ready to Explore Panama?' : '¿Listo para Explorar Panamá?'}
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Let us show you why Panama is the perfect destination for your next corporate event or incentive program.'
                : 'Permítenos mostrarte por qué Panamá es el destino perfecto para tu próximo evento corporativo o programa de incentivos.'
              }
            </p>
            <button className="bg-accent-gold text-primary-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-gold/90 transition-all duration-300">
              {language === 'en' ? 'Plan Your Panama Event' : 'Planifica Tu Evento en Panamá'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 