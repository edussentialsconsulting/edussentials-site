"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

export default function BlogCtaListener() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.type === "auxclick" && event.button !== 1) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      const context = document.querySelector<HTMLElement>("[data-blog-context]");
      if (!link || !context) return;
      const target = new URL(link.href, location.href);
      const booking = new URL(context.dataset.bookingUrl!, location.href);
      const isBooking = target.origin === booking.origin && target.pathname === booking.pathname;
      const isContact = ["mailto:", "tel:"].includes(target.protocol) || target.hostname === "wa.me" ||
        (target.origin === location.origin && target.pathname === "/contact");
      if (!isBooking && !isContact) return;
      const placement = link.closest<HTMLElement>("[data-cta-placement]")?.dataset.ctaPlacement ??
        (link.closest("header") ? "header" : link.closest("footer") ? "footer" : undefined);
      if (!placement) return;
      if (isBooking) {
        const incoming = new URL(location.href).searchParams;
        for (const key of new Set(incoming.keys())) {
          if (key.startsWith("utm_") && !target.searchParams.has(key)) {
            for (const value of incoming.getAll(key)) target.searchParams.append(key, value);
          }
        }
        link.href = target.href;
      }
      sendGAEvent("event", "cta_click", {
        post_slug: context.dataset.postSlug ?? "not_applicable",
        topic: context.dataset.topic ?? "not_applicable",
        stage: context.dataset.stage ?? "not_applicable",
        author: context.dataset.author ?? "not_applicable",
        placement,
      });
    }
    document.addEventListener("click", onClick);
    document.addEventListener("auxclick", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("auxclick", onClick);
    };
  }, []);
  return null;
}
