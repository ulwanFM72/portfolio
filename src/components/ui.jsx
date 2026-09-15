export function SectionLabel({ children }) {
  return (
    <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-tight bg-white border-[3px] border-ink shadow-brut-sm">
      {children}
    </div>
  );
}

export function BrutButton({
  children,
  href,
  onClick,
  variant = "solid",
  type = "button",
  accent = "#2B4EFF",
}) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 font-bold text-base border-[3px] border-ink shadow-brut-sm transition-all duration-150 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none";
  const style = variant === "solid" ? { background: accent } : { background: "#fff" };

  if (href) {
    return (
      <a href={href} className={base} style={style}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={base} style={style}>
      {children}
    </button>
  );
}

export function Blob({ id, className = "", children }) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      {children}
    </section>
  );
}
