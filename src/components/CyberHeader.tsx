import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Shield, Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "// home" },
  { to: "/about", label: "// about" },
  { to: "/skills", label: "// skills" },
  { to: "/projects", label: "// projects" },
  { to: "/labs", label: "// labs" },
  { to: "/contact", label: "// contact" },
] as const;

export function CyberHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary glow-cyber">
            <Shield className="h-5 w-5" />
          </div>
          <div className="font-mono text-sm leading-tight">
            <div className="text-primary text-glow-cyber">marwan@soc</div>
            <div className="text-muted-foreground text-[10px]">~/portfolio $</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-1.5 rounded text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
              activeProps={{ className: "px-3 py-1.5 rounded text-primary bg-primary/10" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-accent pulse-dot" />
          <span className="text-accent">SYSTEM ONLINE</span>
        </div>
        <button
          aria-label="Menu"
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <ul className="px-6 py-3 flex flex-col gap-1 font-mono text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                  activeProps={{ className: "block px-3 py-2 rounded-md text-primary bg-primary/10" }}
                  activeOptions={{ exact: true }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
