// ==========================================
// MOBILE MENU
// ==========================================

const menu = document.querySelector(".menu");
const nav = document.querySelector(".header nav");

menu?.addEventListener("click", () => {
    nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach((a) => {
    a.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});


// ==========================================
// HERO IMAGE SLIDER
// ==========================================

const slides = [...document.querySelectorAll(".slide")];
const dots = [...document.querySelectorAll(".dot")];

const titles = [
    "Integrated Vision",
    "Petroleum & Energy",
    "Real Estate Development",
    "Engineering & Industry"
];

let current = 0;
let timer;


// Show selected hero slide
function show(n) {

    if (!slides.length) return;

    current = (n + slides.length) % slides.length;

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === current);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === current);
    });

    const counter = document.querySelector("#counter");
    const caption = document.querySelector("#caption");

    if (counter) {
        counter.textContent = String(current + 1).padStart(2, "0");
    }

    if (caption) {
        caption.textContent = titles[current] || "";
    }
}


// Start automatic hero slideshow
function startHeroSlider() {

    clearInterval(timer);

    timer = setInterval(() => {
        show(current + 1);
    }, 4500);
}


// Next button
document.querySelector(".next")?.addEventListener("click", () => {
    show(current + 1);
    startHeroSlider();
});


// Previous button
document.querySelector(".prev")?.addEventListener("click", () => {
    show(current - 1);
    startHeroSlider();
});


// Hero dots
dots.forEach((dot, i) => {

    dot.addEventListener("click", () => {
        show(i);
        startHeroSlider();
    });

});


// Pause when mouse is over hero
const heroSlider = document.querySelector(".slider");

heroSlider?.addEventListener("mouseenter", () => {
    clearInterval(timer);
});

heroSlider?.addEventListener("mouseleave", () => {
    startHeroSlider();
});


// Start hero slider
show(0);
startHeroSlider();


// ==========================================
// CONTACT FORM DEMO
// ==========================================

function sendDemo(e) {

    e.preventDefault();

    const notice = document.querySelector("#notice");

    if (notice) {
        notice.textContent =
            "Thank you. This demo form is ready to connect to the company's email/CRM.";
    }

    e.target.reset();

    return false;
}


// ==========================================
// SERVICES SLIDER
// ==========================================

const servicesTrack = document.querySelector(".services-track");

if (servicesTrack) {

    const originalCards = Array.from(
        servicesTrack.querySelectorAll(".service-card")
    );

    // Create a second copy of the cards
    originalCards.forEach((card) => {

        const clone = card.cloneNode(true);

        servicesTrack.appendChild(clone);

    });
}


// ==========================================
// SERVICES PROGRESS INDICATORS
// ==========================================

const progressDots = document.querySelectorAll(".progress-dot");

let serviceIndex = 0;

if (progressDots.length) {

    setInterval(() => {

        serviceIndex++;

        if (serviceIndex >= progressDots.length) {
            serviceIndex = 0;
        }

        progressDots.forEach((dot) => {
            dot.classList.remove("active");
        });

        progressDots[serviceIndex].classList.add("active");

    }, 4500);

}