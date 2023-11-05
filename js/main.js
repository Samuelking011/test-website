//initialize WoW JS
new WOW().init();

//initialize swippers

  
document.addEventListener('DOMContentLoaded', function() {
    var aboutSwipper = new Swiper('.aboutSwipper', {
        slidesPerView: 1,
        spaceBetween: 10,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          599: {
            slidesPerView: 1,
            spaceBetween: 30
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


/*//Get The Elements
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");*/

//Toggle the navbar menu on click Open/Close
/*menuBtn.addEventListener("click", () => {
    menu.classList.toggle('nav-toggle');
});*/

//Get the current year and date into the HTML
/*document.querySelector(".year").innerHTML = new Date().getFullYear();*/
