function toggleAccordion() {
    $( '.accordion__name' ).on( 'click', function () {
        let currentDrop = $( this ).closest( '.accordion__item' ).find( '.accordion__drop' );
        $( '.accordion__drop' ).not( currentDrop ).slideUp();
        $( '.accordion__toggle' ).not( $( this ) ).removeClass( 'active' );
        currentDrop.slideToggle();
        $( this ).toggleClass( 'open' );

    } );
}
var app = {
    pageScroll: '',
    lgWidth: 1200,
    mdWidth: 992,
    smWidth: 768,
    resized: false,
    iOS: function () {
        return navigator.userAgent.match( /iPhone|iPad|iPod/i );
    },
    touchDevice: function () {
        return navigator.userAgent.match( /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i );
    }
};

function isLgWidth() {
    return $( window ).width() >= app.lgWidth;
} // >= 1200
function isMdWidth() {
    return $( window ).width() >= app.mdWidth && $( window ).width() < app.lgWidth;
} //  >= 992 && < 1200
function isSmWidth() {
    return $( window ).width() >= app.smWidth && $( window ).width() < app.mdWidth;
} // >= 768 && < 992
function isXsWidth() {
    return $( window ).width() < app.smWidth;
} // < 768
function isIOS() {
    return app.iOS();
} // for iPhone iPad iPod
function isTouch() {
    return app.touchDevice();
} // for touch device


$( document ).ready( function () {
    // Хак для клика по ссылке на iOS
    if ( isIOS() ) {
        $( function () {
            $( document ).on( 'touchend', 'a', $.noop )
        } );
    }

    // Запрет "отскока" страницы при клике по пустой ссылке с href="#"
    $( '[href="#"]' ).click( function ( event ) {
        event.preventDefault();
    } );

    // Inputmask.js
    // $('[name=tel]').inputmask("+9(999)999 99 99",{ showMaskOnHover: false });
    // formSubmit();

    checkOnResize();

} );

$( window ).resize( function () {
    var windowWidth = $( window ).width();
    // Запрещаем выполнение скриптов при смене только высоты вьюпорта (фикс для скролла в IOS и Android >=v.5)
    if ( app.resized == windowWidth ) {
        return;
    }
    app.resized = windowWidth;

    checkOnResize();
} );


function checkOnResize() {
    toggleAccordion();
    footerButton();
    mobMenu();
    initAdwantSliders();


}
checkOnResize();

function footerButton() {
    const btn = $( '.footer__button' );
    if ( isXsWidth() ) {
        btn.appendTo( '.footer__app' );
    } else {
        btn.appendTo( '.footer__action' );
    }
}

function mobMenu() {
    const nav = $( '.navbar' );
    if ( isXsWidth() ) {
        nav.appendTo( '.header__mobile' );
    } else {
        nav.appendTo( '.nav' );
    }
}

$('.close').on('click',  function() {
    $('.header__mobile').css('left', '-300px');
});

$('.burger').on('click', function() {
    $('.header__mobile').css('left', '0px');
});

$('.navbar__link').on('click', function() {
    $('.header__mobile').css('left', '-300px');
});


function initAdwantSliders() {
    const slider = $( '.advantage__slider:not(.slick-initialized)' ),
        sliderMob = $( '.advantage__slider.slick-initialized' );

    if ( isXsWidth() ) {
        slider.slick( {
            dots: true,
            arrows: false,
        } );
    } else {
        sliderMob.slick( 'destroy' );
    }

}
