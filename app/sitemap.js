import { CASE_STUDIES } from "./components/WorkSection";

const BASE_URL = "https://niravsaxena.com";

// Case study pages come from CASE_STUDIES in WorkSection.js, so new ones appear here automatically.
export default function sitemap() {
  return [
    { url: `${BASE_URL}/` },
    ...CASE_STUDIES.map((cs) => ({ url: `${BASE_URL}${cs.href}` })),
  ];
}
