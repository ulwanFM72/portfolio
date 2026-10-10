export const BRUT_INTERACTIVE =
  'border-[3px] border-ink shadow-brut-sm transition-all duration-150 ' +
  'hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[7px_7px_0px_0px_rgba(15,15,15,1)] ' +
  'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none';

export function SectionLabel({ children }) {
  return <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-tight bg-surface border-[3px] border-ink shadow-brut-sm">{children}</div>;
}

export function BrutButton({ children, href, onClick, variant = 'solid', type = 'button', accent = '#2B4EFF' }) {
  const base = `inline-flex items-center gap-2 px-6 py-3 font-bold text-base ${BRUT_INTERACTIVE}`;
  const bgClass = variant === 'solid' ? '' : 'bg-surface';
  const style = variant === 'solid' ? { background: accent } : undefined;

  if (href) {
    return (
      <a href={href} className={`${base} ${bgClass}`} style={style}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={`${base} ${bgClass}`} style={style}>
      {children}
    </button>
  );
}

export function Blob({ id, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      {children}
    </section>
  );
}

export function ToggleSwitch({ checked, onChange, leftLabel, rightLabel, ariaLabel }) {
  return (
    <button type="button" role="switch" aria-checked={checked} aria-label={ariaLabel} onClick={onChange} className="relative flex items-center w-[72px] h-9 px-1 bg-surface border-[3px] border-ink shadow-brut-sm transition-colors">
      <span className="absolute left-2 text-[10px] font-black z-0 select-none">{leftLabel}</span>
      <span className="absolute right-2 text-[10px] font-black z-0 select-none">{rightLabel}</span>
      <span className="relative z-10 w-7 h-7 bg-lime border-2 border-ink transition-transform duration-200 flex items-center justify-center text-[9px] font-black" style={{ transform: checked ? 'translateX(34px)' : 'translateX(0px)' }}>
        {checked ? rightLabel : leftLabel}
      </span>
    </button>
  );
}
