"use strict";

/* 漢堡 */
// 變數
var burgerBox = document.querySelector('#burger-box');
var burgerTopLine = document.querySelector('#burger-top-line');
var burgerMidLine = document.querySelector('#burger-mid-line');
var burgerBtmLine = document.querySelector('#burger-btm-line');
var burgerNav = document.querySelector('#burger-nav');
var mainContent = document.querySelector('#main-content');
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
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
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
"use strict";

var artworkDetect = document.querySelector('#artwork-masonry');

if (artworkDetect) {
  var artworkMasonry = new Masonry('#artwork-masonry', {
    itemSelector: '#artwork-item',
    horizontalOrder: true,
    columnWidth: '#grid-sizer',
    percentPosition: true
  });
  imagesLoaded("#artwork-masonry").on("progress", function () {
    artworkMasonry.layout();
  });
}
"use strict";

// tabs
// 變數
var tabArtwork = document.querySelector('#tab-artwork');
var tabCollection = document.querySelector('#tab-collection');
var artworkBorder = document.querySelector('#artwork-border');
var collectionBorder = document.querySelector('#collection-border'); // 方法

var artworkBorderShow = function artworkBorderShow() {
  // artwork
  artworkBorder.classList.remove('hidden');
  tabArtwork.classList.remove('border-transparent', 'text-projectIndigo-500');
  tabArtwork.classList.add('border-b-0', 'border-1', 'border-black'); // collection

  tabCollection.classList.add('border-transparent', 'text-projectIndigo-500');
  collectionBorder.classList.add('hidden');
};

var collectionBorderShow = function collectionBorderShow() {
  // artwork
  artworkBorder.classList.add('hidden');
  tabArtwork.classList.add('border-transparent', 'text-projectIndigo-500'); // collection

  tabCollection.classList.remove('border-transparent', 'text-projectIndigo-500');
  tabCollection.classList.add('border-b-0', 'border-1', 'border-black');
  collectionBorder.classList.remove('hidden');
}; // 監聽事件


if (tabArtwork) {
  tabArtwork.addEventListener('click', function () {
    artworkBorderShow();
    artworkShow();
  });
  tabCollection.addEventListener('click', function () {
    collectionBorderShow();
    artworkHide();
  });
} // tabs end
// content
// 變數


var artwork = document.querySelector('#artwork');
var collection = document.querySelector('#collection');
var productSection = document.querySelector('#productSection'); // 方法

var artworkHide = function artworkHide() {
  artwork.classList.add('opacity-0', 'absolute', '-z-10', 'top-0');
  collection.classList.remove('opacity-0', 'absolute', 'top-0', '-z-10', 'scale-0');
  productSection.classList.remove('lg:pb-32');
  productSection.classList.add('lg:pb-8');
};

var artworkShow = function artworkShow() {
  artwork.classList.remove('opacity-0', 'absolute', '-z-10', 'top-0');
  collection.classList.add('opacity-0', 'absolute', 'top-0', '-z-10', 'scale-0');
  productSection.classList.remove('lg:pb-8');
  productSection.classList.add('lg:pb-32');
}; // content end
//# sourceMappingURL=all.js.map
