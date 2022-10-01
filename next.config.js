const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

/** @type {import('next').NextConfig} */
const nextConfig = withPlugins([{
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  images: {
    loader: 'custom'
  },
  basePath: '/portfolio',
  eslint: {
    ignoreDuringBuilds: true,
  },
    
}])

module.exports = nextConfig
