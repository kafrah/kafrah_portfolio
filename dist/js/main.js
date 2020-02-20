// Select DOM Items
const menuBtn = document.querySelector
    ('.btn-menu');
const menuBtn = document.querySelector
    ('.menu');
const menuBtn = document.querySelector
    ('.menu-nav');
const menuBtn = document.querySelector
    ('.menu-branding');

const navItems = document.querySelectorAll
    ('.nav-items')

// Set Initital State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
    } else {

    }
}