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
                    $(this).text(Math.ceil(now).toLocaleString('en'));
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
        if ($(window).width() >= 992) {
            if ($(this).scrollTop() > 150) {
                $('.navbar').removeClass('with-announcement');
                $('.navbar').addClass('nav-sticky animated slideInDown');
            } else {
                $('.navbar').removeClass('nav-sticky animated slideInDown');
                $('.navbar').addClass('with-announcement');
            }
        }
    });



    // Intro carousel
    var mainOwl = $('.owl-carousel.main-carousel');
    mainOwl.owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        animateIn: 'fadeInDown',
        animateOut: '',
        loop: true,
        nav: false,
        navText: false,
        dots: false,
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


    // Mega menu items switch

    $(document).ready(function () {
        if ($(window).width() >= 992) {
            $(".dropdown").on("mouseover", function () {
                $(this).find('.dropdown-menu').addClass('show');
                $(this).find('.nav-link').addClass('show');
                $(this).find('.nav-link').attr('aria-expanded', true);
                if (!$('.penitem').hasClass('active')) {
                    $('.penitem.firstitem').addClass('active');
                }
                if (!$('.penmenu').hasClass('active')) {
                    $('.penmenu.firstitem').addClass('active');
                }

            });
            $(".dropdown").on("mouseout", function () {
                $(this).find('.dropdown-menu').removeClass('show');
                $(this).find('.nav-link').removeClass('show');
                $(this).find('.nav-link').attr('aria-expanded', false);
            });
            $('.penitem').on('mouseover', function (e) {
                e.preventDefault();

                $('.penitem').removeClass('active');
                $(this).addClass('active');

                $('.penmenu').addClass('penhide');
                var targetclass = $(this).data("menutarget");
                $('.' + targetclass).removeClass('penhide');
            });
        }
    });

    /*
       function drawLineIntro() {
           // Get the id of the <path> element and the length of <path>
           var line = document.getElementById("line");
           if (typeof (line) != 'undefined' && line != null) {
               var length = line.getTotalLength();
   
               // The start position of the drawing
               line.style.strokeDasharray = length;
   
               // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
               line.style.strokeDashoffset = length;
   
               // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
               window.addEventListener("scroll", myFunction);
   
               function myFunction() {
                   var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 15;
   
                   var draw = length * scrollpercent;
   
                   // Reverse the drawing (when scrolling upwards)
                   line.style.strokeDashoffset = length - draw;
               }
           }
       }
       drawLineIntro();
   
      
           function drawLineApplication() {
               // Get the id of the <path> element and the length of <path>
               var line2 = document.getElementById("line2");
       
               if (typeof (line2) != 'undefined' && line2 != null) {
       
                   var length2 = line2.getTotalLength();
       
                   // The start position of the drawing
                   line2.style.strokeDasharray = length2;
       
                   // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
                   line2.style.strokeDashoffset = length2;
       
                   // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
                   window.addEventListener("scroll", myFunction2);
       
                   function myFunction2() {
                       var scrollpercent2 = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
       
                       var draw2 = length2 * scrollpercent2 * 11;
       
                       // Reverse the drawing (when scrolling upwards)
                       line2.style.strokeDashoffset = length2 - draw2;
                   }
               }
           }
           drawLineApplication();
       
           
               function drawLineContact() {
                   // Get the id of the <path> element and the length of <path>
                   var line3 = document.getElementById("line3");
           
                   if (typeof (line3) != 'undefined' && line3 != null) {
           
                       var length3 = line3.getTotalLength();
           
                       // The start position of the drawing
                       line3.style.strokeDasharray = length3;
           
                       // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
                       line3.style.strokeDashoffset = length3;
           
                       // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
                       window.addEventListener("scroll", myFunction3);
           
                       function myFunction3() {
                           var scrollpercent3 = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 10;
           
                           var draw3 = length3 * scrollpercent3;
           
                           var scrollpercentage = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
                           var pt = line3.getPointAtLength(scrollpercentage * length3);
                           var dot = document.getElementById("dot");
                           if (pt.y > 50) {
                               dot.style.opacity = "1";
                           } else {
                               dot.style.opacity = "0";
                           }
           
                           // Reverse the drawing (when scrolling upwards)
                           line3.style.strokeDashoffset = length3 - draw3;
                       }
                   }
               }
               drawLineContact();
           
           */



    function drawLine(lineID) {

        var line = document.getElementById(lineID);

        if (typeof (line) != 'undefined' && line != null) {

            var length = line.getTotalLength();

            line.style.strokeDasharray = length;

            line.style.strokeDashoffset = length;

            $(window).on('scroll', function () {

                var scrollTop = $(window).scrollTop(),
                    elementOffset = $('#' + lineID).offset().top,
                    windowHeight = $(window).height(),
                    distance = (elementOffset - scrollTop);

                var scrollpercent = 0;

                if (windowHeight > distance && distance > -200) {
                    scrollpercent = 1 - distance / windowHeight;
                }

                var draw = length * scrollpercent * 1.5;

                var dot = line.parentNode.nextElementSibling;

                if (typeof (dot) != 'undefined' && dot != null) {
                    if (dot.classList.contains('dot')) {

                        if (draw >= length) {
                            dot.style.opacity = "1";
                        } else {
                            dot.style.opacity = "0";
                        }
                    }
                }

                // Reverse the drawing (when scrolling upwards)
                line.style.strokeDashoffset = length - draw;
            });
        }
    }
    drawLine('lineIntro');
    drawLine('lineApplications');
    drawLine('lineContact');
    drawLine('linePenTrack2');
    drawLine('linePenTrack3');
    drawLine('linePenTrack4');

})(jQuery);

