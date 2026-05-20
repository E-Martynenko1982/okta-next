import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'okta.ua',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
