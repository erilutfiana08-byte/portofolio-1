# Product Requirements Document (PRD)

## Website Portofolio Pribadi --- Sistem Informasi

**Versi:** 1.0\
**Status:** Draft awal\
**Platform:** Website statis\
**Target deployment:** GitHub Pages

------------------------------------------------------------------------

## 1. Ringkasan Produk

Website portofolio pribadi ini dirancang untuk memperkenalkan identitas,
minat profesional, dan kompetensi teknis pemilik website kepada dosen,
rekan komunitas koding SIKOKI, serta rekruter program magang.

Website dibangun sebagai halaman statis menggunakan **HTML5 semantik,
Tailwind CSS melalui CDN resmi, dan Vanilla JavaScript**. Pendekatan
tanpa framework berat dipilih agar struktur proyek mudah dipelajari,
ringan, mudah dirawat, dan dapat di-deploy melalui GitHub Pages.

Pada tahap pertama, website berfokus pada kerangka halaman yang terdiri
atas navigasi, hero, tentang saya, dan keahlian. Menu Proyek dan Kontak
disiapkan sebagai navigasi untuk pengembangan tahap berikutnya.

## 2. Latar Belakang dan Permasalahan

Mahasiswa Sistem Informasi membutuhkan media digital yang dapat
menampilkan profil dan kemampuan secara ringkas, terstruktur, serta
mudah diakses. Portofolio ini menjadi representasi awal identitas
profesional, sekaligus tempat untuk mengembangkan dokumentasi proyek dan
pengalaman belajar.

Pengunjung perlu memahami siapa pemilik website, bidang yang diminati,
dan teknologi yang sedang dipelajari dalam sekitar 10 detik pertama
setelah halaman dibuka.

## 3. Tujuan Produk

1.  Memperkenalkan pemilik website sebagai mahasiswa Sistem Informasi
    yang memiliki minat pada pengembangan web dan desain antarmuka.
2.  Menampilkan identitas dan kompetensi teknis dengan tampilan
    profesional.
3.  Memberikan pengalaman menjelajah yang nyaman pada perangkat desktop
    maupun seluler.
4.  Menyediakan fondasi kode yang bersih, aksesibel, dan mudah
    dikembangkan.
5.  Memudahkan publikasi website melalui GitHub Pages.

### Indikator Keberhasilan

-   Identitas, peran, dan ringkasan profil terlihat jelas pada area hero
    tanpa perlu menggulir halaman.
-   Navigasi menuju bagian halaman dapat digunakan dengan mouse,
    keyboard, dan layar sentuh.
-   Menu hamburger dapat dibuka dan ditutup pada layar kecil.
-   Konten tetap terbaca dan tidak mengalami horizontal overflow pada
    ukuran layar umum.
-   Halaman dapat dimuat sebagai website statis tanpa proses build atau
    framework JavaScript.
-   Struktur HTML menggunakan elemen semantik dan memiliki dasar
    aksesibilitas.

## 4. Target Pengguna

  -----------------------------------------------------------------------
  Pengguna                            Kebutuhan utama
  ----------------------------------- -----------------------------------
  Dosen                               Melihat identitas, minat, dan
                                      perkembangan kompetensi mahasiswa

  Rekan komunitas SIKOKI              Mengetahui minat teknis dan bidang
                                      kolaborasi

  Rekruter magang                     Memahami profil, peran yang
                                      diminati, dan dasar kompetensi
                                      kandidat

  Pengunjung umum                     Mengenal pemilik portofolio dengan
                                      cepat
  -----------------------------------------------------------------------

## 5. Persona dan Konteks Penggunaan

**Pemilik website** - Mahasiswa Program Studi Sistem Informasi semester
3. - Universitas Nusantara PGRI Kediri. - Aktif dalam komunitas koding
SIKOKI. - Memiliki minat pada Web Development dan UI/UX.

**Konteks penggunaan:** Pengunjung membuka tautan portofolio dari CV,
profil profesional, pesan komunitas, atau rekomendasi dosen. Mereka
biasanya melakukan pemindaian cepat sebelum memutuskan untuk membaca
lebih lanjut.

## 6. Ruang Lingkup

### 6.1 Termasuk dalam Tahap Pertama

