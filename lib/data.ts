export const personalData = {
  name: "Abby Dahlan Havizh",
  nickname: "Abby",
  role: "Student",
  tagline: "SMK student preparing for internship and learning software development.",
  about: "Murid SMK Negeri 10 Jakarta jurusan Rekayasa Perangkat Lunak yang sedang mempersiapkan PKL dan terus belajar membangun aplikasi digital.",
  contact: {
    email: "abby11dahlan@gmail.com",
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
    name: { id: 'Exom Browser', en: 'Exom Browser' },
    description: {
      id: 'Browser web minimalis dan keyboard-first yang dibuat untuk developer. Tanpa gangguan, fokus penuh, dan sepenuhnya bisa dinavigasi lewat keyboard.',
      en: 'A minimalist, keyboard-first web browser built for developers. Zero distractions, maximum focus. Entirely keyboard-navigable with a command palette.',
    },
    tags: ['Rust', 'WebKit', 'Desktop', 'macOS'],
    year: '2024',
    status: { id: 'Dirilis', en: 'Released' },
    url: '#',
  },
  {
    id: 2,
    number: '02',
    name: { id: 'HomeCloud', en: 'HomeCloud' },
    description: {
      id: 'Penyimpanan cloud pribadi self-hosted dengan enkripsi end-to-end dan antarmuka web yang bersih. Tanpa langganan. Data Anda, perangkat Anda.',
      en: 'Self-hosted personal cloud storage with end-to-end encryption and a clean web interface. No subscriptions. Your data, your hardware.',
    },
    tags: ['Go', 'React', 'Docker', 'PostgreSQL'],
    year: '2024',
    status: { id: 'Sumber Terbuka', en: 'Open Source' },
    url: '#',
  },
  {
    id: 3,
    number: '03',
    name: { id: 'BeatNotch', en: 'BeatNotch' },
    description: {
      id: 'Stasiun audio ringan yang hidup di menu bar. Tangkap ide musik dalam hitungan detik tanpa membuka DAW berat.',
      en: 'A lightweight audio workstation that lives in your menu bar. Capture musical ideas in seconds without opening a heavy DAW.',
    },
    tags: ['Swift', 'CoreAudio', 'macOS'],
    year: '2023',
    status: { id: 'Dirilis', en: 'Released' },
    url: '#',
  },
  {
    id: 4,
    number: '04',
    name: { id: 'UnstableStudio', en: 'UnstableStudio' },
    description: {
      id: 'Platform seni generatif yang mengubah kode menjadi komposisi visual menggunakan pola algoritma dan batasan kreatif.',
      en: 'A generative art platform that transforms code into visual compositions using algorithmic patterns and creative constraints.',
    },
    tags: ['TypeScript', 'WebGL', 'Canvas API'],
    year: '2023',
    status: { id: 'Dalam Proses', en: 'In Progress' },
    url: '#',
  },
]

export const blogPosts = [
  {
    id: 1,
    date: 'Jun 12, 2025',
    title: { id: 'Mengapa Saya Membuat Segalanya dari Nol', en: 'Why I Build Everything From Scratch' },
    excerpt: {
      id: 'Refleksi jujur tentang obsesi membangun alat dari dasar dan apa yang telah diajarkan tentang desain perangkat lunak dan trade-off.',
      en: 'An honest reflection on the obsession with building tools from the ground up, and what it has taught me about software design and trade-offs.',
    },
    readTime: { id: '5 menit baca', en: '5 min read' },
    slug: '#',
  },
  {
    id: 2,
    date: 'Apr 28, 2025',
    title: { id: 'Alasan untuk Brutalist UI', en: 'The Case for Brutalist UI' },
    excerpt: {
      id: 'Batas datar, teks hitam, ruang putih. Menjelajahi mengapa menghilangkan ornamentasi sering menghasilkan antarmuka yang lebih jujur dan efektif.',
      en: 'Flat borders, black text, white space. Exploring why removing ornamentation often leads to better, more honest interfaces.',
    },
    readTime: { id: '7 menit baca', en: '7 min read' },
    slug: '#',
  },
  {
    id: 3,
    date: 'Mar 05, 2025',
    title: { id: 'Rust untuk Pengembang Frontend', en: 'Rust for Frontend Developers' },
    excerpt: {
      id: 'Pengantar praktis tentang Rust bagi mereka yang hidup di dunia JavaScript. Mengapa ini penting dan di mana memulai tanpa kewalahan.',
      en: 'A practical introduction to Rust for those who live in JavaScript land. Why it matters and where to start without getting overwhelmed.',
    },
    readTime: { id: '9 menit baca', en: '9 min read' },
    slug: '#',
  },
  {
    id: 4,
    date: 'Jan 17, 2025',
    title: { id: 'Merancang dengan Batasan', en: 'Designing With Constraints' },
    excerpt: {
      id: 'Bagaimana bekerja dalam palet monokrom yang ketat membuat saya berpikir lebih keras tentang tipografi, hierarki, dan ritme spasial.',
      en: 'How working within a strict monochrome palette forced me to think harder about typography, hierarchy, and spatial rhythm.',
    },
    readTime: { id: '4 menit baca', en: '4 min read' },
    slug: '#',
  },
  {
    id: 5,
    date: 'Nov 30, 2024',
    title: { id: 'Tentang Merilis dengan Lambat', en: 'On Shipping Slowly' },
    excerpt: {
      id: 'Secara kontradiktif, memperlambat ritme rilis justru meningkatkan kualitas dan penerimaan setiap proyek yang saya kirim.',
      en: 'Counterintuitively, slowing down my release cadence improved both the quality and the reception of every project I shipped.',
    },
    readTime: { id: '6 menit baca', en: '6 min read' },
    slug: '#',
  },
]

