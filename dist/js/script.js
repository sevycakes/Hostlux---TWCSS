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
    items: 1, // or 2/3 depending on how many you want visible
    slideBy: 'page',
    autoplay: false,
    controls: false, // disables default prev/next buttons
    nav: true,
    navContainer: "#custom-controls .mx-auto",
    navAsThumbnails: true,
    gutter: 20,
    responsive: {
        640: {
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