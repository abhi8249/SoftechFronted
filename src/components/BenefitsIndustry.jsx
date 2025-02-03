import React, { useEffect, useState } from 'react';

const BenefitsAndIndustries = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      title: "Enhanced Business Reach",
      description: "Mobile apps developed by us help you connect with a broader audience, ensuring better engagement and customer retention."
    },
    {
      title: "Improved Brand Recognition",
      description: "A well-designed app enhances your brand image and creates a lasting impression on users."
    },
    {
      title: "Increased Revenue Opportunities",
      description: "By offering seamless and engaging user experiences, our apps help convert visitors into loyal customers."
    },
    {
      title: "Seamless Integration",
      description: "We ensure your app integrates effortlessly with existing systems and third-party services."
    },
    {
      title: "Reliable Support",
      description: "Our team provides 24/7 support and timely updates to keep your app running efficiently."
    }
  ];

  const industries = [
    "E-commerce",
    "Healthcare",
    "Education",
    "Real Estate",
    "Travel & Tourism",
    "Hospitality"
  ];

  return (
    <div className="w-full">
      {/* Benefits Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 px-4 py-16">
        <div className={`mx-auto max-w-6xl text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 mb-12 relative inline-block animate-fadeIn">
            Benefits of Partnering with SofttechBharat
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
          </h2>

          <ul className="mt-8 space-y-6">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className={`flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 opacity-0 animate-slideUp`}
                style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
              >
                <span className="inline-block bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:rotate-12">
                  ✓
                </span>
                <p className="text-left">
                  <strong className="text-blue-600">{benefit.title}:</strong>{" "}
                  <span className="text-gray-700">{benefit.description}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-white py-16 px-6">
        <div className={`max-w-7xl mx-auto text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 animate-fadeIn">
            Industries We Serve
          </h2>
          
          <p className="mt-4 text-gray-600 animate-fadeIn" style={{ animationDelay: '200ms' }}>
            Over the years, SofttechBharat has worked with diverse industries, including:
          </p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <li
                key={index}
                className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-gray-700 font-medium opacity-0 animate-slideUp"
                style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
              >
                {industry}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-gray-600 animate-fadeIn" style={{ animationDelay: '1200ms' }}>
            Whether you're a startup or an established business, we have the expertise to cater to your specific needs.
          </p>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BenefitsAndIndustries;