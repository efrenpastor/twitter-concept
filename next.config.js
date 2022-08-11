/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    minimumCacheTTL: 604800,
    domains: [
      'lh3.googleusercontent.com'
    ]
  }
}

module.exports = nextConfig
