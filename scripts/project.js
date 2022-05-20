const swiperTop = new Swiper(".swiper_project", {
  pagination: {
    el: ".swiper_project_pagination_count",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper_project_pagination_next",
    prevEl: ".swiper_project_pagination_prev",
  },
});

const swiperMulti = new Swiper(".swiper_multi", {
  navigation: {
    nextEl: ".swiper_multi_next",
    prevEl: ".swiper_multi_prev",
  },
});