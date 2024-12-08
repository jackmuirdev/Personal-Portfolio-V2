"use client";

import React, { useState, useEffect } from "react";
import Particle from "./Particle";
import Image from "next/image";
import { motion } from "framer-motion";

const phrases = [
  "Full Stack Developer",
  "Programmer",
  "Web Developer",
  "Software Engineer",
  "Next.js & MERN Specialist",
];

export default function Hero() {
  const [text, setText] = useState(""); // State to store the text being typed
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0); // To track the current phrase
  const [isErasing, setIsErasing] = useState(false); // To track if we are erasing the text

  useEffect(() => {
    let typingTimeout: string | number | NodeJS.Timeout | undefined;
    let erasingTimeout: string | number | NodeJS.Timeout | undefined;

    // Function to type the text
    const typeText = () => {
      if (text.length < phrases[currentPhraseIndex].length) {
        typingTimeout = setTimeout(() => {
          setText(phrases[currentPhraseIndex].substring(0, text.length + 1));
        }, 150); // Adjust typing speed here
      } else {
        // Start erasing the text after typing is complete
        setIsErasing(true);
      }
    };

    // Function to erase the text
    const eraseText = () => {
      if (text.length > 0) {
        erasingTimeout = setTimeout(() => {
          setText(text.substring(0, text.length - 1));
        }, 100); // Adjust erasing speed here
      } else {
        setIsErasing(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Cycle through the phrases
      }
    };

    // Trigger typing or erasing based on the current state
    if (isErasing) {
      eraseText();
    } else {
      typeText();
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
    };
  }, [text, isErasing, currentPhraseIndex]);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center h-screen -mt-4"
    >
      <div className="absolute inset-0 z-0">
        <Particle />
      </div>
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full px-6 max-w-6xl mx-auto z-10">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
            Jack Muir
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
            I am a{" "}
            <span className="text-blue-300 font-semibold">
              {text}
              <span className="animate-blink">|</span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Full Stack Developer passionate about building modern web
            applications and delivering high-quality solutions.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="#contact"
              className="hover:text-white px-12 py-6 border border-blue-300 rounded-lg flex items-center bg-transparent text-white text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl hover:bg-blue-300"
            >
              Get in Touch
            </a>
            <a
              href="/JackMuirCV.pdf"
              target="_blank"
              className="hover:text-white px-12 py-6 border border-blue-300 rounded-lg flex items-center bg-transparent text-white text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl hover:bg-blue-300"
            >
              See My CV
            </a>
          </div>
        </div>
        {/* Interactive Image */}
        <div className="relative z-0 hidden md:block">
          <motion.div
            whileHover={{ scale: 1.2 }} // Pops out when hovered
            className="w-96 h-96 relative group" // Increase size and add group class
          >
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-blue-300 opacity-0 group-hover:opacity-100 group-hover:animate-borderTravel"
              style={{
                borderStyle: "solid",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
              }}
            ></motion.div>
            <Image
              src="/me.png"
              alt="Animated"
              width={768}
              height={768}
              className="w-full h-full object-cover rounded-full -mt-20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
