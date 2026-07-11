// api/index.js
// -----------------------------------------------------------------------------
// Fungsi ini jalan di SERVER Vercel, BUKAN di browser pengunjung.
// Tugasnya: ambil data mobil dari Google Apps Script, suntikkan langsung
// ke dalam index.html, baru dikirim ke browser/AI/crawler.
//
// Kenapa ini penting: AI atau search engine crawler biasanya cuma membaca
// HTML mentah yang dikirim server -- mereka TIDAK menunggu script.js jalan
// dan fetch data selesai. Dengan render di server, begitu HTML sampai,
// data mobil udah lengkap di dalamnya. Gak ada lagi teks "Menghubungkan
// ke Server..." yang keluar begitu saja.
// -----------------------------------------------------------------------------

const fs = require('fs');
const path = require('path');

// --- KONFIGURASI ---
// PENTING: samakan persis dengan yang ada di script.js
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwAFCz39BZ5quPI1j65e6VSjDume9ppJkNliFqE-TYpgtv9yRifcbVctbo36IpncPs/exec";
const WA_NUMBER = "628980008204";

// Cache di memori. PENTING: sekarang ini bukan cuma "cache kecepatan", tapi
// juga jadi "data cadangan darurat". Begitu satu kali fetch ke Apps Script
// berhasil, datanya disimpan di sini SELAMANYA (sampai ada fetch baru yang
// berhasil lagi) -- jadi kalau Apps Script lagi lelet/down sesaat, kita masih
// punya data terakhir yang valid buat ditampilkan, bukan malah error kosong.
let memoryCache = { data: null, timestamp: 0 };
const MEMORY_CACHE_TTL = 5 * 60 * 1000; // 5 menit -> di atas ini dianggap "agak basi", tapi tetap dipakai kalau fetch baru gagal
const FETCH_TIMEOUT_MS = 8000; // di bawah limit timeout function Vercel (10 detik di plan Hobby)

// Fetch dengan timeout + 1x retry, karena Apps Script kadang butuh waktu
// "cold start" sebelum merespons cepat.
async function fetchWithRetry(url, attempts = 2) {
    for (let i = 0; i < attempts; i++) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
        try {
            const response = await fetch(url, { signal: controller.signal });
            clearTimeout(timer);
            if (!response.ok) throw new Error("Status bukan 200: " + response.status);
            return await response.json();
        } catch (err) {
            clearTimeout(timer);
            console.error(`Percobaan fetch ke-${i + 1} gagal:`, err.message);
            if (i === attempts - 1) throw err; // percobaan terakhir gagal -> lempar error ke pemanggil
        }
    }
}

// Format angka harga jadi format Rupiah, contoh: 150000000 -> "Rp 150.000.000"
function formatPrice(rawPrice) {
    const num = Number(rawPrice);
    return (!isNaN(num) && rawPrice !== "") ? `Rp ${num.toLocaleString('id-ID')}` : rawPrice;
}

// Pecah teks "Alasan harus dibeli" (format "teks ${teks2} ${teks3}") jadi baris-baris terpisah
function parseReasons(rawText) {
    if (!rawText) return '';
    const pattern = /\s*\$\{([^}]+)\}/g;
    const baseText = rawText.split('${')[0].trim();
    let html = baseText ? `<div class="reason-line">${escapeHtml(baseText)}</div>` : "";
    let match;
    pattern.lastIndex = 0;
    while ((match = pattern.exec(rawText)) !== null) {
        html += `<div class="reason-line">${escapeHtml(match[1].trim())}</div>`;
    }
    return html;
}

// Escape karakter HTML berbahaya dari data Sheet, supaya aman disuntik ke halaman
// (mencegah data iseng di Sheet merusak tampilan atau jadi celah XSS)
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

