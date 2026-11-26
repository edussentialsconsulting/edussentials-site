import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{
      source: "/career-labs/explore/:subject(economics|law|computing|behavioural-science|engineering|architecture|media-and-communication|business-and-management|history)",
      destination: "/labs/:subject/index.html",
    }];
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
