// TOGGLE BUTTON

const toggle = document.querySelector('.toggle_menu');
const navm = document.querySelector('.nav_menu');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navm.classList.toggle('open');
});

// FAQ

const links = document.querySelectorAll(".faq_content a");

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const paragraph = link.parentElement.querySelector("p");
        const icon = link.querySelector(".faq_icon");

        paragraph.classList.toggle("open");
        icon.classList.toggle("open");
    });
});

// TESTIMONIAL SLIDER

const tnslider = tns({
    container: ".testimonial_stage",
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: true,
    navContainer: "#custom-controls .mx-auto",
    navAsThumbnails: true,
    gutter: 20,
    responsive: {
        375: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        }
    }
});