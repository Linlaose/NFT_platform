var artistSwiper = new Swiper(".artistSwiper", {
  slidesPerView: 3,
  loop: true,
  grabCursor: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false
  // },
  centeredSlides: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2.3
    },
    1200: {
      slidesPerView: 2.88
    },
    1400: {
      slidesPerView: 3
    }
  },
  spaceBetween: 24,
  effect: 'slide',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});