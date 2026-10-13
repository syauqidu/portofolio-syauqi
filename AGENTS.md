
# AGENTS.md — Portfolio Syauqi Dhiya Ulhaq

## 1. Identitas dan Tujuan Proyek

Project ini adalah website portfolio pribadi Syauqi Dhiya Ulhaq, berlatar belakang pendidikan Software Engineering di Telkom University (2022–2026).

Portfolio memiliki fokus profesional pada:
- Software Quality Assurance (QA).
- UI/UX Design.
- Software Development.

Tujuan website:
- Memperkenalkan identitas profesional secara singkat.
- Menampilkan pengalaman kerja dan pendidikan.
- Menampilkan proyek yang pernah dikerjakan.
- Menjelaskan kemampuan teknis dan bidang keahlian.
- Menampilkan case study setiap proyek secara profesional.
- Menyediakan akses untuk melihat atau mengunduh CV.
- Memudahkan penambahan proyek tanpa mengubah banyak komponen.

Website harus mencerminkan karakter profesional seorang Software Engineer dengan perhatian terhadap software quality dan user experience.

Instruksi dalam file ini berlaku untuk seluruh pekerjaan Codex pada repository.

## 2. Bahasa dan Komunikasi

- Gunakan Bahasa Indonesia dalam percakapan dengan pemilik project.
- Gunakan Bahasa Indonesia untuk penjelasan teknis, rencana implementasi, dan ringkasan perubahan.
- Gunakan Bahasa Inggris untuk seluruh konten website yang ditampilkan kepada pengunjung.
- Gunakan Bahasa Inggris untuk metadata SEO.
- Gunakan penamaan file, variabel, fungsi, dan komponen dalam Bahasa Inggris.
- Pertahankan nama resmi proyek, institusi, dan produk.

Gunakan bahasa website yang profesional, natural, ringkas, dan mudah dipahami.

Hindari:
- Kalimat terlalu panjang.
- Klaim berlebihan.
- Penggunaan buzzword tanpa konteks.
- Informasi fiktif.
- Deskripsi yang terlalu generik.

Jika data belum tersedia, jangan mengarang untuk mengisi kekosongan.

## 3. Teknologi Utama

Gunakan teknologi berikut:

- Astro.
- TypeScript.
- Tailwind CSS.
- Semantic HTML.
- CSS variables untuk design tokens.
- Astro Components.
- Astro Content Collections.
- JavaScript hanya jika diperlukan.

Prioritaskan Static Site Generation (SSG).

Jangan menggunakan React, Vue, Svelte, atau framework frontend lain kecuali diminta secara khusus.

Jangan menambahkan UI library atau animation library yang berat tanpa alasan teknis yang jelas.

Gunakan versi dependency yang kompatibel dengan versi Astro pada repository.

Periksa dokumentasi resmi sebelum menggunakan API atau fitur Astro yang bergantung pada versi.

## 4. Aturan TypeScript

- Gunakan TypeScript secara konsisten.
- Aktifkan strict mode jika sesuai dengan konfigurasi project.
- Gunakan tipe data yang jelas.
- Hindari penggunaan `any` kecuali benar-benar diperlukan.
- Hindari type assertion yang tidak perlu.
- Jangan membuat tipe data terlalu kompleks untuk kebutuhan sederhana.
- Prioritaskan kode yang mudah dibaca dan dipelajari.
- Gunakan schema validation untuk data Content Collections.

Jika menggunakan konsep TypeScript yang belum umum, jelaskan secara singkat dalam Bahasa Indonesia.

## 5. Aturan Coding

- Gunakan struktur kode sederhana dan maintainable.
- Gunakan nama file, variabel, fungsi, dan komponen yang deskriptif.
- Buat reusable component jika benar-benar digunakan berulang.
- Hindari duplikasi kode.
- Jangan membuat abstraksi berlebihan.
- Gunakan semantic HTML.
- Prioritaskan aksesibilitas.
- Gunakan CSS dan Tailwind secara konsisten.
- Hindari dependency yang tidak dibutuhkan.
- Jangan membuat JavaScript interaktif jika HTML atau CSS sudah cukup.

