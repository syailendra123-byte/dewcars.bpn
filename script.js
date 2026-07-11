document.addEventListener("DOMContentLoaded", () => {
    // API Data Mobil Utama
    const apiEndpoint = "https://script.google.com/macros/s/AKfycbwAFCz39BZ5quPI1j65e6VSjDume9ppJkNliFqE-TYpgtv9yRifcbVctbo36IpncPs/exec";
    
    // PENTING: Paste URL Web App dari Spreadsheet Pengunjung di sini
    const statsApiEndpoint = "https://script.google.com/macros/s/AKfycbw_0QFWGZBFOef5FvkQD_l8VT6hJz6VyczjfPBWNa9icpYq5CZSs3CTIAybCr68Zyte1w/exec"; 
    
    // PENTING: Ganti dengan Nomor HP asli Anda (Gunakan format kode negara: 628...)
    const nomorWhatsApp = "628980008204"; 

    const carGrid = document.getElementById("car-showcase-grid");
    const loadingElement = document.getElementById("loading-element");
    const focusOverlay = document.getElementById("focus-overlay");
    const focusWrapper = document.getElementById("focus-wrapper");
    const mainFooter = document.getElementById("main-footer");
    const fabContainer = document.getElementById("quick-contact");
    const fabMainBtn = document.getElementById("fab-main");

    // --- SISTEM PRELOAD DAN CACHE GAMBAR ---
    const preloadedImagesCache = new Set();

    function preloadAdjacentImages(imagesArray, currentIndex) {
        if (!imagesArray || imagesArray.length === 0) return;
        const len = imagesArray.length;
        
        // Indeks berikutnya (looping ke 0 jika di akhir)
        const nextIdx = (currentIndex === len - 1) ? 0 : currentIndex + 1;
        // Indeks sebelumnya (looping ke akhir jika di 0)
        const prevIdx = (currentIndex === 0) ? len - 1 : currentIndex - 1;

        // Kumpulkan daftar gambar yang harus siap (Aktif, Berikutnya, Sebelumnya)
        const targets = [imagesArray[currentIndex], imagesArray[nextIdx], imagesArray[prevIdx]];

        targets.forEach(src => {
            if (src && !preloadedImagesCache.has(src)) {
                const img = new Image();
                img.src = src;
                preloadedImagesCache.add(src); // Tandai agar tidak dipreload ulang
            }
        });
    }

    // --- SISTEM STATISTIK PENGUNJUNG ---
    function recordStat(column) {
        if (!statsApiEndpoint || statsApiEndpoint === "URL_WEB_APP_PENGUNJUNG") return;
        if (sessionStorage.getItem('stat_' + column)) return;

        fetch(`${statsApiEndpoint}?kolom=${column}`, {
            method: 'GET',
            mode: 'no-cors'
        }).catch(err => {
            console.log("Stat tracking silent fail.");
        });

        sessionStorage.setItem('stat_' + column, 'true');
    }

    // A. Hitung Kunjungan Pertama (Kolom Semua)
    recordStat('Semua');

    // B, C, D. Hitung Klik Tombol Media Sosial di Area Footer & FAB Mengambang
    const bindSocialTracking = (elementId, col) => {
        const el = document.getElementById(elementId);
        if (el) el.addEventListener('click', () => recordStat(col));
    };

    bindSocialTracking('btn-tiktok', 'A');
    bindSocialTracking('btn-ig', 'B');
    bindSocialTracking('btn-wa-footer', 'C');
    bindSocialTracking('fab-tiktok', 'A');
    bindSocialTracking('fab-ig', 'B');
    bindSocialTracking('fab-wa', 'C');

    // --- EVENT SCROLL DAN TRACKING VISUAL ---
    window.addEventListener("scroll", () => {
        if(document.body.classList.contains('focus-active')) return;
        
        const scrollY = window.scrollY;
        const vh = window.innerHeight;

        // 1. Fase Animasi Transformasi Hero Menuju Header
        if (scrollY > vh * 0.05) document.body.classList.add("stage-1");
        else document.body.classList.remove("stage-1");

        if (scrollY > vh * 0.25) document.body.classList.add("stage-2");
        else document.body.classList.remove("stage-2");

        if (scrollY > vh * 0.50) document.body.classList.add("stage-3");
        else document.body.classList.remove("stage-3");

        // 2. SISTEM SEGMENTASI INTERVAl STORY SECTION (ANTI TUMPANG TINDIH)
        const storyStart = vh * 0.65;
        const sentenceDuration = vh * 0.55;
        const totalSentences = 5;
        const storyEnd = storyStart + (sentenceDuration * totalSentences);
        const storySentences = document.querySelectorAll(".story-sentence");

        if (scrollY >= storyStart && scrollY < storyEnd) {
            document.body.classList.remove("story-complete");

            storySentences.forEach((sentence, idx) => {
                const sStart = storyStart + (idx * sentenceDuration);
                const sEnd = sStart + sentenceDuration;

                if (scrollY >= sStart && scrollY < sEnd) {
                    const progress = (scrollY - sStart) / sentenceDuration;
                    let opacity = 0;
                    let translateY = 20;

                    if (progress < 0.25) {
                        opacity = progress / 0.25;
                        translateY = 20 - (opacity * 20);
                    } else if (progress >= 0.25 && progress <= 0.75) {
                        opacity = 1;
                        translateY = 0;
                    } else {
                        opacity = (1 - progress) / 0.25;
                        translateY = -((progress - 0.75) / 0.25) * 20;
                    }

                    sentence.style.opacity = Math.max(0, Math.min(1, opacity));
                    sentence.style.transform = `translateY(${translateY}px)`;
                } else if (scrollY >= sEnd) {
                    sentence.style.opacity = 0;
                    sentence.style.transform = "translateY(-20px)";
                } else {
                    sentence.style.opacity = 0;
                    sentence.style.transform = "translateY(20px)";
                }
            });

        } else if (scrollY >= storyEnd) {
            document.body.classList.add("story-complete");
            storySentences.forEach(s => { s.style.opacity = 0; s.style.transform = "translateY(-20px)"; });
        } else {
            document.body.classList.remove("story-complete");
            storySentences.forEach(s => { s.style.opacity = 0; s.style.transform = "translateY(20px)"; });
        }

        // 3. MONITORING PROTEKSI VIEWPORT FOOTER (FAB HIDING BEHAVIOR)
        if (mainFooter && fabContainer) {
            const footerRect = mainFooter.getBoundingClientRect();
            if (footerRect.top <= window.innerHeight) {
                fabContainer.classList.add("fab-hidden");
                fabContainer.classList.remove("active");
            } else {
                fabContainer.classList.remove("fab-hidden");
            }
        }
    });

    // --- KONTROL KLIK UNTUK MEMBUKA MENU AKSES CEPAT (FAB) ---
    if (fabMainBtn && fabContainer) {
        fabMainBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            fabContainer.classList.toggle("active");
        });
        
        document.addEventListener("click", () => {
            fabContainer.classList.remove("active");
        });
    }

    // --- PARSING INTEGRASI TEXT REASONS CAR ---
    function parseReasons(rawText) {
        if (!rawText) return '';
        const pattern = /\s*\${([^}]+)}/g;
        let baseText = rawText.split('${')[0].trim();
        let formattedHTML = baseText ? `<div class="reason-line">${baseText}</div>` : "";
        let match;
        pattern.lastIndex = 0; 
        while ((match = pattern.exec(rawText)) !== null) {
            formattedHTML += `<div class="reason-line">${match[1].trim()}</div>`;
        }
        return formattedHTML;
    }

    // --- AMBIL DAN METODE RENDER SEPERTI SEMULA ---
    async function fetchLuxuryCars() {
        try {
            const response = await fetch(apiEndpoint);
            if (!response.ok) throw new Error("Gagal");
            const carData = await response.json();
            renderCarCards(carData);
        } catch (error) {
            loadingElement.innerHTML = `<p style="color: #e74c3c;">Gagal terhubung ke Server. <button id="retry-fetch-btn" style="cursor:pointer;text-decoration:underline;background:none;border:none;color:#e74c3c;font:inherit;">Coba lagi</button></p>`;
            document.getElementById('retry-fetch-btn').addEventListener('click', fetchLuxuryCars);
        }
    }

    function renderCarCards(cars) {
        carGrid.innerHTML = ""; 
        carGrid.style.display = "grid"; 

        cars.forEach((car) => {
            const card = document.createElement("div");
            card.classList.add("luxury-card");

            const isAvailable = (car["Tersedia / Terjual"] || "").toLowerCase() === "tersedia";
            const badgeClass = isAvailable ? "badge-available" : "badge-sold";
            const badgeText = isAvailable ? "Tersedia" : "Terjual";
            const rawPrice = car["Harga"];
            const formattedPrice = !isNaN(rawPrice) ? `Rp ${Number(rawPrice).toLocaleString('id-ID')}` : rawPrice;
            const reasonsHTML = parseReasons(car["Alasan harus dibeli"]);

            const rawImages = car["Nama gambar mobil"] || "placeholder.jpg";
            const imageArray = rawImages.split('&&').map(img => img.trim()).filter(img => img !== "");
            const coverImage = imageArray.length > 0 ? imageArray[0] : "placeholder.jpg";

            let galleryButtons = '';
            if (imageArray.length > 1) {
                galleryButtons = `
                    <button class="carousel-btn left">←</button>
                    <button class="carousel-btn right">→</button>
                `;
            }

            const carName = car["Nama Mobil"] || "Mobil";
            const waMessage = encodeURIComponent(`Halo kak, saya ingin menanyakan tentang ${carName}?`);
            const waLink = `https://wa.me/${nomorWhatsApp}?text=${waMessage}`;

            card.innerHTML = `
                <div class="car-image-container">
                    <img src="${coverImage}" alt="${carName}" class="car-img carousel-img-transition" data-images="${imageArray.join('&&')}" data-index="0">
                    ${galleryButtons}
                </div>
                <div>
                    <div class="card-header">
                        <h2 class="car-name">${carName}</h2>
                        <span class="badge ${badgeClass}">${badgeText}</span>
                    </div>
                    <div class="car-color">Warna: ${car["Warna Mobil"] || '—'}</div>
                    <p class="car-description">"${car["Kata kata untuk mobil"] || ''}"</p>
                    <div class="car-reasons">${reasonsHTML}</div>
                </div>
                <div class="car-price">${formattedPrice}</div>
                
                <div class="focus-wa-container">
                    <a href="${waLink}" class="focus-wa-btn track-wa-focus" target="_blank">Tanya di WhatsApp</a>
                </div>
            `;

            carGrid.appendChild(card);
        });

        loadingElement.style.display = "none";
        setTimeout(() => carGrid.classList.add("grid-loaded"), 50);
    }

    // --- MANAJEMEN ANIMASI MODE FOKUS MOBIL ---
    let focusedCard = null;
    let cardPlaceholder = null;

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("carousel-btn")) {
            e.stopPropagation();
            const container = e.target.closest('.car-image-container');
            const img = container.querySelector('.car-img');
            const images = img.dataset.images.split('&&');
            let idx = parseInt(img.dataset.index);

            if (e.target.classList.contains('left')) {
                idx = idx === 0 ? images.length - 1 : idx - 1;
            } else {
                idx = idx === images.length - 1 ? 0 : idx + 1;
            }

            img.dataset.index = idx;

            // PRELOAD INSTAN: Siapkan gambar berikutnya dan sebelumnya di latar belakang
            preloadAdjacentImages(images, idx);

            // Jalankan animasi transisi halus dengan mengandalkan cache browser
            img.classList.add('carousel-fade-out');
            setTimeout(() => {
                img.src = images[idx];
                img.classList.remove('carousel-fade-out');
            }, 200);
            return;
        }

        if (e.target.classList.contains("track-wa-focus")) {
            recordStat('D');
            return; 
        }
        
        const card = e.target.closest('.luxury-card');
        if (card && !document.body.classList.contains("focus-active") && e.target.closest('#car-showcase-grid')) {
            openFocusMode(card);
        }
    });

    function getCenter(rect) {
        return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    }

    function openFocusMode(card) {
        focusedCard = card;

        // PRELOAD SAAT MASUK FOKUS: Langsung ambil foto aktif, berikutnya, dan sebelumnya
        const imgEl = card.querySelector('.car-img');
        if (imgEl && imgEl.dataset.images) {
            const images = imgEl.dataset.images.split('&&');
            const idx = parseInt(imgEl.dataset.index) || 0;
            preloadAdjacentImages(images, idx);
        }

        const origRect = card.getBoundingClientRect();
        const origCenter = getCenter(origRect);

        cardPlaceholder = document.createElement('div');
        cardPlaceholder.style.width = origRect.width + 'px';
        cardPlaceholder.style.height = origRect.height + 'px';
        cardPlaceholder.style.margin = getComputedStyle(card).margin;
        card.parentNode.insertBefore(cardPlaceholder, card);

        focusWrapper.appendChild(card);

        const destRect = card.getBoundingClientRect();
        const destCenter = getCenter(destRect);

        const dx = origCenter.x - destCenter.x;
        const dy = origCenter.y - destCenter.y;
        
        card.style.transition = 'none';
        card.style.transform = `translate(${dx}px, ${dy}px) scale(1)`;
        card.offsetHeight; 

        card.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
        card.style.transform = `translate(0px, 0px) scale(1.15)`;
        card.classList.add('is-focused');
        document.body.classList.add("focus-active");
        focusOverlay.scrollTop = 0; 
    }

    function closeFocusMode() {
        if (!focusedCard) return;

        const currentRect = focusedCard.getBoundingClientRect();
        const currentCenter = getCenter(currentRect);

        cardPlaceholder.parentNode.insertBefore(focusedCard, cardPlaceholder);
        focusedCard.classList.remove('is-focused');
        focusedCard.style.transform = 'none';
        focusedCard.style.transition = 'none';
        
        const destRect = focusedCard.getBoundingClientRect();
        const destCenter = getCenter(destRect);

        const dx = currentCenter.x - destCenter.x;
        const dy = currentCenter.y - destCenter.y;

        focusedCard.style.transform = `translate(${dx}px, ${dy}px) scale(1.15)`;
        focusedCard.offsetHeight; 

        document.body.classList.remove("focus-active");
        focusedCard.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
        focusedCard.style.transform = `translate(0, 0) scale(1)`;

        const cardRef = focusedCard;
        const placeRef = cardPlaceholder;
        focusedCard = null;
        cardPlaceholder = null;

        setTimeout(() => {
            if (placeRef) placeRef.remove();
            cardRef.style.transition = '';
            cardRef.style.transform = '';
        }, 600);
    }

    focusWrapper.addEventListener("click", (e) => {
        if (e.target === focusWrapper) closeFocusMode();
    });

    let overscrollAmount = 0;
    focusOverlay.addEventListener("wheel", (e) => {
        const isAtTop = focusOverlay.scrollTop === 0;
        const isAtBottom = focusOverlay.scrollTop + focusOverlay.clientHeight >= focusOverlay.scrollHeight - 1;

        if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
            overscrollAmount += Math.abs(e.deltaY);
            if (overscrollAmount > 120) { 
                closeFocusMode();
                overscrollAmount = 0;
            }
        } else {
            overscrollAmount = 0; 
        }
    });

    let touchStartY = 0;
    focusOverlay.addEventListener("touchstart", (e) => {
        touchStartY = e.touches[0].clientY;
        overscrollAmount = 0;
    }, {passive: true});
    
    focusOverlay.addEventListener("touchmove", (e) => {
        const touchCurrentY = e.touches[0].clientY;
        const deltaY = touchStartY - touchCurrentY; 
        
        const isAtTop = focusOverlay.scrollTop === 0;
        const isAtBottom = focusOverlay.scrollTop + focusOverlay.clientHeight >= focusOverlay.scrollHeight - 1;

        if ((isAtTop && deltaY < 0) || (isAtBottom && deltaY > 0)) {
            overscrollAmount += Math.abs(deltaY);
            if (overscrollAmount > 80) closeFocusMode();
        }
    }, {passive: true});

    // GUARD SSR: kalau server (api/index.js) sudah menyuntikkan kartu mobil
    // duluan ke HTML, grid ini sudah punya isi -> skip fetch ulang di browser
    // supaya tidak ada flash/render dobel. Kalau kosong (misal SSR gagal dan
    // fallback ke index.html polos), baru fetch seperti biasa.
    if (carGrid.children.length === 0) {
        fetchLuxuryCars();
    } else {
        loadingElement.style.display = "none";
    }
});