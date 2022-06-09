import "./index.js";

var sp = new Swiper(".common-swiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 3,
      centeredSlides: true,
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const handleSwiperSlide = () => {
  const swipers = document.querySelectorAll(".swiper_home_slide");
  if (swipers) {
    swipers.forEach((swiper) => {
      swiper.querySelector("img")?.addEventListener("click", () => {
        swiper.classList.toggle("show-description");
        sp.autoplay.stop();
      });
    });
  }
};
handleSwiperSlide();

if (window.innerWidth <= 768) {
  sp.autoplay.stop();
}
