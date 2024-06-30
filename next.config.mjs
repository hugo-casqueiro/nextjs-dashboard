
const isPprEnabled = process.env.NEXT_PUBLIC_EXPERIMENTAL_PPR === 'enabled';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: isPprEnabled ? 'incremental' : undefined,
  },
  // Other Next.js configurations...
};

export default nextConfig;
