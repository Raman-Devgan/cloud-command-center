import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ParticleField } from "@/components/ParticleField";
import { CursorGlow } from "@/components/CursorGlow";
import { StatusBar } from "@/components/StatusBar";
import { CommandRail } from "@/components/CommandRail";
import { TerminalOverlay } from "@/components/TerminalOverlay";
import { BootSequence } from "@/components/BootSequence";
import { HeroModule } from "@/components/modules/HeroModule";
import { AboutModule } from "@/components/modules/AboutModule";
import { ProjectsModule } from "@/components/modules/ProjectsModule";
import { CertificationsModule } from "@/components/modules/CertificationsModule";
import { StackModule } from "@/components/modules/StackModule";
import { ContactModule } from "@/components/modules/ContactModule";
import type { ModuleId } from "@/lib/modules";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Control Center // Cloud Engineer & DevOps Specialist Portfolio" },
      { name: "description", content: "Interactive cloud infrastructure portfolio. Architecting scalable systems with AWS, Kubernetes, Terraform, and modern DevOps." },
      { property: "og:title", content: "Control Center — Cloud Engineer Portfolio" },
      { property: "og:description", content: "An immersive portfolio for a Cloud Engineer & DevOps Specialist." },
    ],
  }),
  component: ControlCenter,
});

function ControlCenter() {
  const [booting, setBooting] = useState(true);
  const [active, setActive] = useState<ModuleId>("home");
  const [terminal, setTerminal] = useState(false);

  // keyboard: ` to toggle terminal, 1-6 for modules
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "`" || (e.key === "k" && (e.metaKey || e.ctrlKey))) {
        e.preventDefault(); setTerminal((t) => !t);
      }
      const map: Record<string, ModuleId> = { "1": "home", "2": "about", "3": "projects", "4": "certifications", "5": "stack", "6": "contact" };
      if (map[e.key]) { setActive(map[e.key]); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleNav = (id: ModuleId) => { setActive(id); setTerminal(false); };

  return (
    <div className="fixed inset-0 overflow-hidden">
      <ParticleField />
      <CursorGlow />

      <AnimatePresence>{booting && <BootSequence onDone={() => setBooting(false)} />}</AnimatePresence>

      <StatusBar />
      <CommandRail active={active} onSelect={setActive} onTerminal={() => setTerminal(true)} />

      <main className="absolute inset-0 pt-9 pl-16 md:pl-20">
        <div className="relative h-full w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.98, y: 12, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.02, y: -8, filter: "blur(8px)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              {active === "home" && <HeroModule onNavigate={handleNav} />}
              {active === "about" && <AboutModule />}
              {active === "projects" && <ProjectsModule />}
              {active === "certifications" && <CertificationsModule />}
              {active === "stack" && <StackModule />}
              {active === "contact" && <ContactModule />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Hint */}
      <div className="hidden md:flex fixed bottom-4 right-4 z-30 glass px-3 py-2 rounded-md text-[10px] font-mono text-muted-foreground gap-3">
        <span><kbd className="text-primary">`</kbd> terminal</span>
        <span><kbd className="text-primary">1-6</kbd> modules</span>
      </div>

      <TerminalOverlay open={terminal} onClose={() => setTerminal(false)} onNavigate={handleNav} />
    </div>
  );
}
