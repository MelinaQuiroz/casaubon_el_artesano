$(document).ready(function() {

    $(window).scroll(function() {
        let scrollDist = $(document).scrollTop();
        if(scrollDist > 200) {
            $('.nav').addClass('sticky');
            $(".logo").width("90px").heigth("90px");
            $(".logo").animated({
                left: 90,
            })
                 
        }
         else {
            $('.nav').removeClass('sticky');
            $(".logo").width("130px").heigth("130px");
        }
         
    });

});