/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
