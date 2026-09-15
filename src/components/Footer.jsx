import { Github, Linkedin, Instagram } from "lucide-react";
import { NAV_ITEMS, SOCIALS, PROFILE } from "@/data/site";

const ICONS = { Github, Linkedin, Instagram };

export default function Footer({ onNavigate }) {
  return (
    <footer className="px-4 md:px-6 pb-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-ink text-white border-[3px] border-ink shadow-brut-sm">
        <p className="font-bold text-sm">© 2026 {PROFILE.name}. All rights reserved.</p>
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="text-xs font-bold uppercase opacity-80 hover:opacity-100"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex gap-2">
          {SOCIALS.map(({ label, href, icon }) => {
            const Icon = ICONS[icon];
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center bg-white text-ink"
              >
                <Icon size={14} strokeWidth={2.5} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
