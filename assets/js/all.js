"use strict";

/* 漢堡 */
// 變數
var burgerBox = document.querySelector('#burger-box');
var burgerTopLine = document.querySelector('#burger-top-line');
var burgerMidLine = document.querySelector('#burger-mid-line');
var burgerBtmLine = document.querySelector('#burger-btm-line');
var burgerNav = document.querySelector('#burger-nav');
var burgerNavMask = document.querySelector('#burger-nav-mask');
var xMark = document.querySelector('#xmark'); // 方法函式

var burgerMenu = function burgerMenu() {
  burgerBox.classList.add('translate-x-full');
  xMark.classList.remove('opacity-0', '-z-10');
};

var burgerCancel = function burgerCancel() {
  xMark.classList.add('opacity-0', '-z-10');
  burgerBox.classList.remove('translate-x-full');
};

var burgerNavShow = function burgerNavShow() {
  burgerNav.classList.remove('h-0', 'opacity-0');
  burgerNavMask.classList.remove('opacity-0', '-z-10');
  burgerNavMask.classList.add('z-10');
};

var burgerNavHide = function burgerNavHide() {
  burgerNav.classList.add('h-0', 'opacity-0');
  burgerNavMask.classList.add('opacity-0', '-z-10');
  burgerNavMask.classList.remove('z-10');
}; // 事件監聽


burgerBox.addEventListener('click', function () {
  burgerMenu();
  burgerNavShow();
});
xMark.addEventListener('click', function () {
  burgerCancel();
  burgerNavHide();
});
/* 漢堡 end */

/* search */
// 變數

var btnSearch = document.querySelector('#btn-search');
var burger = document.querySelector('#burger');
var logoBox = document.querySelector('#logo-box');
var searchField = document.querySelector('#serach-field');
var nav = document.querySelector('#nav');
var navSearch = document.querySelector('#nav-search');
var btnSearchCancel = document.querySelector('#btn-search-cancel'); // 方法函式

var search = function search() {
  burger.classList.add('hidden');
  logoBox.classList.add('hidden');
  nav.classList.add('w-full');
  navSearch.classList.add('w-full', 'justify-between');
  searchField.classList.remove('hidden');
  btnSearchCancel.classList.remove('hidden');
};

var searchCancel = function searchCancel() {
  burger.classList.remove('hidden');
  logoBox.classList.remove('hidden');
  nav.classList.remove('w-full');
  navSearch.classList.remove('w-full', 'justify-between');
  searchField.classList.add('hidden');
  btnSearchCancel.classList.add('hidden');
}; // 事件監聽


btnSearch.addEventListener('click', function () {
  search();
});
btnSearchCancel.addEventListener('click', function () {
  searchCancel();
});
/* search end */
"use strict";

var _Swiper;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var artistSwiper = new Swiper(".artistSwiper", (_Swiper = {
  slidesPerView: 3,
  loop: true,
  grabCursor: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false
  // },
  centeredSlides: true
}, _defineProperty(_Swiper, "slidesPerView", 1), _defineProperty(_Swiper, "breakpoints", {
  768: {
    slidesPerView: 2.3
  },
  1200: {
    slidesPerView: 2.88
  },
  1400: {
    slidesPerView: 3
  }
}), _defineProperty(_Swiper, "spaceBetween", 24), _defineProperty(_Swiper, "effect", 'slide'), _defineProperty(_Swiper, "pagination", {
  el: ".swiper-pagination",
  clickable: true
}), _Swiper));
//# sourceMappingURL=all.js.map
