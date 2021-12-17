//import gsap from "gsap";

export const toggleCard = () => {
  const accordions = document.querySelectorAll(".main__accordion-content");
  const arrowBtns = document.querySelectorAll(".main__accordion-toggle");
  const arrowIcons = document.querySelectorAll(".main__accordion-toggle-icon");
  const cards = document.querySelectorAll(".main__accordion-content");
  arrowBtns.forEach((arrowBtn, i) => {
    arrowBtn.addEventListener("click", () => {
      arrowIcons[i].classList.toggle("icon--rotate");
      cards[i].classList.toggle("accordion--active");
      if (cards[i].classList.contains("accordion--active")) {
        accordions[i].style.maxHeight = accordions[i].scrollHeight + "px";
      } else {
        accordions[i].style.maxHeight = 0;
      }
    });
  });
};
