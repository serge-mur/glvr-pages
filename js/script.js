document.addEventListener("DOMContentLoaded", function (event) {


  const localMenuBtn = document.querySelector('.local-menu-btn');
  const localMenuCloseBtn = document.querySelector('.local-menu-close-btn');
  const sidebar = document.querySelector('.common-page__sidebar');
  const body = document.querySelector('body');
  localMenuBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
    body.classList.add('_lock');
  });
  localMenuCloseBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
    body.classList.remove('_lock');
  });


  const mql = window.matchMedia("(max-width: 600px)");

  mql.addEventListener("change", (event) => {
    if (event.matches) {
      // <600
      console.log("mobile");
    } else {
      // >600
      console.log("desktop");
    }
  });


  const swiper = new Swiper('.logo-slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.logo-slider__button-next',
      prevEl: '.logo-slider__button-prev',
    },
    scrollbar: {
      el: '.logo-slider__scrollbar',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

});