Jangan menghapus fitur atau komponen yang sudah berfungsi tanpa alasan dan persetujuan.

Jangan mengganti teknologi utama tanpa persetujuan.

## 6. Identitas Visual dan Design System

### 6.1 Design Direction

Gunakan konsep:

**Modern Minimalist Personal Portfolio**

Karakter desain:
- Clean.
- Professional.
- Elegant.
- Minimalist.
- Refined.
- Modern.
- User-centered.

Website harus memiliki identitas visual yang kuat tetapi tidak berlebihan.

Prioritaskan:
- Typography.
- Whitespace.
- Visual hierarchy.
- Layout composition.
- Consistent spacing.
- Readability.
- Accessibility.

Hindari desain yang menyerupai:
- Admin dashboard.
- SaaS landing page.
- Website template generik.
- Website dengan terlalu banyak card.
- Website yang terlalu banyak animasi.
- Website dengan dekorasi tidak relevan.

Tidak semua section harus menggunakan card.

Gunakan variasi layout yang tetap konsisten agar website tidak monoton.

### 6.2 Color Palette

Gunakan palet warna berikut:

Primary:
- Cold White: `#F5F8FC`

Secondary:
- Deep Navy: `#0B1730`

Accent:
- Ice Blue: `#A9D6F5`

Supporting Colors:
- Slate Gray: `#64748B`
- Light Slate: `#E2E8F0`
- Pure White: `#FFFFFF`

Gunakan Cold White sebagai warna utama website.

Gunakan Deep Navy sebagai warna identitas sekunder yang memberikan kontras dan kesan profesional.

Gunakan Ice Blue sebagai aksen secara selektif.

Aturan:
- Light theme menjadi tema default.
- Background halaman utama menggunakan Cold White.
- Heading utama menggunakan Deep Navy.
- Body text menggunakan warna gelap yang nyaman dibaca.
- Tombol utama dapat menggunakan Deep Navy.
- Warna aksen digunakan untuk highlight dan interactive states.
- Gunakan warna dengan kontras yang memenuhi kebutuhan aksesibilitas.
- Jangan menggunakan warna putih hangat, cream, beige, atau warna kekuningan sebagai warna utama.
- Jangan membuat seluruh halaman menggunakan background Navy.
- Hindari gradient berlebihan.

Gunakan CSS variables atau Tailwind theme tokens untuk pengelolaan warna.

Pastikan konsistensi warna di seluruh halaman.

Implementasi token warna berada di `src/styles/global.css`:
- `--color-cold-white` untuk background utama; `--color-navy` untuk heading, identitas, dan tombol utama.
- `--color-ice-blue` untuk aksen ringan; jangan gunakan Ice Blue sebagai teks kecil di atas background terang.
- `--text-secondary` menggunakan slate yang lebih gelap (`#53647B`) agar teks sekunder tetap terbaca pada Cold White.
- Navy boleh digunakan pada closing section Contact secara terbatas; halaman Projects dan Case Study tetap mengikuti light theme.
- Gunakan token semantik background, teks, divider, dan focus agar penambahan tema di masa depan tidak memerlukan penggantian warna satu per satu.

### 6.3 Theme

Gunakan Light Theme sebagai tampilan utama.

Tidak perlu membuat Dark Mode pada tahap awal kecuali diminta.

Struktur design tokens harus memungkinkan penambahan Dark Mode pada pengembangan berikutnya.

Jangan menambahkan theme toggle yang belum berfungsi.

### 6.4 Typography

Gunakan typography modern yang profesional.

Prioritaskan:
- Heading yang tegas.
- Body text yang mudah dibaca.
- Hierarki ukuran font yang konsisten.
- Line-height yang nyaman.
- Proporsi typography yang harmonis.

Gunakan maksimal dua font family jika diperlukan.

Hindari penggunaan terlalu banyak font weight dan variasi ukuran.

Nama pada Hero Section harus menjadi elemen typography paling menonjol.

### 6.5 Layout dan Spacing

