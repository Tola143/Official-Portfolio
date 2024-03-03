// Sticky Navigation Menu JS Code
let nav = document.getElementById("nav");
let scrollBtn = document.querySelector(".scroll-button a");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.style.boxShadow = "0px 1px 5px rgba(128, 128, 128, 0.644)";

    } else {
        nav.style.boxShadow = "none";
    }
}

// night mood
var icon = document.getElementById("icon");
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.className = "fas fa-sun";
    } else {
        icon.className = "fas fa-moon";
    }
}

// menu
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault()
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains('active')
    event.currentTarget.setAttibute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttibute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttibute('aria-label', 'Aria Menu');
    }

}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// add active class in selected list item
let list = document.querySelectorAll('.list');
let link = document.querySelectorAll('.link');
let up = document.querySelector('#arrow-up');
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function() {
        let j = 0;
        while (j < list.length) {
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    }

    up.onclick = function() {
        let l = 0;
        while (l < list.length) {
            list[l++].className = 'list';
        }
        list[0].className = 'list active';
    }

}
for (let i = 0; i < link.length; i++) {
    link[i].onclick = function() {
        let j = 0;
        while (j < link.length) {
            link[j++].className = 'link';
        }
        link[i].className = 'link active';
    }
}