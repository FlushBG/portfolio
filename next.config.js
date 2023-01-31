const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, '**/*.scss')],
  },
  images: {
    remotePatterns: [
      { 
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '*',
      }
    ]
  }
}

module.exports = nextConfig
