$(document).ready(function(){
    /*Menu-toggle button*/
    $(".menu-icon").on("click", function() {
                $("nav ul").toggleClass("showing");
            });
    /*Scrolling Effect*/ 
    $(window).on("scroll", function() {
            if ($(window).scrollTop()) {
                $('nav').addClass('black');
            } else {
                $('nav').removeClass('black');
            }
        })
    /*jQuery Ui*/
    $('#acc').accordion();
    $('#tabs').tabs();
});