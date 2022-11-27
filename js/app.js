// SCROLL ANIMATIONS

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show')
            
        }

        else {

            entry.target.classList.remove('show')

        }

    });

});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));


// LOADER

var loader = document.querySelector(".loader");

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