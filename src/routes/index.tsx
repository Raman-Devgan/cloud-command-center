import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, Cloud, Server, Shield, Zap, GitBranch, Activity, Check, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Northwind Cloud — Cloud Engineering & DevOps Consulting" },
      { name: "description", content: "We help engineering teams ship faster on AWS, Azure, GCP and Kubernetes. Reliable infrastructure, automated pipelines, lower cloud bills." },
      { property: "og:title", content: "Northwind Cloud — Cloud & DevOps Consulting" },
      { property: "og:description", content: "Reliable cloud infrastructure, automated pipelines, lower bills. Trusted by engineering teams." },
    ],
  }),
  component: HomePage,
});

const logos = ["Acme Corp", "Globex", "Initech", "Umbrella", "Stark Inc", "Wayne Co"];

const services = [
  { icon: Cloud, title: "Cloud Architecture", desc: "Production-ready AWS, Azure & GCP environments designed for scale and cost efficiency." },
  { icon: Server, title: "Kubernetes Platforms", desc: "Managed EKS/GKE/AKS clusters with GitOps, autoscaling and zero-downtime deploys." },
  { icon: GitBranch, title: "CI/CD & Automation", desc: "Pipelines that ship safely — tested, observable, and reproducible on every commit." },
  { icon: Shield, title: "Security & Compliance", desc: "SOC 2 / ISO-aligned controls, IAM hardening, secrets management and audit trails." },
  { icon: Activity, title: "Observability", desc: "Metrics, logs and traces unified in Prometheus, Grafana and OpenTelemetry." },
  { icon: Zap, title: "Cost Optimization", desc: "Right-sizing, savings plans and FinOps practices that cut cloud spend by 30–60%." },
];

const stats = [
  { v: "120+", l: "Production deployments" },
  { v: "99.99%", l: "Average platform uptime" },
  { v: "$4.2M", l: "Annual cloud spend optimized" },
  { v: "8 yrs", l: "Building cloud platforms" },
];

const testimonials = [
  {
    quote: "They rebuilt our deployment pipeline in three weeks. Releases went from a weekly ordeal to multiple per day with zero downtime.",
    name: "Sarah Chen",
    role: "VP Engineering, Globex",
  },
  {
    quote: "Cut our AWS bill by 41% in the first quarter without a single performance regression. Genuinely the best money we've spent.",
    name: "Marcus Reed",
    role: "CTO, Initech",
  },
  {
    quote: "A real partner — not a vendor. Our team learned more in two months than in the prior two years.",
    name: "Priya Anand",
    role: "Head of Platform, Stark Inc",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative bg-hero text-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute -top-40 -right-40 size-[480px] rounded-full bg-white/5 blur-3xl" />
        <div className="container-narrow relative pt-20 pb-28 lg:pt-28 lg:pb-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs text-white/90 mb-6">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Now booking Q3 engagements
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Cloud infrastructure your engineers will actually love.
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
              We design, build and operate AWS, Azure and Kubernetes platforms for
              high-growth product teams. Faster releases, fewer incidents, lower bills.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-white text-primary px-6 py-3 font-medium hover:bg-white/90 transition shadow-cta"
              >
                Book a free consultation <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3 font-medium text-white hover:bg-white/10 transition"
              >
                Explore services
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-2 text-sm text-white/70">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-300 text-amber-300" />
                ))}
              </div>
              <span>4.9/5 from 60+ engineering teams</span>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO BAR */}
      <section className="border-y border-border bg-mist">
        <div className="container-narrow py-8 flex flex-wrap justify-center md:justify-between items-center gap-6">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Trusted by teams at</span>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-muted-foreground">
            {logos.map((l) => (
              <span key={l} className="text-sm font-semibold tracking-tight opacity-70 hover:opacity-100 transition">
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-narrow py-24">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-accent font-semibold">What we do</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy">
            Everything you need between code and customers.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six core capabilities, delivered as fixed-scope engagements or embedded with your team.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elevated hover:border-accent/40 transition"
            >
              <div className="size-11 grid place-items-center rounded-lg bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <Link
                to="/services"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all"
              >
                Learn more <ArrowRight className="size-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-mist border-y border-border">
        <div className="container-narrow py-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="text-3xl sm:text-4xl font-bold text-navy">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-narrow py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-xs uppercase tracking-widest text-accent font-semibold">How we work</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy">
              A predictable engagement, from kickoff to handover.
            </h2>
            <p className="mt-4 text-muted-foreground">
              No surprises, no overruns. Each phase has clear deliverables and a fixed timeline.
            </p>
          </div>
          <ol className="space-y-6">
            {[
              { n: "01", t: "Discovery & audit", d: "Two-week deep dive into your current stack, costs and pain points." },
              { n: "02", t: "Architecture & roadmap", d: "A signed-off design with milestones, owners and clear success metrics." },
              { n: "03", t: "Build & migrate", d: "We implement in your account with infrastructure-as-code and full review." },
              { n: "04", t: "Operate & enable", d: "Runbooks, training and on-call rotation handover to your team." },
            ].map((p) => (
              <li key={p.n} className="flex gap-5 p-5 rounded-xl border border-border bg-card shadow-card">
                <div className="font-mono text-sm text-accent font-semibold">{p.n}</div>
                <div>
                  <div className="font-semibold text-navy">{p.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.d}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-mist border-y border-border">
        <div className="container-narrow py-24">
          <div className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold">Client stories</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy">
              Engineering leaders trust us with their platform.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-xl bg-card border border-border p-6 shadow-card flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed flex-1">"{t.quote}"</blockquote>
                <figcaption className="mt-6 pt-4 border-t border-border">
                  <div className="font-semibold text-navy text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="container-narrow py-24">
        <div className="rounded-2xl bg-hero text-white p-10 lg:p-16 relative overflow-hidden shadow-elevated">
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                Ready to make your infrastructure a competitive advantage?
              </h2>
              <p className="mt-4 text-white/80 max-w-lg">
                Book a free 30-minute call. We'll review your stack and send back a written
                assessment with three concrete improvements — yours to keep, no strings attached.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-white text-primary px-6 py-3 font-medium hover:bg-white/90 transition"
                >
                  Book my call <ArrowRight className="size-4" />
                </Link>
                <Link to="/projects" className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3 font-medium hover:bg-white/10 transition">
                  See case studies
                </Link>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "Written infrastructure assessment within 5 business days",
                "Three prioritized recommendations with effort estimates",
                "Cost-saving opportunities benchmarked against your peers",
                "No sales pitch. Just engineering.",
              ].map((b) => (
                <li key={b} className="flex gap-3 items-start text-white/90">
                  <span className="mt-0.5 size-5 grid place-items-center rounded-full bg-white/15">
                    <Check className="size-3" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
