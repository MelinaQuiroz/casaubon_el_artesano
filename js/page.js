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


    var carousel = $("#carousel").waterwheelCarousel({
          flankingItems: 3,
        });
      
        $('#prev').bind('click',function () {
          carousel.prev();
          return false
      
        });
        $('#next').bind('click',function () {
          carousel.next();
          return false;
      
        });
      


});



