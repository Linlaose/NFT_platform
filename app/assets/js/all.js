/* 漢堡 */
const burgerBox = document.querySelector('#burger-box');
const burgerTopLine = document.querySelector('#burger-top-line');
const burgerMidLine = document.querySelector('#burger-mid-line');
const burgerBtmLine = document.querySelector('#burger-btm-line');
const burgerNav = document.querySelector('#burger-nav');
const burgerNavMask = document.querySelector('#burger-nav-mask');
const xMark = document.querySelector('#xmark');

const burgerMenu = () => {
  burgerBox.classList.add('translate-x-full');
  xMark.classList.remove('opacity-0', '-z-10');
};
const burgerCancel = () => {
  xMark.classList.add('opacity-0', '-z-10');
  burgerBox.classList.remove('translate-x-full');
};
const burgerNavShow = () => {
  burgerNav.classList.remove('h-0', 'opacity-0');
  burgerNavMask.classList.remove('opacity-0');
};
const burgerNavHide = () => {
  burgerNav.classList.add('h-0', 'opacity-0');
  burgerNavMask.classList.add('opacity-0');
};

burgerBox.addEventListener('click', () => {
  burgerMenu();
  burgerNavShow();
});
xMark.addEventListener('click', () => {
  burgerCancel();
  burgerNavHide();
});
/* 漢堡 end */

/* search */
const btnSearch = document.querySelector('#btn-search');
const burger = document.querySelector('#burger');
const logoBox = document.querySelector('#logo-box');
const searchField = document.querySelector('#serach-field');
const nav = document.querySelector('#nav');
const navSearch = document.querySelector('#nav-search');
const btnSearchCancel = document.querySelector('#btn-search-cancel');

const search = () => {
  burger.classList.add('hidden');
  logoBox.classList.add('hidden');
  nav.classList.add('w-full');
  navSearch.classList.add('w-full', 'justify-between');
  searchField.classList.remove('hidden');
  btnSearchCancel.classList.remove('hidden');
};
const searchCancel = () => {
  burger.classList.remove('hidden');
  logoBox.classList.remove('hidden');
  nav.classList.remove('w-full');
  navSearch.classList.remove('w-full', 'justify-between');
  searchField.classList.add('hidden');
  btnSearchCancel.classList.add('hidden');
};

btnSearch.addEventListener('click', () => {
  search();
});
btnSearchCancel.addEventListener('click', () => {
  searchCancel();
});