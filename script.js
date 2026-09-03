/* ========================================================= */
/* ELEMENTS */
/* ========================================================= */

const slides = document.querySelectorAll(".hero-slide");

const dots = document.querySelectorAll(".slider-dot");

const nextButton = document.getElementById("nextSlide");

const prevButton = document.getElementById("prevSlide");



/* ========================================================= */
/* SLIDER */
/* ========================================================= */

let currentSlide = 0;

let sliderInterval;



function showSlide(index) {


    slides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    dots.forEach(function (dot) {

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



function previousSlide() {


    currentSlide--;


    if (currentSlide < 0) {

        currentSlide = slides.length - 1;

    }


    showSlide(currentSlide);

}



/* ========================================================= */
/* AUTO SLIDER */
/* ========================================================= */

function startSlider() {


    sliderInterval = setInterval(function () {

        nextSlide();

    }, 4500);

}



function resetSlider() {


    clearInterval(sliderInterval);

    startSlider();

}



/* ========================================================= */
/* BUTTON EVENTS */
/* ========================================================= */

if (nextButton) {


    nextButton.addEventListener("click", function () {

        nextSlide();

        resetSlider();

    });

}



if (prevButton) {


    prevButton.addEventListener("click", function () {

        previousSlide();

        resetSlider();

    });

}



/* ========================================================= */
/* DOT EVENTS */
/* ========================================================= */

dots.forEach(function (dot, index) {


    dot.addEventListener("click", function () {

        showSlide(index);

        resetSlider();

    });


});



startSlider();





/* ========================================================= */
/* LANGUAGE MENU */
/* ========================================================= */

const languageButton =
    document.getElementById("languageButton");


const languageDropdown =
    document.getElementById("languageDropdown");


const currentLanguage =
    document.getElementById("currentLanguage");


const languageOptions =
    document.querySelectorAll(".language-option");



languageButton.addEventListener("click", function () {


    languageDropdown.classList.toggle("show");


});



languageOptions.forEach(function (option) {


    option.addEventListener("click", function () {


        const selectedLanguage =
            option.dataset.language;



        if (selectedLanguage === "tr") {

            currentLanguage.textContent = "TR";

        }


        if (selectedLanguage === "en") {

            currentLanguage.textContent = "EN";

        }


        if (selectedLanguage === "ar") {

            currentLanguage.textContent = "AR";

        }



        languageDropdown.classList.remove("show");


        changeLanguage(selectedLanguage);


    });


});



/* ========================================================= */
/* TRANSLATIONS */
/* ========================================================= */

const translations = {


    tr: {

        home: "ANA SAYFA",

        collection: "KOLEKSİYON",

        about: "HAKKIMIZDA",

        applications: "UYGULAMALAR",

        contact: "İLETİŞİM"

    },


    en: {

        home: "HOME",

        collection: "COLLECTION",

        about: "ABOUT US",

        applications: "APPLICATIONS",

        contact: "CONTACT"

    },


    ar: {

        home: "الرئيسية",

        collection: "المجموعة",

        about: "من نحن",

        applications: "الاستخدامات",

        contact: "اتصل بنا"

    }


};



function changeLanguage(language) {


    const elements =
        document.querySelectorAll("[data-i18n]");



    elements.forEach(function (element) {


        const key =
            element.dataset.i18n;



        if (
            translations[language]
            &&
            translations[language][key]
        ) {

            element.textContent =
                translations[language][key];

        }


    });



    if (language === "ar") {

        document.body.dir = "rtl";

    } else {

        document.body.dir = "ltr";

    }


}





/* ========================================================= */
/* CLOSE LANGUAGE MENU */
/* ========================================================= */

document.addEventListener("click", function (event) {


    if (
        !languageButton.contains(event.target)
        &&
        !languageDropdown.contains(event.target)
    ) {

        languageDropdown.classList.remove("show");

    }


});





/* ========================================================= */
/* PRODUCT MODAL */
/* ========================================================= */

const productCards =
    document.querySelectorAll(".product-card");


const productModal =
    document.getElementById("productModal");


const modalOverlay =
    document.getElementById("modalOverlay");


const modalClose =
    document.getElementById("modalClose");


const modalProductImage =
    document.getElementById("modalProductImage");


const modalProductCode =
    document.getElementById("modalProductCode");


const modalProductName =
    document.getElementById("modalProductName");


const modalProductColor =
    document.getElementById("modalProductColor");



productCards.forEach(function (card) {


    card.addEventListener("click", function () {


        const image =
            card.dataset.image;


        const name =
            card.dataset.name;


        const code =
            card.dataset.code;


        const color =
            card.dataset.color;



        modalProductImage.src =
            image;


        modalProductImage.alt =
            name;


        modalProductName.textContent =
            name;


        modalProductCode.textContent =
            code;


        modalProductColor.textContent =
            color;



        productModal.classList.add("show");


        document.body.style.overflow =
            "hidden";


    });


});





/* ========================================================= */
/* CLOSE MODAL */
/* ========================================================= */

function closeModal() {


    productModal.classList.remove("show");


    document.body.style.overflow =
        "auto";


}



modalClose.addEventListener("click", closeModal);


modalOverlay.addEventListener("click", closeModal);



document.addEventListener("keydown", function (event) {


    if (event.key === "Escape") {

        closeModal();

    }


});





/* ========================================================= */
/* MOBILE MENU */
/* ========================================================= */

const mobileMenuButton =
    document.getElementById("mobileMenuButton");


const sidebar =
    document.getElementById("sidebar");



mobileMenuButton.addEventListener("click", function () {


    sidebar.classList.toggle("open");


});



/* ========================================================= */
/* MOBILE MENU CLOSE AFTER CLICK */
/* ========================================================= */

const navigationLinks =
    document.querySelectorAll(".nav-link");


navigationLinks.forEach(function (link) {


    link.addEventListener("click", function () {


        if (
            window.innerWidth <= 768
        ) {

            sidebar.classList.remove("open");

        }


    });


});





/* ========================================================= */
/* ACTIVE MENU ON SCROLL */
/* ========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );



window.addEventListener(
    "scroll",
    function () {


        let current = "";



        sections.forEach(function (section) {


            const sectionTop =
                section.offsetTop - 150;


            const sectionHeight =
                section.offsetHeight;



            if (
                window.scrollY >= sectionTop
                &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                current =
                    section.getAttribute("id");

            }


        });



        navigationLinks.forEach(
            function (link) {


                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href")
                    === "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }


            }
        );


    }
);