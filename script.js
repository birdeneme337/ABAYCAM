// --- 1. SLIDER MANTIĞI ---
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showSlide(currentSlide);
}

setInterval(() => {
    moveSlide(1);
}, 5000);


// --- 2. ÇOKLU DİL DESTEĞİ (TR, Mısır Arapçası, EN) ---
const translations = {
    tr: {
        nav_home: "Ana Sayfa",
        nav_collection: "Koleksiyon",
        nav_contact: "İletişim",
        slide1_title: "Doğanın Zarafeti, Mimarinin Gücü",
        slide1_desc: "En nadide mermer ve doğaltaş koleksiyonları ile projelerinize değer katıyoruz.",
        btn_explore: "Koleksiyonu Keşfet",
        slide2_title: "Eşsiz Dokular, Premium Kalite",
        slide2_desc: "Dünyanın en elit taş bloklarını doğrudan projelerinizle buluşturuyoruz.",
        btn_quote: "Teklif Alın",
        slide3_title: "Mısır ve Dünya Pazarına Özel Çözümler",
        slide3_desc: "Uzman ekibimiz ve geniş lojistik ağımızla mimari projelerinizde yanınızdayız.",
        title_collection: "Doğaltaş & Mermer Koleksiyonumuz",
        sub_collection: "İncelemek istediğiniz taşın üzerine tıklayarak detaylı görsellerini görebilirsiniz.",
        stone_desc_gen: "Özel dokusu ve damar yapısıyla mimari projeler için ideal doğaltaş.",
        btn_view_details: "Detaylı Görseller",
        contact_title: "Bizimle İletişime Geçin",
        contact_desc: "Projeleriniz ve toplu mermer/taş siparişleriniz için 7/24 hizmetinizdeyiz.",
        map_link: "Haritada Görüntüle (Google Maps)"
    },
    ar: {
        nav_home: "الصفحة الرئيسية",
        nav_collection: "المجموعات",
        nav_contact: "تواصل معنا",
        slide1_title: "أناقة الطبيعة وقوة المعمار",
        slide1_desc: "بنضيف قيمة لمشاريعك بأرقى تشكيلات الرخام والحجر الطبيعي.",
        btn_explore: "اكتشف المجموعة",
        slide2_title: "جودة بريميوم وتصاميم ملهاش مثيل",
        slide2_desc: "ابنجيبلك أحسن وأفخم كتل الأحجار في العالم لحد عندك.",
        btn_quote: "احصل على عرض سعر",
        slide3_title: "حلول خاصة للسوق المصري والعالمي",
        slide3_desc: "معاك في كل خطوة في مشروعك بفريق خبرة وشبكة توريد قوية.",
        title_collection: "تشكيلة الأحجار والرخام",
        sub_collection: "اضغط على أي حجر علشان تشوف الصور والتفاصيل الكاملة.",
        stone_desc_gen: "حجر طبيعي مثالي للمشاريع المعمارية بلمسة فريدة.",
        btn_view_details: "عرض الصور بالتفصيل",
        contact_title: "تواصل معانا دلوقتي",
        contact_desc: "جاهزين لخدمتك ومتابعة طلبات الرخام في أي وقت.",
        map_link: "شوف المكان على الخريطة (Google Maps)"
    },
    en: {
        nav_home: "Home",
        nav_collection: "Collection",
        nav_contact: "Contact",
        slide1_title: "Elegance of Nature, Power of Architecture",
        slide1_desc: "Adding value to your projects with the finest marble and natural stone collections.",
        btn_explore: "Explore Collection",
        slide2_title: "Unique Textures, Premium Quality",
        slide2_desc: "Bringing the world's most elite stone blocks directly to your projects.",
        btn_quote: "Get a Quote",
        slide3_title: "Custom Solutions for Egyptian & Global Markets",
        slide3_desc: "We stand by your architectural projects with expert teams and strong logistics.",
        title_collection: "Our Stone & Marble Collection",
        sub_collection: "Click on any stone to view its detailed images and variations.",
        stone_desc_gen: "Ideal natural stone for architectural projects with its unique texture.",
        btn_view_details: "Detailed Images",
        contact_title: "Contact Us",
        contact_desc: "Available 24/7 for your architectural projects and bulk marble orders.",
        map_link: "View on Map (Google Maps)"
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    if (lang === 'ar') {
        document.body.style.direction = 'rtl';
    } else {
        document.body.style.direction = 'ltr';
    }
}


// --- 3. 10 TAŞ İÇİN DİNAMİK MODAL VE GALERİ ---
const stoneData = {
    stone1: { title: "Premium Seri - Taş 1", images: ["1.png", "2.png", "3.png"] },
    stone2: { title: "Lüks Mermer - Taş 2", images: ["2.png", "3.png", "4.png"] },
    stone3: { title: "Modern Dokulu Seri - Taş 3", images: ["3.png", "4.png", "5.png"] },
    stone4: { title: "Seçkin Koleksiyon - Taş 4", images: ["4.png", "5.png", "6.png"] },
    stone5: { title: "Özel Tasarım Seri - Taş 5", images: ["5.png", "6.png", "7.png"] },
    stone6: { title: "Klasik Doğaltaş - Taş 6", images: ["6.png", "7.png", "8.png"] },
    stone7: { title: "Zarif Yapılı Seri - Taş 7", images: ["7.png", "8.png", "9.png"] },
    stone8: { title: "Estetik Mermer - Taş 8", images: ["8.png", "9.png", "10.png"] },
    stone9: { title: "Prestij Serisi - Taş 9", images: ["9.png", "10.png", "1.png"] },
    stone10: { title: "Siyah Gold Seri - Taş 10", images: ["10.png", "1.png", "2.png"] }
};

function openModal(stoneKey) {
    const modal = document.getElementById('imageModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImgMain = document.getElementById('modalImgMain');
    const modalThumbnails = document.getElementById('modalThumbnails');

    const data = stoneData[stoneKey];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalImgMain.src = data.images[0];
    
    modalThumbnails.innerHTML = '';
    data.images.forEach((imgSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        if (index === 0) thumb.classList.add('active-thumb');
        
        thumb.onclick = function() {
            modalImgMain.src = imgSrc;
            document.querySelectorAll('.modal-thumbnails img').forEach(img => img.classList.remove('active-thumb'));
            thumb.classList.add('active-thumb');
        };
        modalThumbnails.appendChild(thumb);
    });

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
};