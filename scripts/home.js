import "./index.js";

const sp = new Swiper(".common-swiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    1000: {
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

if (window.innerWidth <= 768) {
  sp.autoplay.stop();
}

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

const openModal = () => {
  const btns = document.querySelectorAll(".open-modal");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const modal = document.querySelector(
        `[data-modal=${btn.getAttribute("data-modal-target")}]`
      );

      if (modal) {
        modal.classList.toggle("active");

        const closeModal = (e) => {
          const removeModal = () => {
            modal.classList.remove("active");
            modal.removeEventListener("click", closeModal);
            window.removeEventListener("keydown", closeModal);
          };

          if (e.target?.classList.contains("modal-project")) removeModal();
          if (e.key === "Escape") removeModal();
        };

        modal.addEventListener("click", closeModal);
        window.addEventListener("keydown", closeModal);
      }
    });
  });
};
openModal();
