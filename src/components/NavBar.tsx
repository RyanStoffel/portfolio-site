// src/components/NavBar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
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
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop and tablet navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? `backdrop-blur-lg ${theme === "dark" ? "bg-black/50" : "bg-white/50"} shadow-lg`
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/home" className="text-xl font-bold">
                <span className="text-primary">&lt;</span>
                Ryan
                <span className="text-primary">/&gt;</span>
              </Link>
            </div>

            {/* Desktop navigation links */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-2 text-sm rounded-md transition-colors group ${
                      isActive(item.href)
                        ? "text-primary"
                        : "hover:text-primary"
                    }`}
                  >
                    <div className="flex items-center space-x-1">
                      {item.icon}
                      <span className="font-mono">
                        {isActive(item.href) ? `<${item.label}/>` : item.label}
                      </span>
                    </div>

                    {/* Underline effect for active link */}
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary hover:bg-black/20 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-background shadow-lg"
          >
            <div className="flex items-center justify-between px-4 py-4">
              <div className="text-xl font-bold">
                <span className="text-primary">&lt;</span>
                Menu
                <span className="text-primary">/&gt;</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-md text-white hover:text-primary focus:outline-none"
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-4 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? "bg-primary/20 text-primary"
                      : "hover:bg-white/5"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default NavBar;
