$(document).ready(function () {

    //     /* magnificPopup img view */
    //     $('.popup-image').magnificPopup({
    //         type: 'image',
    //         gallery: {
    //             enabled: true
    //         }
    //     });

    //     /* magnificPopup video view */
    //     $('.popup-video').magnificPopup({
    //         type: 'iframe'
    //     });

    //for menu active class
    //     $('.portfolio-menu button').on('click', function (event) {
    //         $(this).siblings('.active').removeClass('active');
    //         $(this).addClass('active');
    //         event.preventDefault();
    //     });

    // WOW active
    //     new WOW().init();

    // slick slider for banner 
    $('.cart-slider').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        cssEase: 'ease-in-out',
        // autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    });

    // my code ----------------------------------------------------------------------
    $.each($('[data-bg-img]'), (index, item) => {
        $(item).css('background-image', 'url(' + $(item).data('bgImg') + ')')
    })
    // preloader
    //     $(".preloader").animate({
    //         top: -2000000
    //     }, 1500);

    // sticky menu ber and go to top button
    //     $(window).scroll(function () {
    //         var scrolled = $(window).scrollTop();
    //         var topMain = $('main').offset().top - 400;

    // go to top button
    //         if (scrolled > topMain) {
    //             $('.go-to-top').addClass('active');
    //             $('.nav-outer').addClass('sticky');

    //             $('.go-to-top').click(function () {
    //                 $(window).scrollTop(0);
    //             });
    //         } else {
    //             $('.go-to-top').removeClass('active');
    //             $('.nav-outer').removeClass('sticky')
    //         }
    // console.log(scrolled);
    //     });

    // menu bar open -------------------------
    $('.nav-bar--mobile .hamburger-menu-icon').click(function () {
        $(this).children('i').toggleClass('fas fal')
        $(this).children('i').toggleClass('fa-bars fa-times')

        if ($(this).hasClass('open-mobile-navigation')) {
            $('.mobile-navigation').css({
                'width': '100%',
            });
            $('.overlay').fadeIn();

        } else {
            $('.mobile-navigation').css({
                'width': '0',
            });
            $('.overlay').fadeOut();
        }

        $(this).toggleClass('open-mobile-navigation close-mobile-navigation');
    });
    $('.overlay').click(() => {
        $('.mobile-navigation').css({
            'width': '0',
        });
        $('.overlay').fadeOut();

        $('.nav-bar--mobile .hamburger-menu-icon i').toggleClass('fas fal')
        $('.nav-bar--mobile .hamburger-menu-icon i').toggleClass('fa-bars fa-times')
        $('.nav-bar--mobile .hamburger-menu-icon').toggleClass('open-mobile-navigation close-mobile-navigation');
    })
    // menu bar close -------------------------
    // $('.nav-bar--mobile .close-mobile-navigation').click(function () {
    //     console.log(this)
    //     $(this).toggleClass('hamburger-menu-icon close-mobile-navigation');

    //     $('.mobile-navigation').css({
    //         'width': '0',
    //     });
    //     $('.overlay').fadeOut();
    // });
    // dropdown toggle ------------------
    //     $('.mobile-navigations li.has-dropdown > i').click(function () {
    //         $(this).parent().find('>ul').slideToggle()
    //     });


});
