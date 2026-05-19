import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: process.env.NEXT_BUILD_DIR || '.next',
  allowedDevOrigins: ['*.dev.coze.site'],
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
