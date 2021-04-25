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

    $('.local-client').slick({
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        prevArrow: '<i class="arrows arrows--small prev appended fal fa-arrow-left me-3"></i>',
        nextArrow: '<i class="arrows arrows--small prev appended fal fa-arrow-right"></i>',
        appendArrows: $('.append-arrows--local-client'),
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })

    $('.international-client').slick({
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        loop: false,
        prevArrow: '<i class="arrows arrows--small prev appended fal fa-arrow-left me-3"></i>',
        nextArrow: '<i class="arrows arrows--small prev appended fal fa-arrow-right"></i>',
        appendArrows: $('.append-arrows--international-client'),
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })

    // my code ----------------------------------------------------------------------
    $.each($('[data-bg-img]'), (index, item) => {
        $(item).css('background-image', 'url(' + $(item).data('bgImg') + ')')
    })

    // sticky menu ber and go to top button
    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();
        var topOffset = $('.nav-bar--top').height() + 10;

        if (scrolled > topOffset) {
            $('.go-to-top').addClass('active');
            $('.nav-bar--bottom').addClass('sticky');
            $('main').css('margin-top', $('.nav-bar--bottom').height())
        } else {
            $('.go-to-top').removeClass('active');
            $('.nav-bar--bottom').removeClass('sticky')
            $('main').css('margin-top', '0')
        }
    });
    $('.go-to-top').click(function () {
        $(window).scrollTop(0);
    });

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

    $('.cart__content').hover(function () {
        $(this).find('.cart__meta').stop().slideUp(200)
        $(this).find('.cart__button--2').stop().slideDown(200)
    }, function () {
        $(this).find('.cart__meta').stop().slideDown(200)
        $(this).find('.cart__button--2').stop().slideUp(200)
    });

    $('.preloader').fadeOut(200);

    // WOW active
    new WOW({
        offset: 100,
    }).init();
});
