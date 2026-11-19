import { exploreSubjects } from "./app/lib/explore";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return exploreSubjects.map(({ slug }) => ({
      source: `/career-labs/explore/${slug}`,
      destination: `/labs/${slug}/index.html`,
    }));
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
