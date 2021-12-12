export const toggleMenu = () => {
  let toggle = false;
  const menuBtn = document.querySelector(".header__menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const logo = document.querySelector(".header__logo-img");
  let menuIcon = document.querySelector(".menu-btn-icon");
  menuBtn.addEventListener("click", () => {
    toggle = !toggle;
    if (toggle) {
      menuIcon.src = "./assets/icons/menu-close.svg";
      mobileMenu.classList.toggle("mobile-menu--open");
    } else {
      menuIcon.src = "./assets/icons/menu.svg";
      mobileMenu.classList.toggle("mobile-menu--open");
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= "1240") {
      mobileMenu.classList.remove("mobile-menu--open");
      menuIcon.src = "./assets/icons/menu.svg";
      toggle = false;
    }
    if (window.innerWidth <= "465") {
      logo.src = "./assets/images/logo/logo-mobile.svg";
    }
    if (window.innerWidth >= "466") {
      logo.src = "./assets/images/logo/logo.svg";
    }
  });
};