- Gunakan responsive container dengan max-width yang konsisten.
- Gunakan whitespace yang cukup luas.
- Hindari section yang terlalu padat.
- Gunakan grid dan alignment yang rapi.
- Gunakan spacing scale secara konsisten.
- Berikan pemisahan visual yang jelas antarsection.
- Hindari terlalu banyak border, shadow, dan rounded card.

Gunakan komposisi layout yang mempertimbangkan keseimbangan antara konten dan ruang kosong.

## 7. Responsive Design

Seluruh halaman wajib responsif pada:

- Mobile.
- Tablet.
- Laptop.
- Desktop layar lebar.

Aturan:
- Gunakan mobile-friendly layout.
- Hindari horizontal overflow.
- Pastikan typography tetap terbaca.
- Pastikan navigasi dapat digunakan pada perangkat mobile.
- Pastikan gambar menyesuaikan ukuran viewport.
- Jangan hanya mengoptimalkan tampilan desktop.
- Gunakan breakpoint yang konsisten.
- Pastikan elemen interaktif memiliki ukuran target yang memadai.

Perhatikan aksesibilitas keyboard dan focus states.

Hormati `prefers-reduced-motion`.

## 8. Struktur Website

Website minimal memiliki halaman berikut:

### 8.1 Homepage (`/`)

Urutan section:

1. Hero
2. About Me
3. Selected Projects
4. Experience
5. Expertise & Tools
6. Education & Achievements
7. Contact
8. Footer

Setiap section harus memiliki tujuan yang jelas.

Hindari pengulangan informasi yang sama secara berlebihan.

### 8.2 Projects (`/projects`)

Menampilkan koleksi proyek yang telah siap dipublikasikan.

Gunakan reusable Project Cards.

Setiap Project Card mengarah ke halaman detail proyek.

Kategori proyek:
- Software Quality Assurance.
- UI/UX Design.
- Software Development.

Filter kategori boleh digunakan jika implementasinya sederhana dan aksesibel.

Jangan menampilkan proyek yang belum memiliki konten cukup sebagai halaman publik.

### 8.3 Project Detail (`/projects/[id]`)

Setiap proyek memiliki halaman case study sendiri.

Gunakan Astro Dynamic Routing dan Content Collections.

Jangan membuat halaman Astro manual untuk setiap proyek jika dapat menggunakan satu reusable layout.

Konten detail harus fleksibel menyesuaikan jenis proyek.

### 8.4 Halaman 404

Buat halaman 404 sederhana dan konsisten dengan desain website.

Sediakan navigasi kembali ke homepage.

## 9. Hero Section

Hero merupakan bagian paling penting dari homepage.

Gunakan konsep:

**Minimal Personal Introduction**

Hero harus memperkenalkan pemilik portfolio secara singkat dan profesional.

### Konten Hero

Tampilkan hanya:
- Nama lengkap.
- Identitas profesional.
- Ketertarikan utama.
- Foto pribadi.
- CTA sederhana.

Identitas:

Name:
Syauqi Dhiya Ulhaq

Professional Background:
Software Engineering

Primary Interests:
- Software Quality Assurance.
- UI/UX Design.
- Software Development.

Gunakan copywriting Bahasa Inggris yang singkat, natural, dan profesional.

Contoh arah konten:

"Syauqi Dhiya Ulhaq"

"Software Engineer focused on Quality Assurance and UI/UX Design."

Teks pendukung dapat menjelaskan ketertarikan dalam membangun software yang reliable, intuitive, dan user-centered.

Jangan menjadikan contoh tersebut sebagai copywriting wajib jika ada versi yang lebih baik.

### Layout Hero

Desktop:
- Identitas dan teks di sisi kiri.
- Foto pribadi di sisi kanan.
- Nama menjadi focal point utama.
- Gunakan whitespace yang luas.
- Pertahankan keseimbangan komposisi.

Mobile:
- Sesuaikan susunan teks dan foto secara responsif.
- Pertahankan fokus pada nama dan identitas.
- Hindari heading terlalu besar.
- Hindari foto yang memenuhi seluruh viewport secara berlebihan.

