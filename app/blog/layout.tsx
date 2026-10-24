import type { Metadata } from "next";
import { BASE_URL } from "../lib/site";
import BlogCtaListener from "../components/BlogCtaListener";

export const metadata: Metadata = { metadataBase: new URL(BASE_URL) };

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <><BlogCtaListener />{children}</>;
}
