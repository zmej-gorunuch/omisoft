$(document).ready(function () {
    $('.servoperateslider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        responsive: [{
                breakpoint: 1601,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {

                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.workinslider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        responsive: [{
                breakpoint: 1601,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {

                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            }
        ]

    });

    // faq
    $('.service-faqrow__header').click(function () {
        $('.service-faqrow__header').not($(this)).removeClass('open');
        $(this).toggleClass('open');


        $('.service-faqrow__body').not($(this).next('.service-faqrow__body')).slideUp('fast');
        $(this).next('.service-faqrow__body').slideToggle('fast');
    });



    // 18.04


    if ($('.worksect').length > 0) {
        $(function () {
            $(document).scroll(function () {
                if ($('.case1').length > 0) {
                    if ($(this).scrollTop() >= $('.case1').offset().top - 350) {
                        $('.worksect').removeClass('worksect_red');
                    }
                }
                if ($('.case2').length > 0) {
                    if ($(this).scrollTop() >= $('.case2').offset().top - 350) {
                        $('.worksect').addClass('worksect_red');
                    }
                }
                if ($('.case3').length > 0) {
                    if ($(this).scrollTop() >= $('.case3').offset().top - 350) {
                        $('.worksect').removeClass('worksect_red');
                    }
                }
                if ($('.case4').length > 0) {
                    if ($(this).scrollTop() >= $('.case4').offset().top - 350) {
                        $('.worksect').addClass('worksect_red');
                    }
                }
                if ($('.case5').length > 0) {
                    if ($(this).scrollTop() >= $('.case5').offset().top - 350) {
                        $('.worksect').removeClass('worksect_red');
                    }
                }

            });
        });
    }









});