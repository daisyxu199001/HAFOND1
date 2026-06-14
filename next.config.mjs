/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  async rewrites() {
    return [
      {
        source: '/:locale(fr|es|de|ru|pt)',
        destination: '/'
      },
      {
        source: '/:locale(fr|es|de|ru|pt)/:path*',
        destination: '/:path*'
      }
    ];
  }
};

export default nextConfig;
