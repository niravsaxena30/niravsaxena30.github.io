import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function CaseNav() {
  return (
    <nav className="nav nav--case">
      <div className="nav-inner">
        <Link className="wordmark" href="/">
          Nirav Saxena
        </Link>
        <div className="nav-links">
          <a
            href="https://drive.google.com/file/d/1VTE9hbjka_RwUZ2jNWVoH0MYhhkaV3Rc/view?usp=drive_link"
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
