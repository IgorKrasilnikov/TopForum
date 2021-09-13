const heroSlider = new Swiper('.hero__slider-inner', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 100,
  navigation: {
    nextEl: '.hero__slider-next',
    prevEl: '.hero__slider-prev',
  },
});

const reviewsSLider = new Swiper('.reviews__slider', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 50,
  navigation: {
    nextEl: '.reviews__slider-next',
    prevEl: '.reviews__slider-prev',
  },
});
const clientsSlider = new Swiper('.clients__slider', {
  loop: true,
  slidesPerView: 6,
  navigation: {
    nextEl: '.clients__slider-next',
    prevEl: '.clients__slider-prev',
  },
});