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
            Web Development and Web Design
          </h1>
          <p className="text-base md:text-xl max-w-2xl px-4">
            Transform your ideas into stunning, functional websites. We
            specialize in creating user-friendly designs and robust web
            solutions to elevate your online presence.
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
                Crafting Digital Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our comprehensive web development services combine cutting-edge
                technology with creative design to deliver exceptional digital
                experiences.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Responsive Design
                    </h3>
                    <p className="text-gray-600">
                      Websites that look and perform beautifully on all devices
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Custom Development
                    </h3>
                    <p className="text-gray-600">
                      Tailored solutions that meet your specific business needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Performance Optimization
                    </h3>
                    <p className="text-gray-600">
                      Lightning-fast loading speeds and smooth user experience
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
