export const config = {
  seo: {
    title: "VoxTech — Jasa Web Greeting Personal & Aesthetic",
    description: "Buat momen spesialmu tak terlupakan dengan web greeting custom. Desain aesthetic, animasi smooth, harga mulai 30K. Pesan sekarang!",
    url: "https://voxtech.id",
    logo: "/favicon.svg",
  },
  links: {
    form: "https://docs.google.com/forms/d/e/1FAIpQLSfuzFgR6m022znjM9xlMiLMRmQJE1dQP2Yr9bAV1ZOxT_ApXQ/viewform?usp=header",
    whatsapp: "https://wa.me/62881038212083",
  },
  hero: {
    tagline: "Jasa Web Greeting Personal",
    headline: "MOMEN SPESIAL \n JADI ABADI",
    description: "Bukan sekadar ucapan biasa — hadirkan momen spesial lewat web greeting yang personal, aesthetic, dan tak terlupakan.",
    cta: "Pesan Sekarang",
    secondaryCta: "Lihat Contoh"
  },
  whyUs: {
    title: "KENAPA VOXTECH?",
    subtitle: "Kami tidak hanya membuat website — kami menghadirkan momen spesial dalam bentuk digital yang berkesan",
    points: [
      {
        id: "01",
        title: "Desain Custom",
        description: "Setiap web dibuat khusus sesuai request — warna, tema, vibe, hingga konten sepenuhnya disesuaikan dengan kebutuhan kamu",
        image: "/images/02.png"
      },
      {
        id: "02",
        title: "Cepat & Terjangkau",
        description: "Pengerjaan 1-2 hari kerja dengan harga mulai 30K — tanpa mengorbankan kualitas tampilan dan animasi",
        image: "/images/01.png"
      }
    ]
  },
  portfolio: {
    title: "KARYA",
    headline: "Hasil \n Nyata.",
    description: "Beberapa web greeting yang sudah kami buat untuk client kami",
    items: [
      {
        category: "Ucapan HBD",
        title: "For Ocii",
        link: "https://for-ocii.vercel.app",
        image: "/images/portfolio/for-ocii.png",
        welcomeImage: "/images/portfolio/for-ocii-welcome.png",
        aspectRatio: "aspect-[3/4]"
      },
      {
        category: "Ucapan HBD",
        title: "Quietly Yours",
        link: "https://quietly-yours.vercel.app",
        image: "/images/portfolio/quietly-yours.png",
        welcomeImage: "/images/portfolio/quietly-yours-welcome.png",
        aspectRatio: "aspect-square"
      },
      {
        category: "Ucapan HBD",
        title: "For Darting",
        link: "https://fordarting.vercel.app",
        image: "/images/portfolio/for-darting.png",
        welcomeImage: "/images/portfolio/for-darting-welcome.png",
        aspectRatio: "aspect-square"
      },
      {
        category: "Ucapan HBD",
        title: "Across The Heart",
        link: "https://acrosstheheart.vercel.app",
        image: "/images/portfolio/across-the-heart.png",
        welcomeImage: "/images/portfolio/across-the-heart-welcome.png",
        aspectRatio: "aspect-[3/4]"
      }
    ]
  },
  pricing: {
    title: "HARGA \n TERJANGKAU.",
    description: "Pilih paket yang sesuai kebutuhanmu. Semua paket sudah termasuk desain custom dan mobile-friendly.",
    tiers: [
      {
        id: "standard",
        name: "Standard",
        category: "Paket Hemat",
        price: "Rp 30K",
        unit: "/momen",
        features: [
          "Desain Custom",
          "Foto & BGM",
          "Mobile-Friendly",
          "Konten Sesuai Request",
          "Revisi 1x",
          "Pengerjaan 1-2 Hari"
        ],
        ctaText: "Pesan Sekarang",
        isPopular: false
      },
      {
        id: "premium",
        name: "Premium",
        category: "Paket Lengkap",
        price: "Rp 40K",
        unit: "/momen",
        features: [
          "Semua Fitur Standard",
          "Animasi Lebih Kompleks",
          "Include Video",
          "Ornamen & Elemen Dekoratif",
          "Revisi 2x",
          "Prioritas Pengerjaan"
        ],
        ctaText: "Pesan Sekarang",
        isPopular: true
      }
    ]
  },
  faq: [
    {
      question: "Berapa lama proses pengerjaannya?",
      answer: "1-2 hari kerja setelah data lengkap diterima."
    },
    {
      question: "Apakah bisa request warna dan tema sendiri?",
      answer: "Bisa, semua desain dibuat custom sesuai keinginan kamu."
    },
    {
      question: "Apakah bisa include foto dan video?",
      answer: "Bisa, untuk paket Standard foto & BGM, untuk Premium sudah termasuk video."
    },
    {
      question: "Apakah ada revisi?",
      answer: "Ada — Standard 1x revisi minor, Premium 2x revisi."
    },
    {
      question: "Bagaimana cara order?",
      answer: "Isi form order, nanti akan dihubungi via WhatsApp dalam 1x24 jam."
    },
    {
      question: "Apakah harga bisa nego?",
      answer: "Bisa, hubungi kami dulu via WhatsApp untuk diskusi lebih lanjut."
    }
  ],
  footer: {
    description: "VoxTech — Menghadirkan momen spesial dalam bentuk digital yang personal dan berkesan.",
    links: [
      { name: "Instagram", href: "https://www.instagram.com/voxfactum/" },
      { name: "WhatsApp", href: "https://wa.me/62881038212083" },
      { name: "Form Order", href: "https://docs.google.com/forms/d/e/1FAIpQLSfuzFgR6m022znjM9xlMiLMRmQJE1dQP2Yr9bAV1ZOxT_ApXQ/viewform?usp=header" }
    ]
  }
};
