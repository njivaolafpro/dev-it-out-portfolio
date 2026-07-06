import { motion } from 'framer-motion';
import { SectionHeading, TerminalWindow } from '../ui';
import { useT } from '../../i18n/LanguageContext';

export default function About() {
  const t = useT();
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-4xl">
        <SectionHeading kicker={t('about.kicker')} title={t('about.title')} />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <TerminalWindow title="README.md">
            <div className="space-y-4 font-sans text-base leading-relaxed text-muted">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
