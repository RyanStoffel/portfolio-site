// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: {
    default: "Ryan Stoffel | Portfolio",
    template: "%s | Ryan Stoffel",
  },
  description:
    "Portfolio website of Ryan Stoffel, a computer science student at California Baptist University specializing in game development and web technologies.",
  keywords: [
    "Ryan Stoffel",
    "portfolio",
    "web development",
    "game development",
    "computer science",
    "CBU",
    "California Baptist University",
  ],
  authors: [{ name: "Ryan Stoffel" }],
  creator: "Ryan Stoffel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
