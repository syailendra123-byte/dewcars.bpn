# dewcars.bpn
Driven by Trust, Defined by Quality

## Design System
<details><summary><b>Klik disini untuk melihat Panduan Desain</b></summary>
# Sistem Desain dari Dewcarsbpn

## 1. Tema Visual & Suasana

DEWCARS BPN mewujudkan kemewahan dan kepercayaan melalui estetika gelap yang canggih dipadukan dengan aksen emas yang hangat. Desain ini membangkitkan nuansa ritel otomotif premium dengan sensibilitas minimalis kelas atas. Latar belakang abu-abu arang pekat (*deep charcoal*) dan hitam pekat menciptakan kontras dengan tipografi serif dan sans-serif yang halus, sementara emas khas (`#C5A059`) menghadirkan kehangatan dan aspirasi. Suasana keseluruhannya profesional, dapat dipercaya, dan modern—dirancang untuk menyampaikan kualitas dan perhatian terhadap detail di pasar kendaraan bekas. Ruang putih (*whitespace*) yang luas, penggunaan warna yang dibatasi, dan tipografi yang disengaja menciptakan kehadiran digital yang mudah didekati namun mewah.

**Karakteristik Utama**
- Estetika yang mengutamakan warna gelap dengan warna netral pekat (`#0D0D0D`, `#121212`) sebagai permukaan utama
- Emas hangat (`#C5A059`) sebagai aksen dominan yang menyampaikan kualitas premium
- Kontras tinggi antara latar belakang gelap dan teks terang untuk keterbacaan
- Headline serif yang elegan dipadukan dengan teks isi (*body text*) sans-serif yang bersih
- Desain komponen minimalis dengan batas (*border*) halus dan tanpa bayangan (*shadow*) tebal
- Penggunaan ruang putih yang strategis untuk menekankan fokus produk dan kepercayaan
- Elemen tombol membulat (*rounded*) dengan latar belakang gelap transparan
- Aksen batas halus menggunakan warna emas dengan opasitas rendah (`rgba(197, 160, 89, 0.4)` dan `rgba(197, 160, 89, 0.12)`)

## 2. Palet Warna & Peran

### Utama
- **Aksen Emas** (`#C5A059`): Warna elemen interaktif utama, penekanan ajakan bertindak (CTA), sorotan merek yang digunakan di seluruh tombol, tautan, dan elemen dekoratif (178 instans)

### Warna Aksen
- **Sukses / Positif** (`#2ECC71`): Indikator status untuk transaksi yang diselesaikan, konfirmasi positif, atau status yang disetujui (21 instans)
- **Netral Sekunder** (`#95A5A6`): Teks sekunder yang diredupkan, status dinonaktifkan (*disabled states*), dan hierarki informasi tersier (9 instans)

### Interaktif
- **Tombol Utama** (`#C5A059`): Warna teks untuk elemen interaktif dan CTA
- **Latar Belakang Tombol** (`#0D0D0D`): Permukaan tombol gelap dengan teks `#C5A059` dan batas `rgba(197, 160, 89, 0.4)`
- **Hover/Aktif Tombol** (`rgba(197, 160, 89, 0.5)`): Opasitas batas yang ditingkatkan pada status interaktif

### Skala Netral
- **Teks Utama** (`#FFFFFF`): Teks isi utama, judul, dan konten latar depan (*foreground*) dengan kontras tinggi (610 instans)
- **Teks Sekunder** (`#8A8A8A`): Teks sekunder, metadata, dan konten dengan penekanan yang dikurangi (32 instans)
- **Teks Tersier** (`#7F8C8D`): Label tersier, keterangan, dan informasi yang diredam (18 instans)
- **Teks Dinonaktifkan** (`#A0A0A0`): Bidang formulir yang dinonaktifkan dan elemen tidak aktif (4 instans)

### Permukaan & Batas
- **Latar Belakang Utama** (`#0D0D0D`): Latar belakang kartu dan wadah (*container*) utama (35 instans)
- **Latar Belakang Sekunder** (`#121212`): Permukaan alternatif untuk konten berlapis dan elemen bersarang (*nested*) (16 instans)
- **Latar Belakang Tersier** (`#000000`): Hitam pekat untuk bagian *hero* dan area dengan kontras maksimum (35 instans)
- **Pembatas (Border Divider)** (`#E0E0E0`): Pembatas abu-abu muda dan garis pemisah halus (32 instans)

