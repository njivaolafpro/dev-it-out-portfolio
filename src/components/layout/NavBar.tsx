import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useT, useLang } from '../../i18n/LanguageContext';

const links = [
  { id: 'about', key: 'nav.about' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'experience', key: 'nav.experience' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'contact', key: 'nav.contact' },
] as const;

export default function NavBar() {
  const t = useT();
  const { lang, toggle } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-border bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-bold text-text">
          Dev It Out<span className="text-accent">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="rounded font-mono text-sm text-muted transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {t(l.key)}
            </a>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="rounded-md border border-border px-2 py-1 font-mono text-xs text-text transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {lang.toUpperCase()}
          </button>
        </div>
        <button
          className="rounded text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="block px-6 py-3 font-mono text-sm text-muted hover:text-accent">
              {t(l.key)}
            </a>
          ))}
          <button onClick={toggle} className="block px-6 py-3 font-mono text-sm text-accent">
            {lang.toUpperCase()} · switch
          </button>
        </div>
      )}
    </nav>
  );
}