### Foto Pribadi

Gunakan foto asli jika tersedia.

Jika belum tersedia:
- Siapkan path yang jelas, misalnya `/images/profile.jpg`.
- Gunakan fallback netral yang rapi.
- Jangan menggunakan foto orang lain.
- Jangan membuat foto AI yang dianggap sebagai foto asli pemilik.

Foto harus menyatu dengan desain dan tidak menyerupai dashboard card.

### CTA

Gunakan maksimal dua CTA utama:

- View Projects.
- Download CV.

Jika file CV belum tersedia, jangan membuat tautan rusak.

Siapkan integrasi untuk menambahkan file CV kemudian.

### Larangan Hero

Jangan menambahkan:
- Statistik fiktif.
- Floating technology icons.
- Banyak skill badges.
- Card pengalaman.
- Background yang terlalu ramai.
- Animasi berlebihan.
- Elemen dekoratif yang tidak membantu memperkenalkan pemilik.

Hero harus terasa clean, personal, dan profesional.

## 10. About Me

Gunakan section About Me untuk memperkenalkan latar belakang pemilik portfolio secara lebih personal.

Fokus konten:
- Latar belakang Software Engineering.
- Pengalaman di QA, UI/UX, dan software development.
- Ketertarikan profesional.
- Pendekatan terhadap kualitas software dan pengalaman pengguna.

Hindari mengulang Hero secara langsung.

Gunakan layout editorial sederhana.

Jangan menggunakan paragraf terlalu panjang.

Jangan mengarang pengalaman atau pencapaian.

## 11. Selected Projects

Tampilkan maksimal 3–4 proyek unggulan pada homepage.

Gunakan reusable Project Card.

Project Card dapat memuat:
- Cover image.
- Category.
- Project title.
- Role.
- Short description.
- Technology atau method tags.
- Link ke halaman detail.

Gunakan desain yang konsisten, tetapi tidak harus kaku.

Berikan ruang untuk perbedaan gambar dan jenis proyek.

Sediakan link menuju halaman `/projects`.

Jangan membuat kartu dengan link palsu.

## 12. Experience

Gunakan section Experience untuk menampilkan pengalaman profesional dan akademik.

Pengalaman utama:

### PT Kereta Api Indonesia (Persero)
- Role: UI/UX Designer Intern.
- Period: July–September 2025.
- Focus: Corporate Website Redesign.

### Informatics Laboratory, Telkom University
- Role: Teaching & Practicum Assistant.
- Period: September 2024–June 2026.
- Focus: Software Engineering teaching and practical assistance.

### Advanced Software Engineering Laboratory
- Experience: UI/UX internship and QA mentoring.
- Detail periode dan kontribusi mengikuti data yang telah diverifikasi.

Gunakan timeline atau editorial list.

Jangan menggunakan Project Card untuk menampilkan pengalaman kerja.

Hindari bullet terlalu panjang.

Jangan menambahkan informasi yang belum diberikan.

## 13. Expertise & Tools

Gunakan tiga kelompok utama:

### Software Quality Assurance

Contoh kemampuan:
- Manual Testing.
- Functional Testing.
- Black-Box Testing.
- Boundary Value Analysis.
- Equivalence Partitioning.
- Decision Table Testing.
- User Acceptance Testing.
- Test Automation.
- Katalon Studio.

### UI/UX Design

Contoh kemampuan:
- Figma.
- Wireframing.
- Prototyping.
- User Flow.
- UI Design.
- Usability Testing.

### Software Development

Teknologi berdasarkan pengalaman:
- JavaScript.
- PHP.
- Java.
- Laravel.
- Express.js.
- MySQL.
- PostgreSQL.
- Git.
- GitHub.

Teknologi lain hanya boleh ditampilkan jika sudah dikonfirmasi pernah digunakan.

Jangan menambahkan framework atau tools hanya karena populer.

Hindari visualisasi skill berbentuk persentase atau progress bar tanpa dasar penilaian.

## 14. Education & Achievements

### Education

Telkom University

Bachelor of Software Engineering

2022–2026

