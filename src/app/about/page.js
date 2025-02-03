"use client";
import { useState } from "react";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import Slider from "@/components/Slider";
import About from "@/components/About";
import React from "react";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import HappyClients from "@/components/HappyClients";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Section - Reduced height and improved overlay */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <img
          src="https://intelvision.pro/wp-content/uploads/2022/04/arlington-research-kN_kViDchA0-unsplash-2-1.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 flex flex-col items-center justify-center text-white text-center px-3">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight">
            About Our Company
          </h1>
          <p className="text-lg md:text-xl max-w-2xl px-4 text-gray-100">
            Discover Our History and Mission and See How We're Dedicated to
            Providing Excellent IT Services
          </p>
        </div>
      </section>

      {/* Who We Are Section - Improved spacing and layout */}
      <section className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          <div className="order-2 md:order-1 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg">
                Welcome to SofttechBharat, your trusted partner in software
                development, web design & development, and digital marketing.
                Based in Bhubaneswar, Odisha, we are a passionate team of tech
                enthusiasts and creative minds dedicated to delivering
                innovative solutions that drive real results.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Choose SofttechBharat?
              </h2>
              <div className="grid gap-3 text-gray-600">
                {[
                  {
                    title: "Experience and Expertise",
                    desc: "With a proven track record and industry experts, we bring unmatched knowledge to every project.",
                  },
                  {
                    title: "Tailored Solutions",
                    desc: "We believe every business is unique, crafting solutions that align perfectly with your objectives.",
                  },
                  {
                    title: "Focus on Results",
                    desc: "We don't just deliver projects; we deliver results. Your success is our measure of achievement.",
                  },
                  {
                    title: "Local Presence, Global Vision",
                    desc: "Based in Bhubaneswar with deep local understanding, yet capable of serving clients globally.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 order-1 md:order-2">
            {[
              { title: "Team Members", value: "50+" },
              { title: "Technologies", value: "20+" },
              { title: "Clients", value: "200+" },
              { title: "Years", value: "10+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-800">
                  {stat.title}
                </h3>
                <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - Enhanced visual hierarchy */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-8">
            At SofttechBharat, our mission is to create impactful digital
            solutions that empower businesses to grow, thrive, and succeed in
            today's competitive world.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                title: "Human Centric",
                desc: "Putting people first in everything we do",
              },
              {
                title: "Excellence",
                desc: "Striving for the highest quality in our work",
              },
              {
                title: "Accountability",
                desc: "Taking responsibility for our actions",
              },
              {
                title: "Empathy",
                desc: "Understanding and sharing client needs",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section - More concise and impactful */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Client-Centric Philosophy",
                desc: "You are at the heart of everything we do, ensuring solutions tailored to your unique needs.",
              },
              {
                title: "Innovation and Creativity",
                desc: "We explore new technologies and strategies to stay ahead and deliver impactful solutions.",
              },
              {
                title: "Transparency and Integrity",
                desc: "We maintain clear communication throughout, keeping you informed and involved.",
              },
            ].map((approach, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{approach.title}</h3>
                <p className="text-gray-600">{approach.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section - More engaging layout */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg mb-4">
                To be the leading innovator in IT solutions, recognized globally
                for our commitment to excellence, sustainable practices, and
                transformative impact on businesses and communities. We envision
                a future where technology seamlessly enhances human potential.
              </p>
            </div>


            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Long-term Impact
              </h3>
              <p className="text-gray-600">
                Our vision extends beyond business success. We're dedicated to
                fostering technological literacy in underserved communities,
                mentoring the next generation of tech leaders, and creating
                solutions that make technology accessible to everyone.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/vecteurs-premium/concept-creation-entreprise-moderne-conception-visuelle-mot-word-formes-geometriques-abstraites_48369-17746.jpg"
              alt="Vision illustration"
              className="rounded-xl shadow-lg w-full max-w-sm hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
