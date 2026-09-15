# Portofolio Neobrutalism — Next.js

Website portofolio pribadi berbentuk Single Page Application (SPA) dengan gaya
visual Neobrutalism, dibangun dengan Next.js (Pages Router) + React + Tailwind CSS.

## Struktur Proyek

```text
src/
├── components/
│   ├── ui.jsx          # Primitif bersama (SectionLabel, BrutButton, Blob)
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   ├── site.js         # Nama, profil, nav items, sosial media
│   ├── skills.js
│   ├── projects.js
│   └── experiences.js
├── assets/
│   └── images/         # Taruh foto profil & screenshot proyek di sini
├── styles/
│   └── globals.css
└── pages/
    ├── _app.js
    └── index.js         # Merangkai semua section jadi satu halaman
```

## Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` di browser.

## Build untuk Produksi

```bash
npm run build
npm run start
```

## Mengganti Konten

Semua konten personal ada di folder `src/data/`:

- `site.js` — nama, profesi, email, nomor WhatsApp, lokasi, link sosial media.
- `skills.js` — daftar teknologi & level kemampuan.
- `projects.js` — daftar proyek (nama, deskripsi, tech stack, link demo/GitHub).
- `experiences.js` — daftar pengalaman kerja/organisasi.

Tidak perlu menyentuh komponen di `src/components/` kecuali ingin mengubah
tata letak atau menambah section baru.

## Menambahkan Foto Asli

Saat ini foto profil dan thumbnail proyek memakai inisial/blok warna sebagai
placeholder (sesuai gaya Neobrutalism). Untuk memakai foto asli:

1. Taruh file gambar di `src/assets/images/`.
2. Di `Hero.jsx` atau `Projects.jsx`, ganti blok `<span>...</span>` dengan
   komponen `next/image`, misalnya:

   ```jsx
   import Image from "next/image";
   import profilePic from "@/assets/images/profile.jpg";

   <Image src={profilePic} alt="Foto profil" className="object-cover" />;
   ```

## Menghubungkan Form Contact ke Layanan Nyata

Form di `Contact.jsx` saat ini hanya melakukan validasi di sisi client dan
menampilkan pesan sukses secara lokal (belum benar-benar mengirim email).
Untuk membuatnya fungsional, pilih salah satu:

- **Formspree / Getform** — ganti `onSubmit` dengan `fetch` ke endpoint mereka.
- **EmailJS** — kirim email langsung dari browser tanpa backend.
- **API Route sendiri** — buat `src/pages/api/contact.js` yang mengirim email
  lewat Nodemailer atau layanan seperti Resend, lalu panggil endpoint itu
  dari `handleSubmit`.

## Catatan Desain

Token warna & bayangan Neobrutalism diatur di `tailwind.config.js`
(`colors.ink/base/blue/pink/lime`, `boxShadow.brut/brut-sm`) supaya konsisten
dan mudah diubah dari satu tempat.
# portfolio
