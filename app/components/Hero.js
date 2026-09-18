"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

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
            I&apos;m a professional over-thinker who turns coffee into{" "}
            <span className="mark">user insights</span> and random observations into{" "}
            <span className="mark">research hypotheses</span>. I love diving deep into
            user behavior, but equally excited to chat about why we all have 200 apps
            but only use 5, or whether dark mode actually saves your eyes or just makes
            you feel cooler.
          </p>
          <p className="hero-secondary">
            My job title however has been of a UX researcher for the past 4+
            years. I blend my understanding of human behavior and my
            connection-building skills to uncover meaningful insights that drive
            product decisions.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">
              View my work
            </a>
            <a
              href="https://drive.google.com/file/d/1VTE9hbjka_RwUZ2jNWVoH0MYhhkaV3Rc/view?usp=drive_link"
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
              sizes="280px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="scroll-cue" aria-hidden="true">
            <span className="scroll-cue-text">Scroll for more</span>
            <svg
              className="scroll-cue-arrow"
              viewBox="0 0 80 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 12 L40 36 L72 12"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
