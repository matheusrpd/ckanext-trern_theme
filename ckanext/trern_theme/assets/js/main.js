/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if (navToggle) {
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu');
  });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach(link => link.addEventListener('click', linkAction));