/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["links.realty.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
