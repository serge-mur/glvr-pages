document.addEventListener("DOMContentLoaded", function (event) {

  // local menu
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

  // history slider
  const breakpoint = window.matchMedia('(max-width:991px)');
  let eventSlider;
  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
        if (eventSlider !== undefined) eventSlider.destroy(true, true);
        return;
    } else if (breakpoint.matches === false) {
        return enableeventSlider();
    }
  };
  const enableeventSlider = function () {
    eventSlider = new Swiper('.event-slider', {
      slidesPerView: 1,
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: '.event-slider__button-next',
        prevEl: '.event-slider__button-prev',
      }
    });
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();

  // logo slider
  const logoSlider = new Swiper('.logo-slider', {
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

  // product slider
  const productSlider = new Swiper('.product-slider', {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: '.product-slider__button-next',
      prevEl: '.product-slider__button-prev',
    },
    scrollbar: {
      el: '.product-slider__scrollbar',
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
