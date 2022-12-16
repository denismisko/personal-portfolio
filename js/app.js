// SCROLL ANIMATIONS

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show')
            
        }

    });

});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));


// LOADER

const loader = document.querySelector(".loader");

window.addEventListener("load" , vanish);

function vanish() {

    loader.classList.add("disppear")
    
};


// MOBILE NAVIGATION OTVORENIE

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click" , mobileMenu);

function mobileMenu() {

    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
    
}

// MOBILE NAVIGATION  ZATVORENIE

const navLink = document.querySelectorAll(".menu");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// AUTO TYPE

const typed = new Typed(".auto-type", {
strings: ["Web developer", "Web designer", "Coffee lover"],
typeSpeed: 20,
backSpeed: 100,
loop:true
});



