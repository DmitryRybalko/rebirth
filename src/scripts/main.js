import { toggleMenu } from "./modules/menu";
import { toggleNavigation } from "./modules/navigation";
import { toggleCard } from "./modules/toggle";

document.addEventListener("DOMContentLoaded", function () {
  toggleNavigation();
  toggleMenu();
  toggleCard();
});
