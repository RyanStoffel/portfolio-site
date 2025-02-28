// src/app/about/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Gamepad, Coffee, Book, Download } from "lucide-react";
import NavBar from "@/components/NavBar";
import ParticlesBackground from "@/components/ParticlesBackground";
import LoadingSpinner from "@/components/Loading";

export default function AboutMe() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

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
        staggerChildren: 0.1,
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

  const tabData = {
    about: {
      content: (
        <>
          <p className="mb-4">
            Hi there! I'm{" "}
            <span className="text-primary font-semibold">Ryan Stoffel</span>, a
            passionate Computer Science student at California Baptist
            University. I'm deeply interested in software development, with a
            special focus on game development and creating seamless user
            experiences.
          </p>
          <p className="mb-4">
            My journey into the world of programming began in high school when I
            first discovered the power of code. What started as simple curiosity
            has grown into a dedicated pursuit of knowledge and skills in
            various programming languages and frameworks.
          </p>
          <p className="mb-4">
            Currently, I'm focusing on building projects that challenge me and
            expand my skill set. I enjoy working with C++, Java, Python, and web
            technologies like React and Next.js. I'm particularly passionate
            about game development and have worked with Unity to create
            interactive experiences.
          </p>
          <p>
            When I'm not coding, you'll find me playing video games, hanging out
            with friends and family, or spending time in nature. I believe in
            continuous learning and am always looking for new challenges that
            push my abilities further.
          </p>
        </>
      ),
    },
    interests: {
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="bg-primary/20 p-2 rounded-md mr-3">
                <Gamepad className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Game Development</h3>
            </div>
            <p className="text-white/70">
              Creating interactive experiences through game development is my
              passion. I enjoy building game mechanics and designing engaging
              user interactions.
            </p>
          </div>

          <div className="bg-white/5 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="bg-primary/20 p-2 rounded-md mr-3">
                <Code className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Software Engineering</h3>
            </div>
            <p className="text-white/70">
              I'm fascinated by the architecture of complex systems and enjoy
              solving challenging technical problems through elegant code
              solutions.
            </p>
          </div>

          <div className="bg-white/5 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="bg-primary/20 p-2 rounded-md mr-3">
                <Book className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Continuous Learning</h3>
            </div>
            <p className="text-white/70">
              Technology evolves rapidly, and I'm committed to staying updated
              with the latest developments through courses, documentation, and
              hands-on projects.
            </p>
          </div>

          <div className="bg-white/5 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="bg-primary/20 p-2 rounded-md mr-3">
                <Coffee className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">UI/UX Design</h3>
            </div>
            <p className="text-white/70">
              I believe great software needs both solid functionality and
              intuitive interfaces. I enjoy creating clean, user-friendly
              experiences.
            </p>
          </div>
        </div>
      ),
    },
    journey: {
      content: (
        <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary/50">
          {[
            {
              year: "2019",
              title: "First Line of Code",
              description:
                "I took Intro to Video Game Design in high school, and wrote my first couple games in Unity!",
            },
            {
              year: "2021",
              title: "High School Programming Course",
              description:
                "Took my first formal programming class, learning the fundamentals of Java and computer science.",
            },
            {
              year: "2023",
              title: "Enrolled at California Baptist University",
              description:
                "Started my Computer Science degree, diving deeper into programming concepts and software development.",
            },
            {
              year: "2023",
              title: "First Game Project",
              description:
                "Developed my first game using Unity, discovering my passion for game development.",
            },
            {
              year: "2024",
              title: "Web Development Portfolio",
              description:
                "Created this portfolio website using Next.js, React, and TypeScript to showcase my projects and skills.",
            },
          ].map((item, index) => (
            <div key={index} className="mb-8 relative">
              <div className="absolute -left-10 w-5 h-5 rounded-full bg-primary" />
              <div className="text-sm text-primary font-mono mb-1">
                {item.year}
              </div>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      ),
    },
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <ParticlesBackground />

      <div className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Profile Image & Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/3"
            >
              <div className="card p-6 sticky top-24">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 border-2 border-primary/30">
                  <Image
                    src="/aboutmepic.png"
                    alt="Ryan Stoffel"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>

                <h2 className="text-2xl font-bold mb-2">Ryan Stoffel</h2>
                <p className="text-primary font-mono mb-4">
                  Computer Science Student
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <div className="w-24 text-white/60">Location:</div>
                    <div>Riverside, CA</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 text-white/60">Education:</div>
                    <div>California Baptist University</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 text-white/60">Degree:</div>
                    <div>B.S. Computer Science</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 text-white/60">Expected:</div>
                    <div>2027</div>
                  </div>
                </div>

                <Link href="/resume.pdf" legacyBehavior>
                  <a
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-lg transition-all w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download size={18} />
                    Download Resume
                  </a>
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-2/3"
            >
              <div className="card p-8">
                <h1 className="text-4xl font-bold mb-6">About Me</h1>

                {/* Tabs */}
                <div className="flex border-b border-white/20 mb-6">
                  {["about", "interests", "journey"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-3 font-medium text-sm transition-colors relative ${
                        activeTab === tab
                          ? "text-primary"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}

                      {activeTab === tab && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="prose prose-lg prose-invert max-w-none"
                >
                  {tabData[activeTab as keyof typeof tabData].content}
                </motion.div>
              </div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 card p-6 flex flex-col sm:flex-row items-center gap-6"
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">
                    Want to work together?
                  </h3>
                  <p className="text-white/70">
                    I'm always open to discussing new projects, opportunities,
                    or collaborations.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all whitespace-nowrap"
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
