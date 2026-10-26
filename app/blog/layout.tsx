import type { Metadata } from "next";
import { BASE_URL } from "@/app/lib/site";
import BlogCtaListener from "@/app/components/BlogCtaListener";

export const metadata: Metadata = { metadataBase: new URL(BASE_URL) };

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <><BlogCtaListener />{children}</>;
}
