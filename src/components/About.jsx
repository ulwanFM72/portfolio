import { Blob, SectionLabel } from './ui';

const FACTS = [
  { label: 'Pendidikan', value: 'Kelas 3 SMK dengan jurusan Rekayasa PErangkat Lunak' },
  { label: 'Fokus', value: 'Front-end development & UI/UX' },
  { label: 'Sedang dipelajari', value: 'Next.js, PHP, desain sistem, Laravel, Vue, React' },
  { label: 'Mulai ngoding', value: 'Sejak SMK, lewat proyek PKL' },
];

export default function About() {
  return (
    <Blob id="about" className="py-20 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>About</SectionLabel>
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Belajar dengan cara membangun sesuatu yang nyata.</h2>
            <p className="text-lg leading-relaxed font-medium mb-4">
              Saya mulai serius belajar web development saat menjalani Praktik Kerja Lapangan (PKL), di mana saya terlibat langsung membangun website profil sekolah dari nol — mulai dari perancangan tampilan sampai menyambungkannya dengan
              server dan database.
            </p>
            <p className="text-lg leading-relaxed font-medium">
              Sejak itu saya terus mencoba stack baru: dari HTML/CSS dasar, ke React dan Next.js, sambil tetap menjaga kode yang rapi dan mudah dipelihara. Saya percaya desain yang baik dan kode yang bersih adalah dua sisi dari hal yang
              sama.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 content-start">
            {FACTS.map((f) => (
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
