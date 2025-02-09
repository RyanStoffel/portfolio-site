"use client";

import React, { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { label: "// home", href: "/" },
    { label: "// about", href: "/about" },
    { label: "// education", href: "/education" },
    { label: "// skills", href: "/skills" },
    { label: "// projects", href: "/projects" },
    { label: "// contact", href: "/contact" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50">
      <div className="flex justify-center gap-10 py-4">
        {navItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center transition-all duration-300 ${
              hoveredIndex === null || hoveredIndex === index
                ? "text-white"
                : "text-gray-500"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="text-2xl font-mono">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
