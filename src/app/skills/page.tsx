"use client";

import dynamic from "next/dynamic";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiCplusplus, SiNextdotjs } from "react-icons/si";
import NavBar from "@/components/NavBar";
import ParticlesBackground from "@/components/ParticlesBackground";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false },
);

export default function Skills() {
  return (
    <div className="flex justify-center items-center h-screen px-6 md:px-12 lg:px-24 relative">
      <NavBar />
      <ParticlesBackground />

      {/* Centered Skills Card */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-transparent backdrop-blur-sm w-[800px] h-[600px] p-10 rounded-3xl shadow-2xl border border-white text-white text-center flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl font-bold mb-6 underline">Skills</h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {[
            { name: "Java", icon: <FaJava size={50} className="text-white" /> },
            {
              name: "C++",
              icon: <SiCplusplus size={50} className="text-white" />,
            },
            {
              name: "Python",
              icon: <FaPython size={50} className="text-white" />,
            },
            {
              name: "HTML5",
              icon: <FaHtml5 size={50} className="text-white" />,
            },
            {
              name: "CSS",
              icon: <FaCss3Alt size={50} className="text-white" />,
            },
            {
              name: "JavaScript",
              icon: <FaJsSquare size={50} className="text-white" />,
            },
            {
              name: "React",
              icon: <FaReact size={50} className="text-white" />,
            },
            {
              name: "Next.js",
              icon: <SiNextdotjs size={50} className="text-white" />,
            },
            {
              name: "Node.js",
              icon: <FaNodeJs size={50} className="text-white" />,
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-4 rounded-xl flex flex-col items-center shadow-lg"
            >
              {skill.icon}
              <p className="text-white text-lg font-semibold mt-2">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </MotionDiv>
    </div>
  );
}
