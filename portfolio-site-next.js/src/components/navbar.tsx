import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Name on the left */}
        <div className="text-2xl font-bold text-white hover:underline">
          <Link href="/">Ryan Stoffel</Link>
        </div>

        {/* Navigation links */}
        <div className="flex space-x-8">
          <Link
            href="#about"
            className="text-white hover:text-gray-300 hover:underline text-lg"
          >
            About
          </Link>

          <Link
            href="#experience"
            className="text-white hover:text-gray-300 hover:underline text-lg"
          >
            Experience
          </Link>

          <Link
            href="#education"
            className="text-white hover:text-gray-300 hover:underline text-lg"
          >
            Education
          </Link>

          <Link
            href="#projects"
            className="text-white hover:text-gray-300 hover:underline text-lg"
          >
            Projects
          </Link>

          <Link
            href="#skills"
            className="text-white hover:text-gray-300 hover:underline text-lg"
          >
            Skills
          </Link>

          <Link
            href="#contact"
            className="text-white hover:text-gray-300 hover:underline text-lg"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
