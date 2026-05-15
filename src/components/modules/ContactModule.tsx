import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";

export function ContactModule() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setName(""); setEmail(""); setMsg("");
  };

  return (
    <div className="h-full w-full overflow-y-auto scrollbar-hide px-6 lg:px-12 py-10">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="text-xs font-mono text-primary tracking-widest mb-2">// MODULE_05</div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-3">Open <span className="text-gradient">Comms</span></h2>
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-mono mt-2">
            <span className="size-1.5 rounded-full bg-success pulse-glow" />
            available for freelance & cloud engineering opportunities
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-3">
            {[
              { Icon: Mail, label: "email", v: "operator@cloud.dev" },
              { Icon: Linkedin, label: "linkedin", v: "/in/cloud-operator" },
              { Icon: Github, label: "github", v: "@cloud-operator" },
              { Icon: Twitter, label: "x", v: "@cloud_operator" },
            ].map(({ Icon, label, v }) => (
              <a
                key={label}
                href="#" onClick={(e) => e.preventDefault()}
                className="group flex items-center gap-4 glass-strong rounded-xl p-4 hover:border-primary/60 transition"
              >
                <div className="size-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:glow-cyan transition">
                  <Icon className="size-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-mono text-muted-foreground tracking-wider uppercase">{label}</div>
                  <div className="font-mono text-sm truncate">{v}</div>
                </div>
                <Send className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition" />
              </a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={send}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            className="glass-strong rounded-xl p-5 sm:p-6 font-mono text-sm relative overflow-hidden"
          >
            <div className="flex items-center gap-1.5 pb-3 border-b border-border mb-4">
              <span className="size-2.5 rounded-full bg-destructive/70" />
              <span className="size-2.5 rounded-full bg-warning/70" />
              <span className="size-2.5 rounded-full bg-success/70" />
              <span className="ml-3 text-[10px] text-muted-foreground tracking-wider">~/contact --new-message</span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-[10px] text-primary tracking-wider">$ identify --name</label>
                <input
                  value={name} onChange={(e) => setName(e.target.value)} required
                  placeholder="your name"
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground placeholder:text-muted-foreground/50"
                />
              </div>
              <div>
                <label className="text-[10px] text-primary tracking-wider">$ identify --channel</label>
                <input
                  value={email} onChange={(e) => setEmail(e.target.value)} required type="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground placeholder:text-muted-foreground/50"
                />
              </div>
              <div>
                <label className="text-[10px] text-primary tracking-wider">$ transmit --payload</label>
                <textarea
                  value={msg} onChange={(e) => setMsg(e.target.value)} required rows={4}
                  placeholder="what are we building?"
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 resize-none text-foreground placeholder:text-muted-foreground/50"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:glow-cyan transition"
              >
                {sent ? "✓ packet transmitted" : "→ execute_transmission"}
              </button>
              {sent && (
                <div className="text-success text-xs">[ack] message received. response ETA: 24h.</div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
