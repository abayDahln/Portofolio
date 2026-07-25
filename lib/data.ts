export const personalData = {
  name: "Abby Dahlan Havizh",
  nickname: "Abby",
  role: "Mobile & Backend Developer",
  tagline: "Interested in IT, specifically mobile and backend development, and continuously building digital applications.",
  about: "Seseorang yang tertarik di bidang IT, khususnya mobile dan backend developer, dan terus belajar membangun aplikasi digital.",
  contact: {
    email: "abby11dahlan@gmail.com",
    emailUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=abby11dahlan@gmail.com",
    phone: "+62 898-7679-975",
    whatsappUrl: "https://wa.me/628987679975"
  },
  social: {
    github: "https://github.com/abayDahln",
    linkedin: "https://www.linkedin.com/in/abby-dahlan/",
    instagram: "https://www.instagram.com/abaydzh/"
  }
};

export const projects = [
  {
    id: 1,
    number: '01',
    name: { id: 'HomeCloud', en: 'HomeCloud' },
    description: {
      id: 'Solusi penyimpanan cloud pribadi self-hosted premium dengan privasi penuh. Kelola dan sinkronisasi file Anda di perangkat Anda sendiri.',
      en: 'A premium self-hosted cloud storage solution designed for full privacy and control over your digital life.',
    },
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    tags: ['Flutter', 'Go', 'React', 'Docker'],
    year: '2025',
    status: { id: 'Sumber Terbuka', en: 'Open Source' },
    url: '/projects/1',
    liveUrl: 'https://home-cloud-app.vercel.app',
    github: 'https://github.com/abayDahln/HomeCloud',
    detailDescription: {
      id: 'HomeCloud adalah ekosistem penyimpanan cloud pribadi yang terdiri dari aplikasi klien (Flutter), server backend (Go), dan web installer (React). Data Anda tetap di perangkat Anda sendiri dengan enkripsi penuh dan tanpa langganan.',
      en: 'HomeCloud is a self-hosted cloud storage ecosystem consisting of a client app (Flutter), backend server (Go), and web installer (React). Your data stays on your own hardware with full encryption and no subscriptions.',
    },
  },
  {
    id: 2,
    number: '02',
    name: { id: 'UnstableStudio', en: 'UnstableStudio' },
    description: {
      id: 'IDE modern dengan performa tinggi, desain aesthetic, dan kecerdasan AI. Dibangun dengan Flutter untuk pengalaman coding yang mulus.',
      en: 'The next-gen aesthetic and high-performance IDE built with Flutter. Combining beautiful Material 3 design with AI intelligence.',
    },
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    tags: ['Flutter', 'Dart', 'Riverpod', 'Gemini AI'],
    year: '2025',
    status: { id: 'Dalam Proses', en: 'In Progress' },
    url: '/projects/2',
    liveUrl: 'https://unstable-studio.vercel.app',
    github: 'https://github.com/abayDahln/UnstableStudio',
    detailDescription: {
      id: 'Unstable Studio adalah IDE modern yang dirancang untuk memberikan pengalaman coding yang mulus, cepat, dan cerdas. Dibangun dengan Flutter dan Riverpod, dilengkapi editor berperforma tinggi, terminal terintegrasi, fitur AI berbasis Gemini API, serta dukungan dynamic color dari Material 3.',
      en: 'Unstable Studio is a modern IDE designed for a smooth, fast, and intelligent coding experience. Built with Flutter and Riverpod, featuring a high-performance editor, integrated terminal, Gemini AI-powered features, and Material 3 dynamic color support.',
    },
  },
  {
    id: 3,
    number: '03',
    name: { id: 'EsemkaSchoolLibrary', en: 'EsemkaSchoolLibrary' },
    description: {
      id: 'Sistem manajemen perpustakaan berbasis C# WinForms dengan LINQ to SQL dan SQL Server. Kelola buku, anggota, kategori, dan peminjaman.',
      en: 'A library management system built with C# WinForms, LINQ to SQL, and SQL Server. Manage books, members, categories, and borrowing.',
    },
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    tags: ['C#', 'WinForms', 'LINQ to SQL', 'SQL Server'],
    year: '2025',
    status: { id: 'Beta', en: 'Beta' },
    url: '/projects/3',
    github: 'https://github.com/abayDahln/EsemkaSchoolLibrary',
    detailDescription: {
      id: 'EsemkaSchoolLibrary adalah aplikasi manajemen perpustakaan berbasis Windows Forms yang mendukung pengelolaan buku, kategori, anggota, dan peminjaman. Dibangun dengan C#, LINQ to SQL, dan SQL Server. Fitur termasuk sistem login, pencarian buku, dan koleksi buku tersimpan.',
      en: 'EsemkaSchoolLibrary is a Windows Forms-based library management application supporting book, category, member, and borrowing management. Built with C#, LINQ to SQL, and SQL Server. Features include login system, book search, and saved book collections.',
    },
  },
  {
    id: 4,
    number: '04',
    name: { id: 'Pixelette', en: 'Pixelette' },
    description: {
      id: 'Aplikasi desktop ringan untuk mengekstrak palet warna dari gambar dan mengambil warna dari layar. Cocok untuk desainer dan developer.',
      en: 'A lightweight desktop app to extract color palettes from images and pick colors from screen. Perfect for designers and developers.',
    },
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    tags: ['C#', 'WinForms', '.NET', 'Desktop'],
    year: '2025',
    status: { id: 'Dirilis', en: 'Released' },
    url: '/projects/4',
    liveUrl: 'https://pixelette.vercel.app',
    github: 'https://github.com/abayDahln/Pixelette',
    detailDescription: {
      id: 'Pixelette adalah aplikasi desktop Windows modern yang dirancang untuk mengekstrak palet warna dominan dari gambar, mengambil warna dari layar, dan menampilkan kode warna dalam format HEX dan RGB. Dibangun dengan C# dan WinForms, siap digunakan offline.',
      en: 'Pixelette is a modern Windows desktop app designed to extract dominant color palettes from images, pick colors from screen, and display color codes in HEX and RGB formats. Built with C# and WinForms, ready for offline use.',
    },
  },
  {
    id: 5,
    number: '05',
    name: { id: 'SpareWMS', en: 'SpareWMS' },
    description: {
      id: 'Sistem manajemen inventori spare part warehouse dengan tracking real-time, transaksi otomatis, dan role-based access control.',
      en: 'A spare part warehouse inventory management system with real-time tracking, automated transactions, and role-based access control.',
    },
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    tags: ['C#', 'WinForms', 'LINQ to SQL', 'SQL Server'],
    year: '2026',
    status: { id: 'Dirilis', en: 'Released' },
    url: '/projects/5',
    github: 'https://github.com/abayDahln/SpareWMS',
    detailDescription: {
      id: 'SpareWMS adalah sistem manajemen inventori spare part berbasis desktop yang terintegrasi untuk mengelola warehouse dengan tracking real-time, transaksi IN/OUT otomatis, role-based access control, dan audit trail lengkap. Dibangun dengan .NET Framework 4.8 dan SQL Server.',
      en: 'SpareWMS is an integrated desktop-based spare part inventory management system for warehouse management with real-time tracking, automated IN/OUT transactions, role-based access control, and complete audit trail. Built with .NET Framework 4.8 and SQL Server.',
    },
  },
  {
    id: 6,
    number: '06',
    name: { id: 'Laundrly', en: 'Laundrly' },
    description: {
      id: 'Sistem manajemen transaksi dan layanan laundry berbasis desktop dengan tracking status real-time dan manajemen karyawan.',
      en: 'A desktop-based laundry management system with real-time transaction tracking and employee management.',
    },
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    tags: ['C#', 'WinForms', 'LINQ to SQL', 'SQL Server'],
    year: '2026',
    status: { id: 'Dirilis', en: 'Released' },
    url: '/projects/6',
    github: 'https://github.com/abayDahln/Laundrly',
    detailDescription: {
      id: 'Laundrly adalah aplikasi desktop untuk mendigitalisasi manajemen operasional outlet laundry. Mencakup pencatatan transaksi drop-off, pembelian paket prepaid, manajemen layanan kiloan/satuan, serta pengelolaan data karyawan dengan role-based access control.',
      en: 'Laundrly is a desktop application for digitizing laundry outlet operational management. Includes drop-off transaction recording, prepaid package purchases, per-kilo/unit service management, and employee data management with role-based access control.',
    },
  },
  {
    id: 7,
    number: '07',
    name: { id: 'BreezeCommerce', en: 'BreezeCommerce' },
    description: {
      id: 'Aplikasi e-commerce desktop dengan sistem keranjang belanja, multi-metode pembayaran, dan role-based access control untuk admin dan pelanggan.',
      en: 'A desktop e-commerce application with shopping cart system, multi-payment methods, and role-based access control for admin and customers.',
    },
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    tags: ['C#', 'WinForms', 'LINQ to SQL', 'SQL Server'],
    year: '2026',
    status: { id: 'Dirilis', en: 'Released' },
    url: '/projects/7',
    github: 'https://github.com/abayDahln/BreezeCommerce',
    detailDescription: {
      id: 'BreezeCommerce adalah aplikasi e-commerce desktop yang mendukung manajemen katalog produk, sistem keranjang belanja interaktif, multi-metode pembayaran (Cash/E-Wallet), dan riwayat transaksi real-time. Dengan role-based access control untuk Admin dan Customer.',
      en: 'BreezeCommerce is a desktop e-commerce application supporting product catalog management, interactive shopping cart system, multi-payment methods (Cash/E-Wallet), and real-time transaction history. With role-based access control for Admin and Customer.',
    },
  },
]

