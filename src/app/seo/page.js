import React from "react";

const SeoService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[600px] sm:h-[400px]">
        <img
          src="/api/placeholder/1920/1080?text=SEO+Services"
          alt="SEO Services Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green-900/60 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Boost Your Search Rankings
          </h1>
          <p className="text-base md:text-xl max-w-2xl px-4">
            Drive organic traffic and dominate Google with our proven SEO strategies tailored for your business.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Keyword Research</h3>
                <p className="text-gray-600">
                  Identify high-value search terms to target the right audience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="font-bold text-lg mb-2">On-Page SEO</h3>
                <p className="text-gray-600">
                  Optimize your site’s content, structure, and performance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Backlink Building</h3>
                <p className="text-gray-600">
                  Build authority through high-quality link building strategies.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Performance Tracking</h3>
                <p className="text-gray-600">
                  Monitor rankings, traffic, and growth with transparent reporting.
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">
                Full-Service SEO That Works
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Whether you're launching a new website or looking to improve existing traffic, our SEO experts craft strategies that bring measurable results.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">Google-Approved Techniques</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">Industry & Local SEO</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">Conversion-Focused Content</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Climb the Rankings?
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Let’s drive qualified traffic and turn clicks into customers with our result-driven SEO services.
          </p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition duration-300">
            Get a Free SEO Audit
          </button>
        </div>
      </section>
    </div>
  );
};

export default SeoService;
