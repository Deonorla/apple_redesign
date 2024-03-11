/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.freeiconspng.com",
      "cdn.sanity.io",
      "https://lh3.googleusercontent.com/",
    ],
  },
};

module.exports = nextConfig;
