import React from "react";

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[600px] sm:h-[400px]">
        <img
          src="https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2022/11/DM_blog_post_image_03_guetzli.jpg"
          alt="Digital Marketing Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-teal-600/80 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Strategic Digital Marketing
          </h1>
          <p className="text-base md:text-xl max-w-2xl px-4">
            Drive growth and engagement with data-driven digital marketing
            strategies that connect with your target audience.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Comprehensive Marketing Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From social media management to SEO optimization, we offer
              full-spectrum digital marketing services to boost your online
              presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img
                src="https://www.digiexcel.com/wp-content/uploads/2022/04/social-media-marketing-1.jpg"
                alt="Social Media Marketing"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="font-bold text-xl mb-3 text-gray-800">
                Social Media Marketing
              </h3>
              <p className="text-gray-600">
                Engage your audience and build brand awareness through strategic
                social media campaigns.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img
                src="https://kyrosdigital.in/wp-content/uploads/2022/10/6-technical-seo-tips-to-instantly-boost-your-traffic.jpg"
                alt="SEO Services"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="font-bold text-xl mb-3 text-gray-800">
                SEO Optimization
              </h3>
              <p className="text-gray-600">
                Improve your search rankings and drive organic traffic with
                proven SEO strategies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D08AQFO5ZhGB8Md9g/croft-frontend-shrinkToFit1024/croft-frontend-shrinkToFit1024/0/1632508947809?e=2147483647&v=beta&t=xycWNNwLuewGpgTZFjxYEqkr7-IYR6aaS3-mfXbkwxg"
                alt="Content Marketing"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="font-bold text-xl mb-3 text-gray-800">
                Content Marketing
              </h3>
              <p className="text-gray-600">
                Create compelling content that resonates with your audience and
                drives conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">
                Data-Driven Results
              </h2>
              <p className="text-gray-600">
                We leverage advanced analytics and tracking tools to measure
                campaign performance and optimize your marketing strategy for
                maximum ROI.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    250%
                  </div>
                  <div className="text-sm text-gray-600">Average ROI</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    10x
                  </div>
                  <div className="text-sm text-gray-600">Traffic Growth</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    95%
                  </div>
                  <div className="text-sm text-gray-600">
                    Client Satisfaction
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">
                    Campaign Monitoring
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://brandlume.com/wp-content/uploads/2024/09/76.png"
              alt="Analytics Dashboard"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Boost Your Digital Presence Today
          </h2>
          <p className="text-green-50 mb-8 text-lg">
            Get a free digital marketing consultation and strategy session.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition duration-300">
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
