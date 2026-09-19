import { createContext, useContext, useEffect, useState } from 'react';
import { TRANSLATIONS } from '@/data/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('id');

  useEffect(() => {
    const stored = window.localStorage.getItem('lang');
    if (stored) setLang(stored);
  }, []);

  const toggleLang = () => {
    setLang((l) => {
      const next = l === 'id' ? 'en' : 'id';
      window.localStorage.setItem('lang', next);
      return next;
    });
  };

  const t = { ...TRANSLATIONS[lang], lang };

  return <LanguageContext.Provider value={{ lang, toggleLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
