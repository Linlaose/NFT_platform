// tabs
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
if (tabArtwork) {
  tabArtwork.addEventListener('click', () => {
    artworkBorderShow();
    artworkShow();
  })
  tabCollection.addEventListener('click', () => {
    collectionBorderShow();
    artworkHide();
  })
}
// tabs end

// content
// 變數
const artwork = document.querySelector('#artwork');
const collection = document.querySelector('#collection');
const productSection = document.querySelector('#productSection');

// 方法
const artworkHide = () => {
  artwork.classList.add('opacity-0', 'absolute', '-z-10', 'top-0');
  collection.classList.remove('opacity-0', 'absolute', 'top-0', '-z-10', 'scale-0');
  productSection.classList.remove('lg:pb-32');
  productSection.classList.add('lg:pb-8');
}
const artworkShow = () => {
  artwork.classList.remove('opacity-0', 'absolute', '-z-10', 'top-0');
  collection.classList.add('opacity-0', 'absolute', 'top-0', '-z-10', 'scale-0');
  productSection.classList.remove('lg:pb-8');
  productSection.classList.add('lg:pb-32');
}
// content end