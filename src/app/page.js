"use client";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Slider from "@/components/Slider";
import About from "@/components/About";
import React from "react";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import HappyClients from "@/components/HappyClients";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/Services";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const WelcomePopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-4 relative animate-fadeIn">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to SofttechBharat!
        </h2>
        <p className="text-gray-600 mb-4">
          <img src="https://img.freepik.com/premium-psd/new-year-sale-social-media-post_1004619-10197.jpg?semt=ais_hybrid" />
        </p>
      </div>
    </div>
  );

  return (
    <>
      {showPopup && <WelcomePopup />}
      {/* Hero Section */}
      <div className="heroSlider">
        <Slider />
      </div>

      {/* About Section */}
      <section className="text-center mt-2 mb-0">
        <h1 className="text-4xl">About Us</h1>
        <About />
      </section>

      {/* Features Section */}
      <ServicesSection />

      {/* Work Section */}
      {/* Work Section */}
      <section className="bg-gray-700 p-4 relative">
        {/* Background gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700" />
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-4">
          <div className="md:w-2/3 lg:w-1/2 mt-8 text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-secondary"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="my-6 text-2xl font-bold text-white md:text-3xl">
              Our Work
            </h2>
            <p className="text-gray-300">
              We have built many products and some of them are below
            </p>
          </div>

          <div className="mt-12 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            {/* Work Item */}
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
              >
                <div className="relative space-y-4 py-8 px-6">
                  <img
                    src={`https://via.placeholder.com/48`}
                    alt={`Work Item ${index + 1}`}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="space-y-1">
                    <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                      Work Item {index + 1}
                    </h5>
                    <p className="text-gray-300 text-sm">
                      Description for work item {index + 1}.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-section">
        <Blog />
      </section>

      <section className="testimonials">
        <Testimonial />
      </section>

      {/* Benefits Section */}
      <section className="bg-white px-4 py-10">
        <div id="benefits" className="mx-auto max-w-6xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Benefits of Partnering with SofttechBharat
          </h2>
          <ul className="mt-6 space-y-4 text-lg text-gray-700">
            <li className="flex items-start space-x-3">
              <span className="inline-block bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                ✓
              </span>
              <p>
                <strong>Enhanced Business Reach:</strong> Mobile apps developed
                by us help you connect with a broader audience, ensuring better
                engagement and customer retention.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="inline-block bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                ✓
              </span>
              <p>
                <strong>Improved Brand Recognition:</strong> A well-designed app
                enhances your brand image and creates a lasting impression on
                users.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="inline-block bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                ✓
              </span>
              <p>
                <strong>Increased Revenue Opportunities:</strong> By offering
                seamless and engaging user experiences, our apps help convert
                visitors into loyal customers.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="inline-block bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                ✓
              </span>
              <p>
                <strong>Seamless Integration:</strong> We ensure your app
                integrates effortlessly with existing systems and third-party
                services.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="inline-block bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                ✓
              </span>
              <p>
                <strong>Reliable Support:</strong> Our team provides 24/7
                support and timely updates to keep your app running efficiently.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="bg-white py-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Industries We Serve
          </h2>
          <p className="mt-4 text-gray-600">
            Over the years, SofttechBharat has worked with diverse industries,
            including:
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 text-gray-700">
            <li>E-commerce</li>
            <li>Healthcare</li>
            <li>Education</li>
            <li>Real Estate</li>
            <li>Travel & Tourism</li>
            <li>Hospitality</li>
          </ul>
          <p className="mt-6 text-gray-600">
            Whether you’re a startup or an established business, we have the
            expertise to cater to your specific needs.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
