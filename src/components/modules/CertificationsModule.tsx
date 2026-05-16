import { motion } from "framer-motion";
import { ShieldCheck, ExternalLink } from "lucide-react";

const certs = [
  { name: "AWS Solutions Architect", provider: "AWS", code: "SAA-C03", year: "2024", color: "from-warning to-accent" },
  { name: "Azure Administrator", provider: "Microsoft Azure", code: "AZ-104", year: "2024", color: "from-primary to-accent" },
  { name: "Certified Kubernetes Admin", provider: "Kubernetes", code: "CKA", year: "2023", color: "from-primary to-success" },
  { name: "Google Cloud Engineer", provider: "Google Cloud", code: "ACE", year: "2023", color: "from-success to-primary" },
  { name: "Terraform Associate", provider: "HashiCorp", code: "TA-003", year: "2024", color: "from-accent to-primary" },
  { name: "CCNA", provider: "Cisco", code: "200-301", year: "2022", color: "from-primary to-warning" },
  { name: "Docker Certified", provider: "Docker", code: "DCA", year: "2023", color: "from-primary to-accent" },
];

export function CertificationsModule() {
  return (
    <div className="w-full px-6 lg:px-12 py-12 border-t border-border/50 relative">
      <div className="max-w-[1600px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="text-xs font-mono text-primary tracking-widest mb-2">// MODULE_03</div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-3">Achievement <span className="text-gradient">Badges</span></h2>
          <p className="text-muted-foreground max-w-2xl">Verified credentials. Hover to inspect the hologram.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, y: 30, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -6, rotateY: 6, rotateX: -4 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="group relative glass-strong rounded-xl p-6 overflow-hidden"
            >
              {/* Hologram sheen */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none"
                   style={{ background: "linear-gradient(120deg, transparent 30%, oklch(0.85 0.2 195 / 0.18) 50%, transparent 70%)" }} />
              <div className={`absolute -top-16 -right-16 size-40 rounded-full bg-gradient-to-br ${c.color} opacity-30 blur-3xl group-hover:opacity-50 transition`} />

              <div className="relative">
                <div className={`size-16 rounded-xl bg-gradient-to-br ${c.color} p-[2px] mb-4 float-slow`}>
                  <div className="size-full rounded-[10px] bg-background flex items-center justify-center">
                    <ShieldCheck className="size-7 text-primary" />
                  </div>
                </div>
                <div className="text-[10px] font-mono text-muted-foreground tracking-wider mb-1">{c.provider}</div>
                <h3 className="font-display font-semibold text-lg mb-1">{c.name}</h3>
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mt-3 pt-3 border-t border-border">
                  <span>{c.code} · {c.year}</span>
                  <button className="inline-flex items-center gap-1 text-primary hover:underline">
                    verify <ExternalLink className="size-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
