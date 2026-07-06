import { motion } from 'framer-motion';
import { Mail, Linkedin, Calendar, Github } from 'lucide-react';
import { SectionHeading } from '../ui';
import { useT } from '../../i18n/LanguageContext';
import { socials } from '../../data/socials';

const icons = { mail: Mail, linkedin: Linkedin, calendar: Calendar, github: Github };

export default function Contact() {
  const t = useT();
  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeading kicker={t('contact.kicker')} title={t('contact.title')} className="text-center" />
        <p className="mx-auto mb-10 max-w-xl text-muted">{t('contact.desc')}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {socials.map((s) => {
            const Icon = icons[s.icon];
            return (
              <motion.a
                key={s.id}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
              >
                <Icon className="text-accent" size={24} />
                <span className="font-mono text-sm text-muted">{s.label}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
