# Portfolio — Syauqi Dhiya Ulhaq

Portfolio statis dengan Astro, TypeScript strict, dan Tailwind CSS 4 melalui plugin Vite resmi. Konten publik menggunakan Bahasa Inggris. Tidak memakai framework UI, backend, database, atau font eksternal.

## Menjalankan

Gunakan Node.js >=22.12.0 dan npm. Di Windows PowerShell yang memblokir `npm.ps1`, gunakan `npm.cmd` menggantikan `npm`.

```sh
npm ci
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

Buka URL lokal yang dicetak Astro, biasanya http://localhost:4321. Versi Astro dalam lockfile mendukung background mode.

```sh
npm run check
npm run build
npm run verify
npm run test:timeline
```

`check` memeriksa tipe komponen dan TypeScript. `build` menghasilkan situs di `dist/`. `verify` memeriksa hasil build: satu H1 per halaman, metadata, bahasa, tautan/aset lokal, fragment anchor, serta kebocoran draft. Jalankan build sebelum verify. `test:timeline` menguji perhitungan progress (batas, scroll mundur, posisi dipulihkan, perubahan ukuran, dan geometri nol); ini bukan pengganti pengujian browser. Untuk preview hasil produksi: `npm run preview`.

## Struktur

```text
src/
  content.config.ts                  Schema Content Collections
  content/projects/
    yayasan-amanah-ummah.md           Case study QA yang dipublikasikan
    kai-website-redesign.md           Draft; tidak mendapat route publik
  lib/projects.ts                    Query publik, urutan, kategori, URL
  lib/profile.ts                     Deteksi foto dan CV opsional saat build
  data/profile.ts                    Sumber URL CV, foto, email, LinkedIn, GitHub
  lib/scroll-progress.ts              Perhitungan progress yang dibatasi 0–1
  components/
    Header.astro / Footer.astro
    HomeLink.astro / DownloadCVButton.astro
    ExperienceTimeline.astro           Timeline dengan progressive enhancement
    Expertise.astro / SocialLinks.astro / Icon.astro
    SectionHeading.astro / Arrow.astro
    EvidenceGallery.astro            Hanya dirender bila ada bukti asli
    projects/
      ProjectCard.astro / ProjectGrid.astro / ProjectTags.astro
      CaseStudyHero.astro
  layouts/
    BaseLayout.astro                  HTML, SEO, navigasi, footer
    CaseStudyLayout.astro             Hero, daftar isi, body Markdown
  pages/
    index.astro                      Homepage
    projects/index.astro             Daftar dan filter kategori
    projects/[id].astro               Satu template route statis
    404.astro
  styles/global.css                  Token, komponen, breakpoint, reduced motion
public/
  favicon.svg                        Monogram portfolio
  social-card.svg / social-card.png   Gambar berbagi berbasis tipografi
scripts/
  verify-build.mjs                    Pemeriksaan hasil build
  generate-social-card.mjs            Render SVG tipografi menjadi PNG
```

## Menambahkan proyek

1. Salin `docs/project-template.md` ke `src/content/projects/nama-proyek.md`. Gunakan nama file kebab-case; nama ini menjadi `/projects/nama-proyek/`.
2. Isi `title`, `summary`, `category` (`qa`, `uiux`, `development`), `role`, dan `published`. Gunakan `published: false` selama konten belum layak dipublikasikan.
3. Tulis body Markdown sesuai kebutuhan proyek. Heading level dua otomatis muncul dalam daftar isi. Heading body dimulai dari `##` karena judul halaman sudah menjadi H1.
4. Metadata opsional: `projectType`, `period`, `tags`, `featured`, `order`, `cover`, `links`, dan `evidence`. Tidak perlu mengisi section atau nilai kosong. `order` yang lebih kecil tampil lebih dahulu.
5. Ubah `published: true` setelah fakta, kontribusi, dan artefaknya dikonfirmasi. Gunakan `featured: true` untuk menampilkannya di homepage (maksimal empat, mengikuti `order`). Kartu dan halaman detail mengambil konten dari file yang sama.
6. Jalankan check, build, dan verify.

Template dokumentasi berada di luar Content Collections, sehingga placeholder dalam template tidak pernah masuk situs. Draft KAI hanya memuat informasi yang sudah diberikan pemilik. Proyek Aksara Ulu, BizGrow, dan Starbucks belum dibuat karena data kontribusinya belum tersedia.

