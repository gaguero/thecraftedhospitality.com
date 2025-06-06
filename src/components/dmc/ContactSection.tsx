'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import {
    ArrowRightIcon,
    CalendarDaysIcon,
    ChatBubbleLeftRightIcon,
    DocumentTextIcon,
    EnvelopeIcon,
    PhoneIcon
} from '@heroicons/react/24/outline';

const contactContent = {
  en: {
    subtitle: "Ready to Get Started?",
    title: "Let's Plan Your Extraordinary Event",
    description: "Whether you're planning a corporate conference, incentive program, or special event, we're here to make it unforgettable. Contact us today to begin the conversation.",
    
    contactMethods: [
      {
        icon: PhoneIcon,
        title: "Call Us",
        subtitle: "Speak directly with our team",
        value: "+507 6123-4567",
        action: "Call Now"
      },
      {
        icon: EnvelopeIcon,
        title: "Email Us",
        subtitle: "Send us your requirements",
        value: "dmc@thecraftedhospitality.com",
        action: "Send Email"
      },
      {
        icon: CalendarDaysIcon,
        title: "Schedule Consultation",
        subtitle: "Book a discovery meeting",
        value: "30-minute consultation",
        action: "Book Meeting"
      }
    ],

    quickActions: [
      {
        icon: DocumentTextIcon,
        title: "Download Our DMC Capabilities",
        description: "Comprehensive overview of our services, past events, and capabilities.",
        cta: "Download PDF"
      },
      {
        icon: ChatBubbleLeftRightIcon,
        title: "Request Custom Proposal",
        description: "Get a tailored proposal for your specific event requirements.",
        cta: "Request Proposal"
      }
    ],

    formFields: {
      title: "Quick Inquiry Form",
      eventType: "Event Type",
      groupSize: "Group Size",
      eventDates: "Preferred Dates",
      budget: "Budget Range",
      requirements: "Special Requirements",
      submit: "Send Inquiry",
      eventTypes: [
        "Corporate Conference",
        "Incentive Program",
        "Board Meeting",
        "Product Launch",
        "Team Building",
        "Other"
      ],
      budgetRanges: [
        "Under $50K",
        "$50K - $100K",
        "$100K - $250K",
        "$250K - $500K",
        "$500K+"
      ]
    }
  },
  es: {
    subtitle: "¿Listo para Comenzar?",
    title: "Planifiquemos Su Evento Extraordinario",
    description: "Ya sea que esté planificando una conferencia corporativa, programa de incentivos o evento especial, estamos aquí para hacerlo inolvidable. Contáctenos hoy para comenzar la conversación.",
    
    contactMethods: [
      {
        icon: PhoneIcon,
        title: "Llámenos",
        subtitle: "Hable directamente con nuestro equipo",
        value: "+507 6123-4567",
        action: "Llamar Ahora"
      },
      {
        icon: EnvelopeIcon,
        title: "Envíenos un Email",
        subtitle: "Envíenos sus requerimientos",
        value: "dmc@thecraftedhospitality.com",
        action: "Enviar Email"
      },
      {
        icon: CalendarDaysIcon,
        title: "Agendar Consulta",
        subtitle: "Reserve una reunión de descubrimiento",
        value: "Consulta de 30 minutos",
        action: "Reservar Reunión"
      }
    ],

    quickActions: [
      {
        icon: DocumentTextIcon,
        title: "Descargar Nuestras Capacidades DMC",
        description: "Visión integral de nuestros servicios, eventos pasados y capacidades.",
        cta: "Descargar PDF"
      },
      {
        icon: ChatBubbleLeftRightIcon,
        title: "Solicitar Propuesta Personalizada",
        description: "Obtenga una propuesta adaptada a los requerimientos específicos de su evento.",
        cta: "Solicitar Propuesta"
      }
    ],

    formFields: {
      title: "Formulario de Consulta Rápida",
      eventType: "Tipo de Evento",
      groupSize: "Tamaño del Grupo",
      eventDates: "Fechas Preferidas",
      budget: "Rango de Presupuesto",
      requirements: "Requerimientos Especiales",
      submit: "Enviar Consulta",
      eventTypes: [
        "Conferencia Corporativa",
        "Programa de Incentivos",
        "Reunión de Directorio",
        "Lanzamiento de Producto",
        "Team Building",
        "Otro"
      ],
      budgetRanges: [
        "Menos de $50K",
        "$50K - $100K",
        "$100K - $250K",
        "$250K - $500K",
        "$500K+"
      ]
    }
  }
};

export default function ContactSection() {
  const { language } = useLanguage();
  const content = contactContent[language];

  return (
    <section className="py-20 bg-primary-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent-gold font-semibold text-lg mb-4">
            {content.subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            {content.title}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Methods & Quick Actions */}
          <div>
            {/* Contact Methods */}
            <div className="space-y-6 mb-12">
              {content.contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="bg-accent-gold/20 p-3 rounded-lg group-hover:bg-accent-gold/30 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-accent-gold" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1">{method.title}</h3>
                        <p className="text-white/70 text-sm mb-2">{method.subtitle}</p>
                        <p className="text-accent-gold font-semibold">{method.value}</p>
                      </div>
                      <button className="bg-accent-gold text-primary-green px-4 py-2 rounded-lg font-semibold text-sm hover:bg-accent-gold/90 transition-all duration-300">
                        {method.action}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              {content.quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent-gold/10 p-2 rounded-lg">
                        <IconComponent className="w-5 h-5 text-accent-gold" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold mb-2">{action.title}</h4>
                        <p className="text-white/70 text-sm mb-4">{action.description}</p>
                        <button className="group text-accent-gold font-semibold text-sm flex items-center gap-2 hover:text-accent-gold/80 transition-colors duration-300">
                          {action.cta}
                          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="bg-white/10 p-8 rounded-xl">
            <h3 className="text-2xl font-playfair font-bold mb-6">
              {content.formFields.title}
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {content.formFields.eventType}
                  </label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-accent-gold focus:outline-none">
                    <option value="">Select...</option>
                    {content.formFields.eventTypes.map((type, index) => (
                      <option key={index} value={type} className="text-primary-green">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {content.formFields.groupSize}
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g., 50-75 attendees"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-accent-gold focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {content.formFields.eventDates}
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g., March 15-17, 2025"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-accent-gold focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {content.formFields.budget}
                  </label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-accent-gold focus:outline-none">
                    <option value="">Select...</option>
                    {content.formFields.budgetRanges.map((range, index) => (
                      <option key={index} value={range} className="text-primary-green">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  {content.formFields.requirements}
                </label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your vision, special requirements, or any questions..."
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-accent-gold focus:outline-none resize-none"
                ></textarea>
              </div>

              <button className="group w-full bg-accent-gold text-primary-green py-4 rounded-lg font-bold text-lg hover:bg-accent-gold/90 transition-all duration-300 flex items-center justify-center gap-2">
                {content.formFields.submit}
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-16 border-t border-white/20">
          <p className="text-white/80 mb-4">
            {language === 'en' 
              ? 'Need immediate assistance? We\'re available 24/7 for urgent inquiries.'
              : '¿Necesita asistencia inmediata? Estamos disponibles 24/7 para consultas urgentes.'
            }
          </p>
          <a 
            href="tel:+50761234567" 
            className="inline-flex items-center gap-2 text-accent-gold font-semibold hover:text-accent-gold/80 transition-colors duration-300"
          >
            <PhoneIcon className="w-5 h-5" />
            +507 6123-4567
          </a>
        </div>
      </div>
    </section>
  );
} 