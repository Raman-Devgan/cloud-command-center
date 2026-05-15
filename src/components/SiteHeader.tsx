import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Cloud } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? "bg-background/85 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-navy">
          <span className="grid place-items-center size-8 rounded-md bg-primary text-primary-foreground">
            <Cloud className="size-4" />
          </span>
          <span>Northwind Cloud</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary font-semibold" }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition shadow-cta"
          >
            Book a consultation
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-narrow py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary font-semibold" }}
                className="text-sm text-muted-foreground py-1"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