-   Satu halaman utama (`index.html`).
-   Satu file JavaScript (`script.js`).
-   Navbar sticky dengan navigasi anchor.
-   Hero section.
-   About section.
-   Tech Stack section.
-   Menu hamburger responsif.
-   Ikon Lucide melalui CDN.
-   Tema dark mode.
-   Komentar HTML singkat pada awal setiap section.
-   Persiapan tautan navigasi Proyek dan Kontak untuk bagian yang akan
    dikembangkan.

### 6.2 Di Luar Ruang Lingkup Tahap Pertama

-   Backend, database, autentikasi, dan dashboard admin.
-   Formulir kontak yang mengirim data ke server.
-   CMS atau pengelolaan konten dinamis.
-   Animasi kompleks dan efek visual berat.
-   Halaman detail proyek.
-   Integrasi API eksternal.
-   Sistem analitik atau pelacakan pengunjung.

## 7. Struktur Halaman dan Persyaratan Fungsional

### 7.1 Navbar

**Tujuan:** Memberikan akses cepat ke bagian-bagian utama website.

**Elemen:** - Logo berupa nama pemilik website di sisi kiri. - Menu
Tentang, Keahlian, Proyek, dan Kontak di sisi kanan. - Tombol hamburger
pada layar berukuran kecil. - Navbar tetap berada di bagian atas ketika
halaman digulir (*sticky*).

**Persyaratan:** - Setiap menu menggunakan tautan anchor menuju ID
section yang sesuai. - Menu hamburger dapat membuka dan menutup navigasi
seluler. - Tombol hamburger memiliki `aria-label`, `aria-expanded`, dan
`aria-controls`. - Menu dapat dioperasikan dengan keyboard. - Setelah
tautan navigasi seluler dipilih, menu ditutup. - Area navigasi tidak
menutupi judul section ketika anchor digunakan; gunakan
`scroll-margin-top` bila diperlukan.

### 7.2 Hero Section

**Tujuan:** Menyampaikan identitas dan fokus profesional dalam beberapa
detik pertama.

**Elemen:** - Sapaan singkat. - Nama lengkap: **\[Nama Lengkap\]**. -
Peran: **Web Developer & UI/UX Enthusiast**. - Deskripsi singkat
maksimal dua kalimat. - Tombol CTA **"Lihat Proyek"**. - Bingkai foto
profil berbentuk lingkaran.

**Persyaratan:** - Nama dan peran menjadi hierarki teks paling
menonjol. - CTA mengarah ke section Proyek atau placeholder tujuan
proyek yang disiapkan. - Foto memiliki teks alternatif (`alt`) yang
sesuai. - Jika foto belum tersedia, gunakan placeholder visual yang
tidak mengganggu tata letak. - Pada desktop, teks dan foto ditampilkan
berdampingan; pada layar kecil, susun secara vertikal. - Teks hero tidak
terlalu panjang dan tetap mudah dipindai.

**Contoh deskripsi awal:**

> Mahasiswa Sistem Informasi yang tertarik membangun pengalaman web yang
> fungsional dan mudah digunakan. Saya terus mengembangkan kemampuan
> frontend serta eksplorasi UI/UX melalui pembelajaran dan proyek.

Teks tersebut merupakan contoh dan dapat disesuaikan dengan pengalaman
aktual pemilik website.

### 7.3 About Section

**Tujuan:** Memberikan konteks singkat mengenai latar belakang dan minat
pemilik website.

**Konten minimum:** - Status sebagai mahasiswa Sistem Informasi semester
3. - Universitas Nusantara PGRI Kediri. - Keaktifan di komunitas koding
SIKOKI. - Ketertarikan pada Web Development dan UI/UX. - Pernyataan
singkat mengenai tujuan belajar atau pengembangan diri.

**Persyaratan:** - Disajikan dalam paragraf ringkas dan mudah dibaca. -
Tidak membuat klaim pengalaman atau pencapaian yang belum dimiliki. -
Menggunakan elemen HTML semantik yang sesuai.

### 7.4 Tech Stack Section

**Tujuan:** Menampilkan teknologi dan kompetensi yang sedang dipelajari
atau dikuasai.

