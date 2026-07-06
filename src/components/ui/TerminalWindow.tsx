import { ReactNode } from 'react';

export default function TerminalWindow({ title, children, className = '' }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-border bg-[#0c0a08] shadow-card ${className}`}>
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-muted">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm">{children}</div>
    </div>
  );
}
