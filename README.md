# 🌐 Portfolio - Abby Dahlan Havizh

[![Live Demo](https://img.shields.io/badge/Demo-abby.my.id-blue?style=for-the-badge&logo=vercel&logoColor=white)](https://abby.my.id)
[![Next.js Version](https://img.shields.io/badge/Next.js-v16.2.6-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React Version](https://img.shields.io/badge/React-v19-blue?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TailwindCSS Version](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Website portfolio pribadi **Abby Dahlan Havizh**, seorang siswa SMK Negeri 10 Jakarta jurusan Rekayasa Perangkat Lunak (RPL) yang berfokus pada pengembangan perangkat lunak dan persiapan PKL/magang.

Situs web ini dirancang dengan gaya **Brutalist UI/Minimalist** yang bersih, berfokus pada konten, kecepatan akses, dan navigasi yang intuitif.

🔗 **Link Live Website:** [https://abby.my.id](https://abby.my.id)

---

## ✨ Fitur Utama

- **🌐 Dwibahasa (Bilingual):** Mendukung Bahasa Indonesia & English secara dinamis menggunakan konteks i18n kustom.
- **🌓 Mode Gelap / Terang (Dark / Light Theme):** Integrasi tema mulus dengan transisi warna yang menyenangkan mata menggunakan `next-themes`.
- **⚡ Next.js 16 App Router & React 19:** Memanfaatkan keunggulan teknologi web modern untuk rendering performa tinggi dan SEO optimal.
- **🎨 Brutalist & Minimalist Design:** Tipografi yang tegas, batas tebal, estetika modern, dan animasi mikro responsif menggunakan Tailwind CSS v4.
- **📱 Desain Responsif:** Pengalaman pengguna yang dioptimalkan untuk perangkat ponsel, tablet, hingga layar desktop lebar.

---

## 🛠️ Teknologi & Tools

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
- **Ikon:** [Lucide React](https://lucide.dev/)
- **Komponen UI:** [shadcn/ui](https://ui.shadcn.com/) & `@base-ui/react`
- **Manajemen Tema:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Analitik & Deployment:** [Vercel](https://vercel.com/)

---

## 📂 Struktur Folder Proyek

```bash
portfolio-abby/
├── app/                  # Route Next.js App Router (pages, layout, globals.css)
│   ├── about/            # Halaman Tentang Saya
│   ├── achievements/     # Halaman Pencapaian/Prestasi
│   ├── blog/             # Halaman Artikel/Blog
│   └── projects/         # Halaman Eksplorasi Proyek
├── components/           # Komponen UI yang dapat digunakan kembali (reusable)
│   ├── ui/               # Komponen dasar (shadcn kustom)
│   ├── navbar.tsx        # Navigasi utama
│   ├── footer.tsx        # Bagian kaki halaman
│   └── ...               # Komponen spesifik lainnya
├── lib/                  # Kode utilitas dan sumber data statis
│   ├── data.ts           # Data portofolio (personal, proyek, blog, dll.)
│   ├── i18n.tsx          # Penyedia konteks & hook multibahasa
│   ├── translations.ts   # Kamus terjemahan Indonesia/Inggris
│   └── utils.ts          # Utilitas styling (clsx, tailwind-merge)
├── public/               # File aset statis (gambar, video latar belakang, dll.)
└── package.json          # Manajemen dependensi dan script proyek
```

---

## 🚀 Memulai Secara Lokal (Local Development)

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek ini di mesin lokal Anda.

### Prasyarat (Prerequisites)

Pastikan Anda memiliki hal-hal berikut terinstal di komputer Anda:
- [Node.js](https://nodejs.org/) (versi LTS terbaru direkomendasikan)
- [pnpm](https://pnpm.io/) (atau `npm` / `yarn`)

### Langkah-langkah Penginstalan

1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/abayDahln/portfolio-abby.git
   cd portfolio-abby
   ```

2. **Instal dependensi:**
   Menggunakan `pnpm`:
   ```bash
   pnpm install
   ```
   Atau menggunakan `npm`:
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan lokal:**
   ```bash
   pnpm dev
   # atau
   npm run dev
   ```

4. **Buka browser Anda:**
   Kunjungi [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya secara langsung.

---

## 📜 Perintah yang Tersedia (Scripts)

Di dalam `package.json`, Anda dapat menjalankan beberapa perintah berikut:

- `pnpm dev` - Menjalankan aplikasi dalam mode pengembangan lokal dengan hot-reloading.
- `pnpm build` - Membangun aplikasi Next.js versi siap produksi yang dioptimalkan secara maksimal.
- `pnpm start` - Menjalankan server Next.js siap produksi secara lokal.
- `pnpm lint` - Memeriksa kesesuaian kode dengan aturan ESLint.

---

## ✉️ Kontak & Media Sosial

- **Email:** [abby11dahlan@gmail.com](mailto:abby11dahlan@gmail.com)
- **WhatsApp:** [+62 898-7679-975](https://wa.me/628987679975)
- **GitHub:** [@abayDahln](https://github.com/abayDahln)
- **LinkedIn:** [Abby Dahlan](https://www.linkedin.com/in/abby-dahlan/)
- **Instagram:** [@abaydzh](https://www.instagram.com/abaydzh/)
