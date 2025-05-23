import React from "react";

const AppDevelopment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[600px] sm:h-[400px]">
        <img
          src="/api/placeholder/1920/1080"
          alt="App Development Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green-900/60 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            App Development Services at SofttechBharat
          </h1>
          <p className="text-base md:text-xl max-w-2xl px-4">
            We specialize in building high-performance mobile and web
            applications tailored to your unique requirements.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            App Development Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">
                    iOS and Android Development
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">Cross-Platform Apps</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-gray-700">Custom APIs</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-2">UI/UX Design</h3>
                <p className="text-gray-600">Engaging interfaces</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-2">Scalable Backend</h3>
                <p className="text-gray-600">Robust server solutions</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-2">Cloud Hosting</h3>
                <p className="text-gray-600">AWS, Azure, Google Cloud</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-2">
                  Support & Maintenance
                </h3>
                <p className="text-gray-600">24/7 assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Development Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose SofttechBharat for App Development?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            In the rapidly evolving digital age, mobile applications have become
            a cornerstone for businesses to connect with their audiences. At
            SofttechBharat, a leading App Development company based in
            Bhubaneswar, Odisha, we specialize in crafting innovative,
            user-friendly, and high-performing mobile apps that drive success
            and engagement.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              Customized Solutions: Tailor-made applications that align with
              your goals.
            </li>
            <li>
              Expert Team: Developers, designers, and strategists with years of
              experience.
            </li>
            <li>Cutting-Edge Technology: Incorporating AI, IoT, AR, and VR.</li>
            <li>End-to-End Services: From ideation to post-launch support.</li>
            <li>
              Cost-Effective Solutions: High-quality apps within your budget.
            </li>
          </ul>
          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Our App Development Process
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-gray-600">
            <li>
              <strong>Requirement Analysis:</strong> Understanding your
              objectives and app requirements.
            </li>
            <li>
              <strong>UI/UX Design:</strong> Creating visually appealing,
              user-friendly interfaces.
            </li>
            <li>
              <strong>Development:</strong> Building robust, scalable mobile
              applications.
            </li>
            <li>
              <strong>Testing:</strong> Rigorous testing to ensure flawless
              performance.
            </li>
            <li>
              <strong>Deployment and Support:</strong> Deploying the app and
              providing ongoing maintenance.
            </li>
          </ol>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Let’s Build Your Dream App!
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Start your app development journey with our experienced team today.
          </p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;
