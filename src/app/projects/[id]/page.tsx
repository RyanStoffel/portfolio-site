// src/app/projects/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import NavBar from "@/components/NavBar";
import ParticlesBackground from "@/components/ParticlesBackground";
import LoadingSpinner from "@/components/Loading";
import { getProjectById } from "@/data/projects";
import { ProjectType } from "@/components/ProjectCard";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false },
);

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<ProjectType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const projectData = getProjectById(params.id as string);

      if (projectData) {
        setProject(projectData);
      } else {
        // Handle not found
        router.push("/projects");
      }

      setLoading(false);
    }
  }, [params.id, router]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen text-white">
      <NavBar />
      <ParticlesBackground />

      <div className="container mx-auto px-4 py-24">
        <Link
          href="/projects"
          className="inline-flex items-center text-primary hover:underline mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Projects
        </Link>

        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="card overflow-hidden">
            {/* Project Header */}
            <div className="relative w-full h-80">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-black/50 flex items-end">
                <div className="p-8">
                  <h1 className="text-4xl font-bold">{project.title}</h1>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/20 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>

              <div className="prose prose-invert max-w-none">
                {project.description.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary hover:bg-primary/90 px-6 py-3 rounded-md transition-colors"
                >
                  <Github size={20} className="mr-2" />
                  View GitHub Repository
                </a>

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-black hover:bg-white/90 px-6 py-3 rounded-md transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
