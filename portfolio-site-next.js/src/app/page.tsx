import React from "react";
import { Github, Linkedin, MapPin, Download, Mail } from "lucide-react";
import NavBar from "../components/navbar.tsx";
import ParticlesBackground from "../components/particlesbackground.tsx";

const Page = () => {
  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-hidden">
      <NavBar />
      <ParticlesBackground />
      <main className="flex flex-col items-center justify-center min-h-screen">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center text-center"
        >
          <p className="text-2xl font-bold mb-2">Hello, I'm</p>
          <h2 className="text-5xl font-bold mb-2">Ryan Stoffel</h2>
          <p className="text-5xl font-bold mb-4">Computer Science Student</p>
          <p className="flex items-center justify-center gap-2 text-2xl mb-6 font-bold">
            <MapPin className="w-5 h-5" /> Corona, California
          </p>
          {/* Resume & Contact */}
          <div className="flex gap-4 justify-center">
            <button
              className="w-60 px-6 py-3 bg-transparent 
              backdrop-blur-md border border-white-600 
              rounded-lg hover:underline mt-6 font-semibold 
              text-2xl text-white shadow-lg flex items-center 
              justify-center gap-2"
            >
              <Download className="w-6 h-6" /> Download Resume
            </button>
            <button
              className="w-60 px-6 py-3 bg-transparent 
              backdrop-blur-md border border-white-600 
              rounded-lg hover:underline mt-6 font-semibold 
              text-2xl text-white shadow-lg flex items-center 
              justify-center gap-2"
            >
              <Mail className="w-6 h-6" /> Contact Info
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mt-8">
            <a
              href="https://www.linkedin.com/in/ryan-stoffel"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Linkedin size={48} />
            </a>
            <a
              href="https://github.com/RyanStoffel"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Github size={48} />
            </a>
          </div>
        </section>

        {/* Sections */}
        {[
          {
            id: "about",
            title: "About Me",
            content:
              "I'm a Computer Science student at California Baptist University, passionate about game development and software engineering. I have experience in Unity, C++, C#, and various web technologies.",
          },
          {
            id: "education",
            title: "Education",
            content:
              "California Baptist University\nBachelor of Science in Computer Science\nExpected Graduation: 2026",
          },
          {
            id: "experience",
            title: "Experience",
            content:
              "Freelance Game Developer\nDeveloped games using Unity and C#.",
          },
          {
            id: "projects",
            title: "Projects",
            content:
              "Lance UP! - A Unity game built using C#.\nOther projects coming soon!",
          },
          {
            id: "skills",
            title: "Skills",
            content: "C++, C#, Java, React, Node.js, MySQL, Unity, HTML5, CSS.",
          },
          {
            id: "contact",
            title: "Contact",
            content: "Email: ryanstoffel@example.com\nPhone: (123) 456-7890",
          },
        ].map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="min-h-screen flex flex-col items-center justify-center text-center p-12"
          >
            <h2 className="text-4xl font-bold mb-6">{section.title}</h2>
            <p className="text-lg max-w-3xl">{section.content}</p>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Page;
