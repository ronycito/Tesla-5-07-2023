import "./style.css";

const headerElement = document.querySelector("#landing-header");
const observerOptions = {
root: null,
rootMargin: "0px",
threshold: 0.99
};

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    const { isIntersecting } = entry;
    if (isIntersecting) {
    const color = entry.target.getAttribute("data-header-color");
    headerElement.style.color = color;
    } 
    });
}, observerOptions);

const sectionsElements = document.querySelectorAll(".landing-section");
sectionsElements.forEach((section) => observer.observe(section));

// document.querySelector('#app') //
