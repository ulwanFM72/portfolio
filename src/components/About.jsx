import { Blob, SectionLabel } from './ui';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const facts = [
    { label: t.about.factEducationLabel, value: t.about.factEducationValue },
    { label: t.about.factFocusLabel, value: t.about.factFocusValue },
    { label: t.about.factLearningLabel, value: t.about.factLearningValue },
    { label: t.about.factStartedLabel, value: t.about.factStartedValue },
  ];

  return (
    <Blob id="about" className="py-20 px-4 md:px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>{t.about.label}</SectionLabel>
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">{t.about.heading}</h2>
            <p className="text-lg leading-relaxed font-medium mb-4">{t.about.p1}</p>
            <p className="text-lg leading-relaxed font-medium">{t.about.p2}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 content-start">
            {facts.map((f) => (
              <div key={f.label} className="p-4 bg-base border-[3px] border-ink shadow-brut-sm">
                <p className="text-xs font-bold uppercase mb-1 opacity-60">{f.label}</p>
                <p className="font-bold leading-snug">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Blob>
  );
}
