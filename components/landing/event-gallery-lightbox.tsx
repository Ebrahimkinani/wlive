"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { getEventAltText, type EventItem } from "@/config/events";
import { easePremium } from "@/lib/motion";

const DISMISS_DISTANCE = 100;
const DISMISS_VELOCITY = 500;
const SWIPE_DISTANCE = 50;
const SWIPE_VELOCITY = 500;
const AXIS_LOCK = 8;

type DragOffset = { x: number; y: number };
type GestureAxis = "x" | "y" | null;

type EventGalleryLightboxProps = {
  items: EventItem[];
  selectedIndex: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
  returnFocusRef: React.RefObject<HTMLButtonElement | null>;
};

function lockBodyScroll() {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  const previous = {
    overflow: document.body.style.overflow,
    paddingRight: document.body.style.paddingRight,
  };

  document.body.style.overflow = "hidden";
  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }

  return () => {
    document.body.style.overflow = previous.overflow;
    document.body.style.paddingRight = previous.paddingRight;
  };
}

export function EventGalleryLightbox({
  items,
  selectedIndex,
  onClose,
  onIndexChange,
  returnFocusRef,
}: EventGalleryLightboxProps) {
  const reduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const pointerStart = useRef({ x: 0, y: 0, time: 0 });
  const gestureAxisRef = useRef<GestureAxis>(null);

  const [mounted, setMounted] = useState(false);
  const [dragOffset, setDragOffset] = useState<DragOffset>({ x: 0, y: 0 });
  const [gestureAxis, setGestureAxis] = useState<GestureAxis>(null);

  const isOpen = selectedIndex !== null;
  const itemCount = items.length;
  const currentItem =
    selectedIndex !== null ? items[selectedIndex] ?? null : null;
  const hasMultiple = itemCount > 1;

  const goToPrevious = useCallback(() => {
    if (selectedIndex === null || itemCount <= 1) return;
    onIndexChange((selectedIndex - 1 + itemCount) % itemCount);
  }, [itemCount, onIndexChange, selectedIndex]);

  const goToNext = useCallback(() => {
    if (selectedIndex === null || itemCount <= 1) return;
    onIndexChange((selectedIndex + 1) % itemCount);
  }, [itemCount, onIndexChange, selectedIndex]);

  const resetGesture = useCallback(() => {
    gestureAxisRef.current = null;
    setGestureAxis(null);
    setDragOffset({ x: 0, y: 0 });
  }, []);

  const handleClose = useCallback(() => {
    resetGesture();
    onClose();
    requestAnimationFrame(() => {
      returnFocusRef.current?.focus();
    });
  }, [onClose, resetGesture, returnFocusRef]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    return lockBodyScroll();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrevious();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious, handleClose, isOpen]);

  useEffect(() => {
    resetGesture();
  }, [selectedIndex, resetGesture]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;

    pointerStart.current = {
      x: event.clientX,
      y: event.clientY,
      time: Date.now(),
    };
    gestureAxisRef.current = null;
    setGestureAxis(null);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;

    const deltaX = event.clientX - pointerStart.current.x;
    const deltaY = event.clientY - pointerStart.current.y;

    if (!gestureAxisRef.current) {
      if (
        Math.abs(deltaX) < AXIS_LOCK &&
        Math.abs(deltaY) < AXIS_LOCK
      ) {
        return;
      }

      const axis: GestureAxis =
        Math.abs(deltaX) > Math.abs(deltaY) ? "x" : "y";
      gestureAxisRef.current = axis;
      setGestureAxis(axis);
    }

    if (gestureAxisRef.current === "y") {
      setDragOffset({ x: 0, y: deltaY });
      return;
    }

    if (gestureAxisRef.current === "x" && hasMultiple) {
      setDragOffset({ x: deltaX, y: 0 });
    }
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;

    const deltaX = event.clientX - pointerStart.current.x;
    const deltaY = event.clientY - pointerStart.current.y;
    const elapsed = Math.max(Date.now() - pointerStart.current.time, 1);
    const velocityX = (Math.abs(deltaX) / elapsed) * 1000;
    const velocityY = (Math.abs(deltaY) / elapsed) * 1000;
    const axis = gestureAxisRef.current;

    if (axis === "y") {
      if (
        Math.abs(deltaY) >= DISMISS_DISTANCE ||
        velocityY >= DISMISS_VELOCITY
      ) {
        handleClose();
        return;
      }
    } else if (axis === "x" && hasMultiple) {
      if (
        deltaX <= -SWIPE_DISTANCE ||
        (deltaX < 0 && velocityX >= SWIPE_VELOCITY)
      ) {
        goToNext();
      } else if (
        deltaX >= SWIPE_DISTANCE ||
        (deltaX > 0 && velocityX >= SWIPE_VELOCITY)
      ) {
        goToPrevious();
      }
    }

    resetGesture();

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handlePointerCancel = (event: ReactPointerEvent<HTMLDivElement>) => {
    resetGesture();

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  if (!mounted) return null;

  const dismissOpacity =
    gestureAxis === "y"
      ? Math.max(0.35, 1 - Math.abs(dragOffset.y) / 220)
      : 1;

  return createPortal(
    <AnimatePresence>
      {isOpen && currentItem?.image ? (
        <motion.div
          key="event-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${currentItem.title} screenshot viewer`}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.24, ease: easePremium }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-5"
          onClick={handleClose}
        >
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: dismissOpacity }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.24, ease: easePremium }}
          />

          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close image"
            onClick={(event) => {
              event.stopPropagation();
              handleClose();
            }}
            className="absolute top-[max(0.75rem,env(safe-area-inset-top))] right-[max(0.75rem,env(safe-area-inset-right))] z-20 inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white/90 backdrop-blur-sm transition-colors hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <X className="size-5" strokeWidth={1.75} aria-hidden />
          </button>

          {hasMultiple ? (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(event) => {
                  event.stopPropagation();
                  goToPrevious();
                }}
                className="absolute top-1/2 left-[max(0.5rem,env(safe-area-inset-left))] z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 p-2 text-white/90 backdrop-blur-sm transition-colors hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:inline-flex"
              >
                <ChevronLeft className="size-6" strokeWidth={1.75} aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(event) => {
                  event.stopPropagation();
                  goToNext();
                }}
                className="absolute top-1/2 right-[max(0.5rem,env(safe-area-inset-right))] z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 p-2 text-white/90 backdrop-blur-sm transition-colors hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:inline-flex"
              >
                <ChevronRight className="size-6" strokeWidth={1.75} aria-hidden />
              </button>
            </>
          ) : null}

          {hasMultiple && selectedIndex !== null ? (
            <p className="pointer-events-none absolute top-[max(0.9rem,env(safe-area-inset-top))] left-1/2 z-20 -translate-x-1/2 text-[0.6875rem] font-medium tracking-wide text-white/55 tabular-nums">
              {selectedIndex + 1} / {itemCount}
            </p>
          ) : null}

          <div
            className="relative z-10 flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              ref={imageWrapperRef}
              className="touch-none select-none"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerCancel}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentItem.id}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, x: 12, scale: 0.97 }
                  }
                  animate={{
                    opacity: 1,
                    x: dragOffset.x,
                    y: dragOffset.y,
                    scale: 1,
                  }}
                  exit={
                    reduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, x: -12, scale: 0.98 }
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.26,
                    ease: easePremium,
                    x: { type: "spring", stiffness: 420, damping: 34 },
                    y: { type: "spring", stiffness: 420, damping: 34 },
                  }}
                  className="relative h-[84dvh] w-[94vw] sm:h-[85dvh] sm:w-[92vw] md:h-[88dvh] md:w-[85vw] lg:w-[80vw]"
                >
                  <Image
                    src={currentItem.image}
                    alt={getEventAltText(currentItem.title)}
                    fill
                    sizes="(max-width: 640px) 94vw, (max-width: 1024px) 92vw, 85vw"
                    className="object-contain"
                    priority
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
