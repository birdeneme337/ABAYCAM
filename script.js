/* =========================================================
   AB AYCAM WEBSITE
========================================================= */


/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1800);

});


/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");


window.addEventListener("mousemove", (e) => {

    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";


    cursorOutline.animate(
        {

            left: e.clientX + "px",
            top: e.clientY + "px"

        },
        {

            duration: 250,
            fill: "forwards"

        }
    );

});


const hoverElements = document.querySelectorAll(
    "a, button"
);


hoverElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        cursorOutline.style.width = "55px";
        cursorOutline.style.height = "55px";

        cursorOutline.style.background =
            "rgba(255,255,255,.08)";

    });


    element.addEventListener("mouseleave", () => {

        cursorOutline.style.width = "34px";
        cursorOutline.style.height = "34px";

        cursorOutline.style.background =
            "transparent";

    });

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const sidebar =
    document.querySelector(".sidebar");


if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        sidebar.classList.toggle("mobile-open");

    });

}


document
    .querySelectorAll(".side-nav a")
    .forEach((link) => {

        link.addEventListener("click", () => {

            sidebar.classList.remove("mobile-open");

        });

    });


/* =========================================================
   HERO SLIDER
========================================================= */

const slides =
    document.querySelectorAll(".hero-slide");

const nextSlideButton =
    document.querySelector(".next-slide");

const prevSlideButton =
    document.querySelector(".prev-slide");

const currentSlideElement =
    document.querySelector(".current-slide");

const progressBar =
    document.querySelector(".progress-line span");


let currentSlide = 0;

const totalSlides = slides.length;


function updateSlider() {

    slides.forEach((slide, index) => {

        slide.classList.remove("active");

        if (index === currentSlide) {

            slide.classList.add("active");

        }

    });


    currentSlideElement.textContent =
        String(currentSlide + 1)
            .padStart(2, "0");


    const progress =
        ((currentSlide + 1) / totalSlides) * 100;


    progressBar.style.width =
        progress + "%";

}


function nextSlide() {

    currentSlide =
        (currentSlide + 1) % totalSlides;

    updateSlider();

}


function previousSlide() {

    currentSlide =
        (currentSlide - 1 + totalSlides)
        % totalSlides;

    updateSlider();

}


nextSlideButton.addEventListener(
    "click",
    nextSlide
);


prevSlideButton.addEventListener(
    "click",
    previousSlide
);


/* AUTO SLIDER */

let sliderInterval =
    setInterval(nextSlide, 6000);


document
    .querySelector(".hero")
    .addEventListener("mouseenter", () => {

        clearInterval(sliderInterval);

    });


document
    .querySelector(".hero")
    .addEventListener("mouseleave", () => {

        sliderInterval =
            setInterval(nextSlide, 6000);

    });


/* =========================================================
   ACTIVE MENU
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".side-nav a");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >=
            sectionTop - sectionHeight * 0.35
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   COLLECTION FILTER
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const collectionCards =
    document.querySelectorAll(".collection-card");


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const filter =
            button.dataset.filter;


        collectionCards.forEach((card) => {

            const category =
                card.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                card.classList.remove("hide");

            }

            else {

                card.classList.add("hide");

            }

        });

    });

});


/* =========================================================
   COLLECTION MODAL
========================================================= */

const designModal =
    document.querySelector(".design-modal");

const modalImage =
    document.querySelector(".modal-main-image");

const modalTitle =
    document.querySelector(".modal-title");

const modalClose =
    document.querySelector(".modal-close");

const modalPrev =
    document.querySelector(".modal-prev");

const modalNext =
    document.querySelector(".modal-next");

const modalCurrent =
    document.querySelector(".modal-current");

const modalTotal =
    document.querySelector(".modal-total");


let modalImages = [];
let modalIndex = 0;


/* OPEN DESIGN */

document
    .querySelectorAll(".view-design")
    .forEach((button) => {

        button.addEventListener("click", () => {

            modalImages =
                button.dataset.images.split(",");

            modalIndex = 0;


            modalTitle.textContent =
                button.dataset.title;


            modalTotal.textContent =
                String(modalImages.length)
                    .padStart(2, "0");


            updateModalImage();


            designModal.classList.add("active");

            document.body.classList.add(
                "no-scroll"
            );

        });

    });


function updateModalImage() {

    modalImage.style.opacity = 0;


    setTimeout(() => {

        modalImage.src =
            modalImages[modalIndex];


        modalImage.onload = () => {

            modalImage.style.opacity = 1;

        };


        modalCurrent.textContent =
            String(modalIndex + 1)
                .padStart(2, "0");

    }, 200);

}


/* NEXT IMAGE */

modalNext.addEventListener(
    "click",
    () => {

        modalIndex =
            (modalIndex + 1)
            % modalImages.length;

        updateModalImage();

    }
);


/* PREVIOUS IMAGE */

modalPrev.addEventListener(
    "click",
    () => {

        modalIndex =
            (
                modalIndex - 1
                + modalImages.length
            )
            % modalImages.length;

        updateModalImage();

    }
);


/* CLOSE MODAL */

