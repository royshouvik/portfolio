$(document).ready(function() {
    $("ul.nav li").click(function(event) {
        $("li").removeClass("active");
        $(this).addClass("active");
        event.preventDefault();
    });

    $("#portfolio-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".portfolio").offset().top
        }, 500);
    });

    $("#intro-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".intro").offset().top
        }, 500);
    });

    $("#about-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 500);
    });

    $("#contact-button").click(function() {
        $('html, body').animate({
            scrollTop: $(".contact").offset().top
        }, 500);
    });

});
