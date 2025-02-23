/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true, // Disables Next.js image optimization (not supported on static exports)
  },
};

export default nextConfig;