## 3. Aturan Tipografi

### Keluarga Font

**Font Utama: Montserrat** (sans-serif)
`font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;`
Digunakan untuk judul, tombol, teks isi, dan navigasi. Bersih, modern, dan sangat mudah dibaca.

**Font Sekunder: Cormorant Garamond** (serif)
`font-family: 'Cormorant Garamond', 'Garamond', 'Georgia', serif;`
Digunakan untuk aksen judul utama (*hero*) dan konten editorial. Menyampaikan kemewahan dan kecanggihan.

**Font Cadangan: Arial** (sans-serif)
`font-family: 'Arial', sans-serif;`
Digunakan untuk tombol ikon dan tampilan numerik.

### Hierarki

| Peran | Font | Ukuran | Ketebalan | Tinggi Baris | Jarak Huruf | Catatan |
|------|------|------|--------|-------------|----------------|-------|
| Tampilan / H1 | Montserrat | 32px | 700 | normal | 0px | Headline utama dan judul halaman |
| Judul / H2 | Montserrat | 24px | 700 | normal | 0px | Judul bagian dan sub-bagian besar |
| Subjudul / H3 | Cormorant Garamond | 32px | 400 | normal | 0px | Judul aksen premium dan judul fitur |
| Isi / Paragraf | Montserrat | 15.2px | 300 | normal | 0px | Teks isi utama dan deskripsi |
| Teks Tombol | Montserrat | 12.8px | 500 | normal | 0px | Label tombol standar dan tautan |
| Tombol Besar | Arial | 19.2px | 400 | normal | 0px | Tombol ikon dan elemen interaktif besar |
| Tautan / Sekunder | Montserrat | 12.8px | 500 | normal | 0px | Tautan navigasi dan tindakan sebaris |
| Keterangan / Metadata | Montserrat | 12px | 500 | normal | 0px | Label, lencana, dan teks tambahan |

### Prinsip-prinsip

- **Kontras Diutamakan**: Tipografi bergantung pada kontras ketebalan dan ukuran daripada variasi warna. Teks utama selalu `#FFFFFF` pada latar belakang gelap.
- **Hierarki Melalui Ketebalan**: Gunakan `weight: 700` untuk judul utama, `weight: 500` untuk elemen interaktif, `weight: 300` untuk konten isi.
- **Disiplin Ukuran**: Ikuti nilai piksel yang ditentukan dengan ketat untuk penskalaan yang konsisten di semua perangkat.
- **Serif untuk Kemewahan**: Cadangkan Cormorant Garamond untuk judul *hero* dan konten premium guna memperkuat penempatan merek.
- **Konsistensi Tinggi Baris**: Semua tipografi menggunakan `line-height: normal` untuk mempertahankan jarak yang rapat dan terkontrol.
- **Keterbacaan di Atas Dekorasi**: Montserrat yang sans-serif mendominasi isi dan teks UI untuk kejelasan dan aksesibilitas modern.

## 4. Gaya Komponen

### Tombol

#### Tombol Persegi Panjang Utama
- **Latar Belakang**: `#0D0D0D`
- **Warna Teks**: `#FFFFFF`
- **Batas (Border)**: `1px solid rgba(197, 160, 89, 0.4)`
- **Padding**: `10px 20px`
- **Tinggi**: `37px`
- **Lebar**: `193.5px`
- **Ukuran Font**: `12.8px`
- **Ketebalan Font**: `500`
- **Keluarga Font**: Montserrat
- **Radius Batas**: `4px`
- **Bayangan Kotak (Box Shadow)**: `none`
- **Status Hover**: Opasitas batas meningkat menjadi `rgba(197, 160, 89, 0.6)`, latar belakang lebih terang menjadi `#1A1A1A`
- **Status Aktif**: Latar belakang menjadi `#2A2A2A`, batas menjadi `rgba(197, 160, 89, 0.8)`

