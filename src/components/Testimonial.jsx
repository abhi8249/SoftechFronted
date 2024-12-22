import Link from 'next/link';
import React from 'react';

const Testimonial = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Testimonials
        </h1>

        <div className="flex flex-wrap -m-4">
          {/* First Testimonial */}
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 p-8 rounded transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-tr hover:from-lightBlue-300 hover:to-lightBlue-500">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                className="block w-5 h-5 text-gray-400 mb-4" 
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
              </svg>
              <p className="leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque semper elit non pellentesque. 
                Curabitur neque arcu, efficitur facilisis porta at, feugiat ut est. Vivamus sed dui in dui vehicula 
                congue. Phasellus sed pellentesque nisi. Phasellus tempus bibendum massa ut tincidunt. Nam hendrerit 
                ut tortor eget rutrum. Suspendisse facilisis ante eget fringilla auctor. Nam a odio orci. 
                Pellentesque imperdiet quis sem
              </p>
              <div className="inline-flex items-center">
                <img 
                  alt="testimonial" 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcVXIgWCvTbb55lDj91N_g2rd0F3rma21CA&s" 
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">Jon doe</span>
                  <span className="text-gray-500 text-sm">DESIGNER</span>
                </span>
              </div>
            </div>
          </div>

          {/* Second Testimonial */}
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 p-8 rounded transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-tr hover:from-lightBlue-300 hover:to-lightBlue-500">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                className="block w-5 h-5 text-gray-400 mb-4" 
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
              </svg>
              <p className="leading-relaxed mb-6">
                Fusce pharetra eget augue ac condimentum. Fusce dictum ex mauris, porta semper mi malesuada dictum. 
                Donec congue ipsum diam. Donec eu tellus laoreet, iaculis mi sit amet, ultricies nulla. Maecenas 
                orci metus, gravida et sodales eget, varius nec nibh. Suspendisse eget lorem blandit, sodales est 
                eget, efficitur erat. Pellentesque feugiat velit in ante tincidunt, sed fringilla dui dignissim. 
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam sit amet ipsum viverra, bibendum 
                odio vel, tempus arcu.
              </p>
              <div className="inline-flex items-center">
                <img 
                  alt="testimonial" 
                  src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" 
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">Jane Doe</span>
                  <span className="text-gray-500 text-sm">DESIGNER</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" 
            href="/testimonial"
          >
            View more
            <svg 
              className="shrink-0 w-4 h-4" 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
