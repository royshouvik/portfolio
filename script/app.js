


$(document).ready(function() {
    $('#fullpage').fullpage({
        menu: '#navmenu',
        autoScrolling: false,
        anchors:['intro', 'portfolio', 'about', 'contact'],
        resize : false,
        fitToSection : false,
        normalScrollElements: '.footer',
        afterLoad: function () {
            $("nav").removeClass("display");
            $(".toggle span").removeClass("genericon-close-alt").addClass("genericon-menu");
            $(".toggle").removeClass("move-right");
        }
    });

    var hideNav = function () {
        console.log("hello");
        $("nav").removeClass("display");
    }


    $(".toggle").click(function(event) {
        $("nav").toggleClass("display");
        $(".toggle span").toggleClass("genericon-menu genericon-close-alt");
        $(".toggle").toggleClass("move-right");
        event.preventDefault();
    });

});

