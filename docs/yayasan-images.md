# Mengatur gambar Yayasan Amanah Ummah

File gambar sudah berada di `src/assets/projects/yayasan-amanah-ummah/`.
Semua penempatan konten diatur melalui `src/content/projects/yayasan-amanah-ummah.md`.

Gambar pada halaman case study otomatis dapat diklik untuk preview, termasuk gambar baru yang ditulis di Markdown. Gunakan Tab lalu Enter/Space untuk membukanya melalui keyboard; tutup dengan tombol Close, Escape, atau klik area luar. Tautan Open full-size image membuka gambar besar di tab baru untuk membaca detail. Kartu di daftar Projects tetap mengarah ke halaman case study.

## Posisi yang sudah dipasang

| File | Posisi |
| --- | --- |
| `cover.png` | Kartu proyek melalui `cover`; slider pembuka melalui `gallery` |
| `cover2.png`, `app2.png` | Setelah Overview, berdampingan di desktop dan bertumpuk di mobile |
| `testplan.png` | Setelah alur My responsibilities |
| `nfrtest.png` | Setelah Test environment & execution; caption membedakan requirement dari hasil pengukuran |
| `bugreport.png` | Setelah Defect management |
| `katalon.png` | Setelah Automation with Katalon Studio |

## Mengganti cover

Edit `cover.src` di antara pasangan `---` paling atas Markdown:

```yaml
cover:
  src: ../../assets/projects/yayasan-amanah-ummah/cover.png
  alt: "Donasi YAU home screen with donation categories and program listings"
```

Sesuaikan nama/ekstensi file dan alt dengan gambar aslinya. Cover ditampilkan utuh dan terpusat dalam kartu 16:9 menggunakan object-fit: contain, tanpa crop. Slider pembuka diatur lewat `gallery`, terpisah dari cover kartu. Klik gambar slider untuk preview utuh. Lihat `docs/homepage-and-gallery.md` untuk contoh.

## Memindahkan atau menambahkan gambar di tengah artikel

Gunakan sintaks Markdown berikut di bawah heading/paragraf yang diinginkan:

```md
![Test plan showing scope and schedule](../../assets/projects/yayasan-amanah-ummah/testplan.png)

*An excerpt from the test plan.*
```

Bagian `[...]` adalah alt text; `(...)` adalah lokasi file. Baris berawalan dan berakhiran `*` adalah caption. Pindahkan gambar dan caption bersama-sama untuk mengubah posisinya. Sisakan baris kosong sebelum dan sesudah gambar. Urutan di Markdown sama dengan urutan tampil di halaman.

## Dua gambar berdampingan

```md
<div class="case-image-grid">

![Donation program detail](../../assets/projects/yayasan-amanah-ummah/cover2.png)

![Donation history](../../assets/projects/yayasan-amanah-ummah/app2.png)

</div>

*Application screens showing the system under test.*
```

Pertahankan baris kosong di dalam div agar Markdown gambar diproses. Tukar urutan kedua baris gambar untuk menukar posisi kiri/kanan. Hapus pembungkus div (pertahankan baris gambar) jika ingin susunan vertikal pada semua ukuran layar. Grid otomatis menjadi satu kolom di mobile. Lebar kolom, jarak, dan batas tinggi gambar diatur pada `.case-image-grid` dan `.prose p > img` di `src/styles/global.css`.

Untuk menghapus gambar dari halaman, hapus baris Markdown-nya; file gambar boleh tetap disimpan. Metadata `evidence` masih tersedia untuk galeri di akhir artikel, tetapi tidak digunakan di proyek ini agar posisi tiap gambar bisa ditentukan langsung melalui body Markdown.

## File yang belum ditampilkan

`testcase.png`, `app.png`, `app3.png`, dan `katalon1.png` memperlihatkan nama, nomor telepon, atau email pada data pengujian/aplikasi. `katalon2.png` memperlihatkan identitas komputer dan alamat jaringan lokal. File asli tidak diubah dan belum dirujuk oleh halaman. Siapkan salinan yang sudah disamarkan sebelum memasangnya; jangan menganggap data tersebut dummy tanpa konfirmasi.

Jalankan `npm.cmd run check`, `npm.cmd run build`, dan `npm.cmd run verify` setelah mengubah gambar. Preview halaman pada `/projects/yayasan-amanah-ummah/`.
