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

  //   /*--Sticky Navigation---*/
  //   $(window).scroll(function () {
  //     let header = $("header");
  //     if ($(this).scrollTop() > 50) {
  //       if (!header.data("faded"))
  //         header.data("faded", 1).stop(true).fadeTo(400, 0.5);
  //       $(".nav").addClass("sticky");
  //       $(".logo").width("90px").heigth("90px");
  //     } else if (header.data("faded")) {
  //       header.data("faded", 0).stop(true).fadeTo(400, 1);
  //       $(".nav").removeClass("sticky");
  //       $(".logo").width("130px").heigth("130px");
  //     }
  //   });
});
