/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['img.shields.io'],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
