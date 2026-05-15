import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Award, Users, Target, Heart, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Northwind Cloud" },
      { name: "description", content: "A small senior team of cloud and DevOps engineers, helping product companies build infrastructure that lasts." },
      { property: "og:title", content: "About — Northwind Cloud" },
      { property: "og:description", content: "Senior engineers with eight years of building cloud platforms for high-growth companies." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Outcomes over hours", desc: "We price on the result. If it doesn't ship, you don't pay." },
  { icon: Users, title: "Embedded, not external", desc: "We work inside your team's workflow — Slack, sprints and on-call." },
  { icon: Award, title: "Senior only", desc: "Every engagement is led by an engineer with 10+ years of platform experience." },
  { icon: Heart, title: "Leave it better", desc: "Documentation, training and runbooks come standard. No lock-in." },
];

const certs = [
  "AWS Solutions Architect Professional",
  "AWS DevOps Engineer Professional",
  "Certified Kubernetes Administrator (CKA)",
  "Certified Kubernetes Security (CKS)",
  "HashiCorp Terraform Associate",
  "Microsoft Azure Solutions Architect",
  "Google Cloud Professional Architect",
  "FinOps Certified Practitioner",
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-hero text-white">
        <div className="container-narrow py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-white/70 font-semibold">About</div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">
              Built by engineers who have been on the other side of the pager.
            </h1>
            <p className="mt-5 text-lg text-white/80">
              Northwind Cloud is a small senior consultancy. We have spent the last eight
              years inside fast-growing product companies — building platforms, leading
              SRE teams and yes, getting paged at 3am. Now we help others avoid that.
            </p>
          </div>
        </div>
      </section>

      <section className="container-narrow py-20 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold text-navy">Our story</h2>
          <p className="text-foreground leading-relaxed">
            We started Northwind in 2017 after a decade of leading platform teams at companies
            ranging from 20-person startups to public-listed enterprises. The pattern was
            always the same: infrastructure work was undervalued until something broke, and by
            then it was too late.
          </p>
          <p className="text-foreground leading-relaxed">
            Today we partner with engineering leaders who want to get ahead of that curve.
            We work in fixed-scope engagements with clear deliverables, embed in client teams
            for the duration of a project, and leave behind documentation good enough that
            we are not needed again.
          </p>
          <p className="text-foreground leading-relaxed">
            Our team is deliberately small — six senior engineers — and we only take on
            projects we can do well. If we are not the right fit, we will say so and
            recommend someone who is.
          </p>
        </div>
        <aside className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="text-3xl font-bold text-navy">120+</div>
            <div className="text-sm text-muted-foreground mt-1">Production deployments</div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="text-3xl font-bold text-navy">8 years</div>
            <div className="text-sm text-muted-foreground mt-1">Building cloud platforms</div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="text-3xl font-bold text-navy">6</div>
            <div className="text-sm text-muted-foreground mt-1">Senior engineers, no juniors</div>
          </div>
        </aside>
      </section>

      <section className="bg-mist border-y border-border">
        <div className="container-narrow py-20">
          <h2 className="text-3xl font-bold text-navy max-w-xl">What we believe</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl bg-card border border-border p-6 shadow-card">
                <div className="size-10 grid place-items-center rounded-lg bg-secondary text-primary">
                  <v.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-narrow py-20">
        <h2 className="text-3xl font-bold text-navy">Certifications</h2>
        <p className="mt-3 text-muted-foreground max-w-xl">Across the team, we hold the certifications you would expect — kept current and re-verified annually.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c) => (
            <div key={c} className="rounded-lg border border-border bg-card p-4 text-sm text-foreground flex items-center gap-3">
              <span className="size-2 rounded-full bg-accent" />
              {c}
            </div>
          ))}
        </div>
      </section>

      <section className="container-narrow pb-24">
        <div className="rounded-2xl bg-navy text-white p-10 lg:p-14 flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Like what you read?</h2>
            <p className="mt-2 text-white/80">Let's talk about your platform.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-white text-primary px-6 py-3 font-medium hover:bg-white/90 transition"
          >
            Get in touch <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
