import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { label: "years_learning", value: 5, suffix: "+" },
  { label: "projects_shipped", value: 32, suffix: "" },
  { label: "certifications", value: 7, suffix: "" },
  { label: "uptime_sla", value: 99.99, suffix: "%" },
];

const timeline = [
  { y: "2020", t: "First commit", d: "Discovered Linux, Bash, and the magic of automation." },
  { y: "2021", t: "Cloud genesis", d: "Built first multi-tier deployment on AWS. Hooked." },
  { y: "2022", t: "Container era", d: "Mastered Docker & Kubernetes. Shipped to production." },
  { y: "2023", t: "Infra as code", d: "Terraform + CI/CD pipelines across multiple regions." },
  { y: "2024", t: "Observability", d: "Prometheus, Grafana, full-stack reliability engineering." },
  { y: "2026", t: "You are here", d: "Architecting at scale. Open to new missions." },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const dur = 1200; const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  const display = value % 1 === 0 ? Math.floor(n).toString() : n.toFixed(2);
  return <span className="text-gradient">{display}{suffix}</span>;
}

export function AboutModule() {
  return (
    <div className="w-full px-6 lg:px-12 py-12 border-t border-border/50 bg-background/50 relative">
      <div className="absolute inset-0 grid-bg opacity-[0.03]" />
      <div className="max-w-[1600px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="text-xs font-mono text-primary tracking-widest mb-2">// MODULE_01</div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-3">About <span className="text-gradient">the Operator</span></h2>
          <p className="text-muted-foreground max-w-2xl">
            I build infrastructure that doesn't break at 3 AM. Systems thinker, automation evangelist,
            and obsessive about clean pipelines.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[340px_1fr] gap-8">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-strong rounded-xl p-6 h-fit relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative">
              <div className="size-24 rounded-xl bg-gradient-to-br from-primary to-accent p-[2px] mb-4">
                <div className="size-full rounded-[10px] bg-background flex items-center justify-center text-3xl font-mono text-gradient">{"</>"}</div>
              </div>
              <div className="font-mono text-[11px] text-muted-foreground mb-1">operator.id</div>
              <h3 className="text-xl font-display font-semibold mb-1">Cloud Engineer</h3>
              <div className="text-sm text-primary font-mono mb-4">root@infrastructure:~$</div>
              <div className="space-y-2 text-xs font-mono border-t border-border pt-4">
                <div className="flex justify-between"><span className="text-muted-foreground">status</span><span className="text-success">available</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">timezone</span><span>UTC+1</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">stack</span><span>aws/k8s/tf</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">mode</span><span className="text-accent">remote</span></div>
              </div>
            </div>
          </motion.div>

          {/* Stats + timeline */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="glass rounded-lg p-4"
                >
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">{s.label}</div>
                  <div className="text-2xl sm:text-3xl font-bold font-display"><Counter value={s.value} suffix={s.suffix} /></div>
                </motion.div>
              ))}
            </div>

            <div className="glass-strong rounded-xl p-6">
              <div className="text-xs font-mono text-primary tracking-widest mb-4">// JOURNEY.LOG</div>
              <div className="relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
                <div className="space-y-5">
                  {timeline.map((t, i) => (
                    <motion.div
                      key={t.y}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + i * 0.05 }}
                      className="flex gap-4"
                    >
                      <div className="relative shrink-0 mt-1.5">
                        <div className="size-3.5 rounded-full bg-primary glow-cyan" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-3">
                          <span className="text-xs font-mono text-primary">{t.y}</span>
                          <h4 className="font-semibold">{t.t}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mt-0.5">{t.d}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6 border border-accent/20">
              <div className="text-xs font-mono text-accent tracking-widest mb-2">// MISSION</div>
              <p className="text-foreground/90 italic leading-relaxed">
                "To build infrastructure invisible enough that engineers forget it exists,
                resilient enough that customers never notice failure, and elegant enough that the next operator smiles."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
