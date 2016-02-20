


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
        }
    });

    var hideNav = function () {
        console.log("hello");
        $("nav").removeClass("display");
    }


    $(".toggle").click(function(event) {
        $("nav").toggleClass("display");
        event.preventDefault();
    });

});

(function() {
                // initialize svg

                [].slice.call( document.querySelectorAll( '.si-icons-default > .si-icon' ) ).forEach( function( el ) {
                    var svgicon = new svgIcon( el, svgIconConfig );
                } );
                new svgIcon( document.querySelector( '.si-icons-easing .si-icon-hamburger-cross' ), svgIconConfig, { easing : mina.elastic, speed: 600 } );

            })();