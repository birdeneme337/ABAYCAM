document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       MENU
    ========================= */

    const menuButton =
        document.getElementById("menuButton");

    const closeMenu =
        document.getElementById("closeMenu");

    const sideMenu =
        document.getElementById("sideMenu");

    const menuOverlay =
        document.getElementById("menuOverlay");


    function openMenu() {

        sideMenu.classList.add("active");

        menuOverlay.classList.add("active");

        document.body.style.overflow =
            "hidden";
    }


    function closeSideMenu() {

        sideMenu.classList.remove("active");

        menuOverlay.classList.remove("active");

        document.body.style.overflow =
            "";
    }


    if (menuButton) {

        menuButton.addEventListener(
            "click",
            openMenu
        );

    }


    if (closeMenu) {

        closeMenu.addEventListener(
            "click",
            closeSideMenu
        );

    }


    if (menuOverlay) {

        menuOverlay.addEventListener(
            "click",
            closeSideMenu
        );

    }


    document.querySelectorAll(
        ".nav-link"
    ).forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                closeSideMenu();

            }
        );

    });



    /* =========================
       LANGUAGE MENU
    ========================= */

    const languageButton =
        document.getElementById(
            "languageButton"
        );

    const languageMenu =
        document.getElementById(
            "languageMenu"
        );

    const currentLanguage =
        document.getElementById(
            "currentLanguage"
        );


    if (languageButton) {

        languageButton.addEventListener(
            "click",
            function () {

                languageMenu.classList.toggle(
                    "active"
                );

            }
        );

    }



    document.querySelectorAll(
        ".language-option"
    ).forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const language =
                    button.dataset.language;


                changeLanguage(
                    language
                );


                languageMenu.classList.remove(
                    "active"
                );

            }
        );

    });



    function changeLanguage(
        language
    ) {

        currentLanguage.textContent =
            language.toUpperCase();


        document.querySelectorAll(
            "[data-" + language + "]"
        ).forEach(function (element) {

            const newText =
                element.getAttribute(
                    "data-" + language
                );


            if (newText) {

                element.innerHTML =
                    newText;

            }

        });


        if (
            language === "ar"
        ) {

            document.documentElement.dir =
                "rtl";

            document.body.style.direction =
                "rtl";

        }

        else {

            document.documentElement.dir =
                "ltr";

            document.body.style.direction =
                "ltr";

        }

    }



    /* =========================
       HERO SLIDER
    ========================= */

    const slides =
        document.querySelectorAll(
            ".slide"
        );


    const slideNumber =
        document.getElementById(
            "slideNumber"
        );


    let currentSlide = 0;


    function showSlide(
        index
    ) {

        slides.forEach(
            function (
                slide,
                slideIndex
            ) {

                slide.classList.remove(
                    "active"
                );


                if (
                    slideIndex === index
                ) {

                    slide.classList.add(
                        "active"
                    );

                }

            }
        );


        if (
            slideNumber
        ) {

            const number =
                index + 1;


            slideNumber.textContent =
                number
                    .toString()
                    .padStart(
                        2,
                        "0"
                    );

        }

    }


    if (
        slides.length > 1
    ) {

        setInterval(
            function () {

                currentSlide++;


                if (
                    currentSlide >=
                    slides.length
                ) {

                    currentSlide = 0;

                }


                showSlide(
                    currentSlide
                );

            },

            2500
        );

    }



    /* =========================
       PRODUCT DATA
    ========================= */

    const productData = {

        "1": {

            image:
                "images/1.jpeg",

            number:
                "01",

            title:
                "STONE BLOSSOM",

            pattern:
                "Floral",

            color:
                "Blue",

            code:
                "AB-001"

        },


        "2": {

            image:
                "images/2.jpeg",

            number:
                "02",

            title:
                "MIDNIGHT CRYSTAL",

            pattern:
                "Geometric",

            color:
                "Navy",

            code:
                "AB-002"

        },


        "3": {

            image:
                "images/3.jpeg",

            number:
                "03",

            title:
                "LUXE FLOW",

            pattern:
                "Abstract",

            color:
                "Silver",

            code:
                "AB-003"

        },


        "4": {

            image:
                "images/4.jpeg",

            number:
                "04",

            title:
                "MODERN GLITTER",

            pattern:
                "Modern",

            color:
                "Black",

            code:
                "AB-004"

        },


        "5": {

            image:
                "images/5.jpeg",

            number:
                "05",

            title:
                "ELEGANT SHINE",

            pattern:
                "Classic",

            color:
                "Gold",

            code:
                "AB-005"

        },


        "6": {

            image:
                "images/6.jpeg",

            number:
                "06",

            title:
                "URBAN SPARK",

            pattern:
                "Urban",

            color:
                "Grey",

            code:
                "AB-006"

        },


        "7": {

            image:
                "images/7.jpeg",

            number:
                "07",

            title:
                "CRYSTAL WAVE",

            pattern:
                "Wave",

            color:
                "White",

            code:
                "AB-007"

        },


        "8": {

            image:
                "images/8.jpeg",

            number:
                "08",

            title:
                "LUMINOUS ART",

            pattern:
                "Artistic",

            color:
                "Champagne",

            code:
                "AB-008"

        },


        "9": {

            image:
                "images/9.jpeg",

            number:
                "09",

            title:
                "SIGNATURE STONE",

            pattern:
                "Signature",

            color:
                "Black / Silver",

            code:
                "AB-009"

        },


        "10": {

            image:
                "images/10.jpeg",

            number:
                "10",

            title:
                "INFINITE BRILLIANCE",

            pattern:
                "Premium",

            color:
                "Multi Color",

            code:
                "AB-010"

        }

    };



    /* =========================
       PRODUCT MODAL
    ========================= */

    const productModal =
        document.getElementById(
            "productModal"
        );


    const modalOverlay =
        document.getElementById(
            "modalOverlay"
        );


    const modalClose =
        document.getElementById(
            "modalClose"
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


    const modalPattern =
        document.getElementById(
            "modalPattern"
        );


    const modalColor =
        document.getElementById(
            "modalColor"
        );


    const modalCode =
        document.getElementById(
            "modalCode"
        );


    function openProduct(
        productId
    ) {

        const product =
            productData[
                productId
            ];


        if (
            !product
        ) {

            return;

        }


        modalImage.src =
            product.image;


        modalNumber.textContent =
            product.number;


        modalTitle.textContent =
            product.title;


        modalPattern.textContent =
            product.pattern;


        modalColor.textContent =
            product.color;


        modalCode.textContent =
            product.code;


        productModal.classList.add(
            "active"
        );


        document.body.style.overflow =
            "hidden";

    }



    function closeProduct() {

        productModal.classList.remove(
            "active"
        );


        document.body.style.overflow =
            "";

    }



    document.querySelectorAll(
        ".product-card"
    ).forEach(function (
        card
    ) {

        card.addEventListener(
            "click",
            function () {

                const productId =
                    card.dataset.product;


                openProduct(
                    productId
                );

            }
        );

    });



    if (
        modalClose
    ) {

        modalClose.addEventListener(
            "click",
            closeProduct
        );

    }


    if (
        modalOverlay
    ) {

        modalOverlay.addEventListener(
            "click",
            closeProduct
        );

    }



    /* =========================
       MODAL CONTACT BUTTON
    ========================= */

    const modalContact =
        document.getElementById(
            "modalContact"
        );


    if (
        modalContact
    ) {

        modalContact.addEventListener(
            "click",
            function () {

                closeProduct();

            }
        );

    }



    /* =========================
       ESC KEY
    ========================= */

    document.addEventListener(
        "keydown",
        function (
            event
        ) {

            if (
                event.key ===
                "Escape"
            ) {

                closeProduct();

                closeSideMenu();

                if (
                    languageMenu
                ) {

                    languageMenu.classList.remove(
                        "active"
                    );

                }

            }

        }
    );



    /* =========================
       CONTACT FORM
    ========================= */

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    if (
        contactForm
    ) {

        contactForm.addEventListener(
            "submit",
            function (
                event
            ) {

                event.preventDefault();


                alert(
                    "Thank you. Your request has been received."
                );


                contactForm.reset();

            }
        );

    }



    /* =========================
       CLOSE LANGUAGE ON OUTSIDE CLICK
    ========================= */

    document.addEventListener(
        "click",
        function (
            event
        ) {

            if (
                languageMenu &&
                languageButton
            ) {

                if (
                    !languageMenu.contains(
                        event.target
                    ) &&
                    !languageButton.contains(
                        event.target
                    )
                ) {

                    languageMenu.classList.remove(
                        "active"
                    );

                }

            }

        }
    );


});