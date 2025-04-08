
const SmsService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[600px] sm:h-[400px]">
        <img
          src="/api/placeholder/1920/1080?text=SMS+Service"
          alt="SMS Service Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/60 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            SMS Gateway & Communication
          </h1>
          <p className="text-base md:text-xl max-w-2xl px-4">
            Deliver reliable, fast, and scalable SMS solutions for seamless
            customer communication and real-time notifications.
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
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📤</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Bulk Messaging</h3>
                <p className="text-gray-600">
                  Send thousands of SMS instantly across regions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Two-Way SMS</h3>
                <p className="text-gray-600">
                  Enable conversations with your audience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Secure Delivery</h3>
                <p className="text-gray-600">
                  Guaranteed delivery with real-time tracking.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="font-bold text-lg mb-2">API Integration</h3>
                <p className="text-gray-600">
                  Easy-to-use API for custom workflows.
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">
                Powerful SMS Features
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Connect with your customers at scale using our advanced
                messaging platform. Whether for marketing, alerts, or
                verification, we ensure your message gets delivered.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    Real-Time Reporting & Analytics
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">Multi-language Support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">Schedule & Automate SMS</span>
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
            Ready to Enhance Your Communication?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Let’s build a robust SMS gateway tailored to your business needs.
          </p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
            Talk to Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default SmsService;