#### Tombol Lebar Penuh Utama
- **Latar Belakang**: `#0D0D0D`
- **Warna Teks**: `#FFFFFF`
- **Batas**: `1px solid rgba(197, 160, 89, 0.4)`
- **Padding**: `14px 20px`
- **Tinggi**: `auto`
- **Lebar**: `100%`
- **Ukuran Font**: `13.6px`
- **Ketebalan Font**: `500`
- **Keluarga Font**: Montserrat
- **Radius Batas**: `4px`
- **Bayangan Kotak**: `none`
- **Status Hover**: Opasitas batas meningkat menjadi `rgba(197, 160, 89, 0.6)`, latar belakang menjadi `#1A1A1A`
- **Status Dinonaktifkan**: Batas menjadi `rgba(197, 160, 89, 0.2)`, teks menjadi `#7F8C8D`

#### Tombol Ikon (Melingkar)
- **Latar Belakang**: `rgba(0, 0, 0, 0.6)`
- **Warna Teks**: `#C5A059`
- **Batas**: `1px solid rgba(197, 160, 89, 0.5)`
- **Padding**: `0px`
- **Tinggi**: `40px`
- **Lebar**: `40px`
- **Ukuran Font**: `19.2px`
- **Ketebalan Font**: `400`
- **Keluarga Font**: Arial
- **Radius Batas**: `50%`
- **Bayangan Kotak**: `none`
- **Status Hover**: Latar belakang menjadi `rgba(197, 160, 89, 0.15)`, batas menjadi `rgba(197, 160, 89, 0.8)`
- **Status Aktif**: Batas menjadi `#C5A059`, latar belakang menjadi `rgba(197, 160, 89, 0.2)`

### Kartu & Wadah

#### Kartu Konten Premium
- **Latar Belakang**: `#0D0D0D`
- **Warna Teks**: `#FFFFFF`
- **Batas**: `1px solid rgba(197, 160, 89, 0.12)`
- **Padding**: `30px`
- **Radius Batas**: `4px`
- **Bayangan Kotak**: `none`
- **Lebar Minimal**: `300px`
- **Keluarga Font**: Montserrat
- **Ketebalan Font**: `400`
- **Ukuran Font**: `16px`
- **Status Hover**: Opasitas batas menjadi `rgba(197, 160, 89, 0.24)`

#### Kartu Konten Minimal
- **Latar Belakang**: `transparent`
- **Warna Teks**: `#FFFFFF`
- **Batas**: `none`
- **Padding**: `0px`
- **Radius Batas**: `0px`
- **Bayangan Kotak**: `none`
- **Keluarga Font**: Montserrat
- **Ketebalan Font**: `400`
- **Ukuran Font**: `16px`

#### Wadah Permukaan Gelap
- **Latar Belakang**: `#121212`
- **Warna Teks**: `#FFFFFF`
- **Batas**: `1px solid rgba(197, 160, 89, 0.12)`
- **Padding**: `24px 32px`
- **Radius Batas**: `4px`
- **Bayangan Kotak**: `none`
- **Digunakan Untuk**: Bagian formulir, blok fitur, konten yang dikelompokkan

### Input & Formulir

#### Input Teks
- **Latar Belakang**: `#0D0D0D`
- **Warna Teks**: `#FFFFFF`
- **Batas**: `1px solid rgba(197, 160, 89, 0.4)`
- **Padding**: `12px 16px`
- **Tinggi**: `40px`
- **Radius Batas**: `4px`
- **Keluarga Font**: Montserrat
- **Ukuran Font**: `14px`
- **Ketebalan Font**: `400`
- **Status Fokus**: Batas menjadi `#C5A059`, bayangan kotak menjadi `inset 0 0 0 1px rgba(197, 160, 89, 0.6)`
- **Teks Pengganti (Placeholder)**: `#8A8A8A`, `font-weight: 300`

#### Label Formulir
- **Warna**: `#FFFFFF`
- **Keluarga Font**: Montserrat
- **Ukuran Font**: `14px`
- **Ketebalan Font**: `500`
- **Margin Bawah**: `8px`

#### Pesan Kesalahan Formulir
- **Warna**: `#E74C3C`
- **Keluarga Font**: Montserrat
- **Ukuran Font**: `12px`
- **Ketebalan Font**: `400`
- **Margin Atas**: `4px`

### Navigasi

#### Bilah Navigasi Utama
- **Latar Belakang**: `#000000`
- **Tinggi**: `60px`
- **Batas Bawah**: `1px solid rgba(197, 160, 89, 0.12)`
- **Bayangan Kotak**: `rgba(0, 0, 0, 0.5) 0px 2.86944px 21.5208px 0px`
- **Padding**: `0px 24px`
- **Display**: `flex`
- **Align Items**: `center`
- **Justify Content**: `space-between`

