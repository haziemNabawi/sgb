/* ============================================================
   SMART GLOW BUDGET — PUSAT DATA
   Semua harga, produk, foto, dan promo diatur DI SINI SAJA.
   Ubah angka di sini → semua halaman otomatis ikut berubah.
   ============================================================ */

/* Diskon paket: 0.10 = 10%. Berlaku HANYA untuk pembelian paket.
   Harga satuan per barang tidak didiskon. */
const PROMO_DISKON = 0.10;

const SGB_DATA = {

  /* ───────────────────────── ACNE ───────────────────────── */
  "acne": {
    nama: "Acne Solution",
    emoji: "🌿",
    deskripsi: "Untuk kulit berjerawat dan mudah berjerawat",
    tema: { utama: "#0e8f8a", tua: "#085e5b", muda: "#e3f4f3", border: "#c6e7e5", aksen: "#14b3ac" },
    tiers: [
      {
        id: "starter", nama: "Starter", icon: "🌱", range: "< Rp100.000", budgetMaks: 100000,
        judul: "Routine Basic",
        catatan: "Langkah paling dasar untuk kulit berjerawat: bersihkan dan lindungi. Cocok buat kamu yang baru mulai skincare.",
        fotoPaket: "img/acne/paket-starter.jpg",
        produk: [
          { nama: "Acnederm Face Wash 100 ml", peran: "Cleanser — membersihkan tanpa bikin kering", harga: 38500, foto: "img/acne/face-wash.jpg", ikon: "🧴" },
          { nama: "Acne Calming Sunscreen SPF 35", peran: "Sunscreen — proteksi harian, menenangkan kulit", harga: 38000, foto: "img/acne/sunscreen-spf35.jpg", ikon: "☀️" }
        ]
      },
      {
        id: "essential", nama: "Essential", icon: "🌸", range: "Rp150rb – 300rb", budgetMaks: 300000,
        judul: "Routine Essential",
        catatan: "Paket paling pas untuk kulit dengan jerawat aktif — sudah termasuk serum untuk merawat jerawat secara langsung.",
        fotoPaket: "img/acne/paket-essential.jpg",
        produk: [
          { nama: "Acnederm Face Wash", peran: "Cleanser — membersihkan tanpa bikin kering", harga: 38500, foto: "img/acne/face-wash.jpg", ikon: "🧴" },
          { nama: "Acnederm Refining Toner", peran: "Toner — menyeimbangkan & menghaluskan tekstur", harga: 34000, foto: "img/acne/toner.jpg", ikon: "💧" },
          { nama: "Acne Relief Serum", peran: "Serum — merawat jerawat aktif & meredakan kemerahan", harga: 123000, foto: "img/acne/serum.jpg", ikon: "✨" },
          { nama: "Acne Calming Sunscreen SPF 35", peran: "Sunscreen — proteksi harian, menenangkan kulit", harga: 38000, foto: "img/acne/sunscreen-spf35.jpg", ikon: "☀️" }
        ]
      },
      {
        id: "complete", nama: "Complete", icon: "✨", range: "> Rp300.000", budgetMaks: 450000,
        judul: "Routine Complete",
        catatan: "Rangkaian lengkap 5 langkah: merawat jerawat, menjaga skin barrier dengan moisturizer, plus proteksi SPF lebih tinggi.",
        fotoPaket: "img/acne/paket-complete.jpg",
        produk: [
          { nama: "Acnederm Face Wash", peran: "Cleanser — membersihkan tanpa bikin kering", harga: 38500, foto: "img/acne/face-wash.jpg", ikon: "🧴" },
          { nama: "Acnederm Refining Toner", peran: "Toner — menyeimbangkan & menghaluskan tekstur", harga: 34000, foto: "img/acne/toner.jpg", ikon: "💧" },
          { nama: "Acne Relief Serum", peran: "Serum — merawat jerawat aktif & meredakan kemerahan", harga: 123000, foto: "img/acne/serum.jpg", ikon: "✨" },
          { nama: "Derma Sensitive Moisturizer", peran: "Moisturizer — melembapkan & menjaga skin barrier", harga: 132000, foto: "img/acne/moisturizer.jpg", ikon: "🫧" },
          { nama: "Acne Calming Sunscreen SPF 50", peran: "Sunscreen — proteksi maksimal untuk aktivitas luar", harga: 59000, foto: "img/acne/sunscreen-spf50.jpg", ikon: "☀️" }
        ]
      }
    ],
    tips: [
      { ikon: "🙅", judul: "Jangan pencet jerawat", isi: "Memencet jerawat memicu peradangan lebih parah dan meninggalkan noda hitam." },
      { ikon: "🛏️", judul: "Rutin ganti sarung bantal", isi: "Sarung bantal menyimpan minyak dan bakteri. Ganti minimal seminggu sekali." },
      { ikon: "⏳", judul: "Sabar & konsisten", isi: "Hasil skincare butuh 4–8 minggu. Jangan gonta-ganti produk terlalu cepat." },
      { ikon: "💦", judul: "Tetap pakai pelembap", isi: "Kulit kering justru memproduksi minyak berlebih yang memicu jerawat." }
    ]
  },

  /* ─────────────────────── ANTI AGING ─────────────────────── */
  "anti-aging": {
    nama: "Anti Aging Solution",
    emoji: "🌟",
    deskripsi: "Untuk garis halus, kulit kurang kenyal & mulai kehilangan kelembapan",
    tema: { utama: "#8b7ec9", tua: "#5d519b", muda: "#f2f0fa", border: "#ddd8f0", aksen: "#a89ddb" },
    tiers: [
      {
        id: "basic", nama: "Basic", icon: "🌱", range: "± Rp160 ribuan", budgetMaks: 200000,
        judul: "Anti Aging Basic",
        catatan: "Untuk yang mulai concern garis halus dan kulit terasa kurang lembap — bersihkan, lembapkan, lindungi.",
        fotoPaket: "img/anti-aging/paket-basic.jpg",
        produk: [
          { nama: "Renew You Face Wash", peran: "Cleanser — membersihkan lembut tanpa menarik kelembapan", harga: 44000, foto: "img/anti-aging/face-wash.jpg", ikon: "🧴" },
          { nama: "Renew You Day Cream 15gr", peran: "Day Cream — menjaga kekenyalan & kelembapan di siang hari", harga: 58000, foto: "img/anti-aging/day-cream-15.jpg", ikon: "🫧" },
          { nama: "Collagen Sunscreen SPF 50", peran: "Sunscreen — mencegah penuaan dini akibat sinar UV", harga: 59000, foto: "img/anti-aging/sunscreen.jpg", ikon: "☀️" }
        ]
      },
      {
        id: "treatment", nama: "Treatment", icon: "✨", range: "± Rp260 ribuan", budgetMaks: 300000,
        judul: "Anti Aging Treatment",
        catatan: "Untuk kulit yang mulai kehilangan kekenyalan & butuh perawatan lebih fokus — dilengkapi serum.",
        fotoPaket: "img/anti-aging/paket-treatment.jpg",
        produk: [
          { nama: "Renew You Face Wash", peran: "Cleanser — membersihkan lembut tanpa menarik kelembapan", harga: 44000, foto: "img/anti-aging/face-wash.jpg", ikon: "🧴" },
          { nama: "Renew You Serum", peran: "Serum — merawat elastisitas & menyamarkan garis halus", harga: 104000, foto: "img/anti-aging/serum.jpg", ikon: "✨" },
          { nama: "Renew You Day Cream 15gr", peran: "Day Cream — menjaga kekenyalan & kelembapan di siang hari", harga: 58000, foto: "img/anti-aging/day-cream-15.jpg", ikon: "🫧" },
          { nama: "Collagen Sunscreen SPF 50", peran: "Sunscreen — mencegah penuaan dini akibat sinar UV", harga: 59000, foto: "img/anti-aging/sunscreen.jpg", ikon: "☀️" }
        ]
      },
      {
        id: "complete", nama: "Complete", icon: "💎", range: "± Rp450 ribuan", budgetMaks: 500000,
        judul: "Anti Aging Complete",
        catatan: "Rutinitas pagi & malam yang lengkap — day cream dan night cream ukuran besar untuk perawatan maksimal.",
        fotoPaket: "img/anti-aging/paket-complete.jpg",
        produk: [
          { nama: "Renew You Face Wash", peran: "Cleanser — membersihkan lembut tanpa menarik kelembapan", harga: 44000, foto: "img/anti-aging/face-wash.jpg", ikon: "🧴" },
          { nama: "Renew You Serum", peran: "Serum — merawat elastisitas & menyamarkan garis halus", harga: 104000, foto: "img/anti-aging/serum.jpg", ikon: "✨" },
          { nama: "Renew You Day Cream 30gr", peran: "Day Cream — perawatan siang, ukuran besar lebih hemat", harga: 116000, foto: "img/anti-aging/day-cream-30.jpg", ikon: "🫧" },
          { nama: "Renew You Night Cream 30gr", peran: "Night Cream — regenerasi kulit maksimal saat tidur", harga: 116000, foto: "img/anti-aging/night-cream-30.jpg", ikon: "🌙" },
          { nama: "Collagen Sunscreen SPF 50", peran: "Sunscreen — mencegah penuaan dini akibat sinar UV", harga: 59000, foto: "img/anti-aging/sunscreen.jpg", ikon: "☀️" }
        ]
      }
    ],
    tips: [
      { ikon: "🕶️", judul: "Sunscreen setiap hari", isi: "Paparan UV adalah penyebab utama penuaan dini — pakai sunscreen bahkan saat di dalam ruangan." },
      { ikon: "😴", judul: "Tidur cukup", isi: "Regenerasi kulit paling aktif saat tidur. Night cream bekerja optimal dengan tidur 7–8 jam." },
      { ikon: "💧", judul: "Jaga hidrasi", isi: "Minum air cukup dan gunakan pelembap rutin agar kulit tetap kenyal." },
      { ikon: "⏳", judul: "Mulai lebih awal", isi: "Perawatan anti aging paling efektif dimulai sebelum tanda penuaan terlihat jelas." }
    ]
  },

    /* ─────────────────── BARRIER & HYDRATION ─────────────────── */
  "barrier": {
    nama: "Barrier & Hydration",
    emoji: "💧",
    deskripsi: "Untuk kulit kering, dehidrasi & skin barrier (lapisan pelindung kulit) yang perlu diperkuat",
    tema: { utama: "#cf7d90", tua: "#a05468", muda: "#fdf0f2", border: "#f5d8dd", aksen: "#e6a4b1" },
    tiers: [
      {
        id: "starter", nama: "Starter", icon: "🌱", range: "± Rp150 ribuan", budgetMaks: 180000,
        judul: "Barrier Starter",
        catatan: "Langkah awal memperkuat skin barrier: bersihkan dengan lembut dan kunci kelembapan.",
        fotoPaket: "img/barrier/paket-starter.jpg",
        produk: [
          { nama: "Hydra Rose Face Wash", peran: "Cleanser — gel pH 5.5, membersihkan tanpa merusak barrier", harga: 41000, foto: "img/barrier/face-wash.jpg", ikon: "🧴" },
          { nama: "Pentavitin Moist", peran: "Moisturizer — Deep Water Restore Gel, hidrasi tahan lama", harga: 110000, foto: "img/barrier/moisturizer.jpg", ikon: "🫧" }
        ]
      },
      {
        id: "hydration", nama: "Hydration", icon: "✨", range: "± Rp350 ribuan", budgetMaks: 380000,
        judul: "Barrier Hydration",
        catatan: "Rangkaian hidrasi lebih lengkap — ditambah milky toner dan physical sunscreen untuk kulit sensitif-kering.",
        fotoPaket: "img/barrier/paket-hydration.jpg",
        produk: [
          { nama: "Hydra Rose Face Wash", peran: "Cleanser — gel pH 5.5, membersihkan tanpa merusak barrier", harga: 41000, foto: "img/barrier/face-wash.jpg", ikon: "🧴" },
          { nama: "Aquaporin Squalane Milky Toner", peran: "Toner — bounce & glow, hidrasi berlapis", harga: 124000, foto: "img/barrier/toner.jpg", ikon: "💧" },
          { nama: "Pentavitin Moist", peran: "Moisturizer — Deep Water Restore Gel, hidrasi tahan lama", harga: 110000, foto: "img/barrier/moisturizer.jpg", ikon: "🫧" },
          { nama: "Physical Sunscreen SPF 50+", peran: "Sunscreen — UV Shield physical, lembut untuk kulit sensitif", harga: 76000, foto: "img/barrier/sunscreen.jpg", ikon: "☀️" }
        ]
      },
      {
        id: "complete", nama: "Recovery", icon: "💎", range: "± Rp480 ribuan", budgetMaks: 520000,
        judul: "Barrier Recovery Complete",
        catatan: "Rangkaian terlengkap untuk memulihkan skin barrier — dengan Deep Barrier Repair Serum sebagai treatment utama.",
        fotoPaket: "img/barrier/paket-complete.jpg",
        produk: [
          { nama: "Hydra Rose Face Wash", peran: "Cleanser — gel pH 5.5, membersihkan tanpa merusak barrier", harga: 41000, foto: "img/barrier/face-wash.jpg", ikon: "🧴" },
          { nama: "Aquaporin Squalane Milky Toner", peran: "Toner — bounce & glow, hidrasi berlapis", harga: 124000, foto: "img/barrier/toner.jpg", ikon: "💧" },
          { nama: "Hydra Rose Deep Barrier Repair Serum", peran: "Serum — 14X Hyaluron + Pentavitin, memperbaiki barrier", harga: 133000, foto: "img/barrier/serum.jpg", ikon: "✨" },
          { nama: "Pentavitin Moist", peran: "Moisturizer — Deep Water Restore Gel, hidrasi tahan lama", harga: 110000, foto: "img/barrier/moisturizer.jpg", ikon: "🫧" },
          { nama: "Physical Sunscreen SPF 50+", peran: "Sunscreen — UV Shield physical, lembut untuk kulit sensitif", harga: 76000, foto: "img/barrier/sunscreen.jpg", ikon: "☀️" }
        ]
      }
    ],
    tips: [
      { ikon: "🧱", judul: "Apa itu skin barrier?", isi: "Lapisan pelindung terluar kulit yang mengunci kelembapan & menahan iritan. Kalau rusak: kulit perih, kering, dan gampang bermasalah." },
      { ikon: "🚿", judul: "Hindari air panas", isi: "Cuci muka dengan air suam-suam kuku — air panas melarutkan minyak alami pelindung kulit." },
      { ikon: "🧴", judul: "Kurangi eksfoliasi dulu", isi: "Saat barrier sedang rusak, hentikan scrub & exfoliating acid sampai kulit pulih." },
      { ikon: "💧", judul: "Layering hidrasi", isi: "Toner → serum → moisturizer saat kulit masih lembap, supaya air terkunci maksimal." }
    ]
  },


  /* ─────────────────────── DARK SPOT (sub-segmen Brightening) ─────────────────────── */
  "dark-spot": {
    nama: "Dark Spot Solution",
    emoji: "🤍",
    deskripsi: "Untuk menyamarkan dark spot (noda hitam) yang mulai terlihat",
    tema: { utama: "#6f7a84", tua: "#454e57", muda: "#f4f6f8", border: "#dde2e6", aksen: "#98a3ac" },
    tiers: [
      {
        id: "basic", nama: "Basic", icon: "🌱", range: "± Rp170 ribuan", budgetMaks: 200000,
        judul: "Dark Spot Basic",
        catatan: "Untuk yang baru mulai mengatasi kulit kusam & noda hitam ringan.",
        fotoPaket: "img/dark-spot/paket-basic.jpg",
        produk: [
          { nama: "Crystal Face Wash", peran: "Cleanser — membersihkan & membantu mencerahkan", harga: 41000, foto: "img/dark-spot/face-wash.jpg", ikon: "🧴" },
          { nama: "Crystal Day Cream 15gr", peran: "Day Cream — merawat & menyamarkan noda di siang hari", harga: 57000, foto: "img/dark-spot/day-cream-15.jpg", ikon: "🫧" },
          { nama: "Tone Up Sunscreen SPF 50", peran: "Sunscreen — proteksi UV + efek tone up seketika", harga: 77000, foto: "img/dark-spot/sunscreen-toneup.jpg", ikon: "☀️" }
        ]
      },
      {
        id: "treatment", nama: "Treatment", icon: "✨", range: "± Rp300 ribuan", budgetMaks: 320000,
        judul: "Dark Spot Treatment",
        catatan: "Untuk dark spot yang mulai terlihat — fokus menyamarkan noda dengan serum.",
        fotoPaket: "img/dark-spot/paket-treatment.jpg",
        produk: [
          { nama: "Crystal Face Wash", peran: "Cleanser — membersihkan & membantu mencerahkan", harga: 41000, foto: "img/dark-spot/face-wash.jpg", ikon: "🧴" },
          { nama: "Crystal Serum", peran: "Serum — menyamarkan dark spot & meratakan warna kulit", harga: 104000, foto: "img/dark-spot/serum.jpg", ikon: "✨" },
          { nama: "Crystal Day Cream 15gr", peran: "Day Cream — merawat & menyamarkan noda di siang hari", harga: 57000, foto: "img/dark-spot/day-cream-15.jpg", ikon: "🫧" },
          { nama: "Tone Up Sunscreen SPF 50", peran: "Sunscreen — proteksi UV + efek tone up seketika", harga: 77000, foto: "img/dark-spot/sunscreen-toneup.jpg", ikon: "☀️" }
        ]
      },
      {
        id: "complete", nama: "Complete", icon: "💎", range: "± Rp400 ribuan", budgetMaks: 480000,
        judul: "Dark Spot Complete",
        catatan: "Rutinitas pagi & malam dengan treatment lebih lengkap — day & night cream besar plus tinted sunscreen.",
        fotoPaket: "img/dark-spot/paket-complete.jpg",
        produk: [
          { nama: "Crystal Face Wash", peran: "Cleanser — membersihkan & membantu mencerahkan", harga: 41000, foto: "img/dark-spot/face-wash.jpg", ikon: "🧴" },
          { nama: "Crystal Serum", peran: "Serum — menyamarkan dark spot & meratakan warna kulit", harga: 104000, foto: "img/dark-spot/serum.jpg", ikon: "✨" },
          { nama: "Crystal Day Cream 30gr", peran: "Day Cream — perawatan siang, ukuran besar lebih hemat", harga: 111000, foto: "img/dark-spot/day-cream-30.jpg", ikon: "🫧" },
          { nama: "Crystal Night Cream 30gr", peran: "Night Cream — bekerja menyamarkan noda saat tidur", harga: 111000, foto: "img/dark-spot/night-cream-30.jpg", ikon: "🌙" },
          { nama: "Tinted Sunscreen", peran: "Sunscreen — proteksi UV dengan hasil akhir natural coverage", harga: 79000, foto: "img/dark-spot/sunscreen-tinted.jpg", ikon: "☀️" }
        ]
      }
    ],
    tips: [
      { ikon: "☀️", judul: "Sunscreen = kunci utama", isi: "Dark spot makin gelap jika terpapar UV tanpa proteksi. Re-apply tiap 3–4 jam." },
      { ikon: "🧤", judul: "Jangan digosok", isi: "Menggosok atau scrub berlebihan justru memicu hiperpigmentasi baru." },
      { ikon: "⏳", judul: "Butuh waktu", isi: "Menyamarkan dark spot butuh 8–12 minggu pemakaian konsisten — jangan menyerah di tengah jalan." },
      { ikon: "🌙", judul: "Maksimalkan malam hari", isi: "Gunakan night cream rutin — regenerasi sel kulit paling aktif saat tidur." }
    ]
  },

  /* ─────────────────────── BRIGHTENING ─────────────────────── */
  "brightening": {
    nama: "Brightening Solution",
    emoji: "🌸",
    deskripsi: "Untuk kulit kusam & warna kulit tidak merata",
    tema: { utama: "#5b8ec9", tua: "#37628f", muda: "#edf4fb", border: "#d3e3f4", aksen: "#7fa9d9" },
    tiers: [
      {
        id: "starter", nama: "Starter", icon: "🌱", range: "± Rp110 ribuan", budgetMaks: 150000,
        judul: "Brightening Starter",
        catatan: "Langkah awal mencerahkan kulit kusam — bersihkan, rawat, lindungi.",
        fotoPaket: "img/brightening/paket-starter.jpg",
        produk: [
          { nama: "Light+ Face Wash", peran: "Cleanser — membersihkan & membantu mencerahkan", harga: 38000, foto: "img/brightening/face-wash.jpg", ikon: "🧴" },
          { nama: "Light+ Day Cream 15gr", peran: "Day Cream — mencerahkan & melembapkan di siang hari", harga: 35000, foto: "img/brightening/day-cream-15.jpg", ikon: "🫧" },
          { nama: "Bright C Sunscreen SPF 35", peran: "Sunscreen — proteksi UV dengan vitamin C", harga: 39000, foto: "img/brightening/sunscreen-brightc.jpg", ikon: "☀️" }
        ]
      },
      {
        id: "care", nama: "Care", icon: "🌸", range: "± Rp210 ribuan", budgetMaks: 250000,
        judul: "Brightening Care",
        catatan: "Untuk kulit kusam & warna kulit tidak merata — rangkaian 5 langkah dengan serum.",
        fotoPaket: "img/brightening/paket-care.jpg",
        produk: [
          { nama: "Light+ Face Wash", peran: "Cleanser — membersihkan & membantu mencerahkan", harga: 38000, foto: "img/brightening/face-wash.jpg", ikon: "🧴" },
          { nama: "Light+ Toner", peran: "Toner — menyegarkan & menyiapkan kulit", harga: 34000, foto: "img/brightening/toner.jpg", ikon: "💧" },
          { nama: "Light+ Serum 43ml", peran: "Serum — mencerahkan & meratakan warna kulit", harga: 43000, foto: "img/brightening/serum-43.jpg", ikon: "✨" },
          { nama: "Light+ Day Cream 30gr", peran: "Day Cream — mencerahkan & melembapkan di siang hari", harga: 55000, foto: "img/brightening/day-cream-30.jpg", ikon: "🫧" },
          { nama: "Bright C Sunscreen SPF 35", peran: "Sunscreen — proteksi UV dengan vitamin C", harga: 39000, foto: "img/brightening/sunscreen-brightc.jpg", ikon: "☀️" }
        ]
      },
      {
        id: "complete", nama: "Complete", icon: "💎", range: "± Rp350 ribuan", budgetMaks: 400000,
        judul: "Brightening Complete",
        catatan: "Rangkaian terlengkap pagi & malam — serum ukuran besar, night cream, dan tone up sunscreen SPF 50.",
        fotoPaket: "img/brightening/paket-complete.jpg",
        produk: [
          { nama: "Light+ Face Wash", peran: "Cleanser — membersihkan & membantu mencerahkan", harga: 38000, foto: "img/brightening/face-wash.jpg", ikon: "🧴" },
          { nama: "Light+ Toner", peran: "Toner — menyegarkan & menyiapkan kulit", harga: 34000, foto: "img/brightening/toner.jpg", ikon: "💧" },
          { nama: "Light+ Serum 85ml", peran: "Serum — ukuran besar, mencerahkan & meratakan warna kulit", harga: 85000, foto: "img/brightening/serum-85.jpg", ikon: "✨" },
          { nama: "Light+ Day Cream 30gr", peran: "Day Cream — mencerahkan & melembapkan di siang hari", harga: 55000, foto: "img/brightening/day-cream-30.jpg", ikon: "🫧" },
          { nama: "Light+ Night Cream 30gr", peran: "Night Cream — mencerahkan kulit saat tidur", harga: 55000, foto: "img/brightening/night-cream-30.jpg", ikon: "🌙" },
          { nama: "Tone Up Sunscreen SPF 50", peran: "Sunscreen — proteksi maksimal + efek cerah seketika", harga: 77000, foto: "img/brightening/sunscreen-toneup.jpg", ikon: "☀️" }
        ]
      }
    ],
    tips: [
      { ikon: "🧼", judul: "Double cleansing malam hari", isi: "Sisa sunscreen & makeup yang menumpuk membuat kulit tampak kusam." },
      { ikon: "☀️", judul: "Jangan skip sunscreen", isi: "Kulit cerah tidak akan bertahan tanpa proteksi UV harian." },
      { ikon: "🍊", judul: "Bantu dari dalam", isi: "Konsumsi buah & sayur kaya vitamin C untuk mendukung kulit cerah alami." },
      { ikon: "⏳", judul: "Konsisten 4–8 minggu", isi: "Hasil mencerahkan terlihat bertahap — konsistensi lebih penting dari kecepatan." }
    ]
  }
};
