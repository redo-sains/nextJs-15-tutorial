import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    KINDE_SITE_URL: process.env.KINDE_SITE_URL ?? `https://${process.env.VERCEL_URL}`,
    KINDE_POST_LOGOUT_REDIRECT_URL:
      process.env.KINDE_POST_LOGOUT_REDIRECT_URL ?? `https://${process.env.VERCEL_URL}`,
    KINDE_POST_LOGIN_REDIRECT_URL:
      process.env.KINDE_POST_LOGIN_REDIRECT_URL ?? `https://${process.env.VERCEL_URL}/dashboard`
  },
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
