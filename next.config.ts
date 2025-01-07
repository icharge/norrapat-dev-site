import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    // This is important for framer-motion to work properly
    styledComponents: true,
  },
};

export default nextConfig;
