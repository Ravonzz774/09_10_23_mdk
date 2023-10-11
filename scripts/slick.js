var slider = $('.slider');


function initSlider() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: "60px",
        variableWidth: true,
        dots: true,
        infinite: true,
        speed: 1000,
        appendDots: $('.slider-dots'),
        nextArrow: document.querySelector('.slider-right-arrow'),
        prevArrow: document.querySelector('.slider-left-arrow ')
    });
}

function destroySlider() {
    if (slider.hasClass('slick-initialized')) {
        slider.slick('unslick');
    }
}

$(window).on('load resize', function() {
    if ($(window).width() < 576) {
      destroySlider();
    } else {
      initSlider();
    }
  });