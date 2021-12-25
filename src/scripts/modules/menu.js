export const toggleMenu = () => {
  let toggle = false;
  const menuBtn = document.querySelector(".header__menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const headerLogo = document.querySelector(".header__logo-img");
  const footerLogo = document.querySelector(".footer__logo");
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
      headerLogo.src = "./assets/images/logo/logo-mobile.svg";
      footerLogo.src = "./assets/images/logo/footer-mobile-logo.svg";
    }
    if (window.innerWidth >= "466") {
      headerLogo.src = "./assets/images/logo/logo.svg";
      footerLogo.src = "./assets/images/logo/footer-logo.svg";
    }
  });
};
