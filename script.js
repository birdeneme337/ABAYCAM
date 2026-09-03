document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       PRELOADER / INTRO
    ========================================= */

    const preloader = document.querySelector(".preloader");
    const body = document.body;

    // Site hiçbir zaman loading ekranında takılı kalmasın
    setTimeout(() => {
        if (preloader) {
            preloader.classList.add("hide");

            setTimeout(() => {
                preloader.style.display = "none";
                body.classList.remove("loading");
            }, 700);
        }
    }, 1200);


    /* =========================================
       HEADER
    ========================================= */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (!header) return;

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });


    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuButton = document.querySelector(".menu-button");
    const sideMenu = document.querySelector(".side-menu");
    const menuOverlay = document.querySelector(".menu-overlay");
    const closeMenu = document.querySelector(".close-menu");

    function openMenu() {
        if (sideMenu) sideMenu.classList.add("active");
        if (menuOverlay) menuOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeSideMenu() {
        if (sideMenu) sideMenu.classList.remove("active");
        if (menuOverlay) menuOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    if (menuButton) {
        menuButton.addEventListener("click", openMenu);
    }

    if (closeMenu) {
        closeMenu.addEventListener("click", closeSideMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener("click", closeSideMenu);
    }


    /* =========================================
       LANGUAGE MENU
    ========================================= */

    const languageButton = document.querySelector(".language-button");
    const languageMenu = document.querySelector(".language-menu");

    if (languageButton && languageMenu) {
        languageButton.addEventListener("click", (event) => {
            event.stopPropagation();
            languageMenu.classList.toggle("active");
        });

        document.addEventListener("click", () => {
            languageMenu.classList.remove("active");
        });

        languageMenu.addEventListener("click", (event) => {
            event.stopPropagation();
        });
    }


    /* =========================================
       HERO SLIDER
    ========================================= */

    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".slider-dot");

    let currentSlide = 0;
    let sliderInterval;

    function showSlide(index) {

        if (!slides.length) return;

        slides.forEach((slide, i) => {
            slide.classList.remove("active");

            if (dots[i]) {
                dots[i].classList.remove("active");
            }
        });

        slides[index].classList.add("active");

        if (dots[index]) {
            dots[index].classList.add("active");
        }

        currentSlide = index;
    }


    function nextSlide() {

        if (!slides.length) return;

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    }


    // Slider hızlı geçiş
    if (slides.length > 1) {

        sliderInterval = setInterval(() => {
            nextSlide();
        }, 2500);

    }


    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            showSlide(index);

            clearInterval(sliderInterval);

            sliderInterval = setInterval(() => {
                nextSlide();
            }, 2500);

        });

    });


    /* =========================================
       COLLECTION CARDS
    ========================================= */

    const collectionCards = document.querySelectorAll(".collection-card");

    collectionCards.forEach((card) => {

        card.addEventListener("click", () => {

            collectionCards.forEach((item) => {
                item.classList.remove("selected");
            });

            card.classList.add("selected");

        });

    });


    /* =========================================
       PRODUCT MODAL
    ========================================= */

    const modal = document.querySelector(".product-modal");
    const modalClose = document.querySelector(".modal-close");

    const modalImage = document.querySelector(".modal-image img");

    const modalName = document.querySelector(".modal-name");
    const modalColor = document.querySelector(".modal-color");
    const modalCode = document.querySelector(".modal-code");
    const modalQuality = document.querySelector(".modal-quality");
    const modalDescription = document.querySelector(".modal-description");

    const productButtons = document.querySelectorAll(".product-view");


    productButtons.forEach((button) => {

        button.addEventListener("click", (event) => {

            event.stopPropagation();

            const product = button.closest(".collection-card");

            if (!product) return;

            const image = product.dataset.image;
            const name = product.dataset.name;
            const color = product.dataset.color;
            const code = product.dataset.code;
            const quality = product.dataset.quality;
            const description = product.dataset.description;


            if (modalImage) {
                modalImage.src = image || "";
            }

            if (modalName) {
                modalName.textContent = name || "";
            }

            if (modalColor) {
                modalColor.textContent = color || "";
            }

            if (modalCode) {
                modalCode.textContent = code || "";
            }

            if (modalQuality) {
                modalQuality.textContent = quality || "";
            }

            if (modalDescription) {
                modalDescription.textContent = description || "";
            }


            if (modal) {
                modal.classList.add("active");
                document.body.style.overflow = "hidden";
            }

        });

    });


    function closeModal() {

        if (modal) {
            modal.classList.remove("active");
        }

        document.body.style.overflow = "";

    }


    if (modalClose) {
        modalClose.addEventListener("click", closeModal);
    }


    if (modal) {

        modal.addEventListener("click", (event) => {

            if (event.target === modal) {
                closeModal();
            }

        });

    }


    /* =========================================
       SCROLL MACHINE ANIMATION
    ========================================= */

    const processSection = document.querySelector(".printing-process");
    const fabricRoll = document.querySelector(".fabric-roll");
    const machineHead = document.querySelector(".machine-head");

    function animateMachine() {

        if (!processSection) return;

        const rect = processSection.getBoundingClientRect();

        const windowHeight = window.innerHeight;

        let progress =
            (windowHeight - rect.top) /
            (windowHeight + rect.height);

        progress = Math.max(0, Math.min(progress, 1));


        // Kumaşın makineden çıkma mesafesi
        if (fabricRoll) {

            const scaleValue = 0.05 + progress * 0.95;

            fabricRoll.style.transform =
                `scaleY(${scaleValue})`;

            fabricRoll.style.transformOrigin = "top";

        }


        // Makine kafasının hareketi
        if (machineHead) {

            const moveX = Math.sin(progress * Math.PI * 4) * 35;

            machineHead.style.transform =
                `translateX(${moveX}px)`;

        }


        // Section içindeki CSS değişkeni
        processSection.style.setProperty(
            "--printing-progress",
            progress
        );

    }


    window.addEventListener(
        "scroll",
        animateMachine,
        { passive: true }
    );

    animateMachine();


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


        revealElements.forEach((element) => {
            observer.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("visible");
        });

    }


    /* =========================================
       SMOOTH MENU SCROLL
    ========================================= */

    const anchorLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    anchorLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                closeSideMenu();

            }

        });

    });


    /* =========================================
       SAFETY FALLBACK
       SITE ASLA PRELOADER'DA KALMASIN
    ========================================= */

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (preloader &&
                preloader.style.display !== "none") {

                preloader.classList.add("hide");

                setTimeout(() => {
                    preloader.style.display = "none";
                    body.classList.remove("loading");
                }, 500);

            }

        }, 300);

    });

});