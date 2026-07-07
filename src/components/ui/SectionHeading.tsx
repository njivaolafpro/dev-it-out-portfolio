export default function SectionHeading({ kicker, title, className = '' }: { kicker: string; title: string; className?: string }) {
  return (
    <div className={`mb-12 ${className}`}>
      <p className="mb-2 font-mono text-sm text-accent">
        <span className="text-muted">$</span> {kicker}
      </p>
      <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">{title}</h2>
    </div>
  );
}
