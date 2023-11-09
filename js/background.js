//initialize WoW JS
new WOW().init();

document.addEventListener('DOMContentLoaded', () => {
    //Get The Elements
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
  
    //Toggle the navbar menu on click Open/Close
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('nav-toggle');
    });
  
    //Get the current year and date into the HTML
    document.querySelector(".year").innerHTML = new Date().getFullYear();
  
  });
  