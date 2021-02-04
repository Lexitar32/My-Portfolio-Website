const mainMenu = document.querySelector('.nav-item');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const myName = 'Hi, I am Arimoro Olamilekan';
const myProfile = 'A solution driven software developer';


// Hamburger Menu
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

// Show Menu
function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

// Close Menu
function close() {
  mainMenu.style.top = '-1000px';
}

// Name Auto Writer
let index = 0;

function autoWriter() {
  document.getElementById('autoWriter').innerText = myName.slice(0, index);
  document.getElementById('autoWriter1').innerText = myProfile.slice(0, index);

  index++;

  if (index > myProfile.length) {
    index = 0;
  }
}

setInterval(() => {
  autoWriter();
}, 500);