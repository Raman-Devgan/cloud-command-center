import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Terminal } from "lucide-react";
import type { ModuleId } from "@/lib/modules";

const lines = [
  "$ aws configure --profile prod",
  "$ kubectl apply -f infra/cluster.yaml",
  "$ terraform plan -out=tfplan",
  "✓ infrastructure: nominal",
  "✓ deployments: 47 active",
  "✓ welcome, operator.",
];

function TypingTerminal() {
  const [shown, setShown] = useState<string[]>([]);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    let idx = 0, ch = 0, mounted = true;
    const tick = () => {
      if (!mounted) return;
      if (idx >= lines.length) return;
      const target = lines[idx];
      if (ch <= target.length) {
        setCurrent(target.slice(0, ch));
        ch++;
        setTimeout(tick, 28);
      } else {
        setShown((s) => [...s, target]);
        setCurrent("");
        idx++; ch = 0;
        setTimeout(tick, 280);
      }
    };
    tick();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="glass rounded-lg p-4 font-mono text-xs sm:text-sm w-full max-w-md">
      <div className="flex items-center gap-1.5 pb-3 border-b border-border mb-3">
        <span className="size-2.5 rounded-full bg-destructive/70" />
        <span className="size-2.5 rounded-full bg-warning/70" />
        <span className="size-2.5 rounded-full bg-success/70" />
        <span className="ml-3 text-[10px] text-muted-foreground tracking-wider">~/control-center</span>
      </div>
      <div className="space-y-1.5 min-h-[160px]">
        {shown.map((l, i) => (
          <div key={i} className={l.startsWith("✓") ? "text-success" : "text-foreground/90"}>{l}</div>
        ))}
        {current && (
          <div className={current.startsWith("✓") ? "text-success" : "text-foreground/90"}>
            {current}<span className="cursor-blink text-primary">▊</span>
          </div>
        )}
      </div>
    </div>
  );
}

function Globe() {
  return (
    <div className="relative size-[280px] sm:size-[380px] lg:size-[460px]">
      <div className="absolute inset-0 rounded-full grid-bg opacity-40 spin-slow" />
      <div className="absolute inset-4 rounded-full border border-primary/30 spin-slow" style={{ animationDirection: "reverse", animationDuration: "60s" }} />
      <div className="absolute inset-10 rounded-full border border-accent/20" />
      <div
        className="absolute inset-12 rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 30%, oklch(0.78 0.18 195 / 0.4), oklch(0.18 0.04 260 / 0.8) 60%, transparent)",
          boxShadow: "inset 0 0 80px oklch(0.78 0.18 195 / 0.3), 0 0 100px oklch(0.78 0.18 195 / 0.25)",
        }}
      />
      {/* orbiting nodes */}
      {[
        { r: 140, dur: 18, color: "var(--color-primary)", delay: 0 },
        { r: 180, dur: 26, color: "var(--color-accent)", delay: -8 },
        { r: 110, dur: 14, color: "var(--color-success)", delay: -3 },
        { r: 200, dur: 32, color: "var(--color-warning)", delay: -12 },
        { r: 160, dur: 22, color: "var(--color-primary)", delay: -6 },
      ].map((o, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2"
          style={{
            animation: `spin-slow ${o.dur}s linear infinite`,
            animationDelay: `${o.delay}s`,
          }}
        >
          <div style={{ transform: `translateX(${o.r}px)` }}>
            <div className="size-3 rounded-full pulse-glow -translate-x-1/2 -translate-y-1/2"
              style={{ background: o.color, boxShadow: `0 0 20px ${o.color}` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function HeroModule({ onNavigate }: { onNavigate: (id: ModuleId) => void }) {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-4 items-center max-w-6xl w-full px-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-[11px] font-mono text-primary tracking-widest">
            <span className="size-1.5 rounded-full bg-success pulse-glow" />
            cloud_engineer / devops_specialist
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.05] tracking-tight">
            Designing <span className="text-gradient">Scalable Cloud</span> Infrastructure for the Future
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg leading-relaxed">
            Architecting resilient systems across AWS, Kubernetes, and the edge.
            Welcome to the control center.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => onNavigate("projects")}
              className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:glow-cyan transition"
            >
              View Projects <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
            </button>
            <button
              onClick={() => onNavigate("about")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md glass border border-primary/40 text-foreground hover:border-primary text-sm font-medium transition"
            >
              <Terminal className="size-4 text-primary" /> Enter Control Center
            </button>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-muted-foreground hover:text-foreground text-sm font-medium transition"
            >
              <Download className="size-4" /> Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <Globe />
          <TypingTerminal />
        </motion.div>
      </div>
    </div>
  );
}