**Konten awal yang dapat ditampilkan:** - HTML5 - CSS / Tailwind CSS -
JavaScript - Git dan GitHub - UI/UX Design

**Persyaratan:** - Setiap teknologi ditampilkan sebagai item atau kartu
ringkas. - Gunakan ikon atau label teks yang mudah dikenali. - Hindari
indikator persentase kemampuan yang tidak memiliki dasar pengukuran. -
Bedakan secara jujur antara teknologi yang sudah dikuasai dan yang masih
dipelajari. - Susunan kartu menyesuaikan lebar layar.

### 7.5 Section Proyek dan Kontak (Tahap Lanjutan)

Pada tahap pertama, menu Proyek dan Kontak tetap dapat muncul di
navigasi sebagai penanda struktur pengembangan. Tautannya tidak boleh
mengarah ke ID yang tidak tersedia tanpa penanganan. Pilihan
implementasi: - Menyediakan section placeholder sederhana dengan
keterangan "Segera hadir"; atau - Menandai menu sebagai belum aktif
sampai section dibuat.

CTA "Lihat Proyek" harus mengarah ke tujuan yang benar-benar tersedia.

## 8. Persyaratan Desain UI

### 8.1 Arah Visual

-   Gaya: modern, minimalis, elegan, dan profesional.
-   Tema: dark mode.
-   Kesan: teknologi, bersih, fokus pada konten, dan tidak berlebihan.
-   Prioritas: keterbacaan, hierarki visual, konsistensi, dan
    responsivitas.

### 8.2 Palet Warna

  Penggunaan        Warna
  ----------------- ---------------
  Latar utama       `slate-950`
  Permukaan kartu   `slate-900`
  Border            `slate-800`
  Aksen utama       `emerald-400`
  Aksen sekunder    `cyan-400`
  Teks utama        `slate-100`
  Teks sekunder     `slate-400`

Pastikan kontras teks dan elemen interaktif cukup jelas, terutama untuk
teks berukuran kecil.

### 8.3 Tipografi

-   Heading: **Plus Jakarta Sans** dari Google Fonts.
-   Paragraf dan teks antarmuka: **Inter** dari Google Fonts.
-   Gunakan ukuran dan ketebalan font secara konsisten.
-   Pastikan fallback font sistem tersedia jika Google Fonts gagal
    dimuat.

### 8.4 Komponen Visual

-   Kartu menggunakan permukaan slate-900 dan border slate-800.
-   Sudut komponen dapat dibuat membulat secara konsisten.
-   Tombol CTA memiliki kontras yang jelas dan state hover/focus.
-   Foto profil berbentuk lingkaran dengan bingkai aksen.
-   Ikon menggunakan Lucide Icons melalui CDN.
-   Hindari dekorasi berlebihan yang mengurangi fokus pada informasi
    utama.

## 9. Persyaratan Teknis

### 9.1 Teknologi

  -----------------------------------------------------------------------
  Teknologi                           Penggunaan
  ----------------------------------- -----------------------------------
  HTML5                               Struktur dokumen dan elemen
                                      semantik

  Tailwind CSS CDN resmi              Styling dan tata letak responsif

  Vanilla JavaScript                  Interaksi menu hamburger dan
                                      perilaku UI sederhana

  Lucide Icons CDN                    Ikon antarmuka

  Google Fonts                        Plus Jakarta Sans dan Inter

  GitHub Pages                        Hosting website statis
  -----------------------------------------------------------------------

### 9.2 Struktur Folder

``` text
portfolio/
├── index.html
├── script.js
└── assets/
    └── images/
        └── profile.jpg
```

Folder `assets/images/` bersifat opsional pada awal pengerjaan dan dapat
dibuat ketika foto profil sudah tersedia. Sesuai kebutuhan tahap
pertama, file utama yang wajib dibuat hanya `index.html` dan
`script.js`.

### 9.3 Ketentuan Implementasi

-   Gunakan `<!doctype html>` dan atribut bahasa dokumen `lang="id"`.
-   Gunakan elemen semantik seperti `header`, `nav`, `main`, `section`,
    dan `footer` bila diperlukan.
