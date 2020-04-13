// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

//header dropdown

let links = document.querySelectorAll(".dropdown");
let triggers = document.querySelectorAll(".header__nav-link");
let menus = document.querySelectorAll(".header__nav-dropdown__menu");

if (links) {
  links.forEach((link) => {
    let trigger = link.querySelector(".header__nav-link");
    let menu = link.querySelector(".header__nav-dropdown__menu");

    if (menu && trigger) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        triggers.forEach((trigger) => trigger.classList.remove("is-active"));
        menus.forEach((menu) => menu.classList.remove("is-active"));
        trigger.classList.toggle("is-active");
        menu.classList.toggle("is-active");
      });
    }
  });
}

// hamburger
let hamburger = document.querySelector(".hamburger");
let hambmenu = document.querySelector(".header-collapse");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    hambmenu.classList.toggle("is-active");
    document.body.classList.toggle("no-scroll");
  });
}
