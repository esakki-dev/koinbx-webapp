import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['kbxstorage.blob.core.windows.net'],
  },
};

export default nextConfig;