#### Tautan Navigasi
- **Warna**: `#FFFFFF`
- **Keluarga Font**: Montserrat
- **Ukuran Font**: `12.8px`
- **Ketebalan Font**: `500`
- **Padding**: `0px 16px`
- **Status Hover**: Warna menjadi `#C5A059`
- **Status Aktif**: Batas bawah menjadi `2px solid #C5A059`

#### Logo / Merek
- **Keluarga Font**: Montserrat
- **Ukuran Font**: `24px`
- **Ketebalan Font**: `700`
- **Warna**: `#FFFFFF`
- **Jarak Huruf (Letter Spacing)**: `2px`

### Lencana (Badges)

#### Lencana Status
- **Latar Belakang**: `rgba(197, 160, 89, 0.15)`
- **Warna Teks**: `#C5A059`
- **Batas**: `1px solid rgba(197, 160, 89, 0.4)`
- **Padding**: `4px 12px`
- **Radius Batas**: `2px`
- **Ukuran Font**: `12px`
- **Ketebalan Font**: `500`
- **Keluarga Font**: Montserrat

#### Lencana Sukses
- **Latar Belakang**: `rgba(46, 204, 113, 0.15)`
- **Warna Teks**: `#2ECC71`
- **Batas**: `1px solid rgba(46, 204, 113, 0.4)`
- **Padding**: `4px 12px`
- **Radius Batas**: `2px`
- **Ukuran Font**: `12px`
- **Ketebalan Font**: `500`
- **Keluarga Font**: Montserrat

## 5. Prinsip Tata Letak

### Sistem Jarak (*Spacing*)

**Unit Dasar**: `8px`

**Skala**:
- `8px` — Celah kecil, jarak elemen sebaris
- `16px` — Margin bagian, jarak antar komponen
- `20px` — Padding sedang, padding tombol
- `24px` — Padding wadah standar, pembatas bagian
- `28px` — Margin besar untuk pemisahan konten
- `32px` — Padding kartu, jarak bagian utama
- `40px` — Padding besar untuk bagian *hero* dan fitur
- `60px` — Celah besar antar blok konten utama
- `72px` — Margin bagian ekstra besar
- `80px` — Padding vertikal bagian *hero*
- `96px` — Margin atas/bawah halaman
- `104px` — Jarak maksimum antar bagian utama

**Konteks Penggunaan**:
- Jarak teks sebaris: `8px`
- Padding komponen: `20px–32px`
- Margin kartu: `16px–24px`
- Celah antar bagian: `40px–80px`
- Margin halaman: `24px` (seluler), `40px` (tablet), `60px` (desktop)

### Grid & Wadah

**Lebar Maksimal**: `1200px` untuk wadah konten utama

**Strategi Kolom**:
- Seluler: `1 kolom`, `lebar 100%` dengan padding horizontal `24px`
- Tablet: `2 kolom`, masing-masing mengambil `calc(50% - 12px)` dengan celah `16px`
- Desktop: `3–4 kolom`, grid fleksibel dengan celah `20px`

**Pola Wadah**:
- Bagian latar belakang gelap lebar penuh: `width: 100%`, `background: #0D0D0D` atau `#121212`
- Bagian konten yang dibatasi: `max-width: 1200px`, `margin: 0 auto`, `padding: 40px 24px`
- Bagian *hero*: `height: auto`, `min-height: 500px`, `padding: 80px 24px`, `display: flex`, `align-items: center`

### Filosofi Ruang Putih

DEWCARS BPN memprioritaskan kelapangan dan ruang bernapas. Latar belakang gelap memungkinkan ruang putih yang luas tanpa terasa kosong. Bagian-bagian dipisahkan oleh celah vertikal yang substansial (minimum `60px–80px`) untuk menciptakan hierarki visual yang jelas. Padding horizontal secara konsisten meningkat dari seluler (`24px`) ke desktop (`60px`) untuk mencegah penumpukan konten. Kartu dan wadah menggunakan padding internal `30px–32px` untuk memastikan konten tidak terasa sempit. Penggunaan ruang kosong yang disengaja ini memperkuat pemosisian premium tingkat atas dan mengurangi beban kognitif.

