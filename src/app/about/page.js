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
    <>
      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[600px] md:h-[600px] sm:h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1528459584353-5297db1a9c01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              About Our Company
            </h1>
            <p className="text-base md:text-xl max-w-2xl px-4">
              Discover Our History and Mission and See How We're Dedicated to
              Providing Excellent IT Services
            </p>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="container mx-auto px-4 py-8 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                Welcome to SofttechIndia, your trusted partner in software
                development, web design & development, and digital marketing.
                Based in Bhubaneswar, Odisha, we are a passionate team of tech
                enthusiasts and creative minds dedicated to delivering
                innovative solutions that drive real results.
              </p>
              <p className="text-gray-600 text-base md:text-lg mb-8">
                SofttechIndia is a team of skilled professionals passionate
                about delivering excellence in every project. With a commitment
                to innovation, we craft solutions that are not only functional
                but also tailored to meet the unique needs of our clients.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                Why Choose SofttechIndia?
              </h2>
              <div className="space-y-4 text-gray-600 text-base md:text-lg">
                <div className="flex gap-2">
                  <span className="font-bold">1.</span>
                  <p>
                    <span className="font-semibold">
                      Experience and Expertise:
                    </span>{" "}
                    With a proven track record and a team of industry experts,
                    we bring unmatched knowledge and skills to every project we
                    undertake.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">2.</span>
                  <p>
                    <span className="font-semibold">Tailored Solutions:</span>{" "}
                    We believe every business is unique. That's why our
                    solutions are customized to align perfectly with your
                    objectives and challenges.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">3.</span>
                  <p>
                    <span className="font-semibold">Focus on Results:</span> We
                    don't just deliver projects; we deliver results. Your
                    success is our measure of achievement.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">4.</span>
                  <p>
                    <span className="font-semibold">
                      Local Presence, Global Vision:
                    </span>{" "}
                    Based in Bhubaneswar, Odisha, we have a deep understanding
                    of local business needs, coupled with the capability to
                    serve clients globally.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-1 md:order-2">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Team Members
                </h3>
                <p className="text-2xl md:text-3xl font-bold text-blue-600">
                  50+
                </p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Technologies
                </h3>
                <p className="text-2xl md:text-3xl font-bold text-blue-600">
                  20+
                </p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg md:text-xl font-bold mb-2">Clients</h3>
                <p className="text-2xl md:text-3xl font-bold text-blue-600">
                  200+
                </p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg md:text-xl font-bold mb-2">Years</h3>
                <p className="text-2xl md:text-3xl font-bold text-blue-600">
                  10+
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="bg-gray-50 py-8 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6 md:mb-12">
              Our Mission
            </h2>
            <p className="text-gray-600 text-base md:text-lg text-center max-w-3xl mx-auto mb-8 md:mb-12">
              At SofttechIndia, our mission is simple: To create impactful
              digital solutions that empower businesses to grow, thrive, and
              succeed in today's competitive world. We believe that technology
              and creativity go hand in hand, and we strive to bring this
              synergy to every project we undertake.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg md:text-xl font-bold mb-3">
                  Human Centric
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Putting people first in everything we do
                </p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg md:text-xl font-bold mb-3">
                  Excellence
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Striving for the highest quality in our work
                </p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg md:text-xl font-bold mb-3">
                  Accountability
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Taking responsibility for our actions
                </p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg md:text-xl font-bold mb-3">Empathy</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Understanding and sharing client needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="bg-gray-50 py-8 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">
              Our Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  Client-Centric Philosophy
                </h3>
                <p className="text-gray-600">
                  At SofttechIndia, you are at the heart of everything we do. We
                  take the time to understand your goals, challenges, and
                  vision, ensuring every solution we provide is tailored to your
                  unique needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  Innovation and Creativity
                </h3>
                <p className="text-gray-600">
                  Our team thrives on innovation. We continuously explore new
                  technologies, tools, and strategies to stay ahead of the curve
                  and deliver solutions that make a difference.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  Transparency and Integrity
                </h3>
                <p className="text-gray-600">
                  We value honesty and openness in every collaboration. From
                  project planning to delivery, we maintain clear communication,
                  ensuring you are always informed and involved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="container mx-auto px-4 py-8 md:py-16">
          <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Our team comprises experienced professionals with expertise in
                software development, design, and digital marketing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Customized Solutions</h3>
              <p className="text-gray-600">
                We understand that no two businesses are alike. That's why we
                create bespoke solutions tailored to your requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Proven Track Record</h3>
              <p className="text-gray-600">
                Over the years, we've delivered numerous successful projects for
                clients across industries.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Affordable Excellence</h3>
              <p className="text-gray-600">
                We provide world-class services at competitive prices, ensuring
                maximum ROI for your investment.
              </p>
            </div>
          </div>
        </section>
        {/* Our Vision Section */}
        <section className="container mx-auto px-4 py-8 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                Our Vision
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                To be the leading innovator in IT solutions, recognized globally
                for our commitment to excellence, sustainable practices, and
                transformative impact on businesses and communities. We envision
                a future where technology seamlessly enhances human potential.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://img.freepik.com/vecteurs-premium/concept-creation-entreprise-moderne-conception-visuelle-mot-word-formes-geometriques-abstraites_48369-17746.jpg"
                alt="Vision illustration"
                className="rounded-lg shadow-lg w-full max-w-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
