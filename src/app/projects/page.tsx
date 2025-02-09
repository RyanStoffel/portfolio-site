"use client";

import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
import ParticlesBackground from "@/components/ParticlesBackground";
import Image from "next/image";
import Link from "next/link";

// Load Framer Motion dynamically
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false },
);

const projects = [
  {
    title: "Baby Names",
    description:
      "A program that ranks the popularity of a certain name by decade. Made with Java.",
    imageUrl: "/project1.png", // Replace with actual image URL
    github:
      "https://github.com/egr222-software-engineering-fall-2024/hw3-RyanStoffel",
  },
  {
    title: "Snake",
    description:
      "The classic Snake Game, keeps track of score, random apple position. Made with Java, and SwingUI.",
    imageUrl: "/project2.png",
    github: "https://github.com/RyanStoffel/SnakeGameJava",
  },
  {
    title: "Singly Linked List Demo",
    description:
      "A program that demonstrates all the operations available with a Singly Linked List. Made with C++.",
    imageUrl: "/project3.png",
    github: "https://github.com/RyanStoffel/EGR227-Lab3",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <NavBar />
      <ParticlesBackground />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8 mt-16 underline">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
          {projects.map((project, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.6 }}
              className="bg-transparent backdrop-blur-sm border border-white p-6 rounded-2xl shadow-lg flex flex-col h-[600px]"
            >
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex justify-center mt-auto">
                <Link href={project.github} legacyBehavior>
                  <a className="bg-primary px-4 py-2 rounded-md text-white hover:-translate-y-1 transition-all duration-300 ease-in-out">
                    GitHub
                  </a>
                </Link>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
}
