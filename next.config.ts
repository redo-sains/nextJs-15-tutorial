import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn3.pixelcut.app',
        protocol: 'https',
        port: ''
      },
      {
        hostname: 'avatars.githubusercontent.com',
        protocol: 'https',
        port: ''
      }
    ]
  }
};

export default nextConfig;
