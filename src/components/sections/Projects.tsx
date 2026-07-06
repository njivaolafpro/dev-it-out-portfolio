import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading, Badge } from '../ui';
import { useT, useLang } from '../../i18n/LanguageContext';
import { projects } from '../../data/projects';
import { pick } from '../../i18n/dictionary';

const covers: Record<string, string> = {
  amber: 'from-accent/30 to-accentHot/10',
  violet: 'from-violet/30 to-accent/10',
  beige: 'from-beige/20 to-accent/10',
};

export default function Projects() {
  const t = useT();
  const { lang } = useLang();
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={t('projects.kicker')} title={t('projects.title')} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.24) }}
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
            >
              <div className={`h-32 bg-gradient-to-br ${covers[p.cover] ?? covers.amber}`} />
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-text">{p.title}</h3>
                  <ArrowUpRight size={18} className="text-muted transition-colors group-hover:text-accent" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pick(p.description, lang)}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => <Badge key={s}>{s}</Badge>)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
