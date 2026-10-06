import CaseStudyShell from "../../components/CaseStudyShell";
import Lightbox from "../../components/Lightbox";

const TITLE = "Case study: A one-stop app for farmers who'd never used one";
const DESCRIPTION =
  "Remote usability testing with farmers in Indonesia, Thailand and Pakistan, moderated through a translator workshop built from scratch.";
const SHARE_IMAGE = {
  url: "/work/cropwise.jpg",
  width: 1600,
  height: 913,
  alt: TITLE,
};

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Nirav Saxena",
    type: "website",
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [SHARE_IMAGE],
  },
};

const TOC = [
  { id: "context", label: "Context" },
  { id: "translation", label: "Testing through a translator" },
  { id: "workshop", label: "The translator workshop" },
  { id: "learnings", label: "What broke" },
  { id: "impact", label: "Where things stand" },
  { id: "prototype", label: "Inside the app" },
  { id: "reflection", label: "Reflection" },
];

const STATS = [
  { num: "17", label: "growers" },
  { num: "3", label: "countries" },
  { num: "10", label: "feature areas tested" },
  { num: "10", label: "feature areas" },
];

export default function CropwiseCaseStudy() {
  return (
    <CaseStudyShell
      tocItems={TOC}
      title="A one-stop app for farmers who'd never used one"
      meta={["Syngenta · via Lollypop Design Studio", "Lead UX Researcher", "Shipped, launched and scaled across tested markets"]}
      stats={STATS}
      prevHref="/work/allowance-audit"
      prevTitle="Auditing the allowances given to employees"
      nextHref="/work/vms"
      nextTitle="Redesigning a vehicle management tool"
    >
      <section className="case-section" id="context">
        <span className="section-tag">Context</span>
        <h2>Bringing a digital-first product to an analog-first audience</h2>
        <p>
          Syngenta, a company known for seed and fertilizer, had built Cropwise
          Grower into something much bigger than either: weather-based advice,
          seed and fertilizer recommendations, a disease-detection camera
          scanner, an e-commerce shop, geofencing to calculate farm area and
          input needs, and a community feed. After proving the app in India,
          Syngenta was rolling it out further across Asia, with Indonesia,
          Thailand, and Pakistan next in line.
        </p>
        <p>
          A product head and a couple of product managers from Syngenta brought
          the research to Lollypop Design Studio, the agency I was working with
          at the time, ahead of that launch. I led the study with a junior
          researcher supporting on notes, over roughly three to four weeks.
        </p>
      </section>

      <section className="case-section" id="translation">
        <span className="section-tag">Research design</span>
        <h2>Designing a test you can run through someone else&apos;s voice</h2>
        <p>
          None of the growers we tested with spoke English, and I don&apos;t
          speak Bahasa, Thai, or Urdu. Every session ran through a translator:
          regional Syngenta contacts who already knew the farmers and spoke
          English, but weren&apos;t professional research translators.{" "}
          <span className="mark">That gap is exactly what most usability studies don&apos;t plan for</span>,
          so a lot of the real design work on this project happened before a
          single participant touched a screen.
        </p>
        <p>
          We recruited 17 growers across three countries, spanning young,
          middle-aged, and elderly growers.
        </p>
        <div className="tool-table-row">
          <div className="tool-table-col">
            <div className="tool-table-wrap">
              <table className="tool-table">
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>Growers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Indonesia</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>Thailand</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>Pakistan</td>
                    <td>6</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="tool-table-col">
            <div className="tool-table-wrap">
              <table className="tool-table">
                <thead>
                  <tr>
                    <th>Age range</th>
                    <th>Growers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>25-34</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>35-44</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>45-54</td>
                    <td>6</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p className="case-image-caption">
          Recruitment skewed heavily male (15 of 17), a limitation we called
          out directly in the report rather than glossing over.
        </p>
        <p>
          Even the physical setup took real sketching to get right: one device
          in the farmer&apos;s hands running the prototype, with visible-touch
          enabled so we could see exactly where they tapped; a second device
          (ideally a laptop, though we ended up using a second phone)
          positioned with its camera on the farmer and its mic capturing both
          the translator and the farmer, so nothing said in either language was
          lost.
        </p>
        <div className="field-note">
          <Lightbox
            src="/cropwise-device-setup-sketch.png"
            alt="Hand-drawn sketch of the two-device and seating setup, with the farmer, translator, Device 1 running the prototype, and Device 2 recording video and audio"
          />
          <p className="field-note-caption">
            The device and seating setup sketched out and shared with
            translators ahead of each session.
          </p>
        </div>
        <p>
          Sessions covered onboarding plus ten feature areas: dashboard,
          weather, nearby retailers, the shop, crop tracking, pest scanning,
          seed and product scanning, crop protection, community, and loyalty.
        </p>
      </section>

      <section className="case-section" id="workshop">
        <span className="section-tag">Method</span>
        <h2>The translator workshop</h2>
        <p>
          Handing someone a discussion guide and asking them to translate in
          real time isn&apos;t the same as briefing a research moderator:
          treating it that way is how a study quietly loses its data without
          anyone noticing. Before any session, I ran a workshop with the
          translators covering:
        </p>
        <ul>
          <li>
            <strong>Neutrality</strong>: translate as close to verbatim as
            possible; don&apos;t summarize or interpret on the farmer&apos;s
            behalf
          </li>
          <li>
            <strong>Trial runs</strong>: practicing translation on sample
            questions before we were ever in front of a real participant
          </li>
          <li>
            <strong>A few borrowed phrases</strong>: I learned &quot;pause
            here,&quot; &quot;hi, how are you,&quot; and &quot;thank you&quot;
            in each local language myself, partly for accuracy, mostly to build
            a little rapport directly with participants rather than working
            entirely through an intermediary
          </li>
        </ul>
        <p>
          Translators weren&apos;t responsible for note-taking (that stayed
          with the junior researcher), which let them focus fully on the
          participant instead of splitting attention.
        </p>
        <p>
          Because we only had one or two translators per language, each one ran
          multiple sessions, and{" "}
          <span className="mark">something useful happened as a result: they got faster and more attuned over time</span>.
          A &quot;pause here&quot; got relayed instantly instead of a beat late.
          A couple of translators started asking their own follow-up
          &quot;why&quot; without being prompted. Quality didn&apos;t stay flat
          across the study: it visibly compounded.
        </p>
      </section>

      <section className="case-section" id="learnings">
        <span className="section-tag">Key finding</span>
        <h2>What broke, and what that taught us</h2>
        <p>
          Two things derailed sessions outright: blinding midday sun that made
          screens unreadable even at full brightness, and sudden rain that meant
          relocating mid-session. Neither was a research failure: the sun issue
          became a finding.
        </p>
        <blockquote className="pull-quote">
          If your primary users are outdoors, screen visibility in direct
          sunlight isn&apos;t an edge case, it&apos;s core to the design brief.
        </blockquote>
        <p>
          The rest of what surfaced was more about cultural fit than usability
          mechanics. The market icon in the design looked like a Western
          farmers&apos;-market stall, and growers didn&apos;t recognize it. Seed
          examples referenced fruit that simply doesn&apos;t grow where these
          farmers farm. None of this would have been obvious sitting in an
          office in London: it only shows up when you test with the actual
          people the product is for, in the actual conditions they use it in.
        </p>
        <div className="compare-grid">
          <div className="compare-card">
            <span className="compare-label">What we designed</span>
            <span className="compare-value">Western market-stall icon, unfamiliar fruit</span>
          </div>
          <div className="compare-card became">
            <span className="compare-label">What growers recognized</span>
            <span className="compare-value">Local produce and imagery</span>
          </div>
        </div>
        <p>
          It&apos;s worth stating the limits of this research plainly, as the
          report itself did. Translation inevitably lost some nuance: a
          two-word answer would sometimes come back as a seven-word translation.
          The prototype itself shaped behavior it shouldn&apos;t have: an
          autofill feature made parts of onboarding faster than the real app
          would ever be. Connectivity also dropped mid-session more than once.
          None of this invalidates the findings, but a study run through a
          language barrier, on a prototype, and on a compressed timeline
          warrants transparency about its edges rather than an unqualified
          success narrative.
        </p>
      </section>

      <section className="case-section" id="impact">
        <span className="section-tag">Outcome</span>
        <h2>Where things stand</h2>
        <p>
          What I found informed the designs, and the designs that shipped were{" "}
          <span className="mark">almost identical</span> to the research-informed
          versions. The larger experience stayed consistent with what the
          research shaped.
        </p>
        <p>
          The <span className="mark">contextualisation insight</span> became key
          to the app&apos;s expansion. Apps across locations now showcase
          markets, photos and crops based on local context. The agency was also
          invited back to run the same kind of study for farmers in Vietnam.
        </p>
        <p className="proto-note">
          Context, not a claim: public reporting puts Cropwise Grower at roughly
          497,000 registered users across India, Pakistan, Indonesia,
          Bangladesh, Thailand, and Malaysia as of August 2023, with adoption
          accelerating quickly in the months before. That&apos;s Syngenta&apos;s
          reach rather than a result of this study, but it&apos;s the scale that
          the research-informed experience now serves.
        </p>
      </section>

      <section className="case-section" id="prototype">
        <span className="section-tag">Design</span>
        <h2>Inside the app</h2>
        <p>
          <strong>Scan, diagnose, shop: the flow growers used most.</strong>{" "}
          From the home screen, growers could jump straight into the disease
          scanner, get a diagnosis with treatment guidance, and move directly
          from that diagnosis to a recommended product.
        </p>
        <Lightbox
          className="case-image"
          src="/cropwise-pest-scan-flow.png"
          alt="Cropwise Grower: home screen, disease scanner, diagnosis result, and product recommendation"
        />

        <p>
          <strong>Onboarding, built for a first smartphone experience.</strong>{" "}
          Language selection up front, illustrated walkthroughs of the core
          value props, and a simple OTP-based sign-up rather than anything
          requiring a password to remember.
        </p>
        <Lightbox
          className="case-image"
          src="/cropwise-onboarding-flow.png"
          alt="Cropwise Grower onboarding flow"
        />

        <p>
          <strong>Beyond diagnosis: the services and shop growers could reach.</strong>{" "}
          Nearby retailers, crop protection guidance, farm-area calculation, and
          a shop for reordering seed and product.
        </p>
        <Lightbox
          className="case-image"
          src="/cropwise-home-shop-flow.png"
          alt="Cropwise Grower services grid and shop screen"
        />
      </section>

      <section className="case-section" id="reflection">
        <span className="section-tag">Reflection</span>
        <h2>What I carry into every study since</h2>
        <p>
          Before this project, I mostly evaluated designs through my own
          reactions: if something confused me, I&apos;d wonder if it would
          confuse a user too. Cropwise broke that habit for good.
        </p>
        <p className="reflection-lead">
          I watched things that wouldn&apos;t have raised my eyebrow at all
          completely stop someone who has farmed that land for twenty years:
        </p>
        <div className="feature-tags">
          <span className="tag">An unfamiliar icon</span>
          <span className="tag">An unfamiliar fruit</span>
          <span className="tag">Glare on a screen</span>
        </div>
        <p>
          It taught me to treat a user&apos;s{" "}
          <span className="mark">physical environment</span>,{" "}
          <span className="mark">community</span>, and{" "}
          <span className="mark">existing ways of getting advice</span> as
          part of the design problem, not background noise around it.
        </p>
        <p>
          That&apos;s a lens I now bring to every study, not just the ones
          with an obvious language gap.
        </p>
      </section>
    </CaseStudyShell>
  );
}
