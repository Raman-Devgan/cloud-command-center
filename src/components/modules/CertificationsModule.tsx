import { motion } from "framer-motion";
import { ShieldCheck, ExternalLink } from "lucide-react";

const certs = [
  { 
    name: "Azure AI Fundamentals", 
    provider: "Microsoft", 
    code: "AI-900", 
    year: "2024", 
    color: "from-primary to-accent",
    link: "https://www.credly.com/badges/5137b9b6-eb4a-480a-a99f-5b3b61fc0233/public_url",
    image: "https://images.credly.com/images/4136ced8-75d5-4afb-8677-40b6236e2672/linkedin_thumb_azure-ai-fundamentals-600x600.png"
  }
];

export function CertificationsModule() {
  return (
    <div className="w-full px-6 lg:px-12 py-12 border-t border-border/50 relative">
      <div className="max-w-[1600px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-3"><span className="text-gradient">Certifications</span></h2>
        </motion.div>

        <div className="flex flex-wrap gap-5">
          {certs.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, y: 30, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -6, rotateY: 6, rotateX: -4 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="group relative glass-strong rounded-xl p-6 overflow-hidden aspect-square w-full max-w-[280px]"
            >
              {/* Hologram sheen */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none"
                   style={{ background: "linear-gradient(120deg, transparent 30%, oklch(0.85 0.2 195 / 0.18) 50%, transparent 70%)" }} />
              <div className={`absolute -top-16 -right-16 size-40 rounded-full bg-gradient-to-br ${c.color} opacity-30 blur-3xl group-hover:opacity-50 transition`} />

              <div className="relative h-full flex flex-col">
                <div className={`size-24 rounded-2xl bg-gradient-to-br ${c.color} p-[2px] mb-4 float-slow`}>
                  {c.image ? (
                    <img src={c.image} alt={c.name} className="size-full rounded-[14px] object-cover bg-background" />
                  ) : (
                    <div className="size-full rounded-[14px] bg-background flex items-center justify-center">
                      <ShieldCheck className="size-10 text-primary" />
                    </div>
                  )}
                </div>
                
                <div className="mt-auto">
                  <div className="text-[10px] font-mono text-muted-foreground tracking-wider mb-1">{c.provider}</div>
                  <h3 className="font-display font-semibold text-lg mb-1">{c.name}</h3>
                  <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mt-3 pt-3 border-t border-border">
                    <span>{c.code} · {c.year}</span>
                    <a href={c.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
                      verify <ExternalLink className="size-3" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
