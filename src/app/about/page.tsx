"use client";

import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
import ParticlesBackground from "@/components/ParticlesBackground";
import Image from "next/image";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false },
);

export default function AboutMe() {
  return (
    <div className="flex justify-center items-center h-screen px-6 md:px-12 lg:px-24 relative">
      <NavBar />
      <ParticlesBackground />

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute max-w-7xl bg-transparent backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white text-white text-center flex flex-col justify-center"
      >
        {/* Profile Picture */}
        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-36 h-36 rounded-full border-4 border-white/50 overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src="/aboutmepic.png"
            alt="Profile Picture"
            width={500}
            height={500}
            priority
          />
        </div>

        <h1 className="text-5xl font-bold mt-14 mb-6">About Me</h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
          Hi! I am <span className="font-semibold">Ryan Stoffel</span>, a
          passionate game developer and computer science major at{" "}
          <span className="font-semibold">California Baptist University</span>.
          I specialize in C++, C#, Java, HTML5, CSS, React, Node.js, and MySQL.
          My passion lies in game development, and I have worked with{" "}
          <span className="font-semibold">Unity</span> to create games like{" "}
          <span className="italic">Lance UP!</span>.
        </p>

        <div className="mt-8 flex justify-center gap-8">
          <a
            href="/projects"
            className="px-8 py-3 text-lg rounded-lg bg-primary hover:-translate-y-1 transition-all duration-300 ease-in-out shadow-md"
          >
            Projects
          </a>
          <a
            href="/contact"
            className="px-8 py-3 text-black text-lg rounded-lg bg-white hover:-translate-y-1 transition-all duration-300 ease-in-out shadow-md"
          >
            Contact
          </a>
        </div>
      </MotionDiv>
    </div>
  );
}
