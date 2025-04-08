
const FreeWebsiteService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[600px] sm:h-[400px]">
        <img
          src="/api/placeholder/1920/1080?text=Free+Website+Service"
          alt="Free Website Service Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/60 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Free Website Development
          </h1>
          <p className="text-base md:text-xl max-w-2xl px-4">
            Get your professional website built at zero cost – perfect for startups, NGOs, and small businesses looking to establish an online presence.
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
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Custom Design</h3>
                <p className="text-gray-600">
                  Unique, mobile-responsive layouts tailored to your brand.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="font-bold text-lg mb-2">CMS Integration</h3>
                <p className="text-gray-600">
                  Easily manage content with WordPress, Wix, or custom CMS.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Fast Deployment</h3>
                <p className="text-gray-600">
                  Launch your site in just a few days – no delays.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Free Hosting & SSL</h3>
                <p className="text-gray-600">
                  Your site stays secure and live at no extra cost.
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">
                Perfect for New Ventures
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Whether you're a startup, charity, artist, or local business, we help you get online with a professional website completely free of charge.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">Zero Development Cost</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">No Hidden Charges</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">Fully Managed Solution</span>
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
            Ready to Launch Your Free Website?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Let us help you establish your digital presence at zero cost and full support.
          </p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
            Claim Your Free Website
          </button>
        </div>
      </section>
    </div>
  );
};

export default FreeWebsiteService;
