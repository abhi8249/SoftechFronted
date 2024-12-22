"use client";
import { useState } from "react";

export default function Careers() {
  const jobs = [
    {
      id: "SDA001",
      title: "Software Development Apprentice/Trainee",
      description:
        "As a Full Stack Software Apprentice, you'll collaborate on innovative projects bridging front-end and back-end development.",
      detailed_description:
        "Key Responsibilities:\n• Learn and apply full-stack development principles\n• Participate in code reviews and team discussions\n• Write clean, maintainable code\n• Collaborate with senior developers\n\nRequirements:\n• Basic knowledge of HTML, CSS, JavaScript\n• Eagerness to learn new technologies\n• Good problem-solving skills\n• Strong communication abilities",
      location: "Bhubaneswar, India",
      type: "Full-Time",
      category: "Technology",
      openings: 25,
    },
    {
      id: "JTP002",
      title: "Junior Technical Programmer",
      description:
        "Work with cutting-edge technologies and contribute to transformative projects.",
      detailed_description:
        "Key Responsibilities:\n• Develop and maintain software applications\n• Debug and troubleshoot code issues\n• Write technical documentation\n• Collaborate with cross-functional teams\n\nRequirements:\n• Bachelor degree in Computer Science or related field\n• Knowledge of programming fundamentals\n• Experience with version control systems\n• Strong analytical skills",
      location: "Remote",
      type: "Full-Time",
      category: "Technology",
      openings: 10,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Departments");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  });

  const handleApply = (job) => {
    setSelectedJob(job);
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
      jobId: selectedJob.id,
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

  const filteredJobs = jobs.filter((job) => {
    const matchesCategory =
      selectedCategory === "All Departments" ||
      job.category === selectedCategory;
    const matchesSearchTerm =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header Section */}
      <header className="bg-[#13274F] text-white py-12">
        <div className="container mx-auto flex flex-col items-center px-4 md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Apply to Work at our Company</h1>
            <p className="text-lg">
              Are you eager to push boundaries and create exceptional experiences? If
              you're passionate about doing work that stands out and makes a real
              impact, apply to join our team.
            </p>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="https://via.placeholder.com/250"
              alt="Team Illustration"
              className="w-64 h-auto"
            />
          </div>
        </div>
      </header>

      {/* Sticky Filter Bar */}
      <div className="sticky top-0 bg-[#13274F]/90 backdrop-blur-md py-4 shadow-md z-10">
        <div className="container mx-auto flex flex-col items-center px-4 space-y-4 md:flex-row md:space-y-0 md:justify-between">
          <h2 className="text-lg font-semibold text-white">Jobs at our Company</h2>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <select
              className="bg-white py-2 px-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#13274F]"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>All Departments</option>
              <option>Technology</option>
              <option>Marketing</option>
              <option>Design</option>
              <option>Management</option>
            </select>
            <input
              type="text"
              placeholder="Search jobs..."
              className="bg-white py-2 px-4 rounded-md border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#13274F]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-[#13274F] mb-2">
              {job.title}
            </h3>
            <p className="text-gray-600 mb-4">{job.description}</p>
            <ul className="text-sm text-gray-500 mb-4">
              <li>
                <span className="font-medium">Job ID:</span> {job.id}
              </li>
              <li>
                <span className="font-medium">Location:</span> {job.location}
              </li>
              <li>
                <span className="font-medium">Category:</span> {job.category}
              </li>
              <li>
                <span className="font-medium">Type:</span> {job.type}
              </li>
              <li>
                <span className="font-medium">Openings:</span> {job.openings}
              </li>
            </ul>

            <button
              onClick={() => handleApply(job)}
              className="w-full py-2 bg-[#13274F] text-white rounded-md font-medium hover:bg-opacity-90 transition"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Application Modal */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#13274F]">
                Apply for {selectedJob.title}
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
