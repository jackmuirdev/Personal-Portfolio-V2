"use client";

import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaReact,
  FaNode,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiDotnet,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiExpress,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center py-16 text-white px-44"
    >
      <h2 className="text-4xl font-bold mb-4">Skills</h2>
      <p className="text-lg text-center px-8">
        Here are some of the technologies and frameworks I have experience with.
      </p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 px-4 md:px-8 overflow-hidden">
        {/* Frontend Tech Card */}
        <motion.div
          className="p-8 bg-gray-800 rounded-lg border-2 border-blue-500 hover:scale-105 hover:shadow-xl h-auto w-full"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl text-blue-500 mb-6">Frontend</h3>
          <div className="text-4xl md:text-6xl flex flex-wrap justify-center gap-4 md:gap-8 text-gray-300">
            <motion.div
              className="flex items-center gap-2 hover:scale-125 text-orange-500 py-2 px-4 rounded-full border-2 border-orange-500 shadow-lg"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <FaHtml5 title="HTML5" className="text-5xl" />
              <span className="text-sm">HTML5</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 hover:scale-125 text-blue-600 py-2 px-4 rounded-full border-2 border-blue-600 shadow-lg"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <FaCss3Alt title="CSS3" className="text-5xl" />
              <span className="text-sm">CSS3</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 hover:scale-125 text-teal-400 py-2 px-4 rounded-full border-2 border-teal-400 shadow-lg"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <SiTailwindcss title="Tailwind CSS" className="text-5xl" />
              <span className="text-sm">Tailwind CSS</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 hover:scale-125 text-yellow-500 py-2 px-4 rounded-full border-2 border-yellow-500 shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <FaJsSquare title="JavaScript" className="text-5xl" />
              <span className="text-sm">JavaScript</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 hover:scale-125 text-blue-500 py-2 px-4 rounded-full border-2 border-blue-500 shadow-lg"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <SiTypescript title="TypeScript" className="text-[40px]" />
              <span className="text-sm">TypeScript</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Backend Tech Card */}
        <motion.div
          className="p-8 bg-gray-800 rounded-lg border-2 border-green-500 hover:scale-105 hover:shadow-xl h-auto w-full"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl text-green-500 mb-6">Backend</h3>
          <div className="text-4xl md:text-6xl flex flex-wrap justify-center gap-4 md:gap-8 text-gray-300">
            <motion.div
              className="flex items-center gap-2 hover:scale-125 text-green-500 py-2 px-4 rounded-full border-2 border-green-500 shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <FaNode title="Node.js" className="text-5xl" />
              <span className="text-sm">Node.js</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 hover:scale-125 text-blue-500 py-2 px-4 rounded-full border-2 border-blue-500 shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <SiDotnet title=".NET" className="text-5xl" />
              <span className="text-sm">.NET</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Database Tech Card */}
        <motion.div
          className="p-8 bg-gray-800 rounded-lg border-2 border-yellow-500 hover:scale-105 hover:shadow-xl h-auto w-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl text-yellow-500 mb-6">Database</h3>
          <div className="text-4xl md:text-6xl flex flex-wrap justify-center gap-4 md:gap-8 text-gray-300">
            <motion.div
              className="flex items-center gap-2 hover:scale-125 text-green-500 py-2 px-4 rounded-full border-2 border-green-500 shadow-lg"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <SiMongodb title="MongoDB" className="text-5xl" />
              <span className="text-sm">MongoDB</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 hover:scale-125 text-blue-500 py-2 px-4 rounded-full border-2 border-blue-500 shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <BiLogoPostgresql title="PostgreSQL" className="text-5xl" />
              <span className="text-sm">PostgreSQL</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 hover:scale-125 text-green-500 py-2 px-4 rounded-full border-2 border-green-500 shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <SiSupabase title="Supabase" className="text-5xl" />
              <span className="text-sm">Supabase</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Frameworks Tech Card */}
        <motion.div
          className="p-8 bg-gray-800 rounded-lg border-2 border-red-600 hover:scale-105 hover:shadow-xl h-auto w-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl text-red-600 mb-6">Frameworks</h3>
          <div className="text-4xl md:text-6xl flex flex-wrap justify-center gap-4 md:gap-8 text-gray-300">
            <motion.div
              className="flex items-center gap-2 hover:scale-105 text-white py-2 px-4 rounded-full border-2 border-white shadow-lg"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <SiNextdotjs title="Next.js" className="text-5xl" />
              <span className="text-sm">Next.js</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 hover:scale-125 text-blue-300 py-2 px-4 rounded-full border-2 border-blue-300 shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <FaReact title="React" className="text-5xl" />
              <span className="text-sm">React</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 hover:scale-125 text-white py-2 px-4 rounded-full border-2 border-white shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <SiExpress title="Express.js" className="text-5xl" />
              <span className="text-sm">Express.js</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