GPA: 3.90 / 4.00

### Achievement

3rd Place in Digi X National Business Plan & UI/UX Case Competition 2023.

Issued by:
HIMA Bisnis Digital, Universitas Padjadjaran.

November 2023.

Tampilkan section secara ringkas.

Jangan menggunakan layout yang terlalu besar untuk informasi yang sedikit.

## 15. Contact & Footer

Gunakan closing section sederhana.

Konten:
- Pesan singkat yang mengundang kolaborasi atau komunikasi profesional.
- Email.
- LinkedIn.
- GitHub jika URL tersedia.

Email:
syauqi.d.u@gmail.com

LinkedIn:
https://www.linkedin.com/in/syauqidhiyaulhaq/

Jangan membuat URL GitHub fiktif.

Tidak perlu contact form jika hanya menambah kompleksitas.

Gunakan footer yang minimalis dan konsisten.

## 16. Arsitektur Konten Proyek

Gunakan Astro Content Collections.

Rekomendasi struktur:

- `src/content.config.ts`
- `src/content/projects/`
- `src/pages/projects/index.astro`
- `src/pages/projects/[id].astro`
- `src/components/projects/ProjectCard.astro`
- `src/layouts/CaseStudyLayout.astro`

Setiap proyek memiliki satu file Markdown.

Gunakan metadata untuk menampilkan Project Card.

Gunakan Markdown body untuk halaman detail.

### Metadata Proyek

Metadata umum:

- `title`: nama proyek.
- `summary`: deskripsi singkat.
- `category`: `qa`, `uiux`, atau `development`.
- `role`: peran pemilik.
- `projectType`: konteks proyek.
- `period`: periode proyek.
- `tags`: teknologi atau metode.
- `featured`: status proyek unggulan.
- `order`: urutan tampilan.
- `published`: status publikasi.
- `cover`: gambar proyek.
- `links`: repository, prototype, atau demo.

Gunakan schema validation.

Field opsional tidak boleh dipaksa memiliki data palsu.

Hanya proyek dengan `published: true` yang boleh ditampilkan dan dibuatkan halaman publik.

Jika informasi belum lengkap, simpan sebagai draft.

## 17. Project Card Architecture

Gunakan satu reusable Astro Component untuk kartu proyek.

Project Card harus:
- Memiliki layout konsisten.
- Responsif.
- Menampilkan informasi singkat.
- Mendukung cover image jika tersedia.
- Memiliki hover dan keyboard focus states.
- Dapat diklik menuju halaman detail.
- Menggunakan semantic HTML.
- Menghindari nested interactive elements yang tidak valid.

Card dan halaman detail harus mengambil data dari sumber yang sama.

Jangan menggandakan data proyek secara hardcoded.

Jangan membuat kartu tidak aktif hanya untuk mempercantik layout.

## 18. Case Study Architecture

Setiap proyek memiliki halaman case study.

Layout visual harus konsisten, tetapi struktur konten fleksibel.

Jangan menggunakan satu template narasi yang dipaksakan pada seluruh proyek.

### Software Quality Assurance

Section yang dapat digunakan:
- Project Overview.
- Role and Responsibilities.
- Testing Objectives and Scope.
- Software Testing Life Cycle.
- Test Case Design.
- Test Environment.
- Test Execution.
- Test Automation.
- Defect Management.
- Testing Results.
- Challenges and Lessons Learned.

### UI/UX Design

Section yang dapat digunakan:
- Project Overview.
- Problem Statement.
- Role and Responsibilities.
- Design Process.
- User Research.
- Information Architecture.
- User Flow.
- Wireframes.
- UI Design.
- Interactive Prototype.
- Usability Evaluation.
- Final Design.
- Lessons Learned.

### Software Development

Section yang dapat digunakan:
- Project Overview.
- Problem Statement.
- Role and Responsibilities.
- Tech Stack.
- System Architecture.
- Core Features.
- Implementation.
- Technical Challenges.
- Testing and Deployment.
- Results and Lessons Learned.

Gunakan hanya section yang benar-benar relevan.

Jangan membuat section kosong.

