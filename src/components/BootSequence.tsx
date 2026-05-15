import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stages = [
  "[boot] initializing cloud control center...",
  "[auth] verifying operator credentials...",
  "[net]  establishing secure tunnel — eu-west-1",
  "[k8s]  fetching cluster manifests...",
  "[ok]   deployment ready. welcome.",
];

export function BootSequence({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (step >= stages.length) {
      const t = setTimeout(onDone, 350);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep((s) => s + 1), 380);
    return () => clearTimeout(t);
  }, [step, onDone]);

  useEffect(() => {
    let raf = 0; const start = performance.now();
    const dur = stages.length * 380 + 200;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setProgress(p * 100);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative w-full max-w-md px-6 font-mono">
        <div className="text-[10px] text-primary tracking-widest mb-3">CONTROL_CENTER · v3.14.1</div>
        <div className="space-y-1.5 text-xs sm:text-sm min-h-[150px]">
          {stages.slice(0, step).map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
              className={s.includes("[ok]") ? "text-success" : "text-foreground/80"}>
              {s}
            </motion.div>
          ))}
          {step < stages.length && (
            <div className="text-primary">{stages[step]}<span className="cursor-blink">▊</span></div>
          )}
        </div>
        <div className="mt-6 h-1 bg-muted rounded overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-accent transition-all" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-2 text-[10px] text-muted-foreground flex justify-between">
          <span>BOOT_SEQUENCE</span>
          <span>{Math.floor(progress)}%</span>
        </div>
      </div>
    </motion.div>
  );
}
