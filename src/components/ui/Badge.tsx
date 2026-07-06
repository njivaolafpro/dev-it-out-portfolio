import { ReactNode } from 'react';

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-surface2 px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
