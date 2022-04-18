$(document).ready(function () {
    $('.servoperateslider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
            breakpoint: 1601,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            },
            breakpoint: 1201,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }]
    });

    $('.workinslider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
            breakpoint: 1601,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            },
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }]
    });

    // faq
    $('.service-faqrow__header').click(function () {
        $('.service-faqrow__header').not($(this)).removeClass('open');
        $(this).toggleClass('open');


        $('.service-faqrow__body').not($(this).next('.service-faqrow__body')).slideUp('fast');
        $(this).next('.service-faqrow__body').slideToggle('fast');
    });


});