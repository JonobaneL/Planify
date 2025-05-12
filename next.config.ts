import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com'],
  },
  rewrites: async () => {
    return [
      {
        source: '/auth/:path*',
        destination: 'http://localhost:8080/auth/:path*',
      },
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/:path*',
      },
    ];
  },
};

export default nextConfig;
