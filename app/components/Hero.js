"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { RESUME_URL } from "../../lib/constants";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const marks = heroRef.current?.querySelectorAll(".mark") ?? [];
      marks.forEach((el, i) => {
        setTimeout(() => el.classList.add("in"), i * 220);
      });
    }, 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="hero wrap" id="top" ref={heroRef}>
      <div className="hero-grid">
        <div className="hero-content">
          <h1 className="name">Nirav Saxena</h1>
          <p className="hero-primary">
            I&apos;m a UX researcher who turns coffee into{" "}
            <span className="mark">user insights</span> and random observations into{" "}
            <span className="mark">research hypotheses</span>.
          </p>
          <p className="hero-secondary">
            5+ years blending my understanding of human behavior and
            connection-building to uncover insights that drive product
            decisions.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">
              View my work
            </a>
            <a
              href={RESUME_URL}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume ↗
            </a>
          </div>
        </div>

        <div className="hero-side">
          <div className="hero-photo">
            <Image
              src="/hero-photo.jpg"
              alt="Photo of Nirav Saxena"
              fill
              sizes="300px"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
