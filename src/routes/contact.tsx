import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Mail, Phone, MapPin, Check, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a free cloud consultation" },
      { name: "description", content: "Tell us about your infrastructure. We'll send a written assessment within five business days. No sales pitch." },
      { property: "og:title", content: "Contact — Northwind Cloud" },
      { property: "og:description", content: "Book a free 30-minute consultation. Written assessment within five days." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="bg-hero text-white">
        <div className="container-narrow py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-white/70 font-semibold">Contact</div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">
              Let's talk about your infrastructure.
            </h1>
            <p className="mt-5 text-lg text-white/80">
              Tell us a bit about your stack and what you're trying to solve. We'll reply within
              one business day with next steps — usually a 30-minute call.
            </p>
          </div>
        </div>
      </section>

      <section className="container-narrow py-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-8 lg:p-10 shadow-card">
          {submitted ? (
            <div className="text-center py-12">
              <div className="size-14 mx-auto grid place-items-center rounded-full bg-accent/15 text-accent">
                <Check className="size-7" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-navy">Thanks — we got it.</h2>
              <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                We'll reply within one business day. In the meantime, feel free to browse our case studies.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5"
            >
              <h2 className="text-2xl font-bold text-navy">Send us a message</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" name="name" required />
                <Field label="Work email" name="email" type="email" required />
                <Field label="Company" name="company" />
                <Field label="Role" name="role" placeholder="VP Engineering, CTO..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  How can we help?
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Tell us about your stack, current pain points, and what success looks like."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition shadow-cta"
              >
                Send message <ArrowRight className="size-4" />
              </button>
              <p className="text-xs text-muted-foreground">
                We'll only use your details to reply. No newsletters, ever.
              </p>
            </form>
          )}
        </div>

        <aside className="space-y-6">
          <InfoRow icon={Mail} label="Email" value="hello@northwindcloud.com" />
          <InfoRow icon={Phone} label="Phone" value="+1 (415) 555-0142" />
          <InfoRow icon={MapPin} label="Office" value="San Francisco, CA · Remote-first across NA & EU" />

          <div className="rounded-xl bg-mist border border-border p-6">
            <div className="text-sm font-semibold text-navy">Free consultation includes</div>
            <ul className="mt-3 space-y-2 text-sm text-foreground">
              {[
                "30-minute architecture call",
                "Written assessment in 5 days",
                "Three prioritized recommendations",
                "No sales pitch",
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <Check className="size-4 mt-0.5 text-accent shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground mb-1.5">
        {label}{required && <span className="text-destructive"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex gap-4">
      <div className="size-10 rounded-lg bg-secondary text-primary grid place-items-center shrink-0">
        <Icon className="size-4" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-1 text-sm font-medium text-navy">{value}</div>
      </div>
    </div>
  );
}
