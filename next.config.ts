import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/career-labs/explore/economics", destination: "/labs/economics/index.html" }];
  },
  async redirects() {
    return [
      {
        source: "/guides",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/guides/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
