// 變數
const tabArtwork = document.querySelector('#tab-artwork');
const tabCollection = document.querySelector('#tab-collection');
const artworkBorder = document.querySelector('#artwork-border');
const collectionBorder = document.querySelector('#collection-border');

// 方法
const artworkBorderShow = (() => {
  // artwork
  artworkBorder.classList.remove('hidden');
  tabArtwork.classList.remove('border-transparent', 'text-projectIndigo-500');
  tabArtwork.classList.add('border-b-0', 'border-1', 'border-black');

  // collection
  tabCollection.classList.add('border-transparent', 'text-projectIndigo-500');
  collectionBorder.classList.add('hidden');
});
const collectionBorderShow = (() => {
  // artwork
  artworkBorder.classList.add('hidden');
  tabArtwork.classList.add('border-transparent', 'text-projectIndigo-500');

  // collection
  tabCollection.classList.remove('border-transparent', 'text-projectIndigo-500');
  tabCollection.classList.add('border-b-0', 'border-1', 'border-black');
  collectionBorder.classList.remove('hidden');
});

// 監聽事件
tabArtwork.addEventListener('click', () => {
  artworkBorderShow();
})
tabCollection.addEventListener('click', () => {
  collectionBorderShow();
})