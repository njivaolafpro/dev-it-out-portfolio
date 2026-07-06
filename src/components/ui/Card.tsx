import { ReactNode } from 'react';

export default function Card({ children, className = '', hover = true }: { children: ReactNode; className?: string; hover?: boolean }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface shadow-card ${
        hover ? 'transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
