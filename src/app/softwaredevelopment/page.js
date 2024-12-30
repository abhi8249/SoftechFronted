import React from "react";

const SoftwareDevelopment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[600px] sm:h-[400px]">
        <img
          src="/api/placeholder/1920/1080"
          alt="Software Development Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-900/60 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Custom Software Development
          </h1>
          <p className="text-base md:text-xl max-w-2xl px-4">
            Building powerful, scalable software solutions that drive innovation
            and transform businesses through cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Tech Stack Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔷</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Mobile Development</h3>
                <p className="text-gray-600">iOS, Android, Cross-platform</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Cloud Solutions</h3>
                <p className="text-gray-600">AWS, Azure, Google Cloud</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔐</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Enterprise Software</h3>
                <p className="text-gray-600">Scalable, secure solutions</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="font-bold text-lg mb-2">AI & ML</h3>
                <p className="text-gray-600">Smart automation systems</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">
                Advanced Technology Stack
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We leverage the latest technologies and frameworks to build
                robust, future-proof software solutions that scale with your
                business.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    Modern Architecture Patterns
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    Agile Development Methodology
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    Continuous Integration/Deployment
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Your Software Solution?
          </h2>
          <p className="text-purple-100 mb-8 text-lg">
            Let's turn your vision into reality with our expert development
            team.
          </p>
          <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition duration-300">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
