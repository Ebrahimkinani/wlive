"use client";

import { useEffect } from "react";

import { markHomeScrollReset } from "@/lib/home-scroll";

export function AuthScrollMark() {
  useEffect(() => {
    const handlePageHide = () => {
      markHomeScrollReset();
    };

    window.addEventListener("pagehide", handlePageHide);
    return () => window.removeEventListener("pagehide", handlePageHide);
  }, []);

  return null;
}
