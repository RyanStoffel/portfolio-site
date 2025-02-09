"use client";

import NavBar from "@/components/NavBar";
import ParticlesBackground from "@/components/ParticlesBackground";
import Link from "next/link";
import { Instagram, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Framer Motion to prevent SSR issues
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false },
);

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch in Next.js

  return (
    <div>
      <NavBar />
      <ParticlesBackground />
      <main>
        {/* Hero Section */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="min-h-screen flex items-center justify-center text-center"
        >
          {/* Hero Text */}
          <MotionDiv
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-[104px] top-[200px] w-[461px] h-[368.83] flex items-center justify-center"
          >
            <div className="relative flex-col justify-center items-center inline-flex">
              <div className="text-center text-white text-4xl font-jetbrains py-2">
                Hello I am
              </div>
              <div className="text-center text-white text-6xl font-jetbrains pb-4">
                Ryan Stoffel
              </div>
              <div className="text-center text-white text-3xl font-jetbrains">
                Computer Science Student
              </div>
            </div>
          </MotionDiv>

          {/* Download Resume Button */}
          <MotionDiv
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
            whileHover={{ scale: 1.25, transition: { duration: 0.1 } }}
            whileTap={{ scale: 1 }}
            className="absolute left-[104px] top-[500px] w-[210px] h-[108] bg-primary border rounded-lg border-primary flex flex-col items-center justify-center"
          >
            <Link
              className="text-white text-2xl font-jetbrains"
              href="/resume.pdf"
            >
              Download <br /> Resume
            </Link>
          </MotionDiv>

          {/* Contact Info Button */}
          <MotionDiv
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
            whileHover={{ scale: 1.25, transition: { duration: 0.1 } }}
            whileTap={{ scale: 1 }}
            className="absolute left-[355px] top-[500px] w-[210px] h-[108] bg-white border rounded-lg border-white flex flex-col items-center justify-center"
          >
            <Link
              className="text-black text-2xl font-jetbrains"
              href="/contact"
            >
              Contact <br /> Info
            </Link>
          </MotionDiv>

          {/* Social Media Icons */}
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute left-[177.22px] top-[640px] w-[300px] h-[55px] flex flex-row items-center justify-center"
          >
            <Link
              href="https://www.instagram.com/r.stoffel.62/"
              className="hover:scale-125 transition-all duration-300 ease-in-out"
            >
              <Instagram className="w-[50px] h-[50px] mx-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ryan-stoffel"
              className="hover:scale-125 transition-all duration-300 ease-in-out"
            >
              <Linkedin className="w-[50px] h-[50px] mx-6" />
            </Link>
            <Link
              href="https://www.github.com/RyanStoffel"
              className="hover:scale-125 transition-all duration-300 ease-in-out"
            >
              <Github className="w-[50px] h-[50px] mx-6" />
            </Link>
          </MotionDiv>

          {/* Profile Picture Animation */}
          <MotionDiv
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute right-[200px] top-[188px] w-[500px] h-[500px] flex items-center justify-center"
          >
            <img src="/profilepic.png" alt="profilepic" />
          </MotionDiv>
        </MotionDiv>
      </main>
    </div>
  );
}
