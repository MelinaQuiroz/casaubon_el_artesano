$(document).ready(function () {
  /*---HAMBURGUER BTN---*/
  const menuBtn = $(".menu-btn");
  let menuOpen = false;
  menuBtn.click(() => {
    if (!menuOpen) {
      menuBtn.addClass("open");
      menuOpen = true;
    } else {
      menuBtn.removeClass("open");
      menuOpen = false;
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
      centerPadding: "0"
    });
            
    
  
      




});