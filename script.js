/* ================= MOBILE MENU ================= */

const menu = document.querySelector(".menu");
const nav = document.querySelector(".header nav");

if (menu && nav) {

    menu.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            nav.classList.remove("open");
        });

    });

}


/* ================= HERO SLIDER ================= */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const counter = document.getElementById("counter");
const caption = document.getElementById("caption");

const captions = [
    "Integrated Vision",
    "Real Estate",
    "Energy & Development",
    "Building the Future"
];

let currentSlide = 0;
let slideTimer;


function showSlide(index) {

    if (!slides.length) return;

    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentSlide);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlide);
    });

    if (counter) {
        counter.textContent =
            String(currentSlide + 1).padStart(2, "0");
    }

    if (caption) {
        caption.textContent =
            captions[currentSlide] || "E&A Resources";
    }

}


function nextSlide() {
    showSlide(currentSlide + 1);
}


function previousSlide() {
    showSlide(currentSlide - 1);
}


function startSlider() {

    clearInterval(slideTimer);

    slideTimer = setInterval(() => {
        nextSlide();
    }, 4500);

}


if (nextButton) {

    nextButton.addEventListener("click", () => {
        nextSlide();
        startSlider();
    });

}


if (prevButton) {

    prevButton.addEventListener("click", () => {
        previousSlide();
        startSlider();
    });

}


dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {
        showSlide(index);
        startSlider();
    });

});


showSlide(0);
startSlider();


/* ================= CONTACT FORM ================= */

function sendDemo(event) {

    event.preventDefault();

    const notice = document.getElementById("notice");

    if (notice) {
        notice.textContent =
            "Thank you. Your enquiry has been received.";
    }

    event.target.reset();

    return false;
}

