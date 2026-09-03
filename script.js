/* =========================
   AB AYCAM JAVASCRIPT
========================= */


/* PRELOADER */

const preloader = document.getElementById("preloader");

function hidePreloader() {
  if (preloader) {
    preloader.classList.add("hidden");
  }
}


/* Site tamamen yüklendiğinde kapat */

window.addEventListener("load", () => {
  setTimeout(hidePreloader, 700);
});


/* Çok önemli:
   Görsellerden biri hata verse bile
   loading ekranında takılı kalmaması için */

setTimeout(hidePreloader, 3000);



/* =========================
   HERO SLIDER
========================= */

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".slider-dot");

let currentSlide = 0;
let sliderInterval;


function showSlide(index) {

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });


  dots.forEach((dot) => {
    dot.classList.remove("active");
  });


  slides[index].classList.add("active");
  dots[index].classList.add("active");

  currentSlide = index;
}


function nextSlide() {

  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}


function startSlider() {

  sliderInterval = setInterval(() => {
    nextSlide();
  }, 5000);

}


if (slides.length > 0) {

  startSlider();

}


dots.forEach((dot, index) => {

  dot.addEventListener("click", () => {

    clearInterval(sliderInterval);

    showSlide(index);

    startSlider();

  });

});



/* =========================
   COLLECTION IMAGE MODAL
========================= */

const collectionCards =
  document.querySelectorAll(".collection-card");

const imageModal =
  document.getElementById("imageModal");

const modalImage =
  document.getElementById("modalImage");

const modalClose =
  document.getElementById("modalClose");


collectionCards.forEach((card) => {

  card.addEventListener("click", () => {

    const imagePath =
      card.getAttribute("data-image");

    if (modalImage && imagePath) {

      modalImage.src = imagePath;

      imageModal.classList.add("active");

      document.body.style.overflow = "hidden";

    }

  });

});


if (modalClose) {

  modalClose.addEventListener("click", () => {

    imageModal.classList.remove("active");

    document.body.style.overflow = "";

  });

}


if (imageModal) {

  imageModal.addEventListener("click", (event) => {

    if (event.target === imageModal) {

      imageModal.classList.remove("active");

      document.body.style.overflow = "";

    }

  });

}



/* =========================
   MACHINE SCROLL ANIMATION
========================= */

const machineSection =
  document.querySelector(".machine-section");


function checkMachineAnimation() {

  if (!machineSection) return;

  const sectionTop =
    machineSection.getBoundingClientRect().top;

  const windowHeight =
    window.innerHeight;


  if (sectionTop < windowHeight * 0.55) {

    machineSection.classList.add("active");

  }

}


window.addEventListener(
  "scroll",
  checkMachineAnimation
);


checkMachineAnimation();



/* =========================
   ACTIVE MENU
========================= */

const navLinks =
  document.querySelectorAll(".nav-link");


const sections =
  document.querySelectorAll("section[id]");


function updateActiveMenu() {

  let currentSection = "";


  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop;

    const sectionHeight =
      section.offsetHeight;


    if (
      window.scrollY >=
      sectionTop - sectionHeight * 0.25
    ) {

      currentSection =
        section.getAttribute("id");

    }

  });


  navLinks.forEach((link) => {

    link.classList.remove("active");


    if (
      link.getAttribute("href") ===
      "#" + currentSection
    ) {

      link.classList.add("active");

    }

  });

}


window.addEventListener(
  "scroll",
  updateActiveMenu
);



/* =========================
   MOBILE MENU
========================= */

const mobileMenuBtn =
  document.getElementById("mobileMenuBtn");

const sidebar =
  document.getElementById("sidebar");


if (mobileMenuBtn && sidebar) {

  mobileMenuBtn.addEventListener(
    "click",
    () => {

      sidebar.classList.toggle(
        "mobile-open"
      );

    }
  );

}


navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    if (window.innerWidth <= 900) {

      sidebar.classList.remove(
        "mobile-open"
      );

    }

  });

});



/* =========================
   LANGUAGES
========================= */

