/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: './',
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
