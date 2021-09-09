new Swiper(".slider-certificates", {
  speed: 300,
  // кол-во слайдов на экране
  slidesPerView: 3,
  // начальный слайд. считает с 0
  initialSlide: 2,
  // отступы между слайдами
  spaceBetween: 27,
  // курсор переключателя
  grabCursor: true,
  // чувствительность к переключению
  touchRatio: 1,
  keyboard: {
    enabled: true,
    // можно управлять, только когда видим слайдер на экране
    onlyInViewport: true,
    // клавиши PageUp
    pageUpDown: false,
  },
  // навигация автоматически настраевается под высоту слайда
  autoHight: false,
  // если слайдов меньше, чем нужно
  watchOverflow: true,
  // бесконечная прокрутка
  loop: true,
  // автоматическая прокурутка
  // autoplay: {
  //   // задержка перед прокруткой
  //   delay: 2000,
  //   // остановить на последнем слайде, не работает при loop
  //   stopOnLastSlide: true,
  //   // отключать когда пользователь взаимодействует
  //   disableOnInteraction: true,
  // },
  // эффект переключения слайда
  effect: "slide",
  // отключить предзагрузку картинок
  preloadImages: false,
  lazy: {
    // false подзагружать картинку слайда, после перехода на него
    loadOnTransitionStart: false,
    // подгрузить предыдущий и следующий слайд
    loadPrevNext: false,
  },
  // слежка за видимыми слайдами
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: ".slider-navigation__button_next",
    prevEl: ".slider-navigation__button_prev",
  },
  pagination: {
    el: ".slider-navigation__pagination",
    type: "fraction",
    currentClass: "slider-navigation__current",
    totalClass: "slider-navigation__total",
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' + "/" + '<span class="' + totalClass + '"></span>';
    },
  },
});

new Swiper(".slider-reviews", {
  slidesPerView: 4,
  spaceBetween: 20,
  grabCursor: true,
  nested: true,
  autoHight: true,
  // переходит на слайд при щелщке
  slideToClickedSlide: false,
  // longSwipes: false,
  // возможность прокрутки
  simulateTouch: false,
  // чувствительность прокрутки
  // touchRatio: 0.4,
  navigation: {
    prevEl: ".slider-reviews-button_prev",
    nextEl: ".slider-reviews-button_next",
  },
  pagination: {
    type: "fraction",
    el: ".slider-reviews__pagination",
    currentClass: "pagination__current",
    totalClass: "pagination__total",
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' + "/" + '<span class="' + totalClass + '"></span>';
    },
  },
});

new Swiper(".slider-company", {
  speed: 2000,
  slidesPerView: 3,
  spaceBetween: 50,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
});


const buttonAction = document.querySelectorAll('.action-button');
const videoSlide = document.querySelectorAll('.slider-video');

for (let i = 0; i < buttonAction.length; i++) {
  const btn = buttonAction[i];
  const video = videoSlide[i];
  btn.addEventListener("click", function () {
    if (video.paused == true) {
      video.play();
      btn.innerHtml = "pause";
      btn.style.opacity = "0";
    } else {
      video.pause();
      btn.innerHtml = "play";
      btn.style.opacity = "1";
    }
  });
}




