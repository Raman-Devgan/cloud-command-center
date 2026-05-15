import { motion } from "framer-motion";
import { Home, User, Boxes, Award, Cpu, Radio, Terminal as TerminalIcon } from "lucide-react";
import type { ModuleId } from "@/lib/modules";

const items: { id: ModuleId; label: string; icon: typeof Home; code: string }[] = [
  { id: "home", label: "Hero", icon: Home, code: "00" },
  { id: "about", label: "About", icon: User, code: "01" },
  { id: "projects", label: "Deployments", icon: Boxes, code: "02" },
  { id: "certifications", label: "Badges", icon: Award, code: "03" },
  { id: "stack", label: "Tech Mesh", icon: Cpu, code: "04" },
  { id: "contact", label: "Comms", icon: Radio, code: "05" },
];

export function CommandRail({
  active,
  onSelect,
  onTerminal,
}: {
  active: ModuleId;
  onSelect: (id: ModuleId) => void;
  onTerminal: () => void;
}) {
  return (
    <aside className="fixed left-0 top-9 bottom-0 z-30 w-16 md:w-20 glass-strong border-r border-border flex flex-col items-center py-6 gap-2">
      <div className="text-[10px] font-mono text-primary tracking-widest mb-4">CTRL</div>
      <nav className="flex flex-col gap-1.5 flex-1">
        {items.map((it) => {
          const Icon = it.icon;
          const isActive = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => onSelect(it.id)}
              className="group relative flex flex-col items-center justify-center w-12 h-14 rounded-md transition-colors hover:bg-primary/10"
              aria-label={it.label}
            >
              {isActive && (
                <motion.div
                  layoutId="rail-active"
                  className="absolute inset-0 rounded-md neon-border bg-primary/10"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <Icon className={`size-5 relative z-10 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`} />
              <span className={`text-[9px] font-mono mt-1 relative z-10 ${isActive ? "text-primary" : "text-muted-foreground/70"}`}>
                {it.code}
              </span>
              <span className="absolute left-full ml-3 px-2 py-1 rounded bg-popover border border-border text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none z-50">
                {it.label}
              </span>
            </button>
          );
        })}
      </nav>
      <button
        onClick={onTerminal}
        className="w-12 h-12 rounded-md glass border border-primary/30 hover:border-primary flex items-center justify-center text-primary hover:glow-cyan transition"
        aria-label="Open terminal"
      >
        <TerminalIcon className="size-5" />
      </button>
    </aside>
  );
}
