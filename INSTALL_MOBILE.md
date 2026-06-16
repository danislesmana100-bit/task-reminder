# 📱 Cara Instalasi di HP

Aplikasi ini sekarang adalah **Progressive Web App (PWA)** yang bisa diinstall langsung di HP Anda seperti aplikasi native!

## 🚀 Instalasi di Android

### Opsi 1: Via Chrome Browser (Recommended)

1. **Buka Chrome di HP Anda**
2. **Ketik URL di address bar:**
   ```
   file:///sdcard/Download/index.html
   ```
   *(atau sesuaikan path ke folder Anda)*

3. **Tunggu hingga muncul tombol "Install"**
   - Biasanya muncul di bawah address bar atau di menu (⋮)
   - Ada notifikasi "Instalkan 'Pengingat Tugas'?"

4. **Klik tombol "Install"**
5. **Selesai!** Aplikasi akan ditambahkan ke home screen

### Opsi 2: Via Menu Chrome
1. Buka aplikasi di Chrome
2. Tekan tombol menu ⋮ (tiga garis)
3. Pilih **"Install app"** atau **"Instal aplikasi"**
4. Konfirmasi instalasi
5. Aplikasi siap di home screen

### Opsi 3: Copy File ke HP via USB
1. **Di Komputer:**
   - Copy semua file dari `d:\Projek\Aplikasi pengigat tugas`
   - Semua file: `index.html`, `style.css`, `script.js`, `manifest.json`, `service-worker.js`

2. **Di HP (via kabel USB):**
   - Hubungkan ke komputer
   - Copy ke folder `/Download` atau `/Documents`
   - Buka file manager
   - Buka file `index.html` dengan Chrome

---

## 🍎 Instalasi di iPhone/iPad

### Via Safari Browser

1. **Buka Safari di iPhone/iPad**
2. **Ketik URL atau buka file**
3. **Tap tombol Share** (bagian bawah tengah - kotak dengan panah ke atas)
4. **Scroll ke bawah dan pilih "Add to Home Screen"**
5. **Masukkan nama** (bisa biarkan default "Pengingat Tugas")
6. **Tap "Add"**
7. **Selesai!** Aplikasi ada di home screen seperti app native

---

## 📍 Uploading ke Server (Cloud)

Untuk cara yang lebih praktis, upload file ke hosting gratis:

### Opsi 1: GitHub Pages (Gratis)
1. Buat repository di GitHub
2. Upload semua file ke repository
3. Aktifkan GitHub Pages di settings
4. Buka di HP menggunakan URL GitHub Pages
5. Install dari browser

### Opsi 2: Netlify (Gratis)
1. Buka https://app.netlify.com
2. Drag & drop folder ke Netlify
3. Dapatkan URL publik
4. Buka di HP dan install

### Opsi 3: Vercel (Gratis)
1. Buka https://vercel.com
2. Import project atau upload file
3. Dapatkan live URL
4. Buka di HP dan install

---

## ✨ Fitur PWA

Setelah diinstall, aplikasi Anda memiliki:

✅ **Tampilan Fullscreen** - Seperti aplikasi native, tanpa address bar  
✅ **Icon di Home Screen** - Mudah diakses  
✅ **Offline Support** - Tetap bisa digunakan tanpa internet  
✅ **Loading Cepat** - Data di-cache secara otomatis  
✅ **Notifikasi** - Bisa menerima notifikasi dari sistem  
✅ **Shortcut** - Akses cepat dari home screen  

---

## 🔧 Troubleshooting

### Tombol "Install" tidak muncul?
- ✅ Pastikan menggunakan browser terbaru (Chrome, Firefox, Edge)
- ✅ Coba refresh halaman (pull down atau F5)
- ✅ Cek apakah file `manifest.json` sudah ada
- ✅ Buka di tab baru

### Aplikasi tidak bisa offline?
- ✅ Service Worker mungkin tidak terdaftar
- ✅ Cek console (F12 → Console)
- ✅ Coba bersihkan cache browser

### Data hilang setelah install?
- ✅ Data disimpan di localStorage browser
- ✅ Jangan hapus cache aplikasi
- ✅ Data terpisah per browser

---

## 📲 Cara Membuka Setelah Install

1. **Cari icon "Pengingat Tugas"** di home screen
2. **Tap icon** untuk membuka
3. Aplikasi akan terbuka dalam mode fullscreen
4. Gunakan seperti aplikasi native biasa

---

## 🗑️ Cara Uninstall

### Android:
1. Long press icon aplikasi di home screen
2. Tap "Remove" atau "Uninstall"

### iPhone:
1. Long press icon aplikasi
2. Tap "Remove App"
3. Tap "Remove from Home Screen"

---

## 💡 Tips

- **Bookmark URL** jika belum bisa install (untuk akses cepat)
- **Aktifkan notifikasi** untuk reminder (fitur premium di masa depan)
- **Sinkronkan ke cloud** jika menggunakan multiple device
- **Update file secara berkala** jika ada versi baru

---

## 📞 Support

Jika ada masalah:
1. Bersihkan cache browser
2. Uninstall dan install ulang
3. Coba browser lain
4. Hubungi developer

---

**Selamat menggunakan Aplikasi Pengingat Tugas di HP Anda! 🎉**
