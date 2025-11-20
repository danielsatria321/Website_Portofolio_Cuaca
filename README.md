# Sistem Informasi Bencana Banjir - Siaga Banjir

Website informatif dan interaktif yang menyajikan informasi lengkap tentang bencana banjir di Indonesia, dilengkapi dengan fitur cek cuaca real-time dan sistem pelaporan untuk meningkatkan kesiapsiagaan masyarakat terhadap bencana banjir.

## Deskripsi Proyek

Website ini dirancang sebagai portal informasi lengkap mengenai bencana banjir, mencakup edukasi, statistik, mitigasi, dan tools praktis untuk membantu masyarakat dalam mengantisipasi dan menghadapi bencana banjir. Proyek ini dikembangkan dengan HTML5, CSS3, dan JavaScript vanilla untuk memberikan pengalaman pengguna.

## Fitur Utama

### Hero Section

- **Animated Typing Text**: Animasi teks dinamis dengan Typed.js menampilkan kata-kata kunci seperti "Banjir", "Lingkungan", "Bencana"
- **Live Counter Statistics**: Menampilkan 3 statistik :
  - Total Banjir 2024: 1000 kejadian
  - Korban Meninggal: 2578 jiwa
  - Korban Luka: 5600 jiwa
- **Scroll Reveal Animation**: Animasi smooth saat user melakukan scroll
- **Responsive Avatar Image**: Gambar avatar dengan efek floating animation

### Section Edukasi

#### 1. Mengenal Banjir

Dua card informasi yang menjelaskan:

- **Apa itu Banjir?**: Definisi dan fenomena banjir secara ilmiah
- **Mengapa Banjir Terjadi?**: Penyebab-penyebab utama bencana banjir seperti curah hujan tinggi, penyumbatan drainase, penggundulan hutan, dan perubahan iklim

#### 2. Dampak Banjir

Grid 6 card interaktif dengan icon Font Awesome yang menjelaskan dampak banjir:

- Kerusakan Infrastruktur
- Kerugian Ekonomi
- Pencemaran Lingkungan
- Gangguan Kesehatan
- Kehilangan Aset
- Kerusakan Habitat Hewan

Setiap card dilengkapi dengan hover effect yang menarik (gradient overlay animation).

#### 3. Mitigasi Banjir

Grid 3 card dengan gradient warna ungu-pink yang menampilkan solusi:

- Pembangunan Drainase
- Reboisasi
- Edukasi dan Penyuluhan

### Cek Cuaca Real-Time

Fitur unggulan yang terintegrasi dengan **OpenWeatherMap API**:

#### Informasi Cuaca Lengkap:

- **Search Form**: Input kota dengan icon pencarian
- **Location Display**: Nama kota dengan bendera negara dari flagsapi.com
- **Weather Icon**: Icon cuaca dinamis dari OpenWeatherMap
- **Temperature**: Suhu dalam Celsius dengan tampilan besar
- **Weather Description**: Deskripsi kondisi cuaca

#### Data Cuaca Utama (3 Grid):

- **Clouds**: Persentase awan
- **Humidity**: Kelembaban udara
- **Pressure**: Tekanan udara (hPa)

#### Detail Cuaca Tambahan (6 Item):

- **Kecepatan Angin**: dalam m/s
- **Visibilitas**: dalam km
- **Suhu Terasa**: feels like temperature
- **Suhu Maksimum**: temp max hari ini
- **Suhu Minimum**: temp min hari ini
- **Koordinat**: latitude dan longitude lokasi

### Form Aduan Banjir

Formulir terintegrasi dengan Google Forms untuk:

- Melaporkan kejadian banjir
- Memberikan saran dan masukan
- Input: Nama, Email, Message
- Auto-redirect dengan notifikasi sukses setelah submit

### Fitur Download

Tombol download di navigation untuk mengunduh **Peta Banjir** dalam format digital dari Google Drive.

## Teknologi & Library

### Frontend

