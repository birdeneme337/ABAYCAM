/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList
            .add("hide");

    }, 1200);

});


/* =========================================================
   LANGUAGE SELECTOR
========================================================= */

const languageSelector =
    document.querySelector(".language-selector");

const languageButton =
    document.getElementById("languageButton");

const currentLanguage =
    document.getElementById("currentLanguage");


languageButton.addEventListener("click", () => {

    languageSelector.classList.toggle("open");

});


document.addEventListener("click", (event) => {

    if (!languageSelector.contains(event.target)) {

        languageSelector.classList.remove("open");

    }

});


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    tr: {

        home: "ANA SAYFA",

        collection: "KOLEKSİYON",

        process: "SÜRECİMİZ",

        applications: "UYGULAMALAR",

        custom: "ÖZEL TASARIM",

        contact: "İLETİŞİM",

        heroText:
            "Kumaş ve tekstil ürünlerinizi öne çıkaran premium taş, kristal ve özel aplikasyon çözümleri.",

        explore:
            "KOLEKSİYONU KEŞFET"

    },


    en: {

        home: "HOME",

        collection: "COLLECTION",

        process: "OUR PROCESS",

        applications: "APPLICATIONS",

        custom: "CUSTOM DESIGN",

        contact: "CONTACT",

        heroText:
            "Premium stone, crystal and textile embellishment solutions designed to make every surface shine.",

        explore:
            "EXPLORE COLLECTION"

    },


    ar: {

        home: "الرئيسية",

        collection: "المجموعة",

        process: "عمليتنا",

        applications: "التطبيقات",

        custom: "تصميم خاص",

        contact: "تواصل معنا",

        heroText:
            "حلول احترافية لتزيين الأقمشة والمنسوجات بالأحجار والكريستال والتصاميم الخاصة.",

        explore:
            "اكتشف المجموعة"

    }

};


document
    .querySelectorAll(".language-dropdown button")
    .forEach(button => {


        button.addEventListener("click", () => {


            const lang =
                button.dataset.lang;


            currentLanguage.textContent =
                lang.toUpperCase();


            document
                .querySelectorAll("[data-i18n]")
                .forEach(element => {


                    const key =
                        element.dataset.i18n;


                    if (
                        translations[lang][key]
                    ) {

                        element.textContent =
                            translations[lang][key];

                    }

                });


            if (lang === "ar") {

                document.documentElement.dir = "rtl";

            } else {

                document.documentElement.dir = "ltr";

            }


            languageSelector
                .classList
                .remove("open");


        });


    });


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const sidebar =
    document.querySelector(".sidebar");


if (mobileMenuButton) {

    mobileMenuButton
        .addEventListener("click", () => {

            sidebar
                .classList
                .toggle("mobile-open");

        });

}


document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            sidebar
                .classList
                .remove("mobile-open");

        });

    });


/* =========================================================
   HERO SLIDER
========================================================= */

const slides =
    document.querySelectorAll(".hero-slide");

const currentSlideNumber =
    document.getElementById(
        "currentSlideNumber"
    );

const sliderProgress =
    document.getElementById(
        "sliderProgress"
    );


let currentSlide = 0;


/* HIZLI SLIDER */

const sliderInterval =
    2800;


function changeSlide() {


    slides[currentSlide]
        .classList
        .remove("active");


    currentSlide++;


    if (
        currentSlide >= slides.length
    ) {

        currentSlide = 0;

    }


    slides[currentSlide]
        .classList
        .add("active");


    const number =
        String(currentSlide + 1)
        .padStart(2, "0");


    currentSlideNumber.textContent =
        number;


    const progress =
        ((currentSlide + 1) /
        slides.length) * 100;


    sliderProgress.style.width =
        progress + "%";

}


setInterval(
    changeSlide,
    sliderInterval
);


/* =========================================================
   MACHINE SCROLL ANIMATION
========================================================= */

const machineSection =
    document.querySelector(
        ".machine-section"
    );


const fabrics =
    document.querySelectorAll(
        ".fabric"
    );


const processNumber =
    document.getElementById(
        "processNumber"
    );


const processTitle =
    document.getElementById(
        "processTitle"
    );


const processText =
    document.getElementById(
        "processText"
    );


const machineImage =
    document.querySelector(
        ".machine-image-wrapper"
    );


