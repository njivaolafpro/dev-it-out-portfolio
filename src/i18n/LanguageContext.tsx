import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { dictionary, DictKey, Lang } from './dictionary';

type Ctx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void };
const LanguageContext = createContext<Ctx | null>(null);

const getInitial = (): Lang => {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem('lang');
  return stored === 'fr' || stored === 'en' ? stored : 'en';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitial);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem('lang', lang);
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(() => setLangState((p) => (p === 'en' ? 'fr' : 'en')), []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}

export function useT() {
  const { lang } = useLang();
  return useCallback((key: DictKey): string => dictionary[lang][key] ?? dictionary.en[key], [lang]);
}
