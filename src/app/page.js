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
          Welcome to SofttechIndia!
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
      <section className="text-center mt-8 mb-0">
        <h1 className="text-4xl">About Us</h1>
        <About />
      </section>

      {/* Features Section */}
      <section className="bg-gray-200 px-2 py-10">
        <div id="features" className="mx-auto max-w-6xl">
          <p className="text-center text-base font-semibold leading-7 text-primary-500">
            Services
          </p>
          <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            What We Do?
          </h2>

          <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
            {/* Feature 1 */}
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm h-[400px] flex flex-col">
              <div className="flex-none">
                <img
                  src="https://uptoskills.com/wp-content/uploads/2024/04/what-is-web-design.webp"
                  alt="Web Design feature"
                  className="mx-auto h-10 w-10"
                />
                <h3 className="my-3 font-display font-medium">Web Design</h3>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  Your website is your digital storefront, and we ensure it
                  leaves a lasting impression. At SofttechIndia, we create
                  responsive, user-friendly, and visually appealing websites
                  that combine aesthetic design with seamless functionality to
                  engage your audience effectively.
                </p>
              </div>
            </li>

            {/* Feature 2 */}
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm h-[400px] flex flex-col">
              <div className="flex-none">
                <img
                  src="https://onlinegurukul.org/storage/uploads/1658492516-dm.jpeg"
                  alt="Digital Marketing feature"
                  className="mx-auto h-10 w-10"
                />
                <h3 className="my-3 font-display font-medium">
                  Digital Marketing
                </h3>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                <div className="mt-1.5 text-sm leading-6 text-secondary-500">
                  <p>
                    In the competitive online space, standing out is crucial.
                    Our digital marketing services are designed to boost your
                    brand visibility and engage your target audience.
                  </p>
                  <ul className="list-disc list-inside text-left mt-2">
                    <li>
                      <strong>Search Engine Optimization (SEO):</strong> Boost
                      your website's ranking and drive organic traffic.
                    </li>
                    <li>
                      <strong>Social Media Marketing (SMM):</strong> Build a
                      strong presence on platforms like Facebook, Instagram, and
                      LinkedIn.
                    </li>
                    <li>
                      <strong>Pay-Per-Click Advertising (PPC):</strong> Generate
                      leads and conversions through targeted ad campaigns.
                    </li>
                    <li>
                      <strong>Content Marketing:</strong> Share compelling
                      content that adds value to your audience and builds brand
                      trust.
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Feature 3 */}
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm h-[400px] flex flex-col">
              <div className="flex-none">
                <img
                  src="https://cdn.thenewstack.io/media/2024/04/d95c0cd2-roles-in-software-development-1024x588.png"
                  alt="Software Development feature"
                  className="mx-auto h-10 w-10"
                />
                <h3 className="my-3 font-display font-medium">
                  Software Development
                </h3>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  We design and develop custom software solutions that
                  streamline operations, enhance productivity, and drive
                  business efficiency. From enterprise applications to scalable
                  cloud-based platforms, we deliver solutions that adapt to your
                  evolving needs.
                </p>
              </div>
            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm h-[400px] flex flex-col">
              <div className="flex-none">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITiUDIxOHORHKvxMsniK1j8Bwfpmd0sLROg&s"
                  alt="Ecommerce Solutions feature"
                  className="mx-auto h-10 w-10"
                />
                <h3 className="my-3 font-display font-medium">
                  Ecommerce Solutions
                </h3>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  Transform your business with our comprehensive e-commerce
                  solutions. We create powerful online stores that provide
                  seamless shopping experiences, secure payment gateways,
                  inventory management, and everything you need to succeed in
                  the digital marketplace. Our solutions are scalable,
                  mobile-friendly, and designed to maximize conversions.
                </p>
              </div>
            </li>

            {/* App Development */}
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm h-[400px] flex flex-col">
              <div className="flex-none">
                <img
                  src="https://www.volumetree.com/wp-content/uploads/2019/11/App-development-process-Feature-image.jpg"
                  alt="App Development feature"
                  className="mx-auto h-10 w-10"
                />
                <h3 className="my-3 font-display font-medium">
                  App Development
                </h3>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  From concept to launch, we develop innovative mobile
                  applications that engage users and drive business growth. Our
                  expert team creates native and cross-platform apps for iOS and
                  Android, focusing on performance, user experience, and
                  scalability. We incorporate the latest technologies and follow
                  best practices to ensure your app stands out in the
                  competitive mobile marketplace.
                </p>
              </div>
            </li>

            {/* Graphics Designing */}
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm h-[400px] flex flex-col">
              <div className="flex-none">
                <img
                  src="https://www.zica-borivali.com/images/graphic-design-course-in-borivali-mumbai.jpg"
                  alt="Graphics Designing feature"
                  className="mx-auto h-10 w-10"
                />
                <h3 className="my-3 font-display font-medium">
                  Graphics Designing
                </h3>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                <div className="mt-1.5 text-sm leading-6 text-secondary-500">
                  <p>
                    Our creative design team brings your brand vision to life
                    through stunning visuals and compelling graphics. We offer
                    comprehensive graphic design services including:
                  </p>
                  <ul className="list-disc list-inside text-left mt-2">
                    <li>
                      <strong>Brand Identity Design:</strong> Logos, color
                      schemes, and brand guidelines
                    </li>
                    <li>
                      <strong>Marketing Materials:</strong> Brochures, banners,
                      and social media graphics
                    </li>
                    <li>
                      <strong>UI/UX Design:</strong> Interface design for web
                      and mobile applications
                    </li>
                    <li>
                      <strong>Print Design:</strong> Business cards, flyers, and
                      promotional materials
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Work Section */}
      <section className="bg-gray-700 p-12  relative">
        {/* Background gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700" />
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
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
            <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">
              Our Work
            </h2>
            <p className="text-gray-300">
              We have built many products and some of them are below
            </p>
          </div>

          <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            {/* Work Item 1 */}
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Xyz.com logo"
                  className="w-12 h-12 rounded-full"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    Xyz.com
                  </h5>
                  <p className="text-gray-300">
                    Platform to convert Domains into Content websites.
                  </p>
                </div>
              </div>
            </div>

            {/* Work Item 2 */}
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="ABC.com logo"
                  className="w-12 h-12 rounded-full"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    ABC.com
                  </h5>
                  <p className="text-gray-300">
                    Platform to create dynamic widgets for websites.
                  </p>
                </div>
              </div>
            </div>

            {/* Work Item 3 */}
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="ASD.com logo"
                  className="w-12 h-12 rounded-full"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    ASD.com
                  </h5>
                  <p className="text-gray-300">
                    API SaaS Platform that provides API Suit to help you ship
                    fast.
                  </p>
                </div>
              </div>
            </div>

            {/* Work Item 4 */}
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="TMK.co logo"
                  className="w-12 h-12 rounded-full"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    TMK.co
                  </h5>
                  <p className="text-gray-300">
                    Chrome Extension that lets you add ChatGPT on any website
                  </p>
                </div>
              </div>
            </div>
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
            Benefits of Partnering with SofttechIndia
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
            Over the years, Softtechindia has worked with diverse industries,
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
