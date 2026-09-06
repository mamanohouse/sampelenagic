document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* Hero Animation */


        const heroElements =
            document.querySelectorAll(
                ".hero-section :is(h1, h2, h3, p, .hero-eyebrow)"
            );


        heroElements.forEach(
            (
                element,
                index
            ) => {


                const isHeading =
                    element.matches(
                        "h1, h2, h3"
                    );


                element.classList.add(
                    isHeading
                        ? "slide-left"
                        : "slide-right"
                );


                setTimeout(
                    () => {


                        element.classList.add(
                            "is-visible"
                        );


                    },
                    index * 120
                );


            }
        );


        /* Scroll Animation */


        const observer =
            new IntersectionObserver(
                (
                    entries,
                    observerInstance
                ) => {


                    entries.forEach(
                        (
                            entry
                        ) => {


                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }


                            const element =
                                entry.target;


                            const isHeading =
                                element.matches(
                                    "h1, h2, h3"
                                );


                            element.classList.add(
                                isHeading
                                    ? "slide-left"
                                    : "slide-right"
                            );


                            element.classList.add(
                                "is-visible"
                            );


                            observerInstance.unobserve(
                                element
                            );


                        }
                    );


                },
                {
                    threshold:
                        0.15
                }
            );


        const animatedElements =
            document.querySelectorAll(
                [
                    "main section:not(.hero-section) h1",
                    "main section:not(.hero-section) h2",
                    "main section:not(.hero-section) h3",
                    "main section:not(.hero-section) p"
                ].join(
                    ", "
                )
            );


        animatedElements.forEach(
            (
                element
            ) => {


                const isInsideProductCard =
                    element.closest(
                        ".product-card"
                    );


                if (
                    isInsideProductCard
                ) {
                    return;
                }


                observer.observe(
                    element
                );


            }
        );


        /* Product Card Toggle */


        const productToggles =
            document.querySelectorAll(
                ".product-card-toggle"
            );


        productToggles.forEach(
            (
                toggle
            ) => {


                toggle.addEventListener(
                    "click",
                    () => {


                        const productCard =
                            toggle.closest(
                                ".product-card"
                            );


                        const productDetails =
                            productCard.querySelector(
                                ".product-card-details"
                            );


                        if (
                            !productDetails
                        ) {
                            return;
                        }


                        const isOpen =
                            productDetails.classList.contains(
                                "is-open"
                            );


                        if (
                            isOpen
                        ) {


                            toggle.setAttribute(
                                "aria-expanded",
                                "false"
                            );


                            productDetails.classList.remove(
                                "is-open"
                            );


                            productDetails.classList.remove(
                                "is-closing"
                            );


                            requestAnimationFrame(
                                () => {


                                    productDetails.classList.add(
                                        "is-closing"
                                    );


                                }
                            );


                            const closeAnimationDuration =
                                250;


                            setTimeout(
                                () => {


                                    productDetails.classList.remove(
                                        "is-closing"
                                    );


                                },
                                closeAnimationDuration
                            );


                        } else {


                            toggle.setAttribute(
                                "aria-expanded",
                                "true"
                            );


                            productDetails.classList.remove(
                                "is-closing"
                            );


                            productDetails.classList.add(
                                "is-open"
                            );


                        }


                    }
                );


            }
        );


    }
);

        /* Article Accordion */


        const articleItems =
            document.querySelectorAll(
                ".article-item"
            );


        if (
            articleItems.length > 0
        ) {


            articleItems.forEach(
                function(articleItem) {


                    articleItem.addEventListener(
                        "toggle",
                        function() {


                            if (
                                articleItem.open
                            ) {


                                articleItems.forEach(
                                    function(otherArticle) {


                                        if (
                                            otherArticle !==
                                            articleItem
                                        ) {


                                            otherArticle.open =
                                                false;


                                        }


                                    }
                                );


                            }


                        }
                    );


                }
            );


        }