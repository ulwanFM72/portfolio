import { Blob, SectionLabel } from './ui';
import { EXPERIENCE } from '@/data/experiences';
import { useLanguage } from '@/context/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();
  const isEn = t.lang === 'en';

  return (
    <Blob id="experience" className="py-20 px-4 md:px-6 bg-base">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>{t.experience.label}</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-10 leading-tight">{t.experience.heading}</h2>
        <div className="flex flex-col gap-5">
          {EXPERIENCE.map((e) => {
            const role = isEn ? e.role_en : e.role_id;
            const period = isEn ? e.period_en : e.period_id;
            const desc = isEn ? e.desc_en : e.desc_id;

            return (
              <div key={role} className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-8 p-5 bg-surface border-[3px] border-ink shadow-brut-sm">
                <p className="text-sm font-bold opacity-60">{period}</p>
                <div>
                  <h3 className="font-black text-lg leading-tight">{role}</h3>
                  <p className="text-sm font-bold mb-2 text-blue">{e.org}</p>
                  <p className="text-sm font-medium leading-relaxed mb-3">{desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {e.tech.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-xs font-bold bg-base border-2 border-ink">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Blob>
  );
}