- **HTML5**: Struktur semantic dan modern
- **CSS3**:
  - Custom Properties (CSS Variables)
  - Flexbox & Grid Layout
  - CSS Animations & Transitions
  - Media Queries untuk responsive design
- **JavaScript (Vanilla)**:
  - DOM Manipulation
  - Event Handling
  - Async/Await untuk API calls

### Library & Framework

- **[Typed.js](https://github.com/mattboldt/typed.js/)**: Animasi typing text
- **[ScrollReveal](https://scrollrevealjs.org/)**: Animasi scroll
- **[Font Awesome 6.7.1](https://fontawesome.com/)**: Icon library
- **[Unicons](https://iconscout.com/unicons)**: Icon tambahan
- **[Leaflet.js](https://leafletjs.com/)**: Persiapan untuk integrasi peta interaktif
- **[Google Fonts - Poppins](https://fonts.google.com/)**: Typography

### API Integration

- **[OpenWeatherMap API](https://openweathermap.org/api)**: Data cuaca real-time
- **[Flags API](https://flagsapi.com/)**: Icon bendera negara
- **Google Forms API**: Sistem pelaporan

## Struktur File

```
Tugas_WEB/
├── index.html                 # Halaman utama
├── assets/
│   ├── css/
│   │   └── style.css         # Stylesheet utama (1400+ baris)
│   ├── js/
│   │   ├── main.js           # Navigasi, typing animation, scroll reveal
│   │   ├── app-simple.js     # Weather API handler (recommended)
│   │   └── app.js            # Weather API handler (alternative)
│   └── images/
│       ├── avatar.png        # Gambar avatar hero section
│       └── favicon.png       # Favicon website
└── README.md                 # Dokumentasi
```

## Fitur Responsive Design

Website dioptimalkan untuk berbagai perangkat dengan breakpoint:

{Masih dalam Pengembangan}

### Optimasi Responsive:

- Hamburger menu untuk mobile
- Grid layout yang adaptif
- Font size scaling
- Image resizing
- Form input stacking
- Live counter: 3 kolom di desktop, tetap 3 kolom di mobile dengan ukuran menyesuaikan

## Highlight Desain

### Animasi & Interaksi

- **Image Float Animation**: Avatar dengan efek melayang
- **Bounce Animation**: Scroll button dengan efek bouncing
- **Slide In Up**: Card masuk dari bawah
- **Fade In**: Elemen muncul secara halus
- **Hover Effects**:
  - Button dengan ripple effect
  - Card dengan scale & shadow
  - Icons dengan rotate & scale
  - Navigation link dengan underline animation

### Color Scheme

- **Primary Purple**: `rgb(110, 87, 224)`
- **Secondary Cyan**: `rgb(0, 201, 255)`
- **Accent Yellow**: `rgb(192, 166, 49)`
- **Text Gray**: `rgb(68, 68, 68)`
- **Text Cyan**: `rgb(30, 159, 171)`

### Typography

- **Font Family**: Poppins (400, 500, 600, 700)
- **Smooth Transitions**: cubic-bezier(0.34, 1.56, 0.64, 1)

## Data API

### Weather API Configuration

- **API Provider**: OpenWeatherMap
- **API Key**: `9505fd1df737e20152fbd78cdb289b6a`
- **Endpoint**: `/data/2.5/weather`
- **Default City**: Jakarta, Indonesia

### Response Data Mapping

Website mengambil 12 field data dari API:

1. Temperature (main.temp)
2. Weather Description (weather[0].description)
3. Weather Icon (weather[0].icon)
4. Clouds (clouds.all)
5. Humidity (main.humidity)
6. Pressure (main.pressure)
7. Wind Speed (wind.speed)
8. Visibility (visibility)
9. Feels Like (main.feels_like)
10. Temp Max (main.temp_max)
11. Temp Min (main.temp_min)
12. Coordinates (coord.lat, coord.lon)



### Developer

- **Daniel** - Full Stack Developer
  - Email: danielxogood@gmail.com
  - Tel: +62 813 2372 2338


