document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       PRODUCT DATA
    ========================================= */

    const products = [
        {
            id: 1,
            image: "1.png",
            code: "AB-SLV-001",
            title: "SILVER HOTFIX",
            subtitle: "Crystal Silver",
            color: "Crystal Silver",
            quality: "Premium",
            type: "Hotfix Stone",
            application: "Textile / Garment",
            description:
                "Parlak ve temiz kristal görünümü sağlayan premium silver hotfix taş. Tekstil ve moda uygulamalarında güçlü ışık yansıması sağlar."
        },
        {
            id: 2,
            image: "2.png",
            code: "AB-LS-002",
            title: "LIGHT SIAM",
            subtitle: "Light Siam Red",
            color: "Light Siam",
            quality: "Premium",
            type: "Hotfix Stone",
            application: "Textile / Fashion",
            description:
                "Canlı kırmızı tonuyla dikkat çeken premium taş. Moda, tekstil ve dekoratif uygulamalar için uygundur."
        },
        {
            id: 3,
            image: "3.png",
            code: "AB-SM-003",
            title: "SIAM RED",
            subtitle: "Deep Red Crystal",
            color: "Siam Red",
            quality: "Premium",
            type: "Crystal Stone",
            application: "Textile / Garment",
            description:
                "Derin kırmızı renk ve güçlü parlaklık sunan kristal taş. Özel tasarımlara güçlü ve dikkat çekici bir görünüm kazandırır."
        },
        {
            id: 4,
            image: "4.png",
            code: "AB-RS-004",
            title: "ROSE CRYSTAL",
            subtitle: "Premium Rose Tone",
            color: "Rose",
            quality: "Premium",
            type: "Crystal Stone",
            application: "Fashion / Textile",
            description:
                "Yumuşak rose tonuna sahip premium kristal taş. Zarif ve feminen tasarımlar için ideal bir seçimdir."
        },
        {
            id: 5,
            image: "5.png",
            code: "AB-CH-005",
            title: "CHAMPAGNE GOLD",
            subtitle: "Warm Golden Crystal",
            color: "Champagne Gold",
            quality: "Premium",
            type: "Crystal Stone",
            application: "Fashion / Textile",
            description:
                "Sıcak altın ve champagne tonlarını bir araya getiren premium taş. Lüks ve sofistike tasarımlar için uygundur."
        },
        {
            id: 6,
            image: "6.png",
            code: "AB-AB-006",
            title: "AURORA CRYSTAL",
            subtitle: "Multicolor Reflection",
            color: "Aurora",
            quality: "Premium",
            type: "Crystal Stone",
            application: "Fashion / Stage / Textile",
            description:
                "Farklı açılarda renk değiştiren aurora yansımasına sahip özel kristal taş."
        },
        {
            id: 7,
            image: "7.png",
            code: "AB-CR-007",
            title: "CRYSTAL CLEAR",
            subtitle: "Brilliant Clear Effect",
            color: "Crystal Clear",
            quality: "Premium",
            type: "Crystal Stone",
            application: "Textile / Garment",
            description:
                "Temiz ve parlak kristal görünümüyle farklı kumaş ve tasarımlarda kullanılabilen klasik taş."
        },
        {
            id: 8,
            image: "8.png",
            code: "AB-GL-008",
            title: "GOLDEN LIGHT",
            subtitle: "Bright Gold Tone",
            color: "Golden",
            quality: "Premium",
            type: "Crystal Stone",
            application: "Fashion / Textile",
            description:
                "Parlak altın tonuyla tasarımlara güçlü ve premium bir görünüm kazandıran kristal taş."
        },
        {
            id: 9,
            image: "9.png",
            code: "AB-LX-009",
            title: "LUXURY MIX",
            subtitle: "Premium Mixed Crystal",
            color: "Mixed",
            quality: "Premium",
            type: "Mixed Crystal",
            application: "Fashion / Special Design",
            description:
                "Birden fazla kristal görünümünü bir araya getiren özel koleksiyon ürünü."
        },
        {
            id: 10,
            image: "10.png",
            code: "AB-PR-010",
            title: "PREMIUM SHINE",
            subtitle: "Signature Collection",
            color: "Signature",
            quality: "Premium",
            type: "Crystal Stone",
            application: "Fashion / Textile",
            description:
                "AB AYCAM Signature Collection içerisinde yer alan premium parlaklık ve yüksek görsel etki sunan özel taş."
        }
    ];


    /* =========================================
       SIDE MENU
    ========================================= */

    const menuButton = document.getElementById("menuButton");
    const sideMenu = document.getElementById("sideMenu");
    const closeMenu = document.getElementById("closeMenu");
    const menuOverlay = document.getElementById("menuOverlay");

    function openMenu() {
        if (!sideMenu) return;

        sideMenu.classList.add("active");

        if (menuOverlay) {
            menuOverlay.classList.add("active");
        }

        document.body.classList.add("menu-open");

        if (menuButton) {
            menuButton.setAttribute("aria-expanded", "true");
        }
    }

    function closeSideMenu() {
        if (!sideMenu) return;

        sideMenu.classList.remove("active");

        if (menuOverlay) {
            menuOverlay.classList.remove("active");
        }

        document.body.classList.remove("menu-open");

        if (menuButton) {
            menuButton.setAttribute("aria-expanded", "false");
        }
    }

    if (menuButton) {
        menuButton.addEventListener("click", () => {
            if (sideMenu && sideMenu.classList.contains("active")) {
                closeSideMenu();
            } else {
                openMenu();
            }
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener("click", closeSideMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener("click", closeSideMenu);
    }


    /* =========================================
       MENU LINKS
    ========================================= */

    document.querySelectorAll(".menu-link").forEach(link => {
        link.addEventListener("click", () => {
            closeSideMenu();
        });
    });


    /* =========================================
       LANGUAGE SELECTOR
    ========================================= */

    const languageButton = document.getElementById("languageButton");
    const languageDropdown = document.getElementById("languageDropdown");
    const currentLanguage = document.getElementById("currentLanguage");

    if (languageButton && languageDropdown) {

        languageButton.addEventListener("click", event => {
            event.stopPropagation();

            languageDropdown.classList.toggle("active");

            languageButton.setAttribute(
                "aria-expanded",
                languageDropdown.classList.contains("active")
            );
        });

        document.addEventListener("click", event => {
            if (
                !languageDropdown.contains(event.target) &&
                !languageButton.contains(event.target)
            ) {
                languageDropdown.classList.remove("active");

                languageButton.setAttribute("aria-expanded", "false");
            }
        });
    }


    /* =========================================
       BASIC LANGUAGE SUPPORT
    ========================================= */

    const translations = {

        tr: {
            language: "TR"
        },

        en: {
            language: "EN"
        },

        ar: {
            language: "AR"
        }

    };

    document.querySelectorAll(".language-option").forEach(option => {

        option.addEventListener("click", () => {

            const lang = option.dataset.lang;

            if (!lang) return;

            if (currentLanguage) {
                currentLanguage.textContent =
                    translations[lang]?.language || lang.toUpperCase();
            }

            document.documentElement.lang = lang;

            if (lang === "ar") {
                document.documentElement.dir = "rtl";
            } else {
                document.documentElement.dir = "ltr";
            }

            if (languageDropdown) {
                languageDropdown.classList.remove("active");
            }

            if (languageButton) {
                languageButton.setAttribute("aria-expanded", "false");
            }

            /*
             * Eğer HTML içerisinde data-tr / data-en / data-ar
             * bulunan elementler varsa otomatik olarak değiştir.
             */

            document.querySelectorAll("[data-tr]").forEach(element => {

                const translatedText = element.dataset[lang];

                if (translatedText) {
                    element.textContent = translatedText;
                }

            });

        });

    });


    /* =========================================
       HERO SLIDER
    ========================================= */

    const slides = document.querySelectorAll(".slide");
    const nextSlide = document.getElementById("nextSlide");
    const prevSlide = document.getElementById("prevSlide");
    const sliderDots = document.getElementById("sliderDots");

    let currentSlide = 0;
    let sliderInterval;


    function showSlide(index) {

        if (!slides.length) return;

        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        slides.forEach((slide, i) => {

            slide.classList.toggle(
                "active",
                i === currentSlide
            );

        });

        if (sliderDots) {

            const dots =
                sliderDots.querySelectorAll(".slider-dot");

            dots.forEach((dot, i) => {

                dot.classList.toggle(
                    "active",
                    i === currentSlide
                );

            });

        }

    }


    function createSliderDots() {

        if (!sliderDots || !slides.length) return;

        sliderDots.innerHTML = "";

        slides.forEach((_, index) => {

            const dot = document.createElement("button");

            dot.type = "button";
            dot.className = "slider-dot";

            dot.setAttribute(
                "aria-label",
                `Slide ${index + 1}`
            );

            dot.addEventListener("click", () => {

                showSlide(index);
                restartSlider();

            });

            sliderDots.appendChild(dot);

        });

    }


    function startSlider() {

        if (slides.length <= 1) return;

        sliderInterval = setInterval(() => {

            showSlide(currentSlide + 1);

        }, 5000);

    }


    function restartSlider() {

        clearInterval(sliderInterval);

        startSlider();

    }


    if (nextSlide) {

        nextSlide.addEventListener("click", () => {

            showSlide(currentSlide + 1);
            restartSlider();

        });

    }


    if (prevSlide) {

        prevSlide.addEventListener("click", () => {

            showSlide(currentSlide - 1);
            restartSlider();

        });

    }


    createSliderDots();
    showSlide(0);
    startSlider();


    /* =========================================
       PRODUCT MODAL
    ========================================= */

    const productModal = document.getElementById("productModal");
    const modalOverlay = document.getElementById("modalOverlay");
    const closeModal = document.getElementById("closeModal");

    const modalProductImage =
        document.getElementById("modalProductImage");

    const modalCode =
        document.getElementById("modalCode");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalSubtitle =
        document.getElementById("modalSubtitle");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalColor =
        document.getElementById("modalColor");

    const modalQuality =
        document.getElementById("modalQuality");

    const modalApplication =
        document.getElementById("modalApplication");

    const modalType =
        document.getElementById("modalType");

    const modalRequestButton =
        document.getElementById("modalRequestButton");


    function openProductModal(product) {

        if (!productModal || !product) return;


        if (modalProductImage) {
            modalProductImage.src = product.image;
            modalProductImage.alt = product.title;

            modalProductImage.onerror = function () {
                console.warn(
                    "Görsel bulunamadı:",
                    product.image
                );
            };
        }


        if (modalCode) {
            modalCode.textContent =
                product.code;
        }


        if (modalTitle) {
            modalTitle.textContent =
                product.title;
        }


        if (modalSubtitle) {
            modalSubtitle.textContent =
                product.subtitle;
        }


        if (modalDescription) {
            modalDescription.textContent =
                product.description;
        }


        if (modalColor) {
            modalColor.textContent =
                product.color;
        }


        if (modalQuality) {
            modalQuality.textContent =
                product.quality;
        }


        if (modalApplication) {
            modalApplication.textContent =
                product.application;
        }


        if (modalType) {
            modalType.textContent =
                product.type;
        }


        if (modalRequestButton) {

            const subject =
                encodeURIComponent(
                    `AB AYCAM Product Inquiry - ${product.code}`
                );

            modalRequestButton.href =
                `mailto:levent.aslan@abaycam.com?subject=${subject}`;

        }


        productModal.classList.add("active");

        document.body.classList.add("modal-open");

    }


    function closeProductModal() {

        if (!productModal) return;

        productModal.classList.remove("active");

        document.body.classList.remove("modal-open");

    }


    /* =========================================
       PRODUCT CARDS
    ========================================= */

    document.querySelectorAll(".product-card").forEach(card => {

        card.addEventListener("click", () => {

            const productId =
                Number(card.dataset.product);

            const product =
                products.find(
                    item => item.id === productId
                );

            if (product) {
                openProductModal(product);
            }

        });

    });


    if (closeModal) {
        closeModal.addEventListener(
            "click",
            closeProductModal
        );
    }


    if (modalOverlay) {
        modalOverlay.addEventListener(
            "click",
            closeProductModal
        );
    }


    /* =========================================
       ESC KEY
    ========================================= */

    document.addEventListener("keydown", event => {

        if (event.key !== "Escape") return;

        closeSideMenu();
        closeProductModal();

        if (languageDropdown) {
            languageDropdown.classList.remove("active");
        }

    });


    /* =========================================
       IMAGE ERROR CHECK
    ========================================= */

    document.querySelectorAll("img").forEach(img => {

        img.addEventListener("error", () => {

            console.warn(
                "AB AYCAM: Görsel yüklenemedi →",
                img.getAttribute("src")
            );

        });

    });


    /* =========================================
       MOBILE TOUCH SUPPORT
    ========================================= */

    let touchStartX = 0;
    let touchEndX = 0;


    if (document.querySelector(".hero-slider")) {

        const slider =
            document.querySelector(".hero-slider");


        slider.addEventListener(
            "touchstart",
            event => {

                touchStartX =
                    event.changedTouches[0].screenX;

            },
            { passive: true }
        );


        slider.addEventListener(
            "touchend",
            event => {

                touchEndX =
                    event.changedTouches[0].screenX;

                const difference =
                    touchStartX - touchEndX;


                if (Math.abs(difference) < 50) {
                    return;
                }


                if (difference > 0) {

                    showSlide(currentSlide + 1);

                } else {

                    showSlide(currentSlide - 1);

                }

                restartSlider();

            },
            { passive: true }
        );

    }


    /* =========================================
       INITIAL STATE
    ========================================= */

    if (menuButton) {
        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }

    if (languageButton) {
        languageButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }

});