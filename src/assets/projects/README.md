# Folder gambar proyek

Setiap proyek memiliki folder sesuai nama file Markdown di `src/content/projects/`.

- `yayasan-amanah-ummah/`
- `aksara-ulu-kaganga/`
- `kai-website-redesign/`
- `pc-builder-uiux/`
- `starbucks-mobile-redesign/`
- `bizgrow/`

File `.gitkeep` mempertahankan folder kosong di Git; boleh dibiarkan saat gambar ditambahkan.

## Gambar kartu proyek

1. Simpan gambar asli di folder proyek, misalnya `bizgrow/cover.webp`.
2. Buka Markdown proyek tersebut dan hapus awalan `#` pada tiga baris `cover`, `src`, dan `alt` yang sudah disiapkan pada frontmatter.
3. Sesuaikan `alt` dengan isi gambar dalam Bahasa Inggris. Pertahankan indentasi dua spasi.

`cover` ditampilkan di kartu Projects/homepage. Rasio 16:9 cocok untuk kartu; kartu memotong gambar mengikuti rasio tersebut. Format JPG, PNG, atau WebP boleh dipakai; samakan nama file dan ekstensi pada `src`. Atur `position: top`, `center`, atau `bottom` untuk memilih area potongan.

Slider pembuka case study memakai field `gallery`. Jika tidak diisi, cover menjadi satu gambar pembuka. Lihat `docs/homepage-and-gallery.md` untuk contoh menambah slide dan lokasi logo Experience.

## Dokumentasi di halaman detail

Simpan misalnya `bizgrow/evidence-01.webp`, lalu aktifkan blok `evidence` di Markdown. Sesuaikan alt dan caption dengan gambar asli. Tambahkan item untuk setiap gambar berikutnya. Jika hanya memiliki cover, biarkan blok evidence tetap menjadi komentar.

Gambar tidak tampil hanya dengan menyalin file: aktifkan metadata yang sesuai agar judul/deskripsi gambar dapat ditulis secara akurat. Jangan aktifkan path sebelum file tersedia.

## Foto Hero

Foto pribadi disimpan terpisah di `public/images/profile.jpg`. Foto akan menggantikan monogram Hero tanpa mengubah komponen. Gunakan rasio 4:5, misalnya 640 × 800 px. Jika memakai nama/ekstensi lain, ubah `portraitPath` di `src/data/profile.ts`.

Refresh halaman setelah menambahkan gambar; restart dev server jika foto Hero belum terdeteksi. Jalankan ulang build untuk memperbarui hasil website statis.

Panduan artefak per proyek tersedia di `docs/project-evidence.md`.
