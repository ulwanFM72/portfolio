import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, Instagram } from "lucide-react";
import { Blob, SectionLabel, BrutButton } from "./ui";
import { SOCIALS, PROFILE } from "@/data/site";

const ICONS = { Github, Linkedin, Instagram };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Nama wajib diisi";
    if (!form.email.trim()) e.email = "Email wajib diisi";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Format email tidak valid";
    if (!form.subject.trim()) e.subject = "Subjek wajib diisi";
    if (!form.message.trim()) e.message = "Pesan wajib diisi";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // TODO: replace with a real submit — e.g. fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })
      // or a service like Formspree / EmailJS.
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }
  };

  const field = (name, label, type = "text") => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-bold">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          rows={4}
          value={form[name]}
          onChange={(e) => setForm((f) => ({ ...f, [name]: e.target.value }))}
          className="px-3 py-2 bg-white outline-none focus:bg-base border-[3px] border-ink"
        />
      ) : (
        <input
          id={name}
          type={type}
          value={form[name]}
          onChange={(e) => setForm((f) => ({ ...f, [name]: e.target.value }))}
          className="px-3 py-2 bg-white outline-none focus:bg-base border-[3px] border-ink"
        />
      )}
      {errors[name] && <p className="text-xs font-bold text-pink">{errors[name]}</p>}
    </div>
  );

  return (
    <Blob id="contact" className="py-20 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-10 leading-tight">
          Ada proyek? Mari ngobrol.
        </h2>
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10">
          <div className="flex flex-col gap-4">
            {[
              { icon: Mail, label: "Email", value: PROFILE.email },
              { icon: Phone, label: "WhatsApp", value: PROFILE.phone },
              { icon: MapPin, label: "Lokasi", value: PROFILE.location },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 bg-base border-[3px] border-ink shadow-brut-sm"
              >
                <span className="w-10 h-10 flex items-center justify-center bg-white shrink-0 border-2 border-ink">
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
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-11 h-11 flex items-center justify-center bg-white hover:bg-lime transition-colors border-[3px] border-ink shadow-brut-sm"
                  >
                    <Icon size={18} strokeWidth={2.5} />
                  </a>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4 p-6 bg-base border-[3px] border-ink shadow-brut"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {field("name", "Nama")}
              {field("email", "Email", "email")}
            </div>
            {field("subject", "Subject")}
            {field("message", "Pesan", "textarea")}
            <BrutButton type="submit" accent="#C1F73A">
              Send Message <Send size={16} strokeWidth={3} />
            </BrutButton>
            {sent && (
              <p className="flex items-center gap-2 text-sm font-bold text-ink">
                <CheckCircle2 size={16} strokeWidth={3} /> Pesan terkirim, terima kasih!
              </p>
            )}
          </form>
        </div>
      </div>
    </Blob>
  );
}
