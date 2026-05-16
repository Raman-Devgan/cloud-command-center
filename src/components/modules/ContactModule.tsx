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
    <div className="w-full px-6 lg:px-12 py-12 border-t border-border/50 relative">
      <div className="max-w-[1600px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="text-sm font-mono text-primary tracking-widest mb-2">// MODULE_05</div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-3">Contact <span className="text-gradient">Me</span></h2>
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-sm font-mono mt-2">
            <span className="size-1.5 rounded-full bg-success pulse-glow" />
            Feel free to reach out for collaborations, project discussions, or just to say hi!
          </div>
        </motion.div>

        <div className="w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-2 gap-6">
            {[
              { Icon: Mail, label: "email", v: "ramandevgan21@gmail.com", href: "mailto:ramandevgan21@gmail.com" },
              { Icon: Linkedin, label: "linkedin", v: "/in/raman-devgan", href: "https://www.linkedin.com/in/raman-devgan-7451aa385/" },
              { Icon: Github, label: "github", v: "@Raman-Devgan", href: "https://github.com/Raman-Devgan" },
              { Icon: Twitter, label: "x", v: "@Ramandevgan_ofc", href: "https://x.com/Ramandevgan_ofc" },
            ].map(({ Icon, label, v, href }, i) => (
              <motion.a
                key={label}
                href={href} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 glass-strong rounded-2xl p-6 sm:p-8 hover:border-primary/60 transition hover:-translate-y-1"
              >
                <div className="size-14 shrink-0 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:glow-cyan transition group-hover:scale-110">
                  <Icon className="size-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0 text-center sm:text-left flex flex-col justify-center h-full">
                  <div className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-1">{label}</div>
                  <div className="font-mono text-lg sm:text-xl truncate text-foreground/90 group-hover:text-primary transition-colors">{v}</div>
                </div>
                <Send className="size-5 shrink-0 text-muted-foreground group-hover:text-primary sm:self-center sm:group-hover:translate-x-1 sm:-rotate-45 transition hidden sm:block" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