export const blogPosts = [
  {
    id: 1,
    date: 'Mar 05, 2025',
    dateISO: '2025-03-05',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    title: { id: 'Eksperimen Audio dengan Swift', en: 'Audio Experiments with Swift' },
    excerpt: {
      id: 'Bermain-main dengan CoreAudio dan Swift untuk bikin alat musik digital sederhana. Hasilnya? BeatNotch.',
      en: 'Playing around with CoreAudio and Swift to build a simple digital music tool. The result? BeatNotch.',
    },
    content: {
      id: 'Awalnya cuma iseng pengen tahu cara kerja audio processing di macOS. Saya mulai dengan membaca dokumentasi CoreAudio dan langsung kewalahan.\n\nTapi setelah beberapa hari ngulik, saya mulai paham alur dasarnya: input → process → output. Dari situ saya bikin prototipe sederhana yang bisa generate beat.\n\nBeatNotch lahir dari eksperimen ini. Aplikasi kecil yang tinggal di menu bar dan siap merekam ide musik kapan saja. Enggak perlu buka DAW yang berat.\n\nYang paling saya suka dari proyek ini adalah saya belajar banyak tentang digital signal processing — topik yang sebelumnya terasa sangat kompleks.',
      en: 'It started as a curiosity about how audio processing works on macOS. I began reading CoreAudio documentation and was immediately overwhelmed.\n\nBut after a few days of tinkering, I started to understand the basic flow: input → process → output. From there I built a simple prototype that could generate beats.\n\nBeatNotch was born from this experiment. A small app that lives in the menu bar, ready to capture musical ideas anytime. No need to open a heavy DAW.\n\nWhat I love most about this project is how much I learned about digital signal processing — a topic that previously felt incredibly complex.',
    },
    readTime: { id: '9 menit baca', en: '9 min read' },
    slug: '/post/1',
  },
  {
    id: 2,
    date: 'Jan 17, 2025',
    dateISO: '2025-01-17',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    title: { id: 'Membangun Portfolio ini', en: 'Building This Portfolio' },
    excerpt: {
      id: 'Cerita di balik pembuatan portfolio ini — dari desain brutalist, pemilihan teknologi, sampai keputusan untuk tidak menggunakan CSS framework.',
      en: 'Behind the scenes of building this portfolio — from brutalist design, tech choices, to the decision of not using a CSS framework.',
    },
    content: {
      id: 'Portfolio ini saya bangun dari nol dengan Next.js dan Tailwind CSS. Tapi yang paling menarik adalah proses desainnya.\n\nSaya sengaja memilih pendekatan brutalist: zero border-radius, palet monokrom, tipografi bold. Ini bukan tren — ini keputusan sadar untuk bikin sesuatu yang jujur dan fungsional.\n\nSetiap elemen di halaman ini punya alasan. Border hitam tegas, tidak ada gradien, tidak ada bayangan. Semua gangguan visual dihilangkan agar konten yang berbicara.\n\nProsesnya memakan waktu lebih lama dari yang saya kira, terutama untuk bikin sistem bilingual yang rapi dan handling dark mode manual.',
      en: 'I built this portfolio from scratch using Next.js and Tailwind CSS. But the most interesting part was the design process.\n\nI deliberately chose a brutalist approach: zero border-radius, monochrome palette, bold typography. This is not a trend — it is a conscious decision to make something honest and functional.\n\nEvery element on this page has a reason. Sharp black borders, no gradients, no shadows. All visual noise removed so the content speaks.\n\nThe process took longer than I expected, especially building a clean bilingual system and handling dark mode manually.',
    },
    readTime: { id: '4 menit baca', en: '4 min read' },
    slug: '/post/2',
  },
  {
    id: 3,
    date: 'Nov 30, 2024',
    dateISO: '2024-11-30',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    title: { id: 'Persiapan LKS Tingkat Provinsi', en: 'Preparing for Provincial LKS' },
    excerpt: {
      id: 'Persiapan untuk Lomba Kompetensi Siswa tingkat provinsi bidang IT Software Solution for Business. Latihan, strategi, dan pelajaran yang didapat.',
      en: 'Preparing for the provincial student competition in IT Software Solution for Business. Practice, strategy, and lessons learned.',
    },
    content: {
      id: 'Setelah berhasil di tingkat wilayah, sekarang saya mempersiapkan diri untuk LKS tingkat provinsi. Tingkat persaingannya jauh lebih ketat.\n\nFokus utama latihan saya adalah database design dan optimasi query SQL. Di kompetisi sebelumnya, kelemahan saya ada di bagian ini.\n\nSaya juga banyak latihan soal-soal tahun sebelumnya dan belajar dari peserta senior. Strategi yang paling membantu adalah manajemen waktu — di kompetisi, waktu adalah segalanya.\n\nAkhirnya saya berhasil meraih juara 2 di tingkat provinsi. Hasil yang memuaskan, tapi masih ada ruang untuk improvement.',
      en: 'After succeeding at the regional level, I am now preparing for the provincial LKS. The competition is much tougher.\n\nMy main practice focus is database design and SQL query optimization. In previous competitions, this was my weakness.\n\nI also practiced with previous years\' problems and learned from senior participants. The most helpful strategy was time management — in competitions, time is everything.\n\nI eventually achieved 2nd place at the provincial level. A satisfying result, but there is still room for improvement.',
    },
    readTime: { id: '6 menit baca', en: '6 min read' },
    slug: '/post/3',
  },
]

