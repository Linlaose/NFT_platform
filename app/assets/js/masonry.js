let artworkDetect = document.querySelector('#artwork-masonry');

if (artworkDetect) {
  let artworkMasonry = new Masonry('#artwork-masonry', {
    itemSelector: '#artwork-item',
    horizontalOrder: true,
    columnWidth: '#grid-sizer',
    percentPosition: true
  });
  imagesLoaded("#artwork-masonry").on("progress", () => {
    artworkMasonry.layout();
  });
}