-   Hubungkan `script.js` menggunakan atribut `defer`.
-   Pisahkan perilaku interaktif dari struktur HTML.
-   Gunakan Tailwind CSS melalui CDN resmi sesuai dokumentasi yang
    berlaku.
-   Gunakan JavaScript sederhana tanpa framework.
-   Hindari dependensi yang tidak diperlukan.
-   Tambahkan komentar HTML singkat pada awal setiap section agar mudah
    dipelajari.
-   Berikan nama class, ID, dan variabel yang deskriptif.
-   Pastikan tautan eksternal yang membuka tab baru menggunakan atribut
    keamanan yang sesuai.

### 9.4 Perilaku JavaScript

File `script.js` pada tahap pertama bertanggung jawab untuk: 1.
Mengambil elemen tombol hamburger dan navigasi seluler. 2. Mengubah
status buka/tutup menu. 3. Memperbarui atribut aksesibilitas seperti
`aria-expanded`. 4. Menutup menu setelah tautan navigasi dipilih. 5.
Menutup menu dengan tombol Escape bila menu sedang terbuka. 6. Menangani
kondisi ketika elemen terkait tidak ditemukan agar script tidak
menyebabkan error.

JavaScript tidak perlu mengelola konten statis yang dapat ditulis
langsung dalam HTML.

## 10. Responsivitas

Website harus beradaptasi dengan berbagai ukuran layar.

  -----------------------------------------------------------------------
  Rentang layar                       Perilaku yang diharapkan
  ----------------------------------- -----------------------------------
  Ponsel kecil (320--375 px)          Konten satu kolom, hamburger aktif,
                                      tidak ada scroll horizontal

  Ponsel besar (376--767 px)          Tata letak satu kolom dengan jarak
                                      yang nyaman

  Tablet (768--1023 px)               Grid fleksibel, navigasi
                                      menyesuaikan ruang

  Desktop (≥1024 px)                  Hero dua kolom, navigasi
                                      horizontal, konten terpusat
  -----------------------------------------------------------------------

Gunakan pendekatan *mobile-first* dan breakpoint Tailwind secara
konsisten.

## 11. Aksesibilitas

-   Seluruh gambar informatif memiliki teks alternatif.
-   Semua kontrol interaktif dapat diakses menggunakan keyboard.
-   Fokus keyboard terlihat jelas.
-   Tombol menggunakan elemen `button`, bukan elemen non-interaktif.
-   Tautan memiliki teks yang menjelaskan tujuannya.
-   Tombol hamburger memiliki nama aksesibel dan status yang dapat
    dibaca teknologi bantu.
-   Struktur heading berurutan dan tidak melompat tanpa alasan.
-   Warna bukan satu-satunya cara untuk menyampaikan informasi.
-   Hormati preferensi `prefers-reduced-motion` jika animasi digunakan.
-   Gunakan kontras warna yang memadai.

## 12. SEO dan Metadata Dasar

`index.html` perlu memuat: - Judul halaman yang menyebut nama dan
portofolio. - Meta description singkat dan relevan. - Meta viewport. -
Bahasa dokumen `id`. - Favicon sederhana (dapat ditambahkan pada iterasi
berikutnya). - Struktur heading dan landmark semantik.

Contoh: - **Title:** `Nama Lengkap | Web Developer & UI/UX Enthusiast` -
**Description:**
`Portofolio Nama Lengkap, mahasiswa Sistem Informasi yang tertarik pada web development dan UI/UX design.`

## 13. Kriteria Penerimaan (Acceptance Criteria)

Pekerjaan tahap pertama dinyatakan selesai apabila:

-   [ ] Tersedia file `index.html` dan `script.js`.
-   [ ] Halaman menggunakan HTML5 semantik.
-   [ ] Tailwind CSS dimuat melalui CDN resmi.
-   [ ] Google Fonts Plus Jakarta Sans dan Inter diterapkan sesuai
    peruntukannya.
-   [ ] Tema dark mode menggunakan slate-950, slate-900, dan slate-800.
-   [ ] Aksen emerald-400 dan cyan-400 digunakan secara konsisten.
-   [ ] Navbar berada di bagian atas saat halaman digulir.
-   [ ] Navigasi desktop menampilkan Tentang, Keahlian, Proyek, dan
    Kontak.
