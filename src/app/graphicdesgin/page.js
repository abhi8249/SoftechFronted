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
            Graphics Designing Services by Softtechindia: Unleashing the Power
            of Visual Communication
          </h1>
          <p className="text-base md:text-xl max-w-2xl px-4">
            In the digital age, powerful visuals are key to creating a lasting
            impression. At Softtechindia, we offer cutting-edge graphics
            designing services to help businesses stand out. Whether you need
            eye-catching branding materials, engaging social media creatives, or
            captivating website graphics, our team of talented designers is here
            to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Why Choose Softtechindia for Graphics Designing?
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <span className="text-blue-500 text-xl">✓</span>
              <p className="text-gray-600">
                <strong>Creative Expertise:</strong> Our team of skilled graphic designers brings creativity and technical knowledge to every project, delivering visually stunning designs.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-blue-500 text-xl">✓</span>
              <p className="text-gray-600">
                <strong>Customized Solutions:</strong> We create designs that align with your brand identity, target audience, and business objectives.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-blue-500 text-xl">✓</span>
              <p className="text-gray-600">
                <strong>Wide Range of Services:</strong> From logos and brochures to digital ads and website graphics, we provide end-to-end graphics designing solutions.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-blue-500 text-xl">✓</span>
              <p className="text-gray-600">
                <strong>Quick Turnaround:</strong> We deliver high-quality designs within the agreed timeline without compromising on quality.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-blue-500 text-xl">✓</span>
              <p className="text-gray-600">
                <strong>Affordable Pricing:</strong> Our services are competitively priced, making professional graphics design accessible for businesses of all sizes.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Graphics Designing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Logo Design",
                description:
                  "Your logo is the face of your brand. We design unique and memorable logos that represent your brand’s essence.",
              },
              {
                title: "Brand Identity Design",
                description:
                  "From business cards to stationery, we create cohesive branding materials that leave a lasting impression.",
              },
              {
                title: "Marketing Collaterals",
                description:
                  "We design brochures, flyers, posters, and banners that communicate your message effectively and attract your audience.",
              },
              {
                title: "Social Media Graphics",
                description:
                  "Engage your audience on platforms like Facebook, Instagram, and LinkedIn with visually appealing social media posts, ads, and stories.",
              },
              {
                title: "Website Graphics",
                description:
                  "We enhance your website with custom graphics, banners, and icons to create a seamless user experience.",
              },
              {
                title: "Infographics",
                description:
                  "Our infographics simplify complex data into visually compelling narratives that inform and engage.",
              },
              {
                title: "Packaging Design",
                description:
                  "We design attractive and functional packaging that highlights your product’s value and captures customer interest.",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-2 text-blue-700">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Our Design Process
          </h2>
          <ol className="space-y-6 list-decimal list-inside">
            <li className="text-gray-600">
              <strong>Understanding Your Needs:</strong> We begin by discussing your goals, target audience, and design preferences to create a detailed brief.
            </li>
            <li className="text-gray-600">
              <strong>Concept Development:</strong> Our team brainstorms and develops creative concepts that align with your brand’s vision.
            </li>
            <li className="text-gray-600">
              <strong>Design Creation:</strong> We bring the chosen concept to life, crafting high-quality designs tailored to your requirements.
            </li>
            <li className="text-gray-600">
              <strong>Feedback and Revisions:</strong> Your feedback is important to us. We make revisions to ensure the final design meets your expectations.
            </li>
            <li className="text-gray-600">
              <strong>Delivery:</strong> We provide the final design in your preferred formats, ready for print or digital use.
            </li>
          </ol>
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
