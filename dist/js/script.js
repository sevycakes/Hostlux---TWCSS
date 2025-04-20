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

// TINY SLIDER

const tnslider = tns({
    container: ".testimonial_stage",
    items: 1,  // Default to 1 item visible on mobile
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: true,
    navContainer: "#custom-controls .mx-auto",
    navAsThumbnails: true,
    gutter: 20,
    responsive: {
        375: {
            items: 1,  // 1 item visible on small screens (mobile)
        },
        768: {
            items: 2,  // 2 items visible on medium screens (tablets)
        },
        1024: {
            items: 3,  // 3 items visible on large screens (desktop)
        }
    }
});