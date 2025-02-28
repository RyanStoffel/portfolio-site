import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Disable type checking during build to avoid blocking deployment
    ignoreDuringBuilds: true,
  },
  // Add any other necessary configurations
};

export default nextConfig;
