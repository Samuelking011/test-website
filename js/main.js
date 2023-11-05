//initialize WoW JS
new WOW().init();

//initialize swippers
document.addEventListener('DOMContentLoaded', function() {
    var aboutSwipper = new Swiper('.aboutSwipper', {
        slidesPerView: 1,
        spaceBetween: 50,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          599: {
            slidesPerView: 2,
            spaceBetweenSlides: 50
          },
          // Add more breakpoints as needed
        }
      });

    var planeSwiper = new Swiper('.planeSwiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

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

