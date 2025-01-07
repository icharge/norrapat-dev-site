import type { NextConfig } from "next";

import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import initializeBundleAnalyzer from "@next/bundle-analyzer";

// https://www.npmjs.com/package/@next/bundle-analyzer
const withBundleAnalyzer = initializeBundleAnalyzer({
  enabled: process.env.BUNDLE_ANALYZER_ENABLED === "true",
});

// https://nextjs.org/docs/pages/api-reference/next-config-js
const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  compiler: {
    // This is important for framer-motion to work properly
    styledComponents: true,
  },
};

export default async function config() {
  if (process.env.NODE_ENV === "development") {
    await setupDevPlatform();
  }

  return withBundleAnalyzer(nextConfig);
}
