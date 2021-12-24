import { toggleMenu } from "./modules/menu";
import { toggleNavigation } from "./modules/navigation";
import { toggleCard } from "./modules/toggle";
import { Slider, changeActiveSlideHeight } from "./modules/swiper";

document.addEventListener("DOMContentLoaded", function () {
  toggleNavigation();
  toggleMenu();
  toggleCard();
  const gallery = new Slider(".swiper");
  gallery.start();
  //const clientsGallery = new Slider(".main__clients-swiper");
  //clientsGallery.start();
  //changeActiveSlideHeight();
});
