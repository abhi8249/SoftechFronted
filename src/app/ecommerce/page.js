import React from "react";

const EcommerceSolutions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[600px] sm:h-[400px]">
        <img
          src="/api/placeholder/1920/1080"
          alt="Ecommerce Solutions Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/60 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Ecommerce Solutions
          </h1>
          <p className="text-base md:text-xl max-w-2xl px-4">
            Empowering businesses with seamless, scalable, and secure ecommerce
            platforms tailored to your needs.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Comprehensive Ecommerce Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Our ecommerce solutions are designed to enhance your customer
                experience and streamline business operations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    Custom Online Store Development
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">Secure Payment Integration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    Inventory and Order Management
                  </span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-2">SEO Optimization</h3>
                <p className="text-gray-600">Boost visibility and reach</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-2">Analytics</h3>
                <p className="text-gray-600">Track and improve performance</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-2">Mobile-Ready Design</h3>
                <p className="text-gray-600">Responsive for all devices</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-2">Custom Integrations</h3>
                <p className="text-gray-600">CRM, ERP, and more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Transform Your Online Store Today!
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Partner with us to build a robust ecommerce solution tailored to
            your business goals.
          </p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default EcommerceSolutions;