### Skala Radius Batas

- **Elemen Tajam**: `0px` — Pembatas, bagian latar belakang, komponen minimalis
- **Membulat Halus**: `2px` — Lencana dan elemen aksen kecil
- **Membulat Standar**: `4px` — Tombol, bidang input, kartu, sudut wadah
- **Membulat Penuh**: `50%` — Tombol ikon melingkar dan wadah avatar

## 6. Kedalaman & Elevasi

| Tingkat | Perlakuan | Penggunaan |
|-------|-----------|-----|
| Datar (0) | `box-shadow: none`; `background: warna solid` | Kartu, tombol, permukaan utama |
| Terangkat (1) | `box-shadow: rgba(0, 0, 0, 0.5) 0px 2.86944px 21.5208px 0px` | Bilah navigasi, status *hover* pada kartu, modal |
| Tenggelam (−1) | `box-shadow: inset 0 0 0 1px rgba(197, 160, 89, 0.4)` | Bidang input aktif, elemen formulir yang difokuskan |
| Hover Interaktif (2) | `box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 24px 0px` | Kartu interaktif saat di-*hover*, menu *dropdown* |

**Filosofi Bayangan**:
Sistem desain ini menggunakan bayangan minimal untuk mempertahankan estetika yang bersih dan modern. Daripada penumpukan kedalaman tradisional, penekanan diciptakan melalui perlakuan batas dan kontras warna. Bayangan utama tunggal (`rgba(0, 0, 0, 0.5) 0px 2.86944px 21.5208px 0px`) dicadangkan untuk bilah navigasi dan *overlay* interaktif utama. Status *hover* disampaikan melalui perubahan opasitas batas dan pergeseran warna latar belakang alih-alih intensifikasi bayangan. Pengekangan ini menjaga antarmuka tetap halus dan mencegah kekacauan visual pada latar belakang gelap.

## 7. Yang Boleh dan Tidak Boleh Dilakukan (*Do's and Don'ts*)

### Lakukan (*Do*)

- **Selalu gunakan `#FFFFFF` untuk teks utama** pada latar belakang gelap untuk mempertahankan standar kontras dan keterbacaan yang telah ditetapkan.
- **Terapkan aksen emas (`#C5A059`) secara strategis** untuk CTA utama, batas, dan elemen interaktif—jangan pernah menggunakannya untuk teks isi.
- **Pertahankan radius batas `4px`** pada tombol, input, dan kartu untuk konsistensi visual di seluruh antarmuka.
- **Gunakan Montserrat (`font-weight: 500`) untuk semua label interaktif** (tombol, tautan) guna memastikan elemen tersebut menonjol dari teks isi.
- **Pertahankan filosofi latar belakang gelap**: Gunakan `#0D0D0D` atau `#121212` sebagai permukaan utama, dan cadangkan `#000000` untuk bagian *hero* dan kontras maksimum.
- **Sertakan batas emas yang halus** (`rgba(197, 160, 89, 0.12)–0.4`) pada kartu dan wadah untuk mengaitkannya dengan palet merek.
- **Manfaatkan ruang putih dengan lapang**: Pertahankan celah `60px–80px` di antara bagian-bagian utama dan padding `32px` di dalam kartu.
- **Terapkan `border-radius: 50%` secara eksklusif ke tombol ikon** untuk menciptakan bentuk melingkar yang berbeda guna navigasi dan kontrol.
- **Gunakan varian tombol lebar penuh** untuk formulir dan tindakan penting seluler; cadangkan tombol lebar tetap untuk tindakan sekunder.
- **Terapkan status fokus pada input formulir** dengan bayangan kotak `inset` dan perubahan warna batas menjadi `#C5A059`.

### Jangan (*Don't*)

