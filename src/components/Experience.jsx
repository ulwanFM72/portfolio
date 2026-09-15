import { Blob, SectionLabel } from "./ui";
import { EXPERIENCE } from "@/data/experiences";

export default function Experience() {
  return (
    <Blob id="experience" className="py-20 px-4 md:px-6 bg-base">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-10 leading-tight">
          Perjalanan singkat sejauh ini.
        </h2>
        <div className="flex flex-col gap-5">
          {EXPERIENCE.map((e) => (
            <div
              key={e.role}
              className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-8 p-5 bg-white border-[3px] border-ink shadow-brut-sm"
            >
              <p className="text-sm font-bold opacity-60">{e.period}</p>
              <div>
                <h3 className="font-black text-lg leading-tight">{e.role}</h3>
                <p className="text-sm font-bold mb-2 text-blue">{e.org}</p>
                <p className="text-sm font-medium leading-relaxed mb-3">{e.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {e.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-bold bg-base border-2 border-ink"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Blob>
  );
}
