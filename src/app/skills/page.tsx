// src/app/skills/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  const filteredSkills = activeCategory
    ? skills.filter((skill) => skill.category === activeCategory)
    : skills;

  return (
    <div className="min-h-screen">
      <NavBar />
      <ParticlesBackground />

      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-white/70 max-w-xl mx-auto">
            A snapshot of my technical abilities across various domains
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {skillCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm transition-all ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: skill.color || "#0080FF",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skill Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="card p-6">
              <h2 className="text-xl font-bold mb-4">Core Strengths</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Object-Oriented Programming</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Full-Stack Web Development</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Game Development with Unity</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Responsive UI Design</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Problem Solving & Algorithms</span>
                </li>
              </ul>
            </div>

            <div className="card p-6">
              <h2 className="text-xl font-bold mb-4">Currently Learning</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary/50 rounded-full mr-2"></div>
                  <span>Advanced 3D Game Development</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary/50 rounded-full mr-2"></div>
                  <span>Mobile App Development</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary/50 rounded-full mr-2"></div>
                  <span>Machine Learning Basics</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary/50 rounded-full mr-2"></div>
                  <span>Cloud Computing & Deployment</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
