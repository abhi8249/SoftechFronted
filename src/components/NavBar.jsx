"use client";
import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const QuoteForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          className="w-full p-2 border rounded-md"
          placeholder="Your name"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full p-2 border rounded-md"
          placeholder="your@email.com"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          className="w-full p-2 border rounded-md"
          placeholder="Your phone number"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="service" className="block text-sm font-medium">
          Service Required
        </label>
        <select id="service" className="w-full p-2 border rounded-md" required>
          <option value="">Select a service</option>
          <option value="web">Web Development</option>
          <option value="app">App Development</option>
          <option value="digital">Digital Marketing</option>
          <option value="software">Software Development</option>
          <option value="graphic">Graphic Design</option>
          <option value="ecommerce">E-commerce Solutions</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Project Details
        </label>
        <textarea
          id="message"
          className="w-full h-32 p-2 border rounded-md"
          placeholder="Tell us about your project"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Submit Quote Request
      </button>
    </form>
  );
};

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const getLinkClassName = (path) => {
    return `block py-2 px-3 rounded transition-colors duration-200 ${
      currentPath === path
        ? "text-white bg-blue-600 md:bg-blue-600"
        : "text-white hover:bg-blue-500 md:hover:bg-blue-500"
    }`;
  };

  return (
    <nav className="bg-navy-blue border-gray-200">
      {/* Quote Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Request a Quote</h2>
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <QuoteForm />
          </div>
        </div>
      )}

      <div className="flex justify-end px-4 py-2 bg-blue-600">
        <div className="flex gap-6">
          <a
            href="tel:7657022122"
            className="flex items-center text-white hover:text-blue-200 transition-colors"
          >
            <Phone size={16} className="mr-2" />
            <span>+91 7657022122</span>
          </a>
          <a
            href="tel:7978870125"
            className="flex items-center text-white hover:text-blue-200 transition-colors"
          >
            <Phone size={16} className="mr-2" />
            <span>+91 7978870125</span>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/api/placeholder/32/32"
            className="h-8"
            alt="Company Logo"
          />
          <span className="text-white text-2xl font-semibold whitespace-nowrap">
            SoftTechBharat
          </span>
        </a>

        <div className="flex items-center md:order-2">
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="mr-4 py-2 px-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get a Quote
          </button>

          <a
            href="/login"
            className="py-2 px-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Login
          </a>

          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 ml-2"
            aria-controls="mega-menu-full"
            aria-expanded={isDropdownOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Rest of the NavBar component remains the same */}
        <div
          id="mega-menu-full"
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } bg-navy-blue items-center justify-between font-medium w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <a href="/" className={getLinkClassName("/")}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" className={getLinkClassName("/about")}>
                About
              </a>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-white rounded md:w-auto hover:bg-blue-500 transition-colors duration-200"
                aria-expanded={isDropdownOpen}
              >
                Services
                <svg
                  className="w-2.5 h-2.5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                  aria-hidden="true"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <a href="/blog" className={getLinkClassName("/blog")}>
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className={getLinkClassName("/contact")}>
                Contact
              </a>
            </li>
            <li>
              <a href="/career" className={getLinkClassName("/career")}>
                Career
              </a>
            </li>
          </ul>
        </div>
      </div>

      {isDropdownOpen && (
        <div
          id="mega-menu-full-dropdown"
          className="mt-1 shadow-sm bg-navy-blue text-white"
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto sm:grid-cols-2 gap-4">
            <ul className="space-y-3">
              <li className="border border-gray-400 rounded-lg overflow-hidden">
                <a
                  href="/webdevelopment"
                  className={`block p-4 hover:bg-blue-500 transition-colors duration-200 ${
                    currentPath === "/webdevelopment" ? "bg-blue-600" : ""
                  }`}
                >
                  <div className="font-semibold">Web Design</div>
                  <span className="text-sm text-white">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li className="border border-gray-400 rounded-lg">
                <a
                  href="/digitalmarketing"
                  className={`block p-4 hover:bg-blue-500 transition-colors duration-200 ${
                    currentPath === "/digitalmarketing" ? "bg-blue-600" : ""
                  }`}
                >
                  <div className="font-semibold">Digital Marketing</div>
                  <span className="text-sm text-white">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li className="border border-gray-400 rounded-lg overflow-hidden">
                <a
                  href="/webdevelopment"
                  className={`block p-4 hover:bg-blue-500 transition-colors duration-200 ${
                    currentPath === "/webdevelopment" ? "bg-blue-600" : ""
                  }`}
                >
                  <div className="font-semibold">E-commerce Website Development</div>
                  <span className="text-sm text-white">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li className="border border-gray-400 rounded-lg">
                <a
                  href="/sms"
                  className={`block p-4 hover:bg-blue-500 transition-colors duration-200 ${
                    currentPath === "/sms" ? "bg-blue-600" : ""
                  }`}
                >
                  <div className="font-semibold">SMS Services</div>
                  <span className="text-sm text-white">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li className="border border-gray-400 rounded-lg">
                <a
                  href="/whatsapp"
                  className={`block p-4 hover:bg-blue-500 transition-colors duration-200 ${
                    currentPath === "/whatsapp" ? "bg-blue-600" : ""
                  }`}
                >
                  <div className="font-semibold">Whatsapp Marketing</div>
                  <span className="text-sm text-white">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li className="border border-gray-400 rounded-lg">
                <a
                  href="/freewebserv"
                  className={`block p-4 hover:bg-blue-500 transition-colors duration-200 ${
                    currentPath === "/freewebserv" ? "bg-blue-600" : ""
                  }`}
                >
                  <div className="font-semibold">Free Website Services</div>
                  <span className="text-sm text-white">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="border border-gray-400 rounded-lg">
                <a
                  href="/softwaredevelopment"
                  className={`block p-4 hover:bg-blue-500 transition-colors duration-200 ${
                    currentPath === "/softwaredevelopment" ? "bg-blue-600" : ""
                  }`}
                >
                  <div className="font-semibold">Software Development</div>
                  <span className="text-sm text-white">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li className="border border-gray-400 rounded-lg overflow-hidden">
                <a
                  href="/webdevelopment"
                  className={`block p-4 hover:bg-blue-500 transition-colors duration-200 ${
                    currentPath === "/webdevelopment" ? "bg-blue-600" : ""
                  }`}
                >
                  <div className="font-semibold">Web Development</div>
                  <span className="text-sm text-white">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li className="border border-gray-400 rounded-lg">
                <a
                  href="/appdevelopment"
                  className={`block p-4 hover:bg-blue-500 transition-colors duration-200 ${
                    currentPath === "/appdevelopment" ? "bg-blue-600" : ""
                  }`}
                >
                  <div className="font-semibold">App Development</div>
                  <span className="text-sm text-white">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li className="border border-gray-400 rounded-lg">
                <a
                  href="/graphicdesgin"
                  className={`block p-4 hover:bg-blue-500 transition-colors duration-200 ${
                    currentPath === "/graphicdesgin" ? "bg-blue-600" : ""
                  }`}
                >
                  <div className="font-semibold">Graphic Design</div>
                  <span className="text-sm text-white">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li className="border border-gray-400 rounded-lg">
                <a
                  href="/ecommerce"
                  className={`block p-4 hover:bg-blue-500 transition-colors duration-200 ${
                    currentPath === "/ecommerce" ? "bg-blue-600" : ""
                  }`}
                >
                  <div className="font-semibold">Ecommerce Solutions</div>
                  <span className="text-sm text-white">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li className="border border-gray-400 rounded-lg">
                <a
                  href="/seo"
                  className={`block p-4 hover:bg-blue-500 transition-colors duration-200 ${
                    currentPath === "/seo" ? "bg-blue-600" : ""
                  }`}
                >
                  <div className="font-semibold">SEO Services</div>
                  <span className="text-sm text-white">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li className="border border-gray-400 rounded-lg overflow-hidden">
                <a
                  href="/webdevelopment"
                  className={`block p-4 hover:bg-blue-500 transition-colors duration-200 ${
                    currentPath === "/webdevelopment" ? "bg-blue-600" : ""
                  }`}
                >
                  <div className="font-semibold">Web Site Maintenance </div>
                  <span className="text-sm text-white">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
