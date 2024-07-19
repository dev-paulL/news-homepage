const NAVBAR_MOBILE = document.querySelector('.mobile-nav');

const BTN_OPEN_MENU = document.querySelector('.menu_open_btn');
const BTN_CLOSE_MENU = document.querySelector('.menu_close_btn');

const OVERLAY = document.querySelector('.overlay');
const BODY = document.getElementsByTagName('body')[0];


function openMenu() {
   NAVBAR_MOBILE.classList.add('visible');
   OVERLAY.classList.add('visible');
   BODY.style.overflow = "hidden";
}

function closeMenu() {
   NAVBAR_MOBILE.classList.remove('visible');
   OVERLAY.classList.remove('visible');
   BODY.style.overflow = "auto";
}

BTN_CLOSE_MENU.addEventListener('click', () => {
    closeMenu();
});

BTN_OPEN_MENU.addEventListener('click', () => {
    openMenu();
});

/* I personally hate when we click on the 'overlay' and it doesn't exit the popup or menu or whatever */
OVERLAY.addEventListener('click', () => {
    closeMenu();
});