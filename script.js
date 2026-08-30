// =========================
// SCROLL REVEAL ANIMATION
// =========================

const sections = document.querySelectorAll(".section");

const revealOnScroll = () => {
    sections.forEach((section) => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        }

    });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =========================
// NAVBAR ACTIVE LINK
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section").forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        alert(
            "Thank you for contacting me! I will get back to you soon."
        );

        contactForm.reset();

    });

}


// =========================
// PROJECT BUTTON EFFECT
// =========================

const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const href = link.getAttribute("href");

        if (href === "#") {

            event.preventDefault();

            alert(
                "Project GitHub link will be added soon."
            );

        }

    });

});


// =========================
// CURRENT YEAR
// =========================

const copyright = document.querySelector(".copyright");

if (copyright) {

    const year = new Date().getFullYear();

    copyright.innerHTML =
        `© ${year} Ankita Inamdar. All Rights Reserved.`;

}