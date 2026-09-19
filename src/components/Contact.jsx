import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, Instagram } from 'lucide-react';
import { Blob, SectionLabel, BrutButton } from './ui';
import { SOCIALS, PROFILE } from '@/data/site';
import { useLanguage } from '@/context/LanguageContext';

const ICONS = { Github, Linkedin, Instagram };

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = t.lang === 'en' ? 'Name is required' : 'Nama wajib diisi';
    if (!form.email.trim()) e.email = t.lang === 'en' ? 'Email is required' : 'Email wajib diisi';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = t.lang === 'en' ? 'Invalid email format' : 'Format email tidak valid';
    if (!form.subject.trim()) e.subject = t.lang === 'en' ? 'Subject is required' : 'Subjek wajib diisi';
    if (!form.message.trim()) e.message = t.lang === 'en' ? 'Message is required' : 'Pesan wajib diisi';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }
  };

  const field = (name, label, type = 'text') => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-bold">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea id={name} rows={4} value={form[name]} onChange={(e) => setForm((f) => ({ ...f, [name]: e.target.value }))} className="px-3 py-2 bg-surface outline-none focus:bg-base border-[3px] border-ink" />
      ) : (
        <input id={name} type={type} value={form[name]} onChange={(e) => setForm((f) => ({ ...f, [name]: e.target.value }))} className="px-3 py-2 bg-surface outline-none focus:bg-base border-[3px] border-ink" />
      )}
      {errors[name] && <p className="text-xs font-bold text-pink">{errors[name]}</p>}
    </div>
  );

  return (
    <Blob id="contact" className="py-20 px-4 md:px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>{t.contact.label}</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-10 leading-tight">{t.contact.heading}</h2>
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10">
          <div className="flex flex-col gap-4">
            {[
              { icon: Mail, label: t.contact.email, value: PROFILE.email },
              { icon: Phone, label: 'WhatsApp', value: PROFILE.phone },
              { icon: MapPin, label: t.lang === 'en' ? 'Location' : 'Lokasi', value: PROFILE.location },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 p-4 bg-base border-[3px] border-ink shadow-brut-sm">
                <span className="w-10 h-10 flex items-center justify-center bg-surface shrink-0 border-2 border-ink">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase opacity-60">{label}</p>
                  <p className="font-bold">{value}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-3 mt-2">
              {SOCIALS.map(({ label, href, icon }) => {
                const Icon = ICONS[icon];
                return (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="w-11 h-11 flex items-center justify-center bg-surface hover:bg-lime transition-colors border-[3px] border-ink shadow-brut-sm">
                    <Icon size={18} strokeWidth={2.5} />
                  </a>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 p-6 bg-base border-[3px] border-ink shadow-brut">
            <div className="grid sm:grid-cols-2 gap-4">
              {field('name', t.contact.name)}
              {field('email', t.contact.email, 'email')}
            </div>
            {field('subject', t.contact.subject)}
            {field('message', t.contact.message, 'textarea')}
            <BrutButton type="submit" accent="#C1F73A">
              {t.contact.send} <Send size={16} strokeWidth={3} />
            </BrutButton>
            {sent && (
              <p className="flex items-center gap-2 text-sm font-bold text-ink">
                <CheckCircle2 size={16} strokeWidth={3} /> {t.contact.sent}
              </p>
            )}
          </form>
        </div>
      </div>
    </Blob>
  );
}
