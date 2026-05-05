import { useEffect, useState } from "react";
import { Shield, Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "// home" },
  { id: "about", label: "// about" },
  { id: "skills", label: "// skills" },
  { id: "projects", label: "// projects" },
  { id: "labs", label: "// labs" },
  { id: "certifications", label: "// certs" },
  { id: "resume", label: "// resume" },
  { id: "contact", label: "// contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 120;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(l.id);
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border/60" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary glow-cyber">
            <Shield className="h-5 w-5" />
          </div>
          <div className="font-mono text-sm leading-tight">
            <div className="text-primary text-glow-cyber">marwan@soc</div>
            <div className="text-muted-foreground text-[10px]">~/portfolio $</div>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-1 font-mono text-xs">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`px-3 py-1.5 rounded transition-colors ${
                  active === l.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

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
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <ul className="px-6 py-3 flex flex-col gap-1 font-mono text-sm">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 rounded-md ${
                    active === l.id ? "text-primary bg-primary/10" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
