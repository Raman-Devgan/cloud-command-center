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
    <div className="h-full w-full overflow-hidden flex flex-col">
      <div className="px-6 lg:px-12 pt-10 pb-4 max-w-6xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-xs font-mono text-primary tracking-widest mb-2">// MODULE_04</div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-3">Tech <span className="text-gradient">Mesh</span></h2>
          <p className="text-muted-foreground max-w-2xl">An interconnected ecosystem of tools I deploy daily.</p>
        </motion.div>
      </div>
      <div ref={ref} className="flex-1 relative flex items-center justify-center min-h-0">
        <div className="relative" style={{ width: size.w, height: size.h }}>
          <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${size.w} ${size.h}`}>
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
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute"
            style={{ left: cx - 50, top: cy - 50, width: 100, height: 100 }}
          >
            <div className="size-full rounded-full glass-strong border border-primary/50 flex items-center justify-center neon-border">
              <span className="font-mono text-xs text-primary tracking-widest">CORE</span>
            </div>
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
                style={{ left: x - 44, top: y - 22, animationDelay: `${i * 0.2}s` }}
              >
                <div className="px-3 py-2 glass-strong rounded-lg border border-primary/30 hover:border-primary text-xs font-mono whitespace-nowrap cursor-default transition">
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
