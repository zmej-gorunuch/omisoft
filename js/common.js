(function ($) {
    $(document).ready(
        function () {

            function slider_responsive(count) {
                let responsiveArray = [];

                if (count >= 3) {
                    responsiveArray.push({
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    }, {
                        breakpoint: 576,
                        settings: {

                            slidesToShow: 1.5,
                            slidesToScroll: 1,
                        }
                    })
                }
                if (count >= 4) {
                    responsiveArray.push({
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    })
                }
                if (count >= 5) {
                    responsiveArray.push({
                        breakpoint: 1201,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                        }
                    })
                }
                if (count >= 6) {
                    responsiveArray.push({
                        breakpoint: 1601,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 1,
                        }
                    })
                }

                return responsiveArray;
            }

            $('.servoperateslider').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                arrows: false,
                infinite: false,
                responsive: slider_responsive(6)
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

            // FAQ.
            $('.service-faqrow__header').click(
                function () {
                    $('.service-faqrow__header').not($(this)).removeClass('open');
                    $(this).toggleClass('open');

                    $('.service-faqrow__body').not($(this).next('.service-faqrow__body')).slideUp();
                    $(this).next('.service-faqrow__body').slideToggle('fast');
                }
            );

            if ($('.worksect').length > 0) {
                let bgSect = $('.cases-wrapper').attr('data-changecolor');
                let bgattr = $('.worksect').attr('data-color');

                $('.worksect').css('background', bgSect);


                $(
                    function () {
                        $(document).scroll(
                            function () {
                                if ($('.case1').length > 0) {
                                    if ($(this).scrollTop() >= $('.case1').offset().top - 350) {
                                        $('.worksect').css('background', bgSect);
                                    }
                                }
                                if ($('.case2').length > 0) {
                                    if ($(this).scrollTop() >= $('.case2').offset().top - 350) {
                                        $('.worksect').css('background', bgattr);
                                    }
                                }
                                if ($('.case3').length > 0) {
                                    if ($(this).scrollTop() >= $('.case3').offset().top - 350) {
                                        $('.worksect').css('background', bgSect);
                                    }
                                }
                                if ($('.case4').length > 0) {
                                    if ($(this).scrollTop() >= $('.case4').offset().top - 350) {
                                        $('.worksect').css('background', bgattr);
                                    }
                                }
                                if ($('.case5').length > 0) {
                                    if ($(this).scrollTop() >= $('.case5').offset().top - 350) {
                                        $('.worksect').css('background', bgSect);
                                    }
                                }
                            }
                        );
                    }
                );
            }


            // 19.04
            if ($(window).width() < 1025) {
                $('.sublink span').click(function () {
                    $(this).parents('li').find('.submenu').toggle();
                });
            }

            $('.header__burger').click(function () {
                $(window).scrollTop(0);
                $('body').toggleClass('noscroll')
                $(this).toggleClass('open');
                $('.header.header .header__nav').toggleClass('show');
            });

            // NEW SECTIONS
            $('.testimonialslider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                infinite: true,
                responsive: [{
                        breakpoint: 1380,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                            adaptiveHeight: true
                        }
                    }

                ]
            });



        }
    );
}(jQuery));