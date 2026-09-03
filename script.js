/* =========================
   LOADER
========================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.style.opacity = "0";

        loader.style.transition = "opacity 0.5s ease";

        setTimeout(function () {

            loader.style.display = "none";

        }, 500);

    }, 600);

});



/* =========================
   SIDE MENU
========================= */

const menuButton = document.getElementById("menuButton");

const sideMenu = document.getElementById("sideMenu");

const closeMenu = document.getElementById("closeMenu");

const menuOverlay = document.getElementById("menuOverlay");

const menuLinks = document.querySelectorAll(".menu-link");


function openMenu() {

    sideMenu.classList.add("active");

    menuOverlay.classList.add("active");

    document.body.style.overflow = "hidden";

}


function hideMenu() {

    sideMenu.classList.remove("active");

    menuOverlay.classList.remove("active");

    document.body.style.overflow = "";

}


menuButton.addEventListener("click", openMenu);

closeMenu.addEventListener("click", hideMenu);

menuOverlay.addEventListener("click", hideMenu);


menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        hideMenu();

    });

});



/* =========================
   LANGUAGE SELECTOR
========================= */

const languageButton =
    document.getElementById("languageButton");

const languageDropdown =
    document.getElementById("languageDropdown");

const currentLanguage =
    document.getElementById("currentLanguage");

const languageOptions =
    document.querySelectorAll(".language-option");


languageButton.addEventListener("click", function (event) {

    event.stopPropagation();

    languageDropdown.classList.toggle("active");

});


languageOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        const language = this.dataset.lang;

        if (language === "tr") {
            currentLanguage.textContent = "TR";
        }

        if (language === "en") {
            currentLanguage.textContent = "EN";
        }

        if (language === "ar") {
            currentLanguage.textContent = "AR";
        }

        languageDropdown.classList.remove("active");

    });

});


document.addEventListener("click", function () {

    languageDropdown.classList.remove("active");

});



/* =========================
   HERO SLIDER
========================= */

const slides =
    document.querySelectorAll(".slide");

const nextButton =
    document.getElementById("nextSlide");

const prevButton =
    document.getElementById("prevSlide");

const sliderDots =
    document.getElementById("sliderDots");


let currentSlide = 0;

let sliderInterval;


/* CREATE DOTS */

slides.forEach(function (slide, index) {

    const dot = document.createElement("button");

    dot.classList.add("slider-dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", function () {

        showSlide(index);

        restartSlider();

    });

    sliderDots.appendChild(dot);

});


const dots =
    document.querySelectorAll(".slider-dot");


/* SHOW SLIDE */

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


/* NEXT */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}


/* PREVIOUS */

function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide =
            slides.length - 1;

    }

    showSlide(currentSlide);

}


/* BUTTONS */

nextButton.addEventListener("click", function () {

    nextSlide();

    restartSlider();

});


prevButton.addEventListener("click", function () {

    previousSlide();

    restartSlider();

});


/* AUTO SLIDER */

function startSlider() {

    sliderInterval =
        setInterval(nextSlide, 4500);

}


function restartSlider() {

    clearInterval(sliderInterval);

    startSlider();

}


startSlider();



/* =========================
   PRODUCT DATA
========================= */

const products = {

    1: {
        image: "images/1.png",
        code: "01 · AB-SLV-001",
        title: "SILVER HOTFIX",
        subtitle: "Crystal Silver"
    },

    2: {
        image: "images/2.png",
        code: "02 · AB-LS-002",
        title: "LIGHT SIAM",
        subtitle: "Light Siam Red"
    },

    3: {
        image: "images/3.png",
        code: "03 · AB-SM-003",
        title: "SIAM RED",
        subtitle: "Deep Red Crystal"
    },

    4: {
        image: "images/4.png",
        code: "04 · AB-RS-004",
        title: "ROSE CRYSTAL",
        subtitle: "Premium Rose Tone"
    },

    5: {
        image: "images/5.png",
        code: "05 · AB-CH-005",
        title: "CHAMPAGNE GOLD",
        subtitle: "Warm Golden Crystal"
    },

    6: {
        image: "images/6.png",
        code: "06 · AB-AB-006",
        title: "AURORA CRYSTAL",
        subtitle: "Multicolor Reflection"
    },

    7: {
        image: "images/7.png",
        code: "07 · AB-CR-007",
        title: "CRYSTAL CLEAR",
        subtitle: "Brilliant Clear Effect"
    },

    8: {
        image: "images/8.png",
        code: "08 · AB-GL-008",
        title: "GOLDEN LIGHT",
        subtitle: "Bright Gold Tone"
    },

    9: {
        image: "images/9.png",
        code: "09 · AB-LX-009",
        title: "LUXURY MIX",
        subtitle: "Premium Mixed Crystal"
    },

    10: {
        image: "images/10.png",
        code: "10 · AB-PR-010",
        title: "PREMIUM SHINE",
        subtitle: "Signature Collection"
    }

};



/* =========================
   PRODUCT MODAL
========================= */

const productCards =
    document.querySelectorAll(".product-card");

const productModal =
    document.getElementById("productModal");

const closeModal =
    document.getElementById("closeModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalProductImage =
    document.getElementById("modalProductImage");

const modalCode =
    document.getElementById("modalCode");

const modalTitle =
    document.getElementById("modalTitle");

const modalSubtitle =
    document.getElementById("modalSubtitle");


function openProduct(productId) {

    const product = products[productId];

    if (!product) {
        return;
    }


    modalProductImage.src =
        product.image;

    modalProductImage.alt =
        product.title;


    modalCode.textContent =
        product.code;

    modalTitle.textContent =
        product.title;

    modalSubtitle.textContent =
        product.subtitle;


    productModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function hideProduct() {

    productModal.classList.remove("active");

    document.body.style.overflow = "";

}


productCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const productId =
            this.dataset.product;

        openProduct(productId);

    });

});


closeModal.addEventListener(
    "click",
    hideProduct
);


modalOverlay.addEventListener(
    "click",
    hideProduct
);



/* =========================
   ESC KEY
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            hideMenu();

            hideProduct();

            languageDropdown.classList.remove(
                "active"
            );

        }

    }
);