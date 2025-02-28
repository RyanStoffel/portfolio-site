// src/app/skills/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Lightbulb,
  Database,
  Workflow,
  Server,
  Gamepad,
} from "lucide-react";
import NavBar from "@/components/NavBar";
import ParticlesBackground from "@/components/ParticlesBackground";
import LoadingSpinner from "@/components/Loading";
import { skills, skillCategories } from "@/data/skills";

export default function SkillsPage() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    // Set default category
    if (skillCategories.length > 0) {
      setActiveCategory(skillCategories[0]);
    }
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
        staggerChildren: 0.05,
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

  // Get icon for category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code size={20} />;
      case "Web":
        return <Server size={20} />;
      case "Game Development":
        return <Gamepad size={20} />;
      case "Tools":
        return <Workflow size={20} />;
      case "Databases":
        return <Database size={20} />;
      case "Soft Skills":
        return <Lightbulb size={20} />;
      default:
        return <Code size={20} />;
    }
  };

  const filteredSkills = activeCategory
    ? skills.filter((skill) => skill.category === activeCategory)
    : skills;

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
          <h1 className="text-4xl font-bold mb-6">My Skills</h1>
          <p className="text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across
            various domains. Click on the categories below to filter.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {skillCategories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {getCategoryIcon(category)}
                {category}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="card p-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-3"
                      style={{ backgroundColor: skill.color || "#0080FF" }}
                    />
                    <h3 className="text-lg font-medium">{skill.name}</h3>
                  </div>
                  <span className="text-sm font-mono bg-white/10 px-2 py-1 rounded-md">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: skill.color || "#0080FF",
                      opacity: 0.8,
                    }}
                  />
                </div>

                <div className="flex justify-between mt-1 text-xs text-white/60">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Advanced</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skill Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 card p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Skill Breakdown</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="mr-2 text-primary" size={20} />
                  Programming Languages
                </h3>
                <p className="text-white/70">
                  I'm proficient in multiple programming languages, with a
                  strong focus on Java, C++, and Python. My experience ranges
                  from developing backend services to creating data processing
                  algorithms and building interactive applications.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Server className="mr-2 text-primary" size={20} />
                  Web Development
                </h3>
                <p className="text-white/70">
                  My web development skills include building responsive and
                  interactive user interfaces using modern frameworks like React
                  and Next.js. I'm experienced with HTML, CSS, and JavaScript,
                  and have worked with various CSS frameworks including Tailwind
                  CSS.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Gamepad className="mr-2 text-primary" size={20} />
                  Game Development
                </h3>
                <p className="text-white/70">
                  I'm passionate about game development and have experience
                  building games with Unity and C#. My skills include 2D game
                  design, implementing game mechanics, and basic 3D modeling.
                  I've created several small game projects that showcase my
                  ability to create engaging interactive experiences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Database className="mr-2 text-primary" size={20} />
                  Databases & Backend
                </h3>
                <p className="text-white/70">
                  I have experience with both SQL and NoSQL databases, including
                  MySQL, SQLite, and MongoDB. I can design and implement
                  database schemas, write efficient queries, and integrate
                  database systems with application backends.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Workflow className="mr-2 text-primary" size={20} />
                  Tools & Technologies
                </h3>
                <p className="text-white/70">
                  I'm proficient with various development tools including Git
                  for version control, Visual Studio Code and Visual Studio for
                  coding, and have basic experience with Docker
                  containerization. I'm comfortable with both Windows and Linux
                  environments.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Lightbulb className="mr-2 text-primary" size={20} />
                  Soft Skills
                </h3>
                <p className="text-white/70">
                  Beyond technical abilities, I possess strong problem-solving
                  skills, work well in team environments, and communicate
                  effectively. My adaptability allows me to quickly learn new
                  technologies and methodologies as needed.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Learning Goals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 card p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Current Learning Goals</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2">
                  Advanced Game Development
                </h3>
                <p className="text-sm text-white/70">
                  Expanding my knowledge in 3D game development, implementing
                  advanced AI systems, and creating more complex game mechanics.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2">Cloud Computing</h3>
                <p className="text-sm text-white/70">
                  Learning cloud platforms like AWS or Azure to deploy scalable
                  applications and understand cloud architecture patterns.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2">Mobile Development</h3>
                <p className="text-sm text-white/70">
                  Building cross-platform mobile applications using React Native
                  or learning native Android development with Kotlin.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2">Machine Learning</h3>
                <p className="text-sm text-white/70">
                  Exploring the fundamentals of machine learning and AI to
                  implement intelligent features in applications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
