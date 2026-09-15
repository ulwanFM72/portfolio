import { Blob, SectionLabel } from "./ui";
import { SKILLS } from "@/data/skills";

export default function Skills() {
  return (
    <Blob id="skills" className="py-20 px-4 md:px-6 bg-base">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Skills</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-10 leading-tight">
          Tools yang saya pakai sehari-hari.
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {SKILLS.map((s) => (
            <div
              key={s.name}
              className="p-4 bg-white flex flex-col justify-between h-28 transition-transform duration-150 hover:-translate-y-1 border-[3px] border-ink shadow-brut-sm"
            >
              <span
                className="w-3 h-3 border-2 border-ink"
                style={{ background: s.color }}
                aria-hidden="true"
              />
              <div>
                <p className="font-bold text-sm leading-tight">{s.name}</p>
                <p className="text-xs opacity-60 font-medium">{s.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Blob>
  );
}
