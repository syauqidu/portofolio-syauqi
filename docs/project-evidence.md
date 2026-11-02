# Panduan melengkapi case study

Semua proyek berikut sudah memiliki konten untuk dipublikasikan tanpa gambar. Daftar ini merupakan panduan internal untuk pengayaan konten berikutnya, bukan section kosong pada website.

## Konten dan urutan publikasi

| File di `src/content/projects/` | Route | Homepage |
| --- | --- | --- |
| `yayasan-amanah-ummah.md` | `/projects/yayasan-amanah-ummah/` | Ya, urutan 1 |
| `aksara-ulu-kaganga.md` | `/projects/aksara-ulu-kaganga/` | Ya, urutan 2 |
| `kai-website-redesign.md` | `/projects/kai-website-redesign/` | Ya, urutan 3 |
| `starbucks-mobile-redesign.md` | `/projects/starbucks-mobile-redesign/` | Ya, urutan 4 |
| `pc-builder-uiux.md` | `/projects/pc-builder-uiux/` | Tidak; tersedia di Projects |
| `bizgrow.md` | `/projects/bizgrow/` | Tidak; tersedia di Projects |

Homepage menampilkan maksimal empat proyek dengan `featured: true`, mengikuti `order`. Halaman Projects dan route detail menggunakan semua entry dengan `published: true`. Entry KAI memakai nama file sebelumnya agar tidak menduplikasi proyek. Schema dan dynamic route yang ada tidak perlu diubah untuk menambahkan proyek berikutnya.

## Informasi dan artefak yang dapat ditambahkan

Gambar KAI dan Aksara Ulu sudah dipasang; lihat `docs/kai-aksara-images.md` untuk posisi dan cara menggantinya. Daftar di bawah adalah panduan pengayaan lanjutan.

| Proyek | Informasi lanjutan | Dokumentasi asli yang dapat disiapkan |
| --- | --- | --- |
| Aksara Ulu (Kaganga) | Periode; contoh requirement dan cakupan mobile; perangkat/environment bila ingin dibahas; skenario automation yang didemonstrasikan | Requirement mapping, test plan, test case, screenshot Katalon, test execution, bug report, test report |
| KAI | Penjelasan keputusan desain lanjutan dan rekaman interaksi; narasi terkini sudah memuat riset yang disediakan KAI, task usability testing, hasil SEQ, dan tautan prototype | Rekaman konsep train scrolling dan dokumentasi evaluasi tambahan yang boleh dibagikan |
| PC Builder | Periode; pembagian kontribusi individu; tool desain yang digunakan; metode dan temuan evaluasi; tautan prototype publik | Empathy map, user journey, HMW, user flow, wireframe, final UI, interactive prototype |
| Starbucks | Pembagian kontribusi individu; tool yang digunakan; temuan riset dan keputusan desain lebih spesifik; tautan desain publik | Analisis aplikasi awal, redesign screens, ordering flow, chatbot concept, desain informasi gula, dokumentasi pencapaian kompetisi |
| Yayasan Amanah Ummah | Periode jika sudah dipastikan; contoh pengujian yang dapat dibagikan | Test case, test execution, bug report, Katalon test suite, laporan pengujian |
| BizGrow | Periode; ukuran tim dan pembagian modul backend; status implementasi setiap fitur; detail forecasting jika terverifikasi; metode, tools, dan hasil pengujian; nama/tanggal pameran; tautan repository publik bila tersedia | Screenshot aplikasi, arsitektur sistem, ERD, SRS/SDD, dokumentasi API, demonstrasi fitur, bukti pengujian, dokumentasi pameran |

Detail yang belum tersedia tidak menghalangi publikasi narasi saat ini. Tambahkan angka atau hasil evaluasi hanya jika ada data pendukung. Untuk PC Builder dan Starbucks, lengkapi pembagian tugas sebelum memperinci klaim kontribusi pribadi.

Untuk BizGrow, bedakan fitur yang selesai, masih dikembangkan, dan baru dibahas sebagai konsep sebelum menambahkan detail implementasi. Status `published: true` mempublikasikan case study di portfolio, bukan menyatakan aplikasi BizGrow telah selesai atau di-deploy. Dokumentasi saat ini menjelaskan bahwa aplikasi belum selesai dan tidak di-deploy secara publik.

## Menambahkan gambar ke Markdown

1. Siapkan file asli yang boleh dipublikasikan. Hilangkan data pribadi, credential, URL privat, dan informasi internal yang tidak boleh dibagikan.
2. Simpan di folder proyek yang sudah disiapkan, misalnya `src/assets/projects/aksara-ulu-kaganga/`. Setiap folder memiliki `.gitkeep` agar folder kosong tetap tersimpan di Git.
3. Aktifkan contoh `cover` untuk gambar kartu atau `evidence` untuk galeri pada frontmatter Markdown dengan menghapus awalan `#` di blok yang dipakai. Path relatif terhadap file Markdown. Sesuaikan nama file dan ekstensi dengan gambar yang ditambahkan.
4. Tulis alt text dan caption dalam Bahasa Inggris yang menjelaskan isi gambar secara spesifik.

Contoh berikut hanya ditambahkan setelah file yang dirujuk benar-benar tersedia:

```yaml
cover:
  src: ../../assets/projects/aksara-ulu-kaganga/mobile-test-case.png
  alt: "Requirement-based mobile test case for the Aksara Ulu application"
evidence:
  - src: ../../assets/projects/aksara-ulu-kaganga/katalon-demo.png
    alt: "Katalon Studio mobile automation example prepared for the client demonstration"
    caption: "An example from the mobile automation exploration presented to Universitas Bina Darma."
```

`EvidenceGallery` yang sudah ada menggunakan Astro Image untuk gambar responsif dengan dimensi intrinsik. Galeri tidak ditampilkan jika `evidence` kosong. Jika belum ada gambar, hilangkan field `cover` dan `evidence`; jangan isi dengan path sementara.

Untuk tautan prototype publik, gunakan field `links` dengan `label` dan `url` HTTPS yang benar-benar dapat diakses. Jangan gunakan URL rekaan atau environment privat.

Setelah memperbarui konten, jalankan `npm run check`, `npm run build`, lalu `npm run verify`. Di PowerShell yang memblokir `npm.ps1`, gunakan `npm.cmd`.