export const skills: Record<string, string[]> = {
  Languages: ['C#', 'Java', 'TypeScript', 'Dart'],
  Frontend: ['React', 'Tailwind CSS', 'Next', 'Flutter'],
  Backend: ['SQL Server', 'Supabase', 'PostgreSQL'],
  Tools: ['Git', 'GitHub', 'Visual Studio Community', 'Android Studio'],
  Design: ['Figma', 'Canva', 'Stitch'],
}

export const skillUrls: Record<string, string> = {
  'C#': 'https://dotnet.microsoft.com/en-us/languages/csharp',
  'Java': 'https://www.java.com/en/',
  'TypeScript': 'https://www.typescriptlang.org/',
  'Dart': 'https://dart.dev/',
  'React': 'https://react.dev/',
  'Tailwind CSS': 'https://tailwindcss.com/',
  'Next': 'https://nextjs.org/',
  'Flutter': 'https://flutter.dev/',
  'SQL Server': 'https://www.microsoft.com/en-us/sql-server',
  'Supabase': 'https://supabase.com/',
  'PostgreSQL': 'https://www.postgresql.org',
  'Git': 'https://git-scm.com/',
  'GitHub': 'https://github.com/',
  'Visual Studio Community': 'https://visualstudio.microsoft.com/vs/community/',
  'Android Studio': 'https://developer.android.com/studio?hl=id',
  'Canva': 'https://www.canva.com/',
  'Figma': 'https://www.figma.com/',
  'Stitch': 'https://stitch.withgoogle.com/',
}

