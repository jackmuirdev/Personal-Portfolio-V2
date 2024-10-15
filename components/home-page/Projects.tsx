import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNode,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGit,
  FaNpm,
} from "react-icons/fa";
import { SiMongodb, SiDotnet, SiNextdotjs, SiTypescript } from "react-icons/si";
import Image from "next/image";
import { BiLogoPostgresql } from "react-icons/bi";

// Personal Projects
const projects = [
  {
    title: "OnLibrary",
    description:
      "A group university project that allows you to download pdfs for books.",
    image: "/onlibrary.png",
    techStack: ["react", "typescript", "css3", "dotnet", "postgresql"],
    githubLink: "https://github.com/jackmuirdev/OnLibrary",
    liveLink: "https://onlibrary.fly.dev/",
  },
  {
    title: "The Kellen Collection",
    description:
      "An ecommerce website for a dance clothing brand to promote, sell and ship their products.",
    image: "/kellenwebsite.png",
    techStack: ["react", "node", "mongodb", "javascript", "css3"],
    githubLink: "https://github.com/jackmuirdev/thekellencollection",
    liveLink: "https://thekellencollection2-0.onrender.com/",
  },
  {
    title: "Mixer",
    description:
      "An ecommerce website for a bar to promote, order drinks and pay online to your table.",
    image: "/mixer.png",
    techStack: ["react", "typescript", "css3", "dotnet", "postgresql"],
    githubLink: "https://github.com/jackmuirdev/barmenu",
    liveLink: "https://barproject.fly.dev/",
  },
  {
    title: "Inflation Predictor",
    description:
      "A machine learning project that has a trained model from 30+ years of data and predicts 2024 inflation rates.",
    image: "/inflationprediction.png",
    techStack: ["python"],
    githubLink: "https://github.com/jackmuirdev/inflation-predictor",
  },
];

// Freelance Projects
const freelanceProjects = [
  {
    title: "TicketStream",
    description:
      "A SaaS project that allows you to create, manage and sell tickets for events.",
    image: "/ticketstream.png",
    techStack: ["nextjs", "react", "typescript", "mongodb", "css3"],
    liveLink: "https://www.ticketstream.co/",
  },
  {
    title: "Studio 6 Till",
    description:
      "A till system built for Studio 6 bar to take orders and payments. Other features include login auth, realtime updates and table service.",
    image: "/tillsystem.png",
    techStack: ["react", "typescript", "mongodb", "css3", "node"],
  },
  {
    title: "MEPA Portal",
    description:
      "A school information management system that stores student and staff data, timetables, safeguarding, sen and more. Other features include login auth with 2FA, email notifications and CRUD operations.",
    image: "/mepa.jpg",
    techStack: ["nextjs", "react", "typescript", "mongodb", "node"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>

      {/* Personal Projects */}
      <h3 className="text-2xl font-bold mb-4 text-center">Personal Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="border-2 border-black rounded-lg overflow-hidden mb-6">
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover"
                width={10000}
                height={10000}
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">
              {project.title}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 px-4 text-center">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-5 mb-6">
              {project.techStack.map((tech, i) => (
                <span key={i} className="text-6xl">
                  {tech === "react" && (
                    <FaReact className="text-blue-500" title="React" />
                  )}
                  {tech === "node" && (
                    <FaNode className="text-green-500" title="Node.js" />
                  )}
                  {tech === "mongodb" && (
                    <SiMongodb className="text-green-600" title="MongoDB" />
                  )}
                  {tech === "html5" && (
                    <FaHtml5 className="text-orange-500" title="HTML5" />
                  )}
                  {tech === "css3" && (
                    <FaCss3Alt className="text-blue-600" title="CSS3" />
                  )}
                  {tech === "javascript" && (
                    <FaJsSquare
                      className="text-yellow-500"
                      title="JavaScript"
                    />
                  )}
                  {tech === "python" && (
                    <FaPython className="text-yellow-400" title="Python" />
                  )}
                  {tech === "git" && (
                    <FaGit className="text-red-600" title="Git" />
                  )}
                  {tech === "npm" && (
                    <FaNpm className="text-orange-500" title="npm" />
                  )}
                  {tech === "dotnet" && (
                    <SiDotnet className="text-blue-500" title=".NET" />
                  )}
                  {tech === "nextjs" && <SiNextdotjs title="Next.js" />}
                  {tech === "postgresql" && (
                    <BiLogoPostgresql
                      className="text-blue-500"
                      title="PostgreSQL"
                    />
                  )}
                  {tech === "typescript" && (
                    <SiTypescript
                      className="text-blue-500"
                      title="TypeScript"
                    />
                  )}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-5">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Freelance Projects */}
      <h3 className="text-2xl font-bold mt-12 mb-4 text-center">
        Freelance Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {freelanceProjects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="border-2 border-black rounded-lg overflow-hidden mb-6">
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover"
                width={10000}
                height={10000}
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">
              {project.title}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 px-4 text-center">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-5 mb-6">
              {project.techStack.map((tech, i) => (
                <span key={i} className="text-6xl">
                  {tech === "react" && (
                    <FaReact className="text-blue-500" title="React" />
                  )}
                  {tech === "node" && (
                    <FaNode className="text-green-500" title="Node.js" />
                  )}
                  {tech === "mongodb" && (
                    <SiMongodb className="text-green-600" title="MongoDB" />
                  )}
                  {tech === "html5" && (
                    <FaHtml5 className="text-orange-500" title="HTML5" />
                  )}
                  {tech === "css3" && (
                    <FaCss3Alt className="text-blue-600" title="CSS3" />
                  )}
                  {tech === "javascript" && (
                    <FaJsSquare
                      className="text-yellow-500"
                      title="JavaScript"
                    />
                  )}
                  {tech === "python" && (
                    <FaPython className="text-yellow-400" title="Python" />
                  )}
                  {tech === "git" && (
                    <FaGit className="text-red-600" title="Git" />
                  )}
                  {tech === "npm" && (
                    <FaNpm className="text-orange-500" title="npm" />
                  )}
                  {tech === "dotnet" && (
                    <SiDotnet className="text-blue-500" title=".NET" />
                  )}
                  {tech === "nextjs" && <SiNextdotjs title="Next.js" />}
                  {tech === "postgresql" && (
                    <BiLogoPostgresql
                      className="text-blue-500"
                      title="PostgreSQL"
                    />
                  )}
                  {tech === "typescript" && (
                    <SiTypescript
                      className="text-blue-500"
                      title="TypeScript"
                    />
                  )}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-5">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
