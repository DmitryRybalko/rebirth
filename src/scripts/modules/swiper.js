import Swiper, { Navigation, Autoplay } from "swiper";

Swiper.use([Navigation, Autoplay]);

export class Slider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      direction: "horizontal",
      loop: true,
      centeredSlides: true,
      grabCursor: true,
      speed: 1000,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        720: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1240: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
      //on: {
      //  init: function () {
      //    console.log("swiper initialized");
      //    const slides = document.querySelectorAll(".main__client-slide");
      //    slides.forEach((slide, i) => {
      //      slide.classList.contains("swiper-slide-active")
      //        ? (slide.style.height = "340px")
      //        : (slide.style.height = "300px");
      //    });
      //  },
      //},
    });
  }

  start(options = {}) {
    options = Object.assign(
      {
        delay: 4000,
        disableOnInteraction: false,
      },
      options
    );
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }

  stop() {
    this.swiper.autoplay.stop();
  }
}

//export const changeActiveSlideHeight = () => {
//  const slides = document.querySelectorAll(".main__client-slide");
//  slides.forEach((slide, i) => {
//    slide.classList.contains("swiper-slide-active")
//      ? (slide.style.height = "340px")
//      : "";
//  });
//};
//
