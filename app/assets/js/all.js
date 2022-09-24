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