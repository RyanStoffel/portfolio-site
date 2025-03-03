// src/components/ProjectCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Info } from "lucide-react";

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  github: string;
  liveDemo?: string;
  technologies: string[];
  featured?: boolean;
  longDescription?: string;
}

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`card flex flex-col h-full relative overflow-hidden group ${
        project.featured ? "border-primary/50" : ""
      }`}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full z-10">
          Featured
        </div>
      )}

      {/* Project Image with overlay */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-white/70 mb-4 flex-grow line-clamp-3 text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-white/10 rounded-full border border-white/20 hover:bg-primary/20 hover:border-primary/50 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-2 py-1 bg-white/5 rounded-full text-white/50">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-2 gap-2 p-4 pt-0 mt-auto">
        <Link
          href={project.github}
          className="flex items-center justify-center gap-1 bg-black/30 hover:bg-primary text-white px-3 py-2 rounded-md transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} GitHub repository`}
        >
          <Github size={16} />
          <span className="text-sm">View Code</span>
        </Link>

        <Link
          href={`/projects/${project.id}`}
          className="flex items-center justify-center gap-1 bg-black/30 hover:bg-white/10 px-3 py-2 rounded-md transition-colors"
          aria-label={`Learn more about ${project.title}`}
        >
          <Info size={16} />
          <span className="text-sm">Details</span>
        </Link>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 blur-sm group-hover:blur transition-all duration-700 -z-10" />
    </motion.div>
  );
}
