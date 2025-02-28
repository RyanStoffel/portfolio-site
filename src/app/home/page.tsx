// src/app/home/page.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import NavBar from "@/components/NavBar";
import ParticlesBackground from "@/components/ParticlesBackground";
import LoadingSpinner from "@/components/Loading";
import { projects } from "@/data/projects";

// Filter featured projects
const featuredProjects = projects
  .filter((project) => project.featured)
  .slice(0, 2);

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoadingSpinner />;
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-16 md:py-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 md:pr-10 mb-10 md:mb-0"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.p
              variants={itemVariants}
              className="text-primary font-mono text-lg mb-2"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              Ryan Stoffel
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl text-white/80 mb-6"
            >
              Computer Science Student & Developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-white/70 text-lg mb-8 leading-relaxed"
            >
              I'm a passionate student at California Baptist University
              specializing in game development and web technologies. My goal is
              to create interactive experiences that engage and inspire.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link href="/resume.pdf" legacyBehavior>
                <a
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg flex items-center transition-all hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2" size={20} />
                  Download Resume
                </a>
              </Link>

              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg flex items-center transition-all hover:-translate-y-1"
              >
                <Mail className="mr-2" size={20} />
                Contact Me
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/ryan-stoffel"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 hover:scale-110 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="https://www.github.com/RyanStoffel"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 hover:scale-110 transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={22} />
              </a>

              <a
                href="https://www.instagram.com/r.stoffel.62/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 hover:scale-110 transition-all"
                aria-label="Instagram Profile"
              >
                <Instagram size={22} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30">
            <Image
              src="/profilepic.png"
              alt="Ryan Stoffel"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 288px, 384px"
            />

            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-primary/70" />
            <div className="absolute top-1/2 -right-3 w-4 h-4 rounded-full bg-primary/40" />
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link
              href="/projects"
              className="text-primary flex items-center hover:underline"
            >
              View All Projects
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-white/10 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col">
                  <p className="text-white/70 mb-4">{project.description}</p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="self-start bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-all hover:-translate-y-1 text-sm flex items-center"
                  >
                    View Project Details
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-12 lg:px-20 relative">
        <div className="absolute inset-0 bg-primary/10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            I'm currently looking for internship opportunities and exciting
            projects to collaborate on. If you're interested in working
            together, feel free to get in touch!
          </p>
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg inline-block transition-all hover:-translate-y-1"
          >
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
