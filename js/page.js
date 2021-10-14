$(document).ready(function () {
  /*---HAMBURGUER BTN---*/
  const menuBtn = $(".menu-btn");
  let menuOpen = false;
  menuBtn.click(() => {
    if (!menuOpen) {
      menuBtn.addClass("open");
      menuOpen = true;
       
      $('.site-nav').toggleClass('site-nav--open', 500);
      $(this).toggleClass('open');
    } else {
      menuBtn.removeClass("open");
      menuOpen = false;
      $(".site-nav").removeClass("open");
    }
  });

    /*--Sticky Navigation---*/
    $(window).scroll(function () {
      if ($(window).scrollTop() > 100) {
        $("nav").addClass("sticky");
       
      } else {
        $("nav").removeClass("sticky");
      
      }
    });

    
    /*---Carousel--*/

    $('.for_slick_slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrow: true,
      centerMode: true,
      centerPadding: "0",
      prevArrow:   '<a href="#" id="prev"><img class="img-fluid" src="images/left-arrow.png" alt="prev" /></a>',
      nextArrow:  '<a href="#" id="next"><img class="img-fluid" src="images/right-arrow.png" alt="next" /></a>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
            
   /*---Smooth scroll navigation ---*/
   
 



});