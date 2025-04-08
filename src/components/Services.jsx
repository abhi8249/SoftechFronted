import { useEffect, useRef } from "react";

export default function ServicesSection() {
  const scrollContainerRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const distance = 1; // pixels to scroll per interval (adjust for speed)

    const autoScroll = () => {
      scrollContainer.scrollLeft += distance;
      scrollAmount += distance;

      // When reaching the end, reset to the beginning
      if (
        scrollAmount >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = 0;
        scrollAmount = 0;
      }
    };

    // Set interval for smooth scrolling
    const scrollInterval = setInterval(autoScroll, 30);

    // Clean up on component unmount
    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  const services = [
    {
      title: "Web Design",
      icon: "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Creating responsive, user-friendly websites that combine aesthetic design with seamless functionality to engage your audience effectively.",
      url: "/webdevelopment"
    },
    {
      title: "Digital Marketing",
      icon: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Comprehensive digital marketing services including SEO, social media marketing, PPC advertising, and content marketing.",
      url: "/digitalmarketing"
    },
    {
      title: "Software Development",
      icon: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Custom software solutions that streamline operations, enhance productivity, and drive business efficiency.",
      url: "/softwaredevelopment"
    },
    {
      title: "Ecommerce Solutions",
      icon: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Powerful online stores with seamless shopping experiences, secure payment gateways, and inventory management.",
      url: "/ecommerce"
    },
    {
      title: "App Development",
      icon: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Native and cross-platform mobile applications for iOS and Android, focusing on performance and user experience.",
      url: "/appdevelopment"
    },
    {
      title: "Web Development",
      icon: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Responsive websites with aesthetic design and seamless user experience.",
      url: "/webdevelopment"
    },
    {
      title: "Website Maintenance",
      icon: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Keep your website running smoothly with regular updates, backups, and monitoring.",
      url: "/webmaintenance"
    },
    {
      title: "E-Commerce Website Development",
      icon: "https://images.pexels.com/photos/3790836/pexels-photo-3790836.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Custom e-commerce development with optimized performance and secure transactions.",
      url: "/ecommerce"
    },
    {
      title: "Graphics Designing",
      icon: "https://images.pexels.com/photos/709790/pexels-photo-709790.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Design services including branding, print, UI/UX, and visual identity.",
      url: "/graphicsdesign"
    },
    {
      title: "SMS Services",
      icon: "https://images.pexels.com/photos/4050296/pexels-photo-4050296.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Bulk SMS services to reach your audience instantly and efficiently.",
      url: "/sms"
    },
    {
      title: "WhatsApp Marketing",
      icon: "https://images.pexels.com/photos/2773940/pexels-photo-2773940.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Reach your customers directly with personalized WhatsApp campaigns.",
      url: "/whatsapp"
    },
    {
      title: "Free Website",
      icon: "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Basic websites for startups and small businesses to establish their online presence.",
      url: "/freewebserv"
    },
    {
      title: "SEO Services",
      icon: "https://images.pexels.com/photos/3861968/pexels-photo-3861968.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Improve your search engine visibility with targeted SEO solutions.",
      url: "/seo"
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

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto pb-4 scrollbar-hide"
        >
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
