"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center py-16 text-white px-6"
    >
      <h2 className="text-4xl font-bold text-center text-white mb-4">
        Contact Me
      </h2>
      <p className="text-lg text-center px-8 text-gray-300 mb-8">
        If you’d like to get in touch, feel free to reach out via email or
        connect with me on LinkedIn.
      </p>

      {/* Contact Form */}
      <motion.form
        action="https://formspree.io/f/xoqgjklr"
        method="POST"
        className="bg-gray-700 p-8 rounded-lg shadow-2xl mt-8 max-w-lg w-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-lg font-semibold text-gray-300 mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 bg-gray-800 text-gray-300 border-2 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-lg font-semibold text-gray-300 mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-gray-800 text-gray-300 border-2 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-lg font-semibold text-gray-300 mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-4 py-2 bg-gray-800 text-gray-300 border-2 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          className="hover:text-white w-full py-3 border font-semibold border-blue-300 rounded-lg bg-transparent text-white text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl hover:bg-blue-300"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
