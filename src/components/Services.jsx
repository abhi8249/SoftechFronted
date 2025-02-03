import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      title: "Web Design",
      icon: "https://uptoskills.com/wp-content/uploads/2024/04/what-is-web-design.webp",
      description: "Creating responsive, user-friendly websites that combine aesthetic design with seamless functionality to engage your audience effectively.",
      url: "/webdevelopment"
    },
    {
      title: "Digital Marketing",
      icon: "https://onlinegurukul.org/storage/uploads/1658492516-dm.jpeg",
      description: "Comprehensive digital marketing services including SEO, social media marketing, PPC advertising, and content marketing.",
      url: "digitalmarketing"
    },
    {
      title: "Software Development",
      icon: "https://cdn.thenewstack.io/media/2024/04/d95c0cd2-roles-in-software-development-1024x588.png",
      description: "Custom software solutions that streamline operations, enhance productivity, and drive business efficiency.",
      url: "/softwaredevelopment"
    },
    {
      title: "Ecommerce Solutions",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITiUDIxOHORHKvxMsniK1j8Bwfpmd0sLROg&s",
      description: "Powerful online stores with seamless shopping experiences, secure payment gateways, and inventory management.",
      url: "/ecommerce"
    },
    {
      title: "App Development",
      icon: "https://www.volumetree.com/wp-content/uploads/2019/11/App-development-process-Feature-image.jpg",
      description: "Native and cross-platform mobile applications for iOS and Android, focusing on performance and user experience.",
      url: "/appdevelopment"
    },
    {
      title: "Web Development",
      icon: "https://uptoskills.com/wp-content/uploads/2024/04/what-is-web-design.webp",
      description: "Creating responsive, user-friendly websites that combine aesthetic design with seamless functionality to engage your audience effectively.",
      url: "/webdevelopment"
    },
    {
      title: "Web Site Maintenance",
      icon: "https://uptoskills.com/wp-content/uploads/2024/04/what-is-web-design.webp",
      description: "Creating responsive, user-friendly websites that combine aesthetic design with seamless functionality to engage your audience effectively.",
      url: "/webdevelopment"
    },
    {
      title: "E-Commerce Website Development",
      icon: "https://uptoskills.com/wp-content/uploads/2024/04/what-is-web-design.webp",
      description: "Creating responsive, user-friendly websites that combine aesthetic design with seamless functionality to engage your audience effectively.",
      url: "/webdevelopment"
    },
    {
      title: "Graphics Designing",
      icon: "https://www.zica-borivali.com/images/graphic-design-course-in-borivali-mumbai.jpg",
      description: "Brand identity design, marketing materials, UI/UX design, and print design services to bring your brand vision to life.",
      url: "/graphicsdesign"
    },
    {
      title: "SMS Services",
      icon: "https://www.zica-borivali.com/images/graphic-design-course-in-borivali-mumbai.jpg",
      description: "Bulk SMS marketing solutions for reaching your customers instantly with promotional messages and updates.",
      url: "/services/sms-services"
    },
    {
      title: "WhatsApp Marketing",
      icon: "https://www.zica-borivali.com/images/graphic-design-course-in-borivali-mumbai.jpg",
      description: "Professional WhatsApp business solutions for engaging customers through broadcasts and promotional campaigns.",
      url: "/services/whatsapp-marketing"
    },
    {
      title: "Free Website",
      icon: "https://uptoskills.com/wp-content/uploads/2024/04/what-is-web-design.webp",
      description: "Basic website development services at no cost, perfect for startups and small businesses starting their online journey.",
      url: "/services/free-website"
    },
    {
      title: "SEO Services",
      icon: "https://onlinegurukul.org/storage/uploads/1658492516-dm.jpeg",
      description: "Comprehensive SEO solutions including keyword research, on-page optimization, and content strategy to improve rankings.",
      url: "/services/seo"
    }
  ];

  return (
    <section className="bg-gray-200 px-2 py-8">
      <div id="features" className="mx-auto max-w-6xl">
        <p className="text-center text-base font-semibold leading-7 text-primary-500">
          Services
        </p>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 mb-8">
          What We Do?
        </h2>

        <div className="overflow-x-auto pb-4">
          <ul className="inline-flex space-x-6 px-4">
            {services.map((service, index) => (
              <li key={index} className="flex-none w-64">
                <a 
                  href={service.url}
                  className="block rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform h-[350px] flex flex-col"
                >
                  <div className="flex-none">
                    <div className="w-full h-32 mb-3 overflow-hidden rounded-md">
                      <img
                        src={service.icon}
                        alt={`${service.title} feature`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-base text-slate-900 mb-2">
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    <p className="text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}