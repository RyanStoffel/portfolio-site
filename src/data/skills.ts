// src/data/skills.ts
export interface Skill {
  name: string;
  category: string;
  level: number;
  color?: string;
}

export const skills: Skill[] = [
  // Programming Languages
  { name: "Java", category: "Languages", level: 90, color: "#ED8B00" },
  { name: "C++", category: "Languages", level: 85, color: "#00599C" },
  { name: "Python", category: "Languages", level: 80, color: "#3776AB" },
  { name: "JavaScript", category: "Languages", level: 85, color: "#F7DF1E" },
  { name: "TypeScript", category: "Languages", level: 75, color: "#3178C6" },
  { name: "C#", category: "Languages", level: 70, color: "#239120" },
  { name: "SQL", category: "Languages", level: 75, color: "#4479A1" },

  // Web Technologies
  { name: "HTML", category: "Web", level: 90, color: "#E34F26" },
  { name: "CSS", category: "Web", level: 85, color: "#1572B6" },
  { name: "React", category: "Web", level: 80, color: "#61DAFB" },
  { name: "Next.js", category: "Web", level: 75, color: "#000000" },
  { name: "Tailwind CSS", category: "Web", level: 85, color: "#06B6D4" },
  { name: "Node.js", category: "Web", level: 70, color: "#339933" },
  { name: "REST APIs", category: "Web", level: 75, color: "#FF6C37" },

  // Game Development
  { name: "Unity", category: "Game Development", level: 80, color: "#000000" },
  {
    name: "2D Game Design",
    category: "Game Development",
    level: 75,
    color: "#9146FF",
  },
  {
    name: "3D Modeling Basics",
    category: "Game Development",
    level: 60,
    color: "#0FAAFF",
  },
  {
    name: "Game Physics",
    category: "Game Development",
    level: 70,
    color: "#FF4500",
  },

  // Tools & Technologies
  { name: "Git", category: "Tools", level: 85, color: "#F05032" },
  { name: "GitHub", category: "Tools", level: 80, color: "#181717" },
  { name: "VS Code", category: "Tools", level: 90, color: "#007ACC" },
  { name: "Visual Studio", category: "Tools", level: 85, color: "#5C2D91" },
  { name: "Docker Basics", category: "Tools", level: 60, color: "#2496ED" },

  // Databases
  { name: "MySQL", category: "Databases", level: 75, color: "#4479A1" },
  { name: "MongoDB", category: "Databases", level: 65, color: "#47A248" },
  { name: "SQLite", category: "Databases", level: 70, color: "#003B57" },

  // Soft Skills
  { name: "Problem Solving", category: "Soft Skills", level: 90 },
  { name: "Teamwork", category: "Soft Skills", level: 85 },
  { name: "Communication", category: "Soft Skills", level: 80 },
  { name: "Time Management", category: "Soft Skills", level: 75 },
  { name: "Adaptability", category: "Soft Skills", level: 85 },
];

export const skillCategories = Array.from(
  new Set(skills.map((skill) => skill.category)),
);

export const getSkillsByCategory = (category: string): Skill[] => {
  return skills.filter((skill) => skill.category === category);
};
