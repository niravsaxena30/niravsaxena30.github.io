import Image from "next/image";
import Link from "next/link";

const CASE_STUDIES = [
  {
    href: "/work/vms",
    image: "/work/vms.jpg",
    title: "The tool nobody trusted",
    description:
      "Two research phases and a tested AI-chat concept, until users made it clear the plain dashboard was what they actually wanted.",
    client: "BT Group / Openreach",
    stats: [
      { num: "17", label: "interviews" },
      { num: "3", label: "user roles" },
      { num: "2", label: "research phases" },
    ],
  },
  {
    href: "/work/allowance-audit",
    image: "/work/allowance-audit.jpg",
    title: "A quiet problem, hiding in plain sight",
    description:
      "A one-week sprint that helped surface incorrectly paid allowances across the whole manager population.",
    client: "BT Group",
    stats: [
      { num: "700+", label: "managers" },
      { num: "94%", label: "coverage" },
      { num: "£500K+", label: "savings found" },
    ],
  },
  {
    href: "/work/cropwise",
    image: "/work/cropwise.jpg",
    title: "A one-stop app for farmers who'd never used one",
    description:
      "Remote usability testing with farmers across three countries, moderated through a translator workshop built from scratch.",
    client: "Syngenta · Lollypop Design Studio",
    stats: [
      { num: "17", label: "growers" },
      { num: "3", label: "countries" },
      { num: "497K+", label: "regional users" },
    ],
  },
];

export default function WorkSection() {
  return (
    <section className="wrap" id="work">
      <h2>Case studies</h2>
      <div className="work-grid">
        {CASE_STUDIES.map((cs) => (
          <Link className="work-card" href={cs.href} key={cs.href}>
            <div className="work-card-image">
              <Image
                src={cs.image}
                alt=""
                fill
                sizes="(max-width: 720px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="work-card-body">
              <h3>{cs.title}</h3>
              <div className="work-card-divider" />
              <div className="work-card-footer">
                <div className="work-card-desc">
                  <p>{cs.description}</p>
                  <p className="work-card-client">{cs.client}</p>
                </div>
                <div className="work-card-stats">
                  {cs.stats.map((s) => (
                    <div key={s.label}>
                      <span className="stat-num">{s.num}</span>
                      <span className="stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
