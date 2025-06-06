export default function DevPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            The Crafted Hospitality
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8">
            Expert Hospitality Consulting in Panama
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your hospitality vision into extraordinary experiences with expert consulting services throughout Panama.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-yellow-600 text-white px-8 py-4 rounded hover:bg-yellow-700 transition-colors">
              Book Consultation
            </button>
            <button className="border border-yellow-600 text-yellow-600 px-8 py-4 rounded hover:bg-yellow-600 hover:text-white transition-colors">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-green-800 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Comprehensive hospitality consulting services to transform your business vision into reality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-green-800 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Hotel Consulting</h3>
              <p className="text-gray-600 mb-4">Strategic planning, operations optimization, and guest experience enhancement for hotels of all sizes.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Revenue Management</li>
                <li>• Operations Excellence</li>
                <li>• Guest Experience Design</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-green-800 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">DMC Services</h3>
              <p className="text-gray-600 mb-4">Destination management and tourism development to showcase Panama&apos;s unique attractions.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Curated Experiences</li>
                <li>• Event Management</li>
                <li>• Tourism Development</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-green-800 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Restaurant Consulting</h3>
              <p className="text-gray-600 mb-4">Culinary strategy, kitchen operations, and dining experience optimization.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Menu Development</li>
                <li>• Kitchen Optimization</li>
                <li>• Staff Training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-green-800 mb-6">
              About The Crafted Hospitality
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto mb-8">
              Combining international expertise with deep local knowledge to create exceptional hospitality experiences in Panama.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Our Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded mr-4 mt-1">
                    <svg className="w-5 h-5 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">International Standards</h4>
                    <p className="text-gray-600">World-class hospitality practices adapted for Latin American markets</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded mr-4 mt-1">
                    <svg className="w-5 h-5 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Local Market Knowledge</h4>
                    <p className="text-gray-600">Deep understanding of Panama&apos;s unique cultural and business landscape</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded mr-4 mt-1">
                    <svg className="w-5 h-5 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Proven Results</h4>
                    <p className="text-gray-600">Track record of successful hospitality transformations across the region</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-center">
                <div className="bg-green-800 w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Leadership</h4>
                <p className="text-gray-600 mb-4">
                  Led by hospitality professionals with extensive experience in luxury hotels, destination management, and tourism development throughout Central America.
                </p>
                <p className="text-sm text-green-700 font-medium">
                  Ready to elevate your hospitality business to new heights
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Ready to Transform Your Hospitality Business?
          </h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Let&apos;s discuss how our expertise can help you create extraordinary guest experiences and drive sustainable growth in Panama&apos;s dynamic hospitality market.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-yellow-600 text-white px-8 py-4 rounded-lg hover:bg-yellow-700 transition-colors font-semibold">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-800 transition-colors font-semibold">
              Download Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
