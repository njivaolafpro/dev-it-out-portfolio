import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { Button, TerminalWindow } from '../ui';
import { useT } from '../../i18n/LanguageContext';
import { useTypewriter } from '../../hooks/useTypewriter';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const modules = ['Node.js', 'React', 'TypeScript', 'NestJS', 'PostgreSQL', 'GraphQL'];

const terminalLines = [
  '$ whoami',
  'njiva-olaf — full-stack engineer',
  '$ cat stack.json',
  '{ "backend": "Node/Nest", "frontend": "React/TS" }',
  '$ uptime',
  '8+ years · 9 companies · fintech · realtime',
  '$ _',
];

// Isolated so the typewriter's high-frequency state updates re-render only
// this leaf, leaving the Hero's entrance animation to run uninterrupted.
function TerminalTyping({ reduced }: { reduced: boolean }) {
  const { text } = useTypewriter(terminalLines, { enabled: !reduced });
  return (
    <pre className="min-h-[220px] whitespace-pre-wrap text-text">
      <span className="text-success">{text}</span>
      <span className="animate-pulse text-accent">▌</span>
    </pre>
  );
}

export default function Hero() {
  const t = useT();
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="top" className="section-pad relative flex min-h-screen items-center">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
            <span className="h-2 w-2 animate-pulse rounded-full bg-success" /> {t('hero.status')}
          </motion.span>

          <motion.h1 variants={item} className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="text-text">Njiva</span>{' '}
            <span className="bg-gradient-to-r from-accent to-accentHot bg-clip-text text-transparent">Olaf</span>
          </motion.h1>

          <motion.p variants={item} className="mt-4 font-mono text-sm text-accent">
            {'<'}{t('hero.roleTag')}{' />'}
          </motion.p>

          <motion.p variants={item} className="mt-4 max-w-md font-display text-xl text-text">
            {t('hero.tagline')}
          </motion.p>
          <motion.p variants={item} className="mt-3 max-w-md text-muted">
            {t('hero.desc')}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">{t('hero.ctaWork')} <ArrowRight size={16} /></Button>
            <Button variant="ghost" href="#contact">{t('hero.ctaContact')}</Button>
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <p className="font-mono text-xs text-muted">{t('hero.modules')}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {modules.map((m) => (
                <span key={m} className="rounded-md border border-border bg-surface2 px-2.5 py-1 font-mono text-xs text-muted">{m}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right — interactive IDE card */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduced ? 0 : 0.3 }}
        >
          <TerminalWindow title="portfolio ~ zsh">
            <TerminalTyping reduced={reduced} />
            <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4 text-center">
              {[
                { k: '8+', v: 'years' },
                { k: '9', v: 'companies' },
                { k: '3', v: 'domains' },
              ].map((s) => (
                <div key={s.v}>
                  <p className="font-display text-2xl font-bold text-accent">{s.k}</p>
                  <p className="font-mono text-xs text-muted">{s.v}</p>
                </div>
              ))}
            </div>
          </TerminalWindow>
          <a href="https://github.com/njivaolafpro" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent">
            <Github size={14} /> github.com/njivaolafpro
          </a>
        </motion.div>
      </div>
    </section>
  );
}
