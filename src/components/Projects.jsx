import { Github, ExternalLink } from "lucide-react";
import { Blob, SectionLabel } from "./ui";
import { PROJECTS } from "@/data/projects";

export default function Projects() {
  return (
    <Blob id="projects" className="py-20 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Projects</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-10 leading-tight">
          Beberapa proyek yang pernah saya kerjakan.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className="flex flex-col bg-white transition-transform duration-150 hover:-translate-y-1.5 border-[3px] border-ink shadow-brut"
            >
              <div
                className="h-32 flex items-center justify-center font-black text-2xl border-b-[3px] border-ink"
                style={{ background: p.accent }}
              >
                {/* Swap for a real screenshot via next/image, e.g. src/assets/images/project-1.png */}
                {p.name
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-black text-lg mb-2 leading-tight">{p.name}</h3>
                <p className="text-sm font-medium leading-relaxed mb-3 flex-1">
                  {p.description}
                </p>
                <p className="text-xs font-bold uppercase opacity-60 mb-1">{p.role}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-bold bg-base border-2 border-ink"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-3 mt-auto border-t-2 border-ink">
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-1 text-sm font-bold hover:underline"
                  >
                    Live Demo <ExternalLink size={14} strokeWidth={3} />
                  </a>
                  <a
                    href={p.code}
                    className="inline-flex items-center gap-1 text-sm font-bold hover:underline"
                  >
                    GitHub <Github size={14} strokeWidth={3} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Blob>
  );
}
