import { useT } from '../../i18n/LanguageContext';

export default function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-border py-8 text-center">
      <p className="font-display text-sm font-bold text-text">
        Dev It Out<span className="text-accent">.</span>
      </p>
      <p className="mt-1 font-mono text-xs text-muted">
        © {new Date().getFullYear()} Njiva Olaf Ranaivoson · {t('footer.rights')}
      </p>
    </footer>
  );
}
