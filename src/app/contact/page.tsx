"use client";

import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
import ParticlesBackground from "@/components/ParticlesBackground";

// Load Framer Motion dynamically
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false },
);

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col justify-center items-center">
      <NavBar />
      <ParticlesBackground />
      <h1 className="text-4xl font-bold text-center mb-8 mt-16 underline">
        Contact
      </h1>
      <div className="container mx-auto px-4 py-10 flex justify-center items-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl mx-auto bg-transparent backdrop-blur-sm border border-white p-10 rounded-2xl shadow-lg"
        >
          <p className="text-lg text-center mb-4">Feel free to reach out!</p>
          <div className="space-y-6 text-center">
            <p>
              <strong>Email:</strong> ryanstoffel62@icloud.com
            </p>
            <p>
              <strong>Phone:</strong> (714) 322-4245
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/ryan-stoffel"
                className="text-primary hover:underline"
              >
                linkedin.com/in/ryan-stoffel
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://www.github.com/RyanStoffel"
                className="text-primary hover:underline"
              >
                github.com/RyanStoffel
              </a>
            </p>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
