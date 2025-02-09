"use client";

import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
import ParticlesBackground from "@/components/ParticlesBackground";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false },
);

export default function Education() {
  return (
    <div className="flex justify-center items-center h-screen px-6 md:px-12 lg:px-24 relative">
      <NavBar />
      <ParticlesBackground />

      {/* Centered Cards Container */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        {/* Education Card */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-transparent backdrop-blur-sm w-[500px] h-[600px] p-6 rounded-3xl shadow-2xl border border-white text-white text-center flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl font-bold mb-4 underline">Education</h1>

          {/* Education Timeline */}
          <div className="text-md leading-relaxed space-y-3">
            <div>
              <h2 className="text-xl font-semibold">
                California Baptist University
              </h2>
              <p className="text-white/70 text-sm">B.S. in Computer Science</p>
              <p className="text-white/70 text-sm">GPA: 3.1</p>
              <p className="text-white/50 text-sm">2023 - Present</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Centennial High School</h2>
              <p className="text-white/70 text-sm">High School Diploma</p>
              <p className="text-white/70 text-sm">GPA: 3.8</p>
              <p className="text-white/50 text-sm">2019 - 2023</p>
            </div>
          </div>
        </MotionDiv>

        {/* Notable Courses Card */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-transparent backdrop-blur-sm w-[500px] h-[600px] p-6 rounded-3xl shadow-2xl border border-white text-white text-center flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl font-bold mb-4 underline">Notable Courses</h1>

          {/* List of Courses */}
          <div className="text-md leading-relaxed space-y-2">
            <div>
              <h2 className="text-xl font-semibold">Software Engineering</h2>
              <p className="text-white/70 text-sm">
                Java, Object Oriented Programming, Project Development.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Discrete Structures</h2>
              <p className="text-white/70 text-sm">
                Computer Logic, Building Blocks for Programming.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Intro to C++</h2>
              <p className="text-white/70 text-sm">
                Variables, For Loops, Classes, The basics of C++.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Data Structures</h2>
              <p className="text-white/70 text-sm">
                ADTs, Algorithms, Building your own ADT.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">OS & Networking</h2>
              <p className="text-white/70 text-sm">
                Modify different OS, Scan Networks, Find vulnerabilities.
              </p>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
