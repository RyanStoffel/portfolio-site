// src/app/about/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import NavBar from "@/components/NavBar";
import ParticlesBackground from "@/components/ParticlesBackground";
import LoadingSpinner from "@/components/Loading";

export default function AboutMe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen">
      <NavBar />
      <ParticlesBackground />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card p-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-primary/20 mx-auto">
                  <Image
                    src="/aboutmepic.png"
                    alt="Ryan Stoffel"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 160px, 192px"
                    priority
                  />
                </div>
              </div>

              <div className="md:w-2/3 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  Ryan Stoffel
                </h1>
                <p className="text-primary mb-4">Computer Science Student</p>
                <p className="text-white/70 mb-4">
                  Computer Science student at California Baptist University with
                  a passion for game development and web technologies.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Link
                    href="/resume.pdf"
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md inline-flex items-center text-sm"
                    target="_blank"
                  >
                    <Download size={16} className="mr-2" />
                    Resume
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-white/10 hover:bg-white/15 text-white px-4 py-2 rounded-md inline-flex items-center text-sm"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>

            <hr className="border-white/10 my-6" />

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-3">About Me</h2>
                <p className="text-white/80 mb-3">
                  Hi there! I'm a passionate Computer Science student deeply
                  interested in software development, with a special focus on
                  game development and creating seamless user experiences.
                </p>
                <p className="text-white/80">
                  My journey into programming began in high school with an intro
                  to video game design course. What started as curiosity has
                  grown into a dedicated pursuit of knowledge in various
                  programming languages and frameworks. When I'm not coding,
                  you'll find me playing video games, hanging out with friends,
                  or exploring nature.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Education</h2>
                <div className="bg-white/5 p-4 rounded-md">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">
                        California Baptist University
                      </h3>
                      <p className="text-white/70 text-sm">
                        B.S. Computer Science
                      </p>
                    </div>
                    <div className="text-sm text-white/60">
                      2023 - 2027 (Expected)
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Key Interests</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white/5 p-3 rounded-md">
                    <h3 className="font-semibold mb-1">Game Development</h3>
                    <p className="text-white/70 text-sm">
                      Building interactive experiences and game mechanics with
                      Unity
                    </p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-md">
                    <h3 className="font-semibold mb-1">Web Development</h3>
                    <p className="text-white/70 text-sm">
                      Creating responsive web applications with React and
                      Next.js
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <Link
                href="/projects"
                className="inline-flex items-center text-primary hover:underline group"
              >
                View my projects
                <ArrowRight
                  size={16}
                  className="ml-1 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
