let menuDiv = document.querySelector('.menu-div');
let menuButton = document.querySelector('.menu-button');
let closeMenuButton = document.querySelector('.close-menu');

function toggleMenu(){
    menuDiv.classList.toggle('closed');
    menuDiv.classList.toggle('open');
};

function closeMenu(){
    menuDiv.classList.add('closed');
    menuDiv.classList.remove('open');
};

menuButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', closeMenu);