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
  slidesPerView: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: '.reviews__slider-next',
    prevEl: '.reviews__slider-prev',
  },
  breakpoints: {
    1215: {
      slidesPerView: 2,
    }
  }
});
const clientsSlider = new Swiper('.clients__slider', {
  loop: true,
  slidesPerView: 6,
  navigation: {
    nextEl: '.clients__slider-next',
    prevEl: '.clients__slider-prev',
  },
});

const burgerMenuBtn = document.querySelector('.menu-btn'),
  closeMenuBtn = document.querySelector('.close-btn'),
  menu = document.querySelector('.menu');
let menuOpen = false;
burgerMenuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    burgerMenuBtn.classList.add('open');
    menu.classList.add('show');
    menuOpen = true;
    document.body.style.overflow = 'hidden';
  }
});
closeMenuBtn.addEventListener('click', () => {
  if (menuOpen = true) {
    burgerMenuBtn.classList.remove('open');
    menu.classList.remove('show');
    menuOpen = false;
    document.body.style.overflow = 'unset';
  }
});