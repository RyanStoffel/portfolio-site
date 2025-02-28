// src/app/projects/page.tsx
"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
import ParticlesBackground from "@/components/ParticlesBackground";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import LoadingSpinner from "@/components/Loading";

// Load Framer Motion dynamically
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false },
);

// Get unique technologies across all projects
const allTechnologies = Array.from(
  new Set(projects.flatMap((project) => project.technologies)),
).sort();

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedTech) {
      setFilteredProjects(
        projects.filter((project) =>
          project.technologies.includes(selectedTech),
        ),
      );
    } else {
      setFilteredProjects(projects);
    }
  }, [selectedTech]);

  if (!mounted) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-transparent text-white">
      <NavBar />
      <ParticlesBackground />
      <div className="container mx-auto px-4 py-24">
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-6">My Projects</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Here are some of the projects I've worked on. You can filter them by
            technology or click on any project to see more details.
          </p>

          {/* Technology filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-6 mb-8">
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTech === null
                  ? "bg-primary text-white"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              All
            </button>

            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTech === tech
                    ? "bg-primary text-white"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </MotionDiv>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p>No projects found with the selected technology.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
