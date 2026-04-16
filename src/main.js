// CSS
import './styles/variables.css'
import './styles/reset.css'
import './styles/style.css'
// import './styles/swiper-bundle.min.css'
import './fonts/stylesheet.css'

// JS бібліотеки
// import './js/swiper-bundle.min.js'
// import Swiper from 'swiper';
// import 'swiper/css';


// Swiper (npm version)
// ===============================
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

// Підключаємо модулі
Swiper.use([Navigation])

// my code
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

function equalizeSwiperSlideHeights() {
  const slides = document.querySelectorAll('.projects__item');
  let maxHeight = 0;

  slides.forEach(slide => {
    slide.style.height = 'auto';
    const height = slide.offsetHeight;
    if (height > maxHeight) maxHeight = height;
  });

  slides.forEach(slide => {
    slide.style.height = maxHeight + 'px';
  });
}

const swiper = new Swiper('.projects__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  on: {
    init: equalizeSwiperSlideHeights,
    resize: equalizeSwiperSlideHeights,
    slideChangeTransitionEnd: equalizeSwiperSlideHeights
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: '.projects__arrow-next',
    prevEl: '.projects__arrow-prev',
  },
});

