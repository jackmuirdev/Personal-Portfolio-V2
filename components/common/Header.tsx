"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [hasShadow, setHasShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed w-full py-6 top-0 z-50 transition duration-300 ${
        hasShadow
          ? "bg-[#f2f2f2] shadow-lg" // Light gray for a neutral look
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex md:items-center md:space-x-10 absolute top-0 left-0 mt-16 md:relative md:mt-0 w-full md:w-auto bg-[#f2f2f2] md:bg-transparent shadow-lg md:shadow-none`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:gap-10">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              className="relative group text-gray-800 hover:text-gray-900 p-4 md:p-0"
            >
              Home
              <span className="absolute left-0 -bottom-0 w-full h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              className="relative group text-gray-800 hover:text-gray-900 p-4 md:p-0"
            >
              About
              <span className="absolute left-0 -bottom-0 w-full h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              className="relative group text-gray-800 hover:text-gray-900 p-4 md:p-0"
            >
              Projects
              <span className="absolute left-0 -bottom-0 w-full h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="relative group text-gray-800 hover:text-gray-900 p-4 md:p-0"
            >
              Contact
              <span className="absolute left-0 -bottom-0 w-full h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </div>
        </div>

        {/* Menu Toggle Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/jackmuirdev"
            className="hover:text-gray-700 p-4"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              style={{ color: "#333" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jack-muir-462689281/"
            className="hover:text-gray-700 p-4"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              style={{ color: "#0077b5" }}
            />
          </a>
          <a
            href="/Jack Muir CV.pdf"
            target="_blank"
            className="hover:text-gray-400 px-4 py-2 border border-gray-700 rounded-lg flex items-center bg-blue-600 text-white"
          >
            <FontAwesomeIcon icon={faFileAlt} className="mr-2" size="lg" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