const processSteps = [

    {

        number: "01",

        title:
            "DESIGN SELECTED",

        text:
            "Preparing the pattern for precision stone application."

    },


    {

        number: "02",

        title:
            "STONE PLACEMENT",

        text:
            "Premium stones and crystals are positioned with precision."

    },


    {

        number: "03",

        title:
            "PATTERN APPLICATION",

        text:
            "The selected design is applied to the textile surface."

    },


    {

        number: "04",

        title:
            "QUALITY CONTROL",

        text:
            "Every detail is checked for consistency and brilliance."

    },


    {

        number: "05",

        title:
            "READY TO SHINE",

        text:
            "The finished design is ready for fashion and production."

    }

];


function updateMachineAnimation() {


    if (!machineSection) return;


    const rect =
        machineSection
        .getBoundingClientRect();


    const sectionHeight =
        machineSection.offsetHeight;


    const viewportHeight =
        window.innerHeight;


    let progress =
        -rect.top /
        (sectionHeight - viewportHeight);


    progress =
        Math.max(
            0,
            Math.min(
                1,
                progress
            )
        );


    const activeStep =
        Math.min(
            4,
            Math.floor(
                progress * 5
            )
        );


    fabrics.forEach(
        (fabric, index) => {


            if (
                index <= activeStep
            ) {

                fabric
                    .classList
                    .add("active");

            } else {

                fabric
                    .classList
                    .remove("active");

            }


        }
    );


    const step =
        processSteps[activeStep];


    processNumber.textContent =
        step.number;


    processTitle.textContent =
        step.title;


    processText.textContent =
        step.text;


    const machineMovement =
        Math.sin(
            progress * Math.PI * 8
        ) * 3;


    machineImage.style.transform =
        `translateY(${machineMovement}px)`;


}


window.addEventListener(
    "scroll",
    updateMachineAnimation,
    {
        passive: true
    }
);


window.addEventListener(
    "resize",
    updateMachineAnimation
);


updateMachineAnimation();


/* =========================================================
   COLLECTION DATA
========================================================= */

const designData = {

    1: {

        image:
            "images/1.jpeg",

        title:
            "SIGNATURE DESIGN",

        code:
            "AB-001",

        stone:
            "PREMIUM STONE",

        color:
            "CUSTOM COLOR",

        quality:
            "AB-Q01",

        application:
            "TEXTILE / FASHION",

        description:
            "A premium embellishment design created for modern fashion collections. Color, stone density and placement can be customized according to your production requirements."

    },


    2: {

        image:
            "images/2.jpeg",

        title:
            "BLUE CRYSTAL",

        code:
            "AB-002",

        stone:
            "CRYSTAL STONE",

        color:
            "BLUE",

        quality:
            "AB-Q02",

        application:
            "TEXTILE / FASHION",

        description:
            "A crystal-focused design offering a bright and refined appearance. Suitable for custom fashion and premium textile applications."

    },


    3: {

        image:
            "images/3.jpeg",

        title:
            "MODERN FLORAL",

        code:
            "AB-003",

        stone:
            "PREMIUM STONE",

        color:
            "MULTI COLOR",

        quality:
            "AB-Q03",

        application:
            "TEXTILE DECORATION",

        description:
            "An artistic pattern developed for collections that require visual impact and detailed stone applications."

    },


    4: {

        image:
            "images/4.jpeg",

        title:
            "CLASSIC SHINE",

        code:
            "AB-004",

        stone:
            "CRYSTAL",

        color:
            "CUSTOM",

        quality:
            "AB-Q04",

        application:
            "PREMIUM TEXTILE",

        description:
            "A classic and elegant stone application suitable for fashion brands looking for timeless visual impact."

    },


    5: {

        image:
            "images/5.jpeg",

        title:
            "GEOMETRIC DETAIL",

        code:
            "AB-005",

        stone:
            "STONE / CRYSTAL",

        color:
            "CUSTOM",

        quality:
            "AB-Q05",

        application:
            "CUSTOM DESIGN",

        description:
            "A modern geometric concept developed for custom collections and branded textile projects."

    },


    6: {

        image:
            "images/6.jpeg",

        title:
            "LUXE PATTERN",

        code:
            "AB-006",

        stone:
            "PREMIUM STONE",

        color:
            "CUSTOM",

        quality:
            "AB-Q06",

        application:
            "FASHION",

        description:
            "A luxury-focused pattern with customizable stone placement, colors and production specifications."

    },


    7: {

        image:
            "images/7.jpeg",

        title:
            "ARTISTIC FLOW",

        code:
            "AB-007",

        stone:
            "STONE DETAIL",

        color:
            "MULTI COLOR",

        quality:
            "AB-Q07",

        application:
            "TEXTILE",

        description:
            "An expressive design created for artistic and visually distinctive textile collections."

    },


    8: {

        image:
            "images/8.jpeg",

        title:
            "CRYSTAL MOTION",

        code:
            "AB-008",

        stone:
            "CRYSTAL",

        color:
            "CUSTOM",

        quality:
            "AB-Q08",

        application:
            "FASHION DETAIL",

        description:
            "A premium crystal application developed to create movement, shine and depth across the textile surface."

    },


    9: {

        image:
            "images/9.jpeg",

        title:
            "PREMIUM LINE",

        code:
            "AB-009",

        stone:
            "PREMIUM STONE",

        color:
            "CUSTOM",

        quality:
            "AB-Q09",

        application:
            "FASHION",

        description:
            "A premium quality design suitable for brands looking for elegant and consistent embellishment applications."

    },


    10: {

        image:
            "images/10.jpeg",

        title:
            "SIGNATURE LUXE",

        code:
            "AB-010",

        stone:
            "PREMIUM CRYSTAL",

        color:
            "CUSTOM",

        quality:
            "AB-Q10",

        application:
            "CUSTOM COLLECTION",

        description:
            "A signature luxury design developed for premium collections and fully customizable production projects."

    }

};


