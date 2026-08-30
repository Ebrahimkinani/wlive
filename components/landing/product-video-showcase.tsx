"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const VIDEO_ID = "l4YUtf3aH54";
const SEGMENT_START = 6;
const SEGMENT_END = 24;
const IFRAME_ID = "wlive-product-video";

type YTPlayerInstance = {
  playVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
  getCurrentTime: () => number;
  getPlayerState: () => number;
  destroy: () => void;
  unloadModule?: (moduleName: string) => void;
  setOption?: (module: string, option: string, value: unknown) => void;
};

declare global {
  interface Window {
    YT?: {
      Player: new (
        elementId: string | HTMLElement,
        options?: {
          events?: {
            onReady?: (event: { target: YTPlayerInstance }) => void;
            onStateChange?: (event: { data: number; target: YTPlayerInstance }) => void;
          };
        }
      ) => YTPlayerInstance;
      PlayerState: {
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
        UNSTARTED: number;
        CUED: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

function buildEmbedSrc(origin: string) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    controls: "0",
    playsinline: "1",
    modestbranding: "1",
    rel: "0",
    start: String(SEGMENT_START),
    fs: "0",
    iv_load_policy: "3",
    disablekb: "1",
    enablejsapi: "1",
    cc_load_policy: "0",
    origin,
  });

  return `https://www.youtube.com/embed/${VIDEO_ID}?${params.toString()}`;
}

function waitForYouTubeAPI(timeoutMs = 8000) {
  if (window.YT?.Player) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve, reject) => {
    const startedAt = Date.now();
    const previousReady = window.onYouTubeIframeAPIReady;

    window.onYouTubeIframeAPIReady = () => {
      previousReady?.();
      resolve();
    };

    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.head.appendChild(script);
    }

    const poll = () => {
      if (window.YT?.Player) {
        resolve();
        return;
      }

      if (Date.now() - startedAt > timeoutMs) {
        reject(new Error("YouTube API unavailable"));
        return;
      }

      window.requestAnimationFrame(poll);
    };

    poll();
  });
}

function restartSegment(player: YTPlayerInstance) {
  player.seekTo(SEGMENT_START, true);
  player.playVideo();
}

function disableCaptions(player: YTPlayerInstance) {
  try {
    player.unloadModule?.("captions");
  } catch {
    // Captions module may be unavailable.
  }

  try {
    player.setOption?.("captions", "track", {});
  } catch {
    // setOption may be unavailable depending on embed policy.
  }
}

export function ProductVideoShowcase() {
  const playerRef = useRef<YTPlayerInstance | null>(null);
  const loopTimerRef = useRef<number | null>(null);
  const autoplayTimerRef = useRef<number | null>(null);
  const apiAttachedRef = useRef(false);

  const [embedSrc, setEmbedSrc] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(false);

  useEffect(() => {
    setEmbedSrc(buildEmbedSrc(window.location.origin));
  }, []);

  const attachLoopControls = useCallback(async () => {
    if (apiAttachedRef.current) return;

    const iframe = document.getElementById(IFRAME_ID) as HTMLIFrameElement | null;
    if (!iframe) return;

    try {
      await waitForYouTubeAPI();
    } catch {
      return;
    }

    if (!window.YT?.Player || apiAttachedRef.current) return;

    apiAttachedRef.current = true;

    const player = new window.YT.Player(iframe, {
      events: {
        onReady: ({ target }) => {
          playerRef.current = target;
          disableCaptions(target);
          restartSegment(target);

          loopTimerRef.current = window.setInterval(() => {
            try {
              if (target.getCurrentTime() >= SEGMENT_END - 0.2) {
                restartSegment(target);
              }
            } catch {
              // Player may already be destroyed.
            }
          }, 200);
        },
        onStateChange: ({ data, target }) => {
          const { ENDED, PAUSED, PLAYING } = window.YT!.PlayerState;

          if (data === PLAYING) {
            disableCaptions(target);
            setNeedsInteraction(false);
          }

          if (data === ENDED) {
            restartSegment(target);
            return;
          }

          if (data === PAUSED && target.getCurrentTime() >= SEGMENT_END - 0.35) {
            restartSegment(target);
          }
        },
      },
    });

    playerRef.current = player;
  }, []);

  useEffect(() => {
    return () => {
      if (loopTimerRef.current) window.clearInterval(loopTimerRef.current);
      if (autoplayTimerRef.current) window.clearTimeout(autoplayTimerRef.current);
      playerRef.current?.destroy();
      playerRef.current = null;
      apiAttachedRef.current = false;
    };
  }, []);

  const handleIframeLoad = () => {
    setLoaded(true);
    void attachLoopControls();

    autoplayTimerRef.current = window.setTimeout(() => {
      if (playerRef.current) {
        const state = playerRef.current.getPlayerState();
        const { UNSTARTED, CUED, PAUSED, PLAYING } = window.YT?.PlayerState ?? {};
        if (
          state !== PLAYING &&
          (state === UNSTARTED || state === CUED || state === PAUSED)
        ) {
          setNeedsInteraction(true);
        }
      }
    }, 2000);
  };

  useEffect(() => {
    const fallback = window.setTimeout(() => {
      setLoaded(true);
    }, 2500);

    return () => window.clearTimeout(fallback);
  }, []);

  const handlePlay = () => {
    if (playerRef.current) {
      disableCaptions(playerRef.current);
      restartSegment(playerRef.current);
      setNeedsInteraction(false);
      return;
    }

    const iframe = document.getElementById(IFRAME_ID) as HTMLIFrameElement | null;
    if (iframe) {
      iframe.src = buildEmbedSrc(window.location.origin);
      setLoaded(true);
      setNeedsInteraction(false);
    }
  };

  return (
    <figure className="relative aspect-video w-full overflow-hidden bg-surface-muted">
      <div className="absolute inset-0 overflow-hidden">
        {embedSrc ? (
          <iframe
            id={IFRAME_ID}
            src={embedSrc}
            title="W Live app experience preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            onLoad={handleIframeLoad}
            className={cn(
              "absolute inset-0 size-full border-0 transition-opacity duration-700 ease-out",
              loaded ? "opacity-100" : "opacity-0"
            )}
          />
        ) : null}
      </div>

      {!loaded ? (
        <div
          className="absolute inset-0 bg-surface-muted motion-safe:animate-pulse"
          aria-hidden
        />
      ) : null}

      {needsInteraction ? (
        <button
          type="button"
          onClick={handlePlay}
          className="absolute inset-0 z-10 flex items-end justify-center bg-background/10 pb-6 text-caption text-text-secondary backdrop-blur-[1px] transition-colors hover:text-text-primary sm:items-center sm:pb-0"
        >
          Tap to play preview
        </button>
      ) : null}

      <figcaption className="sr-only">W Live app experience preview</figcaption>
    </figure>
  );
}
