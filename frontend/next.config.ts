import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '//uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'www.thegithubshop.com',
        port: '',
        pathname: '/media/logo/stores/36/**',
      }
    ]
  }
};

export default nextConfig;