/* =========================================================
   MODAL
========================================================= */

const modal =
    document.getElementById(
        "designModal"
    );


const closeModal =
    document.getElementById(
        "closeModal"
    );


const modalImage =
    document.getElementById(
        "modalImage"
    );


const modalNumber =
    document.getElementById(
        "modalNumber"
    );


const modalTitle =
    document.getElementById(
        "modalTitle"
    );


const modalCode =
    document.getElementById(
        "modalCode"
    );


const modalStone =
    document.getElementById(
        "modalStone"
    );


const modalColor =
    document.getElementById(
        "modalColor"
    );


const modalQuality =
    document.getElementById(
        "modalQuality"
    );


const modalApplication =
    document.getElementById(
        "modalApplication"
    );


const modalDescription =
    document.getElementById(
        "modalDescription"
    );


document
    .querySelectorAll(
        ".collection-card"
    )
    .forEach(card => {


        card.addEventListener(
            "click",
            () => {


                const id =
                    card.dataset.id;


                const data =
                    designData[id];


                modalImage.src =
                    data.image;


                modalNumber.textContent =
                    "DESIGN " +
                    String(id)
                    .padStart(
                        2,
                        "0"
                    );


                modalTitle.textContent =
                    data.title;


                modalCode.textContent =
                    data.code;


                modalStone.textContent =
                    data.stone;


                modalColor.textContent =
                    data.color;


                modalQuality.textContent =
                    data.quality;


                modalApplication.textContent =
                    data.application;


                modalDescription.textContent =
                    data.description;


                modal
                    .classList
                    .add("show");


                document.body
                    .classList
                    .add("modal-open");


            }

        );


    });


function closeDesignModal() {


    modal
        .classList
        .remove("show");


    document.body
        .classList
        .remove("modal-open");


}


closeModal.addEventListener(
    "click",
    closeDesignModal
);


document
    .querySelector(
        ".modal-backdrop"
    )
    .addEventListener(
        "click",
        closeDesignModal
    );


document.addEventListener(
    "keydown",
    event => {


        if (
            event.key === "Escape"
        ) {

            closeDesignModal();

        }


    }
);


/* =========================================================
   MODAL CONTACT BUTTON
========================================================= */

const modalContactButton =
    document.getElementById(
        "modalContactButton"
    );


modalContactButton.addEventListener(
    "click",
    () => {


        closeDesignModal();


    }
);


/* =========================================================
   ACTIVE MENU ON SCROLL
========================================================= */

const sections =
    document.querySelectorAll(
        "main section"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener(
    "scroll",
    () => {


        let current =
            "";


        sections.forEach(
            section => {


                const sectionTop =
                    section.offsetTop;


                if (
                    window.scrollY >=
                    sectionTop - 250
                ) {

                    current =
                        section.getAttribute("id");

                }


            }
        );


        navLinks.forEach(
            link => {


                link
                    .classList
                    .remove("active");


                if (
                    link
                    .getAttribute("href")
                    === "#" + current
                ) {

                    link
                        .classList
                        .add("active");

                }


            }
        );


    },
    {
        passive: true
    }
);


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm.addEventListener(
    "submit",
    event => {


        event.preventDefault();


        alert(
            "Thank you! Your request has been received."
        );


        contactForm.reset();


    }
);