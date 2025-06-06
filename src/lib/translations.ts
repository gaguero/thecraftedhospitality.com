export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    blog: string;
    contact: string;
    contactUs: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    bookConsultation: string;
    exploreServices: string;
  };
  
  // Services Section
  services: {
    title: string;
    description: string;
    dmc: {
      title: string;
      description: string;
      learnMore: string;
    };
    consulting: {
      title: string;
      description: string;
      learnMore: string;
    };
    technology: {
      title: string;
      description: string;
      learnMore: string;
    };
  };
  
  // About Section
  about: {
    title: string;
    description1: string;
    description2: string;
    ourExpertise: string;
    viewWork: string;
  };
  
  // CTA Section
  cta: {
    title: string;
    description: string;
    scheduleConsultation: string;
    callToday: string;
  };
  
  // Footer
  footer: {
    expertConsulting: string;
    description: string;
    quickLinks: string;
    aboutUs: string;
    getInTouch: string;
    location: string;
    email: string;
    startProject: string;
    copyright: string;
    privacyPolicy: string;
    termsOfService: string;
    madeInPanama: string;
  };
  
  // Common
  common: {
    learnMore: string;
    readMore: string;
    getStarted: string;
    contactUs: string;
  };
}

export const translations: Record<'en' | 'es', Translations> = {
  en: {
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
      title: "Escape to Artisanal Comfort in Paradise",
      subtitle: "Where craftsmanship meets tropical hospitality",
      description: "Transform your hospitality vision into extraordinary experiences with expert consulting services throughout Panama, combining international standards with local excellence.",
      bookConsultation: "Book Your Consultation",
      exploreServices: "Explore Our Services"
    },
    services: {
      title: "Handpicked Excellence",
      description: "Our artisanal approach to hospitality consulting crafts unique solutions for each client, ensuring every detail reflects your vision.",
      dmc: {
        title: "DMC & Experiences",
        description: "Curated destination management and unforgettable experiences that showcase Panama's natural beauty and cultural richness.",
        learnMore: "Learn More →"
      },
      consulting: {
        title: "Hotel Consulting",
        description: "Strategic consulting for hospitality operations, from concept development to operational excellence and technology integration.",
        learnMore: "Learn More →"
      },
      technology: {
        title: "Technology Integration",
        description: "Modern hospitality technology solutions that enhance guest experiences while streamlining operations.",
        learnMore: "Learn More →"
      }
    },
    about: {
      title: "Our Story",
      description1: "With decades of international hospitality experience and deep roots in Panama, we bring a unique perspective to every project. Our founder's journey from luxury resort operations to strategic consulting has shaped our artisanal approach.",
      description2: "We understand that exceptional hospitality is more than service—it's about creating moments that resonate long after guests depart. Every recommendation we make is crafted with this philosophy at its core.",
      ourExpertise: "Our Expertise",
      viewWork: "View Our Work"
    },
    cta: {
      title: "Ready to Craft Your Vision?",
      description: "Let's transform your hospitality concept into an extraordinary reality. Schedule a consultation to discover how we can bring your vision to life.",
      scheduleConsultation: "Schedule Consultation",
      callToday: "Call Us Today"
    },
    footer: {
      expertConsulting: "Expert Hospitality Consulting",
      description: "Transforming hospitality visions into extraordinary experiences throughout Panama. Expert consulting services combining international standards with local excellence.",
      quickLinks: "Quick Links",
      aboutUs: "About Us",
      getInTouch: "Get in Touch",
      location: "Location",
      email: "Email",
      startProject: "Start Your Project",
      copyright: "The Crafted Hospitality. Crafted with excellence.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      madeInPanama: "🇵🇦 Made in Panama"
    },
    common: {
      learnMore: "Learn More",
      readMore: "Read More",
      getStarted: "Get Started",
      contactUs: "Contact Us"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      portfolio: "Portafolio", 
      blog: "Blog",
      contact: "Contacto",
      contactUs: "Contáctanos"
    },
    hero: {
      title: "Escápate al Confort Artesanal en el Paraíso",
      subtitle: "Donde la artesanía se encuentra con la hospitalidad tropical",
      description: "Transforma tu visión de hospitalidad en experiencias extraordinarias con servicios de consultoría experta en todo Panamá, combinando estándares internacionales con excelencia local.",
      bookConsultation: "Reserva tu Consulta",
      exploreServices: "Explora Nuestros Servicios"
    },
    services: {
      title: "Excelencia Seleccionada",
      description: "Nuestro enfoque artesanal en consultoría de hospitalidad crea soluciones únicas para cada cliente, asegurando que cada detalle refleje tu visión.",
      dmc: {
        title: "DMC y Experiencias",
        description: "Gestión de destinos curada y experiencias inolvidables que muestran la belleza natural y riqueza cultural de Panamá.",
        learnMore: "Saber Más →"
      },
      consulting: {
        title: "Consultoría Hotelera",
        description: "Consultoría estratégica para operaciones de hospitalidad, desde desarrollo de conceptos hasta excelencia operacional e integración tecnológica.",
        learnMore: "Saber Más →"
      },
      technology: {
        title: "Integración Tecnológica",
        description: "Soluciones tecnológicas modernas de hospitalidad que mejoran las experiencias de huéspedes mientras optimizan operaciones.",
        learnMore: "Saber Más →"
      }
    },
    about: {
      title: "Nuestra Historia",
      description1: "Con décadas de experiencia internacional en hospitalidad y raíces profundas en Panamá, aportamos una perspectiva única a cada proyecto. El viaje de nuestro fundador desde operaciones de resorts de lujo hasta consultoría estratégica ha moldeado nuestro enfoque artesanal.",
      description2: "Entendemos que la hospitalidad excepcional es más que servicio—se trata de crear momentos que resuenen mucho después de que los huéspedes se vayan. Cada recomendación que hacemos está elaborada con esta filosofía en su núcleo.",
      ourExpertise: "Nuestra Experiencia",
      viewWork: "Ver Nuestro Trabajo"
    },
    cta: {
      title: "¿Listo para Crear tu Visión?",
      description: "Transformemos tu concepto de hospitalidad en una realidad extraordinaria. Programa una consulta para descubrir cómo podemos dar vida a tu visión.",
      scheduleConsultation: "Programar Consulta",
      callToday: "Llámanos Hoy"
    },
    footer: {
      expertConsulting: "Consultoría Experta en Hospitalidad",
      description: "Transformando visiones de hospitalidad en experiencias extraordinarias en todo Panamá. Servicios de consultoría experta que combinan estándares internacionales con excelencia local.",
      quickLinks: "Enlaces Rápidos",
      aboutUs: "Nosotros",
      getInTouch: "Ponte en Contacto",
      location: "Ubicación",
      email: "Correo",
      startProject: "Inicia tu Proyecto",
      copyright: "The Crafted Hospitality. Elaborado con excelencia.",
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio",
      madeInPanama: "🇵🇦 Hecho en Panamá"
    },
    common: {
      learnMore: "Saber Más",
      readMore: "Leer Más",
      getStarted: "Comenzar",
      contactUs: "Contáctanos"
    }
  }
};

// Language detection utility
export function detectLanguage(): 'en' | 'es' {
  if (typeof window === 'undefined') return 'en';
  
  try {
    const stored = localStorage.getItem('preferred-language') as 'en' | 'es';
    if (stored && (stored === 'en' || stored === 'es')) {
      return stored;
    }
  } catch (error) {
    // Ignore localStorage errors
  }
  
  try {
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('es') ? 'es' : 'en';
  } catch (error) {
    return 'en';
  }
}

// Get translation utility
export function getTranslation(lang: 'en' | 'es'): Translations {
  return translations[lang];
} 