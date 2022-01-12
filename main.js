'use strict';
// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarheight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(window.scrollY > navbarheight) {
    navbar.classList.add('navbar--dark');
  } 
  else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the menu

const navbar__menu = document.querySelector('.navbar__menu');
document.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  } 

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior:"smooth"});
});

// Make home slowly fade to transparent as the window scrolls down

const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
const homecontainer = document.querySelector('.home');
document.addEventListener('scroll', () => {
  homecontainer.style.opacity = (homeHeight - window.scrollY) / homeHeight;
});
