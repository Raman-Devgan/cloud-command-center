import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const techs = [
  { id: "aws", label: "AWS", angle: 0, r: 0.95 },
  { id: "azure", label: "Azure", angle: 26, r: 0.95 },
  { id: "k8s", label: "Kubernetes", angle: 52, r: 0.95 },
  { id: "docker", label: "Docker", angle: 78, r: 0.95 },
  { id: "tf", label: "Terraform", angle: 104, r: 0.95 },
  { id: "jenkins", label: "Jenkins", angle: 130, r: 0.95 },
  { id: "gha", label: "GitHub Actions", angle: 156, r: 0.95 },
  { id: "linux", label: "Linux", angle: 182, r: 0.95 },
  { id: "prom", label: "Prometheus", angle: 208, r: 0.95 },
  { id: "grafana", label: "Grafana", angle: 234, r: 0.95 },
  { id: "py", label: "Python", angle: 260, r: 0.95 },
  { id: "bash", label: "Bash", angle: 286, r: 0.95 },
  { id: "ansible", label: "Ansible", angle: 312, r: 0.95 },
  { id: "gcp", label: "GCP", angle: 338, r: 0.95 },
];

export function StackModule() {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 600, h: 600 });

  useEffect(() => {
    const update = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const s = Math.min(r.width, r.height, 720);
      setSize({ w: s, h: s });
    };
    update();
    const ro = new ResizeObserver(update);
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const cx = size.w / 2, cy = size.h / 2;
  const radius = (Math.min(size.w, size.h) / 2) * 0.85;

  return (
    <div className="w-full px-6 lg:px-12 py-12 border-t border-border/50 bg-background/30 relative overflow-hidden">
      <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />
      <div className="max-w-[1600px] mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-xs font-mono text-primary tracking-widest mb-2">// MODULE_04</div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-3">Tech <span className="text-gradient">Mesh</span></h2>
          <p className="text-muted-foreground max-w-2xl">An interconnected ecosystem of tools I deploy daily.</p>
        </motion.div>
      </div>
      <div ref={ref} className="flex-1 relative flex items-center justify-center min-h-[600px] mt-8">
        <div className="relative" style={{ width: size.w, height: size.h }}>
          {/* Globe Background Elements */}
          <div className="absolute inset-0 rounded-full grid-bg opacity-30 spin-slow pointer-events-none" />
          <div className="absolute inset-4 rounded-full border border-primary/20 spin-slow pointer-events-none" style={{ animationDirection: "reverse", animationDuration: "60s" }} />
          <div className="absolute inset-10 rounded-full border border-accent/10 pointer-events-none" />
          <div
            className="absolute inset-12 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle at 35% 30%, oklch(0.78 0.18 195 / 0.15), oklch(0.18 0.04 260 / 0.3) 60%, transparent)",
              boxShadow: "inset 0 0 80px oklch(0.78 0.18 195 / 0.1), 0 0 100px oklch(0.78 0.18 195 / 0.1)",
            }}
          />
          {/* Orbiting background nodes */}
          {[
            { r: size.w * 0.35, dur: 30, color: "var(--color-primary)", delay: 0 },
            { r: size.w * 0.45, dur: 45, color: "var(--color-accent)", delay: -12 },
            { r: size.w * 0.25, dur: 22, color: "var(--color-success)", delay: -5 },
          ].map((o, i) => (
            <div
              key={`orbit-${i}`}
              className="absolute top-1/2 left-1/2 pointer-events-none opacity-50"
              style={{
                animation: `spin-slow ${o.dur}s linear infinite`,
                animationDelay: `${o.delay}s`,
              }}
            >
              <div style={{ transform: `translateX(${o.r}px)` }}>
                <div className="size-2 sm:size-3 rounded-full pulse-glow -translate-x-1/2 -translate-y-1/2"
                  style={{ background: o.color, boxShadow: `0 0 20px ${o.color}` }}
                />
              </div>
            </div>
          ))}

          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={`0 0 ${size.w} ${size.h}`}>
            <defs>
              <radialGradient id="core" cx="50%" cy="50%">
                <stop offset="0%" stopColor="oklch(0.85 0.2 195)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="oklch(0.85 0.2 195)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx={cx} cy={cy} r={radius * 0.4} fill="url(#core)" />
            {techs.map((t, i) => {
              const x = cx + Math.cos((t.angle * Math.PI) / 180) * radius;
              const y = cy + Math.sin((t.angle * Math.PI) / 180) * radius;
              return (
                <g key={t.id}>
                  <line x1={cx} y1={cy} x2={x} y2={y} stroke="oklch(0.78 0.18 195 / 0.25)" strokeWidth="1" strokeDasharray="3 4" />
                  {techs.slice(i + 1, i + 3).map((t2) => {
                    const x2 = cx + Math.cos((t2.angle * Math.PI) / 180) * radius;
                    const y2 = cy + Math.sin((t2.angle * Math.PI) / 180) * radius;
                    return <line key={t2.id} x1={x} y1={y} x2={x2} y2={y2} stroke="oklch(0.7 0.22 320 / 0.15)" strokeWidth="0.6" />;
                  })}
                </g>
              );
            })}
          </svg>

          {/* Core */}
          <motion.div
            animate={{ 
              y: [-20, 20, -20],
              x: [-10, 10, -10]
            }}
            transition={{ 
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute flex items-center justify-center"
            style={{ left: cx - 100, top: cy - 100, width: 200, height: 200 }}
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full glass-strong border-4 border-primary/20 border-t-primary border-l-primary/60 neon-border"
            />
            <span className="relative z-10 font-mono text-3xl font-bold text-primary tracking-widest">CORE</span>
          </motion.div>

          {techs.map((t, i) => {
            const x = cx + Math.cos((t.angle * Math.PI) / 180) * radius;
            const y = cy + Math.sin((t.angle * Math.PI) / 180) * radius;
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * i, type: "spring", stiffness: 200, damping: 14 }}
                whileHover={{ scale: 1.15 }}
                className="absolute float-slow"
                style={{ left: x, top: y, animationDelay: `${i * 0.2}s` }}
              >
                <div className="-translate-x-1/2 -translate-y-1/2 px-4 py-3 glass-strong rounded-lg border border-primary/30 hover:border-primary text-sm sm:text-base font-mono whitespace-nowrap cursor-default transition">
                  {t.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
