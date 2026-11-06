import type { NextConfig } from 'next';

const config: NextConfig = {
  images: { qualities: [75, 90] },
  // French lives at the root, English at /en. Both are pre-rendered from src/app/[lang].
  async rewrites() {
    return { beforeFiles: [{ source: '/', destination: '/fr' }], afterFiles: [], fallback: [] };
  },
  async redirects() {
    return [{ source: '/fr', destination: '/', permanent: true }];
  },
};

export default config;
