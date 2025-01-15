import React from "react";

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[600px] sm:h-[400px]">
        <img
          src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Web Designing Services by Softtechindia – Crafting Digital
            Excellence
          </h1>
          <p className="text-base md:text-xl max-w-2xl px-4">
            In today’s digital-first world, a well-designed website is the
            cornerstone of a strong online presence. At Softtechindia, we
            specialize in delivering innovative and visually stunning web
            designing solutions that drive user engagement and business growth.
            Based in Bhubaneswar, we take pride in being a leading software, web
            development, digital marketing, and app development company that
            helps businesses of all sizes establish their digital footprint.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">
                Why Choose Softtechindia for Web Designing?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A website is more than just a digital address; it’s an extension
                of your brand. At Softtechindia, we create websites that are not
                only aesthetically pleasing but also functional, responsive, and
                user-friendly. Our team of experienced designers combines
                creativity with the latest technologies to deliver tailor-made
                solutions for your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Customized Designs
                    </h3>
                    <p className="text-gray-600">
                      We understand that every business is unique, and so are
                      its needs. Our custom web design solutions are tailored to
                      reflect your brand’s identity and meet your specific
                      goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Responsive Web Design
                    </h3>
                    <p className="text-gray-600">
                      In an era where mobile traffic dominates, a responsive
                      design is a must. We ensure that your website looks and
                      performs flawlessly across all devices—desktops, tablets,
                      and smartphones.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      SEO-Friendly Designs
                    </h3>
                    <p className="text-gray-600">
                      Our designs are optimized for search engines to ensure
                      your website ranks higher and attracts the right audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Grid Side */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYVA5LbzTYWQcwQGEG7F87WFa3YYTWFZKa1aWQNsL5sr9GGy2xhKE_FYF6nW9jqDkjdQ&usqp=CAU"
                alt="Web Development 1"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://media.licdn.com/dms/image/v2/D4D12AQGXjzbAJKAgOw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1680499811064?e=2147483647&v=beta&t=nWtKmf583rMcZAKVwbVRHKsEc4y_DswiahikHx7QAW4"
                alt="Web Development 2"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://cdn.vectorstock.com/i/500p/07/19/software-development-programming-coding-vector-29570719.jpg"
                alt="Web Development 3"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://media.istockphoto.com/id/1530256492/vector/software-development-concept-laptop-with-open-screen-hanging-over-desk-coding-or-programming.jpg?s=612x612&w=0&k=20&c=LLywtLnfu5FETIvkaFjy_xcHnaIGmaKZYxcPKAoyPcA="
                alt="Web Development 4"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Web Designing Process */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Our Web Designing Process
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Requirement Analysis
              </h3>
              <p className="text-gray-600">
                We start by understanding your business, target audience, and
                goals to craft a design strategy that aligns with your vision.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Wireframing & Prototyping
              </h3>
              <p className="text-gray-600">
                Our designers create wireframes and prototypes to give you a
                clear idea of the layout and functionality of your website.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Design Creation
              </h3>
              <p className="text-gray-600">
                Once approved, we bring the concept to life by integrating
                visually appealing designs that resonate with your brand
                identity.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Development & Testing
              </h3>
              <p className="text-gray-600">
                Our developers ensure that your website is robust, responsive,
                and compatible across browsers. Rigorous testing guarantees a
                bug-free experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Launch & Support
              </h3>
              <p className="text-gray-600">
                After successful deployment, we provide ongoing support and
                maintenance to keep your website running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Let's work together to create something amazing.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
