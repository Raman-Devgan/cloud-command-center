import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Case Studies — Cloud & DevOps Engagements" },
      { name: "description", content: "Real engagements, measurable outcomes. From $4M cloud cost reductions to platform migrations and Kubernetes rollouts." },
      { property: "og:title", content: "Case Studies — Northwind Cloud" },
      { property: "og:description", content: "Selected client engagements with measurable outcomes." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    client: "Globex Logistics",
    industry: "Logistics SaaS",
    title: "Migrated from monolithic ECS to multi-region EKS",
    summary: "Re-platformed a 12-service product onto Kubernetes with GitOps, cutting deploy time from 45 minutes to 4 and reaching 99.99% uptime.",
    metrics: [
      { v: "11×", l: "Faster deploys" },
      { v: "99.99%", l: "Uptime" },
      { v: "0", l: "Customer-impacting incidents" },
    ],
    tags: ["AWS", "EKS", "Argo CD", "Terraform"],
  },
  {
    client: "Initech Analytics",
    industry: "B2B Data",
    title: "FinOps overhaul: 41% AWS bill reduction in one quarter",
    summary: "Identified $1.8M of annual waste through rightsizing, savings plans and architectural changes — without a single performance regression.",
    metrics: [
      { v: "41%", l: "Cost reduction" },
      { v: "$1.8M", l: "Annual savings" },
      { v: "60d", l: "Time to value" },
    ],
    tags: ["AWS", "FinOps", "Athena", "CUR"],
  },
  {
    client: "Stark Health",
    industry: "Digital Health",
    title: "HIPAA-aligned platform on Azure with full audit trail",
    summary: "Built a compliant landing zone, IAM model and CI/CD pipeline that passed external audit on first attempt.",
    metrics: [
      { v: "1st", l: "Audit pass" },
      { v: "100%", l: "IaC coverage" },
      { v: "12 wks", l: "Delivery" },
    ],
    tags: ["Azure", "HIPAA", "Bicep", "GitHub Actions"],
  },
  {
    client: "Wayne Robotics",
    industry: "Industrial IoT",
    title: "Edge-to-cloud telemetry pipeline at 2M events/sec",
    summary: "Designed a Kafka + Flink streaming platform on GCP that ingests fleet telemetry from 40,000 devices in real time.",
    metrics: [
      { v: "2M/s", l: "Events ingested" },
      { v: "<200ms", l: "End-to-end latency" },
      { v: "40k", l: "Connected devices" },
    ],
    tags: ["GCP", "Kafka", "Flink", "Pub/Sub"],
  },
  {
    client: "Umbrella Retail",
    industry: "E-commerce",
    title: "Black Friday readiness: 8× scale with no incidents",
    summary: "Capacity planning, load testing and autoscaling tuning that handled an 8× traffic spike with zero customer impact.",
    metrics: [
      { v: "8×", l: "Peak traffic" },
      { v: "0", l: "Incidents" },
      { v: "32%", l: "Lower p99 latency" },
    ],
    tags: ["AWS", "k6", "EKS", "CloudFront"],
  },
  {
    client: "Acme Fintech",
    industry: "Financial Services",
    title: "SOC 2 Type II readiness in 90 days",
    summary: "Implemented controls, evidence collection and policy-as-code across 38 AWS accounts. Passed audit with zero findings.",
    metrics: [
      { v: "0", l: "Audit findings" },
      { v: "38", l: "Accounts hardened" },
      { v: "90d", l: "End-to-end" },
    ],
    tags: ["AWS", "SOC 2", "OPA", "Vault"],
  },
];

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="bg-hero text-white">
        <div className="container-narrow py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-white/70 font-semibold">Case Studies</div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">
              Outcomes our clients can put on a board slide.
            </h1>
            <p className="mt-5 text-lg text-white/80">
              A selection of recent engagements. Names changed where required by NDA — happy to share details on a call.
            </p>
          </div>
        </div>
      </section>

      <section className="container-narrow py-20 space-y-8">
        {projects.map((p, i) => (
          <article
            key={p.client}
            className="rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:shadow-elevated transition"
          >
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-3 p-8 lg:p-10">
                <div className="text-xs font-semibold text-accent uppercase tracking-widest">
                  {String(i + 1).padStart(2, "0")} · {p.industry}
                </div>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-navy">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">Client: {p.client}</p>
                <p className="mt-4 text-foreground leading-relaxed">{p.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-primary">{t}</span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 bg-mist border-t lg:border-t-0 lg:border-l border-border p-8 lg:p-10 grid grid-cols-3 lg:grid-cols-1 gap-6 content-center">
                {p.metrics.map((m) => (
                  <div key={m.l}>
                    <div className="text-2xl lg:text-3xl font-bold text-navy">{m.v}</div>
                    <div className="text-xs text-muted-foreground mt-1">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="container-narrow pb-24">
        <div className="rounded-2xl bg-navy text-white p-10 lg:p-14 flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Have a similar problem?</h2>
            <p className="mt-2 text-white/80">We'll send back a written assessment within five days.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-white text-primary px-6 py-3 font-medium hover:bg-white/90 transition"
          >
            Start a conversation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
