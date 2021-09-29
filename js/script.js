$('.sliderBox').slick({
            infinite: true,
            slidesToShow: 2,
            // autoplay: true,
            // autoplaySpeed: '3000',
            arrows : true,
            // dots: true,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // arrows : false
                }
            }, ]
        });



function toggleAccordion() {
    $('.accordion__name').on('click', function() {
        let currentDrop = $(this).closest('.accordion__item').find('.accordion__drop');
        $('.accordion__drop').not(currentDrop).slideUp();
        $('.accordion__toggle').not($(this)).removeClass('active');
        currentDrop.slideToggle();
        $(this).toggleClass('open');

    });
}
toggleAccordion();
function swichTabs() {
    let tabs = $('.tabs-astax'),
        tab = $('.tab-astax'),
        panel = $('.panel'),
        id;

    tab.on('click', (e) => {
        let self = e.target;
        tab.removeClass('active');
        panel.removeClass('active');
        $(self).addClass('active');
        id = $(self).data('panel');
        $(id).addClass('active');
    });
}

swichTabs();
