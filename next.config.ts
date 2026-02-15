import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
    ],
    minimumCacheTTL: 31536000, // 1 year for immutable assets
  },
  experimental: {
    optimizePackageImports: ['react-icons', 'lucide-react'],
  },
};

export default nextConfig;
