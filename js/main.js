"use strict";

//Sticky Navbar on scroll
const navbar = document.querySelector('#navbar');
const navbarTop = navbar.offsetTop;

function fixedNavbar() {

  if( window.scrollY >= navbarTop) {
    navbar.classList.add('fixed-navbar');
  }
  else {
    navbar.classList.remove('fixed-navbar');
  }
}
window.addEventListener('scroll', fixedNavbar);



//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menulist');
navbarMenu.addEventListener('click', (event) => {

  const target = event.target;
  const link = target.dataset.link;

  if( link == null ) {
    return;
  }
  scrollIntoView(link);
});

function scrollIntoView (selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}