modalClose.addEventListener(
    "click",
    closeModal
);


designModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target === designModal
        ) {

            closeModal();

        }

    }
);


function closeModal() {

    designModal.classList.remove(
        "active"
    );

    document.body.classList.remove(
        "no-scroll"
    );

}


/* ESC KEY */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   MACHINE SCROLL ANIMATION
========================================================= */

const processSection =
    document.querySelector(".process-section");

const processSteps =
    document.querySelectorAll(".process-step");

const fabrics =
    document.querySelectorAll(".fabric");

const particles =
    document.querySelector(
        ".stone-particles"
    );

const machineHead =
    document.querySelector(
        ".machine-head"
    );


function updateProcessAnimation() {

    if (!processSection) return;


    const rect =
        processSection.getBoundingClientRect();


    const sectionHeight =
        processSection.offsetHeight
        - window.innerHeight;


    let progress =
        -rect.top / sectionHeight;


    progress =
        Math.max(
            0,
            Math.min(1, progress)
        );


    const step =
        Math.min(
            3,
            Math.floor(progress * 4)
        );


    /* ACTIVE STEP */

    processSteps.forEach(
        (item, index) => {

            item.classList.toggle(
                "active",
                index === step
            );

        }
    );


    /* FABRIC CHANGE */

    fabrics.forEach(
        (fabric, index) => {

            fabric.classList.toggle(
                "active",
                index === step
            );

        }
    );


    /* MACHINE HEAD MOVEMENT */

    const moveX =
        Math.sin(progress * Math.PI * 4)
        * 80;


    machineHead.style.transform =
        `translateX(calc(-50% + ${moveX}px))`;


    /* PARTICLES */

    if (
        Math.floor(progress * 20) %
        2 === 0
    ) {

        particles.classList.remove(
            "animate"
        );


        void particles.offsetWidth;


        particles.classList.add(
            "animate"
        );

    }

}


window.addEventListener(
    "scroll",
    updateProcessAnimation
);


updateProcessAnimation();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {

            threshold: 0.15

        }

    );


document
    .querySelectorAll(
        ".intro-content, .collection-card, .application-item"
    )
    .forEach((element) => {

        element.classList.add(
            "reveal"
        );

        observer.observe(element);

    });


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.querySelector(".contact-form");


contactForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        alert(
            "Thank you! Your request has been received."
        );


        contactForm.reset();

    }
);


/* =========================================================
   LANGUAGES
========================================================= */

