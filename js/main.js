let menuButton = document.querySelector('header');
let hideMenuButton = document.querySelector('#menu-button');
let blurryBgImage = document.querySelector('.bg-image');
let skewDisplay = document.querySelector('.skew');
let menu = document.querySelector('.menu');
let hideMenu = document.getElementById('bg-image');

function toggleOpen() {
  menuButton.classList.add('open');
  blurryBgImage.classList.add('blurry');
  skewDisplay.classList.add('open');
  menu.classList.add('open');
  hideMenuButton.classList.add('hide');
}

// Click outside will close menu!
window.onload = () => {
  document.onclick = (div) => {
    if(div.target.id === 'bg-image') {
      menuButton.classList.remove('open');
      blurryBgImage.classList.remove('blurry');
      skewDisplay.classList.remove('open');
      menu.classList.remove('open');
      hideMenuButton.classList.remove('hide');
    }
  }
}