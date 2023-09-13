/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "efobasen.no",
      },
      {
        protocol: "https",
        hostname: "**.vercel.app",
      },
      {
        protocol: "https",
        hostname: "elproffen-cdn.imgix.net",
      },
      {
        protocol: "https",
        hostname: "external-content.duckduckgo.com",
      },
      {
        protocol: "https",
        hostname: "media.w3.org",
      },
      {
        protocol: "https",
        hostname: "www.ahlsell.no",
      },
      {
        protocol: "https",
        hostname: "produkt.elektroskandia.no",
      },
      {
        protocol: "https",
        hostname: "onninen-file-storage.imgix.net",
      },
    ],
  },
};

module.exports = nextConfig;
