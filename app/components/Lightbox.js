"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ZOOM_SCALE = 2.5;

export default function Lightbox({ src, alt, className }) {
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={() => setOpen(true)}
      />
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