// Render satu kartu mobil jadi string HTML.
// PENTING: struktur & class-name harus PERSIS sama dengan yang dibuat
// renderCarCards() di script.js, supaya fitur carousel & focus-mode di
// browser tetap jalan normal walau kartunya sudah dirender duluan di server.
function renderCarCard(car) {
    const isAvailable = (car["Tersedia / Terjual"] || "").toLowerCase() === "tersedia";
    const badgeClass = isAvailable ? "badge-available" : "badge-sold";
    const badgeText = isAvailable ? "Tersedia" : "Terjual";
    const formattedPrice = formatPrice(car["Harga"]);
    const reasonsHTML = parseReasons(car["Alasan harus dibeli"]);

    const rawImages = car["Nama gambar mobil"] || "placeholder.jpg";
    const imageArray = rawImages.split('&&').map(img => img.trim()).filter(Boolean);
    const coverImage = imageArray[0] || "placeholder.jpg";

    const galleryButtons = imageArray.length > 1
        ? `<button class="carousel-btn left">←</button><button class="carousel-btn right">→</button>`
        : '';

    const carName = escapeHtml(car["Nama Mobil"] || "Mobil");
    const waMessage = encodeURIComponent(`Halo kak, saya ingin menanyakan tentang ${carName}?`);
    const waLink = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;

    return `
        <div class="luxury-card">
            <div class="car-image-container">
                <img src="${coverImage}" alt="${carName}" class="car-img carousel-img-transition" data-images="${imageArray.join('&&')}" data-index="0">
                ${galleryButtons}
            </div>
            <div>
                <div class="card-header">
                    <h2 class="car-name">${carName}</h2>
                    <span class="badge ${badgeClass}">${badgeText}</span>
                </div>
                <div class="car-color">Warna: ${escapeHtml(car["Warna Mobil"] || '—')}</div>
                <p class="car-description">"${escapeHtml(car["Kata kata untuk mobil"] || '')}"</p>
                <div class="car-reasons">${reasonsHTML}</div>
            </div>
            <div class="car-price">${formattedPrice}</div>
            <div class="focus-wa-container">
                <a href="${waLink}" class="focus-wa-btn track-wa-focus" target="_blank">Tanya di WhatsApp</a>
            </div>
        </div>
    `;
}

// Ambil data mobil. Urutan prioritas:
// 1) Kalau cache masih fresh (< 5 menit) -> pakai cache, gak usah fetch lagi.
// 2) Kalau cache udah basi / belum ada -> coba fetch baru (dengan retry+timeout).
// 3) Kalau fetch baru GAGAL TOTAL, tapi kita masih punya cache lama (walau basi)
//    -> pakai cache lama itu daripada nampilin error. Ini yang disebut
//    "stale-if-error": lebih baik data agak lama daripada gak ada sama sekali.
async function getCarsData() {
    const now = Date.now();
    if (memoryCache.data && (now - memoryCache.timestamp) < MEMORY_CACHE_TTL) {
        return memoryCache.data;
    }

    try {
        const data = await fetchWithRetry(APPS_SCRIPT_URL);
        memoryCache = { data, timestamp: now };
        return data;
    } catch (err) {
        if (memoryCache.data) {
            console.error("Fetch baru gagal, pakai data cache lama sebagai cadangan:", err.message);
            return memoryCache.data;
        }
        // Belum pernah ada data sukses sama sekali (misal baru pertama kali cold start) -> lempar error
        throw err;
    }
}

module.exports = async (req, res) => {
    try {
        const cars = await getCarsData();
        const cardsHTML = cars.map(renderCarCard).join('');

        // Baca template HTML asli dari root project.
        // PENTING: sengaja dinamai "template.html" (bukan "index.html") supaya
        // TIDAK bentrok dengan static file serving Vercel -- kalau namanya
        // index.html, Vercel akan langsung menyajikannya duluan sebelum
        // sempat masuk ke rewrite/function ini.
        const templatePath = path.join(process.cwd(), 'template.html');
        let html = fs.readFileSync(templatePath, 'utf-8');

        // Suntik kartu-kartu mobil ke dalam grid, tampilkan grid-nya
        html = html.replace(
            '<div id="car-showcase-grid" class="car-grid" style="display: none;"></div>',
            `<div id="car-showcase-grid" class="car-grid grid-loaded" style="display: grid;">${cardsHTML}</div>`
        );
        // Sembunyikan status "Menghubungkan ke Server..." karena data sudah siap
        html = html.replace(
            '<div id="loading-element" class="loading-status">',
            '<div id="loading-element" class="loading-status" style="display: none;">'
        );

        // INI KUNCI PERFORMANYA:
        // s-maxage=600         -> CDN Vercel simpan HTML ini selama 10 menit,
        //                          request berikutnya disajikan INSTAN dari cache.
        // stale-while-revalidate=86400 -> selama 1 hari setelah itu, pengunjung
        //                          tetap dapat versi cache (stale) sambil di
        //                          belakang layar data di-refresh diam-diam.
        // Efeknya: AI/crawler dan pengunjung SELALU dapat HTML yang sudah
        // berisi data mobil, hampir tanpa delay, tanpa harus nunggu Apps Script.
        res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=86400');
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.status(200).send(html);
    } catch (error) {
        console.error("SSR render error:", error);
        // Kalau Apps Script lagi down/error, fallback: kirim template.html
        // apa adanya. Website tetap jalan seperti sebelumnya (client-side fetch).
        const templatePath = path.join(process.cwd(), 'template.html');
        const html = fs.readFileSync(templatePath, 'utf-8');
        res.status(200).send(html);
    }
};
