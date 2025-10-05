/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Enable trailing slash for consistent URLs in static export
  trailingSlash: true,
};

export default nextConfig;
