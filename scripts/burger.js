var $burgerButton = $('.header-burger-button');

var $burgerElements = $('.header-burger-button, .header-burger-main, .header-burger');

$burgerButton.on('click', function () {
    if ($burgerElements.hasClass('open')) {
        $burgerElements.removeClass('open');
    } else {
        $burgerElements.addClass('open');
    }
});