// src/app/education/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Code,
  Award,
  Calendar,
  MapPin,
  Briefcase,
} from "lucide-react";
import NavBar from "@/components/NavBar";
import ParticlesBackground from "@/components/ParticlesBackground";
import LoadingSpinner from "@/components/Loading";
import Link from "next/link";

export default function Education() {
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

  // Education data
  const education = [
    {
      institution: "California Baptist University",
      degree: "B.S. in Computer Science",
      period: "2023 - Present",
      location: "Riverside, CA",
      gpa: "3.1",
      icon: <GraduationCap className="text-primary" size={24} />,
      description:
        "Pursuing a comprehensive computer science curriculum with focus on software engineering, algorithms, and data structures. Actively involved in programming competitions and tech clubs.",
    },
    {
      institution: "Centennial High School",
      degree: "High School Diploma",
      period: "2019 - 2023",
      location: "Corona, CA",
      gpa: "3.8",
      icon: <BookOpen className="text-primary" size={24} />,
      description:
        "Completed advanced placement courses in Computer Science, Mathematics, and Physics. Participated in robotics club and coding competitions.",
    },
  ];

  // Courses data
  const courses = [
    {
      title: "Software Engineering",
      skills: ["Java", "Object-Oriented Programming", "Design Patterns"],
      description:
        "Learned the software development life cycle, focusing on object-oriented design principles and implementation in Java. Collaborated on team projects using version control systems.",
    },
    {
      title: "Data Structures",
      skills: ["Algorithms", "C++", "Problem Solving"],
      description:
        "Implemented various data structures including linked lists, trees, graphs, and hash tables. Analyzed algorithm complexity and optimized solutions for efficiency.",
    },
    {
      title: "Discrete Structures",
      skills: ["Logic", "Set Theory", "Graph Theory"],
      description:
        "Studied mathematical foundations of computer science, including logic, set theory, combinatorics, and graph theory. Applied concepts to solve computational problems.",
    },
    {
      title: "Introduction to C++",
      skills: ["C++", "Memory Management", "Programming Fundamentals"],
      description:
        "Developed strong programming fundamentals using C++, including memory management, pointers, and object-oriented principles. Created console applications to solve real-world problems.",
    },
    {
      title: "OS & Networking",
      skills: ["Linux", "Network Protocols", "System Administration"],
      description:
        "Explored operating system concepts and network protocols. Gained hands-on experience with Linux systems, network configuration, and security principles.",
    },
    {
      title: "Web Development",
      skills: ["HTML/CSS", "JavaScript", "React"],
      description:
        "Designed and developed responsive web applications using modern frameworks. Implemented front-end interfaces with React and connected to back-end services.",
    },
  ];

  // Certifications data
  const certifications = [
    {
      title: "Python Data Structures & Algorithms",
      issuer: "Coursera",
      date: "2023",
      link: "#",
    },
    {
      title: "Web Development Fundamentals",
      issuer: "freeCodeCamp",
      date: "2022",
      link: "#",
    },
    {
      title: "Introduction to Game Development",
      issuer: "Unity Learn",
      date: "2023",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <ParticlesBackground />

      <div className="container mx-auto px-4 md:px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-6">Education & Skills</h1>
          <p className="text-lg max-w-2xl mx-auto">
            My academic journey and the key courses that have shaped my skills
            and knowledge in computer science.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Education History */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="card p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <GraduationCap className="mr-2 text-primary" />
                  Education
                </h2>

                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 p-4 rounded-lg border border-white/10"
                    >
                      <div className="flex items-start">
                        <div className="bg-white/10 p-2 rounded-lg mr-3">
                          {edu.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">
                            {edu.institution}
                          </h3>
                          <p className="text-primary font-mono text-sm">
                            {edu.degree}
                          </p>

                          <div className="mt-2 space-y-1 text-sm text-white/70">
                            <div className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              <span>{edu.period}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin size={14} className="mr-1" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Award size={14} className="mr-1" />
                              <span>GPA: {edu.gpa}</span>
                            </div>
                          </div>

                          <p className="mt-3 text-sm">{edu.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Certifications */}
                <h3 className="text-xl font-bold mt-8 mb-4 flex items-center">
                  <Award className="mr-2 text-primary" size={20} />
                  Certifications
                </h3>

                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <div>
                        <h4 className="font-medium">{cert.title}</h4>
                        <p className="text-sm text-white/60">
                          {cert.issuer} · {cert.date}
                        </p>
                      </div>
                      <Link
                        href={cert.link}
                        className="text-primary hover:underline text-sm"
                      >
                        View
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Courses and Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="card p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <BookOpen className="mr-2 text-primary" />
                  Notable Courses
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {courses.map((course, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-primary/30 transition-colors"
                    >
                      <h3 className="text-lg font-semibold mb-2">
                        {course.title}
                      </h3>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {course.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-primary/10 rounded-full border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <p className="text-sm text-white/70">
                        {course.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Projects Preview */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Briefcase className="mr-2 text-primary" size={20} />
                    Academic Projects
                  </h3>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-white/5 p-6 rounded-lg border border-white/10"
                  >
                    <motion.p variants={itemVariants} className="mb-4">
                      Throughout my academic journey, I've completed various
                      projects that have helped me apply theoretical knowledge
                      to practical situations. These projects have strengthened
                      my problem-solving abilities and technical skills.
                    </motion.p>

                    <motion.ul
                      variants={itemVariants}
                      className="space-y-2 mb-4"
                    >
                      <li className="flex items-start">
                        <Code size={16} className="mr-2 text-primary mt-1" />
                        <span>
                          Implemented a custom data structure library in C++
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Code size={16} className="mr-2 text-primary mt-1" />
                        <span>Developed a 2D game using Unity and C#</span>
                      </li>
                      <li className="flex items-start">
                        <Code size={16} className="mr-2 text-primary mt-1" />
                        <span>
                          Created a web-based student management system using
                          React and Node.js
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Code size={16} className="mr-2 text-primary mt-1" />
                        <span>
                          Built a personal portfolio website using Next.js and
                          Tailwind CSS
                        </span>
                      </li>
                    </motion.ul>

                    <motion.div variants={itemVariants} className="mt-6">
                      <Link
                        href="/projects"
                        className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-all"
                      >
                        View My Projects
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Extracurricular Activities */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">
                    Extracurricular Activities
                  </h3>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-4"
                  >
                    <motion.div
                      variants={itemVariants}
                      className="bg-white/5 p-4 rounded-lg"
                    >
                      <h4 className="font-semibold">CBU Coding Club</h4>
                      <p className="text-sm text-white/70">
                        Active member participating in coding challenges and
                        hackathons.
                      </p>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="bg-white/5 p-4 rounded-lg"
                    >
                      <h4 className="font-semibold">
                        Game Development Workshop
                      </h4>
                      <p className="text-sm text-white/70">
                        Organized and led workshops to teach fellow students
                        game development basics.
                      </p>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="bg-white/5 p-4 rounded-lg"
                    >
                      <h4 className="font-semibold">Tech Volunteering</h4>
                      <p className="text-sm text-white/70">
                        Volunteer at local community center teaching basic
                        computer skills to seniors.
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
