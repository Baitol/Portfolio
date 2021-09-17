$(function(){
    $('.info-tabs__item').on('click', function (e) {
        e.preventDefault();
        $('.info-tabs__item').removeClass('info-tabs__item--active');
        $(this).addClass('info-tabs__item--active')

        $('.info-tabs__content').removeClass('info-tabs__content--active');
        $($(this).attr('href')).addClass('info-tabs__content--active')
    });
    $('.info-slider, .client-slider').slick({
        fade: true,
        prevArrow: `<svg class="slick-right" width="89" height="23" viewBox="0 0 89 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M88.0383 12.8543C88.6276 12.272 88.6334 11.3223 88.0511 10.733L78.5632 1.12941C77.9809 0.540091 77.0312 0.534341 76.4419 1.11657C75.8525 1.6988 75.8468 2.64853 76.429 3.23785L84.8628 11.7744L76.3263 20.2081C75.737 20.7903 75.7312 21.7401 76.3134 22.3294C76.8957 22.9187 77.8454 22.9245 78.4347 22.3422L88.0383 12.8543ZM0.747177 12.7651L86.975 13.2872L86.9931 10.2872L0.765341 9.76515L0.747177 12.7651Z" fill="black"/>
        </svg>`,
        nextArrow: `<svg class="slick-left" width="89" height="23" viewBox="0 0 89 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.19293 10.6046C0.60363 11.1869 0.597828 12.1366 1.18013 12.7259L10.668 22.3294C11.2503 22.9188 12.2 22.9245 12.7893 22.3423C13.3787 21.7601 13.3844 20.8103 12.8022 20.221L4.36843 11.6845L12.9049 3.25076C13.4942 2.66856 13.5 1.71876 12.9178 1.12946C12.3355 0.540157 11.3858 0.534357 10.7965 1.11666L1.19293 10.6046ZM88.484 10.6938L2.25623 10.1717L2.23813 13.1717L88.4659 13.6937L88.484 10.6938Z" fill="black"/>
        </svg> `
    });
});