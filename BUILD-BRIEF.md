# Portfolio build brief — niravsaxena.com

Hand this file to Claude Code along with the attached mockups and case study
files. The design is finalized — this is an implementation task, not a design
task. Preserve the visual system and interactions exactly; don't reinterpret them.

## Tech stack

- **Next.js** (App Router), plain JavaScript is fine
- **Plain CSS** with custom properties — do NOT introduce Tailwind. The two
  attached mockups (`homepage-mockup.html`, `case-study-mockup.html`) already
  encode the complete design system as CSS custom properties and hand-built
  components. Port them directly into a `globals.css` + component-level CSS,
  don't re-derive the system.
- **Framer Motion** is optional — the mockups' vanilla JS (IntersectionObserver
  reveals, scroll progress, theme toggle) can be ported directly into React
  `useEffect`/`useRef` hooks without needing a new animation library. Only
  reach for Framer Motion if it genuinely simplifies something.
- Deploy target: **Vercel**

## Design tokens (source of truth: the two mockup files)

- **Fonts**: Fraunces (display/serif headings) + Inter (body), both via Google Fonts
- **Dark mode**: bg `#0A0A0A`, surface `#151512`, text `#F5F4EF`, text-secondary
  `#A8A69C`, border `#2A2A26`, accent `#FFD100` (yellow), accent-ink `#0A0A0A`
- **Light mode**: bg `#FAFAF9`, surface `#FFFFFF`, text `#14141A`, text-secondary
  `#6B6A63`, border `#E4E2DA`, accent `#2E4AE0` (blue), accent-ink `#FFFFFF`
- **Signature interaction**: the `.mark` highlighter effect (key phrases get an
  accent-colored wash that sweeps in) — reused across hero and case study pages
- **Theme toggle**: sun+cloud (day) / moon+craters+stars (night) cross-fade,
  fully coded in both mockup files — copy directly

## Sitemap

| Route | Source | Status |
|---|---|---|
| `/` | `homepage-mockup.html` | Finalized |
| `/work/vms` | `case-study-mockup.html` (template) + `vms-vehicle-asset-management-case-study.md` (content) | Template finalized, this is the reference example |
| `/work/allowance-audit` | Same template + `allowance-audit-tool-case-study.md` | Needs the case-study-mockup styling applied (stats strip, section tags, pull-quote, marks) |
| `/work/cropwise` | Same template + `cropwise-grower-case-study.md` + the 3 real screenshots (`cropwise-*-flow.png`) | Same — also swap in real screenshots instead of a placeholder prototype note |
| `/resume` | Not yet designed | Placeholder for launch; design as a fast-follow using the same tokens |

Case study prev/next order: **VMS → Allowance Audit → Cropwise → (back to VMS)**.

## Content notes per case study

- **VMS**: no real prototype yet — keep the dashed "recreation goes here" callout
  box from the mockup as-is.
- **Allowance Audit**: real screenshots exist in the original PDF the person
  uploaded earlier in this project — ask them for cleaner exports if the
  existing ones aren't high-res enough, per the note already in that case
  study's markdown file.
- **Cropwise**: real screenshots are ready to go (`cropwise-pest-scan-flow.png`,
  `cropwise-onboarding-flow.png`, `cropwise-home-shop-flow.png`) — already
  referenced by filename in that case study's markdown.
- Stats strip, section tags, pull-quote, and comparison-card treatments from
  the VMS mockup should be extended to the other two case studies with each
  one's own real numbers (both already have strong ones — 700+ managers/£500K+
  for Allowance Audit; 17 growers/3 countries for Cropwise).

## Known open items (not blockers, but don't let Claude Code silently decide these)

1. Philosophy section copy is still placeholder/draft — three real principles
   need to be written properly.
2. Resume page has no design yet.
3. Nav "Resume ↗" link has no destination yet (PDF export vs. the `/resume` page).
4. Contact footer's email/LinkedIn are placeholders — swap in real ones.

## Deployment

1. Push the Next.js project to a GitHub repo.
2. Import that repo into Vercel — it builds and redeploys on every push.
3. In the Vercel project's domain settings, add `niravsaxena.com` — Vercel
   will supply the DNS records needed (an A record for the apex domain, a
   CNAME for `www`).
4. In GoDaddy's DNS management for the domain, replace the existing records
   (currently pointing at the Notion redirect) with the ones Vercel gives you.
5. SSL is automatic once DNS propagates — usually under an hour.
