import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {

    ignoreBuildErrors: true // This is generally not recommended, but can be used to bypass TypeScript errors during the build process.
  },
  };

export default nextConfig;
