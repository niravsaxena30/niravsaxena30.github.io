"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ZOOM_SCALE = 2.5;

// With no children, renders a plain <img> thumbnail. With children, renders
// them inside a button as the trigger, and className goes on that button.
export default function Lightbox({ src, alt, className, children, onOpenChange }) {
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    onOpenChange?.(open);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  function close() {
    setOpen(false);
    setZoomed(false);
  }

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
          <div className="lightbox-backdrop" onClick={close}>
            <button
              className="lightbox-close"
              onClick={close}
              aria-label="Close"
              type="button"
            >
              ×
            </button>
            <div
              className="lightbox-frame"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={src}
                alt={alt}
                className="lightbox-image"
                style={{
                  transformOrigin: origin,
                  transform: zoomed ? `scale(${ZOOM_SCALE})` : "scale(1)",
                  cursor: zoomed ? "zoom-out" : "zoom-in",
                }}
                onClick={handleImageClick}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
