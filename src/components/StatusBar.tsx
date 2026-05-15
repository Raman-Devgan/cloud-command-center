import { useEffect, useState } from "react";

export function StatusBar() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const i = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(i);
  }, []);
  const t = time.toUTCString().split(" ").slice(4, 5)[0] ?? "";
  return (
    <div className="fixed top-0 left-0 right-0 z-40 h-9 glass-strong flex items-center justify-between px-4 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-success pulse-glow" />
          system_online
        </span>
        <span className="hidden sm:inline">region: eu-west-1</span>
        <span className="hidden md:inline">latency: 12ms</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden sm:inline">uptime: 99.99%</span>
        <span className="text-primary">{t} UTC</span>
      </div>
    </div>
  );
}
