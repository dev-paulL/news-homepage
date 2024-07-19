const NAVBAR_MOBILE = document.querySelector(".mobile-nav");

const BTN_OPEN_MENU = document.querySelector(".menu_open_btn");
const BTN_CLOSE_MENU = document.querySelector(".menu_close_btn");

const OVERLAY = document.querySelector(".overlay");
const BODY = document.body;

const openMenu = () => {
  NAVBAR_MOBILE.classList.add("visible");
  OVERLAY.classList.add("visible");
  NAVBAR_MOBILE.setAttribute("aria-hidden", false);
  BTN_OPEN_MENU.setAttribute("aria-expanded", true);
  BODY.style.overflow = "hidden";
  BTN_CLOSE_MENU.focus();
}

const closeMenu = () => {
  NAVBAR_MOBILE.classList.remove("visible");
  OVERLAY.classList.remove("visible");
  BODY.style.overflow = "auto";
  NAVBAR_MOBILE.setAttribute("aria-hidden", true);
  BTN_OPEN_MENU.setAttribute("aria-expanded", false);
  BTN_OPEN_MENU.focus();
}

BTN_CLOSE_MENU.addEventListener("click", closeMenu);

BTN_OPEN_MENU.addEventListener("click", openMenu);

/* I personally hate when we click on the 'overlay' and it doesn't exit the popup or menu or whatever */
OVERLAY.addEventListener("click", closeMenu);