export const skills: Record<string, string[]> = {
  Languages: ['C#', 'Java', 'JavaScript', 'SQL', 'Dart'],
  Frontend: ['React', 'Tailwind CSS', 'Framer Motion', 'Flutter'],
  Backend: ['SQL Server', 'Entity Framework', 'PostgreSQL'],
  Design: ['Figma', 'Canva', 'Design Systems'],
  Tools: ['Git & GitHub', 'Visual Studio Code & 2022', 'Vercel', 'Android Studio'],
}

export const experience = [
  {
    year: '2015 – 2021',
    role: { id: 'Sekolah Dasar', en: 'Elementary School' },
    company: { id: 'MI Hudatul Khairiyah', en: 'MI Hudatul Khairiyah' },
    description: {
      id: 'Menempuh pendidikan dasar dan membangun dasar disiplin belajar serta rasa ingin tahu.',
      en: 'Completed elementary education and built a foundation of discipline and curiosity.',
    },
  },
  {
    year: '2021 – 2024',
    role: { id: 'Sekolah Menengah Dasar', en: 'Junior High School' },
    company: { id: 'MTS As-Saadah', en: 'MTS As-Saadah' },
    description: {
      id: 'Melanjutkan pendidikan menengah pertama dan mulai memperdalam minat dalam teknologi dan pemecahan masalah.',
      en: 'Continued junior high education and started developing a stronger interest in technology and problem solving.',
    },
  },
  {
    year: '2024 – Sekarang',
    role: { id: 'Sekolah Menengah Kejuruan', en: 'Vocational High School' },
    company: { id: 'SMK Negeri 10 Jakarta', en: 'SMK Negeri 10 Jakarta' },
    description: {
      id: 'Saat ini menempuh pendidikan di jurusan Rekayasa Perangkat Lunak (RPL) dan mempersiapkan PKL.',
      en: 'Currently studying Software Engineering (RPL) and preparing for an internship program.',
    },
  },
]

export const stats = [
  { value: '04', label: 'Projects Shipped' },
  { value: '05', label: 'Years of Experience' },
  { value: '02', label: 'Open Source Tools' },
  { value: '12', label: 'Articles Written' },
]

export const socialLinks = [
  { label: 'Email', url: `mailto:${personalData.contact.email}` },
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
    iconType: "trophy"
  },
  {
    id: "lks-dki-2025",
    title: "IT Software Solution for Business Competition",
    rank: "Runner-Up (2nd Place)",
    level: "Jakarta Provincial Level (Tingkat Provinsi)",
    year: 2025,
    location: "DKI Jakarta, Indonesia",
    iconType: "medal"
  },
  {
    id: "lks-jaktim-2026",
    title: "IT Software Solution for Business Competition",
    rank: "The Champion (1st Place)",
    level: "East Jakarta Regional Level (Tingkat Wilayah)",
    year: 2026,
    location: "Jakarta Timur, Indonesia",
    iconType: "trophy"
  },
  {
    id: "lks-dki-2026",
    title: "IT Software Solution for Business Competition",
    rank: "Runner-Up (2nd Place)",
    level: "Jakarta Provincial Level (Tingkat Provinsi)",
    year: 2026,
    location: "DKI Jakarta, Indonesia",
    iconType: "medal"
  }
];
