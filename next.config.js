/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.shields.io'],
    dangerouslyAllowSVG: true,
  },

  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://starter-kit-drab-seven.vercel.app/blog", 
      },
      {
        source: "/blog/:path*",
        destination: "https://starter-kit-drab-seven.vercel.app/blog/:path*",
      },
      ];
  },
}

module.exports = nextConfig