Hindari Lorem Ipsum, angka fiktif, placeholder publik, atau tautan `#`.

## 19. Dokumentasi Visual Proyek

Halaman case study harus mendukung:
- Screenshots.
- Flowcharts.
- Architecture diagrams.
- Test case examples.
- Test execution results.
- Bug reports.
- Wireframes.
- UI mockups.
- Prototypes.
- Dokumentasi proyek lainnya.

Gunakan gambar asli jika tersedia.

Setiap gambar harus memiliki alt text.

Gunakan optimasi gambar Astro jika relevan.

Pastikan gambar responsif dan tidak menyebabkan layout shift.

Jangan menampilkan:
- Data pribadi pengguna atau donatur.
- Credential.
- API keys.
- URL environment privat.
- Dokumen internal yang tidak boleh dipublikasikan.
- Informasi rahasia milik client.

Jika bukti visual belum tersedia, gunakan layout yang tetap baik tanpa gambar.

Jangan membuat screenshot palsu yang diklaim sebagai hasil proyek.

## 20. Konten Proyek Pertama

### Sistem Pengelola Donatur Yayasan Amanah Ummah

Category:
Software Quality Assurance.

Project Type:
Undergraduate Capstone Project.

Role:
Quality Assurance (QA).

Metodologi pengembangan:
Agile Scrum.

### Tanggung Jawab QA

Pemilik melakukan proses pengujian berdasarkan Software Testing Life Cycle (STLC).

Tahapan:
1. Test Planning.
2. Test Analysis and Design.
3. Test Environment Setup.
4. Test Execution.
5. Defect Reporting.
6. Retesting and Regression Testing.
7. Test Reporting and Closure.

Testing dilakukan pada setiap sprint.

Scope testing mengacu pada modul dan user story yang dikembangkan dalam sprint.

Test case disusun berdasarkan acceptance criteria pada setiap user story.

### Black-Box Testing

Teknik yang digunakan:
- Boundary Value Analysis (BVA).
- Decision Table Testing (DT).
- Equivalence Partitioning (EQP).

Jelaskan penggunaan teknik secara akurat.

Jangan mengarang jumlah test case.

### Test Environment

Pemilik menyiapkan kebutuhan lingkungan pengujian, termasuk infrastruktur dan akses VPS sesuai kebutuhan proyek.

Jangan mengarang detail server atau konfigurasi.

### Test Execution & Defect Management

Pengujian dijalankan berdasarkan test case.

Defect dicatat dalam bug report.

Bug diperbaiki oleh developer frontend atau backend.

Setelah perbaikan:
- QA melakukan retesting.
- QA melakukan regression testing yang relevan.

### Test Automation

Tool:
Katalon Studio.

Jenis:
Functional Web Test Automation.

Proses:
1. Mengacu pada manual test case.
2. Menggunakan Web Recorder untuk merekam interaksi.
3. Menyesuaikan test objects.
4. Menggunakan Spy Web jika diperlukan.
5. Menyesuaikan script untuk interaksi khusus.
6. Mengorganisasikan automated test cases ke dalam Test Suites berdasarkan modul.
7. Menjalankan automation untuk mendukung pengujian berulang.

Automation terutama digunakan untuk membantu regression testing lintas sprint.

Jangan mengklaim penghematan waktu terukur tanpa data.

### Automation Limitations

Beberapa fitur yang terintegrasi dengan layanan pihak ketiga tidak termasuk cakupan automation.

Contoh:
- Payment gateway.
- Email.
- OTP registrasi.

Jangan menyimpulkan bahwa fitur tersebut tidak diuji secara manual.

### Penulisan Case Study

Gunakan Bahasa Inggris profesional.

Tonjolkan:
- Peran QA.
- Alur STLC.
- Integrasi pengujian dengan Agile Scrum.
- Black-box test design.
- Defect management.
- Functional test automation.
- Testing limitations.

Jangan mengarang hasil, statistik, coverage, atau metrik lainnya.

## 21. Proyek Lainnya

Proyek berikut dapat didokumentasikan secara bertahap:

