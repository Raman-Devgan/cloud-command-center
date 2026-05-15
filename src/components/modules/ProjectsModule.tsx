import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Github, ExternalLink, GitBranch, CheckCircle2 } from "lucide-react";

type Project = {
  id: string;
  name: string;
  category: string;
  status: "running" | "stable" | "scaling";
  region: string;
  desc: string;
  stack: string[];
  pipeline: string[];
  architecture: string;
};

const projects: Project[] = [
  {
    id: "p1", name: "Atlas Multi-Region Cluster", category: "Kubernetes",
    status: "running", region: "eu-west-1 / us-east-1",
    desc: "Active-active K8s cluster with cross-region failover, auto-scaling, and GitOps deployments via ArgoCD.",
    stack: ["Kubernetes", "ArgoCD", "Istio", "AWS", "Terraform"],
    pipeline: ["lint", "test", "build", "scan", "deploy:staging", "smoke", "deploy:prod"],
    architecture: "VPC → ALB → EKS (3 AZ) → RDS Multi-AZ → S3 + CloudFront",
  },
  {
    id: "p2", name: "Pipeline Forge", category: "CI/CD",
    status: "stable", region: "global",
    desc: "Reusable GitHub Actions framework cutting average pipeline time by 62% across 18 microservices.",
    stack: ["GitHub Actions", "Docker", "Trivy", "Bash", "Python"],
    pipeline: ["matrix-build", "cache-restore", "parallel-test", "publish"],
    architecture: "Composite actions → reusable workflows → OIDC → AWS",
  },
  {
    id: "p3", name: "Observatory", category: "Monitoring",
    status: "running", region: "eu-central-1",
    desc: "Unified Prometheus + Grafana + Loki stack monitoring 200+ services with PagerDuty integration.",
    stack: ["Prometheus", "Grafana", "Loki", "Alertmanager", "Helm"],
    pipeline: ["helm-lint", "diff", "deploy", "validate-alerts"],
    architecture: "Node Exporter → Prom → Thanos → Grafana ↔ Alertmanager",
  },
  {
    id: "p4", name: "Terra Genesis", category: "Terraform",
    status: "stable", region: "multi-cloud",
    desc: "Modular Terraform library provisioning entire prod environments in under 8 minutes.",
    stack: ["Terraform", "AWS", "Azure", "Atlantis"],
    pipeline: ["fmt", "validate", "tfsec", "plan", "apply"],
    architecture: "Workspaces → modules/ → remote state (S3 + DynamoDB lock)",
  },
  {
    id: "p5", name: "ContainerShip", category: "Docker",
    status: "scaling", region: "edge",
    desc: "Hardened multi-arch container base images with SBOM and vuln scanning baked in.",
    stack: ["Docker", "Buildx", "Cosign", "Trivy"],
    pipeline: ["multi-arch-build", "sign", "scan", "push"],
    architecture: "Buildx → OCI registry → Cosign verify → runtime",
  },
  {
    id: "p6", name: "AWS LiftKit", category: "AWS",
    status: "running", region: "us-east-1",
    desc: "Serverless event-driven platform handling 4M events/day on Lambda + EventBridge + DynamoDB.",
    stack: ["Lambda", "EventBridge", "DynamoDB", "SAM", "X-Ray"],
    pipeline: ["sam-build", "test", "deploy:dev", "canary:prod"],
    architecture: "API GW → Lambda → EventBridge → SQS → workers",
  },
];

const categoryColors: Record<string, string> = {
  AWS: "from-warning to-accent",
  Kubernetes: "from-primary to-accent",
  Docker: "from-primary to-success",
  Terraform: "from-accent to-primary",
  "CI/CD": "from-success to-primary",
  Linux: "from-foreground to-muted",
  Monitoring: "from-warning to-primary",
};

