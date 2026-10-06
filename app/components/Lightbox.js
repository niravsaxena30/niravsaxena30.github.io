"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const ZOOM_SCALE = 2.5;
const SWIPE_MIN_PX = 40;

// Single image: pass src and alt. With no children it renders a plain <img>
// thumbnail; with children it renders them inside a button as the trigger, and
// className goes on that button.
//
// Slide set: also pass slides ([{ src, alt, caption }]) with index and
// onIndexChange. The parent owns the current index, and the modal shows
// slides[index] with arrows, a counter and the caption. Without slides none of
// that UI exists.
export default function Lightbox({
  src,
  alt,
  className,
  children,
  onOpenChange,
  slides,
  index = 0,
  onIndexChange,
}) {
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");
  const [mounted, setMounted] = useState(false);
  const touchStart = useRef(null);

  const hasSlides = Array.isArray(slides) && slides.length > 1;
  const safeIndex = hasSlides ? Math.min(Math.max(index, 0), slides.length - 1) : 0;
  const current = hasSlides ? slides[safeIndex] : { src, alt };

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    onOpenChange?.(open);
  }, [open, onOpenChange]);

  const close = useCallback(() => {
    setOpen(false);
    setZoomed(false);
  }, []);

  const goTo = useCallback(
    (next) => {
      if (!hasSlides || next < 0 || next >= slides.length || next === safeIndex) return;
      setZoomed(false);
      onIndexChange?.(next);
    },
    [hasSlides, slides, safeIndex, onIndexChange]
  );

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (!hasSlides || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(safeIndex - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(safeIndex + 1);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, hasSlides, safeIndex, close, goTo]);

  // Warm the cache for the neighbouring slides so arrowing doesn't flash blank.
  useEffect(() => {
    if (!open || !hasSlides) return;
    [safeIndex - 1, safeIndex + 1].forEach((i) => {
      if (slides[i]) new window.Image().src = slides[i].src;
    });
  }, [open, hasSlides, slides, safeIndex]);

  function handleImageClick(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    if (!zoomed) {
      setOrigin(`${x}% ${y}%`);
      setZoomed(true);
    } else {
      setZoomed(false);
    }
  }

  function handleTouchStart(e) {
    if (zoomed || e.touches.length !== 1) {
      touchStart.current = null;
      return;
    }
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  }

  function handleTouchEnd(e) {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || zoomed) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) < SWIPE_MIN_PX || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    goTo(dx < 0 ? safeIndex + 1 : safeIndex - 1);
  }

  const stop = (e) => e.stopPropagation();
  const backdropClass = [
    "lightbox-backdrop",
    hasSlides && "lightbox-slides",
    hasSlides && zoomed && "lightbox-zoomed",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      {children ? (
        <button
          type="button"
          className={["lightbox-trigger", className].filter(Boolean).join(" ")}
          onClick={() => setOpen(true)}
        >
          {children}
        </button>
      ) : (
        <img
          src={src}
          alt={alt}
          className={className}
          onClick={() => setOpen(true)}
        />
      )}
      {open &&
        mounted &&
        createPortal(
          <div
            className={backdropClass}
            onClick={close}
            onTouchStart={hasSlides ? handleTouchStart : undefined}
            onTouchEnd={hasSlides ? handleTouchEnd : undefined}
            onTouchCancel={hasSlides ? () => (touchStart.current = null) : undefined}
          >
            <button
              className="lightbox-close"
              onClick={close}
              aria-label="Close"
              type="button"
            >
              ×
            </button>
            <div className="lightbox-stage">
              <div className="lightbox-media">
                <div className="lightbox-frame" onClick={stop}>
                  <img
                    key={current.src}
                    src={current.src}
                    alt={current.alt}
                    className="lightbox-image"
                    style={{
                      transformOrigin: origin,
                      transform: zoomed ? `scale(${ZOOM_SCALE})` : "scale(1)",
                      cursor: zoomed ? "zoom-out" : "zoom-in",
                    }}
                    onClick={handleImageClick}
                  />
                </div>
                {hasSlides && (
                  <>
                    <button
                      type="button"
                      className="lightbox-arrow lightbox-arrow-prev"
                      aria-label="Previous slide"
                      aria-disabled={safeIndex === 0}
                      onClick={(e) => {
                        e.stopPropagation();
                        goTo(safeIndex - 1);
                      }}
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                        <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="lightbox-arrow lightbox-arrow-next"
                      aria-label="Next slide"
                      aria-disabled={safeIndex === slides.length - 1}
                      onClick={(e) => {
                        e.stopPropagation();
                        goTo(safeIndex + 1);
                      }}
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
              {hasSlides && (
                <div className="lightbox-meta" aria-live="polite" onClick={stop}>
                  {current.caption && (
                    <span className="lightbox-caption">{current.caption}</span>
                  )}
                  <span className="lightbox-counter">
                    {safeIndex + 1} / {slides.length}
                  </span>
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
