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
    pagemap(document.querySelector('#map'), {
        viewport: null,
        styles: {
            'header,footer,section,article': 'rgba(0,0,0,0.08)',
            'h1,a': 'rgba(0,0,0,0.10)',
            'h2,h3,h4': 'rgba(0,0,0,0.08)'
        },
        back: 'rgba(0,0,0,0.02)',
        view: 'rgba(0,0,0,0.05)',
        drag: 'rgba(0,0,0,0.10)',
        interval: null
    });
})