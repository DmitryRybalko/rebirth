import { toggleMenu } from "./modules/menu";
import { toggleNavigation } from "./modules/navigation";
import { toggleCard } from "./modules/toggle";
import { Slider } from "./modules/swiper";
import { scrollToTop } from "./modules/scrollToTop";

document.addEventListener("DOMContentLoaded", function () {
  toggleNavigation();
  toggleMenu();
  toggleCard();
  const gallery = new Slider(".swiper");
  gallery.start();
  const clientsGallery = new Slider(".main__clients-swiper");
  clientsGallery.start();
  scrollToTop();
});
