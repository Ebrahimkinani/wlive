"use client";

import { useEffect } from "react";

import { resetHomeScrollIfNeeded } from "@/lib/home-scroll";

export function HomeScrollReset() {
  useEffect(() => {
    resetHomeScrollIfNeeded();

    const handlePageShow = () => {
      resetHomeScrollIfNeeded();
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  return null;
}
