var swiper = new Swiper(".common-swiper", {
  navigation: {
    nextEl: ".swiper_pagination_next",
    prevEl: ".swiper_pagination_prev",
  },
  loop: true,
  initialSlide: 1,  
  breakpoints: {
    768: {
      autoplay: {
        delay: 4000,
      },
    }
  }
});

