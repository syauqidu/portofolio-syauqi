# Homepage, slider proyek, dan Experience

## Cover dan slider

`cover` di frontmatter Markdown menentukan gambar kartu. Gambar memenuhi frame 16:9 menggunakan `object-fit: cover`, sehingga screenshot tinggi akan terpotong secara proporsional. Field `position` menerima `top`, `center`, atau `bottom` untuk memilih area potongan (default `top`).

`gallery` menentukan gambar pembuka halaman detail. Urutan item adalah urutan slide. Contoh:

```yaml
gallery:
  - src: ../../assets/projects/kai-website-redesign/cover.png
    alt: "Proposed KAI homepage with train illustration"
    caption: "Company profile website design proposal."
    position: top
  - src: ../../assets/projects/kai-website-redesign/news.png
    alt: "Proposed KAI news page"
    position: top
```

Slider memakai panah sebelumnya/berikutnya, tombol keyboard kiri/kanan, dan swipe/scroll horizontal. Tidak ada autoplay. Gambar memenuhi frame; klik untuk melihat gambar utuh melalui preview yang sudah ada. Rasio frame adalah 16:9 di desktop dan 4:3 di mobile. Untuk screenshot panjang, gunakan preview dan tautan full-size untuk membaca seluruh isinya.

Jika `gallery` kosong, cover digunakan sebagai satu gambar tanpa panah. Jika cover dan gallery kosong, area gambar tidak ditampilkan. Tanpa JavaScript, gambar tetap dapat dijelajahi dengan scroll horizontal. Gambar body Markdown dan evidence tetap independen dari gallery.

## Urutan Experience dan logo

Edit `src/data/experience.ts`. Urutan array mengikuti urutan terbaru ke terlama yang diberikan pemilik, bukan hasil pengurutan tanggal yang belum lengkap:

1. Aksara Ulu — external QA/mobile testing.
2. Yayasan Amanah Ummah — capstone QA.
3. Informatics Laboratory — teaching/practicum assistance.
4. KAI — UI/UX internship.
5. ASE Laboratory — QA, beriringan dengan internship KAI.

Proyek diberi label project agar tidak terkesan sebagai hubungan kerja langsung. Periode Aksara Ulu/YAU tidak diisi sebelum dikonfirmasi. Enam mata kuliah asisten praktikum disimpan dalam field `subjects`.

Letakkan logo resmi pada folder berikut dengan nama `logo.png` (boleh juga `logo.svg`, `logo.webp`, atau `logo.jpg`):

| Organisasi | Lokasi file |
| --- | --- |
| Universitas Bina Darma | `public/images/organizations/bina-darma/logo.png` |
| Yayasan Amanah Ummah | `public/images/organizations/yayasan-amanah-ummah/logo.png` |
| Informatics Laboratory | `public/images/organizations/informatics-laboratory/logo.png` |
| KAI | `public/images/organizations/kai/logo.png` |
| ASE Laboratory | `public/images/organizations/ase-laboratory/logo.png` |

Selama file belum tersedia, inisial netral mengisi tempat logo. Tidak ada tautan gambar rusak. Jika beberapa ekstensi tersedia, prioritasnya SVG, WebP, PNG, lalu JPG. Restart dev server atau build ulang setelah menambahkan logo.

## Gerak kereta

Kereta mulai bergerak ketika titik pertama mencapai 50% tinggi viewport. Sesudah itu, setiap piksel scroll memindahkan kereta satu piksel pada rel, sehingga posisinya tetap di tengah layar. Kereta mengikuti scroll maju/mundur hingga akhir konten entry terakhir; di luar batas rel kereta ikut keluar bersama section. Reduced motion menggunakan timeline statis.

## Section selebar layar

Section homepage sekarang memiliki pembungkus `.home-band` selebar layar, dengan `.shell` di dalam untuk batas lebar konten. Background dan divider menutup seluruh lebar. Untuk menambah media selebar layar, tempatkan di dalam section tetapi di luar `.shell`; hindari `100vw` yang bisa menambah overflow akibat scrollbar.

Tombol Back to top memakai `position: fixed` di kanan bawah pada semua halaman. Anchor tetap berfungsi tanpa JavaScript dan mengikuti preferensi reduced motion.
