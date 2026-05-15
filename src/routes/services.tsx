import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, Cloud, Server, Shield, Zap, GitBranch, Activity, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Cloud Architecture, DevOps & Kubernetes Consulting" },
      { name: "description", content: "Fixed-scope engagements for cloud architecture, Kubernetes platforms, CI/CD, security, observability and FinOps cost optimization." },
      { property: "og:title", content: "Services — Northwind Cloud" },
      { property: "og:description", content: "Six core capabilities delivered as fixed-scope engagements or embedded with your team." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    desc: "Greenfield AWS, Azure and GCP environments — or a migration from your current setup. Designed for scale, security and cost-efficiency from day one.",
    bullets: ["Multi-account / landing-zone setup", "VPC, networking & connectivity", "Disaster recovery & backups", "Well-Architected reviews"],
    price: "from $18,000",
  },
  {
    icon: Server,
    title: "Kubernetes Platforms",
    desc: "Production-grade EKS, GKE or AKS clusters with GitOps, autoscaling and zero-downtime deploys. Ready for your developers on day one.",
    bullets: ["GitOps with Argo CD / Flux", "Service mesh & ingress", "Cluster autoscaling & spot mix", "Developer self-service"],
    price: "from $24,000",
  },
  {
    icon: GitBranch,
    title: "CI/CD & Automation",
    desc: "Pipelines you can trust. Reproducible builds, automated testing, progressive delivery and full audit trails for every change.",
    bullets: ["GitHub Actions / GitLab / Jenkins", "Trunk-based & feature-flag flows", "Canary & blue-green deploys", "Supply-chain security (SLSA)"],
    price: "from $12,000",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    desc: "SOC 2, ISO 27001 and HIPAA-aligned controls implemented and documented. Hardened IAM, secrets management and continuous compliance.",
    bullets: ["IAM & SSO consolidation", "Secrets vaulting (Vault / KMS)", "CSPM & policy-as-code", "Audit-ready evidence collection"],
    price: "from $15,000",
  },
  {
    icon: Activity,
    title: "Observability",
    desc: "See what's actually happening. Metrics, logs and traces unified into a single workflow your team will actually use during incidents.",
    bullets: ["Prometheus / Grafana / Loki", "OpenTelemetry instrumentation", "SLOs & error budgets", "On-call & alerting hygiene"],
    price: "from $10,000",
  },
  {
    icon: Zap,
    title: "Cost Optimization",
    desc: "FinOps engagement that pays for itself in the first month. Right-sizing, commitment planning and engineering-led waste reduction.",
    bullets: ["Detailed cost & usage audit", "Savings plan / RI strategy", "Architectural waste removal", "Showback / chargeback setup"],
    price: "Performance-based",
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="bg-hero text-white">
        <div className="container-narrow py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-white/70 font-semibold">Services</div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">
              Engagements designed around outcomes, not hours.
            </h1>
            <p className="mt-5 text-lg text-white/80">
              Each service below is a fixed-scope, fixed-price engagement with clear
              deliverables. Need something embedded or ongoing? We do that too.
            </p>
          </div>
        </div>
      </section>

      <section className="container-narrow py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-8 shadow-card flex flex-col">
              <div className="flex items-start justify-between">
                <div className="size-12 grid place-items-center rounded-lg bg-secondary text-primary">
                  <s.icon className="size-5" />
                </div>
                <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                  {s.price}
                </span>
              </div>
              <h2 className="mt-6 text-xl font-semibold text-navy">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-5 space-y-2 flex-1">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-foreground">
                    <Check className="size-4 mt-0.5 text-accent shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Discuss this engagement <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist border-y border-border">
        <div className="container-narrow py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy max-w-2xl mx-auto">
            Not sure where to start?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A 30-minute call is the fastest way to find out. We'll send a written
            recommendation within five business days.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition shadow-cta"
          >
            Book a free consultation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
