import { Blob, SectionLabel } from './ui';
import { SKILLS } from '@/data/skills';
import { useInView } from '@/hooks/useInView';
import { useLanguage } from '@/context/LanguageContext';

function SkillCard({ skill, index }) {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="group p-4 bg-surface flex flex-col justify-between h-36 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-brut border-[3px] border-ink shadow-brut-sm cursor-default"
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <div className="flex items-center justify-between">
        <span className="w-3 h-3 border-2 border-ink transition-transform duration-200 group-hover:scale-125" style={{ background: skill.color }} aria-hidden="true" />
        <span className="text-xs font-black opacity-0 group-hover:opacity-100 transition-opacity duration-200">{skill.proficiency}%</span>
      </div>
      <div>
        <p className="font-bold text-sm leading-tight mb-1">{skill.name}</p>
        <p className="text-xs opacity-60 font-medium mb-2">{skill.level}</p>
        <div className="h-2.5 w-full bg-base border-2 border-ink overflow-hidden">
          <div className="h-full transition-all duration-[1200ms] ease-out" style={{ width: inView ? `${skill.proficiency}%` : '0%', background: skill.color }} />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useLanguage();

  return (
    <Blob id="skills" className="py-20 px-4 md:px-6 bg-base">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>{t.skills.label}</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-10 leading-tight">{t.skills.heading}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {SKILLS.map((s, i) => (
            <SkillCard key={s.name} skill={s} index={i} />
          ))}
        </div>
      </div>
    </Blob>
  );
}
