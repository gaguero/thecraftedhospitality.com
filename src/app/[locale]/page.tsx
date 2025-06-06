import LanguageSwitcher from '@/components/i18n/LanguageSwitcher';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export default async function HomePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-brand-cream to-brand-primary/5 relative">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxRjNEMkYiIGZpbGwtb3BhY2l0eT0iMSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      {/* Language Switcher - Better Mobile Positioning */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-50">
        <LanguageSwitcher />
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col justify-center content-padding py-10 relative">
        <div className="max-w-4xl mx-auto">
          
          {/* Logo/Brand Section - Clean without frames */}
          <div className="text-center mb-8 md:mb-10 relative">
            <div className="mb-6 md:mb-8 relative">
              <Image
                src="/images/logo/Logo-prrimary-horizontal.png"
                alt="The Crafted Hospitality"
                width={400}
                height={120}
                className="mx-auto h-auto max-w-xs md:max-w-sm hover:scale-105 transition-transform duration-300 filter hover:drop-shadow-[0_0_20px_rgba(213,162,13,0.15)]"
                priority
              />
            </div>
            <div className="h-0.5 w-16 md:w-24 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary mx-auto shadow-lg shadow-brand-accent/20"></div>
          </div>

          {/* Main Message Section - With Gradient Background */}
          <div className="text-center mb-6 md:mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 via-transparent to-brand-primary/5 rounded-2xl"></div>
            <div className="relative py-6 md:py-8 px-4 md:px-0">
              <h2 className="text-xl md:text-h2 font-heading text-brand-primary mb-4 md:mb-6 leading-relaxed drop-shadow-sm">
                {t('hero.subtitle')}
              </h2>
              <p className="text-sm md:text-body font-sans max-w-2xl mx-auto leading-relaxed text-brand-primary opacity-80 px-2">
                {locale === 'es' 
                  ? 'Transformamos propiedades en empresas rentables y fluidas que deleitan en cada punto de contacto, elevando las operaciones a través de tecnología inteligente y procesos refinados.'
                  : 'We transform properties into profitable and fluid enterprises that delight at every touchpoint, elevating operations through intelligent technology and refined processes.'
                }
              </p>
            </div>
          </div>

          {/* Coming Soon - Golden Badge */}
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-block bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-amber-500/10 text-amber-600 border border-amber-500/30 px-6 md:px-8 py-2 md:py-3 rounded-button font-semibold uppercase tracking-widest text-sm md:text-base hover:bg-amber-500/15 hover:border-amber-500/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/15 backdrop-blur-sm">
              {locale === 'es' ? 'PRÓXIMAMENTE' : 'COMING SOON'}
            </div>
          </div>

          {/* Services Section - Better Mobile Grid */}
          <div className="relative mb-8 md:mb-10">
            {/* Section Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/3 via-transparent to-brand-primary/5 rounded-3xl"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative py-8 md:py-12 px-4 md:px-0">
              
              {/* Service 1: Hospitality Consulting */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center group-hover:drop-shadow-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <Image
                    src="/images/logo/THC isotipos.png"
                    alt="THC"
                    width={64}
                    height={64}
                    className="w-12 h-12 md:w-16 md:h-16 group-hover:drop-shadow-[0_0_12px_rgba(31,61,47,0.3)] transition-all duration-300 relative z-10"
                  />
                </div>
                <h3 className="text-lg md:text-h3 font-heading text-brand-primary mb-2 md:mb-3 group-hover:text-brand-primary/90 transition-colors duration-300 drop-shadow-sm">
                  {locale === 'es' ? 'Consultoría en Hospitalidad' : 'Hospitality Consulting'}
                </h3>
                <p className="text-sm md:text-caption font-sans leading-relaxed group-hover:text-brand-primary/80 transition-colors duration-300">
                  {locale === 'es'
                    ? 'Gestión completa de experiencias hospitalarias excepcionales'
                    : 'Complete management of exceptional hospitality experiences'
                  }
                </p>
              </div>
              
              {/* Service 2: Operational Excellence */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center group-hover:drop-shadow-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <Image
                    src="/images/logo/THC isotipos.png"
                    alt="THC"
                    width={64}
                    height={64}
                    className="w-12 h-12 md:w-16 md:h-16 rotate-90 group-hover:drop-shadow-[0_0_12px_rgba(31,61,47,0.3)] transition-all duration-300 relative z-10"
                  />
                </div>
                <h3 className="text-lg md:text-h3 font-heading text-brand-primary mb-2 md:mb-3 group-hover:text-brand-primary/90 transition-colors duration-300 drop-shadow-sm">
                  {locale === 'es' ? 'Excelencia Operacional' : 'Operational Excellence'}
                </h3>
                <p className="text-sm md:text-caption font-sans leading-relaxed group-hover:text-brand-primary/80 transition-colors duration-300">
                  {locale === 'es'
                    ? 'Sistemas inteligentes para maximizar eficiencia y rentabilidad'
                    : 'Intelligent systems to maximize efficiency and profitability'
                  }
                </p>
              </div>
              
              {/* Service 3: Experience Development */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center group-hover:drop-shadow-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <Image
                    src="/images/logo/THC isotipos.png"
                    alt="THC"
                    width={64}
                    height={64}
                    className="w-12 h-12 md:w-16 md:h-16 rotate-180 group-hover:drop-shadow-[0_0_12px_rgba(31,61,47,0.3)] transition-all duration-300 relative z-10"
                  />
                </div>
                <h3 className="text-lg md:text-h3 font-heading text-brand-primary mb-2 md:mb-3 group-hover:text-brand-primary/90 transition-colors duration-300 drop-shadow-sm">
                  {locale === 'es' ? 'Desarrollo de Experiencias' : 'Experience Development'}
                </h3>
                <p className="text-sm md:text-caption font-sans leading-relaxed group-hover:text-brand-primary/80 transition-colors duration-300">
                  {locale === 'es'
                    ? 'Creación de experiencias memorables que elevan la marca'
                    : 'Creating memorable experiences that elevate your brand'
                  }
                </p>
              </div>

              {/* Service 4: DMC Services */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center group-hover:drop-shadow-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <Image
                    src="/images/logo/THC isotipos.png"
                    alt="THC"
                    width={64}
                    height={64}
                    className="w-12 h-12 md:w-16 md:h-16 -rotate-45 group-hover:drop-shadow-[0_0_12px_rgba(31,61,47,0.3)] transition-all duration-300 relative z-10"
                  />
                </div>
                <h3 className="text-lg md:text-h3 font-heading text-brand-primary mb-2 md:mb-3 group-hover:text-brand-primary/90 transition-colors duration-300 drop-shadow-sm">
                  {locale === 'es' ? 'Gestión de Destinos' : 'Destination Management'}
                </h3>
                <p className="text-sm md:text-caption font-sans leading-relaxed group-hover:text-brand-primary/80 transition-colors duration-300">
                  {locale === 'es'
                    ? 'Experiencias únicas y gestión completa de destinos en Panamá'
                    : 'Unique experiences and complete destination management in Panama'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Call-to-Action Section - Mobile Optimized */}
          <div className="text-center mb-6 md:mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/5 to-transparent rounded-2xl"></div>
            <div className="relative py-8 md:py-12 px-4 md:px-0">
              
              {/* Main CTA Headline */}
              <h2 className="text-xl md:text-h2 font-heading text-brand-primary mb-3 md:mb-4 leading-tight">
                {locale === 'es' 
                  ? '¿Listo para elevar tu hospitalidad?'
                  : 'Ready to elevate your hospitality?'
                }
              </h2>
              
              <p className="text-sm md:text-body font-sans text-brand-primary/80 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
                {locale === 'es'
                  ? 'Transformemos juntos tu operación en una experiencia excepcional que genere rentabilidad sostenible.'
                  : 'Let\'s transform your operation into an exceptional experience that generates sustainable profitability.'
                }
              </p>

              {/* Action Buttons - Mobile Responsive */}
              <div className="flex flex-col gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12 px-4">
                
                {/* Primary CTA - Email Consultation */}
                <a href="mailto:gerson@thecraftedhospitality.com?subject=Free%20Consultation%20Request" 
                   className="group bg-brand-primary text-brand-cream px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-brand-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 w-full max-w-[320px] md:max-w-[280px] justify-center relative overflow-hidden">
                  <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  
                  {/* Default text */}
                  <span className="group-hover:opacity-0 transition-opacity duration-300 truncate">
                    {locale === 'es' ? 'Consulta Gratuita' : 'Get Free Consultation'}
                  </span>
                  
                  {/* Email on hover - Responsive text */}
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm md:text-base font-medium text-brand-cream px-4">
                    gerson@thecraftedhospitality.com
                  </span>
                </a>
                
                {/* Secondary CTA - WhatsApp Quick Contact */}
                <a href="https://wa.me/50762114762?text=Hello%2C%20I%27m%20interested%20in%20booking%20a%20discovery%20call" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group border-2 border-brand-primary text-brand-primary px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-brand-primary hover:text-brand-cream transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex items-center gap-3 w-full max-w-[320px] md:max-w-[280px] justify-center relative overflow-hidden">
                  <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.251.631 4.36 1.736 6.18L0 24l5.864-1.541C7.654 23.346 9.792 24 12.031 24c6.627 0 12.001-5.373 12.001-12S18.658.001 12.031.001z"/>
                  </svg>
                  
                  {/* Default text */}
                  <span className="group-hover:opacity-0 transition-opacity duration-300 truncate">
                    {locale === 'es' ? 'Llamada Inmediata' : 'Book Discovery Call'}
                  </span>
                  
                  {/* Phone number on hover */}
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm md:text-base font-medium px-4">
                    +507 6211-4762
                  </span>
                </a>
              </div>

              {/* Process Flow - Better Mobile Layout */}
              <div className="border-t border-brand-primary/20 pt-6 md:pt-8">
                <h3 className="text-base md:text-lg font-semibold text-brand-primary mb-4 md:mb-6 opacity-90">
                  {locale === 'es' ? 'Nuestro Proceso' : 'Our Process'}
                </h3>
                
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12">
                  
                  {/* Step 1 */}
                  <div className="flex flex-col items-center text-center group w-full md:w-auto">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-brand-primary/20 transition-colors duration-300">
                      <span className="text-lg md:text-2xl font-bold text-brand-primary">1</span>
                    </div>
                    <h4 className="font-semibold text-brand-primary mb-1 md:mb-2 text-sm md:text-base">
                      {locale === 'es' ? 'Contacto' : 'Contact'}
                    </h4>
                    <p className="text-xs md:text-sm text-brand-primary/70 max-w-28 md:max-w-32">
                      {locale === 'es' ? 'Conversación inicial' : 'Initial conversation'}
                    </p>
                  </div>

                  {/* Arrow - Hidden on mobile, visible on desktop */}
                  <div className="hidden md:block text-brand-primary/40">
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center text-center group w-full md:w-auto">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-brand-primary/20 transition-colors duration-300">
                      <span className="text-lg md:text-2xl font-bold text-brand-primary">2</span>
                    </div>
                    <h4 className="font-semibold text-brand-primary mb-1 md:mb-2 text-sm md:text-base">
                      {locale === 'es' ? 'Análisis' : 'Analyze'}
                    </h4>
                    <p className="text-xs md:text-sm text-brand-primary/70 max-w-28 md:max-w-32">
                      {locale === 'es' ? 'Evaluación detallada' : 'Detailed assessment'}
                    </p>
                  </div>

                  {/* Arrow - Hidden on mobile, visible on desktop */}
                  <div className="hidden md:block text-brand-primary/40">
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center text-center group w-full md:w-auto">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-brand-primary/20 transition-colors duration-300">
                      <span className="text-lg md:text-2xl font-bold text-brand-primary">3</span>
                    </div>
                    <h4 className="font-semibold text-brand-primary mb-1 md:mb-2 text-sm md:text-base">
                      {locale === 'es' ? 'Transformar' : 'Transform'}
                    </h4>
                    <p className="text-xs md:text-sm text-brand-primary/70 max-w-28 md:max-w-32">
                      {locale === 'es' ? 'Implementación exitosa' : 'Successful implementation'}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Trust indicator - Better Mobile Text */}
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-brand-primary/10">
                <p className="text-xs md:text-sm text-brand-primary/60 font-medium leading-relaxed">
                  {locale === 'es' 
                    ? '✓ Respuesta en 24 horas  •  ✓ Consulta inicial gratuita  •  ✓ 10+ años de experiencia'
                    : '✓ 24-hour response  •  ✓ Free initial consultation  •  ✓ 10+ years experience'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Expertise Areas - Better Mobile Wrapping */}
          <div className="text-center relative">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent rounded-2xl"></div>
            <div className="relative py-6 md:py-8 px-4 md:px-0">
              <h3 className="text-lg md:text-h3 font-heading text-brand-primary mb-6 md:mb-8 drop-shadow-sm">
                {locale === 'es' ? 'Áreas de Expertise' : 'Expertise Areas'}
              </h3>
              <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-caption font-sans">
                <span className="border-b border-brand-primary/30 pb-1 hover:border-brand-primary/60 hover:text-brand-primary/90 transition-all duration-300 cursor-default hover:bg-brand-primary/8 px-2 py-1 rounded hover:shadow-md text-center">
                  {locale === 'es' ? 'Hospitalidad de Lujo' : 'Luxury Hospitality'}
                </span>
                <span className="border-b border-brand-primary/30 pb-1 hover:border-brand-primary/60 hover:text-brand-primary/90 transition-all duration-300 cursor-default hover:bg-brand-primary/8 px-2 py-1 rounded hover:shadow-md text-center">
                  {locale === 'es' ? 'Gestión Operacional' : 'Operations Management'}
                </span>
                <span className="border-b border-brand-primary/30 pb-1 hover:border-brand-primary/60 hover:text-brand-primary/90 transition-all duration-300 cursor-default hover:bg-brand-primary/8 px-2 py-1 rounded hover:shadow-md text-center">
                  {locale === 'es' ? 'Experiencia del Huésped' : 'Guest Experience'}
                </span>
                <span className="border-b border-brand-primary/30 pb-1 hover:border-brand-primary/60 hover:text-brand-primary/90 transition-all duration-300 cursor-default hover:bg-brand-primary/8 px-2 py-1 rounded hover:shadow-md text-center">
                  {locale === 'es' ? 'Desarrollo de Marca' : 'Brand Development'}
                </span>
                <span className="border-b border-brand-primary/30 pb-1 hover:border-brand-primary/60 hover:text-brand-primary/90 transition-all duration-300 cursor-default hover:bg-brand-primary/8 px-2 py-1 rounded hover:shadow-md text-center">
                  {locale === 'es' ? 'Turismo de Destino' : 'Destination Tourism'}
                </span>
                <span className="border-b border-brand-primary/30 pb-1 hover:border-brand-primary/60 hover:text-brand-primary/90 transition-all duration-300 cursor-default hover:bg-brand-primary/8 px-2 py-1 rounded hover:shadow-md text-center">
                  {locale === 'es' ? 'Innovación en Servicios' : 'Service Innovation'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}