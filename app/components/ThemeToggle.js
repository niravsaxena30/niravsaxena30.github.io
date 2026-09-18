"use client";

export default function ThemeToggle() {
  function handleClick() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  }

  return (
    <button
      className="theme-toggle"
      onClick={handleClick}
      aria-label="Toggle dark and light mode"
    >
      <svg className="scene scene-day" viewBox="0 0 60 30" preserveAspectRatio="xMidYMid meet">
        <circle cx="44" cy="15" r="10" fill="#F5D93A" stroke="#E0A93A" strokeWidth="1.5" />
        <path
          d="M28 19c-2.2 0-4-1.6-4-3.6 0-1.8 1.4-3.3 3.2-3.6.5-1.6 2-2.8 3.8-2.8 2.1 0 3.9 1.6 4.1 3.7 2 .2 3.6 1.8 3.6 3.7 0 1.4-1 2.6-2.3 2.6H28z"
          fill="#fff"
          stroke="#B8C4C8"
          strokeWidth="1"
        />
      </svg>
      <svg className="scene scene-night" viewBox="0 0 60 30" preserveAspectRatio="xMidYMid meet">
        <circle cx="16" cy="15" r="11" fill="#E8E4B8" />
        <circle cx="12" cy="10" r="2.4" fill="#C9C48F" opacity=".7" />
        <circle cx="19" cy="12" r="1.8" fill="#C9C48F" opacity=".7" />
        <circle cx="14" cy="19" r="2" fill="#C9C48F" opacity=".7" />
        <circle cx="34" cy="9" r="1.6" fill="#fff" />
        <circle cx="44" cy="8" r="1.3" fill="#fff" />
        <circle cx="39" cy="15" r="1" fill="#fff" />
        <circle cx="49" cy="16" r="2" fill="#fff" />
        <circle cx="42" cy="22" r="1.2" fill="#fff" />
        <circle cx="52" cy="21" r="1.4" fill="#fff" />
      </svg>
    </button>
  );
}
