"use client"
import { useState } from "react";

export default function Careers() {
  const options = [
    {
      id: "team",
      title: "Join Our Team",
      description: "Be part of our dynamic team and help shape the future of technology"
    },
    {
      id: "openings",
      title: "Openings",
      description: "Explore current opportunities across various departments"
    },
    {
      id: "internship",
      title: "Internship",
      description: "Gain valuable experience and kickstart your career with us"
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  });

  const handleApply = (option) => {
    setSelectedOption(option);
    setIsModalOpen(true);
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted:", {
      optionId: selectedOption.id,
      ...formData,
    });
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      resume: null,
      coverLetter: "",
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header Section */}
      <header className="bg-[#13274F] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Careers at Our Company</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Join us in our mission to create exceptional experiences and push the boundaries
              of innovation. We're looking for passionate individuals ready to make an impact.
            </p>
          </div>
        </div>
      </header>

      {/* Options Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option) => (
            <div
              key={option.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-[#13274F] mb-4">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-6">{option.description}</p>
              <button
                onClick={() => handleApply(option)}
                className="w-full py-2 bg-[#13274F] text-white rounded-md font-medium hover:bg-opacity-90 transition"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {isModalOpen && selectedOption && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#13274F]">
                Apply for {selectedOption.title}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
              <textarea
                name="coverLetter"
                placeholder="Cover Letter"
                value={formData.coverLetter}
                onChange={handleFormChange}
                rows="4"
                className="w-full px-4 py-2 border rounded-md"
              ></textarea>
              <input
                type="file"
                name="resume"
                onChange={handleFormChange}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
              <button
                type="submit"
                className="w-full py-2 bg-[#13274F] text-white rounded-md hover:bg-opacity-90"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}