import React from "react";

const WhatsappMarketing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[600px] sm:h-[400px]">
        <img
          src="/api/placeholder/1920/1080?text=WhatsApp+Marketing"
          alt="WhatsApp Marketing Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green-900/60 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            WhatsApp Marketing Solutions
          </h1>
          <p className="text-base md:text-xl max-w-2xl px-4">
            Engage customers directly on the world’s most popular messaging app with automated, personalized campaigns.
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
                  <span className="text-2xl">📨</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Broadcast Messages</h3>
                <p className="text-gray-600">
                  Send personalized messages to your audience at scale.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Chatbots</h3>
                <p className="text-gray-600">
                  Automate replies and support using intelligent chatbots.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Campaign Analytics</h3>
                <p className="text-gray-600">
                  Monitor engagement with real-time metrics.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔐</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Verified Messaging</h3>
                <p className="text-gray-600">
                  Deliver trusted messages with green tick verification.
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">
                WhatsApp for Business, Done Right
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Harness the power of WhatsApp for marketing, customer support, and real-time engagement. Our platform helps you create campaigns that feel like conversations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">Pre-approved message templates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">Multi-agent live chat</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">Automated flows and triggers</span>
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
            Start Your WhatsApp Campaign Today
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Let’s help you turn conversations into conversions through smart, scalable WhatsApp marketing tools.
          </p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhatsappMarketing;
