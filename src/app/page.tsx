
export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-brand-cream text-brand-primary p-8 md:p-16 overflow-hidden">
      {/* Background Logo Watermark */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/logo/logo-primary-center.png"
          alt=""
          className="w-full h-full object-contain opacity-5 pointer-events-none"
        />
      </div>

      {/* Content Container - ensure it's above the watermark */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8">
          The Crafted Hospitality
        </h1>
        <p className="font-sans text-2xl md:text-3xl mb-12">
          Expert Hospitality Consulting in Panama & Latin America
        </p>
        <p className="font-sans text-xl md:text-2xl mb-20 leading-relaxed">
          Our full website is currently under meticulous construction. We are crafting an exceptional online experience to showcase how we can elevate your hospitality business.
        </p>

        <div className="mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-10 text-center">Our Core Services Include:</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="text-left">
              <div className="flex items-start mb-3">
                <svg className="w-8 h-8 text-accent mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 .5l2.939 5.455 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
                <h3 className="font-sans text-xl font-semibold text-brand-primary">Personalized DMC & Experiential Tourism Management</h3>
              </div>
              {/* Optional: Add a short description for each service here if desired */}
            </div>

            {/* Service 2 */}
            <div className="text-left">
              <div className="flex items-start mb-3">
                <svg className="w-8 h-8 text-accent mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 .5l2.939 5.455 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
                <h3 className="font-sans text-xl font-semibold text-brand-primary">Strategic Hotel Consulting & Technology Implementation</h3>
              </div>
              {/* Optional: Add a short description */}
            </div>

            {/* Service 3 */}
            <div className="text-left">
              <div className="flex items-start mb-3">
                <svg className="w-8 h-8 text-accent mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 .5l2.939 5.455 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
                <h3 className="font-sans text-xl font-semibold text-brand-primary">Restaurant Operations & Culinary Excellence Advisory</h3>
              </div>
              {/* Optional: Add a short description */}
            </div>
          </div>
        </div>

        <hr className="border-accent my-20" />

        <div className="mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-10">Get in Touch</h2>
          <p className="font-sans text-lg md:text-xl mb-6">
            We are excited to discuss your project. While our site is being perfected, please reach out to us directly:
          </p>
          <p className="font-sans text-xl md:text-2xl font-semibold">
            Email: <a href="mailto:info@thecraftedhospitality.com" className="text-accent hover:text-accent/80 underline">info@thecraftedhospitality.com</a>
          </p>
          <p className="font-sans text-xl md:text-2xl font-semibold mt-3">
            Phone: <a href="tel:+50762114762" className="text-accent hover:text-accent/80 underline">+507 62114762</a>
          </p>
        </div>

        <div className="animate-pulse mb-6">
          <svg className="w-16 h-16 text-accent mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <p className="font-sans text-lg">
          Stay tuned for our full launch!
        </p>
      </div>
    </div>
  );
}

