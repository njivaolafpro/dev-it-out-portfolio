import { motion } from 'framer-motion';
import { SectionHeading } from '../ui';
import { useT, useLang } from '../../i18n/LanguageContext';
import { skillCategories } from '../../data/skills';
import { pick } from '../../i18n/dictionary';

export default function Skills() {
  const t = useT();
  const { lang } = useLang();
  return (
    <section id="skills" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={t('skills.kicker')} title={t('skills.title')} />
        <div className="space-y-10">
          {skillCategories.map((cat) => (
            <div key={cat.id}>
              <h3 className="mb-4 font-mono text-sm text-accent">// {pick(cat.label, lang)}</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {cat.skills.map((s) => (
                  <motion.div
                    key={s.name}
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
                  >
                    <img src={s.image} alt={`${s.name} logo`} className="h-10 w-10 object-contain" loading="lazy" />
                    <span className="font-mono text-xs text-muted">{s.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
