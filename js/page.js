$(document).ready(function () {
 
    /*--Sticky Navigation---*/
    $(window).scroll(function () {
      let scrollDist = $(document).scrollTop();
      if (scrollDist >= 150) {
        $(".nav").addClass("sticky");
        $(".logo").width("90px").heigth("90px");
      } else {
        $(".nav").removeClass("sticky");
        $(".logo").width("130px").heigth("130px").css("transition", "all 0.25s");
      }
    });
  });
  