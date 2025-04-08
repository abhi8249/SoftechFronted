"use client";
import React, { useState } from "react";

export default function Index() {
  const locations = [
    {
      name: "Bhubaneswar",
      address:
        "Plot 731, ShyamPur, Infront of Sum Hospital, Bhubaneswar,odisha,pin-751003",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.3346174034796!2d85.76811608544068!3d20.286412164360236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190803f81ab1f7%3A0x7a9636d00c0cb2d6!2sOdisha%20Institute%20of%20Computer%20Application!5e0!3m2!1sen!2sin!4v1734625937285!5m2!1sen!2sin",
    },
    {
      name: "Sambalpur",
      address:
        "Govind tola Near Rani Sakti mandir, Dhanu pali, Samblapur, Odisha,pin-768001",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.8236615657647!2d83.9836332761424!3d21.436175073659065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a211447caef6dab%3A0xa84df9aa8b7e9648!2sSankar%20Math!5e0!3m2!1sen!2sin!4v1744092525788!5m2!1sen!2sin",
    },
    {
      name: "Anugul",
      address: "At- Bypass road, Talchel town ,Anugul, Odisha,pin-759107",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7452.007933670317!2d85.22284668156468!3d20.95235584294021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a18b5cb1b16da71%3A0x1559a6d1cf1fd7f7!2sTalcher%20Town%2C%20Odisha%20759107!5e0!3m2!1sen!2sin!4v1744092763250!5m2!1sen!2sin",
    },
    {
      name: "Ganjam",
      address: "Khallikote, Ganjam, Odisha,pin-761030",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7516.926686466317!2d85.07734999575477!3d19.607479183573865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a180499b7fc65f3%3A0xc67b64a82a18ca5e!2sKhallikot%2C%20Odisha!5e0!3m2!1sen!2sin!4v1744092814348!5m2!1sen!2sin",
    },
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const [formData, setFormData] = useState({
    name: "",
    street: "",
    city: "",
    postcode: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.example.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit the form");
      alert("Form submitted successfully!");
    } catch (error) {
      alert("Error submitting form: " + error.message);
    }
  };

  return (
    <div className="bg-white min-h-screen py-12 mx-auto w-[90%]">
      <h1 className="text-center text-4xl font-semibold mb-8">Contact Us</h1>

      {/* Location Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {locations.map((loc) => (
          <button
            key={loc.name}
            onClick={() => setSelectedLocation(loc)}
            className={`px-6 py-2 rounded-full text-sm font-medium shadow transition-all ${
              selectedLocation.name === loc.name
                ? "bg-yellow-400 text-black"
                : "bg-gray-200 text-gray-700 hover:bg-yellow-200"
            }`}
          >
            {loc.name}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 items-center overflow-hidden shadow-lg rounded-3xl max-w-6xl mx-auto bg-white">
        {/* Form Section */}
        <div className="p-8 bg-gray-900">
          <h2 className="text-3xl font-bold text-white">
            Get In <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="text-sm text-gray-300 mt-4 leading-relaxed">
            Have a specific inquiry or looking to explore new opportunities? Our
            experienced team is ready to engage with you.
          </p>

          {/* Selected Location Address */}
          <p className="text-sm text-gray-400 mt-2">
            <span className="font-semibold text-yellow-400">Location:</span>{" "}
            {selectedLocation.address}
          </p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4 mt-8">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              />
              <input
                type="text"
                name="street"
                placeholder="Street"
                value={formData.street}
                onChange={handleChange}
                className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              />
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
                />
                <input
                  type="text"
                  name="postcode"
                  placeholder="Postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
                />
              </div>
              <input
                type="number"
                name="phone"
                placeholder="Phone No."
                value={formData.phone}
                onChange={handleChange}
                className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              />
              <textarea
                name="message"
                placeholder="Write Message"
                value={formData.message}
                onChange={handleChange}
                className="px-2 pt-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 tracking-wide text-gray-800 bg-yellow-400 hover:bg-yellow-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 6l10 5v2l-10 5-10-5v-2l10-5zm-10 9v2l10 5 10-5v-2l-10 5-10-5z" />
              </svg>
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="h-full">
          <iframe
            src={selectedLocation.mapSrc}
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-tr-3xl rounded-br-3xl shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
