export const scrollToTop = () => {
  const btn = document.querySelector(".footer__btn-scroll");
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};
