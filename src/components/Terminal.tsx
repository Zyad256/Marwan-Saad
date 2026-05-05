import type { ReactNode } from "react";

export function Terminal({ title = "marwan@soc:~$", children }: { title?: string; children: ReactNode }) {
  return (
    <div className="terminal scanline shadow-lg">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border/60 bg-background/50">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-warn/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
        <span className="ml-2 font-mono text-[11px] text-muted-foreground">{title}</span>
      </div>
      <div className="p-4 overflow-x-auto whitespace-pre">{children}</div>
    </div>
  );
}

export function Line({ user = "$", children, comment }: { user?: string; children?: ReactNode; comment?: string }) {
  return (
    <div className="flex gap-2">
      <span className="text-primary select-none">{user}</span>
      <span className="text-foreground/90">{children}</span>
      {comment && <span className="text-muted-foreground">  # {comment}</span>}
    </div>
  );
}
