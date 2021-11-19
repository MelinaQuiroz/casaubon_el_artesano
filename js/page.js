$(document).ready(function () {
  /*---HAMBURGUER BTN---*/
  const menuBtn = $(".menu-btn");
  let menuOpen = false;
  menuBtn.click(() => {
    if (!menuOpen) {
      menuBtn.addClass("open");
      menuOpen = true;

      $(".site-nav").toggleClass("site-nav--open", 500);
      $(this).toggleClass("open");
      $(".navbar").toggleClass("show");

      //no scroll
      $("html, body").css({
        overflow: "hidden",
        height: "100%",
      });
    } else {
      menuBtn.removeClass("open");
      menuOpen = false;
      $(".site-nav").removeClass("open");
      $(".navbar").removeClass("show");

      //scroll
      $("html, body").css({
        overflow: "auto",
        height: "auto",
      });
    }
  });

  /*--Sticky Navigation---*/
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".menu").addClass("sticky");
    } else {
      $(".menu").removeClass("sticky");
    }
  });

  /*--Menu Navigation--*/
  var linkMenu = $(".nav-menu-link");
  linkMenu.click(() => {
    $(".navbar").removeClass("show");
    //scroll
    $("html, body").css({
      overflow: "auto",
      height: "auto",
    });
    menuBtn.removeClass("open");
    menuOpen = false;
    $(".site-nav").removeClass("open");
  });

  /*---Carousel--*/

  $(".for_slick_slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: true,
    centerPadding: "0",
    prevArrow: '<a href="#" id="prev"><img class="img-fluid" src="images/left-arrow.png" alt="prev" /></a>',
    nextArrow: '<a href="#" id="next"><img class="img-fluid" src="images/right-arrow.png" alt="next" /></a>',
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  /* Achicar y posicionar el logo al scrollear */

  $(window).scroll(function () {
    if ($(window).scrollTop() < 200) {
      $("#logo").css({
        width: "450px",
        height: "auto",
      });
      $("#logo-min").css({
        opacity: "0%",
        "-webkit-transition": "all 0.2s ease",
        "-moz-transition": "all 0.2s ease",
        "-ms-transition": "all 0.2s ease",
        "-o-transition": "all 0.2s ease",
        transition: "all 0.2s ease",
      });
    }
    if ($(window).scrollTop() > 200) {
      $("#logo").css({
        width: "300px",
        height: "250px",
        "-webkit-transition": "all 0.5s ease",
        "-moz-transition": "all 0.5s ease",
        "-ms-transition": "all 0.5s ease",
        "-o-transition": "all 0.5s ease",
        transition: "all 0.5s ease",
      });

      $("#logo-min").css({
        opacity: "100%",
      });
    }
  });

  /* Achicar y posicionar el logo al clickear el menu */

  /*---Smooth scroll navigation ---*/
  /*   window.scroll({
     top: 2500, 
     left: 0, 
     behavior: 'smooth'
   }); */

  /* botones footer */
});