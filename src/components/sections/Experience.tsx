import { motion } from 'framer-motion';
import { SectionHeading, Badge } from '../ui';
import { useT, useLang } from '../../i18n/LanguageContext';
import { experiences } from '../../data/experiences';
import { pick } from '../../i18n/dictionary';

export default function Experience() {
  const t = useT();
  const { lang } = useLang();
  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-4xl">
        <SectionHeading kicker={t('experience.kicker')} title={t('experience.title')} />
        <div className="relative border-l border-border pl-6 sm:pl-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${i}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.2) }}
              className="relative mb-10"
            >
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg sm:-left-[39px]" />
              <div className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40">
                <div className="flex items-center gap-3">
                  {exp.logo && exp.logo !== 'unknown' && (
                    <img src={exp.logo} alt={`${exp.company} logo`} className="h-8 w-8 rounded object-contain" loading="lazy" />
                  )}
                  <div>
                    <h3 className="font-display text-lg font-semibold text-text">{exp.title}</h3>
                    <p className="font-mono text-xs text-accent">{exp.company} · {exp.period}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pick(exp.description, lang)}</p>
                {exp.badges.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.badges.map((b) => <Badge key={b}>{b}</Badge>)}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