- Aksara Ulu Software Testing.
- BizGrow.
- Redesign Corporate Website PT KAI.
- Starbucks Mobile Application Redesign.
- RakitinPC.
- Musikan.
- SuperInventory.
- Proyek lain yang telah dikonfirmasi pemilik.

Setiap proyek akan diberikan detail secara bertahap.

Jangan membuat case study lengkap tanpa informasi yang cukup.

Jangan otomatis mempublikasikan seluruh proyek.

## 22. Aturan Penulisan Case Study

Gunakan bahasa yang:
- Profesional.
- Natural.
- Spesifik.
- Jelas.
- Tidak berlebihan.

Prioritaskan:
1. Tujuan atau masalah proyek.
2. Peran pribadi.
3. Proses kerja.
4. Kontribusi nyata.
5. Tools dan metode.
6. Hasil yang dapat diverifikasi.

Bedakan kontribusi individu dan kontribusi tim.

Jangan mengarang:
- Test coverage.
- Jumlah bug.
- Jumlah test case.
- Waktu penghematan.
- Skor usability.
- Jumlah pengguna.
- Deployment status.
- Pencapaian kompetisi.

Gunakan data yang telah dikonfirmasi.

## 23. Reusable Components

Pertimbangkan komponen berikut:

General:
- `Header.astro`
- `Footer.astro`
- `SectionHeading.astro`
- `SocialLinks.astro`

Projects:
- `ProjectCard.astro`
- `ProjectGrid.astro`
- `ProjectTags.astro`

Case Study:
- `CaseStudyHero.astro`
- `CaseStudyMeta.astro`
- `CaseStudyLayout.astro`

Optional:
- `ProcessTimeline.astro`
- `EvidenceGallery.astro`

Jangan membuat seluruh komponen sekaligus jika belum diperlukan.

Gunakan reusable component jika meningkatkan maintainability.

Hindari overengineering.

## 24. SEO dan Accessibility

Setiap halaman harus memiliki:
- Title yang sesuai.
- Meta description.
- Semantic heading hierarchy.
- Alt text untuk gambar.
- Accessible navigation.
- Keyboard focus states.
- Kontras warna memadai.

Gunakan URL yang bersih dan konsisten.

Pastikan tidak ada broken links.

Utamakan performa dan minimalkan JavaScript sisi klien.

Hindari penggunaan animasi yang mengganggu aksesibilitas.

## 25. Development

Periksa versi Astro sebelum menjalankan development server.

Jika Astro CLI mendukung background mode, gunakan:

```bash
npx astro dev --background
```

Kelola background server menggunakan:

```bash
npx astro dev status
npx astro dev logs
npx astro dev stop
```

Jika versi Astro atau environment tidak mendukung background mode, gunakan:

```bash
npm run dev
```

Jangan memaksakan command yang tidak tersedia.

Jangan menjalankan beberapa development server pada port yang sama tanpa kebutuhan.

## 26. Dokumentasi Astro

Dokumentasi utama:

https://docs.astro.build

Gunakan dokumentasi berikut sebelum mengerjakan fitur terkait.

Routing:
https://docs.astro.build/en/guides/routing/

Components:
https://docs.astro.build/en/basics/astro-components/

Framework Components:
https://docs.astro.build/en/guides/framework-components/

Content Collections:
https://docs.astro.build/en/guides/content-collections/

Styling:
https://docs.astro.build/en/guides/styling/

Internationalization:
https://docs.astro.build/en/guides/internationalization/

Pastikan penggunaan API sesuai dengan versi Astro yang terpasang.

## 27. Aturan Kerja Codex

Sebelum mengerjakan perubahan besar:

1. Baca `AGENTS.md` terbaru.
2. Periksa kondisi repository.
3. Periksa struktur file.
4. Periksa dependencies.
5. Periksa status Git.
6. Jelaskan rencana perubahan dalam Bahasa Indonesia.
7. Sebutkan file utama yang akan dibuat atau diubah.
8. Jelaskan alasan keputusan teknis.

