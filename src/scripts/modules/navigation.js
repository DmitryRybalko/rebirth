export const toggleNavigation = () => {
  const body = document.body;
  const mobileMenu = document.querySelector(".mobile-menu");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.add("scroll-down");
    }
    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-down");
    }
    if (mobileMenu.classList.contains("mobile-menu--open")) {
      body.classList.remove("scroll-down");
    }

    lastScroll = currentScroll;
  });
};
