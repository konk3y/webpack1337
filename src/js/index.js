import '../scss/style.scss';
// КНОПКА "Читать далее" ХИРО
const dots = document.getElementById('dots');
const more320 = document.getElementById('more320');
const btnS = document.getElementById('btnS');
const img = document.querySelector('.hero__btn--320 img');

btnS.addEventListener('click', function () {
  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnS.innerHTML = 'Читать далее';
    more320.classList.remove('show');
    setTimeout(function () {
      more320.style.display = 'none';
    }, 250);
    img.style.transform = 'rotate(0deg)';
  } else {
    dots.style.display = 'none';
    btnS.innerHTML = 'Скрыть';
    more320.style.display = 'block';
    setTimeout(function () {
      more320.classList.add('show');
    }, 10);
    img.style.transform = 'rotate(180deg)';
  }
});

const dot = document.getElementById('dot');
const more478 = document.getElementById('more478');
const btnM = document.getElementById('btnM');
const img478 = document.querySelector('.hero__btn--478 img');

btnM.addEventListener('click', function () {
  if (dot.style.display === 'none') {
    dot.style.display = 'inline';
    btnM.innerHTML = 'Читать далее';
    more478.classList.remove('show');
    setTimeout(function () {
      more478.style.display = 'none';
    }, 250);
    img478.style.transform = 'rotate(0deg)';
  } else {
    dot.style.display = 'none';
    btnM.innerHTML = 'Скрыть';
    more478.style.display = 'block';
    setTimeout(function () {
      more478.classList.add('show');
    }, 10);
    img478.style.transform = 'rotate(180deg)';
  }
});

// БУРГЕР МЕНЮ
const burgerBtn = document.querySelector('.burger');
const closeBtn = document.querySelector('.icon-exit');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuFooter = document.querySelector('.burger-menu__footer');

burgerBtn.addEventListener('click', () => {
  burgerMenu.style.opacity = 0;
  burgerMenu.style.display = 'flex';
  burgerMenuFooter.style.position = 'sticky';
  burgerMenuFooter.style.bottom = 0;
  setTimeout(() => {
    burgerMenu.style.opacity = 1;

  }, 10);
});

closeBtn.addEventListener('click', () => {
  burgerMenu.style.opacity = 0;
  setTimeout(() => {
    burgerMenu.style.display = 'none';
  }, 300);
});

// СЛАЙДЕР
var swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  loop: false,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  breakpoints: {
    768: {
      enabled: false,
      spaceBetween: 24,
      autoHeight: false,
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerColumn: 2,
    },
    965: {
      spaceBetween: 20,
    },
    1120: {
      spaceBetween: 33,
    },
  },
});

document.querySelector('.read-more').addEventListener('click', function () {
  if (this.innerHTML === 'Показать все') {
    document.querySelectorAll(".swiper-slide__768").forEach(el => el.style.display = 'flex');
    // document.querySelectorAll(".swiper-slide__show924").forEach(el => el.style.display = 'flex');
    this.innerHTML = 'Скрыть';
  } else if (window.innerWidth >= 1120) {
    document.querySelectorAll(".swiper-slide__768").forEach(el => el.style.display = 'none');
    document.querySelectorAll(".swiper-slide__show924").forEach(el => el.style.display = 'flex');
    this.innerHTML = 'Показать все';
  } else if (window.innerWidth >= 768) {
    document.querySelectorAll(".swiper-slide__768").forEach(el => el.style.display = 'none');
    document.querySelectorAll(".swiper-slide__show924").forEach(el => el.style.display = 'none');
    this.innerHTML = 'Показать все';
  } else {
    document.querySelectorAll(".swiper-slide__768").forEach(el => el.style.display = 'none');
    document.querySelectorAll(".swiper-slide__show924").forEach(el => el.style.display = 'flex');
    this.innerHTML = 'Показать все';
  }
});


// СЛАЙДЕР СЕКЦИИ ТЕХНИК
var swiper = new Swiper(".mySwiper__tecnic", {
  slidesPerView: "auto",
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      enabled: false,
      spaceBetween: 24,
      autoHeight: false,
      slidesPerView: 3,
    },
    965: {
      spaceBetween: 20,
    },
    1120: {
      spaceBetween: 33,
    },
  },
});

// Кнопка показать секции technic
document.querySelector('.read-more__technic').addEventListener('click', function () {
  if (this.innerHTML === 'Показать все') {
    document.querySelectorAll(".swiper-slide__technic").forEach(el => el.style.display = 'flex');
    document.querySelectorAll(".swiper-slide__technic924").forEach(el => el.style.display = 'flex');
    this.innerHTML = 'Скрыть';
  } else if (window.innerWidth >= 1120) {
    document.querySelectorAll(".swiper-slide__technic").forEach(el => el.style.display = 'none');
    document.querySelectorAll(".swiper-slide__technic768").forEach(el => el.style.display = 'flex');
    this.innerHTML = 'Показать все';
  } else if (window.innerWidth >= 768) {
    document.querySelectorAll(".swiper-slide__technic").forEach(el => {
      if (!el.classList.contains("swiper-slide__technic")) {
        el.style.display = 'none';
      }
    });
    document.querySelectorAll(".swiper-slide__technic768").forEach(el => el.style.display = 'none');
    this.innerHTML = 'Показать все';
  } else {
    document.querySelectorAll(".swiper-slide__technic").forEach(el => el.style.display = 'none');
    document.querySelectorAll(".swiper-slide__technic768").forEach(el => el.style.display = 'flex');
    this.innerHTML = 'Показать все';
  }
});

// СЛАЙДЕР СЕКЦИИ ПРАЙС
var swiper = new Swiper('.prices__swiper', {
  loop: false,
  clicable: true,
  pagination: {
    el: '.prices__swiper-pagination',
    clickable: true,
  },
  spaceBetween: 15,
  slidesPerView: "auto",
});

// MОДАЛКИ
const modalBtnPhone = document.querySelector('.modal-btn__phone');
const modalWrapperPhone = document.querySelector('.modal-wrapper__phone');
const closeModalBtnPhone = document.querySelector('.close-modal-btn__phone');

modalBtnPhone.addEventListener('click', () => {
  modalWrapperPhone.style.display = 'block';
});

closeModalBtnPhone.addEventListener('click', () => {
  modalWrapperPhone.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == modalWrapperPhone) {
    modalWrapperPhone.style.display = 'none';
  }
});

const modalBtn = document.querySelector('.modal-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const closeModalBtn = document.querySelector('.close-modal-btn');

modalBtn.addEventListener('click', () => {
  modalWrapper.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modalWrapper.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == modalWrapper) {
    modalWrapper.style.display = 'none';
  }
});


console.log('Works!');
