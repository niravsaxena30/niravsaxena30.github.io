"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { RESUME_URL } from "../../lib/constants";

const SECTIONS = [
  { id: "top", label: "About me" },
  { id: "philosophy", label: "Philosophy" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

function scrollToSection(id, behavior) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.offsetTop, behavior });
}

export default function Nav() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const lastSectionId = SECTIONS[SECTIONS.length - 1].id;
    const threshold = 160;
    const isAtBottom = () =>
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    const updateActive = () => {
      if (isAtBottom()) {
        setActive(lastSectionId);
        return;
      }
      const scrollPos = window.scrollY + threshold;
      let current = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= scrollPos) current = s.id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    updateActive();

    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => {
        scrollToSection(id, "instant");
        updateActive();
      }, 300);
    }

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  function handleNavClick(e, id) {
    e.preventDefault();
    window.history.pushState(null, "", `#${id}`);
    scrollToSection(id, "smooth");
    setActive(id);
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="wordmark" href="#top" onClick={(e) => handleNavClick(e, "top")}>
          Hello world, I&apos;m Nirav
        </a>
        <div className="nav-links">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? "active" : undefined}
              onClick={(e) => handleNavClick(e, s.id)}
            >
              {s.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            className="nav-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume ↗
          </a>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
