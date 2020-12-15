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


//handle click on "contact" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menulist');
navbarMenu.addEventListener('click', (event) => {

  const target = event.target;
  const link = target.dataset.link;

  if( link == null ) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});


function scrollIntoView (selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}






