import { Cormorant_Garamond, Libre_Franklin } from "next/font/google";

export const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

export const bodyFont = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "600"],
});