- **Jangan gunakan teks putih pada latar belakang terang** atau latar belakang apa pun yang lebih terang dari `#4A4A4A`—pertahankan rasio kontras minimum 4.5:1.
- **Jangan terapkan aksen emas pada teks paragraf** atau konten isi yang besar; cadangkan hanya untuk elemen interaktif dan sorotan strategis.
- **Jangan gunakan sudut tajam (`border-radius: 0px`)** pada komponen interaktif; terapkan pembulatan `4px` ke semua tombol, input, dan kartu.
- **Jangan terapkan beberapa bayangan berlapis** atau menggunakan bayangan kotak untuk pelapisan kedalaman di luar tingkat elevasi yang ditentukan.
- **Jangan mencampur font serif dan sans-serif dalam judul yang sama**; gunakan Cormorant Garamond untuk aksen editorial atau Montserrat untuk UI, jangan pernah menggunakan keduanya bersamaan.
- **Jangan melebihi lebar maksimum `1200px`** pada wadah konten utama, bahkan pada layar ultra-lebar (*ultra-wide*).
- **Jangan kurangi padding di bawah `20px`** pada tombol atau di bawah `24px` pada wadah kartu; pertahankan ruang bernapas di semua komponen.
- **Jangan gunakan warna latar belakang yang lebih terang dari `#0D0D0D`** untuk permukaan kartu utama; pertahankan estetika yang mengutamakan warna gelap.
- **Jangan menonaktifkan input formulir dengan mengurangi opasitas**; gunakan perubahan batas dan warna teks (batas: `rgba(197, 160, 89, 0.2)`, warna: `#7F8C8D`).
- **Jangan membuat varian warna kustom**; batasi palet pada 11 warna yang diekstrak untuk menjaga konsistensi merek dan koherensi visual.

## 8. Perilaku Responsif

### Titik Putus (*Breakpoints*)

| Nama Breakpoint | Lebar | Perubahan Utama |
|---|---|---|
| Seluler | 320px–767px | Tata letak satu kolom, padding `24px`, tombol lebar penuh, `h1: 24px`, `h2: 18px`, tombol ikon `32px` |
| Tablet | 768px–1023px | Grid dua kolom, padding `32px`, tombol lebar `100%` di formulir, `h1: 28px`, `h2: 20px`, celah kartu `16px` |
| Desktop | 1024px+ | Grid tiga hingga empat kolom, padding `40px–60px`, wadah lebar maksimum `1200px`, `h1: 32px`, `h2: 24px`, tombol berdampingan diizinkan |

### Target Sentuh

- **Tinggi tombol minimum**: `40px` (tombol ikon)
- **Lebar tombol minimum**: `40px` (tombol ikon)
- **Target ketuk minimum**: `48px × 48px` (minimum praktis; gunakan padding untuk memperluas jika ukuran visual lebih kecil)
- **Padding tombol teks/tautan**: `10px–14px` untuk memastikan jarak yang memadai di sekitar teks interaktif
- **Tinggi input formulir**: minimum `40px`
- **Jarak item navigasi**: padding horizontal `16px` untuk mencegah ketukan tidak sengaja

### Strategi Pelipatan (*Collapsing*)

- **Seluler**: Tumpuk semua tata letak multi-kolom secara vertikal. Ubah tombol berdampingan menjadi tombol bertumpuk lebar penuh. Sembunyikan elemen UI yang tidak penting dan pindahkan ke menu *hamburger*. Kurangi semua ukuran judul sebesar 4–8px. Kurangi padding horizontal dari `40px` menjadi `24px`.
- **Tablet**: Gunakan grid dua kolom yang fleksibel. Gabungkan tombol dalam susunan horizontal terbatas hanya ketika ruang memungkinkan (lebar `> 600px`). Jaga padding kartu pada `24px`. Mulai perkenalkan judul yang lebih besar (`h1: 28px`).
- **Desktop**: Buka tata letak penuh tiga hingga empat kolom. Izinkan susunan tombol berdampingan. Tingkatkan lebar maksimum wadah menjadi `1200px`. Tingkatkan padding dan margin sebesar `20–40%` untuk memanfaatkan ruang layar ekstra. Pertahankan semua ukuran judul sesuai spesifikasi.

**Penyesuaian Tipografi Responsif**:
- Seluler `h1`: `24px` → Tablet `h1`: `28px` → Desktop `h1`: `32px`
- Seluler `h2`: `18px` → Tablet `h2`: `20px` → Desktop `h2`: `24px`
- Teks isi tetap `15.2px` di semua *breakpoint* untuk konsistensi
- Teks tombol tetap `12.8px` di semua *breakpoint* kecuali di dalam tombol ikon

## 9. Panduan Prompt Agen

### Referensi Warna Cepat

Gunakan pemetaan ini saat membuat komponen:

