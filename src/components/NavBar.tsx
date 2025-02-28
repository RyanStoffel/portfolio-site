// src/components/NavBar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  User,
  BookOpen,
  Code,
  FolderGit2,
  Mail,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const NavBar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  // Check if current path matches the nav item
  const isActive = (path: string) => pathname === path;

  const navItems = [
    { label: "Home", href: "/home", icon: <Home size={18} /> },
    { label: "About", href: "/about", icon: <User size={18} /> },
    { label: "Education", href: "/education", icon: <BookOpen size={18} /> },
    { label: "Skills", href: "/skills", icon: <Code size={18} /> },
    { label: "Projects", href: "/projects", icon: <FolderGit2 size={18} /> },
    { label: "Contact", href: "/contact", icon: <Mail size={18} /> },
  ];

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop and tablet navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
          isScrolled
            ? `backdrop-blur-lg ${theme === "dark" ? "bg-black/50" : "bg-white/50"} shadow-md`
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/home"
                className="text-xl font-bold transition-colors hover:text-primary"
                aria-label="Go to homepage"
              >
                <span className="text-primary">&lt;</span>
                Ryan
                <span className="text-primary">/&gt;</span>
              </Link>
            </div>

            {/* Desktop navigation links */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1 lg:space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive(item.href)
                        ? "text-primary"
                        : "hover:text-primary"
                    }`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    <div className="flex items-center space-x-1">
                      {item.icon}
                      <span className="font-mono">
                        {isActive(item.href) ? `<${item.label}/>` : item.label}
                      </span>
                    </div>

                    {/* Simple underline for active link */}
                    {isActive(item.href) && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-primary hover:bg-black/20 focus:outline-none transition-colors"
                aria-expanded={isMobileMenuOpen}
                aria-label="Open main menu"
              >
                <Menu className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black/70"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background shadow-xl">
            <div className="flex items-center justify-between px-6 py-6">
              <div className="text-xl font-bold">
                <span className="text-primary">&lt;</span>
                Menu
                <span className="text-primary">/&gt;</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-md text-white hover:text-primary focus:outline-none transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1 overflow-y-auto max-h-[calc(100vh-80px)]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-5 rounded-lg text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-primary/10 text-primary border-l-4 border-primary"
                      : "hover:bg-white/5"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  <div className="flex items-center space-x-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                </Link>
              ))}

              <div className="pt-6 px-4 mt-8 border-t border-white/10">
                <p className="text-sm text-white/50 mb-2">Connect with me</p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/RyanStoffel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-primary/20 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/ryan-stoffel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-primary/20 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="mailto:ryanstoffel62@icloud.com"
                    className="p-2 rounded-full bg-white/10 hover:bg-primary/20 transition-colors"
                    aria-label="Email"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
