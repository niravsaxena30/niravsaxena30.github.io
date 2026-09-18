import CaseStudyShell from "../../components/CaseStudyShell";

export const metadata = {
  title: "Vehicle Asset Management redesign | Nirav Saxena",
  description:
    "Two research phases and a tested AI-chat concept, until users made it clear the plain dashboard was what they actually wanted.",
};

const TOC = [
  { id: "context", label: "The problem" },
  { id: "discovery", label: "The research approach" },
  { id: "twist", label: "Key findings" },
  { id: "impact", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

const STATS = [
  { num: "3", label: "user roles interviewed" },
  { num: "2", label: "research phases" },
  { num: "17", label: "research sessions" },
  { num: "6 wks", label: "total research time" },
];

export default function VmsCaseStudy() {
  return (
    <CaseStudyShell
      tocItems={TOC}
      title="The tool nobody trusted"
      meta={["BT Group / Openreach", "UX Research", "Paused, funding resuming in ~6 months"]}
      stats={STATS}
      prevHref="/work/cropwise"
      prevTitle="Bringing a digital-first product to an analog-first audience"
      nextHref="/work/allowance-audit"
      nextTitle="Auditing the allowances given to employees"
    >
      <section className="case-section" id="context">
        <span className="section-tag">The problem</span>
        <h2>Redesigning a vehicle management tool</h2>
        <p>
          Engineers working for BT Group and Openreach are responsible for
          going out and physically repairing connections for consumers. They
          get a vehicle assigned to do this job. Managing thousands of those
          vehicles across BT and Openreach fell to a tool called eOrg: an
          interface that hadn&apos;t been meaningfully updated in years,
          originally built to track every kind of company asset from laptops
          to vans.
        </p>
        <p>Different tools were responsible for different parts of the process.</p>
        <div className="tool-table-wrap">
          <table className="tool-table">
            <thead>
              <tr>
                <th>eOrg</th>
                <th>Holman</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li>Reassignment of vehicle</li>
                    <li>Updating location</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Booking repairs</li>
                    <li>Daily vehicle check</li>
                    <li>Scheduling service</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Fleet Managers had learned not to trust eOrg&apos;s data, so they
          defaulted to Holman even for the handful of things eOrg was
          supposed to own.{" "}
          <span className="mark">A tool nobody trusts gets used less</span>,
          which only made the data staler.
        </p>
        <p>
          The asset management team brought me in with an open brief:
          understand what&apos;s actually broken, and build the case for
          whether it&apos;s worth fixing.
        </p>
      </section>

      <section className="case-section" id="discovery">
        <span className="section-tag">The research approach</span>
        <h2>Two phases, one consistent question</h2>
        <p>
          The redesign moved through two connected phases: first
          understanding how the system was actually used, then testing
          whether the new concept held up under real tasks.
        </p>
        <div className="phase-table">
          <div className="phase-col">
            <p className="phase-label">Phase 01 / Discovery</p>
            <h3 className="phase-title">Cross-Role Interviews</h3>
            <p className="phase-desc">
              Three groups touch vehicle allocation (Engineers/Drivers,
              Patch Managers, and Fleet leads), each with a different stake.
              I ran a 3-week discovery sprint of in-depth interviews across
              all three, digging into workflows, pain points, and what
              information actually mattered for their decisions.
            </p>
            <div className="phase-divider" />
            <ul className="phase-list">
              <li>Info scattered across 3 disconnected systems</li>
              <li>Vehicles went &quot;stuck&quot; with no traceable owner</li>
              <li>Bad parking data caused mislocated service bookings</li>
              <li>Complexity forced reliance on informal training</li>
            </ul>
          </div>
          <div className="phase-col">
            <p className="phase-label">Phase 02 / Usability Testing</p>
            <h3 className="phase-title">Prototype Validation</h3>
            <p className="phase-desc">
              Design built a to-be concept centered on an AI chat assistant
              as the primary interaction, with the dashboard kept as a
              fallback layer. I tested it over another 3-week round with
              Patch Managers and Drivers, watching for findability,
              understandability, and satisfaction.
            </p>
            <div className="phase-divider" />
            <ul className="phase-list">
              <li>&quot;Set as home location&quot; checkbox confused most Patch Managers</li>
              <li>Users expected their team&apos;s vehicles to surface automatically</li>
              <li>Matched flows moved faster &amp; more confidently than eOrg</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="case-section" id="twist">
        <span className="section-tag">Key findings</span>
        <h2>The plot twist</h2>
        <p>
          Here&apos;s the part that made this project a strategy story
          rather than just a usability report.
        </p>
        <blockquote className="pull-quote">
          Users preferred the plain dashboard over the AI chat.
        </blockquote>
        <p>
          Given the choice, people wanted information at a glance, not a
          conversation to have with a system before they could even see it.
          That single finding reshaped the whole project.
        </p>
        <div className="compare-grid">
          <div className="compare-card">
            <span className="compare-label">What we built first</span>
            <span className="compare-value">AI chat as the primary interaction</span>
          </div>
          <div className="compare-card became">
            <span className="compare-label">What shipped instead</span>
            <span className="compare-value">A fast, clear dashboard</span>
          </div>
        </div>
        <p>
          The chat feature got deprioritized, freeing up budget for a fast,
          clear dashboard and automatic vehicle transfer when someone leaves
          a role.
        </p>
        <p>
          The final design included a dashboard with assigned vehicles and
          recent activity, a vehicle list with per-vehicle transfer/amend
          actions, a transfer-request flow, and a manager-facing review
          screen with a visible before/after record.
        </p>
      </section>

      <section className="case-section" id="impact">
        <span className="section-tag">Outcome</span>
        <h2>Where it stands</h2>
        <p>
          Before the project paused, the concept and prototype were
          validated with real users across all three groups. It&apos;s
          currently on hold pending funding, with a build phase expected to
          start in roughly <span className="accent-num">six months</span>.
        </p>
      </section>

      <section className="case-section" id="reflection">
        <span className="section-tag">Reflection</span>
        <h2>What I&apos;d do differently</h2>
        <p>
          I&apos;d push harder, earlier, for a clear funding roadmap before
          scoping the full vision, shaping a smaller proof-of-concept that
          could ship and prove value on its own, rather than designing the
          complete picture and losing momentum when the bigger ask stalled.
        </p>
      </section>
    </CaseStudyShell>
  );
}
