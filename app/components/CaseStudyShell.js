"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import CaseNav from "./CaseNav";

export default function CaseStudyShell({
  tocItems,
  eyebrow = "Case study",
  title,
  meta,
  stats,
  prevHref,
  prevTitle,
  nextHref,
  nextTitle,
  children,
}) {
  const contentRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(".mark").forEach((el) => el.classList.add("in"));
    }, 400);

    const sections = contentRef.current?.querySelectorAll(".case-section") ?? [];
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = document.querySelector(`.case-link[href="#${entry.target.id}"]`);
          if (entry.isIntersecting && link) {
            document.querySelectorAll(".case-link").forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach((s) => spy.observe(s));

    function onScroll() {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      if (progressRef.current) progressRef.current.style.width = `${scrolled}%`;
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      clearTimeout(timer);
      spy.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <CaseNav />

      <div className="case-layout">
        <aside className="case-nav">
          <Link className="back-link case-back-link" href="/#work">
            ← Back
          </Link>
          <p className="case-nav-label">On this page</p>
          {tocItems.map((item) => (
            <a href={`#${item.id}`} className="case-link" key={item.id}>
              {item.label}
            </a>
          ))}
        </aside>

        <main className="case-content" ref={contentRef}>
          <p className="case-eyebrow">{eyebrow}</p>
          <h1 className="case-title">{title}</h1>
          <p className="case-meta">
            {meta.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </p>

          {stats && stats.length > 0 && (
            <div className="stats-strip">
              {stats.map((s) => (
                <div className="stat-block" key={s.label}>
                  <span className="num">{s.num}</span>
                  <span className="lbl">{s.label}</span>
                </div>
              ))}
            </div>
          )}

          {children}
        </main>
      </div>

      <div className="case-footer-wrap">
        <div className="case-footer-nav">
          <Link href={prevHref} className="prev-link">
            <span className="nav-label">Previous case study</span>
            <span className="nav-title">← {prevTitle}</span>
          </Link>
          <Link href={nextHref} className="next-link">
            <span className="nav-label">Next case study</span>
            <span className="nav-title">{nextTitle} →</span>
          </Link>
        </div>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" ref={progressRef} />
      </div>
    </>
  );
}