export function ProjectsModule() {
  const [open, setOpen] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const cats = ["all", ...Array.from(new Set(projects.map((p) => p.category)))];
  const list = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="h-full w-full overflow-y-auto scrollbar-hide px-6 lg:px-12 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="text-xs font-mono text-primary tracking-widest mb-2">// MODULE_02</div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-3">Live <span className="text-gradient">Deployments</span></h2>
          <p className="text-muted-foreground max-w-2xl">Each card is a real cluster, pipeline, or platform shipped to production.</p>
        </motion.div>

        <div className="flex gap-2 flex-wrap mb-6">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition ${
                filter === c ? "bg-primary text-primary-foreground glow-cyan" : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((p, i) => (
            <motion.button
              layout
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              onClick={() => setOpen(p)}
              className="glass-strong rounded-xl p-5 text-left relative overflow-hidden group hover:border-primary/50 transition"
            >
              <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${categoryColors[p.category] ?? "from-primary to-accent"} opacity-20 blur-2xl group-hover:opacity-40 transition`} />
              <div className="flex items-start justify-between mb-4 relative">
                <div className={`text-[10px] font-mono px-2 py-0.5 rounded bg-gradient-to-r ${categoryColors[p.category] ?? "from-primary to-accent"} text-primary-foreground`}>
                  {p.category}
                </div>
                <span className="flex items-center gap-1 text-[10px] font-mono text-success">
                  <span className="size-1.5 rounded-full bg-success pulse-glow" />
                  {p.status}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-1.5">{p.name}</h3>
              <p className="text-xs text-muted-foreground line-clamp-2 mb-4">{p.desc}</p>
              <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground border-t border-border pt-3">
                <span className="flex items-center gap-1"><GitBranch className="size-3" /> main</span>
                <span>{p.region}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto scrollbar-hide p-6 sm:p-8 relative neon-border"
            >
              <button onClick={() => setOpen(null)} className="absolute top-4 right-4 size-8 rounded-md hover:bg-muted flex items-center justify-center">
                <X className="size-4" />
              </button>
              <div className={`text-[10px] font-mono px-2 py-0.5 rounded bg-gradient-to-r ${categoryColors[open.category] ?? "from-primary to-accent"} text-primary-foreground inline-block mb-3`}>
                {open.category}
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-2">{open.name}</h3>
              <p className="text-muted-foreground mb-6">{open.desc}</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="glass rounded-lg p-4">
                  <div className="text-[10px] font-mono text-primary tracking-wider mb-2">ARCHITECTURE</div>
                  <div className="font-mono text-xs leading-relaxed">{open.architecture}</div>
                </div>
                <div className="glass rounded-lg p-4">
                  <div className="text-[10px] font-mono text-primary tracking-wider mb-2">REGION</div>
                  <div className="font-mono text-xs">{open.region}</div>
                  <div className="text-[10px] font-mono text-success mt-2 flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-success pulse-glow" /> healthy · {open.status}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-[10px] font-mono text-primary tracking-wider mb-2">TECH_STACK</div>
                <div className="flex flex-wrap gap-2">
                  {open.stack.map((s) => (
                    <span key={s} className="px-2.5 py-1 glass rounded text-xs font-mono border border-primary/20">{s}</span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="text-[10px] font-mono text-primary tracking-wider mb-3">DEPLOYMENT_PIPELINE</div>
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {open.pipeline.map((step, i) => (
                    <div key={step} className="flex items-center gap-2 shrink-0">
                      <div className="glass border border-success/40 rounded px-2.5 py-1.5 flex items-center gap-1.5 text-xs font-mono">
                        <CheckCircle2 className="size-3 text-success" /> {step}
                      </div>
                      {i < open.pipeline.length - 1 && <div className="text-muted-foreground">→</div>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-2 px-4 py-2 rounded-md glass border border-primary/40 hover:border-primary text-sm">
                  <Github className="size-4" /> Source
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:glow-cyan text-sm">
                  <ExternalLink className="size-4" /> Live demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