const translations = {

  tr: {

    menuHome: "Ana Sayfa",

    menuCollection: "Koleksiyonlar",

    menuProcess: "Üretim",

    menuAbout: "Hakkımızda",

    menuContact: "İletişim",


    heroTitle:
      "Taşa Yeni Bir<br><span>Karakter</span> Veriyoruz.",


    heroDescription:
      "Yüksek kaliteli taş baskı teknolojisi ile mekanlara, projelere ve tasarımlara benzersiz bir görünüm kazandırıyoruz.",


    discover:
      "KOLEKSİYONU KEŞFET",


    introLabel:
      "AB AYCAM EXPERIENCE",


    introTitle:
      "Doğal görünüm.<br><span>Sınırsız tasarım.</span>",


    introText:
      "AB AYCAM olarak taş yüzeyleri modern baskı teknolojisi ile birleştiriyor, projeleriniz için güçlü, estetik ve dikkat çekici yüzeyler üretiyoruz.",


    collectionLabel:
      "KOLEKSİYONLAR",


    collectionTitle:
      "Taş Koleksiyonlarımız",


    collectionDescription:
      "Her taş farklı bir karakter taşır. Koleksiyonlarımızı keşfedin.",


    processLabel:
      "TEKNOLOJİMİZ",


    processTitle:
      "Tasarımın<br><span>üretime dönüştüğü</span><br>yer.",


    processText:
      "Aşağıya doğru ilerledikçe teknolojimizin tasarımlarınızı nasıl hayata geçirdiğini keşfedin.",


    aboutLabel:
      "AB AYCAM HAKKINDA",


    aboutTitle:
      "Her yüzey,<br>bir <span>hikaye</span> anlatır.",


    aboutText:
      "AB AYCAM, kaliteli üretim, modern teknoloji ve yaratıcı tasarımı bir araya getirerek müşterilerine fark yaratan taş yüzey çözümleri sunar.",


    statCollection:
      "KOLEKSİYON",


    statDesign:
      "TASARIM OLASILIĞI",


    statQuality:
      "KALİTE ODAKLI",


    contactLabel:
      "İLETİŞİM",


    contactTitle:
      "Bir sonraki projenizi<br>birlikte <span>tasarlayalım.</span>",


    contactButton:
      "BİZE ULAŞIN"

  },


  en: {

    menuHome: "Home",

    menuCollection: "Collections",

    menuProcess: "Production",

    menuAbout: "About",

    menuContact: "Contact",


    heroTitle:
      "Giving Stone<br>a New <span>Character.</span>",


    heroDescription:
      "With advanced stone printing technology, we bring unique character and powerful design to spaces, projects and surfaces.",


    discover:
      "DISCOVER COLLECTION",


    introLabel:
      "AB AYCAM EXPERIENCE",


    introTitle:
      "Natural appearance.<br><span>Unlimited design.</span>",


    introText:
      "At AB AYCAM, we combine stone surfaces with modern printing technology to create powerful, aesthetic and remarkable surfaces for your projects.",


    collectionLabel:
      "COLLECTIONS",


    collectionTitle:
      "Our Stone Collections",


    collectionDescription:
      "Every stone has its own character. Discover our collections.",


    processLabel:
      "OUR TECHNOLOGY",


    processTitle:
      "Where design<br><span>becomes</span><br>production.",


    processText:
      "Scroll down and discover how our technology brings your designs to life.",


    aboutLabel:
      "ABOUT AB AYCAM",


    aboutTitle:
      "Every surface<br>tells a <span>story.</span>",


    aboutText:
      "AB AYCAM combines quality production, modern technology and creative design to deliver remarkable stone surface solutions.",


    statCollection:
      "COLLECTIONS",


    statDesign:
      "DESIGN POSSIBILITIES",


    statQuality:
      "QUALITY FOCUS",


    contactLabel:
      "CONTACT",


    contactTitle:
      "Let's design<br>your next <span>project together.</span>",


    contactButton:
      "CONTACT US"

  },


  ar: {

    menuHome: "الرئيسية",

    menuCollection: "المجموعات",

    menuProcess: "الإنتاج",

    menuAbout: "من نحن",

    menuContact: "اتصل بنا",


    heroTitle:
      "نمنح الحجر<br><span>شخصية جديدة.</span>",


    heroDescription:
      "باستخدام تكنولوجيا الطباعة المتقدمة على الحجر، نقدم تصاميم مميزة وفريدة للمساحات والمشاريع المختلفة.",


    discover:
      "اكتشف المجموعة",


    introLabel:
      "تجربة AB AYCAM",


    introTitle:
      "مظهر طبيعي.<br><span>تصميم بلا حدود.</span>",


    introText:
      "في AB AYCAM نجمع بين أسطح الحجر وتكنولوجيا الطباعة الحديثة لنقدم أسطحاً مميزة وجمالية لمشاريعكم.",


    collectionLabel:
      "المجموعات",


    collectionTitle:
      "مجموعات الحجر",


    collectionDescription:
      "لكل حجر شخصية مختلفة. اكتشف مجموعاتنا.",


    processLabel:
      "تكنولوجيتنا",


    processTitle:
      "حيث يتحول<br><span>التصميم إلى</span><br>إنتاج.",


    processText:
      "اكتشف كيف تحول تقنيتنا تصميماتك إلى واقع.",


    aboutLabel:
      "عن AB AYCAM",


    aboutTitle:
      "كل سطح<br>يروي <span>قصة.</span>",


    aboutText:
      "تجمع AB AYCAM بين الإنتاج عالي الجودة والتكنولوجيا الحديثة والتصميم الإبداعي لتقديم حلول مميزة للأسطح الحجرية.",


    statCollection:
      "مجموعات",


    statDesign:
      "إمكانيات التصميم",


    statQuality:
      "تركيز على الجودة",


    contactLabel:
      "اتصل بنا",


    contactTitle:
      "لنصمم<br><span>مشروعك القادم معاً.</span>",


    contactButton:
      "تواصل معنا"

  }

};



const languageButtons =
  document.querySelectorAll(".language-btn");


function changeLanguage(language) {

  const elements =
    document.querySelectorAll("[data-i18n]");


  elements.forEach((element) => {

    const key =
      element.getAttribute("data-i18n");


    if (
      translations[language] &&
      translations[language][key]
    ) {

      element.innerHTML =
        translations[language][key];

    }

  });


  languageButtons.forEach((button) => {

    button.classList.remove("active");


    if (
      button.getAttribute("data-lang") ===
      language
    ) {

      button.classList.add("active");

    }

  });


  if (language === "ar") {

    document.documentElement.lang = "ar";

    document.documentElement.dir = "rtl";

  } else {

    document.documentElement.lang =
      language;

    document.documentElement.dir = "ltr";

  }

}


languageButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      const language =
        button.getAttribute("data-lang");

      changeLanguage(language);

    }
  );

});