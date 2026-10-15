# Tryout Academy — GitHub Pages

Demo interaktif CBT UTBK/SNBT, melanjutkan desain hijau tua dan kuning dari versi Google Apps Script. Tanpa instalasi npm atau proses build.

## Membuka
Buka `index.html` untuk mencoba. Untuk penggunaan stabil gunakan GitHub Pages atau server lokal (`python3 -m http.server 8000` dari folder ini), lalu buka http://localhost:8000.

- Siswa: `siswa.demo` / `DEMO`
- Admin: `admin` / `DEMO` atau tombol **Lihat demo admin**.

## Unggah ke GitHub Pages
1. Ekstrak ZIP ini.
2. Buat repository GitHub baru, misalnya `tryout-academy`. Repository publik paling sederhana untuk demo; seluruh source dan kunci contoh dapat dibaca publik.
3. Di repository pilih **Add file → Upload files**. Unggah isi folder ini sehingga `index.html` berada tepat di root repository, bukan di folder bersarang. Sertakan folder `assets`.
4. Commit perubahan ke branch `main`.
5. Buka **Settings → Pages**, pilih **Deploy from a branch**, branch `main` dan folder `/ (root)`, lalu **Save**.
6. Tunggu proses penerbitan selesai. Gunakan URL yang ditampilkan GitHub Pages, umumnya `https://USERNAME.github.io/tryout-academy/`.

Paket ini belum diunggah ke repository pengguna. Semua path aset relatif agar cocok untuk URL subfolder GitHub Pages. Folder `UI` berisi lima gambar tampilan dari desain sumber; gambar tersebut referensi desain, bukan screenshot baru hasil verifikasi versi ini.

## Fitur
- Login demo siswa/admin, dashboard, daftar tryout dan riwayat hasil.
- 12 soal contoh diagnostik lintas tujuh subtes, ditambah paket latihan matematika.
- Timer, navigasi soal, ragu-ragu, simpan jawaban, lanjutkan ujian.
- Skor persentase 0–100, ringkasan subtes, pembahasan dan cetak/PDF. Bukan skor IRT UTBK.
- Admin mengelola paket, bank soal, akun lokal, status aktif, kode demo dan ekspor hasil CSV.
- Tata letak responsif untuk desktop dan HP.
- Penyimpanan lokal tetap ada setelah reload. Setelah masuk kembali, pilih paket untuk melanjutkan ujian; deadline tidak direset.

## Batas penggunaan
Ini prototipe fungsional untuk presentasi dan latihan mandiri, bukan sistem ujian produksi. GitHub Pages menyajikan file statis. Akun, jawaban, kunci, dan hasil berada di localStorage browser, dapat diperiksa atau diubah pengunjung, tidak tersinkron antarperangkat, dan hilang bila data situs dihapus. Jangan gunakan kata sandi nyata, data pribadi siswa, atau soal rahasia. Penggantian peran dan pemeriksaan di JavaScript bukan pengamanan server.

Gunakan satu tab untuk mengerjakan demo. Timer bergantung jam perangkat. Jawaban terakhir yang sudah tersimpan sebelum deadline dihitung bila waktu habis. Percobaan selesai tidak dapat diulang pada paket yang sama tanpa menghapus data demo atau membuat paket baru.

Untuk pemakaian banyak siswa sungguhan diperlukan backend: autentikasi siswa/admin, database terpusat, kontrol akses server, waktu dan penilaian server. Frontend ini dapat dipakai sebagai dasar integrasinya; versi ini belum menyertakan backend tersebut.

## Struktur
- `index.html`: halaman masuk aplikasi.
- `assets/styles.css`: desain dan responsivitas.
- `assets/app.js`: halaman dan interaksi antarmuka.
- `assets/local-api.js`: data contoh dan penyimpanan lokal; tempat integrasi API berikutnya.
- `UI/`: lima gambar referensi desain asal.
- `.nojekyll`: menonaktifkan pemrosesan Jekyll jika ikut diunggah.

Nama produk dapat diganti dengan mencari `Tryout Academy` di `assets/app.js`. Warna utama ada pada variabel `:root` di `assets/styles.css`. Edit soal lewat panel admin untuk browser yang sedang digunakan; perubahan panel admin tidak mengubah source repository atau data pengunjung lain.

## Verifikasi
Lulus pemeriksaan sintaks JavaScript serta pengujian login, pemisahan menu peran, penghilangan kunci dari respons tampilan soal, simpan/reload, konflik revisi, skor, dan persistensi akun baru. Pemeriksaan UI browser untuk paket konversi belum dilakukan.
