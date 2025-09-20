/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["your-cloudfront-domain.com"], // allow video thumbnails from CDN
  },
};

export default nextConfig;
