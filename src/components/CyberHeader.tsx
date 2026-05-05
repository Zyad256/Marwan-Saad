import { Link } from "@tanstack/react-router";
import { Shield } from "lucide-react";

const nav = [
  { to: "/", label: "// home" },
  { to: "/about", label: "// about" },
  { to: "/skills", label: "// skills" },
  { to: "/projects", label: "// projects" },
  { to: "/labs", label: "// labs" },
  { to: "/contact", label: "// contact" },
] as const;

export function CyberHeader() {
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
      </div>
    </header>
  );
}
