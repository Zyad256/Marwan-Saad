export function CyberFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
        <div>
          <span className="text-primary">$</span> echo "© {new Date().getFullYear()} Marwan Saad Abd Elsbour"
        </div>
        <div className="flex items-center gap-4">
          <a href="#contact" className="hover:text-primary transition-colors">contact.sh</a>
          <a href="https://www.linkedin.com/in/marwan-saad-35b5012a5" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">linkedin</a>
          <a href="https://github.com/marwan-s8" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">github</a>
        </div>
      </div>
    </footer>
  );
}
