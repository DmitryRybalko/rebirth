export const toggleMenu = () => {
  let toggle = false;
  const menuBtn = document.querySelector(".header__menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
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
};
