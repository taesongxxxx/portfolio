"use strict";
// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarheight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarheight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the menu

const navbar__menu = document.querySelector(".navbar__menu");
navbar__menu.addEventListener("click", (event) => {

  const target = event.target;
  if (target.nodeName === 'LI') {
    const active = document.querySelector('.navbar__menu__item.active');
    active.classList.remove('active');
    target.classList.add('active');
  }
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });

  navbar__menu.classList.remove('open');
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbar__menu.classList.toggle('open');
}); 

// contact me
const contactbtn = document.querySelector('.home__contact');
contactbtn.addEventListener('click', () => {
  const contact = document.querySelector('#contact');
  contact.scrollIntoView({ behavior: "smooth"});
});


// Make home slowly fade to transparent as the window scrolls down

const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
const homecontainer = document.querySelector(".home");
document.addEventListener("scroll", () => {
  homecontainer.style.opacity = (homeHeight - window.scrollY) / homeHeight;
});

// Show "scroll btn" button when scrollling down
const scrollbtn = document.querySelector(".scroll-btn");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    scrollbtn.classList.add("active");
  } else {
    scrollbtn.classList.remove("active");
  }
});

// Handle click on the "scroll btn" down
scrollbtn.onclick = function () {
  window.scroll({ top: 0, behavior: "smooth" });
};

// projects 
const workbtncontainer = document.querySelector(".work__categories");
const projectcontainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll(".project");

workbtncontainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

  const active = document.querySelector('.category__btn.active');
  active.classList.remove('active');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('active');

    if (filter === null) {
    return;
  }
  projectcontainer.classList.add('anime-out');
 

  setTimeout(()=> {
    projectcontainer.classList.remove('anime-out');

    projects.forEach((project) => {

      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    }); 
  }, 300);

});

