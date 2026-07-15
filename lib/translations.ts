export type Language = 'id' | 'en'

export const LANGUAGE_COOKIE_NAME = 'portfolio-language'

export type TranslationContent = {
  nav: {
    home: string
    projects: string
    about: string
    achievements: string
    blog: string
    getInTouch: string
  }
  home: {
    availability: string
    heroTitle: string
    heroDescription: string
    heroAbout: string
    viewProjects: string
    aboutMe: string
    stats: {
      projects: string
      experience: string
      openSource: string
      articles: string
    }
    featuredProjects: string
    featuredProjectsSubtitle: string
    allProjects: string
    recentArticles: string
    recentArticlesSubtitle: string
    allArticles: string
    contactTitle: string
    contactSubtitle: string
    contactButton: string
  }
  about: {
    pageTitle: string
    pageDescription: string
    biography: string
    name: string
    role: string
    email: string
    phone: string
    intro: string
    body: string
    sayHello: string
    viewProjects: string
    expertise: string
    skillsTitle: string
    skillsDescription: string
    experience: string
    history: string
    values: string
    contactTitle: string
    contactDescription: string
    readyToBuild: string
    sendMessage: string
  }
  projects: {
    pageTitle: string
    pageDescription: string
    work: string
    allProjects: string
    total: string
    process: string
    collaborate: string
    projectIdeaTitle: string
    projectIdeaDescription: string
    getInTouch: string
    learnMore: string
    processSteps: {
      defineTitle: string
      defineDescription: string
      designTitle: string
      designDescription: string
      shipTitle: string
      shipDescription: string
    }
  }
  blog: {
    pageTitle: string
    pageDescription: string
    writing: string
    latest: string
    topics: {
      all: string
      design: string
      engineering: string
      products: string
      process: string
    }
    allArticles: string
    posts: string
    newsletterTitle: string
    newsletterDescription: string
    connect: string
    discussArticleTitle: string
    discussArticleDescription: string
    sendMessage: string
  }
  achievements: {
    pageTitle: string
    pageDescription: string
    recognition: string
    summary: string
    total: string
    firstPlace: string
    secondPlace: string
    yearsActive: string
  }
  footer: {
    rights: string
  }
}

