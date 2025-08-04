import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  basePath: '/next-todo',
  assetPrefix: '/next-todo',
};

export default nextConfig;