const translations = {

    en: {

        navHome: "HOME",
        navCollection: "COLLECTION",
        navProcess: "OUR PROCESS",
        navApplications: "APPLICATIONS",
        navCustom: "CUSTOM DESIGN",
        navContact: "CONTACT",

        heroTitle1:
            "TURNING FABRIC INTO <span>BRILLIANCE.</span>",

        heroText1:
            "Premium rhinestone and crystal applications designed to make every garment unforgettable.",

        heroTitle2:
            "EVERY STONE <span>TELLS A STORY.</span>",

        heroText2:
            "Transform your fashion collection with exceptional crystal stone designs.",

        heroTitle3:
            "YOUR IDEA. <span>OUR CRAFT.</span>",

        heroText3:
            "From your concept to premium stone application production.",

        exploreCollection:
            "EXPLORE COLLECTION",

        createDesign:
            "CREATE YOUR DESIGN",

        contactUs:
            "CONTACT US",

        introTitle:
            "WE DON'T JUST APPLY STONES. <span>WE CREATE ATTENTION.</span>",

        introText:
            "We combine creativity, precision and premium rhinestone applications to help fashion brands create garments that stand out.",

        collectionTitle:
            "STONE COLLECTION",

        collectionText:
            "Explore our premium rhinestone and crystal stone designs.",

        processTitle:
            "WATCH THE <span>DESIGN COME TO LIFE.</span>",

        processText:
            "Scroll down and follow the journey from crystal placement to finished textile brilliance.",

        applicationsTitle:
            "WHERE YOUR DESIGNS <span>CAN SHINE.</span>",

        customTitle:
            "HAVE AN IDEA? <span>LET'S MAKE IT SHINE.</span>",

        customText:
            "Send us your logo, artwork or idea. Our team can transform it into a professional stone application.",

        startProject:
            "START YOUR PROJECT",

        contactTitle:
            "READY TO CREATE <span>SOMETHING BRILLIANT?</span>",

        viewLocation:
            "VIEW OUR LOCATION"

    },


    tr: {

        navHome: "ANA SAYFA",
        navCollection: "KOLEKSİYON",
        navProcess: "ÜRETİM SÜRECİ",
        navApplications: "UYGULAMALAR",
        navCustom: "ÖZEL TASARIM",
        navContact: "İLETİŞİM",

        heroTitle1:
            "KUMAŞI <span>IŞILTIYA DÖNÜŞTÜRÜYORUZ.</span>",

        heroText1:
            "Her ürünü unutulmaz hale getiren premium taş ve kristal uygulamaları.",

        heroTitle2:
            "HER TAŞ <span>BİR HİKAYE ANLATIR.</span>",

        heroText2:
            "Moda koleksiyonunuzu etkileyici kristal taş tasarımlarıyla dönüştürün.",

        heroTitle3:
            "SİZİN FİKRİNİZ. <span>BİZİM USTALIĞIMIZ.</span>",

        heroText3:
            "Fikrinizden premium taş uygulamasına kadar profesyonel üretim.",

        exploreCollection:
            "KOLEKSİYONU İNCELE",

        createDesign:
            "TASARIMINI OLUŞTUR",

        contactUs:
            "BİZE ULAŞIN",

        introTitle:
            "SADECE TAŞ UYGULAMIYORUZ. <span>DİKKAT ÇEKİYORUZ.</span>",

        introText:
            "Yaratıcılığı, hassas üretimi ve premium taş uygulamalarını birleştirerek moda markalarının fark yaratmasını sağlıyoruz.",

        collectionTitle:
            "TAŞ KOLEKSİYONU",

        collectionText:
            "Premium taş ve kristal tasarımlarımızı keşfedin.",

        processTitle:
            "TASARIMIN <span>HAYATA GELİŞİNİ İZLEYİN.</span>",

        processText:
            "Aşağı kaydırın ve taşların yerleştirilmesinden tamamlanmış ürüne kadar olan süreci keşfedin.",

        applicationsTitle:
            "TASARIMLARINIZIN <span>PARLAYACAĞI YERLER.</span>",

        customTitle:
            "BİR FİKRİNİZ Mİ VAR? <span>HAYDİ PARLATALIM.</span>",

        customText:
            "Logo, çizim veya fikrinizi bize gönderin. Ekibimiz bunu profesyonel bir taş tasarımına dönüştürsün.",

        startProject:
            "PROJENİ BAŞLAT",

        contactTitle:
            "BİRLİKTE <span>HARİKA BİR ŞEY YAPALIM.</span>",

        viewLocation:
            "KONUMUMUZU GÖR"

    },


    ar: {

        navHome: "الرئيسية",
        navCollection: "المجموعة",
        navProcess: "طريقة العمل",
        navApplications: "التطبيقات",
        navCustom: "تصميم خاص",
        navContact: "اتصل بنا",

        heroTitle1:
            "نحوّل القماش إلى <span>بريق.</span>",

        heroText1:
            "تطبيقات احترافية من الأحجار والكريستال تجعل كل قطعة ملابس مميزة.",

        heroTitle2:
            "كل حجر <span>يحكي قصة.</span>",

        heroText2:
            "حوّل مجموعتك إلى مستوى جديد مع تصاميم الكريستال المميزة.",

        heroTitle3:
            "فكرتك. <span>حرفتنا.</span>",

        heroText3:
            "من فكرتك إلى إنتاج احترافي لتطبيقات الأحجار.",

        exploreCollection:
            "اكتشف المجموعة",

        createDesign:
            "اصنع تصميمك",

        contactUs:
            "تواصل معنا",

        introTitle:
            "نحن لا نضع الأحجار فقط. <span>نحن نصنع الانتباه.</span>",

        introText:
            "نجمع بين الإبداع والدقة وتطبيقات الأحجار الفاخرة لمساعدة علامات الأزياء على التميز.",

        collectionTitle:
            "مجموعة الأحجار",

        collectionText:
            "اكتشف مجموعتنا من تصاميم الأحجار والكريستال الفاخرة.",

        processTitle:
            "شاهد التصميم <span>وهو يتحول إلى حقيقة.</span>",

        processText:
            "انزل للأسفل وتابع رحلة التصميم من وضع الأحجار حتى النتيجة النهائية.",

        applicationsTitle:
            "حيث يمكن لتصاميمك <span>أن تتألق.</span>",

        customTitle:
            "عندك فكرة؟ <span>خلّيها تلمع.</span>",

        customText:
            "أرسل لنا شعارك أو فكرتك وسنحوّلها إلى تصميم احترافي من الأحجار.",

        startProject:
            "ابدأ مشروعك",

        contactTitle:
            "جاهز لعمل <span>شيء مميز؟</span>",

        viewLocation:
            "شاهد موقعنا"

    }

};


/* =========================================================
   LANGUAGE SWITCH
========================================================= */

const languageButtons =
    document.querySelectorAll(
        ".language-btn"
    );


languageButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const language =
                    button.dataset.language;


                languageButtons.forEach(
                    (btn) => {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                document
                    .querySelectorAll(
                        "[data-lang]"
                    )
                    .forEach(
                        (element) => {

                            const key =
                                element.dataset.lang;


                            if (
                                translations[language][key]
                            ) {

                                element.innerHTML =
                                    translations[language][key];

                            }

                        }
                    );


                if (
                    language === "ar"
                ) {

                    document.body.classList.add(
                        "rtl"
                    );

                    document.documentElement.lang =
                        "ar";

                }

                else {

                    document.body.classList.remove(
                        "rtl"
                    );

                    document.documentElement.lang =
                        language;

                }

            }
        );

    );


/* =========================================================
   INITIAL STATE
========================================================= */

updateSlider();

fabrics[0].classList.add(
    "active"
);