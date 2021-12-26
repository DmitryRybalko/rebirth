export const toggleMenu = () => {
  let toggle = false;
  const menuBtn = document.querySelector(".header__menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  let menuIcons = document.querySelectorAll(".menu-btn-icon");
  menuBtn.addEventListener("click", () => {
    toggle = !toggle;
    if (toggle) {
      menuIcons[0].classList.toggle("menu-toggled");
      menuIcons[1].classList.toggle("menu-toggled");
      mobileMenu.classList.toggle("mobile-menu--open");
    } else {
      menuIcons[0].classList.toggle("menu-toggled");
      menuIcons[1].classList.toggle("menu-toggled");
      mobileMenu.classList.toggle("mobile-menu--open");
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth >= "1240") {
        toggle = false;
        mobileMenu.classList.remove("mobile-menu--open");
        menuIcons[0].classList.remove("menu-toggled");
        menuIcons[1].classList.add("menu-toggled");
      }
    });
  });
};
