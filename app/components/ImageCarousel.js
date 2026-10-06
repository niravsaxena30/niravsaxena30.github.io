"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

const SWIPE_MIN_PX = 40;

// slides: [{ src, alt, caption }]. aspectRatio fixes the frame so slides of
// slightly different proportions don't make the page jump; images are
// letterboxed with object-fit: contain.
export default function ImageCarousel({
  slides,
  label,
  aspectRatio = "16 / 10",
  sizes = "(max-width: 860px) 100vw, 600px",
}) {
  const [index, setIndex] = useState(0);
  const [navigated, setNavigated] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const rootRef = useRef(null);
  const touchStart = useRef(null);
  const count = slides.length;

  function go(next) {
    const clamped = Math.min(Math.max(next, 0), count - 1);
    if (clamped === index) return;
    setIndex(clamped);
    setNavigated(true);
  }

  function handleKeyDown(e) {
    if (lightboxOpen) return;
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    go(e.key === "ArrowRight" ? index + 1 : index - 1);
    // The slide that held focus becomes inert, so keep focus on the carousel.
    rootRef.current?.focus({ preventScroll: true });
  }

  function handleTouchStart(e) {
    if (lightboxOpen || e.touches.length !== 1) {
      touchStart.current = null;
      return;
    }
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  }

  function handleTouchEnd(e) {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || lightboxOpen) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) < SWIPE_MIN_PX || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    go(dx < 0 ? index + 1 : index - 1);
  }

  return (
    <div
      ref={rootRef}
      className="carousel"
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div
        className="carousel-viewport"
        style={{ aspectRatio }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={() => (touchStart.current = null)}
      >
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className="carousel-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              inert={i !== index}
            >
              <Lightbox
                src={slide.src}
                alt={slide.alt}
                className="carousel-trigger"
                onOpenChange={setLightboxOpen}
                slides={slides}
                index={index}
                onIndexChange={go}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes={sizes}
                  loading={navigated && Math.abs(i - index) <= 1 ? "eager" : "lazy"}
                  draggable={false}
                  style={{ objectFit: "contain" }}
                />
              </Lightbox>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="carousel-arrow carousel-arrow-prev"
          aria-label="Previous slide"
          aria-disabled={index === 0}
          onClick={() => go(index - 1)}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          className="carousel-arrow carousel-arrow-next"
          aria-label="Next slide"
          aria-disabled={index === count - 1}
          onClick={() => go(index + 1)}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="carousel-meta" aria-live="polite">
        <p className="carousel-caption">{slides[index].caption}</p>
        <span className="carousel-counter">
          {index + 1} / {count}
        </span>
      </div>

      <div className="carousel-dots" role="group" aria-label="Choose slide">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            className="carousel-dot"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </div>
  );
}