-   [ ] Tombol hamburger berfungsi pada layar kecil.
-   [ ] Status menu diumumkan melalui atribut ARIA yang sesuai.
-   [ ] Hero menampilkan sapaan, nama, peran, deskripsi maksimal dua
    kalimat, CTA, dan bingkai foto lingkaran.
-   [ ] About menampilkan latar belakang dan minat yang relevan.
-   [ ] Tech Stack menampilkan teknologi dengan label yang jelas.
-   [ ] Ikon Lucide berhasil dirender.
-   [ ] Setiap section memiliki komentar HTML singkat pada bagian
    awalnya.
-   [ ] Tidak ada tautan navigasi atau CTA yang mengarah ke tujuan yang
    tidak tersedia.
-   [ ] Tampilan diuji pada ponsel, tablet, dan desktop.
-   [ ] Tidak ada error JavaScript di console browser.
-   [ ] Website dapat dijalankan secara statis dan siap di-deploy ke
    GitHub Pages.

## 14. Rencana Pengerjaan

  -----------------------------------------------------------------------
  Tahap                   Aktivitas               Hasil
  ----------------------- ----------------------- -----------------------
  1                       Menyiapkan struktur     Kerangka `index.html`
                          HTML dan metadata       

  2                       Membangun navbar dan    Navbar desktop dan
                          navigasi responsif      mobile

  3                       Membangun hero section  Identitas utama dan CTA

  4                       Membangun About dan     Informasi profil dan
                          Tech Stack              kompetensi

  5                       Menambahkan JavaScript  `script.js` berfungsi
                          interaksi               

  6                       Pengujian aksesibilitas Halaman siap ditinjau
                          dan responsivitas       

  7                       Deployment ke GitHub    Website dapat diakses
                          Pages                   secara publik
  -----------------------------------------------------------------------

## 15. Risiko dan Mitigasi

  -----------------------------------------------------------------------
  Risiko                              Mitigasi
  ----------------------------------- -----------------------------------
  CDN atau Google Fonts gagal dimuat  Sediakan fallback font dan pastikan
                                      konten tetap dapat digunakan

  Foto profil belum tersedia          Gunakan placeholder dengan ukuran
                                      dan rasio tetap

  Menu mobile tidak aksesibel         Uji keyboard, atribut ARIA, dan
                                      tombol Escape

  Tautan Proyek/Kontak belum memiliki Gunakan placeholder atau
  section                             nonaktifkan tautan sampai tujuan
                                      tersedia

  Konten profil terlalu panjang       Batasi deskripsi hero maksimal dua
                                      kalimat dan prioritaskan informasi
                                      penting

  Tampilan berbeda antarukuran layar  Uji beberapa lebar viewport dan
                                      gunakan pendekatan mobile-first
  -----------------------------------------------------------------------

## 16. Konten yang Perlu Dilengkapi Pemilik

Sebelum publikasi, lengkapi: - Nama lengkap yang akan ditampilkan. -
Foto profil yang sesuai untuk portofolio profesional. - Deskripsi diri
final. - Daftar teknologi yang benar-benar pernah dipelajari atau
digunakan. - Tautan GitHub dan/atau profil profesional jika ingin
ditampilkan. - Konten proyek ketika section Proyek dikembangkan. -
Informasi kontak publik yang memang ingin dibagikan.

Jangan mencantumkan klaim keahlian, pengalaman, atau pencapaian yang
belum dapat dibuktikan.

## 17. Pengembangan Berikutnya

Setelah tahap pertama stabil, pengembangan dapat dilanjutkan dengan: 1.
Section Proyek berisi studi kasus, deskripsi, teknologi, dan tautan
demo/repository. 2. Section Kontak dengan tautan email dan media
profesional. 3. Detail pengalaman organisasi atau komunitas. 4.
Peningkatan SEO, Open Graph, dan favicon. 5. Optimasi performa, gambar,
dan audit aksesibilitas.

------------------------------------------------------------------------

**Catatan:** PRD ini menjadi acuan kebutuhan produk untuk tahap kerangka
awal. Detail konten personal dapat diperbarui tanpa mengubah keputusan
teknis utama selama masih sesuai dengan ruang lingkup proyek.
