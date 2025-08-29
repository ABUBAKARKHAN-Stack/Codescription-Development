// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ protocol: "https", hostname: "www.google.com" }],
  },

  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
