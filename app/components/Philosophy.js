"use client";

import { useEffect, useRef } from "react";

const PRINCIPLES = [
  {
    title: "There's always a deeper why",
    body: (
      <>
        Why do we trust one food app over another, or find one cab service
        easier?{" "}
        <span className="accent-text">
          Real decisions are a tangle of emotion and cognition
        </span>
        , rarely as rational as they look.
      </>
    ),
    stagger: "0s",
  },
  {
    title: "Empathy is a method, not a mood",
    body: (
      <>
        Comfort in a session is the core mechanism. A{" "}
        <span className="accent-text">
          participant who feels at ease stops performing
        </span>{" "}
        and starts telling you what's actually true.
      </>
    ),
    stagger: "0.9s",
  },
  {
    title: "Scheming for good",
    body: (
      <>
        <span className="accent-text">
          User-first doesn't mean business-last.
        </span>{" "}
        I look for the overlap. The recommendations that genuinely help
        people while still making sense for the business building the
        product.
      </>
    ),
    stagger: "1.8s",
  },
];

export default function Philosophy() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            grid.classList.add("in-view");
            obs.unobserve(grid);
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(grid);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="wrap" id="philosophy">
      <h2>What I actually believe about research</h2>
      <div className="phil-grid" ref={gridRef}>
        {PRINCIPLES.map((p) => (
          <div className="phil-card" style={{ "--stagger": p.stagger }} key={p.title}>
            <h3>
              <span className="reveal-mask title">
                <span className="reveal-inner">{p.title}</span>
              </span>
            </h3>
            <p>
              <span className="reveal-mask body">
                <span className="reveal-inner">{p.body}</span>
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
