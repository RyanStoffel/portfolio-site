// src/app/projects/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import NavBar from "@/components/NavBar";
import ParticlesBackground from "@/components/ParticlesBackground";
import LoadingSpinner from "@/components/Loading";
import { projects } from "@/data/projects";
import { ProjectType } from "@/components/ProjectCard";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false },
);

const getProjectById = (id: string): ProjectType | undefined => {
  return projects.find((project) => project.id === id);
};

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
            <div className="relative w-full h-96">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-black/60 flex items-end">
                <div className="p-8">
                  <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/20 rounded-full text-sm border border-primary/30"
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
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Project Overview</h2>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
                >
                  <Github size={18} className="mr-2" />
                  View on GitHub
                </a>
              </div>

              <div className="prose prose-invert max-w-none">
                {(project.longDescription || project.description)
                  .split("\n\n")
                  .map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-white/80">
                      {paragraph.trim()}
                    </p>
                  ))}
              </div>
            </div>
          </div>

          {/* Other projects suggestion */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects
                .filter((p) => p.id !== project.id)
                .slice(0, 3)
                .map((relatedProject, index) => (
                  <Link
                    key={relatedProject.id}
                    href={`/projects/${relatedProject.id}`}
                    className="card p-4 hover:border-primary/40 transition-colors"
                  >
                    <div className="relative w-full h-32 mb-3 overflow-hidden rounded-md">
                      <Image
                        src={relatedProject.imageUrl}
                        alt={relatedProject.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h4 className="font-semibold">{relatedProject.title}</h4>
                  </Link>
                ))}
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
