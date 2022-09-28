// init with element
let artwork = document.querySelector('#');
let artMasonry = new Masonry(artwork, {
  // options...
  itemSelector: '.grid-item',
  columnWidth: 200
});