module.exports = (function ( window, $, undefined ) {
    $( '#ping-button' ).on( 'click', function () {
        var res = window.App.ping();
        console.log( res );
        $( '#res' ).text( res );
    });

    $( '#hitokoto-button' ).on( 'click', function () {
        $.get( 'http://api.hitokoto.us/rand', function ( res ) {
            $( '#hitokoto' ).text( res['hitokoto'] );
        });
    });

    $( '#dev-button' ).on( 'click', function () {
        window.App.dev();
    });
})( window, jQuery );