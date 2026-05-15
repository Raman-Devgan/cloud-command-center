import { Link } from "@tanstack/react-router";
import { Cloud, Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white/80 mt-24">
      <div className="container-narrow py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2 text-white font-semibold">
            <span className="grid place-items-center size-8 rounded-md bg-white/10">
              <Cloud className="size-4" />
            </span>
            Northwind Cloud
          </div>
          <p className="text-sm max-w-sm leading-relaxed">
            Cloud engineering and DevOps consulting for teams that need their
            infrastructure to be fast, reliable, and easy to operate.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="#" className="size-9 grid place-items-center rounded-md bg-white/5 hover:bg-white/10 transition" aria-label="GitHub">
              <Github className="size-4" />
            </a>
            <a href="#" className="size-9 grid place-items-center rounded-md bg-white/5 hover:bg-white/10 transition" aria-label="LinkedIn">
              <Linkedin className="size-4" />
            </a>
            <a href="mailto:hello@example.com" className="size-9 grid place-items-center rounded-md bg-white/5 hover:bg-white/10 transition" aria-label="Email">
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <div className="text-white font-semibold mb-4 text-sm">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/projects" className="hover:text-white">Case studies</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold mb-4 text-sm">Get in touch</div>
          <ul className="space-y-2 text-sm">
            <li>hello@northwindcloud.com</li>
            <li>+1 (415) 555-0142</li>
            <li>San Francisco, CA</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-narrow py-6 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} Northwind Cloud. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
