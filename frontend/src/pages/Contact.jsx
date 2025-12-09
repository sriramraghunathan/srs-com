// src/pages/Contact.jsx
import React from "react";

function Contact() {
  return (
    <div className="px-6 py-10 md:py-16 bg-gray-100 flex justify-center">
      <div className="w-full max-w-lg bg-white shadow-md rounded-xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm md:text-base">
          Have a requirement or need a custom PC / laptop suggestion? Send us a message.
        </p>

        <form className="space-y-4 text-sm md:text-base">
          <div>
            <label className="block mb-1 text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Message</label>
            <textarea
              rows="4"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us what you need"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
