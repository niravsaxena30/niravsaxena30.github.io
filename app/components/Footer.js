import CopyEmailButton from "./CopyEmailButton";

export default function Footer() {
  return (
    <footer className="wrap" id="contact">
      <h2>Let&apos;s talk</h2>
      <p className="contact-line">
        Got a project, a question, or just want to talk shop about UX research?
        I&apos;d love to hear from you.
      </p>
      <div className="footer-links">
        <CopyEmailButton />
        <a
          href="https://www.linkedin.com/in/niravsaxena/"
          className="btn btn-ghost"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>
      <p className="copyright">© With love, Nirav Saxena</p>
    </footer>
  );
}
