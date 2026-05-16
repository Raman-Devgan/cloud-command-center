import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ParticleField } from "@/components/ParticleField";
import { CursorGlow } from "@/components/CursorGlow";
import { StatusBar } from "@/components/StatusBar";
import { TerminalOverlay } from "@/components/TerminalOverlay";
import { BootSequence } from "@/components/BootSequence";

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
  const [terminal, setTerminal] = useState(false);

  // keyboard: ` to toggle terminal, 1-6 for sections
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "`" || (e.key === "k" && (e.metaKey || e.ctrlKey))) {
        e.preventDefault(); setTerminal((t) => !t);
      }
      const map: Record<string, ModuleId> = { "2": "about", "3": "projects", "4": "certifications", "5": "stack", "6": "contact" };
      if (map[e.key]) { 
        document.getElementById(map[e.key])?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleNav = (id: ModuleId) => { 
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setTerminal(false); 
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      <ParticleField />
      <CursorGlow />

      <AnimatePresence>{booting && <BootSequence onDone={() => setBooting(false)} />}</AnimatePresence>

      <StatusBar />

      <main className="absolute inset-0 pt-9 overflow-y-auto scrollbar-hide scroll-smooth">
        <div className="relative w-full pb-20">

          <section id="about">
            <AboutModule />
          </section>
          
          <section id="projects">
            <ProjectsModule />
          </section>
          
          <section id="certifications">
            <CertificationsModule />
          </section>
          
          <section id="stack">
            <StackModule />
          </section>
          
          <section id="contact">
            <ContactModule />
          </section>
        </div>
      </main>

      {/* Hint */}
      <div className="hidden md:flex fixed bottom-4 right-4 z-30 glass px-3 py-2 rounded-md text-[10px] font-mono text-muted-foreground gap-3">
        <span><kbd className="text-primary">`</kbd> terminal</span>
        <span><kbd className="text-primary">1-6</kbd> sections</span>
      </div>

      <TerminalOverlay open={terminal} onClose={() => setTerminal(false)} onNavigate={handleNav} />
    </div>
  );
}
