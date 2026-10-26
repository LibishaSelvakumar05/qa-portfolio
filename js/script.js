/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    if (nav) {
        nav.classList.toggle("show");
    }

}


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll("#navMenu a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const nav = document.getElementById("navMenu");

            if (nav) {
                nav.classList.remove("show");
            }

        });

    });

});


/* =========================================
   CURRENT YEAR
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const yearElement = document.getElementById("year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }

});


/* =========================================
   SCROLL REVEAL
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(
        ".feature-card, .project-preview, .artifact-card, .experience-card, .case-study, .contact-card"
    );

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    elements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });

});