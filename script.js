document.addEventListener(
    "DOMContentLoaded",
    function () {

        /* =====================================
           LOADER
        ===================================== */

        const loader =
            document.getElementById("loader");


        window.addEventListener(
            "load",
            function () {

                setTimeout(
                    function () {

                        loader.classList.add(
                            "hidden"
                        );

                    },
                    600
                );

            }
        );



        /* =====================================
           SIDE MENU
        ===================================== */

        const menuButton =
            document.getElementById(
                "menuButton"
            );


        const closeMenu =
            document.getElementById(
                "closeMenu"
            );


        const sideMenu =
            document.getElementById(
                "sideMenu"
            );


        const menuOverlay =
            document.getElementById(
                "menuOverlay"
            );


        function openMenu() {

            sideMenu.classList.add(
                "active"
            );

            menuOverlay.classList.add(
                "active"
            );

            document.body.classList.add(
                "menu-open"
            );

        }


        function closeSideMenu() {

            sideMenu.classList.remove(
                "active"
            );

            menuOverlay.classList.remove(
                "active"
            );

            document.body.classList.remove(
                "menu-open"
            );

        }


        menuButton.addEventListener(
            "click",
            openMenu
        );


        closeMenu.addEventListener(
            "click",
            closeSideMenu
        );


        menuOverlay.addEventListener(
            "click",
            closeSideMenu
        );


        document
            .querySelectorAll(
                ".menu-navigation a"
            )
            .forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        closeSideMenu
                    );

                }
            );



        /* =====================================
           LANGUAGE DROPDOWN
        ===================================== */

        const languageButton =
            document.getElementById(
                "languageButton"
            );


        const languageDropdown =
            document.getElementById(
                "languageDropdown"
            );


        const selectedLanguage =
            document.getElementById(
                "selectedLanguage"
            );


        languageButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                languageDropdown.classList.toggle(
                    "active"
                );

            }
        );


        document
            .querySelectorAll(
                ".language-dropdown button"
            )
            .forEach(
                function (button) {

                    button.addEventListener(
                        "click",
                        function () {

                            const language =
                                this.dataset.lang;

                            selectedLanguage.textContent =
                                language;

                            languageDropdown.classList.remove(
                                "active"
                            );

                        }
                    );

                }
            );


        document.addEventListener(
            "click",
            function (event) {

                if (
                    !event.target.closest(
                        ".language-selector"
                    )
                ) {

                    languageDropdown.classList.remove(
                        "active"
                    );

                }

            }
        );



        /* =====================================
           HERO SLIDER
        ===================================== */

        const slides =
            document.querySelectorAll(
                ".slider-slide"
            );


        const dotsContainer =
            document.getElementById(
                "sliderDots"
            );


        const currentSlideNumber =
            document.getElementById(
                "currentSlide"
            );


        let currentSlide = 0;


        slides.forEach(
            function (
                slide,
                index
            ) {

                const dot =
                    document.createElement(
                        "button"
                    );

                dot.className =
                    "slider-dot";


                if (
                    index === 0
                ) {

                    dot.classList.add(
                        "active"
                    );

                }


                dot.addEventListener(
                    "click",
                    function () {

                        showSlide(
                            index
                        );

                    }
                );


                dotsContainer.appendChild(
                    dot
                );

            }
        );


        const dots =
            document.querySelectorAll(
                ".slider-dot"
            );


        function showSlide(
            index
        ) {

            slides[
                currentSlide
            ].classList.remove(
                "active"
            );


            dots[
                currentSlide
            ].classList.remove(
                "active"
            );


            currentSlide =
                index;


            slides[
                currentSlide
            ].classList.add(
                "active"
            );


            dots[
                currentSlide
            ].classList.add(
                "active"
            );


            currentSlideNumber.textContent =
                String(
                    currentSlide + 1
                ).padStart(
                    2,
                    "0"
                );

        }


        setInterval(
            function () {

                let nextSlide =
                    currentSlide + 1;


                if (
                    nextSlide >=
                    slides.length
                ) {

                    nextSlide = 0;

                }


                showSlide(
                    nextSlide
                );

            },
            2800
        );



        /* =====================================
           PRODUCT MODAL
        ===================================== */

        const productCards =
            document.querySelectorAll(
                ".product-card"
            );


        const productModal =
            document.getElementById(
                "productModal"
            );


        const modalClose =
            document.getElementById(
                "modalClose"
            );


        const modalImage =
            document.getElementById(
                "modalImage"
            );


        const modalCode =
            document.getElementById(
                "modalCode"
            );


        const modalName =
            document.getElementById(
                "modalName"
            );


        const modalColor =
            document.getElementById(
                "modalColor"
            );


        const modalQuality =
            document.getElementById(
                "modalQuality"
            );


        const modalType =
            document.getElementById(
                "modalType"
            );


        const modalDescription =
            document.getElementById(
                "modalDescription"
            );


        let selectedProduct =
            null;


        function openProductModal(
            card
        ) {

            selectedProduct =
                card;


            modalImage.src =
                card.dataset.image;


            modalImage.alt =
                card.dataset.name;


            modalCode.textContent =
                card.dataset.code;


            modalName.textContent =
                card.dataset.name;


            modalColor.textContent =
                card.dataset.color;


            modalQuality.textContent =
                card.dataset.code;


            modalType.textContent =
                card.dataset.type;


            modalDescription.textContent =
                card.dataset.description;


            productModal.classList.add(
                "active"
            );


            document.body.classList.add(
                "modal-open"
            );

        }


        function closeProductModal() {

            productModal.classList.remove(
                "active"
            );


            document.body.classList.remove(
                "modal-open"
            );

        }


        productCards.forEach(
            function (card) {

                card.addEventListener(
                    "click",
                    function (
                        event
                    ) {

                        event.preventDefault();

                        openProductModal(
                            card
                        );

                    }
                );

            }
        );


        modalClose.addEventListener(
            "click",
            closeProductModal
        );


        productModal.addEventListener(
            "click",
            function (
                event
            ) {

                if (
                    event.target.classList.contains(
                        "modal-overlay"
                    )
                ) {

                    closeProductModal();

                }

            }
        );


        document.addEventListener(
            "keydown",
            function (
                event
            ) {

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeProductModal();

                }

            }
        );



        /* =====================================
           INQUIRY SYSTEM
        ===================================== */

        const inquiryButton =
            document.getElementById(
                "inquiryButton"
            );


        const inquiryCount =
            document.getElementById(
                "inquiryCount"
            );


        const addInquiry =
            document.getElementById(
                "addInquiry"
            );


        let inquiryItems =
            [];


        addInquiry.addEventListener(
            "click",
            function () {

                if (
                    !selectedProduct
                ) {

                    return;

                }


                const productCode =
                    selectedProduct.dataset.code;


                const alreadyExists =
                    inquiryItems.some(
                        function (
                            item
                        ) {

                            return (
                                item.code ===
                                productCode
                            );

                        }
                    );


                if (
                    !alreadyExists
                ) {

                    inquiryItems.push(
                        {

                            name:
                                selectedProduct.dataset.name,

                            code:
                                productCode,

                            color:
                                selectedProduct.dataset.color

                        }
                    );

                }


                inquiryCount.textContent =
                    inquiryItems.length;


                addInquiry.textContent =
                    "ADDED TO INQUIRY ✓";


                setTimeout(
                    function () {

                        addInquiry.innerHTML =
                            `
                            ADD TO INQUIRY
                            <span>+</span>
                            `;

                    },
                    1500
                );

            }
        );


        inquiryButton.addEventListener(
            "click",
            function () {

                if (
                    inquiryItems.length === 0
                ) {

                    alert(
                        "Henüz teklif listenize ürün eklemediniz."
                    );

                    return;

                }


                let message =
                    "SELECTED AB AYCAM DESIGNS:\\n\\n";


                inquiryItems.forEach(
                    function (
                        item,
                        index
                    ) {

                        message +=
                            (
                                index + 1
                            ) +
                            ". " +
                            item.name +
                            "\\n" +
                            item.code +
                            "\\n" +
                            item.color +
                            "\\n\\n";

                    }
                );


                alert(
                    message
                );

            }
        );



        /* =====================================
           CONTACT FORM
        ===================================== */

        const contactForm =
            document.getElementById(
                "contactForm"
            );


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
);