//import gsap from "gsap";

export const toggleCard = () => {
  const accordions = document.querySelectorAll(".main__accordion-content");
  const accordionItems = document.querySelectorAll(".main__accordion-item");
  const arrowBtns = document.querySelectorAll(".main__accordion-toggle");
  const arrowIcons = document.querySelectorAll(".main__accordion-toggle-icon");
  const cards = document.querySelectorAll(".main__accordion-content");
  const textsOnHover = document.querySelectorAll(".main__text--hover");
  const show = (i) => {
    textsOnHover[i].style.maxHeight = textsOnHover[i].scrollHeight + "px";
  };
  const hide = (i) => {
    textsOnHover[i].style.maxHeight = 0;
  };
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
  accordionItems.forEach((accordionItem, i) => {
    accordionItem.addEventListener("mouseenter", () => show(i));
    accordionItem.addEventListener("focus", () => show(i));
    accordionItem.addEventListener("mouseleave", () => hide(i));
    accordionItem.addEventListener("focusout", () => hide(i));
  });
};
