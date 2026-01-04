"use client";

import { useEffect } from "react";
import { initSmoothScroll } from "@/lib/lenis";
import "./globals.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