export const experience = [
  {
    year: '2015 – 2021',
    role: { id: 'Sekolah Dasar', en: 'Elementary School' },
    company: { id: 'MI Hudatul Khairiyah', en: 'MI Hudatul Khairiyah' },
    companyUrl: 'https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/70D2AE95-8D80-43EE-8BDE-EC0F14E62ACC',
    description: {
      id: 'Menempuh pendidikan dasar dan membangun dasar disiplin belajar serta rasa ingin tahu.',
      en: 'Completed elementary education and built a foundation of discipline and curiosity.',
    },
  },
  {
    year: '2021 – 2024',
    role: { id: 'Sekolah Menengah Dasar', en: 'Junior High School' },
    company: { id: 'MTS As-Saadah', en: 'MTS As-Saadah' },
    companyUrl: 'https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/43E54B5E-2B00-4C63-8BA1-0C036E5D2142',
    description: {
      id: 'Melanjutkan pendidikan menengah pertama dan mulai memperdalam minat dalam teknologi dan pemecahan masalah.',
      en: 'Continued junior high education and started developing a stronger interest in technology and problem solving.',
    },
  },
  {
    year: '2024 – Sekarang',
    role: { id: 'Sekolah Menengah Kejuruan', en: 'Vocational High School' },
    company: { id: 'SMK Negeri 10 Jakarta', en: 'SMK Negeri 10 Jakarta' },
    companyUrl: 'https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/17C068CC-B334-4FD5-9147-10DCE8A48AC0',
    description: {
      id: 'Saat ini menempuh pendidikan di jurusan Rekayasa Perangkat Lunak (RPL) dan fokus mengembangkan keterampilan untuk berkarir di bidang teknologi.',
      en: 'Currently studying Software Engineering (RPL) and focused on building skills for a career in technology.',
    },
  },
]

