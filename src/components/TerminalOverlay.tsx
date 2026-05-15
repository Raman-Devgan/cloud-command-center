import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { ModuleId } from "@/lib/modules";

type Line = { kind: "in" | "out" | "ok" | "err"; text: string };

const helpText = [
  "available commands:",
  "  help            list commands",
  "  about           operator profile",
  "  projects        list deployments",
  "  certifications  list badges",
  "  stack           tech ecosystem",
  "  contact         comms channels",
  "  goto <module>   navigate to module",
  "  whoami          ¯\\_(ツ)_/¯",
  "  matrix          ?",
  "  clear           clear terminal",
  "  exit            close terminal",
];

export function TerminalOverlay({
  open, onClose, onNavigate,
}: { open: boolean; onClose: () => void; onNavigate: (id: ModuleId) => void }) {
  const [lines, setLines] = useState<Line[]>([
    { kind: "ok", text: "control-center v3.14.1 — type `help`" },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 50); }, [open]);
  useEffect(() => { scrollRef.current?.scrollTo({ top: 999999 }); }, [lines]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const out: Line[] = [{ kind: "in", text: `$ ${raw}` }];
    const push = (t: string, kind: Line["kind"] = "out") => out.push({ kind, text: t });

    if (!cmd) {/* noop */}
    else if (cmd === "help") helpText.forEach((l) => push(l));
    else if (cmd === "clear") { setLines([]); setInput(""); return; }
    else if (cmd === "exit") { onClose(); setInput(""); return; }
    else if (cmd === "whoami") push("operator @ control-center // cloud engineer + devops specialist", "ok");
    else if (cmd === "about") { push("→ opening module 01...", "ok"); onNavigate("about"); }
    else if (cmd === "projects") { push("→ loading deployments...", "ok"); onNavigate("projects"); }
    else if (cmd === "certifications" || cmd === "certs") { push("→ rendering holograms...", "ok"); onNavigate("certifications"); }
    else if (cmd === "stack" || cmd === "tools") { push("→ initializing tech mesh...", "ok"); onNavigate("stack"); }
    else if (cmd === "contact") { push("→ opening comms...", "ok"); onNavigate("contact"); }
    else if (cmd.startsWith("goto ")) {
      const t = cmd.slice(5) as ModuleId;
      const valid: ModuleId[] = ["home", "about", "projects", "certifications", "stack", "contact"];
      if (valid.includes(t)) { push(`→ jumping to ${t}`, "ok"); onNavigate(t); }
      else push(`unknown module: ${t}`, "err");
    }
    else if (cmd === "matrix") push("wake up, operator. follow the white kubelet 🐰", "ok");
    else if (cmd === "sudo") push("nice try.", "err");
    else if (cmd === "rm -rf /") push("permission denied. nice try, operator.", "err");
    else push(`command not found: ${cmd} — try \`help\``, "err");

    setLines((l) => [...l, ...out]);
    setInput("");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong w-full max-w-2xl rounded-t-xl sm:rounded-xl border border-primary/40 overflow-hidden neon-border scanlines relative"
          >
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border">
              <span className="size-2.5 rounded-full bg-destructive/70" />
              <span className="size-2.5 rounded-full bg-warning/70" />
              <span className="size-2.5 rounded-full bg-success/70" />
              <span className="ml-3 text-[10px] font-mono text-muted-foreground tracking-wider">~/control-center</span>
              <button onClick={onClose} className="ml-auto text-muted-foreground hover:text-foreground"><X className="size-4" /></button>
            </div>
            <div ref={scrollRef} className="font-mono text-xs sm:text-sm p-4 h-[60vh] sm:h-[420px] overflow-y-auto scrollbar-hide">
              {lines.map((l, i) => (
                <div key={i} className={
                  l.kind === "in" ? "text-primary" :
                  l.kind === "ok" ? "text-success" :
                  l.kind === "err" ? "text-destructive" : "text-foreground/85"
                }>{l.text}</div>
              ))}
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); run(input); }}
              className="flex items-center gap-2 px-4 py-3 border-t border-border font-mono text-sm"
            >
              <span className="text-primary">$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground/50"
                placeholder="type a command..."
                autoComplete="off"
                spellCheck={false}
              />
              <span className="cursor-blink text-primary">▊</span>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
