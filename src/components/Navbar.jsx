import { useState } from 'react';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import { BRUT_INTERACTIVE, ToggleSwitch } from './ui';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar({ active, onNavigate }) {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  const NAV_ITEMS = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'experience', label: t.nav.experience },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleClick = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-3 mt-3 md:mx-6 md:mt-4 flex items-center justify-between px-4 md:px-6 py-3 bg-base border-[3px] border-ink shadow-brut-sm">
        <button onClick={() => handleClick('home')} className="font-black text-xl tracking-tight flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center bg-blue text-white border-[3px] border-ink">
            <Code2 size={16} strokeWidth={3} />
          </span>
          Zul.dev
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button key={item.id} onClick={() => handleClick(item.id)} className="relative px-3 py-2 text-sm font-bold uppercase tracking-tight">
              {item.label}
              {active === item.id && <span className="absolute left-2 right-2 -bottom-1 h-[3px] bg-ink" aria-hidden="true" />}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {mounted && (
            <button onClick={toggleTheme} aria-label={theme === 'dark' ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'} className={`hidden sm:flex w-10 h-10 items-center justify-center bg-surface ${BRUT_INTERACTIVE}`}>
              {theme === 'dark' ? <Sun size={16} strokeWidth={3} /> : <Moon size={16} strokeWidth={3} />}
            </button>
          )}

          <ToggleSwitch checked={lang === 'en'} onChange={toggleLang} leftLabel="ID" rightLabel="EN" ariaLabel="Ganti bahasa" />

          <button className={`md:hidden w-10 h-10 flex items-center justify-center bg-surface ${BRUT_INTERACTIVE}`} onClick={() => setOpen((o) => !o)} aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open}>
            {open ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden mx-3 overflow-hidden transition-[max-height,opacity] duration-200 ease-out ${open ? 'max-h-[28rem] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col bg-surface border-[3px] border-ink shadow-brut-sm">
          {NAV_ITEMS.map((item, i) => (
            <button key={item.id} onClick={() => handleClick(item.id)} className={`text-left px-4 py-3 font-bold uppercase text-sm ${i !== 0 ? 'border-t-[3px] border-ink' : ''} ${active === item.id ? 'bg-lime' : ''}`}>
              {item.label}
            </button>
          ))}
          {mounted && (
            <button onClick={toggleTheme} className="sm:hidden flex items-center gap-2 text-left px-4 py-3 font-bold uppercase text-sm border-t-[3px] border-ink">
              {theme === 'dark' ? <Sun size={16} strokeWidth={3} /> : <Moon size={16} strokeWidth={3} />}
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
