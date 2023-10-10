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