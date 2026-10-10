import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { RESUME_URL } from "../../lib/constants";

export default function CaseNav() {
  return (
    <nav className="nav nav--case">
      <div className="nav-inner">
        <Link className="wordmark" href="/">
          Nirav Saxena
        </Link>
        <div className="nav-links">
          <a
            href={RESUME_URL}
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
