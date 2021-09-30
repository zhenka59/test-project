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

toggleAccordion();

function footerButton() {
    const btn = $( '.footer__button' );
    if ( isXsWidth() ) {
        btn.appendTo( '.footer__app' );
    } else {
        btn.appendTo( '.footer__action' );
    }
}
footerButton();

function mobMenu() {
    const nav = $( '.navbar' );
    if ( isXsWidth() ) {
        nav.appendTo( '.header__mobile' );
    } else {
        nav.appendTo( '.nav' );
    }
}
mobMenu();