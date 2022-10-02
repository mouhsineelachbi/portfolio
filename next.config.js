/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  images: {
    loader: 'custom'
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
    
}

module.exports = nextConfig
