import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, ArrowRight } from "lucide-react";

type Stat = { label: string; value?: number; suffix?: string; text?: string };

const stats: Stat[] = [
  { label: "years_exp", value: 1, suffix: "+" },
  { label: "projects_completed", value: 5, suffix: "" },
  { label: "certifications", value: 4, suffix: "" },
  { label: "status", text: "Open to work" },
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

const roles = [
  "cloud architect",
  "devops engineer",
  "platform engineer",
  "site reliability engineer"
];

function RoleCycler() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm font-mono text-primary mb-4 flex items-center gap-2">
      <div className="relative h-5 flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {roles[idx]}<span className="animate-pulse">_</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function AboutModule() {
  return (
    <div className="w-full px-6 lg:px-12 py-12 border-t border-border/50 bg-background/50 relative">
      <div className="absolute inset-0 grid-bg opacity-[0.03]" />
      <div className="max-w-[1600px] mx-auto">


        <div className="grid lg:grid-cols-[340px_1fr] gap-8">
          {/* Left Column */}
          <div className="space-y-4 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-strong rounded-xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
              <div className="relative">
                <div className="size-24 rounded-xl bg-gradient-to-br from-primary to-accent p-[2px] mb-4">
                  <img src="/profile.jpg" alt="Raman Devgan" className="size-full rounded-[10px] object-cover" />
                </div>
                <div className="font-mono text-[11px] text-muted-foreground mb-1">operator.id</div>
                <h3 className="text-xl font-display font-semibold mb-1">Raman Devgan</h3>
                <RoleCycler />

              </div>
            </motion.div>

            {/* Resume Box */}
            <motion.a
              href="#"
              onClick={(e) => e.preventDefault()}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-xl p-4 flex items-center justify-between group hover:border-primary/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <Download className="size-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground/90 group-hover:text-foreground transition-colors">Download Resume</div>
                  <div className="text-xs text-muted-foreground font-mono">PDF Format</div>
                </div>
              </div>
              <div className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                <ArrowRight className="size-4" />
              </div>
            </motion.a>
          </div>

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
                  <div className="text-2xl sm:text-3xl font-bold font-display">
                    {s.text ? (
                      <span className="text-gradient text-xl sm:text-2xl">{s.text}</span>
                    ) : (
                      <Counter value={s.value!} suffix={s.suffix!} />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="glass-strong rounded-xl p-6">
              <div className="text-xs font-mono text-primary tracking-widest mb-4">// JOURNEY.LOG</div>
              <p className="text-foreground/90 leading-relaxed mt-2">
                I’m a passionate Cloud Engineering student focused on building scalable, secure, and modern cloud solutions. Currently pursuing Computer Science Engineering, I’m actively learning cloud platforms, DevOps practices, networking, Linux, and infrastructure automation.
              </p>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
