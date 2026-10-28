import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_TITLE = "Nirav Saxena | UX Researcher";
const SITE_DESCRIPTION =
  "UX researcher with 5+ years of experience and a background in psychotherapy, blending human behavior insight with connection-building to drive product decisions.";

export const metadata = {
  metadataBase: new URL("https://niravsaxena.com"),
  title: {
    default: SITE_TITLE,
    template: "%s | Nirav Saxena",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Nirav Saxena",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport = {
  colorScheme: "dark light",
};

// Runs before first paint. A saved manual choice always wins; otherwise the
// device theme is used (dark if matchMedia is unavailable). With no saved
// choice it also follows live device changes, until the visitor uses the toggle.
const THEME_INIT_SCRIPT = `(function () {
  var root = document.documentElement;
  function stored() {
    try {
      var t = localStorage.getItem('theme');
      return t === 'light' || t === 'dark' ? t : null;
    } catch (e) {
      return null;
    }
  }
  var mq = null;
  try {
    mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  } catch (e) {}
  function system() {
    return mq ? (mq.matches ? 'dark' : 'light') : 'dark';
  }
  var applied = stored() || system();
  root.setAttribute('data-theme', applied);
  if (!mq || stored()) return;
  function follow() {
    if (stored() || root.getAttribute('data-theme') !== applied) {
      if (mq.removeEventListener) mq.removeEventListener('change', follow);
      else mq.removeListener(follow);
      return;
    }
    applied = system();
    root.setAttribute('data-theme', applied);
  }
  if (mq.addEventListener) mq.addEventListener('change', follow);
  else mq.addListener(follow);
})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${fraunces.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
