import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
      },
      fontFamily: {
        sans: ["JetBrains Mono", "monospace"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      spacing: {
        "18": "4.5rem",
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      transitionDuration: {
        "400": "400ms",
      },
      boxShadow: {
        card: "0 4px 20px -5px rgba(0, 0, 0, 0.1)",
        "card-hover":
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      screens: {
        xs: "480px",
        // Rest of the breakpoints are defined by Tailwind defaults:
        // sm: '640px'
        // md: '768px'
        // lg: '1024px'
        // xl: '1280px'
        // 2xl: '1536px'
      },
      gridTemplateColumns: {
        "auto-fill-xs": "repeat(auto-fill, minmax(16rem, 1fr))",
        "auto-fill-sm": "repeat(auto-fill, minmax(20rem, 1fr))",
      },
    },
  },
  plugins: [],
} satisfies Config;
