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
          ? "bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg"
          : "bg-gradient-to-r from-gray-900 to-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        <a
          href="/Personal CV.pdf"
          target="_blank"
          className="hover:text-white px-6 py-3 border border-blue-300 rounded-lg flex items-center bg-transparent text-white text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl hover:bg-blue-300"
        >
          <FontAwesomeIcon icon={faFileAlt} className="mr-2" size="lg" />
          <span>Resume</span>
        </a>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex md:items-center md:space-x-10 absolute top-0 left-0 mt-16 md:relative md:mt-0 w-full md:w-auto bg-gray-800 md:bg-transparent shadow-lg md:shadow-none justify-center`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:gap-10">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="relative group text-white hover:text-blue-300 p-4 md:p-0 text-lg"
            >
              Home
              <span className="absolute left-0 -bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
              className="relative group text-white hover:text-blue-300 p-4 md:p-0 text-lg"
            >
              Skills
              <span className="absolute left-0 -bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              className="relative group text-white hover:text-blue-300 p-4 md:p-0 text-lg"
            >
              Projects
              <span className="absolute left-0 -bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="relative group text-white hover:text-blue-300 p-4 md:p-0 text-lg"
            >
              Contact
              <span className="absolute left-0 -bottom-0 w-full h-0.5 bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </div>
        </div>

        {/* Menu Toggle Button */}
        <button
          className="md:hidden text-3xl text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu Toggle"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/jackmuirdev"
            className="text-white hover:text-blue-300 p-4 text-lg"
            aria-label="GitHub"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              style={{ color: "#fff" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jack-muir-462689281/"
            className="text-white hover:text-blue-300 p-4 text-lg"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              style={{ color: "#00a0dc" }}
            />
          </a>
        </div>
      </div>
    </header>
  );
}
