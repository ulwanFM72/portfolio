import Image from 'next/image';
import profilePic from '@/assets/images/profile2.png';
import { Github, Linkedin, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { Blob, SectionLabel, BrutButton, BRUT_INTERACTIVE } from './ui';
import { SOCIALS, PROFILE } from '@/data/site';
import { useLanguage } from '@/context/LanguageContext';

const ICONS = { Github, Linkedin, Instagram };

export default function Hero({ onNavigate }) {
  const { t } = useLanguage();

  return (
    <Blob id="home" className="pt-32 md:pt-40 pb-20 px-4 md:px-6 bg-base">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
          <div>
            <SectionLabel>{t.hero.badge}</SectionLabel>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6">
              {PROFILE.name.split(' ')[0]} {PROFILE.name.split(' ')[1]}
              <br />
              {t.hero.title1}
              <br />
              {t.hero.title2}
            </h1>
            <p className="max-w-lg text-lg leading-relaxed font-medium mb-8">{t.hero.description}</p>
            <div className="flex flex-wrap gap-4 mb-10">
              <BrutButton onClick={() => onNavigate('projects')} accent="#C1F73A">
                {t.hero.viewProjects} <ArrowUpRight size={18} strokeWidth={3} />
              </BrutButton>
              <BrutButton onClick={() => onNavigate('contact')} accent="#2B4EFF">
                {t.hero.contactMe} <Mail size={18} strokeWidth={3} />
              </BrutButton>
            </div>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ label, href, icon }) => {
                const Icon = ICONS[icon];
                return (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className={`w-11 h-11 flex items-center justify-center bg-surface hover:bg-pink ${BRUT_INTERACTIVE}`}>
                    <Icon size={18} strokeWidth={2.5} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem]">
            <div className="w-full h-full bg-lime border-[3px] border-ink shadow-brut overflow-hidden relative">
              <Image src={profilePic} alt={`Foto profil ${PROFILE.name}`} fill className="object-cover" />
            </div>
            <span className="absolute -bottom-4 -left-4 px-3 py-1 bg-pink text-sm font-bold border-[3px] border-ink z-20">{t.hero.openToWork}</span>
          </div>
        </div>
      </div>
    </Blob>
  );
}
