$(function() {
    $('.info-tabs__item').on('click', function(e) {
        e.preventDefault();
        $('.info-tabs__item').removeClass('info-tabs__item--active');
        $(this).addClass('info-tabs__item--active')
        $('.info-tabs__content').removeClass('info-tabs__content--active');
        $($(this).attr('href')).addClass('info-tabs__content--active');
    })
    $('.chg-lang__ua').on('click', function() {
        $('body').removeClass('eng').addClass('ua')
    })
    $('.chg-lang__eng').on('click', function() {
        $('body').removeClass('ua').addClass('eng')
    })
})