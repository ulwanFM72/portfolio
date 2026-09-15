import Image from 'next/image';
import profilePic from '@/assets/images/profile2.png';
import { Github, Linkedin, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { Blob, SectionLabel, BrutButton } from './ui';
import { SOCIALS, PROFILE } from '@/data/site';

const ICONS = { Github, Linkedin, Instagram };

export default function Hero({ onNavigate }) {
  return (
    <Blob id="home" className="pt-32 md:pt-40 pb-20 px-4 md:px-6 bg-base">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
          <div>
            <SectionLabel>{PROFILE.role}</SectionLabel>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6">
              {PROFILE.name.split(' ')[0]} {PROFILE.name.split(' ')[1]}
              <br />
              membangun web
              <br />
              yang terasa hidup.
            </h1>
            <p className="max-w-lg text-lg leading-relaxed font-medium mb-8">
              Siswa SMK jurusan Rekayasa Perangkat Lunak yang fokus pada pengembangan front-end modern, UI/UX yang jelas, dan antarmuka yang cepat dipakai — bukan sekadar terlihat bagus di layar.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <BrutButton onClick={() => onNavigate('projects')} accent="#C1F73A">
                View Projects <ArrowUpRight size={18} strokeWidth={3} />
              </BrutButton>
              <BrutButton onClick={() => onNavigate('contact')} accent="#2B4EFF">
                Contact Me <Mail size={18} strokeWidth={3} />
              </BrutButton>
            </div>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ label, href, icon }) => {
                const Icon = ICONS[icon];
                return (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="w-11 h-11 flex items-center justify-center bg-white hover:bg-pink transition-colors border-[3px] border-ink shadow-brut-sm">
                    <Icon size={18} strokeWidth={2.5} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="justify-self-center md:justify-self-end">
            <div className="w-72 h-72 md:w-[28rem] md:h-[28rem] bg-lime flex items-center justify-center relative border-[3px] border-ink shadow-brut">
              <Image src={profilePic} alt="Profile Picture" className="w-full h-full object-cover" />
              <span className="absolute -bottom-4 -left-4 px-3 py-1 bg-pink text-sm font-bold border-[3px] border-ink">open to work / magang</span>
            </div>
          </div>
        </div>
      </div>
    </Blob>
  );
}
