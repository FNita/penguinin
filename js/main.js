(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Fact Counter

    $(document).ready(function () {
        $('.counter-value').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: jQuery.easeInQuad,
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });


    // Navigation active state on scroll

    var nav_sections = $('section');
    var main_nav = $('.navbar-nav, .mobile-nav');
    var main_nav_height = $('#navbar').outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        nav_sections.each(function () {
            var top = $(this).offset().top - main_nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                main_nav.find('a').removeClass('active');
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.navbar').addClass('nav-sticky animated slideInDown');
        } else {
            $('.navbar').removeClass('nav-sticky animated slideInDown');
        }
    });



    // Intro carousel
    var mainOwl = $('.owl-carousel.main-carousel');
    mainOwl.owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        navText: false,
        dots: true,
        mouseDrag: true,
        margin: 10,
        navigation: true,
        slideBy: 1,
        items: 1,
    });

    mainOwl.on('change.owl.carousel', function (event) {
        var el = event.target;
        $('.animdown', el).addClass('animated fadeInDown delay-250ms')
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $('.animdown', el).removeClass('animated fadeInDown delay-250ms');
            });
        $('.animup', el).addClass('animated fadeInUp delay-250ms')
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $('.animup', el).removeClass('animated fadeInUp delay-250ms');
            });
        $('.animupslow', el).addClass('animated fadeInUp delay-500ms')
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $('.animupslow', el).removeClass('animated fadeInUp delay-500ms');
            });
        $('.animfade', el).addClass('animated fadeIn delay-250ms')
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $('.animfade', el).removeClass('animated fadeIn delay-250ms');
            });
    });


    // Case studies carousel
    var testowl = $("#testimonial-slider");
    testowl.owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        center: true,
        dots: false,
        loop: false,
        margin: 10,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    testowl.on('change.owl.carousel', function (event) {
        var el = event.target;
        $('.testimonial-content', el).addClass('animated fadeInRight delay-500ms')
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $('.testimonial-content', el).removeClass('animated fadeInRight delay-500ms');
            });
    });

})(jQuery);

