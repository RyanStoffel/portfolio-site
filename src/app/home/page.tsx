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
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <NavBar />
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-20 pt-32 md:py-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 lg:pr-10 mb-12 lg:mb-0"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl mx-auto lg:mx-0"
          >
            <motion.p
              variants={itemVariants}
              className="text-primary font-mono text-lg mb-2"
            >
              Hello, I&aposm
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              Ryan Stoffel
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl text-white/80 mb-6"
            >
              Computer Science Student & Developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-white/70 text-base md:text-lg mb-8 leading-relaxed"
            >
              I%apos;m a passionate student at California Baptist University
              specializing in game development and web technologies. My goal is
              to create interactive experiences that engage and inspire.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link href="/resume.pdf" legacyBehavior>
                <a
                  className="btn btn-primary flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2" size={20} />
                  Download Resume
                </a>
              </Link>

              <Link
                href="/contact"
                className="btn btn-secondary flex items-center"
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
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30">
            <Image
              src="/profilepic.png"
              alt="Ryan Stoffel"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
            />

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-primary/70"
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.div
              className="absolute top-1/2 -right-3 w-4 h-4 rounded-full bg-primary/40"
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="text-primary group flex items-center hover:underline"
            >
              View All Projects
              <ArrowRight
                size={16}
                className="ml-1 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card overflow-hidden group h-full"
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">
                      {project.title}
                    </h3>
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

                <div className="p-4 sm:p-6 flex flex-col h-full">
                  <p className="text-white/70 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="self-start btn btn-primary text-sm flex items-center"
                  >
                    View Project Details
                    <ArrowRight
                      size={16}
                      className="ml-1 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative">
        <div className="absolute inset-0 bg-primary/10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center relative z-10 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            I&apos;m currently looking for internship opportunities and exciting
            projects to collaborate on. If you&apos;re interested in working
            together, feel free to get in touch!
          </p>
          <Link
            href="/contact"
            className="btn btn-primary px-8 py-3 inline-block"
          >
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