### Gambar dan tautan opsional

Simpan gambar asli yang sudah disanitasi, misalnya di `src/assets/projects/nama-proyek/`, lalu gunakan path relatif terhadap Markdown:

```yaml
cover:
  src: ../../assets/projects/nama-proyek/overview.png
  alt: A specific description of the real project evidence
links:
  - label: View repository
    url: https://github.com/owner/repository
evidence:
  - src: ../../assets/projects/nama-proyek/test-suite.png
    alt: A specific description of the visible test suite
    caption: Context for this approved project artifact.
```

Contoh tersebut hanya menunjukkan format. Tambahkan metadata setelah file atau URL sebenarnya tersedia. Gambar divalidasi dan diproses oleh Astro Image. Galeri tidak dirender jika `evidence` kosong. Jangan unggah data donatur, kredensial, URL privat, atau screenshot sensitif.

## Desain dan aksesibilitas

- Light theme: Cold White `#F5F8FC` sebagai background utama, Navy `#0B1730` untuk teks dan tombol, Ice Blue `#A9D6F5` sebagai aksen. Contact menggunakan Navy secara terbatas.
- Token semantik di `src/styles/global.css` mengatur background, teks, divider, dan focus. Teks sekunder menggunakan slate gelap `#53647B` agar kontras tetap memadai; Ice Blue tidak digunakan untuk teks kecil pada background terang.
- Hero menonjolkan nama, identitas, foto/monogram, serta maksimal dua CTA. Section berurutan: Hero, About, Selected Projects, Experience, Expertise & Tools, Education & Achievements, Contact.
- Navbar sticky menggunakan Home icon. Tinggi aktual navbar disinkronkan ke `--header-height`; anchor dan daftar isi case study menghindari area navbar. Menu mobile menggunakan button dengan `aria-expanded`, mendukung Escape, menutup setelah navigasi, dan tetap menyediakan link biasa jika JavaScript dimatikan.
- Skip link, focus ring, semantic landmarks, target tombol minimal 44px, dan reduced motion tersedia.
- Kartu memiliki satu link utama yang mencakup area kartu. Daftar isi memakai anchor asli.
- Filter memakai button dengan `aria-pressed` dan status `aria-live`. Filter baru ditampilkan setelah JavaScript siap; semua proyek publik tetap terbaca tanpa JavaScript.
- Tidak ada screenshot proyek buatan atau angka hasil yang tidak terverifikasi.

## SEO dan domain

Title, description, Open Graph, dan Twitter metadata tersedia. Gambar fallback adalah tipografi identitas portfolio, bukan dokumentasi proyek. Edit SVG lalu jalankan `npm run social-card` untuk memperbarui PNG.

Domain belum diberikan, sehingga canonical dan URL Open Graph absolut tidak dikarang. Sebelum build untuk deployment, set `SITE_URL` ke origin HTTPS final melalui environment build; `astro.config.mjs` membacanya sebagai `site`. Setelah domain diisi, canonical, `og:url`, dan gambar Open Graph absolut otomatis aktif. Tidak perlu secret untuk situs ini.

Tidak ada push atau deployment otomatis.

## Menambahkan foto pribadi dan CV

1. Buat folder `public/images/` jika belum ada, lalu tambahkan foto asli sebagai `public/images/profile.jpg`. Gunakan foto portrait yang telah dikompresi; rasio 4:5, misalnya 640 × 800 piksel, cocok dengan bingkai. Posisi crop dapat diatur lewat `.portrait img` di CSS.
2. Buat folder `public/documents/`, lalu tambahkan CV PDF publik sebagai `public/documents/syauqi-dhiya-ulhaq-cv.pdf`.
3. Jalankan ulang `npm run build` (atau restart dev server) setelah menambah/mengganti file. Helper `src/lib/profile.ts` memeriksa keberadaan file pada saat rendering/build, bukan melalui permintaan dari browser.

Tanpa foto, hero menampilkan monogram netral SDU dan tidak membuat elemen gambar yang rusak. Tanpa CV, tombol Download CV tidak dirender. Ketika PDF tersedia, tombol unduh muncul otomatis di navbar dan Hero melalui `DownloadCVButton.astro`. Tidak ada tautan dummy atau foto buatan. Path publiknya adalah `/images/profile.jpg` dan `/documents/syauqi-dhiya-ulhaq-cv.pdf`.

