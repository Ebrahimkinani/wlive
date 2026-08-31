"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const VIDEO_SRC = "/ads.mp4";
const IN_VIEW_THRESHOLD = 0.35;

export function ProductVideoShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isVisibleRef = useRef(false);

  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const effectiveMuted = !isVisible || isMuted;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible =
          entry.isIntersecting && entry.intersectionRatio >= IN_VIEW_THRESHOLD;

        if (visible === isVisibleRef.current) return;
        isVisibleRef.current = visible;
        setIsVisible(visible);

        const video = videoRef.current;
        if (!video) return;

        if (visible) {
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {
            // Autoplay may be blocked by the browser.
          });
        } else {
          video.muted = true;
          video.pause();
          setIsMuted(true);
        }
      },
      {
        threshold: [0, IN_VIEW_THRESHOLD, 0.5],
        rootMargin: "0px 0px -15% 0px",
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      const video = videoRef.current;
      if (!video) return;

      if (document.hidden) {
        video.muted = true;
        video.pause();
        setIsMuted(true);
      } else if (isVisibleRef.current) {
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {
          // Autoplay may be blocked by the browser.
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const handleToggleMute = () => {
    const video = videoRef.current;

    if (!video || !isVisibleRef.current) return;

    if (video.muted) {
      video.muted = false;
      video.volume = 1;

      video.play().catch(() => {
        // Playback may be blocked by the browser.
      });

      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <figure
      ref={containerRef}
      className="relative aspect-[10/16] w-full overflow-hidden sm:aspect-[3/4] md:aspect-[16/10] lg:aspect-video"
    >
      <div className="absolute inset-0 z-0 bg-video-showcase" aria-hidden />
      <div className="absolute inset-0 z-0 bg-video-showcase-glow" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-video-showcase-edge max-md:opacity-50 md:opacity-100"
        aria-hidden
      />

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div
          className={cn(
            "relative z-10 h-full max-h-full w-auto shrink-0 aspect-[9/16]",
            "max-w-[98%] sm:max-w-[88%] md:max-w-[62%] lg:max-w-[48%] xl:max-w-[44%]"
          )}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="block h-full w-full object-contain"
            aria-label="W Live app experience preview"
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        </div>
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          handleToggleMute();
        }}
        aria-label={effectiveMuted ? "Unmute video" : "Mute video"}
        aria-pressed={!effectiveMuted}
        className="pointer-events-auto absolute bottom-3 right-3 z-20 inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/90 shadow-soft backdrop-blur-sm transition-[background-color,transform] hover:bg-black/55 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      >
        {effectiveMuted ? (
          <VolumeX className="size-[1.125rem]" aria-hidden />
        ) : (
          <Volume2 className="size-[1.125rem]" aria-hidden />
        )}
      </button>

      <figcaption className="sr-only">W Live app experience preview</figcaption>
    </figure>
  );
}
