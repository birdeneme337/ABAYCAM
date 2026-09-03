document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =====================================================
           MENU
        ===================================================== */

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

        }


        function closeSideMenu() {

            sideMenu.classList.remove(
                "active"
            );

            menuOverlay.classList.remove(
                "active"
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
                ".nav-link"
            )
            .forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        closeSideMenu
                    );

                }
            );



        /* =====================================================
           LANGUAGE MENU
        ===================================================== */

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


        languageButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                languageMenu.classList.toggle(
                    "active"
                );

            }
        );


        document
            .querySelectorAll(
                "#languageMenu button"
            )
            .forEach(
                function (button) {

                    button.addEventListener(
                        "click",
                        function () {

                            const selectedLanguage =
                                button.getAttribute(
                                    "data-lang"
                                );


                            currentLanguage.textContent =
                                selectedLanguage;


                            languageMenu.classList.remove(
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
                    !languageButton.contains(
                        event.target
                    ) &&
                    !languageMenu.contains(
                        event.target
                    )
                ) {

                    languageMenu.classList.remove(
                        "active"
                    );

                }

            }
        );



        /* =====================================================
           DESIGN DETAIL MODAL
        ===================================================== */

        const modal =
            document.getElementById(
                "designModal"
            );


        const modalClose =
            document.getElementById(
                "modalClose"
            );


        const modalImage =
            document.getElementById(
                "modalImage"
            );


        const modalName =
            document.getElementById(
                "modalName"
            );


        const modalCode =
            document.getElementById(
                "modalCode"
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


        const modalOverlay =
            modal.querySelector(
                ".modal-overlay"
            );


        const modalContact =
            document.getElementById(
                "modalContact"
            );



        function openModal(card) {


            const image =
                card.getAttribute(
                    "data-image"
                );


            const name =
                card.getAttribute(
                    "data-name"
                );


            const color =
                card.getAttribute(
                    "data-color"
                );


            const code =
                card.getAttribute(
                    "data-code"
                );


            const description =
                card.getAttribute(
                    "data-description"
                );


            const application =
                card.getAttribute(
                    "data-application"
                );



            modalImage.src =
                image;


            modalImage.alt =
                name;


            modalName.textContent =
                name;


            modalCode.textContent =
                code;


            modalColor.textContent =
                color;


            modalQuality.textContent =
                code;


            modalApplication.textContent =
                application;


            modalDescription.textContent =
                description;



            modal.classList.add(
                "active"
            );


            document.body.style.overflow =
                "hidden";

        }



        function closeModal() {

            modal.classList.remove(
                "active"
            );


            document.body.style.overflow =
                "";

        }



        document
            .querySelectorAll(
                ".design-card"
            )
            .forEach(
                function (card) {

                    card.addEventListener(
                        "click",
                        function () {

                            openModal(
                                card
                            );

                        }
                    );

                }
            );



        modalClose.addEventListener(
            "click",
            closeModal
        );


        modalOverlay.addEventListener(
            "click",
            closeModal
        );


        modalContact.addEventListener(
            "click",
            function () {

                closeModal();

            }
        );



        /* =====================================================
           ESC KEY
        ===================================================== */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape"
                ) {

                    closeModal();

                    closeSideMenu();

                    languageMenu.classList.remove(
                        "active"
                    );

                }

            }
        );


    }
);