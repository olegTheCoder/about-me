import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  typedRoutes: true,
  images: {
    unoptimized: true, // требуется для статического экспорта (shared hosting)
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
    ],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: ['react-icons', 'lucide-react'],
  },
};

export default nextConfig;
