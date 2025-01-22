import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Testimonial = () => {
  const testimonials = [
    {
      content: "We approached SofttechBharat to revamp our outdated website, and they exceeded all our expectations. The design is sleek, user-friendly, and perfectly captures our brand identity. Our site traffic and customer inquiries have significantly increased. Highly recommend their services!",
      author: "Sarah Johnson",
      role: "Marketing Director"
    },
    {
      content: "Professional and Creative Team! The team at SofttechBharat was fantastic to work with. They listened to our needs and turned our vision into reality. Their innovative ideas and attention to detail set them apart. We've received countless compliments on our new website.",
      author: "Michael Chen",
      role: "Business Owner"
    },
    {
      content: "Delivered Beyond Expectations! SofttechBharat created a stunning website for us that's fast, visually appealing, and easy to navigate. Their process was smooth, and they delivered on time and within budget. It's refreshing to work with a team that truly understands your business goals.",
      author: "Emma Williams",
      role: "CEO"
    },
    {
      content: "The Go-To Experts! SofttechBharat transformed our digital marketing strategy. From SEO to social media campaigns, they handled everything with precision and creativity. We now rank on the first page of Google, and our social media engagement is at an all-time high.",
      author: "David Miller",
      role: "Digital Strategist"
    },
    {
      content: "Impressive Team and Results! We've worked with many agencies before, but SofttechBharat stands out for their expertise and dedication. They tailored a strategy specifically for our niche and provided excellent insights that boosted our conversions significantly.",
      author: "Lisa Anderson",
      role: "Operations Manager"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-4 py-4 mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          What Our Clients Say
        </h1>

        <div className="relative">
          {/* Testimonial Slider */}
          <div className="relative h-[300px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-500 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="max-w-3xl mx-auto bg-white p-4 rounded-xl shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-8 h-8 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                  </svg>
                  <p className="leading-relaxed mb-6 text-gray-600">
                    {testimonial.content}
                  </p>
                  <div className="inline-flex items-center">
                    <img
                      alt={testimonial.author}
                      src={`/api/placeholder/40/40`}
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        {testimonial.author}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {testimonial.role}
                      </span>
                    </span>
                  </div>
                  
                </div>
                
              </div>
              
            ))}
          </div>

          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonial;