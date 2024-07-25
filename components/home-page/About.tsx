import React from 'react';
import { BiLogoPostgresql } from 'react-icons/bi';
import { FaReact, FaNode, FaJsSquare, FaHtml5, FaCss3Alt, FaPython, FaGit, FaNpm } from 'react-icons/fa';
import { SiMongodb, SiDotnet, SiNextdotjs, SiTypescript } from 'react-icons/si';

export default function About() {
  return (
    <section id="about" className="container mx-auto mb-52">
      <div className="flex flex-wrap gap-10 justify-center">
        {/* Skill Bubble 1: Web Development */}
        <div className="flex flex-col items-center bg-blue-100 p-12 rounded-full shadow-lg w-96 h-96 justify-center text-center">
          <div className="text-5xl mb-4">🌐</div>
          <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-700 text-center text-md">
            Creating engaging and functional websites and web applications using full stack development technologies.
          </p>
        </div>

        {/* Skill Bubble 2: Problem Solving */}
        <div className="flex flex-col items-center bg-green-100 p-12 rounded-full shadow-lg w-96 h-96 justify-center text-center">
          <div className="text-5xl mb-4">🧩</div>
          <h3 className="text-2xl font-semibold mb-2">Problem Solving</h3>
          <p className="text-gray-700 text-center text-md">
            Applying critical thinking and creativity to address and resolve complex challenges efficiently.
          </p>
        </div>

        {/* Skill Bubble 3: Project Management */}
        <div className="flex flex-col items-center bg-yellow-100 p-12 rounded-full shadow-lg w-96 h-96 justify-center text-center">
          <div className="text-5xl mb-4">📈</div>
          <h3 className="text-2xl font-semibold mb-2">Project Management</h3>
          <p className="text-gray-700 text-center text-md">
            Overseeing projects from inception to completion, ensuring timely delivery and effective coordination.
          </p>
        </div>
      </div>

      {/* Tech Stack Icons Section */}
      <div className="mt-16 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-10 text-7xl">
          {/* Tech stack icons */}
          <FaReact className="text-blue-500" title="React" />
          <FaNode className="text-green-500" title="Node.js" />
          <FaJsSquare className="text-yellow-500" title="JavaScript" />
          <FaHtml5 className="text-orange-500" title="HTML5" />
          <FaCss3Alt className="text-blue-600" title="CSS3" />
          <SiTypescript className="text-blue-500" title="TypeScript" />
          <FaPython className="text-yellow-400" title="Python" />
          <FaGit className="text-red-600" title="Git" />
          <FaNpm className="text-orange-500" title="npm" />
          <SiMongodb className="text-green-600" title="MongoDB" />
          <SiDotnet className="text-blue-500" title=".NET" />
          <SiNextdotjs title="Next JS" />
          <BiLogoPostgresql className="text-blue-500" title="PostgreSQL" />
        </div>
      </div>
    </section>
  );
}