- **CTA / Sorotan Utama**: Emas (`#C5A059`) — tombol, status aktif, aksen merek
- **Latar Belakang Tombol**: Hitam Pekat (`#0D0D0D`) dengan batas emas `rgba(197, 160, 89, 0.4)`
- **Latar Belakang Kartu**: Arang Gelap (`#0D0D0D`) dengan batas emas halus `rgba(197, 160, 89, 0.12)`
- **Permukaan Alternatif**: Hitam Jet (`#121212`) untuk wadah sekunder atau bersarang
- **Teks Utama**: Putih (`#FFFFFF`) — semua konten utama pada latar belakang gelap
- **Teks Sekunder**: Abu-abu Sedang (`#8A8A8A`) — metadata dan penekanan yang dikurangi
- **Teks Tersier**: Abu-abu Gelap (`#7F8C8D`) — keterangan dan informasi yang diredam
- **Sukses / Positif**: Zamrud (`#2ECC71`) — konfirmasi dan status positif
- **Pembatas (Border Divider)**: Abu-abu Muda (`#E0E0E0`) — pemisah bagian yang halus
- **Latar Belakang Kontras Maksimal**: Hitam Murni (`#000000`) — bagian *hero* dan *overlay* lebar penuh
- **Interaktif Dinonaktifkan**: `#A0A0A0` — bidang formulir yang dinonaktifkan dan elemen tidak aktif

### Panduan Iterasi

Ikuti 10 aturan ini untuk mengimplementasikan komponen antarmuka DEWCARS BPN dengan benar:

1. **Semua elemen interaktif harus menggunakan `border-radius: 4px`** kecuali secara spesifik berupa tombol ikon melingkar (`border-radius: 50%`, `width: 40px`, `height: 40px`).

2. **Warna teks pada latar belakang gelap selalu `#FFFFFF`**; jangan pernah menggunakan warna terang lainnya. Gunakan warna semantik hanya untuk aksen dan batas.

3. **Tombol utama selalu memiliki pola**: `background: #0D0D0D`, `color: #FFFFFF`, `border: 1px solid rgba(197, 160, 89, 0.4)`, `padding: 10px 20px` atau `14px 20px` untuk lebar penuh.

4. **Wadah kartu menggunakan `#0D0D0D`** dengan `padding: 30px`, `border: 1px solid rgba(197, 160, 89, 0.12)`, dan `border-radius: 4px`. Saat di-*hover*, tingkatkan opasitas batas menjadi `0.24`.

5. **Hierarki font ditegakkan melalui ketebalan dan ukuran**: Judul menggunakan Montserrat `700`, isi menggunakan Montserrat `300`, interaktif menggunakan Montserrat `500`. Jangan pernah menyimpang untuk mencapai hierarki hanya melalui warna.

6. **Semua nilai padding dan margin harus menggunakan skala jarak**: `8px`, `16px`, `20px`, `24px`, `28px`, `32px`, `40px`, `60px`, `72px`, `80px`, `96px`, `104px`. Dilarang menggunakan nilai sembarangan.

7. **Bagian-bagian harus memiliki celah vertikal `60px–80px`** untuk menjaga ruang bernapas dan pemosisian premium. Jangan pernah mengurangi celah bagian di bawah `40px`.

8. **Lebar wadah maksimum adalah `1200px`** untuk semua tata letak yang dibatasi. Gunakan `margin: 0 auto` dan `padding: 0 24px–60px` berdasarkan *breakpoint*.

9. **Status *hover* dan aktif dikelola melalui opasitas batas dan pergeseran warna latar belakang**, bukan intensifikasi bayangan. Misalnya: tombol *hover* = latar belakang `#1A1A1A` + batas `rgba(197, 160, 89, 0.6)`.

10. **Aksen emas (`#C5A059`) hanya muncul dalam konteks tertentu**: batas dan teks tombol, batas kartu, indikator navigasi aktif, dan CTA. Jangan pernah digunakan untuk salinan isi (*body copy*) atau sebagai warna sorotan umum. Cadangkan warna hijau (`#2ECC71`) secara eksklusif untuk status sukses/positif.
</details>

## Live Web
https://dewcarsbpn.vercel.app

## Jangan Diunduh
Ini web untuk digunakan pribadi. Jadi jangan diunduh....

© 2026 dewcars.bpn. All Rights Reserved.
