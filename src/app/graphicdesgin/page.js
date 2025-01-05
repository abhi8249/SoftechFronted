import React from "react";

const GraphicsDesigning = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[600px] sm:h-[400px]">
        <img
          src="/api/placeholder/1920/1080"
          alt="Graphics Designing Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/60 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Creative Graphics Designing
          </h1>
          <p className="text-base md:text-xl max-w-2xl px-4">
            Transforming ideas into stunning visuals that captivate audiences
            and elevate brands.
          </p>
        </div>
      </section>

      {/* Design Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Brand Identity</h3>
                <p className="text-gray-600">Logos, color palettes, typography</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Marketing Materials</h3>
                <p className="text-gray-600">Brochures, flyers, social media</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🖼️</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Illustrations</h3>
                <p className="text-gray-600">Custom graphics and icons</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Web Design</h3>
                <p className="text-gray-600">UI/UX, responsive design</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">
                Unleash Your Creative Potential
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our team of expert graphic designers is passionate about crafting
                visuals that tell your story and resonate with your audience.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    Tailored Designs for Your Brand
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">High-Quality Deliverables</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">Innovative Visual Concepts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Elevate Your Visuals?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Partner with us to bring your brand's vision to life through
            exceptional graphic design.
          </p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default GraphicsDesigning;
