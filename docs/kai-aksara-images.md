# Penempatan gambar KAI dan Aksara Ulu

Gambar diatur langsung melalui Markdown masing-masing proyek. `cover` pada frontmatter tampil di kartu dan bagian atas case study. Gambar dalam body dapat dipindahkan bersama caption-nya. Preview klik dan keyboard mengikuti komponen ImagePreview yang sudah tersedia.

## KAI

File konten: `src/content/projects/kai-website-redesign.md`.
Folder gambar: `src/assets/projects/kai-website-redesign/`.

| File | Posisi |
| --- | --- |
| `cover.png` | Cover kartu dan halaman detail |
| `persona3.png`, `persona2.png`, `persona1.png` | Empathize, mengikuti urutan perspektif pengguna dalam tabel |
| `requirement-web.webp` | Define |
| `userflow-web.webp` | Ideate |
| `wireframe.png` | Awal Prototype |
| `color.png`, `typo.png` | Referensi visual pada Prototype, dua kolom |
| `porototype.png` | Overview layar Figma; nama file asli dipertahankan |
| `landingpage.png` | Desain homepage lengkap |
| `sejarah.png`, `news.png` | Halaman detail, dua kolom |

`userflow-web.webp` dan `requirement-web.webp` merupakan salinan ukuran web dari PNG asli, tanpa mengubah isi diagram. Lebarnya masing-masing 2400 dan 3200 px. PNG asli tetap tersimpan. Jika diagram asli diganti, salinan web perlu diperbarui juga. Salinan ini mencegah pemrosesan diagram dengan dimensi berlebihan untuk website.

Narasi KAI yang telah diperbarui pemilik, termasuk sumber riset dan tabel evaluasi, tetap digunakan. Tidak ada screenshot hasil SEQ baru; tabel HTML yang sudah ada tetap menjadi penyajian hasil evaluasi.

## Aksara Ulu

File konten: `src/content/projects/aksara-ulu-kaganga.md`.
Folder gambar: `src/assets/projects/aksara-ulu-kaganga/`.

| File | Posisi |
| --- | --- |
| `cover.jpg` | Cover kartu dan halaman detail |
| `app.jpg`, `app2.jpg` | Overview, pemrosesan dan hasil prediksi |
| `testplan.png` | Requirement analysis and planning |
| `testcase.png` | Requirement-based test design |
| `app3.jpg` | Mobile environment and execution |
| `testreport.png`, `bugreport.png` | Reporting and closure |

Caption menjelaskan bahwa angka confidence pada aplikasi bukan akurasi keseluruhan. Bug report menampilkan entri web milik konteks tim, sehingga tidak diklaim sebagai temuan mobile pribadi. Test plan juga menunjukkan lingkup tim, bukan seluruhnya tanggung jawab individu.

## Mengatur posisi

Contoh gambar tunggal:

```md
![Mobile transliteration test cases](../../assets/projects/aksara-ulu-kaganga/testcase.png)

*Requirement-based mobile test cases.*
```

Pindahkan kedua baris itu ke bawah heading/paragraf yang diinginkan. Untuk mengubah pasangan gambar, pindahkan seluruh blok `<div class="case-image-grid">` sampai `</div>`. Tukar urutan gambar untuk menukar posisi kiri/kanan. Sisakan baris kosong di sekitar sintaks Markdown gambar. Grid otomatis menjadi satu kolom pada layar mobile.

Jalankan `npm.cmd run check`, `npm.cmd run build`, dan `npm.cmd run verify` setelah perubahan.
