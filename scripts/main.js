$(document).ready(function(){
    var $header = $("header");
    var $sticky = $header.before($header.clone().addClass("sticky"));
    $(window).on("scroll", function(){
        var scrollFromTop = $(window).scrollTop();
        $("body").toggleClass("scroll", (scrollFromTop >350));
    });

    //smooth scroll
    $(".menu li a[href^='#']").on("click", function(e){
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top -60
            }, 1000);
        }
    });

    //masonry
    $(".grid").masonry({
        //options
        itemSelector: ".grid-item",
        columnwidth: 120,
        fitWidth: true,
        gutter: 25
    });

    //Slick Slider
    $(".slider").slick({
        arrows: true,
        centerMode: true,
        slidesToShow: 3,
        prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
        nextArrow: "<button type='button' class='slick-next'>Next</button>"
    });

});
