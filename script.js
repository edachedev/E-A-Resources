const menu=document.querySelector(".menu"),nav=document.querySelector(".header nav");menu?.addEventListener("click",()=>nav.classList.toggle("open"));document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const slides=[...document.querySelectorAll(".slide")],dots=[...document.querySelectorAll(".dot")],titles=["Integrated Vision","Petroleum & Energy","Real Estate Development","Engineering & Industry"];let current=0,timer;
function show(n){current=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle("active",i===current));dots.forEach((d,i)=>d.classList.toggle("active",i===current));document.querySelector("#counter").textContent=String(current+1).padStart(2,"0");document.querySelector("#caption").textContent=titles[current]}
function start(){clearInterval(timer);timer=setInterval(()=>show(current+1),4500)}document.querySelector(".next").onclick=()=>{show(current+1);start()};document.querySelector(".prev").onclick=()=>{show(current-1);start()};dots.forEach((d,i)=>d.onclick=()=>{show(i);start()});document.querySelector(".slider").onmouseenter=()=>clearInterval(timer);document.querySelector(".slider").onmouseleave=start;show(0);start();
function sendDemo(e){e.preventDefault();document.querySelector("#notice").textContent="Thank you. This demo form is ready to connect to the company's email/CRM.";e.target.reset();return false}
/* ==========================================
   SERVICES SLIDER PROGRESS
========================================== */

const progressDots = document.querySelectorAll(".progress-dot");

let serviceIndex = 0;

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
/* ==========================================
   E&A RESOURCES
   CONTINUOUS SERVICES SLIDER
========================================== */

const servicesTrack = document.querySelector(".services-track");

const originalCards = Array.from(
    servicesTrack.querySelectorAll(".service-card")
);


/* Automatically create a second copy */

originalCards.forEach((card) => {

    const clone = card.cloneNode(true);

    servicesTrack.appendChild(clone);

});


/* Progress indicators */

const progressDots = document.querySelectorAll(".progress-dot");

let serviceIndex = 0;

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