Untuk tugas besar yang jelas dan tidak destruktif, lanjutkan implementasi setelah menjelaskan rencana tanpa perlu meminta konfirmasi tambahan.

Tunggu persetujuan jika perubahan akan:
- Menghapus fitur penting.
- Menghapus data.
- Mengganti teknologi utama.
- Mengubah konfigurasi sensitif.
- Melakukan tindakan destruktif.

Untuk tugas kecil yang jelas, Codex boleh langsung mengerjakan.

Jika pemilik belum memahami konsep teknis yang digunakan, jelaskan secara singkat.

Jangan hanya memberikan kode tanpa penjelasan.

## 28. Validasi

Setelah perubahan signifikan, jalankan:

```bash
npm run build
```

Jika tersedia:

```bash
npm run check
```

Lakukan pemeriksaan:
- Build berhasil.
- TypeScript tidak bermasalah.
- Semua route dapat dibangun.
- Semua Project Card mengarah ke URL yang benar.
- Tidak ada broken links.
- Tidak ada broken images.
- Layout responsif.
- Tidak ada horizontal overflow.
- Interaksi keyboard berfungsi.

Jika memungkinkan, lakukan pemeriksaan visual desktop dan mobile.

Jangan mengklaim telah melakukan visual testing jika tidak tersedia browser.

Jika terjadi error:
1. Identifikasi penyebab.
2. Jelaskan secara sederhana.
3. Perbaiki kode.
4. Jalankan validasi ulang.
5. Laporkan hasilnya.

## 29. Aturan Git

Gunakan Git untuk menyimpan perubahan secara berkala.

Periksa status repository:

```bash
git status
```

Gunakan commit message yang jelas.

Contoh:

```bash
git add .
git commit -m "feat: implement portfolio homepage"
```

Jangan otomatis melakukan commit atau push tanpa instruksi jika pekerjaan belum disetujui.

Jangan melakukan force push.

Jangan menjalankan perintah destruktif seperti:

```bash
git reset --hard
git clean -fd
```

kecuali diminta secara eksplisit.

Pastikan:
- `AGENTS.md` ikut masuk repository.
- `.env` dan credentials tidak ikut commit.
- `node_modules` tidak ikut commit.
- File build yang tidak diperlukan tidak ikut commit.

Setelah perubahan besar, berikan rekomendasi commit message.

## 30. Kriteria Selesai

Pekerjaan dianggap selesai jika:

- Website berjalan dengan baik.
- Astro build berhasil.
- Light theme menggunakan Cold White sebagai warna utama.
- Deep Navy digunakan sebagai secondary color.
- Desain konsisten dan profesional.
- Hero tampil clean, dengan fokus pada nama, foto, dan identitas profesional.
- Homepage memiliki struktur section yang jelas.
- Website responsif pada mobile, tablet, dan desktop.
- Project Cards berfungsi.
- Halaman Projects berfungsi.
- Halaman detail proyek dapat diakses.
- Konten case study dapat ditambahkan melalui Markdown.
- Proyek QA Yayasan Amanah Ummah ditulis berdasarkan fakta.
- Tidak ada data palsu.
- Tidak ada tautan rusak.
- Tidak ada error build.

## 31. Prinsip Utama

- Prioritaskan kualitas desain.
- Gunakan Cold White sebagai primary color.
- Gunakan Deep Navy sebagai secondary color.
- Pertahankan tampilan minimalis dan profesional.
- Hindari fitur yang tidak diperlukan.
- Prioritaskan reusable components.
- Buat kode yang mudah dipelajari.
- Gunakan data yang benar.
- Jangan mengarang pengalaman atau pencapaian.
- Jangan menghapus pekerjaan tanpa izin.
- Selalu lakukan validasi.
- Jelaskan trade-off ketika ada beberapa pilihan implementasi.
- Rekomendasikan pendekatan paling sederhana yang memenuhi kebutuhan.

Website harus terasa sebagai portfolio personal yang matang, bukan sekadar kumpulan komponen atau template umum.

**Hero memperkenalkan siapa pemiliknya. Projects memperlihatkan karyanya. Case Studies membuktikan kontribusinya.**
