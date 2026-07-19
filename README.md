# Smart Glow Budget — Web

## Segmen (4 di wheel)
1. 🌿 Acne              → /acne
2. 💧 Barrier & Hydration → /barrier
3. 🌟 Anti Aging         → /anti-aging
4. 🌸 Brightening        → /brightening
   └─ berisi 2 pilihan (popup saat dibuka):
      ✨ Mencerahkan (Light+)  &  💜 Flek Hitam (Crystal)

## File
- index.html   → landing (wheel interaktif)
- acne.html, barrier.html, anti-aging.html, brightening.html
- data.js      → SEMUA harga/produk/promo diatur DI SINI SAJA
- style.css, app.js → tampilan & mesin render (jarang perlu diubah)
- vercel.json  → URL bersih (/acne, bukan /acne.html)

## Ubah diskon
data.js → PROMO_DISKON (0.10 = 10%)

## FOLDER FOTO — simpan sesuai daftar ini (persis, huruf kecil, .jpg)

img/acne/          ← paket Acnederm
  face-wash.jpg, toner.jpg, serum.jpg, moisturizer.jpg,
  sunscreen-spf35.jpg, sunscreen-spf50.jpg,
  paket-starter.jpg, paket-essential.jpg, paket-complete.jpg

img/barrier/       ← paket Hydra Rose  ✅ 5 foto produk SUDAH TERPASANG
  face-wash.jpg ✓, toner.jpg ✓, serum.jpg ✓, moisturizer.jpg ✓, sunscreen.jpg ✓
  paket-starter.jpg, paket-hydration.jpg, paket-complete.jpg   (belum)

img/anti-aging/    ← paket Renew You
  face-wash.jpg, serum.jpg, day-cream-15.jpg, day-cream-30.jpg,
  night-cream-30.jpg, sunscreen.jpg,
  paket-basic.jpg, paket-treatment.jpg, paket-complete.jpg

img/brightening/   ← paket Light+ (pilihan "Mencerahkan")
  face-wash.jpg, toner.jpg, serum-43.jpg, serum-85.jpg,
  day-cream-15.jpg, day-cream-30.jpg, night-cream-30.jpg,
  sunscreen-brightc.jpg, sunscreen-toneup.jpg,
  paket-starter.jpg, paket-care.jpg, paket-complete.jpg

img/flek-hitam/    ← paket Crystal (pilihan "Flek Hitam")
  face-wash.jpg, serum.jpg, day-cream-15.jpg, day-cream-30.jpg,
  night-cream-30.jpg, sunscreen-toneup.jpg, sunscreen-tinted.jpg,
  paket-basic.jpg, paket-treatment.jpg, paket-complete.jpg

Foto belum ada? Web tetap jalan — thumbnail otomatis tampil ikon emoji.
Saran foto: persegi (1:1), minimal 600×600px. Kirim ke Claude untuk
di-HD-kan & dinamai otomatis.
