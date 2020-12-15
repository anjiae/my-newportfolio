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

//show "arrow up" button 
const arrowUp = document.querySelector('.arrow-up');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight /2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

//handle "arrow up" button
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

//projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if(filter == null) {
    return;
  }
  //remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      if(filter ==='*' || filter === project.dataset.type) {
        project.classList.remove('invisible');

      }else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  },300);

});

function scrollIntoView (selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}