export const translations: Record<Language, TranslationContent> = {
  id: {
    nav: {
      home: 'Beranda',
      projects: 'Proyek',
      about: 'Tentang',
      achievements: 'Prestasi',
      blog: 'Blog',
      getInTouch: 'Hubungi Saya',
    },
    home: {
      availability: 'Siap untuk PKL',
      heroTitle: 'Belajar, membangun, dan terus berkembang.',
      heroDescription: 'Saya {name}, {about}',
      heroAbout: 'murid SMK yang sedang mempersiapkan PKL dan belajar membangun aplikasi digital.',
      viewProjects: 'Lihat Proyek',
      aboutMe: 'Tentang Saya',
      stats: {
        projects: 'Proyek Terkirim',
        experience: 'Tahun Pengalaman',
        openSource: 'Alat Open Source',
        articles: 'Artikel Ditulis',
      },
      featuredProjects: 'Proyek Unggulan',
      featuredProjectsSubtitle: 'Karya yang dipilih',
      allProjects: 'Semua Proyek',
      recentArticles: 'Artikel Terbaru',
      recentArticlesSubtitle: 'Tulisan',
      allArticles: 'Semua Artikel',
      contactTitle: 'Yuk bekerja sama',
      contactSubtitle: 'Punya ide proyek?',
      contactButton: 'Kirim Pesan',
    },
    about: {
      pageTitle: 'Tentang',
      pageDescription: 'Saya adalah siswa SMK Negeri 10 Jakarta jurusan Rekayasa Perangkat Lunak (RPL) yang sedang mempersiapkan diri untuk Praktik Kerja Lapangan (PKL). Memiliki ketertarikan pada pengembangan perangkat lunak, khususnya backend development, serta terus mengembangkan kemampuan dalam membangun aplikasi, memahami logika pemrograman, dan mengelola database.',
      biography: 'Biografi',
      name: 'Nama',
      role: 'Peran',
      email: 'Email',
      phone: 'Telepon',
      intro: 'Terbiasa mempelajari teknologi baru secara mandiri melalui berbagai proyek yang dikerjakan. Memiliki kemampuan berpikir logis dan problem solving yang didukung oleh pemahaman matematika yang baik, sehingga mampu menganalisis permasalahan dan menyusun solusi secara terstruktur.',
      body: 'Berkomitmen untuk terus meningkatkan kemampuan teknis maupun nonteknis, mudah beradaptasi dengan lingkungan baru, serta siap belajar dan berkontribusi dalam dunia kerja melalui pengalaman PKL.',
      sayHello: 'Sapa Saya',
      viewProjects: 'Lihat Proyek',
      expertise: 'Keahlian',
      skillsTitle: 'Keahlian & Alat',
      skillsDescription: 'Selalu belajar. Inilah alat yang paling sering saya gunakan.',
      experience: 'Pendidikan',
      history: 'Riwayat Pendidikan',
      values: 'Nilai',
      contactTitle: 'Hubungi Saya',
      contactDescription: 'Siap membangun sesuatu yang berarti?',
      readyToBuild: 'Siap membangun sesuatu?',
      sendMessage: 'Kirim Pesan',
    },
    projects: {
      pageTitle: 'Proyek',
      pageDescription: 'Kumpulan produk, alat developer, dan eksperimen yang dibangun dengan tanggung jawab penuh.',
      work: 'Pekerjaan',
      allProjects: 'Semua Proyek',
      total: 'Total',
      process: 'Proses',
      collaborate: 'Kolaborasi',
      projectIdeaTitle: 'Punya ide proyek?',
      projectIdeaDescription: 'Saya menerima masukan dan ide proyek. Kalau ada yang ingin dibahas, mari ngobrol.',
      getInTouch: 'Hubungi Saya',
      learnMore: 'Pelajari Lebih Lanjut',
      processSteps: {
        defineTitle: 'Tentukan',
        defineDescription: 'Mulai dari masalah yang jelas. Setiap fitur harus memberi nilai yang nyata.',
        designTitle: 'Rancang',
        designDescription: 'Desain berbasis tipografi dan batasan. Dari Figma ke kode tanpa kehilangan kualitas.',
        shipTitle: 'Rilis',
        shipDescription: 'Iterasi secara terbuka. Rilis lebih awal, kumpulkan feedback nyata, dan terus perbaiki.',
      },
    },
    blog: {
      pageTitle: 'Blog',
      pageDescription:
        'Pemikiran tentang desain perangkat lunak, minimalisme, membangun produk, dan seni membuat hal yang berfungsi dengan baik.',
      writing: 'Tulisan',
      latest: 'Terbaru',
      topics: {
        all: 'Semua',
        design: 'Desain',
        engineering: 'Teknik',
        products: 'Produk',
        process: 'Proses',
      },
      allArticles: 'Semua Artikel',
      posts: 'Posting',
      newsletterTitle: 'Tetap terhubung',
      newsletterDescription: 'Dapatkan artikel terbaru dan pembaruan project.',
      connect: 'Hubungkan',
      discussArticleTitle: 'Ingin membahas sebuah artikel?',
      discussArticleDescription: 'Saya membalas setiap pesan yang thoughtful. Hubungi kapan saja.',
      sendMessage: 'Kirim Pesan',
    },
    achievements: {
      pageTitle: 'Prestasi',
      pageDescription: 'Penghargaan dan pencapaian dari kompetisi dan proyek kolaboratif.',
      recognition: 'Pengakuan',
      summary: 'Ringkasan',
      total: 'Total Prestasi',
      firstPlace: 'Penghargaan Juara 1',
      secondPlace: 'Penghargaan Juara 2',
      yearsActive: 'Tahun Aktif',
    },
    footer: {
      rights: 'Hak cipta',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      achievements: 'Achievements',
      blog: 'Blog',
      getInTouch: 'Get in Touch',
    },
    home: {
      availability: 'Ready for internship',
      heroTitle: 'Learning, building, and growing every day.',
      heroDescription: "I'm {name} — {about}",
      heroAbout: 'a vocational high school student preparing for an internship and learning to build digital applications.',
      viewProjects: 'View Projects',
      aboutMe: 'About Me',
      stats: {
        projects: 'Projects Shipped',
        experience: 'Years of Experience',
        openSource: 'Open Source Tools',
        articles: 'Articles Written',
      },
      featuredProjects: 'Featured Projects',
      featuredProjectsSubtitle: 'Selected Work',
      allProjects: 'All Projects',
      recentArticles: 'Recent Articles',
      recentArticlesSubtitle: 'Writing',
      allArticles: 'All Articles',
      contactTitle: 'Let\'s work together',
      contactSubtitle: 'Got a project in mind?',
      contactButton: 'Send a Message',
    },
    about: {
      pageTitle: 'About',
      pageDescription: 'I am a Software Engineering (RPL) student at SMK Negeri 10 Jakarta, currently preparing for my internship. I have a strong interest in software development, particularly backend development, and continuously improve my skills in building applications, understanding programming concepts, and working with databases.',
      biography: 'Biography',
      name: 'Name',
      role: 'Role',
      email: 'Email',
      phone: 'Phone',
      intro: "I enjoy learning new technologies through self-driven projects and practical experience. With a solid foundation in logical thinking and mathematics, I am able to analyze problems and develop structured, effective solutions.",
      body: 'I am committed to continuous learning, adaptable to new environments, and eager to contribute while gaining valuable experience through my internship.',
      sayHello: 'Say Hello',
      viewProjects: 'View Projects',
      expertise: 'Expertise',
      skillsTitle: 'Skills & Tools',
      skillsDescription: 'Always learning. These are the tools I reach for first.',
      experience: 'Education',
      history: 'Education History',
      values: 'Values',
      contactTitle: 'Contact',
      contactDescription: 'Ready to build something meaningful?',
      readyToBuild: 'Ready to build something?',
      sendMessage: 'Send a Message',
    },
    projects: {
      pageTitle: 'Projects',
      pageDescription: 'A collection of products, developer tools, and experiments built with full ownership.',
      work: 'Work',
      allProjects: 'All Projects',
      total: 'Total',
      process: 'Process',
      collaborate: 'Collaborate',
      projectIdeaTitle: 'Have a project idea?',
      projectIdeaDescription: 'I welcome input and project ideas. If there is anything you\'d like to discuss, let\'s have a chat.',
      getInTouch: 'Get in Touch',
      learnMore: 'Learn More',
      processSteps: {
        defineTitle: 'Define',
        defineDescription: 'Start with a clear problem statement. Every feature must earn its place through usefulness.',
        designTitle: 'Design',
        designDescription: 'Typography-first, constraint-driven UI design. Figma to code with zero fidelity loss.',
        shipTitle: 'Ship',
        shipDescription: 'Iterate in public. Ship early, gather real feedback, and continuously improve.',
      },
    },
    blog: {
      pageTitle: 'Blog',
      pageDescription:
        'Thoughts on software design, minimalism, building products, and making things that work well.',
      writing: 'Writing',
      latest: 'Latest',
      topics: {
        all: 'All',
        design: 'Design',
        engineering: 'Engineering',
        products: 'Products',
        process: 'Process',
      },
      allArticles: 'All Articles',
      posts: 'Posts',
      newsletterTitle: 'Stay in the loop',
      newsletterDescription: 'Get the latest articles and project updates.',
      connect: 'Connect',
      discussArticleTitle: 'Want to discuss an article?',
      discussArticleDescription: 'I reply to every thoughtful message. Reach out any time.',
      sendMessage: 'Send a Message',
    },
    achievements: {
      pageTitle: 'Achievements',
      pageDescription: 'Awards and recognitions from competitions and collaborative work.',
      recognition: 'Recognition',
      summary: 'Summary',
      total: 'Total Achievements',
      firstPlace: '1st Place Awards',
      secondPlace: '2nd Place Awards',
      yearsActive: 'Years Active',
    },
    footer: {
      rights: 'All rights reserved',
    },
  },
}

export function resolveLanguage(value?: string | null): Language {
  return value === 'en' ? 'en' : 'id'
}