export const stats = [
  { value: '07', label: 'Projects Shipped' },
  { value: '05', label: 'Years of Experience' },
  { value: '02', label: 'Open Source Tools' },
  { value: '12', label: 'Articles Written' },
]

export const socialLinks = [
  { label: 'Email', url: personalData.contact.emailUrl },
  { label: 'LinkedIn', url: personalData.social.linkedin },
  { label: 'Instagram', url: personalData.social.instagram },
  { label: 'GitHub', url: personalData.social.github },
]

export const achievementsData = [
  {
    id: "lks-jaktim-2025",
    title: "IT Software Solution for Business Competition",
    rank: "The Champion (1st Place)",
    level: "East Jakarta Regional Level (Tingkat Wilayah)",
    year: 2025,
    location: "Jakarta Timur, Indonesia",
    iconType: "trophy",
    image: "/placeholder.jpg"
  },
  {
    id: "lks-dki-2025",
    title: "IT Software Solution for Business Competition",
    rank: "Runner-Up (2nd Place)",
    level: "Jakarta Provincial Level (Tingkat Provinsi)",
    year: 2025,
    location: "DKI Jakarta, Indonesia",
    iconType: "medal",
    image: "/placeholder.jpg"
  },
  {
    id: "lks-jaktim-2026",
    title: "IT Software Solution for Business Competition",
    rank: "The Champion (1st Place)",
    level: "East Jakarta Regional Level (Tingkat Wilayah)",
    year: 2026,
    location: "Jakarta Timur, Indonesia",
    iconType: "trophy",
    image: "/placeholder.jpg"
  },
  {
    id: "lks-dki-2026",
    title: "IT Software Solution for Business Competition",
    rank: "Runner-Up (2nd Place)",
    level: "Jakarta Provincial Level (Tingkat Provinsi)",
    year: 2026,
    location: "DKI Jakarta, Indonesia",
    iconType: "medal",
    image: "/placeholder.jpg"
  }
];
