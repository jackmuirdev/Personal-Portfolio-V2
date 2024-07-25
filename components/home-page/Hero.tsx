import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center h-screen bg-transparent">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 opacity-20"
          width="400"
          height="400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="200" fill="#e0f7fa" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 mb-4 leading-tight">
          Jack Muir
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 mb-4">
          Full Stack Developer
        </p>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          I am a full stack developer with a passion for building innovative web
          applications using the MERN Stack & Next.js.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="/Jack Muir CV.pdf"
            target="_blank"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 transform hover:scale-105"
          >
            See My CV
          </a>
        </div>
      </div>
    </section>
  );
}