URL aset didefinisikan satu kali di `src/data/profile.ts`. Jika nama file CV berubah, cukup ubah `cvPath` di sana dan rebuild. File di `public/` bersifat publik, jadi gunakan versi CV yang memang siap dibagikan.

## Kontak dan branding navbar

Email, LinkedIn, dan GitHub dikelola melalui `src/data/profile.ts`. GitHub telah dikonfirmasi pemilik sebagai `https://github.com/syauqidu`. Ubah field `github` untuk menggantinya, atau isi string kosong untuk menyembunyikannya. Tidak ada URL yang diturunkan dari remote Git.

Untuk mengganti Home icon dengan logo pribadi, edit isi link di `src/components/HomeLink.astro`. Pertahankan `href="/"` serta label aksesibel, lalu gunakan aset logo asli dengan ukuran yang sesuai. Tidak perlu mengubah layout navbar.

## Experience timeline

`ExperienceTimeline.astro` menggunakan custom element native, `IntersectionObserver`, `ResizeObserver`, dan `requestAnimationFrame`. Tidak menggunakan GSAP atau scroll hijacking.

- Progress dimulai saat section memasuki viewport dan berakhir ketika titik pengalaman terakhir mencapai area baca di bawah navbar.
- Indikator kereta dan garis terisi memakai angka progress dan geometri yang sama. Posisi dihitung dari scroll aktual, termasuk saat halaman dibuka di tengah atau scroll dipulihkan.
- Scroll ke atas membalik progress. Nilai dibatasi 0–1; tidak ada animasi yang berjalan sendiri.
- Listener scroll hanya aktif ketika section terlihat dan reduced motion tidak aktif. Pembaruan dibatasi satu kali per frame. Ukuran section/header dan perubahan viewport memicu pengukuran ulang.
- Semua teks selalu terlihat. Highlight tidak dipakai untuk menyembunyikan informasi. Reduced motion menampilkan timeline statis tanpa indikator bergerak. Jika API tidak tersedia, tampilan statis tetap berfungsi.
- Custom element membersihkan observer, listener, dan frame saat dilepas dari DOM. Kegagalan update mengembalikan tampilan statis.
- Entri bertanggal diurutkan menurut tanggal mulai (periode dapat tumpang tindih). Advanced Software Engineering Laboratory ditandai sebagai pengalaman tambahan karena tanggalnya belum dikonfirmasi.

## Ikon dan dependency

Tambahan dependency hanya `@iconify-json/lucide` untuk ikon antarmuka/konsep dan `@iconify-json/devicon` untuk logo teknologi/platform. `Icon.astro` merender SVG pada waktu build; koleksi JSON tidak dikirim sebagai runtime browser. Logo Katalon disimpan lokal sebagai SVG terpisah. Tidak ada permintaan ke CDN ikon atau library animasi.

Sumber dan lisensi dicatat di `docs/icon-sources.md`. Ikon di samping teks disembunyikan dari pembaca layar agar tidak mengulang label. Link ikon Home memiliki accessible label sendiri.

Pemeriksaan browser yang disarankan: scroll dua arah pada Experience, buka langsung `/#experience`, uji reduced motion, matikan JavaScript, buka/tutup menu dengan keyboard, dan periksa overflow pada lebar 320, 768, dan 1440 piksel. Uji kedua tombol CV setelah PDF asli tersedia.

## Data yang masih diperlukan

- Foto pribadi asli dan CV PDF yang siap dipublikasikan.
- Domain publik final.
- Screenshot/artefak YAU yang aman dipublikasikan dan tautan publik yang benar-benar tersedia.
- Untuk setiap proyek berikutnya: konteks, peran pribadi, proses, tools yang benar-benar digunakan, tantangan, hasil terverifikasi, dan bukti yang mendapat izin publikasi.
- Tanggal pengalaman Advanced Software Engineering Laboratory bila ingin ditampilkan.

## Referensi implementasi

- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Astro Routing](https://docs.astro.build/en/guides/routing/)
- [Astro Components](https://docs.astro.build/en/basics/astro-components/)
- [Tailwind dalam Astro](https://docs.astro.build/en/guides/styling/#tailwind)
