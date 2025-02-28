// src/app/contact/page.tsx
"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
import ParticlesBackground from "@/components/ParticlesBackground";
import ContactForm from "@/components/ContactForm";
import LoadingSpinner from "@/components/Loading";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

// Load Framer Motion dynamically
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false },
);

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoadingSpinner />;
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      label: "Email",
      value: "ryanstoffel62@icloud.com",
      link: "mailto:ryanstoffel62@icloud.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      label: "Phone",
      value: "(714) 322-4245",
      link: "tel:+17143224245",
    },
    {
      icon: <Linkedin className="w-6 h-6 text-primary" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ryan-stoffel",
      link: "https://www.linkedin.com/in/ryan-stoffel",
    },
    {
      icon: <Github className="w-6 h-6 text-primary" />,
      label: "GitHub",
      value: "github.com/RyanStoffel",
      link: "https://www.github.com/RyanStoffel",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-white">
      <NavBar />
      <ParticlesBackground />

      <div className="container mx-auto px-4 py-24">
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
          <p className="text-lg max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out through any of the channels below or use the contact
            form.
          </p>
        </MotionDiv>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-6xl mx-auto">
          {/* Contact Information */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-8 flex-1"
          >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-white/60">{item.label}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </MotionDiv>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Current Status</h3>
              <p className="bg-primary/20 border border-primary/30 rounded-lg p-4">
                I'm currently pursuing my Computer Science degree at California
                Baptist University and am open to internship opportunities and
                freelance projects.
              </p>
            </div>
          </MotionDiv>

          {/* Contact Form */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-8 flex-1"
          >
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            <ContactForm />
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
