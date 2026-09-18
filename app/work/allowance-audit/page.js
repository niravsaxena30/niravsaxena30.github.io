import CaseStudyShell from "../../components/CaseStudyShell";

export const metadata = {
  title: "Allowance Audit Tool | Nirav Saxena",
  description:
    "A one-week sprint that helped surface incorrectly paid allowances across the whole manager population.",
};

const TOC = [
  { id: "context", label: "Context" },
  { id: "framing", label: "Reframing the ask" },
  { id: "iteration", label: "Fast iteration" },
  { id: "shipped", label: "What shipped" },
  { id: "impact", label: "The numbers" },
  { id: "reflection", label: "Reflection" },
];

const STATS = [
  { num: "1 wk", label: "research sprint" },
  { num: "700+", label: "managers" },
  { num: "94%", label: "coverage" },
  { num: "£500K+", label: "savings found" },
];

export default function AllowanceAuditCaseStudy() {
  return (
    <CaseStudyShell
      tocItems={TOC}
      title="A quiet problem, hiding in plain sight"
      meta={["BT Group · Total Reward", "UX Research + content/design strategy", "Live, launched and delivering results"]}
      stats={STATS}
      prevHref="/work/vms"
      prevTitle="Redesigning a vehicle management tool"
      nextHref="/work/cropwise"
      nextTitle="Bringing a digital-first product to an analog-first audience"
    >
      <section className="case-section" id="context">
        <span className="section-tag">The problem</span>
        <h2>Auditing the allowances given to employees</h2>
        <p>
          Some BT colleagues receive on-call and shift allowances, extra pay for
          being reachable at odd hours or working shift patterns. Nobody was
          reviewing whether those allowances were still warranted. Guidance
          existed, but wasn&apos;t being followed. Documentation wasn&apos;t
          handed cleanly from one manager to the next. And when a new manager
          inherited a team, the last thing they wanted to touch was
          someone&apos;s pay: it&apos;s someone&apos;s livelihood, and without
          full context, the safer move was to leave it alone.
        </p>
        <p>
          So <span className="mark">allowances just kept flowing, unreviewed, by default rather than by decision</span>.
        </p>
      </section>

      <section className="case-section" id="framing">
        <span className="section-tag">Reframing</span>
        <h2>From &quot;it&apos;s just a form&quot; to &quot;this is someone&apos;s income&quot;</h2>
        <p>
          The initial framing was simple: build a form. See your team, see their
          allowance, decide if it&apos;s still right. Practically a Google Form
          with extra steps.
        </p>
        <p>
          That framing didn&apos;t survive contact with the actual stakes. This
          wasn&apos;t a routine data-entry task:{" "}
          <span className="mark">every dropdown selection could end or continue someone&apos;s income</span>.
          The team was also working within the real constraints of Microsoft
          PowerApps, which meant design ambition had to be negotiated against
          what the platform could actually do.
        </p>
        <div className="compare-grid">
          <div className="compare-card">
            <span className="compare-label">What we set out to build</span>
            <span className="compare-value">A bare decision form</span>
          </div>
          <div className="compare-card became">
            <span className="compare-label">What shipped instead</span>
            <span className="compare-value">A guided review, written for zero context</span>
          </div>
        </div>
      </section>

      <section className="case-section" id="iteration">
        <span className="section-tag">Process</span>
        <h2>Fast iteration, with real judgment calls</h2>
        <p>
          Alongside another researcher, I worked directly with the designer and
          developer in tight, rapid cycles: test, discuss, change, retest. The
          recurring hard question after every session wasn&apos;t &quot;what did
          we learn,&quot; it was:
        </p>
        <blockquote className="pull-quote">
          Is this enough evidence to justify changing it?
        </blockquote>
        <p>
          A judgment call with no formula, made collaboratively each time. What
          started as a bare decision form became something much more
          deliberate:
        </p>
        <ul>
          <li>
            A clear three-option decision: continue the allowance, discontinue
            it as incorrect (the colleague may be owed a different allowance
            instead), or discontinue it as the colleague being ineligible
          </li>
          <li>
            Instructional content, FAQ links, and guidance articles rewritten
            for managers with zero context on allowance policy
          </li>
          <li>
            Careful language on what submitting an audit actually meant, spelled
            out before a manager could commit to it
          </li>
          <li>
            Even the notification email got design attention: this
            wasn&apos;t &quot;researcher hands off findings,&quot; it was
            research, content, and design decisions made by the same small team
            in real time
          </li>
        </ul>
        <p>
          That shift, from running studies to actively shaping the copy, the
          flow, and the guidance, is where the role moved from researcher to
          strategist.
        </p>
      </section>

      <section className="case-section" id="shipped">
        <span className="section-tag">Design</span>
        <h2>What shipped</h2>
        <p>
          The final tool guided managers through a four-step review: review each
          colleague, make a decision, discuss with your colleague, submit your
          review, with FAQ links surfaced at the top rather than buried in a
          help center. Each manager saw their team in a single table
          (framework, allowance type and value, a decision dropdown, and a
          comments field) tracked against a visible progress bar. Submission
          required confirming an explicit summary of consequences before it went
          through, closing with a clear success state so managers knew the audit
          had actually registered.
        </p>
        <p className="proto-note">
          Recreated screenshots of the review table and the submission
          confirmation step, the two moments that carry the most design intent,
          will sit here once exported at high enough resolution from the
          original PDF.
        </p>
      </section>

      <section className="case-section" id="impact">
        <span className="section-tag">Outcome</span>
        <h2>The numbers</h2>
        <p>
          The tool launched in early July. Over the following four weeks,{" "}
          <span className="accent-num">90% of 700+ managers</span> completed and
          submitted their audit, covering <span className="accent-num">94%</span>{" "}
          of colleagues receiving shift or on-call allowances. Across all of
          them, only two queries about how the tool worked, and zero system
          issues. The programme lead was able to self-serve through the entire
          audit period without needing extra support from the team.
        </p>
        <p>
          Early analysis points to roughly a{" "}
          <span className="accent-num">5% error rate</span> in allowances:{" "}
          <span className="mark">potentially surfacing over £500,000 in incorrectly paid allowances</span>.
        </p>
        <p>
          The programme lead&apos;s feedback was unprompted, and specifically
          called out how little support the tool needed given the number of
          people who used it. It was escalated by their team to a Director, who
          shared it back with the whole delivery team.
        </p>
      </section>

      <section className="case-section" id="reflection">
        <span className="section-tag">Reflection</span>
        <h2>What this taught me</h2>
        <p>
          I went in assuming this was a small, low-effort project: just a form,
          how much could it really need? The deep dive proved the opposite: at
          this scale, every word of instruction, every label on a dropdown,
          every line of an email is a decision with real downstream weight.
          Tactical, unglamorous work, done with real research discipline, can
          carry outsized impact. It&apos;s a lesson I carry into every project
          since, glamorous or not: the size of the ask has very little to do
          with the size of the impact.
        </p>
      </section>
    </CaseStudyShell>
  );
}
